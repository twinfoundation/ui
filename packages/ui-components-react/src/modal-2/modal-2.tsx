import React, { useRef, useEffect } from 'react';
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
  closeOnOverlayClick?: boolean;
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
  closeOnOverlayClick = true,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (open) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      // Restore body scroll when modal is closed
      document.body.style.overflow = 'unset';
    };
  }, [open, onClose]);

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!closeOnOverlayClick) return;
    
    // Check if the click target is the overlay itself (not the modal content)
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  const handleModalClick = (event: React.MouseEvent<HTMLDivElement>) => {
    // Prevent clicks inside the modal from bubbling up to the overlay
    event.stopPropagation();
  };

  if (!open) return null;

  const sizeClass = styles[size] || styles.medium;

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div 
        ref={modalRef}
        className={`${styles.modal} ${sizeClass} ${className}`} 
        role="dialog" 
        aria-modal="true"
        onClick={handleModalClick}
      >
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