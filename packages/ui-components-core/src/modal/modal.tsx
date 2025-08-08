// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import React from "react";
import { Modal as FlowbiteModal } from "flowbite-react";
import type { ModalProps } from "./modalProps";

/**
 * Modal component.
 */
export const Modal = React.memo(
	({ header, body, footerButtons, show = false, onClose, ...rest }: ModalProps): React.JSX.Element => {
		const handleButtonClick = React.useCallback((onClick?: () => void) => {
			if (onClick) {
				onClick();
			}
		}, []);

		return (
			<FlowbiteModal show={show} onClose={onClose} {...rest}>
				{header && <div className="text-xl font-semibold p-4 border-b">{header}</div>}
				{body && <div className="p-4">{body}</div>}
				{footerButtons && footerButtons.length > 0 && (
					<div className="flex justify-end gap-2 p-4 border-t">
						{footerButtons.map((button, index) => {
							const { onClick, variant, label, ...buttonProps } = button;
							return (
								<button
									key={`modal-button-${index}`}
									className={`px-4 py-2 rounded-md ${variant === "danger" ? "bg-red-500 text-white" : "bg-blue-500 text-white"}`}
									onClick={() => handleButtonClick(onClick)}
									{...buttonProps}
								>
									{label}
								</button>
							);
						})}
					</div>
				)}
			</FlowbiteModal>
		);
	}
);

Modal.displayName = "Modal";
