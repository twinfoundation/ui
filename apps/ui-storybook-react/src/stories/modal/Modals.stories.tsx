import { Meta, StoryObj } from "@storybook/react";
import { TermsOfServiceModal } from "./TermsOfServiceModal";
import { ConfirmationModal } from "./ConfirmationModal";
import { SignInModal } from "./SignInModal";
import { ConnectModal } from "./Wallet";

const meta: Meta = {
	title: "Components/Modals",
	component: TermsOfServiceModal
};

export default meta;
type Story = StoryObj<typeof TermsOfServiceModal>;

export const TermsOfService: Story = {
	render: () => <TermsOfServiceModal />
};

export const Confirmation: Story = {
	render: () => <ConfirmationModal />
};

export const SignIn: Story = {
	render: () => <SignInModal />
};

export const web3Wallet: Story = {
	render: () => <ConnectModal />
};
