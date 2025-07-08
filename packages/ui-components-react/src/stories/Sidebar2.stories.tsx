import type { Meta, StoryObj } from '@storybook/react';
import { Sidebar } from '../sidebar-2';
import { FaUser, FaCog, FaEnvelope, FaHome, FaInfoCircle } from 'react-icons/fa';

const meta: Meta<typeof Sidebar> = {
  title: 'Components/Sidebar2',
  component: Sidebar,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    logo: {
      label: 'MyApp',
      img: 'https://flowbite.com/docs/images/logo.svg',
      href: '#',
    },
    items: [
      { label: 'Home', href: '#', icon: FaHome, active: true },
      { label: 'Profile', href: '#', icon: FaUser },
      { label: 'Settings', href: '#', icon: FaCog },
      { label: 'Messages', href: '#', icon: FaEnvelope, badge: '5', badgeColor: 'primary' },
    ],
    footerContent: <div style={{ fontSize: '0.85rem', color: '#6b7280' }}>© 2024 MyApp</div>,
  },
};

export const WithNestedItems: Story = {
  args: {
    logo: {
      label: 'MyApp',
      img: 'https://flowbite.com/docs/images/logo.svg',
      href: '#',
    },
    items: [
      { label: 'Home', href: '#', icon: FaHome },
      { label: 'About', href: '#', icon: FaInfoCircle, items: [
        { label: 'Team', href: '#' },
        { label: 'Contact', href: '#' },
      ] },
      { label: 'Profile', href: '#', icon: FaUser },
    ],
  },
};

export const WithCTA: Story = {
  args: {
    logo: {
      label: 'MyApp',
      img: 'https://flowbite.com/docs/images/logo.svg',
      href: '#',
    },
    items: [
      { label: 'Home', href: '#', icon: FaHome },
      { label: 'Profile', href: '#', icon: FaUser },
    ],
    CTA: <button style={{ width: '100%', padding: '0.5rem', background: '#2563eb', color: '#fff', border: 'none', borderRadius: '0.375rem' }}>Upgrade</button>,
  },
};

export const WithFooterItems: Story = {
  args: {
    logo: {
      label: 'MyApp',
      img: 'https://flowbite.com/docs/images/logo.svg',
      href: '#',
    },
    items: [
      { label: 'Home', href: '#', icon: FaHome },
      { label: 'Profile', href: '#', icon: FaUser },
    ],
    footerItems: [
      { label: 'Settings', href: '#', icon: FaCog },
      { label: 'Messages', href: '#', icon: FaEnvelope, badge: '2', badgeColor: 'info' },
    ],
  },
}; 