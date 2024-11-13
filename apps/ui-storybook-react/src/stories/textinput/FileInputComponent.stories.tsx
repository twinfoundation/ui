import type { Meta, StoryObj } from "@storybook/react";
import { FileInputComponent } from "./FileInputComponent";

const meta: Meta<typeof FileInputComponent> = {
  title: "Components/FileInput",
  component: FileInputComponent,
  argTypes: {
    label: {
      control: "text",
      description: "Label for the file input",
      defaultValue: "Upload file",
    },
    helperText: {
      control: "text",
      description: "Helper text displayed below the file input",
      defaultValue: "A profile picture is useful to confirm you are logged into your account",
    },
  },
};

export default meta;

type Story = StoryObj<typeof FileInputComponent>;

export const Default: Story = {
  args: {
    label: "Upload file",
    helperText: "A profile picture is useful to confirm you are logged into your account",
  },
};

export const ProfilePictureUpload: Story = {
  args: {
    label: "Upload Profile Picture",
    helperText: "Please upload a profile picture for your account.",
  },
};

export const DocumentUpload: Story = {
  args: {
    label: "Upload Document",
    helperText: "Upload a PDF, DOCX, or other document file.",
  },
};
