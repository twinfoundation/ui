# Tree-Shaking Best Practices for @twin.org/ui-components-react

## What is Tree-Shaking?

Tree-shaking is a form of dead code elimination where unused code is not included in the final bundle. This is particularly important for UI component libraries where applications often use only a subset of the available components.

## Import Methods and Their Impact on Bundle Size

| Import Method                             | Tree-Shakeable | Impact on Bundle Size                              |
| ----------------------------------------- | -------------- | -------------------------------------------------- |
| ✅ Named imports from specific paths      | Yes            | Minimal - only imports exactly what you need       |
| ✅ Named imports from the main entry      | Yes            | Good - Webpack/Rollup can remove unused components |
| ❌ Namespace imports                      | No             | Poor - may include unnecessary code                |
| ❌ Dynamic imports without specific paths | Partial        | Varies - depends on bundler optimization           |

## Recommended Import Patterns

### Best: Direct Subpath Imports

```tsx
// ✅ BEST PRACTICE: Import directly from component subpath
import { Button } from '@twin.org/ui-components-react/button';
import type { ButtonProps } from '@twin.org/ui-components-react/button';
```

Benefits:

- Guarantees the smallest possible bundle size
- Prevents accidental inclusion of other components
- Faster build times due to smaller import graphs
- Clear dependency paths for bundlers to analyze

### Good: Named Imports from Main Entry

```tsx
// ✅ GOOD PRACTICE: Named imports from main entry
import { Button, Alert } from '@twin.org/ui-components-react';
import type { ButtonProps } from '@twin.org/ui-components-react';
```

Benefits:

- Still allows bundlers to tree-shake unused components
- Simpler import statements when using multiple components
- Compatible with most modern bundlers

### Avoid: Namespace Imports

```tsx
// ❌ AVOID: Namespace imports that prevent proper tree-shaking
import * as UI from '@twin.org/ui-components-react';

// Then used as:
<UI.Button>Click me</UI.Button>;
```

Problems:

- May import the entire library, including unused components
- Prevents effective tree-shaking in some bundlers
- Increases bundle size unnecessarily

### Special Case: Icons

There are three recommended patterns for importing icons:

```tsx
// Method 1: Direct imports from icon namespaces (RECOMMENDED)
// ✅ BEST FOR TREE-SHAKING: Import only the specific icons you need
import { Outline, Solid } from '@twin.org/ui-components-react/icons';
const { AcademicCap: OutlineAcademicCap } = Outline;
const { AcademicCap: SolidAcademicCap } = Solid;

// Method 2: Import from main entry point and destructure
// ✅ ALSO WORKS: Import from main entry point
import { IconsOutline, IconsSolid } from '@twin.org/ui-components-react';
const { HiOutlineAcademicCap } = IconsOutline;
const { HiSolidAcademicCap } = IconsSolid;

// Method 3: Using namespace objects directly in JSX
// ⚠️ ACCEPTABLE BUT NOT OPTIMAL: May include more code than needed
import { Outline, Solid } from '@twin.org/ui-components-react/icons';
// Then use in JSX: <Outline.AcademicCap />

// ❌ AVOID: Using entire namespace objects without destructuring from main entry
import { IconsOutline, IconsSolid } from '@twin.org/ui-components-react';
// Using IconsOutline.HiOutlineAcademicCap directly in JSX reduces tree-shaking effectiveness
```

For the optimal bundle size, remember:

- Method 1 ensures only the specific icons you need are included in your bundle
- Always destructure the icons you need rather than using namespace objects directly
- Importing from `/icons` path provides a cleaner API with fewer naming collisions

### Example with TypeScript Best Practices

Here's a complete example of how to use icons with proper TypeScript typing:

```tsx
import { useState, useCallback } from 'react';
import { Button } from '@twin.org/ui-components-react/button';
import { Outline } from '@twin.org/ui-components-react/icons';

interface ToggleButtonProps {
  initialState?: boolean;
  label: string;
  onChange?: (isActive: boolean) => void;
}

export const ToggleButton = ({
  initialState = false,
  label,
  onChange
}: ToggleButtonProps): JSX.Element => {
  const [isActive, setIsActive] = useState<boolean>(initialState);
  const { CheckCircle, XCircle } = Outline;

  const handleClick = useCallback(() => {
    const newState = !isActive;
    setIsActive(newState);
    if (onChange) {
      onChange(newState);
    }
  }, [isActive, onChange]);

  return (
    <Button onClick={handleClick}>
      {label}
      {isActive ? <CheckCircle className="ml-2" /> : <XCircle className="ml-2" />}
    </Button>
  );
};
```

This example demonstrates:

- Proper TypeScript types for props
- Destructuring icons for optimal tree-shaking
- Following React best practices with hooks
- Explicit return type (JSX.Element)

## Real-World Examples

### Before Optimization

```tsx
// Before: Importing everything through the main entry point
import {
  Button,
  Card,
  Badge,
  Alert,
  Modal,
  Dropdown,
  Table,
  Form
} from '@twin.org/ui-components-react';
```

### After Optimization

```tsx
// After: Import only what you need from specific paths
import { Button } from '@twin.org/ui-components-react/button';
import { Card } from '@twin.org/ui-components-react/card';
import { Badge } from '@twin.org/ui-components-react/badge';
```

## Examining Impact with Bundle Tools

To verify the effectiveness of your tree-shaking:

1. Use tools like `webpack-bundle-analyzer` or `rollup-plugin-visualizer`
2. Compare bundle sizes with different import methods
3. Look for unused components in your final bundle

## Additional Optimization Tips

1. **Lazy Loading**: For larger components or rarely used sections:

   ```tsx
   const Modal = React.lazy(() => import('@twin.org/ui-components-react/modal'));
   ```

2. **Type Imports**: Use explicit type imports to prevent importing runtime code:

   ```tsx
   import type { ButtonProps } from '@twin.org/ui-components-react/button';
   ```

3. **Module Resolution**: Ensure your bundler is configured for proper module resolution with `"moduleResolution": "node"` in tsconfig.json

4. **Side Effects**: Our package is marked with `"sideEffects": false` to help bundlers correctly tree-shake

## Common Mistakes to Avoid

1. Re-exporting components from a barrel file in your application
2. Using dynamic imports without specific paths
3. Not setting up proper build tool configurations for tree-shaking
4. Using CommonJS instead of ESM modules (when possible)

By following these practices, you can significantly reduce your application's bundle size while maintaining all functionality provided by the @twin.org/ui-components-react library.
