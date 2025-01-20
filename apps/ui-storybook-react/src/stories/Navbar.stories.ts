// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { Meta, StoryObj } from "@storybook/react";
import { Navbar } from "@twin.org/ui-components-react";
import {
	Dropdown as FlowbiteDropdown,
	Avatar as FlowbiteAvatar,
	Navbar as FlowbiteNavbar
} from "flowbite-react";
import { createElement } from "react";

const meta = {
	title: "Components/Navbar",
	component: Navbar,
	argTypes: {
		fluid: {
			options: Object.values([true, false]),
			control: { type: "inline-radio" }
		},
		rounded: {
			options: Object.values([true, false]),
			control: { type: "inline-radio" }
		}
	},
	args: {
		brand: {
			href: "https://www.twin.org",
			content: createElement(
				"div",
				null,
				createElement("img", {
					src: "https://assets.weforum.org/sites/a0eTG000008PHKPYA4/3LI3Z9COsps.jpg",
					className: "mr-3 h-6 sm:h-9",
					alt: "TWIN Logo"
				}),
				createElement(
					"span",
					{ className: "self-center whitespace-nowrap text-xl font-semibold dark:text-white" },
					"TWIN"
				)
			)
		}
	}
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		content: createElement(
			"div",
			{ className: "flex md:order-2" },
			createElement(
				FlowbiteDropdown,
				{
					arrowIcon: false,
					inline: true,
					label: createElement(FlowbiteAvatar, {
						alt: "User settings",
						img: "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
						rounded: true
					})
				},
				createElement(
					FlowbiteDropdown.Header,
					null,
					createElement("span", { className: "block text-sm" }, "Bonnie Green"),
					createElement(
						"span",
						{ className: "block truncate text-sm font-medium" },
						"name@flowbite.com"
					)
				),
				createElement(FlowbiteDropdown.Item, null, "Dashboard"),
				createElement(FlowbiteDropdown.Item, null, "Settings"),
				createElement(FlowbiteDropdown.Item, null, "Earnings"),
				createElement(FlowbiteDropdown.Divider, null),
				createElement(FlowbiteDropdown.Item, null, "Sign out")
			),
			createElement(FlowbiteNavbar.Toggle, null)
		),
		links: [
			{ href: "#", label: "Home" },
			{ href: "#", label: "Features", active: true },
			{ href: "#", label: "Pricing" },
			{ href: "#", label: "Blog" }
		]
	}
};

export const Rounded: Story = {
	args: {
		rounded: true,
		links: [
			{ href: "#", label: "Home" },
			{ href: "#", label: "Features", active: true },
			{ href: "#", label: "Pricing" },
			{ href: "#", label: "Blog" }
		]
	}
};

export const Fluid: Story = {
	args: {
		fluid: true,
		links: [
			{ href: "#", label: "Home" },
			{ href: "#", label: "Features", active: true },
			{ href: "#", label: "Pricing" },
			{ href: "#", label: "Blog" }
		]
	}
};
