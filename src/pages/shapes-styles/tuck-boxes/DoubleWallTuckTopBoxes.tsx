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

import heroImg from "@/assets/tuck-boxes/double-wall-tuck-top-boxes.webp";
import FAQimage from "@/assets/FAQ-image.webp";

const DoubleWallTuckTopBoxes = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    const productImages = [
        { src: heroImg, alt: "Double Wall Tuck Top Box - Main View" },
        { src: heroImg, alt: "Double Wall Tuck Top Box - Side Angle" },
        { src: heroImg, alt: "Double Wall Tuck Top Box - Open View" },
        { src: heroImg, alt: "Double Wall Tuck Top Box - Detail Shot" },
        { src: heroImg, alt: "Double Wall Tuck Top Box - Lifestyle Shot" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Double Wall Tuck Top Boxes | Reinforced Custom Packaging | CustomPackMakers</title>
                <meta name="description" content="Order wholesale double wall tuck top boxes with reinforced side walls for heavy-duty protection. Perfect for premium retail kits and heavy products. 750+ word guide." />
                <meta name="keywords" content="double wall tuck top boxes, reinforced tuck top boxes, heavy duty shipping boxes, custom retail kits, reinforced packaging" />
                <meta property="og:title" content="Double Wall Tuck Top Boxes | Strength & Style" />
                <meta property="og:description" content="Reinforced double-wall construction meets the classic tuck top design for superior product safety and a premium retail feel." />
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
                                <BreadcrumbPage>Double Wall Tuck Top Boxes</BreadcrumbPage>
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
                                <span className="text-primary">Double Wall</span> Tuck Top
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Engineering for extreme durability. This box features a classic top-tuck opening reinforced by double-layered side walls for superior column strength.
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
                                <img src={heroImg} alt="Double Wall Tuck Top Boxes Hero" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
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
                        Unrivaled Strength for Premium Heavy-Duty Retail
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            The <strong className="text-foreground">Double Wall Tuck Top Box</strong> is designed for products that demand both the convenience of a top-loading closure and the structural integrity of a reinforced shipping container. By doubling the thickness of the side walls during the assembly process, this box provides significantly higher stacking strength and side-impact protection compared to standard single-wall tuck tops.
                        </p>
                        <p>
                            This structural configuration is a staple for heavy cosmetics sets, premium hardware parts, ceramic gifts, and dense electronic kits. The reinforced walls ensure that your packaging retains its crisp geometric shape even when stacked high in warehouse pallets or subjected to the rigors of multi-leg courier transit.
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
                                                <Label htmlFor="dwtt-l" className="text-xs font-semibold text-muted-foreground">L (in)</Label>
                                                <Input id="dwtt-l" type="number" placeholder="10" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="dwtt-w" className="text-xs font-semibold text-muted-foreground">W (in)</Label>
                                                <Input id="dwtt-w" type="number" placeholder="6" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="dwtt-d" className="text-xs font-semibold text-muted-foreground">D (in)</Label>
                                                <Input id="dwtt-d" type="number" placeholder="4" className="h-9 bg-white" />
                                            </div>
                                        </div>
                                        <div className="space-y-1.5">
                                            <Label htmlFor="dwtt-quantity" className="text-xs font-semibold text-muted-foreground">Quantity</Label>
                                            <Input id="dwtt-quantity" type="number" placeholder="500" className="h-9 bg-white" />
                                        </div>
                                        <div className="space-y-1.5">
                                            <Label htmlFor="dwtt-name" className="text-xs font-semibold text-muted-foreground">Name</Label>
                                            <Input id="dwtt-name" type="text" placeholder="Your Name" className="h-9 bg-white" />
                                        </div>
                                        <div className="space-y-1.5">
                                            <Label htmlFor="dwtt-email" className="text-xs font-semibold text-muted-foreground">Email</Label>
                                            <Input id="dwtt-email" type="email" placeholder="email@example.com" className="h-9 bg-white" />
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
                        Reinforce Your Brand with Double Wall Tuck Top Engineering
                    </h2>
                    <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8
                            [&::-webkit-scrollbar]:w-2
                            [&::-webkit-scrollbar-track]:bg-gray-100
                            [&::-webkit-scrollbar-track]:rounded-full
                            [&::-webkit-scrollbar-thumb]:bg-primary
                            [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="[&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-8 [&>h3]:mb-3 [&>h3]:first:mt-0 [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-5 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-5 [&>ul]:space-y-2 [&>ul>li]:text-[15px] [&>ul>li]:text-slate-600">
                            <p>
                                Structural integrity is the foundation of a successful premium retail product. The <strong>Custom Double Wall Tuck Top Box</strong> is a sophisticated packaging solution designed specifically for items that require enhanced protection without moving into the realm of heavy corrugated mailers. By utilizing a double-walled side construction, this folding carton is capable of withstanding significant compression forces, ensuring your product remains cocooned in a rigid, safe environment throughout the supply chain. At CustomPackMakers, we refine this architecture to ensure every fold is crisp, every tab locks securely, and every square inch of the box serves as a high-fidelity marketing surface for your brand.
                            </p>
                            <p>
                                The "Double Wall" designation refers to the ingenious folding pattern where the side panels are doubled over and locked into the base, creating a two-ply thickness of premium cardstock. This adds tremendous column strength, making these boxes ideal for products that are frequently stacked high on retail pallets or shelves. When a consumer picks up a double-wall box, they immediately notice the weight and rigidity, which subconsciously communicates a message of value, quality, and extreme care. We utilize state-of-the-art precision die-cutting to ensure that these multi-layered folds remain uniform across your entire production run.
                            </p>

                            <h3>Why Double Wall Engineering is Essential for Modern B2B Retail</h3>
                            <p>
                                Brands that prioritize return-on-investment (ROI) understand that reducing product damage and returns is the fastest way to improve bottom-line performance. The double-wall tuck top configuration offers several distinct mechanical advantages that lower logistical risk:
                            </p>
                            <ul>
                                <li><strong>Superior Crush Resistance:</strong> The horizontal and vertical rigidity of the box is nearly doubled, protecting fragile internal components from external pressure during shipping.</li>
                                <li><strong>Tactility and Luxury Perception:</strong> The physical thickness of the walls gives the box a "rigid box" feel while maintaining the cost-efficiency of a folding carton.</li>
                                <li><strong>Dust and Tamper Resistance:</strong> The tight-fitting tuck-top closure, combined with the solid side walls, provides a superior barrier against environmental contaminants and casual tampering at the point of sale.</li>
                                <li><strong>Enhanced Finishing Options:</strong> The rigid structure allows for more aggressive debossing and complex foil stamping without risking the structural deformation of the panel.</li>
                            </ul>

                            <h3>Optimized Substrates and Luxury Finishes</h3>
                            <p>
                                We fabrication our double wall tuck top boxes from a selection of globally-sourced, FSC-certified paperboards designed for structural performance and print brilliance:
                            </p>
                            <ul>
                                <li><strong>SBS (Solid Bleached Sulfate):</strong> The gold standard for health, beauty, and tech packaging. Its bright white surface ensures that every brand color pops with photographic clarity.</li>
                                <li><strong>Uncoated Natural Kraft:</strong> Perfect for eco-conscious luxury brands that want to showcase sustainable fiber texture while maintaining high-end structural performance.</li>
                                <li><strong>Soft-Touch and Anti-Scuff Laminations:</strong> Protect your branding from fingerprints and shelf wear with high-durability coatings that improve the tactile unboxing ritual.</li>
                                <li><strong>UV Spot Gloss and Metallic Accents:</strong> Use high-contrast finishes to create focal points on your packaging, drawing the consumer's eye to your logo or key product features.</li>
                            </ul>

                            <h3>The CustomPackMakers Precision Advantage</h3>
                            <p>
                                Every Double Wall Tuck Top Box we produce undergoes a multi-stage quality control process. From the initial digital prepress—where we check your artwork for bleed and resolution—to the final automated folding and gluing, our team of structural engineers manages every detail. We understand the high stakes of retail launches, which is why we offer some of the industry's fastest production cycles, typically 8-10 business days for standard orders.
                            </p>
                            <p>
                                Our manufacturing facility is located in North America, allowing us to provide transparent, real-time communication and reduced shipping durations compared to overseas suppliers. Whether you are ordering a short-run test batch of 250 units or a full wholesale production of 100,000+ pieces, we treat every order with the same "zero-defect" philosophy. By choosing CustomPackMakers, you are investing in a packaging partner that understands that your box is more than just a container—it's the first physical representation of your brand's commitment to excellence. Let us help you design a reinforced packaging solution that dominates the retail landscape and protects your hard-earned reputation.
                            </p>
                            <p>
                                In conclusion, the Double Wall Tuck Top configuration is the ultimate choice for brands that refuse to choose between aesthetics and engineering. It is a modern, high-performance solution for a demanding global marketplace. Contact our team today for a custom dieline or a physical sample and feel the double-wall difference for yourself.
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
                                        Every <strong>double wall box</strong> we produce is built from rigid chipboard, premium SBS cardstock, and specialty textured stocks, materials selected for structural integrity and tactile luxury. Our rigorous QC process ensures each unit meets the durability standards your wholesale operation and retail partners demand, shipment after shipment. Your brand's reputation is supported by the physical quality of the box itself.
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
                                Differentiate Your <span className="text-primary">Reinforced</span> Boxes From Others
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
                                <p className="text-base text-muted-foreground">We're confident that you will love our products and service.</p>
                            </div>
                            <Accordion type="single" collapsible defaultValue="item-1" className="w-full space-y-2">
                                {[
                                    { id: "item-1", q: "What makes double wall different from standard tuck top?", a: "Standard tuck top boxes have single-layered side walls. Double wall versions involve a folding mechanism that creates a two-ply thickness on the side panels, significantly increasing stacking strength and crush resistance." },
                                    { id: "item-2", q: "Can I ship these boxes without an outer mailer?", a: "While double wall boxes are extremely strong, we generally recommend using an outer corrugated shipping box for courier transit to protect the high-quality print finish from scuffs and label adhesive." },
                                    { id: "item-3", q: "Is there a minimum order for reinforced boxes?", a: "Yes, our minimum order quantity for double wall tuck top boxes is 250 units due to the specialized die-cutting and setup required for the reinforced structure." },
                                    { id: "item-4", q: "What paper boards do you recommend for heavy items?", a: "For heavy retail items, we recommend 24pt SBS (Solid Bleached Sulfate) or high-density Kraft board combined with the double-wall structure for maximum weight support." },
                                    { id: "item-5", q: "Do these deliver flat or assembled?", a: "These boxes are shipped flat to save on shipping and storage costs. They are designed for quick and easy manual assembly without the need for glue or tape." },
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
                        <div className="relative w-full max-md:mx-auto aspect-square rounded-2xl overflow-hidden">
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

export default DoubleWallTuckTopBoxes;
