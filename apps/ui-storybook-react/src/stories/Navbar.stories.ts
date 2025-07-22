// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { Meta, StoryObj } from "@storybook/react";
import { Navbar } from "@twin.org/ui-components-enterprise";
import { House, MagnifyingGlass, Bell, UserCircle } from "@twin.org/ui-components-enterprise/icons";
import { Dropdown as FlowbiteDropdown, Avatar as FlowbiteAvatar } from "flowbite-react";
import { createElement } from "react";
import type { JSX } from "react";

const meta = {
	title: "enterprise/Navbar",
	component: Navbar,
	parameters: {
		layout: "fullscreen",
		docs: {
			description: {
				component:
					"Navigation bar component that provides a responsive menu system with support for branding, links, and dropdowns."
			}
		}
	},
	argTypes: {
		fluid: {
			description: "Make the navbar full width",
			control: { type: "boolean" },
			table: {
				type: { summary: "Boolean" },
				defaultValue: { summary: "false" }
			}
		},
		rounded: {
			description: "Apply rounded corners to the navbar",
			control: { type: "boolean" },
			table: {
				type: { summary: "Boolean" },
				defaultValue: { summary: "false" }
			}
		}
	}
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof Navbar>;

const createBrand = (): JSX.Element =>
	createElement(
		Navbar.Brand,
		{ href: "https://www.twin.org" },
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
	);

const createUserDropdown = (): JSX.Element =>
	createElement(
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
		)
	);

const createNavLinks = (): JSX.Element =>
	createElement(
		Navbar.Collapse,
		null,
		createElement(Navbar.Link, { href: "#", active: true }, "Home"),
		createElement(Navbar.Link, { href: "#" }, "Features"),
		createElement(Navbar.Link, { href: "#" }, "Pricing"),
		createElement(Navbar.Link, { href: "#" }, "Blog")
	);

/**
 * Default navbar with brand, user dropdown, and navigation links.
 */
export const Default: Story = {
	args: {
		fluid: false,
		rounded: false
	},
	render: args =>
		createElement(
			Navbar,
			args,
			createBrand(),
			createUserDropdown(),
			createElement(Navbar.Toggle),
			createNavLinks()
		)
};

/**
 * Navbar with rounded corners for a softer appearance.
 */
export const Rounded: Story = {
	args: {
		rounded: true
	},
	render: args =>
		createElement(Navbar, args, createBrand(), createElement(Navbar.Toggle), createNavLinks())
};

/**
 * Full-width navbar that spans the entire container.
 */
export const Fluid: Story = {
	args: {
		fluid: true
	},
	render: args =>
		createElement(Navbar, args, createBrand(), createElement(Navbar.Toggle), createNavLinks())
};
