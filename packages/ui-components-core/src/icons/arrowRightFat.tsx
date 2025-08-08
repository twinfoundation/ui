// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import React from "react";
import type { IconsProps } from "../types/iconTypes";

const ArrowRightFatLight: React.FC<React.SVGProps<SVGSVGElement>> = props => (
	<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor">
		<path d="M236.24,123.76l-96-96A6,6,0,0,0,130,32V74H48A14,14,0,0,0,34,88v80a14,14,0,0,0,14,14h82v42a6,6,0,0,0,10.24,4.24l96-96A6,6,0,0,0,236.24,123.76ZM142,209.51V176a6,6,0,0,0-6-6H48a2,2,0,0,1-2-2V88a2,2,0,0,1,2-2h88a6,6,0,0,0,6-6V46.49L223.51,128Z" />
	</svg>
);

const ArrowRightFatRegular: React.FC<React.SVGProps<SVGSVGElement>> = props => (
	<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor">
		<path d="M237.66,122.34l-96-96A8,8,0,0,0,128,32V72H48A16,16,0,0,0,32,88v80a16,16,0,0,0,16,16h80v40a8,8,0,0,0,13.66,5.66l96-96A8,8,0,0,0,237.66,122.34ZM144,204.69V176a8,8,0,0,0-8-8H48V88h88a8,8,0,0,0,8-8V51.31L220.69,128Z" />
	</svg>
);

const ArrowRightFatBold: React.FC<React.SVGProps<SVGSVGElement>> = props => (
	<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor">
		<path d="M240.49,119.51l-96-96A12,12,0,0,0,124,32V68H48A20,20,0,0,0,28,88v80a20,20,0,0,0,20,20h76v36a12,12,0,0,0,20.49,8.49l96-96A12,12,0,0,0,240.49,119.51ZM148,195V176a12,12,0,0,0-12-12H52V92h84a12,12,0,0,0,12-12V61l67,67Z" />
	</svg>
);

const ArrowRightFatFill: React.FC<React.SVGProps<SVGSVGElement>> = props => (
	<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor">
		<path d="M237.66,133.66l-96,96A8,8,0,0,1,128,224V184H48a16,16,0,0,1-16-16V88A16,16,0,0,1,48,72h80V32a8,8,0,0,1,13.66-5.66l96,96A8,8,0,0,1,237.66,133.66Z" />
	</svg>
);

export const ArrowRightFat: React.FC<IconsProps> = ({
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
			return <ArrowRightFatLight {...props} />;
		case "bold":
			return <ArrowRightFatBold {...props} />;
		case "fill":
			return <ArrowRightFatFill {...props} />;
		default:
			return <ArrowRightFatRegular {...props} />;
	}
};

ArrowRightFat.displayName = "ArrowRightFat";

export default ArrowRightFat;
