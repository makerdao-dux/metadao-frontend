import React, { useEffect, useState } from 'react';
import { Input, Label, Button, Heading, Box, Flex, Select } from 'theme-ui';

export function RPCSetting({
  chainId,
  url,
  defaultRPC,
  handleRpcChange
}: {
  chainId: number;
  url: string;
  defaultRPC: string;
  handleRpcChange: (val: string) => void;
}): React.ReactElement {
  // TODO: Add chain name and logo.
  const [option, setOption] = useState(url === '' ? 'public' : 'custom');

  useEffect(() => {
    setOption(url === '' ? 'public' : 'custom');
  }, [url]);

  return (
    <Flex sx={{ alignItems: 'center', my: 3 }}>
      <Flex sx={{ flexDirection: 'column' }}>
        <Heading as="h4">Chain: {chainId}</Heading>
        <Select
          value={option}
          onChange={() => {
            if (option === 'custom') {
              handleRpcChange(defaultRPC);
            }
            setOption(option == 'custom' ? 'public' : 'custom');
          }}
          sx={{ minWidth: '225px' }}
        >
          <option value={'public'}>Public provider (default)</option>
          <option value={'custom'}>Custom RPC URL</option>
        </Select>
      </Flex>
      {option === 'custom' && (
        <Flex sx={{ ml: 3 }}>
          <Flex sx={{ flexDirection: 'column', alignItems: 'center', width: '500px' }}>
            <Label>RPC URL</Label>
            <Input placeholder="Enter RPC URL" onChange={e => handleRpcChange(e.target.value)} value={url} />
          </Flex>
        </Flex>
      )}
    </Flex>
  );
}
