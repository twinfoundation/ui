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
};
export default meta;
type Story = StoryObj<typeof Alert2>;

export const InfoAlert: Story = { args: { color: 'info', children: 'Info alert', icon: iconMap.info } };
export const Success: Story = { args: { color: 'success', children: 'Success alert', icon: iconMap.success } };
export const Warning: Story = { args: { color: 'warning', children: 'Warning alert', icon: iconMap.warning } };
export const Error: Story = { args: { color: 'error', children: 'Error alert', icon: iconMap.error } };
export const Plain: Story = { args: { color: 'plain', children: 'Plain alert', icon: iconMap.plain } }; 