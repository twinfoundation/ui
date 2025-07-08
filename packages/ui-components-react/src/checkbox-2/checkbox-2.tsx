import React from 'react';
import * as styles from './checkbox-2.css';

export interface Checkbox2Props {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  label?: string;
  size?: 'small' | 'medium' | 'large';
  className?: string;
  name?: string;
  id?: string;
}

export const Checkbox2: React.FC<Checkbox2Props> = ({ 
  checked = false,
  onChange,
  disabled = false,
  label,
  size = 'medium',
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange && !disabled) {
      onChange(e.target.checked);
    }
  };

  return (
    <label className={`${styles.container} ${className}`}>
      <input
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
        name={name}
        id={id}
        className={`${styles.checkbox} ${getSizeClass()}`}
        {...props}
      />
      <div className={styles.checkmark} />
      {label && <span className={styles.label}>{label}</span>}
    </label>
  );
}; 