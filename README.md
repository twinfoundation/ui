# TWIN UI

This mono-repository contains the UI components for building TWIN apps.

## Packages

- [ui-tailwind](packages/ui-tailwind/README.md) - A package containing tailwind style definitions.
- [ui-components-svelte](packages/ui-components-svelte/README.md) - A package containing the svelte versions of the UI components.
- [ui-components-react](packages/ui-components-react/README.md) - A package containing the react versions of the UI components.

## Apps

- [ui-storybook-svelte](apps/ui-storybook-svelte/README.md) - A web UI for testing the svelte components [https://storybook-svelte.twindev.org/](https://storybook-svelte.twindev.org/).
- [ui-storybook-react](apps/ui-storybook-react/README.md) - A web UI for testing the react components [https://storybook-react.twindev.org/](https://storybook-react.twindev.org/).

## Local Development

### Prerequisites

- Node.js >=20.0.0
- npm

### Getting Started

1. Clone the repository:

```bash
git clone https://github.com/twinfoundation/ui.git
cd ui
```

2. Install dependencies:

```bash
npm install
```

### Development Workflow

#### Icon Structure

The icon system has been refactored for both React and Svelte components:
- All icons are now located in the `src/icons/` directory of each component package.
- Each icon is its own TypeScript file for better tree-shaking and modularity.
- To use an icon, simply import it from the respective package, e.g.:
  ```js
  import { Star } from 'ui-components-react/icons';
  ```
- The icon index file exports all available icons for easy access.

See the respective package README for more details.

#### For React Components

To work on React components with hot reloading:

1. Build the Tailwind package first:

```bash
cd packages/ui-tailwind
npm run dist
cd ../..
```

2. Start the React components in development mode (in a separate terminal):

```bash
cd packages/ui-components-react
npm run dev
```

3. Run Storybook for React (in another terminal):

```bash
cd apps/ui-storybook-react
npm run storybook
```

The Storybook will be available at [http://localhost:6006](http://localhost:6006). Any changes you make to the components in `packages/ui-components-react/src` will automatically trigger a rebuild and refresh the browser.

#### For Svelte Components

Follow similar steps in the Svelte packages:

1. Start the Svelte components build:

```bash
cd packages/ui-components-svelte
npm run dev
```

2. Run Storybook for Svelte (in another terminal):

```bash
cd apps/ui-storybook-svelte
npm run storybook
```

## Contributing

To contribute to this package see the guidelines for building and publishing in [CONTRIBUTING](./CONTRIBUTING.md)
