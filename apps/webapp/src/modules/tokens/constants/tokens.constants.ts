import { chainId } from 'wagmi';
import { contracts } from '@makerdao-dux/contracts';
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
      ...(contracts[chainId.mainnet] as any).DAI,
      chainId: chainId.mainnet,
      name: 'DAI',
      logo: '/tokens/dai.png'
    },
    mkr: {
      ...(contracts[chainId.mainnet] as any).STETH,
      chainId: chainId.mainnet,
      name: 'MKR',
      logo: '/tokens/mkr.png'
    },
    stETH: {
      ...(contracts[chainId.mainnet] as any).STETH,
      chainId: chainId.mainnet,
      name: 'stETH',
      logo: '/tokens/steth.png'
    }
  },
  [chainId.arbitrum]: {
    dai: {
      ...(contracts[chainId.arbitrum] as any).DAI,
      chainId: chainId.arbitrum,
      name: 'DAI',
      logo: '/tokens/dai.png'
    },

    wstETH: {
      ...(contracts[chainId.arbitrum] as any).WSTETH,
      chainId: chainId.arbitrum,
      name: 'wstETH',
      logo: '/tokens/steth.png'
    }
  },
  [chainId.optimism]: {
    dai: {
      ...(contracts[chainId.optimism] as any).DAI,
      chainId: chainId.optimism,
      name: 'DAI',
      logo: '/tokens/dai.png'
    },
    wstETH: {
      ...(contracts[chainId.optimism] as any).WSTETH,
      chainId: chainId.optimism,
      name: 'wstETH',
      logo: '/tokens/steth.png'
    },
    op: {
      ...(contracts[chainId.optimism] as any).OP,
      chainId: chainId.optimism,
      name: 'OP',
      logo: '/tokens/op.svg'
    }
  }
};
