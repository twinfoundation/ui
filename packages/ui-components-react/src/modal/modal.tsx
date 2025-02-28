// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { Modal as FlowbiteModal } from "flowbite-react";
import { memo, useCallback, type JSX } from "react";
import type { ModalProps } from "./modalProps";
import { Button } from "../button/button";

/**
 * Modal component.
 */
export const Modal = memo(
	({ header, body, footerButtons, show = false, onClose, ...rest }: ModalProps): JSX.Element => {
		const handleButtonClick = useCallback((onClick?: () => void) => {
			if (onClick) {
				onClick();
			}
		}, []);

		return (
			<FlowbiteModal {...rest} show={show} onClose={onClose}>
				{header && <FlowbiteModal.Header>{header}</FlowbiteModal.Header>}
				{body && <FlowbiteModal.Body>{body}</FlowbiteModal.Body>}
				{footerButtons && footerButtons.length > 0 && (
					<FlowbiteModal.Footer>
						{footerButtons.map((button, index) => (
							<Button
								key={`modal-button-${index}`}
								color={button?.variant ?? "primary"}
								onClick={() => handleButtonClick(button?.onClick)}
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
	}
);

Modal.displayName = "Modal";
