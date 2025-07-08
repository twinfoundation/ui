import React from 'react';
import * as styles from './input-2.css';

export interface Input2Props {
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  required?: boolean;
  size?: 'small' | 'medium' | 'large';
  status?: 'default' | 'error' | 'success';
  className?: string;
  name?: string;
  id?: string;
}

export const Input2: React.FC<Input2Props> = ({ 
  type = 'text',
  placeholder,
  value,
  onChange,
  disabled = false,
  required = false,
  size = 'medium',
  status = 'default',
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

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      required={required}
      name={name}
      id={id}
      className={`${styles.input} ${getSizeClass()} ${getStatusClass()} ${className}`}
      {...props}
    />
  );
}; 