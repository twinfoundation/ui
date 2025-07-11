import { style } from '@vanilla-extract/css';
import { colors } from '../tokens/colors.css';

export const label = style({
  display: 'inline-block',
  fontWeight: 500,
  fontSize: '0.875rem',
  color: colors.gray700,
  cursor: 'pointer',
  marginBottom: 4,
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: colors.gray300,
    },
  },
});

export const visuallyHidden = style({
  border: 0,
  clip: 'rect(0 0 0 0)',
  height: '1px',
  margin: '-1px',
  overflow: 'hidden',
  padding: 0,
  position: 'absolute',
  width: '1px',
  whiteSpace: 'nowrap',
}); 