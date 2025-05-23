// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import React from "react";
import type { IconsProps } from "./iconsProps";

const ImageLight: React.FC<React.SVGProps<SVGSVGElement>> = props => (
	<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
		<rect width="256" height="256" fill="none" />
		<circle cx="160" cy="96" r="16" />
		<rect
			x="32"
			y="48"
			width="192"
			height="160"
			rx="8"
			fill="none"
			stroke="currentColor"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="24"
		/>
		<path
			d="M147.31,164,173,138.34a8,8,0,0,1,11.31,0L224,178.06"
			fill="none"
			stroke="currentColor"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="24"
		/>
		<path
			d="M32,168.69l54.34-54.35a8,8,0,0,1,11.32,0L191.31,208"
			fill="none"
			stroke="currentColor"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="24"
		/>
	</svg>
);

const ImageRegular: React.FC<React.SVGProps<SVGSVGElement>> = props => (
	<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
		<rect width="256" height="256" fill="none" />
		<circle cx="160" cy="96" r="16" />
		<rect
			x="32"
			y="48"
			width="192"
			height="160"
			rx="8"
			fill="none"
			stroke="currentColor"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="24"
		/>
		<path
			d="M147.31,164,173,138.34a8,8,0,0,1,11.31,0L224,178.06"
			fill="none"
			stroke="currentColor"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="24"
		/>
		<path
			d="M32,168.69l54.34-54.35a8,8,0,0,1,11.32,0L191.31,208"
			fill="none"
			stroke="currentColor"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="24"
		/>
	</svg>
);

const ImageBold: React.FC<React.SVGProps<SVGSVGElement>> = props => (
	<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
		<rect width="256" height="256" fill="none" />
		<circle cx="160" cy="96" r="16" />
		<rect
			x="32"
			y="48"
			width="192"
			height="160"
			rx="8"
			fill="none"
			stroke="currentColor"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="24"
		/>
		<path
			d="M147.31,164,173,138.34a8,8,0,0,1,11.31,0L224,178.06"
			fill="none"
			stroke="currentColor"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="24"
		/>
		<path
			d="M32,168.69l54.34-54.35a8,8,0,0,1,11.32,0L191.31,208"
			fill="none"
			stroke="currentColor"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="24"
		/>
	</svg>
);

export const Image: React.FC<IconsProps> = ({
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
			return <ImageLight {...props} />;
		case "bold":
			return <ImageBold {...props} />;
		default:
			return <ImageRegular {...props} />;
	}
};

Image.displayName = "Image";

export default Image;
