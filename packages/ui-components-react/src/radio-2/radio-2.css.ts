import { style, styleVariants } from '@vanilla-extract/css';
import { colors } from '../tokens/colors.css';

const baseRadio = style({
  position: 'relative',
  display: 'inline-block',
  cursor: 'pointer',
  transition: 'all 0.15s ease-in-out',
  border: 'none',
  background: 'none',
  padding: 0,
});

const baseRadioInput = style({
  position: 'absolute',
  opacity: 0,
  width: 0,
  height: 0,
});

const baseRadioCircle = style({
  position: 'relative',
  display: 'inline-block',
  borderRadius: '50%',
  border: `2px solid ${colors.gray300}`,
  backgroundColor: colors.gray50,
  transition: 'all 0.15s ease-in-out',
  '@media': {
    '(prefers-color-scheme: dark)': {
      border: `2px solid ${colors.gray600}`,
      backgroundColor: colors.gray800,
    },
  },
});

const baseRadioDot = style({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%) scale(0)',
  borderRadius: '50%',
  backgroundColor: colors.blue600,
  transition: 'all 0.15s ease-in-out',
  '@media': {
    '(prefers-color-scheme: dark)': {
      backgroundColor: colors.blue400,
    },
  },
});

export const radio = styleVariants({
  sm: [baseRadio, { width: '1rem', height: '1rem' }],
  md: [baseRadio, { width: '1.25rem', height: '1.25rem' }],
  lg: [baseRadio, { width: '1.5rem', height: '1.5rem' }],
});

export const radioInput = styleVariants({
  sm: [baseRadioInput, { width: '1rem', height: '1rem' }],
  md: [baseRadioInput, { width: '1.25rem', height: '1.25rem' }],
  lg: [baseRadioInput, { width: '1.5rem', height: '1.5rem' }],
});

export const radioCircle = styleVariants({
  sm: [baseRadioCircle, { width: '1rem', height: '1rem' }],
  md: [baseRadioCircle, { width: '1.25rem', height: '1.25rem' }],
  lg: [baseRadioCircle, { width: '1.5rem', height: '1.5rem' }],
});

export const radioDot = styleVariants({
  sm: [baseRadioDot, { width: '0.375rem', height: '0.375rem' }],
  md: [baseRadioDot, { width: '0.5rem', height: '0.5rem' }],
  lg: [baseRadioDot, { width: '0.625rem', height: '0.625rem' }],
});

export const checked = style({
  borderColor: colors.blue600,
  backgroundColor: colors.gray50,
  '@media': {
    '(prefers-color-scheme: dark)': {
      borderColor: colors.blue400,
      backgroundColor: colors.gray800,
    },
  },
});

export const checkedDot = style({
  transform: 'translate(-50%, -50%) scale(1)',
});

export const disabled = style({
  opacity: 0.5,
  cursor: 'not-allowed',
});

export const disabledCircle = style({
  borderColor: colors.gray200,
  backgroundColor: colors.gray100,
  '@media': {
    '(prefers-color-scheme: dark)': {
      borderColor: colors.gray700,
      backgroundColor: colors.gray700,
    },
  },
});

export const disabledDot = style({
  backgroundColor: colors.gray400,
  '@media': {
    '(prefers-color-scheme: dark)': {
      backgroundColor: colors.gray600,
    },
  },
});

export const success = style({ borderColor: colors.green600 });
export const successDot = style({ backgroundColor: colors.green600 });
export const warning = style({ borderColor: colors.yellow400 });
export const warningDot = style({ backgroundColor: colors.yellow400 });
export const error = style({ borderColor: colors.red600 });
export const errorDot = style({ backgroundColor: colors.red600 });

export const label = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  cursor: 'pointer',
  fontSize: '0.875rem',
  color: colors.gray700,
  userSelect: 'none',
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: colors.gray300,
    },
  },
});

export const labelDisabled = style({
  cursor: 'not-allowed',
  opacity: 0.5,
});

export const group = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
});

export const groupHorizontal = style({
  flexDirection: 'row',
  alignItems: 'center',
});

export const groupLabel = style({
  fontSize: '0.875rem',
  fontWeight: '500',
  color: colors.gray700,
  marginBottom: '0.5rem',
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: colors.gray300,
    },
  },
});

export const groupDescription = style({
  fontSize: '0.75rem',
  color: colors.gray500,
  marginTop: '0.25rem',
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: colors.gray400,
    },
  },
}); 