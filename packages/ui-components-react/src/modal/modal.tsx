// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { Modal as FlowbiteModal } from "flowbite-react";
import type { FC } from "react";
import type { ModalProps } from "./modalProps";
import { Button } from "../button/button";

/**
 * Modal component.
 */
const Modal: FC<ModalProps> = ({ header, body, footerButtons, show = false, onClose, ...rest }) => (
	<FlowbiteModal {...rest} show={show} onClose={onClose}>
		{header && <FlowbiteModal.Header>{header}</FlowbiteModal.Header>}
		{body && <FlowbiteModal.Body>{body}</FlowbiteModal.Body>}
		{footerButtons && footerButtons.length > 0 && (
			<FlowbiteModal.Footer>
				{footerButtons.map((button, index) => (
					<Button
						key={`modal-button-${index}`}
						color={button?.variant ?? "primary"}
						onClick={button?.onClick}
						buttonText={button?.label}
						showButtonText
					>
						{button?.label}
					</Button>
				))}
			</FlowbiteModal.Footer>
		)}
	</FlowbiteModal>
);

Modal.displayName = "Modal";

export { Modal };
