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
import { RelatedProductEcommerce } from "@/components/RelatedProductEcommerce";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";

import heroImage from "@/assets/subscription-boxes/cbd-subscription-box.webp";
import FAQimage from "@/assets/FAQ-image.webp";

const CBDSubscriptionBoxes = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    const productImages = [
        { src: heroImage, alt: "CBD Subscription Boxes - Main View" },
        { src: heroImage, alt: "CBD Subscription Boxes - Interior View" },
        { src: heroImage, alt: "CBD Subscription Boxes - Open Box" },
        { src: heroImage, alt: "CBD Subscription Boxes - Detail Shot" },
        { src: heroImage, alt: "CBD Subscription Boxes - Lifestyle" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom CBD Subscription Boxes | Branded Monthly CBD Packaging | CustomPackMakers</title>
                <meta name="description" content="Order custom CBD subscription boxes wholesale. Premium branded monthly CBD packaging with compliant printing, child-resistant options, fast turnaround & free shipping." />
                <meta name="keywords" content="CBD subscription boxes, custom CBD subscription packaging, monthly CBD boxes, wholesale CBD subscription packaging, branded CBD boxes" />
                <meta property="og:title" content="Custom CBD Subscription Boxes | Branded Monthly CBD Packaging | CustomPackMakers" />
                <meta property="og:description" content="Premium custom CBD subscription packaging. Compliant printing, child-resistant options & premium finishes. Low minimums, fast turnaround. Get a free quote today." />
            </Helmet>
            <Header />

            {/* Breadcrumb */}
            <div className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 mt-[120px] md:mt-[140px]">
                <div className="container mx-auto px-[30px] py-3">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild><Link to="/">Home</Link></BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild><Link to="/shapes-styles">Shapes & Styles</Link></BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild><Link to="/shapes-styles/subscription-boxes">Subscription Boxes</Link></BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>CBD Subscription Boxes</BreadcrumbPage>
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
                                <span className="text-primary">Custom</span> CBD Subscription Boxes
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Wholesale custom CBD subscription packaging designed for compliant, premium monthly deliveries that build subscriber trust and drive retention in the competitive wellness market.
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
                                    alt="CBD Subscription Boxes Hero"
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
                        CBD Subscription Packaging Built for Compliance, Trust & Premium Presentation
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            Our <strong className="text-foreground">custom CBD subscription boxes</strong> are purpose-built for CBD brands, wellness curators, and hemp product subscription services operating in a regulated market where packaging must balance legal compliance with premium brand presentation. Manufactured from rigid chipboard, SBS cardstock, and eco-certified kraft materials, each box is engineered to safely contain tinctures, softgels, topicals, gummies, and vape products while projecting the clinical-yet-luxurious aesthetic that today's CBD consumer expects.
                        </p>
                        <p>
                            Our <strong className="text-foreground">monthly CBD subscription packaging</strong> includes options for child-resistant closure mechanisms, tamper-evident seals, and compliant labeling panels that satisfy federal and state-level packaging regulations without compromising unboxing quality. With full-color offset printing, foil stamping, and matte lamination, your subscription box conveys the same level of trust and sophistication that your CBD formulations deserve. Order wholesale with competitive pricing and an 8–10 business day turnaround.
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
                                        className={`relative w-full aspect-square overflow-hidden rounded-md border transition-all duration-200 ${selectedImage === index ? 'border-primary shadow-md ring-2 ring-primary/20' : 'border-slate-200 hover:border-slate-300 hover:shadow-sm'}`}
                                    >
                                        <img src={image.src} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="lg:col-span-5 lg:sticky lg:top-24">
                            <Card className="shadow-lg border-slate-200 bg-slate-50/50 backdrop-blur-sm overflow-hidden">
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold text-foreground mb-5">Get a Custom Quote</h3>
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
                                        <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 shadow-md hover:shadow-lg transition-all duration-300 mt-2">
                                            Submit Inquiry
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
                        The Role of Packaging in CBD Subscription Brand Success
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
                                The CBD subscription market has matured significantly over the past five years, shifting from early-adopter curiosity to mainstream wellness consumption across demographics. With that maturation has come dramatically elevated consumer expectations around product transparency, brand credibility, and packaging quality. In a market where trust is the primary currency, your CBD subscription box is simultaneously a regulatory compliance tool, a brand expression vehicle, and a physical touchpoint that either builds or erodes subscriber confidence.
                            </p>
                            <p>
                                At CustomPackMakers, we have spent years working with CBD brands, hemp wellness companies, and cannabinoid subscription curators to develop packaging solutions that satisfy the complex demands of this unique market. Our custom CBD subscription boxes are engineered from the ground up for both regulatory compliance and premium brand presentation, giving your subscribers a consistent, trustworthy experience that keeps them renewing month after month.
                            </p>

                            <h3>Compliance-Ready Panel Design</h3>
                            <p>
                                CBD packaging must accommodate a substantial amount of legally required information: ingredient lists, net weight declarations, QR codes linking to third-party lab results (COAs), warning statements, and state-specific labeling requirements. Our structural design team works in close collaboration with your regulatory and marketing teams to create dieline layouts that fulfill compliance obligations without cluttering your brand's visual identity:
                            </p>
                            <ul>
                                <li><strong>Dedicated Compliance Panels:</strong> We engineer discreet side panels or inner lid surfaces specifically for regulatory text, keeping your exterior packaging clean and brand-focused while satisfying all labeling requirements.</li>
                                <li><strong>QR Code Integration:</strong> High-contrast QR panel zones ensure scanner readability for COA links, batch numbers, and product authentication systems.</li>
                                <li><strong>Child-Resistant Closure Options:</strong> Our push-and-turn, press-to-open, and certified frustration-free child-resistant closure options meet CPSC standards without compromising the premium unboxing experience.</li>
                                <li><strong>Tamper-Evident Seals:</strong> Holographic or paper tamper seals provide visible product integrity verification, a critical trust signal for CBD consumers purchasing wellness products.</li>
                            </ul>

                            <h3>Premium Aesthetics That Build Brand Trust</h3>
                            <p>
                                In the CBD category, sophisticated packaging communicates product quality and formula efficacy before a single ingredient is ingested. Research shows that CBD consumers associate packaging quality directly with product purity and brand trustworthiness. Our print and finishing capabilities allow CBD subscription brands to project a clinical-luxury aesthetic:
                            </p>
                            <ul>
                                <li><strong>Matte Lamination with Spot UV:</strong> A combination of matte base lamination with spot UV highlights on logos and botanical motifs creates a striking contrast that resonates deeply with the wellness aesthetic.</li>
                                <li><strong>Soft-Touch Velvet Finish:</strong> Our velvet soft-touch coating transforms every tactile interaction into a premium brand moment, conveying the same therapeutic quality as your CBD products.</li>
                                <li><strong>Foil Stamping on Logos:</strong> Gold or silver foil logo stamping establishes visual authority and communicates the premium, pharmaceutical-grade quality that serious CBD consumers seek.</li>
                                <li><strong>Pantone Color Matching:</strong> Consistent, precise brand color reproduction across every subscription cycle reinforces brand recognition and subscriber confidence.</li>
                            </ul>

                            <h3>Product Protection for Sensitive CBD Formulations</h3>
                            <p>
                                CBD products — particularly tincture bottles, softgel capsules, and topical containers — require packaging that prevents light exposure, temperature fluctuation impact, and physical damage. Our CBD subscription packaging solutions include:
                            </p>
                            <ul>
                                <li>UV-blocking interior coatings that protect light-sensitive CBD oil formulations</li>
                                <li>Custom-cut foam inserts that secure glass dropper bottles against impact during shipping</li>
                                <li>Moisture-resistant outer coatings that prevent delamination in humid shipping environments</li>
                                <li>Precision-fit cardboard dividers that organize multi-product subscription assortments securely</li>
                            </ul>

                            <h3>Wholesale Pricing for CBD Subscription Operations</h3>
                            <p>
                                CBD subscription operations require reliable, cost-effective packaging at scale. Our wholesale pricing model for CBD subscription boxes is structured to grow with your subscriber base. Starting at 100 units with no structural tooling fees for standard sizes, we scale to tens of thousands of units per month with tiered volume discounts. Our dedicated CBD packaging consultants understand the regulatory complexity and operational demands of your market and are available to guide every packaging decision from initial concept to final delivery.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <RelatedProductEcommerce />

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
                            We combine compliance expertise, premium craftsmanship, and subscription-schedule reliability for CBD brands everywhere.
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
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Compliance-Ready Design</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Our team understands CBD packaging regulations at federal and state levels. Every <strong>CBD subscription box</strong> we produce is designed with compliant panel layouts, child-resistant options, and QR-compatible labeling zones built in from day one.
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
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Wellness-Grade Aesthetics</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Our premium finishes — soft-touch lamination, spot UV, and foil stamping — communicate the clinical-luxury quality that CBD subscribers expect. Your <strong>monthly CBD subscription packaging</strong> will look as premium as your formulations.
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
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">On-Time Subscription Delivery</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        CBD subscription schedules are rigid by necessity. Our 8–10 day production guarantee and proactive scheduling system ensure your <strong>CBD subscription boxes</strong> are at your fulfillment center before every monthly dispatch window.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img src={heroImage} alt="Premium CBD Subscription Box Packaging" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-7">
                                    <p className="text-white font-bold text-lg leading-snug mb-1">Trusted by 500+ Brands</p>
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
                                <img src={heroImage} alt="Differentiate Your CBD Subscription" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                            </div>
                            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-60" />
                            <div className="absolute -z-10 -top-8 -right-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl opacity-60" />
                        </div>
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                                Differentiate Your <span className="text-primary">CBD Brand</span> Through Superior Packaging
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                At CustomPackMakers, we understand that in the maturing CBD subscription market, packaging credibility is brand credibility. Our state-of-the-art manufacturing processes and expert regulatory knowledge allow us to create CBD subscription boxes that are as trustworthy as they are beautiful. From compliant panel layouts and child-resistant mechanisms to organic-inspired color palettes and botanically embossed surfaces, we help CBD subscription brands build the kind of packaging-driven subscriber trust that turns monthly boxes into long-term brand relationships.
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
                                <p className="text-base text-muted-foreground">We're here to help you navigate CBD subscription packaging requirements.</p>
                            </div>
                            <Accordion type="single" collapsible defaultValue="item-1" className="w-full space-y-2">
                                {[
                                    {
                                        id: "item-1",
                                        question: "Can you produce child-resistant CBD subscription boxes?",
                                        answer: "Yes. We offer multiple CPSC-compliant child-resistant closure options for CBD subscription boxes, including push-and-turn, squeeze-and-lift, and certified frustration-free mechanisms. These can be integrated into rigid box structures, folding carton formats, or outer shipper designs depending on your product assortment and subscriber experience goals."
                                    },
                                    {
                                        id: "item-2",
                                        question: "How do you accommodate CBD labeling compliance on the box panels?",
                                        answer: "Our structural design team creates dieline layouts with dedicated compliance panels engineered to accommodate all required regulatory text — ingredient lists, net weights, QR COA links, and warning statements — without crowding your exterior brand design. We provide print-ready templates that meet FDA and state-level CBD labeling standards."
                                    },
                                    {
                                        id: "item-3",
                                        question: "What materials best protect CBD tincture bottles in subscription boxes?",
                                        answer: "For glass CBD tincture bottles, we recommend rigid chipboard boxes with custom-die-cut foam inserts or molded pulp trays. These materials absorb shock during transit, prevent glass-on-glass contact, and eliminate the movement that causes breakage. We also add UV-blocking interior coatings to protect light-sensitive CBD oils."
                                    },
                                    {
                                        id: "item-4",
                                        question: "What is the turnaround time for custom CBD subscription boxes?",
                                        answer: "Our standard production turnaround for custom CBD subscription boxes is 8–10 business days after artwork approval. Rush production at 4–6 business days is available for time-critical subscription cycles. All orders include one round of digital proof and pre-production quality checks at no additional charge."
                                    },
                                    {
                                        id: "item-5",
                                        question: "Do you offer eco-friendly options for CBD subscription packaging?",
                                        answer: "Absolutely. Our CBD subscription boxes are available in FSC-certified board, using vegetable-based inks and water-based coatings throughout. We also offer kraft natural exterior options with soy-based adhesives, and all structural components are 100% recyclable at standard municipal facilities."
                                    }
                                ].map((faq) => (
                                    <AccordionItem key={faq.id} value={faq.id} className="border border-slate-200 rounded-lg bg-white overflow-hidden data-[state=open]:border-primary data-[state=open]:ring-1 data-[state=open]:ring-primary/20 data-[state=open]:bg-primary/5 transition-all duration-300">
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
                        <div className="relative w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden">
                            <img src={FAQimage} alt="CBD Subscription Boxes FAQ" className="absolute inset-0 w-full h-full object-cover" />
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

export default CBDSubscriptionBoxes;
