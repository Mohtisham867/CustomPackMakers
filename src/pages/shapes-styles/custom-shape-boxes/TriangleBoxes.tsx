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
import { RelatedProductCustomShapeBoxes } from "@/components/RelatedProductCustomShapeBoxes";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";

import heroImg from "@/assets/custom-shape-boxes/triangle-boxes.webp";
import FAQimage from "@/assets/FAQ-image.png";
import placeholderImage from "@/assets/custom-shape-boxes/placeholder.webp";

// We extract 'overviewTitle' to ensure no white screen crash.
const overviewTitle = "Geometric Distinction: The Impact of Triangle Packaging";

const TriangleBoxes = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    const productImages = [
        { src: heroImg, alt: "Triangle Boxes - Main View" },
        { src: placeholderImage, alt: "Triangle Boxes - Side Angle" },
        { src: placeholderImage, alt: "Triangle Boxes - Open Box View" },
        { src: placeholderImage, alt: "Triangle Boxes - Detail Shot" },
        { src: placeholderImage, alt: "Triangle Boxes - Lifestyle Shot" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Triangle Boxes | Custom Triangular Packaging | CustomPackMakers</title>
                <meta name="description" content="Unique triangle boxes for distinctive product presentation. Perfect for gifts, cosmetics, and specialty retail. Custom sizes and finishes available." />
                <meta name="keywords" content="triangle boxes, custom triangular packaging, wholesale triangle boxes, unique shape gift boxes" />
                <meta property="og:title" content="Triangle Boxes | Distinctive Custom Packaging | CustomPackMakers" />
                <meta property="og:description" content="Step outside the square with our unique triangle boxes. Modern, structurally sound, and fully brandable. Get a free quote today!" />
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
                                    <Link to="/shapes-styles">Shapes & Styles</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link to="/shapes-styles/custom-shape-boxes">Custom Shape Boxes</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Triangle Boxes</BreadcrumbPage>
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
                                <span className="text-primary">Triangle</span> Boxes
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Step outside the standard square with our unique triangle boxes, offering a sharp, modern silhouette that ensures your brand is the most distinctive on the shelf.
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
                                    src={heroImg}
                                    alt="Triangle Boxes Hero"
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
                        {overviewTitle}
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>Our <strong className="text-foreground">triangle boxes</strong> are engineered for brands that dare to be different. The three-sided format provides a sharp, minimalist aesthetic that is both modern and intriguing. Whether you’re packaging a single slice of gourmet cake, a luxury jewelry piece, or a specialty cosmetic item, the triangle shape creates a dynamic focal point that naturally invites consumer curiosity and tactile engagement.</p>
                        <p>From die-cut windows to elegant ribbon closures, our <strong className="text-foreground">custom triangular gift packaging</strong> offers endless possibilities for creative branding. Available in various angles and depths, these boxes are as functional as they are visually striking, ensuring your products are the center of attention in any retail environment.</p>
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
                                        className={"relative w-full aspect-square overflow-hidden rounded-md border transition-all duration-200 " + (selectedImage === index ? 'border-primary shadow-md ring-2 ring-primary/20' : 'border-slate-200 hover:border-slate-300 hover:shadow-sm')}
                                    >
                                        <img
                                            src={image.src}
                                            alt={"Thumbnail " + (index + 1)}
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
                                                <Label htmlFor="length" className="text-xs font-semibold text-muted-foreground">Base (in)</Label>
                                                <Input id="length" type="number" placeholder="6" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">Height (in)</Label>
                                                <Input id="width" type="number" placeholder="6" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">Depth (in)</Label>
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
                                            onClick={(e) => e.preventDefault()}
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
                        Sharp Architecture: Why Custom Triangle Boxes are the Future of Retail Branding
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
                                The psychological power of geometry is nowhere more evident than in the triangle. Representing strength, direction, and innovation, the triangular form is a radical departure from the cuboid norm. Custom Triangle Boxes offer brands a unique opportunity to own a specific retail identity. In an environment saturated with right angles, the sharp apex of a triangle box is a natural magnet for the consumer's eye, signaling a product that is as unique as its container.
                            </p>
                            <p>
                                Beyond their visual impact, triangle boxes offer an exceptional unboxing experience. The way a triangular lid lifts or the sides unfold creates a sense of ceremony that cubical boxes cannot match. For brands in the luxury cosmetic, artisanal bakery, and boutique gift sectors, this architectural flair is a powerful tool for building emotional brand loyalty and encouraging social media shares.
                            </p>

                            <h3>Precision Engineering for Geometric Integrity</h3>
                            <p>
                                A triangle is only as beautiful as its points. If the corners don't meet perfectly or the sides bow, the entire minimalist aesthetic is lost. At CustomPackMakers, we utilize extreme precision in our die-cutting and scoring processes to ensure every triangle box is a masterpiece of geometric accuracy.
                            </p>
                            <ul>
                                <li><strong>High-GSM Rigid Board:</strong> We use dense, high-quality cardstock to ensure the triangular facets remain perfectly flat and the edges stay razor-sharp.</li>
                                <li><strong>Clean-Crease Technology:</strong> Our advanced scoring machinery ensures that the board folds without cracking, maintaining a pristine appearance even on dark or full-bleed printed edges.</li>
                                <li><strong>Structural Base Stability:</strong> We engineer the base of our triangle boxes to be perfectly level, ensuring they sit firmly on retail shelves without tipping.</li>
                                <li><strong>Optional Magnetic Closures:</strong> For luxury triangle gift boxes, we can integrate hidden magnets that provide a satisfying "click" when the lid meets the base.</li>
                            </ul>

                            <h3>Strategic Vertical Branding</h3>
                            <p>
                                The three facets of a triangle box offer a unique vertical branding opportunity. The panels taper towards the top, naturally drawing the viewer's gaze upwards. This makes the upper half of the box the prime location for your logo or most important brand message. The larger surface area at the base is perfect for detailed product information, ingredients, or lifestyle descriptors.
                            </p>
                            <p>
                                We recommend specific finishes to enhance this geometric drama:
                            </p>
                            <ul>
                                <li><strong>Edge-to-Edge Foiling:</strong> Applying metallic foil along the sharp corners of the triangle accentuates its unique shape and adds a touch of luxury.</li>
                                <li><strong>Spot UV on Tapered Accents:</strong> Highlight specific design elements on the triangular faces to create a sense of depth and tactile intrigue.</li>
                                <li><strong>Custom Ribbon Pulls:</strong> Adding a silk ribbon pull at the apex of the triangle box makes the opening process feel like a specialized event.</li>
                                <li><strong>Die-Cut Windows:</strong> A small, triangular window can provide a tantalizing view of the internal product while reinforcing the overall geometric theme.</li>
                            </ul>

                            <h3>Versatility in Retail Presentation</h3>
                            <p>
                                Triangle boxes are surprisingly versatile in a retail setting. While they look stunning individually, they can also be arranged in star or hexagonal patterns when grouped together. This modularity allows for creative end-cap displays that are far more engaging than traditional rows of boxes. Furthermore, triangle boxes are exceptionally space-efficient for specific product shapes, such as single-origin chocolate bars, specialized perfume bottles, or triangular gift favors.
                            </p>
                            <p>
                                To ensure your product remains secure, we design custom-fit triangular inserts. These can hold everything from a round bottle of essence to a delicate piece of jewelry, ensuring that the item remains centered and motionless regardless of the box's orientation.
                            </p>

                            <h3>Market Sustainability and Geometric Reuse</h3>
                            <p>
                                Our triangle boxes are crafted from 100% recyclable, responsibly sourced materials. Because they are so structurally interesting and aesthetically pleasing, they have a very high secondary life rate. Customers often reuse triangle boxes as decorative desktop storage or unique gift containers, keeping your brand's presence alive in their daily lives. By choosing a shape that people want to keep, you are engaging in the most effective form of sustainable branding.
                            </p>
                            <p>
                                At CustomPackMakers, we are dedicated to helping your brand shatter expectations. Let our engineering team guide you through the process of creating custom triangle boxes that define your product's excellence.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* RELATED PRODUCTS CAROUSEL */}
            <RelatedProductCustomShapeBoxes />

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
                                        Bold Minimalist Silhouette
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        The clean, sharp lines of the triangle shape provide an immediate sense of modern flair, making your products look more high-end and design-focused than those in standard rectangular packaging perfectly.
                                    </p>
                                </div>
                            </div>
                            <div className="w-full h-px bg-slate-100" />
                            {/* Feature 2 */}
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors duration-300">
                                        <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5z" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">
                                        Precision Die-Cut Accuracy
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        We utilize advanced die-cutting technology to ensure every triangular edge meets perfectly at the corners, resulting in a solid, structurally sound package that protects its precious content.
                                    </p>
                                </div>
                            </div>
                            <div className="w-full h-px bg-slate-100" />
                            {/* Feature 3 */}
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors duration-300">
                                        <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">
                                        Versatile Display Options
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Triangle boxes can be displayed upright on their base or stacked together to create larger geometric patterns, transforming your retail shelf into a visually stunning art installation.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img
                                    src={heroImg}
                                    alt="Premium Triangle Boxes Packaging"
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

            {/* DIFFERENTIATE YOUR BOXES SECTION */}
            <section className="py-10 lg:py-12 bg-white overflow-hidden relative">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="relative group">
                            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] border border-primary/20 shadow-2xl transform transition-transform duration-700 hover:scale-[1.02]">
                                <img
                                    src={heroImg}
                                    alt="Differentiate Your Triangle Boxes"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                            </div>
                            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-60" />
                            <div className="absolute -z-10 -top-8 -right-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl opacity-60" />
                        </div>
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                                Differentiate Your <span className="text-primary">Shape Boxes</span> From Others
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                To differentiate your brand, we offer specialized finishing touches that accentuate the unique angles of our triangle boxes. These include metallic foil stamping on the edges, soft-touch lamination for a premium feel, and custom-designed inserts that hold your products centrally within the three-sided space. These features turn our triangle boxes into a complete sensory experience that reinforces your brand’s commitment to innovation and bold, modern design.
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
                                    Everything you need to know about our custom triangular packaging.
                                </p>
                            </div>

                            <Accordion type="single" collapsible defaultValue="item-1" className="w-full space-y-2">
                                {[
                                    {
                                        id: "item-1",
                                        question: "How do the triangle boxes close?",
                                        answer: "We offer several closure styles, including tuck-end flaps, interlocking tabs, and even magnetic lids for a more premium unboxing experience."
                                    },
                                    {
                                        id: "item-2",
                                        question: "Can I get a custom size for my product?",
                                        answer: "Yes! We specialize in custom dimensions. We can adjust the height, base width, and depth of the triangle box to fit your specific product perfectly."
                                    },
                                    {
                                        id: "item-3",
                                        question: "Are triangle boxes shipped flat?",
                                        answer: "Yes, we ship almost all of our custom shape boxes flat to save on shipping costs and prevent damage. They are designed for easy assembly with clear fold lines."
                                    },
                                    {
                                        id: "item-4",
                                        question: "Can you print on all three sides?",
                                        answer: "Absolutely. Our full-color printing process allows for high-definition branding on all three external faces, as well as the top and bottom panels."
                                    },
                                    {
                                        id: "item-5",
                                        question: "What is the minimum order quantity for triangle boxes?",
                                        answer: "Our flexible MOQs typically start at 500 units, making these unique boxes accessible for specialized product launches and boutique brands."
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

                        <div className="relative w-full max-md:max-w-md mx-auto aspect-square rounded-2xl overflow-hidden ">
                            <img
                                src={FAQimage}
                                alt="Triangle Boxes FAQ"
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

export default TriangleBoxes;
