import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { SignInModal } from "./SignInModal";

const meta = {
  title: "Components/Modal/SignInModal",
  component: SignInModal,
  argTypes: {
    buttonText: { control: "text", description: "Text displayed on the trigger button." },
    modalTitle: { control: "text", description: "Title displayed on the modal." },
    emailPlaceholder: { control: "text", description: "Placeholder for the email input field." },
    passwordPlaceholder: { control: "text", description: "Placeholder for the password input field." },
    rememberText: { control: "text", description: "Text for the 'Remember me' option." },
    forgotPasswordLink: { control: "text", description: "URL for the 'Lost Password?' link." },
    createAccountLink: { control: "text", description: "URL for the 'Create account' link." },
  },
} satisfies Meta<typeof SignInModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    buttonText: "Sign In",
    modalTitle: "Sign in to our platform",
    emailPlaceholder: "name@company.com",
    passwordPlaceholder: "Enter your password",
    rememberText: "Remember me",
    forgotPasswordLink: "#",
    createAccountLink: "#",
    onSubmit: action("Form Submitted"),
    onClose: action("Modal Closed"),
  },
};

export const CustomLinks: Story = {
  args: {
    buttonText: "Log In",
    modalTitle: "Welcome Back!",
    emailPlaceholder: "user@example.com",
    passwordPlaceholder: "Your secure password",
    rememberText: "Keep me logged in",
    forgotPasswordLink: "/forgot-password",
    createAccountLink: "/register",
    onSubmit: action("Custom Form Submitted"),
    onClose: action("Custom Modal Closed"),
  },
};
