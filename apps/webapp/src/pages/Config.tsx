import React from 'react';
import { Layout } from '../modules/layout/components/Layout';
import { Heading, Box, Text } from 'theme-ui';
import { ConfigContext } from '../modules/config/context/ConfigContext';
import { RPCSetting } from '../modules/config/components/RPCSetting';
import { useAccount, useProvider } from 'wagmi';

function Config(): React.ReactElement {
  const { userConfig, updateRPC, siteConfig } = React.useContext(ConfigContext);

  const provider = useProvider();
  const account = useAccount();

  console.log({ provider, account, userConfig });

  return (
    <Layout>
      <Heading as="h1">Settings</Heading>

      <Heading as="h3">RPC settings</Heading>
      <Text>
        If no wallet is connected, a public RPC connection will be used. You can override the default value
        here. If a wallet is connected, the RPC connection configured within the wallet will be used.
      </Text>
      {siteConfig.rpcs.map(rpc => {
        const userRPC = userConfig.rpcs.find(i => i.chainId === rpc.chainId);

        return (
          <Box key={`user-rpc-${rpc.chainId}`}>
            <RPCSetting
              chainId={rpc.chainId}
              url={userRPC ? userRPC.url : rpc.url}
              defaultRPC={rpc.url}
              onChange={(url: string) => {
                console.log('onChange called');
                updateRPC({
                  chainId: rpc.chainId,
                  url
                });
              }}
            />
          </Box>
        );
      })}
    </Layout>
  );
}

export default Config;
