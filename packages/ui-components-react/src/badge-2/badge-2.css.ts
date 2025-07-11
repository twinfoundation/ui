import { style } from '@vanilla-extract/css';
import { colors } from '../tokens/colors.css';

export const badge = style({
  display: 'inline-flex',
  alignItems: 'center',
  padding: '0.25rem 0.5rem',
  fontSize: '0.75rem',
  fontWeight: '500',
  borderRadius: '0.375rem',
  lineHeight: '1',
});

export const gray = style({
  backgroundColor: colors.gray100,
  color: colors.gray700,
  '@media': {
    '(prefers-color-scheme: dark)': {
      backgroundColor: colors.gray700,
      color: colors.gray300,
    },
  },
});

export const red = style({
  backgroundColor: colors.red100,
  color: colors.red700,
  '@media': {
    '(prefers-color-scheme: dark)': {
      backgroundColor: colors.red200,
      color: colors.red800,
    },
  },
});

export const green = style({
  backgroundColor: colors.green100,
  color: '#16a34a',
  '@media': {
    '(prefers-color-scheme: dark)': {
      backgroundColor: colors.green200,
      color: '#166534',
    },
  },
});

export const yellow = style({
  backgroundColor: '#fef9c3',
  color: '#d97706',
  '@media': {
    '(prefers-color-scheme: dark)': {
      backgroundColor: '#fef08a',
      color: '#b45309',
    },
  },
});

export const blue = style({
  backgroundColor: colors.blue100,
  color: colors.blue700,
  '@media': {
    '(prefers-color-scheme: dark)': {
      backgroundColor: colors.blue200,
      color: colors.blue800,
    },
  },
});

export const purple = style({
  backgroundColor: '#faf5ff',
  color: '#7c3aed',
  '@media': {
    '(prefers-color-scheme: dark)': {
      backgroundColor: '#ede9fe',
      color: '#6d28d9',
    },
  },
});

export const pink = style({
  backgroundColor: '#fdf2f8',
  color: '#ec4899',
  '@media': {
    '(prefers-color-scheme: dark)': {
      backgroundColor: '#fbcfe8',
      color: '#be185d',
    },
  },
}); 