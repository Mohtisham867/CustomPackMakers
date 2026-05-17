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
import { SEOContent } from "@/components/SEOContent";
import { TechnicalSpecsSection } from "@/components/TechnicalSpecsSection";
import { RelatedProductPharma } from "@/components/RelatedProductPharma";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";

// Images
import dietarySupplementPackaginghero from "@/assets/industry/pharma-packaging/dietary_supplement_packaging/img-hero.webp";
import dietarySupplementPackagingimg1 from "@/assets/industry/pharma-packaging/dietary_supplement_packaging/img-1.webp";
import dietarySupplementPackagingimg2 from "@/assets/industry/pharma-packaging/dietary_supplement_packaging/img-2.webp";
import dietarySupplementPackagingimg3 from "@/assets/industry/pharma-packaging/dietary_supplement_packaging/img-3.webp";
import dietarySupplementPackagingimg4 from "@/assets/industry/pharma-packaging/dietary_supplement_packaging/img-4.webp";
import dietarySupplementPackagingimg5 from "@/assets/industry/pharma-packaging/dietary_supplement_packaging/img-5.webp";
import dietarySupplementPackagingimg6 from "@/assets/industry/pharma-packaging/dietary_supplement_packaging/img-whychoose.webp";
import dietarySupplementPackagingimg7 from "@/assets/industry/pharma-packaging/dietary_supplement_packaging/img-different.webp";
import FAQimage from "@/assets/FAQ-image.webp";

const DietarySupplementPackaging = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    const productImages = [
        { src: dietarySupplementPackagingimg1, alt: "Dietary Supplement Packaging - Main View" },
        { src: dietarySupplementPackagingimg2, alt: "Dietary Supplement Packaging - Side Angle" },
        { src: dietarySupplementPackagingimg3, alt: "Dietary Supplement Packaging - Open Box View" },
        { src: dietarySupplementPackagingimg4, alt: "Dietary Supplement Packaging - Detail Shot" },
        { src: dietarySupplementPackagingimg5, alt: "Dietary Supplement Packaging - Lifestyle Shot" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Dietary Supplement Packaging | Custom Supplement Boxes | CustomPackMakers</title>
                <meta name="description" content="Order wholesale dietary supplement packaging. Custom printed boxes for vitamins, nutraceuticals, and health supplements with free shipping & FDA compliance features." />
                <meta name="keywords" content="dietary supplement packaging, custom supplement boxes, nutraceutical packaging, vitamin boxes, wholesale health packaging" />
                <meta property="og:title" content="Dietary Supplement Packaging | Custom Supplement Boxes | CustomPackMakers" />
                <meta property="og:description" content="Compliance-focused dietary supplement packaging. Moisture-proof seals, vibrant nutritional graphics, and eco-friendly options. Get a free quote today." />
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
                                    <Link to="/industries/pharma-packaging">Pharma Packaging</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Dietary Supplement Packaging</BreadcrumbPage>
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
                                Dietary Supplement <span className="text-primary">Packaging</span>
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Compliance-focused dietary supplement packaging featuring moisture-proof seals and vibrant nutritional graphics. We engineer premium boxes protecting vitamins and nutraceuticals while maximizing shelf impact in competitive retail environments seamlessly.
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
                                    src={dietarySupplementPackaginghero}
                                    alt="Dietary Supplement Packaging Hero"
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
                        Nutraceutical Packaging Built for Consumer Trust and Product Freshness
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            Our <strong className="text-foreground">dietary supplement packaging</strong> is expertly crafted for health, wellness, and nutraceutical brands that require both vital product protection and stunning retail shelf presence. Constructed from premium, rigid chipboard and coated with moisture-blocking laminations, each custom box shields sensitive vitamins, powders, and gummies from degrading environmental humidity. Whether you are launching a new organic protein supplement or a clinical-grade natural nootropic, our <strong className="text-foreground">custom supplement boxes</strong> establish immediate consumer confidence through high-end, professional aesthetics.
                        </p>
                        <p>
                            From classic straight-tuck end cartons for pill bottles to elaborate magnetic closure boxes for premium wellness kits, our <strong className="text-foreground">nutraceutical packaging</strong> solutions accommodate any product size. Each design features ample surface area dedicated to high-resolution CMYK printing, ensuring FDA-required nutritional facts, ingredient panels, and barcode data remain perfectly legible. With custom die-cut inserts specifically measured to secure heavy glass or plastic supplement bottles during e-commerce shipping, your <strong className="text-foreground">vitamin boxes</strong> deliver a flawless unboxing experience every time.
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
                        The Importance of Protective Packaging for Dietary Supplements
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
                                In the highly competitive and strictly regulated health wellness market, dietary supplement packaging has to juggle multiple roles simultaneously.
                                It must actively preserve the biochemical integrity of vitamins, probiotics, and capsules against environmental degradation, while concurrently
                                catching the consumer's eye and perfectly conveying dense, legally required nutritional information. Premium packaging proves to discerning health-conscious
                                buyers that the product inside commands trust and delivers verified results.
                            </p>
                            <p>
                                At CustomPackMakers, we specialize in harmonizing these challenging requirements. We meticulously engineer our custom supplement boxes to feature robust
                                moisture barriers and high-density structural foundations capable of protecting heavy glass supplement bottles during rigorous transit. Simultaneously,
                                we utilize medical-grade offset printing processes that bring vibrant branding aesthetics to life without obscuring critical health warnings or dosage guides.
                            </p>

                            <h3>Advanced Material Integrity &amp; Atmosphere Blocking</h3>
                            <p>
                                Supplements are highly sensitive to their environment. We use specific materials to lock out degrading factors:
                            </p>
                            <ul>
                                <li><strong>Moisture-Resistant SBS Board:</strong> Solid Bleached Sulfate combined with specialized soft-touch or gloss laminations provides a strong barrier against ambient humidity, preventing compressed pills and capsules from dissolving or molding.</li>
                                <li><strong>Light-Blocking Inks &amp; Coatings:</strong> Overexposure to UV light degrades many organic supplements. We offer deeply pigmented, full-coverage opaque printing to prevent photon-induced chemical breakdown.</li>
                                <li><strong>Eco-Friendly Natural Kraft:</strong> Extremely popular with organic, vegan, and plant-based supplement brands desiring an earthy appearance that still maintains the necessary structural rigidity.</li>
                                <li><strong>Luxury Rigid Chipboard:</strong> Often used for premium cognitive nootropics, subscription wellness kits, and athletic performance supplements to elevate the unboxing experience.</li>
                            </ul>

                            <h3>Customization for Consumer Experience and Security</h3>
                            <p>
                                Supplement brands rely wholly on patient adherence. Packaging that is frustrating, or seems untrustworthy, immediately damages retention rates:
                            </p>
                            <ul>
                                <li><strong>Tamper-Evident Security Seals:</strong> Customizable destructive stickers and complex perforated opening mechanisms visually assure customers that the contents have never been adulterated.</li>
                                <li><strong>Pre-Measured Inserts:</strong> Cardboard or eco-friendly vacuum-formed trays designed to hold heavy supplement jars completely stationary inside the outer box, preventing rattling and breakage.</li>
                                <li><strong>Information Expansion:</strong> We offer intelligently designed accordion fold-outs or interior-printed branding to fit expansive clinical trial information, holistic manifestos, and required FDA disclaimers.</li>
                            </ul>

                            <h3>Advanced Printing for Vital Compliance</h3>
                            <p>
                                Nutritional transparency isn't just a marketing tactic; it's a strict legal necessity. Flawless printing isn't optional:
                            </p>
                            <ul>
                                <li><strong>Ultra-High-Resolution Text:</strong> Ensuring the "Supplement Facts" panel, small-print ingredient lists, and complex daily value percentages remain profoundly clear and legible.</li>
                                <li><strong>Metallic Branding Highlights:</strong> Utilizing foil stamping and spot UV accents specifically on your brand logo or key selling points (e.g., "Non-GMO" or "100% Organic") to shine on crowded pharmacy racks.</li>
                                <li><strong>Food-Grade Inks:</strong> Crucially utilizing soy and vegetable-based inks that do not emit chemical odors, ensuring the first smell upon opening is the natural scent of the supplement, rather than industrial printing solvents.</li>
                            </ul>

                            <h3>Wholesale Pricing for Growing Wellness Brands</h3>
                            <p>
                                Whether you are a boutique vitamin startup fulfilling your first major retail order, or an international sports nutrition brand seeking cost-efficient bulk production, our facilities adapt to your scale. We offer extremely competitive wholesale pricing, meticulous quality control, and rapid logistical turnaround to ensure your health supplements reach the market safely and spectacularly.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* RELATED PRODUCTS CAROUSEL */}
            <RelatedProductPharma />

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
                            We deliver medical packaging that ensures safety, protects integrity, and elevates your pharmaceutical brand.
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
                                        Every supplement box we produce utilizes premium rigid chipboard and specialized moisture-resistant laminations. Our strict quality control processes guarantee each unit meets the stringent barrier standards required for nutritional products, protecting your capsules securely from environmental humidity.
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
                                        Nutraceutical regulations demand exact nutritional panel clarity and FDA adherence. We engineer precision-sized packaging that complies strictly with labeling guidelines. Your brand's critical dietary health packaging requirements are executed flawlessly, ensuring comprehensive consumer transparency and regulatory compliance.
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
                                        Eco-Friendly Safety
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Health-conscious consumers increasingly expect organic sustainability alongside product safety. Our fully recyclable, eco-friendly dietary supplement packaging delivers exceptional protective performance while significantly reducing your brand's footprint, perfectly meeting the natural values of modern wellness shoppers globally.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT: Square image with floating badges */}
                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img
                                    src={dietarySupplementPackagingimg6}
                                    alt="Premium Dietary Supplement Packaging"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-7">
                                    <p className="text-white font-bold text-lg leading-snug mb-1">
                                        Trusted by Wellness Brands
                                    </p>
                                    <p className="text-white/75 text-sm">Delivering premium nutraceutical aesthetic solutions</p>
                                </div>
                            </div>

                            <div className="absolute top-4 -right-2 lg:-right-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80 backdrop-blur-sm">
                                <p className="text-2xl font-bold text-primary leading-none">Protective</p>
                                <p className="text-xs text-slate-400 mt-1 font-medium">Moisture Barriers</p>
                            </div>

                            <div className="absolute bottom-4 -left-2 lg:-left-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80 backdrop-blur-sm">
                                <p className="text-2xl font-bold text-emerald-500 leading-none">100%</p>
                                <p className="text-xs text-slate-400 mt-1 font-medium">Compliance Friendly</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* DIFFERENTIATE YOUR BRAND SECTION */}
            <section className="py-10 lg:py-12 bg-white overflow-hidden relative">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="relative group">
                            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] border border-primary/20 shadow-2xl transform transition-transform duration-700 hover:scale-[1.02]">
                                <img
                                    src={dietarySupplementPackagingimg7}
                                    alt="Differentiate Your Nutritional Supplements"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                            </div>
                            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-60" />
                            <div className="absolute -z-10 -top-8 -right-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl opacity-60" />
                        </div>

                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                                Differentiate Your <span className="text-primary">Supplements</span> From Others
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                At CustomPackMakers, we understand that nutraceutical packaging serves as the primary visual ambassador for your wellness product's efficacy. To ensure your brand commands attention in saturated natural health markets, we utilize ultra-vibrant offset printing paired with high-end tactile finishes. Our design team helps structure the perfect box dimensions, ensuring your heavy supplement bottles fit securely without excessive shipping weight. By blending stunning anti-counterfeit foiling, clinical typography, and natural eco-friendly textures, we help you create highly persuasive packaging that reinforces holistic health and drives lasting consumer loyalty.
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
                                        question: "Do your supplement boxes protect against moisture and humidity?",
                                        answer: "Yes, we utilize specialized barrier materials and moisture-resistant soft-touch laminations to prevent humidity from penetrating the packaging, ensuring your encapsulated vitamins and dietary supplements remain potent and structurally safe over time."
                                    },
                                    {
                                        id: "item-2",
                                        question: "Are these boxes FDA compliant for nutritional labeling?",
                                        answer: "Absolutely. We print using high-resolution offset technology to guarantee your FDA-required nutritional facts panels, ingredient lists, and expiration dates are perfectly legible, ensuring your brand meets all strict regulatory compliance standards."
                                    },
                                    {
                                        id: "item-3",
                                        question: "How durable are the boxes for e-commerce supplement shipping?",
                                        answer: "Our dietary supplement packaging is constructed from crush-resistant SBS cardstock and rigid boards, thoroughly tested for compression strength. This ensures your glass or plastic supplement bottles are safeguarded against breakage during direct-to-consumer shipping."
                                    },
                                    {
                                        id: "item-4",
                                        question: "Do you use safe, food-grade printing inks?",
                                        answer: "Yes, patient safety and product purity are our priorities. We strictly utilize low-migration, soy-based and vegetable-based inks that eliminate harmful VOCs, ensuring your health and wellness packaging remains completely uncontaminated."
                                    },
                                    {
                                        id: "item-5",
                                        question: "Can you incorporate tamper-evident seals for retail security?",
                                        answer: "Yes, we offer sophisticated tamper-evident features, including custom destructive labeling and perforated structural closures. These elements provide immediate visual evidence of tampering, establishing essential consumer trust on crowded pharmacy and retail shelves."
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
                                alt="Dietary Supplement Packaging FAQ"
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

export default DietarySupplementPackaging;
