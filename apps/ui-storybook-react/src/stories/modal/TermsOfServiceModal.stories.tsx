import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { TermsOfServiceModal } from "./TermsOfServiceModal";

const meta = {
  title: "Components/Modal/TermsOfServiceModal",
  component: TermsOfServiceModal,
  argTypes: {
    buttonText: { control: "text", description: "Text displayed on the trigger button." },
    modalTitle: { control: "text", description: "Title displayed on the modal." },
    modalContent: { control: "object", description: "Array of paragraphs to display in the modal body." },
  },
} satisfies Meta<typeof TermsOfServiceModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    buttonText: "Show Terms of Service",
    modalTitle: "Terms of Service",
    modalContent: [
      "With less than a month to go before the European Union enacts new consumer privacy laws...",
      "The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25...",
    ],
    onAccept: action("Accepted"),
    onClose: action("Closed"),
  },
};

export const CustomContent: Story = {
  args: {
    buttonText: "View Agreement",
    modalTitle: "Agreement Terms",
    modalContent: [
      "This is a custom agreement content paragraph 1.",
      "This is a custom agreement content paragraph 2.",
    ],
    onAccept: action("Agreement Accepted"),
    onClose: action("Agreement Closed"),
  },
};
