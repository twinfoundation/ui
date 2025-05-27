// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import React from "react";
import type { IconsProps } from "./iconsProps";

const UserPlusLight: React.FC<React.SVGProps<SVGSVGElement>> = props => (
	<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
		<rect width="256" height="256" fill="none" />
		<line
			x1="200"
			y1="136"
			x2="248"
			y2="136"
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="12"
		/>
		<line
			x1="224"
			y1="112"
			x2="224"
			y2="160"
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="12"
		/>
		<circle
			cx="108"
			cy="100"
			r="60"
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="12"
		/>
		<path
			d="M24,200c20.55-24.45,49.56-40,84-40s63.45,15.55,84,40"
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="12"
		/>
	</svg>
);

const UserPlusRegular: React.FC<React.SVGProps<SVGSVGElement>> = props => (
	<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
		<rect width="256" height="256" fill="none" />
		<line
			x1="200"
			y1="136"
			x2="248"
			y2="136"
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="16"
		/>
		<line
			x1="224"
			y1="112"
			x2="224"
			y2="160"
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="16"
		/>
		<circle
			cx="108"
			cy="100"
			r="60"
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="16"
		/>
		<path
			d="M24,200c20.55-24.45,49.56-40,84-40s63.45,15.55,84,40"
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="16"
		/>
	</svg>
);

const UserPlusBold: React.FC<React.SVGProps<SVGSVGElement>> = props => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props}>
		<rect width="256" height="256" fill="none" />
		<circle cx="80" cy="104" r="40" fill="currentColor" opacity="0.2" />
		<circle
			cx="80"
			cy="104"
			r="40"
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="24"
		/>
		<line
			x1="152"
			y1="80"
			x2="248"
			y2="80"
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="24"
		/>
		<line
			x1="200"
			y1="32"
			x2="200"
			y2="128"
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="24"
		/>
		<path
			d="M32,200a60,60,0,0,1,96,0"
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="24"
		/>
	</svg>
);

export const UserPlus: React.FC<IconsProps> = ({
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
			return <UserPlusLight {...props} />;
		case "bold":
			return <UserPlusBold {...props} />;
		default:
			return <UserPlusRegular {...props} />;
	}
};

UserPlus.displayName = "UserPlus";

export default UserPlus;
