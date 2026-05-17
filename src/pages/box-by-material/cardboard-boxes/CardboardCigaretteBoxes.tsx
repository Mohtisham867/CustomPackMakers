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
import heroImage from "@/assets/material/cardboard-boxes/cardboard-cigarette-boxes.webp";

// FAQ image
import FAQimage from "@/assets/FAQ-image.webp";

const CardboardCigaretteBoxes = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    // Product images for gallery
    const productImages = [
        { src: heroImage, alt: "Cardboard Cigarette Boxes - Main View" },
        { src: heroImage, alt: "Cardboard Cigarette Boxes - Side Angle" },
        { src: heroImage, alt: "Cardboard Cigarette Boxes - Open Box View" },
        { src: heroImage, alt: "Cardboard Cigarette Boxes - Detail Shot" },
        { src: heroImage, alt: "Cardboard Cigarette Boxes - Lifestyle Shot" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Cardboard Cigarette Boxes | Premium Packaging | CustomPackMakers</title>
                <meta name="description" content="Order custom cardboard cigarette boxes wholesale. Premium packaging for tobacco and pre-rolls with full customization, fast turnaround, and free shipping." />
                <meta name="keywords" content="cardboard cigarette boxes, custom cigarette packaging, pre-roll boxes, wholesale tobacco packaging, blank cigarette boxes" />
                <meta property="og:title" content="Custom Cardboard Cigarette Boxes | Premium Packaging | CustomPackMakers" />
                <meta property="og:description" content="Premium custom cardboard cigarette packaging. Foil stamping, embossing, child-resistant options & full-color printing. Get a free quote." />
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
                                <BreadcrumbPage>Cardboard Cigarette Boxes</BreadcrumbPage>
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
                                <span className="text-primary">Cardboard</span> Cigarette Boxes
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Wholesale custom cardboard cigarette packaging engineered for freshness, brand impact, and regulatory compliance built to scale with your business.
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
                                    alt="Cardboard Cigarette Boxes Hero"
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
                        Custom Cigarette Packaging Built for Brands That Mean Business
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            Our <strong className="text-foreground">cardboard cigarette boxes</strong> are precision-engineered for B2B tobacco and cannabis brands that refuse to compromise on quality or compliance. Constructed from premium SBS cardstock and rigid materials, each box delivers the structural strength to protect delicate pre-rolls and cigarettes while projecting the premium brand identity your customers remember. Whether you're launching a luxury pre-roll line or scaling a wholesale tobacco operation, our <strong className="text-foreground">custom branded cigarette packaging</strong> is designed to perform flawlessly.
                        </p>
                        <p>
                            From standard packs and wide flip-top boxes to slim slider cartons, our <strong className="text-foreground">custom cigarette packaging</strong> solutions accommodate every size, quantity, and style. Each box can feature child-resistant mechanisms, foil lining for freshness, and precise die-cuts, ensuring your product arrives fresh and compliant. With full-color CMYK printing, foil stamping, embossing, and matte or gloss finishes, your <strong className="text-foreground">cigarette boxes</strong> become a powerful brand asset. Order wholesale with low minimums and our industry-leading 8–10 day turnaround.
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
                                                <Input id="length" type="number" placeholder="3.5" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label>
                                                <Input id="width" type="number" placeholder="2.2" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">D (in)</Label>
                                                <Input id="depth" type="number" placeholder="0.9" className="h-9 bg-white" />
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
                        The Importance of Premium Packaging for Cigarette and Pre-Roll Brands
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
                                In the highly competitive and tightly regulated tobacco and cannabis markets, packaging plays an outsized role in brand success.
                                For these brands, custom cardboard cigarette boxes represent a critical touchpoint in the customer journey, one that must balance strict regulatory compliance with compelling aesthetic appeal. Premium packaging communicates quality, freshness,
                                and brand identity before the customer even opens the pack, establishing trust and encouraging repeat purchases in a market driven by loyalty.
                            </p>
                            <p>
                                Our custom cardboard cigarette boxes are designed with this nuanced understanding at their core. Every element, from the structural design to
                                the finishing touches and safety mechanisms, is carefully engineered to create an experience that delights customers while meeting industry standards. Whether you're a boutique CBD pre-roll creator or a large-scale tobacco manufacturer, investing
                                in high-quality packaging demonstrates your commitment to excellence and product integrity.
                            </p>

                            <h3>Unmatched Material Quality & Protective Durability</h3>
                            <p>
                                The foundation of exceptional cigarette and pre-roll packaging begins with superior materials. We offer a comprehensive range of premium
                                substrates, each selected for specific performance characteristics regarding crush resistance and freshness preservation:
                            </p>
                            <ul>
                                <li><strong>SBS (Solid Bleached Sulfate):</strong> Our most popular choice for cigarette packs, SBS offers the perfect balance between foldability and printability. The bright white finish provides exceptional color reproduction for vibrant, compliant graphics.</li>
                                <li><strong>Kraft Cardstock:</strong> Eco-conscious brands, particularly in the hemp and CBD space, appreciate our sustainable kraft options. These materials offer a natural, authentic aesthetic while maintaining the structural integrity needed to protect delicate contents.</li>
                                <li><strong>Rigid Chipboard:</strong> For luxury cigarillos and high-end pre-roll multi-packs, rigid chipboard delivers an unparalleled premium feel. This thick, sturdy material creates a solid, high-end presentation that communicates exclusivity.</li>
                                <li><strong>Metallic & Holographic Foil Boards:</strong> For brands looking to stand out on crowded dispensary or convenience store shelves, metallized boards offer built-in brilliance and premium shelf appeal.</li>
                            </ul>
                            <p>
                                Each material undergoes testing to ensure it can withstand pocket-wear, preventing crushing and keeping your product intact throughout the customer's usage cycle.
                            </p>

                            <h3>Customization Options for Compliance and Brand Identity</h3>
                            <p>
                                True differentiation in regulated markets requires intelligent customization. Our advanced manufacturing capabilities allow for innovative
                                design possibilities, enabling you to create packaging that aligns with your brand identity while adhering to legal requirements:
                            </p>
                            <ul>
                                <li><strong>Custom Structural Engineering:</strong> We engineer boxes to fit your exact product specifications, whether you need a standard 20-pack flip-top, a slim slider box for 5 pre-rolls, or a custom display carton.</li>
                                <li><strong>Child-Resistant (CR) Features:</strong> For cannabis and CBD products, we offer integrated, certified child-resistant locking mechanisms that meet stringent regulatory standards without frustrating the adult end-user.</li>
                                <li><strong>Freshness Preservation:</strong> Custom foil inner linings and precision-fit closures help maintain ideal humidity levels, preserving the flavor, aroma, and potency of your tobacco or herbal products.</li>
                                <li><strong>Compliance Labeling:</strong> We ensure your design layout seamlessly incorporates mandatory warning labels, barcodes, and tax stamp areas without compromising the overall aesthetic design of your brand.</li>
                            </ul>

                            <h3>Advanced Printing & Finishing Techniques</h3>
                            <p>
                                Transform your cigarette boxes into powerful marketing assets with our state-of-the-art printing and finishing capabilities.
                                In a market where advertising is often restricted, the packaging itself must do the heavy lifting of brand communication:
                            </p>
                            <ul>
                                <li><strong>High-Resolution CMYK Printing:</strong> Achieve incredibly sharp, legible text for regulatory information alongside vibrant brand colors with our precision printing processes.</li>
                                <li><strong>Metallic Foil Stamping:</strong> Add luxury and visual impact with gold, silver, or holographic foil accents that catch light and draw attention to your logo and brand name.</li>
                                <li><strong>Spot UV & Soft-Touch Coatings:</strong> Create striking contrast and tactile interest. A velvety soft-touch matte finish paired with high-gloss Spot UV on the logo creates a premium feel that customers notice immediately upon picking up the pack.</li>
                                <li><strong>Embossing & Debossing:</strong> Add dimensional depth and premium tactile quality with raised or recessed design elements, a hallmark of high-end tobacco packaging.</li>
                            </ul>

                            <h3>Sustainable Packaging Solutions</h3>
                            <p>
                                Modern consumers increasingly demand environmental responsibility, even in the tobacco and cannabis sectors. We're committed to helping brands reduce their
                                environmental impact. Our sustainable packaging options include:
                            </p>
                            <ul>
                                <li>100% recyclable materials sourced from responsibly managed forests (FSC-certified options available).</li>
                                <li>Soy-based and vegetable-based inks that eliminate harmful VOCs during production.</li>
                                <li>Optimized structural designs that minimize material waste during die-cutting.</li>
                                <li>Biodegradable laminate options that maintain a premium look without sacrificing recyclability.</li>
                            </ul>

                            <h3>Wholesale Pricing & Scalable Production</h3>
                            <p>
                                Whether you're a startup launching a small batch of artisanal pre-rolls or an established brand requiring hundreds of
                                thousands of units monthly, our flexible production capabilities scale to meet your needs. We offer competitive
                                pricing on short runs and substantial volume discounts for massive wholesale orders.
                            </p>
                            <p>
                                Partnering with CustomPackMakers means gaining a dedicated packaging team that understands the nuances of the tobacco and cannabis markets. From initial design and compliance consultation
                                through final delivery, we provide expert guidance, rapid turnarounds, and uncompromising quality assurance.
                                Let us help you create custom cardboard cigarette boxes that protect your products, navigate regulations, and elevate your brand above the competition.
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
                            We combine craftsmanship, speed, and regulatory expertise to deliver packaging that makes your brand unforgettable.
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
                                        Every <strong>custom cigarette box</strong> we produce is built from premium SBS cardstock and specialty textured stocks, materials selected for structural integrity. Our rigorous QC process ensures each unit withstands daily pocket carry and protects your products.
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
                                        Tailored Compliance
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        No two markets are identical. We engineer <strong>custom cigarette packaging</strong> to incorporate necessary child-resistant locks and precision-cut warning label areas, executing your brand's regulatory requirements flawlessly at scale.
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
                                        Premium Finishes
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Stand out on the shelf. Our metallic foil stamping, embossing, and soft-touch laminations deliver a luxury look and tactile performance, elevating your brand's perception without skyrocketing your per-unit costs.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img
                                    src={heroImage}
                                    alt="Premium Custom Cigarette Box Packaging"
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
                                At CustomPackMakers, we understand that your packaging is the first physical touchpoint for your customers. To ensure your brand stands out in a crowded market, we utilize state-of-the-art manufacturing processes combined with premium printing techniques. Our team works closely with you to determine the perfect dimensions, ensuring a snug fit and freshness protection. By integrating distinctive features like child-resistant locks, high-end foil finishes, and precise embossing, we help you create a world-class unboxing experience that builds lasting brand loyalty and drives repeat purchases.
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
                                        question: "What Are The Outcomes Of Using Custom Cigarette Boxes?",
                                        answer: "Using our custom cigarette boxes significantly enhances your brand visibility and compliance. They provide robust protection against crushing, maintain product freshness, and serve as a high-end mobile billboard for your brand, ultimately driving customer loyalty."
                                    },
                                    {
                                        id: "item-2",
                                        question: "What Time Does It Take To Manufacture My Order?",
                                        answer: "Our standard turnaround time is 8-10 business days after design approval. We also offer expedited rush options (4-6 business days) for time-sensitive launches. Shipping times depend on your location and chosen delivery method."
                                    },
                                    {
                                        id: "item-3",
                                        question: "Do You Offer Child-Resistant Options for Pre-Rolls?",
                                        answer: "Yes, we specialize in providing certified child-resistant (CR) packaging mechanisms for CBD and cannabis pre-roll boxes to ensure full regulatory compliance while maintaining a premium aesthetic."
                                    },
                                    {
                                        id: "item-4",
                                        question: "Can I Get Foil Inner Linings For Freshness?",
                                        answer: "Absolutely. We offer custom foil inner linings and wraps that help preserve humidity levels and protect the aroma and flavor profiles of your tobacco or herbal products."
                                    },
                                    {
                                        id: "item-5",
                                        question: "What Are The Shipping Charges?",
                                        answer: "We strive to offer simple and transparent pricing. For many standard orders, we offer free shipping to major cities. For large wholesale pallets or expedited requirements, shipping costs are calculated based on weight and volume—please request a custom quote for accurate rates."
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
                                alt="Custom Cigarette Boxes FAQ"
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

export default CardboardCigaretteBoxes;
