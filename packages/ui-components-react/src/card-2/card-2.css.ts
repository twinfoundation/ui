import { style } from '@vanilla-extract/css';

export const card = style({
  backgroundColor: '#ffffff',
  borderRadius: '0.5rem',
  boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  border: '1px solid #e5e7eb',
  overflow: 'hidden',
});

export const header = style({
  padding: '1rem',
  borderBottom: '1px solid #e5e7eb',
  backgroundColor: '#f9fafb',
});

export const body = style({
  padding: '1rem',
});

export const footer = style({
  padding: '1rem',
  borderTop: '1px solid #e5e7eb',
  backgroundColor: '#f9fafb',
});

export const title = style({
  fontSize: '1.125rem',
  fontWeight: '600',
  color: '#111827',
  margin: '0',
});

export const subtitle = style({
  fontSize: '0.875rem',
  color: '#6b7280',
  margin: '0.25rem 0 0 0',
}); 