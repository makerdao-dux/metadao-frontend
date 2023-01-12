import { useContractRead as wagmiUseContractRead } from 'wagmi';
import { contracts, CONTRACT_NAMES } from '@makerdao-dux/contracts';

export function useContractRead(
  name: CONTRACT_NAMES,
  chainId: number,
  functionName: string,
  ...args: string[]
) {
  const networkData = contracts[chainId];
  const contract = networkData ? networkData[name] : null;
  if (!contract) {
    throw new Error('Unsupported contract');
  }
  return wagmiUseContractRead({ address: contract.address, chainId, abi: contract.abi, functionName, args });
}
