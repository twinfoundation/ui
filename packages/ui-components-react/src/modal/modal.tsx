// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { Modal as FlowbiteModal, Button as FlowbiteButton } from "flowbite-react";
import React, { type ReactNode } from "react";
import { ModalPropTypes, ModalDefaultProps, type ModalProps } from "./modalProps";

/**
 * Modal component.
 */
export class Modal extends React.Component<ModalProps> {
	/**
	 * The prop types of the component.
	 */
	public static propTypes = ModalPropTypes;

	/**
	 * The default props of the component.
	 */
	public static defaultProps = ModalDefaultProps;

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
		const { header, body, footerButtons, show = false, onClose, ...rest } = this._props;
		return (
			<FlowbiteModal {...rest} show={show} onClose={onClose}>
				{header && <FlowbiteModal.Header>{header}</FlowbiteModal.Header>}

				{body && <FlowbiteModal.Body>{body}</FlowbiteModal.Body>}

				{footerButtons && (
					<FlowbiteModal.Footer>
						{footerButtons && footerButtons?.length > 0 ? (
							footerButtons.map((button, index) => (
								<FlowbiteButton
									key={`modal-button-${index}`}
									className={button?.className ?? ""}
									onClick={button?.onClick ?? undefined}
								>
									{button?.label}
								</FlowbiteButton>
							))
						) : (
							<></>
						)}
					</FlowbiteModal.Footer>
				)}
			</FlowbiteModal>
		);
	}
}
