// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import React from "react";
import type { IconsProps } from "./iconsProps";

const CameraLight: React.FC<React.SVGProps<SVGSVGElement>> = props => (
	<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
		<rect width="256" height="256" fill="none" />
		<path
			d="M208,208H48a16,16,0,0,1-16-16V80A16,16,0,0,1,48,64H80L96,40h64l16,24h32a16,16,0,0,1,16,16V192A16,16,0,0,1,208,208Z"
			fill="none"
			stroke="currentColor"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="24"
		/>
		<circle
			cx="128"
			cy="132"
			r="36"
			fill="none"
			stroke="currentColor"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="24"
		/>
	</svg>
);

const CameraRegular: React.FC<React.SVGProps<SVGSVGElement>> = props => (
	<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
		<rect width="256" height="256" fill="none" />
		<path
			d="M208,208H48a16,16,0,0,1-16-16V80A16,16,0,0,1,48,64H80L96,40h64l16,24h32a16,16,0,0,1,16,16V192A16,16,0,0,1,208,208Z"
			fill="none"
			stroke="currentColor"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="24"
		/>
		<circle
			cx="128"
			cy="132"
			r="36"
			fill="none"
			stroke="currentColor"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="24"
		/>
	</svg>
);

const CameraBold: React.FC<React.SVGProps<SVGSVGElement>> = props => (
	<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
		<rect width="256" height="256" fill="none" />
		<path
			d="M208,208H48a16,16,0,0,1-16-16V80A16,16,0,0,1,48,64H80L96,40h64l16,24h32a16,16,0,0,1,16,16V192A16,16,0,0,1,208,208Z"
			fill="none"
			stroke="currentColor"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="24"
		/>
		<circle
			cx="128"
			cy="132"
			r="36"
			fill="none"
			stroke="currentColor"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="24"
		/>
	</svg>
);

export const Camera: React.FC<IconsProps> = ({
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
			return <CameraLight {...props} />;
		case "bold":
			return <CameraBold {...props} />;
		default:
			return <CameraRegular {...props} />;
	}
};

Camera.displayName = "Camera";

export default Camera;
