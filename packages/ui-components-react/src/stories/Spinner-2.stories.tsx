import type { Meta, StoryObj } from "@storybook/react";
import { Spinner } from "../spinner-2/spinner-2";

const meta = {
  title: "Components/Spinner2",
  component: Spinner,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Spinner>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};

export const Small: Story = {
  args: {
    size: "small"
  }
};

export const Large: Story = {
  args: {
    size: "large"
  }
};

export const XLarge: Story = {
  args: {
    size: "xlarge"
  }
};

export const Success: Story = {
  args: {
    color: "success"
  }
};

export const Warning: Story = {
  args: {
    color: "warning"
  }
};

export const Error: Story = {
  args: {
    color: "error"
  }
};

export const Secondary: Story = {
  args: {
    color: "secondary"
  }
}; 