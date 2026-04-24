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
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TechnicalSpecsSection } from "@/components/TechnicalSpecsSection";
import { RelatedProductFragrance } from "@/components/RelatedProductFragrance";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";

// Images specific to this page
import luxuryPerfumePackaginghero from "@/assets/fragrance-boxes/luxury-perfume-packaging/img-hero.webp";
import luxuryPerfumePackagingimg1 from "@/assets/fragrance-boxes/luxury-perfume-packaging/img-1.webp";
import luxuryPerfumePackagingimg2 from "@/assets/fragrance-boxes/luxury-perfume-packaging/img-2.webp";
import luxuryPerfumePackagingimg3 from "@/assets/fragrance-boxes/luxury-perfume-packaging/img-3.webp";
import luxuryPerfumePackagingimg4 from "@/assets/fragrance-boxes/luxury-perfume-packaging/img-4.webp";
import luxuryPerfumePackagingimg5 from "@/assets/fragrance-boxes/luxury-perfume-packaging/img-5.webp";
import luxuryPerfumePackagingimg6 from "@/assets/fragrance-boxes/luxury-perfume-packaging/img-whychoose.webp";
import luxuryPerfumePackagingimg7 from "@/assets/fragrance-boxes/luxury-perfume-packaging/img-different.webp";

// FAQ image
import FAQimage from "@/assets/FAQ-image.webp";

const LuxuryPerfumePackaging = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    // Gallery images using the 5 available fragrance images to satisfy layout requirements
    const productImages = [
        { src: luxuryPerfumePackagingimg1, alt: "Luxury Perfume Packaging - Main View" },
        { src: luxuryPerfumePackagingimg2, alt: "High-End Perfume Display" },
        { src: luxuryPerfumePackagingimg3, alt: "Premium Rigid Perfume Box Structure" },
        { src: luxuryPerfumePackagingimg4, alt: "Artisan Fragrance Presentation" },
        { src: luxuryPerfumePackagingimg5, alt: "Luxury Scent Brand Packaging" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Luxury Perfume Packaging | Premium Scent Boxes | CustomPackMakers</title>
                <meta name="description" content="Order wholesale luxury perfume packaging with magnetic closures, rigid constructs, and exquisite gold foil detailing to perfectly complement high-end fragrance lines." />
                <meta name="keywords" content="luxury perfume packaging, high-end fragrance boxes, rigid perfume boxes, premium cosmetic packaging" />
                <meta property="og:title" content="Luxury Perfume Packaging | Premium Scent Boxes | CustomPackMakers" />
                <meta property="og:description" content="Masterfully crafted luxury perfume packaging. Elevate your brand with rigid magnetic boxes, flawless foil stamping, and premium bespoke structural design." />
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
                                    <Link to="/categories/fragrance-boxes">Fragrance Boxes</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Luxury Perfume Packaging</BreadcrumbPage>
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
                                <span className="text-primary">Luxury</span> Perfume Packaging
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Command unmatched prestige with high-end luxury perfume packaging manufactured with impeccably rigid architecture, magnetic closures, and lavish finishes to encapsulate your brand's most exquisite master perfumer creations perfectly.
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
                                    src={luxuryPerfumePackaginghero}
                                    alt="Luxury Perfume Packaging Hero"
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
                        Uncompromising Elegance for the Fine Fragrance Industry
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            In the upper echelons of the fragrance industry, the presentation holds equal weight to the perfume itself. Our <strong className="text-foreground">luxury perfume packaging</strong> is unapologetically opulent. Structured from dense, high-grade rigid board stock, these boxes feel incredibly weighty and substantial in the hands of affluent consumers. Finished with crisp magnetic closures or elegant slipcase mechanisms, they deliver a highly sensorial, highly satisfying unboxing journey representing pure exclusivity.
                        </p>
                        <p>
                            Visual impact is flawlessly perfected utilizing our array of artisanal finishing techniques. We provide impeccably hot-stamped golden foils over soft-touch, velvety matte laminations, ensuring that light dances across your precisely embossed logos. Within, velvet-lined foam or satin fabric wraps meticulously cradle and guard your hand-crafted glass bottles. Let us engineer a luxurious housing that matches the profound depth, history, and unmatched elegance of your premium fragrance.
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
                                                <Input id="length" type="number" placeholder="5" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label>
                                                <Input id="width" type="number" placeholder="5" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">D (in)</Label>
                                                <Input id="depth" type="number" placeholder="7" className="h-9 bg-white" />
                                            </div>
                                        </div>

                                        <div className="space-y-1.5">
                                            <Label htmlFor="quantity" className="text-xs font-semibold text-muted-foreground">Quantity</Label>
                                            <Input id="quantity" type="number" placeholder="250" className="h-9 bg-white" />
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
                        Crafting Masterpieces: The Art of Luxury Perfume Packaging
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
                                When consumers purchase a high-end perfume, they are buying an emotional experience, an ambiance, and an aspiration. Luxury perfume packaging acts as the crucial physical prelude to this olfactory experience. A flimsy box immediately contradicts a premium price tag. Conversely, an exquisitely crafted box signals that holding the fragile glass bottle inside is a profound privilege.
                            </p>
                            <p>
                                At CustomPackMakers, we specialize in the meticulous structural engineering and artistic execution of high-end cosmetic boxes. By leveraging elite materials alongside traditional finishing artisanries—we manufacture perfume boxes that instantly amplify the exclusivity and commanding retail presence of your fragrance line.
                            </p>

                            <h3>Rigid Board: The Unshakable Core of Luxury</h3>
                            <p>
                                The foundation of all premium packaging is an unbending, robust material. We manufacture luxury perfume boxes primarily using incredibly thick grayboard or chipboard, wrapped flawlessly in premium specialty papers.
                            </p>
                            <ul>
                                <li><strong>Unmatched Weight and Density:</strong> Rigid board naturally imparts a heavy, substantial feel, a psychological signal universally associated with elite quality and expense.</li>
                                <li><strong>Magnetic Flap Closures:</strong> Embedding hidden neodymium magnets into the rigid structure creates an addictively crisp "snap" upon closing, offering a deeply satisfying and premium acoustic touchpoint.</li>
                                <li><strong>Drawer and Slipcase Structures:</strong> Offer a highly theatrical "reveal" as the beautifully nestled perfume bottle slides smoothly from a heavily structured outer sleeve.</li>
                            </ul>

                            <h3>Artisanal Exquisite Finishes</h3>
                            <p>
                                A luxury box must command visual intrigue through delicate, masterful detailing. We provide a suite of lavish embellishments handled by world-class precision equipment:
                            </p>
                            <ul>
                                <li><strong>Intricate Hot Foil Stamping:</strong> Adding gleaming gold, silver, rose-gold, or copper foil creates a dazzling visual contrast that signifies elite refinement and stands out strikingly under stark retail lighting.</li>
                                <li><strong>Deep Embossing and Debossing:</strong> We create striking, three-dimensional patterns, crests, and branding elements across the box’s surface, providing an irresistible tactile invitation to consumers.</li>
                                <li><strong>Lush Surface Laminations:</strong> By applying an ultra-premium soft-touch matte lamination, the box takes on the tactile sensation of smooth peach skin or fine suede, elevating the box profoundly.</li>
                            </ul>

                            <h3>Interior Architecture: Flawless Cradling</h3>
                            <p>
                                Upon opening a premium box, the presentation of the bottle determines success. We do not just protect the bottle; we place it entirely upon a pedestal.
                            </p>
                            <ul>
                                <li><strong>Die-Cut Velvet-Lined Foam:</strong> Foam cut perfectly to the precise millimeter of the bottle's unique shape, subsequently layered with opulent, rich colored velvet to present the glass flawlessly.</li>
                                <li><strong>Silk and Satin Wraps:</strong> Elevate the internal aesthetic by gathering and wrapping delicate fabric beautifully around the bottle inserts, delivering unadulterated classic cosmetic luxury.</li>
                            </ul>

                            <h3>Wholesale Excellence for Prestige Brands</h3>
                            <p>
                                Partnering with an expert manufacturer is vital when dealing with intricate luxury specifications. With CustomPackMakers, you achieve remarkable consistency across vast production runs perfectly matched to your strict brand guidelines. Achieve the high-end unboxing presentation your stunning fragrances clearly deserve without sacrificing highly competitive scalability and timely international logistics execution.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* RELATED PRODUCTS CAROUSEL */}
            <RelatedProductFragrance />

            {/* WHY CHOOSE US SECTION */}
            <section className="py-12 relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #fafafa 0%, #f4f6ff 60%, #f0fdf8 100%)' }}>
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
                            We bring uncompromising dedication to the artistry, structure, and flawless execution of luxury packaging entirely scaled for your business.
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
                                        Absolute Structural Integrity
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        We construct every luxury box utilizing ultra-dense rigid board core materials. This ensures your high-end fragrance packaging not only protects incredibly expensive glass bottles flawlessly but also delivers a reassuringly heavy, premium tactile feel.
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
                                        Masterful Surface Finishes
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Your brand's visual prestige relies upon perfection. We provide impeccably precise metallic hot-foil stamping, deep tactile embossing, and sumptuously smooth soft-touch laminations applied uniformly to create absolutely magnetic visual appeal across upscale retail spaces.
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
                                        Bespoke Lavish Interiors
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        True luxury extends deeply inside the structure. We craft highly customized internal cavities utilizing rich velvet-lined eva-foam and sleek satin wraps, deliberately holding your artisan bottle effortlessly while radiating profoundly sophisticated, elite charm endlessly.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT: Square image with floating badges */}
                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img
                                    src={luxuryPerfumePackagingimg6}
                                    alt="Luxury Perfume Packaging Excellence"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-7">
                                    <p className="text-white font-bold text-lg leading-snug mb-1">
                                        Trusted by Luxury Brands
                                    </p>
                                    <p className="text-white/75 text-sm">Crafting high-end cosmetic excellence globally</p>
                                </div>
                            </div>

                            <div className="absolute top-4 -right-2 lg:-right-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80 backdrop-blur-sm">
                                <p className="text-2xl font-bold text-primary leading-none">99%</p>
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
                                <img src={luxuryPerfumePackagingimg7} alt="Differentiate Your Luxury Perfume Brand" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                            </div>
                            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-60" />
                            <div className="absolute -z-10 -top-8 -right-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl opacity-60" />
                        </div>
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                                Differentiate Your <span className="text-primary">Luxury</span> Brand
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                At CustomPackMakers, we meticulously engineer the highest caliber custom luxury perfume packaging exclusively crafted for premium artisanal fragrance collections. We proudly deploy maximum thickness rigid chipboard precisely wrapped perfectly utilizing sophisticated soft-touch textured laminations and vividly bright SBS stocks securely. By effortlessly capturing remarkably intricate metallic hot-stamped logos deeply matching striking debossed aesthetic patterns comprehensively, we rapidly significantly uplift inherently competitive top-tier cosmetics significantly presenting intensely exquisite structural aromatic masterpieces beautifully flawlessly everywhere.
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
                                        question: "What makes a perfume box 'luxury'?",
                                        answer: "Luxury entails profoundly rigid chipboard core materials, an exceptionally heavy-weight feel, advanced printing elements such as crisp foiled logos or deep embossed crests, and precisely engineered magnetic closures all seamlessly working together to present unquestionable, premium brand value."
                                    },
                                    {
                                        id: "item-2",
                                        question: "What materials do you use for high-end perfume inserts?",
                                        answer: "For maximum prestige, we entirely recommend precision die-cut EVA or PU foam masterfully layered with premium colored velvet or luxurious silken fabric. This offers absolute impact protection while simultaneously delivering a profoundly elevated visual and tactile unboxing presentation."
                                    },
                                    {
                                        id: "item-3",
                                        question: "Can I add metallic gold branding to my rigid perfume boxes?",
                                        answer: "Yes, we specialize in high-definition metallic hot foil stamping. We provide an extensive array of gleaming foil shades—including classic gold, refined silver, modern rose-gold, and iridescent holographic—allowing you to strike the perfect affluent tone effortlessly."
                                    },
                                    {
                                        id: "item-4",
                                        question: "Do you manufacture magnetic closure rigid boxes?",
                                        answer: "Absolutely. We flawlessly construct dense rigid boxes perfectly integrated with concealed neodymium magnets beneath the internal paper wraps. This generates a remarkably satisfying and high-end snapping closure experience practically synonymous with modern exclusive luxury cosmetics."
                                    },
                                    {
                                        id: "item-5",
                                        question: "Can these premium boxes support intricate bottle shapes?",
                                        answer: "Yes, our highly experienced CAD specialists design custom box dimensions and tailored internal cavities exactly matched to your highly intricate or unusual glass bottle silhouettes, guaranteeing zero movement inside the package, thereby optimizing safety profoundly."
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
                                alt="Luxury Packaging FAQ"
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

export default LuxuryPerfumePackaging;
