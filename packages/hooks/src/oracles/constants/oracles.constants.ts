import { Oracle } from '../types/oracle';
import { CONTRACT_NAMES } from '@makerdao-dux/contracts';

export const ORACLE_CONTRACTS: Oracle[] = [
  { contractName: CONTRACT_NAMES.PIP_ETH, collateral: 'ETH' },
  { contractName: CONTRACT_NAMES.PIP_WSTETH, collateral: 'WSTETH' },
  { contractName: CONTRACT_NAMES.PIP_WBTC, collateral: 'BTC' },
  { contractName: CONTRACT_NAMES.PIP_LINK, collateral: 'LINK' },
  { contractName: CONTRACT_NAMES.PIP_MANA, collateral: 'MANA' },
  { contractName: CONTRACT_NAMES.PIP_MATIC, collateral: 'MATIC' },
  { contractName: CONTRACT_NAMES.PIP_RETH, collateral: 'RETH' },
  { contractName: CONTRACT_NAMES.PIP_YFI, collateral: 'YFI' }
];
