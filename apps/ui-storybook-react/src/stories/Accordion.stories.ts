// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Accordion } from "@twin.org/ui-components-react";

const meta = {
	title: "Components/Accordion",
	component: Accordion,
	argTypes: {
		content: { control: { type: "text" } },
		alwaysOpen: {
			options: Object.values([true, false]),
			control: { type: "inline-radio" }
		},
		flush: {
			options: Object.values([true, false]),
			control: { type: "inline-radio" }
		},
		collapseAll: {
			options: Object.values([true, false]),
			control: { type: "inline-radio" }
		}
	},
	args: { onClick: fn() }
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: "Accordion",
		content:
			"<p class='mb-2 text-gray-500 dark:text-gray-400'>Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbar, and more.</p><p class='text-gray-500 dark:text-gray-400'>Check out this guide to learn how to&nbsp;<a href='https://flowbite.com/docs/getting-started/introduction/' class='text-cyan-600 hover:underline dark:text-cyan-500'>get started&nbsp;</a>and start developing websites even faster with components on top of Tailwind CSS.</p>"
	}
};

export const MultipleContent: Story = {
	args: {
		children: "Accordion",
		accordions: [
			{
				title: "Accordion 1",
				content: "Text 1"
			},
			{
				title: "Accordion 2",
				content: "Text 2"
			},
			{
				title: "Accordion 3",
				content:
					"<p class='text-gray-500 dark:text-gray-400'>Check out this guide to learn how to&nbsp;<a href='https://flowbite.com/docs/getting-started/introduction/' class='text-cyan-600 hover:underline dark:text-cyan-500'>get started&nbsp;</a>and start developing websites even faster with components on top of Tailwind CSS.</p>"
			}
		]
	}
};

export const AlwaysOpen: Story = {
	args: {
		children: "Accordion",
		alwaysOpen: true,
		accordions: [
			{
				title: "Accordion 1",
				content: "Text 1"
			},
			{
				title: "Accordion 2",
				content: "Text 2"
			},
			{
				title: "Accordion 3",
				content:
					"<p class='text-gray-500 dark:text-gray-400'>Check out this guide to learn how to&nbsp;<a href='https://flowbite.com/docs/getting-started/introduction/' class='text-cyan-600 hover:underline dark:text-cyan-500'>get started&nbsp;</a>and start developing websites even faster with components on top of Tailwind CSS.</p>"
			}
		]
	}
};

export const CollapseAll: Story = {
	args: {
		children: "Accordion",
		collapseAll: true,
		accordions: [
			{
				title: "Accordion 1",
				content: "Text 1"
			},
			{
				title: "Accordion 2",
				content: "Text 2"
			},
			{
				title: "Accordion 3",
				content:
					"<p class='text-gray-500 dark:text-gray-400'>Check out this guide to learn how to&nbsp;<a href='https://flowbite.com/docs/getting-started/introduction/' class='text-cyan-600 hover:underline dark:text-cyan-500'>get started&nbsp;</a>and start developing websites even faster with components on top of Tailwind CSS.</p>"
			}
		]
	}
};

export const Flush: Story = {
	args: {
		children: "Accordion",
		flush: true,
		accordions: [
			{
				title: "Accordion 1",
				content: "Text 1"
			},
			{
				title: "Accordion 2",
				content: "Text 2"
			},
			{
				title: "Accordion 3",
				content:
					"<p class='text-gray-500 dark:text-gray-400'>Check out this guide to learn how to&nbsp;<a href='https://flowbite.com/docs/getting-started/introduction/' class='text-cyan-600 hover:underline dark:text-cyan-500'>get started&nbsp;</a>and start developing websites even faster with components on top of Tailwind CSS.</p>"
			}
		]
	}
};
