import type { Meta, StoryObj } from '@storybook/react';
import { Badge2 } from '../badge/badge-2';

const meta: Meta<typeof Badge2> = {
  title: 'Components/Badge2',
  component: Badge2,
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'error', 'info', 'plain'],
    },
    children: { control: 'text' },
  },
  args: {
    children: 'Badge2',
    color: 'primary',
  },
  parameters: {
    layout: 'centered',
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = { args: { color: 'primary', children: 'Primary' } };
export const Secondary: Story = { args: { color: 'secondary', children: 'Secondary' } };
export const Success: Story = { args: { color: 'success', children: 'Success' } };
export const Warning: Story = { args: { color: 'warning', children: 'Warning' } };
export const Error: Story = { args: { color: 'error', children: 'Error' } };
export const Info: Story = { args: { color: 'info', children: 'Info' } };
export const Plain: Story = { args: { color: 'plain', children: 'Plain' } };

export const Default: Story = {
  args: {
    children: "Badge2",
    color: "gray"
  }
};

export const Red: Story = {
  args: {
    children: "Error",
    color: "red"
  }
};

export const Green: Story = {
  args: {
    children: "Success",
    color: "green"
  }
};

export const Yellow: Story = {
  args: {
    children: "Warning",
    color: "yellow"
  }
};

export const Blue: Story = {
  args: {
    children: "Info",
    color: "blue"
  }
}; 