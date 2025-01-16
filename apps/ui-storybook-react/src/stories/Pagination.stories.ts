// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { Meta, StoryObj } from "@storybook/react";
import { Pagination, PaginationLayouts } from "@twin.org/ui-components-react";

const meta = {
	title: "Components/Pagination",
	component: Pagination,
	argTypes: {
		layout: {
			options: Object.values(PaginationLayouts),
			control: { type: "inline-radio" }
		},
		showIcons: {
			options: Object.values([true, false]),
			control: { type: "inline-radio" }
		},
	},
	args: {}
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};

export const NavigationLayout: Story = {
	args: {
        layout: PaginationLayouts.Navigation
    }
};

export const TableLayout: Story = {
	args: {
        layout: PaginationLayouts.Table
    }
};

export const ShowIcons: Story = {
	args: {
        showIcons: true
    }
};

export const CustomLabels: Story = {
	args: {
        previousLabel: "Go back",
        nextLabel: "Go forward"
    }
};