import { style, styleVariants } from '@vanilla-extract/css';

// Base accordion container
export const accordion = style({
  display: 'flex',
  flexDirection: 'column',
  border: '1px solid #e5e7eb',
  borderRadius: '0.5rem',
  backgroundColor: '#ffffff',
  '@media': {
    '(prefers-color-scheme: dark)': {
      borderColor: '#4b5563',
      backgroundColor: '#1f2937',
    },
  },
});

// Flush variant (no borders/background)
export const flush = style({
  border: 'none',
  backgroundColor: 'transparent',
  '@media': {
    '(prefers-color-scheme: dark)': {
      border: 'none',
      backgroundColor: 'transparent',
    },
  },
});

// Accordion panel
export const panel = style({
  borderBottom: '1px solid #e5e7eb',
  ':last-child': {
    borderBottom: 'none',
  },
  '@media': {
    '(prefers-color-scheme: dark)': {
      borderBottomColor: '#4b5563',
    },
  },
});

// Flush panel variant
export const flushPanel = style({
  borderBottom: 'none',
  ':last-child': {
    borderBottom: 'none',
  },
});

// Accordion title button
export const title = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  padding: '1rem',
  fontSize: '1rem',
  fontWeight: '500',
  textAlign: 'left',
  color: '#111827',
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
  transition: 'color 0.2s ease-in-out',
  ':hover': {
    color: '#0891b2',
  },
  ':focus': {
    outline: '2px solid #0891b2',
    outlineOffset: '2px',
  },
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: '#f9fafb',
      ':hover': {
        color: '#38bdf8',
      },
      ':focus': {
        outlineColor: '#38bdf8',
      },
    },
  },
});

// Title content wrapper
export const titleContent = style({
  display: 'flex',
  alignItems: 'center',
});

// Icon wrapper
export const iconWrapper = style({
  marginRight: '0.5rem',
  display: 'inline-flex',
  alignItems: 'center',
});

// Chevron icon
export const chevron = style({
  width: '1.25rem',
  height: '1.25rem',
  transition: 'transform 0.2s ease-in-out',
  color: '#6b7280',
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: '#9ca3af',
    },
  },
});

// Expanded chevron
export const chevronExpanded = style({
  transform: 'rotate(180deg)',
});

// Accordion content
export const content = style({
  padding: '0 1rem 1rem',
  color: '#6b7280',
  fontSize: '0.875rem',
  lineHeight: '1.5',
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: '#9ca3af',
    },
  },
});

// Content animation variants
export const contentVariants = styleVariants({
  collapsed: {
    display: 'none',
  },
  expanded: {
    display: 'block',
  },
});

// Focus ring for accessibility
export const focusRing = style({
  ':focus-visible': {
    outline: '2px solid #0891b2',
    outlineOffset: '2px',
    borderRadius: '0.25rem',
  },
  '@media': {
    '(prefers-color-scheme: dark)': {
      ':focus-visible': {
        outlineColor: '#38bdf8',
      },
    },
  },
}); 