# Demo Configuration for Enterprise Components

This Storybook instance demonstrates the enterprise licensing system for UI components.

## 🎯 Quick Demo Controls

### Enable Enterprise Components
```json
// demo-config.json
{
  "enterprise": {
    "enabled": true
  }
}
```

### Disable Enterprise Components
```json
// demo-config.json
{
  "enterprise": {
    "enabled": false
  }
}
```

## 🚀 How to Demo

### 1. **Show Working Enterprise Components**
- Set `"enabled": true` in `demo-config.json`
- Restart Storybook: `npm run storybook`
- Navigate to "ENTERPRISE" section in Storybook
- All enterprise components (Button, Navbar, Footer, etc.) will render correctly

### 2. **Show License Error Messages**
- Set `"enabled": false` in `demo-config.json`
- Restart Storybook: `npm run storybook`
- Navigate to "ENTERPRISE" section in Storybook
- All enterprise components will show license requirement error messages

## 📋 Available Enterprise Components

When enabled, you can demo:
- **Button** - Enhanced button with multiple variants
- **Navbar** - Navigation bar component
- **Footer** - Professional footer component
- **Label** - Form label component
- **Dropdown** - Advanced dropdown component

## 🔧 Configuration Options

```json
{
  "enterprise": {
    "enabled": true,           // Enable/disable enterprise components
    "licenseKey": "TWIN-ENT-DEMO-2024",  // Demo license key
    "description": "Demo configuration for enterprise components"
  },
  "demo": {
    "showLicenseInfo": true,   // Show license information
    "showConsoleLogs": true    // Show console logs for demo
  }
}
```

## 🎬 Demo Scenarios

### Scenario 1: "Look at our Enterprise Features"
- Enable enterprise components
- Show all the premium components working
- Demonstrate the value of the enterprise package

### Scenario 2: "See What Happens Without a License"
- Disable enterprise components
- Show the license error messages
- Demonstrate the protection system

### Scenario 3: "License System Demo"
- Start with disabled components
- Show error messages
- Enable components
- Show them working
- Demonstrate the licensing workflow

## 🔄 Quick Toggle Commands

```bash
# Enable enterprise components
echo '{"enterprise":{"enabled":true},"demo":{"showLicenseInfo":true,"showConsoleLogs":true}}' > demo-config.json

# Disable enterprise components
echo '{"enterprise":{"enabled":false},"demo":{"showLicenseInfo":true,"showConsoleLogs":true}}' > demo-config.json

# Restart Storybook
npm run storybook
```

## 📝 Notes

- Changes to `demo-config.json` require restarting Storybook
- The demo license key `TWIN-ENT-DEMO-2024` is for demonstration only
- In production, real license keys would be used
- Console logs can be disabled by setting `"showConsoleLogs": false` 