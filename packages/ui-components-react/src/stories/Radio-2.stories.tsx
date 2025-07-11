import type { Meta, StoryObj } from '@storybook/react';
import { Radio, RadioGroup } from '../radio-2/radio-2';

const meta: Meta<typeof Radio> = {
  title: 'Components/Radio2',
  component: Radio,
  parameters: { layout: 'centered' },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Radio value="a" onChange={() => {}} label="Radio label" name="radio1" />,
};

export const Group: Story = {
  render: () => (
    <RadioGroup
      value="b"
      onChange={() => {}}
      name="group1"
      options={[
        { value: 'a', label: 'Option A' },
        { value: 'b', label: 'Option B' },
        { value: 'c', label: 'Option C', disabled: true },
      ]}
      label="Radio group"
      description="Choose one option."
    />
  ),
};

export const Disabled: Story = {
  render: () => <Radio value="a" onChange={() => {}} label="Disabled radio" name="radio2" disabled />,
};

export const ColorVariants: Story = {
  render: () => (
    <RadioGroup
      value="a"
      onChange={() => {}}
      name="group2"
      options={[
        { value: 'a', label: 'Default' },
        { value: 'b', label: 'Success' },
        { value: 'c', label: 'Warning' },
        { value: 'd', label: 'Error' },
      ]}
      color="success"
      label="Color variants"
    />
  ),
}; 