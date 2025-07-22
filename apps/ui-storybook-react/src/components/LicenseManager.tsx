// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

import React, { useState } from 'react';
import { LicenseService, usePackageLicense } from '@twin.org/ui-components-enterprise';
import type { LicenseRequest } from '@twin.org/ui-components-enterprise';

interface LicenseManagerProps {
  onLicenseUpdate?: (key: string) => void;
}

export const LicenseManager: React.FC<LicenseManagerProps> = ({ onLicenseUpdate }) => {
  const [selectedPlan, setSelectedPlan] = useState<string>('basic');
  const [email, setEmail] = useState<string>('');
  const [company, setCompany] = useState<string>('');
  const [useCase, setUseCase] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null);
  const [currentLicenseKey, setCurrentLicenseKey] = useState<string>('');

  const { isLicensed, licenseStatus, setLicenseKey } = usePackageLicense();
  const plans = LicenseService.getPlans();
  const contact = LicenseService.getContactInfo();

  const handleRequestLicense = async () => {
    if (!email || !selectedPlan) {
      setResult({ success: false, message: 'Please fill in all required fields.' });
      return;
    }

    setIsLoading(true);
    setResult(null);

    try {
      const request: LicenseRequest = {
        email,
        company,
        plan: selectedPlan,
        packageName: '@twin.org/ui-storybook-react',
        useCase: useCase || 'Component documentation and testing'
      };

      const response = await LicenseService.requestLicense(request);

      if (response.success && response.licenseKey) {
        setResult({ success: true, message: `License key generated: ${response.licenseKey}` });
        setCurrentLicenseKey(response.licenseKey);
        
        // Automatically set the license key
        setLicenseKey(response.licenseKey);
        
        // Notify parent component
        onLicenseUpdate?.(response.licenseKey);
      } else {
        setResult({ success: false, message: response.error || 'Failed to generate license key.' });
      }
    } catch {
      setResult({ success: false, message: 'An error occurred while requesting the license.' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSetLicenseKey = () => {
    if (currentLicenseKey) {
      setLicenseKey(currentLicenseKey);
      setResult({ success: true, message: 'License key set successfully!' });
      onLicenseUpdate?.(currentLicenseKey);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4">Enterprise License Manager</h2>
        
        {/* Current License Status */}
        <div className="mb-6 p-4 bg-gray-50 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Current License Status</h3>
          {isLicensed ? (
            <div className="text-green-700">
              <p>✅ License Active</p>
              <p>Plan: {licenseStatus.plan}</p>
              <p>Expires: {licenseStatus.expiresAt?.toLocaleDateString()}</p>
              <p>Features: {licenseStatus.features.join(', ')}</p>
            </div>
          ) : (
            <div className="text-red-700">
              <p>❌ No valid license found</p>
              <p>Enterprise components will show license errors</p>
            </div>
          )}
        </div>

        {/* License Plans */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-4">Choose a License Plan</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                  selectedPlan === plan.id
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                } ${plan.popular ? 'ring-2 ring-blue-500' : ''}`}
                onClick={() => setSelectedPlan(plan.id)}
              >
                {plan.popular && (
                  <span className="inline-block bg-blue-500 text-white text-xs px-2 py-1 rounded-full mb-2">
                    Most Popular
                  </span>
                )}
                <h4 className="font-semibold">{plan.name}</h4>
                <p className="text-2xl font-bold text-blue-600">{plan.price}</p>
                <p className="text-sm text-gray-600 mb-2">{plan.duration}</p>
                <ul className="text-sm space-y-1">
                  {plan.features.slice(0, 3).map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <span className="text-green-500 mr-1">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* License Request Form */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-4">Request License Key</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Email *</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="your-email@company.com"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Company</label>
              <input
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Your Company Name"
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium mb-1">Use Case</label>
            <textarea
              value={useCase}
              onChange={(e) => setUseCase(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
              rows={3}
              placeholder="Describe how you plan to use the enterprise components..."
            />
          </div>
          <button
            onClick={handleRequestLicense}
            disabled={isLoading || !email}
            className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Generating License...' : 'Request License Key'}
          </button>
        </div>

        {/* Manual License Key Input */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-4">Or Enter License Key Manually</h3>
          <div className="flex gap-2">
            <input
              type="text"
              value={currentLicenseKey}
              onChange={(e) => setCurrentLicenseKey(e.target.value)}
              className="flex-1 p-2 border border-gray-300 rounded-md"
              placeholder="TWIN-ENT-XXXXX-YYYY"
            />
            <button
              onClick={handleSetLicenseKey}
              disabled={!currentLicenseKey}
              className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 disabled:opacity-50"
            >
              Set License
            </button>
          </div>
        </div>

        {/* Result Message */}
        {result && (
          <div className={`p-4 rounded-md ${result.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
            {result.message}
          </div>
        )}

        {/* Contact Information */}
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Need Help?</h3>
          <div className="text-sm space-y-1">
            <p>📧 Email: <a href={`mailto:${contact.email}`} className="text-blue-600 hover:underline">{contact.email}</a></p>
            <p>🌐 Website: <a href={contact.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{contact.website}</a></p>
            {contact.phone && <p>📞 Phone: {contact.phone}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}; 