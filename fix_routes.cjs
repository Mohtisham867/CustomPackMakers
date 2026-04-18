const fs = require('fs');

const content = fs.readFileSync('src/pages/categories/SubscriptionBoxes.tsx', 'utf8');

let updated = content.replace(
    /\{ name: \"(.*?)\", image: (.*?), description: \"(.*?)\" \},?/g,
    (match, name) => {
        let link = name.toLowerCase().replace(/ /g, '-').replace(/[^a-z0-9-]/g, '');
        // Exceptions mapping what we saw in App.tsx
        if (link === 'chocolate-subscription-box') link = 'chocolate-subscription-box';
        else if (link === 'stationery-subscription-box') link = 'stationery-subscription-box';
        else if (name === 'Subscription Boxes For Kids') link = 'subscription-boxes-for-kids';

        return match.replace('}', ', link: \"/shapes-styles/subscription-boxes/' + link + '\" }');
    }
);

// Second update: wrap Card inside Link where applicable
// First let's do a careful string replacement for the grid map function.
updated = updated.replace(
    /\{relatedProducts\.map\(\(product, index\) => \(\s*<Card\s*key=\{index\}\s*className="overflow-hidden border-border bg-card hover:shadow-lg transition-all duration-300 group cursor-pointer text-left"\s*>([\s\S]*?)<\/Card>\s*\)\)}/g,
    `{relatedProducts.map((product, index) => (
                            product.link ? (
                                <Link key={index} to={product.link} className="block">
                                    <Card
                                        className="overflow-hidden border-border bg-card hover:shadow-lg transition-all duration-300 group cursor-pointer text-left h-full"
                                    >$1</Card>
                                </Link>
                            ) : (
                                <Card
                                    key={index}
                                    className="overflow-hidden border-border bg-card hover:shadow-lg transition-all duration-300 group cursor-pointer text-left h-full"
                                >$1</Card>
                            )
                        ))}`
);

fs.writeFileSync('src/pages/categories/SubscriptionBoxes.tsx', updated);
