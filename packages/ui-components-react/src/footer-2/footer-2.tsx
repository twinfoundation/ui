import { FC, ReactNode } from "react";
import * as styles from "./footer-2.css";
import type {
  FooterProps,
  FooterBrandProps,
  FooterCopyrightProps,
  FooterIconProps,
  FooterLinkProps,
  FooterLinkGroupProps,
  FooterTitleProps
} from "../footer/footerProps";

const Brand: FC<FooterBrandProps> = ({ alt, href, name, src }) => (
  <a href={href} className={styles.brand}>
    {src && <img src={src} alt={alt} className={styles.brandImg} />}
    {name && <span className={styles.brandName}>{name}</span>}
  </a>
);

const Copyright: FC<FooterCopyrightProps> = ({ by, href, year }) => (
  <div className={styles.copyright}>
    &copy; {year} {href ? <a href={href}>{by}</a> : by}
  </div>
);

const Divider: FC = () => <hr className={styles.divider} />;

const Icon: FC<FooterIconProps> = ({ href, icon: IconComp, className, ariaLabel }) => (
  <a href={href} className={`${styles.icon} ${className || ""}`} aria-label={ariaLabel}>
    <IconComp />
  </a>
);

const Link: FC<FooterLinkProps> = ({ href, children }) => (
  <a href={href} className={styles.link}>
    {children}
  </a>
);

const LinkGroup: FC<FooterLinkGroupProps> = ({ col, children }) => (
  <div className={col ? styles.linkGroupCol : styles.linkGroupRow}>{children}</div>
);

const Title: FC<FooterTitleProps> = ({ title }) => <span className={styles.title}>{title}</span>;

const FooterBase: FC<FooterProps> = ({ body, ...rest }) => (
  <footer className={styles.footer} {...rest}>
    {body}
  </footer>
);

export const Footer = Object.assign(FooterBase, {
  Brand,
  Copyright,
  Divider,
  Icon,
  Link,
  LinkGroup,
  Title
}); 