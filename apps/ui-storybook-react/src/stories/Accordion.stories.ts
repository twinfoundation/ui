// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Accordion } from "@twin.org/ui-components-react";

const meta = {
	title: "Components/Accordion",
	component: Accordion,
	argTypes: {
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
		content: [
			{
				title: "Accordion 1",
				html: "<p class='mb-2 text-gray-500 dark:text-gray-400'> Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbar, and more.</p><p class='text-gray-500 dark:text-gray-400'>Check out this guide to learn how to&nbsp; <a href='https://flowbite.com/docs/getting-started/introduction/' class='text-cyan-600 hover:underline dark:text-cyan-500'> get started&nbsp;</a> and start developing websites even faster with components on top of Tailwind CSS.</p>"
			},
			{
				title: "Is there a Figma file available?",
				html: "<p class='mb-2 text-gray-500 dark:text-gray-400'> Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p><p class='text-gray-500 dark:text-gray-400'> Check out the <a 	href='https://flowbite.com/figma/' 	class='text-cyan-600 hover:underline dark:text-cyan-500' > 	Figma design system </a> based on the utility classes from Tailwind CSS and components from Flowbite.</p>"
			},
			{
				title: "What are the differences between Flowbite and Tailwind UI?",
				html: "<p class='mb-2 text-gray-500 dark:text-gray-400'> The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.</p><p class='mb-2 text-gray-500 dark:text-gray-400'> However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p><p class='mb-2 text-gray-500 dark:text-gray-400'> Learn more about these technologies:</p><ul class='list-disc pl-5 text-gray-500 dark:text-gray-400'> <li><a href='https://flowbite.com/pro/' class='text-cyan-600 hover:underline dark:text-cyan-500'> Flowbite Pro</a> </li> <li><a href='https://tailwindui.com/' rel='nofollow' class='text-cyan-600 hover:underline dark:text-cyan-500'> Tailwind UI</a> </li></ul>"
			}
		]
	}
};

export const AlwaysOpen: Story = {
	args: {
		children: "Accordion",
		alwaysOpen: true,
		content: [
			{
				title: "Accordion 1",
				html: "<p class='mb-2 text-gray-500 dark:text-gray-400'> Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbar, and more.</p><p class='text-gray-500 dark:text-gray-400'>Check out this guide to learn how to&nbsp; <a href='https://flowbite.com/docs/getting-started/introduction/' class='text-cyan-600 hover:underline dark:text-cyan-500'> get started&nbsp;</a> and start developing websites even faster with components on top of Tailwind CSS.</p>"
			},
			{
				title: "Is there a Figma file available?",
				html: "<p class='mb-2 text-gray-500 dark:text-gray-400'> Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p><p class='text-gray-500 dark:text-gray-400'> Check out the <a 	href='https://flowbite.com/figma/' 	class='text-cyan-600 hover:underline dark:text-cyan-500' > 	Figma design system </a> based on the utility classes from Tailwind CSS and components from Flowbite.</p>"
			},
			{
				title: "What are the differences between Flowbite and Tailwind UI?",
				html: "<p class='mb-2 text-gray-500 dark:text-gray-400'> The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.</p><p class='mb-2 text-gray-500 dark:text-gray-400'> However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p><p class='mb-2 text-gray-500 dark:text-gray-400'> Learn more about these technologies:</p><ul class='list-disc pl-5 text-gray-500 dark:text-gray-400'> <li><a href='https://flowbite.com/pro/' class='text-cyan-600 hover:underline dark:text-cyan-500'> Flowbite Pro</a> </li> <li><a href='https://tailwindui.com/' rel='nofollow' class='text-cyan-600 hover:underline dark:text-cyan-500'> Tailwind UI</a> </li></ul>"
			}
		]
	}
};

export const CollapseAll: Story = {
	args: {
		children: "Accordion",
		collapseAll: true,
		content: [
			{
				title: "Accordion 1",
				html: "<p class='mb-2 text-gray-500 dark:text-gray-400'> Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbar, and more.</p><p class='text-gray-500 dark:text-gray-400'>Check out this guide to learn how to&nbsp; <a href='https://flowbite.com/docs/getting-started/introduction/' class='text-cyan-600 hover:underline dark:text-cyan-500'> get started&nbsp;</a> and start developing websites even faster with components on top of Tailwind CSS.</p>"
			},
			{
				title: "Is there a Figma file available?",
				html: "<p class='mb-2 text-gray-500 dark:text-gray-400'> Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p><p class='text-gray-500 dark:text-gray-400'> Check out the <a 	href='https://flowbite.com/figma/' 	class='text-cyan-600 hover:underline dark:text-cyan-500' > 	Figma design system </a> based on the utility classes from Tailwind CSS and components from Flowbite.</p>"
			},
			{
				title: "What are the differences between Flowbite and Tailwind UI?",
				html: "<p class='mb-2 text-gray-500 dark:text-gray-400'> The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.</p><p class='mb-2 text-gray-500 dark:text-gray-400'> However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p><p class='mb-2 text-gray-500 dark:text-gray-400'> Learn more about these technologies:</p><ul class='list-disc pl-5 text-gray-500 dark:text-gray-400'> <li><a href='https://flowbite.com/pro/' class='text-cyan-600 hover:underline dark:text-cyan-500'> Flowbite Pro</a> </li> <li><a href='https://tailwindui.com/' rel='nofollow' class='text-cyan-600 hover:underline dark:text-cyan-500'> Tailwind UI</a> </li></ul>"
			}
		]
	}
};

export const Flush: Story = {
	args: {
		children: "Accordion",
		flush: true,
		content: [
			{
				title: "Accordion 1",
				html: "<p class='mb-2 text-gray-500 dark:text-gray-400'> Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbar, and more.</p><p class='text-gray-500 dark:text-gray-400'>Check out this guide to learn how to&nbsp; <a href='https://flowbite.com/docs/getting-started/introduction/' class='text-cyan-600 hover:underline dark:text-cyan-500'> get started&nbsp;</a> and start developing websites even faster with components on top of Tailwind CSS.</p>"
			},
			{
				title: "Is there a Figma file available?",
				html: "<p class='mb-2 text-gray-500 dark:text-gray-400'> Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p><p class='text-gray-500 dark:text-gray-400'> Check out the <a 	href='https://flowbite.com/figma/' 	class='text-cyan-600 hover:underline dark:text-cyan-500' > 	Figma design system </a> based on the utility classes from Tailwind CSS and components from Flowbite.</p>"
			},
			{
				title: "What are the differences between Flowbite and Tailwind UI?",
				html: "<p class='mb-2 text-gray-500 dark:text-gray-400'> The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.</p><p class='mb-2 text-gray-500 dark:text-gray-400'> However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p><p class='mb-2 text-gray-500 dark:text-gray-400'> Learn more about these technologies:</p><ul class='list-disc pl-5 text-gray-500 dark:text-gray-400'> <li><a href='https://flowbite.com/pro/' class='text-cyan-600 hover:underline dark:text-cyan-500'> Flowbite Pro</a> </li> <li><a href='https://tailwindui.com/' rel='nofollow' class='text-cyan-600 hover:underline dark:text-cyan-500'> Tailwind UI</a> </li></ul>"
			}
		]
	}
};
