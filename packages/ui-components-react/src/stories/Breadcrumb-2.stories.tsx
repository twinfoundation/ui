import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumb } from '../breadcrumb-2/breadcrumb-2';
import { ArrowRight } from '../icons/arrowRight';

const meta: Meta<typeof Breadcrumb> = {
  title: 'Components/Breadcrumb2',
  component: Breadcrumb,
  parameters: { layout: 'centered' },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Library', href: '/library' },
      { label: 'Data', href: '/library/data' },
    ],
  },
};

export const WithIcons: Story = {
  args: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Library', href: '/library', icon: ArrowRight },
      { label: 'Data', icon: ArrowRight },
    ],
  },
};

export const LongBreadcrumb: Story = {
  args: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Section', href: '/section' },
      { label: 'Subsection', href: '/section/sub' },
      { label: 'Details', href: '/section/sub/details' },
      { label: 'Current Page' },
    ],
  },
}; 