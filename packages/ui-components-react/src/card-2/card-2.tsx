import React from 'react';
import * as styles from './card-2.css';

export interface Card2Props {
  children?: React.ReactNode;
  title?: string;
  subtitle?: string;
  header?: React.ReactNode;
  body?: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
}

export const Card2: React.FC<Card2Props> = ({ 
  children,
  title,
  subtitle,
  header,
  body,
  footer,
  className = ''
}) => {
  return (
    <div className={`${styles.card} ${className}`}>
      {(header || title) && (
        <div className={styles.header}>
          {header || (
            <>
              {title && <h3 className={styles.title}>{title}</h3>}
              {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
            </>
          )}
        </div>
      )}
      
      {(body || children) && (
        <div className={styles.body}>
          {body || children}
        </div>
      )}
      
      {footer && (
        <div className={styles.footer}>
          {footer}
        </div>
      )}
    </div>
  );
}; 