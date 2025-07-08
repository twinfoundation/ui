import type { Meta, StoryObj } from '@storybook/react';
import { Alert2 } from '../alert/alert-2';
import { Info, CheckCircle, WarningCircle, X } from '../icons';

const iconMap = {
  info: <Info />,
  success: <CheckCircle />,
  warning: <WarningCircle />,
  error: <X />,
  plain: null,
};

const meta: Meta<typeof Alert2> = {
  title: 'Components/Alert2',
  component: Alert2,
  argTypes: {
    color: {
      control: 'select',
      options: ['info', 'success', 'warning', 'error', 'plain'],
    },
    children: { control: 'text' },
    icon: { control: false },
  },
  args: {
    children: 'This is an alert!',
    color: 'info',
    icon: iconMap.info,
  },
  parameters: {
    layout: 'centered',
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "This is an info alert"
  }
};

export const WithTitle: Story = {
  args: {
    title: "Info",
    children: "This is an info alert with title"
  }
};

export const Success: Story = {
  args: {
    color: "success",
    title: "Success",
    children: "This is a success alert"
  }
};

export const Warning: Story = {
  args: {
    color: "warning",
    title: "Warning",
    children: "This is a warning alert"
  }
};

export const Error: Story = {
  args: {
    color: "error",
    title: "Error",
    children: "This is an error alert"
  }
};

export const InfoAlert: Story = { args: { color: 'info', children: 'Info alert', icon: iconMap.info } };
export const Plain: Story = { args: { color: 'plain', children: 'Plain alert', icon: iconMap.plain } }; 