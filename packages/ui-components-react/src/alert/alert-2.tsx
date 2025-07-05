import { FC, ReactNode } from 'react';
import * as styles from './alert-2.css';

export type Alert2Props = {
  color?: keyof typeof styles.color;
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
};

export const Alert2: FC<Alert2Props> = ({ color = 'info', children, icon, className = '' }) => (
  <div className={[styles.base, styles.color[color], className].filter(Boolean).join(' ')}>
    {icon && <span className={styles.icon}>{icon}</span>}
    <span>{children}</span>
  </div>
); 