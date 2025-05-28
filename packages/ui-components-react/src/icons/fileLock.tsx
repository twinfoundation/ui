// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import React from "react";
import type { IconsProps } from "../types/iconTypes";

const FileLockLight: React.FC<React.SVGProps<SVGSVGElement>> = props => (
	<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
		<rect width="256" height="256" fill="none" />
		<rect
			x="48"
			y="184"
			width="72"
			height="40"
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
		<path
			d="M64,184V172a20,20,0,0,1,40,0v12"
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
		<polyline
			points="152 32 152 88 208 88"
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
		<path
			d="M160,224h40a8,8,0,0,0,8-8V88L152,32H56a8,8,0,0,0-8,8v88"
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

const FileLockRegular: React.FC<React.SVGProps<SVGSVGElement>> = props => (
	<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
		<rect width="256" height="256" fill="none" />
		<rect
			x="48"
			y="184"
			width="72"
			height="40"
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
			d="M64,184V172a20,20,0,0,1,40,0v12"
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
		<polyline
			points="152 32 152 88 208 88"
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
			d="M160,224h40a8,8,0,0,0,8-8V88L152,32H56a8,8,0,0,0-8,8v88"
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
	</svg>
);

const FileLockBold: React.FC<React.SVGProps<SVGSVGElement>> = props => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props}>
		<rect width="256" height="256" fill="none" />
		<rect x="40" y="144" width="176" height="68" rx="8" fill="currentColor" opacity="0.2" />
		<rect
			x="40"
			y="144"
			width="176"
			height="68"
			rx="8"
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="24"
		/>
		<path
			d="M120,144V108a8,8,0,0,1,8-8h0a20,20,0,0,1,20,20v24"
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="24"
		/>
		<path
			d="M40,112V72a8,8,0,0,1,8-8h96l56,56v24"
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="24"
		/>
		<polyline
			points="152 32 152 88 208 88"
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="24"
		/>
	</svg>
);

export const FileLock: React.FC<IconsProps> = ({
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
			return <FileLockLight {...props} />;
		case "bold":
			return <FileLockBold {...props} />;
		default:
			return <FileLockRegular {...props} />;
	}
};

FileLock.displayName = "FileLock";

export default FileLock;
