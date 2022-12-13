import React from 'react';
import { Layout } from '../modules/layout/components/Layout';
import { Heading, Box, Label, Text } from 'theme-ui';
import { useNetwork } from '../modules/web3/hooks/useNetwork';
import { useDsrTotalSupply } from '../modules/web3/hooks/useDsrTotalSupply';

function Dsr(): React.ReactElement {
  const network = useNetwork();

  const totalSupply = useDsrTotalSupply({ network });

  return (
    <Layout>
      <Heading>DSR</Heading>
      <Box>
        <Label>Total DAI:</Label>
        <Text>{totalSupply}</Text>
      </Box>
    </Layout>
  );
}

export default Dsr;
