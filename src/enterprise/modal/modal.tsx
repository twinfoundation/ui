// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { Modal as FlowbiteModal, ModalHeader, ModalBody, ModalFooter } from "flowbite-react";
import React, { memo, useCallback, type JSX } from "react";
import type { ModalProps } from "./modalProps";
import { Button } from "../../core/button/button";

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
                                {header && <ModalHeader>{header}</ModalHeader>}
                                {body && <ModalBody>{body}</ModalBody>}
                                {footerButtons && footerButtons.length > 0 && (
                                        <ModalFooter>
                                                {footerButtons.map((button, index) => {
                                                        const { onClick, variant, label, ...buttonProps } = button;
                                                        return (
                                                                <Button
                                                                        key={`modal-button-${index}`}
                                                                        color={variant ?? "Primary"}
                                                                        onClick={() => handleButtonClick(onClick)}
                                                                        buttonText={label}
                                                                        showButtonText
                                                                        {...buttonProps}
                                                                >
                                                                        {label}
                                                                </Button>
                                                        );
                                                })}
                                        </ModalFooter>
                                )}
                        </FlowbiteModal>
                );
        }
);

Modal.displayName = "Modal";
