import type { Meta, StoryObj } from "@storybook/react";
import { Progress } from "flowbite-react";

const ProgressColors = [
	"dark",
	"blue",
	"red",
	"green",
	"yellow",
	"indigo",
	"purple",
	"cyan",
	"gray",
	"lime",
	"pink",
	"teal"
] as const;

const ProgressSizes = ["sm", "md", "lg", "xl"] as const;

const meta = {
	title: "Components/Progress",
	component: Progress,
	argTypes: {
		color: {
			options: ProgressColors,
			control: { type: "inline-radio" }
		},
		size: {
			options: ProgressSizes,
			control: { type: "inline-radio" }
		},
		progress: {
			control: { type: "number", min: 0, max: 100, step: 1 }
		}
	},
	args: {
		progress: 45
	}
} satisfies Meta<typeof Progress>;

export default meta;

type Story = StoryObj<typeof meta>;


export const Small: Story = {
	args: {
		size: "sm",
		color: "blue",
		progress: 100,
	},
};

export const Large: Story = {
	args: {
		size: "lg",
		color: "green"
	}
};

export const ExtraLarge: Story = {
	args: {
		size: "xl",
		color: "red"
	}
};

export const CustomColor: Story = {
	args: {
		size: "md",
		color: "purple"
	}
};
