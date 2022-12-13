import React, { useEffect, useState } from 'react';
import { Heading, Input, Label, Button, Text, Box } from 'theme-ui';

export function RPCEdition({
  chainId,
  url,
  defaultRPC,
  onChange
}: {
  chainId: number;
  url: string;
  defaultRPC: string,
  onChange: (val: string) => void;
}): React.ReactElement {
  // TODO: Add chain name and logo.
  const [val, setVal] = useState(url);

  useEffect(() => {
    setVal(url);
  }, [url]);

  return (
    <Box>
      <Text>Chain: {chainId}</Text>
      <Label>RPC URL</Label>
      <Input placeholder="Enter RPC URL" onChange={e => setVal(e.target.value)} value={val} />
      <Button onClick={() => onChange(val)}>Update RPC URL</Button>
      <Box>
        <Text>
          If you leave this field empty it will use the default RPC {defaultRPC ? defaultRPC: ''}
        </Text>
      </Box>
    </Box>
  );
}
