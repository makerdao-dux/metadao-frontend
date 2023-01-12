import React, { useContext } from 'react';
import { ConfigContext } from '../../config/context/ConfigContext';
import { Box, Text, Flex } from 'theme-ui';
import { RPCStatus } from '../../providers/components/RPCStatus';

export function Footer(): React.ReactElement {
  const { siteConfig } = useContext(ConfigContext);

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
      <RPCStatus />
    </Flex>
  );
}
