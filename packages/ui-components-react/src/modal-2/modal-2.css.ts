import { style, keyframes } from '@vanilla-extract/css';

const fadeIn = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});

const slideIn = keyframes({
  '0%': { 
    opacity: 0,
    transform: 'translate(-50%, -50%) scale(0.95)'
  },
  '100%': { 
    opacity: 1,
    transform: 'translate(-50%, -50%) scale(1)'
  },
});

export const overlay = style({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1000,
  animation: `${fadeIn} 0.2s ease-out`,
});

export const modal = style({
  backgroundColor: '#ffffff',
  borderRadius: '0.5rem',
  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  position: 'relative',
  maxWidth: '90vw',
  maxHeight: '90vh',
  overflow: 'auto',
  animation: `${slideIn} 0.2s ease-out`,
});

export const header = style({
  padding: '1rem 1.5rem',
  borderBottom: '1px solid #e5e7eb',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const title = style({
  fontSize: '1.125rem',
  fontWeight: '600',
  color: '#111827',
  margin: 0,
});

export const closeButton = style({
  background: 'none',
  border: 'none',
  fontSize: '1.5rem',
  cursor: 'pointer',
  padding: '0.25rem',
  color: '#6b7280',
  borderRadius: '0.25rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 0.15s ease-in-out',
  ':hover': {
    backgroundColor: '#f3f4f6',
    color: '#374151',
  },
});

export const body = style({
  padding: '1.5rem',
});

export const footer = style({
  padding: '1rem 1.5rem',
  borderTop: '1px solid #e5e7eb',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  gap: '0.5rem',
});

export const small = style({
  width: '24rem',
});

export const medium = style({
  width: '32rem',
});

export const large = style({
  width: '48rem',
});

export const xlarge = style({
  width: '64rem',
});

export const fullscreen = style({
  width: '100vw',
  height: '100vh',
  maxWidth: '100vw',
  maxHeight: '100vh',
  borderRadius: 0,
}); 