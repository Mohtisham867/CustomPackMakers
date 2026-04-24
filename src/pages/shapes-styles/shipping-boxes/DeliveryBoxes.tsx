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
import { RelatedProductShippingBoxes } from "@/components/RelatedProductShippingBoxes";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";

// Specific product images
import heroImage from "@/assets/shipping-boxes/delivery-boxes.webp";

// FAQ image
import FAQimage from "@/assets/FAQ-image.webp";

const DeliveryBoxes = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    // Product images for gallery
    const productImages = [
        { src: heroImage, alt: "Delivery Boxes - Main View" },
        { src: heroImage, alt: "Delivery Boxes - Stacked View" },
        { src: heroImage, alt: "Delivery Boxes - Open Box View" },
        { src: heroImage, alt: "Delivery Boxes - Detail Shot" },
        { src: heroImage, alt: "Delivery Boxes - Custom Branding" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Delivery Boxes | Heavy Duty Corrugated | CustomPackMakers</title>
                <meta name="description" content="Order wholesale custom delivery boxes. Heavy-duty corrugated packaging engineered for extreme durability, safe transit, and reliable direct-to-consumer logistics." />
                <meta name="keywords" content="delivery boxes, custom shipping boxes, logistics packaging, heavy duty corrugated boxes" />
                <meta property="og:title" content="Custom Delivery Boxes | Heavy Duty Corrugated Packaging" />
                <meta property="og:description" content="Ultimate durability for e-commerce. Heavy-duty custom delivery boxes engineered for flawless safe transit and brand representation." />
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
                                    <Link to="/shapes-styles">Shapes & Styles</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link to="/shapes-styles/shipping-boxes">Shipping Boxes</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Delivery Boxes</BreadcrumbPage>
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
                                <span className="text-primary">Delivery</span> Boxes
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Wholesale custom delivery boxes engineered specifically for extreme durability, guaranteed safe transit, and flawless unboxing presentation utilizing thick, heavy-duty corrugated board.
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
                                    src={heroImage}
                                    alt="Delivery Boxes Hero"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    loading="lazy"
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
                        Heavy-Duty Structural Defense for E-Commerce Logistics
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            Our <strong className="text-foreground">Custom Delivery Boxes</strong> are rigorously precision-engineered to prioritize ultimate structural defense and guarantee completely safe transit directly to the consumer's door. Constructed strictly from heavy-duty corrugated fluting, each delivery box delivers unyielding compression strength designed specifically to resist the extreme crushing forces and high-impact vibrations common across multi-stage fulfillment networks. Engineered for e-commerce brands that require impenetrable reliability, these heavy-duty packages ensure fragile, high-value, or perfectly curated items survive the chaotic logistics chain untouched. Seamlessly combining industrial tough defense with high-resolution custom printing, they elevate a purely logistical function into a premium brand engagement point perfectly suited for the modern delivery landscape.
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
                                                <Input id="length" type="number" placeholder="12" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label>
                                                <Input id="width" type="number" placeholder="10" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">D (in)</Label>
                                                <Input id="depth" type="number" placeholder="8" className="h-9 bg-white" />
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">
                        The Importance of Heavy-Duty Corrugated Delivery Packaging
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
                                In the exponentially growing realm of modern e-commerce and direct-to-consumer logistics, the true test of your brand happens during the final stages of transit. Packaging is the sole protective barrier between your valuable product and the high-impact rigors of rapid shipping vectors. For commercial distributors that prioritize uncompromised operational quality, investing in heavily engineered, custom delivery boxes crafted from extreme heavy-duty corrugated material is not just an optional logistical cost; it is a vital pillar of damage prevention and long-term customer satisfaction. Superior shipping containers safeguard your fragile investments, negate costly returns, and build vital trust with consumers who demand flawlessly handled final deliveries.
                            </p>
                            <p>
                                Our comprehensive array of custom delivery boxes addresses this critical protective requirement head-on. We focus intensely on designing robust corrugated structures that guarantee incredible durability and completely safe transit routing. Every structural feature, from dense B-flute interior walls to impact-deflecting corner reinforcements, is precisely calibrated to absorb heavy shocks, resist crushing elements, and handle massive compressive forces generally found at the bottom of courier vehicles without yielding. This heavy-duty architecture ensures that your consumer products survive the most turbulent logistical bottlenecks and arrive preserving the exact condition they featured upon leaving your assembly line.
                            </p>

                            <h3>Heavy-Duty Corrugated Material: Deflecting Transit Chaos</h3>
                            <p>
                                The absolute key to our fail-safe delivery packaging is the utilization of aggressively dense, heavy-duty corrugated material. These structurally profound substrates are essential for preserving the spatial integrity of the box during violent handling and extensive dropping events:
                            </p>
                            <ul>
                                <li><strong>C-Flute & B-Flute Structural Strength:</strong> Recognized across the logistics sector for superior crush resistance and vertical stacking strength, these high-density intermediate flutes actively cushion severe impacts making them mandatory for protecting heavy or mixed-value shipments during courier transit.</li>
                                <li><strong>Double-Wall Corrugated Armoring:</strong> For operations moving highly fragile electronics, dense glass, or exceptionally heavy mechanical sets, our double-wall configurations merge two separate layers of varied fluting. This advanced double-layer matrix dramatically multiplies puncture resistance forming a near-indestructible exterior suitable for international transit.</li>
                                <li><strong>Rigid Edge & Corner Systems:</strong> Destructive forces overwhelmingly concentrate on the external corners of any package. Our designs employ overlapping multi-fold techniques and interlocking end panels that massively reinforce these stress points, deflecting the energy of drops away from the internal cargo.</li>
                                <li><strong>Moisture Resistance Coatings:</strong> E-commerce deliveries frequently encounter unpredictable weather sitting on doorsteps. We provide top-grade kraft paper variants and specialized aqueous coatings that repel immediate liquid penetration, maintaining board rigidity during humid or wet final-mile delivery phases.</li>
                            </ul>

                            <h3>Transforming Safe Transit into Immediate Brand Value</h3>
                            <p>
                                While rigorous physical defense dictates the primary engineering of our heavy-duty delivery boxes, intelligent brands recognize that these traveling packages represent massive marketing footprints. We incorporate sophisticated manufacturing techniques that allow your structural armor to function as a beautifully printed brand ambassador without sacrificing an ounce of physical durability:
                            </p>
                            <ul>
                                <li><strong>High-Resolution Exterior Flexography:</strong> Deposit bold, high-contrast inks directly onto the rugged corrugated outer layers. Prominently display your logo, handling instructions, and critical logistics barcodes so your package identifies itself instantly while processing through sorting hubs.</li>
                                <li><strong>Pre-Measured Cargo Volumes:</strong> Excess interior air allows products to launch into walls causing collision damage. We digitally craft delivery boxes to perfectly conform to your exact SKU volumes. Precise sizing minimizes the requirement for chaotic void fill and securely locks the product into the safest central position.</li>
                                <li><strong>Security-First Closure Integration:</strong> Reliable fulfillment requires trusted sealing. Expanding our designs to include durable crash-lock bottoms, reinforced taped flap junctions, and integrated anti-tamper locking tabs guarantees the internal contents remain untouched by unauthorized personnel between the warehouse and the consumer.</li>
                                <li><strong>Pallet Optimized Outer Dimensions:</strong> A delivery starts at the warehouse. Our rigid delivery cases maximize pallet-packing efficiency, creating perfectly geometric, stable towers that prevent basal crushing even when subjected to weight limits from massive multi-tier stacking during primary distribution.</li>
                            </ul>

                            <h3>Eco-Centric Heavy-Duty Scale</h3>
                            <p>
                                Demanding maximum durability does not necessitate ignoring sustainability protocols. Heavy-duty corrugated material is fundamentally one of the most closed-loop, environmentally friendly packaging methods operating on a global scale. We are fiercely committed to producing highly impact-resistant delivery boxes that conform to vital green initiatives:
                            </p>
                            <ul>
                                <li>Constructed utilizing up to 70% post-consumer recycled paper composites and entirely biodegradable corrugated media.</li>
                                <li>Fully compatible with all standard municipal recycling streams requiring absolutely no complex material breakdown by the end-user.</li>
                                <li>Manufactured utilizing non-toxic, water-based flexographic inks and corn-starch adhesives that eliminate dangerous volatile chemicals from the pulping cycle.</li>
                            </ul>

                            <h3>Reliable Flow for Heavy Logistics Operations</h3>
                            <p>
                                Commercial supply networks are unforgiving, and fulfillment centers cannot be halted by failing box seams or structural blowouts. We combine massive-scale automated high-speed corrugating equipment with highly reliable quality testing. Regardless of whether you manage an emerging boutique dispatching specific localized routes or a national distribution warehouse fulfilling hundreds of thousands of varied parcels monthly, our heavy-duty delivery solutions will never be the bottleneck.
                            </p>
                            <p>
                                By deeply integrating our custom delivery packaging, you equip your logistics chain with impenetrable defense, guaranteed safe transit integrity, and trustworthy heavy-duty corrugated strength. Partner with our team of elite box engineers today to rapidly protect your margins from damage claims and transform every high-risk logistical journey into an opportunity for flawless delivery presentation.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* RELATED PRODUCTS CAROUSEL */}
            <RelatedProductShippingBoxes />

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
                            We deliver extremely heavy-duty materials, precise dimensions, and mass volume reliability to eliminate transit damage.
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
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Maximum Durability</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Every delivery box we output is engineered from aggressive heavy-duty corrugated board. Our rigid ECT testing ensures each run meets the crushing strength standards necessary to protect internal payload through the violent drops of courier handling.
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
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Precision Conformity</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        We digitally cut your packaging to flawlessly encapsulate specific product dimensions. Eliminating excess internal air drastically reduces collision force during transit, vastly multiplying combined safety statistics.
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
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Automated Reliability</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        High-volume logistics require perfectly predictable box behavior. Our heavy-duty delivery components trace strict tolerances guaranteeing flawless behavior when running through advanced tape erection systems to preserve warehouse throughput speeds.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img
                                    src={heroImage}
                                    alt="Premium Delivery Boxes Packaging"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-7">
                                    <p className="text-white font-bold text-lg leading-snug mb-1">Trusted by 500+ E-Commerce Brands</p>
                                    <p className="text-white/75 text-sm">Delivering heavy-duty logistics across North America</p>
                                </div>
                            </div>
                            <div className="absolute top-4 -right-2 lg:-right-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80 backdrop-blur-sm">
                                <p className="text-2xl font-bold text-primary leading-none">99.9%</p>
                                <p className="text-xs text-slate-400 mt-1 font-medium">Safe Transit Rate</p>
                            </div>
                            <div className="absolute bottom-4 -left-2 lg:-left-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80 backdrop-blur-sm">
                                <p className="text-2xl font-bold text-emerald-500 leading-none">Max</p>
                                <p className="text-xs text-slate-400 mt-1 font-medium">Duty Strength</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* DIFFERENTIATE SECTION */}
            <section className="py-10 lg:py-12 bg-white overflow-hidden relative">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="relative group">
                            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] border border-primary/20 shadow-2xl transform transition-transform duration-700 hover:scale-[1.02]">
                                <img
                                    src={heroImage}
                                    alt="Differentiate Your Brand Logistics"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                            </div>
                            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-60" />
                            <div className="absolute -z-10 -top-8 -right-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl opacity-60" />
                        </div>

                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                                Protect Assets with <span className="text-primary">Heavy-Duty</span> Delivery Armor
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                At CustomPackMakers, we know that failing delivery packaging instantly results in lost merchandise and catastrophic consumer dissatisfaction. To utterly guarantee safe transit, we manufacture explicitly from high-density, shock-absorbing heavy-duty corrugated flutes. Our structural engineers deploy aggressive reinforcements at impact zones to handle crushing drops during the last-mile stretch. Combined with water-resistant liners and perfect dimensional geometry, we ensure your distributed goods arrive perfectly intact, negating return logistics while elevating your brand perception.
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
                                <h2 className="text-2xl md:text-3xl font-bold text-foreground">Frequently Asked Questions</h2>
                                <p className="text-base text-muted-foreground">We’re confident that you will rely thoroughly on our durable delivery packaging.</p>
                            </div>
                            <Accordion type="single" collapsible defaultValue="item-1" className="w-full space-y-2">
                                {[
                                    {
                                        id: "item-1",
                                        question: "How do these boxes survive rough delivery?",
                                        answer: "They guarantee extremely safe transit by utilizing highly-rigid, heavy-duty corrugated boards (like C-flute or Double-Wall). This structural density easily absorbs drops, prevents corner collapse under pressure, and deflects impact energy away from internal payload."
                                    },
                                    {
                                        id: "item-2",
                                        question: "Can I use these boxes for direct-to-consumer e-commerce?",
                                        answer: "Absolutely. These boxes are explicitly engineered to withstand the chaotic handling of small-parcel courier networks, making them the ultimate defense structure for direct-to-consumer supply chains."
                                    },
                                    {
                                        id: "item-3",
                                        question: "What closure methods are recommended for heavy items?",
                                        answer: "For maximum structural reliability during transit, we recommend utilizing reinforced water-activated gummed tape across the top and bottom central seams, combined with heavy-duty interlocking flaps to prevent bursting."
                                    },
                                    {
                                        id: "item-4",
                                        question: "Can I print branding directly on the delivery box?",
                                        answer: "Yes. Our robust corrugated surfaces are excellent substrates for single or multi-color flexographic printing, allowing you to clearly transmit your logo and handling barcodes continuously while in the logistics network."
                                    },
                                    {
                                        id: "item-5",
                                        question: "Are these heavy-duty boxes easily recycled?",
                                        answer: "Yes. Despite their aggressive density and industrial protective properties, our corrugated cardboard contains zero toxic elements and can be fully processed in any basic municipal recycling program without special handling."
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
                                alt="Custom Delivery Boxes FAQ"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <BrandRating />
            <QuoteForm />
            <Footer />
        </div>
    );
};

export default DeliveryBoxes;
