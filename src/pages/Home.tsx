import React, { Component, useEffect, useState } from 'react';
import { Layout } from '../modules/layout/components/Layout';
import Decoration from '../modules/layout/components/Decoration';
import { fetchBalance } from '@wagmi/core';

// TODO delete this Component, using temporarily to provide network info for debugging
const Balances = () => {
  const [ethBal, setEthBal] = useState('');

  useEffect(() => {
    const getBal = async () => {
      const balance = await fetchBalance({
        address: '0x2506ead42c8c712BfA82481877D12748489612c8'
      });
      console.log('thebal', balance);
      setEthBal(balance.formatted);
    };
    getBal();
  }, [ethBal]);

  return (
    <div>
      <p>temp debug info:</p>
      <p>my bal {ethBal} </p>
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
