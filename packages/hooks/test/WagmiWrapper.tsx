import { createClient, WagmiConfig } from 'wagmi';
import React from 'react';
import { getDefaultProvider } from 'ethers';

const client = createClient({
  autoConnect: true,
  provider: getDefaultProvider()
});

export function WagmiWrapper({ children }: { children?: React.ReactElement }) {
  return <WagmiConfig client={client}>{children}</WagmiConfig>;
}
