// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { Meta, StoryObj } from "@storybook/react";
import { Footer } from "@twin.org/ui-components-react";
import { Home, MailBox, Music, File } from "@twin.org/ui-components-react/icons/solid";

/**
 * Storybook metadata for Footer component
 */
const meta: Meta<typeof Footer> = {
	title: "Components/Footer",
	component: Footer,
	parameters: {
		layout: "fullscreen"
	}
};

export default meta;

/**
 * Story collection for the Footer component.
 * Demonstrates various configurations and use cases of the Footer component.
 * @type {Story}
 */
type Story = StoryObj<typeof meta>;

/**
 * Default Footer story
 */
export const Default: Story = {
	args: {
		body: (
			<div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
				<div className="md:flex md:justify-between">
					<div className="mb-6 md:mb-0">
						<Footer.Brand
							href="https://www.twin.org"
							src="https://assets.weforum.org/sites/a0eTG000008PHKPYA4/3LI3Z9COsps.jpg"
							alt="Twin Logo"
							name="TWIN"
						/>
					</div>
					<div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
						<div>
							<Footer.Title title="About" />
							<Footer.LinkGroup col>
								<Footer.Link href="#">About TWIN</Footer.Link>
								<Footer.Link href="#">Documentation</Footer.Link>
								<Footer.Link href="#">Resources</Footer.Link>
							</Footer.LinkGroup>
						</div>
						<div>
							<Footer.Title title="Follow us" />
							<Footer.LinkGroup col>
								<Footer.Link href="#">Github</Footer.Link>
								<Footer.Link href="#">Discord</Footer.Link>
								<Footer.Link href="#">Twitter</Footer.Link>
							</Footer.LinkGroup>
						</div>
						<div>
							<Footer.Title title="Legal" />
							<Footer.LinkGroup col>
								<Footer.Link href="#">Privacy Policy</Footer.Link>
								<Footer.Link href="#">Terms & Conditions</Footer.Link>
								<Footer.Link href="#">Cookie Policy</Footer.Link>
							</Footer.LinkGroup>
						</div>
					</div>
				</div>
				<Footer.Divider />
				<div className="sm:flex sm:items-center sm:justify-between">
					<Footer.Copyright href="https://www.twin.org" by="TWIN™" year={2025} />
					<div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
						<Footer.Icon href="#" icon={Home} ariaLabel="Visit our homepage" />
						<Footer.Icon href="#" icon={MailBox} ariaLabel="Contact us" />
						<Footer.Icon href="#" icon={Music} ariaLabel="Listen to updates" />
						<Footer.Icon href="#" icon={File} ariaLabel="View documentation" />
					</div>
				</div>
			</div>
		)
	}
};
