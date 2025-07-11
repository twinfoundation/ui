import { style } from '@vanilla-extract/css';
import { colors } from '../tokens/colors.css';

export const container = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  cursor: 'pointer',
  userSelect: 'none',
});

export const checkbox = style({
  appearance: 'none',
  width: '1rem',
  height: '1rem',
  border: `2px solid ${colors.gray300}`,
  borderRadius: '0.25rem',
  backgroundColor: colors.gray50,
  cursor: 'pointer',
  position: 'relative',
  transition: 'all 0.15s ease-in-out',
  ':checked': {
    backgroundColor: colors.blue600,
    borderColor: colors.blue600,
  },
  ':focus': {
    outline: 'none',
    boxShadow: `0 0 0 3px ${colors.blue200}`,
  },
  ':disabled': {
    backgroundColor: colors.gray100,
    borderColor: colors.gray300,
    cursor: 'not-allowed',
    opacity: 0.5,
  },
  '@media': {
    '(prefers-color-scheme: dark)': {
      backgroundColor: colors.gray800,
      borderColor: colors.gray600,
      ':checked': {
        backgroundColor: colors.blue500,
        borderColor: colors.blue500,
      },
      ':focus': {
        boxShadow: `0 0 0 3px ${colors.blue700}`,
      },
      ':disabled': {
        backgroundColor: colors.gray700,
        borderColor: colors.gray600,
      },
    },
  },
});

export const checkmark = style({
  position: 'absolute',
  top: '50%',
  left: '50%',
  width: '0.5rem',
  height: '0.5rem',
  border: `2px solid ${colors.gray50}`,
  borderTop: 'none',
  borderLeft: 'none',
  transform: 'translate(-50%, -60%) rotate(45deg)',
  opacity: 0,
  transition: 'opacity 0.15s ease-in-out',
  selectors: {
    [`${checkbox}:checked &`]: {
      opacity: 1,
    },
  },
  '@media': {
    '(prefers-color-scheme: dark)': {
      border: `2px solid ${colors.gray800}`,
    },
  },
});

export const label = style({
  fontSize: '0.875rem',
  color: colors.gray700,
  cursor: 'pointer',
  selectors: {
    [`${container}:has(${checkbox}:disabled) &`]: {
      color: colors.gray400,
      cursor: 'not-allowed',
    },
  },
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: colors.gray300,
      selectors: {
        [`${container}:has(${checkbox}:disabled) &`]: {
          color: colors.gray600,
        },
      },
    },
  },
});

export const large = style({
  width: '1.25rem',
  height: '1.25rem',
  selectors: {
    [`& ${checkmark}`]: {
      width: '0.625rem',
      height: '0.625rem',
    },
  },
});

export const small = style({
  width: '0.875rem',
  height: '0.875rem',
  selectors: {
    [`& ${checkmark}`]: {
      width: '0.375rem',
      height: '0.375rem',
    },
  },
}); 