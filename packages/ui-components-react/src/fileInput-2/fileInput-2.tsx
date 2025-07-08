import React from "react";
import * as styles from "./fileInput-2.css";
import type { FileInputProps } from "../fileInput/fileInputProps";
import { SMALL, MEDIUM, LARGE } from "../constants/sizes";

const sizeMap = {
  [SMALL]: styles.sm,
  [MEDIUM]: styles.md,
  [LARGE]: styles.lg,
};

export const FileInput: React.FC<FileInputProps> = ({
  sizing = MEDIUM,
  disabled = false,
  required = false,
  id,
  name,
  helperText,
  className,
  ...rest
}) => (
  <div className={styles.wrapper}>
    <input
      type="file"
      className={[
        styles.input,
        sizeMap[sizing],
        className || "",
      ].filter(Boolean).join(" ")}
      disabled={disabled}
      required={required}
      id={id}
      name={name}
      {...rest}
    />
    {helperText && <div className={styles.helperText}>{helperText}</div>}
  </div>
); 