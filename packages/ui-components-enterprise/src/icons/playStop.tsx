// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import React from "react";
import type { IconsProps } from "../types/iconTypes";

const PlayStopLight: React.FC<React.SVGProps<SVGSVGElement>> = props => (
	<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor">
		<path d="M182,64V192a6,6,0,0,1-12,0V64a6,6,0,0,1,12,0Zm42-6a6,6,0,0,0-6,6V192a6,6,0,0,0,12,0V64A6,6,0,0,0,224,58Zm-82,70a13.77,13.77,0,0,1-6.41,11.65L47.41,195.8A13.91,13.91,0,0,1,26,184.15V71.85A13.91,13.91,0,0,1,47.41,60.2l88.18,56.15A13.77,13.77,0,0,1,142,128Zm-12,0a1.77,1.77,0,0,0-.85-1.53L41,70.32a1.87,1.87,0,0,0-1-.32,2.13,2.13,0,0,0-1,.25,1.76,1.76,0,0,0-1,1.6v112.3a1.76,1.76,0,0,0,1,1.6,1.9,1.9,0,0,0,2-.07l88.19-56.15A1.77,1.77,0,0,0,130,128Z" />
	</svg>
);

const PlayStopRegular: React.FC<React.SVGProps<SVGSVGElement>> = props => (
	<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor">
		<path d="M184,64V192a8,8,0,0,1-16,0V64a8,8,0,0,1,16,0Zm40-8a8,8,0,0,0-8,8V192a8,8,0,0,0,16,0V64A8,8,0,0,0,224,56Zm-80,72a15.76,15.76,0,0,1-7.33,13.34L48.48,197.49A15.91,15.91,0,0,1,24,184.15V71.85A15.91,15.91,0,0,1,48.48,58.51l88.19,56.15A15.76,15.76,0,0,1,144,128Zm-16.18,0L40,72.08V183.93Z" />
	</svg>
);

const PlayStopBold: React.FC<React.SVGProps<SVGSVGElement>> = props => (
	<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor">
		<path d="M188,64V192a12,12,0,0,1-24,0V64a12,12,0,0,1,24,0Zm36-12a12,12,0,0,0-12,12V192a12,12,0,0,0,24,0V64A12,12,0,0,0,224,52Zm-76,76a19.71,19.71,0,0,1-9.19,16.71L50.63,200.87A19.91,19.91,0,0,1,20,184.15V71.85A19.91,19.91,0,0,1,50.63,55.13l88.18,56.16A19.71,19.71,0,0,1,148,128Zm-27.62,0L44,79.37v97.26Z" />
	</svg>
);

const PlayStopFill: React.FC<React.SVGProps<SVGSVGElement>> = props => (
	<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor">
		<path d="M184,64V192a8,8,0,0,1-16,0V64a8,8,0,0,1,16,0Zm40-8a8,8,0,0,0-8,8V192a8,8,0,0,0,16,0V64A8,8,0,0,0,224,56Zm-87.33,58.66L48.48,58.51A15.91,15.91,0,0,0,24,71.85v112.3A15.83,15.83,0,0,0,32.23,198a15.95,15.95,0,0,0,16.25-.53l88.19-56.15a15.8,15.8,0,0,0,0-26.68Z" />
	</svg>
);

export const PlayStop: React.FC<IconsProps> = ({
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
			return <PlayStopLight {...props} />;
		case "bold":
			return <PlayStopBold {...props} />;
		case "fill":
			return <PlayStopFill {...props} />;
		default:
			return <PlayStopRegular {...props} />;
	}
};

PlayStop.displayName = "PlayStop";

export default PlayStop;
