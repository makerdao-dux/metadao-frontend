import React, { Component, useEffect, useState } from 'react';
import { Layout } from '../modules/layout/components/Layout';
import Decoration from '../modules/layout/components/Decoration';
import { useAccount, useNetwork } from 'wagmi';
import { getTokensByNetworkAsList } from '../modules/tokens/helpers/getAllowedTokensByNetwork';
import TokenIcon from '../modules/tokens/component/TokenIcon';
import TokenBalance from '../modules/tokens/component/TokenBalance';

// TODO delete this Component, using temporarily to provide network info for debugging
const Balances = ({}) => {
  const network = useNetwork();
  const chainId = network.chain?.id;
  const { address } = useAccount();

  const tokens = chainId ? getTokensByNetworkAsList(chainId) : [];

  return (
    <div>
      <p>temp debug info:</p>

      {tokens.map(t => {
        return (
          <div key={`token-balance-${t.address}`}>
            <div>
              {t.name} - <TokenBalance token={t} address={address} />
            </div>
            <TokenIcon token={t} />
          </div>
        );
      })}

      {chainId}
    </div>
  );
};

function Home(): React.ReactElement {
  return (
    <div className="App">
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
            <Balances />
          </div>
        </main>
      </Layout>
    </div>
  );
}

export default Home;
