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
import incenseBoxes from "@/assets/fragrance-boxes/incense-boxes.webp";
import customPerfumeBoxes from "@/assets/fragrance-boxes/custom-perfume-boxes.webp";
import heroImage from "@/assets/fragrance-boxes/hero.webp";
import perfumeSubscriptionBoxes from "@/assets/fragrance-boxes/perfume-subscription-boxes.webp";
import luxuryPerfumePackaging from "@/assets/fragrance-boxes/luxury-perfume-packaging.webp";

// FAQ image
import FAQimage from "@/assets/FAQ-image.png";

const IncenseBoxes = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    // Gallery images using the 5 available fragrance images to satisfy layout requirements
    const productImages = [
        { src: incenseBoxes, alt: "Custom Incense Boxes - Main Presentation" },
        { src: heroImage, alt: "Fragrance Box Collection" },
        { src: perfumeSubscriptionBoxes, alt: "Incense Mailer Packaging Strategy" },
        { src: customPerfumeBoxes, alt: "Aromatic Stick Packaging Excellence" },
        { src: luxuryPerfumePackaging, alt: "Premium Ritual Scent Packaging" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Incense Boxes | Wholesale Stick Packaging | CustomPackMakers</title>
                <meta name="description" content="Order custom incense boxes wholesale. Distinctive, protective packaging perfectly sized for delicate incense sticks, cones, and aromatic rituals with full branding." />
                <meta name="keywords" content="incense boxes, custom incense packaging, wholesale incense boxes, aromatic packaging, incense stick boxes" />
                <meta property="og:title" content="Custom Incense Boxes | Wholesale Stick Packaging | CustomPackMakers" />
                <meta property="og:description" content="Distinctive packaging crafted precisely for delicate incense sticks. We employ premium materials to preserve scents effectively and display your brand elegantly." />
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
                                <BreadcrumbPage>Incense Boxes</BreadcrumbPage>
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
                                Custom <span className="text-primary">Incense Boxes</span>
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Showcase and protect your delicate aromatic products with custom incense packaging expertly crafted to preserve fragrance potency while providing an incredibly captivating, uniquely branded unboxing experience tailored for your wellness and spiritual lines.
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
                                    src={incenseBoxes}
                                    alt="Custom Incense Boxes Hero"
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
                        Protective Resonant Packaging for Aromatic Experiences
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            Delicate incense sticks, cones, and resins require specialized housing to prevent crushing and maintain their potent aromatic oils during transit and shelving. Our <strong className="text-foreground">custom incense boxes</strong> are manufactured precisely to accommodate the unique lengths and fragile compositions of your spiritual wellness products. Utilizing firm paperboards and optional internal wrappings, we ensure your incense arrives perfectly intact, maintaining its profound freshness from your factory to the consumer's ritual space.
                        </p>
                        <p>
                            Beyond uncompromising protection, your incense packaging acts as a powerful canvas reflecting the calming spiritual and aromatic nature of the product inside. Whether you lean into organic, eco-friendly kraft board aesthetics for natural herbal sticks, or lavish, gold-foiled rigid sleeves for luxury oud resins, our myriad finishing and printing options flawlessly communicate your unique market positioning. Distinguish your brand on the retail shelf while honoring the delicate quality of your artisanal offerings.
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
                                                <Input id="length" type="number" placeholder="10" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label>
                                                <Input id="width" type="number" placeholder="2" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">D (in)</Label>
                                                <Input id="depth" type="number" placeholder="1" className="h-9 bg-white" />
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
                        Perfecting Spiritual Product Presentation: The Importance of Custom Incense Boxes
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
                                The aromatic wellness industry relies upon evocative, deeply aesthetic presentations. Incense packaging serves a vital dual role: it must strictly guard notoriously brittle sticks against snapping, while simultaneously communicating the profound relaxing, spiritual, or luxurious nature of the fragrances embedded within. Exquisite packaging elevates a simple bundle of sticks into a highly desirable lifestyle product ready for boutiques.
                            </p>
                            <p>
                                At CustomPackMakers, we intimately understand the distinct packaging needs facing the incense completely. Our meticulously manufactured custom boxes deliver the required structural rigidity alongside breathtaking visual appeal, perfectly positioning your brand in the rapidly rising wellness market.
                            </p>

                            <h3>Structural Considerations for Brittle Goods</h3>
                            <p>
                                Incense sticks are long, thin, and prone to breaking during storage. We offer tailored structural solutions to effectively combat transit damage:
                            </p>
                            <ul>
                                <li><strong>Long Tuck-End Boxes:</strong> The standard for sticks. We utilize highly durable cardstock (like robust 16pt or 18pt SBS) that precisely resists bending, ensuring the long packaging profile remains pristinely uncreased.</li>
                                <li><strong>Rigid Sleeve & Drawer Structures:</strong> For extraordinarily premium or delicate incense lines, rigid drawer boxes offer supreme snap-resistance and unveil the product brilliantly upon opening.</li>
                                <li><strong>Protective Internal Wraps & Foils:</strong> Consider custom wax paper sleeves or foil-lined bag inserts internally, successfully preserving the crucial aromatic essential oils entirely from drying out over immense periods.</li>
                            </ul>

                            <h3>Material Alignments with Brand Philosophy</h3>
                            <p>
                                The tactile finish of your incense box should seamlessly translate your exact brand philosophy right to the consumer's waiting fingertips:
                            </p>
                            <ul>
                                <li><strong>Sustainable Kraft Stocks:</strong> Incredibly popular for organic, earthy, hand-rolled incense. Unbleached brown kraft communicates incredible natural purity and strong environmental consciousness effectively.</li>
                                <li><strong>Bright SBS Board:</strong> Ideal for deeply modern, vivid cosmetic brands requiring clean surfaces for sharp, highly colorful graphic printing.</li>
                                <li><strong>Textured Fine Papers:</strong> For absolute luxury brands, wrapping your rigid incense sleeves in remarkably textured linen or sophisticated leather-feel stock adds immense tactile intrigue.</li>
                            </ul>

                            <h3>Impactful Visual Branding Accents</h3>
                            <p>
                                Maximize your packaging’s perceived value and completely differentiate your scent line with magnificent finishing effects:
                            </p>
                            <ul>
                                <li><strong>Foil Stamping (Gold, Silver, Bronze):</strong> Adds an instant aura of eastern luxury and mystical warmth perfectly matched for spiritual or opulent scent products boldly outlining mandalas, logos, and intricate borders.</li>
                                <li><strong>Blind Embossing:</strong> Provide a delicate, raised textural pattern that draws subtle, profound attention without heavily utilizing colored ink.</li>
                                <li><strong>Die-Cut Display Windows:</strong> An excellent method allowing customers to visually preview the texture and color of the actual incense, fostering instant retail confidence safely.</li>
                            </ul>

                            <h3>Wholesale Custom Supply Solutions</h3>
                            <p>
                                Scaling your rapidly growing incense production requires exceptionally reliable box manufacturing. With deep expertise across wholesale logistics, we effectively service bulk orders perfectly, drastically lowering your unit costs effortlessly while guaranteeing perfectly consistent color reproduction and impeccable structural assembly. Secure your valuable botanical scents inside packaging meticulously engineered precisely for them safely.
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
                            We deliver exquisitely designed, highly protective incense boxes that effectively articulate the spiritual and relaxing essence inherent in your products.
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
                                        Impeccable Breakage Prevention
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Incense sticks snap effortlessly. We manufacture boxes deliberately utilizing deeply thickened board and rigid slipcase architectures that powerfully resist external pressure excellently, ensuring your incredibly delicate sticks maintain pristine integrity permanently.
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
                                        Complete Oil Preservation
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Potent natural resin and fragrant essential oils vanish effortlessly in improper packaging. We effectively implement completely non-porous coatings preventing oil absorption radically, helping significantly prolong your incredible product's original aromatic longevity effortlessly.
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
                                        Striking Visual Embellishments
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Stand out brilliantly on bustling wellness shelves. Incorporate complex foil-stamped mandala patterns, rich debossed logos, and flawlessly printed gradients to powerfully encapsulate the incredibly alluring spiritual charm deeply inherent entirely inside your brand.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT: Square image with floating badges */}
                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img
                                    src={incenseBoxes}
                                    alt="Wholesale Custom Incense Packaging"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-7">
                                    <p className="text-white font-bold text-lg leading-snug mb-1">
                                        Trusted by Wellness Brands
                                    </p>
                                    <p className="text-white/75 text-sm">Elevating aromatic products across retail shelves</p>
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
                                <img src={incenseBoxes} alt="Differentiate Your Incense Brand" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                            </div>
                            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-60" />
                            <div className="absolute -z-10 -top-8 -right-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl opacity-60" />
                        </div>
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                                Differentiate Your <span className="text-primary">Incense</span> Brand
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                At CustomPackMakers, we profoundly craft exquisite custom incense boxes passionately dedicated to seamlessly preserving perfectly intricate delicate wooden scent sticks effortlessly. Our extensively experienced structural designers brilliantly formulate explicitly dimensioned long rectangular profiles deliberately deploying intensely tight interlocking ends comprehensively resisting harsh external crush pressures accurately. By intelligently integrating vibrant flexographic artistic designs vividly highlighting beautiful metallic spot UV accents gracefully, we brilliantly empower significantly diverse global spiritual fragrance brands prominently continuously beautifully.
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
                                        question: "How do you prevent incense sticks from breaking in the box?",
                                        answer: "We deliberately utilize deeply thicker boards like robust 16pt or 18pt SBS. Alternatively, for completely maximum protection, we highly recommend utilizing structural rigid sleeve-and-tray box styles which physically cannot snap under standard retail pressure, ensuring perfect sticks."
                                    },
                                    {
                                        id: "item-2",
                                        question: "Can I get an eco-friendly kraft box for my natural incense?",
                                        answer: "Yes! Brown eco-friendly kraft is incredibly popular across the entire spiritual wellness sector. It conveys an authentic, completely natural aesthetic while being fully recyclable, perfectly aligning your packaging elegantly with deeply organic brand philosophies seamlessly."
                                    },
                                    {
                                        id: "item-3",
                                        question: "Do you offer custom sizes for very long incense sticks?",
                                        answer: "Absolutely. Our manufacturing capabilities accommodate absolutely any custom dimensions flawlessly. Whether you require packaging for extremely long ceremonial sticks, shorter cones, or thick palo santo bundles, we engineer completely exact-fit solutions flawlessly."
                                    },
                                    {
                                        id: "item-4",
                                        question: "Can I add metallic gold details for a luxury feel?",
                                        answer: "Certainly. Metallic hot foil stamping is highly recommended. Applying deep gold or shimmering silver details instantly adds striking mystical allure and significant visual luxury, powerfully elevating your incense profoundly across highly competitive retail boutique shelves."
                                    },
                                    {
                                        id: "item-5",
                                        question: "Will the paper box securely contain the strong incense scent?",
                                        answer: "While paperboard does breathe, we frequently implement specialized, non-porous interior coatings effortlessly. Combining this with your own internal cellophane or foil sleeves guarantees the original aromatic potency remains perfectly intact profoundly for immensely extended shelf-lives flawlessly."
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
                                alt="Incense Packaging FAQ"
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

export default IncenseBoxes;
