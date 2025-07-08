import { style } from '@vanilla-extract/css';

export const label = style({
  display: 'inline-block',
  fontWeight: 500,
  fontSize: '0.95em',
  color: 'inherit',
  cursor: 'pointer',
  marginBottom: 4,
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