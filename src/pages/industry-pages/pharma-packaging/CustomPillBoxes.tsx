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
import pillBoxesHero from "@/assets/industry/pharma-packaging/pill-boxes/img-hero.webp";
import pillBoxesimg1 from "@/assets/industry/pharma-packaging/pill-boxes/img-1.webp";
import pillBoxesimg2 from "@/assets/industry/pharma-packaging/pill-boxes/img-2.webp";
import pillBoxesimg3 from "@/assets/industry/pharma-packaging/pill-boxes/img-3.webp";
import pillBoxesimg4 from "@/assets/industry/pharma-packaging/pill-boxes/img-4.webp";
import pillBoxesimg5 from "@/assets/industry/pharma-packaging/pill-boxes/img-5.webp";
import pillBoxesimg6 from "@/assets/industry/pharma-packaging/pill-boxes/img-whychoose.webp";
import pillBoxesimg7 from "@/assets/industry/pharma-packaging/pill-boxes/img-different.webp";
import FAQimage from "@/assets/FAQ-image.webp";

const CustomPillBoxes = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    // Using the same image for the gallery since we only have one product image
    const productImages = [
        { src: pillBoxesimg1, alt: "Custom Pill Boxes - Main View" },
        { src: pillBoxesimg2, alt: "Custom Pill Boxes - Side Angle" },
        { src: pillBoxesimg3, alt: "Custom Pill Boxes - Open Box View" },
        { src: pillBoxesimg4, alt: "Custom Pill Boxes - Detail Shot" },
        { src: pillBoxesimg5, alt: "Custom Pill Boxes - Lifestyle Shot" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Pill Boxes | Pharmaceutical Packaging | CustomPackMakers</title>
                <meta name="description" content="Order custom pill boxes & medicine packaging wholesale. Premium branded pharmaceutical boxes with fast turnaround, free shipping & compliance features." />
                <meta name="keywords" content="custom pill boxes, pharmaceutical packaging, child-resistant boxes, medical packaging, wholesale medicine boxes" />
                <meta property="og:title" content="Custom Pill Boxes | Pharmaceutical Packaging | CustomPackMakers" />
                <meta property="og:description" content="Premium custom pill packaging for medical brands. Child-resistant features, FDA compliance, full-color printing & eco-friendly options. Get a free quote." />
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
                                <BreadcrumbPage>Custom Pill Boxes</BreadcrumbPage>
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
                                <span className="text-primary">Custom</span> Pill Boxes
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Compliant and secure custom pill boxes featuring child-resistant locks and medical-grade materials. Our durable, high-impact packaging solutions are designed to protect pharmaceutical products while elevating your brand's retail presence seamlessly.
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
                                    src={pillBoxesHero}
                                    alt="Custom Pill Boxes Hero"
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
                        Custom Pill Packaging Built for Healthcare Brands That Prioritize Safety
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            Our <strong className="text-foreground">custom pill boxes</strong> are precision-engineered for pharmaceutical companies that refuse to compromise on safety and compliance. Constructed from premium medical-grade SBS cardstock and specialized barrier materials, each box delivers the sterile protection your medications demand while projecting the reliable identity your patients trust. Whether you're releasing a new prescription medication or over-the-counter remedy, our <strong className="text-foreground">pharmaceutical packaging</strong> ensures structural integrity and high-visibility branding.
                        </p>
                        <p>
                            From blister pack cartons and rigid supplement boxes to child-resistant medication sleeves, our <strong className="text-foreground">custom medical packaging</strong> solutions accommodate all pill formats and dosages. Each box features options for moisture-proof seals, precision-cut structural forms, and tamper-evident closures, ensuring your product arrives in a pristine, uncontaminated state. With clear, high-resolution CMYK printing for critical dosage instructions, your <strong className="text-foreground">pill packaging</strong> becomes a reliable asset for patient care. Order wholesale with strict quality control.
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
                    {/* Heading outside the scrollable box */}
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">
                        The Importance of Safe Packaging for Pharmaceuticals
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
                                In the highly regulated world of healthcare and pharmaceuticals, packaging serves a purpose far more critical than simple marketing.
                                For medical brands, custom pill boxes act as the primary barrier against contamination, a crucial tool for patient compliance, and a vital
                                component in meeting stringing FDA regulations. Premium medical packaging communicates safety, efficacy, and trustworthiness.
                            </p>
                            <p>
                                Our custom pill boxes are engineered with this immense responsibility in mind. Every structural feature, from child-resistant mechanisms
                                to the clarity of the printed dosage instructions, is meticulously designed to create a secure and informative experience for patients.
                                Whether you are packaging life-saving medications or daily vitamins, investing in high-grade pharmaceutical packaging demonstrates your
                                unwavering commitment to patient safety and quality care.
                            </p>

                            <h3>Unmatched Material Quality &amp; Protective Durability</h3>
                            <p>
                                The foundation of exceptional pharmaceutical packaging lies in contamination-free, highly durable materials. We offer a specialized selection:
                            </p>
                            <ul>
                                <li><strong>Solid Bleached Sulfate (SBS):</strong> Our primary choice for pill packaging. SBS offers unparalleled purity and structural integrity, paired with a bright white surface perfect for printing critical, high-constrast medical information.</li>
                                <li><strong>Moisture-Resistant Board:</strong> For sensitive medications, we utilize specially coated boards that prevent humidity from penetrating the box and compromising the pill stability.</li>
                                <li><strong>Eco-Friendly Kraft:</strong> Used for holistic and natural remedies, offering a sustainable narrative while maintaining the necessary rigid structure to protect blister packs.</li>
                                <li><strong>E-Flute Corrugated:</strong> When shipping bulk pill bottles directly to pharmacies and hospitals, E-flute provides maximum crush resistance across the medical supply chain.</li>
                            </ul>

                            <h3>Customization for Safety and Compliance</h3>
                            <p>
                                Pharmaceutical packaging requires structural features that go beyond aesthetics, focusing heavily on user safety and regulatory compliance:
                            </p>
                            <ul>
                                <li><strong>Child-Resistant Mechanisms:</strong> Intelligently engineered locking tabs and structural puzzles that restrict access for young children while remaining accessible for senior patients.</li>
                                <li><strong>Tamper-Evident Seals:</strong> Customized perforations and destructive closures that provide immediate visual evidence if the medication has been compromised, ensuring complete patient trust.</li>
                                <li><strong>Custom Inserts:</strong> Securely holding pill bottles or blister packs exactly in place to prevent rattling, breakage, or damage to protective seals during transit.</li>
                                <li><strong>Braille &amp; Tactile Printing:</strong> Offering raised braille printing options directly on the box to assist visually impaired patients in identifying their medications safely.</li>
                            </ul>

                            <h3>Advanced Printing for Clarity and Branding</h3>
                            <p>
                                With medications, a misread label can be dangerous. Our advanced printing technology ensures flawless clarity while providing retail appeal:
                            </p>
                            <ul>
                                <li><strong>High-Resolution CMYK:</strong> Achieving microscopically sharp text for dosage instructions, ingredient lists, and warning labels to ensure absolute legibility.</li>
                                <li><strong>Low-Migration Inks:</strong> Utilizing medical-grade, soy-based inks that eliminate volatile organic compounds (VOCs) and prevent any chemical migration into the packaging.</li>
                                <li><strong>Spot UV Coating:</strong> Highlighting critical warning labels or your pharmaceutical brand logo with a protective, glossy finish.</li>
                                <li><strong>Metallic Foil Stamping:</strong> Adding a touch of clinical premium quality with holographic or silver foiling, often used for over-the-counter premium neutraceuticals.</li>
                            </ul>

                            <h3>Wholesale Pricing &amp; Certified Production</h3>
                            <p>
                                We operate strictly up to industry standards. Whether you are launching a specialized new drug with a smaller initial run, or
                                supplying major pharmacy chains demanding millions of units, our pristine production facilities can securely scale to your needs.
                                We provide competitive pricing and rapid turnarounds to keep your medical supply chain flowing uninterrupted. Let us engineer customized
                                pill boxes that protect your formulations and safeguard your patients.
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
                                        Every custom pill box we produce utilizes premium medical-grade SBS cardstock and moisture-resistant coatings. Our rigorous quality control processes guarantee each unit meets the stringent durability standards required for pharmaceutical packaging, protecting your medication securely during transit and storage.
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
                                        Pharmaceutical packaging demands exact specifications and regulatory adherence. We engineer child-resistant locks and precision-cut structural forms that comply with FDA guidelines. Your brand's critical medical packaging requirements are executed flawlessly at scale, ensuring complete safety and regulatory peace of mind.
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
                                        Modern healthcare consumers increasingly expect sustainability without sacrificing safety. Our fully recyclable, eco-friendly custom pill boxes deliver exceptional structural performance while significantly reducing your brand's environmental footprint, meeting the ESG expectations of pharmacies, hospitals, and conscious patients.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT: Square image with floating badges */}
                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img
                                    src={pillBoxesimg6}
                                    alt="Premium Custom Pill Box Packaging"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-7">
                                    <p className="text-white font-bold text-lg leading-snug mb-1">
                                        Trusted by Healthcare Brands
                                    </p>
                                    <p className="text-white/75 text-sm">Delivering premium medical packaging nationwide</p>
                                </div>
                            </div>

                            <div className="absolute top-4 -right-2 lg:-right-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80 backdrop-blur-sm">
                                <p className="text-2xl font-bold text-primary leading-none">FDA</p>
                                <p className="text-xs text-slate-400 mt-1 font-medium">Compliance Standards</p>
                            </div>

                            <div className="absolute bottom-4 -left-2 lg:-left-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80 backdrop-blur-sm">
                                <p className="text-2xl font-bold text-emerald-500 leading-none">100%</p>
                                <p className="text-xs text-slate-400 mt-1 font-medium">Child-Resistant Options</p>
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
                                    src={pillBoxesimg7}
                                    alt="Differentiate Your Pharmaceuticals"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                            </div>
                            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-60" />
                            <div className="absolute -z-10 -top-8 -right-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl opacity-60" />
                        </div>

                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                                Differentiate Your <span className="text-primary">Pharmaceuticals</span> From Others
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                At CustomPackMakers, we understand that medical packaging serves as both a protective barrier and a critical touchpoint for patient trust. To ensure your brand stands out on crowded pharmacy shelves, we utilize state-of-the-art manufacturing combined with exceptional printing precision. Our experts will help you engineer the perfect structural dimensions, optimizing for child-resistance and product safety. By integrating distinctive safety features, anti-counterfeit foiling, and compliant informational layouts, we help you create a highly professional package that reinforces medical reliability and drives sustained brand loyalty.
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
                                        question: "Are your custom pill boxes FDA compliant and child-resistant?",
                                        answer: "Yes, our custom pill boxes are engineered to meet strict FDA guidelines. We incorporate advanced child-resistant locking mechanisms and utilize medical-grade materials to ensure your pharmaceutical products are securely packaged, providing maximum safety and regulatory compliance."
                                    },
                                    {
                                        id: "item-2",
                                        question: "What materials ensure moisture protection for medications?",
                                        answer: "We utilize premium SBS cardstock equipped with specialized moisture-resistant laminations and barrier coatings. These protective layers prevent humidity from degrading the enclosed medication, ensuring pills remain potent and structurally intact throughout their intended shelf life."
                                    },
                                    {
                                        id: "item-3",
                                        question: "Can these boxes withstand rigorous healthcare supply chain transit?",
                                        answer: "Absolutely. Our packaging is constructed from high-density, crush-resistant materials. We rigorously test each batch for compression strength and edge crush resistance to guarantee that your custom pill boxes endure demanding medical supply chain handling without sustaining damage."
                                    },
                                    {
                                        id: "item-4",
                                        question: "Do you provide tamper-evident sealing options?",
                                        answer: "Yes, product integrity is paramount in pharmaceuticals. We offer multiple tamper-evident features, including custom destructive labels, shrink banding, and perforated tear strips, ensuring patients can immediately identify if a medication package has been previously opened or compromised."
                                    },
                                    {
                                        id: "item-5",
                                        question: "How do you maintain sterile environments during production?",
                                        answer: "Our manufacturing facilities adhere to strict hygiene protocols suited for secondary pharmaceutical packaging. We maintain clean production environments and utilize low-migration, soy-based inks that eliminate harmful VOCs, ensuring your custom pill boxes are safe for medical environments."
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
                                alt="Custom Pill Boxes FAQ"
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

export default CustomPillBoxes;
