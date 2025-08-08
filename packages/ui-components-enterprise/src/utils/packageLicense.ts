// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

export interface PackageLicenseInfo {
	key: string;
	expiresAt: Date;
	packageName: string;
	customerId: string;
	allowedPackages: string[];
	features: string[];
	plan: 'trial' | 'basic' | 'pro' | 'enterprise';
}

export interface LicenseValidationResult {
	isValid: boolean;
	error?: string;
	licenseInfo?: PackageLicenseInfo;
}

export class PackageLicenseValidator {
	private static instance: PackageLicenseValidator;
	private licenseKey: string | null = null;
	private licenseInfo: PackageLicenseInfo | null = null;
	private validationCache: Map<string, LicenseValidationResult> = new Map();
	private lastValidationTime: number = 0;
	private readonly CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

	private constructor() {}

	static getInstance(): PackageLicenseValidator {
		if (!PackageLicenseValidator.instance) {
			PackageLicenseValidator.instance = new PackageLicenseValidator();
		}
		return PackageLicenseValidator.instance;
	}

	/**
	 * Set the license key for the enterprise package
	 * @param key - The license key
	 */
	setLicenseKey(key: string): LicenseValidationResult {
		this.licenseKey = key;
		return this.validateLicense();
	}

	/**
	 * Get the current license key
	 */
	getLicenseKey(): string | null {
		return this.licenseKey;
	}

	/**
	 * Check if the enterprise package is licensed
	 */
	isLicensed(): boolean {
		if (!this.licenseKey || !this.licenseInfo) {
			return false;
		}

		// Check if license has expired
		if (this.licenseInfo.expiresAt < new Date()) {
			console.warn('Enterprise package license has expired');
			return false;
		}

		return true;
	}

	/**
	 * Check if a specific package is allowed to use the enterprise package
	 */
	isPackageAllowed(packageName: string): boolean {
		if (!this.isLicensed()) {
			return false;
		}

		return this.licenseInfo?.allowedPackages.includes(packageName) ?? false;
	}

	/**
	 * Check if a specific feature is available
	 */
	isFeatureAvailable(feature: string): boolean {
		if (!this.isLicensed()) {
			return false;
		}

		return this.licenseInfo?.features.includes(feature) ?? false;
	}

	/**
	 * Get the license plan type
	 */
	getLicensePlan(): string | null {
		return this.licenseInfo?.plan ?? null;
	}

	/**
	 * Validate the license key with proper checks
	 */
	private validateLicense(): LicenseValidationResult {
		if (!this.licenseKey) {
			return { isValid: false, error: 'No license key provided' };
		}

		// Check cache first
		const cacheKey = this.licenseKey;
		const now = Date.now();
		if (this.validationCache.has(cacheKey) && (now - this.lastValidationTime) < this.CACHE_DURATION) {
			return this.validationCache.get(cacheKey)!;
		}

		// Validate key format
		if (!this.isValidKeyFormat(this.licenseKey)) {
			const result: LicenseValidationResult = {
				isValid: false,
				error: 'Invalid license key format. Expected format: TWIN-ENT-XXXXX-YYYY'
			};
			this.cacheValidationResult(cacheKey, result);
			return result;
		}

		// In a real implementation, you would make an API call here
		// For demo purposes, we'll simulate validation
		const validationResult = this.simulateLicenseValidation(this.licenseKey);
		this.cacheValidationResult(cacheKey, validationResult);
		
		if (validationResult.isValid && validationResult.licenseInfo) {
			this.licenseInfo = validationResult.licenseInfo;
		}

		return validationResult;
	}

	/**
	 * Check if the key format is valid
	 */
	private isValidKeyFormat(key: string): boolean {
		// Format: TWIN-ENT-XXXXX-YYYY
		const keyPattern = /^TWIN-ENT-[A-Z0-9]{5}-[A-Z0-9]{4}$/;
		return keyPattern.test(key);
	}

	/**
	 * Simulate license validation (replace with real API call)
	 */
	private simulateLicenseValidation(key: string): LicenseValidationResult {
		// Simulate different license types based on key
		if (key === 'TWIN-ENT-DEMO-2024') {
			return {
				isValid: true,
				licenseInfo: {
					key,
					expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days
					packageName: '@twin.org/ui-components-enterprise',
					customerId: 'demo-customer',
					allowedPackages: ['@twin.org/ui-storybook-react', '@twin.org/my-app'],
					features: ['button', 'navbar', 'footer', 'label', 'dropdown'],
					plan: 'trial'
				}
			};
		}

		if (key.startsWith('TWIN-ENT-TRIAL-')) {
			return {
				isValid: true,
				licenseInfo: {
					key,
					expiresAt: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000), // 14 days
					packageName: '@twin.org/ui-components-enterprise',
					customerId: 'trial-customer',
					allowedPackages: ['@twin.org/ui-storybook-react'],
					features: ['button', 'navbar', 'footer', 'label', 'dropdown'],
					plan: 'trial'
				}
			};
		}

		if (key.startsWith('TWIN-ENT-BASIC-')) {
			return {
				isValid: true,
				licenseInfo: {
					key,
					expiresAt: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000), // 1 year
					packageName: '@twin.org/ui-components-enterprise',
					customerId: 'basic-customer',
					allowedPackages: ['@twin.org/ui-storybook-react', '@twin.org/my-app'],
					features: ['button', 'navbar', 'footer', 'label', 'dropdown'],
					plan: 'basic'
				}
			};
		}

		if (key.startsWith('TWIN-ENT-PRO-')) {
			return {
				isValid: true,
				licenseInfo: {
					key,
					expiresAt: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000), // 1 year
					packageName: '@twin.org/ui-components-enterprise',
					customerId: 'pro-customer',
					allowedPackages: ['@twin.org/ui-storybook-react', '@twin.org/my-app', '@twin.org/other-app'],
					features: ['button', 'navbar', 'footer', 'label', 'dropdown', 'advanced-features'],
					plan: 'pro'
				}
			};
		}

		if (key.startsWith('TWIN-ENT-ENT-')) {
			return {
				isValid: true,
				licenseInfo: {
					key,
					expiresAt: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000), // 1 year
					packageName: '@twin.org/ui-components-enterprise',
					customerId: 'enterprise-customer',
					allowedPackages: ['*'], // All packages
					features: ['button', 'navbar', 'footer', 'label', 'dropdown', 'advanced-features', 'premium-support'],
					plan: 'enterprise'
				}
			};
		}

		// Invalid key
		return {
			isValid: false,
			error: 'Invalid or expired license key. Please contact support.'
		};
	}

	/**
	 * Cache validation result
	 */
	private cacheValidationResult(key: string, result: LicenseValidationResult): void {
		this.validationCache.set(key, result);
		this.lastValidationTime = Date.now();
	}

	/**
	 * Clear validation cache
	 */
	clearCache(): void {
		this.validationCache.clear();
		this.lastValidationTime = 0;
	}

	/**
	 * Get license information
	 */
	getLicenseInfo(): PackageLicenseInfo | null {
		return this.licenseInfo;
	}

	/**
	 * Get the current package name (for validation)
	 */
	getCurrentPackageName(): string {
		// In a real implementation, you might get this from package.json or environment
		return '@twin.org/ui-storybook-react'; // This would be dynamic
	}

	/**
	 * Get license status summary
	 */
	getLicenseStatus(): {
		isLicensed: boolean;
		plan: string | null;
		expiresAt: Date | null;
		features: string[];
		allowedPackages: string[];
	} {
		return {
			isLicensed: this.isLicensed(),
			plan: this.getLicensePlan(),
			expiresAt: this.licenseInfo?.expiresAt ?? null,
			features: this.licenseInfo?.features ?? [],
			allowedPackages: this.licenseInfo?.allowedPackages ?? []
		};
	}
}

/**
 * Hook to use package license validation in React components
 */
export function usePackageLicense() {
	const validator = PackageLicenseValidator.getInstance();
	const currentPackage = validator.getCurrentPackageName();
	
	return {
		isLicensed: validator.isLicensed(),
		isPackageAllowed: validator.isPackageAllowed(currentPackage),
		licenseInfo: validator.getLicenseInfo(),
		licenseStatus: validator.getLicenseStatus(),
		setLicenseKey: (key: string) => validator.setLicenseKey(key),
		currentPackage,
		clearCache: () => validator.clearCache()
	};
} 