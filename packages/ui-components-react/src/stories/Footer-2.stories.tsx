import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from '../footer-2';
import { House, Envelope, PlayStop, File } from "../icons";

const meta: Meta<typeof Footer> = {
  title: 'Components/Footer2',
  component: Footer,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    brand: {
      href: "https://www.twin.org",
      src: "https://assets.weforum.org/sites/a0eTG000008PHKPYA4/3LI3Z9COsps.jpg",
      alt: "Twin Logo",
      name: "TWIN"
    },
    columns: [
      {
        title: "About",
        links: [
          { href: "#", label: "About TWIN" },
          { href: "#", label: "Documentation" },
          { href: "#", label: "Resources" }
        ]
      },
      {
        title: "Follow us",
        links: [
          { href: "#", label: "Github" },
          { href: "#", label: "Discord" },
          { href: "#", label: "Twitter" }
        ]
      },
      {
        title: "Legal",
        links: [
          { href: "#", label: "Privacy Policy" },
          { href: "#", label: "Terms & Conditions" },
          { href: "#", label: "Cookie Policy" }
        ]
      }
    ],
    iconLinks: [
      { href: "#", icon: House, ariaLabel: "Visit our homepage" },
      { href: "#", icon: Envelope, ariaLabel: "Contact us" },
      { href: "#", icon: PlayStop, ariaLabel: "Listen to updates" },
      { href: "#", icon: File, ariaLabel: "View documentation" }
    ],
    copyright: "© 2025 TWIN™"
  }
};