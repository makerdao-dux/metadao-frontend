import React, { useEffect } from 'react';
import { Layout } from '../modules/layout/components/Layout';
import { Heading, Box, Text, Button } from 'theme-ui';
import { ConfigContext } from '../modules/config/context/ConfigContext';
import { RPCSetting } from '../modules/config/components/RPCSetting';
import { RPC } from '../modules/config/types/rpc';

function Config(): React.ReactElement {
  const { userConfig, updateUserConfig, siteConfig } = React.useContext(ConfigContext);

  const [localConfigState, setLocalConfigState] = React.useState(userConfig);

  useEffect(() => {
    setLocalConfigState({ ...userConfig });
  }, [userConfig, siteConfig]);

  const handleRpcChange = (rpc: RPC) => {
    const newUserConfig = {
      ...userConfig,
      rpcs: [...userConfig.rpcs.filter(i => i.chainId !== rpc.chainId), rpc]
    };
    setLocalConfigState(newUserConfig);
  };

  const handleRpcSave = () => {
    updateUserConfig(localConfigState);
  };

  return (
    <Layout>
      <Heading as="h1">Settings</Heading>

      <Heading as="h3" mt={3}>
        RPC settings
      </Heading>
      <Text>
        If no wallet is connected, a public RPC connection will be used. You can override the default value
        here. If a wallet is connected, the RPC connection configured within the wallet will be used.
      </Text>
      {siteConfig.rpcs.map(rpc => {
        const userRPC = localConfigState.rpcs.find(i => i.chainId === rpc.chainId);

        return (
          <Box key={`user-rpc-${rpc.chainId}`}>
            <RPCSetting
              chainId={rpc.chainId}
              url={userRPC ? userRPC.url : rpc.url}
              defaultRPC={rpc.url}
              handleRpcChange={url => {
                handleRpcChange({
                  chainId: rpc.chainId,
                  url
                });
              }}
            />
          </Box>
        );
      })}
      <Button
        onClick={handleRpcSave}
        disabled={JSON.stringify(localConfigState) === JSON.stringify(userConfig)}
      >
        Save RPC settings
      </Button>
    </Layout>
  );
}

export default Config;
