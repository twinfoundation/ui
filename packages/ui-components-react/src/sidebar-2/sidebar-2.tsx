import React from "react";
import * as styles from "./sidebar-2.css";
import type { SidebarProps, SidebarItem, SidebarIconType, BadgeColor } from "../sidebar/sidebarProps";
import { PRIMARY, SUCCESS, WARNING, FAILURE, INFO } from "../constants/colors";

const getBadgeColorClass = (color?: BadgeColor): string => {
  switch (color) {
    case PRIMARY:
      return styles.badgePrimary;
    case SUCCESS:
      return styles.badgeSuccess;
    case WARNING:
      return styles.badgeWarning;
    case FAILURE:
      return styles.badgeFailure;
    case INFO:
      return styles.badgeInfo;
    default:
      return styles.badgeDefault;
  }
};

const SidebarItemComponent: React.FC<{ item: SidebarItem }> = ({ item }) => {
  const Icon = item.icon;
  const hasChildren = item.items && item.items.length > 0;
  return (
    <li className={[
      styles.item,
      item.active ? styles.active : '',
      item.disabled ? styles.disabled : '',
    ].filter(Boolean).join(' ')}>
      <div className={styles.itemContent}>
        {Icon && <span className={styles.icon}><Icon /></span>}
        {item.href && !item.disabled ? (
          <a href={item.href} className={styles.link}>{item.label}</a>
        ) : (
          <span className={styles.label}>{item.label}</span>
        )}
        {item.badge && (
          <span className={`${styles.badge} ${getBadgeColorClass(item.badgeColor)}`}>{item.badge}</span>
        )}
      </div>
      {hasChildren && (
        <ul className={styles.subList}>
          {item.items!.map((sub, idx) => (
            <SidebarItemComponent key={idx} item={sub} />
          ))}
        </ul>
      )}
    </li>
  );
};

export const Sidebar: React.FC<SidebarProps> = ({
  logo,
  items = [],
  CTA,
  ariaLabel,
  children,
  footerContent,
  footerItems = [],
  header,
  className,
}) => (
  <nav className={`${styles.sidebar} ${className || ""}`} aria-label={ariaLabel || "Navigation sidebar"}>
    {header && <div className={styles.header}>{header}</div>}
    {logo && (
      <a href={logo.href || "#"} className={styles.logo}>
        <img src={logo.img} alt={logo.imgAlt || "Logo"} className={styles.logoImg} />
        <span className={styles.logoLabel}>{logo.label}</span>
      </a>
    )}
    <ul className={styles.list}>
      {items.map((item, idx) => <SidebarItemComponent key={idx} item={item} />)}
    </ul>
    {CTA && <div className={styles.cta}>{CTA}</div>}
    {children}
    {(footerContent || footerItems.length > 0) && (
      <div className={styles.footer}>
        {footerContent}
        {footerItems.length > 0 && (
          <ul className={styles.list}>
            {footerItems.map((item, idx) => <SidebarItemComponent key={idx} item={item} />)}
          </ul>
        )}
      </div>
    )}
  </nav>
); 