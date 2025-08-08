// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { Meta, StoryObj } from "@storybook/react";
import { Pagination, PaginationLayouts } from "@twin.org/ui-components-core";

const meta = {
	title: "core/Pagination",
	component: Pagination,
	argTypes: {
		layout: {
			options: Object.values(PaginationLayouts),
			control: { type: "inline-radio", options: Object.values(PaginationLayouts) }
		},
		showIcons: {
			options: [true, false],
			control: { type: "inline-radio", options: [true, false] }
		}
	},
	args: {}
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		currentPage: 1,
		onPageChange: () => {},
		totalPages: 10
	}
};

export const NavigationLayout: Story = {
	args: {
		currentPage: 1,
		onPageChange: () => {},
		totalPages: 10,
		layout: PaginationLayouts.Navigation
	}
};

export const TableLayout: Story = {
	args: {
		currentPage: 1,
		onPageChange: () => {},
		totalPages: 10,
		layout: PaginationLayouts.Table
	}
};

export const ShowIcons: Story = {
	args: {
		currentPage: 1,
		onPageChange: () => {},
		totalPages: 10,
		showIcons: true
	}
};

export const CustomLabels: Story = {
	args: {
		currentPage: 1,
		onPageChange: () => {},
		totalPages: 10,
		previousLabel: "Go back",
		nextLabel: "Go forward"
	}
};

export const IconsOnly: Story = {
	args: {
		currentPage: 1,
		onPageChange: () => {},
		totalPages: 10,
		previousLabel: "",
		nextLabel: "",
		showIcons: true
	}
};
