// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "@twin.org/ui-components-react";

const meta = {
	title: "Components/Textarea",
	component: Textarea,
	argTypes: {
		disabled: {
			options: Object.values([true, false]),
			control: { type: "inline-radio" }
		},
		required: {
			options: Object.values([true, false]),
			control: { type: "inline-radio" }
		},
		readOnly: {
			options: Object.values([true, false]),
			control: { type: "inline-radio" }
		}
	},
	args: {
		placeholder: "Enter text here",
		rows: 4,
		cols: 10
	}
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};

export const CustomInfo: Story = {
	args: {
		placeholder: "Enter your information here",
		rows: 6,
		cols: 50
	}
};

export const CustomStyle: Story = {
	args: {
		placeholder: "Custom style text area",
		className: "border focus:border-surface-button p-2 max-w-sm focus:ring-surface-button-pressed"
	}
};

export const Disabled: Story = {
	args: {
		disabled: true
	}
};

export const Required: Story = {
	args: {
		required: true
	}
};

export const ReadOnly: Story = {
	args: {
		readOnly: true,
		value: "This is a read-only text area."
	}
};
