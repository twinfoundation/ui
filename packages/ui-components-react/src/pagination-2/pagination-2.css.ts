import { style, styleVariants } from '@vanilla-extract/css';

// Base pagination container
export const pagination = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.25rem',
});

// Navigation layout (centered)
export const navigation = style({
  justifyContent: 'center',
});

// Table layout (right-aligned)
export const table = style({
  justifyContent: 'flex-end',
});

// Base button styles (shared by all pagination buttons)
const baseButton = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0.5rem 0.75rem',
  fontSize: '0.875rem',
  fontWeight: '500',
  lineHeight: '1.25rem',
  border: '1px solid #d1d5db',
  backgroundColor: '#ffffff',
  color: '#6b7280',
  cursor: 'pointer',
  transition: 'all 0.2s ease-in-out',
  textDecoration: 'none',
  minWidth: '2.5rem',
  height: '2.5rem',
  ':hover': {
    backgroundColor: '#f9fafb',
    color: '#374151',
  },
  ':focus': {
    outline: '2px solid #0891b2',
    outlineOffset: '2px',
  },
  ':disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
    backgroundColor: '#f3f4f6',
    color: '#9ca3af',
  },
  '@media': {
    '(prefers-color-scheme: dark)': {
      borderColor: '#4b5563',
      backgroundColor: '#1f2937',
      color: '#9ca3af',
      ':hover': {
        backgroundColor: '#374151',
        color: '#f9fafb',
      },
      ':disabled': {
        backgroundColor: '#374151',
        color: '#6b7280',
      },
    },
  },
});

// Page number button
export const pageButton = style([
  baseButton,
  {
    borderRadius: '0.375rem',
  },
]);

// Active page button
export const activePageButton = style([
  baseButton,
  {
    borderColor: '#d1d5db',
    backgroundColor: '#f0f9ff',
    color: '#0891b2',
    fontWeight: '600',
    ':hover': {
      backgroundColor: '#f0f9ff',
      color: '#0891b2',
    },
    '@media': {
      '(prefers-color-scheme: dark)': {
        borderColor: '#4b5563',
        backgroundColor: '#0c4a6e',
        color: '#38bdf8',
        ':hover': {
          backgroundColor: '#0c4a6e',
          color: '#38bdf8',
        },
      },
    },
  },
]);

// Previous button
export const previousButton = style([
  baseButton,
  {
    borderTopLeftRadius: '0.5rem',
    borderBottomLeftRadius: '0.5rem',
    borderTopRightRadius: '0',
    borderBottomRightRadius: '0',
    marginLeft: '0',
  },
]);

// Next button
export const nextButton = style([
  baseButton,
  {
    borderTopLeftRadius: '0',
    borderBottomLeftRadius: '0',
    borderTopRightRadius: '0.5rem',
    borderBottomRightRadius: '0.5rem',
  },
]);

// Icon styles
export const icon = style({
  width: '1.25rem',
  height: '1.25rem',
});

// Previous icon
export const previousIcon = style({
  transform: 'rotate(180deg)',
});

// Button content wrapper
export const buttonContent = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.25rem',
});

// Ellipsis
export const ellipsis = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0.5rem 0.75rem',
  fontSize: '0.875rem',
  color: '#6b7280',
  minWidth: '2.5rem',
  height: '2.5rem',
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: '#9ca3af',
    },
  },
});

// Focus ring for accessibility
export const focusRing = style({
  ':focus-visible': {
    outline: '2px solid #0891b2',
    outlineOffset: '2px',
    borderRadius: '0.375rem',
  },
  '@media': {
    '(prefers-color-scheme: dark)': {
      ':focus-visible': {
        outlineColor: '#38bdf8',
      },
    },
  },
}); 