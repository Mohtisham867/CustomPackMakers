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
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";

// Product Images
import tinctureBoxeshero from "@/assets/industry/cannabis-packaging/tincture-boxes/img-hero.webp";
import tinctureBoxes1 from "@/assets/industry/cannabis-packaging/tincture-boxes/img-1.webp";
import tinctureBoxes2 from "@/assets/industry/cannabis-packaging/tincture-boxes/img-2.webp";
import tinctureBoxes3 from "@/assets/industry/cannabis-packaging/tincture-boxes/img-3.webp";
import tinctureBoxes4 from "@/assets/industry/cannabis-packaging/tincture-boxes/img-4.webp";
import tinctureBoxes5 from "@/assets/industry/cannabis-packaging/tincture-boxes/img-5.webp";
import tinctureBoxes6 from "@/assets/industry/cannabis-packaging/tincture-boxes/img-whychoose.webp";
import tinctureBoxes7 from "@/assets/industry/cannabis-packaging/tincture-boxes/img-different.webp";
import FAQimage from "@/assets/FAQ-image.webp";

// Carousel images
import vapePackaging from "@/assets/industry/cannabis-packaging/vape-packaging.webp";
import seedPackaging from "@/assets/industry/cannabis-packaging/seed-packaging.webp";
import cigaretteBoxes from "@/assets/industry/cannabis-packaging/Cannabis Cigarette Boxes.webp";
import mylarBags from "@/assets/industry/cannabis-packaging/mylar-bags.webp";
import flowerPackaging from "@/assets/industry/cannabis-packaging/flower-packaging.webp";
import cartridgePackaging from "@/assets/industry/marijuana-packaging/cartridge-packaging.webp";

const relatedProducts = [
    { name: "Cannabis Tincture Boxes", image: tinctureBoxes1, description: "Child-resistant tincture packaging with dropper-safe inserts and compliant regulatory labeling.", link: "/industries/cannabis-packaging/cannabis-tincture-boxes" },
    { name: "Cannabis Vape Packaging", image: vapePackaging, description: "Premium vape pen boxes with secure display features and high-impact retail brand visibility.", link: "/industries/cannabis-packaging/cannabis-vape-packaging" },
    { name: "Cannabis Seed Packaging", image: seedPackaging, description: "Moisture-proof seed containers with custom high-definition printing and detailed strain information.", link: "/industries/cannabis-packaging/cannabis-seed-packaging" },
    { name: "Cannabis Cigarette Boxes", image: cigaretteBoxes, description: "Pre-roll cigarette packaging with secure child-resistant closures and professional custom branding.", link: "/industries/cannabis-packaging/cannabis-cigarette-boxes" },
    { name: "Cannabis Mylar Bags", image: mylarBags, description: "Smell-proof mylar bags with custom graphics, resealable zippers, and high-barrier protection.", link: "/industries/cannabis-packaging/cannabis-mylar-bags" },
    { name: "Cannabis Flower Packaging", image: flowerPackaging, description: "Airtight flower containers designed to preserve freshness, aroma, and potency for premium experience.", link: "/industries/cannabis-packaging/cannabis-flower-packaging" },
    { name: "Cannabis Cartridge Packaging", image: cartridgePackaging, description: "Secure cartridge boxes with custom inserts for maximum protection and professional display.", link: "/industries/cannabis-packaging/cannabis-cartridge-packaging" },
];

const CannabisTinctureBoxes = () => {
    const [selectedImage, setSelectedImage] = useState(0);
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);

    const productImages = [
        { src: tinctureBoxes1, alt: "Custom Cannabis Tincture Box" },
        { src: tinctureBoxes2, alt: "Child-Resistant Tincture Packaging" },
        { src: tinctureBoxes3, alt: "Tincture Dropper Box - Open" },
        { src: tinctureBoxes4, alt: "Eco-Friendly Tincture Packaging" },
        { src: tinctureBoxes5, alt: "Branded Cannabis Tincture Box" },
    ];

    useEffect(() => {
        if (!api) return;
        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap());
        api.on("select", () => {
            setCurrent(api.selectedScrollSnap());
        });
    }, [api]);

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Cannabis Tincture Boxes | Child-Resistant Tincture Packaging | CustomPackMakers</title>
                <meta name="description" content="Premium custom cannabis tincture boxes with certified child-resistant closures, dropper-safe inserts, and compliant regulatory labeling for the legal cannabis market." />
                <meta name="keywords" content="cannabis tincture boxes, tincture packaging, child-resistant tincture boxes, CBD tincture packaging, custom dropper bottle boxes" />
                <meta property="og:title" content="Custom Cannabis Tincture Boxes | Child-Resistant Tincture Packaging | CustomPackMakers" />
                <meta property="og:description" content="Protect and brand your tincture products with compliant, child-resistant packaging designed for the legal cannabis market." />
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
                                <BreadcrumbLink asChild><Link to="/industries/cannabis-packaging">Cannabis Packaging</Link></BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Cannabis Tincture Boxes</BreadcrumbPage>
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
                                <span className="text-primary">Custom</span> Cannabis Tincture Boxes
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Protect your tincture products with certified child-resistant, compliant packaging that meets state regulations while delivering a premium brand experience at retail.
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
                                <img src={tinctureBoxeshero} alt="Custom Cannabis Tincture Boxes" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
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
                        Compliant Tincture Packaging for the Legal Cannabis Market
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            Cannabis tinctures are among the most sensitive products in the legal market—requiring dropper-safe inserts, certified child-resistant closures, and precise regulatory labeling. Our <strong className="text-foreground">custom cannabis tincture boxes</strong> are engineered from medical-grade SBS or rigid board stock, providing the structural strength to protect glass dropper bottles while maintaining an upscale retail presentation.
                        </p>
                        <p>
                            Beyond protection, your tincture packaging is a brand asset. With CMYK and Pantone printing, spot UV, foil stamping, and soft-touch lamination options, we help you stand out on dispensary shelves and communicate concentration, flavour profile, and compliance information with crystal clarity.
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
                                                <Input id="length" type="number" placeholder="4" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label>
                                                <Input id="width" type="number" placeholder="2" className="h-9 bg-white" />
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

            {/* SEO CONTENT SECTION */}
            <section className="py-8 bg-slate-50 border-t border-slate-100">
                <div className="container mx-auto px-[5vw]">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">
                        The Definitive Guide to Cannabis Tincture Packaging
                    </h2>
                    <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="[&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-slate-900 [&>h2]:mb-4 [&>h2]:mt-8 [&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-6 [&>h3]:mb-3 [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-4 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-4 [&>ul]:space-y-2 [&>ul>li]:text-[15px] [&>ul>li]:text-slate-600">
                            <h2>Precision Packaging for the Legal Tincture Market</h2>
                            <p>
                                Cannabis tinctures represent one of the fastest-growing product categories in the legal dispensary market. As sublingual administration becomes increasingly popular for its fast onset and precise dosing, brands must invest in <strong>custom cannabis tincture boxes</strong> that communicate professionalism, comply with multi-state regulations, and protect the delicate glass dropper bottles within. At CustomPackMakers, we engineer tincture packaging that meets every regulatory requirement while elevating your brand to premium status.
                            </p>
                            <p>
                                The legal cannabis market operates under strict packaging mandates across all jurisdictions. Child-resistant closures are non-negotiable, and labeling requirements—including THC/CBD content, government health warnings, batch numbers, and expiry dates—demand precise panel layout planning. Our design team works alongside compliance specialists to ensure your tincture box accommodates all required information without sacrificing visual appeal or brand identity.
                            </p>

                            <h3>Medical-Grade Materials for Shelf-Life Extension</h3>
                            <p>
                                Cannabis tinctures contain volatile compounds that can degrade when exposed to light, heat, and oxygen. While the primary container (typically an amber glass bottle) provides the first line of defense, the outer packaging adds a critical second barrier. We use medical-grade Solid Bleached Sulfate (SBS) board with UV-blocking lamination layers that significantly reduce light degradation of the product inside. This shelf-life extension benefit is a key selling point for brands targeting health-conscious consumers who demand fresh, potent products.
                            </p>
                            <ul>
                                <li><strong>SBS Board (16–24pt):</strong> Provides a premium, smooth printing surface while offering sufficient structural rigidity to protect glass bottles from impact during shipping and retail handling.</li>
                                <li><strong>UV-Blocking Lamination:</strong> Our matte or gloss lamination options incorporate UV inhibitors that protect light-sensitive cannabinoid formulations from photodegradation, extending shelf life on dispensary shelves.</li>
                                <li><strong>Moisture-Resistant Coatings:</strong> Alcohol-based tinctures can condense on inner packaging surfaces. Our moisture-barrier coatings prevent delamination and label damage in refrigerated or humid retail environments.</li>
                                <li><strong>Rigid Board Options:</strong> For premium tincture lines, we offer rigid two-piece box constructions with magnetic closures, providing an unboxing experience comparable to luxury skincare or spirits packaging.</li>
                            </ul>

                            <h3>Child-Resistant & Compliance-First Engineering</h3>
                            <p>
                                Every state with a legal cannabis program mandates child-resistant (CR) packaging for tinctures. Our tincture boxes are engineered to integrate CPSC-compliant CR closures seamlessly—whether push-and-turn caps, squeeze-and-lift mechanisms, or CR-certified tuck flaps on the box itself. We provide documentation packages for regulatory submissions, giving your compliance team the verification they need to move quickly through state approval processes.
                            </p>
                            <ul>
                                <li><strong>CR Tuck Flaps:</strong> Custom-engineered friction-lock and push-to-open tuck flaps that pass CPSC testing protocols without requiring separate CR caps on the bottle—reducing per-unit cost.</li>
                                <li><strong>Tamper-Evident Seals:</strong> Heat-shrink or breakable seal integration options for both the bottle neck and the outer box, providing dual-layer tamper evidence.</li>
                                <li><strong>Batch & QR Traceability:</strong> We print serialized QR codes and batch numbers inline during production, enabling real-time track-and-trace compliance with seed-to-sale software systems.</li>
                            </ul>

                            <h3>Premium Branding for the Legal Market</h3>
                            <p>
                                The legal cannabis market has matured significantly. Consumers now compare tincture brands the same way they compare skincare or nutraceutical products—evaluating design sophistication, ingredient transparency, and brand story. Dispensary buyers confirm that premium packaging directly influences shelf placement decisions. Our tincture boxes offer a full suite of premium finishing options designed to command attention.
                            </p>
                            <ul>
                                <li><strong>Spot UV & Soft-Touch Matte:</strong> Combine a velvety matte lamination base with high-gloss spot UV on logos and key design elements for a tactile luxury experience that stands out on busy dispensary shelves.</li>
                                <li><strong>Gold & Silver Foil Stamping:</strong> Hot foil or cold foil stamping on strain names, potency callouts, and brand logos creates a premium retail presence that justifies premium price points.</li>
                                <li><strong>Embossing & Debossing:</strong> Raised brand marks and debossed pattern textures add dimensional depth that communicates craftsmanship and attention to detail.</li>
                                <li><strong>CMYK + Pantone Printing:</strong> Achieve exact brand colour reproduction with dual-mode printing, ensuring your packaging is consistent across dispensary locations and online photography.</li>
                            </ul>

                            <h3>Dropper Insert Engineering</h3>
                            <p>
                                The most critical structural element of tincture packaging is the internal insert that holds the glass dropper bottle securely. A loose bottle in a box is a liability—broken glass leads to product loss, customer complaints, and potential regulatory issues. Our custom-engineered inserts use precision die-cut SBS board or paperboard foam to cradle each bottle size with a snug, friction-fit design.
                            </p>
                            <ul>
                                <li><strong>1oz / 30mL Standard:</strong> Our library of standard insert dies covers the most common tincture bottle sizes, reducing your tooling investment.</li>
                                <li><strong>Multi-Bottle Sets:</strong> For duo or trio tincture gift sets, we design compartmentalized inserts that allow retail display of multiple SKUs in a single outer box, increasing average transaction value.</li>
                                <li><strong>Foam Inlay Options:</strong> For ultra-premium lines, die-cut foam inlays (EVA or polyethylene) provide superior cushioning and a luxury unboxing reveal.</li>
                            </ul>

                            <h3>Why CustomPackMakers is Your Cannabis Tincture Packaging Partner</h3>
                            <p>
                                We have deep experience in regulated cannabis markets, understanding the unique intersection of compliance, branding, and efficiency that cannabis brands face. Our low MOQ (starting at 500 units) makes us the right partner for emerging dispensary brands, while our high-volume production capabilities support national-scale operations.
                            </p>
                            <ul>
                                <li><strong>Compliance Documentation:</strong> We provide full material safety data sheets and CR certification documentation to support your state regulatory submissions.</li>
                                <li><strong>Fast Turnaround:</strong> Production and delivery in 8–12 business days for standard runs, with rush options available for launch deadlines.</li>
                                <li><strong>Colour-Coded SKU Systems:</strong> We design colour-coding frameworks for multi-strain or multi-potency tincture lines, making it easy for budtenders to identify products quickly.</li>
                            </ul>
                            <p>
                                Invest in <strong>cannabis tincture packaging</strong> that protects your product, satisfies regulators, and wins consumers. Contact CustomPackMakers today for a complimentary structural design consultation.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* RELATED PRODUCTS CAROUSEL */}
            <section className="py-8 bg-accent/20">
                <div className="container mx-auto px-[5vw]">
                    <div className="mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            Related Cannabis Products
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-3xl">
                            Explore our complete range of premium cannabis packaging solutions designed to protect, comply, and impress.
                        </p>
                    </div>
                    <div className="relative px-4">
                        <Carousel
                            setApi={setApi}
                            opts={{ align: "start", loop: true }}
                            plugins={[Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })]}
                            className="w-full"
                        >
                            <CarouselContent className="-ml-4">
                                {relatedProducts.map((product, index) => (
                                    <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                                        <div className="h-full">
                                            <Link to={product.link} className="block h-full">
                                                <Card className="overflow-hidden border-border bg-card hover:shadow-xl transition-all duration-300 group cursor-pointer h-full">
                                                    <CardContent className="p-0 flex flex-col h-full">
                                                        <div className="h-48 lg:h-64 w-full bg-gray-50 overflow-hidden relative">
                                                            <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" loading="lazy" />
                                                        </div>
                                                        <div className="p-5 border-t border-border flex-grow flex flex-col">
                                                            <h3 className="font-semibold text-foreground text-base mb-2">{product.name}</h3>
                                                            <p className="text-sm text-muted-foreground line-clamp-2 mb-4 flex-grow">{product.description}</p>
                                                            <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors mt-auto">
                                                                View Product
                                                            </Button>
                                                        </div>
                                                    </CardContent>
                                                </Card>
                                            </Link>
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <div className="flex justify-center gap-2 mt-8 flex-wrap">
                                {Array.from({ length: count }).map((_, index) => (
                                    <button
                                        key={index}
                                        className={`h-2 rounded-full transition-all duration-300 ${index === current ? "w-8 bg-primary" : "w-2 bg-primary/20 hover:bg-primary/50"}`}
                                        onClick={() => api?.scrollTo(index)}
                                        aria-label={`Go to slide ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </Carousel>
                    </div>
                </div>
            </section>

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
                            We combine compliance expertise, material science, and brand design to deliver tincture packaging that wins at retail.
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
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Regulatory Compliance</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Our tincture boxes are engineered to meet CPSC child-resistant standards and state cannabis labeling laws. We provide full compliance documentation, including CR certification records and material safety data sheets, ensuring your brand passes regulatory audits without costly redesigns or delays.
                                    </p>
                                </div>
                            </div>
                            <div className="w-full h-px bg-slate-100" />
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors duration-300">
                                        <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Child-Resistant Features</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Every tincture box integrates CPSC-certified child-resistant mechanisms—push-and-turn closures, friction-lock tuck flaps, or squeeze-to-open tabs—tested to exceed federal safety thresholds. Dual-layer tamper-evident seals on both the outer box and dropper bottle add further protection for compliant retail distribution.
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
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">High-Barrier Protection</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Medical-grade SBS board with UV-blocking lamination shields tincture formulations from light degradation, extending shelf life. Moisture-resistant coatings prevent delamination in refrigerated dispensary environments, ensuring your product arrives at the consumer in full-potency, shelf-fresh condition.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img src={tinctureBoxes6} alt="Professional cannabis tincture packaging" className="w-full h-full object-cover" />
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
                                <img src={tinctureBoxes7} alt="Differentiate Your Tincture Brand" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                            </div>
                            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-60" />
                            <div className="absolute -z-10 -top-8 -right-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl opacity-60" />
                        </div>
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                                Differentiate Your <span className="text-primary">Tincture Brand</span> From Others
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                In a crowded dispensary, generic tincture packaging makes your product invisible. Premium custom boxes with precise compliance labeling, soft-touch finishes, and strategic colour-coding across potency levels turn first-time buyers into loyal brand advocates. Let your packaging tell your story.
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
                                    { id: "item-1", question: "Are your tincture boxes child-resistant certified?", answer: "Yes. Our tincture boxes integrate CPSC-certified child-resistant mechanisms and we provide full compliance documentation to support your state regulatory submissions." },
                                    { id: "item-2", question: "Can you accommodate different dropper bottle sizes?", answer: "Absolutely. We custom-engineer internal inserts for all standard tincture bottle sizes (15mL, 30mL, 60mL) and can create bespoke solutions for unique bottle forms." },
                                    { id: "item-3", question: "Do you offer UV-protective lamination to extend shelf life?", answer: "Yes. Our UV-blocking matte and gloss lamination options reduce light-induced cannabinoid degradation, directly extending the shelf life of your tincture formulations." },
                                    { id: "item-4", question: "What is the minimum order quantity?", answer: "We offer flexible MOQs starting at 500 units, making it easy for emerging cannabis brands to launch new product lines without excessive inventory risk." },
                                    { id: "item-5", question: "Can you print batch numbers and QR codes for compliance?", answer: "Yes. We print serialized QR codes, batch numbers, and regulatory text inline during production, fully compatible with seed-to-sale tracking platforms." }
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
                            <img src={FAQimage} alt="Cannabis Tincture Boxes FAQ" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
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

export default CannabisTinctureBoxes;
