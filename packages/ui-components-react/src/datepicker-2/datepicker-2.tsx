import React, { FC, useState } from "react";
import * as styles from "./datepicker-2.css";
import type { DatepickerProps, WeekDay } from "../datepicker/datepickerProps";

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number): number {
  return new Date(year, month, 1).getDay();
}

const weekDays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

export const Datepicker: FC<DatepickerProps> = ({
  weekStart = 0,
  minDate,
  maxDate,
  autoHide = true,
  title = "Select date",
  inline = false,
  localization,
  ...rest
}) => {
  const [open, setOpen] = useState(inline);
  const [selected, setSelected] = useState<Date | null>(null);
  const [view, setView] = useState(() => {
    const today = new Date();
    return { year: today.getFullYear(), month: today.getMonth() };
  });

  const daysInMonth = getDaysInMonth(view.year, view.month);
  const firstDay = getFirstDayOfMonth(view.year, view.month);
  const days: (Date | null)[] = [];
  const offset = (firstDay - weekStart + 7) % 7;
  for (let i = 0; i < offset; i++) days.push(null);
  for (let d = 1; d <= daysInMonth; d++) {
    days.push(new Date(view.year, view.month, d));
  }

  const isDisabled = (date: Date) =>
    (minDate && date < minDate) || (maxDate && date > maxDate);

  const handleSelect = (date: Date) => {
    if (isDisabled(date)) return;
    setSelected(date);
    if (autoHide && !inline) setOpen(false);
    if (rest.onChange) rest.onChange(date);
  };

  const handlePrev = () => {
    setView((v) => {
      const m = v.month - 1;
      return m < 0 ? { year: v.year - 1, month: 11 } : { year: v.year, month: m };
    });
  };
  const handleNext = () => {
    setView((v) => {
      const m = v.month + 1;
      return m > 11 ? { year: v.year + 1, month: 0 } : { year: v.year, month: m };
    });
  };

  const renderCalendar = () => (
    <div className={styles.calendar}>
      <div className={styles.header}>
        <button onClick={handlePrev} className={styles.navBtn}>&lt;</button>
        <span className={styles.monthLabel}>
          {new Date(view.year, view.month).toLocaleString(localization?.language || undefined, { month: 'long', year: 'numeric' })}
        </span>
        <button onClick={handleNext} className={styles.navBtn}>&gt;</button>
      </div>
      <div className={styles.weekdays}>
        {Array.from({ length: 7 }).map((_, i) => (
          <span key={i} className={styles.weekday}>
            {weekDays[(i + weekStart) % 7]}
          </span>
        ))}
      </div>
      <div className={styles.days}>
        {days.map((date, i) =>
          date ? (
            <button
              key={i}
              className={
                styles.day +
                (selected && date.toDateString() === selected.toDateString() ? ' ' + styles.selected : '') +
                (isDisabled(date) ? ' ' + styles.disabled : '')
              }
              onClick={() => handleSelect(date)}
              disabled={isDisabled(date)}
            >
              {date.getDate()}
            </button>
          ) : (
            <span key={i} className={styles.empty}></span>
          )
        )}
      </div>
      <div className={styles.footer}>
        <button onClick={() => setSelected(null)} className={styles.clearBtn}>
          {localization?.labelClearButton || 'Clear'}
        </button>
        <button onClick={() => setSelected(new Date())} className={styles.todayBtn}>
          {localization?.labelTodayButton || 'Today'}
        </button>
      </div>
    </div>
  );

  return (
    <div className={styles.root}>
      {!inline && (
        <button className={styles.input} onClick={() => setOpen((o) => !o)}>
          {selected ? selected.toLocaleDateString(localization?.language) : title}
        </button>
      )}
      {(open || inline) && renderCalendar()}
    </div>
  );
}; 