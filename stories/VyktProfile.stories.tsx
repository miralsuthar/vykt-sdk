import React from 'react';
import { Meta, Story } from '@storybook/react';
import { VyktProfile } from '../src';

const meta: Meta = {
  title: 'Welcome',
  component: VyktProfile,
};

export default meta;

const Template = args => <VyktProfile {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
  size: 'md',
  type: 'circle',
};
