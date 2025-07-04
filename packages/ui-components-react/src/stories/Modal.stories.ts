// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from "../";
import { ModalSizes } from "../modal/modalSizes";
;
import { ModalPositions } from "../modal/modalPositions";
;
import { createElement } from "react";

const meta = {
	title: "Components/Modal",
	component: Modal,
	argTypes: {
		position: {
			options: Object.values(ModalPositions),
			control: { type: "inline-radio" }
		},
		size: {
			options: Object.values(ModalSizes),
			control: { type: "inline-radio" }
		},
		dismissible: {
			options: Object.values([true, false]),
			control: { type: "inline-radio" }
		},
		popup: {
			options: Object.values([true, false]),
			control: { type: "inline-radio" }
		},
		initialFocus: {
			control: false
		}
	},
	args: {
		body: "Modal Body",
		show: true
	}
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		header: "Modal Header",
		body: createElement(
			"div",
			{ className: "space-y-6" },
			createElement(
				"p",
				{ className: "text-base leading-relaxed text-gray-500 dark:text-gray-400" },
				"With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply."
			),
			createElement(
				"p",
				{ className: "text-base leading-relaxed text-gray-500 dark:text-gray-400" },
				"The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them."
			)
		),
		footerButtons: [
			{ label: "Cancel" },
			{
				label: "Save",
				variant: "primary"
			}
		]
	}
};

export const PopUp: Story = {
	args: {
		header: createElement("h1", { className: "pl-4 text-cyan-700" }, "Modal Header"),
		body: createElement(
			"div",
			{ className: "space-y-6" },
			createElement(
				"p",
				{ className: "text-base leading-relaxed text-gray-500 dark:text-gray-400" },
				"With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply."
			),
			createElement(
				"p",
				{ className: "text-base leading-relaxed text-gray-500 dark:text-gray-400" },
				"The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them."
			)
		),
		popup: true
	}
};

export const BottomLeft: Story = {
	args: {
		header: createElement("h1", { className: "pl-4 text-cyan-700" }, "Modal Header"),
		body: createElement(
			"div",
			{ className: "space-y-6" },
			createElement(
				"p",
				{ className: "text-base leading-relaxed text-gray-500 dark:text-gray-400" },
				"With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply."
			),
			createElement(
				"p",
				{ className: "text-base leading-relaxed text-gray-500 dark:text-gray-400" },
				"The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them."
			)
		),
		position: ModalPositions.BottomLeft
	}
};

export const ExtraLarge: Story = {
	args: {
		size: ModalSizes.ExtraLarge,
		footerButtons: [
			{ label: "Cancel" },
			{
				label: "Save",
				variant: "secondary"
			}
		]
	}
};
