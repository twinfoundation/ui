// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import React from "react";
import type { IconsProps } from "../types/iconTypes";

const WarningCircleLight: React.FC<React.SVGProps<SVGSVGElement>> = props => (
	<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
		<rect width="256" height="256" fill="none" />
		<circle
			cx="128"
			cy="128"
			r="96"
			fill="none"
			stroke="currentColor"
<<<<<<< HEAD
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="12"
=======
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="12"
>>>>>>> next
		/>
		<line
			x1="128"
			y1="136"
			x2="128"
			y2="80"
			fill="none"
			stroke="currentColor"
<<<<<<< HEAD
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="12"
=======
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="12"
>>>>>>> next
		/>
		<circle cx="128" cy="172" r="10" />
	</svg>
);

const WarningCircleRegular: React.FC<React.SVGProps<SVGSVGElement>> = props => (
	<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
		<rect width="256" height="256" fill="none" />
		<circle
			cx="128"
			cy="128"
			r="96"
			fill="none"
			stroke="currentColor"
			stroke-miterlimit="10"
<<<<<<< HEAD
			strokeWidth="16"
=======
			stroke-width="16"
>>>>>>> next
		/>
		<line
			x1="128"
			y1="136"
			x2="128"
			y2="80"
			fill="none"
			stroke="currentColor"
<<<<<<< HEAD
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="16"
=======
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="16"
>>>>>>> next
		/>
		<circle cx="128" cy="172" r="12" />
	</svg>
);

const WarningCircleBold: React.FC<React.SVGProps<SVGSVGElement>> = props => (
	<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
		<rect width="256" height="256" fill="none" />
		<circle
			cx="128"
			cy="128"
			r="96"
			fill="none"
			stroke="currentColor"
<<<<<<< HEAD
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="24"
=======
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="24"
>>>>>>> next
		/>
		<line
			x1="128"
			y1="132"
			x2="128"
			y2="80"
			fill="none"
			stroke="currentColor"
<<<<<<< HEAD
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="24"
=======
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="24"
>>>>>>> next
		/>
		<circle cx="128" cy="172" r="16" />
	</svg>
);

export const WarningCircle: React.FC<IconsProps> = ({
	color = "currentColor",
	width = 24,
	height = width,
	className = "",
	type = "regular"
}) => {
	const props = {
		width,
		height,
		className,
		style: { color, fill: color }
	};

	switch (type) {
		case "light":
			return <WarningCircleLight {...props} />;
		case "bold":
			return <WarningCircleBold {...props} />;
		default:
			return <WarningCircleRegular {...props} />;
	}
};

WarningCircle.displayName = "WarningCircle";

export default WarningCircle;
