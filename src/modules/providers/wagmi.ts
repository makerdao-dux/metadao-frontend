import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { chain, chainId, configureChains, createClient } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';
import config from '../config';

// Returns the RPC for the network. If it's not configured return undefined
function getRPCforChainId(id: number): string | undefined {
  switch (id) {
    case chainId.mainnet:
      return import.meta.env.RPC_PROVIDER_MAINNET;
    case chainId.goerli:
      return import.meta.env.RPC_PROVIDER_GOERLI;
    case chainId.optimism:
      return import.meta.env.RPC_PROVIDER_OPTIMISM;
    case chainId.arbitrum:
      return import.meta.env.RPC_PROVIDER_ARBITRUM;
    case chainId.hardhat:
      return 'http://localhost:8545/';
    default:
      return undefined;
  }
}

export const { chains, provider } = configureChains(
  [chain.mainnet, chain.goerli, chain.optimism, chain.arbitrum, chain.hardhat],
  [
    jsonRpcProvider({
      rpc: chain => {
        const rpc = getRPCforChainId(chain.id);

        return rpc
          ? {
              http: rpc
            }
          : null;
      }
    }),
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: config.name,
  chains
});

export const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
});
