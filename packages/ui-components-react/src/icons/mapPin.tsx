import React from 'react';
import type { IconsProps } from "./iconsProps";

const MapPinLight: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    {...props}
  >
    <rect width="256" height="256" fill="none" />
    <path
      d="M54.5,201.5c9.2-8.2,24.1-11.5,38.3-14.8,9-2.1,18.1-4.2,25.8-9.6a42,42,0,0,0,4.4-3.8c16.7-16.7,35.9-35.9,45.9-70.1,3.2-11,4.9-24.9,2.3-34.9s-10.5-19.7-20.5-24.6-22.8-5.3-34.9,2.3c-21.9,13.6-32.4,27.6-45.9,45.9-15.7,21.1-33.5,45.1-33.5,83.6"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle
      cx="128"
      cy="104"
      r="24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
  </svg>
);

const MapPinRegular: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    {...props}
  >
    <rect width="256" height="256" fill="none" />
    <path
      d="M54.5,201.5c9.2-8.2,24.1-11.5,38.3-14.8,9-2.1,18.1-4.2,25.8-9.6a42,42,0,0,0,4.4-3.8c16.7-16.7,35.9-35.9,45.9-70.1,3.2-11,4.9-24.9,2.3-34.9s-10.5-19.7-20.5-24.6-22.8-5.3-34.9,2.3c-21.9,13.6-32.4,27.6-45.9,45.9-15.7,21.1-33.5,45.1-33.5,83.6"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <circle
      cx="128"
      cy="104"
      r="24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
  </svg>
);

const MapPinBold: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    {...props}
  >
    <rect width="256" height="256" fill="none" />
    <path
      d="M54.5,201.5c9.2-8.2,24.1-11.5,38.3-14.8,9-2.1,18.1-4.2,25.8-9.6a42,42,0,0,0,4.4-3.8c16.7-16.7,35.9-35.9,45.9-70.1,3.2-11,4.9-24.9,2.3-34.9s-10.5-19.7-20.5-24.6-22.8-5.3-34.9,2.3c-21.9,13.6-32.4,27.6-45.9,45.9-15.7,21.1-33.5,45.1-33.5,83.6"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <circle
      cx="128"
      cy="104"
      r="24"
      fill="currentColor"
      opacity="0.2"
    />
    <circle
      cx="128"
      cy="104"
      r="24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
  </svg>
);

export const MapPin: React.FC<IconsProps> = ({
  color = 'currentColor',
  width = 24,
  height = width,
  className = '',
  type = 'regular',
}) => {
  const props = {
    width,
    height,
    className,
    style: { color, fill: color }
  };

  switch (type) {
    case 'light':
      return <MapPinLight {...props} />;
    case 'bold':
      return <MapPinBold {...props} />;
    case 'regular':
    default:
      return <MapPinRegular {...props} />;
  }
};

MapPin.displayName = 'MapPin';

export default MapPin;
