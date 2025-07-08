import React from 'react';
import * as styles from './progress-2.css';

export interface Progress2Props {
  value: number;
  max?: number;
  label?: string;
  showLabel?: boolean;
  size?: 'small' | 'medium' | 'large' | 'xlarge';
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
  striped?: boolean;
  animated?: boolean;
  className?: string;
}

export const Progress2: React.FC<Progress2Props> = ({
  value,
  max = 100,
  label,
  showLabel = true,
  size = 'medium',
  color = 'primary',
  striped = false,
  animated = false,
  className = '',
}) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  const getSizeClass = () => {
    switch (size) {
      case 'small': return styles.small;
      case 'large': return styles.large;
      case 'xlarge': return styles.xlarge;
      default: return '';
    }
  };

  const getColorClass = () => {
    switch (color) {
      case 'secondary': return styles.secondary;
      case 'success': return styles.success;
      case 'warning': return styles.warning;
      case 'error': return styles.error;
      case 'info': return styles.info;
      default: return styles.primary;
    }
  };

  const getBarClass = () => {
    let barClass = `${styles.bar} ${getColorClass()}`;
    if (striped) barClass += ` ${styles.striped}`;
    if (animated) barClass += ` ${styles.animated}`;
    return barClass;
  };

  const displayLabel = label || `${Math.round(percentage)}%`;

  return (
    <div className={`${styles.container} ${className}`}>
      {showLabel && (
        <div className={styles.label}>
          <span>{displayLabel}</span>
          <span>{value}/{max}</span>
        </div>
      )}
      <div className={`${styles.progress} ${getSizeClass()}`}>
        <div
          className={getBarClass()}
          style={{ width: `${percentage}%` }}
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={max}
        />
      </div>
    </div>
  );
}; 