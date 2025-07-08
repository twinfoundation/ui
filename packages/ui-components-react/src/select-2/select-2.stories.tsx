import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Select } from './select-2';
import type { SelectSize, SelectState } from './select-2';

const meta: Meta<typeof Select> = {
  title: 'Components/Select2',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    state: {
      control: { type: 'select' },
      options: ['default', 'success', 'warning', 'error'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
  { value: 'option4', label: 'Option 4' },
  { value: 'option5', label: 'Option 5' },
];

const SelectTemplate: Story = {
  render: (args) => {
    const [value, setValue] = useState(args.value || '');
    return (
      <Select
        {...args}
        value={value}
        onChange={setValue}
        options={args.options || options}
      />
    );
  },
};

export const Default: Story = {
  ...SelectTemplate,
  args: {
    value: '',
    options,
    placeholder: 'Select an option',
  },
};

export const WithValue: Story = {
  ...SelectTemplate,
  args: {
    value: 'option1',
    options,
    placeholder: 'Select an option',
  },
};

export const WithLabel: Story = {
  ...SelectTemplate,
  args: {
    value: '',
    options,
    label: 'Choose an option',
    placeholder: 'Select an option',
  },
};

export const WithHelpText: Story = {
  ...SelectTemplate,
  args: {
    value: '',
    options,
    label: 'Choose an option',
    helpText: 'This is some helpful text',
    placeholder: 'Select an option',
  },
};

export const WithError: Story = {
  ...SelectTemplate,
  args: {
    value: '',
    options,
    label: 'Choose an option',
    errorMessage: 'This field is required',
    placeholder: 'Select an option',
  },
};

export const Small: Story = {
  ...SelectTemplate,
  args: {
    value: '',
    options,
    size: 'sm',
    label: 'Small select',
    placeholder: 'Select an option',
  },
};

export const Large: Story = {
  ...SelectTemplate,
  args: {
    value: '',
    options,
    size: 'lg',
    label: 'Large select',
    placeholder: 'Select an option',
  },
};

export const Success: Story = {
  ...SelectTemplate,
  args: {
    value: 'option1',
    options,
    state: 'success',
    label: 'Success select',
    placeholder: 'Select an option',
  },
};

export const Warning: Story = {
  ...SelectTemplate,
  args: {
    value: 'option1',
    options,
    state: 'warning',
    label: 'Warning select',
    placeholder: 'Select an option',
  },
};

export const Error: Story = {
  ...SelectTemplate,
  args: {
    value: 'option1',
    options,
    state: 'error',
    label: 'Error select',
    placeholder: 'Select an option',
  },
};

export const Disabled: Story = {
  ...SelectTemplate,
  args: {
    value: '',
    options,
    disabled: true,
    label: 'Disabled select',
    placeholder: 'Select an option',
  },
};

export const WithDisabledOptions: Story = {
  ...SelectTemplate,
  args: {
    value: '',
    options: [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2', disabled: true },
      { value: 'option3', label: 'Option 3' },
      { value: 'option4', label: 'Option 4', disabled: true },
      { value: 'option5', label: 'Option 5' },
    ],
    label: 'Select with disabled options',
    placeholder: 'Select an option',
  },
};

export const AllSizes: Story = {
  render: () => {
    const [values, setValues] = useState({
      sm: '',
      md: '',
      lg: '',
    });

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '300px' }}>
        <Select
          value={values.sm}
          onChange={(value) => setValues(prev => ({ ...prev, sm: value }))}
          options={options}
          size="sm"
          label="Small select"
          placeholder="Select an option"
        />
        <Select
          value={values.md}
          onChange={(value) => setValues(prev => ({ ...prev, md: value }))}
          options={options}
          size="md"
          label="Medium select"
          placeholder="Select an option"
        />
        <Select
          value={values.lg}
          onChange={(value) => setValues(prev => ({ ...prev, lg: value }))}
          options={options}
          size="lg"
          label="Large select"
          placeholder="Select an option"
        />
      </div>
    );
  },
};

export const AllStates: Story = {
  render: () => {
    const [values, setValues] = useState({
      default: '',
      success: 'option1',
      warning: 'option1',
      error: 'option1',
    });

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '300px' }}>
        <Select
          value={values.default}
          onChange={(value) => setValues(prev => ({ ...prev, default: value }))}
          options={options}
          state="default"
          label="Default state"
          placeholder="Select an option"
        />
        <Select
          value={values.success}
          onChange={(value) => setValues(prev => ({ ...prev, success: value }))}
          options={options}
          state="success"
          label="Success state"
          placeholder="Select an option"
        />
        <Select
          value={values.warning}
          onChange={(value) => setValues(prev => ({ ...prev, warning: value }))}
          options={options}
          state="warning"
          label="Warning state"
          placeholder="Select an option"
        />
        <Select
          value={values.error}
          onChange={(value) => setValues(prev => ({ ...prev, error: value }))}
          options={options}
          state="error"
          label="Error state"
          placeholder="Select an option"
        />
      </div>
    );
  },
}; 