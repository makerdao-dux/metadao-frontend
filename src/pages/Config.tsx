import React from 'react';
import { Layout } from '../modules/layout/components/Layout';
import { Heading, Input, Label, Button } from 'theme-ui';

function Config(): React.ReactElement {
  const [rpcUrl, setRpcUrl] = React.useState('');

  const updateRpcUrl = () => {
    window.localStorage.removeItem('rpcUrl');
    window.localStorage.setItem('rpcUrl', rpcUrl);
  };

  return (
    <Layout>
      <Heading>CONFIG</Heading>
      <Label>RPC URL</Label>
      <Input placeholder="Enter RPC URL" onChange={e => setRpcUrl(e.target.value)} value={rpcUrl} />
      <Button onClick={updateRpcUrl}>Update</Button>
    </Layout>
  );
}

export default Config;
