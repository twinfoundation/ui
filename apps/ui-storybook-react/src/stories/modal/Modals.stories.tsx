import { Meta, StoryObj } from "@storybook/react";
import { TermsOfServiceModal } from "./TermsOfServiceModal";
import { ConnectModal } from "./Wallet";

const meta: Meta = {
	title: "Components/Modal/web3Wallet",
	component: TermsOfServiceModal
};

export default meta;
type Story = StoryObj<typeof TermsOfServiceModal>;

export const web3Wallet: Story = {
	render: () => <ConnectModal />
};
