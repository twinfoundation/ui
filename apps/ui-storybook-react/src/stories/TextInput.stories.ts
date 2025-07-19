// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { Meta, StoryObj } from "@storybook/react";
import { TextInput, TextInputColors, TextInputSizes } from "@twin.org/ui-components-core";
import { MagnifyingGlass, Envelope } from "@twin.org/ui-components-core/icons";
import { createElement } from "react";

const meta = {
	title: "Components/TextInput",
	component: TextInput,
	argTypes: {
		color: {
			options: Object.values(TextInputColors),
			control: { type: "inline-radio" }
		},
		sizing: {
			options: Object.values(TextInputSizes),
			control: { type: "inline-radio" }
		},
		disabled: {
			options: Object.values([true, false]),
			control: { type: "inline-radio" }
		},
		required: {
			options: Object.values([true, false]),
			control: { type: "inline-radio" }
		},
		readOnly: {
			options: Object.values([true, false]),
			control: { type: "inline-radio" }
		}
	},
	args: {
		placeholder: "Enter text here"
	}
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};

export const CustomPlaceholder: Story = {
	args: {
		placeholder: "Enter your information here"
	}
};

export const Small: Story = {
	args: {
		sizing: TextInputSizes.Small
	}
};

export const Large: Story = {
	args: {
		sizing: TextInputSizes.Large
	}
};

export const CustomStyle: Story = {
	args: {
		placeholder: "Custom style text area",
		className: "p-2 max-w-md text-surface-button focus:ring-surface-button-pressed",
		color: TextInputColors.None
	}
};

export const SuccessStyle: Story = {
	args: {
		color: TextInputColors.Success,
		helperText: createElement(
			"div",
			null,
			createElement(
				"span",
				{
					className: "font-medium"
				},
				"Congrats!"
			),
			" Username available!"
		)
	}
};

export const WarnStyle: Story = {
	args: {
		color: TextInputColors.Warning
	}
};

export const FailureStyle: Story = {
	args: {
		color: TextInputColors.Failure,
		helperText: createElement(
			"div",
			null,
			createElement(
				"span",
				{
					className: "font-medium"
				},
				"Oops!"
			),
			" Username already taken!"
		)
	}
};

export const InfoStyle: Story = {
	args: {
		color: TextInputColors.Info
	}
};

export const Disabled: Story = {
	args: {
		disabled: true
	}
};

export const Required: Story = {
	args: {
		required: true
	}
};

export const ReadOnly: Story = {
	args: {
		readOnly: true,
		value: "This is a read-only input."
	}
};

export const WithIcon: Story = {
	args: {
		icon: MagnifyingGlass
	}
};

export const WithRightIcon: Story = {
	args: {
		rightIcon: MagnifyingGlass
	}
};

export const WithAddon: Story = {
	args: {
		addon: "https://"
	}
};

export const Password: Story = {
	args: {
		type: "password",
		placeholder: "Enter your password"
	}
};

export const Email: Story = {
	args: {
		type: "email",
		placeholder: "Enter your email",
		icon: Envelope,
		required: true
	}
};

export const WithHelperText: Story = {
	args: {
		helperText: "This is a helper text."
	}
};

export const WithNodeHelperText: Story = {
	args: {
		helperText: createElement(
			"div",
			null,
			"We’ll never share your details. Read our ",
			createElement(
				"a",
				{
					href: "#",
					className: "ml-1 font-medium text-cyan-600 hover:underline dark:text-cyan-500"
				},
				"Privacy Policy"
			)
		)
	}
};
