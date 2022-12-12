import React from 'react';
import { Layout } from '../modules/layout/components/Layout';
import { Heading, Input, Label, Button } from 'theme-ui';
import { ConfigContext } from '../modules/config/ConfigContext';

function Config(): React.ReactElement {
  const { rpcUrl, setRpcUrl, saveRpcUrl } = React.useContext(ConfigContext);

  return (
    <Layout>
      <Heading>CONFIG</Heading>
      <Label>RPC URL</Label>
      <Input placeholder="Enter RPC URL" onChange={e => setRpcUrl(e.target.value)} value={rpcUrl} />
      <Button onClick={() => saveRpcUrl(rpcUrl || '')}>Update RPC URL</Button>
    </Layout>
  );
}

export default Config;
