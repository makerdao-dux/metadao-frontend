import React from 'react';
import { Layout } from '../modules/layout/components/Layout';
import { useAccount, useNetwork } from 'wagmi';
import { getTokensByNetworkAsList } from '../modules/tokens/helpers/getAllowedTokensByNetwork';
import TokenIcon from '../modules/tokens/component/TokenIcon';
import TokenBalance from '../modules/tokens/component/TokenBalance';
import { Text, Heading } from 'theme-ui';

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
    <Layout>
      <Heading>MetaDAO frontend</Heading>
      <Text as="p">Your homepage to access core Maker features</Text>
      <Balances />
    </Layout>
  );
}

export default Home;
