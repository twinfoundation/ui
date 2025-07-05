// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { Meta, StoryObj, Decorator } from "@storybook/react";
import { Sidebar, Badge, Button } from "../";
import { BadgeColors } from "../badge/badgeColors";
;
import {
	ChartBar,
	Camera,
	Image,
	UserCircle,
	Gear,
	House,
	Bag,
	ArrowRightFat,
	Question,
	WarningCircle,
	PencilLine
} from "../icons";
import { Sidebar as FlowbiteSidebar } from "flowbite-react";

const meta = {
	title: "Components/Sidebar",
	component: Sidebar,
	argTypes: {},
	args: {}
} satisfies Meta<typeof Sidebar>;

export default meta;
/**
 * Type for Sidebar component stories.
 */
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		items: [
			{ label: "Dashboard", icon: ChartBar, href: "#" },
			{ label: "Projects", icon: ChartBar, href: "#", active: true },
			{ label: "Team", icon: UserCircle, href: "#" },
			{ label: "Settings", icon: Gear, href: "#" }
		]
	}
};

export const MultiLevelDropdown: Story = {
	args: {
		items: [
			{ label: "Dashboard", icon: House, href: "#" },
			{
				label: "E-commerce",
				icon: Bag,
				href: "#",
				items: [
					{ label: "Products", href: "#" },
					{ label: "Sales", href: "#" }
				]
			},
			{
				label: "UserCircles",
				icon: UserCircle,
				href: "#",
				items: [
					{ label: "Add UserCircle", href: "#" },
					{ label: "List", href: "#" }
				]
			}
		]
	}
};

export const WithCustomChevron: Story = {
	args: {
		items: [
			{ label: "Dashboard", icon: House, href: "#" },
			{
				label: "E-commerce",
				icon: Bag,
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
			{ label: "Dashboard", icon: ChartBar, href: "#" },
			{ label: "Kanban", icon: Camera, href: "#" },
			{ label: "Inbox", icon: Image, href: "#" },
			{ label: "UserCircles", icon: UserCircle, href: "#" },
			{ label: "Products", icon: Bag, href: "#" },
			{ label: "Sign In", icon: ArrowRightFat, href: "#" },
			{ label: "Sign Up", icon: UserCircle, href: "#" }
		],
		CTA: (
			<div>
				<hr className="my-3 border-gray-200 dark:border-gray-700" />
				<FlowbiteSidebar.Items>
					<FlowbiteSidebar.ItemGroup className="space-y-2">
						<FlowbiteSidebar.Item href="#" icon={ChartBar}>
							Upgrade to Pro
						</FlowbiteSidebar.Item>
						<FlowbiteSidebar.Item href="#" icon={Camera}>
							Documentation
						</FlowbiteSidebar.Item>
						<FlowbiteSidebar.Item href="#" icon={Question}>
							Help
						</FlowbiteSidebar.Item>
					</FlowbiteSidebar.ItemGroup>
				</FlowbiteSidebar.Items>
			</div>
		)
	}
};

export const WithButton: Story = {
	args: {
		items: [
			{ label: "Dashboard", icon: House, href: "#" },
			{ label: "Projects", icon: ChartBar, href: "#" },
			{ label: "Team", icon: UserCircle, href: "#" }
		],
		CTA: (
			<div className="mt-auto">
				<Button color="primary">Custom action</Button>
			</div>
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
			{ label: "Dashboard", icon: House, href: "#" },
			{ label: "Projects", icon: ChartBar, href: "#" },
			{ label: "Team", icon: UserCircle, href: "#" }
		]
	}
};

export const WithCTA: Story = {
	args: {
		items: [
			{ label: "Dashboard", icon: House, href: "#" },
			{ label: "Projects", icon: ChartBar, href: "#", active: true },
			{ label: "Team", icon: UserCircle, href: "#" },
			{ label: "Settings", icon: Gear, href: "#" }
		],
		CTA: (
			<div>
				<div className="mb-3 flex items-center">
					<Badge color="warning">Beta</Badge>
					<button
						aria-label="Close"
						className="-m-1.5 ml-auto inline-flex h-6 w-6 rounded-lg bg-gray-100 p-1 text-cyan-900 hover:bg-gray-200 focus:ring-2 focus:ring-gray-400 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600"
						type="button"
					>
						<svg
							aria-hidden="true"
							className="h-4 w-4"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
								clipRule="evenodd"
							/>
						</svg>
					</button>
				</div>
				<div className="mb-3 text-sm text-cyan-900 dark:text-gray-400">
					Preview the new Flowbite dashboard navigation! You can turn the new navigation off for a
					limited time in your profile.
				</div>
				<a
					className="text-sm text-cyan-900 underline hover:text-cyan-800 dark:text-gray-400 dark:hover:text-gray-300"
					href="#"
				>
					Turn new navigation off
				</a>
			</div>
		)
	}
};

export const WithLabels: Story = {
	args: {
		items: [
			{
				label: "Inbox",
				icon: Image,
				href: "#",
				badge: "3",
				badgeColor: BadgeColors.Info
			},
			{
				label: "Spam",
				icon: WarningCircle,
				href: "#",
				badge: "42",
				badgeColor: BadgeColors.Warning
			},
			{
				label: "Updates",
				icon: ArrowRightFat,
				href: "#",
				badge: "New",
				badgeColor: BadgeColors.Success
			},
			{
				label: "Forums",
				icon: PencilLine,
				href: "#",
				badge: "99+",
				badgeColor: BadgeColors.Failure
			}
		]
	}
};

export const WithFooterContent: Story = {
	args: {
		items: [
			{ label: "Dashboard", icon: House, href: "#" },
			{ label: "Team", icon: UserCircle, href: "#" }
		],
		footerContent: <div className="p-4 text-sm text-gray-500">Custom footer content</div>
	}
};

const FullHeightDecorator: Decorator = Story => (
	<div className="flex h-screen">
		<div className="sticky left-0 top-0 h-screen" style={{ width: "280px" }}>
			<div className="bg-surface-main flex h-full flex-col">
				<Story />
			</div>
		</div>
		<div className="bg-surface-main flex-1 p-4">
			<h2 className="text-xl font-bold">Content Area</h2>
			<p>This demonstrates how the sidebar would look in a full-height layout.</p>
		</div>
	</div>
);

export const WithFullHeightParent: Story = {
	decorators: [FullHeightDecorator],
	args: {
		items: [
			{ label: "Dashboard", icon: House, href: "#", active: true },
			{ label: "Settings", icon: Gear, href: "#" },
			{ label: "Projects", icon: ChartBar, href: "#" },
			{ label: "Team", icon: UserCircle, href: "#" }
		],
		footerItems: [{ label: "Help", icon: Question, href: "#" }],
		footerContent: (
			<div className="p-4 text-sm text-gray-500">
				<div className="text-primary mb-2 text-base font-bold">Kate Johnson</div>
				<div className="text-tertiary">Admin</div>
			</div>
		),
		header: (
			<div className="p-2">
				<h1 className="text-xl font-bold">AS DA UK</h1>
				<h2 className="text-tertiary">Organization</h2>
			</div>
		)
	},
	parameters: {
		layout: "fullscreen"
	}
};

export const WithHeader: Story = {
	args: {
		items: [
			{ label: "Dashboard", icon: House, href: "#" },
			{ label: "Projects", icon: ChartBar, href: "#" },
			{ label: "Team", icon: UserCircle, href: "#" }
		],
		header: (
			<div className="">
				<h1 className="text-xl font-bold">TWIN</h1>
			</div>
		)
	}
};
