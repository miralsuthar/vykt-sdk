import makeBlockie from 'ethereum-blockies-base64';
import { ethers } from 'ethers';
import { useState, useEffect } from 'react';
import config from '../utils/vyktContract.json';

export const useFetchImageURI = (address: string) => {
  const [data, setData] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function getProfile() {
    setIsLoading(true);
    const provider = new ethers.providers.JsonRpcProvider(config.rpc);
    const contract = new ethers.Contract(config.address, config.abi, provider);

    const data = await contract.getCurrentImageURI(address);

    if (data === '') {
      setData(makeBlockie(address));
      setIsLoading(false);
      return;
    }
    setData(data);
    setIsLoading(false);
  }

  useEffect(() => {
    getProfile();
  }, [address]);

  return { data, isLoading };
};
