import type { Meta, StoryObj } from '@storybook/react';
import { Label } from './label-2';

const meta: Meta<typeof Label> = {
  title: 'Components/Label2',
  component: Label,
  tags: ['autodocs'],
  argTypes: {
    visuallyHidden: { control: 'boolean' },
    className: { control: 'text' },
    value: { control: 'text' },
    htmlFor: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 'Label',
  },
};

export const WithChildren: Story = {
  args: {
    children: 'Label from children',
  },
};

export const VisuallyHidden: Story = {
  args: {
    value: 'Hidden label',
    visuallyHidden: true,
  },
};

export const WithClassName: Story = {
  args: {
    value: 'Styled label',
    className: 'text-red-500',
  },
}; 