// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import React from "react";
import type { IconsProps } from "./iconsProps";

const DotsThreeVerticalLight: React.FC<React.SVGProps<SVGSVGElement>> = props => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props}>
		<rect width="256" height="256" fill="none" />
		<circle cx="128" cy="60" r="16" />
		<circle cx="128" cy="128" r="16" />
		<circle cx="128" cy="196" r="16" />
	</svg>
);

const DotsThreeVerticalRegular: React.FC<React.SVGProps<SVGSVGElement>> = props => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props}>
		<rect width="256" height="256" fill="none" />
		<circle cx="128" cy="60" r="16" />
		<circle cx="128" cy="128" r="16" />
		<circle cx="128" cy="196" r="16" />
	</svg>
);

const DotsThreeVerticalBold: React.FC<React.SVGProps<SVGSVGElement>> = props => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props}>
		<rect width="256" height="256" fill="none" />
		<circle cx="128" cy="60" r="20" fill="currentColor" />
		<circle cx="128" cy="128" r="20" fill="currentColor" />
		<circle cx="128" cy="196" r="20" fill="currentColor" />
	</svg>
);

export const DotsThreeVertical: React.FC<IconsProps> = ({
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
			return <DotsThreeVerticalLight {...props} />;
		case "bold":
			return <DotsThreeVerticalBold {...props} />;
		default:
			return <DotsThreeVerticalRegular {...props} />;
	}
};

DotsThreeVertical.displayName = "DotsThreeVertical";

export default DotsThreeVertical;
