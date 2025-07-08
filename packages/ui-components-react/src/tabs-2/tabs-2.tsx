import React, { useState } from 'react';
import * as styles from './tabs-2.css';

export interface Tab2Item {
  id: string;
  label: string;
  content: React.ReactNode;
  disabled?: boolean;
}

export interface Tabs2Props {
  items: Tab2Item[];
  variant?: 'default' | 'pills' | 'underline';
  defaultActiveTab?: string;
  className?: string;
}

export const Tabs2: React.FC<Tabs2Props> = ({
  items,
  variant = 'default',
  defaultActiveTab,
  className = '',
}) => {
  const [activeTab, setActiveTab] = useState(defaultActiveTab || items[0]?.id || '');

  const getTabListClass = () => {
    switch (variant) {
      case 'pills': return `${styles.tabList} ${styles.pills}`;
      case 'underline': return `${styles.tabList} ${styles.underline}`;
      default: return styles.tabList;
    }
  };

  const getTabClass = (item: Tab2Item) => {
    const isActive = item.id === activeTab;
    const baseClass = styles.tab;
    
    if (item.disabled) return `${baseClass} ${styles.disabled}`;
    
    switch (variant) {
      case 'pills':
        return `${baseClass} ${styles.pillsTab} ${isActive ? styles.pillsActive : ''}`;
      case 'underline':
        return `${baseClass} ${styles.underlineTab} ${isActive ? styles.underlineActive : ''}`;
      default:
        return `${baseClass} ${isActive ? styles.active : ''}`;
    }
  };

  const handleTabClick = (item: Tab2Item) => {
    if (!item.disabled) {
      setActiveTab(item.id);
    }
  };

  const activeItem = items.find(item => item.id === activeTab);

  return (
    <div className={`${styles.container} ${className}`}>
      <div className={getTabListClass()}>
        {items.map((item) => (
          <button
            key={item.id}
            className={getTabClass(item)}
            onClick={() => handleTabClick(item)}
            disabled={item.disabled}
            role="tab"
            aria-selected={item.id === activeTab}
            aria-controls={`panel-${item.id}`}
          >
            {item.label}
          </button>
        ))}
      </div>
      
      <div className={styles.content} role="tabpanel">
        {items.map((item) => (
          <div
            key={item.id}
            id={`panel-${item.id}`}
            className={`${styles.panel} ${item.id === activeTab ? styles.activePanel : ''}`}
            role="tabpanel"
            aria-labelledby={`tab-${item.id}`}
          >
            {item.content}
          </div>
        ))}
      </div>
    </div>
  );
}; 