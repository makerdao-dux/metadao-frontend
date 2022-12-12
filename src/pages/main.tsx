import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'theme-ui';
import { theme } from '../modules/ui/theme';

import { WagmiConfig } from 'wagmi';
import { chains, wagmiClient } from '../modules/providers/wagmi';
import { darkTheme, RainbowKitProvider } from '@rainbow-me/rainbowkit';

import '@rainbow-me/rainbowkit/styles.css';

import { createHashRouter, RouterProvider } from 'react-router-dom';
import Home from './Home';
import Vaults from './Vaults';
import Delegates from './Delegates';
import Farms from './Farms';
import Config from './Config';
import { ConfigProvider } from '../modules/config/ConfigContext';

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
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ConfigProvider>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains} theme={darkTheme()}>
          <ThemeProvider theme={theme}>
            <RouterProvider router={router} />
          </ThemeProvider>
        </RainbowKitProvider>
      </WagmiConfig>
    </ConfigProvider>
  </React.StrictMode>
);
