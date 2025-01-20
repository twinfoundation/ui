// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { Meta, StoryObj } from "@storybook/react";
import { Table, Button } from "@twin.org/ui-components-react";
import { createElement } from "react";

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
	args: {
		head: [
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
					content: createElement("input", { type: "checkbox", checked: true })
				},
				{ className: "text-center", content: createElement(Button, { children: "Edit" }) }
			],
			[
				{ className: "text-center pl-4", content: "2" },
				{ className: "text-left", content: "Jane Doe" },
				{ className: "text-left", content: "25" },
				{
					className: "text-center",
					content: createElement("input", { type: "checkbox", checked: false })
				},
				{ className: "text-center", content: createElement(Button, { children: "Edit" }) }
			],
			[
				{ className: "text-center pl-4", content: "3" },
				{ className: "text-left", content: "John Smith" },
				{ className: "text-left", content: "30" },
				{
					className: "text-center",
					content: createElement("input", { type: "checkbox", checked: true })
				},
				{ className: "text-center", content: createElement(Button, { children: "Edit" }) }
			]
		]
	}
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
