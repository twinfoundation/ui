# Improved License System Guide

## 🎯 **Overview**

The license system has been significantly improved with proper validation, a service to help users get keys, and a more robust structure. Here's what's new:

---

## 🔑 **1. License Key Validation**

### **Key Format Validation**
- **Format**: `TWIN-ENT-XXXXX-YYYY` (e.g., `TWIN-ENT-BASIC-A1B2C-2024`)
- **Pattern**: `/^TWIN-ENT-[A-Z0-9]{5}-[A-Z0-9]{4}$/`
- **Validation**: Automatic format checking before processing

### **License Types & Plans**
```typescript
// Available license types:
- TWIN-ENT-TRIAL-XXXXX-YYYY  // 14 days trial
- TWIN-ENT-BASIC-XXXXX-YYYY  // 1 year basic
- TWIN-ENT-PRO-XXXXX-YYYY    // 1 year professional  
- TWIN-ENT-ENT-XXXXX-YYYY    // 1 year enterprise
- TWIN-ENT-DEMO-2024         // Demo key (30 days)
```

### **Validation Features**
- ✅ **Format validation** - Checks key structure
- ✅ **Expiration checking** - Validates license expiration
- ✅ **Package authorization** - Checks if package is allowed
- ✅ **Feature access** - Validates feature availability
- ✅ **Caching** - 5-minute cache for performance
- ✅ **Error handling** - Clear error messages

---

## 🛠️ **2. License Service**

### **Getting License Keys**
```typescript
import { LicenseService } from '@twin.org/ui-components-enterprise';

// Get available plans
const plans = LicenseService.getPlans();

// Request a license key
const response = await LicenseService.requestLicense({
  email: 'user@example.com',
  company: 'My Company',
  plan: 'basic',
  packageName: '@twin.org/my-app',
  useCase: 'Building a web application'
});

if (response.success) {
  console.log('License key:', response.licenseKey);
} else {
  console.error('Error:', response.error);
}
```

### **Available Plans**
| Plan | Price | Duration | Packages | Features |
|------|-------|----------|----------|----------|
| **Trial** | Free | 14 days | 1 | Basic components |
| **Basic** | $99/year | 1 year | 2 | All components + email support |
| **Pro** | $299/year | 1 year | Unlimited | All + priority support |
| **Enterprise** | Contact us | 1 year | Unlimited | All + premium support |

---

## 🏗️ **3. Improved Structure**

### **Better Error Handling**
```typescript
// Before: Simple boolean check
const isValid = validator.isLicensed();

// After: Detailed validation result
const result = validator.setLicenseKey(key);
if (!result.isValid) {
  console.error('License error:', result.error);
}
```

### **Feature-Based Access**
```typescript
// Check if specific feature is available
if (validator.isFeatureAvailable('advanced-features')) {
  // Use advanced features
}
```

### **License Status Information**
```typescript
const status = validator.getLicenseStatus();
console.log('Plan:', status.plan);
console.log('Expires:', status.expiresAt);
console.log('Features:', status.features);
```

---

## 🚀 **4. Usage Examples**

### **Setting Up License**
```typescript
import { PackageLicenseValidator } from '@twin.org/ui-components-enterprise';

// Set license key
const result = PackageLicenseValidator.getInstance().setLicenseKey('TWIN-ENT-BASIC-A1B2C-2024');

if (!result.isValid) {
  console.error('License setup failed:', result.error);
  return;
}

console.log('License activated successfully!');
```

### **Using Enterprise Components**
```typescript
import { Button } from '@twin.org/ui-components-enterprise';

// License is automatically checked when component is used
function MyComponent() {
  return <Button>Click me</Button>; // Will show license error if not valid
}
```

### **Getting License Information**
```typescript
import { LicenseService } from '@twin.org/ui-components-enterprise';

// Get all plans
const plans = LicenseService.getPlans();

// Get contact info
const contact = LicenseService.getContactInfo();

// Get FAQ
const faq = LicenseService.getFAQ();

// Get installation instructions
const instructions = LicenseService.getInstallationInstructions();
```

---

## 🔧 **5. Configuration Options**

### **Environment Variables**
```bash
# Set license key via environment
export VITE_STORYBOOK_ENTERPRISE_LICENSE="TWIN-ENT-BASIC-A1B2C-2024"
```

### **Demo Configuration**
```json
{
  "enterprise": {
    "enabled": true,
    "licenseKey": "TWIN-ENT-DEMO-2024"
  }
}
```

### **Direct Code**
```typescript
// In your app initialization
PackageLicenseValidator.getInstance().setLicenseKey('YOUR-KEY');
```

---

## 🎯 **6. Benefits of New System**

### **For Developers**
- ✅ **Clear error messages** - Know exactly what's wrong
- ✅ **Feature-based access** - Check specific capabilities
- ✅ **Better debugging** - Detailed license status
- ✅ **Performance** - Caching reduces API calls

### **For Users**
- ✅ **Easy key generation** - Service handles everything
- ✅ **Multiple plans** - Choose what fits your needs
- ✅ **Clear pricing** - Transparent cost structure
- ✅ **Good support** - FAQ and contact information

### **For Business**
- ✅ **Proper validation** - Prevents unauthorized use
- ✅ **Flexible licensing** - Different plans for different needs
- ✅ **Revenue tracking** - Know which plans are popular
- ✅ **Customer support** - Built-in help system

---

## 🆘 **7. Troubleshooting**

### **Common Issues**
1. **Invalid key format** - Use correct format: `TWIN-ENT-XXXXX-YYYY`
2. **Expired license** - Renew your license
3. **Package not authorized** - Check your plan limits
4. **Feature not available** - Upgrade your plan

### **Getting Help**
- **Email**: enterprise@twin.org
- **Website**: https://twin.org/enterprise
- **Phone**: +1 (555) 123-4567
- **FAQ**: Built into the service

---

## 🎉 **Summary**

The new license system is much more robust and user-friendly:

- **🔑 Proper validation** with clear error messages
- **🛠️ License service** to help users get keys
- **📊 Multiple plans** for different needs
- **⚡ Performance optimized** with caching
- **🆘 Better support** with FAQ and contact info
- **🎯 Feature-based access** control

This structure is production-ready and provides a solid foundation for a commercial component library! 