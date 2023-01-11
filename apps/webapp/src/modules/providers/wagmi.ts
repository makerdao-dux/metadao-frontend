import { getDefaultWallets } from '@rainbow-me/rainbowkit';
import { Chain, chain, configureChains, createClient } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';
import { RPC } from '../config/types/rpc';

export const getChainsAndProvider = (rpcs: RPC[]) => {
  console.log('getting chains and providers');
  return configureChains(
    [chain.mainnet, chain.goerli, chain.optimism, chain.arbitrum, chain.hardhat],
    [
      jsonRpcProvider({
        priority: 0,
        weight: 2,
        rpc: chain => {
          console.log('rpcs', rpcs);
          const rpc = rpcs.find(i => i.chainId === chain.id);

          return rpc
            ? {
                http: rpc.url
              }
            : null;
        }
      }),
      publicProvider({ priority: 10, weight: 1 })
    ]
  );
};

export const getWagmiClient = (chains: Chain[], provider, appName: string) => {
  const { connectors } = getDefaultWallets({
    appName,
    chains
  });

  const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider
  });

  return wagmiClient;
};
