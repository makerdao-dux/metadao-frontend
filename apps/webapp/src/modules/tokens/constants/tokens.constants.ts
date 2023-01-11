import { chainId } from 'wagmi';
import { contracts, NetworkContractData } from '@makerdao-dux/contracts';
import { Token } from '../types/token';

type TokenMapping = {
  [key: number]: {
    [key: string]: Token;
  };
};

// Note: this is just a token definition mapping
// please, use getTokensByNetwork to fetch the tokens of a network.
export const TOKENS: TokenMapping = {
  [chainId.mainnet]: {
    dai: {
      ...(contracts[chainId.mainnet] as NetworkContractData).DAI,
      chainId: chainId.mainnet,
      name: 'DAI',
      logo: '/tokens/dai.png'
    },
    mkr: {
      ...(contracts[chainId.mainnet] as NetworkContractData).STETH,
      chainId: chainId.mainnet,
      name: 'MKR',
      logo: '/tokens/mkr.png'
    },
    stETH: {
      ...(contracts[chainId.mainnet] as NetworkContractData).STETH,
      chainId: chainId.mainnet,
      name: 'stETH',
      logo: '/tokens/steth.png'
    }
  },
  [chainId.arbitrum]: {
    dai: {
      ...(contracts[chainId.arbitrum] as NetworkContractData).DAI,
      chainId: chainId.arbitrum,
      name: 'DAI',
      logo: '/tokens/dai.png'
    },

    wstETH: {
      ...(contracts[chainId.arbitrum] as NetworkContractData).WSTETH,
      chainId: chainId.arbitrum,
      name: 'wstETH',
      logo: '/tokens/steth.png'
    }
  },
  [chainId.optimism]: {
    dai: {
      ...(contracts[chainId.optimism] as NetworkContractData).DAI,
      chainId: chainId.optimism,
      name: 'DAI',
      logo: '/tokens/dai.png'
    },
    wstETH: {
      ...(contracts[chainId.optimism] as NetworkContractData).WSTETH,
      chainId: chainId.optimism,
      name: 'wstETH',
      logo: '/tokens/steth.png'
    },
    op: {
      ...(contracts[chainId.optimism] as NetworkContractData).OP,
      chainId: chainId.optimism,
      name: 'OP',
      logo: '/tokens/op.svg'
    }
  }
};
