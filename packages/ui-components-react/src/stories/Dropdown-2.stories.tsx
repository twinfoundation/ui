import type { Meta, StoryObj } from "@storybook/react";
import { Dropdown2 } from "../dropdown-2/dropdown-2";

const meta = {
  title: "Components/Dropdown2",
  component: Dropdown2,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Dropdown2>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    trigger: "Dropdown",
    items: [
      { label: "Item 1", onClick: () => alert("Item 1 clicked") },
      { label: "Item 2", onClick: () => alert("Item 2 clicked") },
      { label: "Item 3", onClick: () => alert("Item 3 clicked") }
    ]
  }
};

export const Primary: Story = {
  args: {
    trigger: "Primary Dropdown",
    variant: "primary",
    items: [
      { label: "Edit", onClick: () => alert("Edit clicked") },
      { label: "Delete", onClick: () => alert("Delete clicked") },
      { divider: true },
      { label: "Share", onClick: () => alert("Share clicked") }
    ]
  }
};

export const WithDisabled: Story = {
  args: {
    trigger: "Settings",
    items: [
      { label: "Profile", onClick: () => alert("Profile clicked") },
      { label: "Settings", onClick: () => alert("Settings clicked") },
      { label: "Disabled Item", disabled: true },
      { divider: true },
      { label: "Logout", onClick: () => alert("Logout clicked") }
    ]
  }
};

export const Large: Story = {
  args: {
    trigger: "Large Dropdown",
    size: "large",
    items: [
      { label: "Large Item 1", onClick: () => alert("Large Item 1 clicked") },
      { label: "Large Item 2", onClick: () => alert("Large Item 2 clicked") }
    ]
  }
}; 