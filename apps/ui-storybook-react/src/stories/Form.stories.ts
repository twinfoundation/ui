// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Form, Label, TextInput, Button } from "@twin.org/ui-components-react";
import { createElement } from "react";

const meta = {
	title: "Components/Form",
	component: Form,
	argTypes: {},
	args: {
		className: "flex h-[80vh] flex-col gap-4 overflow-auto"
	}
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		content: createElement(
			"div",
			{},
			createElement(Label, { value: "Form Content" }),

			createElement(
				"div",
				{},
				createElement(Label, { value: "TextInput", htmlFor: "TextInput" }),
				createElement(TextInput, { required: true, id: "TextInput" })
			),

			createElement(
				"div",
				{},
				createElement(
					"div",
					{ className: "mb-2 mt-2 block" },
					createElement(Label, { htmlFor: "email2", value: "Your email with helper text" })
				),
				createElement(
					Button,
					{ type: "submit", className: "bg-surface-button text-white mb-2 mt-2" },
					"Submit"
				)
			)
		)
	}
};

export const ComplexForm: Story = {
	args: {
		content: createElement(
			"div",
			{},
			createElement(Label, { value: "Form with more complex content" }),

			createElement(
				"div",
				{},
				createElement(Label, { value: "TextInput", htmlFor: "TextInput" }),
				createElement(TextInput, { required: true, id: "TextInput" })
			),

			createElement(
				"div",
				{},
				createElement(
					"div",
					{ className: "mb-2 mt-2 block" },
					createElement(Label, { htmlFor: "email1", value: "Your email" })
				),
				createElement(TextInput, {
					required: true,
					className: "focus:border-surface-button rounded-lg border-2",
					id: "email1",
					type: "email",
					placeholder: "name@flowbite.com"
				})
			),

			createElement(
				"div",
				{},
				createElement(
					"div",
					{ className: "mb-2 mt-2 block" },
					createElement(Label, { htmlFor: "email2", value: "Your email with helper text" })
				),
				createElement(TextInput, {
					required: true,
					id: "email2",
					type: "email",
					placeholder: "name@flowbite.com",
					helperText: createElement(
						"span",
						{},
						"We’ll never share your details. Read our",
						createElement(
							"a",
							{
								href: "#",
								className: "ml-1 font-medium text-cyan-600 hover:underline dark:text-cyan-500"
							},
							"Privacy Policy"
						),
						"."
					)
				})
			),

			createElement(
				"div",
				{},
				createElement(
					"div",
					{ className: "mb-2 mt-2 block" },
					createElement(Label, { htmlFor: "email2", value: "Your email with helper text" })
				),
				createElement(
					Button,
					{ type: "submit", className: "bg-surface-button text-white mb-2 mt-2" },
					"Submit"
				)
			)
		)
	}
};

export const CustomStyle: Story = {
	args: {
		className: "max-w-md bg-yellow-100 p-4",
		content: createElement(
			"div",
			{},
			createElement(Label, { value: "Custom form style" }),

			createElement(
				"div",
				{},
				createElement(Label, { value: "TextInput", htmlFor: "TextInput" }),
				createElement(TextInput, { required: true, id: "TextInput" })
			),

			createElement(
				"div",
				{},
				createElement(
					"div",
					{ className: "mb-2 mt-2 block" },
					createElement(Label, { htmlFor: "email2", value: "Your email with helper text" })
				),
				createElement(
					Button,
					{ type: "submit", className: "bg-surface-button text-white mb-2 mt-2" },
					"Submit"
				)
			)
		)
	}
};
