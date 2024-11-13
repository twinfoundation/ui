import type { Meta, StoryObj } from "@storybook/react";
import TextInputWithLabel from "./TextInputWithLabel";

const meta = {
	title: "Components/SMTextInputWithLabel",
	component: TextInputWithLabel,
	argTypes: {
		color: {
			options: ["gray", "info", "success", "failure", "warning"],
			control: { type: "inline-radio" }
		},
		placeholder: {
			control: { type: "text" }
		}
	},
	args: {
		placeholder: "Enter your details"
	}
} satisfies Meta<typeof TextInputWithLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Gray: Story = {
	args: {
		color: "gray",
		label: "Gray Input",
		placeholder: "Enter your details",
		borderColor: "border-gray-300",
		size: "sm"
	}
};

export const Info: Story = {
	args: {
		color: "info",
		label: "Info Input",
		borderColor: "border-blue-300",
		size: "sm"
	}
};

export const Success: Story = {
	args: {
		color: "success",
		label: "Success Input",
		placeholder: "Enter your details",
		borderColor: "border-green-300",
		size: "sm"
	}
};

export const Failure: Story = {
	args: {
		color: "failure",
		label: "Failure Input",
		placeholder: "Enter your details",
		borderColor: "border-green-300",
		size: "sm"
	}
};

export const Warning: Story = {
	args: {
		color: "warning",
		label: "Warning Input",
		placeholder: "Enter your details",
		borderColor: "border-yellow-300",
		size: "sm"
	}
};
