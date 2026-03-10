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
import perfumeSubscriptionBoxeshero from "@/assets/fragrance-boxes/perfume-subscription-boxes/img-hero.png";
import perfumeSubscriptionBoxesimg1 from "@/assets/fragrance-boxes/perfume-subscription-boxes/img-1.png";
import perfumeSubscriptionBoxesimg2 from "@/assets/fragrance-boxes/perfume-subscription-boxes/img-2.png";
import perfumeSubscriptionBoxesimg3 from "@/assets/fragrance-boxes/perfume-subscription-boxes/img-3.png";
import perfumeSubscriptionBoxesimg4 from "@/assets/fragrance-boxes/perfume-subscription-boxes/img-4.png";
import perfumeSubscriptionBoxesimg5 from "@/assets/fragrance-boxes/perfume-subscription-boxes/img-5.png";
import perfumeSubscriptionBoxesimg6 from "@/assets/fragrance-boxes/perfume-subscription-boxes/img-whychoose.png";
import perfumeSubscriptionBoxesimg7 from "@/assets/fragrance-boxes/perfume-subscription-boxes/img-different.png";

// FAQ image
import FAQimage from "@/assets/FAQ-image.png";

const PerfumeSubscriptionBoxes = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    // Gallery images using the 5 available fragrance images to satisfy layout requirements
    const productImages = [
        { src: perfumeSubscriptionBoxesimg1, alt: "Perfume Subscription Boxes - Main Presentation" },
        { src: perfumeSubscriptionBoxesimg2, alt: "Subscription Packaging - Elegant View" },
        { src: perfumeSubscriptionBoxesimg3, alt: "Monthly Perfume Box Design" },
        { src: perfumeSubscriptionBoxesimg4, alt: "Premium Subscription Setup" },
        { src: perfumeSubscriptionBoxesimg5, alt: "Complementary Fragrance Mailers" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Perfume Subscription Boxes | Monthly Fragrance Packaging | CustomPackMakers</title>
                <meta name="description" content="Order custom perfume subscription boxes wholesale. Design monthly fragrance mailer boxes with custom inserts, premium materials, and durable shipping protection." />
                <meta name="keywords" content="perfume subscription boxes, monthly fragrance packaging, custom mailer boxes, scent subscription packaging" />
                <meta property="og:title" content="Perfume Subscription Boxes | Monthly Fragrance Packaging | CustomPackMakers" />
                <meta property="og:description" content="Protective and premium custom mailer boxes for perfume subscriptions. Custom inserts hold sample vials and bottles perfectly. Get a quote today." />
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
                                <BreadcrumbPage>Perfume Subscription Boxes</BreadcrumbPage>
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
                                Perfume <span className="text-primary">Subscription Boxes</span>
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Launch your monthly scent curations in protective, fully customized perfume subscription mailers carefully designed to surprise subscribers and withstand challenging postal networks while preserving exquisite luxury presentation.
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
                                    src={perfumeSubscriptionBoxeshero}
                                    alt="Perfume Subscription Boxes Hero"
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
                        Aromatherapy in the Mail: Deliver Scent with Superior Protective Packaging
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            Subscription commerce relies heavily on consistent subscriber delight. Our <strong className="text-foreground">perfume subscription boxes</strong> ensure every monthly delivery transforms into a thrilling unboxing ritual. Crafted from sturdy E-flute corrugated cardboard or premium thick stock, these boxes guarantee your sample glass vials, travel sprays, or full-sized colognes remain completely intact regardless of postal bumps and drops.
                        </p>
                        <p>
                            With deeply customized interior cavity placements—whether through smart cardboard dividers or plush foam inserts—each perfume unit sits perfectly flush. Utilize double-sided interior printing to unveil scent profiles to your eagerly awaiting subscribers. Enhance brand loyalty and reduce churn by shipping your monthly scents in mailers that confidently radiate quality, security, and mesmerizing aesthetic precision.
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
                                                <Input id="length" type="number" placeholder="6" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label>
                                                <Input id="width" type="number" placeholder="5" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">D (in)</Label>
                                                <Input id="depth" type="number" placeholder="2" className="h-9 bg-white" />
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
                    {/* Heading outside the scrollable box */}
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">
                        Perfecting the Perfume Subscription Unboxing Experience
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
                                The direct-to-consumer fragrance subscription market thrives on continual discovery. To succeed, your brand must not only deliver captivating monthly scents but also present them in custom-designed packages that reliably survive complex postal journeys intact while still reflecting upscale retail luxury upon arrival.
                            </p>
                            <p>
                                We specialize in engineering corrugated mailer boxes specifically for monthly fragrance clubs. From the first box that arrives on their doorstep, the packaging must tell your subscriber that they are receiving something exceptionally valuable, safely stowed, and elegantly curated.
                            </p>

                            <h3>Mailer Construction that Defies Damage</h3>
                            <p>
                                Fragrance samples are notoriously delicate. Hence, choosing the right material is a non-negotiable aspect of successful subscription packaging. We offer:
                            </p>
                            <ul>
                                <li><strong>Sturdy Corrugated E-Flute:</strong> Our most requested material for monthly subscription boxes. The fine flutes provide superb compressive strength against heavy crushing forces encountered during courier transit.</li>
                                <li><strong>Pre-scored Folding Setup:</strong> Our mailers fold securely into place with interlocking flaps, providing double walls of protection completely eliminating the need for excessive tape.</li>
                                <li><strong>Lightweight Economics:</strong> Keeping shipping costs down is essential for monthly recurrences. Our materials strike the perfect balance between unbreakable impact resistance and courier-budget-friendly weight.</li>
                            </ul>

                            <h3>Dynamic Branding Inside and Out</h3>
                            <p>
                                A blank exterior protects against theft, but the interior should explode with brand personality. Our two-sided printing solutions maximize engagement:
                            </p>
                            <ul>
                                <li><strong>Exterior Printing:</strong> Employ minimalist branding, bold logos, or discrete patterns that intrigue the recipient instantly without advertising fragile or expensive contents overtly.</li>
                                <li><strong>Interior Storytelling:</strong> Reveal detailed perfume notes, subscription themes, beautiful artwork, and discount codes on the box's inner lid to spark joy right at the moment of the grand opening.</li>
                                <li><strong>Sustainable Finishing Options:</strong> Pair aqueous coatings (water-based finishes) with fully biodegradable stocks to reinforce eco-friendly brand values monthly.</li>
                            </ul>

                            <h3>Optimized Fit: Multi-Vial Custom Inserts</h3>
                            <p>
                                Sending five tiny vials? Three roll-on bottles? How do you prevent them from shattering into your subscribers' mailboxes? We craft exact-match internal inserts:
                            </p>
                            <ul>
                                <li><strong>Slotted Partitions:</strong> Cardboard dividers holding each bottle firmly apart, preventing them from clinking or shifting.</li>
                                <li><strong>Precise Die-Cut Trays:</strong> Whether using custom-layered foam inserts to cradle the glass or sustainable molded paper pulp, your products will never travel loosely.</li>
                            </ul>

                            <h3>Empowering Subscription Scale</h3>
                            <p>
                                Whether you are a newly launched niche scent club with 500 members or an international fragrance powerhouse managing 50,000 subscriptions, reliable packaging supply is critical. CustomPackMakers offers robust scalability, incredibly fast production turnarounds, and highly competitive volume-based bulk discounts. Partner with us, and watch your monthly subscription unboxing experiences transform into unshakeable brand loyalty and growth.
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
                            We specialize in protective luxury logistics, transforming your monthly fragrant curations into an unparalleled physical unboxing ritual.
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
                                        Transit Security Assured
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Subscription mailers undergo significant courier stress. We engineer durable E-flute corrugated boxes that comfortably withstand heavy impacts and drops, ensuring your incredibly delicate fragrance glass vials consistently arrive perfectly safely to eagerly waiting subscribers.
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
                                        Flawless Precision Interiors
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Presenting multiple perfumes requires meticulous organization. Our perfectly fitted custom inserts, ranging from protective die-cut foam to resilient folded cardboard structures, keep complex scent collections immaculately spaced, preventing clinking and shattering while elevating the aesthetic reveal.
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
                                        Vibrant Storytelling Design
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        With brilliant interior-and-exterior full-color CMYK printing, you beautifully narrate the month's scent profile instantly right on the box lid. This deep branding connection actively delights your subscriber base and continuously strengthens ongoing, profitable retention metrics effortlessly.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT: Square image with floating badges */}
                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img
                                    src={perfumeSubscriptionBoxesimg6}
                                    alt="Perfume Subscription Packaging"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-7">
                                    <p className="text-white font-bold text-lg leading-snug mb-1">
                                        Loved by Subscription Services
                                    </p>
                                    <p className="text-white/75 text-sm">Empowering cosmetics logistics reliably</p>
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
                                <img src={perfumeSubscriptionBoxesimg7} alt="Differentiate Your Subscription Packaging" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                            </div>
                            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-60" />
                            <div className="absolute -z-10 -top-8 -right-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl opacity-60" />
                        </div>
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                                Differentiate Your <span className="text-primary">Subscription</span> Brand
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                At CustomPackMakers, we meticulously construct robust custom perfume subscription boxes specifically optimized for recurring monthly deliveries explicitly. We deploy high-grade shipping-ready corrugated bases meticulously integrated seamlessly within elegant aesthetic mailer profiles. Our expert package engineers carefully design custom structured internal foam dividers brilliantly isolating multiple delicate sample vials and full-sized bottles perfectly securely preventing disastrous transit breakage entirely while consistently delivering profoundly exciting unboxing experiences aggressively captivating eager modern subscribers repeatedly.
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
                                        question: "What is the best material for shipping perfume subscriptions?",
                                        answer: "E-flute corrugated cardboard is our top recommendation for mailers. It provides incredible crush resistance perfect for protecting delicate perfume vials in postal networks, while remaining lightweight enough to keep your recurring subscription shipping costs economically manageable."
                                    },
                                    {
                                        id: "item-2",
                                        question: "Can these boxes be printed on both the inside and outside?",
                                        answer: "Yes! Double-sided printing is highly popular for subscription services. You can keep the exterior completely minimal to reduce theft risks while featuring vibrant artwork, rich scent details, or vibrant monthly themes beautifully printed entirely on the box's inner lid."
                                    },
                                    {
                                        id: "item-3",
                                        question: "How do custom inserts work for sample vials?",
                                        answer: "We offer completely custom-cut inserts specifically tailored precisely to the diameter and length of your selected perfume sample vials. You can choose from die-cut protective foam layers or highly eco-friendly grooved cardboard dividers that prevent any clinking or breaking."
                                    },
                                    {
                                        id: "item-4",
                                        question: "Can you change box designs monthly?",
                                        answer: "Absolutely! We frequently produce varied thematic prints for different monthly campaigns. Because our manufacturing processes are incredibly flexible, you can comfortably order different vibrant artworks for each seasonal curation block without any interruption to your scheduled dispatch timeline."
                                    },
                                    {
                                        id: "item-5",
                                        question: "Do you offer wholesale pricing on long-term subscription packaging?",
                                        answer: "Yes, our wholesale program is designed specifically to support scaling subscription businesses perfectly. The more boxes you order in volume, the lower your per-unit cost significantly drops. We provide remarkably consistent quality across all your escalating high-volume production batches."
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
                                alt="Subscription Packaging FAQ"
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

export default PerfumeSubscriptionBoxes;
