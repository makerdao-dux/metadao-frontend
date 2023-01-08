import { useNetwork as wagmiUseNetwork } from 'wagmi';

export function useNetwork() {
  return wagmiUseNetwork();
}
