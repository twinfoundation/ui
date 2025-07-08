import React from 'react';
import * as styles from './badge-2.css';

export interface Badge2Props {
  children: React.ReactNode;
  color?: 'gray' | 'red' | 'green' | 'yellow' | 'blue' | 'purple' | 'pink';
  className?: string;
}

export const Badge2: React.FC<Badge2Props> = ({ 
  children, 
  color = 'gray',
  className = ''
}) => {
  const colorClass = styles[color];
  
  return (
    <span className={`${styles.badge} ${colorClass} ${className}`}>
      {children}
    </span>
  );
}; 