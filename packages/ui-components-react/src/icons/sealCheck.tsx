// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import React from "react";
import type { IconsProps } from "../types/iconTypes";

const SealCheckLight: React.FC<React.SVGProps<SVGSVGElement>> = props => (
	<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
		<rect width="256" height="256" fill="none" />
		<path
			d="M54.46,201.54c-9.2-9.2-3.1-28.53-7.78-39.85C41.82,150,24,140.5,24,128s17.82-22,22.68-33.69C51.36,83,45.26,63.66,54.46,54.46S83,51.36,94.31,46.68C106.05,41.82,115.5,24,128,24S150,41.82,161.69,46.68c11.32,4.68,30.65-1.42,39.85,7.78s3.1,28.53,7.78,39.85C214.18,106.05,232,115.5,232,128S214.18,150,209.32,161.69c-4.68,11.32,1.42,30.65-7.78,39.85s-28.53,3.1-39.85,7.78C150,214.18,140.5,232,128,232s-22-17.82-33.69-22.68C83,204.64,63.66,210.74,54.46,201.54Z"
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="12"
		/>
		<polyline
			points="88 136 112 160 168 104"
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="12"
		/>
	</svg>
);

const SealCheckRegular: React.FC<React.SVGProps<SVGSVGElement>> = props => (
	<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
		<rect width="256" height="256" fill="none" />
		<path
			d="M54.46,201.54c-9.2-9.2-3.1-28.53-7.78-39.85C41.82,150,24,140.5,24,128s17.82-22,22.68-33.69C51.36,83,45.26,63.66,54.46,54.46S83,51.36,94.31,46.68C106.05,41.82,115.5,24,128,24S150,41.82,161.69,46.68c11.32,4.68,30.65-1.42,39.85,7.78s3.1,28.53,7.78,39.85C214.18,106.05,232,115.5,232,128S214.18,150,209.32,161.69c-4.68,11.32,1.42,30.65-7.78,39.85s-28.53,3.1-39.85,7.78C150,214.18,140.5,232,128,232s-22-17.82-33.69-22.68C83,204.64,63.66,210.74,54.46,201.54Z"
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="16"
		/>
		<polyline
			points="88 136 112 160 168 104"
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="16"
		/>
	</svg>
);

const SealCheckBold: React.FC<React.SVGProps<SVGSVGElement>> = props => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props}>
		<rect width="256" height="256" fill="none" />
		<path
			d="M216,100v56a8,8,0,0,1-3.4,6.5l-32,21.3a8,8,0,0,0-2.6,9.3l12.3,37a8,8,0,0,1-7.4,10.7H74.1a8,8,0,0,1-7.4-10.7l12.3-37a8,8,0,0,0-2.6-9.3l-32-21.3a8,8,0,0,1-3.4-6.5V100a8,8,0,0,1,3.4-6.5l32-21.3a8,8,0,0,0,2.6-9.3L66.7,26.1A8,8,0,0,1,74.1,16H182a8,8,0,0,1,7.4,10.1l-12.3,37a8,8,0,0,0,2.6,9.3l32,21.3A8,8,0,0,1,216,100Z"
			fill="currentColor"
			opacity="0.2"
		/>
		<path
			d="M216,100v56a8,8,0,0,1-3.4,6.5l-32,21.3a8,8,0,0,0-2.6,9.3l12.3,37a8,8,0,0,1-7.4,10.7H74.1a8,8,0,0,1-7.4-10.7l12.3-37a8,8,0,0,0-2.6-9.3l-32-21.3a8,8,0,0,1-3.4-6.5V100a8,8,0,0,1,3.4-6.5l32-21.3a8,8,0,0,0,2.6-9.3L66.7,26.1A8,8,0,0,1,74.1,16H182a8,8,0,0,1,7.4,10.1l-12.3,37a8,8,0,0,0,2.6,9.3l32,21.3A8,8,0,0,1,216,100Z"
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="24"
		/>
		<polyline
			points="96 120 120 144 176 88"
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="24"
		/>
	</svg>
);

export const SealCheck: React.FC<IconsProps> = ({
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
			return <SealCheckLight {...props} />;
		case "bold":
			return <SealCheckBold {...props} />;
		default:
			return <SealCheckRegular {...props} />;
	}
};

SealCheck.displayName = "SealCheck";

export default SealCheck;
