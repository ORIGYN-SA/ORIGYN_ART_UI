import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import Grid from '../../../layout/Grid';
import CheckboxInput, { CheckboxInputProps } from './CheckboxInput';

export default {
  title: 'Components/Interface/Inputs/CheckboxInput/All stories',
  component: CheckboxInput,
} as Meta;

const Template: Story<CheckboxInputProps> = (args) => (
  <Grid gap={20} columns={5}>
    <CheckboxInput {...args} />
  </Grid>
);

export const noLabel = Template.bind({});
noLabel.args = { name: 'input', id: 'noLabelInput' };

export const withLabel = Template.bind({});
withLabel.args = { name: 'input', label: 'Checkbox Label' };

export const disabled = Template.bind({});
disabled.args = { name: 'input', label: 'Checkbox Label', disabled: true };

export const disabledChecked = Template.bind({});
disabledChecked.args = { name: 'input', label: 'Checkbox Label', disabled: true };

// export const radio = Template.bind({});
// radio.args = { name: "input", radio: true };

// export const radioWithLabel = Template.bind({});
// radioWithLabel.args = { name: "input", radio: true, label: "Checkbox Label" };

// export const radioDisabled = Template.bind({});
// radioDisabled.args = { name: "input", radio: true, label: "Checkbox Label", disabled: true};
