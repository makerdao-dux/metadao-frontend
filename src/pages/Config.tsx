import React, { useEffect } from 'react';
import { Layout } from '../modules/layout/components/Layout';
import { Heading, Input, Label, Button } from 'theme-ui';

function Config(): React.ReactElement {
  const [rpcUrl, setRpcUrl] = React.useState('');

  useEffect(() => {
    const rpcUrl = window.localStorage.getItem('rpcUrl');
    if (rpcUrl) {
      setRpcUrl(rpcUrl);
    }
  }, []);

  const updateRpcUrl = () => {
    window.localStorage.removeItem('rpcUrl');
    window.localStorage.setItem('rpcUrl', rpcUrl);
  };

  return (
    <Layout>
      <Heading>CONFIG</Heading>
      <Label>RPC URL</Label>
      <Input placeholder="Enter RPC URL" onChange={e => setRpcUrl(e.target.value)} value={rpcUrl} />
      <Button onClick={updateRpcUrl}>Update RPC URL</Button>
    </Layout>
  );
}

export default Config;
