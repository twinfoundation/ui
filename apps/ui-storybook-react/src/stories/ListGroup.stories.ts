// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { Meta, StoryObj } from "@storybook/react";
import { ListGroup } from "@twin.org/ui-components-react";
import { IdentificationCard, Plus } from "@twin.org/ui-components-react/icons";

const meta = {
	title: "Components/ListGroup",
	component: ListGroup,
	argTypes: {},
	args: {
		items: [
			{ title: "Item 1", icon: IdentificationCard },
			{ title: "Item 2", icon: Plus, active: true },
			{ title: "Item 3", disabled: true },
			{ title: "Item 4" },
			{ title: "Item 5", href: "#" }
		]
	}
} satisfies Meta<typeof ListGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};
