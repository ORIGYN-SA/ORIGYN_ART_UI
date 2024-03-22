import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import Grid from '../../../layout/Grid';
import SearchInput, { SearchInputProps } from './SearchInput';

export default {
  title: 'Components/Interface/Inputs/SearchInput',
  component: SearchInput,
} as Meta;

const Template: Story<SearchInputProps> = (args) => (
  <Grid gap={20} columns={5}>
    <SearchInput {...args} />
  </Grid>
);

export const Default = Template.bind({});
Default.args = { name: 'input', label: 'Search...' };

export const medium = Template.bind({});
medium.args = { name: 'input', label: 'Search...', inputSize: 'medium' };

export const small = Template.bind({});
small.args = { name: 'input', label: 'Search...', inputSize: 'small' };
