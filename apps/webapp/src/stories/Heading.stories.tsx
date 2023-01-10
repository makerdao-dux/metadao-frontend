import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Heading } from 'theme-ui';

export default {
  title: 'Example/Heading',
  component: Heading
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = args => <Heading {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Heading'
};
