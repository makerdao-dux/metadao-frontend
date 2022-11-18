import "../styles/globals.css";
import type { AppProps } from "next/app";

import { WagmiConfig } from "wagmi";
import { chains, wagmiClient } from "../modules/providers/wagmi";
import { darkTheme, RainbowKitProvider } from "@rainbow-me/rainbowkit";

import "@rainbow-me/rainbowkit/styles.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains} theme={darkTheme()}>
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
