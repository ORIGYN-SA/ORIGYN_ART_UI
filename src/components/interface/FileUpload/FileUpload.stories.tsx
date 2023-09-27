import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import FileUpload from './FileUpload';

export default {
  title: 'Components/Interface/FileUpload/All stories',
  component: FileUpload,
} as Meta;

const handleAdd = (data) => {
  console.log('File added:', data);
};

const Template: Story = (args) => (
  //@ts-ignore
  <FileUpload handleAdd={handleAdd} {...args} />
);

export const Video = Template.bind({});
Video.args = {
  disabled: false,
  fileTypes: ['video/mp4'],
  pointer: 'files-video',
};

export const Image = Template.bind({});
Image.args = {
  disabled: false,
  fileTypes: ['image/jpg'],
  pointer: 'files-image',
};

export const Document = Template.bind({});
Document.args = {
  disabled: false,
  fileTypes: ['application/pdf'],
  pointer: 'files-document',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  fileTypes: ['video/mp4', 'image/jpg'],
};
