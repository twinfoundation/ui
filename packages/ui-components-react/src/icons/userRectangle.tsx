// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import React from "react";
import type { IconsProps } from "./iconsProps";

const UserRectangleLight: React.FC<React.SVGProps<SVGSVGElement>> = props => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props}>
		<rect width="256" height="256" fill="none" />
		<path
			d="M16,56V200a8,8,0,0,0,8,8H232a8,8,0,0,0,8-8V56a8,8,0,0,0-8-8H24A8,8,0,0,0,16,56Z"
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="16"
		/>
		<circle
			cx="128"
			cy="112"
			r="32"
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="16"
		/>
		<path
			d="M56,200a72,72,0,0,1,144,0"
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="16"
		/>
	</svg>
);

const UserRectangleRegular: React.FC<React.SVGProps<SVGSVGElement>> = props => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props}>
		<rect width="256" height="256" fill="none" />
		<path
			d="M16,56V200a8,8,0,0,0,8,8H232a8,8,0,0,0,8-8V56a8,8,0,0,0-8-8H24A8,8,0,0,0,16,56Z"
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="24"
		/>
		<circle
			cx="128"
			cy="112"
			r="32"
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="24"
		/>
		<path
			d="M56,200a72,72,0,0,1,144,0"
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="24"
		/>
	</svg>
);

const UserRectangleBold: React.FC<React.SVGProps<SVGSVGElement>> = props => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props}>
		<rect width="256" height="256" fill="none" />
		<path
			d="M16,56V200a8,8,0,0,0,8,8H232a8,8,0,0,0,8-8V56a8,8,0,0,0-8-8H24A8,8,0,0,0,16,56Z"
			fill="currentColor"
			opacity="0.2"
		/>
		<path
			d="M16,56V200a8,8,0,0,0,8,8H232a8,8,0,0,0,8-8V56a8,8,0,0,0-8-8H24A8,8,0,0,0,16,56Z"
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="24"
		/>
		<circle cx="128" cy="112" r="32" fill="currentColor" opacity="0.2" />
		<circle
			cx="128"
			cy="112"
			r="32"
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="24"
		/>
		<path
			d="M56,200a72,72,0,0,1,144,0"
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="24"
		/>
	</svg>
);

export const UserRectangle: React.FC<IconsProps> = ({
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
			return <UserRectangleLight {...props} />;
		case "bold":
			return <UserRectangleBold {...props} />;
		default:
			return <UserRectangleRegular {...props} />;
	}
};

UserRectangle.displayName = "UserRectangle";

export default UserRectangle;
