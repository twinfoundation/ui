import React, { useState, useEffect } from 'react';
import * as styles from './toast-2.css';

export type ToastPosition = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center';
export type ToastType = 'success' | 'error' | 'warning' | 'info' | 'default';

export interface ToastProps {
  id: string;
  title?: string;
  message: string;
  type?: ToastType;
  position?: ToastPosition;
  duration?: number;
  onClose?: (id: string) => void;
  showCloseButton?: boolean;
}

export interface ToastContainerProps {
  toasts: ToastProps[];
  position?: ToastPosition;
  onClose: (id: string) => void;
}

const positionStyles = {
  'top-right': styles.topRight,
  'top-left': styles.topLeft,
  'bottom-right': styles.bottomRight,
  'bottom-left': styles.bottomLeft,
  'top-center': styles.topCenter,
  'bottom-center': styles.bottomCenter,
};

const typeStyles = {
  success: styles.success,
  error: styles.error,
  warning: styles.warning,
  info: styles.info,
  default: '',
};

export const Toast: React.FC<ToastProps> = ({
  id,
  title,
  message,
  type = 'default',
  duration = 5000,
  onClose,
  showCloseButton = true,
}) => {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        handleClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [duration]);

  const handleClose = () => {
    setIsExiting(true);
    setTimeout(() => {
      onClose?.(id);
    }, 300);
  };

  const toastClass = `${styles.toast} ${typeStyles[type]} ${isExiting ? styles.exiting : ''}`;

  return (
    <div className={toastClass}>
      <div className={styles.content}>
        {title && <div className={styles.title}>{title}</div>}
        <p className={styles.message}>{message}</p>
      </div>
      {showCloseButton && (
        <button className={styles.closeButton} onClick={handleClose} aria-label="Close toast">
          ×
        </button>
      )}
    </div>
  );
};

export const ToastContainer: React.FC<ToastContainerProps> = ({
  toasts,
  position = 'top-right',
  onClose,
}) => {
  const containerClass = `${styles.container} ${positionStyles[position]}`;

  return (
    <div className={containerClass}>
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          {...toast}
          onClose={onClose}
        />
      ))}
    </div>
  );
};

// Hook for managing toasts
export const useToast = () => {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  const addToast = (toast: Omit<ToastProps, 'id'>) => {
    const id = Math.random().toString(36).substr(2, 9);
    const newToast = { ...toast, id };
    setToasts((prev) => [...prev, newToast]);
    return id;
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  const success = (message: string, title?: string) => addToast({ message, title, type: 'success' });
  const error = (message: string, title?: string) => addToast({ message, title, type: 'error' });
  const warning = (message: string, title?: string) => addToast({ message, title, type: 'warning' });
  const info = (message: string, title?: string) => addToast({ message, title, type: 'info' });

  return {
    toasts,
    addToast,
    removeToast,
    success,
    error,
    warning,
    info,
  };
}; 