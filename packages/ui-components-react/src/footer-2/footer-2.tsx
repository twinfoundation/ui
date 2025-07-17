import { FC } from "react";
import * as styles from "./footer-2.css";

// Types for new props
export interface FooterBrandData {
  href: string;
  src: string;
  alt: string;
  name: string;
}
export interface FooterLinkData {
  href: string;
  label: string;
}
export interface FooterColumnData {
  title: string;
  links: FooterLinkData[];
}
export interface FooterIconLinkData {
  href: string;
  icon: FC<React.SVGProps<SVGSVGElement>>;
  ariaLabel?: string;
}
export interface FooterProps {
  brand: FooterBrandData;
  columns: FooterColumnData[];
  iconLinks?: FooterIconLinkData[];
  copyright?: string;
}

export const Footer: FC<FooterProps> = ({ brand, columns, iconLinks, copyright }) => (
  <footer className={styles.footer}>
    <div className={styles.topRow}>
      <div className={styles.brandCol}>
        <a href={brand.href} className={styles.brand}>
          <img src={brand.src} alt={brand.alt} className={styles.brandImg} />
          <span className={styles.brandName}>{brand.name}</span>
        </a>
      </div>
      <div className={styles.linksGrid}>
        {columns.map((col, i) => (
          <div key={i}>
            <h2 className={styles.title}>{col.title}</h2>
            <div className={styles.linkGroupCol}>
              {col.links.map((link, j) => (
                <a key={j} href={link.href} className={styles.link}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
    {(copyright || (iconLinks && iconLinks.length > 0)) && (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span className={styles.copyright}>{copyright}</span>
        {iconLinks && iconLinks.length > 0 && (
          <div className={styles.iconsCol}>
            {iconLinks.map((icon, i) => (
              <a key={i} href={icon.href} aria-label={icon.ariaLabel}>
                <icon.icon />
              </a>
            ))}
          </div>
        )}
      </div>
    )}
  </footer>
); 