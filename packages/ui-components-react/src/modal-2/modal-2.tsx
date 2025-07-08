import React from 'react';
import * as styles from './modal-2.css';

export interface Modal2Props {
  open: boolean;
  onClose: () => void;
  title?: React.ReactNode;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  size?: 'small' | 'medium' | 'large' | 'xlarge' | 'fullscreen';
  showCloseButton?: boolean;
  className?: string;
}

export const Modal2: React.FC<Modal2Props> = ({
  open,
  onClose,
  title,
  children,
  footer,
  size = 'medium',
  showCloseButton = true,
  className = '',
}) => {
  if (!open) return null;

  const sizeClass = styles[size] || styles.medium;

  return (
    <div className={styles.overlay}>
      <div className={`${styles.modal} ${sizeClass} ${className}`} role="dialog" aria-modal="true">
        {(title || showCloseButton) && (
          <div className={styles.header}>
            {title && <div className={styles.title}>{title}</div>}
            {showCloseButton && (
              <button className={styles.closeButton} aria-label="Close" onClick={onClose}>
                ×
              </button>
            )}
          </div>
        )}
        <div className={styles.body}>{children}</div>
        {footer && <div className={styles.footer}>{footer}</div>}
      </div>
    </div>
  );
}; 