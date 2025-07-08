import { style } from '@vanilla-extract/css';

export const carousel = style({
  position: 'relative',
  width: '100%',
  height: '16rem',
  overflow: 'hidden',
  background: '#f3f4f6',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

export const slideWrapper = style({
  position: 'relative',
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const slide = style({
  width: '100%',
  height: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  background: '#e5e7eb',
  color: '#374151',
  display: 'none',
});

export const slideActive = style({
  width: '100%',
  height: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  background: '#e5e7eb',
  color: '#374151',
  display: 'flex',
  transition: 'opacity 0.5s',
});

export const controlLeft = style({
  position: 'absolute',
  left: '1rem',
  top: '50%',
  transform: 'translateY(-50%)',
  background: 'rgba(255,255,255,0.8)',
  border: 'none',
  borderRadius: '50%',
  width: '2.5rem',
  height: '2.5rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  fontSize: '1.5rem',
  zIndex: 2,
});

export const controlRight = style({
  position: 'absolute',
  right: '1rem',
  top: '50%',
  transform: 'translateY(-50%)',
  background: 'rgba(255,255,255,0.8)',
  border: 'none',
  borderRadius: '50%',
  width: '2.5rem',
  height: '2.5rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  fontSize: '1.5rem',
  zIndex: 2,
});

export const indicators = style({
  display: 'flex',
  gap: '0.5rem',
  justifyContent: 'center',
  marginTop: '1rem',
});

export const indicator = style({
  width: '0.75rem',
  height: '0.75rem',
  borderRadius: '50%',
  background: '#d1d5db',
  border: 'none',
  cursor: 'pointer',
  transition: 'background 0.2s',
});

export const indicatorActive = style({
  width: '0.75rem',
  height: '0.75rem',
  borderRadius: '50%',
  background: '#2563eb',
  border: 'none',
  cursor: 'pointer',
}); 