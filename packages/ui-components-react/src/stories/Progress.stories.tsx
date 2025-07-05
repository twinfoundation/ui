import type { Meta, StoryObj } from "@storybook/react";
import { Progress } from "../progress/progress";

const meta = {
  title: "Components/Progress",
  component: Progress,
} satisfies Meta<typeof Progress>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    progress: 45
  }
}; 