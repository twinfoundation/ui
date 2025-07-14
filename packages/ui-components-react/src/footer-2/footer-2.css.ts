import { style, globalStyle } from '@vanilla-extract/css';
import { colors } from '../tokens/colors.css';

export const footer = style({
  fontFamily: `ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
  padding: "1.125rem 1rem",
  width: "100%",
  maxWidth: "1280px",
  margin: "0 auto",
  '@media': {
    'screen and (min-width: 768px)': {
      padding: "1.125rem 1.25rem",
    },
  },
});

export const brand = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  textDecoration: 'none',
  color: 'inherit',
  fontWeight: 600,
  fontSize: '1.25rem',
});

export const brandImg = style({
  height: '2rem',
  width: 'auto',
});

export const brandName = style({
  fontWeight: 700,
  fontSize: '1.25rem',
});

export const copyright = style({
  fontSize: '0.875rem',
  color: colors.gray500,
});

export const link = style({
  color: colors.gray500,
  fontSize: '0.875rem',
  textDecoration: 'none',
  ':hover': {
    textDecoration: 'underline',
  },
});

export const linkGroupCol = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem',
});

export const linkGroupRow = style({
  display: 'flex',
  flexDirection: 'row',
  gap: '0.5rem',
});

export const title = style({
  marginBottom: '1.5rem', // mb-6
  fontSize: '0.875rem', // text-sm
  fontWeight: 600, // font-semibold
  textTransform: 'uppercase',
  color: colors.gray500,
});

globalStyle(`[data-theme="dark"] .${title}`, {
  color: colors.white,
});

export const topRow = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  gap: '2rem',
  flexWrap: 'wrap',
  marginBottom: '0',
  paddingBottom: '2rem',
  borderBottom: `1px solid ${colors.gray200}`,
  '@media': {
    'screen and (min-width: 768px)': {
      marginBottom: '2rem',
    },
  },
});

export const brandCol = style({
  flex: '0 0 auto',
  minWidth: '200px',
  marginBottom: '1.5rem',
});

export const linksGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, minmax(120px, 1fr))',
  gap: '3.5rem',
});

export const bottomRow = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: colors.gray100,
  margin: 0,
  gap: '1rem',
  flexWrap: 'wrap',
});

export const copyrightCol = style({
  color: colors.gray500,
  fontSize: '0.875rem',
});

export const iconsCol = style({
  display: 'flex',
  flexDirection: 'row',
  gap: '1.5rem',
}); 