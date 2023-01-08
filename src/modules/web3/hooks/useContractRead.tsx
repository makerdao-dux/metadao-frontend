import { useContractRead as wagmiUseContractRead } from 'wagmi';
import { contracts } from '../../contracts';

export function useContractRead(name: string, chainId: number, functionName: string, ...args) {
  const contract = contracts[chainId][name];
  if (!contract) {
    throw new Error('Unsupported contract');
  }
  return wagmiUseContractRead({ address: contract.address, chainId, abi: contract.abi, functionName, args });
}
