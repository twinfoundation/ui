import { styleVariants, style } from '@vanilla-extract/css';

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
    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed',
    },
  },
});

export const rounded = style({ borderRadius: '0.5rem' });
export const iconOnly = style({ aspectRatio: '1', borderRadius: '9999px', padding: 0 });
export const ghostOutline = style({ borderWidth: '1px', borderStyle: 'solid', borderColor: 'currentColor' });

export const size = styleVariants({
  xs: { height: '1.75rem', width: '1.75rem', padding: '0.25rem', fontSize: '0.75rem' },
  sm: { height: '2.25rem', width: '2.25rem', padding: '0.375rem 0.75rem', fontSize: '0.875rem' },
  md: { height: '2.75rem', width: '2.75rem', padding: '0.5rem 1rem', fontSize: '1rem' },
  lg: { height: '3.5rem', width: '3.5rem', padding: '0.75rem 1.5rem', fontSize: '1.125rem' },
  xl: { height: '4rem', width: '4rem', padding: '1rem 2rem', fontSize: '1.25rem' },
});

export const color = styleVariants({
  primary: {
    color: 'white',
    backgroundColor: 'var(--surface-button)',
    ':hover:enabled': { backgroundColor: 'var(--surface-button-hover)' },
    ':focus': { outline: '2px solid var(--surface-button-pressed)' },
  },
  secondary: {
    color: 'white',
    backgroundColor: 'var(--surface-button-alt)',
    ':hover:enabled': { backgroundColor: 'var(--surface-button-alt-hover)' },
    ':focus': { outline: '2px solid var(--surface-button-alt-pressed)' },
  },
  error: {
    color: 'white',
    backgroundColor: 'var(--error)',
    ':hover:enabled': { backgroundColor: 'var(--system-error-tints-600)' },
    ':focus': { outline: '2px solid var(--system-error-tints-200)' },
  },
  warning: {
    color: 'white',
    backgroundColor: 'var(--warning)',
    ':hover:enabled': { backgroundColor: 'var(--system-warning-tints-600)' },
    ':focus': { outline: '2px solid var(--system-warning-tints-200)' },
  },
  success: {
    color: 'white',
    backgroundColor: 'var(--success)',
    ':hover:enabled': { backgroundColor: 'var(--system-success-tints-600)' },
    ':focus': { outline: '2px solid var(--system-success-tints-200)' },
  },
  info: {
    color: 'white',
    backgroundColor: 'var(--information)',
    ':hover:enabled': { backgroundColor: 'var(--system-information-tints-600)' },
    ':focus': { outline: '2px solid var(--system-information-tints-200)' },
  },
  plain: {
    color: 'black',
    backgroundColor: 'var(--surface-second)',
    ':hover:enabled': { backgroundColor: 'var(--surface-third)' },
    ':focus': { outline: '2px solid #e5e7eb' },
  },
  ghost: {
    color: 'black',
    backgroundColor: 'transparent',
    ':hover:enabled': { backgroundColor: '#f9fafb' },
    ':focus': { outline: '1px solid #e5e7eb', backgroundColor: '#f3f4f6' },
  },
  dark: {
    color: 'white',
    backgroundColor: '#1f2937',
    ':hover:enabled': { backgroundColor: '#374151' },
    ':focus': { outline: '2px solid #e5e7eb' },
  },
}); 