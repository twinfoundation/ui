# TWIN Color System Documentation

This document outlines the structure and usage of the TWIN color system, designed to provide a clear, maintainable, and developer-friendly approach to managing colors in our design system.

## Color Token Hierarchy

Our color system is organized in three distinct layers:

### 1. Base Colors (`colors.ts`)

Base colors are our single source of truth for all color values. They are organized in semantic scales from 25 to 975.

```typescript
baseColors.orange[500]  // Primary brand color: #FF7C15
baseColors.blue[500]    // Secondary brand color: #1568E4
baseColors.neutral[950] // Dark surface: #272D35
```

**When to use**: Never use base colors directly in components. They should only be referenced by semantic tokens.

### 2. Semantic Colors (`semantic.ts`)

Semantic colors provide context-specific color assignments that reference base colors.

```typescript
semanticColors.brand.primary        // Brand primary color
semanticColors.surface.main.light   // Main surface color in light mode
semanticColors.text.primary.dark    // Primary text color in dark mode
```

**When to use**: For general UI purposes like backgrounds, text, and common patterns.

### 3. Component Tokens (`components.ts`)

Component tokens provide specific styling for UI components, ensuring consistent component appearance.

```typescript
componentTokens.button.primary.background.default  // Primary button background
componentTokens.input.border.focus                 // Input border color when focused
```

**When to use**: When styling specific UI components.

## Usage in Tailwind

### Basic Usage

```tsx
// Using semantic colors
<div className="bg-surface-main text-text-primary">
  <h1 className="text-brand-primary">Title</h1>
</div>

// Using component tokens
<button className="bg-button-primary-background">
  Click me
</button>
```

### Dark Mode

Dark mode is handled automatically through semantic mapping:

```tsx
<div className="bg-surface-main dark:bg-surface-dark-main">
  Content
</div>
```

### State Variations

Component states are handled through consistent modifiers:

```tsx
<button className="
  bg-button-primary-background
  hover:bg-button-primary-background-hover
  active:bg-button-primary-background-pressed
  disabled:bg-button-primary-background-disabled
">
  Button
</button>
```

## Component Examples

### Button Component

```tsx
// Primary Button
<button className="
  bg-button-primary-background-default
  hover:bg-button-primary-background-hover
  active:bg-button-primary-background-pressed
  disabled:bg-button-primary-background-disabled
  text-button-primary-text-default
  disabled:text-button-primary-text-disabled
">
  Primary Button
</button>

// Secondary Button
<button className="
  bg-button-secondary-background-default
  hover:bg-button-secondary-background-hover
  active:bg-button-secondary-background-pressed
  disabled:bg-button-secondary-background-disabled
  text-button-secondary-text-default
  disabled:text-button-secondary-text-disabled
">
  Secondary Button
</button>

// Ghost Button
<button className="
  bg-button-ghost-background-default
  hover:bg-button-ghost-background-hover
  active:bg-button-ghost-background-pressed
  disabled:bg-button-ghost-background-disabled
  text-button-ghost-text-default
  disabled:text-button-ghost-text-disabled
">
  Ghost Button
</button>
```

### Link Component

```tsx
// Default Link
<a href="#" className="
  text-link-text-default
  hover:text-link-text-hover
  visited:text-link-text-visited
">
  Default Link
</a>
```

### Input Component

```tsx
// Default Input
<input
  className="
    bg-input-background-default
    disabled:bg-input-background-disabled
    border-input-border-default
    focus:border-input-border-focus
    text-input-text-default
    placeholder:text-input-text-placeholder
    disabled:text-input-text-disabled
  "
  placeholder="Enter text..."
/>

// Error State Input
<input
  className="
    bg-input-background-default
    border-input-border-error
    text-input-text-default
  "
  placeholder="Error state..."
/>
```

### Card Component Example

```tsx
<div className="
  bg-surface-main
  dark:bg-surface-dark-main
  text-text-primary
  dark:text-text-dark-primary
">
  <h2 className="text-text-primary dark:text-text-dark-primary">
    Card Title
  </h2>
  <p className="text-text-secondary dark:text-text-dark-secondary">
    Card content with secondary text
  </p>
  <span className="text-text-tertiary dark:text-text-dark-tertiary">
    Additional information
  </span>
</div>
```

### Alert Component Example

```tsx
// Success Alert
<div className="
  bg-background-success
  border-l-4 border-status-success
  text-text-primary
">
  Success message
</div>

// Error Alert
<div className="
  bg-background-error
  border-l-4 border-status-error
  text-text-primary
">
  Error message
</div>

// Warning Alert
<div className="
  bg-background-warning
  border-l-4 border-status-warning
  text-text-primary
">
  Warning message
</div>

// Info Alert
<div className="
  bg-background-info
  border-l-4 border-status-info
  text-text-primary
">
  Information message
</div>
```

### Navigation Component Example

```tsx
<nav className="bg-surface-main dark:bg-surface-dark-main">
  <a className="
    text-text-primary
    hover:text-brand-primary
    dark:text-text-dark-primary
    dark:hover:text-brand-primary
  ">
    Home
  </a>
  <a className="
    text-text-secondary
    hover:text-text-primary
    dark:text-text-dark-secondary
    dark:hover:text-text-dark-primary
  ">
    About
  </a>
</nav>
```

### Form Label Example

```tsx
<div className="group">
  <label className="
    text-text-secondary
    group-focus-within:text-brand-primary
    dark:text-text-dark-secondary
    dark:group-focus-within:text-brand-primary
  ">
    Form Label
  </label>
  <input className="
    border-input-border-default
    focus:border-input-border-focus
    group-focus-within:border-brand-primary
  "/>
</div>
```

These examples demonstrate:
- Consistent use of color tokens
- Proper dark mode handling
- State management (hover, focus, active, disabled)
- Component-specific styling
- Semantic color usage
- Accessibility considerations

## Best Practices

1. **Use the Right Level**
   - `bg-orange-500`
   - `bg-brand-primary`
   - `bg-button-primary-background`

2. **Component Consistency**
   - Use component tokens for reusable UI components
   - Keep component-specific styles in component tokens

3. **Dark Mode**
   - Always consider dark mode when adding new colors
   - Use semantic color tokens that include dark variants

4. **State Management**
   - Use provided state variations (hover, active, disabled)
   - Don't create custom state colors

## Benefits

- **Maintainability**: Change a base color once, updates everywhere
- **Consistency**: Predefined tokens ensure consistent usage
- **Developer Experience**: Clear naming and purpose for each token
- **Dark Mode**: Built-in support for light/dark themes
- **Scalability**: Easy to extend with new components or variations

## Migration Guide

When migrating from the old color system:

1. Replace direct color values with semantic tokens:
   ```diff
   - bg-[#FF7C15]
   + bg-brand-primary
   ```

2. Use component tokens for specific components:
   ```diff
   - bg-surface-brand-primary-1-light
   + bg-button-primary-background
   ```

3. Update dark mode usage:
   ```diff
   - dark:bg-surface-main-dark
   + dark:bg-surface-dark-main
   ```

## Contributing

When adding new colors:

1. Add base colors to `colors.ts` if needed
2. Create semantic tokens in `semantic.ts`
3. Add component-specific tokens in `components.ts`
4. Update documentation
5. Create examples in Storybook
