// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { Meta, StoryObj } from "@storybook/react";
import { Modal, ModalPositions, ModalSizes } from "@twin.org/ui-components-react";

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
			options: Object.values([true, false]),
			control: { type: "inline-radio" }
		}
	},
	args: {}
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};

export const PopUp: Story = {
	args: {
        popup: true
    }
};

export const BottomLeft: Story = {
	args: {
        position: ModalPositions.BottomLeft
    }
};

export const ExtraLarge: Story = {
	args: {
        size: ModalSizes.ExtraLarge
    }
};