import { BigNumber } from 'ethers';
import { useContractRead } from './useContractRead';

export function useDsrTotalSupply({ network }) {
  const potChi = useContractRead({
    name: 'MCD_POT',
    network,
    functionName: 'chi'
  });

  // TODO this is not correct, just want to display something for now
  return potChi?.data ? BigNumber.from(potChi?.data?.toString()).toString() : undefined;
}
