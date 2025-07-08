import { style } from '@vanilla-extract/css';

export const footer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '2rem',
  background: '#f9fafb',
  color: '#374151',
});

export const brand = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  textDecoration: 'none',
  color: 'inherit',
  fontWeight: 600,
  fontSize: '1.25rem',
});

export const brandImg = style({
  height: '2rem',
  width: 'auto',
});

export const brandName = style({
  fontWeight: 700,
  fontSize: '1.25rem',
});

export const copyright = style({
  marginTop: '1rem',
  fontSize: '0.875rem',
  color: '#6b7280',
});

export const divider = style({
  width: '100%',
  border: 0,
  borderTop: '1px solid #e5e7eb',
  margin: '1rem 0',
});

export const icon = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#6b7280',
  fontSize: '1.25rem',
  margin: '0 0.25rem',
  textDecoration: 'none',
  ':hover': {
    color: '#111827',
  },
});

export const link = style({
  color: '#2563eb',
  textDecoration: 'none',
  margin: '0 0.5rem',
  ':hover': {
    textDecoration: 'underline',
  },
});

export const linkGroupCol = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
});

export const linkGroupRow = style({
  display: 'flex',
  flexDirection: 'row',
  gap: '0.5rem',
});

export const title = style({
  fontWeight: 700,
  fontSize: '1rem',
  marginBottom: '0.5rem',
}); 