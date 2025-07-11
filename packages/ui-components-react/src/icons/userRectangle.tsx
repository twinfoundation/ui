// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import React from "react";
import type { IconsProps } from "../types/iconTypes";

const UserRectangleLight: React.FC<React.SVGProps<SVGSVGElement>> = props => (
	<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor">
		<path d="M216,42H40A14,14,0,0,0,26,56V200a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V56A14,14,0,0,0,216,42ZM94,120a34,34,0,1,1,34,34A34,34,0,0,1,94,120ZM69.21,202a66,66,0,0,1,117.58,0ZM218,200a2,2,0,0,1-2,2H200a78.18,78.18,0,0,0-46.55-43.71,46,46,0,1,0-50.9,0A78.18,78.18,0,0,0,56,202H40a2,2,0,0,1-2-2V56a2,2,0,0,1,2-2H216a2,2,0,0,1,2,2Z" />
	</svg>
);

const UserRectangleRegular: React.FC<React.SVGProps<SVGSVGElement>> = props => (
	<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor">
		<path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM96,120a32,32,0,1,1,32,32A32,32,0,0,1,96,120ZM72.57,200a64,64,0,0,1,110.86,0ZM216,200H201.33a80.14,80.14,0,0,0-43.69-42.28,48,48,0,1,0-59.28,0A80.14,80.14,0,0,0,54.67,200H40V56H216V200Z" />
	</svg>
);

const UserRectangleBold: React.FC<React.SVGProps<SVGSVGElement>> = props => (
	<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor">
		<path d="M216,36H40A20,20,0,0,0,20,56V200a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V56A20,20,0,0,0,216,36ZM100,128a28,28,0,1,1,28,28A28,28,0,0,1,100,128Zm28,52a59.66,59.66,0,0,1,40.85,16H87.15A59.66,59.66,0,0,1,128,180Zm84,16H199.56A83.46,83.46,0,0,0,165,164.5a52,52,0,1,0-74,0A83.46,83.46,0,0,0,56.44,196H44V60H212Z" />
	</svg>
);

const UserRectangleFill: React.FC<React.SVGProps<SVGSVGElement>> = props => (
	<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor">
		<path d="M172,120a44,44,0,1,1-44-44A44,44,0,0,1,172,120Zm60-64V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56ZM216,200V56H40V200H54.68a80,80,0,0,1,29.41-34.84,4,4,0,0,1,4.83.31,59.82,59.82,0,0,0,78.16,0,4,4,0,0,1,4.83-.31A80,80,0,0,1,201.32,200H216Z" />
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
		case "fill":
			return <UserRectangleFill {...props} />;
		default:
			return <UserRectangleRegular {...props} />;
	}
};

UserRectangle.displayName = "UserRectangle";

export default UserRectangle;
