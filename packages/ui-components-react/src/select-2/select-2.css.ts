import { style, styleVariants } from '@vanilla-extract/css';
import { colors } from '../tokens/colors.css';

const baseSelect = style({
  position: 'relative',
  display: 'inline-block',
  width: '100%',
});

const baseSelectButton = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  padding: '0.5rem 0.75rem',
  backgroundColor: colors.gray50,
  border: `1px solid ${colors.gray300}`,
  borderRadius: '0.375rem',
  fontSize: '0.875rem',
  color: colors.gray700,
  cursor: 'pointer',
  transition: 'all 0.15s ease-in-out',
  outline: 'none',
  ':focus': {
    borderColor: colors.blue600,
    boxShadow: `0 0 0 3px ${colors.blue200}`,
  },
  ':hover': {
    borderColor: colors.gray400,
  },
  '@media': {
    '(prefers-color-scheme: dark)': {
      backgroundColor: colors.gray800,
      color: colors.gray200,
      border: `1px solid ${colors.gray600}`,
    },
  },
});

const baseSelectIcon = style({
  width: '1rem',
  height: '1rem',
  transition: 'transform 0.15s ease-in-out',
  color: colors.gray500,
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: colors.gray400,
    },
  },
});

const baseDropdown = style({
  position: 'absolute',
  top: '100%',
  left: 0,
  right: 0,
  zIndex: 50,
  backgroundColor: colors.gray50,
  border: `1px solid ${colors.gray200}`,
  borderRadius: '0.375rem',
  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  maxHeight: '12rem',
  overflowY: 'auto',
  opacity: 0,
  visibility: 'hidden',
  transform: 'translateY(-0.5rem)',
  transition: 'all 0.15s ease-in-out',
  '@media': {
    '(prefers-color-scheme: dark)': {
      backgroundColor: colors.gray800,
      border: `1px solid ${colors.gray700}`,
    },
  },
});

const baseOption = style({
  padding: '0.5rem 0.75rem',
  fontSize: '0.875rem',
  color: colors.gray700,
  cursor: 'pointer',
  transition: 'all 0.15s ease-in-out',
  ':hover': {
    backgroundColor: colors.gray100,
  },
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: colors.gray200,
      ':hover': {
        backgroundColor: colors.gray700,
      },
    },
  },
});

export const select = styleVariants({
  sm: [baseSelect, { fontSize: '0.75rem' }],
  md: [baseSelect, { fontSize: '0.875rem' }],
  lg: [baseSelect, { fontSize: '1rem' }],
});

export const selectButton = styleVariants({
  sm: [baseSelectButton, { padding: '0.375rem 0.5rem', fontSize: '0.75rem' }],
  md: [baseSelectButton, { padding: '0.5rem 0.75rem', fontSize: '0.875rem' }],
  lg: [baseSelectButton, { padding: '0.75rem 1rem', fontSize: '1rem' }],
});

export const selectIcon = styleVariants({
  sm: [baseSelectIcon, { width: '0.875rem', height: '0.875rem' }],
  md: [baseSelectIcon, { width: '1rem', height: '1rem' }],
  lg: [baseSelectIcon, { width: '1.125rem', height: '1.125rem' }],
});

export const dropdown = styleVariants({
  sm: [baseDropdown, { fontSize: '0.75rem' }],
  md: [baseDropdown, { fontSize: '0.875rem' }],
  lg: [baseDropdown, { fontSize: '1rem' }],
});

export const option = styleVariants({
  sm: [baseOption, { padding: '0.375rem 0.5rem', fontSize: '0.75rem' }],
  md: [baseOption, { padding: '0.5rem 0.75rem', fontSize: '0.875rem' }],
  lg: [baseOption, { padding: '0.75rem 1rem', fontSize: '1rem' }],
});

export const open = style({
  opacity: 1,
  visibility: 'visible',
  transform: 'translateY(0)',
});

export const openIcon = style({
  transform: 'rotate(180deg)',
});

export const disabled = style({
  opacity: 0.5,
  cursor: 'not-allowed',
  backgroundColor: colors.gray100,
  '@media': {
    '(prefers-color-scheme: dark)': {
      backgroundColor: colors.gray700,
    },
  },
});

export const disabledButton = style({
  cursor: 'not-allowed',
  backgroundColor: colors.gray100,
  color: colors.gray400,
  ':hover': {
    borderColor: colors.gray300,
  },
  ':focus': {
    borderColor: colors.gray300,
    boxShadow: 'none',
  },
  '@media': {
    '(prefers-color-scheme: dark)': {
      backgroundColor: colors.gray700,
      color: colors.gray600,
    },
  },
});

export const error = style({
  borderColor: colors.red600,
  ':focus': {
    borderColor: colors.red600,
    boxShadow: `0 0 0 3px ${colors.red100}`,
  },
});

export const success = style({
  borderColor: colors.green600,
  ':focus': {
    borderColor: colors.green600,
    boxShadow: `0 0 0 3px ${colors.green100}`,
  },
});

export const warning = style({
  borderColor: colors.yellow400,
  ':focus': {
    borderColor: colors.yellow400,
    boxShadow: `0 0 0 3px ${colors.yellow100}`,
  },
});

export const selected = style({
  backgroundColor: colors.blue600,
  color: colors.gray50,
  ':hover': {
    backgroundColor: colors.blue700,
  },
  '@media': {
    '(prefers-color-scheme: dark)': {
      backgroundColor: colors.blue400,
      color: colors.gray900,
      ':hover': {
        backgroundColor: colors.blue500,
      },
    },
  },
});

export const disabledOption = style({
  color: colors.gray400,
  cursor: 'not-allowed',
  backgroundColor: 'transparent',
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: colors.gray600,
    },
  },
});

export const placeholder = style({ color: colors.gray400, '@media': { '(prefers-color-scheme: dark)': { color: colors.gray600 } } });
export const label = style({ fontSize: '0.875rem', fontWeight: 500, color: colors.gray700, marginBottom: '0.5rem', '@media': { '(prefers-color-scheme: dark)': { color: colors.gray300 } } });
export const errorMessage = style({ fontSize: '0.75rem', color: colors.red600, marginTop: '0.25rem', '@media': { '(prefers-color-scheme: dark)': { color: colors.red400 } } });
export const helpText = style({ fontSize: '0.75rem', color: colors.gray500, marginTop: '0.25rem', '@media': { '(prefers-color-scheme: dark)': { color: colors.gray400 } } });

export const group = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.25rem',
}); 