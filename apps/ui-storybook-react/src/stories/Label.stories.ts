// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "@twin.org/ui-components-react";

const meta = {
	title: "Components/Label",
	component: Label,
	argTypes: {},
	args: {
		value: "Label"
	}
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};

export const CustomStyle: Story = {
	args: {
		className: "text-red-500"
	}
};
