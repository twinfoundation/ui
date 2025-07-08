import { style } from '@vanilla-extract/css';

export const container = style({
  width: '100%',
});

export const tabList = style({
  display: 'flex',
  borderBottom: '1px solid #e5e7eb',
  marginBottom: '1rem',
});

export const tab = style({
  padding: '0.75rem 1rem',
  fontSize: '0.875rem',
  fontWeight: '500',
  color: '#6b7280',
  backgroundColor: 'transparent',
  border: 'none',
  borderBottom: '2px solid transparent',
  cursor: 'pointer',
  transition: 'all 0.15s ease-in-out',
  ':hover': {
    color: '#374151',
    backgroundColor: '#f9fafb',
  },
  ':focus': {
    outline: 'none',
    color: '#374151',
  },
});

export const active = style({
  color: '#3b82f6',
  borderBottomColor: '#3b82f6',
  backgroundColor: 'transparent',
  ':hover': {
    color: '#2563eb',
    backgroundColor: 'transparent',
  },
});

export const disabled = style({
  opacity: 0.5,
  cursor: 'not-allowed',
  ':hover': {
    color: '#6b7280',
    backgroundColor: 'transparent',
  },
});

export const content = style({
  padding: '1rem 0',
});

export const panel = style({
  display: 'none',
});

export const activePanel = style({
  display: 'block',
});

export const pills = style({
  borderBottom: 'none',
  gap: '0.25rem',
});

export const pillsTab = style({
  borderRadius: '0.375rem',
  borderBottom: 'none',
  ':hover': {
    backgroundColor: '#f3f4f6',
  },
});

export const pillsActive = style({
  backgroundColor: '#3b82f6',
  color: '#ffffff',
  ':hover': {
    backgroundColor: '#2563eb',
    color: '#ffffff',
  },
});

export const underline = style({
  borderBottom: '2px solid #e5e7eb',
});

export const underlineTab = style({
  borderBottom: '2px solid transparent',
  ':hover': {
    borderBottomColor: '#d1d5db',
  },
});

export const underlineActive = style({
  borderBottomColor: '#3b82f6',
  ':hover': {
    borderBottomColor: '#3b82f6',
  },
}); 