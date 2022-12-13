import React, { useContext } from 'react';
import { ConfigContext } from '../../config/context/ConfigContext';
import { Box, Text } from 'theme-ui';

export function Footer(): React.ReactElement {
  const { siteConfig } = useContext(ConfigContext);
  return (
    <Box>
      <Box className="footer">
        <Text>
          {new Date().getFullYear()} - {siteConfig.name}
        </Text>
      </Box>
    </Box>
  );
}
