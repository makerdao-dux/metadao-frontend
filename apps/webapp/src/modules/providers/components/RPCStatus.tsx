import React from 'react';
import { Box, NavLink, Text, Flex } from 'theme-ui';
import { useProvider } from 'wagmi';
import { FallbackProvider } from '@ethersproject/providers';

type RpcStatus = 'Public RPC' | 'No RPC connection' | 'Custom RPC';

export function RPCStatus() {
  const provider = useProvider();

  const [rpcStatus, setRpcStatus] = React.useState<RpcStatus>('No RPC connection');

  React.useEffect(() => {
    if (provider) {
      if (provider instanceof FallbackProvider) {
        setRpcStatus('Custom RPC');
      } else {
        setRpcStatus('Public RPC');
      }
    } else {
      setRpcStatus('No RPC connection');
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
              backgroundColor: rpcStatus === 'No RPC connection' ? 'red' : 'primary',
              borderRadius: '50%'
            }}
          ></Box>
        </Flex>
      </NavLink>
    </Box>
  );
}
