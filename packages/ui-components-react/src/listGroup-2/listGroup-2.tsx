import React from "react";
import * as styles from "./listGroup-2.css";
import type { ListGroupProps, ListGroupItem } from "../listGroup/listGroupProps";

export const ListGroup: React.FC<ListGroupProps> = ({ items, className }) => (
  <ul className={`${styles.listGroup} ${className || ""}`}>
    {items.map((item, index) => {
      const Icon = item.icon;
      const content = (
        <>
          {Icon && <span className={styles.icon}><Icon /></span>}
          <span className={styles.title}>{item.title}</span>
        </>
      );
      const liClass = [
        styles.item,
        item.active ? styles.active : '',
        item.disabled ? styles.disabled : '',
      ].filter(Boolean).join(' ');
      return (
        <li key={`${item.title}-${index}`} className={liClass}>
          {item.href && !item.disabled ? (
            <a href={item.href} className={styles.link}>{content}</a>
          ) : (
            <span className={styles.content}>{content}</span>
          )}
        </li>
      );
    })}
  </ul>
); 