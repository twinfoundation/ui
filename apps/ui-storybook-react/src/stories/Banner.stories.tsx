// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { Meta, StoryObj } from "@storybook/react";
import { Banner } from "@twin.org/ui-components-react";
import { MdAnnouncement } from "react-icons/md";

const meta = {
	title: "Components/Banner",
	component: Banner,
	argTypes: {
		content: { control: { type: "text" } },
		bottom: {
			options: [true, false],
			control: { type: "inline-radio" }
		}
	}
} satisfies Meta<typeof Banner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: (
			<div className="mx-auto flex items-center">
				<p className="flex items-center gap-2 text-sm font-normal text-gray-500 dark:text-gray-400">
					<MdAnnouncement />
					<span>
						New brand identity has been launched for the{" "}
						<a
							href="https://flowbite.com"
							className="inline font-medium text-cyan-600 underline decoration-solid underline-offset-2 hover:no-underline dark:text-cyan-500"
						>
							Flowbite Library
						</a>
					</span>
				</p>
			</div>
		)
	}
};

export const Bottom: Story = {
	args: {
		children: (
			<div className="mx-auto flex items-center">
				<p className="flex items-center gap-2 text-sm font-normal text-gray-500 dark:text-gray-400">
					<MdAnnouncement />
					<span>
						New brand identity has been launched for the{" "}
						<a
							href="https://flowbite.com"
							className="inline font-medium text-cyan-600 underline decoration-solid underline-offset-2 hover:no-underline dark:text-cyan-500"
						>
							Flowbite Library
						</a>
					</span>
				</p>
			</div>
		),
		bottom: true
	}
};
