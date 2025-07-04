// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "../";

const meta = {
	title: "Components/Checkbox",
	component: Checkbox,
	argTypes: {
		disabled: {
			options: Object.values([true, false]),
			control: { type: "inline-radio" }
		},
		required: {
			options: Object.values([true, false]),
			control: { type: "inline-radio" }
		},
		checked: {
			options: Object.values([true, false]),
			control: { type: "inline-radio" }
		}
	},
	args: {
		name: "checkbox",
		value: "1"
	}
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		value: "2"
	}
};

export const Checked: Story = {
	args: {
		checked: true
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
