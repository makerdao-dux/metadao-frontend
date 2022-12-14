import { chainId } from 'wagmi';

import DsrManagerAbi from './abis/mainnet/DSR_MANAGER.json';
import McdPotAbi from './abis/mainnet/MCD_POT.json';
import mainnetDAIAbi from './abis/mainnet/dai.json';
import mainnetMKRAbi from './abis/mainnet/mkr.json';
import mainnetstETHAbi from './abis/mainnet/stETH.json';
import optimismwstETHAbi from './abis/optimism/stETH.json';
import arbitrummwstETHAbi from './abis/arbitrumOne/stETH.json';
import optimismOPAbi from './abis/optimism/op.json';

export const contracts = {
  [chainId.mainnet]: {
    MCD_POT: {
      address: '0x197E90f9FAD81970bA7976f33CbD77088E5D7cf7',
      abi: McdPotAbi
    },
    DSR_MANAGER: {
      address: '0x373238337Bfe1146fb49989fc222523f83081dDb',
      abi: DsrManagerAbi
    },
    DAI: {
      address: '0x6b175474e89094c44da98b954eedeac495271d0f',
      abi: mainnetDAIAbi
    },
    MKR: {
      address: '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2',
      abi: mainnetMKRAbi
    },
    STETH: {
      address: '0xdfe66b14d37c77f4e9b180ceb433d1b164f0281d',
      abi: mainnetstETHAbi
    }
  },
  [chainId.arbitrum]: {
    DAI: {
      address: '0xda10009cbd5d07dd0cecc66161fc93d7c9000da1',
      abi: mainnetDAIAbi
    },

    WSTETH: {
      address: '0x5979d7b546e38e414f7e9822514be443a4800529',
      abi: arbitrummwstETHAbi
    }
  },
  [chainId.optimism]: {
    DAI: {
      address: '0xda10009cbd5d07dd0cecc66161fc93d7c9000da1',
      abi: mainnetDAIAbi
    },

    WSTETH: {
      address: '0x1f32b1c2345538c0c6f582fcb022739c4a194ebb',
      abi: optimismwstETHAbi
    },

    OP: {
      address: '0x4200000000000000000000000000000000000042',
      abi: optimismOPAbi
    }
  },
  [chainId.goerli]: {
    MCD_POT: {
      address: '0xF7F0de3744C82825D77EdA8ce78f07A916fB6bE7',
      abi: McdPotAbi
    },
    DSR_MANAGER: {
      address: '0xF7F0de3744C82825D77EdA8ce78f07A916fB6bE7',
      abi: DsrManagerAbi
    }
  }
};
