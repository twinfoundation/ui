import { style } from '@vanilla-extract/css';

export const navbar = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  background: '#fff',
  borderBottom: '1px solid #e5e7eb',
  padding: '0.75rem 1.5rem',
  minHeight: '3.5rem',
  position: 'relative',
  zIndex: 10,
});

export const fluid = style({ width: '100%' });
export const rounded = style({ borderRadius: '0.75rem' });

export const brand = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',
  fontWeight: 700,
  fontSize: '1.25rem',
  color: '#111827',
  textDecoration: 'none',
});

export const link = style({
  color: '#374151',
  textDecoration: 'none',
  fontWeight: 500,
  fontSize: '1rem',
  margin: '0 0.75rem',
  padding: '0.5rem 0',
  transition: 'color 0.2s',
  ':hover': { color: '#2563eb' },
});

export const active = style({ color: '#2563eb', fontWeight: 700 });

export const collapse = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
});

export const toggle = style({
  display: 'inline-flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '2rem',
  height: '2rem',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  padding: 0,
  marginLeft: '1rem',
});

export const toggleBar = style({
  width: '1.5rem',
  height: '0.2rem',
  background: '#374151',
  borderRadius: '0.1rem',
  margin: '0.15rem 0',
  transition: 'background 0.2s',
}); 