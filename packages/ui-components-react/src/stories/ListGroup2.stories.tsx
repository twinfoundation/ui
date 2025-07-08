import type { Meta, StoryObj } from '@storybook/react';
import { ListGroup } from '../listGroup-2';
import { FaUser, FaCog, FaEnvelope } from 'react-icons/fa';

const meta: Meta<typeof ListGroup> = {
  title: 'Components/ListGroup2',
  component: ListGroup,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      { title: 'Profile', icon: FaUser },
      { title: 'Settings', icon: FaCog },
      { title: 'Messages', icon: FaEnvelope },
    ],
  },
};

export const WithLinks: Story = {
  args: {
    items: [
      { title: 'Profile', icon: FaUser, href: '#' },
      { title: 'Settings', icon: FaCog, href: '#' },
      { title: 'Messages', icon: FaEnvelope, href: '#' },
    ],
  },
};

export const ActiveAndDisabled: Story = {
  args: {
    items: [
      { title: 'Profile', icon: FaUser, active: true },
      { title: 'Settings', icon: FaCog, disabled: true },
      { title: 'Messages', icon: FaEnvelope },
    ],
  },
}; 