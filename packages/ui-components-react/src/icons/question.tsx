import React from 'react';
import type { IconsProps } from "./iconsProps";

const QuestionLight: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    {...props}
  >
    <rect width="256" height="256" fill="none" />
    <circle
      cx="128"
      cy="128"
      r="96"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle cx="128" cy="180" r="16" />
    <path
      d="M128,144v-8a28,28,0,1,0-28-28"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
  </svg>
);

const QuestionRegular: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    {...props}
  >
    <rect width="256" height="256" fill="none" />
    <circle
      cx="128"
      cy="128"
      r="96"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <circle cx="128" cy="180" r="16" />
    <path
      d="M128,144v-8a28,28,0,1,0-28-28"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
  </svg>
);

const QuestionBold: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    {...props}
  >
    <rect width="256" height="256" fill="none" />
    <circle
      cx="128"
      cy="128"
      r="96"
      fill="currentColor"
      opacity="0.2"
    />
    <circle
      cx="128"
      cy="128"
      r="96"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <circle cx="128" cy="180" r="16" fill="currentColor" />
    <path
      d="M128,144v-8a28,28,0,1,0-28-28"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
  </svg>
);

export const Question: React.FC<IconsProps> = ({
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
      return <QuestionLight {...props} />;
    case 'bold':
      return <QuestionBold {...props} />;
    case 'regular':
    default:
      return <QuestionRegular {...props} />;
  }
};

Question.displayName = 'Question';

export default Question;
