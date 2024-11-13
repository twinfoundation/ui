import type { Meta, StoryObj } from "@storybook/react";
import { SimpleTextarea, IconTextarea, EditorTextarea } from "./Textarea";

const meta: Meta = {
  title: "Components/Textarea",
  component: SimpleTextarea,
};

export default meta;

export const Simple: StoryObj = {
  render: () => <SimpleTextarea />,
};

export const WithIcons: StoryObj = {
  render: () => <IconTextarea />,
};

export const TextEditor: StoryObj = {
  render: () => <EditorTextarea />,
};
