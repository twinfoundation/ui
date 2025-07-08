import { style } from '@vanilla-extract/css';

export const sidebar = style({
  width: '16rem',
  minHeight: '100vh',
  background: '#fff',
  borderRight: '1px solid #e5e7eb',
  display: 'flex',
  flexDirection: 'column',
  padding: '1rem 0',
});

export const header = style({
  padding: '0 1.5rem 1rem',
  fontWeight: 700,
  fontSize: '1.1rem',
});

export const logo = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',
  padding: '0 1.5rem 1rem',
  textDecoration: 'none',
  color: '#111827',
  fontWeight: 700,
  fontSize: '1.25rem',
});

export const logoImg = style({
  width: '2rem',
  height: '2rem',
  objectFit: 'contain',
});

export const logoLabel = style({
  fontWeight: 700,
  fontSize: '1.1rem',
});

export const list = style({
  listStyle: 'none',
  margin: 0,
  padding: 0,
});

export const item = style({
  display: 'flex',
  flexDirection: 'column',
  margin: 0,
  padding: 0,
});

export const itemContent = style({
  display: 'flex',
  alignItems: 'center',
  padding: '0.75rem 1.5rem',
  borderRadius: '0.375rem',
  cursor: 'pointer',
  transition: 'background 0.2s',
  ':hover': {
    background: '#f3f4f6',
  },
});

export const icon = style({
  marginRight: '0.75rem',
  display: 'inline-flex',
  alignItems: 'center',
  fontSize: '1.25rem',
});

export const label = style({
  flex: 1,
  fontSize: '1rem',
});

export const link = style({
  color: 'inherit',
  textDecoration: 'none',
  flex: 1,
  fontSize: '1rem',
});

export const badge = style({
  marginLeft: '0.5rem',
  padding: '0.125rem 0.5rem',
  borderRadius: '1rem',
  fontSize: '0.75rem',
  fontWeight: 600,
  color: '#fff',
  background: '#6b7280',
});

export const badgePrimary = style({ background: '#2563eb' });
export const badgeSuccess = style({ background: '#22c55e' });
export const badgeWarning = style({ background: '#f59e42' });
export const badgeFailure = style({ background: '#ef4444' });
export const badgeInfo = style({ background: '#0ea5e9' });
export const badgeDefault = style({ background: '#6b7280' });

export const active = style({
  background: '#f0f9ff',
  color: '#0891b2',
  fontWeight: 600,
});

export const disabled = style({
  color: '#9ca3af',
  background: '#f3f4f6',
  cursor: 'not-allowed',
});

export const subList = style({
  listStyle: 'none',
  margin: 0,
  paddingLeft: '1.5rem',
});

export const cta = style({
  margin: '1rem 1.5rem',
});

export const footer = style({
  marginTop: 'auto',
  padding: '1rem 1.5rem 0',
  borderTop: '1px solid #e5e7eb',
}); 