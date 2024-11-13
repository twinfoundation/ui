import { Meta, StoryObj } from "@storybook/react";
import { Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";

const meta: Meta = {
	title: "Components/NavbarTabs",
	component: Tabs
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const TabsWithIcons: Story = {
	render: () => (
		<Tabs aria-label="Tabs with icons" variant="pills">
			<Tabs.Item active className="text-blue focus:ring-blue-600 focus:bg-blue-600 focus:text-blue-600 active:bg-blue-600 active:ring-blue-600 "  title="My account" icon={HiUserCircle}>
				This is{" "}
				<span className="font-medium text-gray-800 dark:text-white">
					Profile tab's associated content
				</span>
				. Clicking another tab will toggle the visibility of this one for the next.
			</Tabs.Item>
			<Tabs.Item title="settings" icon={MdDashboard}>
				This is{" "}
				<span className="font-medium text-gray-800 dark:text-white">
					Dashboard tab's associated content
				</span>
				. Clicking another tab will toggle the visibility of this one for the next.
			</Tabs.Item>
			<Tabs.Item title="Settings" icon={HiAdjustments}>
				This is{" "}
				<span className="font-medium text-gray-800 dark:text-white">
					Settings tab's associated content
				</span>
				. Clicking another tab will toggle the visibility of this one for the next.
			</Tabs.Item>
			<Tabs.Item title="Download" icon={HiClipboardList}>
				This is{" "}
				<span className="font-medium text-gray-800 dark:text-white">
					Contacts tab's associated content
				</span>
				. Clicking another tab will toggle the visibility of this one for the next.
			</Tabs.Item>
		</Tabs>
	)
};

export const TabsWithoutIcons: Story = {
	render: () => (
		<Tabs aria-label="Tabs without icons" variant="pills">
			<Tabs.Item active title="Profile">
				This is{" "}
				<span className="font-medium text-gray-800 dark:text-white">
					Profile tab's associated content
				</span>
				. Clicking another tab will toggle the visibility of this one for the next.
			</Tabs.Item>
			<Tabs.Item title="Dashboard">
				This is{" "}
				<span className="font-medium text-gray-800 dark:text-white">
					Dashboard tab's associated content
				</span>
				. Clicking another tab will toggle the visibility of this one for the next.
			</Tabs.Item>
			<Tabs.Item title="Settings">
				This is{" "}
				<span className="font-medium text-gray-800 dark:text-white">
					Settings tab's associated content
				</span>
				. Clicking another tab will toggle the visibility of this one for the next.
			</Tabs.Item>
			<Tabs.Item title="Contacts">
				This is{" "}
				<span className="font-medium text-gray-800 dark:text-white">
					Contacts tab's associated content
				</span>
				. Clicking another tab will toggle the visibility of this one for the next.
			</Tabs.Item>
			<Tabs.Item disabled title="Disabled">
				Disabled content
			</Tabs.Item>
		</Tabs>
	)
};

export const TabsBorderIcons: Story = {
	render: () => (
		<Tabs aria-label="Tabs without icons" variant="underline">
			<Tabs.Item active title="Profile">
				This is{" "}
				<span className="font-medium text-gray-800 dark:text-white">
					Profile tab's associated content
				</span>
				. Clicking another tab will toggle the visibility of this one for the next.
			</Tabs.Item>
			<Tabs.Item title="Dashboard">
				This is{" "}
				<span className="font-medium text-gray-800 dark:text-white">
					Dashboard tab's associated content
				</span>
				. Clicking another tab will toggle the visibility of this one for the next.
			</Tabs.Item>
			<Tabs.Item title="Settings">
				This is{" "}
				<span className="font-medium text-gray-800 dark:text-white">
					Settings tab's associated content
				</span>
				. Clicking another tab will toggle the visibility of this one for the next.
			</Tabs.Item>
			<Tabs.Item title="Contacts">
				This is{" "}
				<span className="font-medium text-gray-800 dark:text-white">
					Contacts tab's associated content
				</span>
				. Clicking another tab will toggle the visibility of this one for the next.
			</Tabs.Item>
			<Tabs.Item disabled title="Disabled">
				Disabled content
			</Tabs.Item>
		</Tabs>
	)
};

export const TabsBoderWithIcons: Story = {
	render: () => (
		<Tabs aria-label="Tabs with icons" variant="underline">
			<Tabs.Item active className="text-blue focus:ring-blue-600 focus:bg-blue-600 focus:text-blue-600 active:bg-blue-600 active:ring-blue-600 "  title="My account" icon={HiUserCircle}>
				This is{" "}
				<span className="font-medium text-gray-800 dark:text-white">
					Profile tab's associated content
				</span>
				. Clicking another tab will toggle the visibility of this one for the next.
			</Tabs.Item>
			<Tabs.Item title="settings" icon={MdDashboard}>
				This is{" "}
				<span className="font-medium text-gray-800 dark:text-white">
					Dashboard tab's associated content
				</span>
				. Clicking another tab will toggle the visibility of this one for the next.
			</Tabs.Item>
			<Tabs.Item title="Settings" icon={HiAdjustments}>
				This is{" "}
				<span className="font-medium text-gray-800 dark:text-white">
					Settings tab's associated content
				</span>
				. Clicking another tab will toggle the visibility of this one for the next.
			</Tabs.Item>
			<Tabs.Item title="Download" icon={HiClipboardList}>
				This is{" "}
				<span className="font-medium text-gray-800 dark:text-white">
					Contacts tab's associated content
				</span>
				. Clicking another tab will toggle the visibility of this one for the next.
			</Tabs.Item>
		</Tabs>
	)
};