import { FC } from 'react';
import * as styles from './breadcrumb-2.css';
import { ArrowRight } from '../icons/arrowRight';
// import { Home } from '../icons/home'; // Uncomment if you have a Home icon

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
    <nav aria-label={ariaLabel} className={className} style={{ textAlign: 'left' }}>
      <ol className={styles.breadcrumb}>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          const IconComponent = item.icon;
          const showHomeIcon = index === 0; // Always show home icon for first item

          return (
            <li key={`breadcrumb-item-${index}`} className={styles.item}>
              {item.href && !isLast ? (
                <a href={item.href} className={styles.link}>
                  {/* Uncomment below if you have a Home icon */}
                  {/* {showHomeIcon ? <Home width={16} height={16} className={styles.icon} /> : null} */}
                  {showHomeIcon ? <span className={styles.homeIcon}>🏠</span> : null}
                  {IconComponent && !showHomeIcon && (
                    <IconComponent width={16} height={16} className={styles.icon} />
                  )}
                  <span>{item.label}</span>
                </a>
              ) : (
                <span className={isLast ? styles.currentItem : ''}>
                  {showHomeIcon ? <span className={styles.homeIcon}>🏠</span> : null}
                  {IconComponent && !showHomeIcon && (
                    <IconComponent width={16} height={16} className={styles.icon} />
                  )}
                  <span>{item.label}</span>
                </span>
              )}
              {!isLast && (
                <span className={styles.separator} aria-hidden="true">
                  <ArrowRight width={16} height={16} />
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}; 