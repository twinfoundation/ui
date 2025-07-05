import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from "../modal/modal";

const meta = {
  title: "Components/Modal",
  component: Modal,
} satisfies Meta<typeof Modal>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    show: true,
    header: "Modal Title",
    body: "Modal content",
    footerButtons: [
      { label: "Close", onClick: () => alert("Closed") }
    ]
  }
}; 