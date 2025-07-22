// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

export interface LicensePlan {
	id: 'trial' | 'basic' | 'pro' | 'enterprise';
	name: string;
	description: string;
	price: string;
	duration: string;
	features: string[];
	components: string[];
	maxPackages: number;
	popular?: boolean;
}

export interface LicenseRequest {
	email: string;
	company?: string;
	plan: string;
	packageName: string;
	useCase: string;
}

export interface LicenseResponse {
	success: boolean;
	licenseKey?: string;
	error?: string;
	message?: string;
}

export class LicenseService {
	private static readonly PLANS: LicensePlan[] = [
		{
			id: 'trial',
			name: 'Free Trial',
			description: 'Try enterprise components for 14 days',
			price: 'Free',
			duration: '14 days',
			features: [
				'All enterprise components',
				'Basic support',
				'1 package allowed'
			],
			components: ['Button', 'Navbar', 'Footer', 'Label', 'Dropdown'],
			maxPackages: 1
		},
		{
			id: 'basic',
			name: 'Basic',
			description: 'Perfect for small projects',
			price: '$99/year',
			duration: '1 year',
			features: [
				'All enterprise components',
				'Email support',
				'2 packages allowed',
				'Commercial use'
			],
			components: ['Button', 'Navbar', 'Footer', 'Label', 'Dropdown'],
			maxPackages: 2
		},
		{
			id: 'pro',
			name: 'Professional',
			description: 'For growing teams and projects',
			price: '$299/year',
			duration: '1 year',
			popular: true,
			features: [
				'All enterprise components',
				'Priority support',
				'Unlimited packages',
				'Advanced features',
				'Commercial use'
			],
			components: ['Button', 'Navbar', 'Footer', 'Label', 'Dropdown'],
			maxPackages: -1 // Unlimited
		},
		{
			id: 'enterprise',
			name: 'Enterprise',
			description: 'For large organizations',
			price: 'Contact us',
			duration: '1 year',
			features: [
				'All enterprise components',
				'Premium support',
				'Unlimited packages',
				'All advanced features',
				'Custom components',
				'On-premise deployment',
				'Commercial use'
			],
			components: ['Button', 'Navbar', 'Footer', 'Label', 'Dropdown'],
			maxPackages: -1 // Unlimited
		}
	];

	/**
	 * Get all available license plans
	 */
	static getPlans(): LicensePlan[] {
		return this.PLANS;
	}

	/**
	 * Get a specific plan by ID
	 */
	static getPlan(planId: string): LicensePlan | undefined {
		return this.PLANS.find(plan => plan.id === planId);
	}

	/**
	 * Request a license key (simulated)
	 */
	static async requestLicense(request: LicenseRequest): Promise<LicenseResponse> {
		// In a real implementation, this would make an API call
		// For demo purposes, we'll simulate the response
		
		try {
			// Validate request
			if (!request.email || !request.plan || !request.packageName) {
				return {
					success: false,
					error: 'Missing required fields: email, plan, and packageName are required'
				};
			}

			// Simulate API delay
			await new Promise(resolve => setTimeout(resolve, 1000));

			// Generate a demo license key based on the plan
			const plan = this.getPlan(request.plan as LicensePlan['id']);
			if (!plan) {
				return {
					success: false,
					error: 'Invalid plan selected'
				};
			}

			const licenseKey = this.generateDemoKey(request.plan);
			
			return {
				success: true,
				licenseKey,
				message: `License key generated successfully for ${plan.name} plan. Valid for ${plan.duration}.`
			};

		} catch (_error) {
			return {
				success: false,
				error: 'Failed to generate license key. Please try again or contact support.'
			};
		}
	}

	/**
	 * Generate a demo license key
	 */
	private static generateDemoKey(plan: string): string {
		const timestamp = Date.now().toString(36);
		const random = Math.random().toString(36).substring(2, 7).toUpperCase();
		
		switch (plan) {
			case 'trial':
				return `TWIN-ENT-TRIAL-${random}-${timestamp.slice(-4)}`;
			case 'basic':
				return `TWIN-ENT-BASIC-${random}-${timestamp.slice(-4)}`;
			case 'pro':
				return `TWIN-ENT-PRO-${random}-${timestamp.slice(-4)}`;
			case 'enterprise':
				return `TWIN-ENT-ENT-${random}-${timestamp.slice(-4)}`;
			default:
				return `TWIN-ENT-DEMO-${random}-${timestamp.slice(-4)}`;
		}
	}

	/**
	 * Get contact information for license inquiries
	 */
	static getContactInfo(): {
		email: string;
		website: string;
		phone?: string;
		address?: string;
	} {
		return {
			email: 'enterprise@twin.org',
			website: 'https://twin.org/enterprise',
			phone: '+1 (555) 123-4567',
			address: 'TWIN Foundation, Enterprise Division'
		};
	}

	/**
	 * Get FAQ about licensing
	 */
	static getFAQ(): Array<{ question: string; answer: string }> {
		return [
			{
				question: 'What components are included in the enterprise package?',
				answer: 'The enterprise package includes Button, Navbar, Footer, Label, and Dropdown components with advanced features and customization options.'
			},
			{
				question: 'Can I use enterprise components in commercial projects?',
				answer: 'Yes, all paid plans (Basic, Pro, Enterprise) allow commercial use. The trial plan is for evaluation only.'
			},
			{
				question: 'How many packages can I use with my license?',
				answer: 'Trial: 1 package, Basic: 2 packages, Pro & Enterprise: Unlimited packages.'
			},
			{
				question: 'What happens when my license expires?',
				answer: 'Enterprise components will stop working and show license error messages. You can renew your license to continue using them.'
			},
			{
				question: 'Can I upgrade my license plan?',
				answer: 'Yes, you can upgrade at any time. Contact us at enterprise@twin.org for assistance.'
			},
			{
				question: 'Do you offer refunds?',
				answer: 'We offer a 30-day money-back guarantee for all paid plans. Contact us if you\'re not satisfied.'
			}
		];
	}

	/**
	 * Get installation instructions
	 */
	static getInstallationInstructions(): string[] {
		return [
			'1. Install the enterprise package: npm install @twin.org/ui-components-enterprise',
			'2. Import the PackageLicenseValidator in your app',
			'3. Set your license key: PackageLicenseValidator.getInstance().setLicenseKey("YOUR-KEY")',
			'4. Import and use enterprise components as needed',
			'5. The license will be validated automatically when components are used'
		];
	}

	/**
	 * Get troubleshooting tips
	 */
	static getTroubleshootingTips(): Array<{ issue: string; solution: string }> {
		return [
			{
				issue: 'License key not working',
				solution: 'Check that your key format is correct (TWIN-ENT-XXXXX-YYYY) and that it hasn\'t expired.'
			},
			{
				issue: 'Components showing license errors',
				solution: 'Make sure you\'ve set the license key before importing enterprise components.'
			},
			{
				issue: 'Package not authorized',
				solution: 'Your license may not include this package. Check your plan limits or contact support.'
			},
			{
				issue: 'License expired',
				solution: 'Renew your license or contact us for assistance at enterprise@twin.org.'
			}
		];
	}
} 