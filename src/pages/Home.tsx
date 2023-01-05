import React, { useEffect } from 'react';
import { Layout } from '../modules/layout/components/Layout';
import { useAccount, useNetwork, useProvider } from 'wagmi';
import { getTokensByNetworkAsList } from '../modules/tokens/helpers/getAllowedTokensByNetwork';
import TokenIcon from '../modules/tokens/component/TokenIcon';
import TokenBalance from '../modules/tokens/component/TokenBalance';
import { Text, Heading } from 'theme-ui';
import { formatEther, hexDataSlice } from 'ethers/lib/utils.js';
import { BigNumber } from 'ethers';

// https://chainlog.makerdao.com/
// const ORACLE = '0xee7f0b350aa119b3d05dc733a4621a81972f7d47'; // PIP_WSTETH
const ORACLE = '0xf185d0682d50819263941e5f4EacC763CC5C6C42'; // PIP_RETH
const PRICE_STORAGE_LOCATION = 3;

// TODO delete this Component, using temporarily to provide network info for debugging
const Balances = ({}) => {
  const provider = useProvider();
  const network = useNetwork();
  const chainId = network.chain?.id;
  const { address } = useAccount();

  const tokens = chainId ? getTokensByNetworkAsList(chainId) : [];

  useEffect(() => {
    const fetchOraclePrice = async () => {
      const p = await provider.getStorageAt(ORACLE, PRICE_STORAGE_LOCATION);
      console.log('raw response', p);
      console.log('bytes32', hexDataSlice(p, 16));
      console.log('price value:', formatEther(BigNumber.from(hexDataSlice(p, 16)).toString()));
    };
    fetchOraclePrice();
  }, []);

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
    <Layout>
      <Heading>MetaDAO frontend</Heading>
      <Text as="p">Your homepage to access core Maker features</Text>
      <Balances />
    </Layout>
  );
}

export default Home;
