import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Pagination } from './pagination-2';

const meta: Meta<typeof Pagination> = {
  title: 'Components/Pagination2',
  component: Pagination,
  tags: ['autodocs'],
  argTypes: {
    layout: { control: 'select', options: ['pagination', 'navigation', 'table'] },
    showIcons: { control: 'boolean' },
    previousLabel: { control: 'text' },
    nextLabel: { control: 'text' },
    className: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Interactive wrapper for stories
const PaginationWrapper = (args: any) => {
  const [currentPage, setCurrentPage] = useState(args.currentPage || 1);
  
  return (
    <Pagination
      {...args}
      currentPage={currentPage}
      onPageChange={setCurrentPage}
    />
  );
};

export const Default: Story = {
  render: (args) => <PaginationWrapper {...args} />,
  args: {
    currentPage: 1,
    totalPages: 10,
  },
};

export const NavigationLayout: Story = {
  render: (args) => <PaginationWrapper {...args} />,
  args: {
    currentPage: 1,
    totalPages: 10,
    layout: 'navigation',
  },
};

export const TableLayout: Story = {
  render: (args) => <PaginationWrapper {...args} />,
  args: {
    currentPage: 1,
    totalPages: 10,
    layout: 'table',
  },
};

export const ShowIcons: Story = {
  render: (args) => <PaginationWrapper {...args} />,
  args: {
    currentPage: 1,
    totalPages: 10,
    showIcons: true,
  },
};

export const CustomLabels: Story = {
  render: (args) => <PaginationWrapper {...args} />,
  args: {
    currentPage: 1,
    totalPages: 10,
    previousLabel: 'Go back',
    nextLabel: 'Go forward',
  },
};

export const IconsOnly: Story = {
  render: (args) => <PaginationWrapper {...args} />,
  args: {
    currentPage: 1,
    totalPages: 10,
    previousLabel: '',
    nextLabel: '',
    showIcons: true,
  },
};

export const ManyPages: Story = {
  render: (args) => <PaginationWrapper {...args} />,
  args: {
    currentPage: 5,
    totalPages: 20,
  },
};

export const CurrentPageInMiddle: Story = {
  render: (args) => <PaginationWrapper {...args} />,
  args: {
    currentPage: 5,
    totalPages: 10,
  },
};

export const LastPage: Story = {
  render: (args) => <PaginationWrapper {...args} />,
  args: {
    currentPage: 10,
    totalPages: 10,
  },
};

export const FirstPage: Story = {
  render: (args) => <PaginationWrapper {...args} />,
  args: {
    currentPage: 1,
    totalPages: 10,
  },
};

export const FewPages: Story = {
  render: (args) => <PaginationWrapper {...args} />,
  args: {
    currentPage: 2,
    totalPages: 3,
  },
}; 