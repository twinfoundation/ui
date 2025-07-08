import { style } from '@vanilla-extract/css';

export const listGroup = style({
  listStyle: 'none',
  margin: 0,
  padding: 0,
  borderRadius: '0.5rem',
  border: '1px solid #e5e7eb',
  background: '#fff',
  overflow: 'hidden',
});

export const item = style({
  display: 'flex',
  alignItems: 'center',
  padding: '0.75rem 1rem',
  borderBottom: '1px solid #e5e7eb',
  transition: 'background 0.2s',
  selectors: {
    '&:last-child': { borderBottom: 'none' },
  },
});

export const active = style({
  background: '#f0f9ff',
  color: '#0891b2',
  fontWeight: 600,
});

export const disabled = style({
  color: '#9ca3af',
  background: '#f3f4f6',
  cursor: 'not-allowed',
});

export const icon = style({
  marginRight: '0.75rem',
  display: 'inline-flex',
  alignItems: 'center',
  fontSize: '1.25rem',
});

export const title = style({
  flex: 1,
  fontSize: '1rem',
});

export const link = style({
  color: 'inherit',
  textDecoration: 'none',
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  ':hover': {
    background: '#f3f4f6',
  },
});

export const content = style({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  height: '100%',
}); 