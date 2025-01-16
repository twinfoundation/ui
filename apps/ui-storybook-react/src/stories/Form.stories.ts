// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { Meta, StoryObj } from "@storybook/react";
import { Form, FormSizes } from "@twin.org/ui-components-react";

const meta = {
	title: "Components/Form",
	component: Form,
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
	args: {}
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};

export const SmallInputs: Story = {
	args: {
		size: FormSizes.Small
	}
};

export const LargeInputs: Story = {
	args: {
		size: FormSizes.Large
	}
};

export const Disabled: Story = {
	args: {
		disabled: true
	}
};

export const ReadOnly: Story = {
	args: {
		readOnly: true
	}
};

export const Required: Story = {
	args: {
		required: true
	}
};
