import React, { useState, useCallback, useEffect } from "react";
import * as styles from "./drawer-2.css";
import type { DrawerProps } from "../drawer/drawerProps";
import { LEFT, RIGHT, TOP, BOTTOM } from "../constants/positions";

const positionMap = {
  [LEFT]: styles.left,
  [RIGHT]: styles.right,
  [TOP]: styles.top,
  [BOTTOM]: styles.bottom,
};

export const Drawer: React.FC<DrawerProps> = ({
  title,
  items = [],
  buttonText = "Show drawer",
  buttonColor = "primary",
  showButton = true,
  defaultOpen = false,
  buttonProps,
  buttonIcon,
  onOpenChange,
  position = RIGHT,
  backdrop = true,
  className,
  ...rest
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const handleOpenChange = useCallback((open: boolean) => {
    setIsOpen(open);
    onOpenChange?.(open);
  }, [onOpenChange]);

  const handleOpen = useCallback(() => handleOpenChange(true), [handleOpenChange]);
  const handleClose = useCallback(() => handleOpenChange(false), [handleOpenChange]);

  useEffect(() => {
    if (rest.open !== undefined && rest.open !== isOpen) {
      setIsOpen(rest.open);
    }
  }, [rest.open, isOpen]);

  return (
    <>
      {showButton && (
        <div className={styles.buttonWrapper}>
          <button
            type="button"
            className={`${styles.button} ${styles[buttonColor]}`}
            onClick={handleOpen}
            {...buttonProps}
          >
            {buttonIcon && <span className={styles.buttonIcon}>{React.createElement(buttonIcon)}</span>}
            {buttonText}
          </button>
        </div>
      )}
      {isOpen && (
        <>
          {backdrop && <div className={styles.backdrop} onClick={handleClose} />}
          <aside className={`${styles.drawer} ${positionMap[position]} ${className || ""}`} {...rest}>
            <div className={styles.header}>
              <span className={styles.title}>{title}</span>
              <button className={styles.close} onClick={handleClose} aria-label="Close drawer">×</button>
            </div>
            <div className={styles.body}>
              {items.map((item, idx) => (
                <div key={idx} className={styles.item}>{item}</div>
              ))}
            </div>
          </aside>
        </>
      )}
    </>
  );
}; 