import React from 'react';
import * as styles from './avatar-2.css';

export interface Avatar2Props {
  src?: string;
  alt?: string;
  fallback?: string;
  size?: 'xs' | 'small' | 'medium' | 'large' | 'xlarge';
  shape?: 'circular' | 'rounded';
  className?: string;
}

export const Avatar2: React.FC<Avatar2Props> = ({ 
  src,
  alt,
  fallback,
  size = 'medium',
  shape = 'circular',
  className = ''
}) => {
  const getSizeClass = () => {
    switch (size) {
      case 'xs': return styles.xs;
      case 'small': return styles.small;
      case 'large': return styles.large;
      case 'xlarge': return styles.xlarge;
      default: return styles.medium;
    }
  };

  const getShapeClass = () => {
    return shape === 'rounded' ? styles.rounded : styles.circular;
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className={`${styles.avatar} ${getSizeClass()} ${getShapeClass()} ${className}`}>
      {src ? (
        <img 
          src={src} 
          alt={alt || 'Avatar'} 
          className={styles.image}
          onError={(e) => {
            // Hide image on error and show fallback
            (e.target as HTMLImageElement).style.display = 'none';
          }}
        />
      ) : null}
      
      {(!src || fallback) && (
        <div className={styles.fallback}>
          {fallback ? getInitials(fallback) : 'U'}
        </div>
      )}
    </div>
  );
}; 