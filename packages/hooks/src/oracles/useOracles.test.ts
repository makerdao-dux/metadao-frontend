import { describe, expect, it, afterAll } from 'vitest';
import { renderHook, cleanup } from '@testing-library/react';
import { WagmiWrapper } from '../../test/WagmiWrapper';
import { useOracles } from './useOracles';

describe('useOracles', () => {
  it('Should return something', () => {
    const { result } = renderHook(() => useOracles(), {
      wrapper: WagmiWrapper
    });

    expect(result.current.isLoading).toBe(true);
  });

  afterAll(() => {
    cleanup();
  });
});
