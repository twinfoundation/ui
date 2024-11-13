import type { Meta, StoryObj } from '@storybook/react';
import SearchInput from './SearchInput';

const meta = {
  title: 'Components/SearchInput',
  component: SearchInput,
  argTypes: {
    placeholder: { control: 'text' },
    borderColor: { control: 'color', description: 'The color of the bottom border' },
    errorMessage: { control: 'text', description: 'The error message to display' },
    onClear: { action: 'cleared' },
  },
  args: {
    placeholder: 'Search...',
  },
} satisfies Meta<typeof SearchInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    borderColor: 'border-gray-300',
  },
};

export const WithCustomBorderColor: Story = {
  args: {
    borderColor: 'border-blue-500',
  },
};

export const WithErrorMessage: Story = {
  args: {
    borderColor: 'border-gray-300',
    errorMessage: 'Please enter a valid search query',
  },
};

export const ActiveWithText: Story = {
  args: {
    placeholder: 'Search for items...',
    borderColor: 'border-gray-400',
    errorMessage: '',
  },
};
