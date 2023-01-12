import React, { useEffect, useState } from 'react';
import { Input, Label, Heading, Flex, Select } from 'theme-ui';
import { RpcStatus } from '../types/rpc';

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
  const [option, setOption] = useState(url === '' ? RpcStatus.Public : RpcStatus.Custom);

  useEffect(() => {
    setOption(url === '' ? RpcStatus.Public : RpcStatus.Custom);
  }, [url]);

  return (
    <Flex sx={{ alignItems: 'center', my: 3 }}>
      <Flex sx={{ flexDirection: 'column' }}>
        <Heading as="h4" sx={{ mb: 1 }}>
          Chain: {chainId}
        </Heading>
        <Flex>
          <Flex sx={{ flexDirection: 'column', alignItems: 'center' }}>
            <Label>RPC SETTING</Label>
            <Select
              value={option}
              onChange={() => {
                if (option === RpcStatus.Custom) {
                  handleRpcChange(defaultRPC);
                }
                setOption(option == RpcStatus.Custom ? RpcStatus.Public : RpcStatus.Custom);
              }}
              sx={{ minWidth: '225px' }}
            >
              <option value={'public'}>Public provider (default)</option>
              <option value={RpcStatus.Custom}>Custom RPC URL</option>
            </Select>
          </Flex>
          {option === RpcStatus.Custom && (
            <Flex sx={{ ml: 3 }}>
              <Flex sx={{ flexDirection: 'column', alignItems: 'center', width: '500px' }}>
                <Label>RPC URL</Label>
                <Input
                  placeholder="Enter RPC URL"
                  onChange={e => handleRpcChange(e.target.value)}
                  value={url}
                />
              </Flex>
            </Flex>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
}
