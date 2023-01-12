import React from 'react';
import { Box, NavLink, Text, Flex } from 'theme-ui';
import { useProvider } from 'wagmi';
import { FallbackProvider } from '@ethersproject/providers';
import { RpcStatus } from '../../config/types/rpc';

export function RPCStatus() {
  const provider = useProvider();

  const [rpcStatus, setRpcStatus] = React.useState<RpcStatus>(RpcStatus.NoConnection);

  React.useEffect(() => {
    if (provider) {
      if (provider instanceof FallbackProvider) {
        setRpcStatus(RpcStatus.Custom);
      } else {
        setRpcStatus(RpcStatus.Public);
      }
    } else {
      setRpcStatus(RpcStatus.NoConnection);
    }
  }, [provider]);

  return (
    <Box sx={{ m: 3 }}>
      <NavLink href="#/config" title="config">
        <Flex sx={{ alignItems: 'center' }}>
          <Text
            sx={{
              textAlign: 'center',
              fontSize: 2
            }}
          >
            {rpcStatus}
          </Text>
          <Box
            sx={{
              ml: 2,
              width: '16px',
              height: '16px',
              // TODO add better colors?
              backgroundColor: rpcStatus === RpcStatus.NoConnection ? 'red' : 'primary',
              borderRadius: '50%'
            }}
          ></Box>
        </Flex>
      </NavLink>
    </Box>
  );
}
