import type { Meta, StoryObj } from "@storybook/react";
import { Dropdown } from "../dropdown/dropdown";

const meta = {
  title: "Components/Dropdown",
  component: Dropdown,
} satisfies Meta<typeof Dropdown>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Dropdown",
    items: [
      { label: "Item 1", onClick: () => alert("Item 1 clicked") },
      { label: "Item 2", onClick: () => alert("Item 2 clicked") }
    ]
  }
}; 