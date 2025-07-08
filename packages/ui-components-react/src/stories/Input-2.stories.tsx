import type { Meta, StoryObj } from "@storybook/react";
import { Input2 } from "../input-2/input-2";

const meta = {
  title: "Components/Input2",
  component: Input2,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Input2>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Enter text..."
  }
};

export const WithValue: Story = {
  args: {
    value: "Input value",
    placeholder: "Enter text..."
  }
};

export const Large: Story = {
  args: {
    size: "large",
    placeholder: "Large input..."
  }
};

export const Small: Story = {
  args: {
    size: "small",
    placeholder: "Small input..."
  }
};

export const Error: Story = {
  args: {
    status: "error",
    placeholder: "Error input..."
  }
};

export const Success: Story = {
  args: {
    status: "success",
    placeholder: "Success input..."
  }
};

export const Disabled: Story = {
  args: {
    disabled: true,
    value: "Disabled input"
  }
}; 