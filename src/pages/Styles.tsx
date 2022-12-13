import React from 'react';
import { Layout } from '../modules/layout/components/Layout';
import { Heading, Button, Flex, Box, Text } from 'theme-ui';

function Styles(): React.ReactElement {
  return (
    <Layout>
      <Box>
        <Heading>Colors</Heading>
        <Flex sx={{ mt: 3 }}>
          <Box sx={{ bg: 'text', height: 30, width: 90, mr: 3 }} />
          <Text>text</Text>
        </Flex>
        <Flex sx={{ mt: 3 }}>
          <Box sx={{ bg: 'background', height: 30, width: 90, mr: 3 }} />
          <Text>background</Text>
        </Flex>
        <Flex sx={{ mt: 3 }}>
          <Box sx={{ bg: 'primary', height: 30, width: 90, mr: 3 }} />
          <Text>primary</Text>
        </Flex>
        <Flex sx={{ mt: 3 }}>
          <Box sx={{ bg: 'primaryEmphasis', height: 30, width: 90, mr: 3 }} />
          <Text>primaryEmphasis</Text>
        </Flex>
        <Flex sx={{ mt: 3 }}>
          <Box sx={{ bg: 'secondary', height: 30, width: 90, mr: 3 }} />
          <Text>secondary</Text>
        </Flex>
        <Flex sx={{ mt: 3 }}>
          <Box sx={{ bg: 'secondaryEmphasis', height: 30, width: 90, mr: 3 }} />
          <Text>secondaryEmphasis</Text>
        </Flex>
        <Flex sx={{ mt: 3 }}>
          <Box sx={{ bg: 'accent', height: 30, width: 90, mr: 3 }} />
          <Text>accent</Text>
        </Flex>
        <Flex sx={{ mt: 3 }}>
          <Box sx={{ bg: 'highlight', height: 30, width: 90, mr: 3 }} />
          <Text>highlight</Text>
        </Flex>
      </Box>
      {/* TODO make these a cards component */}
      <Box sx={{ mt: 3 }}>
        <Heading>Buttons</Heading>
        <Flex sx={{ mt: 3 }}>
          <Button>Primary</Button>
        </Flex>
        <Flex sx={{ mt: 3 }}>
          <Button variant="secondary">Secondary</Button>
        </Flex>
        <Flex sx={{ mt: 3 }}>
          <Button variant="outline">Outline</Button>
        </Flex>
      </Box>
    </Layout>
  );
}

export default Styles;
