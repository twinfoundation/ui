import { style } from '@vanilla-extract/css';
import { colors } from '../tokens/colors.css';

export const carousel = style({
  position: 'relative',
  width: '100%',
  height: '14rem', // h-56
  overflow: 'hidden',
  background: colors.gray100,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  '@media': {
    'screen and (min-width: 640px)': { height: '16rem' }, // sm:h-64
    'screen and (min-width: 1280px)': { height: '20rem' }, // xl:h-80
    'screen and (min-width: 1536px)': { height: '24rem' }, // 2xl:h-96
    '(prefers-color-scheme: dark)': { background: colors.gray700 },
  },
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
  background: colors.gray200,
  color: colors.gray700,
  display: 'none',
  '@media': {
    '(prefers-color-scheme: dark)': {
      background: colors.gray700,
      color: colors.gray100,
    },
  },
});

export const slideActive = style({
  width: '100%',
  height: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  background: colors.gray200,
  color: colors.gray700,
  display: 'flex',
  transition: 'opacity 0.5s',
  '@media': {
    '(prefers-color-scheme: dark)': {
      background: colors.gray700,
      color: colors.gray100,
    },
  },
});

export const controlLeft = style({
  position: 'absolute',
  left: '1rem',
  top: '50%',
  transform: 'translateY(-50%)',
  background: colors.gray50,
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
  boxShadow: '0 1px 2px 0 rgba(0,0,0,0.05)',
  '@media': {
    '(prefers-color-scheme: dark)': {
      background: colors.gray800,
      color: colors.gray100,
    },
  },
});

export const controlRight = style({
  position: 'absolute',
  right: '1rem',
  top: '50%',
  transform: 'translateY(-50%)',
  background: colors.gray50,
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
  boxShadow: '0 1px 2px 0 rgba(0,0,0,0.05)',
  '@media': {
    '(prefers-color-scheme: dark)': {
      background: colors.gray800,
      color: colors.gray100,
    },
  },
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
  background: colors.gray300,
  border: 'none',
  cursor: 'pointer',
  transition: 'background 0.2s',
  '@media': {
    '(prefers-color-scheme: dark)': {
      background: colors.gray500,
    },
  },
});

export const indicatorActive = style({
  width: '0.75rem',
  height: '0.75rem',
  borderRadius: '50%',
  background: colors.blue700,
  border: 'none',
  cursor: 'pointer',
  '@media': {
    '(prefers-color-scheme: dark)': {
      background: colors.blue400,
    },
  },
}); 