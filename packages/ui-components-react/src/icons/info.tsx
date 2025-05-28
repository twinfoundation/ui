// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import React from "react";
import type { IconsProps } from "../types/iconTypes";

const InfoLight: React.FC<React.SVGProps<SVGSVGElement>> = props => (
	<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
		<rect width="256" height="256" fill="none" />
		<path
			d="M120,120a8,8,0,0,1,8,8v40a8,8,0,0,0,8,8"
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
		<circle cx="124" cy="84" r="10" />
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
	</svg>
);

const InfoRegular: React.FC<React.SVGProps<SVGSVGElement>> = props => (
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
			strokeWidth="16"
=======
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="16"
>>>>>>> next
		/>
		<path
			d="M120,120a8,8,0,0,1,8,8v40a8,8,0,0,0,8,8"
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
		<circle cx="124" cy="84" r="12" />
	</svg>
);

const InfoBold: React.FC<React.SVGProps<SVGSVGElement>> = props => (
	<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
		<rect width="256" height="256" fill="none" />
		<circle cx="124" cy="84" r="16" />
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
		<path
			d="M120,124a8,8,0,0,1,8,8v36a8,8,0,0,0,8,8"
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
	</svg>
);

export const Info: React.FC<IconsProps> = ({
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
			return <InfoLight {...props} />;
		case "bold":
			return <InfoBold {...props} />;
		default:
			return <InfoRegular {...props} />;
	}
};

Info.displayName = "Info";

export default Info;
