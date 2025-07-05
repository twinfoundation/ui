// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { Meta, StoryObj } from "@storybook/react";
import { Tabs } from "../tabs/tabs";
import { TabsVariants } from "../tabs/tabsVariants";
;
import type { TabsProps, TabItem } from "../";
import { IdentificationCard, Gear, Bell, Envelope } from "../icons";
import { useState, type JSX } from "react";

const defaultItems: TabItem[] = [
	{
		title: "Tab 1",
		content: <div className="m-4 p-4 text-center">Tab 1 content</div>
	},
	{
		title: "Tab 2",
		content: <div className="m-4 p-4 text-center">Tab 2 content</div>
	},
	{
		title: "Tab 3",
		content: <div className="m-4 p-4 text-center">Tab 3 content</div>
	},
	{
		title: "Tab 4",
		content: <div className="m-4 p-4 text-center">Tab 4 content</div>,
		disabled: true
	}
];

const LoginForm = (): JSX.Element => (
	<div className="flex flex-col gap-8">
		<div>
			<h1 className="text-brand-primary mb-4 text-6xl font-normal">Empowering</h1>
			<h1 className="mb-8 text-6xl font-normal text-gray-700">Global Trade.</h1>
			<h2 className="text-2xl font-normal text-gray-500">Welcome to TWIN.</h2>
		</div>
		<div>
			<h3 className="mb-8 text-2xl font-normal text-gray-500">Log in to continue</h3>
			<form className="flex flex-col gap-4">
				<div className="relative">
					<input
						type="email"
						placeholder="Your email"
						className="focus:border-brand-primary w-full rounded-lg border border-gray-300 p-4 pl-12 text-lg outline-none"
					/>
					<span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">👤</span>
				</div>
				<div className="relative">
					<input
						type="password"
						placeholder="Your password"
						className="focus:border-brand-primary w-full rounded-lg border border-gray-300 p-4 pl-12 text-lg outline-none"
					/>
					<span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">🔒</span>
				</div>
				<button className="mt-4 rounded-lg bg-blue-600 px-8 py-4 text-lg font-normal text-white hover:bg-blue-700">
					Continue →
				</button>
				<a href="#" className="text-brand-primary mt-4 text-lg font-normal hover:underline">
					Reset password
				</a>
			</form>
		</div>
	</div>
);

const RegisterForm = (): JSX.Element => (
	<div className="flex min-h-[400px] items-center justify-center">
		<h2 className="text-2xl font-normal text-gray-500">Register Form Content</h2>
	</div>
);

const authItems: TabItem[] = [
	{
		title: "Register",
		content: <RegisterForm />
	},
	{
		title: "Log In",
		content: <LoginForm />
	}
];

const meta = {
	title: "Components/Tabs",
	component: Tabs,
	argTypes: {
		variant: {
			options: Object.values(TabsVariants),
			control: { type: "inline-radio" }
		}
	},
	parameters: {},
	decorators: [
		(Story: React.ComponentType) => (
			<div className="w-[600px]">
				<Story />
			</div>
		)
	]
} satisfies Meta<typeof Tabs>;

export default meta;

/**
 * Represents a Storybook story object for the Tabs component.
 */
type Story = StoryObj<typeof meta>;

/**
 * Renders a story wrapper component that handles tab state.
 */
const TabStory = ({ args }: { args: TabsProps }): JSX.Element => {
	const [activeTab, setActiveTab] = useState(args.activeTab ?? 1);

	return <Tabs {...args} activeTab={activeTab} onActiveTabChange={setActiveTab} />;
};

/**
 * Default story for the Tabs component.
 */
export const Default: Story = {
	args: {
		items: [
			{ title: "Tab 1", content: "Content for tab 1" },
			{ title: "Tab 2", content: "Content for tab 2" }
		]
	},
	render: args => <TabStory args={args} />
};

/**
 * Story showcasing the underline variant of the Tabs component.
 */
export const Underline: Story = {
	args: {
		variant: TabsVariants.Underline,
		items: defaultItems
	},
	render: args => <TabStory args={args} />
};

/**
 * Story showcasing the pills variant of the Tabs component.
 */
export const Pills: Story = {
	args: {
		variant: TabsVariants.Pills,
		items: defaultItems
	},
	render: args => <TabStory args={args} />
};

/**
 * Story showcasing the full width variant of the Tabs component.
 */
export const FullWidth: Story = {
	args: {
		variant: TabsVariants.FullWidth,
		items: defaultItems
	},
	render: args => <TabStory args={args} />
};

const iconItems: TabItem[] = [
	{
		title: "Profile",
		content: <div className="m-4 p-4 text-center">Profile settings and information</div>,
		icon: IdentificationCard
	},
	{
		title: "Settings",
		content: <div className="m-4 p-4 text-center">Application settings</div>,
		icon: Gear
	},
	{
		title: "Notifications",
		content: <div className="m-4 p-4 text-center">Notification preferences</div>,
		icon: Bell
	},
	{
		title: "Messages",
		content: <div className="m-4 p-4 text-center">Your messages</div>,
		icon: Envelope
	}
];

/**
 * Story showcasing tabs with icons in full width variant.
 */
export const WithIconsFullWidth: Story = {
	args: {
		variant: TabsVariants.FullWidth,
		items: iconItems,
		activeTab: 1
	},
	render: args => <TabStory args={args} />
};

/**
 * Story demonstrating controlled tabs behavior with state management.
 */
export const ControlledTabs: Story = {
	args: {
		variant: TabsVariants.Underline,
		items: iconItems.slice(0, 3)
	},
	render: (args): JSX.Element => {
		const ControlledTabsStory = (): JSX.Element => {
			const [activeTab, setActiveTab] = useState(0);

			const handleTabChange = (index: number): void => {
				setActiveTab(index);
			};

			return (
				<div className="flex flex-col gap-4">
					<div className="text-sm text-gray-500">Current active tab index: {activeTab}</div>
					<Tabs {...args} activeTab={activeTab} onActiveTabChange={handleTabChange} />
				</div>
			);
		};

		return <ControlledTabsStory />;
	}
};

/**
 * Story showcasing authentication tabs with register and login forms.
 */
export const Auth: Story = {
	args: {
		variant: TabsVariants.Underline,
		items: authItems,
		activeTab: 1
	},
	render: args => <TabStory args={args} />
};

/**
 * Story showcasing loading states when switching between tabs.
 */
export const WithLoadingStates: Story = {
	args: {
		variant: TabsVariants.Underline,
		items: []
	},
	render: (args): JSX.Element => {
		const WithLoadingStatesStory = (): JSX.Element => {
			const [activeTab, setActiveTab] = useState(0);
			const [isLoading, setIsLoading] = useState(false);
			const [loadingTabIndex, setLoadingTabIndex] = useState<number | null>(null);

			// Sample loading placeholder that can be customized
			const loadingPlaceholder = (
				<div className="animate-pulse space-y-4 p-4">
					<div className="mb-4 h-8 w-3/4 rounded bg-gray-200" />
					<div className="space-y-3">
						<div className="h-4 w-full rounded bg-gray-200" />
						<div className="h-4 w-5/6 rounded bg-gray-200" />
						<div className="h-4 w-4/6 rounded bg-gray-200" />
					</div>
					<div className="mt-4 h-12 w-1/2 rounded bg-gray-200" />
				</div>
			);

			// Create tab items with loading states
			const tabItemsWithLoading: TabItem[] = [
				{
					title: "Dashboard",
					content: (
						<div className="m-4 p-4 text-center">Dashboard content with stats and charts</div>
					),
					isLoading: loadingTabIndex === 0 && isLoading,
					loadingPlaceholder
				},
				{
					title: "User Profile",
					content: <div className="m-4 p-4 text-center">User profile information and settings</div>,
					isLoading: loadingTabIndex === 1 && isLoading,
					loadingPlaceholder
				},
				{
					title: "Analytics",
					content: <div className="m-4 p-4 text-center">Analytics data and reports</div>,
					isLoading: loadingTabIndex === 2 && isLoading,
					loadingPlaceholder
				}
			];

			const handleTabChange = (index: number): void => {
				// Simulate content loading when changing tabs
				setLoadingTabIndex(index);
				setIsLoading(true);
				setActiveTab(index);

				// Simulate API request completion after a delay
				setTimeout(() => {
					setIsLoading(false);
				}, 500);
			};

			return (
				<div className="flex flex-col gap-6">
					<div className="flex items-center gap-4">
						<div className="text-sm text-gray-500">Current tab: {activeTab}</div>
						<div className="text-sm text-gray-500">
							Status: {isLoading ? "Loading..." : "Content loaded"}
						</div>
						<button
							onClick={() => handleTabChange(activeTab)}
							className="rounded bg-gray-200 px-4 py-2 text-sm hover:bg-gray-300"
						>
							Reload Current Tab
						</button>
					</div>
					<Tabs
						{...args}
						items={tabItemsWithLoading}
						activeTab={activeTab}
						onActiveTabChange={handleTabChange}
					/>
					<div className="mt-4 text-sm text-gray-500">
						<p>This example demonstrates loading states in tabs:</p>
						<ul className="mt-2 list-disc pl-5">
							<li>Click on a tab to see the loading placeholder</li>
							<li>Content will load after a 0.5 second delay</li>
							<li>Only the active tab is rendered in the DOM</li>
							<li>Click "Reload Current Tab" to simulate reloading the current tab</li>
						</ul>
					</div>
				</div>
			);
		};

		return <WithLoadingStatesStory />;
	}
};
