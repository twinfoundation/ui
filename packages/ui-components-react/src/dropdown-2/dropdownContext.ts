// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* eslint-disable jsdoc/require-jsdoc */

import type { useInteractions } from "@floating-ui/react";
import { createContext, useContext } from "react";

/**
 * Context value for dropdown state management.
 */
interface DropdownContext {
	/**
	 * Currently active/focused item index.
	 */
	activeIndex: number | null;
	dismissOnClick?: boolean;
	getItemProps: ReturnType<typeof useInteractions>["getItemProps"];
	handleSelect: (index: number | null) => void;
}

export const DropdownContext = createContext<DropdownContext | undefined>(undefined);

export function useDropdownContext(): DropdownContext {
	const context = useContext(DropdownContext);

	if (!context) {
		// eslint-disable-next-line no-restricted-syntax
		throw new Error("useDropdownContext should be used within the DropdownContext provider!");
	}

	return context;
}
