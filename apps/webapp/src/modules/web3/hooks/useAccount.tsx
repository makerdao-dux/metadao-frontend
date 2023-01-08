import { useAccount as wagmiUseAccount } from 'wagmi';

export function useAccount() {
  return wagmiUseAccount();
}
