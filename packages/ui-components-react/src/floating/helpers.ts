// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

import type { Middleware, Placement } from "@floating-ui/react";
import { arrow, autoPlacement, flip, offset, shift } from "@floating-ui/react";
import type { RefObject } from "react";

/**
 * Objects that change the positioning of the floating element, executed in order as a queue.
 * Middleware allow you to customize the behavior of the positioning and be as granular as you want, adding your own custom logic.
 * @see https://floating-ui.com/docs/middleware
 */
export const getMiddleware = ({
	arrowRef,
	placement
}: {
	arrowRef?: RefObject<HTMLDivElement>;
	placement: "auto" | Placement;
}): Middleware[] => {
	const middleware = [];

	middleware.push(offset(8));
	middleware.push(placement === "auto" ? autoPlacement() : flip());
	middleware.push(shift({ padding: 8 }));

	if (arrowRef?.current) {
		middleware.push(arrow({ element: arrowRef.current }));
	}

	return middleware;
};

export const getPlacement = ({
	placement
}: {
	placement: "auto" | Placement;
}): Placement | undefined => (placement === "auto" ? undefined : placement);

export const getArrowPlacement = ({ placement }: { placement: Placement }): Placement =>
	({
		top: "bottom",
		right: "left",
		bottom: "top",
		left: "right"
	})[placement.split("-")[0]] as Placement;
