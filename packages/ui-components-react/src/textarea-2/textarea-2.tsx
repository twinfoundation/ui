import React from 'react';
import * as styles from './textarea-2.css';

export interface Textarea2Props {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  disabled?: boolean;
  required?: boolean;
  size?: 'small' | 'medium' | 'large';
  status?: 'default' | 'error' | 'success';
  resize?: boolean;
  rows?: number;
  className?: string;
  name?: string;
  id?: string;
}

export const Textarea2: React.FC<Textarea2Props> = ({ 
  placeholder,
  value,
  onChange,
  disabled = false,
  required = false,
  size = 'medium',
  status = 'default',
  resize = true,
  rows = 3,
  className = '',
  name,
  id,
  ...props
}) => {
  const getSizeClass = () => {
    switch (size) {
      case 'large': return styles.large;
      case 'small': return styles.small;
      default: return '';
    }
  };

  const getStatusClass = () => {
    switch (status) {
      case 'error': return styles.error;
      case 'success': return styles.success;
      default: return '';
    }
  };

  const getResizeClass = () => {
    return resize ? '' : styles.noResize;
  };

  return (
    <textarea
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      required={required}
      rows={rows}
      name={name}
      id={id}
      className={`${styles.textarea} ${getSizeClass()} ${getStatusClass()} ${getResizeClass()} ${className}`}
      {...props}
    />
  );
}; 