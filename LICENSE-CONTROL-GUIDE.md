# License Control Guide

## 🎯 **How to Enable/Disable Enterprise Components**

There are **3 different ways** to control the license system. Choose the one that works best for your situation:

---

## 🎮 **Method 1: Demo Config (Easiest for Testing)**

### **Enable Enterprise Components:**
```json
// Edit: apps/ui-storybook-react/demo-config.json
{
  "enterprise": {
    "enabled": true,  // ← Set to true
    "licenseKey": "TWIN-ENT-DEMO-2024"
  }
}
```

### **Disable Enterprise Components:**
```json
// Edit: apps/ui-storybook-react/demo-config.json
{
  "enterprise": {
    "enabled": false,  // ← Set to false
    "licenseKey": "TWIN-ENT-DEMO-2024"
  }
}
```

**✅ Pros:** Easy, no code changes, perfect for testing
**❌ Cons:** Only works for Storybook demo

---

## 🔧 **Method 2: Environment Variable (For Production)**

### **Enable Enterprise Components:**
```bash
# Set environment variable before starting Storybook
export VITE_STORYBOOK_ENTERPRISE_LICENSE="TWIN-ENT-YOUR-ACTUAL-KEY"
npm run storybook
```

### **Or use a .env file:**
```bash
# Create: apps/ui-storybook-react/.env
VITE_STORYBOOK_ENTERPRISE_LICENSE=TWIN-ENT-YOUR-ACTUAL-KEY
```

### **Disable Enterprise Components:**
```bash
# Unset the environment variable
unset VITE_STORYBOOK_ENTERPRISE_LICENSE
npm run storybook
```

**✅ Pros:** Secure, works in production, no code changes
**❌ Cons:** Requires environment setup

---

## 💻 **Method 3: Direct Code (For Development)**

### **Enable Enterprise Components:**
```typescript
// Edit: apps/ui-storybook-react/src/license-setup.ts
// Uncomment and modify these lines:

const DIRECT_LICENSE_KEY = 'TWIN-ENT-YOUR-ACTUAL-KEY';
PackageLicenseValidator.getInstance().setLicenseKey(DIRECT_LICENSE_KEY);
console.log('Enterprise license set via direct code:', DIRECT_LICENSE_KEY);
```

### **Disable Enterprise Components:**
```typescript
// Edit: apps/ui-storybook-react/src/license-setup.ts
// Comment out or remove the license setting code
```

**✅ Pros:** Full control, works everywhere
**❌ Cons:** Requires code changes, license key in code

---

## 🚀 **Quick Start Examples**

### **For Quick Testing:**
1. Open `apps/ui-storybook-react/demo-config.json`
2. Change `"enabled": true` to `"enabled": false` (or vice versa)
3. Refresh Storybook

### **For Production:**
```bash
# Set your real license key
export VITE_STORYBOOK_ENTERPRISE_LICENSE="TWIN-ENT-PROD-2024-XXXXX"
npm run storybook
```

### **For Development:**
```typescript
// In license-setup.ts, uncomment and set your key:
const DIRECT_LICENSE_KEY = 'TWIN-ENT-DEV-2024';
PackageLicenseValidator.getInstance().setLicenseKey(DIRECT_LICENSE_KEY);
```

---

## 🔍 **How to Verify It's Working**

### **When Enabled:**
- ✅ Enterprise components (Button, Navbar, Footer, etc.) display correctly
- ✅ Console shows: "✅ Enterprise components ENABLED"
- ✅ No license error messages

### **When Disabled:**
- ❌ Enterprise components show license error messages
- ✅ Core components (Alert, Accordion, etc.) work normally
- ✅ Console shows: "❌ Enterprise components DISABLED"

---

## 🎯 **Priority Order**

The system checks in this order:
1. **Environment Variable** (highest priority)
2. **Demo Config** (if no env var)
3. **Direct Code** (if uncommented)

So if you set an environment variable, it will override the demo config!

---

## 🆘 **Troubleshooting**

### **Enterprise components still showing errors:**
1. Check console logs to see which method is being used
2. Make sure you're using the correct method
3. Restart Storybook after making changes

### **Core components showing license errors:**
- This shouldn't happen! Core components don't need licenses
- Check if there's a configuration issue

### **License key not working:**
- Make sure the key format is correct (starts with "TWIN-ENT-")
- Check for typos in the license key
- Verify the key is valid for your package

### **Environment variable not working:**
- Make sure the variable name starts with `VITE_` (required for Vite)
- Restart Storybook after setting the environment variable
- Check that the variable is properly exported in your shell 