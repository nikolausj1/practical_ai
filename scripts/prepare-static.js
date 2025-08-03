const fs = require('fs');
const path = require('path');

// Function to create directory if it doesn't exist
function ensureDirectoryExists(directory) {
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory, { recursive: true });
    console.log(`Created directory: ${directory}`);
  }
}

// Function to copy a file
function copyFile(source, destination) {
  try {
    const content = fs.readFileSync(source);
    fs.writeFileSync(destination, content);
    console.log(`Copied: ${source} -> ${destination}`);
  } catch (error) {
    console.error(`Error copying ${source} to ${destination}:`, error);
  }
}

// Function to copy a directory recursively
function copyDirectory(source, destination) {
  ensureDirectoryExists(destination);
  
  const items = fs.readdirSync(source);
  
  items.forEach(item => {
    const sourcePath = path.join(source, item);
    const destPath = path.join(destination, item);
    
    const stats = fs.statSync(sourcePath);
    
    if (stats.isDirectory()) {
      copyDirectory(sourcePath, destPath);
    } else {
      copyFile(sourcePath, destPath);
    }
  });
}

// Main function
function prepareStaticFiles() {
  console.log('Preparing static files for Next.js build...');
  
  // Ensure public directory exists
  const publicDir = path.join(__dirname, '../public');
  ensureDirectoryExists(publicDir);
  
  // Copy styles
  const stylesSource = path.join(__dirname, '../styles');
  const stylesDestination = path.join(publicDir, 'styles');
  if (fs.existsSync(stylesSource)) {
    copyDirectory(stylesSource, stylesDestination);
  }
  
  // Copy scripts
  const scriptsSource = path.join(__dirname, '../scripts');
  const scriptsDestination = path.join(publicDir, 'scripts');
  if (fs.existsSync(scriptsSource)) {
    copyDirectory(scriptsSource, scriptsDestination);
  }
  
  // Copy public assets (if they exist)
  const publicAssetsSource = path.join(__dirname, '../public');
  const publicAssetsDestination = path.join(publicDir);
  if (fs.existsSync(publicAssetsSource)) {
    // Read existing files in public directory
    const items = fs.readdirSync(publicAssetsSource);
    
    // Copy each item except the styles and scripts directories we just created
    items.forEach(item => {
      if (item !== 'styles' && item !== 'scripts') {
        const sourcePath = path.join(publicAssetsSource, item);
        const destPath = path.join(publicAssetsDestination, item);
        
        const stats = fs.statSync(sourcePath);
        
        if (stats.isDirectory()) {
          copyDirectory(sourcePath, destPath);
        } else {
          copyFile(sourcePath, destPath);
        }
      }
    });
  }
  
  console.log('Static file preparation complete!');
}

// Run the preparation
prepareStaticFiles();
