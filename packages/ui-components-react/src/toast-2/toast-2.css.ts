import { style, keyframes } from '@vanilla-extract/css';

const slideIn = keyframes({
  '0%': { transform: 'translateX(100%)', opacity: 0 },
  '100%': { transform: 'translateX(0)', opacity: 1 },
});

const slideOut = keyframes({
  '0%': { transform: 'translateX(0)', opacity: 1 },
  '100%': { transform: 'translateX(100%)', opacity: 0 },
});

const fadeIn = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-10px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

const fadeOut = keyframes({
  '0%': { opacity: 1, transform: 'translateY(0)' },
  '100%': { opacity: 0, transform: 'translateY(-10px)' },
});

export const container = style({
  position: 'fixed',
  zIndex: 9999,
  maxWidth: '24rem',
  minWidth: '20rem',
});

export const toast = style({
  display: 'flex',
  alignItems: 'flex-start',
  gap: '0.75rem',
  padding: '1rem',
  backgroundColor: '#ffffff',
  border: '1px solid #e5e7eb',
  borderRadius: '0.5rem',
  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  marginBottom: '0.5rem',
});

export const topRight = style({
  top: '1rem',
  right: '1rem',
  animation: `${slideIn} 0.3s ease-out`,
});

export const topLeft = style({
  top: '1rem',
  left: '1rem',
  animation: `${slideIn} 0.3s ease-out`,
});

export const bottomRight = style({
  bottom: '1rem',
  right: '1rem',
  animation: `${slideIn} 0.3s ease-out`,
});

export const bottomLeft = style({
  bottom: '1rem',
  left: '1rem',
  animation: `${slideIn} 0.3s ease-out`,
});

export const topCenter = style({
  top: '1rem',
  left: '50%',
  transform: 'translateX(-50%)',
  animation: `${fadeIn} 0.3s ease-out`,
});

export const bottomCenter = style({
  bottom: '1rem',
  left: '50%',
  transform: 'translateX(-50%)',
  animation: `${fadeIn} 0.3s ease-out`,
});

export const content = style({
  flex: 1,
});

export const title = style({
  fontSize: '0.875rem',
  fontWeight: '600',
  color: '#111827',
  marginBottom: '0.25rem',
});

export const message = style({
  fontSize: '0.875rem',
  color: '#6b7280',
  margin: 0,
});

export const closeButton = style({
  background: 'none',
  border: 'none',
  fontSize: '1.25rem',
  cursor: 'pointer',
  padding: '0.25rem',
  color: '#9ca3af',
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

export const success = style({
  borderColor: '#bbf7d0',
  backgroundColor: '#f0fdf4',
  selectors: {
    [`& ${title}`]: {
      color: '#166534',
    },
    [`& ${message}`]: {
      color: '#16a34a',
    },
  },
});

export const error = style({
  borderColor: '#fecaca',
  backgroundColor: '#fef2f2',
  selectors: {
    [`& ${title}`]: {
      color: '#991b1b',
    },
    [`& ${message}`]: {
      color: '#dc2626',
    },
  },
});

export const warning = style({
  borderColor: '#fcd34d',
  backgroundColor: '#fffbeb',
  selectors: {
    [`& ${title}`]: {
      color: '#92400e',
    },
    [`& ${message}`]: {
      color: '#d97706',
    },
  },
});

export const info = style({
  borderColor: '#bfdbfe',
  backgroundColor: '#eff6ff',
  selectors: {
    [`& ${title}`]: {
      color: '#1e40af',
    },
    [`& ${message}`]: {
      color: '#3b82f6',
    },
  },
});

export const exiting = style({
  animation: `${slideOut} 0.3s ease-in forwards`,
});

export const exitingCenter = style({
  animation: `${fadeOut} 0.3s ease-in forwards`,
}); 