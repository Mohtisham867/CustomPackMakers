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
import heroImage from "@/assets/shipping-boxes/wine-shipping-boxes.webp";

// FAQ image
import FAQimage from "@/assets/FAQ-image.png";

const WineShippingBoxes = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    // Product images for gallery
    const productImages = [
        { src: heroImage, alt: "Wine Shipping Boxes - Main View" },
        { src: heroImage, alt: "Wine Shipping Boxes - Side Angle" },
        { src: heroImage, alt: "Wine Shipping Boxes - Open Box View" },
        { src: heroImage, alt: "Wine Shipping Boxes - Detail Shot" },
        { src: heroImage, alt: "Wine Shipping Boxes - Lifestyle Shot" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Wine Shipping Boxes | Custom Bottle Packaging | CustomPackMakers</title>
                <meta name="description" content="Order wholesale wine shipping boxes. Protective custom packaging engineered for maximum durability, safe glass transit, and heavy-duty corrugated logistics." />
                <meta name="keywords" content="wine shipping boxes, bottle shipping boxes, custom corrugated mailers, secure glass packaging" />
                <meta property="og:title" content="Wine Shipping Boxes | Custom Bottle Packaging" />
                <meta property="og:description" content="Protective custom shipping packaging engineered for durability and safe transit. Built with heavy-duty corrugated material for wine bottles." />
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
                                <BreadcrumbPage>Wine Shipping Boxes</BreadcrumbPage>
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
                                <span className="text-primary">Wine</span> Shipping Boxes
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Wholesale custom shipping boxes engineered for maximum durability, safe glass bottle transit, and premium unboxing experiences constructed completely from heavy-duty corrugated material.
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
                                    alt="Wine Shipping Boxes Hero"
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
                        Heavy-Duty Shipping Packaging Built for Safe and Secure Transit
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            Our <strong className="text-foreground">Wine Shipping Boxes</strong> are precision-engineered to prioritize ultimate durability and guarantee safe transit for highly fragile glass bottles. Constructed strictly from heavy-duty corrugated material and premium kraft stocks, each box delivers robust structural strength along with internal dividers to shield your wine against the harshest elements of modern logistics. Designed for vineyards and beverage brands that value uncompromised reliability, these custom boxes prevent crushing, eliminate internal collision, and provide exceptional shock absorption under continuous pressure during shipping. Whether handling single connoisseur orders or heavy club distributions, our shipping solutions are built to preserve product integrity scaling with the demands of any fast-paced fulfillment line.
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
                                                <Input id="length" type="number" placeholder="13" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label>
                                                <Input id="width" type="number" placeholder="4" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">D (in)</Label>
                                                <Input id="depth" type="number" placeholder="4" className="h-9 bg-white" />
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
                        The Importance of Heavy-Duty Corrugated Shipping Solutions
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
                                In the rapidly expanding landscape of modern e-commerce and global supply chain logistics, the true test of your brand happens during transit. Packaging is the protective barrier between your valuable product and the unpredictable rigors of shipping. For brands that prioritize uncompromised quality, investing in heavily engineered, custom shipping boxes crafted from heavy-duty corrugated material is not just a logistical necessity; it is a vital pillar of customer satisfaction and operational excellence. Superior shipping containers safeguard your investments and build long-lasting trust with consumers who demand flawlessly handled deliveries.
                            </p>
                            <p>
                                Our comprehensive array of custom shipping boxes addresses this critical requirement head-on. We focus intensely on designing robust structures that guarantee extreme durability and entirely safe transit. Every structural feature, from high-flute corrugated walls to impact-resistant corner reinforcements, is precisely calibrated to deflect shock, resist moisture, and handle tremendous compressive forces without failing. A premium outer shell ensures that your products survive the most turbulent logistical journeys and arrive mirroring the precise condition they left your warehouse.
                            </p>

                            <h3>Heavy-Duty Corrugated Material: The Ultimate Protection</h3>
                            <p>
                                The key to our fail-safe shipping packaging is the utilization of advanced, heavy-duty corrugated material. These structurally sound substrates are essential for preserving physical form during rough handling and extensive vibration along transport lines:
                            </p>
                            <ul>
                                <li><strong>B-Flute & C-Flute Corrugated Cardboard:</strong> Recognized across the industry for excellent crush resistance and staking strength, these high-density flutes absorb heavy impacts making them ideal for bulky or high-value shipments. They also offer a remarkably smooth exterior allowing for clean and readable branding.</li>
                                <li><strong>Double-Wall Corrugated Solutions:</strong> For brands moving fragile goods or exceptionally heavy sets, double-wall configurations merge two layers of varied flute sizes. This advanced architecture multiplies puncture resistance and rigid strength forming a near-indestructible exterior armor for high-risk transit.</li>
                                <li><strong>Premium Industrial Kraft Liners:</strong> We utilize top-grade kraft paper specifically processed for tear strength and moisture mitigation. This organic, highly resilient paper provides a dense exterior layer that blocks humidity while retaining its eco-friendly aesthetic.</li>
                                <li><strong>Protective Edge & Corner Systems:</strong> Vulnerability generally concentrates at the corners of any package. Our designs employ overlapping end panels and tuck-fold techniques that significantly reinforce these stress points against drops and compressive pallet loads.</li>
                            </ul>

                            <h3>Transforming Safe Transit into a Brand Experience</h3>
                            <p>
                                While physical defense dictates the primary function of our heavy-duty shipping boxes, modern brands recognize that these packages act as massive, traveling billboards. We incorporate sophisticated manufacturing techniques that let your structural armor double as a beautifully printed marketing asset without sacrificing any durability:
                            </p>
                            <ul>
                                <li><strong>High-Resolution Digital & Flexographic Printing:</strong> Print directly onto our smooth corrugated outer layers with sharp details and bold, vibrant colors. Prominently display your logo, handling instructions, and marketing slogans so your package clearly identifies itself at every touchpoint.</li>
                                <li><strong>Custom-Fitted Dimensions:</strong> Excess movement inside a shipping box causes internal collision damage. We digitally craft boxes to perfectly conform to your SKU profiles. Exact sizing eliminates the need for wasteful void fill and greatly enhances the product's safety inside.</li>
                                <li><strong>Security-Focused Closure Mechanisms:</strong> Implementing durable self-locking bottoms, strong adhesive tear-strips, and reinforced flap designs guarantees the contents remain securely packaged. Additionally, tamper-evident seals can be integrated directly into the structural folds of the heavy-duty design.</li>
                                <li><strong>Optimized Pallet Loading:</strong> Engineered not just for individual stability but for bulk distribution. Our rigid boxes stack perfectly to maximize pallet efficiency, preventing crushing even when subjected to weight loads from multi-tier stacking in warehouses.</li>
                            </ul>

                            <h3>Eco-Centric Durability</h3>
                            <p>
                                Embracing maximum durability does not mandate sacrificing sustainability. Heavy-duty corrugated material is naturally one of the most environmentally friendly packaging solutions available on the market. We are fiercely committed to producing highly protective shipping boxes that support a green and ethical ecosystem:
                            </p>
                            <ul>
                                <li>Engineered entirely from recycled paper composites and 100% biodegradable corrugated material.</li>
                                <li>Fully recyclable in standard municipal streams without the need for complex material separation.</li>
                                <li>Printed utilizing eco-safe, water-based flexographic inks that eliminate toxic chemical presence.</li>
                                <li>Manufactured from FSC-certified responsible sources to ensure the protection of global forest resources.</li>
                            </ul>

                            <h3>Reliability and Scale for All Operations</h3>
                            <p>
                                Supply chains move fast, and product availability cannot be stalled by packaging delays. We combine cutting-edge high-speed equipment with a flexible production model. Regardless of whether you manage an emerging boutique dispatching hundreds of units, or a national distribution center managing tens of thousands of parcels, our heavy-duty shipping solutions are ready to deploy efficiently.
                            </p>
                            <p>
                                By choosing our custom shipping packaging, you are equipping your supply chain with impenetrable durability, unmatched safe transit, and reliable heavy-duty corrugated strength. Partner with our team of elite structural engineers today. Protect your shipments, delight your end consumers, and transform every logistical challenge into an opportunity for pristine brand representation.
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
                            We combine premium heavy-duty materials, speed, and reliability to deliver shipping solutions that make your logistics flawless.
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
                                        Every shipping box we produce is built from premium heavy-duty corrugated material. Our rigorous QC process ensures each unit meets the maximum durability standards required for flawless and safe transit across global shipping networks.
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
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Tailored Protection</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        We engineer custom corrugated shipping packaging to your exact SKU dimensions, with precise structures that eliminate movement and protect external finish. Your brand's logistical specs, executed flawlessly to prevent damage at scale.
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
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Eco-Friendly Strength</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Modern e-commerce demands heavy-duty logistics fused with sustainable methods. Our fully recyclable corrugated shipping boxes deliver impenetrable industrial utility, reducing your footprint while providing premium unboxing experiences to end-users.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img
                                    src={heroImage}
                                    alt="Premium Shipping Box Packaging"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-7">
                                    <p className="text-white font-bold text-lg leading-snug mb-1">Trusted by 500+ E-Commerce Brands</p>
                                    <p className="text-white/75 text-sm">Delivering heavy-duty packaging across North America</p>
                                </div>
                            </div>
                            <div className="absolute top-4 -right-2 lg:-right-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80 backdrop-blur-sm">
                                <p className="text-2xl font-bold text-primary leading-none">99%</p>
                                <p className="text-xs text-slate-400 mt-1 font-medium">Safe Transit Rate</p>
                            </div>
                            <div className="absolute bottom-4 -left-2 lg:-left-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80 backdrop-blur-sm">
                                <p className="text-2xl font-bold text-emerald-500 leading-none">High</p>
                                <p className="text-xs text-slate-400 mt-1 font-medium">Crush Resistance</p>
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
                                    alt="Differentiate Your Brand"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                            </div>
                            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-60" />
                            <div className="absolute -z-10 -top-8 -right-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl opacity-60" />
                        </div>

                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                                Ensure Flawless Delivery with <span className="text-primary">Heavy-Duty</span> Corrugated Boxes
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                At CustomPackMakers, we know that shipping vulnerabilities can instantly ruin your product and brand reputation. To guarantee safe transit, we utilize highly dense and crush-resistant heavy-duty corrugated materials. Our logistical packaging experts collaborate directly with your team to engineer the absolute perfect dimension, limiting internal mobility while drastically boosting external protection. By integrating structural mastery with durable finishes, we ensure your bulk shipments or individual parcels arrive globally exactly as they were packaged.
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
                                <p className="text-base text-muted-foreground">We’re confident that you will rely thoroughly on our durable boxes.</p>
                            </div>
                            <Accordion type="single" collapsible defaultValue="item-1" className="w-full space-y-2">
                                {[
                                    {
                                        id: "item-1",
                                        question: "How do these boxes ensure safe transit?",
                                        answer: "They guarantee safe transit by being manufactured from top-tier, heavy-duty corrugated materials like B, C, and E flutes. This creates a highly rigid exterior that actively absorbs shock, prevents crushing during stacking, and deflects impact away from your internal products."
                                    },
                                    {
                                        id: "item-2",
                                        question: "What is the primary material used for these boxes?",
                                        answer: "Our core foundation incorporates heavy-duty corrugated board accompanied by premium kraft lines. We offer single-wall and double-wall configurations depending directly on your logistical fragility requirements."
                                    },
                                    {
                                        id: "item-3",
                                        question: "Can these boxes handle bulk weights?",
                                        answer: "Absolutely. When utilizing our double-wall heavy-duty corrugated options, the boxes are engineered specifically to bear dense internal weights and massive external compressive forces during high-tier pallet stacking."
                                    },
                                    {
                                        id: "item-4",
                                        question: "Are they eco-friendly despite their durability?",
                                        answer: "Yes. All of our heavy-duty corrugated material is derived from responsibly managed sources, utilizes recycled pulp content where possible, and remains 100% capable of standard curbside recycling programs."
                                    },
                                    {
                                        id: "item-5",
                                        question: "Can I print branding on these heavy-duty boxes?",
                                        answer: "Certainly. We leverage advanced flexographic and digital printing to cleanly display your logos, handling directions, and brand colors brightly onto the sturdy exterior corrugated layers without undermining structure."
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
                                alt="Custom Shipping Boxes FAQ"
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

export default WineShippingBoxes;
