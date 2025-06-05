// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { Meta, StoryObj } from "@storybook/react-vite";
import { ToggleSwitch, ToggleSwitchSizes, ToggleSwitchColors } from "@twin.org/ui-components-react";

const meta = {
	title: "Components/ToggleSwitch",
	component: ToggleSwitch,
	argTypes: {
		disabled: {
			options: Object.values([true, false]),
			control: { type: "inline-radio" }
		},
		checked: {
			options: Object.values([true, false]),
			control: { type: "inline-radio" }
		},
		sizing: {
			options: Object.values(ToggleSwitchSizes),
			control: { type: "inline-radio" }
		},
		color: {
			options: Object.values(ToggleSwitchColors),
			control: { type: "inline-radio" }
		}
	},
	args: {
		label: "ToggleSwitch",
		checked: false
	}
} satisfies Meta<typeof ToggleSwitch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};

export const Checked: Story = {
	args: {
		checked: true,
		label: "ToggleSwitch checked"
	}
};

export const Disabled: Story = {
	args: {
		disabled: true
	}
};

export const Small: Story = {
	args: {
		sizing: ToggleSwitchSizes.Small
	}
};

export const Large: Story = {
	args: {
		sizing: ToggleSwitchSizes.Large
	}
};

export const Indigo: Story = {
	args: {
		color: ToggleSwitchColors.Indigo
	}
};

export const Red: Story = {
	args: {
		color: ToggleSwitchColors.Red
	}
};

export const Green: Story = {
	args: {
		color: ToggleSwitchColors.Green
	}
};

export const Blue: Story = {
	args: {
		color: ToggleSwitchColors.Blue
	}
};

export const Yellow: Story = {
	args: {
		color: ToggleSwitchColors.Yellow
	}
};

export const Purple: Story = {
	args: {
		color: ToggleSwitchColors.Purple
	}
};
