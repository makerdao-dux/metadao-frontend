import { describe, expect, it, afterAll } from 'vitest';
import { render, cleanup } from '@testing-library/react';
import LoadingPlaceholder from './LoadingPlaceholder';
import React from 'react';

describe('LoadingPlaceholder', () => {
  it('Should render something', () => {
    // See more at : https://testing-library.com/docs/react-testing-library/api/#render
    const { container } = render(<LoadingPlaceholder />);

    expect(container).toBeDefined();
  });

  afterAll(() => {
    cleanup();
  });
});
