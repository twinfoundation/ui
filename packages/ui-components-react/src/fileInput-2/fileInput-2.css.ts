import { style } from '@vanilla-extract/css';

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
});

export const input = style({
  display: 'block',
  width: '100%',
  padding: '0.5rem 1rem',
  border: '1px solid #d1d5db',
  borderRadius: '0.375rem',
  background: '#fff',
  color: '#374151',
  fontSize: '1rem',
  transition: 'border-color 0.2s',
  ':focus': {
    borderColor: '#2563eb',
    outline: 'none',
  },
  '::file-selector-button': {
    background: '#f3f4f6',
    border: 'none',
    borderRadius: '0.375rem',
    padding: '0.5rem 1rem',
    color: '#374151',
    fontWeight: 500,
    cursor: 'pointer',
    marginRight: '1rem',
  },
});

export const sm = style({ fontSize: '0.875rem', padding: '0.25rem 0.75rem' });
export const md = style({ fontSize: '1rem', padding: '0.5rem 1rem' });
export const lg = style({ fontSize: '1.125rem', padding: '0.75rem 1.25rem' });

export const helperText = style({
  color: '#6b7280',
  fontSize: '0.875rem',
}); 