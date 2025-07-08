import React, { useState, useRef, useEffect } from 'react';
import * as styles from './dropdown-2.css';

export interface Dropdown2Item {
  label?: string;
  onClick?: () => void;
  disabled?: boolean;
  divider?: boolean;
}

export interface Dropdown2Props {
  trigger: React.ReactNode;
  items: Dropdown2Item[];
  variant?: 'default' | 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

export const Dropdown2: React.FC<Dropdown2Props> = ({
  trigger,
  items,
  variant = 'default',
  size = 'medium',
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getVariantClass = () => {
    switch (variant) {
      case 'primary': return styles.primary;
      case 'secondary': return styles.secondary;
      default: return '';
    }
  };

  const getSizeClass = () => {
    switch (size) {
      case 'small': return styles.small;
      case 'large': return styles.large;
      default: return '';
    }
  };

  const handleItemClick = (item: Dropdown2Item) => {
    if (!item.disabled && item.onClick) {
      item.onClick();
      setIsOpen(false);
    }
  };

  return (
    <div ref={dropdownRef} className={`${styles.container} ${className}`}>
      <button
        className={`${styles.trigger} ${getVariantClass()} ${getSizeClass()}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {trigger}
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {isOpen && (
        <div className={styles.menu}>
          {items.map((item, index) => (
            <React.Fragment key={index}>
              {item.divider ? (
                <div className={styles.divider} />
              ) : (
                <button
                  className={`${styles.item} ${item.disabled ? styles.disabled : ''}`}
                  onClick={() => handleItemClick(item)}
                  disabled={item.disabled}
                >
                  {item.label}
                </button>
              )}
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
}; 