import React, { useState } from "react";
import * as styles from "./navbar-2.css";
import type { NavbarProps } from "../navbar/navbarProps";

const Brand: React.FC<{ href?: string; children?: React.ReactNode }> = ({ href = "#", children }) => (
  <a href={href} className={styles.brand}>
    {children}
  </a>
);

const Link: React.FC<{ href?: string; active?: boolean; children?: React.ReactNode }> = ({ href = "#", active, children }) => (
  <a href={href} className={`${styles.link} ${active ? styles.active : ''}`.trim()} aria-current={active ? "page" : undefined}>
    {children}
  </a>
);

const Collapse: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
  <div className={styles.collapse}>{children}</div>
);

const Toggle: React.FC<{ onClick?: () => void }> = ({ onClick }) => (
  <button className={styles.toggle} onClick={onClick} aria-label="Toggle navigation">
    <span className={styles.toggleBar} />
    <span className={styles.toggleBar} />
    <span className={styles.toggleBar} />
  </button>
);

export const Navbar: React.FC<NavbarProps> & {
  Brand: typeof Brand;
  Collapse: typeof Collapse;
  Link: typeof Link;
  Toggle: typeof Toggle;
} = ({ children, fluid = false, rounded = false, className, ...props }) => {
  const [collapsed, setCollapsed] = useState(true);
  return (
    <nav
      className={[
        styles.navbar,
        fluid ? styles.fluid : '',
        rounded ? styles.rounded : '',
        className || '',
      ].filter(Boolean).join(' ')}
      {...props}
    >
      {React.Children.map(children, child => {
        if (React.isValidElement(child) && child.type === Toggle) {
          return React.cloneElement(child as React.ReactElement<{ onClick?: () => void }>, { onClick: () => setCollapsed(c => !c) });
        }
        if (React.isValidElement(child) && child.type === Collapse) {
          return collapsed ? null : child;
        }
        return child;
      })}
    </nav>
  );
};

Navbar.Brand = Brand;
Navbar.Collapse = Collapse;
Navbar.Link = Link;
Navbar.Toggle = Toggle; 