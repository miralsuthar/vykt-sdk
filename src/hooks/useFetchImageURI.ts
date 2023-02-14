import { useContractRead, Address } from 'wagmi';
import config from '../utils/vyktContract.json';
import makeBlockie from 'ethereum-blockies-base64';

export const useFetchImageURI = (userAddress: string) => {
  const { data, error, isLoading } = useContractRead({
    address: config.address as Address,
    abi: config.abi,
    functionName: 'getImageURIs',
    args: [userAddress],
  });

  const imageURIs = data as string[];

  if (imageURIs && imageURIs.length > 0) {
    console.log('imageURIs', imageURIs);
    return { data: imageURIs[imageURIs.length - 1] };
  } else {
    const blockiesURI = makeBlockie(userAddress);
    console.log('blockiesURI', blockiesURI);
    return { data: blockiesURI };
  }

  return { data, error, isLoading };
};
