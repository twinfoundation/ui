# TWIN Color System Documentation

This document outlines the structure and usage of the TWIN color system, designed to provide a clear, maintainable, and developer-friendly approach to managing colors in our design system.

## Color Token Hierarchy

Our color system is organized in three distinct layers:

### 1. Base Colors and Tints

Base colors and their tint variations are our single source of truth for all color values. They are organized in semantic scales from 25 to 975.

```typescript
// Brand Colors
"brand-primary-tints-500"  // Primary brand color: #FF7C15
"brand-secondary-tints-500" // Secondary brand color: #1568E4

// System Colors
"system-success-tints-500"  // Success color: #23BD12
"system-error-tints-500"    // Error color: #DB3614
"system-warning-tints-500"  // Warning color: #F5A623
"system-information-tints-500" // Information color: #1780C1

// Neutral Colors
"neutral-950" // Dark surface: #272D35
```

**When to use**: Never use tint colors directly in components. They should only be referenced by semantic tokens.

### 2. Semantic Colors

Semantic colors provide context-specific color assignments that reference base colors.

```typescript
"surface-main"      // Main surface color
"surface-second"    // Secondary surface color
"surface-third"     // Tertiary surface color
"primary"          // Primary text color
"secondary"        // Secondary text color
"tertiary"         // Tertiary text color
"success"          // Success status color
"error"            // Error status color
"warning"          // Warning status color
"information"      // Information status color
```

**When to use**: For general UI purposes like backgrounds, text, and common patterns.

### 3. Component-Specific Colors

Component-specific colors provide styling for UI components, ensuring consistent appearance.

```typescript
// Button Colors
"surface-button"              // Primary button background
"surface-button-hover"        // Primary button hover state
"surface-button-pressed"      // Primary button pressed state
"surface-button-disabled"     // Primary button disabled state
"surface-button-text"         // Primary button text
"surface-button-text-hover"   // Primary button text hover state

// Alternative Button Colors
"surface-button-alt"          // Secondary button background
"surface-button-alt-hover"    // Secondary button hover state
"surface-button-alt-pressed"  // Secondary button pressed state
"surface-button-alt-disabled" // Secondary button disabled state
"surface-button-text-alt"     // Secondary button text
```

**When to use**: When styling specific UI components.

## Usage in Components

### Button Component Example

```tsx
// Primary Button
<button className="
  bg-surface-button
  hover:enabled:bg-surface-button-hover
  active:bg-surface-button-pressed
  disabled:bg-surface-button-disabled
  text-surface-button-text
  hover:enabled:text-surface-button-text-hover
  active:text-surface-button-text-pressed
">
  Primary Button
</button>

// Secondary Button
<button className="
  bg-surface-button-alt
  hover:enabled:bg-surface-button-alt-hover
  active:bg-surface-button-alt-pressed
  disabled:bg-surface-button-alt-disabled
  text-surface-button-text-alt
  hover:enabled:text-surface-button-text-alt-hover
  active:text-surface-button-text-alt-pressed
">
  Secondary Button
</button>

// Ghost Button
<button className="
  bg-transparent
  hover:enabled:bg-neutral-100
  active:bg-neutral-200
  disabled:bg-transparent
  text-primary
  hover:enabled:text-primary
  active:text-primary
  disabled:text-neutral-500
">
  Ghost Button
</button>

// Status Buttons
<button className="
  bg-error
  hover:enabled:bg-system-error-tints-600
  active:bg-system-error-tints-400
  text-neutral-50
  disabled:bg-neutral-400
  disabled:text-neutral-500
">
  Error Button
</button>
```

### Dark Mode

Dark mode values are handled through the theme configuration:

```tsx
<div className="bg-surface-main dark:bg-surface-main">
  Content
</div>
```

### State Variations

Component states follow this pattern:

- Default: Base token (e.g., `bg-surface-button`)
- Hover: Hover token (e.g., `hover:enabled:bg-surface-button-hover`)
- Active/Pressed: Pressed token (e.g., `active:bg-surface-button-pressed`)
- Disabled: Disabled token (e.g., `disabled:bg-surface-button-disabled`)

## Best Practices

1. Always use semantic or component-specific tokens instead of direct color values
2. Follow the established naming pattern for states (default, hover, pressed, disabled)
3. Use the appropriate color token level based on the use case:
   - Use semantic colors for general UI elements
   - Use component-specific colors for components
   - Never use base tint colors directly
4. Consider dark mode by using the appropriate dark mode variants when necessary
