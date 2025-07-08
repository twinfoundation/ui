import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  cursor: 'pointer',
  userSelect: 'none',
});

export const checkbox = style({
  appearance: 'none',
  width: '1rem',
  height: '1rem',
  border: '2px solid #d1d5db',
  borderRadius: '0.25rem',
  backgroundColor: '#ffffff',
  cursor: 'pointer',
  position: 'relative',
  transition: 'all 0.15s ease-in-out',
  ':checked': {
    backgroundColor: '#3b82f6',
    borderColor: '#3b82f6',
  },
  ':focus': {
    outline: 'none',
    boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.1)',
  },
  ':disabled': {
    backgroundColor: '#f3f4f6',
    borderColor: '#d1d5db',
    cursor: 'not-allowed',
    opacity: 0.5,
  },
});

export const checkmark = style({
  position: 'absolute',
  top: '50%',
  left: '50%',
  width: '0.5rem',
  height: '0.5rem',
  border: '2px solid #ffffff',
  borderTop: 'none',
  borderLeft: 'none',
  transform: 'translate(-50%, -60%) rotate(45deg)',
  opacity: 0,
  transition: 'opacity 0.15s ease-in-out',
  selectors: {
    [`${checkbox}:checked &`]: {
      opacity: 1,
    },
  },
});

export const label = style({
  fontSize: '0.875rem',
  color: '#374151',
  cursor: 'pointer',
  selectors: {
    [`${container}:has(${checkbox}:disabled) &`]: {
      color: '#9ca3af',
      cursor: 'not-allowed',
    },
  },
});

export const large = style({
  width: '1.25rem',
  height: '1.25rem',
  selectors: {
    [`& ${checkmark}`]: {
      width: '0.625rem',
      height: '0.625rem',
    },
  },
});

export const small = style({
  width: '0.875rem',
  height: '0.875rem',
  selectors: {
    [`& ${checkmark}`]: {
      width: '0.375rem',
      height: '0.375rem',
    },
  },
}); 