import { style, styleVariants } from '@vanilla-extract/css';

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
      boxShadow: '0 0 0 2px var(--surface-button-pressed, #1e40af)',
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
    color: 'white',
    backgroundColor: 'var(--surface-button)',
    selectors: {
      '&:hover:enabled, &:hover:not([disabled])': { backgroundColor: 'var(--surface-button-hover)' },
      '&:focus': { boxShadow: '0 0 0 2px var(--surface-button-pressed, #1e40af)' },
    },
  },
  secondary: {
    color: 'white',
    backgroundColor: 'var(--surface-button-alt)',
    selectors: {
      '&:hover:enabled, &:hover:not([disabled])': { backgroundColor: 'var(--surface-button-alt-hover)' },
      '&:focus': { boxShadow: '0 0 0 2px var(--surface-button-alt-pressed, #374151)' },
    },
  },
  error: {
    color: 'white',
    backgroundColor: 'var(--error)',
    selectors: {
      '&:hover:enabled, &:hover:not([disabled])': { backgroundColor: 'var(--system-error-tints-600)' },
      '&:focus': { boxShadow: '0 0 0 2px var(--system-error-tints-200, #fecaca)' },
    },
  },
  warning: {
    color: 'white',
    backgroundColor: 'var(--warning)',
    selectors: {
      '&:hover:enabled, &:hover:not([disabled])': { backgroundColor: 'var(--system-warning-tints-600)' },
      '&:focus': { boxShadow: '0 0 0 2px var(--system-warning-tints-200, #fef3c7)' },
    },
  },
  success: {
    color: 'white',
    backgroundColor: 'var(--success)',
    selectors: {
      '&:hover:enabled, &:hover:not([disabled])': { backgroundColor: 'var(--system-success-tints-600)' },
      '&:focus': { boxShadow: '0 0 0 2px var(--system-success-tints-200, #bbf7d0)' },
    },
  },
  info: {
    color: 'white',
    backgroundColor: 'var(--information)',
    selectors: {
      '&:hover:enabled, &:hover:not([disabled])': { backgroundColor: 'var(--system-information-tints-600)' },
      '&:focus': { boxShadow: '0 0 0 2px var(--system-information-tints-200, #bae6fd)' },
    },
  },
  plain: {
    color: 'black',
    backgroundColor: 'var(--surface-second)',
    selectors: {
      '&:hover:enabled, &:hover:not([disabled])': { backgroundColor: 'var(--surface-third)' },
      '&:focus': { boxShadow: '0 0 0 2px #e5e7eb' },
    },
  },
  ghost: {
    color: 'black',
    backgroundColor: 'transparent',
    selectors: {
      '&:hover:enabled, &:hover:not([disabled])': { backgroundColor: '#f9fafb' },
      '&:focus': { boxShadow: '0 0 0 1px #e5e7eb', backgroundColor: '#f3f4f6' },
    },
  },
  dark: {
    color: 'white',
    backgroundColor: '#1f2937',
    selectors: {
      '&:hover:enabled, &:hover:not([disabled])': { backgroundColor: '#374151' },
      '&:focus': { boxShadow: '0 0 0 2px #e5e7eb' },
    },
  },
});
