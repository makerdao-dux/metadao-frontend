import { ConnectButton } from "@rainbow-me/rainbowkit";
import Head from "next/head";
import config from "../modules/config";

export default function Home() {
  return (
    <div>
      <Head>
        <title>{config.name}</title>
        <meta name="description" content={config.description} />
        <link rel="icon" href={config.favicon} />
      </Head>

      <main>
        <h1>Welcome to Maker</h1>

        <ConnectButton />
      </main>

      <footer>
        <span>Maker 2022</span>
      </footer>
    </div>
  );
}
