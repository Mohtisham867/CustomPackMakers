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
import heroImage from "@/assets/cardboard-boxes/paperboard-boxes.webp";

// FAQ image
import FAQimage from "@/assets/FAQ-image.png";

const PaperboardBoxes = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    // Product images for gallery
    const productImages = [
        { src: heroImage, alt: "Paperboard Boxes - Main View" },
        { src: heroImage, alt: "Paperboard Boxes - Side Angle" },
        { src: heroImage, alt: "Paperboard Boxes - Open Box View" },
        { src: heroImage, alt: "Paperboard Boxes - Detail Shot" },
        { src: heroImage, alt: "Paperboard Boxes - Lifestyle Shot" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Paperboard Boxes | Lightweight Retail Packaging | CustomPackMakers</title>
                <meta name="description" content="Order custom paperboard boxes wholesale. Premium lightweight folding cartons perfect for cosmetics, pharmaceuticals, and retail products. Free shipping." />
                <meta name="keywords" content="paperboard boxes, custom folding cartons, retail packaging, cosmetic boxes, lightweight paperboard" />
                <meta property="og:title" content="Custom Paperboard Boxes | Lightweight Retail Packaging" />
                <meta property="og:description" content="Premium custom paperboard packaging. High-resolution printing, precise folding cartons, and wholesale pricing. Get a free quote." />
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
                                <BreadcrumbPage>Paperboard Boxes</BreadcrumbPage>
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
                                <span className="text-primary">Paperboard</span> Boxes
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Wholesale custom paperboard folding cartons engineered for high-fidelity retail presentation, cost-effective shipping, and seamless automated fulfillment.
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
                                    alt="Paperboard Boxes Hero"
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
                        The Industry Standard for Premium Retail Folding Cartons
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            Our <strong className="text-foreground">custom paperboard boxes</strong> (often referred to as folding cartons) are the cornerstone of modern retail packaging. Precision-engineered for B2B brands across the cosmetic, pharmaceutical, food, and consumer goods sectors, paperboard offers the perfect balance of lightweight efficiency and brilliant printability. Constructed from premium Solid Bleached Sulfate (SBS), Coated Unbleached Kraft (CUK), or recycled paperboard, these boxes provide a flawlessly smooth canvas that brings high-resolution branding to life on the retail shelf.
                        </p>
                        <p>
                            From standard straight-tuck end boxes for skincare serums to complex reverse-tuck and crash-bottom designs for heavier retail items, our <strong className="text-foreground">paperboard packaging</strong> solutions are incredibly versatile. Because they ship flat, they drastically reduce your freight and warehouse storage costs. Once on the assembly line, they pop into shape instantly. With options for full-color CMYK offset printing, metallic foil stamping, clear PET window patching, and embossing, your <strong className="text-foreground">folding cartons</strong> are designed to capture consumer attention instantly. Order wholesale with our industry-leading turnaround.
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
                                                <Input id="length" type="number" placeholder="4" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label>
                                                <Input id="width" type="number" placeholder="2" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">D (in)</Label>
                                                <Input id="depth" type="number" placeholder="6" className="h-9 bg-white" />
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">
                        The Strategic Value of Paperboard Folding Cartons in Retail
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
                                In the highly competitive retail environment, the primary packaging of your product is your silent salesperson. It has mere seconds to communicate brand value, provide essential regulatory information, and convince the consumer to make a purchase.
                                Custom paperboard boxes (folding cartons) are the undisputed champions of this retail space. Unlike heavy corrugated shipping boxes or expensive rigid setup boxes, paperboard strikes the perfect balance between high-end visual aesthetics, structural integrity for lightweight goods, and exceptional cost-effectiveness at scale.
                            </p>
                            <p>
                                At CustomPackMakers, we manufacture millions of paperboard boxes annually for the health, beauty, food, and consumer tech industries. We understand that a successful folding carton relies on three pillars: premium substrate quality, flawless offset printing, and precision die-cutting that ensures the box folds and locks perfectly on high-speed automated filling lines.
                            </p>

                            <h3>Understanding Paperboard Substrates</h3>
                            <p>
                                Not all paperboard is created equal. Selecting the correct caliper (thickness) and coating is critical to the success of your packaging. We offer several premium grades:
                            </p>
                            <ul>
                                <li><strong>SBS (Solid Bleached Sulfate):</strong> The gold standard for retail. It is bleached bright white throughout the core, offering a pristine, clinical look perfect for cosmetics, pharmaceuticals, and luxury goods. It provides the smoothest surface for the highest quality offset printing.</li>
                                <li><strong>CUK (Coated Unbleached Kraft):</strong> A highly tear-resistant board made from unbleached kraft pine. It has a brown core but features a white clay coating on the outside for printing. It is frequently used for beverage carriers, frozen foods, and hardware due to its superior strength.</li>
                                <li><strong>CRB (Coated Recycled Board):</strong> An eco-friendly, cost-effective option made entirely from recycled fibers. It typically has a grey core with a white clay coating on the exterior. Excellent for dry foods, cereals, and standard consumer goods.</li>
                            </ul>
                            <p>
                                We typically utilize board calipers ranging from 14pt (thinner, for lightweight cosmetics) up to 24pt (thicker, for heavier items or larger boxes), ensuring the structure matches the weight of your product perfectly.
                            </p>

                            <h3>Unmatched Printing and Finishing Capabilities</h3>
                            <p>
                                The primary advantage of paperboard over corrugated cardboard is its incredibly smooth, non-fluted surface. This allows for gallery-quality printing and finishing techniques that elevate the perceived value of your product:
                            </p>
                            <ul>
                                <li><strong>Offset Printing:</strong> We utilize advanced offset lithography to deliver true photographic quality, perfect gradients, and exact Pantone color matching that digital printing struggles to achieve consistently.</li>
                                <li><strong>Metallic Foil Stamping:</strong> Adding gold, silver, or holographic foil to the logo or borders of an SBS paperboard box instantly positions the product in the premium or luxury category.</li>
                                <li><strong>Embossing and Debossing:</strong> We can press patterns, logos, or Braille directly into the paperboard, creating a sophisticated tactile experience for the consumer.</li>
                                <li><strong>Protective Coatings:</strong> A raw paperboard box can scuff. We apply aqueous coatings (AQ), UV gloss, or luxurious soft-touch matte laminations to protect the ink and enhance the visual depth of the design.</li>
                            </ul>

                            <h3>Structural Design for Automated Fulfillment</h3>
                            <p>
                                A beautiful box is useless if it jams on the filling line. Paperboard boxes are shipped flat (glued on one seam) to drastically reduce your freight and storage costs. How they are structured determines how efficiently your warehouse team or automated machines can pack them:
                            </p>
                            <ul>
                                <li><strong>Straight Tuck End (STE):</strong> Both top and bottom flaps tuck from front to back. This provides a clean front panel with no raw edges visible. It is the industry standard for cosmetics.</li>
                                <li><strong>Reverse Tuck End (RTE):</strong> The top flap tucks front-to-back, while the bottom flap tucks back-to-front. This allows the boxes to nest closer together on the master die sheet, reducing material waste and unit cost.</li>
                                <li><strong>Crash Bottom (Auto-Bottom):</strong> For heavier items or high-speed manual fulfillment, the bottom of the box is pre-glued in a way that allows it to automatically snap and lock into place when the box is popped open, saving massive amounts of packing time.</li>
                            </ul>

                            <h3>Wholesale Manufacturing Excellence</h3>
                            <p>
                                Paperboard packaging requires precision manufacturing. If the die-cut is off by a fraction of a millimeter, or if the score lines aren't deep enough, the boxes will bow, tear, or fail to close properly. Our facility utilizes state-of-the-art die-cutting and automated folding-gluing machines equipped with optical sensors to ensure every single carton is perfectly aligned.
                            </p>
                            <p>
                                Whether you need a test run of 1,000 units for a new product launch or a continuous supply of hundreds of thousands of units for national retail distribution, we provide consistent quality, rigorous color management, and reliable delivery schedules. Partner with CustomPackMakers to elevate your retail presence with flawlessly executed paperboard boxes.
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
                            We combine premium substrates, flawless offset printing, and precision die-cutting to deliver folding cartons that perform perfectly on the shelf.
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
                                        Premium SBS Substrates
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        We don't compromise on paper quality. We utilize premium Solid Bleached Sulfate (SBS) boards that provide a brilliant white core and exceptionally smooth surface, ensuring your <strong>retail packaging</strong> looks pristine and professional.
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
                                        Flawless Offset Printing
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Paperboard is the ultimate canvas. We utilize advanced offset lithography to ensure true photographic reproduction, exact Pantone color matching, and crisp text, giving your <strong>folding cartons</strong> an edge over competitors.
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
                                        Machine-Grade Precision
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Inconsistent die-cutting causes jams on automated filling lines. Our state-of-the-art die-cutters and folder-gluers ensure that every single <strong>paperboard box</strong> features perfectly aligned scores and robust glued seams for seamless operational efficiency.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img
                                    src={heroImage}
                                    alt="Premium Custom Paperboard Box Packaging"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-7">
                                    <p className="text-white font-bold text-lg leading-snug mb-1">
                                        Trusted by Retail Brands
                                    </p>
                                    <p className="text-white/75 text-sm">Delivering premium folding cartons across North America</p>
                                </div>
                            </div>

                            <div className="absolute top-4 -right-2 lg:-right-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80 backdrop-blur-sm">
                                <p className="text-2xl font-bold text-primary leading-none">100%</p>
                                <p className="text-xs text-slate-400 mt-1 font-medium">Recyclable SBS</p>
                            </div>

                            <div className="absolute bottom-4 -left-2 lg:-left-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80 backdrop-blur-sm">
                                <p className="text-2xl font-bold text-emerald-500 leading-none">High</p>
                                <p className="text-xs text-slate-400 mt-1 font-medium">Print Resolution</p>
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
                                Differentiate Your <span className="text-primary">Retail Presence</span> From Others
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                At CustomPackMakers, we know that in the crowded retail aisle, your packaging must work harder than ever. To ensure your brand commands attention, we utilize premium bright-white paperboard combined with high-fidelity offset printing. Our structural design team works closely with you to create unique die-cut shapes, clear viewing windows, or specialized tuck closures that improve user experience. By integrating distinctive features like tactile embossing, metallic foils, and spot UV accents, we help you create a world-class folding carton that converts casual browsers into loyal customers.
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
                                        question: "What Is The Difference Between Paperboard And Corrugated Cardboard?",
                                        answer: "Paperboard (folding carton) is a single, solid sheet of thick paper. It is highly smooth, excellent for high-resolution printing, and used for primary retail packaging (like cereal or cosmetic boxes). Corrugated cardboard has a wavy fluted layer between two flat sheets and is used for shipping and heavy items."
                                    },
                                    {
                                        id: "item-2",
                                        question: "How Thick Should My Paperboard Box Be?",
                                        answer: "It depends on the product weight. We typically recommend 14pt-16pt for lightweight items like small cosmetics, 18pt-20pt for medium retail goods, and 24pt for heavier items like candles or bottled liquids. Our engineers will recommend the perfect caliper for your product."
                                    },
                                    {
                                        id: "item-3",
                                        question: "Do These Boxes Require Glue To Assemble?",
                                        answer: "No. The boxes are glued on the side seam at our facility and shipped flat. When you receive them, they pop open and the top/bottom flaps simply tuck into place securely without any glue or tape needed."
                                    },
                                    {
                                        id: "item-4",
                                        question: "Can I Get A Clear Window On My Paperboard Box?",
                                        answer: "Yes, window patching is a very popular option for retail paperboard boxes. We can die-cut a custom shape in the front panel and glue a clear, durable PET plastic film to the inside, allowing customers to see the product."
                                    },
                                    {
                                        id: "item-5",
                                        question: "What Is SBS Board?",
                                        answer: "SBS stands for Solid Bleached Sulfate. It is the highest quality paperboard available, bleached bright white entirely through the core. It provides the absolute best surface for printing and a premium, clean look for luxury or medical packaging."
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
                                alt="Paperboard Boxes FAQ"
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

export default PaperboardBoxes;
