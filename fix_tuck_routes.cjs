const fs = require('fs');

const content = fs.readFileSync('src/pages/categories/TuckBoxes.tsx', 'utf8');

let updated = content.replace(
    /\{ name: \"(.*?)\", image: (.*?), description: \"(.*?)\" \},?/g,
    (match, name) => {
        let link = name.toLowerCase().replace(/ /g, '-').replace(/[^a-z0-9-]/g, '');
        return match.replace('}', ', link: \"/shapes-styles/tuck-boxes/' + link + '\" }');
    }
);

updated = updated.replace(
    /\{relatedProducts\.map\(\(product, index\) => \(\s*<Card\s*key=\{index\}\s*className=\"overflow-hidden border-border bg-card hover:shadow-lg transition-all duration-300 group cursor-pointer\"\s*>([\s\S]*?)<\/Card>\s*\)\)}/g,
    `{relatedProducts.map((product, index) => (
                                product.link ? (
                                    <Link key={index} to={product.link} className=\"block\">
                                        <Card
                                            className=\"overflow-hidden border-border bg-card hover:shadow-lg transition-all duration-300 group cursor-pointer h-full\"
                                        >$1</Card>
                                    </Link>
                                ) : (
                                    <Card
                                        key={index}
                                        className=\"overflow-hidden border-border bg-card hover:shadow-lg transition-all duration-300 group cursor-pointer h-full\"
                                    >$1</Card>
                                )
                            ))}`
);

fs.writeFileSync('src/pages/categories/TuckBoxes.tsx', updated);
