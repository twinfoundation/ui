// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

import { PackageLicenseValidator } from './packageLicense';

/**
 * Package-level license guard that prevents the enterprise package from being used without a license
 * This function is called when enterprise components are actually used, not on import
 */
export function checkPackageLicense(): void {
	const validator = PackageLicenseValidator.getInstance();
	const currentPackage = validator.getCurrentPackageName();
	
	if (!validator.isLicensed()) {
		const errorMessage = `
🚨 ENTERPRISE PACKAGE LICENSE REQUIRED 🚨

The package '@twin.org/ui-components-enterprise' requires a valid license key to be used.

Current package: ${currentPackage}

To fix this:

1. Import the PackageLicenseValidator:
   import { PackageLicenseValidator } from '@twin.org/ui-components-enterprise';

2. Set your license key early in your application:
   PackageLicenseValidator.getInstance().setLicenseKey('TWIN-ENT-YOUR-KEY');

3. Contact us for a license key: enterprise@twin.org

Note: The package works without a license in development mode (localhost).
		`;
		
		console.error(errorMessage);
		
		// Always throw error, even in development mode
		throw new Error('Enterprise package license required. Please set a valid license key.');
	}
	
	if (!validator.isPackageAllowed(currentPackage)) {
		const errorMessage = `
🚨 PACKAGE NOT AUTHORIZED 🚨

The package '${currentPackage}' is not authorized to use '@twin.org/ui-components-enterprise'.

Please contact us to add this package to your license: enterprise@twin.org
		`;
		
		console.error(errorMessage);
		
		// Always throw error, even in development mode
		throw new Error(`Package '${currentPackage}' not authorized to use enterprise components.`);
	}
}

/**
 * Component-level license guard that checks license when a component is actually rendered
 * This is the preferred method for protecting enterprise components
 */
export function checkComponentLicense(componentName: string): void {
	const validator = PackageLicenseValidator.getInstance();
	
	if (!validator.isLicensed()) {
		const errorMessage = `
🚨 ENTERPRISE COMPONENT LICENSE REQUIRED 🚨

The component '${componentName}' requires a valid license key to be used.

To fix this:

1. Import the PackageLicenseValidator:
   import { PackageLicenseValidator } from '@twin.org/ui-components-enterprise';

2. Set your license key early in your application:
   PackageLicenseValidator.getInstance().setLicenseKey('TWIN-ENT-YOUR-KEY');

3. Contact us for a license key: enterprise@twin.org
		`;
		
		console.error(errorMessage);
		
		throw new Error(`Enterprise component '${componentName}' requires a valid license key.`);
	}
}

/**
 * License status enum for component-level checks
 */
export enum PackageLicenseStatus {
	LICENSED = 'licensed',
	UNLICENSED = 'unlicensed',
	INVALID = 'invalid'
} 