import { style } from '@vanilla-extract/css';
import { colors } from '../tokens/colors.css';

export const card = style({
  backgroundColor: colors.gray50,
  borderRadius: '0.5rem',
  boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  border: `1px solid ${colors.gray200}`,
  overflow: 'hidden',
  '@media': {
    '(prefers-color-scheme: dark)': {
      backgroundColor: colors.gray800,
      border: `1px solid ${colors.gray700}`,
    },
  },
});

export const header = style({
  padding: '1rem',
  borderBottom: `1px solid ${colors.gray200}`,
  backgroundColor: colors.gray100,
  '@media': {
    '(prefers-color-scheme: dark)': {
      borderBottom: `1px solid ${colors.gray700}`,
      backgroundColor: colors.gray700,
    },
  },
});

export const body = style({
  padding: '1rem',
  color: colors.gray700,
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: colors.gray300,
    },
  },
});

export const footer = style({
  padding: '1rem',
  borderTop: `1px solid ${colors.gray200}`,
  backgroundColor: colors.gray100,
  '@media': {
    '(prefers-color-scheme: dark)': {
      borderTop: `1px solid ${colors.gray700}`,
      backgroundColor: colors.gray700,
    },
  },
});

export const title = style({
  fontSize: '1.125rem',
  fontWeight: '600',
  color: colors.gray900,
  margin: '0',
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: colors.gray50,
    },
  },
});

export const subtitle = style({
  fontSize: '0.875rem',
  color: colors.gray500,
  margin: '0.25rem 0 0 0',
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: colors.gray400,
    },
  },
}); 