const fs = require('fs');
const path = require('path');

const filepath = 'd:\\CustomBoxe\\src\\pages\\categories\\CustomMylarBags.tsx';

try {
    const content = fs.readFileSync(filepath, 'utf8');
    console.log("Read file length:", content.length);

    const seoRegex = /<SEOContent>[\s\S]*?<\/SEOContent>/;
    const match = content.match(seoRegex);

    if (match) {
        console.log("Match FOUND!");
        console.log("Match length:", match[0].length);
        console.log("Match preview:", match[0].substring(0, 100));

        const newContentBlock = "<h2>DEBUG REPLACEMENT SUCCESS</h2>";
        const replacement = `<SEOContent>\n${newContentBlock}\n</SEOContent>`;

        const newFileContent = content.replace(seoRegex, replacement);
        console.log("New file length:", newFileContent.length);

        fs.writeFileSync(filepath, newFileContent, 'utf8');
        console.log("Wrote file successfully.");
    } else {
        console.log("Match NOT FOUND.");
        // print snippet around where we expect it
        const idx = content.indexOf('<SEOContent>');
        console.log("index of <SEOContent>:", idx);
        if (idx !== -1) {
            console.log("Snippet:", content.substring(idx, idx + 200));
        }
    }

} catch (err) {
    console.error(err);
}
