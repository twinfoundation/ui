import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "../checkbox/checkbox";

const meta = {
  title: "Components/Checkbox",
  component: Checkbox,
} satisfies Meta<typeof Checkbox>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Checkbox label"
  }
}; 