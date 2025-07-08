import type { Meta, StoryObj } from "@storybook/react";
import { Avatar2 } from "../avatar-2/avatar-2";

const meta = {
  title: "Components/Avatar2",
  component: Avatar2,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Avatar2>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    fallback: "John Doe"
  }
};

export const WithImage: Story = {
  args: {
    src: "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
    alt: "User avatar"
  }
};

export const Small: Story = {
  args: {
    size: "small",
    fallback: "JD"
  }
};

export const Large: Story = {
  args: {
    size: "large",
    fallback: "John Doe"
  }
};

export const XLarge: Story = {
  args: {
    size: "xlarge",
    fallback: "John Doe"
  }
};

export const Rounded: Story = {
  args: {
    shape: "rounded",
    fallback: "John Doe"
  }
};

export const Circular: Story = {
  args: {
    shape: "circular",
    fallback: "John Doe"
  }
}; 