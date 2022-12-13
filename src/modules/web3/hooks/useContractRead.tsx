import { useContractRead as wagmiUseContractRead } from 'wagmi';
import { addresses } from '../contracts/addresses';
import { abis } from '../contracts/abis';
import mcdPotAbi from '../contracts/abis/MCD_POT.json';

export function useContractRead({
  name,
  network,
  functionName,
  args
}: {
  name: string;
  network: any;
  functionName: string;
  args?: any[];
}) {
  const address = addresses[network?.chain?.network][name];
  const abi = abis[name];
  const data = wagmiUseContractRead({ address, abi, functionName, args });
  // const data = wagmiUseContractRead({
  //   address: '0xF7F0de3744C82825D77EdA8ce78f07A916fB6bE7',
  //   abi: mcdPotAbi,
  //   functionName: 'chi'
  //   // args
  // });

  return data;
}
