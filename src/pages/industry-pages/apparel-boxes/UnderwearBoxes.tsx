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
import { RelatedProductApparel } from "@/components/RelatedProductApparel";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";
import { ApparelSEOContent as SEOContent } from "@/components/ApparelSEOContent";

// Placeholder images
import underwearBoxeshero from "@/assets/industry/apparel-boxes/underwear-boxes/img-hero.webp";
import underwearBoxes1 from "@/assets/industry/apparel-boxes/underwear-boxes/img-1.webp";
import underwearBoxes2 from "@/assets/industry/apparel-boxes/underwear-boxes/img-2.webp";
import underwearBoxes3 from "@/assets/industry/apparel-boxes/underwear-boxes/img-3.webp";
import underwearBoxes4 from "@/assets/industry/apparel-boxes/underwear-boxes/img-4.webp";
import underwearBoxes5 from "@/assets/industry/apparel-boxes/underwear-boxes/img-5.webp";
import underwearBoxes6 from "@/assets/industry/apparel-boxes/underwear-boxes/img-whychoose.webp";
import underwearBoxes7 from "@/assets/industry/apparel-boxes/underwear-boxes/img-defferent.webp";

// FAQ image
import FAQimage from "@/assets/FAQ-image.webp";

const UnderwearBoxes = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    // Placeholder gallery images
    const productImages = [
        { src: underwearBoxes1, alt: "Custom Underwear Boxes - Main View" },
        { src: underwearBoxes2, alt: "Custom Underwear Boxes - Side Angle" },
        { src: underwearBoxes3, alt: "Custom Underwear Boxes - Open View" },
        { src: underwearBoxes4, alt: "Custom Underwear Boxes - Detail Shot" },
        { src: underwearBoxes5, alt: "Custom Underwear Boxes - Lifestyle" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Underwear Boxes | Premium Intimate Packaging | CustomPackMakers</title>
                <meta name="description" content="Wholesale custom underwear boxes designed for comfort and style. Premium packaging for boxers, briefs, and panties with custom inserts and high-quality printing." />
                <meta name="keywords" content="custom underwear boxes, intimate packaging, boxer boxes, brief packaging, wholesale underwear boxes" />
                <meta property="og:title" content="Custom Underwear Boxes | Premium Intimate Packaging | CustomPackMakers" />
                <meta property="og:description" content="Elevate your intimate apparel brand with custom underwear boxes. Soft-touch finishes, secure closures, and eco-friendly options available." />
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
                                    <Link to="/categories/apparel-boxes">Apparel Boxes</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Underwear Boxes</BreadcrumbPage>
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
                                <span className="text-primary">Custom</span> Underwear Boxes
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Wholesale custom branded underwear packaging engineered for comfort, style, and premium retail presentation built to scale with your intimate apparel brand.
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
                                    src={underwearBoxeshero}
                                    alt="Custom Underwear Boxes Hero"
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
                        Custom Underwear Packaging for Brands That Value Comfort and Style
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            Our <strong className="text-foreground">custom underwear boxes</strong> are designed to mirror the comfort and quality of the products they hold. Whether you are packaging premium boxers, briefs, or multi-packs, our boxes offer a sleek and hygienic solution that preserves fabric integrity. Constructed from high-quality cardstock or eco-friendly kraft, our <strong className="text-foreground">custom branded underwear packaging</strong> ensures your brand looks professional on potential customers' shelves.
                        </p>
                        <p>
                            We offer a variety of styles, including tuck-end boxes, sleeve boxes, and rigid setup boxes. Each can be customized with die-cut windows to display color and fabric texture without opening the package. With options for matte or gloss finishes, spot UV, and embossing, your <strong className="text-foreground">wholesale underwear boxes</strong> will stand out in a crowded market. Order today with low minimums and fast turnaround times.
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

                        {/* RIGHT SIDE: Sticky Quote Form */}
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
                                                <Input id="width" type="number" placeholder="4" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">D (in)</Label>
                                                <Input id="depth" type="number" placeholder="1.5" className="h-9 bg-white" />
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
            <SEOContent>
                <h2>Premium Custom Underwear Packaging for Style and Comfort</h2>
                <p>
                    In the highly competitive underwear market, your packaging is a key differentiator. It communicates hygiene, quality, and style before the customer even touches the product. <strong>Custom underwear boxes</strong> are essential for building a recognizable brand, whether you are selling daily essentials, athletic wear, or luxury intimates. A well-designed box not only protects the garment but also justifies the price point and encourages repeat purchases. CustomPackMakers specializes in creating packaging that fits your brand as perfectly as your products fit your customers.
                </p>
                <p>
                    Our <strong>wholesale custom underwear packaging</strong> is designed for versatility and scalability. From single-unit retail boxes to multi-pack subscription mailers, we provide solutions that are durable, attractive, and cost-effective.
                </p>

                <h3>Hygiene-First Materials and Construction</h3>
                <p>
                    Underwear packaging must ensure the product remains pristine. We prioritize materials that offer protection and a clean aesthetic:
                </p>
                <ul>
                    <li><strong>Virgin SBS Cardboard:</strong> The industry standard for retail. Its bright white surface offers excellent printability for vibrant graphics and conveys a sense of sterility and newness.</li>
                    <li><strong>Poly-Coated Board:</strong> For added protection, a thin poly coating can prevent moisture absorption and keep the box looking fresh on the shelf.</li>
                    <li><strong>Kraft Board:</strong> Ideal for eco-conscious brands. Unbleached kraft paper signals a natural, organic approach, perfect for sustainable cotton or bamboo underwear lines.</li>
                </ul>

                <h3>Functional and Attractive Structural Styles</h3>
                <p>
                    How your product is displayed matters. We offer various box styles to suit different retail environments:
                </p>
                <ul>
                    <li><strong>Tuck-Top Boxes with Windows:</strong> The classic retail choice. A clear PVC or PET window allows customers to see the color, pattern, and fabric texture without opening the box, reducing tampering.</li>
                    <li><strong>Sleeve and Tray Boxes:</strong> A premium option where a branded sleeve slides over a customized tray. This offers a unique unboxing experience and is excellent for gift sets.</li>
                    <li><strong>Pillow Boxes:</strong> A unique, curved shape that stands out. Great for single pairs of lightweight underwear, easy to assemble, and distinctive in appearance.</li>
                    <li><strong>Hanging Tab Boxes:</strong> Designed for retail pegs, these boxes include integrated or added hang tabs to maximize visibility in crowded store aisles.</li>
                </ul>

                <h3>Customization to Amplify Your Brand Voice</h3>
                <p>
                    Your brand personality should shine through every inch of the package:
                </p>
                <ul>
                    <li><strong>Vibrant Offset Printing:</strong> We use high-definition printing to ensure your brand colors are accurate and your photographic imagery is sharp.</li>
                    <li><strong>Matte or Gloss Lamination:</strong> Choose matte for a modern, sophisticated look or gloss for high-impact vibrancy that pops on the shelf.</li>
                    <li><strong>Spot UV & Embossing:</strong> Highlight your logo or key features with raised, glossy textures that catch the eye.</li>
                </ul>

                <h3>Why Partner with CustomPackMakers?</h3>
                <p>
                    We help you streamline your packaging supply chain with:
                </p>
                <ul>
                    <li><strong>Cost-Effective Wholesale Pricing:</strong> Enjoy significant savings on bulk orders, perfect for high-volume basics.</li>
                    <li><strong>Rapid Prototyping:</strong> We provide physical samples so you can test the fit and finish before committing to a full run.</li>
                    <li><strong>Eco-Friendly Options:</strong> We offer fully recyclable and biodegradable materials to help you meet your sustainability goals.</li>
                </ul>
            </SEOContent>

            {/* RELATED PRODUCTS CAROUSEL */}
            <RelatedProductApparel />

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
                                        Every <strong>custom underwear box</strong> we produce is built from premium cardstock selected for its brightness and printability. Our rigorous QC process ensures that colors are vibrant, text is crisp, and the box structure is flawless, ready for retail display.
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
                                        Tailored Perfection
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        No two brands are identical, and neither are our solutions. We engineer <strong>custom branded packaging</strong> to your exact SKU dimensions, whether for single briefs or 3-packs, with precision die-cutting and bespoke structural forms that maximize shelf appeal.
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
                                        Eco-Friendly Elegance
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Today's buyers expect sustainability without sacrificing style. Our FSC-certified, recyclable <strong>wholesale boxes</strong> deliver the same premium look and structural performance, while reducing your brand's environmental footprint.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img
                                    src={underwearBoxes6}
                                    alt="Premium Custom Underwear Box Packaging"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-7">
                                    <p className="text-white font-bold text-lg leading-snug mb-1">
                                        Trusted by 500+ Brands
                                    </p>
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

            {/* DIFFERENTIATE YOUR PRODUCTS SECTION */}
            <section className="py-10 lg:py-12 bg-white overflow-hidden relative">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="relative group">
                            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] border border-primary/20 shadow-2xl transform transition-transform duration-700 hover:scale-[1.02]">
                                <img
                                    src={underwearBoxes7}
                                    alt="Differentiate Your Underwear Brand"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                            </div>
                            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-60" />
                            <div className="absolute -z-10 -top-8 -right-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl opacity-60" />
                        </div>
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                                Differentiate Your <span className="text-primary">Underwear Brand</span> From Others
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                At CustomPackMakers, we know that success is in the details. To make your brand unforgettable, we create packaging that speaks to your customer's desire for quality and comfort. Our team works with you to design boxes that are not only functional but also visually stunning, using clean lines, bold graphics, and premium finishes to capture attention and build brand loyalty.
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
                                        question: "What types of underwear boxes do you offer?",
                                        answer: "We offer tuck-top boxes, sleeve boxes, pillow boxes, and rigid setup boxes, suitable for single units or multi-packs."
                                    },
                                    {
                                        id: "item-2",
                                        question: "Are the boxes safe for direct contact with fabric?",
                                        answer: "Yes, all our inks and coatings are non-toxic and safe, ensuring your garments remain pristine and hygienic."
                                    },
                                    {
                                        id: "item-3",
                                        question: "Can I get a window on the box?",
                                        answer: "Yes, we can add die-cut windows of any shape or size, with or without a clear PVC film, to display your product."
                                    },
                                    {
                                        id: "item-4",
                                        question: "Do you offer wholesale pricing?",
                                        answer: "Absolutely! We offer competitive wholesale pricing with tiered discounts for larger orders."
                                    },
                                    {
                                        id: "item-5",
                                        question: "Can I see a prototype before mass production?",
                                        answer: "Yes, we provide digital proofs and physical prototypes so you can approve the design and structure before we proceed with the full run."
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
                                alt="Custom Underwear Boxes FAQ"
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

export default UnderwearBoxes;
