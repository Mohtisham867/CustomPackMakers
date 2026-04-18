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
import { RelatedProductWeedBags } from "@/components/RelatedProductWeedBags";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";

// Images specific to weed bags
import smellProofWeedBags from "@/assets/weed-bags/smell-proof-weed-bags.webp";
import weedBagsHero from "@/assets/weed-bags/weed-bags-hero.webp";
import exoticWeedBag from "@/assets/weed-bags/exotic-weed-bag.webp";
import weedBags35 from "@/assets/weed-bags/weed-bags-3-5.webp";
import zipWeedBags from "@/assets/weed-bags/zip-weed-bags.webp";

// FAQ image
import FAQimage from "@/assets/FAQ-image.png";

const SmellProofWeedBags = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    // Product images for gallery
    const productImages = [
        { src: smellProofWeedBags, alt: "Smell Proof Weed Bags - Main Image" },
        { src: weedBagsHero, alt: "Smell Proof Weed Bags - Quality Construction" },
        { src: exoticWeedBag, alt: "Smell Proof Weed Bags - Printed Example" },
        { src: weedBags35, alt: "Smell Proof Weed Bags - Small Size" },
        { src: zipWeedBags, alt: "Smell Proof Weed Bags - Secure Zipper" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Smell Proof Weed Bags | Odor Control Packaging</title>
                <meta name="description" content="Order 100% smell proof weed bags wholesale. Custom odor-resistant mylar packaging with heavy-duty zipper closures to keep your cannabis completely discreet." />
                <meta name="keywords" content="smell proof weed bags, odor resistant packaging, discreet weed bags, custom smelling bags, mylar zip bags" />
                <meta property="og:title" content="Custom Smell Proof Weed Bags | Odor Control Packaging" />
                <meta property="og:description" content="Discreet, odor-free storage for cannabis. Wholesale smell-proof mylar bags with custom printing and heavy-duty zipper seals." />
            </Helmet>
            <Header />

            {/* Breadcrumb */}
            <div className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 mt-[120px] md:mt-[140px]">
                <div className="container mx-auto px-[30px] py-3">
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
                                    <Link to="/shapes-styles">Shapes & Styles</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link to="/shapes-styles/weed-bags">Weed Bags</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Smell Proof Weed Bags</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </div>

            {/* HERO SECTION */}
            <section className="py-8 bg-background">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-7 space-y-6">
                            <div className="w-20 h-1.5 bg-primary rounded-full"></div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight">
                                Custom <span className="text-primary">Smell Proof</span> Weed Bags
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Ultimate discretion meets premium branding. Keep unmistakable aromas securely contained with our heavy-duty, multi-layered smell proof bags built for modern cannabis distribution.
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

                        <div className="lg:col-span-5 relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-muted group">
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200">
                                <img
                                    src={smellProofWeedBags}
                                    alt="Smell Proof Weed Bags Hero"
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
                    <div className="flex items-center gap-3 mb-5">
                        <div className="w-10 h-1 bg-primary rounded-full" />
                        <span className="text-xs font-semibold tracking-widest text-primary uppercase">Product Overview</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 max-w-3xl">
                        Unbeatable Odor Control for Professional Dispensaries
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            Odor containment is a non-negotiable aspect of professional cannabis retail. Whether ensuring discretion for the end-consumer during transit or keeping your dispensary compliant with local zoning laws, our <strong className="text-foreground">custom smell proof weed bags</strong> deliver flawless performance. Forged with thick, high-density barrier films, these pouches lock in the strongest terpene profiles while maintaining total product freshness.
                        </p>
                        <p>
                            But function doesn't mean sacrificing form. We specialize in transforming these industrial-grade <strong className="text-foreground">odor control bags</strong> into stunning branded assets. From sleek, minimalist matte-black finishes that scream luxury, to vibrant, full-color rotogravure printing that captures user attention, we ensure your product stands out while keeping aromas strictly locked in using engineered double-seal zippers.
                        </p>
                    </div>
                </div>
            </section>

            {/* INTERACTIVE PRODUCT & FORM SECTION */}
            <section className="py-10 bg-accent/5" id="quote-form">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end">
                        <div className="lg:col-span-7 space-y-6">
                            <div className="relative w-full max-w-lg mx-auto overflow-hidden rounded-lg shadow-sm border border-border bg-white" style={{ aspectRatio: '4/3' }}>
                                <img
                                    src={productImages[selectedImage].src}
                                    alt={productImages[selectedImage].alt}
                                    className="w-full h-full object-cover"
                                />
                            </div>
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
                                                <Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">Gusset</Label>
                                                <Input id="depth" type="number" placeholder="2" className="h-9 bg-white" />
                                            </div>
                                        </div>

                                        <div className="space-y-1.5">
                                            <Label htmlFor="quantity" className="text-xs font-semibold text-muted-foreground">Quantity</Label>
                                            <Input id="quantity" type="number" placeholder="2500" className="h-9 bg-white" />
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">
                        The Science Behind Smell Proof Weed Bags
                    </h2>

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
                                In the rapidly maturing cannabis marketplace, product discreetness is highly valued by consumers and mandated by stringent regulations. Smell proof weed bags are not merely a convenience; they are a critical functional requirement for modern dispensaries, cultivators, and direct-to-consumer brands. A standard Ziploc or light plastic pouch is inherently porous at a microscopic level, allowing volatile organic compounds (terpenes) to slip through and betray the presence of the product. True custom smell proof weed bags utilize advanced engineering to construct an impenetrable barrier, maintaining absolute discretion while safeguarding product efficacy.
                            </p>
                            <p>
                                The demand for high-quality, odor-resistant packaging spans across all consumer demographics, from medicinal users who require strict privacy to recreational consumers carrying products in public or storing them at home. Navigating this demand requires brands to invest heavily in specialized Mylar structures that not only trap smells but also serve as a striking billboard for the brand identity. 
                            </p>

                            <h3>How Odor-Blocking Barrier Films Work</h3>
                            <p>
                                The secret to a truly smell proof pouch lies not in a single magical material, but in the intelligent lamination of multiple independent film layers. We refer to this as a composite film structure. Each layer in our smell proof weed bags serves a unique, targeted purpose:
                            </p>
                            <ul>
                                <li><strong>The Structural Face (PET):</strong> Polyethylene Terephthalate acts as the tough outer skin. It resists tearing, stretching, and puncturing, ensuring the bag maintains its shape. Furthermore, it accepts high-resolution printing inks beautifully.</li>
                                <li><strong>The Impenetrable Shield (VMPET/AL):</strong> The core lamination is where the actual odor-blocking occurs. Using either a Vacuum Metallized PET layer or solid Aluminum Foil, this core offers zero transmission rates for oxygen, moisture, and, critically, the volatile gases that produce odor.</li>
                                <li><strong>The Sealing Layer (PE/LLDPE):</strong> The innermost layer must be food-grade and chemically inert so it doesn't interact with the cannabis. More importantly, it must melt cleanly and evenly to create airtight heat seals at the seams and edges of the bag.</li>
                            </ul>
                            <p>
                                By laminating these films together under heat and pressure (typically resulting in a thickness of 4 to 6 mils), we construct an environment where terpenes are locked tightly within the pouch until the consumer decides to break the seal.
                            </p>

                            <h3>The Role of Heavy-Duty Zippers</h3>
                            <p>
                                A fortress is only as strong as its gate. The best barrier film in the world is useless if the closure mechanism allows air to escape. True smell proof bags utilize engineered zipper profiles far superior to household storage bags. We employ heavy-duty, double-track press-to-close zippers that create an airtight interlocking seal. 
                            </p>
                            <p>
                                For products requiring legal compliance, we integrate sophisticated Child-Resistant (CR) zippers. These mechanisms require dual-action movements (such as pushing a tab while sliding, or a difficult pinch-and-pull movement) that stop children from accessing the product while maintaining the airtight integrity needed to trap aggressive aromas. 
                            </p>

                            <h3>Discretion Meets Superior Branding</h3>
                            <p>
                                While the primary function of these bags is stealth, their secondary function is marketing. Smell proof weed bags do not have to be dull or generic. With our advanced manufacturing processes, you can combine extreme functional discretion with blazing, unapologetic aesthetics. 
                            </p>
                            <ul>
                                <li><strong>Matte vs. Gloss Finishes:</strong> A soft-touch matte finish often conveys luxury and discretion, minimizing reflections while feeling velvety in the hand. Conversely, high-gloss finishes make branding colors pop with aggressive vibrancy.</li>
                                <li><strong>Opaque Frameworks:</strong> To maintain privacy and comply with laws mandating opaque packaging, we offer full-bleed edge-to-edge printing, ensuring the contents remain entirely hidden from view while maximizing the canvas for your logo and artwork.</li>
                            </ul>

                            <h3>Optimizing Your Packaging Supply Chain</h3>
                            <p>
                                Relying on cheap, inferior bags can result in "skunked" shipments, customer complaints about lack of discretion, and immediate rejection by premium dispensaries. Partnering with a manufacturer dedicated to producing verified smell proof weed bags ensures your brand avoids these costly pitfalls. 
                            </p>
                            <p>
                                We provide competitive wholesale pricing structures designed to scale alongside your cultivation or distribution operation. From small initial runs to massive pallet orders, we deliver reliable, odor-trapping packaging that protects your product's potency and your brand's reputation with every single seal.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* RELATED PRODUCTS CAROUSEL */}
            <RelatedProductWeedBags />

            {/* WHY CHOOSE US SECTION */}
            <section className="py-12 relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #fafafa 0%, #f4f6ff 60%, #f0fdf8 100%)' }}>
                <div className="absolute top-0 left-0 w-80 h-80 bg-primary/4 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-300/8 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl pointer-events-none" />

                <div className="container mx-auto px-[30px] relative z-10">
                    <div className="text-center mb-14">
                        <span className="inline-block text-xs font-semibold tracking-widest text-primary uppercase mb-3 bg-primary/10 px-4 py-1.5 rounded-full">Our Promise</span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
                            Why Brands Choose <span className="text-primary">CustomPackMakers</span>
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            We combine craftsmanship, speed, and reliability to deliver packaging that makes your brand unforgettable.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">
                        <div className="space-y-5">
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
                                        Uncompromising Odor Control
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Every <strong>smell proof bag</strong> we produce relies on thick VMPET/Foil laminations and airtight double-track zippers. Our QC processes test seal strength and leak rates, guaranteeing flawless discretion for shipping or retail.
                                    </p>
                                </div>
                            </div>

                            <div className="w-full h-px bg-slate-100" />

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
                                        Premium Graphic Reproduction
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        From discreet matte black finishes to extremely vibrant full-color printing. We faithfully execute your design using photo-quality rotogravure printing, ensuring your stealth packaging still functions as a high-end branding tool.
                                    </p>
                                </div>
                            </div>

                            <div className="w-full h-px bg-slate-100" />

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
                                        Full Spectrum Compliance
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Avoid regulatory headaches. Our smell-proof inventory includes certified child-resistant (CR) locking options and highly opaque film structures to satisfy the strictest state-by-state laws regarding cannabis concealment.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img
                                    src={smellProofWeedBags}
                                    alt="Smell Proof Pouches"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-7">
                                    <p className="text-white font-bold text-lg leading-snug mb-1">
                                        Trusted by 500+ Brands
                                    </p>
                                    <p className="text-white/75 text-sm">Delivering premium packaging across North America</p>
                                </div>
                            </div>

                            <div className="absolute top-4 -right-2 lg:-right-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80 backdrop-blur-sm">
                                <p className="text-2xl font-bold text-primary leading-none">98%</p>
                                <p className="text-xs text-slate-400 mt-1 font-medium">Satisfaction Rate</p>
                            </div>

                            <div className="absolute bottom-4 -left-2 lg:-left-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80 backdrop-blur-sm">
                                <p className="text-2xl font-bold text-emerald-500 leading-none">10–12</p>
                                <p className="text-xs text-slate-400 mt-1 font-medium">Day Turnaround</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* DIFFERENTIATE YOUR BAGS SECTION */}
            <section className="py-10 lg:py-12 bg-white overflow-hidden relative">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="relative group">
                            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] border border-primary/20 shadow-2xl transform transition-transform duration-700 hover:scale-[1.02]">
                                <img
                                    src={weedBagsHero}
                                    alt="Differentiate Your Smell Proof Bags"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                            </div>

                            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-60" />
                            <div className="absolute -z-10 -top-8 -right-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl opacity-60" />
                        </div>

                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                                Differentiate Your <span className="text-primary">Bags</span> From Others
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                At CustomPackMakers, we know that true utility shouldn't limit creativity. You can achieve absolute smell proof capability while designing an aesthetic that commands attention. Integrate premium textures like soft-touch lamination, metallic spot accents, or custom die-cut bag shapes while maintaining the rugged barrier strength your product needs. Let our team engineer a highly functional, visually stunning package that sets your brand miles apart from the competition.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ SECTION */}
            <section className="py-6 bg-slate-50">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
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
                                        question: "How do these bags block odors so effectively?",
                                        answer: "Our smell proof bags rely on thick, multi-layer laminated films incorporating Metallized PET (VMPET) or Aluminum foil, creating an absolute barrier against oxygen transmission, which blocks the escape of volatile terpene gases."
                                    },
                                    {
                                        id: "item-2",
                                        question: "Can I still print my logo if I want a discreet bag?",
                                        answer: "Yes. Many clients opt for a minimalist approach—such as a subdued matte black bag with a highly reflective, subtle foil-stamped logo—combining discretion with unmistakable high-end branding."
                                    },
                                    {
                                        id: "item-3",
                                        question: "Do you offer sizes for both eighths and ounces?",
                                        answer: "Absolutely. We manufacture custom smell proof bags tailored specifically to any weight, from 1-gram preroll or concentrate pouches to large one-pound turkey bags for bulk storage."
                                    },
                                    {
                                        id: "item-4",
                                        question: "Are the zippers smell proof too?",
                                        answer: "We use heavy-duty, double-track sealing zippers specifically designed for airtight closures, ensuring odors do not leak out from the top mechanism."
                                    },
                                    {
                                        id: "item-5",
                                        question: "What is your production timeline?",
                                        answer: "After you approve your artwork, our streamlined manufacturing process typically completes orders within 10 to 12 business days."
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

                        <div className="relative w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden ">
                            <img
                                src={FAQimage}
                                alt="Custom Smell Proof Bags FAQ"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <BrandRating />
            <QuoteForm />
            <Footer />
        </div >
    );
};

export default SmellProofWeedBags;
