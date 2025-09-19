# 🚀 GitHub Pages Deployment Guide

## 📋 **Quick Setup for GitHub Pages**

### **🔧 Step 1: Repository Setup**
```bash
# Create new repository on GitHub
# Clone to local machine
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name

# Copy V2 backup files
cp -r /path/to/v2-backup/* .

# Add all files
git add .
git commit -m "Add PickerWheel Contest App V2.0"
git push origin main
```

### **⚙️ Step 2: Enable GitHub Pages**
1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll to **Pages** section
4. Under **Source**, select **Deploy from a branch**
5. Choose **main** branch and **/ (root)** folder
6. Click **Save**

### **🌐 Step 3: Access Your App**
Your app will be available at:
```
https://yourusername.github.io/your-repo-name/
```

---

## 🔍 **Troubleshooting GitHub Pages Issues**

### **❌ Icons Show as Emojis Instead of Images**

#### **Common Causes:**
1. **Case Sensitivity**: GitHub Pages servers are case-sensitive
2. **Path Issues**: Incorrect relative paths
3. **File Loading**: HTTPS/CORS restrictions
4. **Repository Structure**: Files in wrong locations

#### **✅ Solutions Applied in V2:**

##### **1. Smart Path Resolution**
```javascript
// Automatically detects GitHub Pages and adjusts paths
function resolveAssetPath(path) {
    const isGitHubPages = window.location.hostname.includes('github.io');
    const currentPath = window.location.pathname;
    
    if (isGitHubPages && currentPath !== '/') {
        const pathParts = currentPath.split('/').filter(part => part);
        if (pathParts.length > 0) {
            const repoName = pathParts[0];
            return `/${repoName}/${path}`;
        }
    }
    return path;
}
```

##### **2. Enhanced Error Logging**
```javascript
// Debug image loading issues
iconImage.onerror = () => {
    console.warn(`Failed to load icon: ${prize.icon} for prize: ${prize.name}`);
    // Falls back to emoji
};

iconImage.onload = () => {
    console.log(`Successfully loaded icon: ${prize.icon} for prize: ${prize.name}`);
};
```

##### **3. Robust Fallback System**
- Images load first
- If image fails → emoji fallback
- Console logging for debugging
- Works on both local and GitHub Pages

---

## 🔧 **File Structure for GitHub Pages**

### **✅ Correct Structure:**
```
your-repo-name/
├── index.html
├── script.js
├── style.css
├── prize-config.js
├── icons/
│   ├── fridge.png
│   ├── smart-tv.png
│   └── ... (all 16 icons)
├── myt-mobiles-logo.png
├── red-scooter.png
├── *.mp3 (audio files)
└── other files...
```

### **❌ Common Mistakes:**
- Icons folder in wrong location
- Case mismatches (Icons/ vs icons/)
- Missing files
- Incorrect paths in prize-config.js

---

## 🧪 **Testing Your Deployment**

### **1. Local Testing:**
```bash
cd your-repo-directory
python3 -m http.server 8000
# Visit http://localhost:8000
```

### **2. GitHub Pages Testing:**
1. Visit your GitHub Pages URL
2. Open browser console (F12)
3. Look for image loading messages:
   - ✅ `Successfully loaded icon: icons/fridge.png for prize: Refrigerator`
   - ❌ `Failed to load icon: icons/fridge.png for prize: Refrigerator`

### **3. Debug Commands:**
```javascript
// In browser console on your GitHub Pages site
console.log('Current path:', window.location.pathname);
console.log('Is GitHub Pages:', window.location.hostname.includes('github.io'));

// Test path resolution
console.log('Resolved path:', resolveAssetPath('icons/fridge.png'));
```

---

## 🎯 **Optimization for GitHub Pages**

### **✅ Best Practices:**

#### **1. File Naming:**
- Use lowercase filenames
- No spaces in filenames
- Consistent naming convention

#### **2. Path Handling:**
- Always use relative paths
- Let the resolver handle GitHub Pages paths
- Test both locally and on GitHub Pages

#### **3. Error Handling:**
- Robust fallback systems
- Console logging for debugging
- Graceful degradation to emojis

#### **4. Performance:**
- Optimize image sizes
- Use appropriate formats (PNG for icons)
- Enable browser caching

---

## 🚀 **Deployment Checklist**

### **Before Deployment:**
- [ ] All files in correct locations
- [ ] Icons folder contains all 16 PNG files
- [ ] File names match prize-config.js exactly
- [ ] Local testing successful
- [ ] Console shows no errors

### **After Deployment:**
- [ ] GitHub Pages site loads correctly
- [ ] Icons display as images (not emojis)
- [ ] Wheel spins properly
- [ ] Prize modals show images
- [ ] Mobile experience works
- [ ] Console shows successful image loads

### **If Icons Still Show as Emojis:**
1. Check browser console for error messages
2. Verify file paths and names
3. Ensure icons folder is in root directory
4. Check GitHub Pages build status
5. Wait 5-10 minutes for GitHub Pages to update

---

## 📞 **Support**

If you're still experiencing issues:

1. **Check Console Logs**: Look for specific error messages
2. **Verify File Structure**: Ensure all files are in correct locations
3. **Test Locally First**: Make sure it works locally before deploying
4. **GitHub Pages Delay**: Allow 5-10 minutes for changes to propagate

The V2 backup includes all necessary fixes for GitHub Pages compatibility!
