import React from 'react';
import { useProvider, useNetwork } from 'wagmi';
import { Layout } from '../modules/layout/components/Layout';
import { Heading, Box, Text } from 'theme-ui';
import { formatEther, hexDataSlice } from 'ethers/lib/utils.js';
import { BigNumber } from 'ethers';
import { ORACLE_CONTRACTS } from '../modules/contracts';
import { contracts } from '../modules/contracts';
import useSWR from 'swr';

function Oracles(): React.ReactElement {
  // TODO move to hooks package
  function useOracles() {
    const provider = useProvider();
    const network = useNetwork();

    const fetchPrices = async () => {
      const chainId = network.chain?.id;
      const PRICE_STORAGE_LOCATION = 3;
      const promises = ORACLE_CONTRACTS.map(contract => {
        const contractData = contracts[chainId || 1][contract.contractName];
        return provider.getStorageAt(contractData.address, PRICE_STORAGE_LOCATION);
      });

      const prices = await Promise.allSettled(promises);

      return prices.map((price, index) => {
        // TODO what should we do if the promise is rejected?
        if (price.status === 'fulfilled') {
          return {
            token: ORACLE_CONTRACTS[index].collateral,
            price: formatEther(BigNumber.from(hexDataSlice(price.value, 16)).toString())
          };
        }
      });
    };
    const { data, error } = useSWR('oracles', fetchPrices);

    return { data, error, isLoading: !error && !data };
  }

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
