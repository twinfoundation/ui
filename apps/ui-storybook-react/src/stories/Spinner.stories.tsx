import { Meta, StoryObj } from "@storybook/react";
import { Spinner } from "flowbite-react";

const meta = {
	title: "Components/Spinner",
	component: Spinner,
	argTypes: {
		color: {
			options: ["info", "success", "failure", "warning", "pink", "purple"],
			control: { type: "inline-radio" }
		},
		size: {
			options: ["sm", "md", "lg"],
			control: { type: "inline-radio" }
		}
	}
} satisfies Meta<typeof Spinner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SpinnerExample: Story = {
	args: {
		color: "info",
		size: "md"
	},
	render: args => (
		<div className="flex flex-wrap gap-4">
			<Spinner {...args} color="info" aria-label="Info spinner example" />

			<Spinner {...args} color="success" aria-label="Success spinner example" />

			<Spinner {...args} color="failure" aria-label="Failure spinner example" />

			<Spinner {...args} color="warning" aria-label="Warning spinner example" />

			<Spinner {...args} color="pink" aria-label="Pink spinner example" />

			<Spinner {...args} color="purple" aria-label="Purple spinner example" />
		</div>
	)
};

export const SpinnerWithSize: Story = {
	args: {
		color: "info",
		size: "md"
	},
	render: args => (
		<div className="flex flex-wrap gap-4">
			<Spinner {...args} size="sm" aria-label="Small spinner example" />

			<Spinner {...args} size="md" aria-label="Medium spinner example" />

			<Spinner {...args} size="lg" aria-label="Large spinner example" />
		</div>
	)
};
