import React from 'react';
import * as styles from './radio-2.css';

export type RadioSize = 'sm' | 'md' | 'lg';
export type RadioColor = 'default' | 'success' | 'warning' | 'error';

export interface RadioOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface RadioProps {
  value: string;
  onChange: (value: string) => void;
  size?: RadioSize;
  color?: RadioColor;
  disabled?: boolean;
  label?: string;
  id?: string;
  name?: string;
  className?: string;
}

export interface RadioGroupProps {
  value: string;
  onChange: (value: string) => void;
  options: RadioOption[];
  size?: RadioSize;
  color?: RadioColor;
  disabled?: boolean;
  name: string;
  label?: string;
  description?: string;
  horizontal?: boolean;
  className?: string;
}

const colorStyles = {
  default: '',
  success: styles.success,
  warning: styles.warning,
  error: styles.error,
};

const colorDotStyles = {
  default: '',
  success: styles.successDot,
  warning: styles.warningDot,
  error: styles.errorDot,
};

export const Radio: React.FC<RadioProps> = ({
  value,
  onChange,
  size = 'md',
  color = 'default',
  disabled = false,
  label,
  id,
  name,
  className,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!disabled) {
      onChange(event.target.value);
    }
  };

  const radioClass = `${styles.radio[size]} ${disabled ? styles.disabled : ''} ${className || ''}`;
  const circleClass = `${styles.radioCircle[size]} ${value ? styles.checked : ''} ${value ? colorStyles[color] : ''} ${disabled ? styles.disabledCircle : ''}`;
  const dotClass = `${styles.radioDot[size]} ${value ? styles.checkedDot : ''} ${value ? colorDotStyles[color] : ''} ${disabled ? styles.disabledDot : ''}`;
  const labelClass = `${styles.label} ${disabled ? styles.labelDisabled : ''}`;

  const radioElement = (
    <button
      type="button"
      className={radioClass}
      disabled={disabled}
      aria-checked={!!value}
      aria-label={label}
    >
      <input
        type="radio"
        value={value}
        onChange={handleChange}
        disabled={disabled}
        id={id}
        name={name}
        className={styles.radioInput[size]}
      />
      <span className={circleClass}>
        <span className={dotClass} />
      </span>
    </button>
  );

  if (label) {
    return (
      <label className={labelClass} htmlFor={id}>
        {radioElement}
        <span>{label}</span>
      </label>
    );
  }

  return radioElement;
};

export const RadioGroup: React.FC<RadioGroupProps> = ({
  value,
  onChange,
  options,
  size = 'md',
  color = 'default',
  disabled = false,
  name,
  label,
  description,
  horizontal = false,
  className,
}) => {
  const groupClass = `${styles.group} ${horizontal ? styles.groupHorizontal : ''} ${className || ''}`;

  return (
    <div className={groupClass}>
      {label && <div className={styles.groupLabel}>{label}</div>}
      {options.map((option) => (
        <Radio
          key={option.value}
          value={option.value}
          onChange={onChange}
          size={size}
          color={color}
          disabled={disabled || option.disabled}
          label={option.label}
          id={`${name}-${option.value}`}
          name={name}
        />
      ))}
      {description && <div className={styles.groupDescription}>{description}</div>}
    </div>
  );
}; 