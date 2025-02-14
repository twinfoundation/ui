// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import {
	Button,
	ButtonColors,
	ButtonSizes,
	IconsSolid,
	IconsOutline
} from "@twin.org/ui-components-react";

const meta = {
	title: "Components/Button",
	component: Button,
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
} satisfies Meta<typeof Button>;

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
		leftIcon: IconsSolid.ShoppingBag,
		showRightIcon: true,
		rightIcon: IconsSolid.ArrowRightAlt,
		disabled: false
	}
};

export const Primary: Story = {
	args: {
		children: "Primary Button",
		color: ButtonColors.Primary
	}
};

export const Secondary: Story = {
	args: {
		children: "Secondary Button",
		color: ButtonColors.Secondary
	}
};

export const Plain: Story = {
	args: {
		children: "Plain Button",
		color: ButtonColors.Plain
	}
};

export const Error: Story = {
	args: {
		children: "Error Button",
		color: ButtonColors.Error
	}
};

export const Warning: Story = {
	args: {
		children: "Warning Button",
		color: ButtonColors.Warning
	}
};

export const Success: Story = {
	args: {
		children: "Success Button",
		color: ButtonColors.Success
	}
};

export const Info: Story = {
	args: {
		children: "Info Button",
		color: ButtonColors.Info
	}
};

export const Dark: Story = {
	args: {
		children: "Dark Button",
		color: ButtonColors.Dark
	}
};

export const IconOnly: Story = {
	args: {
		size: "xs",
		color: ButtonColors.Primary,
		iconOnly: true,
		icon: IconsOutline.Plus
	}
};

export const WithLeftIcon: Story = {
	args: {
		children: "Add to cart",
		size: "xs",
		color: ButtonColors.Primary,
		showLeftIcon: true,
		leftIcon: IconsSolid.ShoppingBag,
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
		rightIcon: IconsSolid.ArrowRightAlt
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
