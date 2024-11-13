import { Meta, StoryObj } from "@storybook/react";
import { CheckboxGroup } from "./CheckboxGroup";

const meta: Meta<typeof CheckboxGroup> = {
	title: "Components/CheckboxGroup",
	component: CheckboxGroup,
	argTypes: {
		checkboxes: {
			control: "object",
			description: "Array of checkbox configurations"
		}
	}
};

export default meta;
type Story = StoryObj<typeof CheckboxGroup>;

export const Default: Story = {
	args: {
		checkboxes: [
			{
				id: "accept",
				label: "I agree with the",
				link: { href: "#", text: "terms and conditions" },
				defaultChecked: true
			},
			{
				id: "promotion",
				label: "I want to get promotional offers"
			},
			{
				id: "age",
				label: "I am 18 years or older"
			},
			{
				id: "shipping",
				label: "Free shipping via Flowbite",
				description:
					"For orders shipped from Flowbite from € 25 in books or € 29 on other categories"
			},
			{
				id: "disabled",
				label: "Eligible for international shipping (disabled)",
				disabled: true
			}
		]
	}
};

export const OnlyRequiredAgreement: Story = {
	args: {
		checkboxes: [
			{
				id: "terms",
				label: "I agree to the terms of service",
				link: { href: "#", text: "terms of service" },
				defaultChecked: true
			}
		]
	}
};

export const WithDescriptions: Story = {
	args: {
		checkboxes: [
			{
				id: "basic",
				label: "Basic subscription",
				description: "Access to free articles and limited content."
			},
			{
				id: "premium",
				label: "Premium subscription",
				description: "Unlock all articles and premium content.",
				defaultChecked: true
			}
		]
	}
};
