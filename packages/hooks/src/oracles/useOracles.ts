import { useProvider, useNetwork } from 'wagmi';
import { ORACLE_CONTRACTS } from './constants/oracles.constants';
import { contracts } from '@makerdao-dux/contracts';
import { formatEther, hexDataSlice } from 'ethers/lib/utils.js';
import { BigNumber } from 'ethers';
import useSWR from 'swr';

type UseOraclesResponse = {
  isLoading: boolean;
  error: Error | null;
  data: any;
};

export function useOracles(): UseOraclesResponse {
  const provider = useProvider();
  const network = useNetwork();

  const fetchPrices = async () => {
    const chainId = network.chain?.id;
    const PRICE_STORAGE_LOCATION = 3;
    const promises = ORACLE_CONTRACTS.map(contract => {
      const networkData = contracts[chainId || 1];
      if (!networkData) {
        return null;
      }
      const contractData = networkData[contract.contractName];
      if (!contractData) {
        return null;
      }
      return provider.getStorageAt(contractData.address, PRICE_STORAGE_LOCATION);
    });

    const prices = await Promise.allSettled(promises.filter(i => !!i));

    return prices.map((price, index) => {
      // TODO what should we do if the promise is rejected?
      if (price.status === 'fulfilled') {
        return {
          token: ORACLE_CONTRACTS[index].collateral,
          price: formatEther(BigNumber.from(hexDataSlice(price.value || '0', 16)).toString())
        };
      }
    });
  };
  const { data, error } = useSWR('oracles', fetchPrices);

  return { data, error, isLoading: !error && !data };
}
