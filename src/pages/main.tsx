import React, { useContext } from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'theme-ui';
import { theme } from '../modules/ui/theme';

import { WagmiConfig } from 'wagmi';
import { getWagmiClient } from '../modules/providers/wagmi';
import { darkTheme, lightTheme, RainbowKitProvider } from '@rainbow-me/rainbowkit';

import '@rainbow-me/rainbowkit/styles.css';

import { RouterProvider } from 'react-router-dom';
import { ConfigContext, ConfigProvider } from '../modules/config/context/ConfigContext';

import { router } from './router';

const App = () => {
  const { siteConfig, userConfig, getRPCForChainId } = useContext(ConfigContext);

  // Chains should be regenerated each time the config.rpcs change
  const { chains, wagmiClient } = getWagmiClient(getRPCForChainId, siteConfig.name);

  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains} theme={userConfig.theme === 'light' ? lightTheme() : darkTheme()}>
        <ThemeProvider theme={theme}>
          <RouterProvider router={router} />
        </ThemeProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ConfigProvider>
      <App />
    </ConfigProvider>
  </React.StrictMode>
);
