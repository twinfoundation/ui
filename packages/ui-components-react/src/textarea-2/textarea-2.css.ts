import { style } from '@vanilla-extract/css';

export const textarea = style({
  display: 'block',
  width: '100%',
  padding: '0.5rem 0.75rem',
  fontSize: '0.875rem',
  lineHeight: '1.25rem',
  color: '#111827',
  backgroundColor: '#ffffff',
  border: '1px solid #d1d5db',
  borderRadius: '0.375rem',
  boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
  resize: 'vertical',
  minHeight: '2.5rem',
  fontFamily: 'inherit',
  ':focus': {
    outline: 'none',
    borderColor: '#3b82f6',
    boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.1)',
  },
  ':disabled': {
    backgroundColor: '#f9fafb',
    color: '#6b7280',
    cursor: 'not-allowed',
  },
});

export const error = style({
  borderColor: '#dc2626',
  ':focus': {
    borderColor: '#dc2626',
    boxShadow: '0 0 0 3px rgba(220, 38, 38, 0.1)',
  },
});

export const success = style({
  borderColor: '#16a34a',
  ':focus': {
    borderColor: '#16a34a',
    boxShadow: '0 0 0 3px rgba(22, 163, 74, 0.1)',
  },
});

export const large = style({
  padding: '0.75rem 1rem',
  fontSize: '1rem',
  minHeight: '3rem',
});

export const small = style({
  padding: '0.25rem 0.5rem',
  fontSize: '0.75rem',
  minHeight: '2rem',
});

export const noResize = style({
  resize: 'none',
}); 