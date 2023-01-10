import { chainId } from 'wagmi';

// mainnet
import mainnetDsrManagerAbi from './abis/mainnet/DSR_MANAGER.json';
import mainnetMcdPotAbi from './abis/mainnet/MCD_POT.json';
import mainnetDAIAbi from './abis/mainnet/dai.json';
import mainnetMKRAbi from './abis/mainnet/mkr.json';
import mainnetstETHAbi from './abis/mainnet/stETH.json';
import mainnetPipEthAbi from './abis/mainnet/PIP_ETH.json';
import mainnetPipWstethAbi from './abis/mainnet/PIP_WSTETH.json';
import mainnetPipWbtcAbi from './abis/mainnet/PIP_WBTC.json';
import mainnetPipLinkAbi from './abis/mainnet/PIP_LINK.json';
import mainnetPipManaAbi from './abis/mainnet/PIP_MANA.json';
import mainnetPipMaticAbi from './abis/mainnet/PIP_MATIC.json';
import mainnetPipRethAbi from './abis/mainnet/PIP_RETH.json';
import mainnetPipYfiAbi from './abis/mainnet/PIP_YFI.json';

// goerli
import goerliDsrManagerAbi from './abis/goerli/DSR_MANAGER.json';
import goerliMcdPotAbi from './abis/goerli/MCD_POT.json';
import goerliDAIAbi from './abis/goerli/dai.json';
import goerliMKRAbi from './abis/goerli/mkr.json';
import goerlistETHAbi from './abis/goerli/stETH.json';
import goerliPipEthAbi from './abis/goerli/PIP_ETH.json';
import goerliPipWstethAbi from './abis/goerli/PIP_WSTETH.json';
import goerliPipWbtcAbi from './abis/goerli/PIP_WBTC.json';
import goerliPipLinkAbi from './abis/goerli/PIP_LINK.json';
import goerliPipManaAbi from './abis/goerli/PIP_MANA.json';
import goerliPipMaticAbi from './abis/goerli/PIP_MATIC.json';
import goerliPipRethAbi from './abis/goerli/PIP_RETH.json';
import goerliPipYfiAbi from './abis/goerli/PIP_YFI.json';

// optimism
import optimismwstETHAbi from './abis/optimism/stETH.json';
import optimismOPAbi from './abis/optimism/op.json';

// arbitrum
import arbitrummwstETHAbi from './abis/arbitrumOne/stETH.json';

export const ORACLE_CONTRACTS = [
  { contractName: 'PIP_ETH', collateral: 'ETH' },
  { contractName: 'PIP_WSTETH', collateral: 'WSTETH' },
  { contractName: 'PIP_WBTC', collateral: 'BTC' },
  { contractName: 'PIP_LINK', collateral: 'LINK' },
  { contractName: 'PIP_MANA', collateral: 'MANA' },
  { contractName: 'PIP_MATIC', collateral: 'MATIC' },
  { contractName: 'PIP_RETH', collateral: 'RETH' },
  { contractName: 'PIP_YFI', collateral: 'YFI' }
];

export const contracts = {
  [chainId.mainnet]: {
    MCD_POT: {
      address: '0x197E90f9FAD81970bA7976f33CbD77088E5D7cf7',
      abi: mainnetMcdPotAbi
    },
    DSR_MANAGER: {
      address: '0x373238337Bfe1146fb49989fc222523f83081dDb',
      abi: mainnetDsrManagerAbi
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
    },
    PIP_LINK: {
      address: '0x9B0C694C6939b5EA9584e9b61C7815E8d97D9cC7',
      abi: mainnetPipLinkAbi
    },
    PIP_MANA: {
      address: '0x8067259EA630601f319FccE477977E55C6078C13',
      abi: mainnetPipManaAbi
    },
    PIP_MATIC: {
      address: '0x8874964279302e6d4e523Fb1789981C39a1034Ba',
      abi: mainnetPipMaticAbi
    },
    PIP_RETH: {
      address: '0xeE7F0b350aA119b3d05DC733a4621a81972f7D47',
      abi: mainnetPipRethAbi
    },
    PIP_YFI: {
      address: '0x5F122465bCf86F45922036970Be6DD7F58820214',
      abi: mainnetPipYfiAbi
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
      abi: goerliMcdPotAbi
    },
    DSR_MANAGER: {
      address: '0xF7F0de3744C82825D77EdA8ce78f07A916fB6bE7',
      abi: goerliDsrManagerAbi
    },
    DAI: {
      address: '0x11fE4B6AE13d2a6055C8D9cF65c55bac32B5d844',
      abi: goerliDAIAbi
    },
    MKR: {
      address: '0xc5E4eaB513A7CD12b2335e8a0D57273e13D499f7',
      abi: goerliMKRAbi
    },
    STETH: {
      address: '0x1643E812aE58766192Cf7D2Cf9567dF2C37e9B7F',
      abi: goerlistETHAbi
    },
    PIP_ETH: {
      address: '0x94588e35fF4d2E99ffb8D5095F35d1E37d6dDf12',
      abi: goerliPipEthAbi
    },
    PIP_WSTETH: {
      address: '0x323eac5246d5BcB33d66e260E882fC9bF4B6bf41',
      abi: goerliPipWstethAbi
    },
    PIP_WBTC: {
      address: '0xE7de200a3a29E9049E378b52BD36701A0Ce68C3b',
      abi: goerliPipWbtcAbi
    },
    PIP_LINK: {
      address: '0x75B4e743772D25a7998F4230cb016ddCF2c52629',
      abi: goerliPipLinkAbi
    },
    PIP_MANA: {
      address: '0x001eDD66a5Cc9268159Cf24F3dC0AdcE456AAAAb',
      abi: goerliPipManaAbi
    },
    PIP_MATIC: {
      address: '0xDe112F61b823e776B3439f2F39AfF41f57993045',
      abi: goerliPipMaticAbi
    },
    PIP_RETH: {
      address: '0x27a25935D8b0006A97E11cAdDc2b3bf3a6721c13',
      abi: goerliPipRethAbi
    },
    PIP_YFI: {
      address: '0xAafF0066D05cEe0D6a38b4dac77e73d9E0a5Cf46',
      abi: goerliPipYfiAbi
    }
  }
};
