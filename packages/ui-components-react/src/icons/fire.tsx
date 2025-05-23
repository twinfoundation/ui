// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import React from "react";
import type { IconsProps } from "./iconsProps";

const FireLight: React.FC<React.SVGProps<SVGSVGElement>> = props => (
	<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
		<rect width="256" height="256" fill="none" />
		<path
			d="M166.17,156A40.11,40.11,0,0,1,140,182.17"
			fill="none"
			stroke="currentColor"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="24"
		/>
		<path
			d="M112,96l26.27-72C159.86,41.92,208,88.15,208,144a80,80,0,0,1-160,0c0-30.57,14.42-58.26,31-80Z"
			fill="none"
			stroke="currentColor"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="24"
		/>
	</svg>
);

const FireRegular: React.FC<React.SVGProps<SVGSVGElement>> = props => (
	<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
		<rect width="256" height="256" fill="none" />
		<path
			d="M166.17,156A40.11,40.11,0,0,1,140,182.17"
			fill="none"
			stroke="currentColor"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="24"
		/>
		<path
			d="M112,96l26.27-72C159.86,41.92,208,88.15,208,144a80,80,0,0,1-160,0c0-30.57,14.42-58.26,31-80Z"
			fill="none"
			stroke="currentColor"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="24"
		/>
	</svg>
);

const FireBold: React.FC<React.SVGProps<SVGSVGElement>> = props => (
	<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
		<rect width="256" height="256" fill="none" />
		<path
			d="M166.17,156A40.11,40.11,0,0,1,140,182.17"
			fill="none"
			stroke="currentColor"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="24"
		/>
		<path
			d="M112,96l26.27-72C159.86,41.92,208,88.15,208,144a80,80,0,0,1-160,0c0-30.57,14.42-58.26,31-80Z"
			fill="none"
			stroke="currentColor"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="24"
		/>
	</svg>
);

export const Fire: React.FC<IconsProps> = ({
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
			return <FireLight {...props} />;
		case "bold":
			return <FireBold {...props} />;
		default:
			return <FireRegular {...props} />;
	}
};

Fire.displayName = "Fire";

export default Fire;
