import { style, styleVariants } from '@vanilla-extract/css';

const baseToggle = style({
  position: 'relative',
  display: 'inline-block',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  border: 'none',
  background: 'none',
  padding: 0,
});

const baseTrack = style({
  position: 'relative',
  display: 'block',
  borderRadius: '9999px',
  transition: 'all 0.3s ease',
  backgroundColor: '#d1d5db',
});

const baseThumb = style({
  position: 'absolute',
  top: '2px',
  left: '2px',
  borderRadius: '50%',
  backgroundColor: '#ffffff',
  transition: 'all 0.3s ease',
  boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
});

export const toggle = styleVariants({
  sm: [baseToggle, {
    width: '2rem',
    height: '1.25rem',
  }],
  md: [baseToggle, {
    width: '3rem',
    height: '1.75rem',
  }],
  lg: [baseToggle, {
    width: '3.5rem',
    height: '2rem',
  }],
});

export const track = styleVariants({
  sm: [baseTrack, {
    width: '2rem',
    height: '1.25rem',
  }],
  md: [baseTrack, {
    width: '3rem',
    height: '1.75rem',
  }],
  lg: [baseTrack, {
    width: '3.5rem',
    height: '2rem',
  }],
});

export const thumb = styleVariants({
  sm: [baseThumb, {
    width: '1rem',
    height: '1rem',
  }],
  md: [baseThumb, {
    width: '1.5rem',
    height: '1.5rem',
  }],
  lg: [baseThumb, {
    width: '1.75rem',
    height: '1.75rem',
  }],
});

export const checked = style({
  backgroundColor: '#3b82f6',
});

export const checkedThumb = style({
  transform: 'translateX(100%)',
});

export const disabled = style({
  opacity: 0.5,
  cursor: 'not-allowed',
});

export const disabledTrack = style({
  backgroundColor: '#e5e7eb',
});

export const disabledThumb = style({
  backgroundColor: '#f3f4f6',
});

export const success = style({
  backgroundColor: '#10b981',
});

export const warning = style({
  backgroundColor: '#f59e0b',
});

export const error = style({
  backgroundColor: '#ef4444',
});

export const label = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  cursor: 'pointer',
  fontSize: '0.875rem',
  color: '#374151',
});

export const labelDisabled = style({
  cursor: 'not-allowed',
  opacity: 0.5,
});

export const input = style({
  position: 'absolute',
  opacity: 0,
  width: 0,
  height: 0,
}); 