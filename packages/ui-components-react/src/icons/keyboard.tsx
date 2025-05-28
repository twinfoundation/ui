// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import React from "react";
import type { IconsProps } from "../types/iconTypes";

const KeyboardLight: React.FC<React.SVGProps<SVGSVGElement>> = props => (
	<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
		<rect width="256" height="256" fill="none" />
		<rect
			x="24"
			y="56"
			width="208"
			height="144"
			rx="8"
			fill="none"
			stroke="currentColor"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="12"
		/>
		<line
			x1="56"
			y1="128"
			x2="200"
			y2="128"
			fill="none"
			stroke="currentColor"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="12"
		/>
		<line
			x1="56"
			y1="96"
			x2="200"
			y2="96"
			fill="none"
			stroke="currentColor"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="12"
		/>
		<line
			x1="56"
			y1="160"
			x2="64"
			y2="160"
			fill="none"
			stroke="currentColor"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="12"
		/>
		<line
			x1="96"
			y1="160"
			x2="160"
			y2="160"
			fill="none"
			stroke="currentColor"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="12"
		/>
		<line
			x1="192"
			y1="160"
			x2="200"
			y2="160"
			fill="none"
			stroke="currentColor"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="12"
		/>
	</svg>
);

const KeyboardRegular: React.FC<React.SVGProps<SVGSVGElement>> = props => (
	<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
		<rect width="256" height="256" fill="none" />
		<rect
			x="24"
			y="56"
			width="208"
			height="144"
			rx="8"
			fill="none"
			stroke="currentColor"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="16"
		/>
		<line
			x1="56"
			y1="128"
			x2="200"
			y2="128"
			fill="none"
			stroke="currentColor"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="16"
		/>
		<line
			x1="56"
			y1="96"
			x2="200"
			y2="96"
			fill="none"
			stroke="currentColor"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="16"
		/>
		<line
			x1="56"
			y1="160"
			x2="64"
			y2="160"
			fill="none"
			stroke="currentColor"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="16"
		/>
		<line
			x1="96"
			y1="160"
			x2="160"
			y2="160"
			fill="none"
			stroke="currentColor"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="16"
		/>
		<line
			x1="192"
			y1="160"
			x2="200"
			y2="160"
			fill="none"
			stroke="currentColor"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="16"
		/>
	</svg>
);

const KeyboardBold: React.FC<React.SVGProps<SVGSVGElement>> = props => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props}>
		<rect width="256" height="256" fill="none" />
		<rect x="24" y="56" width="208" height="144" rx="8" fill="currentColor" opacity="0.2" />
		<rect
			x="24"
			y="56"
			width="208"
			height="144"
			rx="8"
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="24"
		/>
		<circle cx="68" cy="128" r="20" fill="currentColor" />
		<circle cx="128" cy="128" r="20" fill="currentColor" />
		<circle cx="188" cy="128" r="20" fill="currentColor" />
		<circle cx="68" cy="88" r="20" fill="currentColor" />
		<circle cx="128" cy="88" r="20" fill="currentColor" />
		<circle cx="188" cy="88" r="20" fill="currentColor" />
		<circle cx="68" cy="168" r="20" fill="currentColor" />
		<circle cx="98" cy="168" r="20" fill="currentColor" />
		<line
			x1="128"
			y1="168"
			x2="148"
			y2="168"
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="24"
		/>
		<line
			x1="188"
			y1="168"
			x2="188"
			y2="168"
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="24"
		/>
	</svg>
);

export const Keyboard: React.FC<IconsProps> = ({
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
			return <KeyboardLight {...props} />;
		case "bold":
			return <KeyboardBold {...props} />;
		default:
			return <KeyboardRegular {...props} />;
	}
};

Keyboard.displayName = "Keyboard";

export default Keyboard;
