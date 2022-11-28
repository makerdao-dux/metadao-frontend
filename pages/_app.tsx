import type { AppProps } from 'next/app';

import { WagmiConfig } from 'wagmi';
import { chains, wagmiClient } from '../modules/providers/wagmi';
import { darkTheme, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import config from '../modules/config';

import '@rainbow-me/rainbowkit/styles.css';
import { DaiBalanceContextProvider } from '../modules/dai/context/DaiBalance.context';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains} theme={darkTheme()}>
        <DaiBalanceContextProvider>
          <Component {...pageProps} />
        </DaiBalanceContextProvider>
        <style jsx global>{`
          :root {
            --gap: 16pt;
            --black-background: ${config.palette.background};
            --page-background-color: ${config.palette.background};
            --primary: #1aab9b;
          }

          * {
            scroll-behavior: smooth;
          }

          body {
            margin: 0;
            padding: 0;
            color: var(--text-main-color);
            background: var(--page-background-color);
          }

          * {
            box-sizing: border-box;
          }

          img {
            max-width: 100%;
          }
        `}</style>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
