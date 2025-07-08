import { style } from '@vanilla-extract/css';

export const container = style({
  width: '100%',
});

export const label = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '0.5rem',
  fontSize: '0.875rem',
  fontWeight: '500',
  color: '#374151',
});

export const progress = style({
  width: '100%',
  height: '0.5rem',
  backgroundColor: '#e5e7eb',
  borderRadius: '9999px',
  overflow: 'hidden',
});

export const bar = style({
  height: '100%',
  backgroundColor: '#3b82f6',
  borderRadius: '9999px',
  transition: 'width 0.3s ease-in-out',
});

export const small = style({
  height: '0.25rem',
});

export const large = style({
  height: '0.75rem',
});

export const xlarge = style({
  height: '1rem',
});

export const primary = style({
  backgroundColor: '#3b82f6',
});

export const secondary = style({
  backgroundColor: '#6b7280',
});

export const success = style({
  backgroundColor: '#16a34a',
});

export const warning = style({
  backgroundColor: '#d97706',
});

export const error = style({
  backgroundColor: '#dc2626',
});

export const info = style({
  backgroundColor: '#0891b2',
});

export const striped = style({
  backgroundImage: 'linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent)',
  backgroundSize: '1rem 1rem',
  animation: 'progress-bar-stripes 1s linear infinite',
});

export const animated = style({
  animation: 'progress-bar-stripes 1s linear infinite',
});

export const labelHidden = style({
  display: 'none',
}); 