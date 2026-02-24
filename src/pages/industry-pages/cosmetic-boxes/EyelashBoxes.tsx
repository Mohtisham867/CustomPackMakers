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
import { RelatedProductCosmetic } from "@/components/RelatedProductCosmetic";
import { WhyBrandsChooseCosmetic } from "@/components/WhyBrandsChooseCosmetic";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";


// Image Imports
import FAQimage from "@/assets/FAQ-image.png";
import mainEyelash from "@/assets/cosmetic-boxes/Eyelash Boxes.webp";

const EyelashBoxes = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    const productImages = [
        { src: mainEyelash, alt: "Custom Eyelash Box - Luxury Front" },
        { src: mainEyelash, alt: "Custom Eyelash Box - Window Display" },
        { src: mainEyelash, alt: "Custom Eyelash Box - Internal Tray" },
        { src: mainEyelash, alt: "Custom Eyelash Box - Foil Logo" },
        { src: mainEyelash, alt: "Custom Eyelash Box - Bulk Retail" },
    ];


    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Eyelash Boxes | Luxury Lash Packaging Wholesale</title>
                <meta name="description" content="Order custom eyelash boxes wholesale. Luxury lash packaging with soft-touch trays, window displays, and premium foil finishes. Fast turnaround." />
                <meta name="keywords" content="custom eyelash boxes, eyelash packaging, wholesale lash boxes, luxury cosmetic packaging, professional makeup boxes" />
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
                                    <Link to="/industries/cosmetic-boxes">Cosmetic Boxes</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Eyelash Boxes</BreadcrumbPage>
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
                                <span className="text-primary">Custom</span> Eyelash Boxes
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Grace your beauty collection with elite custom eyelash boxes featuring elegant soft-touch trays and high-clarity windows that perfectly protect your delicate lashes while delivering a world-class unboxing experience for every glamorous customer.
                            </p>
                            <div className="pt-2">
                                <Button
                                    size="lg"
                                    className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                                    onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}
                                >
                                    Get luxury quote
                                </Button>
                            </div>
                        </div>

                        {/* RIGHT: Large Product Image - Compact */}
                        <div className="lg:col-span-5 relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-muted group">
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200">
                                <img
                                    src={mainEyelash}
                                    alt="Custom Eyelash Boxes Hero"
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
                        Unrivaled Elegance for Your Professional Eye Artistry
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            Our <strong className="text-foreground">custom eyelash boxes</strong> are designed for premium beauty brands that demand the highest standards of presentation and product security. Eyelashes are delicate instruments of fashion, and their packaging must offer uncompromising protection against crushing and environmental factors. We utilize lightweight, structural-grade paperboards and secure soft-touch internal trays that ensure your lashes remain stationary and in perfect shape.
                        </p>
                        <p>
                            Visual impact is the primary driver of accessory sales. Our <strong className="text-foreground">eyelash packaging</strong> features advanced finishing options, from modern matte lamination that conveys professional authority to vibrant holographic highlights that catch the light. These luxury details combined with our high-clarity window displays allow customers to immediately appreciate the quality of your lashes. Partner with us for results-oriented wholesale packaging that scales with your empire.
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
                            {/* Large Main Image - 4:3 aspect ratio, object-cover */}
                            <div className="relative w-full max-w-lg mx-auto overflow-hidden rounded-lg shadow-sm border border-border bg-white" style={{ aspectRatio: '4/3' }}>
                                <img
                                    src={productImages[selectedImage].src}
                                    alt={productImages[selectedImage].alt}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Thumbnail Row — 5 images, aligned to main image width */}
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

                        {/* RIGHT SIDE: Sticky Quote Form - Compact & Styled */}
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
                                                <Input id="length" type="number" placeholder="4" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label>
                                                <Input id="width" type="number" placeholder="2.5" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">D (in)</Label>
                                                <Input id="depth" type="number" placeholder="0.75" className="h-9 bg-white" />
                                            </div>
                                        </div>

                                        <div className="space-y-1.5">
                                            <Label htmlFor="quantity" className="text-xs font-semibold text-muted-foreground">Quantity</Label>
                                            <Input id="quantity" type="number" placeholder="1000" className="h-9 bg-white" />
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
                    {/* Heading outside the scrollable box */}
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">
                        Glamour and Guard: The Ultimate Guide to Luxury Eyelash Packaging
                    </h2>

                    {/* Scrollable content box */}
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

                            <p>In the fast-evolving world of glamorous eye cosmetics, eyelashes are the essential accessory that finishes every high-fashion look. They are products of intricate detail, promising length, volume, and instant drama. Consequently, custom eyelash boxes are your brand's most critical marketing asset. They must not only protect the delicate fibers and bands from crushing but also communicate the luxury and quality of your brand from the first glance. At CustomPackMakers, we specialize in high-concept eyelash packaging that ensures your products dominate the market and deliver an unforgettable unboxing experience.</p>
                            <p>The technical requirements for eyelash packaging are unique and demanding. Lashes are lightweight and highly susceptible to deformation if subjected to pressure. Furthermore, the adhesives and bands must be protected from environmental factors to ensure longevity and reuse. Our design philosophy focuses on "Precision Preservation," where we utilize secure soft-touch internal trays and reinforced external boxes to create a protective cocoon. This ensures that every pair of lashes maintains its curvature and fluffiness from your manufacturing line to your customer's vanity.</p>

                            <h3>Material Innovation for Premium Accessory Security</h3>
                            <p>To differentiate your lash line and ensure product integrity, we offer a selection of specialized materials for your custom eyelash boxes:</p>
                            <ul>
                                <li><strong>Solid Bleached Sulfate (SBS) Cardstock:</strong> Our premium SBS provides an ultra-smooth, bright white surface that allows for perfect color reproduction and supports complex finishes like holographic foiling or soft-touch matte lamination.</li>
                                <li><strong>Luxury Rigid Board Construction:</strong> For high-end boutique brands, rigid boxes offer a sturdy frame and professional weight that signals ultimate value and quality to the consumer.</li>
                                <li><strong>Magnetic Closure Systems:</strong> Incorporating high-strength magnets provides a secure, luxurious closing mechanism that ensures the box remains shut in a makeup bag while adding a premium tactile element.</li>
                                <li><strong>Soft-Touch Internal Trays:</strong> We offer custom-molded trays that cradle the lashes securely without damaging the delicate fibers, available in various colors to complement your branding.</li>
                            </ul>

                            <h3>Strategic Design Elements for Visual Impact</h3>
                            <p>To win the battle for attention on the retail shelf or social media, your custom eyelash boxes must include features that engage the senses immediately:</p>
                            <ul>
                                <li><strong>High-Clarity PET Windows:</strong> We can design custom-shaped windows that allow your customers to immediately appreciate the texture, length, and style of the lashes before purchase.</li>
                                <li><strong>Advanced Tactile Finishes:</strong> Using soft-touch matte lamination combined with silver or gold foil stamping adds a layer of sophistication that customers can feel as well as see.</li>
                                <li><strong>Holographic and Shimmer Effects:</strong> Adding shifting rainbow highlights creates a sense of trendy "must-have" glamour that appeals to younger demographics and professionals alike.</li>
                                <li><strong>Branded Sleeves:</strong> Incorporating an external sliding sleeve provides an additional layer of protection and a massive surface area for sophisticated brand storytelling.</li>
                            </ul>

                            <h3>Consistent Branding for Professional Reputation</h3>
                            <p>A professional brand identity requires consistency across all accessory categories. We ensure that your custom eyelash boxes utilize the same high-quality materials and color calibration as the rest of your cosmetic line. Whether you are launching a minimalist "natural" line or a bold "dramatic" collection, our manufacturing processes deliver perfect registration and quality for every production run. This creates a cohesive brand presence that encourages repeat purchases and builds lifelong loyalty.</p>

                            <h3>Scalability for Growing Beauty Empires</h3>
                            <p>Whether you are a boutique artisan brand or a global powerhouse requiring monthly wholesale shipments, our production lines are built to scale with your needs. We offer low minimum order quantities (MOQs) which are perfect for testing seasonal releases or limited-edition designer collaborations. For established high-volume brands, our industrial production lines deliver massive capacity and exceptional cost efficiencies. Our standard 8-10 day turnaround ensures your supply chain remains agile and responsive to the fast-moving trends of the beauty market.</p>

                            <h3>Environmental Leadership in Accessory Packaging</h3>
                            <p>Today’s beauty consumers prioritize brands that demonstrate environmental responsibility. We help you meet this demand with sustainable eyelash packaging solutions. Our options include FSC-certified materials, soy-based inks, and completely plastic-free constructions (including plastic-free internal trays). By choosing eco-friendly custom eyelash boxes, you communicate a modern leadership that resonates with conscious consumers, building a deeper brand connection and long-term loyalty. Let us help you select materials that are as responsible as they are beautiful.</p>
                            <p>Ultimately, a custom eyelash box is an investment in your brand's reputation for luxury and artistic precision. It is the messenger of your brand's creative vision and the protector of your delicate fibers. Let us help you create packaging that is as bold and reliable as the results your lashes offer. Our experts are ready to assist with every technical detail of your design. Contact us today for a custom quote and take the first step toward market dominance.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* RELATED PRODUCTS CAROUSEL */}
            <RelatedProductCosmetic />

            {/* WHY CHOOSE US SECTION */}
            <WhyBrandsChooseCosmetic productName="Eyelash Box" productImage={mainEyelash} />

            {/* DIFFERENTIATE YOUR BRAND SECTION */}
            <section className="py-10 lg:py-12 bg-white overflow-hidden relative">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* LEFT: Image */}
                        <div className="relative group">
                            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] border border-primary/20 shadow-2xl transform transition-transform duration-700 hover:scale-[1.02]">
                                <img src={mainEyelash} alt="Differentiate Your Eyelash Brand" className="w-full h-full object-cover" />
                                {/* Overlay for depth */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-60" />
                            <div className="absolute -z-10 -top-8 -right-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl opacity-60" />
                        </div>

                        {/* RIGHT: Content */}
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                                Differentiate Your <span className="text-primary">Lashes</span> From Others
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                Our high-fashion custom eyelash boxes are precisely engineered to differentiate your premium lashes in a competitive beauty landscape. By utilizing lightweight, structural-grade paperboards and secure soft-touch internal trays, we ensure that every delicate lash remains stationary and protected from environmental damage or crushing. From sophisticated matte laminates that convey modern authority to vibrant holographic highlights that catch the light, our packaging is fully customizable. Partner with us for results-oriented wholesale packaging that scales with your growing beauty empire.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ SECTION */}
            <section className="py-6 bg-slate-50">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                        {/* LEFT COLUMN: FAQs */}
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <h2 className="text-2xl md:text-3xl font-bold text-foreground">Eyelash Packaging FAQs</h2>
                                <p className="text-base text-muted-foreground">Expert insights for your premium lash brand.</p>
                            </div>
                            <Accordion type="single" collapsible defaultValue="item-1" className="w-full space-y-2">
                                {[
                                    { id: "item-1", question: "How do you protect the lash curvature during shipping?", answer: "We use custom-molded internal trays that cradle each lash securely, preventing movement and ensuring the band maintains its original curvature and fluffiness." },
                                    { id: "item-2", question: "Can I customize the shape and material of the lash tray?", answer: "Yes, we offer various tray designs in soft-touch plastic or eco-friendly paperboard, available in multiple colors and finishes to match your brand's aesthetic." },
                                    { id: "item-3", question: "What is the best closure for a high-end unboxing experience?", answer: "A magnetic closure system is highly recommended for luxury brands, providing a secure, satisfying 'click' and a premium feel that customers love." },
                                    { id: "item-4", question: "Do you offer window displays for lash styles?", answer: "Absolutely. We can incorporate high-clarity PET windows in any shape or size, allowing customers to appreciate the lash density and style before purchase." },
                                    { id: "item-5", question: "Are your materials sustainable for eco-conscious lash brands?", answer: "Yes, we provide FSC-certified paperboards, soy-based inks, and completely plastic-free packaging options that align with modern environmental values." }
                                ].map((faq) => (
                                    <AccordionItem key={faq.id} value={faq.id} className="border border-slate-200 rounded-lg bg-white overflow-hidden data-[state=open]:border-primary transition-all duration-300">
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

                        {/* RIGHT COLUMN: Image */}
                        <div className="relative w-full max-md:hidden max-w-md mx-auto aspect-square rounded-2xl overflow-hidden ">
                            <img src={FAQimage} alt="Eyelash Box FAQ" className="absolute inset-0 w-full h-full object-cover" />
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

export default EyelashBoxes;
