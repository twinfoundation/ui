import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { ConfirmationModal } from "./ConfirmationModal";
import { HiOutlineExclamationCircle } from "react-icons/hi";

const meta = {
  title: "Components/Modal/ConfirmationModal",
  component: ConfirmationModal,
  argTypes: {
    triggerText: { control: "text", description: "Text for the trigger button." },
    modalTitle: { control: "text", description: "Title displayed in the modal." },
    confirmationText: { control: "text", description: "Text for the confirmation button." },
    cancelText: { control: "text", description: "Text for the cancel button." },
    icon: { control: "none", description: "Optional icon to display in the modal." },
  },
} satisfies Meta<typeof ConfirmationModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    triggerText: "Delete Item",
    modalTitle: "Are you sure you want to delete this product?",
    confirmationText: "Yes, I'm sure",
    cancelText: "No, cancel",
    icon: <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />,
    onConfirm: action("Confirmed"),
    onCancel: action("Cancelled"),
  },
};

export const CustomText: Story = {
  args: {
    triggerText: "Remove User",
    modalTitle: "Are you sure you want to remove this user?",
    confirmationText: "Remove User",
    cancelText: "Keep User",
    icon: <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-red-500 dark:text-red-400" />,
    onConfirm: action("User Removed"),
    onCancel: action("Action Cancelled"),
  },
};
