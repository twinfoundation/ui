// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { ButtonColors } from "../button-2/buttonColors";
import { ButtonSizes } from "../button-2/buttonSizes";
import { Button2 } from "../button-2/button-2";
import { ArrowRight } from "../icons/arrowRight";
import { Plus } from "../icons/plus";
import { ShoppingCart } from "../icons/shoppingCart";

const meta = {
	title: "Components/Button2",
	component: Button2,
	argTypes: {
		color: {
			options: Object.values(ButtonColors),
			control: { type: "inline-radio" }
		},
		size: {
			options: Object.values(ButtonSizes),
			control: { type: "inline-radio" }
		},
		outline: {
			control: "boolean"
		},
		iconOnly: {
			control: "boolean"
		},
		showButtonText: {
			control: "boolean"
		},
		buttonText: {
			control: "text"
		},
		showLeftIcon: {
			control: "boolean"
		},
		leftIcon: {
			control: "object"
		},
		rightIcon: {
			control: "object"
		},
		showRightIcon: {
			control: "boolean"
		},
		icon: {
			control: "object"
		},
		disabled: {
			control: "boolean"
		}
	},
	args: { onClick: fn() }
} satisfies Meta<typeof Button2>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: "Button text",
		size: "xs",
		color: ButtonColors.Primary,
		outline: false,
		showButtonText: true,
		showLeftIcon: true,
		leftIcon: ShoppingCart,
		showRightIcon: true,
		rightIcon: ArrowRight,
		disabled: false
	}
};

export const Primary: Story = {
	args: {
		children: "Primary Button",
		size: "xs",
		color: ButtonColors.Primary
	}
};

export const Secondary: Story = {
	args: {
		children: "Secondary Button",
		size: "xs",
		color: ButtonColors.Secondary
	}
};

export const Plain: Story = {
	args: {
		children: "Plain Button",
		size: "xs",
		color: ButtonColors.Plain
	}
};

export const Ghost: Story = {
	args: {
		children: "Ghost Button",
		size: "xs",
		color: ButtonColors.Ghost
	}
};

export const Error: Story = {
	args: {
		children: "Error Button",
		size: "xs",
		color: ButtonColors.Error
	}
};

export const Warning: Story = {
	args: {
		children: "Warning Button",
		size: "xs",
		color: ButtonColors.Warning
	}
};

export const Success: Story = {
	args: {
		children: "Success Button",
		size: "xs",
		color: ButtonColors.Success
	}
};

export const Info: Story = {
	args: {
		children: "Info Button",
		size: "xs",
		color: ButtonColors.Info
	}
};

export const Dark: Story = {
	args: {
		children: "Dark Button",
		size: "xs",
		color: ButtonColors.Dark
	}
};

export const IconOnly: Story = {
	args: {
		size: "xs",
		color: ButtonColors.Primary,
		iconOnly: true,
		icon: Plus
	}
};

export const WithLeftIcon: Story = {
	args: {
		children: "Add to cart",
		size: "xs",
		color: ButtonColors.Primary,
		showLeftIcon: true,
		leftIcon: ShoppingCart,
		showRightIcon: false
	}
};

export const WithRightIcon: Story = {
	args: {
		children: "Next",
		size: "xs",
		color: ButtonColors.Primary,
		showLeftIcon: false,
		showRightIcon: true,
		rightIcon: ArrowRight
	}
};

export const DisabledState: Story = {
	args: {
		children: "Disabled button",
		size: "xs",
		color: ButtonColors.Primary,
		disabled: true
	}
};
