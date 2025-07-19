// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Datepicker, DatepickerDays } from "@twin.org/ui-components-core";

const meta = {
	title: "Components/Datepicker",
	component: Datepicker,
	argTypes: {
		weekStart: {
			options: Object.values(DatepickerDays),
			control: { type: "inline-radio" }
		},
		autoHide: {
			options: Object.values([true, false]),
			control: { type: "inline-radio" }
		},
		inline: {
			options: Object.values([true, false]),
			control: { type: "inline-radio" }
		},
		title: {
			control: { type: "text" }
		}
	},
	args: { onClick: fn() }
} satisfies Meta<typeof Datepicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};

export const StartWednesday: Story = {
	args: {
		weekStart: DatepickerDays.Wednesday
	}
};

export const WithMinDate: Story = {
	args: {
		minDate: new Date(2025, 0, 1)
	}
};

export const WithMaxDate: Story = {
	args: {
		maxDate: new Date(2025, 1, 1)
	}
};

export const LocaleSpanish: Story = {
	args: {
		localization: {
			language: "es-ES",
			labelClearButton: "Borrar",
			labelTodayButton: "Hoy"
		}
	}
};

export const WithoutAutoHide: Story = {
	args: {
		autoHide: false
	}
};

export const WithTitle: Story = {
	args: {
		title: "Select a date"
	}
};

export const Inline: Story = {
	args: {
		inline: true
	}
};
