import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Badge } from 'theme-ui';

export default {
  title: 'Example/Badge',
  component: Badge
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = args => <Badge {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary',
  variant: 'primary'
};

export const Warning = Template.bind({});
Warning.args = {
  children: 'Warning',
  variant: 'warning'
};

export const Outline = Template.bind({});
Outline.args = {
  children: 'Outline',
  variant: 'outline'
};
