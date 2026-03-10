import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { QuoteForm } from "@/components/QuoteForm";
import { InstantQuoteFormCompact } from "@/components/InstantQuoteFormCompact";
import { BrandRating } from "@/components/BrandRating";
import { Card, CardContent } from "@/components/ui/card";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";
import jewelryBoxesHero from "@/assets/jewelry-boxes/Jewelry Boxes hero.webp";

// Import professional product images
import braceletSquareBoxes from "@/assets/jewelry-boxes/Bracelet Square Boxes.webp";
import necklaceLidOffBoxes from "@/assets/jewelry-boxes/necklace-lid-off-boxes.webp";
import pendantBoxes from "@/assets/jewelry-boxes/Pendant Boxes.webp";
import braceletBoxes from "@/assets/jewelry-boxes/bracelet-boxes.webp";
import ringBoxes from "@/assets/jewelry-boxes/ring-boxes.webp";
import earringBoxes from "@/assets/jewelry-boxes/Earring Boxes.webp";
import luxuryJewelryBoxes from "@/assets/jewelry-boxes/luxury-jewelry-boxes.webp";
import necklaceBoxes from "@/assets/jewelry-boxes/necklace-boxes.webp";

import { SEOContent } from "@/components/SEOContent";

const relatedProducts = [
    { name: "Bracelet Square Boxes", image: braceletSquareBoxes, description: "Rigid square bracelet packaging with velvet inserts and premium finishing for elevated shelf and gifting presentation.", link: "/industries/jewelry-boxes/bracelet-square-boxes" },
    { name: "Custom Necklace Lid Off Packaging", image: necklaceLidOffBoxes, description: "Two-piece necklace boxes with refined lift-off lids, anti-tarnish interiors, and luxury printing options.", link: "/industries/jewelry-boxes/custom-necklace-lid-off-packaging" },
    { name: "Pendant Boxes", image: pendantBoxes, description: "Protective pendant boxes engineered to prevent chain tangling while preserving premium first-impression impact.", link: "/industries/jewelry-boxes/pendant-boxes" },
    { name: "Bracelet Boxes", image: braceletBoxes, description: "Elegant bracelet gift boxes with secure inserts, rigid structures, and soft-touch finishes for luxury brands.", link: "/industries/jewelry-boxes/bracelet-boxes" },
    { name: "Ring Boxes", image: ringBoxes, description: "High-end ring boxes with precision slots, anti-scratch lining, and premium branding for proposal and retail use.", link: "/industries/jewelry-boxes/ring-boxes" },
    { name: "Earring Boxes", image: earringBoxes, description: "Compact earring packaging designed to secure studs and drops with elegant interior pads and print detailing.", link: "/industries/jewelry-boxes/earring-boxes" },
    { name: "Luxury Jewelry Boxes", image: luxuryJewelryBoxes, description: "Statement packaging for premium jewelry collections featuring rigid board and couture finishing techniques.", link: "/industries/jewelry-boxes/luxury-jewelry-boxes" },
    { name: "Necklace Boxes", image: necklaceBoxes, description: "Premium necklace boxes with tailored inserts to stabilize chains and elevate unboxing with refined branding.", link: "/industries/jewelry-boxes/necklace-boxes" },
];

const JewelryBoxes = () => {
    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Header />

            {/* Breadcrumb */}
            <div className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 mt-[120px] md:mt-[140px]">
                <div className="container mx-auto px-4 py-3">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link to="/">Home</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link to="/industries">All Industries</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Jewelry Boxes</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </div>

            {/* Top Split Section */}
            <main className="py-8">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-16 mb-12 items-start">
                        {/* Left Side */}
                        <div className="space-y-6 text-center lg:text-left">
                            <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                                Custom Jewelry Boxes
                            </h1>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Elevate your jewelry brand with our premium custom jewelry boxes. From engagement ring boxes to luxury necklace packaging, we provide high-end solutions featuring anti-tarnish linings, velvet inserts, and sophisticated finishes that create an unforgettable unboxing experience.
                            </p>
                            <div className="pt-4 lg:pt-0 mx-auto lg:mx-0">
                                <div className="relative w-full max-w-[480px] h-[300px] overflow-hidden rounded-lg shadow-lg bg-muted mx-auto lg:mx-0">
                                    <img
                                        src={jewelryBoxesHero}
                                        alt="Custom Jewelry Boxes Collection"
                                        className="w-full h-full object-cover" loading="lazy"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Instant Quote Form */}
                        <div className="flex justify-end">
                            <InstantQuoteFormCompact customProducts={relatedProducts.map(p => p.name)} />
                        </div>
                    </div>

                    {/* Related Products Section */}
                    <section className="mt-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            Premium Presentation for Your Jewelry Collection
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
                            Explore our extensive range of specialized jewelry packaging designed to protect delicate pieces and showcase your brand's commitment to luxury and craftsmanship.
                        </p>

                        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                            {relatedProducts.map((product, index) => (
                                <Link key={index} to={product.link} className="block">
                                    <Card className="overflow-hidden border-border bg-card hover:shadow-lg transition-all duration-300 group cursor-pointer h-full">
                                        <CardContent className="p-0">
                                            <div className="h-48 lg:h-72 w-full bg-gray-50 rounded-t-lg overflow-hidden">
                                                <img
                                                    src={product.image}
                                                    alt={product.name}
                                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" loading="lazy"
                                                />
                                            </div>
                                            <div className="p-4 border-t border-border">
                                                <h3 className="font-semibold text-foreground text-sm mb-2">
                                                    {product.name}
                                                </h3>
                                                <p className="text-xs text-muted-foreground line-clamp-2 min-h-[3rem] block">
                                                    {product.description}
                                                </p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </Link>
                            ))}
                        </div>
                    </section>
                </div>
            </main>

            {/* Main Quote Form at Bottom */}
            <BrandRating />
            <QuoteForm />
            <SEOContent>
                <h2>The Ultimate Guide to Custom Jewelry Boxes</h2>
                <p>
                    In the competitive world of luxury jewelry retail, packaging is an extension of the product itself. Our <strong>Custom Jewelry Boxes</strong> are designed to mirror the elegance and value of the treasures they hold. From the moment a customer receives their package, the quality of the box sets the stage for the brilliance within.
                </p>
                <p>
                    We specialize in high-end structural design, utilizing rigid board and premium papers to create a sense of permanence and prestige. Whether you are a boutique designer or a national retail chain, our packaging solutions are engineered to enhance brand perception and ensure product safety.
                </p>

                <h3>Luxury Materials & Protective Interiors</h3>
                <p>
                    Protecting delicate jewelry from scratches, tangling, and tarnishing is our top priority. We offer a variety of specialized interior options:
                </p>
                <ul>
                    <li><strong>Anti-Tarnish Linings:</strong> Specialized fabrics to maintain the luster of silver and gold.</li>
                    <li><strong>Velvet & Suede Inserts:</strong> Soft-touch materials that provide a luxury backdrop for your pieces.</li>
                    <li><strong>Precision Foam Cutouts:</strong> Custom-fitted inserts that secure rings, earrings, and necklaces in place.</li>
                    <li><strong>Ribbon Ties & Magnetic Closures:</strong> Functional details that add a layer of sophistication to the unboxing.</li>
                </ul>

                <h3>Advanced Finishing for High-End Branding</h3>
                <p>
                    Your logo deserves the best presentation. We provide a full suite of printing and finishing techniques to make your brand stand out:
                </p>
                <ul>
                    <li><strong>Hot Foil Stamping:</strong> Add metallic gold, silver, or rose gold accents for a timeless luxury look.</li>
                    <li><strong>Embossing & Debossing:</strong> Create tactile depth that customers can feel when they hold your box.</li>
                    <li><strong>Spot UV & Soft-Touch Lamination:</strong> Modern finishes that offer a contrast between matte and gloss.</li>
                </ul>

                <h3>Wholesale Customization & Global Shipping</h3>
                <p>
                    We offer scalable production to meet your needs, whether you're launching a limited collection or stocking up for a peak season. Our manufacturing processes ensure consistent quality across every unit, with competitive wholesale pricing and reliable turnaround times.
                </p>
            </SEOContent>
            <Footer />
        </div>
    );
};

export default JewelryBoxes;
