const fs = require('fs');
const path = require('path');

// Use relative path since we run from probox-studio-main
const dir = './src/pages/categories';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

console.log(`Found ${files.length} files.`);

files.forEach(file => {
    const filePath = path.join(dir, file);
    const content = fs.readFileSync(filePath, 'utf8');
    // Replace 'grid grid-cols-2' with 'grid grid-cols-1 sm:grid-cols-2'
    const newContent = content.replace(/grid grid-cols-2/g, 'grid grid-cols-1 sm:grid-cols-2');

    if (content !== newContent) {
        fs.writeFileSync(filePath, newContent);
        console.log(`Updated ${file}`);
    } else {
        // console.log(`No change in ${file}`);
    }
});
