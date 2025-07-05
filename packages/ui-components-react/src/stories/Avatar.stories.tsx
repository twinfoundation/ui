import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "../avatar/avatar";

const meta = {
  title: "Components/Avatar",
  component: Avatar,
} satisfies Meta<typeof Avatar>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    alt: "User avatar",
    img: "https://flowbite.com/docs/images/people/profile-picture-5.jpg"
  }
}; 