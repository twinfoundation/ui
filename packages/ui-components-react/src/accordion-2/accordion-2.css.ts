import { style, styleVariants } from '@vanilla-extract/css';

// Base accordion container
export const accordion = style({
  display: 'flex',
  flexDirection: 'column',
  border: '1px solid #e5e7eb',
  borderRadius: '0.5rem',
  backgroundColor: '#f9fafb',
  overflow: 'hidden',
  boxShadow: 'none',
});

// Flush variant (no borders/background)
export const flush = style({
  border: 'none',
  backgroundColor: 'transparent',
  boxShadow: 'none',
});

// Accordion panel
export const panel = style({
  borderBottom: '1px solid #e5e7eb',
  background: '#f9fafb',
  ':last-child': {
    borderBottom: 'none',
  },
  paddingTop: '0.25rem',
  paddingBottom: '0.25rem',
});

// Flush panel variant
export const flushPanel = style({
  borderBottom: 'none',
  background: 'none',
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
  padding: '1.25rem 1.5rem',
  fontSize: '1rem',
  fontWeight: 500,
  textAlign: 'left',
  color: '#374151',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  transition: 'color 0.2s',
  outline: 'none',
  ':hover': {
    color: '#2563eb',
    background: '#f3f4f6',
  },
  ':focus': {
    outline: '2px solid #2563eb',
    outlineOffset: '2px',
    background: '#f3f4f6',
  },
});

// Title content wrapper
export const titleContent = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
});

// Icon wrapper
export const iconWrapper = style({
  marginRight: '0.5rem',
  display: 'inline-flex',
  alignItems: 'center',
  fontSize: '1.25rem',
  height: '1.25rem',
  width: '1.25rem',
});

// Chevron icon
export const chevron = style({
  width: '1.25rem',
  height: '1.25rem',
  marginLeft: '0.5rem',
  transition: 'transform 0.2s',
  color: '#6b7280',
  flexShrink: 0,
});

// Expanded chevron
export const chevronExpanded = style({
  transform: 'rotate(180deg)',
});

// Accordion content
export const content = style({
  padding: '0 1.5rem 1.25rem',
  color: '#374151',
  fontSize: '1rem',
  lineHeight: 1.6,
  background: '#f9fafb',
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
    outline: '2px solid #2563eb',
    outlineOffset: '2px',
    borderRadius: '0.25rem',
  },
}); 