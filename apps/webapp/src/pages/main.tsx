import React, { useContext, useMemo } from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, useColorMode } from 'theme-ui';
import { theme } from '../modules/ui/theme';

import { WagmiConfig } from 'wagmi';
import { getChainsAndProvider, getWagmiClient } from '../modules/providers/wagmi';
import { darkTheme, lightTheme, RainbowKitProvider } from '@rainbow-me/rainbowkit';

import '@rainbow-me/rainbowkit/styles.css';

import { RouterProvider } from 'react-router-dom';
import { ConfigContext, ConfigProvider } from '../modules/config/context/ConfigContext';

import { router } from './router';

const App = () => {
  const { siteConfig, rpcs } = useContext(ConfigContext);

  // Chains should be regenerated each time the config.rpcs change
  const { wagmiClient, chains } = useMemo(() => {
    const { chains, provider } = getChainsAndProvider(rpcs);
    const wagmiClient = getWagmiClient(chains, provider, siteConfig.name);
    return { chains, wagmiClient };
  }, [rpcs]);

  const [mode] = useColorMode();

  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains} theme={mode === 'light' ? lightTheme() : darkTheme()}>
        <RouterProvider router={router} />
      </RainbowKitProvider>
    </WagmiConfig>
  );
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ConfigProvider>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ConfigProvider>
  </React.StrictMode>
);
