import { style, styleVariants } from '@vanilla-extract/css';

export const base = style({
  display: 'inline-block',
  borderRadius: '9999px',
  overflow: 'hidden',
  border: '2px solid #e5e7eb',
  background: '#f3f4f6',
  verticalAlign: 'middle',
});

export const size = styleVariants({
  sm: { width: '2rem', height: '2rem' },   // 32px
  md: { width: '2.5rem', height: '2.5rem' }, // 40px
  lg: { width: '3rem', height: '3rem' },   // 48px
  xl: { width: '4rem', height: '4rem' },   // 64px
});

export const image = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  display: 'block',
}); 