// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { Meta, StoryObj } from "@storybook/react";
import { Avatar2 } from "../avatar-2/avatar-2";

const meta = {
  title: "Components/Avatar2",
  component: Avatar2,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Avatar2>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    img: "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
    alt: "User avatar",
  },
};

export const WithStatus: Story = {
  args: {
    img: "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
    alt: "User avatar",
    status: "online",
  },
};

export const WithStatusOffline: Story = {
  args: {
    img: "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
    alt: "User avatar",
    status: "offline",
  },
};

export const WithStatusAway: Story = {
  args: {
    img: "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
    alt: "User avatar",
    status: "away",
  },
};

export const WithStatusBusy: Story = {
  args: {
    img: "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
    alt: "User avatar",
    status: "busy",
  },
};
