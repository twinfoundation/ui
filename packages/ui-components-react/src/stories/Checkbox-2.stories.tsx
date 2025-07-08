import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox2 } from "../checkbox-2/checkbox-2";

const meta = {
  title: "Components/Checkbox2",
  component: Checkbox2,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Checkbox2>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Checkbox label"
  }
};

export const Checked: Story = {
  args: {
    label: "Checked checkbox",
    checked: true
  }
};

export const Large: Story = {
  args: {
    label: "Large checkbox",
    size: "large"
  }
};

export const Small: Story = {
  args: {
    label: "Small checkbox",
    size: "small"
  }
};

export const Disabled: Story = {
  args: {
    label: "Disabled checkbox",
    disabled: true
  }
};

export const DisabledChecked: Story = {
  args: {
    label: "Disabled checked checkbox",
    checked: true,
    disabled: true
  }
}; 