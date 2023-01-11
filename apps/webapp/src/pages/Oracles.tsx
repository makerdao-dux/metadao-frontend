import React from 'react';
import { Layout } from '../modules/layout/components/Layout';
import { Heading, Box, Text } from 'theme-ui';

import { useOracles } from '@makerdao-dux/hooks';

function Oracles(): React.ReactElement {
  const oracleData = useOracles();
  return (
    <Layout>
      <Heading>Oracles</Heading>
      {/* TODO let's create resusable loading and error states */}
      {oracleData.isLoading && <div>Loading...</div>}
      {oracleData.error && <div>Error</div>}
      {oracleData.data &&
        oracleData.data.map(
          oracle =>
            oracle && (
              <Box key={oracle.token}>
                <Text>
                  {oracle.token}: {oracle.price}
                </Text>
              </Box>
            )
        )}
    </Layout>
  );
}

export default Oracles;
