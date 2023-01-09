import { chainId } from 'wagmi';

import DsrManagerAbi from './abis/mainnet/DSR_MANAGER.json';
import McdPotAbi from './abis/mainnet/MCD_POT.json';
import mainnetDAIAbi from './abis/mainnet/dai.json';
import mainnetMKRAbi from './abis/mainnet/mkr.json';
import mainnetstETHAbi from './abis/mainnet/stETH.json';
import optimismwstETHAbi from './abis/optimism/stETH.json';
import arbitrummwstETHAbi from './abis/arbitrumOne/stETH.json';
import optimismOPAbi from './abis/optimism/op.json';
import mainnetPipEthAbi from './abis/mainnet/PIP_ETH.json';
import mainnetPipWstethAbi from './abis/mainnet/PIP_WSTETH.json';
import mainnetPipWbtcAbi from './abis/mainnet/PIP_WBTC.json';

export const ORACLE_CONTRACTS = [
  { contractName: 'PIP_ETH', collateral: 'ETH' },
  { contractName: 'PIP_WSTETH', collateral: 'WSTETH' },
  { contractName: 'PIP_WBTC', collateral: 'BTC' }
];

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
    },
    PIP_ETH: {
      address: '0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763',
      abi: mainnetPipEthAbi
    },
    PIP_WSTETH: {
      address: '0xFe7a2aC0B945f12089aEEB6eCebf4F384D9f043F',
      abi: mainnetPipWstethAbi
    },
    PIP_WBTC: {
      address: '0xf185d0682d50819263941e5f4EacC763CC5C6C42',
      abi: mainnetPipWbtcAbi
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
    },
    PIP_ETH: {
      address: '0x94588e35fF4d2E99ffb8D5095F35d1E37d6dDf12',
      abi: mainnetPipEthAbi
    },
    PIP_WSTETH: {
      address: '0x323eac5246d5BcB33d66e260E882fC9bF4B6bf41',
      abi: mainnetPipWstethAbi
    },
    PIP_WBTC: {
      address: '0xE7de200a3a29E9049E378b52BD36701A0Ce68C3b',
      abi: mainnetPipWbtcAbi
    }
  }
};
