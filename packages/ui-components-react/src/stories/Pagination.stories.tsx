// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { PaginationLayouts } from "../pagination/paginationLayouts";
import { Pagination } from "../pagination-2";

const meta = {
	title: "Components/Pagination",
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
// eslint-disable-next-line jsdoc/require-jsdoc
type Story = StoryObj<typeof meta>;

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const PaginationWrapper = (args: any) => {
	const [currentPage, setCurrentPage] = useState(args.currentPage || 1);
	return <Pagination {...args} currentPage={currentPage} onPageChange={setCurrentPage} />;
};

export const Default: Story = {
	render: args => <PaginationWrapper {...args} />,
	args: {
		currentPage: 1,
		onPageChange: () => {},
		totalPages: 10
	}
};

export const NavigationLayout: Story = {
	render: args => <PaginationWrapper {...args} />,
	args: {
		currentPage: 1,
		onPageChange: () => {},
		totalPages: 10,
		layout: PaginationLayouts.Navigation
	}
};

export const TableLayout: Story = {
	render: args => <PaginationWrapper {...args} />,
	args: {
		currentPage: 1,
		onPageChange: () => {},
		totalPages: 10,
		layout: PaginationLayouts.Table
	}
};

export const ShowIcons: Story = {
	render: args => <PaginationWrapper {...args} />,
	args: {
		currentPage: 1,
		onPageChange: () => {},
		totalPages: 10,
		showIcons: true
	}
};

export const CustomLabels: Story = {
	render: args => <PaginationWrapper {...args} />,
	args: {
		currentPage: 1,
		onPageChange: () => {},
		totalPages: 10,
		previousLabel: "Go back",
		nextLabel: "Go forward"
	}
};

export const IconsOnly: Story = {
	render: args => <PaginationWrapper {...args} />,
	args: {
		currentPage: 1,
		onPageChange: () => {},
		totalPages: 10,
		previousLabel: "",
		nextLabel: "",
		showIcons: true
	}
};
