import { style } from '@vanilla-extract/css';
import { colors } from '../tokens/colors.css';

export const breadcrumb = style({
  display: 'flex',
  alignItems: 'center',
  listStyle: 'none',
  margin: 0,
  padding: 0,
  fontSize: '0.875rem',
  color: colors.gray500,
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: colors.gray400,
    },
  },
});

export const item = style({
  display: 'flex',
  alignItems: 'center',
  selectors: {
    '&:not(:last-child)': {
      marginRight: 8,
    },
  },
});

export const link = style({
  display: 'flex',
  alignItems: 'center',
  color: colors.cyan600,
  textDecoration: 'none',
  fontWeight: 500,
  transition: 'color 0.2s',
  ':hover': {
    color: colors.cyan700,
    textDecoration: 'underline',
  },
  ':focus': {
    outline: `2px solid ${colors.cyan600}`,
    outlineOffset: 2,
    borderRadius: 4,
  },
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: colors.cyan400,
      ':hover': {
        color: colors.cyan300,
      },
    },
  },
});

export const currentItem = style({
  color: colors.gray700,
  fontWeight: 500,
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: colors.gray300,
    },
  },
});

export const separator = style({
  marginLeft: 8,
  color: colors.gray400,
  fontSize: '0.75rem',
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: colors.gray500,
    },
  },
});

export const icon = style({
  marginRight: 4,
  width: 16,
  height: 16,
});

export const homeIcon = style({
  display: 'inline-flex',
  alignItems: 'center',
  marginRight: 4,
  fontSize: '1rem',
  verticalAlign: 'middle',
}); 