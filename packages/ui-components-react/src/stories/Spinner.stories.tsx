import type { Meta, StoryObj } from "@storybook/react";
import { Spinner } from "../spinner/spinner";

const meta = {
  title: "Components/Spinner",
  component: Spinner,
} satisfies Meta<typeof Spinner>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: "md"
  }
}; 