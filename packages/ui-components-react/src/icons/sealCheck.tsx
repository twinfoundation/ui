import React from 'react';
import type { IconsProps } from "./iconsProps";

const SealCheckLight: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    {...props}
  >
    <rect width="256" height="256" fill="none" />
    <path
      d="M216,100v56a8,8,0,0,1-3.4,6.5l-32,21.3a8,8,0,0,0-2.6,9.3l12.3,37a8,8,0,0,1-7.4,10.7H74.1a8,8,0,0,1-7.4-10.7l12.3-37a8,8,0,0,0-2.6-9.3l-32-21.3a8,8,0,0,1-3.4-6.5V100a8,8,0,0,1,3.4-6.5l32-21.3a8,8,0,0,0,2.6-9.3L66.7,26.1A8,8,0,0,1,74.1,16H182a8,8,0,0,1,7.4,10.1l-12.3,37a8,8,0,0,0,2.6,9.3l32,21.3A8,8,0,0,1,216,100Z"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="96 120 120 144 176 88"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
  </svg>
);

const SealCheckRegular: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    {...props}
  >
    <rect width="256" height="256" fill="none" />
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

const SealCheckBold: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    {...props}
  >
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
      return <SealCheckLight {...props} />;
    case 'bold':
      return <SealCheckBold {...props} />;
    case 'regular':
    default:
      return <SealCheckRegular {...props} />;
  }
};

SealCheck.displayName = 'SealCheck';

export default SealCheck;
