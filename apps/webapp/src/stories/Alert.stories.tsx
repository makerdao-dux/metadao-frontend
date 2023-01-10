import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Alert } from 'theme-ui';

export default {
  title: 'Example/Alert',
  component: Alert
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = args => <Alert {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'This is a primary alert',
  variant: 'primary'
};

export const Warning = Template.bind({});
Warning.args = {
  children: 'This is a warning alert',
  variant: 'warning'
};

export const Outline = Template.bind({});
Outline.args = {
  children: 'This is an outline alert',
  variant: 'outline'
};
