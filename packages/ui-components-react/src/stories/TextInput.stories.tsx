import type { Meta, StoryObj } from "@storybook/react";
import { TextInput } from "../textInput/textInput";

const meta = {
  title: "Components/TextInput",
  component: TextInput,
} satisfies Meta<typeof TextInput>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Enter text...",
    type: "text"
  }
}; 