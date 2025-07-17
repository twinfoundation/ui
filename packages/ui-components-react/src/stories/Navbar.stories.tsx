// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { Meta, StoryObj } from "@storybook/react";
import { Navbar } from "../";
import { Dropdown, DropdownHeader, DropdownDivider, DropdownItem, Avatar } from "flowbite-react";
import { createElement } from "react";
import type { JSX } from "react";

const meta = {
	title: "Components/Navbar",
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

const createUserDropdown = (): JSX.Element => (
  <div className="flex md:order-2">
    <Dropdown
      arrowIcon={false}
      inline
      label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />}
    >
      {dropdownItems}
    </Dropdown>
  </div>
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

const dropdownItems = [
	<DropdownHeader key="header">Header</DropdownHeader>,
	<DropdownItem key="dashboard">Dashboard</DropdownItem>,
	<DropdownItem key="settings">Settings</DropdownItem>,
	<DropdownItem key="earnings">Earnings</DropdownItem>,
	<DropdownDivider key="divider" />,
	<DropdownItem key="signout">Sign out</DropdownItem>
];

/**
 * Default navbar with brand, user dropdown, and navigation links.
 */
export const Default: Story = {
	args: {
		fluid: false,
		rounded: false
	},
	render: args => (
		<Navbar {...args}>
			{createBrand()}
			{createUserDropdown()}
			<Navbar.Toggle />
			{createNavLinks()}
		</Navbar>
	)
};

/**
 * Navbar with rounded corners for a softer appearance.
 */
export const Rounded: Story = {
	args: {
		rounded: true
	},
	render: args => (
		<Navbar {...args}>
			{createBrand()}
			<Navbar.Toggle />
			{createNavLinks()}
		</Navbar>
	)
};

/**
 * Full-width navbar that spans the entire container.
 */
export const Fluid: Story = {
	args: {
		fluid: true
	},
	render: args => (
		<Navbar {...args}>
			{createBrand()}
			<Navbar.Toggle />
			{createNavLinks()}
		</Navbar>
	)
};
