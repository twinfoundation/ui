import React, { FC, useState, useCallback, useEffect } from "react";
import * as styles from "./carousel-2.css";
import type { CarouselProps } from "../carousel/carouselProps";

export const Carousel: FC<CarouselProps> = ({
  items = [],
  className,
  slide = true,
  slideInterval = 3000,
  leftControl,
  rightControl,
  indicators = true,
  pauseOnHover = false,
  onSlideChange,
  ...rest
}) => {
  const [current, setCurrent] = useState(0);
  const total = items.length;

  const goTo = useCallback((idx: number) => {
    setCurrent(idx);
    onSlideChange?.(idx);
  }, [onSlideChange]);

  const next = useCallback(() => goTo((current + 1) % total), [current, total, goTo]);
  const prev = useCallback(() => goTo((current - 1 + total) % total), [current, total, goTo]);

  // Auto-slide
  useEffect(() => {
    if (!slide || total <= 1) return;
    let timer: number | undefined;
    if (!pauseOnHover) {
      timer = window.setTimeout(next, slideInterval);
    }
    return () => {
      if (timer !== undefined) clearTimeout(timer);
    };
  }, [current, slide, slideInterval, total, pauseOnHover, next]);

  if (!items.length) return null;

  return (
    <div className={`${styles.carousel} ${className || ""}`} {...rest}>
      <div className={styles.slideWrapper}>
        {items.map((item, idx) => (
          <div
            key={idx}
            className={
              idx === current
                ? styles.slideActive
                : styles.slide
            }
            style={{ display: idx === current ? 'flex' : 'none' }}
          >
            {item}
          </div>
        ))}
        {leftControl || (
          <button className={styles.controlLeft} onClick={prev} aria-label="Previous slide">&#8592;</button>
        )}
        {rightControl || (
          <button className={styles.controlRight} onClick={next} aria-label="Next slide">&#8594;</button>
        )}
      </div>
      {indicators && (
        <div className={styles.indicators}>
          {items.map((_, idx) => (
            <button
              key={idx}
              className={idx === current ? styles.indicatorActive : styles.indicator}
              onClick={() => goTo(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}; 