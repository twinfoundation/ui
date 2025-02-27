// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { SVGProps, JSX, ForwardRefExoticComponent, RefAttributes } from "react";

/**
 * Type for SVG icon components.
 * This type supports both direct function components and ForwardRefExoticComponent
 * to be compatible with various icon libraries including flowbite-react-icons.
 */
export type IconComponent =
	| ((props: SVGProps<SVGSVGElement>) => JSX.Element)
	| ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
