// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { Meta, StoryObj } from "@storybook/react";
import { Navbar as Navbar2 } from "../navbar-2/navbar-2";

const meta = {
  title: "Components/Navbar2",
  component: Navbar2,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Navbar2>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    brand: {
      href: "#",
      src: "https://via.placeholder.com/32x32",
      alt: "Brand logo",
      name: "Brand Name",
    },
    links: [
      { href: "#", label: "Home", active: true },
      { href: "#", label: "About" },
      { href: "#", label: "Services" },
      { href: "#", label: "Contact" },
    ],
  },
};

export const WithProfile: Story = {
  args: {
    brand: {
      href: "#",
      src: "https://via.placeholder.com/32x32",
      alt: "Brand logo",
      name: "Brand Name",
    },
    links: [
      { href: "#", label: "Home", active: true },
      { href: "#", label: "About" },
      { href: "#", label: "Services" },
      { href: "#", label: "Contact" },
    ],
    profileInfo: {
      thumbnail: "https://via.placeholder.com/40x40",
      name: "John Doe",
      email: "john.doe@example.com",
      profileLinks: [
        { href: "#", label: "Profile" },
        { href: "#", label: "Settings" },
        { href: "#", label: "Help" },
      ],
    },
  },
}; 