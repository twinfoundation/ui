import { Meta, StoryObj } from "@storybook/react";
import { TagInput } from "./TagInput";

const meta: Meta<typeof TagInput> = {
  title: "Components/TagInput",
  component: TagInput,
  argTypes: {
    label: { control: "text", description: "Label text for the input field" },
    placeholder: { control: "text", description: "Placeholder text for the input field" },
    note: { control: "text", description: "Note displayed below the input box" },
  },
};

export default meta;
type Story = StoryObj<typeof TagInput>;

export const Default: Story = {
  args: {
    placeholder: "Add a tag...",
  },
};

export const WithLabelAndTags: Story = {
  args: {
    label: "Tags",
    placeholder: "Enter a tag and press enter",
  },
};

export const WithExampleTagsAndNote: Story = {
  args: {
    label: "Tags",
    placeholder: "Add a tag...",
    note: "Add tags relevant to your interests.",
  },
};
