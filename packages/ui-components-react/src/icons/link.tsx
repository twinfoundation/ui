// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import React from "react";
import type { IconsProps } from "./iconsProps";

const LinkLight: React.FC<React.SVGProps<SVGSVGElement>> = props => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props}>
		<rect width="256" height="256" fill="none" />
		<path
			d="M132.7,60.1l32-27.9a23.9,23.9,0,0,1,32.8,34.8l-30.1,30.1a23.9,23.9,0,0,1-34.8-2.3"
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="16"
		/>
		<path
			d="M123.3,195.9l-32,27.9a23.9,23.9,0,0,1-32.8-34.8l30.1-30.1a23.9,23.9,0,0,1,34.8,2.3"
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="16"
		/>
		<line
			x1="160"
			y1="96"
			x2="96"
			y2="160"
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="16"
		/>
	</svg>
);

const LinkRegular: React.FC<React.SVGProps<SVGSVGElement>> = props => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props}>
		<rect width="256" height="256" fill="none" />
		<path
			d="M132.7,60.1l32-27.9a23.9,23.9,0,0,1,32.8,34.8l-30.1,30.1a23.9,23.9,0,0,1-34.8-2.3"
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="24"
		/>
		<path
			d="M123.3,195.9l-32,27.9a23.9,23.9,0,0,1-32.8-34.8l30.1-30.1a23.9,23.9,0,0,1,34.8,2.3"
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="24"
		/>
		<line
			x1="160"
			y1="96"
			x2="96"
			y2="160"
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="24"
		/>
	</svg>
);

const LinkBold: React.FC<React.SVGProps<SVGSVGElement>> = props => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props}>
		<rect width="256" height="256" fill="none" />
		<path
			d="M132.7,60.1l32-27.9a23.9,23.9,0,0,1,32.8,34.8l-30.1,30.1a23.9,23.9,0,0,1-34.8-2.3"
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="24"
		/>
		<path
			d="M123.3,195.9l-32,27.9a23.9,23.9,0,0,1-32.8-34.8l30.1-30.1a23.9,23.9,0,0,1,34.8,2.3"
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="24"
		/>
		<line
			x1="160"
			y1="96"
			x2="96"
			y2="160"
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="24"
		/>
	</svg>
);

export const Link: React.FC<IconsProps> = ({
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
			return <LinkLight {...props} />;
		case "bold":
			return <LinkBold {...props} />;
		default:
			return <LinkRegular {...props} />;
	}
};

Link.displayName = "Link";

export default Link;
