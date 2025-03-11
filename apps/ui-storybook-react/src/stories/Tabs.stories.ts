// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { Meta, StoryObj } from "@storybook/react";
import { Tabs, TabsVariants } from "@twin.org/ui-components-react";
import {
	ProfileCard,
	UserSettings,
	Bell,
	Envelope
} from "@twin.org/ui-components-react/icons/solid";
import { createElement } from "react";

const meta = {
	title: "Components/Tabs",
	component: Tabs,
	argTypes: {
		variant: {
			options: Object.values(TabsVariants),
			control: { type: "inline-radio" }
		}
	},
	args: {
		items: [
			{
				title: "Tab 1",
				content: createElement("div", { className: "m-4 p-4 text-center" }, "Tab 1 content")
			},
			{
				title: "Tab 2",
				content: createElement("div", { className: "m-4 p-4 text-center" }, "Tab 2 content"),
				active: true
			},
			{ title: "Tab 3", content: "Tab 3 content" },
			{ title: "Tab 4", content: "", disabled: true }
		]
	}
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};

export const Underline: Story = {
	args: {
		variant: TabsVariants.Underline
	}
};

export const Pills: Story = {
	args: {
		variant: TabsVariants.Pills
	}
};

export const FullWidth: Story = {
	args: {
		variant: TabsVariants.FullWidth
	}
};

export const WithIconsFullWidth: Story = {
	args: {
		variant: TabsVariants.FullWidth,
		items: [
			{
				title: "Profile",
				content: createElement(
					"div",
					{ className: "m-4 p-4 text-center" },
					"Profile settings and information"
				),
				icon: ProfileCard
			},
			{
				title: "Settings",
				content: createElement("div", { className: "m-4 p-4 text-center" }, "Application settings"),
				icon: UserSettings,
				active: true
			},
			{
				title: "Notifications",
				content: createElement(
					"div",
					{ className: "m-4 p-4 text-center" },
					"Notification preferences"
				),
				icon: Bell
			},
			{
				title: "Messages",
				content: createElement("div", { className: "m-4 p-4 text-center" }, "Your messages"),
				icon: Envelope
			}
		]
	}
};
