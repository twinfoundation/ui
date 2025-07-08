import type { Meta, StoryObj } from "@storybook/react";
import { Progress2 } from "../progress-2/progress-2";

const meta = {
  title: "Components/Progress2",
  component: Progress2,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Progress2>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 45,
    max: 100
  }
};

export const WithLabel: Story = {
  args: {
    value: 75,
    max: 100,
    label: "Upload Progress"
  }
};

export const Small: Story = {
  args: {
    value: 30,
    size: "small"
  }
};

export const Large: Story = {
  args: {
    value: 60,
    size: "large"
  }
};

export const Success: Story = {
  args: {
    value: 90,
    color: "success",
    label: "Success Progress"
  }
};

export const Warning: Story = {
  args: {
    value: 70,
    color: "warning",
    label: "Warning Progress"
  }
};

export const Error: Story = {
  args: {
    value: 25,
    color: "error",
    label: "Error Progress"
  }
};

export const Striped: Story = {
  args: {
    value: 50,
    striped: true,
    label: "Striped Progress"
  }
};

export const Animated: Story = {
  args: {
    value: 80,
    animated: true,
    label: "Animated Progress"
  }
};

export const NoLabel: Story = {
  args: {
    value: 65,
    showLabel: false
  }
}; 