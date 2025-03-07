# UI Component Constants

This directory contains centralized constants used across the UI component library. These constants are designed to improve maintainability, enable tree-shaking, and reduce duplication across the codebase.

## Available Constants

The constants are organized into the following files:

- `positions.ts`: Position constants (TOP, BOTTOM, LEFT, RIGHT, etc.)
- `colors.ts`: Color constants (PRIMARY, SECONDARY, INFO, ERROR, etc.)
- `sizes.ts`: Size constants (SMALL, MEDIUM, LARGE, etc.)
- `layouts.ts`: Layout constants (PAGINATION, NAVIGATION, TABLE)
- `variants.ts`: Variant constants (DEFAULT, UNDERLINE, PILLS, etc.)
- `animations.ts`: Animation constants (DURATION_150, DURATION_300, etc.)
- `triggers.ts`: Trigger constants (HOVER, CLICK)

## Usage

### Direct Imports (Recommended)

For optimal tree-shaking, import the specific constants you need directly from the constants directory:

```typescript
import { PRIMARY, SECONDARY } from "@iota/ui-components-react/src/constants/colors";
import { SMALL, MEDIUM } from "@iota/ui-components-react/src/constants/sizes";
import { TOP, BOTTOM } from "@iota/ui-components-react/src/constants/positions";

// Use in your component
const MyComponent = () => {
  return <Button color={PRIMARY} size={MEDIUM}>Click Me</Button>;
};
```

### Component-Specific Objects (Backward Compatibility)

For backward compatibility, you can still use the component-specific objects:

```typescript
import { ButtonColors, ButtonSizes } from "@iota/ui-components-react";

// Use in your component
const MyComponent = () => {
  return <Button color={ButtonColors.Primary} size={ButtonSizes.Medium}>Click Me</Button>;
};
```

## Type Definitions

Each component has updated type definitions that use the centralized constants:

```typescript
// Before
type ButtonColor = 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error';

// After
import { PRIMARY, SECONDARY, INFO, SUCCESS, WARNING, ERROR } from '../constants/colors';

type ButtonColor =
  | typeof PRIMARY
  | typeof SECONDARY
  | typeof INFO
  | typeof SUCCESS
  | typeof WARNING
  | typeof ERROR;
```

## Benefits

1. **Consistency**: Using centralized constants ensures consistent values across all components.
2. **Tree-Shaking**: Direct imports of constants enable better tree-shaking in production builds.
3. **Type Safety**: Type definitions ensure type safety while using string constants.
4. **Maintainability**: Changes to constant values only need to be made in one place.
5. **Reduced Duplication**: Eliminates duplicate string literals across the codebase.

## Implementation Details

Each component that uses constants has been updated to:

1. Import constants from the centralized files
2. Use these constants in their respective objects
3. Re-export the constants for backward compatibility
4. Rename type definitions to be singular (e.g., `ButtonColor` instead of `ButtonColors`)

For components with potential naming conflicts (like positions that use TOP, BOTTOM, etc.), we've used aliases in the exports (e.g., TOP as DROPDOWN_TOP) when necessary.
