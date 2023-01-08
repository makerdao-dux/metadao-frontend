import React from 'react';
import { Layout } from '../modules/layout/components/Layout';
import { Heading, Box, Label, Text } from 'theme-ui';
import { useContractRead } from '../modules/web3/hooks/useContractRead';
import { chainId } from 'wagmi';
import LoadingPlaceholder from '../modules/ui/components/LoadingPlaceholder';
import { formatUnits } from 'ethers/lib/utils.js';
import { BigNumberish } from 'ethers';

function Dsr(): React.ReactElement {
  // const { chain } = useNetwork();
  // For now hardcode to mainnet
  const potChi = useContractRead('MCD_POT', chainId.mainnet, 'chi');

  return (
    <Layout>
      <Heading>DSR</Heading>
      <Box>
        <Label>Total DAI:</Label>
        {potChi.isLoading && <LoadingPlaceholder />}
        {!potChi.isLoading && !potChi.isError && <Text>{formatUnits(potChi.data as BigNumberish)}</Text>}
        {potChi.isError && <Text>Error loading data</Text>}
      </Box>
    </Layout>
  );
}

export default Dsr;
