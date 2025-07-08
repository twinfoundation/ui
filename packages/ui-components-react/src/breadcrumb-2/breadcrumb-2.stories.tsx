import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumb } from './breadcrumb-2';

// Simple icon component for demo
const HouseIcon: React.FC<{ width?: number; height?: number; className?: string }> = ({ 
  width = 16, 
  height = 16, 
  className 
}) => (
  <svg 
    width={width} 
    height={height} 
    viewBox="0 0 16 16" 
    fill="currentColor" 
    className={className}
  >
    <path d="M8.707 1.5a1 1 0 00-1.414 0L.646 8.146a.5.5 0 00.708.708L2 8.207V13.5A1.5 1.5 0 003.5 15h9a1.5 1.5 0 001.5-1.5V8.207l.646.647a.5.5 0 00.708-.708L13 5.793V2.5a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5v1.293L8.707 1.5zM13 7.207V13.5a.5.5 0 01-.5.5h-9a.5.5 0 01-.5-.5V7.207l5-5 5 5z"/>
  </svg>
);

const meta: Meta<typeof Breadcrumb> = {
  title: 'Components/Breadcrumb2',
  component: Breadcrumb,
  tags: ['autodocs'],
  argTypes: {
    ariaLabel: { control: 'text' },
    className: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      { label: 'Home', href: '/', icon: HouseIcon },
      { label: 'Library', href: '/library' },
      { label: 'Data', href: '/library/data' },
    ],
  },
};

export const WithCustomClass: Story = {
  args: {
    className: 'bg-gray-50 py-2 px-2',
    items: [
      { label: 'Home', href: '/', icon: HouseIcon },
      { label: 'Library', href: '/library' },
      { label: 'Data', href: '/library/data' },
    ],
  },
};

export const WithoutIcons: Story = {
  args: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Products', href: '/products' },
      { label: 'Electronics', href: '/products/electronics' },
    ],
  },
};

export const LongPath: Story = {
  args: {
    items: [
      { label: 'Home', href: '/', icon: HouseIcon },
      { label: 'Products', href: '/products' },
      { label: 'Electronics', href: '/products/electronics' },
      { label: 'Computers', href: '/products/electronics/computers' },
      { label: 'Laptops', href: '/products/electronics/computers/laptops' },
    ],
  },
};

export const CustomAriaLabel: Story = {
  args: {
    ariaLabel: 'Navigation breadcrumb',
    items: [
      { label: 'Home', href: '/', icon: HouseIcon },
      { label: 'Library', href: '/library' },
      { label: 'Data', href: '/library/data' },
    ],
  },
}; 