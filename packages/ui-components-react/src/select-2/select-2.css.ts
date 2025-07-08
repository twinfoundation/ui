import { style, styleVariants } from '@vanilla-extract/css';

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
  backgroundColor: '#ffffff',
  border: '1px solid #d1d5db',
  borderRadius: '0.375rem',
  fontSize: '0.875rem',
  color: '#374151',
  cursor: 'pointer',
  transition: 'all 0.15s ease-in-out',
  outline: 'none',
  ':focus': {
    borderColor: '#3b82f6',
    boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.1)',
  },
  ':hover': {
    borderColor: '#9ca3af',
  },
});

const baseSelectIcon = style({
  width: '1rem',
  height: '1rem',
  transition: 'transform 0.15s ease-in-out',
  color: '#6b7280',
});

const baseDropdown = style({
  position: 'absolute',
  top: '100%',
  left: 0,
  right: 0,
  zIndex: 50,
  backgroundColor: '#ffffff',
  border: '1px solid #d1d5db',
  borderRadius: '0.375rem',
  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  maxHeight: '12rem',
  overflowY: 'auto',
  opacity: 0,
  visibility: 'hidden',
  transform: 'translateY(-0.5rem)',
  transition: 'all 0.15s ease-in-out',
});

const baseOption = style({
  padding: '0.5rem 0.75rem',
  fontSize: '0.875rem',
  color: '#374151',
  cursor: 'pointer',
  transition: 'all 0.15s ease-in-out',
  ':hover': {
    backgroundColor: '#f3f4f6',
  },
});

export const select = styleVariants({
  sm: [baseSelect, {
    fontSize: '0.75rem',
  }],
  md: [baseSelect, {
    fontSize: '0.875rem',
  }],
  lg: [baseSelect, {
    fontSize: '1rem',
  }],
});

export const selectButton = styleVariants({
  sm: [baseSelectButton, {
    padding: '0.375rem 0.5rem',
    fontSize: '0.75rem',
  }],
  md: [baseSelectButton, {
    padding: '0.5rem 0.75rem',
    fontSize: '0.875rem',
  }],
  lg: [baseSelectButton, {
    padding: '0.75rem 1rem',
    fontSize: '1rem',
  }],
});

export const selectIcon = styleVariants({
  sm: [baseSelectIcon, {
    width: '0.875rem',
    height: '0.875rem',
  }],
  md: [baseSelectIcon, {
    width: '1rem',
    height: '1rem',
  }],
  lg: [baseSelectIcon, {
    width: '1.125rem',
    height: '1.125rem',
  }],
});

export const dropdown = styleVariants({
  sm: [baseDropdown, {
    fontSize: '0.75rem',
  }],
  md: [baseDropdown, {
    fontSize: '0.875rem',
  }],
  lg: [baseDropdown, {
    fontSize: '1rem',
  }],
});

export const option = styleVariants({
  sm: [baseOption, {
    padding: '0.375rem 0.5rem',
    fontSize: '0.75rem',
  }],
  md: [baseOption, {
    padding: '0.5rem 0.75rem',
    fontSize: '0.875rem',
  }],
  lg: [baseOption, {
    padding: '0.75rem 1rem',
    fontSize: '1rem',
  }],
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
  backgroundColor: '#f9fafb',
});

export const disabledButton = style({
  cursor: 'not-allowed',
  backgroundColor: '#f9fafb',
  color: '#9ca3af',
  ':hover': {
    borderColor: '#d1d5db',
  },
  ':focus': {
    borderColor: '#d1d5db',
    boxShadow: 'none',
  },
});

export const error = style({
  borderColor: '#ef4444',
  ':focus': {
    borderColor: '#ef4444',
    boxShadow: '0 0 0 3px rgba(239, 68, 68, 0.1)',
  },
});

export const success = style({
  borderColor: '#10b981',
  ':focus': {
    borderColor: '#10b981',
    boxShadow: '0 0 0 3px rgba(16, 185, 129, 0.1)',
  },
});

export const warning = style({
  borderColor: '#f59e0b',
  ':focus': {
    borderColor: '#f59e0b',
    boxShadow: '0 0 0 3px rgba(245, 158, 11, 0.1)',
  },
});

export const selected = style({
  backgroundColor: '#3b82f6',
  color: '#ffffff',
  ':hover': {
    backgroundColor: '#2563eb',
  },
});

export const disabledOption = style({
  color: '#9ca3af',
  cursor: 'not-allowed',
  backgroundColor: '#f9fafb',
  ':hover': {
    backgroundColor: '#f9fafb',
  },
});

export const placeholder = style({
  color: '#9ca3af',
});

export const label = style({
  display: 'block',
  fontSize: '0.875rem',
  fontWeight: '500',
  color: '#374151',
  marginBottom: '0.5rem',
});

export const errorMessage = style({
  fontSize: '0.75rem',
  color: '#ef4444',
  marginTop: '0.25rem',
});

export const helpText = style({
  fontSize: '0.75rem',
  color: '#6b7280',
  marginTop: '0.25rem',
});

export const group = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.25rem',
}); 