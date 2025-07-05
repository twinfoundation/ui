import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "../select/select";

const meta = {
  title: "Components/Select",
  component: Select,
} satisfies Meta<typeof Select>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    options: [
      { label: "Option 1", value: "1" },
      { label: "Option 2", value: "2" }
    ],
    value: "1"
  }
}; 