<!-- cspell:ignore Cleanup -->

# TypeScript React Best Practices

This document outlines the agreed-upon best practices for TypeScript React components in the TWIN UI Components React package. Following these guidelines ensures consistency across the codebase and promotes maintainable, type-safe code.

## Table of Contents

- [Component Definition](#component-definition)
- [Props Typing](#props-typing)
- [State Management](#state-management)
- [Lifecycle Methods Conversion](#lifecycle-methods-conversion)
- [Event Handlers](#event-handlers)
- [Performance Optimization](#performance-optimization)
- [Refs](#refs)
- [Context](#context)
- [Custom Hooks](#custom-hooks)
- [React's Rules of Hooks](#reacts-rules-of-hooks)
- [Security Best Practices](#security-best-practices)
- [Type Assertions](#type-assertions)
- [Default Props](#default-props)
- [Type vs. Interface](#type-vs-interface)
- [Type Imports and Exports](#type-imports-and-exports)
- [Component Structure Template](#component-structure-template)

## Component Definition

- Define components as regular functions, not using FC/FunctionComponent type:

```tsx
export const MyComponent = ({ prop1, prop2 }: MyComponentProps): JSX.Element => {
  // Component logic
  return (
    // JSX
  );
};
```

- Always include explicit return type (JSX.Element) for component functions
- For forwardRef components, include explicit types for both props and ref:

```tsx
export const MyComponent = memo(
  forwardRef<HTMLDivElement, MyComponentProps>(
    ({ prop1, prop2 }: MyComponentProps, ref): JSX.Element => {
      // Component logic
      return (
        // JSX
      );
    }
  )
);
```

## Props Typing

- Define props in a separate interface file (e.g., `componentNameProps.ts`)
- Use explicit ReactNode for children instead of PropsWithChildren
- Use descriptive, specific types (avoid any/unknown)
- Make optional props explicit with ? notation

```tsx
// In tooltipProps.ts
interface TooltipProps {
  content: string;
  position?: 'top' | 'right' | 'bottom' | 'left';
  children?: ReactNode;
  onOpen?: () => void;
}
```

## State Management

- Replace class component state with useState hooks
- Group related state in objects when appropriate

```tsx
const [isLoading, setIsLoading] = useState<boolean>(false);
const [data, setData] = useState<DataType | null>(null);
```

## Lifecycle Methods Conversion

- componentDidMount → useEffect with empty dependency array
- componentDidUpdate → useEffect with dependencies
- componentWillUnmount → useEffect return function

```tsx
useEffect(() => {
  // componentDidMount logic

  return () => {
    // componentWillUnmount logic
  };
}, []);
```

## Event Handlers

- Use useCallback for event handlers to prevent unnecessary re-renders
- Type event parameters explicitly

```tsx
const handleClick = useCallback(
  (event: React.MouseEvent<HTMLButtonElement>) => {
    // Handler logic
  },
  [dependencies]
);
```

## Performance Optimization

- Wrap component with memo for shallow prop comparison
- Use useMemo for expensive computations
- Properly manage dependencies in useCallback and useMemo

```tsx
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);

export const MyComponent = memo(({ props }: Props): JSX.Element => {
  // Component logic
});
```

## Refs

- Use useRef with proper typing

```tsx
const inputRef = useRef<HTMLInputElement>(null);
```

## Context

- Use useContext for consuming context

```tsx
const themeContext = useContext<Theme>(ThemeContext);
```

## Custom Hooks

- Extract reusable logic into custom hooks
- Name custom hooks with 'use' prefix
- Return properly typed values

```tsx
function useCustomHook<T>(param: T): [T, (newValue: T) => void] {
  // Hook logic
}
```

## React's Rules of Hooks

Always follow React's Rules of Hooks to ensure components work correctly:

- Only call hooks at the top level of your component or custom hooks
- Never call hooks inside loops, conditions, or nested functions
- Never call hooks inside callback functions (like useCallback or event handlers)
- Always use the same order of hook calls between renders

```tsx
// ❌ INCORRECT: Calling a hook inside another hook
const handleEvent = useCallback(() => {
  const value = useMemo(() => computeValue(), []); // This will cause errors!
  // ...
}, []);

// ✅ CORRECT: Move the hook to the component level
const value = useMemo(() => computeValue(), []);
const handleEvent = useCallback(() => {
  // Use the pre-computed value here
  // ...
}, [value]);
```

### ESLint Enforcement

The project uses ESLint with the `react-hooks/rules-of-hooks` rule (set to "error") to automatically catch violations of React's Rules of Hooks. This helps prevent runtime errors by identifying hook usage issues during development.

The `react-hooks/exhaustive-deps` rule (set to "warn") is also enabled to help identify missing dependencies in hooks like `useEffect` and `useCallback`.

To run the linter and check for hook-related issues:

```bash
npm run lint
```

To automatically fix issues where possible:

```bash
npm run lint:fix
```

## Security Best Practices

- Avoid dangerouslySetInnerHTML unless content is sanitized
- Use TypeScript's strict mode
- Validate all external data with proper type guards

```tsx
// Only if necessary and with sanitization
const sanitizedHtml = sanitizeHtml(content);
<div dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />;
```

## Type Assertions

- Minimize use of type assertions (as)
- Use type guards instead when possible

```tsx
// Prefer this
function isUser(obj: unknown): obj is User {
  return obj !== null && typeof obj === 'object' && 'id' in obj;
}

// Over this
const user = data as User;
```

## Default Props

- Use default parameter values instead of defaultProps

```tsx
export const MyComponent = ({ prop1 = 'default', prop2 = 0 }: MyComponentProps): JSX.Element => {
  // Component logic
};
```

## Type vs. Interface

- Use `interface` for object shapes that may be extended, public API contracts, React component props
- Use `type` for unions, intersections, complex types, tuples, and types that won't be extended

## Type Imports and Exports

- Use explicit `type` imports: `import type { ReactNode } from 'react';`
- Export types that might be reused elsewhere

## Component Structure Template

For consistency, follow this component structure template:

```tsx
import { memo, useCallback, useEffect, useMemo, useRef, useState, type JSX } from 'react';

// Import props interface from separate file
import type { ComponentProps } from './componentProps';

/**
 * Component description
 */
export const ComponentName = memo(({ prop1, prop2, onEvent }: ComponentProps): JSX.Element => {
  // State hooks
  const [stateVar, setStateVar] = useState<StateType | null>(null);

  // Refs
  const refVar = useRef<RefType | null>(null);

  // Effects
  useEffect(() => {
    // Setup code

    return () => {
      // Cleanup code
    };
  }, []);

  // Event handlers
  const handleEvent = useCallback(
    (event: EventType) => {
      // Handler logic
      if (onEvent) {
        onEvent(someValue);
      }
    },
    [onEvent]
  );

  // Memoized calculations
  const computedValue = useMemo(() => {
    // Computation
    return result;
  }, [dependencies]);

  // Render JSX
  return <div>{/* Component JSX */}</div>;
});

// Set display name for debugging
ComponentName.displayName = 'ComponentName';
```

## Class to Functional Component Conversion

When converting class components to functional components, follow this checklist:

1. **Props**:

   - Define a clear interface for props
   - Use specific types, not any/unknown
   - Make optional props explicit with ?

2. **State**:

   - Convert this.state to useState hooks
   - Split complex state into multiple useState calls or use useReducer
   - Initialize state with proper types

3. **Lifecycle Methods**:

   - componentDidMount → useEffect with empty dependency array
   - componentDidUpdate → useEffect with dependencies
   - componentWillUnmount → useEffect return function
   - getDerivedStateFromProps → useEffect with prop dependencies
   - getSnapshotBeforeUpdate → useLayoutEffect (rare cases)

4. **Instance Variables**:

   - Convert to useRef hooks with proper typing
   - Access via .current property

5. **Event Handlers**:

   - Wrap with useCallback to prevent unnecessary re-renders
   - Include dependencies in dependency array
   - Type event parameters explicitly

6. **Performance Optimization**:

   - Wrap component with memo for shallow prop comparison
   - Use useMemo for expensive computations
   - Properly manage dependencies in useCallback and useMemo

7. **Context**:

   - Replace this.context with useContext hook
   - Type context properly

8. **Security**:

   - Sanitize any HTML content before using dangerouslySetInnerHTML
   - Validate external data with type guards
   - Use TypeScript's strict mode

9. **Cleanup**:

   - Remove all class-specific code (this, bind, constructor)
   - Set displayName for debugging
   - Ensure no PropTypes are used

10. **Return Types**:
    - Always include explicit return type (JSX.Element) for component functions
    - Import JSX type with `import { type JSX } from 'react'` or `import { memo, useMemo, type JSX } from 'react'`

## Real-World Example

Here's a real-world example from our codebase showing these best practices in action:

```tsx
// tooltipProps.ts
export interface TooltipProps {
  content: string | ReactNode;
  children: ReactNode;
  placement?: TooltipPlacement;
  animation?: TooltipAnimation;
  style?: TooltipStyle;
  trigger?: TooltipTrigger;
  arrow?: boolean;
  className?: string;
  onOpen?: () => void;
  onClose?: () => void;
}

// tooltip.tsx
import { memo, useCallback, useEffect, useRef, useState, type JSX } from 'react';
import type { TooltipProps } from './tooltipProps';

export const Tooltip = memo(
  ({
    content,
    children,
    placement = 'top',
    animation = 'fade',
    style = 'dark',
    trigger = 'hover',
    arrow = true,
    className,
    onOpen,
    onClose
  }: TooltipProps): JSX.Element => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const tooltipRef = useRef<HTMLDivElement>(null);

    const handleOpen = useCallback(() => {
      setIsVisible(true);
      if (onOpen) {
        onOpen();
      }
    }, [onOpen]);

    const handleClose = useCallback(() => {
      setIsVisible(false);
      if (onClose) {
        onClose();
      }
    }, [onClose]);

    // Event handlers based on trigger type
    useEffect(() => {
      const tooltipElement = tooltipRef.current;
      if (!tooltipElement) return;

      // Add event listeners based on trigger type

      return () => {
        // Clean up event listeners
      };
    }, [trigger, handleOpen, handleClose]);

    return (
      <div className={`tooltip-wrapper ${className || ''}`} ref={tooltipRef}>
        {children}
        {isVisible && (
          <div
            className={`tooltip tooltip-${style} tooltip-${placement} animation-${animation} ${arrow ? 'tooltip-arrow' : ''}`}
          >
            {content}
          </div>
        )}
      </div>
    );
  }
);

Tooltip.displayName = 'Tooltip';
```
