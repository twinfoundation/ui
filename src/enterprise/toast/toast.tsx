// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { Toast as FlowbiteToast, ToastToggle } from "flowbite-react";
import React, { memo, useCallback, useEffect, useState, type JSX } from "react";
import type { ToastProps } from "./toastProps";

/**
 * Toast component for displaying temporary notifications.
 */
export const Toast = memo(
        ({
                children,
                duration,
                onDismiss,
                role = "alert",
                closeLabel = "Close notification",
                ...rest
        }: ToastProps): JSX.Element | null => {
                const [show, setShow] = useState<boolean>(true);

                useEffect(() => {
                        if (duration && show) {
                                const timer = setTimeout(() => {
                                        setShow(false);
                                        onDismiss?.();
                                }, duration);
                                return () => clearTimeout(timer);
                        }
                }, [duration, onDismiss, show]);

                const handleDismiss = useCallback((): void => {
                        setShow(false);
                        onDismiss?.();
                }, [onDismiss]);

                if (!show) {
                        return null;
                }

                return (
                        <FlowbiteToast {...rest} role={role} aria-live="polite">
                                {children}
                                <ToastToggle onClick={handleDismiss} aria-label={closeLabel} />
                        </FlowbiteToast>
                );
        }
);

Toast.displayName = "Toast";
