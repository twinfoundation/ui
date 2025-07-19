// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { Meta, StoryObj } from "@storybook/react";
import { Button, Checkbox, Table } from "@twin.org/ui-components-core";
import { createElement } from "react";

const meta = {
	title: "Components/Table",
	component: Table,
	argTypes: {
		onClick: {
			action: "clicked"
		},
		striped: {
			options: Object.values([true, false]),
			control: { type: "inline-radio" }
		},
		hoverable: {
			options: Object.values([true, false]),
			control: { type: "inline-radio" }
		}
	}
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		header: [
			{ className: "text-center pl-4", content: "ID" },
			{ className: "text-left", content: "Name" },
			{ className: "text-left", content: "Age" },
			{ className: "text-center", content: "Signed" },
			{ className: "text-left", content: "Actions" }
		],
		body: [
			[
				{ className: "text-center pl-4", content: "1" },
				{ className: "text-left", content: "John Doe" },
				{ className: "text-left", content: "28" },
				{
					className: "text-center",
					content: createElement(Checkbox, { checked: true })
				},
				{ className: "text-center", content: createElement(Button, { children: "Edit" }) }
			],
			[
				{ className: "text-center pl-4", content: "2" },
				{ className: "text-left", content: "Jane Doe" },
				{ className: "text-left", content: "25" },
				{
					className: "text-center",
					content: createElement(Checkbox, { checked: false })
				},
				{ className: "text-center", content: createElement(Button, { children: "Edit" }) }
			],
			[
				{ className: "text-center pl-4", content: "3" },
				{ className: "text-left", content: "John Smith" },
				{ className: "text-left", content: "30" },
				{
					className: "text-center",
					content: createElement(Checkbox, { checked: true })
				},
				{ className: "text-center", content: createElement(Button, { children: "Edit" }) }
			]
		]
	}
};

export const Striped: Story = {
	args: {
		striped: true,
		header: [
			{ className: "text-center pl-4", content: "ID" },
			{ className: "text-left", content: "Name" },
			{ className: "text-left", content: "Age" },
			{ className: "text-center", content: "Signed" },
			{ className: "text-left", content: "Actions" }
		],
		body: [
			[
				{ className: "text-center pl-4", content: "1" },
				{ className: "text-left", content: "John Doe" },
				{ className: "text-left", content: "28" },
				{
					className: "text-center",
					content: createElement(Checkbox, { checked: true })
				},
				{ className: "text-center", content: createElement(Button, { children: "Edit" }) }
			],
			[
				{ className: "text-center pl-4", content: "2" },
				{ className: "text-left", content: "Jane Doe" },
				{ className: "text-left", content: "25" },
				{
					className: "text-center",
					content: createElement(Checkbox, { checked: false })
				},
				{ className: "text-center", content: createElement(Button, { children: "Edit" }) }
			]
		]
	}
};

export const Hoverable: Story = {
	args: {
		hoverable: true,
		header: [
			{ className: "text-center pl-4", content: "ID" },
			{ className: "text-left", content: "Name" },
			{ className: "text-left", content: "Age" },
			{ className: "text-center", content: "Signed" },
			{ className: "text-left", content: "Actions" }
		],
		body: [
			[
				{ className: "text-center pl-4", content: "1" },
				{ className: "text-left", content: "John Doe" },
				{ className: "text-left", content: "28" },
				{
					className: "text-center",
					content: createElement(Checkbox, { checked: true })
				},
				{ className: "text-center", content: createElement(Button, { children: "Edit" }) }
			],
			[
				{ className: "text-center pl-4", content: "2" },
				{ className: "text-left", content: "Jane Doe" },
				{ className: "text-left", content: "25" },
				{
					className: "text-center",
					content: createElement(Checkbox, { checked: false })
				},
				{ className: "text-center", content: createElement(Button, { children: "Edit" }) }
			]
		]
	}
};

export const WithFooter: Story = {
	args: {
		header: [
			{ className: "text-center pl-4", content: "ID" },
			{ className: "text-left", content: "Name" },
			{ className: "text-left", content: "Age" },
			{ className: "text-center", content: "Signed" }
		],
		body: [
			[
				{ className: "text-center pl-4", content: "1" },
				{ className: "text-left", content: "John Doe" },
				{ className: "text-left", content: "28" },
				{
					className: "text-center",
					content: createElement(Checkbox, { checked: true })
				}
			],
			[
				{ className: "text-center pl-4", content: "2" },
				{ className: "text-left", content: "Jane Doe" },
				{ className: "text-left", content: "25" },
				{
					className: "text-center",
					content: createElement(Checkbox, { checked: false })
				}
			]
		],
		footer: [
			{
				className: "bg-gray-50 dark:bg-gray-700",
				cells: [
					{ className: "text-center pl-4", content: "Total" },
					{ className: "text-left", content: "2 Users" },
					{ className: "text-left", content: "Avg: 26.5" },
					{ className: "text-center", content: "50% Signed" }
				]
			}
		]
	}
};
