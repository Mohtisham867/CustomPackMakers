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
import customShoeBoxes from "@/assets/apparel-boxes/custom-shoe-boxes.webp";
import shoeBox1 from "@/assets/apparel-boxes/shoe-boxes/shoe 1.jpg";
import shoeBox2 from "@/assets/apparel-boxes/shoe-boxes/shoe 2.jpg";
import shoeBox3 from "@/assets/apparel-boxes/shoe-boxes/shoe 3.jpg";
import shoeBox4 from "@/assets/apparel-boxes/shoe-boxes/shoe 4.webp";
import shoeBoxHero from "@/assets/apparel-boxes/shoe-boxes/shoe 5.jpg";

// FAQ image
import FAQimage from "@/assets/FAQ-image.png";

const SocksBoxes = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    // Placeholder gallery images
    const productImages = [
        { src: shoeBox1, alt: "Custom Socks Boxes - Flat Lay" },
        { src: shoeBox2, alt: "Custom Socks Boxes - Stacked" },
        { src: shoeBox3, alt: "Custom Socks Boxes - Open View" },
        { src: shoeBox4, alt: "Custom Socks Boxes - Detail" },
        { src: shoeBoxHero, alt: "Custom Socks Boxes - Lifestyle" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Socks Boxes | Printed Hosiery Packaging | CustomPackMakers</title>
                <meta name="description" content="Wholesale custom socks boxes for retail and subscription brands. Eye-catching packaging designed to showcase your socks with style and durability." />
                <meta name="keywords" content="custom socks boxes, hosiery packaging, socks packaging, wholesale socks boxes, apparel packaging" />
                <meta property="og:title" content="Custom Socks Boxes | Printed Hosiery Packaging | CustomPackMakers" />
                <meta property="og:description" content="Stand out with custom socks boxes. From retail hangers to subscription mailers, we create packaging that fits your brand perfectly." />
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
                                <BreadcrumbPage>Socks Boxes</BreadcrumbPage>
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
                                <span className="text-primary">Custom</span> Socks Boxes
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Wholesale custom branded socks packaging designed for retail impact, subscription services, and premium unboxing experiences built to scale with your hosiery brand.
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
                                    src={shoeBoxHero}
                                    alt="Custom Socks Boxes Hero"
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
                        Custom Socks Packaging for Brands That Step Up Their Game
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            In a world of fast fashion, socks have become a key accessory for self-expression. Our <strong className="text-foreground">custom socks boxes</strong> are designed to capture that spirit. Whether you sell fun, patterned socks or high-performance athletic wear, our packaging highlights the unique qualities of your product. Constructed from lightweight yet durable cardstock, our <strong className="text-foreground">custom hosiery packaging</strong> is perfect for both hanging retail displays and subscription box deliveries.
                        </p>
                        <p>
                            We offer a wide range of styles, including sleeve boxes, tuck-end boxes, and pillow boxes. Add a die-cut window to show off the pattern, or use a custom insert to keep multiple pairs organized. With vibrant full-color printing and premium finishes, your <strong className="text-foreground">wholesale socks boxes</strong> will turn heads and boost sales.
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
                                                <Input id="length" type="number" placeholder="8" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label>
                                                <Input id="width" type="number" placeholder="4" className="h-9 bg-white" />
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
            <SEOContent>
                <h2>Creative Custom Socks Boxes & Hosiery Packaging</h2>
                <p>
                    Socks have evolved from a basic necessity to a fashion statement, and their packaging must follow suit. <strong>Custom socks boxes</strong> are the perfect tool to capture attention, whether on a crowded retail rack or in a subscription box delivery. Innovative packaging can turn a small, low-cost item into a premium gift or a collector's piece. CustomPackMakers designs packaging that highlights the unique patterns, quality, and personality of your hosiery, ensuring your brand puts its best foot forward.
                </p>
                <p>
                    Our <strong>wholesale custom socks packaging</strong> solutions are diverse and adaptable. We cater to athletic brands, luxury hosiery labels, and fun novelty sock companies with packaging that is functional, protective, and visually striking.
                </p>

                <h3>Structural Designs for Every Retail Need</h3>
                <p>
                    Different sales channels require different packaging strategies. We have them all covered:
                </p>
                <ul>
                    <li><strong>Retail Hanging Boxes:</strong> Essential for in-store visibility. These boxes feature integrated die-cut hang tabs (Euro slots or round holes) that allow them to be displayed on pegs, maximizing face-out visibility.</li>
                    <li><strong>Sleeve / Belly Bands:</strong> A minimalist and eco-friendly option. A custom-printed sleeve wraps around the folded socks, holding them together while offering branding space and allowing the product's texture to be felt.</li>
                    <li><strong>Subscription Mailer Boxes:</strong> Designed to hold multiple pairs (e.g., "Sock of the Month"). Usually made from sturdy corrugated board, these mailers create an exciting unboxing experience for subscribers.</li>
                    <li><strong>Pillow Packs:</strong> A fun, curved shape that is perfect for gift-giving single pairs. They are cost-effective, easy to assemble, and unique.</li>
                </ul>

                <h3>Materials to Match Your Brand Ethos</h3>
                <p>
                    We offer a range of materials to suit your specific aesthetic and protection needs:
                </p>
                <ul>
                    <li><strong>Kraft Cardstock:</strong> The go-to for sustainable, organic, or rugged outdoor brands. It has a natural look and feel and is completely biodegradable.</li>
                    <li><strong>SBS C1S/C2S Board:</strong> Premium white cardstock that offers the best surface for vibrant, high-resolution printing. Ideal for colorful, pattern-heavy sock brands.</li>
                    <li><strong>Rigid Gift Boxes:</strong> For luxury sets (e.g., merino wool or silk socks). These boxes offer a permanent storage solution and justify a higher price point.</li>
                </ul>

                <h3>Customization Features That Sell</h3>
                <p>
                    Enhance your packaging with functional and aesthetic details:
                </p>
                <ul>
                    <li><strong>Window Patching:</strong> A clear window allow customers to see the specific pattern or colorway without opening the box, reducing return rates and handling damage.</li>
                    <li><strong>Foil Stamping:</strong> Add a touch of class with metallic foil logos, perfect for formal or business sock lines.</li>
                    <li><strong>Custom Inserts:</strong> Keep multi-packs organized and tidy with cardstock dividers or inserts that prevent socks from shifting during transit.</li>
                </ul>

                <h3>Why Choose CustomPackMakers?</h3>
                <p>
                    We are committed to quality and efficiency. When you partner with us, you get:
                </p>
                <ul>
                    <li><strong>Flexible Quantities:</strong> Order as few as 100 boxes to test new designs or thousands for mass retail distribution.</li>
                    <li><strong>Expert Engineering:</strong> We ensure your hang tabs function correctly and your boxes are sized perfectly to minimize shipping waste.</li>
                    <li><strong>Competitive Pricing:</strong> Our wholesale rates ensure you maintain healthy margins on your products.</li>
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
                                        Every <strong>custom socks box</strong> we produce is crafted from premium materials that ensure varying degrees of rigidity and flexibility. Our rigorous QC process guarantees that every fold, cut, and print meets the high standards your brand demands.
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
                                        Socks come in all shapes and sizes, and so should their packaging. We engineer <strong>custom branded packaging</strong> to fit your specific product count and style, with bespoke structural designs like hanger boxes or drawer boxes that enhance the unboxing experience.
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
                                        Sustainability is more than a trend; it's a necessity. Our FSC-certified, recyclable <strong>wholesale boxes</strong> provide a conscious packaging choice that appeals to modern consumers without compromising on quality or aesthetics.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img
                                    src={customShoeBoxes}
                                    alt="Premium Custom Socks Box Packaging"
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
                                    src={shoeBoxHero}
                                    alt="Differentiate Your Socks Brand"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                            </div>
                            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-60" />
                            <div className="absolute -z-10 -top-8 -right-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl opacity-60" />
                        </div>
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                                Differentiate Your <span className="text-primary">Socks Brand</span> From Others
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                At CustomPackMakers, we understand that distinct packaging is key to standing out in the hosiery market. To help your brand shine, we offer innovative structural designs and high-quality printing. Whether you need a sleek slider box or a retail-ready hanger box, our team collaborates with you to create packaging that not only protects your product but also showcases its personality and quality.
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
                                        question: "What styles of socks boxes do you carry?",
                                        answer: "We offer sleeve boxes, tuck-end boxes, pillow boxes, and rigid two-piece boxes for gift sets."
                                    },
                                    {
                                        id: "item-2",
                                        question: "Can you add a hanger tab for retail display?",
                                        answer: "Yes, we can integrate die-cut hanger tabs into the box design so they are ready for retail pegs."
                                    },
                                    {
                                        id: "item-3",
                                        question: "Do you offer window patching?",
                                        answer: "Yes, we can include clear windows to showcase the design and quality of the socks inside the packaging."
                                    },
                                    {
                                        id: "item-4",
                                        question: "What is the turnaround time for custom orders?",
                                        answer: "Our standard turnaround time is 8-10 business days after final design approval."
                                    },
                                    {
                                        id: "item-5",
                                        question: "Can I get a custom insert for multi-packs?",
                                        answer: "Absolutely. We design custom inserts to hold multiple pairs of socks securely and neatly within the box."
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
                                alt="Custom Socks Boxes FAQ"
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

export default SocksBoxes;
