import { FC, PropsWithChildren, useRef, useState } from 'react';
import * as styles from './tooltip-2.css';

type Tooltip2Placement = 'top' | 'right' | 'bottom' | 'left';
type Tooltip2Color = keyof typeof styles.colorVariants;

export interface Tooltip2Props extends PropsWithChildren<{
  content: string;
  placement?: Tooltip2Placement;
  trigger?: 'hover' | 'click';
  arrow?: boolean;
  color?: Tooltip2Color;
  className?: string;
}> {}

export const Tooltip: FC<Tooltip2Props> = ({
  children,
  content,
  placement = 'top',
  trigger = 'hover',
  arrow = true,
  color = 'dark',
  className,
}) => {
  const [visible, setVisible] = useState(false);
  const triggerRef = useRef<HTMLSpanElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  // Positioning logic (simple, not using Popper.js)
  const getTooltipStyle = () => {
    if (!triggerRef.current || !tooltipRef.current) return {};
    const triggerRect = triggerRef.current.getBoundingClientRect();
    const tooltipRect = tooltipRef.current.getBoundingClientRect();
    const scrollY = window.scrollY || window.pageYOffset;
    const scrollX = window.scrollX || window.pageXOffset;
    let top = 0, left = 0;
    switch (placement) {
      case 'top':
        top = triggerRect.top + scrollY - tooltipRect.height - 8;
        left = triggerRect.left + scrollX + (triggerRect.width - tooltipRect.width) / 2;
        break;
      case 'bottom':
        top = triggerRect.bottom + scrollY + 8;
        left = triggerRect.left + scrollX + (triggerRect.width - tooltipRect.width) / 2;
        break;
      case 'left':
        top = triggerRect.top + scrollY + (triggerRect.height - tooltipRect.height) / 2;
        left = triggerRect.left + scrollX - tooltipRect.width - 8;
        break;
      case 'right':
        top = triggerRect.top + scrollY + (triggerRect.height - tooltipRect.height) / 2;
        left = triggerRect.right + scrollX + 8;
        break;
    }
    return { top, left, position: 'absolute' as const };
  };

  // Show/hide handlers
  const show = () => setVisible(true);
  const hide = () => setVisible(false);
  const toggle = () => setVisible(v => !v);

  // Event handlers
  const eventHandlers = trigger === 'click'
    ? { onClick: toggle }
    : { onMouseEnter: show, onMouseLeave: hide, onFocus: show, onBlur: hide };

  return (
    <span ref={triggerRef} style={{ display: 'inline-block' }} {...eventHandlers}>
      {children}
      <div
        ref={tooltipRef}
        className={[
          styles.tooltip,
          styles.colorVariants[color],
          className || '',
        ].filter(Boolean).join(' ')}
        data-visible={visible}
        style={visible ? getTooltipStyle() : {}}
        role="tooltip"
      >
        {content}
        {arrow && (
          <span className={styles.arrow} style={getArrowStyle(placement)} />
        )}
      </div>
    </span>
  );
};

function getArrowStyle(placement: Tooltip2Placement) {
  switch (placement) {
    case 'top': return { bottom: -4, left: '50%', transform: 'translateX(-50%) rotate(45deg)' };
    case 'bottom': return { top: -4, left: '50%', transform: 'translateX(-50%) rotate(45deg)' };
    case 'left': return { right: -4, top: '50%', transform: 'translateY(-50%) rotate(45deg)' };
    case 'right': return { left: -4, top: '50%', transform: 'translateY(-50%) rotate(45deg)' };
  }
} 