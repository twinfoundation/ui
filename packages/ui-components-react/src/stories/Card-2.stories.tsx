import type { Meta, StoryObj } from "@storybook/react";
import { Card2 } from "../card-2/card-2";

const meta = {
  title: "Components/Card2",
  component: Card2,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Card2>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Card2 content"
  }
};

export const WithTitle: Story = {
  args: {
    title: "Card Title",
    children: "Card2 content with title"
  }
};

export const WithTitleAndSubtitle: Story = {
  args: {
    title: "Card Title",
    subtitle: "Card subtitle",
    children: "Card2 content with title and subtitle"
  }
};

export const WithFooter: Story = {
  args: {
    title: "Card Title",
    children: "Card2 content",
    footer: "Card footer"
  }
}; 