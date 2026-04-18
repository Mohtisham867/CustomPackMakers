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
import weedPoundBags from "@/assets/weed-bags/weed-pound-bags.webp";
import weedBagsHero from "@/assets/weed-bags/weed-bags-hero.webp";
import exoticWeedBag from "@/assets/weed-bags/exotic-weed-bag.webp";
import smellProofWeedBags from "@/assets/weed-bags/smell-proof-weed-bags.webp";
import zipWeedBags from "@/assets/weed-bags/zip-weed-bags.webp";

// FAQ image
import FAQimage from "@/assets/FAQ-image.png";

const WeedPoundBags = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    // Product images for gallery
    const productImages = [
        { src: weedPoundBags, alt: "Weed Pound Bags - Main Image" },
        { src: weedBagsHero, alt: "Weed Pound Bags - Bulk Display" },
        { src: exoticWeedBag, alt: "Weed Pound Bags - Design Option" },
        { src: smellProofWeedBags, alt: "Weed Pound Bags - Barrier Layers" },
        { src: zipWeedBags, alt: "Weed Pound Bags - Zipper Seal" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Weed Pound Bags | One Pound Mylar Bags | CustomPackMakers</title>
                <meta name="description" content="Order wholesale custom weed pound bags. Premium one-pound mylar turkey bags for bulk cannabis storage. Large-format, smell-proof, and durable barrier packaging." />
                <meta name="keywords" content="weed pound bags, one pound bags, custom pound bags, bulk cannabis packaging, wholesale turkey bags, large mylar bags" />
                <meta property="og:title" content="Custom Weed Pound Bags | One Pound Mylar Bags | CustomPackMakers" />
                <meta property="og:description" content="Professional large-format weed pound bags for bulk storage and distribution. Maximum protection for high-volume flower." />
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
                                <BreadcrumbPage>Weed Pound Bags</BreadcrumbPage>
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
                                Custom <span className="text-primary">Pound</span> Weed Bags
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Large-format, heavy-duty packaging for bulk storage and wholesale distribution. Unmatched barrier protection for your high-volume flower.
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
                                    src={weedPoundBags}
                                    alt="Weed Pound Bags Hero"
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
                        Heavy-Duty Wholesale Packaging for High-Volume Cannabis
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            In the wholesale cannabis supply chain, durability and preservation are paramount. Our <strong className="text-foreground">custom weed pound bags</strong> are specifically engineered to accommodate bulk quantities while maintaining absolute product freshness. Forged from thick, industrial-grade Mylar and reinforced barrier films, these large-format bags protect your flower from the devastating effects of oxygen exposure, moisture flux, and punctures during transport and storage.
                        </p>
                        <p>
                            At CustomPackMakers, we understand that even <strong className="text-foreground">bulk cannabis packaging</strong> should represent your brand's commitment to quality. We offer full customization for our pound bags, allowing for high-impact graphic printing, state-mandated labeling, and professional finishing. Whether you need reliable stand-up gussets for warehouse shelf organization or heavy-duty heat-sealable closures for long-term curing, our pound bags provide the structural integrity and professional aesthetic your wholesale operation requires.
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
                                                <Input id="length" type="number" placeholder="10" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label>
                                                <Input id="width" type="number" placeholder="14" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">Gusset</Label>
                                                <Input id="depth" type="number" placeholder="5" className="h-9 bg-white" />
                                            </div>
                                        </div>

                                        <div className="space-y-1.5">
                                            <Label htmlFor="quantity" className="text-xs font-semibold text-muted-foreground">Quantity</Label>
                                            <Input id="quantity" type="number" placeholder="500" className="h-9 bg-white" />
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
                        The Master Guide to Custom One-Pound Weed Bags for Wholesale
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
                                In the large-scale cannabis supply chain, the transition from cultivation to distribution requires a packaging format that can handle volume without sacrificing quality. The one-pound bag, often colloquially called a "turkey bag" in its generic form, is the workhorse of the wholesale market. Whether you're a Multi-State Operator (MSO) moving large quantities between facilities, a distributor supplying retail dispensaries, or a cultivator curing high-volume harvests, your choice of pound packaging directly impacts your product's potency and market value. Custom Pound Weed Bags represent the professional evolution of bulk cannabis storage.
                            </p>
                            <p>
                                At CustomPackMakers, we recognize that bulk packaging is not an area where you can afford to cut corners. A single puncture or a failing seal on a pound bag can result in the degradation of an entire harvest unit, leading to significant financial losses. Our custom pound bags are engineered with industrial-grade barrier science and reinforced structures to provide a 100% smell-proof, moisture-controlled, and UV-protected environment for your most valuable assets. When you invest in our premium large-format mylar, you're securing your bulk supply chain.
                            </p>

                            <h3>High-Performance Industrial Barrier Film</h3>
                            <p>
                                When storing a full pound of flower, the stakes for environmental control are magnified. Our pound bags are constructed from an advanced lamination of specific films designed for maximum durability:
                            </p>
                            <ul>
                                <li><strong>BPA-Free Food Grade LPE:</strong> The crucial inner liner that ensures your bulk flower never comes into contact with harmful chemicals or plastic flavors.</li>
                                <li><strong>Heavy-Duty VMPET/Foil Core:</strong> The indispensable barrier layer that provides 100% opacity. Light is a primary catalyst for THC degradation, and our opaque mylar ensures your potency remains consistent across the entire pound.</li>
                                <li><strong>Reinforced PET Outer Face:</strong> Providing high-tensile strength and superior puncture resistance. These bags are designed to withstand the rigors of multi-state transport and warehouse handling without tearing.</li>
                            </ul>
                            <p>
                                With thicknesses typically exceeding 5 mil, our pound bags provide the structural "crunch" and rigidity that wholesale buyers associate with premium, expertly-cured cannabis.
                            </p>

                            <h3>Scalable Branding for Wholesale Dominance</h3>
                            <p>
                                Bulk bags are also powerful marketing tools. In the B2B world, your packaging is your first impression with dispensary intake managers. We offer full-spectrum customization for pound bags to make your bulk inventory stand out:
                            </p>
                            <ul>
                                <li><strong>Full-Bleed Offset Printing:</strong> Render your brand's master logo and strain information with incredible clarity and color saturation across the entire large-format panel.</li>
                                <li><strong>Professional Finishes:</strong> Choose from industrial matte for a clean, professional look, or high-gloss for aggressive brand visibility in warehouse environments.</li>
                                <li><strong>Functional Gussets:</strong> Our pound bags feature reinforced bottom gussets that allow them to stand independently when filled, streamlining inventory management and dispensary shelf organization.</li>
                                <li><strong>Compliance-First Design:</strong> We provide ample space for state-standard warning labels, METRC barcodes, and strain-specific testing data, ensuring your wholesale units are always legal and shelf-ready.</li>
                            </ul>

                            <h3>Closure Systems and Freshness Seals</h3>
                            <p>
                                For bulk storage, the closure is the difference between a successful cure and a ruined harvest. We offer heavy-duty, reinforced zippers that provide a reliable, airtight seal through multiple openings. For brands requiring the absolute highest level of security, our pound bags are designed to be heat-sealed above the zipper, providing a tamper-evident, factory-fresh seal that guarantees the integrity of the product to the end distributor.
                            </p>

                            <h3>Why Choose Our Wholesale Pound Packaging?</h3>
                            <p>
                                CustomPackMakers is a dedicated partner in the cannabis supply chain. We understand the pressure of harvest windows and the need for reliable, fast-turnaround packaging. Our competitive wholesale pricing for custom one-pound bags allows you to protect your margins while providing a world-class unboxing experience for your retail partners.
                            </p>
                            <p>
                                We offer low minimum order quantities for boutique growers and massive volume discounts for regional distributors. With an 8-10 day turnaround time and a commitment to precision engineering, we ensure your bulk flower is always protected by the most advanced mylar bags in the industry. Trust CustomPackMakers for the pound weed bags that protect your harvest and build your wholesale reputation.
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
                                        Industrial-Grade Barrier
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Our <strong>pound bags</strong> use extra-thick multi-layer Mylar films specifically engineered for bulk storage. This provides 100% light-blocking and an absolute moisture barrier, ensuring large batches of flower maintain potency and fragrance during long-term storage or multi-state transport.
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
                                        Reinforced Structural Integrity
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Large-format bags need extra strength. We reinforce our side seals and bottom gussets to prevent splitting and punctures, even when filled to capacity. Our bags stand firm for warehouse organization and intake photography.
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
                                        Fast Turnaround & Low MOQs
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Wholesale operations can't wait weeks for packaging. We deliver custom printed pound bags in 8-10 business days, with minimums that accommodate craft cultivators and large-scale MSOs alike.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT: Square image with floating badges */}
                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img
                                    src={weedPoundBags}
                                    alt="Wholesale Weed Pound Packaging"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-7">
                                    <p className="text-white font-bold text-lg leading-snug mb-1">
                                        Trusted by 500+ Wholesale Partners
                                    </p>
                                    <p className="text-white/75 text-sm">Delivering bulk packaging across North America</p>
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
                                    alt="Differentiate Your Wholesale Bags"
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
                                At CustomPackMakers, we believe your wholesale packaging should be as professional as your retail line. To ensure your bulk pounds stand out from generic turkey bags, we utilize premium multi-layer barrier films paired with advanced high-definition printing. By integrating distinctive features like soft-touch matte lamination, vibrant full-color artwork, and reinforced gussets, we help you create a world-class bulk package that builds brand trust and drives repeat wholesale orders from your most valued dispensary partners.
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
                                        question: "How do these bags keep a full pound fresh?",
                                        answer: "Our pound bags are made with industrial-grade, multi-layer Mylar films including a Vacuum Metallized PET (VMPET) barrier. This blocks 100% of light and provides an absolute transmission shield against oxygen and moisture, keeping bulk flower fresh and aromatic."
                                    },
                                    {
                                        id: "item-2",
                                        question: "Are these bags strong enough for multi-state shipping?",
                                        answer: "Absolutely. We use high-tensile PET outer faces and reinforced side seals to ensure our pound bags have superior puncture and tear resistance, making them ideal for the rigors of wholesale logistics."
                                    },
                                    {
                                        id: "item-3",
                                        question: "Can I print custom labeling for different strains on the same order?",
                                        answer: "Yes. For wholesale clients moving multiple varieties, we can coordinate print runs that include different strain names and branding elements, ensuring consistent quality across your entire wholesale catalog."
                                    },
                                    {
                                        id: "item-4",
                                        question: "What is your standard production time for custom wholesale orders?",
                                        answer: "Once your artwork is approved, our standard manufacturing and delivery time for custom pound bags is 8-10 business days."
                                    },
                                    {
                                        id: "item-5",
                                        question: "Do you offer heat-sealable options for long-term curing?",
                                        answer: "Yes. Our pound bags are designed to be easily heat-sealed above the zipper, providing an airtight, factory-fresh seal that is perfect for bulk storage and professional curing processes."
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
                                alt="Custom Weed Pound Bags FAQ"
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

export default WeedPoundBags;
