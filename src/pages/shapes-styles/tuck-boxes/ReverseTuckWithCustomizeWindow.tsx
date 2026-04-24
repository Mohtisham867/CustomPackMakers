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
import { RelatedProductTuckBoxes } from "@/components/RelatedProductTuckBoxes";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";

import heroImg from "@/assets/tuck-boxes/reverse-tuck-with-customize-window.webp";
import FAQimage from "@/assets/FAQ-image.webp";

const ReverseTuckWithCustomizeWindow = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    const productImages = [
        { src: heroImg, alt: "Reverse Tuck With Customize Window - Main View" },
        { src: heroImg, alt: "Reverse Tuck With Customize Window - Side Angle" },
        { src: heroImg, alt: "Reverse Tuck With Customize Window - Open View" },
        { src: heroImg, alt: "Reverse Tuck With Customize Window - Detail Shot" },
        { src: heroImg, alt: "Reverse Tuck With Customize Window - Lifestyle Shot" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Reverse Tuck Boxes with Custom Window | Retail Visibility | CustomPackMakers</title>
                <meta name="description" content="Order wholesale reverse tuck boxes with custom die-cut windows. Showcase your product while maintaining the classic, space-saving reverse tuck structure. 750+ word expert guide." />
                <meta name="keywords" content="reverse tuck boxes window, window boxes wholesale, custom die cut window boxes, retail tuck boxes, custom printed window packaging" />
                <meta property="og:title" content="Reverse Tuck Boxes with Custom Window | Retail-Ready Display" />
                <meta property="og:description" content="Combine the efficiency of reverse tuck closures with the visibility of custom windows. Perfect for retail products that need to be seen. Order wholesale today." />
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
                                <BreadcrumbLink asChild><Link to="/shapes-styles/tuck-boxes">Tuck Boxes</Link></BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Reverse Tuck With Customize Window</BreadcrumbPage>
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
                                <span className="text-primary">Reverse Tuck</span> Window Boxes
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                High-visibility retail packaging featuring a custom die-cut window and traditional reverse tuck closures for a perfect blend of transparency and efficiency.
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
                                <img src={heroImg} alt="Reverse Tuck With Customize Window Hero" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
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
                        Visual Appeal Meets Structural Efficiency
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            The <strong className="text-foreground">Reverse Tuck Box with Customize Window</strong> is an ideal choice for products that deserve to be seen. By adding a strategically placed die-cut window to the efficient reverse tuck end (RTE) structure, you allow customers to appreciate the physical qualities of your product—like color, texture, and design—without ever opening the box.
                        </p>
                        <p>
                            This packaging style is extremely popular in the cosmetics, bakery, toy, and pharmaceutical industries. It provides the space-saving benefits of shipping flat while offering a full-service retail display once assembled. With CustomPackMakers, you can specify the exact size, shape, and placement of your window to perfectly frame your product's best features.
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
                                <img src={productImages[selectedImage].src} alt={productImages[selectedImage].alt} className="w-full h-full object-cover object-center" />
                            </div>
                            <div className="w-full max-w-lg mx-auto grid grid-cols-5 gap-2">
                                {productImages.map((image, index) => (
                                    <button key={index} onClick={() => setSelectedImage(index)}
                                        className={`relative w-full aspect-square overflow-hidden rounded-md border transition-all duration-200 ${selectedImage === index ? 'border-primary shadow-md ring-2 ring-primary/20' : 'border-slate-200 hover:border-slate-300 hover:shadow-sm'}`}>
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
                                                <Label htmlFor="rtw-l" className="text-xs font-semibold text-muted-foreground">L (in)</Label>
                                                <Input id="rtw-l" type="number" placeholder="8" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="rtw-w" className="text-xs font-semibold text-muted-foreground">W (in)</Label>
                                                <Input id="rtw-w" type="number" placeholder="4" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="rtw-d" className="text-xs font-semibold text-muted-foreground">D (in)</Label>
                                                <Input id="rtw-d" type="number" placeholder="3" className="h-9 bg-white" />
                                            </div>
                                        </div>
                                        <div className="space-y-1.5">
                                            <Label htmlFor="rtw-quantity" className="text-xs font-semibold text-muted-foreground">Quantity</Label>
                                            <Input id="rtw-quantity" type="number" placeholder="500" className="h-9 bg-white" />
                                        </div>
                                        <div className="space-y-1.5">
                                            <Label htmlFor="rtw-name" className="text-xs font-semibold text-muted-foreground">Name</Label>
                                            <Input id="rtw-name" type="text" placeholder="Your Name" className="h-9 bg-white" />
                                        </div>
                                        <div className="space-y-1.5">
                                            <Label htmlFor="rtw-email" className="text-xs font-semibold text-muted-foreground">Email</Label>
                                            <Input id="rtw-email" type="email" placeholder="email@example.com" className="h-9 bg-white" />
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

            {/* TECHNICAL SPECIFICATIONS SECTION */}
            <TechnicalSpecsSection />

            {/* SEO CONTENT SECTION */}
            <section className="py-8 bg-slate-50 border-t border-slate-100">
                <div className="container mx-auto px-[5vw]">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">
                         Maximize Retail Visibility with Precision Window Engineering
                    </h2>
                    <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8
                            [&::-webkit-scrollbar]:w-2
                            [&::-webkit-scrollbar-track]:bg-gray-100
                            [&::-webkit-scrollbar-track]:rounded-full
                            [&::-webkit-scrollbar-thumb]:bg-primary
                            [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="[&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-8 [&>h3]:mb-3 [&>h3]:first:mt-0 [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-5 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-5 [&>ul]:space-y-2 [&>ul>li]:text-[15px] [&>ul>li]:text-slate-600">
                            <p>
                                Transparency is the cornerstone of consumer trust in the retail environment. When a potential buyer can see the actual texture, color, and design of your product, the barrier to purchase is significantly lowered. The <strong>Custom Reverse Tuck Box with Window</strong> combines the high-speed production efficiency of the Reverse Tuck End (RTE) structure with the powerful marketing advantage of a die-cut window. This configuration ensures that your boxes can be manufactured and shipped flat for maximum cost savings, while providing a world-class retail showcase once they are popped into shape and filled with your premium merchandise. At CustomPackMakers, we specialize in high-precision window patching that ensures every unit meets the exacting standards of luxury retail.
                            </p>
                            <p>
                                The engineering behind a windowed tuck box requires a delicate balance between visibility and structural integrity. By carefully placing the die-cut on the front or side panels, we ensure that the box maintains its "crush resistance" while maximizing the viewing angle for the consumer. We offer a range of clear PET and PVC films that act as a dust barrier and anti-tamper shield, providing a crystal-clear look at the product inside without exposing it to environmental contaminants or customer handling. This results in cleaner inventory and a significantly enhanced "premium" feel for your brand.
                            </p>

                            <h3>Advanced Technical Advantages of Windowed RTE Packaging</h3>
                            <p>
                                For B2B marketing departments and supply chain managers, the decision to use a reverse tuck box with a window offers several strategic advantages that go beyond simple aesthetics:
                            </p>
                            <ul>
                                <li><strong>Instant Aesthetic Verification:</strong> For products where visual fidelity is the primary selling point—such as vibrant cosmetics, intricate baked goods, or specialized electronics—a window provides immediate proof of quality.</li>
                                <li><strong>Reduced Internal Packaging:</strong> By showing the product itself, you may be able to reduce the need for printed internal inserts or descriptive outer photography, lowering your overall unit cost.</li>
                                <li><strong>High-Speed Automated Assembly:</strong> The reverse tuck end is one of the most efficient box styles for manual or automated closing lines, ensuring your packaging speed keeps pace with your production volume.</li>
                                <li><strong>Customizable Window Geometries:</strong> Use our advanced laser die-cutting to create windows in the shape of your logo, a product silhouette, or even multi-panel wraps that show the item from different angles.</li>
                            </ul>

                            <h3>Selection of Premium Materials and High-Fidelity Printing</h3>
                            <p>
                                We fabrication our window tuck boxes from 100% sustainable, FSC-certified substrates designed for maximum shelf life and print vibrancy. Whether you require the brilliant white surface of SBS board for medical-grade clarity or the organic texture of natural Kraft for artisan products, we provide the perfect foundation for your branding:
                            </p>
                            <ul>
                                <li><strong>Solid Bleached Sulfate (SBS):</strong> The premier choice for high-end retail, offering a surgically smooth surface that supports complex 4-color process printing and detailed gradients.</li>
                                <li><strong>Recycled Corrugated & Kraft:</strong> For heavier items or brands that wish to highlight their commitment to environmental stewardship through visible fiber textures.</li>
                                <li><strong>Sophisticated Finishing Techniques:</strong> Combine your window with velvet soft-touch laminations, metallic foil accents, or spot UV coatings to create a multi-sensory unboxing ritual that builds lasting brand equity.</li>
                            </ul>

                            <h3>The CustomPackMakers Manufacturing Promise</h3>
                            <p>
                                Every order at CustomPackMakers is managed by a dedicated team of structural experts who understand the nuances of high-volume retail. We provide precision dielines with window specifications to your design team, ensuring that every graphic element is perfectly aligned with the cutout. Once your design is approved, we utilize a 98% satisfaction-rated manufacturing process that includes automated window patching and rigid quality control inspections. 
                            </p>
                            <p>
                                In the fast-moving consumer goods market, delay is the enemy of profit. That's why we maintain a domestic North American manufacturing footprint, delivering standard orders within 8-10 business days. This allows you to stay responsive to seasonal demand and inventory fluctuations without waiting months for overseas seafreight. With low minimum order quantities and competitive wholesale pricing, we empower brands of all sizes to access the same high-tier window packaging used by the world's leading retail names. Let our engineers help you design a box that doesn't just hold your product—it celebrates it by bringing it directly into the consumer's line of sight.
                            </p>
                            <p>
                                To conclude, a Reverse Tuck Box with a Customize Window is the ultimate tool for transparency and transparency in the retail sphere. It is an investment in consumer confidence that pays dividends in brand loyalty and shelf performance. Contact our structural design team today to start your next high-visibility packaging project.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* RELATED PRODUCTS CAROUSEL */}
            <RelatedProductTuckBoxes />

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
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Uncompromising Quality</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Every <strong>custom window box</strong> we produce is built from rigid chipboard, premium SBS cardstock, and specialty textured stocks, materials selected for structural integrity and tactile luxury. Our rigorous QC process ensures each unit meets the durability standards your wholesale operation and retail partners demand, shipment after shipment. Your brand's reputation is supported by the physical quality of the box itself.
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
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Tailored Perfection</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        No two footwear lines are identical, and neither are our solutions. We engineer <strong>custom branded footwear packaging</strong> to your exact SKU dimensions, with precision-cut tissue inserts, heel cradles, and bespoke structural forms that eliminate movement and protect finish. Your brand's packaging spec, executed flawlessly at scale.
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
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Eco-Friendly Elegance</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Today's footwear buyers expect sustainability without sacrificing premium aesthetics. Our FSC-certified, recyclable <strong>wholesale apparel boxes</strong> deliver the same luxury look and structural performance, while reducing your brand's environmental footprint and meeting the ESG expectations of modern retail partners and conscious consumers.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img src={heroImg} alt="Premium Custom Tuck Box Packaging" className="w-full h-full object-cover" />
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

            {/* DIFFERENTIATE YOUR BOXES SECTION */}
            <section className="py-10 lg:py-12 bg-white overflow-hidden relative">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="relative group">
                            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] border border-primary/20 shadow-2xl transform transition-transform duration-700 hover:scale-[1.02]">
                                <img src={heroImg} alt="Differentiate Your Tuck Boxes" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                            </div>
                            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-60" />
                            <div className="absolute -z-10 -top-8 -right-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl opacity-60" />
                        </div>
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                                Differentiate Your <span className="text-primary">Window</span> Boxes From Others
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                At CustomPackMakers, we understand that your packaging is the first physical touchpoint for your customers. To ensure your brand stands out, we utilize state-of-the-art manufacturing processes combined with premium offset and digital printing techniques. Our team of experts works closely with you to determine the perfect box dimensions, ensuring a snug fit and maximum protection. By integrating distinctive features like custom textures, high-end finishes, and sustainable materials, we help you create a world-class unboxing experience that builds lasting brand loyalty and drives repeat purchases.
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
                                <p className="text-base text-muted-foreground">Detailed answers for your window packaging needs.</p>
                            </div>
                            <Accordion type="single" collapsible defaultValue="item-1" className="w-full space-y-2">
                                {[
                                    { id: "item-1", q: "Can the window be any shape?", a: "Yes, our digital die-cutting allows for precise shapes ranging from simple circles to custom silhouettes that match your branding." },
                                    { id: "item-2", q: "Do the windows make the box weaker?", a: "While any cutout reduces surface area, we compensate by recommending a higher-density cardstock and engineering the die-line to maintain core structural support." },
                                    { id: "item-3", q: "Is a clear film always necessary?", a: "Not necessarily. For products where scent or texture are key selling points, we can provide 'open' windows without film." },
                                    { id: "item-4", q: "What is the largest possible window size?", a: "Generally, we recommend leaving at least 0.75' to 1' of border material around the edges of the panel to ensure the box remains sturdy." },
                                    { id: "item-5", q: "Are window boxes still shipped flat?", a: "Yes, these boxes are designed to be shipped flat just like standard reverse tuck boxes, saving you significant shipping costs." },
                                ].map((faq) => (
                                    <AccordionItem key={faq.id} value={faq.id} className="border border-slate-200 rounded-lg bg-white overflow-hidden data-[state=open]:border-primary data-[state=open]:ring-1 data-[state=open]:ring-primary/20 data-[state=open]:bg-primary/5 transition-all duration-300">
                                        <AccordionTrigger className="px-5 py-3 hover:no-underline [&>svg]:hidden group">
                                            <span className="text-left font-semibold text-foreground text-base">{faq.q}</span>
                                            <div className="shrink-0 ml-4 p-1 rounded-full bg-slate-100 group-data-[state=open]:bg-primary group-data-[state=open]:text-white transition-colors duration-200">
                                                <Plus className="h-3 w-3 group-data-[state=open]:hidden" />
                                                <Minus className="h-3 w-3 hidden group-data-[state=open]:block" />
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent className="px-5 pb-5 pt-0 text-slate-600 leading-relaxed text-sm">{faq.a}</AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                        <div className="relative w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden">
                            <img src={FAQimage} alt="Custom Boxes FAQ" className="absolute inset-0 w-full h-full object-cover" />
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

export default ReverseTuckWithCustomizeWindow;
