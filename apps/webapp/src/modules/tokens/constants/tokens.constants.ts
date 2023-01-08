import { chainId } from 'wagmi';
import { Token } from '../types/token';

import mainnetDAIAbi from '../abis/mainnet/dai.json';
import mainnetMKRAbi from '../abis/mainnet/mkr.json';
import mainnetstETHAbi from '../abis/mainnet/stETH.json';
import optimismwstETHAbi from '../abis/optimism/stETH.json';
import arbitrummwstETHAbi from '../abis/arbitrumOne/stETH.json';
import optimismOPAbi from '../abis/optimism/op.json';

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
      address: '0x6b175474e89094c44da98b954eedeac495271d0f',
      abi: mainnetDAIAbi,
      chainId: chainId.mainnet,
      name: 'DAI',
      logo: '/tokens/dai.png'
    },
    mkr: {
      address: '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2',
      abi: mainnetMKRAbi,
      chainId: chainId.mainnet,
      name: 'MKR',
      logo: '/tokens/mkr.png'
    },
    stETH: {
      address: '0xdfe66b14d37c77f4e9b180ceb433d1b164f0281d',
      abi: mainnetstETHAbi,
      chainId: chainId.mainnet,
      name: 'stETH',
      logo: '/tokens/steth.png'
    }
  },
  [chainId.arbitrum]: {
    dai: {
      address: '0xda10009cbd5d07dd0cecc66161fc93d7c9000da1',
      abi: mainnetDAIAbi,
      chainId: chainId.arbitrum,
      name: 'DAI',
      logo: '/tokens/dai.png'
    },

    wstETH: {
      address: '0x5979d7b546e38e414f7e9822514be443a4800529',
      abi: arbitrummwstETHAbi,
      chainId: chainId.arbitrum,
      name: 'wstETH',
      logo: '/tokens/steth.png'
    }
  },
  [chainId.optimism]: {
    dai: {
      address: '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1',
      abi: mainnetDAIAbi,
      chainId: chainId.optimism,
      name: 'DAI',
      logo: '/tokens/dai.png'
    },
    wstETH: {
      address: '0x1f32b1c2345538c0c6f582fcb022739c4a194ebb',
      abi: optimismwstETHAbi,
      chainId: chainId.optimism,
      name: 'wstETH',
      logo: '/tokens/steth.png'
    },
    op: {
      address: '0x4200000000000000000000000000000000000042',
      abi: optimismOPAbi,
      chainId: chainId.optimism,
      name: 'OP',
      logo: '/tokens/op.svg'
    }
  }
};
