import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { HiCheckCircle } from "react-icons/hi";
import { DynamicAlert } from "./Alert";

const meta = {
	title: "Components/Alert",
	component: DynamicAlert,
	argTypes: {
		color: {
			control: "select",
			options: ["success", "info", "warning", "error"]
		}
	}
} satisfies Meta<typeof DynamicAlert>;

export const Success: StoryObj<typeof DynamicAlert> = {
	args: {
		color: "success",
		message: "Success alert!",
		onDismiss: fn(),
		icon: HiCheckCircle
	}
};
export const Info: StoryObj<typeof DynamicAlert> = {
	args: {
		color: "info",
		message: "Info alert!",
		onDismiss: fn(),
		icon: HiCheckCircle
	}
};
export const Warning: StoryObj<typeof DynamicAlert> = {
	args: {
		color: "warning",
		message: "Warning alert!",
		onDismiss: fn(),
		icon: HiCheckCircle
	}
};
export const Error: StoryObj<typeof DynamicAlert> = {
	args: {
		color: "error",
		message: "Error alert!",
		onDismiss: fn(),
		icon: HiCheckCircle
	}
};

Success.parameters = {
	docs: {
		source: { state: "open" }
	}
};

export default meta;
