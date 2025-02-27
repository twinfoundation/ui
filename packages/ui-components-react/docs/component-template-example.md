<!-- cspell:ignore Cleanup -->

# Component Template Example

This document provides a complete example of a React component following our TypeScript best practices. Use this as a reference when creating new components or refactoring existing ones.

## Directory Structure

For a component named `CustomComponent`, the file structure should be:

```text
src/
└── customComponent/
    ├── customComponent.tsx        # Main component implementation
    ├── customComponentProps.ts    # Props interface definition
    ├── index.ts                   # Re-export file
    └── utils/                     # Optional folder for component-specific utilities
        └── customComponentUtils.ts
```

## Props File Example (customComponentProps.ts)

```tsx
import type { ReactNode } from 'react';

export type CustomComponentSize = 'small' | 'medium' | 'large';
export type CustomComponentVariant = 'primary' | 'secondary' | 'tertiary';

export interface CustomComponentProps {
  /**
   * The main content of the component
   */
  children: ReactNode;

  /**
   * The size of the component
   * @default 'medium'
   */
  size?: CustomComponentSize;

  /**
   * The visual style variant of the component
   * @default 'primary'
   */
  variant?: CustomComponentVariant;

  /**
   * Whether the component is disabled
   * @default false
   */
  disabled?: boolean;

  /**
   * Additional CSS class name
   */
  className?: string;

  /**
   * Callback fired when the component is clicked
   */
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}
```

## Component File Example (customComponent.tsx)

```tsx
import { memo, useCallback, useEffect, useRef, useState, type JSX } from 'react';
import type { CustomComponentProps } from './customComponentProps';

/**
 * CustomComponent provides a flexible, reusable UI element.
 *
 * @example
 * <CustomComponent size="large" variant="primary">
 *   Content goes here
 * </CustomComponent>
 */
export const CustomComponent = memo(
  ({
    children,
    size = 'medium',
    variant = 'primary',
    disabled = false,
    className = '',
    onClick
  }: CustomComponentProps): JSX.Element => {
    // State
    const [isActive, setIsActive] = useState<boolean>(false);

    // Refs
    const componentRef = useRef<HTMLDivElement>(null);

    // Effects
    useEffect(() => {
      // Example of componentDidMount equivalent
      const element = componentRef.current;

      // Setup code here

      return () => {
        // Cleanup code here (componentWillUnmount equivalent)
      };
    }, []);

    // Event handlers
    const handleClick = useCallback(
      (event: React.MouseEvent<HTMLDivElement>) => {
        if (disabled) return;

        setIsActive(true);

        // Call the provided onClick handler if it exists
        if (onClick) {
          onClick(event);
        }

        // Reset active state after a short delay
        setTimeout(() => {
          setIsActive(false);
        }, 200);
      },
      [disabled, onClick]
    );

    // Computed values with useMemo
    const componentClasses = useMemo(() => {
      const classes = [
        'custom-component',
        `custom-component--${size}`,
        `custom-component--${variant}`,
        className
      ];

      if (disabled) {
        classes.push('custom-component--disabled');
      }

      if (isActive) {
        classes.push('custom-component--active');
      }

      return classes.join(' ');
    }, [size, variant, className, disabled, isActive]);

    // Render
    return (
      <div
        ref={componentRef}
        className={componentClasses}
        onClick={handleClick}
        role="button"
        tabIndex={disabled ? -1 : 0}
        aria-disabled={disabled}
      >
        {children}
      </div>
    );
  }
);

// Set display name for debugging
CustomComponent.displayName = 'CustomComponent';
```

## Index File Example (index.ts)

```tsx
export { CustomComponent } from './customComponent';
export type {
  CustomComponentProps,
  CustomComponentSize,
  CustomComponentVariant
} from './customComponentProps';
```

## Utils File Example (utils/customComponentUtils.ts)

```tsx
/**
 * Utility function for the CustomComponent
 */
export function formatCustomComponentData(data: string): string {
  // Implementation
  return data.toUpperCase();
}

/**
 * Type guard for custom data validation
 */
export function isValidCustomData(data: unknown): data is { id: string; value: number } {
  return (
    typeof data === 'object' &&
    data !== null &&
    'id' in data &&
    'value' in data &&
    typeof (data as any).id === 'string' &&
    typeof (data as any).value === 'number'
  );
}
```

## Usage Example

```tsx
import { CustomComponent } from './customComponent';

function App() {
  return (
    <CustomComponent size="large" variant="primary" onClick={e => console.log('Clicked!', e)}>
      This is a custom component
    </CustomComponent>
  );
}
```
