import type { Meta, StoryObj } from '@storybook/react';
import { Banner } from './banner-2';

const meta: Meta<typeof Banner> = {
  title: 'Components/Banner2',
  component: Banner,
  tags: ['autodocs'],
  argTypes: {
    bottom: { control: 'boolean' },
    className: { control: 'text' },
    onClose: { action: 'closed' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <svg width={16} height={16} viewBox="0 0 16 16" fill="currentColor">
          <path d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"/>
          <path d="M8 4a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 018 4zm0 8a1 1 0 100-2 1 1 0 000 2z"/>
        </svg>
        <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>
          New brand identity has been launched for the{' '}
          <a
            href="https://flowbite.com"
            style={{
              color: '#0891b2',
              textDecoration: 'underline',
              fontWeight: 500,
            }}
          >
            Flowbite Library
          </a>
        </span>
      </div>
    ),
  },
};

export const Bottom: Story = {
  args: {
    bottom: true,
    children: (
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <svg width={16} height={16} viewBox="0 0 16 16" fill="currentColor">
          <path d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"/>
          <path d="M8 4a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 018 4zm0 8a1 1 0 100-2 1 1 0 000 2z"/>
        </svg>
        <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>
          Banner positioned at the bottom
        </span>
      </div>
    ),
  },
};

export const WithCustomClass: Story = {
  args: {
    className: 'bg-blue-50 border-blue-200',
    children: (
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <svg width={16} height={16} viewBox="0 0 16 16" fill="currentColor">
          <path d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"/>
          <path d="M8 4a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 018 4zm0 8a1 1 0 100-2 1 1 0 000 2z"/>
        </svg>
        <span style={{ fontSize: '0.875rem', color: '#1e40af' }}>
          Banner with custom styling
        </span>
      </div>
    ),
  },
};

export const SimpleText: Story = {
  args: {
    children: (
      <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>
        Simple banner with just text content
      </span>
    ),
  },
}; 