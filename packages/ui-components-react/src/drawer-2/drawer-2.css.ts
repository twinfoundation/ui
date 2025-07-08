import { style } from '@vanilla-extract/css';

export const backdrop = style({
  position: 'fixed',
  inset: 0,
  background: 'rgba(0,0,0,0.3)',
  zIndex: 1000,
});

export const drawer = style({
  position: 'fixed',
  background: '#fff',
  boxShadow: '0 2px 16px rgba(0,0,0,0.15)',
  zIndex: 1001,
  transition: 'transform 0.3s cubic-bezier(.4,0,.2,1)',
  display: 'flex',
  flexDirection: 'column',
  minWidth: '18rem',
  maxWidth: '90vw',
  minHeight: '10rem',
  maxHeight: '100vh',
});

export const left = style({ top: 0, left: 0, height: '100vh', transform: 'translateX(0)' });
export const right = style({ top: 0, right: 0, height: '100vh', transform: 'translateX(0)' });
export const top = style({ top: 0, left: 0, width: '100vw', minHeight: '10rem', maxHeight: '50vh', transform: 'translateY(0)' });
export const bottom = style({ bottom: 0, left: 0, width: '100vw', minHeight: '10rem', maxHeight: '50vh', transform: 'translateY(0)' });

export const header = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '1rem',
  borderBottom: '1px solid #e5e7eb',
});

export const title = style({ fontWeight: 600, fontSize: '1.1rem' });
export const close = style({
  background: 'none',
  border: 'none',
  fontSize: '1.5rem',
  cursor: 'pointer',
  color: '#6b7280',
  marginLeft: '1rem',
});

export const body = style({ padding: '1rem', flex: 1, overflowY: 'auto' });
export const item = style({ marginBottom: '1rem' });

export const buttonWrapper = style({ textAlign: 'center', margin: '1rem 0' });
export const button = style({
  padding: '0.5rem 1.5rem',
  borderRadius: '0.375rem',
  border: 'none',
  fontWeight: 600,
  fontSize: '1rem',
  cursor: 'pointer',
  background: '#2563eb',
  color: '#fff',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.5rem',
});
export const buttonIcon = style({ marginRight: '0.5rem', display: 'inline-flex', alignItems: 'center' });
export const primary = style({ background: '#2563eb', color: '#fff' });
export const success = style({ background: '#22c55e', color: '#fff' });
export const warning = style({ background: '#f59e42', color: '#fff' });
export const error = style({ background: '#ef4444', color: '#fff' }); 