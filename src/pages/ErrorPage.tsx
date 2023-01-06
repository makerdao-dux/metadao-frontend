import React from 'react';
import { Layout } from '../modules/layout/components/Layout';
import { Box, Card, Flex, Heading, Paragraph, Text } from 'theme-ui';
import { Link } from 'react-router-dom';

function ErrorPage(): React.ReactElement {
  return (
    <Layout>
      <Box
        sx={{
          textAlign: 'center',
          my: 6
        }}
      >
        <Heading>404 - Page not found</Heading>

        <Text
          as="p"
          sx={{
            m: 3
          }}
        >
          Don't find what you where looking for? Go back to our <Link to="/">Homepage</Link>
        </Text>
      </Box>
    </Layout>
  );
}

export default ErrorPage;
