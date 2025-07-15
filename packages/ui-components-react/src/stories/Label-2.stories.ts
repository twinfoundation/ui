// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "../label-2/label-2";

const meta = {
	title: "Components/Label2",
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
