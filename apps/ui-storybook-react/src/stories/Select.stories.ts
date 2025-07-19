// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { Meta, StoryObj } from "@storybook/react";
import { Select, SelectSizes } from "@twin.org/ui-components-core";

const meta = {
	title: "Components/Select",
	component: Select,
	argTypes: {
		sizing: {
			options: Object.values(SelectSizes),
			control: { type: "inline-radio" }
		},
		disabled: {
			options: Object.values([true, false]),
			control: { type: "inline-radio" }
		},
		required: {
			options: Object.values([true, false]),
			control: { type: "inline-radio" }
		}
	},
	args: {
		options: [
			{ value: "1", label: "Option 1" },
			{ value: "2", label: "Option 2" },
			{ value: "3", label: "Option 3" },
			{ value: "4", label: "Option 4" }
		]
	}
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};

export const OptionSelected: Story = {
	args: {
		options: [
			{ value: "1", label: "Option 1" },
			{ value: "2", label: "Option 2" },
			{ value: "3", label: "Option 3" },
			{ value: "4", label: "Option 4" }
		],
		value: "2"
	}
};

export const ValueEmpty: Story = {
	args: {
		options: [
			{ value: "", label: "Select an option" },
			{ value: "1", label: "Option 1" },
			{ value: "2", label: "Option 2" },
			{ value: "3", label: "Option 3" },
			{ value: "4", label: "Option 4" }
		]
	}
};

export const Small: Story = {
	args: {
		sizing: SelectSizes.Small
	}
};

export const Large: Story = {
	args: {
		sizing: SelectSizes.Large
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
