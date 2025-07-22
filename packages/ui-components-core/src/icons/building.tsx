// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import React from "react";
import type { IconsProps } from "../types/iconTypes";

const BuildingLight: React.FC<React.SVGProps<SVGSVGElement>> = props => (
	<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor">
		<path d="M232,226H206V30h10a6,6,0,0,0,0-12H40a6,6,0,0,0,0,12H50V226H24a6,6,0,0,0,0,12H232a6,6,0,0,0,0-12ZM62,30H194V226H158V184a6,6,0,0,0-6-6H104a6,6,0,0,0-6,6v42H62Zm84,196H110V190h36ZM90,64a6,6,0,0,1,6-6h16a6,6,0,0,1,0,12H96A6,6,0,0,1,90,64Zm48,0a6,6,0,0,1,6-6h16a6,6,0,0,1,0,12H144A6,6,0,0,1,138,64ZM90,104a6,6,0,0,1,6-6h16a6,6,0,0,1,0,12H96A6,6,0,0,1,90,104Zm48,0a6,6,0,0,1,6-6h16a6,6,0,0,1,0,12H144A6,6,0,0,1,138,104ZM96,150a6,6,0,0,1,0-12h16a6,6,0,0,1,0,12Zm42-6a6,6,0,0,1,6-6h16a6,6,0,0,1,0,12H144A6,6,0,0,1,138,144Z" />
	</svg>
);

const BuildingRegular: React.FC<React.SVGProps<SVGSVGElement>> = props => (
	<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor">
		<path d="M232,224H208V32h8a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16h8V224H24a8,8,0,0,0,0,16H232a8,8,0,0,0,0-16ZM64,32H192V224H160V184a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8v40H64Zm80,192H112V192h32ZM88,64a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H96A8,8,0,0,1,88,64Zm48,0a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H144A8,8,0,0,1,136,64ZM88,104a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H96A8,8,0,0,1,88,104Zm48,0a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H144A8,8,0,0,1,136,104ZM88,144a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H96A8,8,0,0,1,88,144Zm48,0a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H144A8,8,0,0,1,136,144Z" />
	</svg>
);

const BuildingBold: React.FC<React.SVGProps<SVGSVGElement>> = props => (
	<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor">
		<path d="M232,220H212V36h4a12,12,0,0,0,0-24H40a12,12,0,0,0,0,24h4V220H24a12,12,0,0,0,0,24H232a12,12,0,0,0,0-24ZM68,36H188V220H164V184a12,12,0,0,0-12-12H104a12,12,0,0,0-12,12v36H68Zm72,184H116V196h24ZM84,64A12,12,0,0,1,96,52h12a12,12,0,0,1,0,24H96A12,12,0,0,1,84,64Zm52,0a12,12,0,0,1,12-12h12a12,12,0,0,1,0,24H148A12,12,0,0,1,136,64ZM84,104A12,12,0,0,1,96,92h12a12,12,0,0,1,0,24H96A12,12,0,0,1,84,104Zm52,0a12,12,0,0,1,12-12h12a12,12,0,0,1,0,24H148A12,12,0,0,1,136,104ZM84,144a12,12,0,0,1,12-12h12a12,12,0,0,1,0,24H96A12,12,0,0,1,84,144Zm52,0a12,12,0,0,1,12-12h12a12,12,0,0,1,0,24H148A12,12,0,0,1,136,144Z" />
	</svg>
);

const BuildingFill: React.FC<React.SVGProps<SVGSVGElement>> = props => (
	<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor">
		<path d="M232,224H208V32h8a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16h8V224H24a8,8,0,0,0,0,16H232a8,8,0,0,0,0-16ZM88,56h24a8,8,0,0,1,0,16H88a8,8,0,0,1,0-16Zm0,40h24a8,8,0,0,1,0,16H88a8,8,0,0,1,0-16Zm-8,48a8,8,0,0,1,8-8h24a8,8,0,0,1,0,16H88A8,8,0,0,1,80,144Zm72,80H104V184h48Zm16-72H144a8,8,0,0,1,0-16h24a8,8,0,0,1,0,16Zm0-40H144a8,8,0,0,1,0-16h24a8,8,0,0,1,0,16Zm0-40H144a8,8,0,0,1,0-16h24a8,8,0,0,1,0,16Z" />
	</svg>
);

export const Building: React.FC<IconsProps> = ({
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
			return <BuildingLight {...props} />;
		case "bold":
			return <BuildingBold {...props} />;
		case "fill":
			return <BuildingFill {...props} />;
		default:
			return <BuildingRegular {...props} />;
	}
};

Building.displayName = "Building";

export default Building;
