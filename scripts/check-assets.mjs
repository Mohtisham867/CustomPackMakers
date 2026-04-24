import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectRoot = path.join(__dirname, '..');
const assetsRoot = path.join(projectRoot, 'src', 'assets');

function getAllFiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);
  arrayOfFiles = arrayOfFiles || [];
  files.forEach(function(file) {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
    } else {
      arrayOfFiles.push(fullPath);
    }
  });
  return arrayOfFiles;
}

const tsxFiles = getAllFiles(path.join(projectRoot, 'src'), []).filter(f => f.endsWith('.tsx'));

console.log(`Checking ${tsxFiles.length} files...`);

let missingCount = 0;

tsxFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf-8');
    const importRegex = /import\s+.*\s+from\s+["']@\/assets\/(.*\.webp)["']/g;
    let match;
    
    let fileReported = false;
    while ((match = importRegex.exec(content)) !== null) {
        const relativePath = match[1];
        const absolutePath = path.join(assetsRoot, relativePath);
        
        const dir = path.dirname(absolutePath);
        const expectedBase = path.basename(absolutePath);
        let exactMatch = false;
        let casingMatch = null;

        if (fs.existsSync(dir)) {
            const siblings = fs.readdirSync(dir);
            exactMatch = siblings.includes(expectedBase);
            if (!exactMatch) {
                casingMatch = siblings.find(s => s.toLowerCase() === expectedBase.toLowerCase());
            }
        }
        
        if (!exactMatch) {
            if (!fileReported) {
                console.log(`\nFile: ${path.relative(projectRoot, file)}`);
                fileReported = true;
            }
            if (casingMatch) {
                console.error(`  [CASING MISMATCH] Expected: ${expectedBase}, Found: ${casingMatch}`);
            } else {
                console.error(`  [MISSING] ${relativePath}`);
            }
            missingCount++;
        }
    }
});

if (missingCount === 0) {
    console.log("\nNo missing assets found!");
} else {
    console.log(`\nFound ${missingCount} missing assets.`);
}
