// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "@twin.org/ui-components-enterprise";

const meta = {
	title: "enterprise/Label",
	component: Label,
	argTypes: {},
	args: {}
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		value: "Label"
	}
};

export const CustomStyle: Story = {
	args: {
		className: "text-red-500",
		value: "Label"
	}
};

export const WithChildren: Story = {
	args: {
		children: "Label Text from Children"
	}
};
