import type { Meta, StoryObj } from '@storybook/react';
import { Label } from '../label-2/label-2';

const meta: Meta<typeof Label> = {
  title: 'Components/Label2',
  component: Label,
  parameters: { layout: 'centered' },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: 'Label text' },
};

export const WithHtmlFor: Story = {
  args: { children: 'Label for input', htmlFor: 'input-id' },
};

export const VisuallyHidden: Story = {
  args: { children: 'Hidden label', visuallyHidden: true },
}; 