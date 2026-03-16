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
import { RelatedProductStationery } from "@/components/RelatedProductStationery";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";

// Product Image
import packagingInsertsHero from "@/assets/stationery-boxes/packaging-inserts/img-hero.png";
import packagingInserts1 from "@/assets/stationery-boxes/packaging-inserts/img-1.png";
import packagingInserts2 from "@/assets/stationery-boxes/packaging-inserts/img-2.png";
import packagingInserts3 from "@/assets/stationery-boxes/packaging-inserts/img-3.png";
import packagingInserts4 from "@/assets/stationery-boxes/packaging-inserts/img-4.png";
import packagingInserts5 from "@/assets/stationery-boxes/packaging-inserts/img-5.png";
import packagingInserts6 from "@/assets/stationery-boxes/packaging-inserts/img-whychoose.png";
import packagingInserts7 from "@/assets/stationery-boxes/packaging-inserts/img-different.png";

// FAQ Image
import FAQimage from "@/assets/FAQ-image.png";

const PackagingInserts = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    const productImages = [
        { src: packagingInserts1, alt: "Custom Packaging Inserts - Main View" },
        { src: packagingInserts2, alt: "Custom Packaging Inserts - Angle View" },
        { src: packagingInserts3, alt: "Custom Packaging Inserts - Fitment Detail" },
        { src: packagingInserts4, alt: "Custom Packaging Inserts - Material Quality" },
        { src: packagingInserts5, alt: "Custom Packaging Inserts - Presentation Setting" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Packaging Inserts | Product Fitments | CustomPackMakers</title>
                <meta name="description" content="Order custom packaging inserts wholesale. Precision die-cut cardboard and foam fitments tailored specifically to protect and organize your valuable stationery items safely." />
                <meta name="keywords" content="custom packaging inserts, product fitments, foam box inserts, custom cardboard dividers, stationery box inserts" />
                <meta property="og:title" content="Custom Packaging Inserts | Product Fitments | CustomPackMakers" />
                <meta property="og:description" content="Premium custom packaging inserts for stationery brands. Precision die-cut, sturdy materials, flawless organization. Get a free quote." />
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
                                    <Link to="/categories/stationery-boxes">Stationery Boxes</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Packaging Inserts</BreadcrumbPage>
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
                                <span className="text-primary">Custom</span> Packaging Inserts
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Protect and organize your valuable stationery products utilizing our precise custom packaging inserts. Meticulously engineered from sturdy corrugated board or elegant foam materials, these tailored structural fitments guarantee absolute product security during rigorous shipping.
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
                                    src={packagingInsertsHero}
                                    alt="Custom Packaging Inserts Hero"
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
                        Precision Engineered Protective Fitments for Premium Products
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            Our <strong className="text-foreground">custom packaging inserts</strong> are meticulously engineered for leading stationery brands, exclusive gift manufacturers, and premium e-commerce retailers who demand absolute structural protection perfectly harmonized with breathtaking unboxing aesthetics. Manufactured using flawlessly die-cut corrugated board, incredibly dense EVA foam, or exquisitely molded pulp materials, these tailored internal structures completely immobilize delicate writing instruments preventing devastating transit damage absolutely. Whether securing a solitary luxury fountain pen beautifully or flawlessly organizing an extensive multi-component calligraphy set entirely, our <strong className="text-foreground">custom protective fitments</strong> guarantee your products miraculously arrive exactly how originally intended perfectly.
                        </p>
                        <p>
                            From remarkably brilliant cardboard grid dividers neatly separating massive colored pencil collections to incredibly intricate contoured foam cavities rigorously cradling delicate glass ink bottles, our <strong className="text-foreground">wholesale box inserts</strong> exquisitely address every demanding stabilization requirement. Each premium order effectively integrates flawlessly measured negative spaces intentionally preventing unsightly product shifting, exceptionally precise thumb notches wonderfully enabling effortless product removal, and gorgeously printed material facings. Elevate your premium enclosed merchandise seamlessly utilizing stunning soft-touch velvet flocking, beautifully natural rustic corrugated textures, or incredibly vibrant branded printed board covers flawlessly guaranteeing your <strong className="text-foreground">bespoke interior packaging</strong> dramatically enhances unboxing excitement instantly.
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
                                                <Input id="length" type="number" placeholder="8" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label>
                                                <Input id="width" type="number" placeholder="6" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">D (in)</Label>
                                                <Input id="depth" type="number" placeholder="2" className="h-9 bg-white" />
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
                        The Strategic Importance of Precision Fitment Formatting
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
                                In the highly competitive, intensely visual landscape of premium retail merchandise, the internal packaging absolutely must match external beauty while guaranteeing rigorous structural performance. The interior configuration fundamentally functions significantly further than merely filling empty space—it actively dictates the critical unboxing sequence, exponentially reduces devastating shipping returns, and continually reinforcing unparalleled corporate quality standards. To successfully capture exceptional consumer delight instantly during their initial brand interaction, the physical insert must execute flawless stabilization gracefully. Custom packaging inserts thoughtfully serve as these vital, highly functional tools, definitively establishing perceived brand luxury immediately surrounding your meticulously crafted products.
                            </p>
                            <p>
                                Our custom internal fitments are intentionally engineered carefully optimizing this incredibly vital presentation impact. Every single precisely calculated dimension, right from the remarkably resilient, shock-absorbing foam cores effectively shielding heavy crystal inkwells to the astoundingly delicate cardboard retaining tabs elegantly securing slender golden pens, is expertly manufactured specifically to maximize immense visual engagement perfectly. Making an intelligent calculated investment
                                in high-grade premium protective formats invariably ensures you flawlessly execute spectacular retail unboxings that seamlessly transform standard stationery supplies into wildly coveted, massively respected luxurious gifts instantly.
                            </p>

                            <h3>Unmatched Protective Material Selection Quality</h3>
                            <p>
                                A profoundly effective interior packaging solution is fundamentally defined by its remarkably resilient, highly dependable shock-dispersing foundation. We systematically provide an expertly curated selection of premium structural grade
                                materials intentionally matched perfectly with specific product weights, guaranteeing remarkable transit protection and exceptional display longevity:
                            </p>
                            <ul>
                                <li><strong>Pre-Engineered Dense Corrugated Board:</strong> Our flawlessly strong, incredibly robust multi-flute cardboard strictly guarantees perfectly rigid structural defense preventing dangerous crushing damages entirely, ideal for weighty, expansive organizational boxes entirely.</li>
                                <li><strong>High-Density EVA & PE Foam:</strong> Delivering an exceptionally luxurious, completely impact-resistant enclosure precisely contouring around highly irregular shapes, these incredibly supple foam blocks promise an undeniably premium tactile unboxing experience.</li>
                                <li><strong>Eco-Friendly Molded Paper Pulp:</strong> For environmentally conscious brands requiring superb 3D structural protection, our wonderfully sustainable molded pulp cavities provide gorgeous organic textures whilst actively replacing harmful plastics efficiently and responsibly.</li>
                            </ul>

                            <h3>Custom Display & Functional Detailing</h3>
                            <p>
                                True retail differentiation heavily relies on executing flawless, highly specific physical interaction details perfectly. We proudly offer incredibly precise custom dimensional cuts that elegantly transform standard inserts into highly engaging functional stages:
                            </p>
                            <ul>
                                <li><strong>Precision Die-Cut Finger Notches:</strong> Tastefully integrate wonderfully ergonomic, incredibly precise semi-circular access grooves exactly beside firmly seated items, simultaneously enabling consumers to effortlessly extract tight-fitting products without destroying box integrity.</li>
                                <li><strong>Multi-Tiered Stacking Trays:</strong> Strategically insert remarkably precise, perfectly measured interlocking horizontal tray systems completely within a sturdy outer box—providing an undeniably brilliant, incredibly spatial presentation of massive multi-component sets securely.</li>
                                <li><strong>Vibrant Full-Color CMYK Facings:</strong> Brilliantly execute insanely sharp, flawlessly color-matched high-resolution graphics carefully laminated over internal board covers powerfully utilizing previously wasted negative space to beautifully communicate vital brand messaging thoroughly.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* RELATED PRODUCTS CAROUSEL */}
            <RelatedProductStationery />

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
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">
                                        Uncompromising Quality
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Our custom packaging inserts are deliberately engineered utilizing remarkably dense corrugated board or impact-resistant foam materials. We guarantee your delicate stationery instruments remain perfectly secure and completely undamaged during aggressively demanding transit conditions.
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
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">
                                        Tailored Functionality
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        We create flawlessly measured custom cavities that perfectly contour exactly your specific pens, notebooks, and accessories. These meticulously tailored organizational elements ensure incredibly satisfying unboxing experiences while preventing frustrating internal product shifting completely.
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
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">
                                        Sleek Elegant Finishes
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Enhance your unboxing presentation utilizing sophisticated finishes including luxurious soft-touch velvet laminations over foam or crisp branded printing on paperboard. We deliver unforgettable protective inserts perfectly elevating your perceived corporate value instantly.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img
                                    src={packagingInserts6}
                                    alt="Premium Custom Packaging Inserts Packaging"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-7">
                                    <p className="text-white font-bold text-lg leading-snug mb-1">
                                        Trusted by 500+ Brands
                                    </p>
                                    <p className="text-white/75 text-sm">Delivering premium protective fitments across North America</p>
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


            {/* DIFFERENTIATE YOUR BRAND SECTION */}
            <section className="py-10 lg:py-12 bg-white overflow-hidden relative">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="relative group">
                            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] border border-primary/20 shadow-2xl transform transition-transform duration-700 hover:scale-[1.02]">
                                <img
                                    src={packagingInserts7}
                                    alt="Differentiate Your Protective Packaging"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                            </div>

                            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-60" />
                            <div className="absolute -z-10 -top-8 -right-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl opacity-60" />
                        </div>

                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                                Differentiate Your <span className="text-primary">Corporate Presentations</span> From Others
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                At CustomPackMakers, we intimately understand that your internal packaging architecture acts forcefully as your brand's most critical tactile demonstration regarding uncompromising structural mastery. To definitively ensure your spectacular gift sets completely dominate prestigious corporate environments gracefully, we strictly deploy breathtakingly precise industrial die-cutting equipment flawlessly paired perfectly with insanely dense shock-absorbing shock materials. Our exceedingly talented packaging engineers systematically innovate incredibly intricate multi-level foam cavities entirely preventing devastating glass shattering, exceptionally robust corrugated interlocking dividers definitively organizing heavy ceramic mugs, and exceedingly satisfying friction-fit tolerances strictly calibrated perfectly for incredibly dramatic reveal unboxings. By flawlessly embedding these invisible functional superpowers effortlessly communicating pure structural dominance, we practically guarantee breathtaking customer loyalty instantly.
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
                                        question: "What distinct types of packaging insert materials do you manufacture?",
                                        answer: "We primarily utilize exceptionally robust premium corrugated board for cost-effective rigidity, luxurious high-density EVA foam for premium shock absorption, and completely biodegradable molded paper pulp for highly conscious eco-friendly brands securely."
                                    },
                                    {
                                        id: "item-2",
                                        question: "Can I order precisely contoured foam cavities for irregular items?",
                                        answer: "Yes, we comprehensively manufacture entirely bespoke internal cavities perfectly matching your incredibly specific asymmetrical product silhouettes flawlessly. These highly tailored foam structures lock odd shapes completely immobile preventing disastrous cosmetic transit scuffing entirely."
                                    },
                                    {
                                        id: "item-3",
                                        question: "Are there discounts available for massive bulk wholesale insert orders?",
                                        answer: "Absolutely. We provide incredibly aggressive wholesale pricing specifically scaled for immense continuous production runs, thoroughly ensuring you obtain magnificently protective structural fitments while effectively slashing your ongoing commercial supply chain expenditure considerably."
                                    },
                                    {
                                        id: "item-4",
                                        question: "Do you offer elegant velvet flocking over your foam inserts?",
                                        answer: "Yes, we perfectly execute highly luxurious soft-touch velvet or velour flocking precisely applied over dense EVA foam. This brilliantly ensures immensely premium unboxing experiences flawlessly imitating high-end jewelry casing presentations instantly effortlessly."
                                    },
                                    {
                                        id: "item-5",
                                        question: "Can you print beautifully vibrant custom graphics directly onto cardboard inserts?",
                                        answer: "Yes, we exclusively leverage advanced offset lithography technology prominently applied onto flat-facing cardboard inserts powerfully guaranteeing insanely vivid branding artwork flawlessly transforming previously wasted internal negative space into immensely communicative branding touchpoints."
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
                                alt="Custom Packaging Inserts FAQ"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <BrandRating />
            <QuoteForm />
            <Footer />
        </div >
    );
};

export default PackagingInserts;
