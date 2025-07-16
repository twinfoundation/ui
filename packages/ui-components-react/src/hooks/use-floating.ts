// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

import type { ElementProps, Placement, ReferenceType, UseRoleProps } from "@floating-ui/react";
import {
	autoUpdate,
	safePolygon,
	useClick,
	useDismiss,
	useFloating,
	useHover,
	useInteractions,
	useRole
} from "@floating-ui/react";
import type { Dispatch, RefObject, SetStateAction } from "react";
import { getMiddleware, getPlacement } from "../floating/helpers";

/**
 *
 */
// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export type UseBaseFloatingParams = {
	placement?: "auto" | Placement;
	open: boolean;
	arrowRef?: RefObject<HTMLDivElement>;
	setOpen: Dispatch<SetStateAction<boolean>>;
};

export const useBaseFLoating = <Type extends ReferenceType>({
	open,
	arrowRef,
	placement = "top",
	setOpen
	// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
}: UseBaseFloatingParams) =>
	useFloating<Type>({
		placement: getPlacement({ placement }),
		open,
		onOpenChange: setOpen,
		whileElementsMounted: autoUpdate,
		middleware: getMiddleware({ placement, arrowRef })
	});

/**
 *
 */
// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export type UseFloatingInteractionsParams = {
	context: ReturnType<typeof useFloating>["context"];
	trigger?: "hover" | "click";
	role?: UseRoleProps["role"];
	interactions?: ElementProps[];
};

export const useFloatingInteractions = ({
	context,
	trigger,
	role = "tooltip",
	interactions = []
	// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
}: UseFloatingInteractionsParams) =>
	useInteractions([
		useClick(context, { enabled: trigger === "click" }),
		useHover(context, {
			enabled: trigger === "hover",
			handleClose: safePolygon()
		}),
		useDismiss(context),
		useRole(context, { role }),
		...interactions
	]);
