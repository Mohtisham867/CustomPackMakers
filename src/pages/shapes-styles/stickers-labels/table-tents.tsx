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
import { RelatedProductStickersLabels } from "@/components/RelatedProductStickersLabels";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";

import heroImg from "@/assets/stickers-and-labels/table-tents.webp";
import FAQimage from "@/assets/FAQ-image.webp";

const TableTents = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    const productImages = [
        { src: heroImg, alt: "Table Tents - View 1" },
        { src: heroImg, alt: "Table Tents - View 2" },
        { src: heroImg, alt: "Table Tents - View 3" },
        { src: heroImg, alt: "Table Tents - View 4" },
        { src: heroImg, alt: "Table Tents - View 5" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Table Tents | Premium Custom Labels | CustomPackMakers</title>
                <meta name="description" content="Order custom table tents for restaurant menus, event promotions, and QR code displays. Thick durable cardstock with vibrant full-color printing. Free shipping." />
                <meta name="keywords" content="table tents, custom restaurant table tents, printed menu cards, promotional table displays, event table tents" />
                <meta property="og:title" content="Table Tents | Premium Custom Labels | CustomPackMakers" />
                <meta property="og:description" content="Order custom table tents for restaurant menus, event promotions, and QR code displays. Thick durable cardstock with vibrant full-color printing. Free shipping." />
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
                                    <Link to="/shapes-styles">Shapes &amp; Styles</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link to="/shapes-styles/stickers-labels">Stickers &amp; Labels</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Table Tents</BreadcrumbPage>
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
                                <span className="text-primary">Custom</span> Table Tents
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Wholesale custom printed table tents engineered for stability, vibrant high-resolution display, and immediate customer engagement at restaurants, bars, and events.
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
                                    src={heroImg}
                                    alt="Table Tents Hero"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                        </div>
                </div>
            </div>
</section>
    <section className="py-8 bg-slate-50">
                <div className="container mx-auto px-[5vw]">
                    {/* Section label + accent bar */}
                    <div className="flex items-center gap-3 mb-5">
                        <div className="w-10 h-1 bg-primary rounded-full" />
                        <span className="text-xs font-semibold tracking-widest text-primary uppercase">Product Overview</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 max-w-3xl">
                        Custom Table Tents Built for Undeniable Visiblity
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>Our custom table tents are precision-manufactured for hospitality brands, event organizers, and retailers who refuse to let a captive audience go to waste. Constructed from premium heavy-weight cardstock, rigid matte covers, and specialized spill-resistant laminations, each table tent delivers the structural stability your countertops demand while projecting the tantalizing promotional message your customers can't ignore. Whether you're pushing a seasonal cocktail menu, advertising a loyalty program, or directing guests via a scannable QR code, our custom table displays are designed to perform.</p>
                        <p>From compact A-frame designs and 3-sided triangular prisms to interlocking die-cut displays, our table tent solutions accommodate every spatial constraint. Each tent features precision-scored fold lines, interlocking base tabs, and optional high-gloss finishes, ensuring your display stands tall and vibrant without collapsing or curling at the edges. With stunning full-color CMYK printing on all outward-facing panels, your table space becomes a powerful point-of-sale asset. Order wholesale with low minimums and rapid turnaround.</p>
                    </div>
                </div>
            </section>

            {/* INTERACTIVE PRODUCT & FORM SECTION */}
            <section className="py-10 bg-accent/5" id="quote-form">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end">
                        <div className="lg:col-span-7 space-y-6">
                            <div className="relative w-full max-w-lg mx-auto overflow-hidden rounded-lg shadow-sm border border-border bg-white" style={{ aspectRatio: '4/3' }}>
                                <img src={productImages[selectedImage].src} alt={productImages[selectedImage].alt} className="w-full h-full object-cover" />
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
                                            <div className="space-y-1.5"><Label htmlFor="length" className="text-xs font-semibold text-muted-foreground">L (in)</Label><Input id="length" type="number" placeholder="2" className="h-9 bg-white" /></div>
                                            <div className="space-y-1.5"><Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label><Input id="width" type="number" placeholder="2" className="h-9 bg-white" /></div>
                                            <div className="space-y-1.5"><Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">D (in)</Label><Input id="depth" type="number" placeholder="0" className="h-9 bg-white" disabled /></div>
                                        </div>
                                        <div className="space-y-1.5"><Label htmlFor="quantity" className="text-xs font-semibold text-muted-foreground">Quantity</Label><Input id="quantity" type="number" placeholder="1000" className="h-9 bg-white" /></div>
                                        <div className="space-y-1.5"><Label htmlFor="name" className="text-xs font-semibold text-muted-foreground">Name</Label><Input id="name" type="text" placeholder="Your Name" className="h-9 bg-white" /></div>
                                        <div className="space-y-1.5"><Label htmlFor="email" className="text-xs font-semibold text-muted-foreground">Email</Label><Input id="email" type="email" placeholder="email@example.com" className="h-9 bg-white" /></div>
                                        <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 shadow-md hover:shadow-lg transition-all duration-300 mt-2">Submit Inquiry</Button>
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
                        The Point-of-Sale Power of Table Tents
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
                            <p>In the hospitality and retail landscape, the moment a customer sits down or reaches the checkout is the most critical opportunity for an upsell. For restaurants and event venues, custom table tents represent an incredibly cost-effective, high-conversion marketing tool. Positioned exactly at eye level, a premium table tent communicates daily specials, happy hour times, and digital menus directly to a captive, seated audience before the server even arrives.</p>
                            <p>Our custom table tents are designed with durability and aesthetic stopping-power at their core. Every element, from the sturdy 14pt-18pt cardstock that prevents drooping, to the spill-proof laminations that survive spilled drinks, is carefully considered to create a striking presentation. Investing in high-quality printed table displays demonstrates a polished brand presence and consistently drives high-margin add-on purchases at the table.</p>
                            
                            
                            <h3>Unmatched Cardstock Quality & Structural Rigidity</h3>
                            <p>A table tent is entirely useless if it collapses or bends over time. We construct our displays from the most robust paperboards available:</p>
                            <ul><li>14pt & 16pt Premium Cardstock: Our standard, substantial thicknesses offering exceptional rigidity and crush resistance, ensuring your A-frame stands tall indefinitely.</li><li>Synthetic Waterproof Stocks: Engineered with specialized plastics for high-spill environments like outdoor patios, bars, and crowded nightclubs.</li><li>Textured Uncoated Covers: For fine-dining operations and weddings, textured paper delivers an unparalleled premium, organic feel.</li></ul>
                            
                            <h3>Precision Scoring & Interlocking Bases</h3>
                            <p>The engineering behind the fold is what keeps the table tent functional. Our manufacturing capabilities ensure flawless assembly:</p>
                            <ul><li>Laser-Scored Fold Lines: We forcefully score the cardstock before shipping, ensuring it folds perfectly flat and crisp without the thick paper cracking or tearing along the hinge.</li><li>Die-Cut Interlocking Tabs: Our base tabs slide and lock together seamlessly, creating a rigid triangular geometry that won't pop open or require messy adhesive tape.</li><li>Custom Die-Cut Headers: Break out of the standard rectangle! We can custom cut the top edge to trace the shape of a cocktail glass, logo, or mascot for ultimate visual impact.</li></ul>
                            
                            <h3>Advanced Printing & Beverage-Proof Finishing</h3>
                            <p>Transform your point-of-sale display into a mouth-watering visual menu with our state-of-the-art finishing capabilities:</p>
                            <ul><li>High-Gloss Spill-Proof Lamination: Create a vibrant, shiny finish that makes food photography pop and allows servers to easily wipe off spilled beer or ketchup with a damp rag.</li><li>Matte Anti-Glare Lamination: A sophisticated, buttery-smooth finish that eliminates overhead lighting glare, making small-text dessert menus or QR codes instantly scannable.</li><li>Photographic CMYK Accuracy: We hit bold, highly saturated colors flawlessly, ensuring your branded photography looks as appetizing as the real thing.</li></ul>
                            
                        </div>
                    </div>
                </div>
            </section>

            <RelatedProductStickersLabels />

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
                            We combine craftsmanship, speed, and reliability to deliver packaging that makes your brand unforgettable.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">
                        <div className="space-y-5">
                            
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            {/* Static icon path for simplicity */}
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"} />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Uncompromising Quality</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">Every custom table tent we produce is built from premium, heavyweight cardboards, selected for structural integrity. Our rigorous scoring and die-cutting process ensures each unit won't crack at the fold, meeting the durability standards your busy restaurant demands.</p>
                                </div>
                            </div>
                            <div className="w-full h-px bg-slate-100" />
                            
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors duration-300">
                                        <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            {/* Static icon path for simplicity */}
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={"M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"} />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Tailored Perfection</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">No two bar tables are identical. We engineer custom displays to your exact dimensions, accommodating tiny cocktail tables with compact 4x6 sizes, or massive banquet halls with towering 3-sided prism tents that dominate the centerpiece.</p>
                                </div>
                            </div>
                            <div className="w-full h-px bg-slate-100" />
                            
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors duration-300">
                                        <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            {/* Static icon path for simplicity */}
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={"M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"} />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Wipeable Elegance</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">Today's fast-paced venues expect longevity. Our spill-resistant gloss and matte lamination options deliver a premium look while providing a crucial waterproof barrier, allowing your staff to wipe the table tents clean shift after shift.</p>
                                </div>
                            </div>
                            
                            
                        </div>

                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img src={heroImg} alt="Table Tents" className="w-full h-full object-cover" />
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
                                <img src={heroImg} alt="Table Tents Differentiation" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                            </div>
                            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-60" />
                            <div className="absolute -z-10 -top-8 -right-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl opacity-60" />
                        </div>
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                                Differentiate Your <span className="text-primary">Product</span> From Others
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                At CustomPackMakers, we understand that your table tent is a silent salesperson stationed at every booth. To ensure your specials stand out in dim restaurant lighting, we utilize state-of-the-art high-resolution printing techniques that render food and beverage photography with mouth-watering clarity. Our team of experts works closely with you to determine the perfect die-cut shape and interlocking base mechanism, ensuring flawless assembly upon delivery. By integrating distinctive features like QR code scanning optimization, wipeable laminations, and custom 3D structures, we help you create a highly profitable tabletop presentation.
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
                                <p className="text-base text-muted-foreground">We’re confident that you will love our products and service.</p>
                            </div>
                            <Accordion type="single" collapsible defaultValue="item-0" className="w-full space-y-2">
                                {[{"id":"item-0","q":"Do the table tents arrive flat or pre-assembled?","a":"To ensure safe, damage-free shipping and to drastically reduce your freight costs, all custom table tents are shipped completely flat. They feature deep, pre-scored fold lines and simple interlocking base tabs, allowing your staff to pop them into 3D shapes in literally 2 seconds per unit."},{"id":"item-1","q":"Can I wipe food and drinks off the table tents?","a":"Yes! We highly recommend applying our heavy Gloss or Matte Lamination to your table tents. This clear plastic coating protects the printed ink from moisture, meaning your servers can easily wipe off spilled beer, sauce, or water condensation with a damp towel."},{"id":"item-2","q":"Can you die-cut a custom shape out of the top of the tent?","a":"Absolutely. Stand out from the generic rectangle crowd by having the top silhouette of the table tent custom-cut to outline a beer bottle, your mascot, a pizza slice, or your logo. This is a highly effective way to grab attention."},{"id":"item-3","q":"Are your table tents sturdy enough not to fall over in drafty patios?","a":"We specifically utilize extremely rigid 14pt, 16pt, or even 18pt cardstock specifically engineered to bear its own weight and resist indoor drafts. The wide, interlocking A-frame base provides a very low center of gravity for excellent tabletop stability."},{"id":"item-4","q":"Can you print different designs on the front and back panels?","a":"Yes! With our standard A-frame table tents, you have two large visible panels. You can put your food specials on the front, and your cocktail specials or a loyalty QR code on the back, essentially doubling your advertising space for the same cost."}].map((faq, idx) => (
                                    <AccordionItem
                                        key={faq.id}
                                        value={faq.id}
                                        className="border border-slate-200 rounded-lg bg-white overflow-hidden data-[state=open]:border-primary data-[state=open]:ring-1 data-[state=open]:ring-primary/20 data-[state=open]:bg-primary/5 transition-all duration-300"
                                    >
                                        <AccordionTrigger className="px-5 py-3 hover:no-underline [&>svg]:hidden group">
                                            <span className="text-left font-semibold text-foreground text-base">{faq.q}</span>
                                            <div className="shrink-0 ml-4 p-1 rounded-full bg-slate-100 group-data-[state=open]:bg-primary group-data-[state=open]:text-white transition-colors duration-200">
                                                <Plus className="h-3 w-3 group-data-[state=open]:hidden" />
                                                <Minus className="h-3 w-3 hidden group-data-[state=open]:block" />
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent className="px-5 pb-5 pt-0 text-slate-600 leading-relaxed text-sm">
                                            {faq.a}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                        <div className="relative w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden ">
                            <img src={FAQimage} alt="Table Tents FAQ" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
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

export default TableTents;
