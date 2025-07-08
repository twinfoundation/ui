import { style } from '@vanilla-extract/css';

export const alert = style({
  padding: '0.75rem 1rem',
  borderRadius: '0.375rem',
  border: '1px solid transparent',
  fontSize: '0.875rem',
  lineHeight: '1.25rem',
  display: 'flex',
  alignItems: 'flex-start',
  gap: '0.5rem',
});

export const info = style({
  backgroundColor: '#eff6ff',
  borderColor: '#bfdbfe',
  color: '#1e40af',
});

export const success = style({
  backgroundColor: '#f0fdf4',
  borderColor: '#bbf7d0',
  color: '#166534',
});

export const warning = style({
  backgroundColor: '#fffbeb',
  borderColor: '#fcd34d',
  color: '#92400e',
});

export const error = style({
  backgroundColor: '#fef2f2',
  borderColor: '#fecaca',
  color: '#991b1b',
});

export const icon = style({
  flexShrink: 0,
  width: '1rem',
  height: '1rem',
});

export const content = style({
  flex: 1,
});

export const title = style({
  fontWeight: '600',
  marginBottom: '0.25rem',
});

export const message = style({
  margin: 0,
}); 