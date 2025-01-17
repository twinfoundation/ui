// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { Meta, StoryObj } from "@storybook/react";
import { ListGroup, Icons } from "@twin.org/ui-components-react";

const meta = {
	title: "Components/ListGroup",
	component: ListGroup,
	argTypes: {},
	args: {
		items: [
			{ title: "Item 1", icon: Icons.User},
			{ title: "Item 2", icon: Icons.Database, active: true },
			{ title: "Item 3", disabled: true },
			{ title: "Item 4" }
		]
	}
} satisfies Meta<typeof ListGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};
