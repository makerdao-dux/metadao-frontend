import { ConnectButton } from '@rainbow-me/rainbowkit';
import DaiBalance from '@/modules/dai/components/DaiBalanceDisplay';
import { Layout } from '@/modules/layout/components/Layout';

export default function Home() {
  return (
    <Layout>
      <main>
        <h1>Welcome to Maker</h1>

        <ConnectButton />

        <DaiBalance />
      </main>
    </Layout>
  );
}
