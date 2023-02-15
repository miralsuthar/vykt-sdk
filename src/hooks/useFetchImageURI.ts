import { useContractRead, Address } from 'wagmi';
import config from '../utils/vyktContract.json';
import makeBlockie from 'ethereum-blockies-base64';

export const useFetchImageURI = (userAddress: string) => {
  const { data, refetch } = useContractRead({
    address: config.address as Address,
    abi: config.abi,
    functionName: 'getCurrentImageURI',
    args: [userAddress],
  });

  if (data === '') {
    return { data: makeBlockie(userAddress), refetch };
  } else {
    return { data, refetch };
  }
};
