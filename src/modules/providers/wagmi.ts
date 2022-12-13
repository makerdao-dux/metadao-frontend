import { getDefaultWallets } from '@rainbow-me/rainbowkit';
import { chain, configureChains, createClient } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';
import { RPC } from '../config/types/rpc';

export const getWagmiClient = (getRPCByChainId: (id: number) => RPC | undefined, appName: string) => {
  const { chains, provider } = configureChains(
    [chain.mainnet, chain.goerli, chain.optimism, chain.arbitrum, chain.hardhat],
    [
      jsonRpcProvider({
        rpc: chain => {
          const rpc = getRPCByChainId(chain.id);

          return rpc
            ? {
                http: rpc.url
              }
            : null;
        }
      }),
      publicProvider()
    ]
  );

  const { connectors } = getDefaultWallets({
    appName,
    chains
  });

  const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider
  });

  return {
    chains,
    wagmiClient
  };
};
