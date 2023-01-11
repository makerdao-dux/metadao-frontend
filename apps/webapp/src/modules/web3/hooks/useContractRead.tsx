import { useContractRead as wagmiUseContractRead } from 'wagmi';
import { contracts } from '@makerdao-dux/contracts';

export function useContractRead(name: string, chainId: number, functionName: string, ...args) {
  const networkData = contracts[chainId];
  const contract = networkData ? networkData[name] : null;
  if (!contract) {
    throw new Error('Unsupported contract');
  }
  return wagmiUseContractRead({ address: contract.address, chainId, abi: contract.abi, functionName, args });
}
