// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import React from "react";
import type { IconsProps } from "./iconsProps";

const UploadLight: React.FC<React.SVGProps<SVGSVGElement>> = props => (
	<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
		<rect width="256" height="256" fill="none" />
		<path
			d="M176,128h48a8,8,0,0,1,8,8v64a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V136a8,8,0,0,1,8-8H80"
			fill="none"
			stroke="currentColor"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="12"
		/>
		<line
			x1="128"
			y1="128"
			x2="128"
			y2="24"
			fill="none"
			stroke="currentColor"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="12"
		/>
		<polyline
			points="80 72 128 24 176 72"
			fill="none"
			stroke="currentColor"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="12"
		/>
		<circle cx="188" cy="168" r="10" />
	</svg>
);

const UploadRegular: React.FC<React.SVGProps<SVGSVGElement>> = props => (
	<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
		<rect width="256" height="256" fill="none" />
		<path
			d="M176,128h48a8,8,0,0,1,8,8v64a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V136a8,8,0,0,1,8-8H80"
			fill="none"
			stroke="currentColor"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="16"
		/>
		<line
			x1="128"
			y1="128"
			x2="128"
			y2="24"
			fill="none"
			stroke="currentColor"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="16"
		/>
		<polyline
			points="80 72 128 24 176 72"
			fill="none"
			stroke="currentColor"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="16"
		/>
		<circle cx="188" cy="168" r="12" />
	</svg>
);

const UploadBold: React.FC<React.SVGProps<SVGSVGElement>> = props => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props}>
		<rect width="256" height="256" fill="none" />
		<path
			d="M176,128h48a8,8,0,0,1,8,8v64a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V136a8,8,0,0,1,8-8H80"
			fill="currentColor"
			opacity="0.2"
		/>
		<path
			d="M176,128h48a8,8,0,0,1,8,8v64a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V136a8,8,0,0,1,8-8H80"
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="24"
		/>
		<line
			x1="128"
			y1="24"
			x2="128"
			y2="128"
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="24"
		/>
		<polyline
			points="80 80 128 32 176 80"
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="24"
		/>
	</svg>
);

export const Upload: React.FC<IconsProps> = ({
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
			return <UploadLight {...props} />;
		case "bold":
			return <UploadBold {...props} />;
		default:
			return <UploadRegular {...props} />;
	}
};

Upload.displayName = "Upload";

export default Upload;
