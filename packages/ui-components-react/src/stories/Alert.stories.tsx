import type { Meta, StoryObj } from "@storybook/react";
import { Alert } from "../alert/alert";

const meta = {
  title: "Components/Alert",
  component: Alert,
} satisfies Meta<typeof Alert>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "This is an alert message",
    color: "info"
  }
}; 