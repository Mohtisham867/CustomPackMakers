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
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TechnicalSpecsSection } from "@/components/TechnicalSpecsSection";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";

import cakeboxehero from "@/assets/bakery-products/custom-cake-boxes/img-hero.png";
import cakeboxeimg1  from "@/assets/bakery-products/custom-cake-boxes/img-1.png";
import cakeboxeimg2 from "@/assets/bakery-products/custom-cake-boxes/img-2.png";
import cakeboxeimg3 from "@/assets/bakery-products/custom-cake-boxes/img-3.png";
import cakeboxeimg4 from "@/assets/bakery-products/custom-cake-boxes/img-4.png";
import cakeboxeimg5 from "@/assets/bakery-products/custom-cake-boxes/img-5.png";
import cakeboxeimg6 from "@/assets/bakery-products/custom-cake-boxes/img-whychoose.png";
import cakeboxeimg7 from "@/assets/bakery-products/custom-cake-boxes/img-dfferent.png";
import FAQimage from "@/assets/FAQ-image.png";
import { RelatedProductBakery } from '@/components/RelatedProductBakery';




const CustomCakeBoxes = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    const productImages = [
        { src: cakeboxeimg1, alt: "Custom Cake Boxes - Main View" },
        { src: cakeboxeimg2, alt: "Custom Cake Boxes - Pastry Style" },
        { src: cakeboxeimg3, alt: "Custom Cake Boxes - Cupcake Style" },
        { src: cakeboxeimg4, alt: "Custom Cake Boxes - Cookie Style" },
        { src: cakeboxeimg5, alt: "Custom Cake Boxes - Muffin Style" },
    ];


    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Cake Boxes | Premium Bakery Cake Packaging | CustomPackMakers</title>
                <meta name="description" content="Order custom cake boxes wholesale. FDA-approved, grease-resistant cake packaging with multi-tier structural support, elegant finishes, and fast turnaround." />
                <meta name="keywords" content="custom cake boxes, cake packaging, bakery cake boxes, multi-tier cake packaging, food-safe cake boxes" />
                <meta property="og:title" content="Custom Cake Boxes | Premium Bakery Cake Packaging | CustomPackMakers" />
                <meta property="og:description" content="Food-grade custom cake boxes with structural support for multi-tier cakes. Grease-resistant, FDA-approved materials. Get a free quote today." />
            </Helmet>
            <Header />

            {/* Breadcrumb */}
            <div className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 mt-[120px] md:mt-[160px]">
                <div className="container mx-auto px-[30px] py-4">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild><Link to="/">Home</Link></BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild><Link to="/industries">All Industries</Link></BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild><Link to="/industries/bakery-boxes">Bakery Boxes</Link></BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Custom Cake Boxes</BreadcrumbPage>
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
                                <span className="text-primary">Custom</span> Cake Boxes
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                FDA-approved, structurally engineered cake packaging designed to protect multi-tier creations, preserve freshness, and elevate your bakery brand with every delivery.
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
                            <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-amber-100">
                                <img src={cakeboxehero} alt="Custom Cake Boxes" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PRODUCT OVERVIEW */}
            <section className="py-8 bg-slate-50">
                <div className="container mx-auto px-[5vw]">
                    <div className="flex items-center gap-3 mb-5">
                        <div className="w-10 h-1 bg-primary rounded-full" />
                        <span className="text-xs font-semibold tracking-widest text-primary uppercase">Product Overview</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 max-w-3xl">
                        Cake Packaging Built for Structural Integrity and Freshness
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            Our <strong className="text-foreground">custom cake boxes</strong> are precision-engineered for bakeries, pastry shops, and cake studios that refuse to compromise on presentation or food safety. Constructed from FDA-approved, food-grade paperboard with grease-resistant coatings, each box delivers the structural support your multi-tier cakes demand while projecting the brand identity your customers remember. Whether you're packaging a single-layer birthday cake or a towering wedding creation, our <strong className="text-foreground">custom bakery cake packaging</strong> is designed to perform at every touchpoint.
                        </p>
                        <p>
                            From petite 6-inch rounds to elaborate tiered cakes, our <strong className="text-foreground">food-safe cake packaging</strong> solutions accommodate every size and style. Each box features reinforced bases, ventilation options to prevent condensation, and optional window cutouts for elegant display. With full-color CMYK printing, foil stamping, and matte or gloss lamination, your <strong className="text-foreground">branded cake boxes</strong> become a powerful marketing asset at every celebration.
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
                                            <div className="space-y-1.5">
                                                <Label htmlFor="length" className="text-xs font-semibold text-muted-foreground">L (in)</Label>
                                                <Input id="length" type="number" placeholder="14" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label>
                                                <Input id="width" type="number" placeholder="14" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">D (in)</Label>
                                                <Input id="depth" type="number" placeholder="6" className="h-9 bg-white" />
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

            {/* TECHNICAL SPECIFICATIONS */}
            <TechnicalSpecsSection />

            {/* SEO SCROLL BOX */}
            <section className="py-8 bg-slate-50 border-t border-slate-100">
                <div className="container mx-auto px-[5vw]">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">
                        The Complete Guide to Custom Cake Boxes
                    </h2>
                    <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="[&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-8 [&>h3]:mb-3 [&>h3]:first:mt-0 [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-5 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-5 [&>ul]:space-y-2 [&>ul>li]:text-[15px] [&>ul>li]:text-slate-600">
                            <p>
                                In the competitive world of artisan and commercial bakeries, the packaging of your cakes is far more than just a container—it is the first tangible experience your customer has with your brand. A beautifully crafted custom cake box communicates the same level of artistry, care, and quality that went into creating the cake itself. For bakeries and cake studios looking to stand out, investing in premium, food-safe custom cake boxes is not just an aesthetic decision—it is a critical business strategy that protects your product, preserves freshness, and reinforces brand loyalty at every celebration your cakes grace.
                            </p>
                            <p>
                                At CustomPackMakers, we understand that a cake's journey from your kitchen counter to a customer's table is fraught with risk. Structural collapse, moisture damage, and frosting transfer are the most common complaints in the bakery industry, and all of them stem from inadequate packaging. Our custom cake boxes are engineered from the ground up to eliminate these failure points, using food-grade, FDA-approved materials that are tested rigorously for structural integrity and food safety compliance.
                            </p>

                            <h3>Multi-Tier Structural Engineering</h3>
                            <p>
                                The unique challenge of cake packaging is the weight-to-delicacy ratio. A four-tier wedding cake can weigh upwards of twenty pounds, yet its exterior—layers of delicate fondant, intricate piping, and fresh flowers—can be ruined by the slightest internal shift. This is why structural engineering is at the heart of our cake box design process.
                            </p>
                            <ul>
                                <li><strong>Reinforced Corrugated Base:</strong> Every cake box we manufacture features a double-wall corrugated base board that distributes the cake's weight evenly and prevents the base from bowing or collapsing during transport or stacking.</li>
                                <li><strong>Corner Column Support:</strong> For multi-tier configurations, we design integrated corner columns within the box structure. These act as load-bearing pillars, transferring the weight of the upper tier directly to the box walls rather than through the cake itself.</li>
                                <li><strong>Interlocking Lid Design:</strong> Our cake box lids use precision die-cut interlocking tabs that create a secure, gapless seal. This prevents the lid from popping open unexpectedly—a devastating event during transport—while still allowing for easy one-handed opening by the customer.</li>
                                <li><strong>Custom Cake Boards:</strong> We include food-grade grease-resistant cake boards as an integrated base, providing a stable, clean platform that also prevents the cake from sliding within the box.</li>
                            </ul>

                            <h3>FDA-Approved Food-Safe Materials</h3>
                            <p>
                                Food safety is non-negotiable in the bakery industry. Every material we use in the production of our custom cake boxes complies with FDA Title 21 regulations for direct and indirect food contact. This compliance is not just about meeting legal requirements—it is about protecting your customers, your brand reputation, and your business license.
                            </p>
                            <ul>
                                <li><strong>SBS (Solid Bleached Sulfate) Paperboard:</strong> Our primary food-contact board material is SBS, which provides a bright white, chemically neutral surface that will not impart any taste, odor, or chemical contaminants to your baked goods.</li>
                                <li><strong>Clay-Coated Kraft (C2S):</strong> For outer wall printing, we utilize clay-coated kraft that offers exceptional print quality with a barrier layer that prevents inks from migrating through the board stock into the food zone.</li>
                                <li><strong>PE (Polyethylene) Extrusion Coating:</strong> For high-moisture cakes such as fondant-covered or cream-frosted cakes, we offer PE extrusion coating on the interior surfaces, creating an impermeable moisture barrier that prevents condensation from softening the board and ensures the packaging maintains its structural integrity even in humid conditions.</li>
                                <li><strong>Water-Based Inks and Coatings:</strong> All printing inks and varnishes used on food-contact surfaces are water-based and certified food-safe, ensuring zero harmful VOC off-gassing near your product.</li>
                            </ul>

                            <h3>Grease-Resistance and Moisture Control</h3>
                            <p>
                                Butter cream, ganache, and fresh cream fillings are notoriously aggressive to standard paperboard. Without proper grease-resistance treatment, cake boxes will develop unsightly oil stains that saturate through to the exterior, ruining the presentation and compromising the structural integrity of the board. Our grease-resistant treatments form an invisible barrier within the fiber matrix of the paperboard, preventing migration of oils and fats without affecting the food-safe profile of the material.
                            </p>
                            <p>
                                Additionally, for cakes stored in refrigerated conditions, we apply specialized coatings that prevent condensation from forming on the interior walls of the box. This is critical, as moisture is the primary enemy of fondant cakes and sugar decorations. Our moisture-resistant treatments ensure that the interior of the box remains dry even when transitioning from cold storage to room temperature, eliminating the phenomenon known as "sweating" that can dissolve delicate sugar work.
                            </p>

                            <h3>Window Cutouts for Visual Merchandising</h3>
                            <p>
                                For retail bakeries and cake shops, the ability to showcase a cake's design without opening the box is a significant sales driver. Our custom die-cut window panels, fitted with crystal-clear, food-safe PET film, allow customers to see the artistry inside while maintaining full protection and hygiene. Window shapes can be customized to any design—from simple rectangles to elaborate geometric patterns that frame the most photogenic aspects of your creation.
                            </p>
                            <ul>
                                <li><strong>Clear PET Windows:</strong> UV-stabilized and food-safe, maintaining clarity even in refrigerated environments without fogging or cracking.</li>
                                <li><strong>Anti-Fogging Treatment:</strong> Optional anti-fog coating on PET windows ensures customers can always see the product clearly, even when moving from cold to warm environments.</li>
                                <li><strong>Custom Window Shapes:</strong> Hearts, circles, arches, and hexagons—any shape that tells your brand's visual story.</li>
                            </ul>

                            <h3>Finishing and Branding Options</h3>
                            <p>
                                A custom cake box is often the first impression a customer has of your bakery brand, and it should immediately communicate the quality and care that defines your work. Our full suite of finishing options transforms a functional food container into a stunning brand ambassador.
                            </p>
                            <ul>
                                <li><strong>Soft-Touch Matte Lamination:</strong> Creates a velvety, premium feel that is associated with luxury brands, perfect for high-end cake studios and wedding cake specialists.</li>
                                <li><strong>Spot UV Coating:</strong> Apply a high-gloss coating selectively to your logo or design elements, creating a stunning contrast against a matte background that instantly elevates perceived value.</li>
                                <li><strong>Foil Stamping:</strong> Gold, silver, rose gold, or holographic foil applied to your brand name or logo creates an immediate association with premium quality and luxury.</li>
                                <li><strong>Embossing and Debossing:</strong> Add tactile depth to your packaging with raised or recessed brand elements that customers can both see and feel.</li>
                            </ul>

                            <h3>Wholesale Pricing and Scalability</h3>
                            <p>
                                Whether you are a boutique single-location bakery ordering 200 boxes for a seasonal promotion or a multi-location cake studio requiring 10,000 units monthly, our production infrastructure scales precisely to your needs. We offer competitive wholesale pricing tiers that decrease per-unit cost as order volume increases, making premium packaging financially accessible for businesses at every stage of growth. Our industry-leading 8–10 business day turnaround ensures your packaging is always ready for your next event.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* INLINE BAKERY CAROUSEL */}
            <RelatedProductBakery />

            {/* WHY BRANDS CHOOSE */}
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
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">FDA-Approved Food Safety</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Our cake boxes use FDA-approved, food-grade SBS paperboard with grease-resistant coatings that comply with Title 21. PE-extruded moisture barriers prevent condensation, protecting delicate fondant and cream frosting throughout refrigerated transport and room-temperature display.
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
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Multi-Tier Structural Support</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Reinforced double-wall bases and precision-engineered corner column supports distribute cake weight evenly, preventing the bowing and collapse that destroys elaborate tiered creations. Our interlocking lid design keeps multi-tier cakes secure throughout the entire delivery journey.
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
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Stunning Aesthetic Appeal</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Custom window cutouts, soft-touch matte lamination, and gold foil stamping transform our cake boxes into luxurious brand ambassadors. Every finish option reinforces the premium quality of your baked goods, driving repeat purchases and social media shareability at every occasion.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img src={cakeboxeimg6} alt="Premium Custom Cake Box Packaging" className="w-full h-full object-cover" />
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
                                <img src={cakeboxeimg7} alt="Differentiate Your Cake Brand" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                            </div>
                            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-60" />
                            <div className="absolute -z-10 -top-8 -right-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl opacity-60" />
                        </div>
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                                Differentiate Your <span className="text-primary">Cakes</span> From Others
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                At CustomPackMakers, we understand that your cake packaging is the first impression of your artistry. We integrate food-safe materials, precision structural engineering, and premium aesthetic finishes to create boxes that protect your creations and amplify your brand. Every window cutout, every foil-stamped logo, and every moisture barrier is engineered to ensure your cakes arrive in perfect condition and your brand is remembered long after the last slice is served.
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
                                <p className="text-base text-muted-foreground">We're confident that you will love our products and service.</p>
                            </div>
                            <Accordion type="single" collapsible defaultValue="item-1" className="w-full space-y-2">
                                {[
                                    { id: "item-1", question: "Are your cake boxes FDA approved for direct food contact?", answer: "Yes. All our cake boxes use FDA Title 21 compliant food-grade SBS paperboard and water-based inks. Materials are tested for food safety and will not impart any taste, odor, or chemicals to your baked goods." },
                                    { id: "item-2", question: "Can you make boxes for multi-tier wedding cakes?", answer: "Absolutely. We engineer multi-tier cake boxes with reinforced double-wall bases, corner column supports, and interlocking lids specifically designed to handle the weight and delicacy of tiered creations." },
                                    { id: "item-3", question: "How do you prevent grease stains from cream and butter frosting?", answer: "We apply a grease-resistant treatment to the interior board fiber matrix that blocks oil and fat migration, keeping the exterior of your box pristine even with butter cream and ganache-frosted cakes inside." },
                                    { id: "item-4", question: "Can I get a window in my cake box?", answer: "Yes! We offer custom die-cut window panels fitted with crystal-clear, food-safe, anti-fog PET film. Windows can be shaped as rectangles, circles, hearts, or any custom shape that complements your brand." },
                                    { id: "item-5", question: "What is your minimum order quantity?", answer: "We offer flexible minimum order quantities starting from as low as 100 units for boutique bakeries, with competitive wholesale pricing tiers available for larger volume orders. Contact us for a custom quote." }
                                ].map((faq) => (
                                    <AccordionItem key={faq.id} value={faq.id} className="border border-slate-200 rounded-lg bg-white overflow-hidden data-[state=open]:border-primary data-[state=open]:ring-1 data-[state=open]:ring-primary/20 data-[state=open]:bg-primary/5 transition-all duration-300">
                                        <AccordionTrigger className="px-5 py-3 hover:no-underline [&>svg]:hidden group">
                                            <span className="text-left font-semibold text-foreground text-base">{faq.question}</span>
                                            <div className="shrink-0 ml-4 p-1 rounded-full bg-slate-100 group-data-[state=open]:bg-primary group-data-[state=open]:text-white transition-colors duration-200">
                                                <Plus className="h-3 w-3 group-data-[state=open]:hidden" />
                                                <Minus className="h-3 w-3 hidden group-data-[state=open]:block" />
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent className="px-5 pb-5 pt-0 text-slate-600 leading-relaxed text-sm">{faq.answer}</AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                        <div className="relative w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden">
                            <img src={FAQimage} alt="Custom Cake Boxes FAQ" className="absolute inset-0 w-full h-full object-cover" />
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

export default CustomCakeBoxes;


