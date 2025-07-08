import type { Meta, StoryObj } from "@storybook/react";
import { Tabs2 } from "../tabs-2/tabs-2";

const meta = {
  title: "Components/Tabs2",
  component: Tabs2,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Tabs2>;
export default meta;

type Story = StoryObj<typeof meta>;

const defaultItems = [
  {
    id: 'tab1',
    label: 'Tab 1',
    content: 'This is the content for Tab 1.'
  },
  {
    id: 'tab2',
    label: 'Tab 2',
    content: 'This is the content for Tab 2.'
  },
  {
    id: 'tab3',
    label: 'Tab 3',
    content: 'This is the content for Tab 3.'
  }
];

export const Default: Story = {
  args: {
    items: defaultItems
  }
};

export const Pills: Story = {
  args: {
    items: defaultItems,
    variant: 'pills'
  }
};

export const Underline: Story = {
  args: {
    items: defaultItems,
    variant: 'underline'
  }
};

export const WithDisabled: Story = {
  args: {
    items: [
      {
        id: 'tab1',
        label: 'Tab 1',
        content: 'This is the content for Tab 1.'
      },
      {
        id: 'tab2',
        label: 'Disabled Tab',
        content: 'This tab is disabled.',
        disabled: true
      },
      {
        id: 'tab3',
        label: 'Tab 3',
        content: 'This is the content for Tab 3.'
      }
    ]
  }
}; 