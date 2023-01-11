import React, { useEffect, useState } from 'react';
import { Input, Label, Button, Heading, Box, Flex, Select } from 'theme-ui';

export function RPCSetting({
  chainId,
  url,
  defaultRPC,
  onChange
}: {
  chainId: number;
  url: string;
  defaultRPC: string;
  onChange: (val: string) => void;
}): React.ReactElement {
  // TODO: Add chain name and logo.
  const [val, setVal] = useState(url);
  const [option, setOption] = useState(url === '' ? 'public' : 'custom');

  console.log({ url, defaultRPC, chainId });
  console.log(url === defaultRPC);

  useEffect(() => {
    setVal(url);
  }, [url]);

  useEffect(() => {
    if (option === 'public') {
      onChange(defaultRPC);
    }
  }, [option]);

  return (
    <Flex sx={{ alignItems: 'center', my: 3 }}>
      <Flex sx={{ flexDirection: 'column' }}>
        <Heading as="h4">Chain: {chainId}</Heading>
        <Select
          defaultValue={url === '' ? 'public' : 'custom'}
          onChange={e => {
            console.log(e);
            setOption(e.target.value);
          }}
          sx={{ maxWidth: '300px' }}
        >
          <option value={'public'}>Public provider (default)</option>
          <option value={'custom'}>Custom RPC URL</option>
        </Select>
      </Flex>
      {option === 'custom' && (
        <Flex sx={{ ml: 3 }}>
          <Flex sx={{ flexDirection: 'column', alignItems: 'center' }}>
            <Label>RPC URL</Label>
            <Input
              placeholder="Enter RPC URL"
              onChange={e => setVal(e.target.value)}
              value={val}
              sx={{ maxWidth: '300px', mr: 3 }}
            />
          </Flex>
          <Button onClick={() => onChange(val)} disabled={val === defaultRPC}>
            Update RPC URL
          </Button>
        </Flex>
      )}
    </Flex>
  );
}
