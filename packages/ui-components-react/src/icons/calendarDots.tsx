// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import React from "react";
import type { IconsProps } from "../types/iconTypes";

const CalendarDotsLight: React.FC<React.SVGProps<SVGSVGElement>> = props => (
	<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
		<rect width="256" height="256" fill="none" />
		<rect
			x="40"
			y="40"
			width="176"
			height="176"
			rx="8"
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
			x1="176"
			y1="24"
			x2="176"
			y2="56"
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
			x1="80"
			y1="24"
			x2="80"
			y2="56"
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
			x1="40"
			y1="88"
			x2="216"
			y2="88"
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
		<circle cx="128" cy="132" r="10" />
		<circle cx="172" cy="132" r="10" />
		<circle cx="84" cy="172" r="10" />
		<circle cx="128" cy="172" r="10" />
		<circle cx="172" cy="172" r="10" />
	</svg>
);

const CalendarDotsRegular: React.FC<React.SVGProps<SVGSVGElement>> = props => (
	<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
		<rect width="256" height="256" fill="none" />
		<rect
			x="40"
			y="40"
			width="176"
			height="176"
			rx="8"
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
		<line
			x1="176"
			y1="24"
			x2="176"
			y2="56"
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
		<line
			x1="80"
			y1="24"
			x2="80"
			y2="56"
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
		<line
			x1="40"
			y1="88"
			x2="216"
			y2="88"
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
		<circle cx="128" cy="132" r="12" />
		<circle cx="172" cy="132" r="12" />
		<circle cx="84" cy="172" r="12" />
		<circle cx="128" cy="172" r="12" />
		<circle cx="172" cy="172" r="12" />
	</svg>
);

const CalendarDotsBold: React.FC<React.SVGProps<SVGSVGElement>> = props => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props}>
		<rect width="256" height="256" fill="none" />
		<rect x="40" y="40" width="176" height="176" rx="8" fill="currentColor" />
		<rect
			x="40"
			y="40"
			width="176"
			height="176"
			rx="8"
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="24"
		/>
		<line
			x1="176"
			y1="20"
			x2="176"
			y2="40"
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="24"
		/>
		<line
			x1="80"
			y1="20"
			x2="80"
			y2="40"
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="24"
		/>
		<line
			x1="40"
			y1="88"
			x2="216"
			y2="88"
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="24"
		/>
		<circle cx="92" cy="136" r="16" fill="currentColor" />
		<circle cx="164" cy="136" r="16" fill="currentColor" />
		<circle cx="92" cy="176" r="16" fill="currentColor" />
		<circle cx="128" cy="176" r="16" fill="currentColor" />
		<circle cx="164" cy="176" r="16" fill="currentColor" />
	</svg>
);

export const CalendarDots: React.FC<IconsProps> = ({
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
			return <CalendarDotsLight {...props} />;
		case "bold":
			return <CalendarDotsBold {...props} />;
		default:
			return <CalendarDotsRegular {...props} />;
	}
};

CalendarDots.displayName = "CalendarDots";

export default CalendarDots;
