import type { Meta, StoryObj } from "@storybook/react";
import { Textarea2 } from "../textarea-2/textarea-2";

const meta = {
  title: "Components/Textarea2",
  component: Textarea2,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Textarea2>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Enter your message..."
  }
};

export const WithValue: Story = {
  args: {
    value: "This is a textarea with some content.",
    placeholder: "Enter your message..."
  }
};

export const Large: Story = {
  args: {
    size: "large",
    placeholder: "Large textarea..."
  }
};

export const Small: Story = {
  args: {
    size: "small",
    placeholder: "Small textarea..."
  }
};

export const Error: Story = {
  args: {
    status: "error",
    placeholder: "Error textarea..."
  }
};

export const Success: Story = {
  args: {
    status: "success",
    placeholder: "Success textarea..."
  }
};

export const Disabled: Story = {
  args: {
    disabled: true,
    value: "Disabled textarea"
  }
};

export const NoResize: Story = {
  args: {
    resize: false,
    placeholder: "Non-resizable textarea..."
  }
}; 