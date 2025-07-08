import { FC, useState, useMemo } from 'react';
import * as styles from './accordion-2.css';

export interface Accordion2Item {
  title?: React.ReactNode;
  content?: React.ReactNode;
  icon?: React.FC<{ width?: number; height?: number; className?: string }>;
}

export interface Accordion2Props {
  items?: Accordion2Item[];
  alwaysOpen?: boolean;
  flush?: boolean;
  collapseAll?: boolean;
  className?: string;
}

export const Accordion: FC<Accordion2Props> = ({
  items = [],
  alwaysOpen = false,
  flush = false,
  collapseAll = false,
  className,
}) => {
  const [openPanels, setOpenPanels] = useState<Set<number>>(
    collapseAll ? new Set() : new Set([0])
  );

  const togglePanel = (index: number) => {
    setOpenPanels(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        if (!alwaysOpen) {
          newSet.clear();
        }
        newSet.add(index);
      }
      return newSet;
    });
  };

  const accordionPanels = useMemo(() => {
    if (!items?.length) {
      return null;
    }

    return items.map((item, index) => {
      const isOpen = openPanels.has(index);
      const IconComponent = item.icon;

      return (
        <div
          key={`accordion-panel-${index}`}
          className={flush ? styles.flushPanel : styles.panel}
        >
          <button
            type="button"
            className={`${styles.title} ${styles.focusRing}`}
            onClick={() => togglePanel(index)}
            aria-expanded={isOpen}
            aria-controls={`accordion-content-${index}`}
          >
            <div className={styles.titleContent}>
              {IconComponent && (
                <span className={styles.iconWrapper}>
                  <IconComponent width={20} height={20} />
                </span>
              )}
              {item.title}
            </div>
            <svg
              className={`${styles.chevron} ${isOpen ? styles.chevronExpanded : ''}`}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <div
            id={`accordion-content-${index}`}
            className={`${styles.content} ${styles.contentVariants[isOpen ? 'expanded' : 'collapsed']}`}
            role="region"
            aria-labelledby={`accordion-title-${index}`}
          >
            {item.content}
          </div>
        </div>
      );
    });
  }, [items, openPanels, alwaysOpen, flush]);

  return (
    <div
      className={[
        styles.accordion,
        flush ? styles.flush : '',
        className || '',
      ].filter(Boolean).join(' ')}
    >
      {accordionPanels ?? <></>}
    </div>
  );
}; 