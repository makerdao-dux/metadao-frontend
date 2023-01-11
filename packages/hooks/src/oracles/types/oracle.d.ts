import { CONTRACT_NAMES } from '@makerdao-dux/contracts';
export type Oracle = {
  contractName: CONTRACT_NAMES;
  collateral: string;
  price?: string;
};
