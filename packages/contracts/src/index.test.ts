import { describe, expect, it } from 'vitest';
import { chainId, contracts } from '.';
describe('Contracts', () => {
  it('Should export the contracts definitions', () => {
    expect(contracts[chainId.mainnet]).toBeDefined();
  });
});
