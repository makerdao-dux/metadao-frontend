import React, { useContext } from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'theme-ui';
import { theme } from '../modules/ui/theme';

import { WagmiConfig } from 'wagmi';
import { getWagmiClient } from '../modules/providers/wagmi';
import { darkTheme, lightTheme, RainbowKitProvider } from '@rainbow-me/rainbowkit';

import '@rainbow-me/rainbowkit/styles.css';

import { createHashRouter, RouterProvider } from 'react-router-dom';
import Home from './Home';
import Vaults from './Vaults';
import Delegates from './Delegates';
import Farms from './Farms';
import Config from './Config';
import Styles from './Styles';
import { ConfigContext, ConfigProvider } from '../modules/config/context/ConfigContext';

const router = createHashRouter([
  {
    path: '/',
    element: <Home />
    //errorElement: <ErrorPage />,
  },
  {
    path: '/vaults',
    element: <Vaults />
    //errorElement: <ErrorPage />,
  },
  {
    path: '/delegates',
    element: <Delegates />
    //errorElement: <ErrorPage />,
  },
  {
    path: '/farms',
    element: <Farms />
    //errorElement: <ErrorPage />,
  },
  {
    path: '/config',
    element: <Config />
    //errorElement: <ErrorPage />,
  },
  {
    path: '/styles',
    element: <Styles />
    //errorElement: <ErrorPage />,
  }
]);

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
