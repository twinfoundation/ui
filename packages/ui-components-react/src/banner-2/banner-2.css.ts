import { style, styleVariants } from '@vanilla-extract/css';

export const banner = style({
  position: 'fixed',
  left: 0,
  zIndex: 50,
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
  padding: 16,
  backgroundColor: '#f9fafb',
  borderColor: '#e5e7eb',
  borderStyle: 'solid',
  borderWidth: 0,
  borderBottomWidth: 1,
  '@media': {
    '(prefers-color-scheme: dark)': {
      backgroundColor: '#374151',
      borderColor: '#4b5563',
    },
  },
});

export const positionVariants = styleVariants({
  top: {
    top: 0,
    borderBottomWidth: 1,
  },
  bottom: {
    bottom: 0,
    borderTopWidth: 1,
  },
});

export const closeButton = style({
  border: 0,
  backgroundColor: 'transparent',
  color: '#6b7280',
  cursor: 'pointer',
  padding: 4,
  borderRadius: 4,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'background-color 0.2s',
  ':hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
  },
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: '#9ca3af',
      ':hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
      },
    },
  },
});

export const content = style({
  margin: '0 auto',
  display: 'flex',
  alignItems: 'center',
}); 