import { style } from '@vanilla-extract/css';

export const root = style({
  display: 'inline-block',
  position: 'relative',
});

export const input = style({
  padding: '0.5rem 1rem',
  border: '1px solid #d1d5db',
  borderRadius: '0.375rem',
  background: '#fff',
  color: '#374151',
  cursor: 'pointer',
  minWidth: '10rem',
  textAlign: 'left',
});

export const calendar = style({
  position: 'absolute',
  top: '2.5rem',
  left: 0,
  zIndex: 10,
  background: '#fff',
  border: '1px solid #e5e7eb',
  borderRadius: '0.5rem',
  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
  padding: '1rem',
  minWidth: '16rem',
});

export const header = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '0.5rem',
});

export const navBtn = style({
  background: 'none',
  border: 'none',
  color: '#2563eb',
  fontSize: '1.25rem',
  cursor: 'pointer',
  padding: '0.25rem 0.5rem',
});

export const monthLabel = style({
  fontWeight: 600,
  fontSize: '1rem',
});

export const weekdays = style({
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '0.25rem',
});

export const weekday = style({
  width: '2rem',
  textAlign: 'center',
  color: '#6b7280',
  fontWeight: 500,
});

export const days = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '0.25rem',
  marginBottom: '0.5rem',
});

export const day = style({
  width: '2rem',
  height: '2rem',
  borderRadius: '0.375rem',
  background: 'none',
  border: 'none',
  color: '#374151',
  fontWeight: 500,
  cursor: 'pointer',
  textAlign: 'center',
  lineHeight: '2rem',
  ':hover': {
    background: '#f3f4f6',
  },
});

export const selected = style({
  background: '#2563eb',
  color: '#fff',
});

export const disabled = style({
  color: '#9ca3af',
  cursor: 'not-allowed',
  background: '#f3f4f6',
});

export const empty = style({
  width: '2rem',
  height: '2rem',
  display: 'inline-block',
});

export const footer = style({
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '0.5rem',
});

export const clearBtn = style({
  background: 'none',
  border: 'none',
  color: '#ef4444',
  cursor: 'pointer',
  fontWeight: 500,
});

export const todayBtn = style({
  background: 'none',
  border: 'none',
  color: '#2563eb',
  cursor: 'pointer',
  fontWeight: 500,
}); 