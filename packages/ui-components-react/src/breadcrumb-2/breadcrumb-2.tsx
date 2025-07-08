import { FC } from 'react';
import * as styles from './breadcrumb-2.css';

export interface Breadcrumb2Item {
  label: string;
  href?: string;
  icon?: React.FC<{ width?: number; height?: number; className?: string }>;
}

export interface Breadcrumb2Props {
  ariaLabel?: string;
  items?: Breadcrumb2Item[];
  className?: string;
}

export const Breadcrumb: FC<Breadcrumb2Props> = ({
  ariaLabel = 'Breadcrumb',
  items = [],
  className,
}) => {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <nav aria-label={ariaLabel}>
      <ol
        className={[
          styles.breadcrumb,
          className || '',
        ].filter(Boolean).join(' ')}
      >
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          const IconComponent = item.icon;

          return (
            <li key={`breadcrumb-item-${index}`} className={styles.item}>
              {item.href && !isLast ? (
                <a href={item.href} className={styles.link}>
                  {IconComponent && (
                    <IconComponent width={16} height={16} className={styles.icon} />
                  )}
                  {item.label}
                </a>
              ) : (
                <span className={isLast ? styles.currentItem : ''}>
                  {IconComponent && (
                    <IconComponent width={16} height={16} className={styles.icon} />
                  )}
                  {item.label}
                </span>
              )}
              {!isLast && (
                <span className={styles.separator} aria-hidden="true">
                  /
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}; 