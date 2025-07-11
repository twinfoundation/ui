import { style } from '@vanilla-extract/css';
import { colors } from '../tokens/colors.css';

export const avatar = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: colors.gray200,
  color: colors.gray700,
  fontWeight: '500',
  overflow: 'hidden',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  border: '1px solid',
  borderColor: colors.gray300,
  '@media': {
    '(prefers-color-scheme: dark)': {
      backgroundColor: colors.gray700,
      color: colors.gray300,
      borderColor: colors.gray600,
    },
  },
});

export const rounded = style({
  borderRadius: '0.375rem',
});

export const circular = style({
  borderRadius: '50%',
});

export const xs = style({
  width: '1.5rem',
  height: '1.5rem',
  fontSize: '0.75rem',
});

export const small = style({
  width: '2rem',
  height: '2rem',
  fontSize: '0.875rem',
});

export const medium = style({
  width: '2.5rem',
  height: '2.5rem',
  fontSize: '1rem',
});

export const large = style({
  width: '3rem',
  height: '3rem',
  fontSize: '1.25rem',
});

export const xlarge = style({
  width: '4rem',
  height: '4rem',
  fontSize: '1.5rem',
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
  backgroundColor: colors.gray200,
  color: colors.gray700,
  fontWeight: '500',
  '@media': {
    '(prefers-color-scheme: dark)': {
      backgroundColor: colors.gray700,
      color: colors.gray300,
    },
  },
}); 