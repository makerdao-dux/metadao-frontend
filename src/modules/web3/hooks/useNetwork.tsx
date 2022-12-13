import { useNetwork as wagmiUseNetwork } from 'wagmi';

export function useNetwork() {
  const network = wagmiUseNetwork();

  return network;
}
