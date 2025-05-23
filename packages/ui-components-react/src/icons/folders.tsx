// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import React from "react";
import type { IconsProps } from "./iconsProps";

const FoldersLight: React.FC<React.SVGProps<SVGSVGElement>> = props => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props}>
		<rect width="256" height="256" fill="none" />
		<path
			d="M216,88V200a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8h52.7a8.1,8.1,0,0,1,4.8,1.6L128,80H208A8,8,0,0,1,216,88Z"
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="16"
		/>
		<path
			d="M88,80V40a8,8,0,0,1,8-8h52.7a8.1,8.1,0,0,1,4.8,1.6L208,80"
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="16"
		/>
	</svg>
);

const FoldersRegular: React.FC<React.SVGProps<SVGSVGElement>> = props => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props}>
		<rect width="256" height="256" fill="none" />
		<path
			d="M216,88V200a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8h52.7a8.1,8.1,0,0,1,4.8,1.6L128,80H208A8,8,0,0,1,216,88Z"
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="24"
		/>
		<path
			d="M88,80V40a8,8,0,0,1,8-8h52.7a8.1,8.1,0,0,1,4.8,1.6L208,80"
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="24"
		/>
	</svg>
);

const FoldersBold: React.FC<React.SVGProps<SVGSVGElement>> = props => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props}>
		<rect width="256" height="256" fill="none" />
		<path
			d="M216,88V200a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8h52.7a8.1,8.1,0,0,1,4.8,1.6L128,80H208A8,8,0,0,1,216,88Z"
			fill="currentColor"
			opacity="0.2"
		/>
		<path
			d="M216,88V200a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8h52.7a8.1,8.1,0,0,1,4.8,1.6L128,80H208A8,8,0,0,1,216,88Z"
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="24"
		/>
		<path
			d="M88,80V40a8,8,0,0,1,8-8h52.7a8.1,8.1,0,0,1,4.8,1.6L208,80"
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="24"
		/>
	</svg>
);

export const Folders: React.FC<IconsProps> = ({
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
			return <FoldersLight {...props} />;
		case "bold":
			return <FoldersBold {...props} />;
		default:
			return <FoldersRegular {...props} />;
	}
};

Folders.displayName = "Folders";

export default Folders;
