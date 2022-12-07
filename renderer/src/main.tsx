import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'


import { WagmiConfig } from 'wagmi';
import { chains, wagmiClient } from '../modules/providers/wagmi';
import { darkTheme, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import config from '../modules/config';

import '@rainbow-me/rainbowkit/styles.css';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
     <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains} theme={darkTheme()}>
          <App/>

      </RainbowKitProvider>
    </WagmiConfig>
  </React.StrictMode>
)
