import { Meta, StoryObj } from "@storybook/react";
import { CountrySelect } from "./CountrySelect";


const meta: Meta<typeof CountrySelect> = {
	title: "Components/CountrySelect",
	component: CountrySelect,
	argTypes: {
		label: { control: "text", description: "Label text for the select input" },
		options: { control: "array", description: "Array of country options" },
		placeholder: { control: "text", description: "Placeholder option text" }
	}
};

export default meta;
type Story = StoryObj<typeof CountrySelect>;

export const Default: Story = {
	args: {
		label: "Select your country",
		options: ["United States", "Canada", "France", "Germany"]
	}
};

export const WithPlaceholder: Story = {
	args: {
		label: "Choose a country",
		options: ["United States", "Canada", "France", "Germany"],
		placeholder: "Please select an option"
	}
};

export const CustomOptions: Story = {
	args: {
		label: "Select a country",
		options: ["Brazil", "Japan", "India", "Australia"]
	}
};
