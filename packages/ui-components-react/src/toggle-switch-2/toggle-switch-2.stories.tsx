import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { ToggleSwitch } from './toggle-switch-2';
import type { ToggleSize, ToggleColor } from './toggle-switch-2';

const meta: Meta<typeof ToggleSwitch> = {
  title: 'Components/ToggleSwitch2',
  component: ToggleSwitch,
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

const ToggleSwitchTemplate: Story = {
  render: (args) => {
    const [checked, setChecked] = useState(args.checked || false);
    return (
      <ToggleSwitch
        {...args}
        checked={checked}
        onChange={setChecked}
      />
    );
  },
};

export const Default: Story = {
  ...ToggleSwitchTemplate,
  args: {
    checked: false,
  },
};

export const Checked: Story = {
  ...ToggleSwitchTemplate,
  args: {
    checked: true,
  },
};

export const WithLabel: Story = {
  ...ToggleSwitchTemplate,
  args: {
    checked: false,
    label: 'Enable notifications',
  },
};

export const Small: Story = {
  ...ToggleSwitchTemplate,
  args: {
    checked: false,
    size: 'sm',
    label: 'Small toggle',
  },
};

export const Large: Story = {
  ...ToggleSwitchTemplate,
  args: {
    checked: false,
    size: 'lg',
    label: 'Large toggle',
  },
};

export const Success: Story = {
  ...ToggleSwitchTemplate,
  args: {
    checked: true,
    color: 'success',
    label: 'Success toggle',
  },
};

export const Warning: Story = {
  ...ToggleSwitchTemplate,
  args: {
    checked: true,
    color: 'warning',
    label: 'Warning toggle',
  },
};

export const Error: Story = {
  ...ToggleSwitchTemplate,
  args: {
    checked: true,
    color: 'error',
    label: 'Error toggle',
  },
};

export const Disabled: Story = {
  ...ToggleSwitchTemplate,
  args: {
    checked: false,
    disabled: true,
    label: 'Disabled toggle',
  },
};

export const DisabledChecked: Story = {
  ...ToggleSwitchTemplate,
  args: {
    checked: true,
    disabled: true,
    label: 'Disabled checked toggle',
  },
};

export const AllSizes: Story = {
  render: () => {
    const [states, setStates] = useState({
      sm: false,
      md: false,
      lg: false,
    });

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <ToggleSwitch
          checked={states.sm}
          onChange={(checked) => setStates(prev => ({ ...prev, sm: checked }))}
          size="sm"
          label="Small toggle"
        />
        <ToggleSwitch
          checked={states.md}
          onChange={(checked) => setStates(prev => ({ ...prev, md: checked }))}
          size="md"
          label="Medium toggle"
        />
        <ToggleSwitch
          checked={states.lg}
          onChange={(checked) => setStates(prev => ({ ...prev, lg: checked }))}
          size="lg"
          label="Large toggle"
        />
      </div>
    );
  },
};

export const AllColors: Story = {
  render: () => {
    const [states, setStates] = useState({
      default: false,
      success: false,
      warning: false,
      error: false,
    });

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <ToggleSwitch
          checked={states.default}
          onChange={(checked) => setStates(prev => ({ ...prev, default: checked }))}
          color="default"
          label="Default toggle"
        />
        <ToggleSwitch
          checked={states.success}
          onChange={(checked) => setStates(prev => ({ ...prev, success: checked }))}
          color="success"
          label="Success toggle"
        />
        <ToggleSwitch
          checked={states.warning}
          onChange={(checked) => setStates(prev => ({ ...prev, warning: checked }))}
          color="warning"
          label="Warning toggle"
        />
        <ToggleSwitch
          checked={states.error}
          onChange={(checked) => setStates(prev => ({ ...prev, error: checked }))}
          color="error"
          label="Error toggle"
        />
      </div>
    );
  },
}; 