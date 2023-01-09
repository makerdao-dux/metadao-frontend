import React, { useContext } from 'react';
import { ConfigContext } from '../../config/context/ConfigContext';
import { Box, Text } from 'theme-ui';

export function Footer(): React.ReactElement {
  const { siteConfig } = useContext(ConfigContext);
  return (
    <Box>
      <Box my={5}>
        <Text
          as="p"
          sx={{
            textAlign: 'center'
          }}
        >
          {new Date().getFullYear()} - {siteConfig.name}
        </Text>
      </Box>
    </Box>
  );
}
