import type { Meta, StoryObj } from '@storybook/react';
import { FileInput } from '../fileInput-2';

const meta: Meta<typeof FileInput> = {
  title: 'Components/FileInput2',
  component: FileInput,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    helperText: 'Upload your file here',
  },
};

export const Small: Story = {
  args: {
    sizing: 'sm',
    helperText: 'Small file input',
  },
};

export const Large: Story = {
  args: {
    sizing: 'lg',
    helperText: 'Large file input',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    helperText: 'This input is disabled',
  },
};

export const Required: Story = {
  args: {
    required: true,
    helperText: 'This input is required',
  },
}; 