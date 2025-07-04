import { FC, memo, useMemo, type JSX } from "react";
import * as styles from "./button-2.css";
import type { ButtonProps } from "../button/buttonProps";

export const Button2: FC<ButtonProps> = memo(
  ({
    color = "primary",
    size = "md",
    outline = false,
    iconOnly = false,
    showButtonText = true,
    buttonText = "",
    showLeftIcon = true,
    leftIcon: LeftIcon,
    rightIcon: RightIcon,
    showRightIcon = true,
    icon: Icon,
    disabled = false,
    className = "",
    children,
    ...rest
  }) => {
    const buttonContent = useMemo(
      () => (
        <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
          {showLeftIcon && LeftIcon && (
            <span style={{ display: "flex", alignItems: "center", marginRight: "0.375rem" }}>
              <LeftIcon className={styles.iconSize[size]} />
            </span>
          )}
          {showButtonText && (buttonText || children)}
          {showRightIcon && RightIcon && (
            <span style={{ display: "flex", alignItems: "center", marginLeft: "0.375rem" }}>
              <RightIcon className={styles.iconSize[size]} />
            </span>
          )}
        </span>
      ),
      [children, LeftIcon, RightIcon, buttonText, showButtonText, showLeftIcon, showRightIcon, size]
    );

    const iconContent = useMemo(
      () =>
        Icon && (
          <span style={{ display: "flex", height: "100%", width: "100%", alignItems: "center", justifyContent: "center" }}>
            <Icon className={styles.iconSize[size]} />
          </span>
        ),
      [Icon, size]
    );

    const classes = [
      styles.base,
      iconOnly ? styles.iconOnly : styles.rounded,
      styles.size[size],
      styles.color[color],
      outline && color === "ghost" ? styles.ghostOutline : undefined,
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <button
        type="button"
        className={classes}
        disabled={disabled}
        {...rest}
      >
        {iconOnly ? iconContent : buttonContent}
      </button>
    );
  }
);

Button2.displayName = "Button2"; 