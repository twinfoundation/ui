// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { Meta, StoryObj } from "@storybook/react";
import { Table } from "@twin.org/ui-components-react";

const meta = {
	title: "Components/Table",
	component: Table,
	argTypes: {
		striped: {
			options: Object.values([true, false]),
			control: { type: "inline-radio" }
		},
		hoverable: {
			options: Object.values([true, false]),
			control: { type: "inline-radio" }
		}
	},
	args: {}
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};

export const Striped: Story = {
	args: {
		striped: true
	}
};

export const Hoverable: Story = {
	args: {
		hoverable: true
	}
};
