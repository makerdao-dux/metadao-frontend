// Default configuration used site-wide

import { chainId } from 'wagmi';
import { SiteConfig } from './types/site-config';

// It stores all the RPCs the application will use, and also the user configured-ones
export const defaultConfig: SiteConfig = {
  name: 'MetaDAO frontend',
  description: 'Interact with MakerDAO features',
  palette: {
    text: 'black',
    background: 'white'
  },
  logo: './images/logo.png',
  favicon: './images/logo.png',
  rpcs: [
    {
      chainId: chainId.mainnet,
      url: import.meta.env.RPC_PROVIDER_MAINNET || ''
    },
    {
      chainId: chainId.goerli,
      url: import.meta.env.RPC_PROVIDER_GOERLI || ''
    },
    {
      chainId: chainId.optimism,
      url: import.meta.env.RPC_PROVIDER_OPTIMISM || ''
    },
    {
      chainId: chainId.arbitrum,
      url: import.meta.env.RPC_PROVIDER_ARBITRUM || ''
    },
    {
      chainId: chainId.hardhat,
      url: 'http://localhost:8545/'
    }
  ],
  theme: 'light'
};
