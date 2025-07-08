import { style } from '@vanilla-extract/css';

export const avatar = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#e5e7eb',
  color: '#374151',
  fontWeight: '500',
  overflow: 'hidden',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
});

export const rounded = style({
  borderRadius: '0.375rem',
});

export const circular = style({
  borderRadius: '50%',
});

export const small = style({
  width: '2rem',
  height: '2rem',
  fontSize: '0.75rem',
});

export const medium = style({
  width: '2.5rem',
  height: '2.5rem',
  fontSize: '0.875rem',
});

export const large = style({
  width: '3rem',
  height: '3rem',
  fontSize: '1rem',
});

export const xlarge = style({
  width: '4rem',
  height: '4rem',
  fontSize: '1.25rem',
});

export const image = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

export const fallback = style({
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#e5e7eb',
  color: '#374151',
  fontWeight: '500',
}); 