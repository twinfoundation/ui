import React, { useState, useRef, useEffect } from "react";
import * as styles from "./navbar-2.css";

// Navbar component interfaces and types
export interface NavbarBrand {
  href: string;
  src: string;
  alt: string;
  name: string;
}
export interface NavbarLink {
  href: string;
  label: string;
  active?: boolean;
}
export interface ProfileLink {
  href: string;
  label: string;
}
export interface ProfileInfo {
  thumbnail: string;
  name: string;
  email: string;
  profileLinks: ProfileLink[];
}
export type NavbarVariant = "default" | "rounded" | "fluid";

export interface NavbarProps {
  brand: NavbarBrand;
  links: NavbarLink[];
  variant?: NavbarVariant;
  profileInfo?: ProfileInfo;
}

export const Navbar: React.FC<NavbarProps> = ({ brand, links, variant = "default", profileInfo }) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);

  // Handle click outside to close profile dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setIsProfileOpen(false);
      }
    };

    // Only add event listener if profile dropdown is open
    if (isProfileOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isProfileOpen]);

  return (
    <nav
      className={[
        styles.navbar,
        variant === "fluid" ? styles.fluid : "",
        variant === "rounded" ? styles.rounded : "",
      ].filter(Boolean).join(" ")}
    >
      <a href={brand.href} className={styles.brand}>
        <img src={brand.src} alt={brand.alt} style={{ height: "2rem", width: "auto", marginRight: "0.75rem" }} />
        <span style={{ fontWeight: 700, fontSize: "1.25rem" }}>{brand.name}</span>
      </a>
      <div className={styles.collapse}>
        {links.map((link, i) => (
          <a
            key={i}
            href={link.href}
            className={link.active ? `${styles.link} ${styles.active}` : styles.link}
            aria-current={link.active ? "page" : undefined}
          >
            {link.label}
          </a>
        ))}
      </div>
      <div className={styles.right}>
        {profileInfo ? (
          <div ref={profileRef} className={styles.profileContainer}>
            <button
              className={styles.profileButton}
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              aria-label="Toggle profile menu"
            >
              <img src={profileInfo.thumbnail} alt={profileInfo.name} className={styles.profileThumbnail} />
            </button>
            {isProfileOpen && (
              <div className={styles.profileDropdown}>
                <div className={styles.profileHeader}>
                  <span className={styles.profileName}>{profileInfo.name}</span>
                  <span className={styles.profileEmail}>{profileInfo.email}</span>
                </div>
                <hr className={styles.profileDivider} />
                <div className={styles.profileLinks}>
                  {profileInfo.profileLinks.map((link, i) => (
                    <a key={i} href={link.href} className={styles.profileLink}>
                      {link.label}
                    </a>
                  ))}
                </div>
                <hr className={styles.profileDivider} />
                <a href="#" className={styles.profileLink}>Sign out</a>
              </div>
            )}
          </div>
        ) : (
          null // Fixed: replaced empty span with null to resolve TypeScript error
        )}
      </div>
    </nav>
  );
}; 