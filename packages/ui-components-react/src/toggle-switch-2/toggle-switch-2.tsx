import React from 'react';
import * as styles from './toggle-switch-2.css';

export type ToggleSize = 'sm' | 'md' | 'lg';
export type ToggleColor = 'default' | 'success' | 'warning' | 'error';

export interface ToggleSwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  size?: ToggleSize;
  color?: ToggleColor;
  disabled?: boolean;
  label?: string;
  id?: string;
  className?: string;
}

const colorStyles = {
  default: '',
  success: styles.success,
  warning: styles.warning,
  error: styles.error,
};

export const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  checked,
  onChange,
  size = 'md',
  color = 'default',
  disabled = false,
  label,
  id,
  className,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!disabled) {
      onChange(event.target.checked);
    }
  };

  const toggleClass = `${styles.toggle[size]} ${disabled ? styles.disabled : ''} ${className || ''}`;
  const trackClass = `${styles.track[size]} ${checked ? styles.checked : ''} ${checked ? colorStyles[color] : ''} ${disabled ? styles.disabledTrack : ''}`;
  const thumbClass = `${styles.thumb[size]} ${checked ? styles.checkedThumb : ''} ${disabled ? styles.disabledThumb : ''}`;
  const labelClass = `${styles.label} ${disabled ? styles.labelDisabled : ''}`;

  const toggleElement = (
    <button
      type="button"
      className={toggleClass}
      disabled={disabled}
      aria-pressed={checked}
      aria-label={label}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
        id={id}
        className={styles.input}
      />
      <span className={trackClass}>
        <span className={thumbClass} />
      </span>
    </button>
  );

  if (label) {
    return (
      <label className={labelClass} htmlFor={id}>
        {toggleElement}
        <span>{label}</span>
      </label>
    );
  }

  return toggleElement;
}; 