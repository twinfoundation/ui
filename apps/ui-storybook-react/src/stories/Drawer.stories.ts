// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Drawer, DrawerPositions } from "@twin.org/ui-components-react";

const meta = {
	title: "Components/Drawer",
	component: Drawer,
	argTypes: {
        position: {
            options: Object.values(DrawerPositions),
            control: { type: "inline-radio" }
        },
        bodyScrolling: {
            options: Object.values([true, false]),
            control: { type: "inline-radio" }
        },
        backdrop: {
            options: Object.values([true, false]),
            control: { type: "inline-radio" }
        },
        edge: {
            options: Object.values([true, false]),
            control: { type: "inline-radio" }
        },
    },
	args: { onClick: fn() }
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		title: "Drawer",
        items: [
            "<p class='mb-6 text-sm text-gray-500 dark:text-gray-400'>Supercharge your hiring by taking advantage of our&nbsp;<a href='#' class='text-cyan-600 underline hover:no-underline dark:text-cyan-500'>limited-time sale</a> &nbsp;for Flowbite Docs + Job Board. Unlimited access to over 190K top-ranked candidates and the #1 design job board.</p><div class='grid grid-cols-1 gap-4 md:grid-cols-2'><a href='#' class='rounded-lg border border-gray-200 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-cyan-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700'>Learn more</a><a href='#' class='inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800'>Get access&nbsp;<svg class='ms-2 h-3.5 w-3.5 rtl:rotate-180' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 14 10'><path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M1 5h12m0 0L9 1m4 4L9 9'/></svg></a></div>"
        ]
    }
};

export const PositionRight: Story = {
	args: {
		title: "Drawer",
        items: [
            "<p class='mb-6 text-sm text-gray-500 dark:text-gray-400'>Supercharge your hiring by taking advantage of our&nbsp;<a href='#' class='text-cyan-600 underline hover:no-underline dark:text-cyan-500'>limited-time sale</a> &nbsp;for Flowbite Docs + Job Board. Unlimited access to over 190K top-ranked candidates and the #1 design job board.</p><div class='grid grid-cols-1 gap-4 md:grid-cols-2'><a href='#' class='rounded-lg border border-gray-200 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-cyan-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700'>Learn more</a><a href='#' class='inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800'>Get access&nbsp;<svg class='ms-2 h-3.5 w-3.5 rtl:rotate-180' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 14 10'><path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M1 5h12m0 0L9 1m4 4L9 9'/></svg></a></div>"
        ],
        position: DrawerPositions.Right
    }
};

export const PositionTop: Story = {
	args: {
		title: "Drawer",
        items: [
            "<p class='mb-6 text-sm text-gray-500 dark:text-gray-400'>Supercharge your hiring by taking advantage of our&nbsp;<a href='#' class='text-cyan-600 underline hover:no-underline dark:text-cyan-500'>limited-time sale</a> &nbsp;for Flowbite Docs + Job Board. Unlimited access to over 190K top-ranked candidates and the #1 design job board.</p><div class='grid grid-cols-1 gap-4 md:grid-cols-2'><a href='#' class='rounded-lg border border-gray-200 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-cyan-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700'>Learn more</a><a href='#' class='inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800'>Get access&nbsp;<svg class='ms-2 h-3.5 w-3.5 rtl:rotate-180' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 14 10'><path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M1 5h12m0 0L9 1m4 4L9 9'/></svg></a></div>"
        ],
        position: DrawerPositions.Top
    }
};

export const PositionBottom: Story = {
	args: {
		title: "Drawer",
        items: [
            "<p class='mb-6 text-sm text-gray-500 dark:text-gray-400'>Supercharge your hiring by taking advantage of our&nbsp;<a href='#' class='text-cyan-600 underline hover:no-underline dark:text-cyan-500'>limited-time sale</a> &nbsp;for Flowbite Docs + Job Board. Unlimited access to over 190K top-ranked candidates and the #1 design job board.</p><div class='grid grid-cols-1 gap-4 md:grid-cols-2'><a href='#' class='rounded-lg border border-gray-200 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-cyan-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700'>Learn more</a><a href='#' class='inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800'>Get access&nbsp;<svg class='ms-2 h-3.5 w-3.5 rtl:rotate-180' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 14 10'><path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M1 5h12m0 0L9 1m4 4L9 9'/></svg></a></div>"
        ],
        position: DrawerPositions.Bottom
    }
};

export const BodyScrolling: Story = {
	args: {
		title: "Drawer",
        items: [
            "The body is scrollable when the drawer is open.",
            "<p class='mb-6 text-sm text-gray-500 dark:text-gray-400'>Supercharge your hiring by taking advantage of our&nbsp;<a href='#' class='text-cyan-600 underline hover:no-underline dark:text-cyan-500'>limited-time sale</a> &nbsp;for Flowbite Docs + Job Board. Unlimited access to over 190K top-ranked candidates and the #1 design job board.</p><div class='grid grid-cols-1 gap-4 md:grid-cols-2'><a href='#' class='rounded-lg border border-gray-200 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-cyan-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700'>Learn more</a><a href='#' class='inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800'>Get access&nbsp;<svg class='ms-2 h-3.5 w-3.5 rtl:rotate-180' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 14 10'><path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M1 5h12m0 0L9 1m4 4L9 9'/></svg></a></div>"
        ],
        bodyScrolling: true
    }
};

export const WithoutBackdrop: Story = {
	args: {
		title: "Drawer",
        items: [
            "<p class='mb-6 text-sm text-gray-500 dark:text-gray-400'>Supercharge your hiring by taking advantage of our&nbsp;<a href='#' class='text-cyan-600 underline hover:no-underline dark:text-cyan-500'>limited-time sale</a> &nbsp;for Flowbite Docs + Job Board. Unlimited access to over 190K top-ranked candidates and the #1 design job board.</p><div class='grid grid-cols-1 gap-4 md:grid-cols-2'><a href='#' class='rounded-lg border border-gray-200 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-cyan-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700'>Learn more</a><a href='#' class='inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800'>Get access&nbsp;<svg class='ms-2 h-3.5 w-3.5 rtl:rotate-180' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 14 10'><path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M1 5h12m0 0L9 1m4 4L9 9'/></svg></a></div>"
        ],
        backdrop: false
    }
};

export const Edge: Story = {
	args: {
		title: "Drawer",
        items: [
            "<p class='mb-6 text-sm text-gray-500 dark:text-gray-400'>Supercharge your hiring by taking advantage of our&nbsp;<a href='#' class='text-cyan-600 underline hover:no-underline dark:text-cyan-500'>limited-time sale</a> &nbsp;for Flowbite Docs + Job Board. Unlimited access to over 190K top-ranked candidates and the #1 design job board.</p><div class='grid grid-cols-1 gap-4 md:grid-cols-2'><a href='#' class='rounded-lg border border-gray-200 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-cyan-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700'>Learn more</a><a href='#' class='inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800'>Get access&nbsp;<svg class='ms-2 h-3.5 w-3.5 rtl:rotate-180' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 14 10'><path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M1 5h12m0 0L9 1m4 4L9 9'/></svg></a></div>"
        ],
        position: DrawerPositions.Bottom,
        edge: true
    }
};
