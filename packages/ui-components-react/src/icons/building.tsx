import React from 'react';
import type { IconsProps } from "./iconsProps";

const BuildingLight: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    {...props}
  >
    <rect width="256" height="256" fill="none" />
    <rect 
      x="32" 
      y="56" 
      width="192" 
      height="160" 
      rx="8" 
      fill="none" 
      stroke="currentColor" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth="16"
    />
    <line 
      x1="104" 
      y1="56" 
      x2="104" 
      y2="216" 
      fill="none" 
      stroke="currentColor" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth="16"
    />
    <line 
      x1="32" 
      y1="96" 
      x2="224" 
      y2="96" 
      fill="none" 
      stroke="currentColor" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth="16"
    />
    <line 
      x1="32" 
      y1="136" 
      x2="224" 
      y2="136" 
      fill="none" 
      stroke="currentColor" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth="16"
    />
    <line 
      x1="80" 
      y1="96" 
      x2="80" 
      y2="216" 
      fill="none" 
      stroke="currentColor" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth="16"
    />
  </svg>
);

const BuildingRegular: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    {...props}
  >
    <rect width="256" height="256" fill="none" />
    <rect 
      x="32" 
      y="56" 
      width="192" 
      height="160" 
      rx="8" 
      fill="none" 
      stroke="currentColor" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth="24"
    />
    <line 
      x1="104" 
      y1="56" 
      x2="104" 
      y2="216" 
      fill="none" 
      stroke="currentColor" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth="24"
    />
    <line 
      x1="32" 
      y1="96" 
      x2="224" 
      y2="96" 
      fill="none" 
      stroke="currentColor" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth="24"
    />
    <line 
      x1="32" 
      y1="136" 
      x2="224" 
      y2="136" 
      fill="none" 
      stroke="currentColor" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth="24"
    />
    <line 
      x1="80" 
      y1="96" 
      x2="80" 
      y2="216" 
      fill="none" 
      stroke="currentColor" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth="24"
    />
  </svg>
);

const BuildingBold: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    {...props}
  >
    <rect width="256" height="256" fill="none" />
    <rect 
      x="32" 
      y="56" 
      width="192" 
      height="160" 
      rx="8" 
      fill="currentColor"
    />
    <rect 
      x="32" 
      y="56" 
      width="192" 
      height="160" 
      rx="8" 
      fill="none" 
      stroke="currentColor" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth="24"
    />
    <line 
      x1="104" 
      y1="56" 
      x2="104" 
      y2="216" 
      fill="none" 
      stroke="currentColor" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth="24"
    />
    <line 
      x1="32" 
      y1="96" 
      x2="224" 
      y2="96" 
      fill="none" 
      stroke="currentColor" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth="24"
    />
    <line 
      x1="32" 
      y1="136" 
      x2="224" 
      y2="136" 
      fill="none" 
      stroke="currentColor" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth="24"
    />
    <line 
      x1="80" 
      y1="96" 
      x2="80" 
      y2="216" 
      fill="none" 
      stroke="currentColor" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth="24"
    />
  </svg>
);

export const Building: React.FC<IconsProps> = ({
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
      return <BuildingLight {...props} />;
    case 'bold':
      return <BuildingBold {...props} />;
    case 'regular':
    default:
      return <BuildingRegular {...props} />;
  }
};

Building.displayName = 'Building';

export default Building;
