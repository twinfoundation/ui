import { style } from '@vanilla-extract/css';
import { colors } from '../tokens/colors.css';

export const navbar = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  background: colors.white,
  padding: '0.75rem 1.5rem',
  minHeight: '3.5rem',
  position: 'relative',
  zIndex: 10,
});

export const fluid = style({ width: '100%' });
export const rounded = style({ borderRadius: '0.75rem' });

export const brand = style({
  display: 'flex',
  alignItems: 'center',
  fontWeight: 700,
  fontSize: '1.25rem',
  color: colors.gray900,
  textDecoration: 'none',
  minWidth: '180px',
});

export const collapse = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flex: 1,
  gap: '0.5rem',
});

export const link = style({
  color: colors.gray700,
  textDecoration: 'none',
  fontWeight: 500,
  fontSize: '0.875rem',
  margin: '0 0.75rem',
  padding: '0.5rem 0',
  transition: 'color 0.2s',
  ':hover': { color: colors.blue600 },
});

export const active = style({ color: colors.blue600, fontWeight: 700 });

export const right = style({
  minWidth: '48px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  position: 'relative',
});

export const profileContainer = style({
  position: 'relative',
  display: 'inline-block',
});

export const profileButton = style({
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  padding: 0,
  display: 'flex',
  alignItems: 'center',
  borderRadius: '50%',
  overflow: 'hidden',
});

export const profileThumbnail = style({
  width: '2.5rem',
  height: '2.5rem',
  borderRadius: '50%',
  objectFit: 'cover',
  display: 'block',
});

export const profileDropdown = style({
  position: 'absolute',
  top: 'calc(100% + 0.5rem)',
  right: 0,
  background: colors.white,
  borderRadius: '0.5rem',
  border: `1px solid ${colors.gray200}`,
  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  minWidth: '200px',
  zIndex: 1000,
});

export const profileHeader = style({
  padding: '0.5rem 1rem',
});

export const profileName = style({
  display: 'block',
  fontSize: '0.875rem',
  fontWeight: 600,
  color: colors.gray900,
  marginBottom: '0.25rem',
});

export const profileEmail = style({
  display: 'block',
  fontSize: '0.875rem',
  fontWeight: 500,
  color: colors.gray200,
});

export const profileDivider = style({
  border: 'none',
  borderTop: `1px solid ${colors.gray100}`,
});

export const profileLinks = style({
  padding: '0px',
});

export const profileLink = style({
  display: 'block',
  padding: '0.5rem 1rem',
  color: colors.gray700,
  textDecoration: 'none',
  fontSize: '0.875rem',
  transition: 'background-color 0.2s',
  ':hover': {
    backgroundColor: colors.gray50,
  },
});

export const toggle = style({
  display: 'inline-flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '2rem',
  height: '2rem',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  padding: 0,
  marginLeft: '1rem',
});

export const toggleBar = style({
  width: '1.5rem',
  height: '0.2rem',
  background: colors.gray700,
  borderRadius: '0.1rem',
  margin: '0.15rem 0',
  transition: 'background 0.2s',
}); 