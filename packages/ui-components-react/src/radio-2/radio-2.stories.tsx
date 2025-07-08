import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Radio, RadioGroup } from './radio-2';
import type { RadioSize, RadioColor } from './radio-2';

const meta: Meta<typeof Radio> = {
  title: 'Components/Radio2',
  component: Radio,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    color: {
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
];

const RadioTemplate: Story = {
  render: (args) => {
    const [value, setValue] = useState(args.value || '');
    return (
      <Radio
        {...args}
        value={value}
        onChange={setValue}
      />
    );
  },
};

export const Default: Story = {
  ...RadioTemplate,
  args: {
    value: '',
    label: 'Default radio',
  },
};

export const Checked: Story = {
  ...RadioTemplate,
  args: {
    value: 'checked',
    label: 'Checked radio',
  },
};

export const Small: Story = {
  ...RadioTemplate,
  args: {
    value: '',
    size: 'sm',
    label: 'Small radio',
  },
};

export const Large: Story = {
  ...RadioTemplate,
  args: {
    value: '',
    size: 'lg',
    label: 'Large radio',
  },
};

export const Success: Story = {
  ...RadioTemplate,
  args: {
    value: 'checked',
    color: 'success',
    label: 'Success radio',
  },
};

export const Warning: Story = {
  ...RadioTemplate,
  args: {
    value: 'checked',
    color: 'warning',
    label: 'Warning radio',
  },
};

export const Error: Story = {
  ...RadioTemplate,
  args: {
    value: 'checked',
    color: 'error',
    label: 'Error radio',
  },
};

export const Disabled: Story = {
  ...RadioTemplate,
  args: {
    value: '',
    disabled: true,
    label: 'Disabled radio',
  },
};

export const DisabledChecked: Story = {
  ...RadioTemplate,
  args: {
    value: 'checked',
    disabled: true,
    label: 'Disabled checked radio',
  },
};

export const RadioGroupVertical: Story = {
  render: () => {
    const [value, setValue] = useState('option1');
    
    return (
      <RadioGroup
        value={value}
        onChange={setValue}
        options={options}
        name="vertical-group"
        label="Choose an option"
        description="This is a vertical radio group"
      />
    );
  },
};

export const RadioGroupHorizontal: Story = {
  render: () => {
    const [value, setValue] = useState('option1');
    
    return (
      <RadioGroup
        value={value}
        onChange={setValue}
        options={options}
        name="horizontal-group"
        label="Choose an option"
        description="This is a horizontal radio group"
        horizontal
      />
    );
  },
};

export const RadioGroupWithDisabled: Story = {
  render: () => {
    const [value, setValue] = useState('option1');
    
    const optionsWithDisabled = [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2', disabled: true },
      { value: 'option3', label: 'Option 3' },
    ];
    
    return (
      <RadioGroup
        value={value}
        onChange={setValue}
        options={optionsWithDisabled}
        name="disabled-group"
        label="Choose an option"
        description="Option 2 is disabled"
      />
    );
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
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <RadioGroup
          value={values.sm}
          onChange={(value) => setValues(prev => ({ ...prev, sm: value }))}
          options={options}
          name="small-group"
          label="Small radios"
          size="sm"
        />
        <RadioGroup
          value={values.md}
          onChange={(value) => setValues(prev => ({ ...prev, md: value }))}
          options={options}
          name="medium-group"
          label="Medium radios"
          size="md"
        />
        <RadioGroup
          value={values.lg}
          onChange={(value) => setValues(prev => ({ ...prev, lg: value }))}
          options={options}
          name="large-group"
          label="Large radios"
          size="lg"
        />
      </div>
    );
  },
};

export const AllColors: Story = {
  render: () => {
    const [values, setValues] = useState({
      default: 'option1',
      success: 'option1',
      warning: 'option1',
      error: 'option1',
    });

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <RadioGroup
          value={values.default}
          onChange={(value) => setValues(prev => ({ ...prev, default: value }))}
          options={options}
          name="default-group"
          label="Default color"
          color="default"
        />
        <RadioGroup
          value={values.success}
          onChange={(value) => setValues(prev => ({ ...prev, success: value }))}
          options={options}
          name="success-group"
          label="Success color"
          color="success"
        />
        <RadioGroup
          value={values.warning}
          onChange={(value) => setValues(prev => ({ ...prev, warning: value }))}
          options={options}
          name="warning-group"
          label="Warning color"
          color="warning"
        />
        <RadioGroup
          value={values.error}
          onChange={(value) => setValues(prev => ({ ...prev, error: value }))}
          options={options}
          name="error-group"
          label="Error color"
          color="error"
        />
      </div>
    );
  },
}; 