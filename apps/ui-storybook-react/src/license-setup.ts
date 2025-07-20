// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

import { PackageLicenseValidator } from "@twin.org/ui-components-enterprise";
import demoConfig from "../demo-config.json";

// ============================================================================
// LICENSE CONFIGURATION OPTIONS
// ============================================================================
// 
// Choose ONE of these methods to enable/disable enterprise components:
//
// METHOD 1: Demo Config (easiest for testing)
//   - Edit demo-config.json and change "enabled": true/false
//
// METHOD 2: Environment Variable (for production)
//   - Set VITE_STORYBOOK_ENTERPRISE_LICENSE environment variable
//   - Example: VITE_STORYBOOK_ENTERPRISE_LICENSE=TWIN-ENT-YOUR-KEY
//
// METHOD 3: Direct Code (for development)
//   - Uncomment the code below and set your license key
//
// ============================================================================

// Check for environment variable first (highest priority)
// Note: In Vite, environment variables must be prefixed with VITE_ to be exposed to the client
const ENV_LICENSE_KEY = import.meta.env.VITE_STORYBOOK_ENTERPRISE_LICENSE;
const ENV_ENABLED = Boolean(ENV_LICENSE_KEY);

// Check demo config (fallback)
const DEMO_ENABLE_ENTERPRISE = demoConfig.enterprise.enabled;
const DEMO_LICENSE_KEY = demoConfig.enterprise.licenseKey;

// Determine which configuration to use
const USE_ENVIRONMENT = ENV_ENABLED;
const USE_DEMO_CONFIG = !USE_ENVIRONMENT && DEMO_ENABLE_ENTERPRISE;

if (USE_ENVIRONMENT) {
	// Use environment variable
	PackageLicenseValidator.getInstance().setLicenseKey(ENV_LICENSE_KEY!);
	
	if (demoConfig.demo.showConsoleLogs) {
		console.log('✅ Enterprise components ENABLED via environment variable');
		console.log('   License Key:', ENV_LICENSE_KEY);
		console.log('   Source: VITE_STORYBOOK_ENTERPRISE_LICENSE environment variable');
	}
} else if (USE_DEMO_CONFIG) {
	// Use demo config
	PackageLicenseValidator.getInstance().setLicenseKey(DEMO_LICENSE_KEY);
	
	if (demoConfig.demo.showConsoleLogs) {
		console.log('✅ Enterprise components ENABLED via demo config');
		console.log('   License Key:', DEMO_LICENSE_KEY);
		console.log('   Source: demo-config.json');
		console.log('   To disable: Edit demo-config.json and set "enabled": false');
	}
} else {
	// No license set
	if (demoConfig.demo.showConsoleLogs) {
		console.log('❌ Enterprise components DISABLED');
		console.log('   Enterprise components will show license error messages');
		console.log('   To enable:');
		console.log('     - Edit demo-config.json and set "enabled": true');
		console.log('     - Or set VITE_STORYBOOK_ENTERPRISE_LICENSE environment variable');
	}
}

// ============================================================================
// DIRECT CODE CONFIGURATION (uncomment for development)
// ============================================================================
// 
// Uncomment and modify the lines below for direct code configuration:
//
// const DIRECT_LICENSE_KEY = 'TWIN-ENT-YOUR-ACTUAL-KEY';
// PackageLicenseValidator.getInstance().setLicenseKey(DIRECT_LICENSE_KEY);
// console.log('Enterprise license set via direct code:', DIRECT_LICENSE_KEY); 