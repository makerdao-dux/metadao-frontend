import React from 'react';
import { Layout } from '../modules/layout/components/Layout';
import { Heading, Text } from 'theme-ui';

function ErrorPage(): React.ReactElement {
  return (
    <Layout>
      <Heading>Not Found</Heading>
      <Text as="h1">Where are you going?</Text>
    </Layout>
  );
}

export default ErrorPage;
