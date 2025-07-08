import { FC, PropsWithChildren, useState } from 'react';
import * as styles from './banner-2.css';

export interface Banner2Props extends PropsWithChildren<{
  bottom?: boolean;
  className?: string;
  onClose?: () => void;
}> {}

export const Banner: FC<Banner2Props> = ({
  children,
  bottom = false,
  className,
  onClose,
}) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
    onClose?.();
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className={[
        styles.banner,
        styles.positionVariants[bottom ? 'bottom' : 'top'],
        className || '',
      ].filter(Boolean).join(' ')}
    >
      <div className={styles.content}>
        {children}
      </div>
      <button
        type="button"
        className={styles.closeButton}
        onClick={handleClose}
        aria-label="Close banner"
      >
        <svg
          width={16}
          height={16}
          viewBox="0 0 16 16"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L8 6.586l2.293-2.293a1 1 0 111.414 1.414L9.414 8l2.293 2.293a1 1 0 01-1.414 1.414L8 9.414l-2.293 2.293a1 1 0 01-1.414-1.414L6.586 8 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
}; 