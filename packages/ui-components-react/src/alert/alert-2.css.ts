import { style, styleVariants } from '@vanilla-extract/css';

export const base = style({
  display: 'flex',
  alignItems: 'center',
  borderRadius: '0.5rem',
  fontWeight: 500,
  fontSize: '1rem',
  lineHeight: 1.5,
  padding: '0.75em 1em',
  gap: '0.75em',
  userSelect: 'none',
});

export const color = styleVariants({
  info: {
    background: '#e0f2fe',
    color: '#0369a1',
  },
  success: {
    background: '#dcfce7',
    color: '#166534',
  },
  warning: {
    background: '#fef9c3',
    color: '#b45309',
  },
  error: {
    background: '#fee2e2',
    color: '#b91c1c',
  },
  plain: {
    background: '#f3f4f6',
    color: '#111827',
  },
});

export const icon = style({
  flexShrink: 0,
  fontSize: '1.25em',
  display: 'inline-flex',
  alignItems: 'center',
}); 