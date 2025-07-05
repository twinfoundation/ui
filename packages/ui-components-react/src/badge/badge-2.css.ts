import { style, styleVariants } from '@vanilla-extract/css';

export const base = style({
  display: 'inline-block',
  borderRadius: '9999px',
  fontWeight: 500,
  fontSize: '0.875rem',
  lineHeight: 1.25,
  padding: '0.25em 0.75em',
  userSelect: 'none',
});

export const color = styleVariants({
  primary: {
    background: '#2563eb',
    color: 'white',
  },
  secondary: {
    background: '#6b7280',
    color: 'white',
  },
  success: {
    background: '#22c55e',
    color: 'white',
  },
  warning: {
    background: '#f59e42',
    color: 'white',
  },
  error: {
    background: '#dc2626',
    color: 'white',
  },
  info: {
    background: '#0ea5e9',
    color: 'white',
  },
  plain: {
    background: '#f3f4f6',
    color: '#111827',
  },
}); 