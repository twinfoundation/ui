import React, { useState, useRef, useEffect } from 'react';
import * as styles from './select-2.css';

export type SelectSize = 'sm' | 'md' | 'lg';
export type SelectState = 'default' | 'success' | 'warning' | 'error';

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps {
  value: string;
  onChange: (value: string) => void;
  options: SelectOption[];
  size?: SelectSize;
  state?: SelectState;
  disabled?: boolean;
  placeholder?: string;
  label?: string;
  errorMessage?: string;
  helpText?: string;
  id?: string;
  name?: string;
  className?: string;
}

const stateStyles = {
  default: '',
  success: styles.success,
  warning: styles.warning,
  error: styles.error,
};

export const Select: React.FC<SelectProps> = ({
  value,
  onChange,
  options,
  size = 'md',
  state = 'default',
  disabled = false,
  placeholder = 'Select an option',
  label,
  errorMessage,
  helpText,
  id,
  name,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const selectRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find(option => option.value === value);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setFocusedIndex(-1);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isOpen) {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          setIsOpen(true);
        }
        return;
      }

      switch (event.key) {
        case 'Escape':
          setIsOpen(false);
          setFocusedIndex(-1);
          break;
        case 'ArrowDown':
          event.preventDefault();
          setFocusedIndex(prev => 
            prev < options.length - 1 ? prev + 1 : 0
          );
          break;
        case 'ArrowUp':
          event.preventDefault();
          setFocusedIndex(prev => 
            prev > 0 ? prev - 1 : options.length - 1
          );
          break;
        case 'Enter':
          event.preventDefault();
          if (focusedIndex >= 0 && !options[focusedIndex].disabled) {
            onChange(options[focusedIndex].value);
            setIsOpen(false);
            setFocusedIndex(-1);
          }
          break;
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, focusedIndex, options, onChange]);

  useEffect(() => {
    if (isOpen && dropdownRef.current) {
      const selectedElement = dropdownRef.current.querySelector(`[data-value="${value}"]`) as HTMLElement;
      if (selectedElement) {
        selectedElement.scrollIntoView({ block: 'nearest' });
      }
    }
  }, [isOpen, value]);

  const handleToggle = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
      setFocusedIndex(-1);
    }
  };

  const handleOptionClick = (option: SelectOption) => {
    if (!option.disabled) {
      onChange(option.value);
      setIsOpen(false);
      setFocusedIndex(-1);
    }
  };

  const selectClass = `${styles.select[size]} ${disabled ? styles.disabled : ''} ${className || ''}`;
  const buttonClass = `${styles.selectButton[size]} ${stateStyles[state]} ${disabled ? styles.disabledButton : ''}`;
  const iconClass = `${styles.selectIcon[size]} ${isOpen ? styles.openIcon : ''}`;
  const dropdownClass = `${styles.dropdown[size]} ${isOpen ? styles.open : ''}`;

  return (
    <div className={styles.group}>
      {label && <label className={styles.label} htmlFor={id}>{label}</label>}
      <div ref={selectRef} className={selectClass}>
        <button
          type="button"
          className={buttonClass}
          onClick={handleToggle}
          disabled={disabled}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          aria-labelledby={label ? id : undefined}
        >
          <span className={selectedOption ? '' : styles.placeholder}>
            {selectedOption ? selectedOption.label : placeholder}
          </span>
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <div ref={dropdownRef} className={dropdownClass} role="listbox">
          {options.map((option, index) => (
            <div
              key={option.value}
              className={`${styles.option[size]} ${option.value === value ? styles.selected : ''} ${option.disabled ? styles.disabledOption : ''}`}
              onClick={() => handleOptionClick(option)}
              onMouseEnter={() => setFocusedIndex(index)}
              role="option"
              aria-selected={option.value === value}
              aria-disabled={option.disabled}
              data-value={option.value}
            >
              {option.label}
            </div>
          ))}
        </div>
      </div>
      {errorMessage && <div className={styles.errorMessage}>{errorMessage}</div>}
      {helpText && <div className={styles.helpText}>{helpText}</div>}
    </div>
  );
}; 