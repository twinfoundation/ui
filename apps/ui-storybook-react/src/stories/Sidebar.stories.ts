// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { Meta, StoryObj } from "@storybook/react";
import { Sidebar, IconsSolid, Badge, Button } from "@twin.org/ui-components-react";
import { Sidebar as FlowbiteSidebar } from "flowbite-react";
import { createElement } from "react";

const meta = {
	title: "Components/Sidebar",
	component: Sidebar,
	argTypes: {},
	args: {}
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		items: [
			{ label: "Dashboard", icon: IconsSolid.ChartPie, href: "#" },
			{ label: "Projects", icon: IconsSolid.ChartPie, href: "#", active: true },
			{ label: "Team", icon: IconsSolid.User, href: "#" },
			{ label: "Settings", icon: IconsSolid.UserSettings, href: "#" }
		]
	}
};

export const MultiLevelDropdown: Story = {
	args: {
		items: [
			{ label: "Dashboard", icon: IconsSolid.Home, href: "#" },
			{
				label: "E-commerce",
				icon: IconsSolid.ShoppingBag,
				href: "#",
				items: [
					{ label: "Products", href: "#" },
					{ label: "Sales", href: "#" }
				]
			},
			{
				label: "Users",
				icon: IconsSolid.User,
				href: "#",
				items: [
					{ label: "Add user", href: "#" },
					{ label: "List", href: "#" }
				]
			}
		]
	}
};

export const WithCustomChevron: Story = {
	args: {
		items: [
			{ label: "Dashboard", icon: IconsSolid.Home, href: "#" },
			{
				label: "E-commerce",
				icon: IconsSolid.ShoppingBag,
				href: "#",
				items: [
					{ label: "Products", href: "#" },
					{ label: "Sales", href: "#" }
				]
			}
		]
	}
};

export const WithContentSeparator: Story = {
	args: {
		items: [
			{ label: "Dashboard", icon: IconsSolid.ChartPie, href: "#" },
			{ label: "Kanban", icon: IconsSolid.VideoCamera, href: "#" },
			{ label: "Inbox", icon: IconsSolid.Image, href: "#" },
			{ label: "Users", icon: IconsSolid.User, href: "#" },
			{ label: "Products", icon: IconsSolid.ShoppingBag, href: "#" },
			{ label: "Sign In", icon: IconsSolid.ArrowRightAlt, href: "#" },
			{ label: "Sign Up", icon: IconsSolid.UserCircle, href: "#" }
		],
		CTA: createElement(
			"div",
			null,
			createElement("hr", { className: "my-3 border-gray-200 dark:border-gray-700" }),
			createElement(
				FlowbiteSidebar.Items,
				null,
				createElement(FlowbiteSidebar.ItemGroup, { className: "space-y-2" }, [
					createElement(
						FlowbiteSidebar.Item,
						{
							key: "upgrade",
							href: "#",
							icon: IconsSolid.ChartPie
						},
						"Upgrade to Pro"
					),
					createElement(
						FlowbiteSidebar.Item,
						{
							key: "documentation",
							href: "#",
							icon: IconsSolid.VideoCamera
						},
						"Documentation"
					),
					createElement(
						FlowbiteSidebar.Item,
						{
							key: "help",
							href: "#",
							icon: IconsSolid.QuestionCircle
						},
						"Help"
					)
				])
			)
		)
	}
};

export const WithButton: Story = {
	args: {
		items: [
			{ label: "Dashboard", icon: IconsSolid.Home, href: "#" },
			{ label: "Projects", icon: IconsSolid.ChartPie, href: "#" },
			{ label: "Team", icon: IconsSolid.User, href: "#" }
		],
		CTA: createElement(
			"div",
			{ className: "mt-auto" },
			createElement(Button, { color: "primary" }, "Custom action")
		)
	}
};

export const WithLogo: Story = {
	args: {
		logo: {
			img: "https://assets.weforum.org/sites/a0eTG000008PHKPYA4/3LI3Z9COsps.jpg",
			imgAlt: "Twin Logo",
			label: "TWIN",
			href: "https://www.twin.org"
		},
		items: [
			{ label: "Dashboard", icon: IconsSolid.Home, href: "#" },
			{ label: "Projects", icon: IconsSolid.ChartPie, href: "#" },
			{ label: "Team", icon: IconsSolid.User, href: "#" }
		]
	}
};

export const WithCTA: Story = {
	args: {
		items: [
			{ label: "Dashboard", icon: IconsSolid.Home, href: "#" },
			{ label: "Projects", icon: IconsSolid.ChartPie, href: "#", active: true },
			{ label: "Team", icon: IconsSolid.User, href: "#" },
			{ label: "Settings", icon: IconsSolid.UserSettings, href: "#" }
		],
		CTA: createElement(
			"div",
			null,
			createElement(
				"div",
				{ className: "mb-3 flex items-center" },
				createElement(Badge, { color: "warning" }, "Beta"),
				createElement(
					"button",
					{
						"aria-label": "Close",
						className:
							"-m-1.5 ml-auto inline-flex h-6 w-6 rounded-lg bg-gray-100 p-1 text-cyan-900 hover:bg-gray-200 focus:ring-2 focus:ring-gray-400 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600",
						type: "button"
					},
					createElement(
						"svg",
						{
							"aria-hidden": true,
							className: "h-4 w-4",
							fill: "currentColor",
							viewBox: "0 0 20 20",
							xmlns: "http://www.w3.org/2000/svg"
						},
						createElement("path", {
							fillRule: "evenodd",
							d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
							clipRule: "evenodd"
						})
					)
				)
			),
			createElement(
				"div",
				{ className: "mb-3 text-sm text-cyan-900 dark:text-gray-400" },
				"Preview the new Flowbite dashboard navigation! You can turn the new navigation off for a limited time in your profile."
			),
			createElement(
				"a",
				{
					className:
						"text-sm text-cyan-900 underline hover:text-cyan-800 dark:text-gray-400 dark:hover:text-gray-300",
					href: "#"
				},
				"Turn new navigation off"
			)
		)
	}
};

export const WithLabels: Story = {
	args: {
		items: [
			{
				label: "Inbox",
				icon: IconsSolid.Image,
				href: "#",
				badge: "3",
				badgeColor: "information"
			},
			{
				label: "Spam",
				icon: IconsSolid.ExclamationCircle,
				href: "#",
				badge: "42",
				badgeColor: "warning"
			},
			{
				label: "Updates",
				icon: IconsSolid.ArrowRightAlt,
				href: "#",
				badge: "New",
				badgeColor: "success"
			},
			{
				label: "Forums",
				icon: IconsSolid.UserEdit,
				href: "#",
				badge: "99+",
				badgeColor: "error"
			}
		]
	}
};
