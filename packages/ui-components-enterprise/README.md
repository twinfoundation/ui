# @twin.org/ui-components-enterprise

Enterprise-grade UI components for React applications. This package requires a valid license key to be used in any project.

## 🚀 Features

- **Premium Components**: Button, Dropdown, Footer, Label, Navbar
- **Package-Level Licensing**: Entire package requires a license key
- **Project Authorization**: License keys specify which projects can use the package
- **Development Mode**: Package works without license in development (localhost)
- **TypeScript Support**: Full TypeScript definitions included

## 📦 Installation

```bash
npm install @twin.org/ui-components-enterprise
```

## 🔑 License Setup

### 1. Get Your License Key

Contact us to obtain your enterprise license key. License keys follow the format: `TWIN-ENT-XXXXX`

### 2. Set Your License Key

Set your license key early in your application:

```typescript
import { PackageLicenseValidator } from '@twin.org/ui-components-enterprise';

// Set your license key (do this in your app's entry point)
PackageLicenseValidator.getInstance().setLicenseKey('TWIN-ENT-YOUR-KEY');
```

### 3. Use Enterprise Components

```typescript
import { Button, Navbar, Footer } from '@twin.org/ui-components-enterprise';

function App() {
  return (
    <div>
      <Navbar />
      <Button color="primary">Enterprise Button</Button>
      <Footer />
    </div>
  );
}
```

## 🛡️ Package License Validation

### Development Mode

The package works without a license key in development mode (localhost).

### Production Mode

In production, the package will throw an error if no valid license key is provided.

### Project Authorization

License keys specify which projects are authorized to use the package:

```typescript
// Example license info
{
  key: 'TWIN-ENT-DEMO',
  allowedPackages: ['@twin.org/ui-storybook-react', '@twin.org/my-app'],
  expiresAt: new Date('2025-12-31'),
  customerId: 'demo-customer'
}
```

### License Status

Check your package license status:

```typescript
import { usePackageLicense, PackageLicenseStatus } from '@twin.org/ui-components-enterprise';

function MyComponent() {
  const { isLicensed, isPackageAllowed, currentPackage } = usePackageLicense();
  
  return (
    <div>
      <PackageLicenseStatus />
      {isLicensed && <p>✅ Package Licensed</p>}
      {isPackageAllowed && <p>✅ Project Authorized</p>}
      <p>Current package: {currentPackage}</p>
    </div>
  );
}
```

## 📋 Available Components

| Component | Description |
|-----------|-------------|
| Button | Enhanced button with multiple variants |
| Dropdown | Advanced dropdown component |
| Footer | Professional footer component |
| Label | Form label component |
| Navbar | Navigation bar component |

## 🔧 API Reference

### PackageLicenseValidator

```typescript
class PackageLicenseValidator {
  static getInstance(): PackageLicenseValidator
  setLicenseKey(key: string): void
  getLicenseKey(): string | null
  isLicensed(): boolean
  isPackageAllowed(packageName: string): boolean
  getLicenseInfo(): PackageLicenseInfo | null
  getCurrentPackageName(): string
}
```

### usePackageLicense Hook

```typescript
function usePackageLicense(): {
  isLicensed: boolean
  isPackageAllowed: boolean
  licenseInfo: PackageLicenseInfo | null
  setLicenseKey: (key: string) => void
  currentPackage: string
}
```

### PackageLicenseInfo Interface

```typescript
interface PackageLicenseInfo {
  key: string
  expiresAt: Date
  packageName: string
  customerId: string
  allowedPackages: string[]
}
```

## 🚨 License Errors

If you use the enterprise package without a valid license, you'll see:

- **Console Errors**: Detailed error messages explaining the issue
- **Runtime Errors**: The package will throw errors in production
- **License Required**: Clear instructions on how to set up licensing

## 🔒 Security

- License validation happens at runtime when the package is imported
- Keys are validated against our license server
- Expired licenses are automatically detected
- Development mode bypasses validation for easier development
- Project-specific authorization prevents unauthorized usage

## 📞 Support

For license inquiries or technical support:

- **Email**: enterprise@twin.org
- **Documentation**: https://docs.twin.org/enterprise
- **License Portal**: https://licenses.twin.org

## 📄 License

This package is licensed under the Apache 2.0 License. Enterprise components require a separate commercial license.

## 🔄 Migration from Core

If you're migrating from the core package:

```typescript
// Before (core package)
import { Button } from '@twin.org/ui-components-core';

// After (enterprise package)
import { Button, PackageLicenseValidator } from '@twin.org/ui-components-enterprise';

// Set package license key
PackageLicenseValidator.getInstance().setLicenseKey('TWIN-ENT-YOUR-KEY');
```

## 🧪 Testing

Test your package license setup:

```typescript
import { PackageLicenseValidator } from '@twin.org/ui-components-enterprise';

// Test with demo key
PackageLicenseValidator.getInstance().setLicenseKey('TWIN-ENT-DEMO');

// Check if licensed
console.log(PackageLicenseValidator.getInstance().isLicensed()); // true

// Check if current project is authorized
const currentPackage = PackageLicenseValidator.getInstance().getCurrentPackageName();
console.log(PackageLicenseValidator.getInstance().isPackageAllowed(currentPackage)); // true
```

## 🏢 Enterprise Features

This package is designed for enterprise customers who need:

- **Premium Components**: Advanced UI components not available in the core package
- **Project Control**: License keys that specify which projects can use the package
- **Support**: Dedicated enterprise support and documentation
- **Updates**: Priority access to new features and updates
