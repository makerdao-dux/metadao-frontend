import { useAccount as wagmiUseAccount } from 'wagmi';

export function useAccount() {
  const network = wagmiUseAccount();

  return network;
}
