import React from 'react';
import { Layout } from '../modules/layout/components/Layout';
import { Heading, useThemeUI } from 'theme-ui';
import { TypeScale, TypeStyle, HeadingStyle, ColorPalette, FontFamily } from '@theme-ui/style-guide';
import icons from '../modules/ui/components/icons';
import Icon from '../modules/ui/components/Icon';

import {
  Message,
  NavLink,
  Divider,
  Container,
  Box,
  Button,
  Card,
  Text,
  Paragraph,
  Image,
  Slider,
  Label,
  Flex,
  Checkbox,
  Select,
  Textarea,
  Radio,
  Input,
  Link,
  Progress,
  Badge,
  Alert
} from 'theme-ui';
function Styles(): React.ReactElement {
  const { theme } = useThemeUI();

  return (
    <Layout>
      <Box sx={{ my: 3 }}>
        <Heading>Buttons</Heading>
        {Object.keys(theme.buttons || {}).map(key => (
          <Button key={`button_${key}`} variant={key} mt={3} mr={3}>
            {key}
          </Button>
        ))}
      </Box>

      <Box sx={{ my: 3 }}>
        <Heading>Colors</Heading>
        <ColorPalette omit={['modes', 'header']} />
      </Box>

      <Box sx={{ my: 3 }}>
        <Heading>Typography</Heading>
        <TypeStyle fontSize={7}>
          Body: <FontFamily name="body" />
        </TypeStyle>
        <HeadingStyle fontFamily="heading" fontWeight="heading" lineHeight="heading" fontSize={7}>
          Heading: <FontFamily name="heading" />
        </HeadingStyle>
      </Box>

      <Box sx={{ my: 3 }}>
        <Heading>Type Scale</Heading>
        <TypeScale />
      </Box>

      <Box sx={{ my: 3 }}>
        <Heading id="json">Code block</Heading>
        <Textarea
          value={JSON.stringify({ hey: 'e' }, null, 2)}
          rows={16}
          readOnly
          aria-labelledby="json"
          sx={{
            width: '100%',
            fontFamily: 'monospace',
            bg: 'muted',
            border: 0,
            borderRadius: 4,
            mt: 3
          }}
        />
      </Box>

      <Box sx={{ mt: 3 }}>
        <Heading>Forms</Heading>
        <Box as="form" pb={3} onSubmit={e => e.preventDefault()} sx={{ width: '100%', maxWidth: '500px' }}>
          <Label htmlFor="username">Username</Label>
          <Input id="username" mb={3} />
          <Label htmlFor="password">Password</Label>
          <Input type="password" id="password" mb={3} />
          <Box>
            <Label mb={3}>
              <Checkbox />
              Remember me
            </Label>
          </Box>
          <Label htmlFor="sound">Sound</Label>
          <Select id="sound" mb={3}>
            <option>Beep</option>
            <option>Boop</option>
            <option>Blip</option>
          </Select>
          <Label htmlFor="comment">Comment</Label>
          <Textarea id="comment" rows={6} mb={3} />
          <Flex mb={3}>
            <Label>
              <Radio name="letter" /> Alpha
            </Label>
            <Label>
              <Radio name="letter" /> Bravo
            </Label>
            <Label>
              <Radio name="letter" /> Charlie
            </Label>
          </Flex>
          <Button>Submit</Button>
        </Box>
      </Box>

      <Box sx={{ mt: 3 }}>
        <Heading>Links</Heading>
        <Box pb={20}>
          <Link href="#!">Hello</Link>
        </Box>
      </Box>

      <Box sx={{ mt: 3 }}>
        <Heading>Badges</Heading>
        <Flex sx={{ flexWrap: 'wrap' }}>
          {Object.keys(theme.badges || {}).map(key => (
            <Badge key={`badge_${key}`} variant={key} m={10}>
              {key}
            </Badge>
          ))}
        </Flex>
      </Box>
      <Box sx={{ mt: 3 }}>
        <Heading>Alerts</Heading>
        <Flex sx={{ flexDirection: 'column' }}>
          {Object.keys(theme.alerts || {}).map(key => (
            <Alert key={`alert_${key}`} variant={key} m={10}>
              {key}
            </Alert>
          ))}
        </Flex>
      </Box>

      <Box sx={{ mt: 3 }}>
        <Heading>Navigation</Heading>
        <Box pb={20}>
          <Flex as="nav">
            <NavLink href="#!" p={2}>
              Home
            </NavLink>
            <NavLink href="#!" p={2}>
              Blog
            </NavLink>
            <NavLink href="#!" p={2}>
              About
            </NavLink>
          </Flex>
        </Box>
      </Box>

      <Box sx={{ mt: 3 }}>
        <Heading>Table</Heading>
        <table style={{ paddingBottom: 20 }}>
          <thead>
            <tr>
              <th colSpan={2}>The table header</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>The table body</td>
              <td>with two columns</td>
            </tr>
          </tbody>
        </table>
      </Box>

      <Box sx={{ mt: 3 }}>
        <Heading>Card</Heading>
        {Object.keys(theme.cards || {}).map(key => {
          return (
            <Card
              key={`card_${key}`}
              mb={5}
              variant={key}
              sx={{
                maxWidth: 400,
                padding: '30px'
              }}
            >
              <Text>Variant: {key}</Text>
              <Paragraph>
                Cupcake ipsum dolor sit amet chocolate bar. Apple pie macaroon muffin jelly candy cake soufflé
                muffin croissant. Gummies jelly beans cotton candy fruitcake. Wafer lemon drops soufflé
                cookie. Sesame snaps fruitcake cheesecake danish toffee marzipan biscuit.
              </Paragraph>
            </Card>
          );
        })}
      </Box>
      <Box sx={{ mt: 3 }}>
        <Heading>Icons</Heading>
        {Object.keys(icons).map(icon => {
          return (
            <Box key={`icon_${icon}`}>
              <Icon name={icon} size={20} sx={{ margin: 'auto' }} />
              <Text variant="microText" sx={{ margin: 'auto' }}>
                {icon}
              </Text>
            </Box>
          );
        })}
      </Box>
    </Layout>
  );
}

export default Styles;
