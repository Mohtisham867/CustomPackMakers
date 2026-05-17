import fs from 'fs';
import path from 'path';
import { globSync } from 'glob';

// Function to check if a file exists with exact casing
function getExactCasingPath(filePath) {
  const parts = path.resolve(filePath).split(path.sep);
  let currentPath = parts[0] + path.sep;
  let exactPath = currentPath;
  let isExact = true;
  let correctedRelativeParts = [];

  for (let i = 1; i < parts.length; i++) {
    const part = parts[i];
    if (!part) continue;
    
    try {
      const children = fs.readdirSync(currentPath);
      if (!children.includes(part)) {
        const match = children.find(c => c.toLowerCase() === part.toLowerCase());
        if (match) {
          isExact = false;
          currentPath = path.join(currentPath, match);
          exactPath = path.join(exactPath, match);
          correctedRelativeParts.push(match);
        } else {
          return { exact: false, notFound: true, brokenAt: part, fullPath: currentPath };
        }
      } else {
        currentPath = path.join(currentPath, part);
        exactPath = path.join(exactPath, part);
        correctedRelativeParts.push(part);
      }
    } catch (e) {
      return { exact: false, notFound: true, brokenAt: part, fullPath: currentPath };
    }
  }
  return { exact: isExact, notFound: false, exactPath, correctedParts: correctedRelativeParts };
}

const files = globSync('src/**/*.{tsx,ts}');
let foundIssues = false;
let filesModified = 0;

for (const file of files) {
  let content = fs.readFileSync(file, 'utf-8');
  let originalContent = content;
  let isModified = false;

  const regex = /from ['"](@\/assets\/[^'"]+)['"]/g;
  let match;
  // To avoid infinite loops or messed up replacements, we'll collect all replacements first
  const replacements = [];

  while ((match = regex.exec(content)) !== null) {
    const importPath = match[1];
    const relativePath = importPath.replace('@/assets/', 'src/assets/');
    const absolutePath = path.resolve(relativePath);
    
    const result = getExactCasingPath(absolutePath);
    if (!result.exact && !result.notFound) {
      // Reconstruct the corrected import path
      // we know the prefix is @/assets/, so we just need the parts after src/assets/
      const partsAfterAssets = result.correctedParts.slice(result.correctedParts.indexOf('assets') + 1);
      const correctedImportPath = '@/assets/' + partsAfterAssets.join('/');
      
      replacements.push({ original: importPath, corrected: correctedImportPath });
      foundIssues = true;
    }
  }

  const regex2 = /import [a-zA-Z0-9_]+ from ['"](\.\.?\/.*assets\/[^'"]+)['"]/g;
  while ((match = regex2.exec(content)) !== null) {
      const importPath = match[1];
      const absolutePath = path.resolve(path.dirname(file), importPath);
      const result = getExactCasingPath(absolutePath);
      if (!result.exact && !result.notFound) {
          // find where 'assets' is in the parts
          const assetIndex = result.correctedParts.indexOf('assets');
          if(assetIndex !== -1) {
              const partsAfterAssets = result.correctedParts.slice(assetIndex + 1);
              // get prefix before assets
              const prefixMatch = importPath.match(/^(.*assets\/)/);
              if (prefixMatch) {
                  const correctedImportPath = prefixMatch[1] + partsAfterAssets.join('/');
                  replacements.push({ original: importPath, corrected: correctedImportPath });
                  foundIssues = true;
              }
          }
      }
  }

  // Apply replacements
  for (const { original, corrected } of replacements) {
    console.log(`Fixing in ${file}: ${original} -> ${corrected}`);
    // Replace only the specific string to avoid matching substrings
    content = content.replace(new RegExp(original.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), corrected);
    isModified = true;
  }

  if (isModified && content !== originalContent) {
    fs.writeFileSync(file, content, 'utf-8');
    filesModified++;
  }
}

console.log(`\nScan complete. Found and fixed casing issues in ${filesModified} files.`);
