const fs = require('fs');
const path = require('path');

// Define paths
const stylesDir = path.join(__dirname, '../styles');
const scriptsDir = path.join(__dirname, '../scripts');
const publicStylesDir = path.join(__dirname, '../public/styles');
const publicScriptsDir = path.join(__dirname, '../public/scripts');

// Ensure directories exist
if (!fs.existsSync(publicStylesDir)) {
  fs.mkdirSync(publicStylesDir, { recursive: true });
  console.log('Created public/styles directory');
}

if (!fs.existsSync(publicScriptsDir)) {
  fs.mkdirSync(publicScriptsDir, { recursive: true });
  console.log('Created public/scripts directory');
}

// Copy style files
fs.readdirSync(stylesDir).forEach(file => {
  if (file.endsWith('.css')) {
    const sourcePath = path.join(stylesDir, file);
    const destPath = path.join(publicStylesDir, file);
    fs.copyFileSync(sourcePath, destPath);
    console.log(`Copied ${sourcePath} to ${destPath}`);
  }
});

// Copy script files
fs.readdirSync(scriptsDir).forEach(file => {
  if (file.endsWith('.js') && file !== 'copy-static-assets.js' && file !== 'prepare-static.js') {
    const sourcePath = path.join(scriptsDir, file);
    const destPath = path.join(publicScriptsDir, file);
    fs.copyFileSync(sourcePath, destPath);
    console.log(`Copied ${sourcePath} to ${destPath}`);
  }
});

console.log('Static assets copied successfully!');
