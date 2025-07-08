import { style } from '@vanilla-extract/css';

export const breadcrumb = style({
  display: 'flex',
  alignItems: 'center',
  listStyle: 'none',
  margin: 0,
  padding: 0,
  fontSize: '0.875rem',
  color: '#6b7280',
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
  color: '#0891b2',
  textDecoration: 'none',
  fontWeight: 500,
  transition: 'color 0.2s',
  ':hover': {
    color: '#0e7490',
    textDecoration: 'underline',
  },
  ':focus': {
    outline: '2px solid #0891b2',
    outlineOffset: 2,
    borderRadius: 4,
  },
});

export const currentItem = style({
  color: '#374151',
  fontWeight: 500,
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: '#d1d5db',
    },
  },
});

export const separator = style({
  marginLeft: 8,
  color: '#9ca3af',
  fontSize: '0.75rem',
});

export const icon = style({
  marginRight: 4,
  width: 16,
  height: 16,
}); 