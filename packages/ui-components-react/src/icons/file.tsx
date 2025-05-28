// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import React from "react";
import type { IconsProps } from "../types/iconTypes";

const FileLight: React.FC<React.SVGProps<SVGSVGElement>> = props => (
	<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
		<rect width="256" height="256" fill="none" />
		<path
			d="M200,224H56a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h96l56,56V216A8,8,0,0,1,200,224Z"
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
	</svg>
);

const FileRegular: React.FC<React.SVGProps<SVGSVGElement>> = props => (
	<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
		<rect width="256" height="256" fill="none" />
		<path
			d="M200,224H56a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h96l56,56V216A8,8,0,0,1,200,224Z"
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
	</svg>
);

const FileBold: React.FC<React.SVGProps<SVGSVGElement>> = props => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props}>
		<rect width="256" height="256" fill="none" />
		<path
			d="M200,224H56a16,16,0,0,1-16-16V40a16,16,0,0,1,16-16h96l56,56V216A16,16,0,0,1,200,224Z"
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

export const File: React.FC<IconsProps> = ({
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
			return <FileLight {...props} />;
		case "bold":
			return <FileBold {...props} />;
		default:
			return <FileRegular {...props} />;
	}
};

File.displayName = "File";

export default File;
