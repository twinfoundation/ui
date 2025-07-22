# Centralized Constants Guide

This guide explains how to use the centralized constants system in the TWIN UI Component library, which has been designed to improve maintainability, enable better tree-shaking, and reduce duplication across the codebase.

## Overview

We've refactored the UI component library to use centralized constants for common values like colors, sizes, positions, and more. To use these constants with components, it is recommended to import the component objects (e.g., `ButtonColors`, `ButtonSizes`, `AlertColors`). This approach offers several benefits:

1. **Improved Tree-Shaking**: Using component objects allows bundlers to eliminate unused code more effectively
2. **Reduced Duplication**: Common values are defined once and reused across components
3. **Better Maintainability**: Changes to constant values only need to be made in one place
4. **Type Safety**: TypeScript type definitions ensure type safety while using string constants

## Available Constants

Constants are organized by category in the `/src/constants` directory:

| File            | Description         | Examples                        |
| --------------- | ------------------- | ------------------------------- |
| `colors.ts`     | Color constants     | PRIMARY, SECONDARY, INFO, ERROR |
| `sizes.ts`      | Size constants      | SMALL, MEDIUM, LARGE            |
| `positions.ts`  | Position constants  | TOP, BOTTOM, LEFT, RIGHT        |
| `layouts.ts`    | Layout constants    | PAGINATION, NAVIGATION, TABLE   |
| `variants.ts`   | Variant constants   | DEFAULT, UNDERLINE, PILLS       |
| `animations.ts` | Animation constants | DURATION_150, DURATION_300      |
| `triggers.ts`   | Trigger constants   | HOVER, CLICK                    |

## Usage Example

To use the centralized constants with components, import the component objects (e.g., `ButtonColors`, `ButtonSizes`, `AlertColors`) and then access the desired constant as a property of the object.

```typescript
// Import component objects
import { ButtonColors, ButtonSizes, AlertColors } from "@twin.org/ui-components-react";

// Use in your component
function MyComponent() {
  return (
    <div>
      <Button color={ButtonColors.Secondary} size={ButtonSizes.Medium}>Secondary Button</Button>
      <Alert color={AlertColors.Success}>Success Alert</Alert>
    </div>
  );
}
```

## Icons Usage

For optimal tree-shaking with icons, use direct imports from our dedicated icon modules:

```typescript
// Recommended: Direct imports for better tree-shaking
import { Close } from '@twin.org/ui-components-react/icons';
```

This approach ensures that only the icons you actually use are included in your final bundle, significantly reducing bundle size.

The library no longer supports namespace imports for icons to enforce better tree-shaking practices. This aligns with our overall strategy of enabling better tree-shaking through direct imports.

## Type Definitions

Each component has updated type definitions that use the centralized constants:

```typescript
// Example of a component prop type using centralized constants
import { PRIMARY, SECONDARY, SUCCESS, ERROR, WARNING, INFO } from '../constants/colors';

// Type definition using the constants
export type ButtonColor =
  | typeof PRIMARY
  | typeof SECONDARY
  | typeof SUCCESS
  | typeof ERROR
  | typeof WARNING
  | typeof INFO;

// Component props using the type
export interface ButtonProps {
  color?: ButtonColor;
  // other props...
}
```

## Migrating Existing Code

If you're updating existing code to use the new centralized constants:

1. Use component objects (e.g., `ButtonColors`) for compatibility.

## Implementation Details for Contributors

When adding new components or modifying existing ones:

1. Use constants from the centralized files
2. Follow the naming convention (singular for types, e.g., `ButtonColor`)
3. Re-export constants for backward compatibility
4. For components with potential naming conflicts, use aliases in exports

Example of implementing a new component:

```typescript
// myComponent/myComponentColors.ts
import { PRIMARY, SECONDARY, SUCCESS } from '../constants/colors';

// Object for backward compatibility
export const MyComponentColors = {
  Primary: PRIMARY,
  Secondary: SECONDARY,
  Success: SUCCESS
} as const;

// Type definition
export type MyComponentColor = (typeof MyComponentColors)[keyof typeof MyComponentColors];

// Re-export constants for backward compatibility
export { PRIMARY, SECONDARY, SUCCESS };
```

## Benefits for Bundle Size

Using direct imports of constants can significantly reduce your final bundle size through better tree-shaking. For example:

- **Before**: Importing `ButtonColors` would include all color constants in your bundle
- **After**: Importing only `PRIMARY` includes just that one constant

This is especially beneficial for applications that use only a subset of the available components and variants.

## Further Reading

- [Tree-Shaking Best Practices](tree-shaking-best-practices.md)
- [TypeScript React Best Practices](typescript-react-best-practices.md)
- [Component Template Example](component-template-example.md)
