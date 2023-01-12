import { getDefaultWallets } from '@rainbow-me/rainbowkit';
import { Chain, chain, configureChains, createClient } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';
import { RPC } from '../config/types/rpc';

export const getChainsAndProvider = (rpcs: RPC[]) => {
  return configureChains(
    [chain.mainnet, chain.goerli, chain.optimism, chain.arbitrum, chain.hardhat],
    [
      jsonRpcProvider({
        rpc: chain => {
          const rpc = rpcs.find(i => i.chainId === chain.id);

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
};

// Returned types from wagmi
type ConfigureChainsReturnType = ReturnType<typeof configureChains>;

export const getWagmiClient = (
  chains: Chain[],
  provider: ConfigureChainsReturnType['provider'],
  appName: string
) => {
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
