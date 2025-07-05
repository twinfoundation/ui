import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "../badge/badge";

const meta = {
  title: "Components/Badge",
  component: Badge,
} satisfies Meta<typeof Badge>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Badge",
    color: "info"
  }
}; 