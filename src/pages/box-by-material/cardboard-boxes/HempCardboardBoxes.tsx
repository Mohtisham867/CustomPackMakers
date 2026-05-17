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
import { RelatedProductCardboardBoxes } from "@/components/RelatedProductCardboardBoxes";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";

// Specific product images
import heroImage from "@/assets/material/cardboard-boxes/hemp-cardboard-boxes.webp";

// FAQ image
import FAQimage from "@/assets/FAQ-image.webp";

const HempCardboardBoxes = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    // Product images for gallery
    const productImages = [
        { src: heroImage, alt: "Hemp Cardboard Boxes - Main View" },
        { src: heroImage, alt: "Hemp Cardboard Boxes - Side Angle" },
        { src: heroImage, alt: "Hemp Cardboard Boxes - Open Box View" },
        { src: heroImage, alt: "Hemp Cardboard Boxes - Detail Shot" },
        { src: heroImage, alt: "Hemp Cardboard Boxes - Lifestyle Shot" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Hemp Cardboard Boxes | Eco-Friendly Packaging | CustomPackMakers</title>
                <meta name="description" content="Order eco-friendly custom hemp cardboard boxes wholesale. Premium sustainable packaging with fast turnaround, free shipping & full customization." />
                <meta name="keywords" content="hemp cardboard boxes, eco friendly packaging, custom hemp boxes, wholesale sustainable packaging, biodegradable boxes" />
                <meta property="og:title" content="Hemp Cardboard Boxes | Eco-Friendly Packaging | CustomPackMakers" />
                <meta property="og:description" content="Premium custom hemp cardboard packaging for eco-conscious brands. Sustainable boxes, vibrant printing & durable options. Get a free quote." />
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
                                    <Link to="/box-by-material">Box By Material</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link to="/box-by-material/cardboard-boxes">Cardboard Boxes</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Hemp Cardboard Boxes</BreadcrumbPage>
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
                                <span className="text-primary">Hemp</span> Cardboard Boxes
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Wholesale eco-friendly hemp cardboard packaging engineered for durability, sustainability, and premium unboxing built to scale with your brand.
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
                                    src={heroImage}
                                    alt="Hemp Cardboard Boxes Hero"
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
                        Sustainable Hemp Packaging Built for Brands That Care
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            Our <strong className="text-foreground">hemp cardboard boxes</strong> are sustainably engineered for B2B brands that refuse to compromise on quality and environmental responsibility. Constructed from premium eco-friendly hemp-infused cardstock and biodegradable materials, each box delivers the structural strength your supply chain demands while protecting the planet. Whether you're launching an organic skincare line or scaling a sustainable retail operation, our <strong className="text-foreground">custom hemp packaging</strong> is designed to perform at every touchpoint.
                        </p>
                        <p>
                            From organic cosmetics and natural supplements to artisanal goods, our <strong className="text-foreground">eco-friendly boxes</strong> accommodate every size, silhouette, and style. Each box features reinforced corners, custom dimensions, and organic finishes, ensuring your product arrives in showroom condition, every time. With full-color eco-friendly printing, soy-based inks, embossing, and natural matte finishes, your <strong className="text-foreground">hemp boxes</strong> become a powerful asset for your conscious brand. Order wholesale with low minimums and our industry-leading 8–10 day turnaround.
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
                                                <Input id="length" type="number" placeholder="12" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label>
                                                <Input id="width" type="number" placeholder="8" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">D (in)</Label>
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
                        The Importance of Sustainable Packaging for Modern Brands
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
                                In today's competitive and environmentally conscious retail landscape, packaging has evolved far beyond its traditional role as a simple container.
                                For modern brands, custom hemp cardboard boxes represent a critical touchpoint in the customer journey, one that can significantly
                                influence brand perception, customer loyalty, and ultimately, your bottom line. Premium sustainable packaging communicates quality,
                                ethical responsibility, and brand values before the customer even opens the box. Hemp is an incredibly versatile and sustainable resource, making it the perfect material for high-quality packaging solutions.
                            </p>
                            <p>
                                Our custom hemp cardboard boxes are designed with this profound understanding at their core. Every element, from the structural design to
                                the finishing touches, is carefully considered to create an unboxing experience that delights customers, minimizes environmental impact, and reinforces
                                your brand identity. Whether you're a boutique organic cosmetics designer or a large-scale natural goods manufacturer, investing
                                in high-quality eco-friendly packaging demonstrates your unwavering commitment to excellence and creates lasting impressions that drive repeat purchases.
                            </p>

                            <h3>Unmatched Eco-Friendly Material Quality & Structural Durability</h3>
                            <p>
                                The foundation of exceptional sustainable packaging begins with superior materials. We offer a comprehensive range of premium
                                hemp-infused substrates, each selected for specific performance characteristics and authentic aesthetic qualities. Hemp fibers are inherently stronger than traditional wood pulp fibers, offering superior durability:
                            </p>
                            <ul>
                                <li><strong>Hemp-Infused Corrugated Board:</strong> Our most popular choice for sturdy eco-packaging, hemp-flute offers the perfect balance between strength and sustainability. The structure provides excellent crush resistance while maintaining a smooth printing surface for vibrant graphics, all while being completely biodegradable.</li>
                                <li><strong>Rigid Hemp Chipboard:</strong> For luxury eco-conscious brands, rigid hemp chipboard delivers an unparalleled premium feel. This thick, sturdy material creates a solid, high-end presentation that communicates both luxury and environmental responsibility without compromise.</li>
                                <li><strong>Natural Hemp Kraft:</strong> Eco-conscious brands appreciate our purely sustainable hemp kraft options. These biodegradable, recyclable materials offer a highly natural, authentic aesthetic while maintaining exceptional structural integrity.</li>
                                <li><strong>Bleached Hemp Paperboard:</strong> For maximum print quality and a brighter finish, bleached hemp paperboard provides exceptional color reproduction and a premium appearance ideal for retail environments, using chlorine-free bleaching processes.</li>
                            </ul>
                            <p>
                                Each material undergoes rigorous testing for compression strength, edge crush resistance, and moisture resistance,
                                ensuring your products arrive at their destination in perfect condition regardless of shipping conditions or handling, all while maintaining their green credentials.
                            </p>

                            <h3>Customization Options That Elevate Your Sustainable Brand</h3>
                            <p>
                                True differentiation comes from thoughtful customization. Our advanced manufacturing capabilities allow for virtually unlimited
                                design possibilities, enabling you to create packaging that perfectly aligns with your brand identity and environmental ethos:
                            </p>
                            <ul>
                                <li><strong>Custom Dimensions:</strong> We engineer boxes to fit your exact product specifications, from small tincture bottles to oversized organic apparel. Precise sizing minimizes material waste, reduces shipping volume, and ensures optimal product protection.</li>
                                <li><strong>Eco-Friendly Window Cutouts:</strong> Strategically placed die-cut windows with clear compostable PLA film allow customers to preview the product while maintaining protection and 100% biodegradability, building trust and driving purchase decisions.</li>
                                <li><strong>Sustainable Interior Compartments:</strong> Custom molded pulp inserts and hemp dividers keep products positioned perfectly, prevent movement during transit, and can accommodate accessories like instruction cards or promotional materials.</li>
                                <li><strong>Unique Closure Systems:</strong> Choose from natural fiber ribbon ties, tuck-top designs, or innovative auto-lock mechanisms that enhance functionality while adding a premium touch without relying on synthetic adhesives.</li>
                            </ul>

                            <h3>Advanced Eco-Printing & Finishing Techniques</h3>
                            <p>
                                Transform your hemp boxes into powerful marketing assets with our state-of-the-art sustainable printing and finishing capabilities.
                                We utilize both offset and digital printing technologies configured specifically for eco-friendly inks to achieve stunning, color-accurate results that make your brand stand out on crowded retail shelves:
                            </p>
                            <ul>
                                <li><strong>Soy & Vegetable-Based Inks:</strong> Achieve photographic-quality images and vibrant brand colors with our precision printing processes using non-toxic, petroleum-free inks that are safer for the environment and fully compostable. Perfect for detailed product photography and complex graphics.</li>
                                <li><strong>Pantone Color Matching:</strong> Ensure perfect brand color consistency across all packaging with exact Pantone color matching, critical for maintaining brand standards even when printing on natural, unbleached hemp substrates.</li>
                                <li><strong>Foil Stamping (Recyclable options):</strong> Add luxury and visual impact with specialized foil accents that catch light and draw attention to logos, carefully sourced to ensure they do not disrupt the recyclability of the hemp board.</li>
                                <li><strong>Water-Based Coatings:</strong> Create striking contrast and protection by applying water-based matte or gloss coatings that provide excellent scuff resistance while ensuring the packaging remains fully recyclable and compostable.</li>
                                <li><strong>Embossing & Debossing:</strong> Add dimensional depth and premium tactile quality with raised or recessed design elements that customers can feel. This technique adds luxury without introducing any inks or chemicals.</li>
                                <li><strong>Natural Textures:</strong> Preserve and highlight the innate, beautiful texture of hemp fibers to communicate authenticity and organic quality to your customers immediately upon touch.</li>
                            </ul>

                            <h3>The Ultimate Sustainable Packaging Solution</h3>
                            <p>
                                Environmental responsibility is no longer just an option—it's an absolute necessity. Consumers are actively seeking out brands that align with their values. We're fiercely committed to helping brands reduce their
                                environmental impact without compromising on quality, durability, or premium aesthetics. Our sustainable hemp packaging options inherently include:
                            </p>
                            <ul>
                                <li>100% recyclable, biodegradable, and compostable materials sourced from rapidly renewable hemp crops.</li>
                                <li>Hemp cultivation requires significantly less water than traditional trees and typically requires no pesticides.</li>
                                <li>Optimized structural designs that drastically minimize material usage and carbon footprint during shipping while maintaining uncompromising strength.</li>
                                <li>Water-based coatings and adhesives that fully support home and industrial recyclability.</li>
                                <li>A powerful brand story you can share with your customers, highlighting your proactive steps toward a greener future.</li>
                            </ul>

                            <h3>Wholesale Pricing & Scalable Eco-Production</h3>
                            <p>
                                Whether you're a sustainable startup testing the market with a small initial run or an established global brand requiring tens of
                                thousands of units monthly to replace your legacy packaging, our flexible production capabilities scale seamlessly to meet your needs. We offer highly competitive
                                pricing on short runs (as low as 100 units) and substantial volume discounts for large-scale wholesale orders.
                            </p>
                            <p>
                                Partnering with CustomPackMakers means gaining a dedicated packaging team committed to your long-term success and sustainability goals. From initial eco-design consultation
                                through final delivery, we provide expert guidance, proactive communication, and rigorous quality assurance at every step.
                                Let us help you create custom hemp cardboard boxes that protect your products, elevate your brand's green credentials, and delight your environmentally conscious customers.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* RELATED PRODUCTS CAROUSEL */}
            <RelatedProductCardboardBoxes />

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
                            We combine craftsmanship, sustainability, and reliability to deliver packaging that makes your eco-brand unforgettable.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">
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
                                        Uncompromising Quality
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Every <strong>custom hemp cardboard box</strong> we produce is built from premium eco-materials selected for structural integrity and tactile luxury. Our rigorous QC process ensures each unit meets the durability standards your operation demands.
                                    </p>
                                </div>
                            </div>

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
                                        Tailored Perfection
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        We engineer <strong>custom packaging</strong> to your exact SKU dimensions, with precision-cut inserts and bespoke structural forms that eliminate movement and protect your products flawlessly at scale.
                                    </p>
                                </div>
                            </div>

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
                                        Eco-Friendly Elegance
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Today's buyers expect sustainability without sacrificing premium aesthetics. Our recyclable <strong>hemp boxes</strong> deliver the luxury look while reducing your environmental footprint.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img
                                    src={heroImage}
                                    alt="Premium Custom Hemp Cardboard Box Packaging"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-7">
                                    <p className="text-white font-bold text-lg leading-snug mb-1">
                                        Trusted by 500+ Eco Brands
                                    </p>
                                    <p className="text-white/75 text-sm">Delivering premium sustainable packaging</p>
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

            {/* DIFFERENTIATE SECTION */}
            <section className="py-10 lg:py-12 bg-white overflow-hidden relative">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="relative group">
                            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] border border-primary/20 shadow-2xl transform transition-transform duration-700 hover:scale-[1.02]">
                                <img
                                    src={heroImage}
                                    alt="Differentiate Your Packaging"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                            </div>
                            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-60" />
                            <div className="absolute -z-10 -top-8 -right-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl opacity-60" />
                        </div>

                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                                Differentiate Your <span className="text-primary">Products</span> From Others
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                At CustomPackMakers, we understand that your packaging is the first physical touchpoint for your customers. To ensure your eco-brand stands out, we utilize state-of-the-art manufacturing processes combined with premium organic printing techniques. Our team of experts works closely with you to determine the perfect dimensions, ensuring a snug fit and maximum protection. By integrating distinctive features like natural textures, high-end sustainable finishes, and bio-based materials, we help you create a world-class unboxing experience that builds lasting brand loyalty.
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
                                        question: "What Are The Outcomes Of Using Hemp Cardboard Boxes?",
                                        answer: "Using our hemp cardboard boxes significantly enhances your brand's eco-friendly profile. They provide robust, sustainable protection for your products during shipping and storage, appeal to environmentally conscious consumers, and serve as a mobile billboard for your commitment to the planet."
                                    },
                                    {
                                        id: "item-2",
                                        question: "What Time Does It Take To Manufacture My Order?",
                                        answer: "Our standard turnaround time is 8-10 business days after design approval. We also offer expedited rush options (4-6 business days) for time-sensitive launches. Shipping times depend on your location and chosen delivery method."
                                    },
                                    {
                                        id: "item-3",
                                        question: "Is Hemp Better For The Environment Than Standard Cardboard?",
                                        answer: "Yes, hemp is highly sustainable. It grows incredibly fast, requires significantly less water than trees, naturally replenishes soil, and its fibers make for highly durable, completely biodegradable packaging materials."
                                    },
                                    {
                                        id: "item-4",
                                        question: "Can I Get Custom Printing On My Hemp Boxes?",
                                        answer: "Absolutely. We offer full-color printing using soy and vegetable-based inks. From minimalist monochromatic matte finishes to vibrant, high-gloss accents, we can perfectly replicate your brand's palette while remaining eco-friendly."
                                    },
                                    {
                                        id: "item-5",
                                        question: "What Are The Shipping Charges For Eco-Packaging?",
                                        answer: "We strive to offer simple and transparent pricing. For many standard orders, we offer free shipping to major cities. For large wholesale pallets or expedited requirements, shipping costs are calculated based on weight and volume—please request a custom quote for the most accurate rates."
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
                                alt="Hemp Cardboard Boxes FAQ"
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

export default HempCardboardBoxes;
