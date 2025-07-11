import React from 'react';
import * as styles from './alert-2.css';

export interface Alert2Props {
  children: React.ReactNode;
  title?: string;
  color?: 'info' | 'success' | 'warning' | 'error' | 'gray';
  icon?: React.ReactNode;
  className?: string;
}

export const Alert2: React.FC<Alert2Props> = ({ 
  children, 
  title,
  color = 'info',
  icon,
  className = ''
}) => {
  const getColorClass = () => {
    switch (color) {
      case 'success': return styles.success;
      case 'warning': return styles.warning;
      case 'error': return styles.error;
      case 'gray': return styles.gray;
      default: return styles.info;
    }
  };

  return (
    <div className={`${styles.alert} ${getColorClass()} ${className}`}>
      {icon && <div className={styles.icon}>{icon}</div>}
      <div className={styles.content}>
        {title && <div className={styles.title}>{title}</div>}
        <div className={styles.message}>{children}</div>
      </div>
    </div>
  );
}; 