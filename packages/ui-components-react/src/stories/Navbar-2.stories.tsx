import type { Meta, StoryObj } from "@storybook/react";
import { Navbar } from "../navbar-2/navbar-2";

const meta: Meta<typeof Navbar> = {
  title: "Components/Navbar2",
  component: Navbar,
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Default: Story = {
  args: {
    brand: {
      href: "https://www.twin.org",
      src: "https://assets.weforum.org/sites/a0eTG000008PHKPYA4/3LI3Z9COsps.jpg",
      alt: "Twin Logo",
      name: "TWIN"
    },
    links: [
      { href: "#", label: "Home", active: true },
      { href: "#", label: "Features" },
      { href: "#", label: "Pricing" },
      { href: "#", label: "Blog" }
    ],
    variant: "default"
  }
};

export const Fluid: Story = {
  args: {
    brand: {
      href: "https://www.twin.org",
      src: "https://assets.weforum.org/sites/a0eTG000008PHKPYA4/3LI3Z9COsps.jpg",
      alt: "Twin Logo",
      name: "TWIN"
    },
    links: [
      { href: "#", label: "Home", active: true },
      { href: "#", label: "Features" },
      { href: "#", label: "Pricing" },
      { href: "#", label: "Blog" }
    ],
    variant: "fluid"
  }
};

export const Rounded: Story = {
  args: {
    brand: {
      href: "https://www.twin.org",
      src: "https://assets.weforum.org/sites/a0eTG000008PHKPYA4/3LI3Z9COsps.jpg",
      alt: "Twin Logo",
      name: "TWIN"
    },
    links: [
      { href: "#", label: "Home", active: true },
      { href: "#", label: "Features" },
      { href: "#", label: "Pricing" },
      { href: "#", label: "Blog" }
    ],
    variant: "rounded"
  }
};

export const WithProfile: Story = {
  args: {
    brand: {
      href: "https://www.twin.org",
      src: "https://assets.weforum.org/sites/a0eTG000008PHKPYA4/3LI3Z9COsps.jpg",
      alt: "Twin Logo",
      name: "TWIN"
    },
    links: [
      { href: "#", label: "Home", active: true },
      { href: "#", label: "Features" },
      { href: "#", label: "Pricing" },
      { href: "#", label: "Blog" }
    ],
    variant: "default",
    profileInfo: {
      thumbnail: "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
      name: "Bonnie Green",
      email: "name@flowbite.com",
      profileLinks: [
        { href: "#", label: "Dashboard" },
        { href: "#", label: "Settings" },
        { href: "#", label: "Earnings" }
      ]
    }
  }
}; 