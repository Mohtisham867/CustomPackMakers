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
import clothingBoxehero from "@/assets/apparel-boxes/clothing-hang-tags/img-hero.webp";
import clothingBox1 from "@/assets/apparel-boxes/clothing-hang-tags/img-1.webp";
import clothingBox2 from "@/assets/apparel-boxes/clothing-hang-tags/img-2.webp";
import clothingBox3 from "@/assets/apparel-boxes/clothing-hang-tags/img-3.webp";
import clothingBox4 from "@/assets/apparel-boxes/clothing-hang-tags/img-4.webp";
import clothingBox5 from "@/assets/apparel-boxes/clothing-hang-tags/img-5.webp";
import clothingBox6 from "@/assets/apparel-boxes/clothing-hang-tags/img-whychoose.webp";
import clothingBox7 from "@/assets/apparel-boxes/clothing-hang-tags/img-defferent.webp";
// FAQ image
import FAQimage from "@/assets/FAQ-image.webp";

const ClothingHangTags = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    // Placeholder gallery images
    const productImages = [
        { src: clothingBox1, alt: "Custom Clothing Hang Tags - Flat Lay" },
        { src: clothingBox2, alt: "Custom Clothing Hang Tags - Stacked" },
        { src: clothingBox3, alt: "Custom Clothing Hang Tags - Detail" },
        { src: clothingBox4, alt: "Custom Clothing Hang Tags - Texture" },
        { src: clothingBox5, alt: "Custom Clothing Hang Tags - Lifestyle" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Clothing Hang Tags | Printed Apparel Tags | CustomPackMakers</title>
                <meta name="description" content="Wholesale custom clothing hang tags for fashion brands. Premium printed tags with custom shapes, strings, and finishes to elevate your apparel branding." />
                <meta name="keywords" content="custom clothing hang tags, apparel tags, printed hang tags, fashion labels, wholesale clothing tags" />
                <meta property="og:title" content="Custom Clothing Hang Tags | Printed Apparel Tags | CustomPackMakers" />
                <meta property="og:description" content="Complete your brand look with custom clothing hang tags. High-quality printing, custom shapes, and premium finishes available." />
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
                                <BreadcrumbPage>Clothing Hang Tags</BreadcrumbPage>
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
                                <span className="text-primary">Custom</span> Clothing Hang Tags
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Wholesale custom branded hang tags designed to convey quality, tell your brand story, and provide essential product information with premium style.
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
                                    src={clothingBoxehero}
                                    alt="Custom Clothing Hang Tags Hero"
                                    className="w-full h-full object-cover"
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
                        Custom Hang Tags That Add the Final Touch of Luxury
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            A hang tag is more than just a price tag; it's a powerful branding tool that communicates the value of your garment. Our <strong className="text-foreground">custom clothing hang tags</strong> are crafted to reflect the quality and style of your apparel line. Printed on premium cardstock with high-definition inks, our tags ensure your brand logo and details are sharp and vibrant.
                        </p>
                        <p>
                            We offer endless customization options, from unique die-cut shapes to luxury finishes like foil stamping, spot UV, and embossing. Choose from a variety of string materials including cotton, elastic, or ribbon to perfectly match your brand aesthetic. Order <strong className="text-foreground">wholesale hang tags</strong> today and give your clothing line the professional finish it deserves.
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
                                                <Input id="length" type="number" placeholder="3.5" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label>
                                                <Input id="width" type="number" placeholder="2" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">Qty</Label>
                                                <Input id="quantity" type="number" placeholder="1000" className="h-9 bg-white" />
                                            </div>
                                        </div>
                                        {/* Hidden depth input for consistency with other forms, though tags depend less on depth */}
                                        <input type="hidden" id="depth" value="0.01" />

                                        <div className="space-y-1.5">
                                            <Label htmlFor="material" className="text-xs font-semibold text-muted-foreground">String Material</Label>
                                            <Input id="material" type="text" placeholder="Black Cotton String" className="h-9 bg-white" />
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
                <h2>Custom Clothing Hang Tags That Tell Your Brand Story</h2>
                <p>
                    In the world of fashion, details matter. <strong>Custom clothing hang tags</strong> are often the first interaction a customer has with your brand's voice and pricing. They are not just functional items for displaying size and care instructions; they are powerful branding tools that convey quality, ethos, and style. A premium hang tag can elevate a simple t-shirt into a designer piece. CustomPackMakers creates tags that serve as the perfect finishing touch to your apparel
                    collection.
                </p>
                <p>
                    Whether you need a minimalist design for a modern boutique or a rugged, textured tag for an denim line, our <strong>wholesale custom hang tags</strong> are fully customizable to meet your vision. We offer a variety of shapes, materials, and finishes to ensure your tags are as unique as your clothing.
                </p>

                <h3>Premium Paper Stocks and Materials</h3>
                <p>
                    The feel of the tag sets the expectation for the garment. Choose from our wide selection of premium materials:
                </p>
                <ul>
                    <li><strong>Thick Uncoated Cardstock:</strong> Popular for its natural, organic feel and excellent writability. Ideal for brands that want a classic or vintage look.</li>
                    <li><strong>Silk Laminated Board:</strong> A smooth, matte finish that feels luxurious to the touch and offers water/tear resistance. Perfect for high-end fashion and swimwear.</li>
                    <li><strong>Kraft Paper:</strong> 100% recycled and recyclable. This brown, textured paper is the top choice for sustainable and eco-conscious fashion brands.</li>
                    <li><strong>Black or Colored Core:</strong> Add a subtle edge—literally. These stocks feature a colored core sandwiched between white layers, creating a stunning visual effect from the side.</li>
                </ul>

                <h3>Creative Shapes and Die-Cutting</h3>
                <p>
                    Don't be square. We can cut your tags into any shape:
                </p>
                <ul>
                    <li><strong>Custom Die-Cut Shapes:</strong> From circular tags to logos, hearts, or garment silhouettes, we can create a shape that mirrors your brand identity.</li>
                    <li><strong>Folded Tags:</strong> Maximize your space. Folded tags open up like a mini-booklet, giving you twice the room for your brand story, mission statement, or detailed care instructions.</li>
                    <li><strong>Rounded Corners:</strong> A simple touch that adds a modern, polished feel and prevents different corners from getting dog-eared.</li>
                </ul>

                <h3>Finishing Touches That Shine</h3>
                <p>
                    Add value with exquisite finishing options:
                </p>
                <ul>
                    <li><strong>Foil Stamping:</strong> Use gold, silver, copper, or holographic foil to make your logo catch the light and scream luxury.</li>
                    <li><strong>Spot UV:</strong> Apply a high-gloss coating to specific areas (like your logo) against a matte background for a sophisticated contrast.</li>
                    <li><strong>Embossing / Debossing:</strong> Create a 3D effect by raising or lowering your design into the paper for a tactile experience.</li>
                    <li><strong>Stringing Services:</strong> We offer pre-strung tags with cotton, elastic, jute, or ribbon, saving you time and ensuring a consistent look.</li>
                </ul>

                <h3>Why Choose CustomPackMakers?</h3>
                <p>
                    We act as your production partner, ensuring every tag is perfect:
                </p>
                <ul>
                    <li><strong>Color Accuracy:</strong> We use industry-standard color matching to ensure your brand colors are reproduced faithfully.</li>
                    <li><strong>Durability:</strong> Our tags are built to withstand retail handling without fraying or fading.</li>
                    <li><strong>Fast Turnaround:</strong> Get your tags in as little as 5-7 business days so you never miss a launch.</li>
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
                                        Every <strong>custom hang tag</strong> we produce is inspected for print clarity, color accuracy, and clean cutting. Our rigorous QC process ensures that your tags are perfect representations of your brand, free from imperfections.
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
                                        No two brands are the same, and your tags shouldn't be either. We cut <strong>custom branded tags</strong> to any shape you desire, from standard rectangles to custom logos, and finish them with hole punching and stringing services to save you time.
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
                                        We specialize in sustainable branding. Our FSC-certified, recyclable <strong>wholesale hang tags</strong> allow you to maintain a premium brand image while reducing your environmental footprint.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img
                                    src={clothingBox6}
                                    alt="Premium Custom Clothing Hang Tags"
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
                                    src={clothingBox7}
                                    alt="Differentiate Your Clothing Brand with Tags"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                            </div>
                            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-60" />
                            <div className="absolute -z-10 -top-8 -right-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl opacity-60" />
                        </div>
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                                Differentiate Your <span className="text-primary">Clothing Brand</span> With Custom Tags
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
At CustomPackMakers, we firmly believe that the smallest, most refined details often make the most significant impact on a brand's success. A meticulously well-designed hang tag instantly elevates the perceived value of your clothing, serving as a powerful mini-billboard for your brand identity. Our expert team works closely with you to select the perfect premium paper stock, luxury finish, and bespoke stringing options. Together, we create a sophisticated tag that perfectly complements your latest collection, effectively captivating your customers while reinforcing your commitment to superior quality                            </p>
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
                                        question: "What hole size do you punch?",
                                        answer: "Our standard hole punch size is 1/8 inch or 3mm, which works perfectly for most strings and pins. Custom sizes available on request."
                                    },
                                    {
                                        id: "item-2",
                                        question: "Do you supply strings or pins?",
                                        answer: "Yes, we offer a range of attachment options including cotton string, elastic, ribbon, and safety pins, which can be pre-attached or supplied separately."
                                    },
                                    {
                                        id: "item-3",
                                        question: "Can I get a custom shape?",
                                        answer: "Absolutely. We specialize in die-cut hang tags and can create any shape you can imagine to match your logo or design theme."
                                    },
                                    {
                                        id: "item-4",
                                        question: "What is the minimum order for hang tags?",
                                        answer: "Our minimum order starts at 500 units, offering a cost-effective solution for small brands and large retailers alike."
                                    },
                                    {
                                        id: "item-5",
                                        question: "Can you print double-sided?",
                                        answer: "Yes, we recommend double-sided printing to maximize space for branding on the front and product details or care instructions on the back."
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
                                alt="Custom Clothing Hang Tags FAQ"
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

export default ClothingHangTags;
