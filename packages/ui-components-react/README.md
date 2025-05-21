# TWIN UI Components React

A comprehensive React component library built with TypeScript and Tailwind CSS, following best practices for performance and developer experience.

## Features

- 🚀 Tree-shakeable components for optimal bundle size
- 🎨 Modern, accessible, and responsive UI components
- 🛠 Built with TypeScript for type safety
- 🎯 Optimized for both ESM and CJS environments
- 🖥 Supports Server-Side Rendering (SSR)

## Installation

```bash
# Using npm
npm install @twin.org/ui-components-react

# Using yarn
yarn add @twin.org/ui-components-react

# Using pnpm
pnpm add @twin.org/ui-components-react
```

## Usage

### Basic Component Import

```tsx
import { Button } from '@twin.org/ui-components-react';

function App() {
  return <Button>Click me</Button>;
}
```

### Icon Components

The library includes a collection of icons that can be imported individually or as a group:

```tsx
// Import individual icons
import { House, Envelope, CalendarDots } from '@twin.org/ui-components-react/icons';

// Usage in a component
function App() {
  return (
    <div>
      <House className="w-6 h-6" />
      <Envelope className="w-6 h-6" />
      <CalendarDots className="w-6 h-6" />
    </div>
  );
}
```

### Available Icons

The following icons are available out of the box:

- `ArrowRight` - Right arrow icon
- `Bell` - Notification bell
- `House` - Home icon
- `Envelope` - Email icon
- `CalendarDots` - Calendar with dots
- `CaretDown` - Dropdown arrow
- `Check` - Checkmark
- `X` - Close/delete icon
- `Plus` - Plus/add icon
- `MagnifyingGlass` - Search icon
- `User` - User profile icon
- `Gear` - Settings icon
- `DotsThreeVertical` - Vertical ellipsis
- `List` - List view
- `Grid` - Grid view
- `Trash` - Delete icon
- `Edit` - Edit/pencil icon
- `Info` - Information icon
- `Warning` - Warning icon
- `Error` - Error/alert icon

## Theming

Customize the look and feel by extending the default theme:

```js
// tailwind.config.js
const { twinTailwind } = require('@twin.org/ui-tailwind');

module.exports = {
  presets: [twinTailwind],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0066FF',
          dark: '#0052CC',
        },
      },
    },
  },
};
```

## Browser Support

The components are compatible with all modern browsers:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

## Documentation

For more detailed documentation, check out:

- [TypeScript React Best Practices](docs/typescript-react-best-practices.md)
- [Component API Reference](docs/component-api.md)
- [Theming Guide](docs/theming.md)
- [Migration Guide](docs/migration.md)

## License

This project is licensed under the [Apache 2.0 License](LICENSE).
