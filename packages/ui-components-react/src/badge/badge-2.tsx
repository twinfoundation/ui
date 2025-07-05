import { FC, ReactNode } from 'react';
import * as styles from './badge-2.css';

export type Badge2Props = {
  color?: keyof typeof styles.color;
  children: ReactNode;
  className?: string;
};

export const Badge2: FC<Badge2Props> = ({ color = 'primary', children, className = '' }) => (
  <span className={[styles.base, styles.color[color], className].filter(Boolean).join(' ')}>
    {children}
  </span>
); 