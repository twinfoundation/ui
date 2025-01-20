// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { Meta, StoryObj } from "@storybook/react";
import { Footer, Icons } from "@twin.org/ui-components-react";
import { Footer as FlowbiteFooter } from "flowbite-react";
import { createElement } from "react";

const meta = {
	title: "Components/Footer",
	component: Footer,
	argTypes: {}
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		body: createElement(
			"div",
			{ className: "w-full" },
			createElement(
				"div",
				{
					className: "grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1"
				},
				createElement(
					"div",
					null,
					createElement(FlowbiteFooter.Brand, {
						href: "https://www.twin.org",
						src: "https://assets.weforum.org/sites/a0eTG000008PHKPYA4/3LI3Z9COsps.jpg",
						alt: "Twin Logo",
						name: "TWIN"
					})
				),
				createElement(
					"div",
					{ className: "grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6" },
					createElement(
						"div",
						null,
						createElement(FlowbiteFooter.Title, { title: "about" }),
						createElement(
							FlowbiteFooter.LinkGroup,
							{ col: true },
							createElement(FlowbiteFooter.Link, { href: "#" }, "Flowbite"),
							createElement(FlowbiteFooter.Link, { href: "#" }, "Tailwind CSS")
						)
					),
					createElement(
						"div",
						null,
						createElement(FlowbiteFooter.Title, { title: "Follow us" }),
						createElement(
							FlowbiteFooter.LinkGroup,
							{ col: true },
							createElement(FlowbiteFooter.Link, { href: "#" }, "Github"),
							createElement(FlowbiteFooter.Link, { href: "#" }, "Discord")
						)
					),
					createElement(
						"div",
						null,
						createElement(FlowbiteFooter.Title, { title: "Legal" }),
						createElement(
							FlowbiteFooter.LinkGroup,
							{ col: true },
							createElement(FlowbiteFooter.Link, { href: "#" }, "Privacy Policy"),
							createElement(FlowbiteFooter.Link, { href: "#" }, "Terms & Conditions")
						)
					)
				)
			),
			createElement(FlowbiteFooter.Divider, null),
			createElement(
				"div",
				{ className: "w-full sm:flex sm:items-center sm:justify-between" },
				createElement(FlowbiteFooter.Copyright, {
					href: "#",
					by: "TWIN™",
					year: 2025
				}),
				createElement(
					"div",
					{ className: "mt-4 flex space-x-6 sm:mt-0 sm:justify-center" },
					createElement(FlowbiteFooter.Icon, { href: "#", icon: Icons.Home }),
					createElement(FlowbiteFooter.Icon, { href: "#", icon: Icons.MailBox }),
					createElement(FlowbiteFooter.Icon, { href: "#", icon: Icons.Music }),
					createElement(FlowbiteFooter.Icon, { href: "#", icon: Icons.File })
				)
			)
		)
	}
};
