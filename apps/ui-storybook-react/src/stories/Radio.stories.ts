// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { Meta, StoryObj } from "@storybook/react";
import { Radio } from "@twin.org/ui-components-react";

const meta = {
	title: "Components/Radio",
	component: Radio,
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
		name: "Radio",
		value: "1"
	}
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		value: "2",
		label: "Radio"
	}
};

export const DefaultChecked: Story = {
	args: {
		defaultChecked: true,
		value: "2",
		label: "Radio"
	}
};

export const Disabled: Story = {
	args: {
		disabled: true,
		label: "Radio"
	}
};

export const Required: Story = {
	args: {
		required: true,
		label: "Radio"
	}
};
