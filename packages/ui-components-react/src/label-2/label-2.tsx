import { FC, memo, PropsWithChildren } from 'react';
import * as styles from './label-2.css';

export interface Label2Props extends PropsWithChildren<{
  htmlFor?: string;
  className?: string;
  value?: string;
  visuallyHidden?: boolean;
}> {}

export const Label: FC<Label2Props> = memo(
  ({ children, value, htmlFor, className, visuallyHidden }) => (
    <label
      htmlFor={htmlFor}
      className={[
        styles.label,
        visuallyHidden ? styles.visuallyHidden : '',
        className || ''
      ].filter(Boolean).join(' ')}
    >
      {value ?? children ?? ''}
    </label>
  )
);

Label.displayName = 'Label2'; 