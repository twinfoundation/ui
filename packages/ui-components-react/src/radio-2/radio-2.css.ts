import { style, styleVariants } from '@vanilla-extract/css';

const baseRadio = style({
  position: 'relative',
  display: 'inline-block',
  cursor: 'pointer',
  transition: 'all 0.15s ease-in-out',
  border: 'none',
  background: 'none',
  padding: 0,
});

const baseRadioInput = style({
  position: 'absolute',
  opacity: 0,
  width: 0,
  height: 0,
});

const baseRadioCircle = style({
  position: 'relative',
  display: 'inline-block',
  borderRadius: '50%',
  border: '2px solid #d1d5db',
  backgroundColor: '#ffffff',
  transition: 'all 0.15s ease-in-out',
});

const baseRadioDot = style({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%) scale(0)',
  borderRadius: '50%',
  backgroundColor: '#3b82f6',
  transition: 'all 0.15s ease-in-out',
});

export const radio = styleVariants({
  sm: [baseRadio, {
    width: '1rem',
    height: '1rem',
  }],
  md: [baseRadio, {
    width: '1.25rem',
    height: '1.25rem',
  }],
  lg: [baseRadio, {
    width: '1.5rem',
    height: '1.5rem',
  }],
});

export const radioInput = styleVariants({
  sm: [baseRadioInput, {
    width: '1rem',
    height: '1rem',
  }],
  md: [baseRadioInput, {
    width: '1.25rem',
    height: '1.25rem',
  }],
  lg: [baseRadioInput, {
    width: '1.5rem',
    height: '1.5rem',
  }],
});

export const radioCircle = styleVariants({
  sm: [baseRadioCircle, {
    width: '1rem',
    height: '1rem',
  }],
  md: [baseRadioCircle, {
    width: '1.25rem',
    height: '1.25rem',
  }],
  lg: [baseRadioCircle, {
    width: '1.5rem',
    height: '1.5rem',
  }],
});

export const radioDot = styleVariants({
  sm: [baseRadioDot, {
    width: '0.375rem',
    height: '0.375rem',
  }],
  md: [baseRadioDot, {
    width: '0.5rem',
    height: '0.5rem',
  }],
  lg: [baseRadioDot, {
    width: '0.625rem',
    height: '0.625rem',
  }],
});

export const checked = style({
  borderColor: '#3b82f6',
  backgroundColor: '#ffffff',
});

export const checkedDot = style({
  transform: 'translate(-50%, -50%) scale(1)',
});

export const disabled = style({
  opacity: 0.5,
  cursor: 'not-allowed',
});

export const disabledCircle = style({
  borderColor: '#e5e7eb',
  backgroundColor: '#f9fafb',
});

export const disabledDot = style({
  backgroundColor: '#9ca3af',
});

export const success = style({
  borderColor: '#10b981',
});

export const successDot = style({
  backgroundColor: '#10b981',
});

export const warning = style({
  borderColor: '#f59e0b',
});

export const warningDot = style({
  backgroundColor: '#f59e0b',
});

export const error = style({
  borderColor: '#ef4444',
});

export const errorDot = style({
  backgroundColor: '#ef4444',
});

export const label = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  cursor: 'pointer',
  fontSize: '0.875rem',
  color: '#374151',
  userSelect: 'none',
});

export const labelDisabled = style({
  cursor: 'not-allowed',
  opacity: 0.5,
});

export const group = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
});

export const groupHorizontal = style({
  flexDirection: 'row',
  alignItems: 'center',
});

export const groupLabel = style({
  fontSize: '0.875rem',
  fontWeight: '500',
  color: '#374151',
  marginBottom: '0.5rem',
});

export const groupDescription = style({
  fontSize: '0.75rem',
  color: '#6b7280',
  marginTop: '0.25rem',
}); 