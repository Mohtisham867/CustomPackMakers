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
import FAQimage from "@/assets/FAQ-image.webp";
import mainMascara from "@/assets/cosmetic-boxes/Mascara Boxes.webp";

const MascaraBoxes = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    const productImages = [
        { src: mainMascara, alt: "Custom Mascara Box - Professional Display" },
        { src: mainMascara, alt: "Custom Mascara Box - Secure Fit View" },
        { src: mainMascara, alt: "Custom Mascara Box - Matte Finish" },
        { src: mainMascara, alt: "Custom Mascara Box - Metallic Detail" },
        { src: mainMascara, alt: "Custom Mascara Box - Bulk Retail View" },
    ];


    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Mascara Boxes | Professional Eye Makeup Packaging Wholesale</title>
                <meta name="description" content="Order custom mascara boxes wholesale. Secure eye makeup packaging for delicate wands featuring smudge-proof printing, medical-grade materials, and premium finishes. Fast turnaround." />
                <meta name="keywords" content="custom mascara boxes, mascara packaging, wholesale eye makeup boxes, luxury mascara packaging, professional cosmetic boxes" />
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
                                <BreadcrumbPage>Mascara Boxes</BreadcrumbPage>
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
                                <span className="text-primary">Custom</span> Mascara Boxes
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Protect your professional eye-defining formulations with sleek custom mascara boxes engineered to provide a secure fit for delicate wands while delivering a high-impact retail presence that reflects your brand's commitment to quality.
                            </p>
                            <div className="pt-2">
                                <Button
                                    size="lg"
                                    className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                                    onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}
                                >
                                    Get custom quote
                                </Button>
                            </div>
                        </div>

                        {/* RIGHT: Large Product Image - Compact */}
                        <div className="lg:col-span-5 relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-muted group">
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200">
                                <img
                                    src={mainMascara}
                                    alt="Custom Mascara Boxes Hero"
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
                        Unwavering Precision for Defining Eye Aesthetics
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            Our <strong className="text-foreground">custom mascara boxes</strong> are designed for beauty brands that demand the highest standards of precision and protection. Mascara wands are delicate instruments, and their formulations are sensitive to environmental factors. We utilize high-density, smudge-proof paperboards that provide a secure fit, ensuring your applicators remain perfectly intact and contamination-free throughout the entire supply chain.
                        </p>
                        <p>
                            To win on the retail shelf, your <strong className="text-foreground">mascara packaging</strong> must project an aura of professional expertise. We offer advanced finishing options from high-gloss lamination to elegant silver foil highlights. These professional details, combined with our commitment to medical-grade material safety, build immediate trust with makeup artists and discerning collectors. Partner with us to scale your professional beauty line with packaging that never compromises on quality.
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
                                                <Input id="length" type="number" placeholder="0.8" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label>
                                                <Input id="width" type="number" placeholder="0.8" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">D (in)</Label>
                                                <Input id="depth" type="number" placeholder="5" className="h-9 bg-white" />
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
                        Defining Visual Authority: The Ultimate Guide to Mascara Packaging
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

                            <p>In the highly competitive world of professional eye cosmetics, the mascara wand is a tool of precision and power. It is the product that completes every makeup look, promising length, volume, and intensity. However, because eye products are used on one of the most sensitive areas of the body, the packaging must do more than just attract attention; it must communicate safety, purity, and clinical expertise. Custom mascara boxes are your brand's primary vehicle for building this trust. In an industry where consumers are increasingly educated about ingredients and application techniques, your packaging must represent the highest standards of design and material safety. At CustomPackMakers, we specialize in sleek, performance-oriented packaging that ensures your mascara line stands out for its quality and authority.</p>
                            <p>The engineering challenges of mascara packaging are unique. The bottles are typically slender and relatively heavy for their size, requiring a box that maintains its structural integrity without being overly bulky. Furthermore, mascara formulations are often sensitive to light and temperature, necessitating packaging that provides a consistent protective environment. Our design philosophy focuses on "Precision Protection," where we utilize high-density paperboards and specialized internal dimensions to create a snug, secure fit for every tube. This ensures your products remain stationary and protected from the moment they are manufactured until they are opened by a customer, preserving the delicate wand and formula within.</p>

                            <h3>Material Integrity for Eye Cosmetic Safety</h3>
                            <p>To differentiate your brand and ensure product safety, we offer a selection of medical and cosmetic-grade materials for your custom mascara boxes:</p>
                            <ul>
                                <li><strong>High-Density SBS Cardstock:</strong> Our premium Solid Bleached Sulfate cardstock provides an ultra-smooth, bright white canvas that highlights your brand colors and supports clinical-grade typography perfectly.</li>
                                <li><strong>Smudge-Proof Aqueous Coatings:</strong> We apply specialized clear coatings that resist fingerprints and moisture, ensuring your packaging remains reflects the professional quality of your brand even after frequent retail handling.</li>
                                <li><strong>Rigid Box Construction:</strong> For luxury eye-care lines, rigid board options offer a high-end weight and professional aesthetic that signals premium quality and formulation expertise.</li>
                                <li><strong>Eco-Friendly Wood Pulp:</strong> We provide FSC-certified materials for brands that prioritize environmental responsibility without compromising on the professional look of their packaging.</li>
                            </ul>

                            <h3>Strategic Design Elements for Shelf Performance</h3>
                            <p>To gain a competitive edge in retail environments like Sephora or department stores, your custom mascara boxes must include features that engage the consumer's senses and build trust:</p>
                            <ul>
                                <li><strong>Sleek Slim-Profile Engineering:</strong> We design our boxes to match the elegant silhouette of the mascara wand, creating a modern and professional "authoritative" look that appeals to makeup artists.</li>
                                <li><strong>High-Fidelity Printing:</strong> We utilize advanced CMYK and Pantone color reproduction to ensure your brand's unique shades and photographic lash swatches are vibrant and true to life.</li>
                                <li><strong>Metallic Foil and Spot UV:</strong> Using silver or gold foiling to highlight your brand logo or specific lengthening claims adds a layer of luxury and sophistication that immediately catch the light.</li>
                                <li><strong>Security Seals & Perforations:</strong> Our boxes can include tamper-evident features that provide consumers with peace of mind regarding the product's purity and safety for home use.</li>
                            </ul>

                            <h3>Consistent Branding Across Your Beauty Line</h3>
                            <p>A professional brand identity requires consistency across all product categories. We ensure that your custom mascara boxes utilize the same high-quality materials and color calibration as the rest of your cosmetic line. This creates a cohesive "Brand Block" on retail shelves, making your products instantly recognizable and encouraging loyal customers to explore more of your collection. Whether you prefer a minimalist clinical look or a bold artistic aesthetic, our manufacturing processes deliver perfect registration and quality for every production run.</p>

                            <h3>Scalability for Modern Makeup Empires</h3>
                            <p>Whether you are a viral TikTok-launched brand needing a small batch for a flagship launch or a global powerhouse requiring monthly wholesale shipments of tens of thousands, we are built to support you. We offer low minimum order quantities (MOQs) which are perfect for testing new formulas or seasonal releases. For high-volume wholesale accounts, our production lines deliver massive capacity and exceptional cost-efficiency. Our industry-leading 8-10 day turnaround ensures your supply chain remains lean and responsive to the fast-moving trends of the beauty market.</p>

                            <h3>Sustainability in Eye Makeup Packaging</h3>
                            <p>Modern consumers make purchasing decisions based on environmental values. We help your brand meet this demand with sustainable eye-care packaging solutions. Our options include recycled cardstock, soy-based inks, and completely plastic-free internal fittings. By choosing eco-friendly custom mascara boxes, you demonstrate a modern leadership that resonates with today’s conscious collectors, building deeper brand trust and long-term customer loyalty. Let us guide you through selecting materials that are as responsible as they are beautiful.</p>
                            <p>Ultimately, a custom mascara box is an investment in your brand's authority as a leader in eye aesthetics. It is the messenger of your formulation's quality and the protector of your most technical products. Let us help you create packaging that is as precise and powerful as the results your mascara offers. Our experts are ready to assist with every technical detail of your design. Contact us today for a custom quote and begin your journey toward retail dominance.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* RELATED PRODUCTS CAROUSEL */}
            <RelatedProductCosmetic />

            {/* WHY CHOOSE US SECTION */}
            <WhyBrandsChooseCosmetic productName="Mascara Box" productImage={mainMascara} />

            {/* DIFFERENTIATE YOUR BRAND SECTION */}
            <section className="py-10 lg:py-12 bg-white overflow-hidden relative">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* LEFT: Image */}
                        <div className="relative group">
                            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] border border-primary/20 shadow-2xl transform transition-transform duration-700 hover:scale-[1.02]">
                                <img src={mainMascara} alt="Differentiate Your Mascara Brand" className="w-full h-full object-cover" />
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
                                Our bespoke custom mascara boxes are performance-oriented packaging solutions designed to differentiate your lengthening formulas in a crowded makeup market. By integrating reinforced structural sleeves and smudge-proof printing, we ensure that every wand remains secure and perfectly represented. From clinical matte finishes that convey professional expertise to vibrant metallic accents that command attention on retail shelves, our packaging is fully customizable. Partner with us for results-oriented wholesale packaging that scales with your growing beauty empire while maintaining the highest quality standards.
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
                                <h2 className="text-2xl md:text-3xl font-bold text-foreground">Mascara Packaging FAQs</h2>
                                <p className="text-base text-muted-foreground">Professional answers for your eye makeup branding.</p>
                            </div>
                            <Accordion type="single" collapsible defaultValue="item-1" className="w-full space-y-2">
                                {[
                                    { id: "item-1", question: "How do you protect delicate mascara wands during shipping?", answer: "We use precision-fit structural sleeves that create a snug internal environment, preventing the tube from shifting and ensuring the wand and cap remains securely in place." },
                                    { id: "item-2", question: "Are the boxes resistant to smudges and fingerprints?", answer: "Yes, we apply specialized smudge-proof aqueous coatings that maintain a pristine, professional appearance even after frequent handling in high-traffic retail environments." },
                                    { id: "item-3", question: "Can the boxes include security seals for product safety?", answer: "Absolutely. We can incorporate custom perforated seals or specialized adhesive closures that provide consumers with absolute peace of mind regarding product purity." },
                                    { id: "item-4", question: "What finishes achieve a professional medical makeup look?", answer: "A soft-touch matte lamination combined with clinical-grade typography and subtle silver foil accents is highly effective for projecting an authoritative professional image." },
                                    { id: "item-5", question: "Do you offer eco-friendly materials for mascara brands?", answer: "Yes, we provide FSC-certified materials, soy-based inks, and completely recyclable cardstock options that align with modern environmental standards for beauty brands." }
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
                            <img src={FAQimage} alt="Mascara Box FAQ" className="absolute inset-0 w-full h-full object-cover" />
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

export default MascaraBoxes;
