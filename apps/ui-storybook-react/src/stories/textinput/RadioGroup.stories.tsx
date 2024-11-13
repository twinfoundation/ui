import { Meta, StoryObj } from "@storybook/react";
import { RadioGroup } from "./RadioGroup";

const meta: Meta<typeof RadioGroup> = {
	title: "Components/RadioGroup",
	component: RadioGroup,
	argTypes: {
		legend: { control: "text", description: "The legend text for the radio group" },
		name: { control: "text", description: "The name attribute for the radio buttons" },
		options: {
			control: "object",
			description: "Array of radio button configurations"
		}
	}
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
	args: {
		legend: "Choose your favorite country",
		name: "countries",
		options: [
			{ id: "united-state", label: "United States", value: "USA", defaultChecked: true },
			{ id: "germany", label: "Germany", value: "Germany" },
			{ id: "spain", label: "Spain", value: "Spain" },
			{ id: "uk", label: "United Kingdom", value: "UK" },
			{ id: "china", label: "China (disabled)", value: "China", disabled: true }
		]
	}
};

export const WithDisabledOption: Story = {
	args: {
		legend: "Select your preferred option",
		name: "options",
		options: [
			{ id: "option1", label: "Option 1", value: "option1" },
			{ id: "option2", label: "Option 2", value: "option2", defaultChecked: true },
			{ id: "option3", label: "Option 3 (disabled)", value: "option3", disabled: true }
		]
	}
};

export const SingleChoice: Story = {
	args: {
		legend: "Choose one",
		name: "singleChoice",
		options: [
			{ id: "yes", label: "Yes", value: "yes" },
			{ id: "no", label: "No", value: "no", defaultChecked: true }
		]
	}
};
