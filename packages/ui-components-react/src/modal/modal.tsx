// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { Modal as FlowbiteModal, Button as FlowbiteButton } from "flowbite-react";
import React, { type ReactNode } from "react";
import { ModalPropTypes, type ModalProps } from "./modalProps";

/**
 * Modal component.
 */
export class Modal extends React.Component<ModalProps> {
	/**
	 * The prop types of the component.
	 */
	public static propTypes = ModalPropTypes;

	/**
	 * The props of the component.
	 */
	private readonly _props: ModalProps;

	/**
	 * Create a new instance of Modal.
	 * @param props The props of the component.
	 */
	constructor(props: ModalProps) {
		super(props);
		this._props = props;
	}

	/**
	 * Render the component.
	 * @returns The component to render.
	 */
	public render(): ReactNode {
		const { ...rest } = this._props;
		return (
			<FlowbiteModal {...rest} show={true}>
				<FlowbiteModal.Header>Terms of Service</FlowbiteModal.Header>
				<FlowbiteModal.Body>
					<div className="space-y-6">
						<p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
							With less than a month to go before the European Union enacts new consumer privacy
							laws for its citizens, companies around the world are updating their terms of service
							agreements to comply.
						</p>
						<p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
							The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on
							May 25 and is meant to ensure a common set of data rights in the European Union. It
							requires organizations to notify users as soon as possible of high-risk data breaches
							that could personally affect them.
						</p>
					</div>
				</FlowbiteModal.Body>
				<FlowbiteModal.Footer>
					<FlowbiteButton className="text-invert bg-surface-button hover:enabled:bg-surface-button-hover focus:ring-surface-button-pressed border-2 border-transparent focus:ring">
						I accept
					</FlowbiteButton>
					<FlowbiteButton color="gray">Decline</FlowbiteButton>
				</FlowbiteModal.Footer>
			</FlowbiteModal>
		);
	}
}
