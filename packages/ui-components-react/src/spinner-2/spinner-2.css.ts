import { style, keyframes } from '@vanilla-extract/css';

const spin = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
});

export const spinner = style({
  display: 'inline-block',
  verticalAlign: 'middle',
});

export const xs = style({ width: '1rem', height: '1rem' });
export const sm = style({ width: '1.5rem', height: '1.5rem' });
export const md = style({ width: '2rem', height: '2rem' });
export const lg = style({ width: '2.5rem', height: '2.5rem' });
export const xl = style({ width: '3rem', height: '3rem' });

export const primary = style({ color: '#2563eb' });
export const success = style({ color: '#22c55e' });
export const warning = style({ color: '#f59e42' });
export const error = style({ color: '#ef4444' });
export const information = style({ color: '#0ea5e9' });

export const svg = style({ width: '100%', height: '100%', display: 'block' });
export const track = style({});
export const arc = style({}); 