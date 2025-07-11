import { style, styleVariants } from '@vanilla-extract/css';
import { colors } from '../tokens/colors.css';

export const base = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: 500,
  textDecoration: 'none',
  cursor: 'pointer',
  transition: 'all 0.2s ease-in-out',
  outline: 'none',
  userSelect: 'none',
  borderStyle: 'solid',
  borderWidth: '2px',
  borderColor: 'transparent',
  selectors: {
    '&:disabled, &[disabled]': {
      opacity: 0.6,
      cursor: 'not-allowed',
    },
    '&:focus': {
      boxShadow: `0 0 0 2px ${colors.blue700}`,
    },
  },
});

export const rounded = style({ borderRadius: '0.5rem' });

export const iconOnly = style({
  aspectRatio: '1',
  borderRadius: '9999px',
  padding: 0,
});

export const ghostOutline = style({
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: 'currentColor',
});

export const size = styleVariants({
  xs: { height: '1.75rem', padding: '0.25rem 0.5rem', fontSize: '0.75rem' },
  sm: { height: '2.25rem', padding: '0.375rem 0.75rem', fontSize: '0.875rem' },
  md: { height: '2.75rem', padding: '0.5rem 1rem', fontSize: '1rem' },
  lg: { height: '3.5rem', padding: '0.75rem 1.5rem', fontSize: '1.125rem' },
  xl: { height: '4rem', padding: '1rem 2rem', fontSize: '1.25rem' },
});

export const iconSize = styleVariants({
  xs: { height: '0.875rem', width: '0.875rem' },
  sm: { height: '1rem', width: '1rem' },
  md: { height: '1.25rem', width: '1.25rem' },
  lg: { height: '1.5rem', width: '1.5rem' },
  xl: { height: '1.75rem', width: '1.75rem' },
});

export const color = styleVariants({
  primary: {
    color: colors.gray50,
    backgroundColor: colors.blue700,
    borderColor: colors.blue700,
    selectors: {
      '&:hover:enabled, &:hover:not([disabled])': { backgroundColor: colors.blue800, borderColor: colors.blue800 },
      '&:focus': { boxShadow: `0 0 0 2px ${colors.blue300}` },
    },
    '@media': {
      '(prefers-color-scheme: dark)': {
        color: colors.gray50,
        backgroundColor: colors.blue600,
        borderColor: colors.blue600,
        selectors: {
          '&:hover:enabled, &:hover:not([disabled])': { backgroundColor: colors.blue700, borderColor: colors.blue700 },
          '&:focus': { boxShadow: `0 0 0 2px ${colors.blue200}` },
        },
      },
    },
  },
  secondary: {
    color: colors.gray50,
    backgroundColor: colors.gray700,
    borderColor: colors.gray700,
    selectors: {
      '&:hover:enabled, &:hover:not([disabled])': { backgroundColor: colors.gray800, borderColor: colors.gray800 },
      '&:focus': { boxShadow: `0 0 0 2px ${colors.gray300}` },
    },
    '@media': {
      '(prefers-color-scheme: dark)': {
        color: colors.gray50,
        backgroundColor: colors.gray600,
        borderColor: colors.gray600,
        selectors: {
          '&:hover:enabled, &:hover:not([disabled])': { backgroundColor: colors.gray700, borderColor: colors.gray700 },
          '&:focus': { boxShadow: `0 0 0 2px ${colors.gray200}` },
        },
      },
    },
  },
  error: {
    color: colors.gray50,
    backgroundColor: colors.red700,
    borderColor: colors.red700,
    selectors: {
      '&:hover:enabled, &:hover:not([disabled])': { backgroundColor: colors.red800, borderColor: colors.red800 },
      '&:focus': { boxShadow: `0 0 0 2px ${colors.red200}` },
    },
    '@media': {
      '(prefers-color-scheme: dark)': {
        color: colors.gray50,
        backgroundColor: colors.red600,
        borderColor: colors.red600,
        selectors: {
          '&:hover:enabled, &:hover:not([disabled])': { backgroundColor: colors.red700, borderColor: colors.red700 },
          '&:focus': { boxShadow: `0 0 0 2px ${colors.red100}` },
        },
      },
    },
  },
  warning: {
    color: colors.gray900,
    backgroundColor: colors.yellow400,
    borderColor: colors.yellow400,
    selectors: {
      '&:hover:enabled, &:hover:not([disabled])': { backgroundColor: colors.yellow500, borderColor: colors.yellow500 },
      '&:focus': { boxShadow: `0 0 0 2px ${colors.yellow100}` },
    },
    '@media': {
      '(prefers-color-scheme: dark)': {
        color: colors.gray900,
        backgroundColor: colors.yellow300,
        borderColor: colors.yellow300,
        selectors: {
          '&:hover:enabled, &:hover:not([disabled])': { backgroundColor: colors.yellow400, borderColor: colors.yellow400 },
          '&:focus': { boxShadow: `0 0 0 2px ${colors.yellow50}` },
        },
      },
    },
  },
  success: {
    color: colors.gray50,
    backgroundColor: colors.green600,
    borderColor: colors.green600,
    selectors: {
      '&:hover:enabled, &:hover:not([disabled])': { backgroundColor: colors.green700, borderColor: colors.green700 },
      '&:focus': { boxShadow: `0 0 0 2px ${colors.green200}` },
    },
    '@media': {
      '(prefers-color-scheme: dark)': {
        color: colors.gray50,
        backgroundColor: colors.green500,
        borderColor: colors.green500,
        selectors: {
          '&:hover:enabled, &:hover:not([disabled])': { backgroundColor: colors.green600, borderColor: colors.green600 },
          '&:focus': { boxShadow: `0 0 0 2px ${colors.green100}` },
        },
      },
    },
  },
  info: {
    color: colors.gray50,
    backgroundColor: colors.cyan600,
    borderColor: colors.cyan600,
    selectors: {
      '&:hover:enabled, &:hover:not([disabled])': { backgroundColor: colors.cyan700, borderColor: colors.cyan700 },
      '&:focus': { boxShadow: `0 0 0 2px ${colors.cyan200}` },
    },
    '@media': {
      '(prefers-color-scheme: dark)': {
        color: colors.gray50,
        backgroundColor: colors.cyan500,
        borderColor: colors.cyan500,
        selectors: {
          '&:hover:enabled, &:hover:not([disabled])': { backgroundColor: colors.cyan600, borderColor: colors.cyan600 },
          '&:focus': { boxShadow: `0 0 0 2px ${colors.cyan100}` },
        },
      },
    },
  },
  plain: {
    color: colors.gray900,
    backgroundColor: colors.gray100,
    borderColor: colors.gray200,
    selectors: {
      '&:hover:enabled, &:hover:not([disabled])': { backgroundColor: colors.gray200, borderColor: colors.gray300 },
      '&:focus': { boxShadow: `0 0 0 2px ${colors.gray300}` },
    },
    '@media': {
      '(prefers-color-scheme: dark)': {
        color: colors.gray50,
        backgroundColor: colors.gray800,
        borderColor: colors.gray700,
        selectors: {
          '&:hover:enabled, &:hover:not([disabled])': { backgroundColor: colors.gray700, borderColor: colors.gray600 },
          '&:focus': { boxShadow: `0 0 0 2px ${colors.gray600}` },
        },
      },
    },
  },
  ghost: {
    color: colors.gray900,
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    selectors: {
      '&:hover:enabled, &:hover:not([disabled])': { backgroundColor: colors.gray50, borderColor: colors.gray200 },
      '&:focus': { boxShadow: `0 0 0 1px ${colors.gray200}`, backgroundColor: colors.gray100 },
    },
    '@media': {
      '(prefers-color-scheme: dark)': {
        color: colors.gray50,
        backgroundColor: colors.gray800,
        borderColor: colors.gray700,
        selectors: {
          '&:hover:enabled, &:hover:not([disabled])': { backgroundColor: colors.gray700, borderColor: colors.gray600 },
          '&:focus': { boxShadow: `0 0 0 1px ${colors.gray700}`, backgroundColor: colors.gray700 },
        },
      },
    },
  },
  dark: {
    color: colors.gray50,
    backgroundColor: colors.gray900,
    borderColor: colors.gray900,
    selectors: {
      '&:hover:enabled, &:hover:not([disabled])': { backgroundColor: colors.gray800, borderColor: colors.gray800 },
      '&:focus': { boxShadow: `0 0 0 2px ${colors.gray300}` },
    },
    '@media': {
      '(prefers-color-scheme: dark)': {
        color: colors.gray900,
        backgroundColor: colors.gray50,
        borderColor: colors.gray50,
        selectors: {
          '&:hover:enabled, &:hover:not([disabled])': { backgroundColor: colors.gray100, borderColor: colors.gray100 },
          '&:focus': { boxShadow: `0 0 0 2px ${colors.gray700}` },
        },
      },
    },
  },
});
