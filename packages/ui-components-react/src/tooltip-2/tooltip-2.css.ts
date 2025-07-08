import { style, styleVariants } from '@vanilla-extract/css';

export const tooltip = style({
  position: 'absolute',
  zIndex: 1000,
  padding: '6px 12px',
  borderRadius: 4,
  fontSize: '0.95em',
  fontWeight: 500,
  background: '#222',
  color: '#fff',
  boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
  pointerEvents: 'none',
  transition: 'opacity 0.2s',
  opacity: 0,
  selectors: {
    '&[data-visible="true"]': {
      opacity: 1,
      pointerEvents: 'auto',
    },
  },
});

export const arrow = style({
  position: 'absolute',
  width: 8,
  height: 8,
  background: '#222',
  transform: 'rotate(45deg)',
});

export const colorVariants = styleVariants({
  dark: { background: '#222', color: '#fff' },
  light: { background: '#fff', color: '#222', border: '1px solid #ddd' },
  error: { background: '#f87171', color: '#fff' },
  warning: { background: '#fbbf24', color: '#222' },
  success: { background: '#4ade80', color: '#222' },
  info: { background: '#38bdf8', color: '#fff' },
  plain: { background: 'transparent', color: '#222', border: '1px solid #ddd' },
}); 