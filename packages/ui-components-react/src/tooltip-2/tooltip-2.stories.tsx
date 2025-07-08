import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from './tooltip-2';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip2',
  component: Tooltip,
  tags: ['autodocs'],
  argTypes: {
    placement: { control: 'select', options: ['top', 'right', 'bottom', 'left'] },
    trigger: { control: 'select', options: ['hover', 'click'] },
    arrow: { control: 'boolean' },
    color: { control: 'select', options: ['dark', 'light', 'error', 'warning', 'success', 'info', 'plain'] },
    className: { control: 'text' },
    content: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    content: 'Tooltip content',
    children: <button>Hover me</button>,
  },
};

export const Placement: Story = {
  args: {
    content: 'Tooltip on the right',
    placement: 'right',
    children: <button>Right</button>,
  },
};

export const ClickTrigger: Story = {
  args: {
    content: 'Tooltip on click',
    trigger: 'click',
    children: <button>Click me</button>,
  },
};

export const NoArrow: Story = {
  args: {
    content: 'No arrow',
    arrow: false,
    children: <button>No arrow</button>,
  },
};

export const ColorVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 16 }}>
      <Tooltip content="Dark" color="dark"><button>Dark</button></Tooltip>
      <Tooltip content="Light" color="light"><button>Light</button></Tooltip>
      <Tooltip content="Error" color="error"><button>Error</button></Tooltip>
      <Tooltip content="Warning" color="warning"><button>Warning</button></Tooltip>
      <Tooltip content="Success" color="success"><button>Success</button></Tooltip>
      <Tooltip content="Info" color="info"><button>Info</button></Tooltip>
      <Tooltip content="Plain" color="plain"><button>Plain</button></Tooltip>
    </div>
  ),
}; 