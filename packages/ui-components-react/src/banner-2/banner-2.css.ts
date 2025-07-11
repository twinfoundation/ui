import { style, styleVariants } from '@vanilla-extract/css';
import { colors } from '../tokens/colors.css';

export const banner = style({
  position: 'fixed',
  left: 0,
  zIndex: 50,
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
  padding: 16,
  backgroundColor: colors.gray50,
  borderColor: colors.gray200,
  borderStyle: 'solid',
  borderWidth: 0,
  borderBottomWidth: 1,
  '@media': {
    '(prefers-color-scheme: dark)': {
      backgroundColor: colors.gray700,
      borderColor: colors.gray600,
    },
  },
});

export const positionVariants = styleVariants({
  top: {
    top: 0,
    borderBottomWidth: 1,
  },
  bottom: {
    bottom: 0,
    borderTopWidth: 1,
  },
});

export const closeButton = style({
  border: 0,
  backgroundColor: 'transparent',
  color: colors.gray500,
  cursor: 'pointer',
  padding: 4,
  borderRadius: 4,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'background-color 0.2s',
  ':hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
  },
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: colors.gray400,
      ':hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
      },
    },
  },
});

export const content = style({
  margin: '0 auto',
  display: 'flex',
  alignItems: 'center',
}); 