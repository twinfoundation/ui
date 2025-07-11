import type { Meta, StoryObj } from '@storybook/react';
import { Select } from '../select-2/select-2';

const options = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'cherry', label: 'Cherry', disabled: true },
];

const meta: Meta<typeof Select> = {
  title: 'Components/Select2',
  component: Select,
  parameters: { layout: 'centered' },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: '',
    onChange: () => {},
    options,
    label: 'Select a fruit',
    placeholder: 'Choose...',
  },
};

export const Disabled: Story = {
  args: {
    value: '',
    onChange: () => {},
    options,
    label: 'Disabled select',
    disabled: true,
  },
};

export const Error: Story = {
  args: {
    value: '',
    onChange: () => {},
    options,
    label: 'Select with error',
    errorMessage: 'This field is required',
  },
};

export const HelpText: Story = {
  args: {
    value: '',
    onChange: () => {},
    options,
    label: 'Select with help text',
    helpText: 'Pick your favorite fruit.',
  },
};

export const SizeVariants: Story = {
  render: () => (
    <>
      <Select value="" onChange={() => {}} options={options} size="sm" label="Small" />
      <Select value="" onChange={() => {}} options={options} size="md" label="Medium" />
      <Select value="" onChange={() => {}} options={options} size="lg" label="Large" />
    </>
  ),
}; 