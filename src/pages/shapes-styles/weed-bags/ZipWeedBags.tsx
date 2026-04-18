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
import zipWeedBags from "@/assets/weed-bags/zip-weed-bags.webp";
import weedBagsHero from "@/assets/weed-bags/weed-bags-hero.webp";
import exoticWeedBag from "@/assets/weed-bags/exotic-weed-bag.webp";
import smellProofWeedBags from "@/assets/weed-bags/smell-proof-weed-bags.webp";
import weedBags35 from "@/assets/weed-bags/weed-bags-3-5.webp";

// FAQ image
import FAQimage from "@/assets/FAQ-image.png";

const ZipWeedBags = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    // Product images for gallery
    const productImages = [
        { src: zipWeedBags, alt: "Zip Weed Bags - Main Image" },
        { src: weedBagsHero, alt: "Zip Weed Bags - Full Line Display" },
        { src: exoticWeedBag, alt: "Zip Weed Bags - Custom Print Example" },
        { src: smellProofWeedBags, alt: "Zip Weed Bags - Odor Protection" },
        { src: weedBags35, alt: "Zip Weed Bags - 3.5g Sizing" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Zip Weed Bags | Resealable Mylar Bags | CustomPackMakers</title>
                <meta name="description" content="Order wholesale custom zip weed bags. Premium resealable mylar packaging with odor-lock zippers for cannabis. Secure, airtight, and fully customizable designs." />
                <meta name="keywords" content="zip weed bags, resealable mylar bags, custom cannabis zip bags, airtight weed bags, wholesale mylar zipper bags" />
                <meta property="og:title" content="Custom Zip Weed Bags | Resealable Mylar Bags | CustomPackMakers" />
                <meta property="og:description" content="High-performance resealable zip weed bags for your brand. Durable mylar construction with heavy-duty airtight seals." />
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
                                <BreadcrumbPage>Zip Weed Bags</BreadcrumbPage>
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
                                Custom <span className="text-primary">Zip</span> Weed Bags
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                High-performance resealable packaging engineered for ultimate freshness and durability. Superior airtight seals meet professional retail branding.
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

                        {/* RIGHT: Large Product Image */}
                        <div className="lg:col-span-5 relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-muted group">
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200">
                                <img
                                    src={zipWeedBags}
                                    alt="Zip Weed Bags Hero"
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
                        Airtight Resealable Packaging for Reliable Cannabis Preservation
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            The integrity of your cannabis product depends on the reliability of its closure mechanism. Our <strong className="text-foreground">custom zip weed bags</strong> are engineered to provide a consistently airtight and smell-proof environment through multiple uses. Utilizing advanced multi-layer Mylar films and reinforced press-to-close zippers, these bags protect your flower from the three primary enemies of shelf-life: oxygen, moisture, and UV light.
                        </p>
                        <p>
                            At CustomPackMakers, we specialize in high-impact <strong className="text-foreground">resealable cannabis packaging</strong> that streamlines your operation and impresses your customers. Whether you require standard zippers or certified child-resistant (CR) locking mechanisms, our zip bags offer the structural rigidity and professional finish your brand demands. Elevate your dispensary presence with full-color printing, custom windows, and premium tactile effects that make your resealable pouches impossible to ignore.
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

                        {/* RIGHT SIDE: Sticky Quote Form */}
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
                                                <Input id="length" type="number" placeholder="5" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label>
                                                <Input id="width" type="number" placeholder="8" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">Gusset</Label>
                                                <Input id="depth" type="number" placeholder="3" className="h-9 bg-white" />
                                            </div>
                                        </div>

                                        <div className="space-y-1.5">
                                            <Label htmlFor="quantity" className="text-xs font-semibold text-muted-foreground">Quantity</Label>
                                            <Input id="quantity" type="number" placeholder="5000" className="h-9 bg-white" />
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
                        The Master Guide to Custom Resealable Zip Weed Bags
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
                                In the highly regulated and consumer-driven cannabis industry, the functionality of your packaging is just as critical as its visual appeal. While many brands focus solely on graphics, the savviest brand owners prioritize the user experience—and nothing defines the user experience more than the closure. Custom Zip Weed Bags represent the pinnacle of utility in cannabis packaging, providing a reliable, resealable barrier that keeps flower fresh, potent, and aromatic through multiple sessions. In a market where flower can degrade rapidly when exposed to air, a high-performance zipper is your brand's first line of defense.
                            </p>
                            <p>
                                At CustomPackMakers, we specialize in manufacturing professional-grade resealable mylar bags that meet the rigorous demands of both retail dispensaries and wholesale distributors. Our zip bags are not merely generic pouches; they are precision-engineered storage solutions that combine advanced barrier science with effortless consumer convenience. When you choose our customized zipper weed bags, you are ensuring that your brand's quality is respected from the first unboxing to the final nug.
                            </p>

                            <h3>Advanced Multi-Layer Barrier Protection</h3>
                            <p>
                                The "zip" is only part of the equation. To truly protect cannabis, the body of the bag must be impenetrable to environmental factors. Our zip bags are constructed using a specific lamination of high-performance films:
                            </p>
                            <ul>
                                <li><strong>Orientation (PET):</strong> The outer layer provides high-tensile strength and a smooth surface for vibrant, photo-quality printing.</li>
                                <li><strong>Barrier (VMPET or Foil):</strong> The indispensable core that blocks 100% of light and provides an exceptional oxygen and moisture barrier. This prevents terpenes from dissipating and stops the flower from drying out (becoming "shakey").</li>
                                <li><strong>Inner Seal (PE/LLDPE):</strong> A food-grade inner layer that ensures no chemical leaching and creates robust, leak-proof side seals.</li>
                            </ul>
                            <p>
                                This combination creates a 100% smell-proof environment, essential for consumer discretion and maintaining the integrity of your specific strain's unique aromatic profile.
                            </p>

                            <h3>High-Performance Zipper Mechanics</h3>
                            <p>
                                Not all zippers are created equal. We utilize heavy-duty press-to-close zippers that provide a satisfying "snap" or "click" when sealed, giving the consumer tactile confirmation that the bag is airtight. Our zipper profiles are designed to resist "puckering" or misalignment, ensuring the bag remains functional for the entire life of the product.
                            </p>
                            <p>
                                Furthermore, for brands operating in jurisdictions with strict safety mandates, we integrate certified Child-Resistant (CR) zippers. These mechanisms require specific dual-action movements (like "pinch and pull") that effectively prevent accidental access by children while remaining intuitive for adult users. This adds a layer of professionalism and legal security to your brand that generic packaging simply cannot provide.
                            </p>

                            <h3>Total Brand Customization: Printing and Finishes</h3>
                            <p>
                                Your packaging should be an extension of your brand's personality. We offer virtually unlimited customization options to make your zip weed bags pop:
                            </p>
                            <ul>
                                <li><strong>Full-Bleed Printing:</strong> Utilize high-definition rotogravure printing to wrap your entire bag in vibrant, saturated colors and complex artwork.</li>
                                <li><strong>Premium Finishes:</strong> Choose from soft-touch matte lamination for a luxury feel, high-gloss for aggressive shelf presence, or holographic foiling for a modern, "exotic" aesthetic.</li>
                                <li><strong>Functional Die-Cuts:</strong> We can manufacture bags in custom silhouettes or integrate transparent windows of any shape, allowing consumers to witness the quality of your flower directly.</li>
                                <li><strong>Gloss-on-Matte Effects:</strong> Utilize spot UV to make specific elements, like your logo or strain name, shine against a sophisticated matte background.</li>
                            </ul>

                            <h3>Why Choose Our Wholesale Zip Packaging?</h3>
                            <p>
                                Scaling a cannabis brand requires a reliable supply chain. CustomPackMakers provides the perfect balance of quality, speed, and competitive wholesale pricing. Whether you're a craft boutique cultivator or a large-scale Multi-State Operator (MSO), we scale with your needs. We offer low minimum order quantities (MOQs) for limited drops and massive volume discounts for high-volume staples.
                            </p>
                            <p>
                                Our standard 8-10 day turnaround time is among the fastest in the industry, ensuring your harvest never sits in bulk bins waiting for bags. We are committed to transparency, expertise, and helping your brand win in the dispensary and at home. Trust CustomPackMakers for the zip weed bags that keep your product fresh and your brand famous.
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
                                        Airtight Integrity
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Our <strong>custom zip bags</strong> are engineered with heavy-duty resealable zippers that maintain an airtight and 100% smell-proof environment. By preventing oxygen flux, we ensure your flower stays fresh, sticky, and aromatic until the very last nug.
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
                                        Vibrant High-Def Printing
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        We utilize state-of-the-art rotogravure and digital printing to reproduce your brand's artwork with photograph-quality fidelity and deep color saturation. Our bags are not just storage; they are vibrant, high-impact marketing canvases.
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
                                        Total Regulatory Compliance
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Stay ahead of state laws with our certified child-resistant (CR) zippers and puncture-resistant mylar. We manufacture and print to the latest compliance standards, ensuring your beautiful packaging never runs afoul of the law.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT: Square image with floating badges */}
                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img
                                    src={zipWeedBags}
                                    alt="Custom Zip Mylar Bags"
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
                                <p className="text-2xl font-bold text-emerald-500 leading-none">8–10</p>
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
                        {/* LEFT: Image */}
                        <div className="relative group">
                            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] border border-primary/20 shadow-2xl transform transition-transform duration-700 hover:scale-[1.02]">
                                <img
                                    src={weedBagsHero}
                                    alt="Differentiate Your Resealable Bags"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-60" />
                            <div className="absolute -z-10 -top-8 -right-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl opacity-60" />
                        </div>

                        {/* RIGHT: Content */}
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                                Differentiate Your <span className="text-primary">Bags</span> From Others
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                At CustomPackMakers, we believe your closure should be as high-quality as your flower. To ensure your brand differentiates itself from standard mylar pouches, we utilize premium multi-layer barrier films paired with highly sophisticated print finishes. By integrating distinctive features like soft-touch lamination, holographic hot-stamping, and custom-shaped transparent windows, we help you create a world-class resealable package that builds brand trust and drives repeat dispensary visits for your most loyal customers.
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
                                        question: "What makes your zip bags smell-proof?",
                                        answer: "Our bags utilize high-barrier laminates that include VMPET or Aluminum foil, providing an absolute transmission shield against oxygen. Combined with our airtight heavy-duty zippers, odors are successfully trapped within the pouch."
                                    },
                                    {
                                        id: "item-2",
                                        question: "Do you offer child-resistant (CR) zippers?",
                                        answer: "Yes. We integrate certified dual-action child-resistant closures that meet strict safety standards for state-regulated cannabis markets while remaining intuitive for adult users."
                                    },
                                    {
                                        id: "item-3",
                                        question: "Can I print on both the front and back of the bag?",
                                        answer: "Absolutely. We offer full-bleed, edge-to-edge printing on both panels, providing you with maximum space for branding, mandatory legal warnings, and product information."
                                    },
                                    {
                                        id: "item-4",
                                        question: "What is the turnaround time for a custom wholesale order?",
                                        answer: "Once your artwork is approved, our standard production and delivery time is 8-10 business days."
                                    },
                                    {
                                        id: "item-5",
                                        question: "What is your minimum order quantity (MOQ)?",
                                        answer: "We offer highly competitive MOQs starting as low as 100 units for digital runs, with significant price decreases for large-scale wholesale orders of 10,000+ units."
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
                                                <span className="hidden group-data-[state=open]:block"><Minus className="h-3 w-3" /></span>
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
                                alt="Custom Zip Weed Bags FAQ"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
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

export default ZipWeedBags;
