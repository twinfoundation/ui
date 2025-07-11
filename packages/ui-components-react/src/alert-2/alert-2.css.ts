import { style } from '@vanilla-extract/css';
import { colors } from '../tokens/colors.css';

export const alert = style({
  padding: '1rem',
  borderRadius: '0.375rem',
  border: '1px solid',
  fontSize: '0.875rem',
  lineHeight: '1.25rem',
  display: 'flex',
  alignItems: 'flex-start',
  gap: '0.75rem',
});

export const info = style({
  backgroundColor: colors.blue100,
  borderColor: 'currentColor',
  color: colors.blue700,
  '@media': {
    '(prefers-color-scheme: dark)': {
      backgroundColor: colors.blue200,
      color: colors.blue800,
    },
  },
});

export const success = style({
  backgroundColor: colors.green100 || '#dcfce7',
  borderColor: 'currentColor',
  color: '#166534',
  '@media': {
    '(prefers-color-scheme: dark)': {
      backgroundColor: '#bbf7d0',
      color: '#166534',
    },
  },
});

export const warning = style({
  backgroundColor: '#fef9c3',
  borderColor: 'currentColor',
  color: '#92400e',
  '@media': {
    '(prefers-color-scheme: dark)': {
      backgroundColor: '#fef9c3',
      color: '#92400e',
    },
  },
});

export const error = style({
  backgroundColor: colors.red100 || '#fee2e2',
  borderColor: 'currentColor',
  color: colors.red700 || '#b91c1c',
  '@media': {
    '(prefers-color-scheme: dark)': {
      backgroundColor: colors.red200 || '#fecaca',
      color: colors.red800 || '#991b1b',
    },
  },
});

export const gray = style({
  backgroundColor: colors.gray100,
  borderColor: 'currentColor',
  color: colors.gray700,
  '@media': {
    '(prefers-color-scheme: dark)': {
      backgroundColor: colors.gray700,
      color: colors.gray300,
    },
  },
});

export const icon = style({
  flexShrink: 0,
  width: '1.25rem',
  height: '1.25rem',
});

export const content = style({
  flex: 1,
});

export const title = style({
  fontWeight: '600',
  marginBottom: '0.25rem',
});

export const message = style({
  margin: 0,
}); 