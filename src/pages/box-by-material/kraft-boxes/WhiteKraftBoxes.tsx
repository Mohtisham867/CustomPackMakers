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
import { SEOContent } from "@/components/SEOContent";
import { TechnicalSpecsSection } from "@/components/TechnicalSpecsSection";
import { RelatedProductKraftBoxes } from "@/components/RelatedProductKraftBoxes";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";

// Product images
import whiteKraftHero from "@/assets/kraft-boxes/white-kraft-boxes.webp";
import FAQimage from "@/assets/FAQ-image.webp";

const WhiteKraftBoxes = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    const productImages = [
        { src: whiteKraftHero, alt: "White Kraft Boxes - Clean Minimalist Retail" },
        { src: whiteKraftHero, alt: "White Kraft Boxes - Side Profile" },
        { src: whiteKraftHero, alt: "White Kraft Boxes - Open View" },
        { src: whiteKraftHero, alt: "White Kraft Boxes - Detail Shot" },
        { src: whiteKraftHero, alt: "White Kraft Boxes - Stacked View" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom White Kraft Boxes | Clean Premium Eco Packaging | CustomPackMakers</title>
                <meta name="description" content="Order custom white kraft boxes for a clean, minimalist retail look. Bleached eco-friendly paper boxes with high-quality printing. Wholesale rates, custom sizes & fast shipping." />
                <meta name="keywords" content="white kraft boxes, bleached kraft packaging, eco friendly white boxes, custom printed white kraft boxes, minimalist retail packaging, sustainable white boxes" />
                <meta property="og:title" content="Custom White Kraft Boxes | Clean Premium Eco Packaging | CustomPackMakers" />
                <meta property="og:description" content="Pristine white kraft packaging combining the strength of kraft fibers with a sophisticated minimalist look. Sustainable and fully customizable. Get a free quote." />
            </Helmet>
            <Header />

            {/* Breadcrumb Section */}
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
                                    <Link to="/box-by-materials">Box by Materials</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link to="/box-by-material/kraft-boxes">Kraft Boxes</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>White Kraft Boxes</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </div>

            {/* HERO SECTION */}
            <section className="py-8 bg-background">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        {/* LEFT CONTENT */}
                        <div className="lg:col-span-7 space-y-6">
                            <div className="w-20 h-1.5 bg-primary rounded-full"></div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight">
                                <span className="text-primary">White</span> Kraft Boxes
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Pristine aesthetics meet industrial strength. Our custom white kraft boxes offer the ultimate clean, minimalist look without compromising on the high-performance protection of kraft fibers.
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

                        {/* RIGHT HERO IMAGE */}
                        <div className="lg:col-span-5 relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-muted group">
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200">
                                <img
                                    src={whiteKraftHero}
                                    alt="White Kraft Boxes Hero"
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
                        Clean Aesthetics and High-End Eco-Protection
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            Our <strong className="text-foreground">custom white kraft boxes</strong> are designed for brands that require a "clinical," "luxury," or "modern minimalist" aesthetic. While traditional brown kraft paper conveys a rustic, organic feel, white kraft utilizes the same long-fiber chemical pulping process but includes an eco-safe bleaching stage to provide a bright-white, smooth surface. This creates a high-performance substrate that is as strong as its brown counterpart but acts as a <strong className="text-foreground">pristine canvas for high-resolution graphics</strong> and vibrant brand colors.
                        </p>
                        <p>
                            In the worlds of luxury cosmetics, premium tech, and designer apparel accessories, the "unboxing" of your product is a critical brand touchpoint. Our <strong className="text-foreground">white bleached kraft packaging</strong> offers the perfect resolution for brands that refuse to choose between environmental responsibility and a clean retail look. Fully recyclable and biodegradable, these boxes can be tailored to any dimension with wholesale pricing and our industry-leading 8–10 day turnaround to keep your modern supply chain moving at scale.
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
                                        Custom White Kraft Quote
                                    </h3>
                                    <form className="space-y-4">
                                        <div className="grid grid-cols-3 gap-3">
                                            <div className="space-y-1.5">
                                                <Label htmlFor="length" className="text-xs font-semibold text-muted-foreground">L (in)</Label>
                                                <Input id="length" type="number" placeholder="8" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label>
                                                <Input id="width" type="number" placeholder="6" className="h-9 bg-white" />
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
                                            Submit Request
                                        </Button>
                                    </form>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            <TechnicalSpecsSection />

            {/* SEO CONTENT SECTION */}
            <section className="py-8 bg-slate-50 border-t border-slate-100">
                <div className="container mx-auto px-[5vw]">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">
                        Pristine Aesthetics Meets Industrial Strength: The Impact of White Kraft Boxes
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
                            [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-5 [&>ul>li]:text-[15px] [&>ul>li]:text-slate-600">
                            
                            <p>
                                In the evolving landscape of global retail, the physical package is often the most significant bridge between a brand's digital promise and its physical reality. For brands that value pristine, minimalist visuals, <strong>Custom White Kraft Boxes</strong> represent a unique technical solution. By combining the legendary long-fiber strength of the kraft process with an Elemental Chlorine Free (ECF) bleaching stage, we create a substrate that is both environmentally responsible and visually stunning—a perfect vault for premium products.
                            </p>
                            <p>
                                At CustomPackMakers, we specialize in the engineering of high-end clean packaging. We understand that white kraft is more than just "brown paper with color"; it is a sophisticated retail asset that provides a smooth, non-glare surface for complex branding. In an era where "Apple-style" minimalism is the aspirational standard for tech, cosmetics, and luxury apparel, white kraft offers the structural integrity of industrial cardboard with the aesthetic purity of fine art board.
                            </p>

                            <h3>The Science of Bleached Kraft: Maintaining Long-Fiber Integrity</h3>
                            <p>
                                A common misconception in the packaging industry is that the whitening process inherently weakens the paper fibers. While this can be true for standard paper, "Kraft" (the German word for strength) is a specific chemical pulping process designed to preserve the length and interlocking capability of wood fibers.
                            </p>
                            <ul>
                                <li><strong>Interlocking Strength:</strong> Even after the eco-safe bleaching stage, our white kraft maintains superior tear and puncture resistance compared to traditional white boxboard or SBS (Solid Bleached Sulfate).</li>
                                <li><strong>Fold-Line Resilience:</strong> White kraft is engineered to be flexible, ensuring that the white surface won't "crack" or show brown fibers at the score lines, maintaining a seamless look even after multiple openings.</li>
                                <li><strong>Stacking Endurance:</strong> Ideal for retail shelves and high-capacity storage, the rigid fibers of white kraft resist buckling under pressure.</li>
                            </ul>

                            <h3>Minimalist Branding: Why White Space Drives Premium Perception</h3>
                            <p>
                                Psychologically, "white space" in packaging signals high quality, honesty, and transparency. For modern consumers, a clean white box suggests that the brand has nothing to hide and that the product inside is premium and curated. 
                            </p>
                            <p>
                                White kraft provides the perfect neutral backdrop for minimalist typography and subtle branding. Unlike brown kraft, which can sometimes interfere with color perception, the bright white surface ensures that your brand colors are represented with 100% fidelity. This is critical for marcas with strict Pantone guidelines and those that utilize fine-line vector art that requires high contrast to be appreciated.
                            </p>

                            <h3>Retail Versatility: From Luxury Cosmetics to Modern Tech</h3>
                            <p>
                                The applications for white kraft boxes are diverse and high-impact. 
                            </p>
                            <ul>
                                <li><strong>Cosmetic and Skincare sets:</strong> The clean look mirrors the therapeutic and hygienic promises of the products inside.</li>
                                <li><strong>High-End Electronics:</strong> Provides a protective, high-tech unboxing experience that feels engineered and sophisticated.</li>
                                <li><strong>Designer Apparel:</strong> Perfect for luxury accessories, ties, and silk scarves where the tactile sensation of the paper must match the quality of the fabric.</li>
                            </ul>

                            <h3>Technical Printing: Achieving Pantone Accuracy on White Substrates</h3>
                            <p>
                                Because white kraft provides a neutral, bright starting point, it is the superior choice for high-fidelity printing. We utilize advanced offset and digital printing facilities that produce rich, vibrant results.
                            </p>
                            <ul>
                                <li><strong>High-Contrast CMYK:</strong> Achieve photographic-quality results that "pop" against the white background.</li>
                                <li><strong>Spot UV and Embossing:</strong> The matte texture of white kraft provides a stunning contrast for glossy Spot UV or tactile embossing, creating a three-dimensional brand experience.</li>
                                <li><strong>Foil Stamping:</strong> Gold, silver, and rose-gold foils reflect more vibrantly against white than they do on brown, adding a layer of premium luxury to holiday or limited-edition releases.</li>
                            </ul>

                            <h3>Environmental Ethics: ECF Bleaching and Recyclability</h3>
                            <p>
                                At CustomPackMakers, our commitment to the planet is non-negotiable. We source our white kraft from FSC-certified suppliers who utilize Elemental Chlorine Free (ECF) bleaching. This process significantly reduces water usage and the chemical footprint compared to traditional methods. 
                            </p>
                            <p>
                                Our white kraft boxes remain 100% recyclable and biodegradable, allowing your brand to stick to its sustainability goals without sacrificing the upscale, minimalist retail look. This transparency builds significant trust with modern consumers who actively seek out brands that align with their ethical values.
                            </p>

                            <h3>Wholesale Success for Modern Global Brands</h3>
                            <p>
                                Whether you are a boutique startup or a global retail giant, our manufacturing process is designed for scale and consistency. We offer competitive wholesale pricing models that ensure your premium, sustainable transition doesn't inflate your fulfillment costs. Our boxes ship flat to maximize your storage space and are designed for rapid, tool-free assembly during high-volume periods.
                            </p>
                            <p>
                                Partner with CustomPackMakers and deliver a first impression that is both pristine and powerful. Let us help you turn every unboxing into a world-class brand narrative.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <RelatedProductKraftBoxes />

            {/* WHY CHOOSE US SECTION */}
            <section className="py-12 relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #fafafa 0%, #f4f6ff 60%, #f0fdf8 100%)' }}>
                <div className="absolute top-0 left-0 w-80 h-80 bg-primary/4 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-300/8 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl pointer-events-none" />

                <div className="container mx-auto px-[30px] relative z-10">
                    <div className="text-center mb-14">
                        <span className="inline-block text-xs font-semibold tracking-widest text-primary uppercase mb-3 bg-primary/10 px-4 py-1.5 rounded-full">Pristine standard</span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
                            Why Luxury <span className="text-primary">Brands</span> Choose White Kraft
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            We combine the high-performance durability of kraft fibers with the sophisticated aesthetic of modern minimalism.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">
                        {/* LEFT: typography */}
                        <div className="space-y-5">
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-.856.12-1.683.342-2.466" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Industrial Strength</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Despite its clean look, White Kraft uses long wood fibers designed for maximum tear resistance and superior stacking strength.
                                    </p>
                                </div>
                            </div>
                            <div className="w-full h-px bg-slate-100" />
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors duration-300">
                                        <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Superior Color Accuracy</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        The neutral, bright white background ensures that your brand's Pantone colors and complex graphics are represented with 100% fidelity.
                                    </p>
                                </div>
                            </div>
                            <div className="w-full h-px bg-slate-100" />
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors duration-300">
                                        <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Sustainable Modernity</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Achieve a minimalist high-tech look with 100% recyclable, ECF bleached fibers that communicate your brand's ethical standard.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT: Image with floating badges */}
                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img
                                    src={whiteKraftHero}
                                    alt="Luxury White Kraft Engineering"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-7">
                                    <p className="text-white font-bold text-lg leading-snug mb-1">
                                        Luxury Minimalist Integrity
                                    </p>
                                    <p className="text-white/75 text-sm">Empowering premium brands with clean, high-performance narratives</p>
                                </div>
                            </div>

                            {/* Floating badges */}
                            <div className="absolute top-4 -right-2 lg:-right-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80 backdrop-blur-sm">
                                <p className="text-2xl font-bold text-primary leading-none">SBS</p>
                                <p className="text-xs text-slate-400 mt-1 font-medium">Strength Class</p>
                            </div>
                            <div className="absolute bottom-4 -left-2 lg:-left-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80 backdrop-blur-sm">
                                <p className="text-2xl font-bold text-emerald-500 leading-none">ECF</p>
                                <p className="text-xs text-slate-400 mt-1 font-medium">Bleached Standard</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* DIFFERENTIATE SECTION */}
            <section className="py-10 lg:py-12 bg-white overflow-hidden relative">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* LEFT: Image */}
                        <div className="relative group">
                            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] border border-primary/20 shadow-2xl transform transition-transform duration-700 hover:scale-[1.02]">
                                <img
                                    src={whiteKraftHero}
                                    alt="Differentiate Your Minimalist Brand"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                            </div>
                        </div>

                        {/* RIGHT: Content */}
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                                Differentiate Your <span className="text-primary">Brand</span> with Pristine Style
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                At CustomPackMakers, we know that your white kraft box is more than a container—it's a statement of aesthetic purity. We utilize advanced manufacturing to ensure that each box is structurally robust and visually striking. By integrating high-definition printing with premium custom textures and sustainable fibers, we help you create a world-class retail experience that builds immediate trust, ensures product scannability, and drives brand loyalty across your entire modern product line.
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
                                    Technical insights into our premium white kraft solutions.
                                </p>
                            </div>

                            <Accordion type="single" collapsible defaultValue="item-1" className="w-full space-y-2">
                                {[
                                    {
                                        id: "item-1",
                                        question: "Is white kraft as strong as standard brown kraft?",
                                        answer: "Yes. Both materials utilize the same 'Kraft' chemical pulping process, which preserves long wood fibers for maximum tensile strength. The only difference is the eco-safe bleaching stage, meaning white kraft offers the same industrial-grade tear and puncture resistance."
                                    },
                                    {
                                        id: "item-2",
                                        question: "Will the white surface crack at the fold lines?",
                                        answer: "No. Our white kraft is engineered for high folding endurance. The long, interlocking fibers ensure that the white outer layer remains flexible and pristine at the score lines, whereas many standard bleached boards may show brown fibers once folded."
                                    },
                                    {
                                        id: "item-3",
                                        question: "What is the turnaround time for bulk white kraft orders?",
                                        answer: "Our standard turnaround time is 8-10 business days after digital design approval. We maintain high production capacity to ensure even large-scale retail launches are delivered on time without compromising on quality."
                                    },
                                    {
                                        id: "item-4",
                                        question: "Is your bleaching process environmentally friendly?",
                                        answer: "Absolutely! We utilize Elemental Chlorine Free (ECF) bleaching, which significantly reduces the environmental impact and water usage compared to traditional methods. Our boxes remain 100% recyclable and biodegradable."
                                    },
                                    {
                                        id: "item-5",
                                        question: "Can I get internal printing on white kraft boxes?",
                                        answer: "Yes! High-contrast internal printing is a fantastic way to create a premium, cohesive unboxing experience. We can print logos, social media handles, or assembly instructions on the inside of the box with perfect color fidelity."
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

                        {/* RIGHT COLUMN: FAQ Image */}
                        <div className="relative w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden ">
                            <img
                                src={FAQimage}
                                alt="White Kraft Boxes Technical Support"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Brand Rating & Bottom Quote Section */}
            <BrandRating />
            <div className="py-10">
                <QuoteForm />
            </div>

            <Footer />
        </div>
    );
};

export default WhiteKraftBoxes;
