import React from 'react';
import { Layout } from '../modules/layout/components/Layout';
import { Heading, Box } from 'theme-ui';
import { ConfigContext } from '../modules/config/context/ConfigContext';
import { RPCEdition } from '../modules/config/components/RPCEdition';

function Config(): React.ReactElement {
  const { userConfig, updateRPC, siteConfig } = React.useContext(ConfigContext);

  return (
    <Layout>
      <Heading>Settings</Heading>
      
      {siteConfig.rpcs.map(rpc => {
        const userRPC = userConfig.rpcs.find(i => i.chainId === rpc.chainId);

        return (
          <Box key={`user-rpc-${rpc.chainId}`}>
            <RPCEdition
              chainId={rpc.chainId}
              url={userRPC ? userRPC.url : rpc.url}
              defaultRPC={rpc.url}
              onChange={(url: string) => {
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
