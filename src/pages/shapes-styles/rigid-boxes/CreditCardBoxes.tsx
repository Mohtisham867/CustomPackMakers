import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { QuoteForm } from "@/components/QuoteForm";
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
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TechnicalSpecsSection } from "@/components/TechnicalSpecsSection";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";


// Reusing existing images 
import customShoeBoxes from "@/assets/apparel-boxes/custom-shoe-boxes.webp";
import shoeBox1 from "@/assets/apparel-boxes/shoe-boxes/shoe 1.webp";
import shoeBox2 from "@/assets/apparel-boxes/shoe-boxes/shoe 2.webp";
import shoeBox3 from "@/assets/apparel-boxes/shoe-boxes/shoe 3.webp";
import shoeBox4 from "@/assets/apparel-boxes/shoe-boxes/shoe-4.webp";
import shoeBox5 from "@/assets/apparel-boxes/shoe-boxes/deferent.webp";
import shoeBoxHero from "@/assets/apparel-boxes/shoe-boxes/shoe 5.webp";

//FAQ image
import FAQimage from "@/assets/FAQ-image.webp";

// Placeholder specifically for related products
import { RelatedProductRigidBoxes } from "@/components/RelatedProductRigidBoxes";

export default function CreditCardBoxes() {
    const [selectedImage, setSelectedImage] = useState(0);

    // Product images for gallery
    const productImages = [
        { src: shoeBox1, alt: "Custom Credit Card Boxes - Main View" },
        { src: shoeBox2, alt: "Custom Credit Card Boxes - Side Angle" },
        { src: shoeBox3, alt: "Custom Credit Card Boxes - Open Box View" },
        { src: shoeBox4, alt: "Custom Credit Card Boxes - Detail Shot" },
        { src: shoeBoxHero, alt: "Custom Credit Card Boxes - Lifestyle Shot" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Credit Card Boxes | Premium Rigid Packaging | CustomPackMakers</title>
                <meta name="description" content="Order custom credit card boxes & luxury rigid packaging wholesale. Premium branded credit card boxes with fast turnaround, free shipping & full customization." />
                <meta name="keywords" content="custom credit card packaging, luxury credit card boxes, wholesale rigid boxes, custom branded rigid packaging, rigid box manufacturer" />
                <meta property="og:title" content="Custom Credit Card Boxes | Premium Rigid Packaging | CustomPackMakers" />
                <meta property="og:description" content="Premium custom credit card packaging for luxury cards and gifting. Rigid boxes, magnetic closures, full-color printing & eco-friendly options. Get a free quote." />
            </Helmet>
            <Header />

            {/* Breadcrumb */}
            <div className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 mt-[120px] md:mt-[160px]">
                <div className="container mx-auto px-[30px] py-4">
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
                                <BreadcrumbLink asChild>
                                    <Link to="/materials">Box by Materials</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link to="/categories/rigid-boxes">Rigid Boxes</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Credit Card Boxes</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </div>

            {/* HERO SECTION */}
            <section className="py-8 bg-background">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        {/* LEFT: Product Title & Description */}
                        <div className="lg:col-span-7 space-y-6">
                            <div className="w-20 h-1.5 bg-primary rounded-full"></div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight">
                                <span className="text-primary">Premium</span> Credit Card Boxes
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Wholesale custom branded credit card packaging engineered for luxury presentation, VIP unboxing experiences, and secure card delivery built to scale with your institution or brand.
                            </p>
                            <div className="pt-2">
                                <Button
                                    size="lg"
                                    className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                                    onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}
                                >
                                    Get a Quote
                                </Button>
                            </div>
                        </div>

                        {/* RIGHT: Large Product Image - Compact */}
                        <div className="lg:col-span-5 relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-muted group">
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200">
                                <img
                                    src={shoeBoxHero} // Placeholder
                                    alt="Custom Credit Card Boxes Hero"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PRODUCT OVERVIEW SECTION */}
            <section className="py-8 bg-slate-50">
                <div className="container mx-auto px-[5vw]">
                    {/* Section label + accent bar */}
                    <div className="flex items-center gap-3 mb-5">
                        <div className="w-10 h-1 bg-primary rounded-full" />
                        <span className="text-xs font-semibold tracking-widest text-primary uppercase">Product Overview</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 max-w-3xl">
                        Custom Credit Card Packaging Built for the VIP Client Experience
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            Our <strong className="text-foreground">custom credit card boxes</strong> are precision-engineered for financial institutions, luxury concierge services, and high-tier loyalty programs that refuse to compromise on presentation. Constructed from high-end rigid chipboard, premium specialty stocks, and exquisite exterior covers, each box delivers a sophisticated, VIP unboxing moment that a standard envelope simply cannot achieve. Whether you're delivering a heavy metal black card, a luxury gift card, or an exclusive club membership pass, our <strong className="text-foreground">custom branded credit card packaging</strong> is designed to perform flawlessly.
                        </p>
                        <p>
                            From ultra-slim slide-out sleeves to elegant magnetic closure clamshell boxes, our <strong className="text-foreground">rigid card packaging</strong> solutions accommodate all card sizes and fulfillment needs. Each box features pristine structural integrity, custom-cut foam or paperboard inserts that perfectly flush-fit the card, and additional layers for welcome letters or membership guides. With striking foil stamping, deep debossing, and soft-touch lamination, your <strong className="text-foreground">luxury credit card boxes</strong> become a powerful physical representation of your brand's prestige. Order wholesale with low minimums and our industry-leading 8–10 day turnaround.
                        </p>
                    </div>
                </div>
            </section>

            {/* INTERACTIVE PRODUCT & FORM SECTION */}
            <section className="py-10 bg-accent/5" id="quote-form">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end">

                        {/* LEFT SIDE: Product Gallery */}
                        <div className="lg:col-span-7 space-y-6">
                            {/* Large Main Image - 4:3 aspect ratio, object-cover */}
                            <div className="relative w-full max-w-lg mx-auto overflow-hidden rounded-lg shadow-sm border border-border bg-white" style={{ aspectRatio: '4/3' }}>
                                <img
                                    src={productImages[selectedImage].src}
                                    alt={productImages[selectedImage].alt}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Thumbnail Row — 5 images, aligned to main image width */}
                            <div className="w-full max-w-lg mx-auto grid grid-cols-5 gap-2">
                                {productImages.map((image, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setSelectedImage(index)}
                                        className={`relative w-full aspect-square overflow-hidden rounded-md border transition-all duration-200 ${selectedImage === index
                                            ? 'border-primary shadow-md ring-2 ring-primary/20'
                                            : 'border-slate-200 hover:border-slate-300 hover:shadow-sm'
                                            }`}
                                    >
                                        <img
                                            src={image.src}
                                            alt={`Thumbnail ${index + 1}`}
                                            className="w-full h-full object-cover"
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* RIGHT SIDE: Sticky Quote Form - Compact & Styled */}
                        <div className="lg:col-span-5 lg:sticky lg:top-24">
                            <Card className="shadow-lg border-slate-200 bg-slate-50/50 backdrop-blur-sm overflow-hidden">
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold text-foreground mb-5">
                                        Get a Custom Quote
                                    </h3>
                                    <form className="space-y-4">
                                        <div className="grid grid-cols-3 gap-3">
                                            <div className="space-y-1.5">
                                                <Label htmlFor="length" className="text-xs font-semibold text-muted-foreground">L (in)</Label>
                                                <Input id="length" type="number" placeholder="6" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label>
                                                <Input id="width" type="number" placeholder="4" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">D (in)</Label>
                                                <Input id="depth" type="number" placeholder="0.5" className="h-9 bg-white" />
                                            </div>
                                        </div>

                                        <div className="space-y-1.5">
                                            <Label htmlFor="quantity" className="text-xs font-semibold text-muted-foreground">Quantity</Label>
                                            <Input id="quantity" type="number" placeholder="1000" className="h-9 bg-white" />
                                        </div>

                                        <div className="space-y-1.5">
                                            <Label htmlFor="name" className="text-xs font-semibold text-muted-foreground">Name</Label>
                                            <Input id="name" type="text" placeholder="Your Name" className="h-9 bg-white" />
                                        </div>

                                        <div className="space-y-1.5">
                                            <Label htmlFor="email" className="text-xs font-semibold text-muted-foreground">Email</Label>
                                            <Input id="email" type="email" placeholder="email@example.com" className="h-9 bg-white" />
                                        </div>

                                        <Button
                                            type="submit"
                                            size="lg"
                                            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 shadow-md hover:shadow-lg transition-all duration-300 mt-2"
                                        >
                                            Submit Inquiry
                                        </Button>
                                    </form>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* TECHNICAL SPECIFICATIONS SECTION */}
            <TechnicalSpecsSection />

            {/* SEO CONTENT SECTION */}
            <section className="py-8 bg-slate-50 border-t border-slate-100">
                <div className="container mx-auto px-[5vw]">
                    {/* Heading outside the scrollable box */}
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">
                        Elevating Financial Prestige with Rigid Card Packaging
                    </h2>

                    {/* Scrollable content box */}
                    <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8
                            [&::-webkit-scrollbar]:w-2
                            [&::-webkit-scrollbar-track]:bg-gray-100
                            [&::-webkit-scrollbar-track]:rounded-full
                            [&::-webkit-scrollbar-thumb]:bg-primary
                            [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="
                            [&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-8 [&>h3]:mb-3 [&>h3]:first:mt-0
                            [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-5
                            [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-5 [&>ul]:space-y-2
                            [&>ul>li]:text-[15px] [&>ul>li]:text-slate-600">

                            <p>
                                In the competitive world of high-tier banking, exclusive memberships, and luxury gifting, a standard paper envelope fails to communicate the prestige of what lies inside. Receiving a premium card—such as a heavy metal credit card, an exclusive black card, or a high-value gift card—should feel like an momentous occasion. Custom rigid credit card boxes transform the delivery of a simple piece of plastic or metal into an elite unboxing experience. This crucial physical interaction sets the tone for the entire customer relationship extending from that moment.
                            </p>
                            <p>
                                At CustomPackMakers, we specialize in engineering custom rigid packaging that serves as the perfect ambassador for financial institutions and elite brands. We recognize that the precision fit of the card, the sleekness of the box profile, and the flawless exterior finish all contribute to the cardholder's perceived status. By investing in our top-tier custom credit card boxes, you ensure your clients feel immediately valued and deeply connected to your brand's prestige.
                            </p>

                            <h3>Uncompromising Rigid Construction in an Ultra-Slim Profile</h3>
                            <p>
                                The defining challenge of luxury card packaging is maintaining rigorous structural integrity within a very slim, sleek profile. We utilize premium-grade materials to construct our rigid credit card boxes:
                            </p>
                            <ul>
                                <li><strong>High-Density Chipboard:</strong> The core of our card boxes is made from dense, highly compressed chipboard. This offers spectacular rigidity and prevents any bending or flexing during transit or handling, essential for protecting delicate chips and heavy metal cards.</li>
                                <li><strong>Premium Wrap Materials:</strong> The raw board is flawlessly wrapped in premium materials. Popular choices include soft-touch matte papers that feel instantly luxurious, textured faux leather wraps, deep black velvet finishes, and high-gloss art papers.</li>
                                <li><strong>Flawless Minimalist Design:</strong> Our manufacturing process ensures sharp, precise edges and perfectly flat surfaces, crucial for executing minimalist, modern designs where any flaw would be glaringly obvious.</li>
                            </ul>
                            <p>
                                This combination of dense rigidity and a slim profile guarantees that your cards arrive safely while maintaining a highly sophisticated, modern aesthetic that fits perfectly in a client's hands.
                            </p>

                            <h3>Precision Inserts and Interior Architecture</h3>
                            <p>
                                The interior of a credit card box is where the true engineering lies. The card must be held precisely, showcased beautifully, and be easy to extract without damage:
                            </p>
                            <ul>
                                <li><strong>Flush-Fit Custom Inserts:</strong> We design custom die-cut inserts specifically for the exact dimensions of standard CR80 credit cards (and custom sizes if needed). A precision-cut high-density EVA foam insert or a sophisticated multi-layered paperboard insert ensures the card sits perfectly flush, requiring a deliberate push or pull via a ribbon tab to remove.</li>
                                <li><strong>Multi-Tiered Designs:</strong> High-end card deliveries often include welcome letters, terms and conditions booklets, or concierge guides. We can engineer interior layouts with hidden compartments, elegant paper envelopes attached to the inner lid, or tiered trays to hold all necessary collateral cleanly underneath the card.</li>
                                <li><strong>Luxurious Linings:</strong> The interior can be lined with premium materials such as suede, velvet, or silk, providing a striking contrast to the card itself and further elevating the unboxing experience when the lid is lifted.</li>
                            </ul>

                            <h3>Exquisite Finishing Touches for VIP Presentation</h3>
                            <p>
                                The true mark of premium card packaging lies in its finishing details. Our advanced manufacturing techniques allow us to apply subtle yet stunning decorative elements:
                            </p>
                            <ul>
                                <li><strong>Hot Foil Stamping:</strong> Apply brilliant metallic foils (gold, platinum, silver, or holographic) to your institution's crest, logo, or the client's name for an unmistakable touch of wealth and luxury.</li>
                                <li><strong>Deep Embossing and Debossing:</strong> Create an elegant tactile experience. A deep debossed logo on a dark, textured rigid box offers a highly sophisticated 'stealth wealth' aesthetic popular among high-net-worth brands.</li>
                                <li><strong>Spot UV Coating:</strong> Highlight specific patterns, monograms, or security seals with a glossy finish against a soft matte background, creating refined visual depth.</li>
                                <li><strong>Concealed Magnetic Closures:</strong> For hinged 'book-style' card boxes, integrated hidden magnets provide a highly satisfying, secure 'snap' closure, elevating the mechanical feel of the box.</li>
                            </ul>

                            <h3>The Return on Investment of Card Packaging</h3>
                            <p>
                                The unboxing of a new premium card is a highly shareable moment, increasingly documented by clients on social media. A flawless, luxurious presentation encourages this sharing, serving as free, highly credible marketing for your institution. Furthermore, the tangible feeling of quality reinforces the client's decision to join your specific tier or program, increasing long-term card activation and usage rates.
                            </p>
                            <p>
                                Partner with CustomPackMakers to design rigid credit card packaging that reflects the superior status of your brand, protects your high-value cards, and delivers a memorable VIP experience. With our secure manufacturing capabilities, structural design expertise, and rapid wholesale turnaround times, achieving packaging perfection for your next card rollout is seamless and highly impactful.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            {/* RELATED PRODUCTS CAROUSEL */}
            <RelatedProductRigidBoxes />

            {/* WHY CHOOSE US SECTION */}
            <section className="py-12 relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #fafafa 0%, #f4f6ff 60%, #f0fdf8 100%)' }}>
                {/* Subtle decorative blobs */}
                <div className="absolute top-0 left-0 w-80 h-80 bg-primary/4 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-300/8 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl pointer-events-none" />

                <div className="container mx-auto px-[30px] relative z-10">
                    {/* Centered Section Header */}
                    <div className="text-center mb-14">
                        <span className="inline-block text-xs font-semibold tracking-widest text-primary uppercase mb-3 bg-primary/10 px-4 py-1.5 rounded-full">Our Promise</span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
                            Why Brands Choose <span className="text-primary">CustomPackMakers</span>
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            We combine immaculate craftsmanship, tight security, and precision engineering to deliver card packaging that defines exclusive membership.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">

                        {/* LEFT: Luxury editorial typography */}
                        <div className="space-y-5">

                            {/* Feature 1 */}
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">
                                        Uncompromising Structural Integrity
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Every <strong>custom rigid credit card box</strong> we produce is built from dense chipboard, achieving extreme rigidity within a remarkably slim profile. Materials and mechanics are selected for structural integrity and sleek modernity. Our rigorous QC process ensures flawless, crisp edges and perfect dimensions across massive wholesale runs.
                                    </p>
                                </div>
                            </div>

                            {/* Thin divider */}
                            <div className="w-full h-px bg-slate-100" />

                            {/* Feature 2 */}
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors duration-300">
                                        <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">
                                        High-Precision Card Inserts
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        A premium card box demands a perfect fit. We engineer <strong>custom branded rigid packaging</strong> with precision die-cut foam or multi-layer paperboard inserts designed to hold the card perfectly flush, with integrated ribbon pulls or finger notches for an elegant extraction. Secure, protective, and immaculate presentation.
                                    </p>
                                </div>
                            </div>

                            {/* Thin divider */}
                            <div className="w-full h-px bg-slate-100" />

                            {/* Feature 3 */}
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors duration-300">
                                        <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">
                                        Exclusive Finishes at Scale
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        The exclusivity is in the details. Our capabilities include precise metallic foil stamping, deep debossing for a minimalist 'stealth' look, subtle spot UV overlays, and flawless soft-touch laminations applied to your <strong>wholesale card boxes</strong>. We deliver boutique-quality, high-status finishes consistently across massive production runs.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT: Square image with floating badges */}
                        <div className="relative flex items-center justify-center py-8">
                            {/* Square image container */}
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img
                                    src={customShoeBoxes} // Placeholder
                                    alt="Premium Custom Credit Card Box Packaging"
                                    className="w-full h-full object-cover"
                                />
                                {/* Bottom gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                                {/* Bottom text overlay */}
                                <div className="absolute bottom-0 left-0 right-0 p-7">
                                    <p className="text-white font-bold text-lg leading-snug mb-1">
                                        Trusted by Exclusive Brands
                                    </p>
                                    <p className="text-white/75 text-sm">Delivering VIP packaging solutions globally</p>
                                </div>
                            </div>

                            {/* Floating badge — top right */}
                            <div className="absolute top-4 -right-2 lg:-right-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80 backdrop-blur-sm">
                                <p className="text-2xl font-bold text-primary leading-none">99%</p>
                                <p className="text-xs text-slate-400 mt-1 font-medium">Satisfaction Rate</p>
                            </div>

                            {/* Floating badge — bottom left */}
                            <div className="absolute bottom-4 -left-2 lg:-left-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80 backdrop-blur-sm">
                                <p className="text-2xl font-bold text-emerald-500 leading-none">8–10</p>
                                <p className="text-xs text-slate-400 mt-1 font-medium">Day Turnaround</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            {/* DIFFERENTIATE YOUR SHOES SECTION */}
            <section className="py-10 lg:py-12 bg-white overflow-hidden relative">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* LEFT: Image */}
                        <div className="relative group">
                            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] border border-primary/20 shadow-2xl transform transition-transform duration-700 hover:scale-[1.02]">
                                <img
                                    src={shoeBox5} // Placeholder
                                    alt="Differentiate Your VIP Experience"
                                    className="w-full h-full object-cover"
                                />
                                {/* Overlay for depth */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-60" />
                            <div className="absolute -z-10 -top-8 -right-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl opacity-60" />
                        </div>

                        {/* RIGHT: Content */}
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                                Differentiate Your <span className="text-primary">VIP Experience</span> From Others
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                At CustomPackMakers, we understand that your packaging is the critical first physical touchpoint for your most valued clients. To ensure your brand communicates exclusivity, we utilize state-of-the-art manufacturing processes combined with superior rigid packaging techniques to achieve incredibly slim, strong profiles. Our team of experts works closely with you to design the perfect interior architecture, ensuring flush-fit inserts for cards and elegant compartments for documents. By integrating distinctive features like soft-touch velvet wraps, minimalist debossing, and secure magnetic closures, we help you create a world-class unveiling experience that instantly validates the client's high-tier status.
                            </p>


                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ SECTION */}
            <section className="py-6 bg-slate-50">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                        {/* LEFT COLUMN: FAQs */}
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                                    Frequently Asked Questions
                                </h2>
                                <p className="text-base text-muted-foreground">
                                    We’re confident that you will love our products and service.
                                </p>
                            </div>

                            <Accordion type="single" collapsible defaultValue="item-1" className="w-full space-y-2">
                                {[
                                    {
                                        id: "item-1",
                                        question: "Are rigid credit card boxes slim enough to mail efficiently?",
                                        answer: "Yes, we specialize in engineering ultra-slim profile rigid boxes specifically designed for the dimensional requirements of shipping or mailing. By utilizing dense chipboard, we can achieve maximum rigidity and protection while keeping the overall box depth to less than half an inch if required."
                                    },
                                    {
                                        id: "item-2",
                                        question: "How is the card held securely inside the box without moving?",
                                        answer: "We utilize high-precision, custom die-cut inserts specifically sized for standard CR80 credit/gift cards. These inserts, typically made from high-density EVA foam or multi-layered paperboard, provide a perfectly snug, flush fit. The card snaps in securely and will not move during transit."
                                    },
                                    {
                                        id: "item-3",
                                        question: "Can you include compartments for welcome letters or membership brochures?",
                                        answer: "Absolutely. We design multi-tiered interior architectures. We can create hidden compartments underneath the main card insert, integrate elegant paper pockets into the inner lid of a hinged box, or design stepped trays to hold all necessary collateral cleanly and professionally."
                                    },
                                    {
                                        id: "item-4",
                                        question: "What styles of rigid credit card boxes are most popular?",
                                        answer: "For luxury cards, the two most popular styles are Book-Style Boxes (featuring a hinged lid and often concealed magnetic closures for a satisfying 'snap') and Slipcase or Sleeve-and-Drawer styles (where a rigid inner tray slides elegantly out of a protective outer sleeve)."
                                    },
                                    {
                                        id: "item-5",
                                        question: "What is your standard turnaround time for custom rigid card boxes?",
                                        answer: "Because rigid boxes require more complex manufacturing and precision assembly than folding cartons, our standard turnaround time is typically 10-15 business days following final design approval. We recommend planning your card issuance schedules accordingly."
                                    }
                                ].map((faq) => (
                                    <AccordionItem
                                        key={faq.id}
                                        value={faq.id}
                                        className="border border-slate-200 rounded-lg bg-white overflow-hidden data-[state=open]:border-primary data-[state=open]:ring-1 data-[state=open]:ring-primary/20 data-[state=open]:bg-primary/5 transition-all duration-300"
                                    >
                                        <AccordionTrigger className="px-5 py-3 hover:no-underline [&>svg]:hidden group">
                                            <span className="text-left font-semibold text-foreground text-base">{faq.question}</span>
                                            <div className="shrink-0 ml-4 p-1 rounded-full bg-slate-100 group-data-[state=open]:bg-primary group-data-[state=open]:text-white transition-colors duration-200">
                                                <Plus className="h-3 w-3 group-data-[state=open]:hidden" />
                                                <Minus className="h-3 w-3 hidden group-data-[state=open]:block" />
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent className="px-5 pb-5 pt-0 text-slate-600 leading-relaxed text-sm">
                                            {faq.answer}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>

                        {/* RIGHT COLUMN: Image */}
                        <div className="relative w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden ">
                            <img
                                src={FAQimage}
                                alt="Custom Credit Card Boxes FAQ"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            {/* Overlay */}
                            {/* <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-60" /> */}
                        </div>
                    </div>
                </div>
            </section>

            {/* Brand Rating */}
            <BrandRating />

            {/* Main Quote Form */}
            <QuoteForm />

            <Footer />
        </div >
    );
};


