// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { SVGProps, JSX } from "react";

/**
 * Type for SVG icon components.
 * This is a function that takes SVG props and returns a JSX element.
 */
export type IconComponent = (props: SVGProps<SVGSVGElement>) => JSX.Element;
