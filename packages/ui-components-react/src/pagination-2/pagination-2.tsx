import { FC, useMemo } from 'react';
import * as styles from './pagination-2.css';

export type Pagination2Layout = 'pagination' | 'navigation' | 'table';

export interface Pagination2Props {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  layout?: Pagination2Layout;
  showIcons?: boolean;
  previousLabel?: string;
  nextLabel?: string;
  className?: string;
}

export const Pagination: FC<Pagination2Props> = ({
  currentPage,
  totalPages,
  onPageChange,
  layout = 'pagination',
  showIcons = false,
  previousLabel = 'Previous',
  nextLabel = 'Next',
  className,
}) => {
  const getVisiblePages = useMemo(() => {
    const delta = 2; // Number of pages to show on each side of current page
    const range = [];
    const rangeWithDots = [];

    for (let i = Math.max(2, currentPage - delta); i <= Math.min(totalPages - 1, currentPage + delta); i++) {
      range.push(i);
    }

    if (currentPage - delta > 2) {
      rangeWithDots.push(1, '...');
    } else {
      rangeWithDots.push(1);
    }

    rangeWithDots.push(...range);

    if (currentPage + delta < totalPages - 1) {
      rangeWithDots.push('...', totalPages);
    } else {
      rangeWithDots.push(totalPages);
    }

    return rangeWithDots;
  }, [currentPage, totalPages]);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      onPageChange(page);
    }
  };

  const isPreviousDisabled = currentPage <= 1;
  const isNextDisabled = currentPage >= totalPages;

  return (
    <nav
      className={[
        styles.pagination,
        layout === 'navigation' ? styles.navigation : '',
        layout === 'table' ? styles.table : '',
        className || '',
      ].filter(Boolean).join(' ')}
      aria-label="Pagination"
    >
      {/* Previous Button */}
      <button
        type="button"
        className={`${styles.previousButton} ${styles.focusRing}`}
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={isPreviousDisabled}
        aria-label="Go to previous page"
      >
        <div className={styles.buttonContent}>
          {showIcons && (
            <svg
              className={`${styles.icon} ${styles.previousIcon}`}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          )}
          {previousLabel}
        </div>
      </button>

      {/* Page Numbers */}
      {getVisiblePages.map((page, index) => {
        if (page === '...') {
          return (
            <span key={`ellipsis-${index}`} className={styles.ellipsis}>
              ...
            </span>
          );
        }

        const pageNumber = page as number;
        const isActive = pageNumber === currentPage;

        return (
          <button
            key={`page-${pageNumber}`}
            type="button"
            className={`${isActive ? styles.activePageButton : styles.pageButton} ${styles.focusRing}`}
            onClick={() => handlePageChange(pageNumber)}
            aria-label={`Go to page ${pageNumber}`}
            aria-current={isActive ? 'page' : undefined}
          >
            {pageNumber}
          </button>
        );
      })}

      {/* Next Button */}
      <button
        type="button"
        className={`${styles.nextButton} ${styles.focusRing}`}
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={isNextDisabled}
        aria-label="Go to next page"
      >
        <div className={styles.buttonContent}>
          {nextLabel}
          {showIcons && (
            <svg
              className={styles.icon}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </div>
      </button>
    </nav>
  );
}; 