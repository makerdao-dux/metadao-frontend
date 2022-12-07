import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Home';
import './index.css';

import { WagmiConfig } from 'wagmi';
import { chains, wagmiClient } from '../modules/providers/wagmi';
import { darkTheme, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import config from '../modules/config';

import '@rainbow-me/rainbowkit/styles.css';

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Home from './Home';
import Vaults from './Vaults';
import Delegates from './Delegates';
import Farms from './Farms';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    //errorElement: <ErrorPage />,
  },
  {
    path: "/vaults",
    element: <Vaults />,
    //errorElement: <ErrorPage />,
  },
  {
    path: "/delegates",
    element: <Delegates />,
    //errorElement: <ErrorPage />,
  },
  {
    path: "/farms",
    element: <Farms />,
    //errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains} theme={darkTheme()}>
        <RouterProvider router={router} />
      </RainbowKitProvider>
    </WagmiConfig>
  </React.StrictMode>
);
