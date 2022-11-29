import { ConnectButton } from '@rainbow-me/rainbowkit';
import DaiBalance from '@/modules/dai/components/DaiBalanceDisplay';
import { Layout } from '@/modules/layout/components/Layout';
import Decoration from '@/modules/layout/components/Decoration';

export default function Home() {
  return (
    <Layout>
      <main>
        <div className="page-bg">
          <Decoration />
        </div>

        <div className="page-content">
          <div className="title">
            <h1>MetaDAO frontend</h1>
            <div className="subtitle">Your homepage to access core Maker features</div>
          </div>

          <DaiBalance />
        </div>
      </main>
      <style jsx>{`
        .page-bg {
          box-sizing: border-box;
          margin: 0px;
          min-width: 0px;
          position: absolute;
          left: calc((100% - 1882px) / 2);
          top: -200px;
          right: 0px;
          z-index: -1;
          background-color: white;
          overflow: hidden;
        }

        .title {
          text-align: center;
          margin-bottom: 60px;
          padding: 15px;
        }

        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .balances {
          margin-top: 60px;
        }
      `}</style>
    </Layout>
  );
}
