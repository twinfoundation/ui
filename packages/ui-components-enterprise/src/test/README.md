# Snapshot Testing with Vitest

This directory contains snapshot tests for the UI Components Enterprise package using **Vitest** and **React Testing Library**.

## 🚀 Quick Start

```bash
# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run tests with verbose output
npm test -- --reporter=verbose

# Run specific test file
npm test -- src/test/simple.test.tsx
```

## 📁 Test Structure

```
src/test/
├── setup.ts                    # Test configuration and mocks
├── simple.test.tsx            # Basic component testing example
├── working-snapshot.test.tsx  # Comprehensive snapshot examples
└── README.md                  # This file
```

## 🧪 Test Examples

### Simple Component Test
```tsx
import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

const SimpleComponent = ({ text }: { text: string }) => {
  return <div data-testid="simple-component">{text}</div>;
};

describe('Simple Component', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<SimpleComponent text="Hello World" />);
    expect(getByTestId('simple-component')).toHaveTextContent('Hello World');
  });

  it('matches snapshot', () => {
    const { container } = render(<SimpleComponent text="Test" />);
    expect(container).toMatchSnapshot();
  });
});
```

### Snapshot Testing Best Practices

1. **Test different variants**: Test all props combinations
2. **Test edge cases**: Empty states, long content, special characters
3. **Use descriptive test names**: Make it clear what's being tested
4. **Keep snapshots focused**: One assertion per test for better debugging

## 🔧 Configuration

### Vitest Config (`vitest.config.ts`)
- **Environment**: jsdom for DOM testing
- **Setup**: Custom setup file with mocks and matchers
- **CSS**: Enabled for styling tests
- **Aliases**: `@` points to `./src`

### Test Setup (`setup.ts`)
- **jest-dom**: Custom matchers for DOM assertions
- **License Mocks**: Enterprise license checks mocked
- **Browser APIs**: ResizeObserver, IntersectionObserver mocked

## 📊 Current Test Status

✅ **8 tests passing** across 2 test files:
- Simple Component: 2 tests
- Snapshot Examples: 6 tests (Card, Badge, Complex layouts)

## 🚨 Known Issues

**Button and Label Components**: These components have React child rendering issues that prevent them from being tested with the current setup. The error occurs when React elements are passed as children instead of being properly rendered.

**Workaround**: Use the working examples in `working-snapshot.test.tsx` as templates for testing other components.

## 🎯 Adding New Tests

1. **Create test file**: `src/test/component-name.test.tsx`
2. **Import dependencies**: React Testing Library, Vitest
3. **Write tests**: Follow the patterns in existing tests
4. **Run tests**: `npm test -- src/test/component-name.test.tsx`

## 📝 Snapshot Management

- **Update snapshots**: `npm test -- --update-snapshots`
- **Review changes**: Always review snapshot diffs before committing
- **Clean snapshots**: Remove unused snapshots regularly

## 🔍 Debugging

- **Verbose output**: `npm test -- --reporter=verbose`
- **Single test**: `npm test -- --run src/test/specific.test.tsx`
- **Watch mode**: `npm test -- --watch` for development

## 📚 Resources

- [Vitest Documentation](https://vitest.dev/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Jest DOM Matchers](https://github.com/testing-library/jest-dom) 