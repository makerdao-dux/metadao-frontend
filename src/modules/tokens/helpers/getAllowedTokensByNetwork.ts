import { chainId } from 'wagmi';
import { TOKENS } from '../constants/tokens.constants';
import { Token } from '../types/token';

export function getTokensByNetworkAsList(id: number): Token[] {
  const objectTokens = TOKENS[id] || {};

  const list = Object.values(objectTokens);
  return list;
}
