import type { Meta, StoryObj } from "@storybook/react";
import ListGroupComponent from "./ListGroupComponent";
import { HiCloudDownload, HiInbox, HiOutlineAdjustments, HiUserCircle } from "react-icons/hi";

const meta = {
  title: "Components/ListGroup",
  component: ListGroupComponent,
  argTypes: {
    items: {
      control: { type: "object" },
      description: "Array of items to render in the list group.",
    },
  },
} satisfies Meta<typeof ListGroupComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithIcons: Story = {
  args: {
    items: [
      { label: "Profile", icon: HiUserCircle},
      { label: "Settings", icon: HiOutlineAdjustments },
      { label: "Messages", icon: HiInbox },
      { label: "Download", icon: HiCloudDownload },
    ],
  },
};

export const WithoutIcons: Story = {
  args: {
    items: [
      { label: "Profile" },
      { label: "Settings" },
      { label: "Messages" },
      { label: "Download" },
    ],
  },
};
