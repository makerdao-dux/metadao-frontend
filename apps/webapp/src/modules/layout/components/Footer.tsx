import React, { useContext } from 'react';
import { ConfigContext } from '../../config/context/ConfigContext';
import { Box, Text, Flex, Link } from 'theme-ui';
import { useProvider } from 'wagmi';

export function Footer(): React.ReactElement {
  const { siteConfig } = useContext(ConfigContext);
  const provider = useProvider();

  return (
    <Flex sx={{ justifyContent: 'space-between' }}>
      <Box m={3}>
        <Text
          sx={{
            textAlign: 'center'
          }}
        >
          {new Date().getFullYear()} - {siteConfig.name}
        </Text>
      </Box>
      <Box m={3}>
        <Link href="#/config" title="config">
          <Text
            sx={{
              textAlign: 'center'
            }}
          >
            RPC status: {provider ? 'connected' : 'disconnected'}
          </Text>
        </Link>
      </Box>
    </Flex>
  );
}
