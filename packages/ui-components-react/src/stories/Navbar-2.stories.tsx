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
      src: "https://assets.weforum.org/sites/a0eTG000008PHKPYA4/3LI3Z9COsps.jpg",
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
      src: "https://assets.weforum.org/sites/a0eTG000008PHKPYA4/3LI3Z9COsps.jpg",
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
      thumbnail: "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
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