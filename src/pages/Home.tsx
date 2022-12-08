import React, { Component, useEffect, useState } from 'react';
import { Layout } from '../modules/layout/components/Layout';
import Decoration from '../modules/layout/components/Decoration';
import { fetchBalance } from '@wagmi/core';
import { useNetwork } from 'wagmi';

// TODO delete this Component, using temporarily to provide network info for debugging
const Balances = ({}) => {
  const dai = '0x6b175474e89094c44da98b954eedeac495271d0f';
  const mkr = '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2';
  const [ethBal, setEthBal] = useState('');
  const [mkrBal, setMkrBal] = useState('');
  const [daiBal, setDaiBal] = useState('');
  const network = useNetwork();
  const chainId = network.chain?.id;

  useEffect(() => {
    const getBal = async () => {
      const balance = await fetchBalance({
        address: '0x2506ead42c8c712BfA82481877D12748489612c8'
      });
      console.log('thebal', balance);
      setEthBal(balance.formatted);
    };
    getBal();
  }, [chainId]);

  useEffect(() => {
    const getBal = async () => {
      const balMkr = await fetchBalance({
        address: '0x2506ead42c8c712BfA82481877D12748489612c8',
        token: mkr
      });
      console.log('theMKRbal', balMkr);
      setMkrBal(balMkr.formatted);
    };
    getBal();
  }, [chainId]);

  useEffect(() => {
    const getBal = async () => {
      const balMkr = await fetchBalance({
        address: '0x2506ead42c8c712BfA82481877D12748489612c8',
        token: dai
      });
      console.log('theMKRbal', balMkr);
      setDaiBal(balMkr.formatted);
    };
    getBal();
  }, [chainId]);

  return (
    <div>
      <p>temp debug info:</p>
      <p>ETH balance: {ethBal} </p>
      <p>MKR balance: {mkrBal} </p>
      <p>DAI balance: {daiBal} </p>
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
