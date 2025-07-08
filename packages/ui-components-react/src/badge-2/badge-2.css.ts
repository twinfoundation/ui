import { style } from '@vanilla-extract/css';

export const badge = style({
  display: 'inline-flex',
  alignItems: 'center',
  padding: '0.25rem 0.5rem',
  fontSize: '0.75rem',
  fontWeight: '500',
  borderRadius: '0.375rem',
  lineHeight: '1',
});

export const gray = style({
  backgroundColor: '#f3f4f6',
  color: '#374151',
});

export const red = style({
  backgroundColor: '#fef2f2',
  color: '#dc2626',
});

export const green = style({
  backgroundColor: '#f0fdf4',
  color: '#16a34a',
});

export const yellow = style({
  backgroundColor: '#fffbeb',
  color: '#d97706',
});

export const blue = style({
  backgroundColor: '#eff6ff',
  color: '#2563eb',
});

export const purple = style({
  backgroundColor: '#faf5ff',
  color: '#7c3aed',
});

export const pink = style({
  backgroundColor: '#fdf2f8',
  color: '#ec4899',
}); 