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
import mainFoundation from "@/assets/industry/cosmetic-boxes/Foundation Boxes.webp";

const FoundationBoxes = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    const productImages = [
        { src: mainFoundation, alt: "Custom Foundation Box - Elite Glass Display" },
        { src: mainFoundation, alt: "Custom Foundation Box - Leak-Proof View" },
        { src: mainFoundation, alt: "Custom Foundation Box - Matte Texture" },
        { src: mainFoundation, alt: "Custom Foundation Box - Metallic Detail" },
        { src: mainFoundation, alt: "Custom Foundation Box - Bulk Retail Set" },
    ];


    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Foundation Boxes | Professional Makeup Packaging Wholesale</title>
                <meta name="description" content="Order custom foundation boxes wholesale. Professional makeup packaging for liquid foundations featuring leak-proof engineering, glass bottle protection, and premium finishes." />
                <meta name="keywords" content="custom foundation boxes, foundation packaging, wholesale makeup boxes, luxury foundation packaging, professional cosmetic boxes" />
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
                                <BreadcrumbPage>Foundation Boxes</BreadcrumbPage>
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
                                <span className="text-primary">Custom</span> Foundation Boxes
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Protect your professional face-defining formulations with elite custom foundation boxes featuring leak-proof internal cradles and light-blocking materials that perfectly preserve your delicate pigments while delivering a world-class unboxing experience for every customer.
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
                                    src={mainFoundation}
                                    alt="Custom Foundation Boxes Hero"
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
                        Unwavering Security for Your Signature Liquid Coverage
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            Our <strong className="text-foreground">custom foundation boxes</strong> are designed for premium beauty brands that demand the highest standards of physical protection and photographic branding. Foundation bottles are heavy glass containers containing sensitive liquid pigments that are prone to both leakage and light-degradation. We utilize high-density, structural-grade paperboards and custom-engineered internal cradles that provide a secure seat, preventing bottle rattling and accidental impact breakage.
                        </p>
                        <p>
                            Visual impact is the primary driver of cosmetic authority. Our <strong className="text-foreground">foundation packaging</strong> features advanced finishing options, from modern matte lamination that conveys professional reliability to vibrant metallic foil highlights that signify luxury. Combined with our industrial-strength light-blocking materials, these professional details build immediate trust with makeup enthusiasts. Partner with us for results-oriented wholesale packaging that establishes your brand as a market leader in professional face cosmetics.
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
                                                <Input id="length" type="number" placeholder="1.5" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label>
                                                <Input id="width" type="number" placeholder="1.5" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">D (in)</Label>
                                                <Input id="depth" type="number" placeholder="4.5" className="h-9 bg-white" />
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
                        Mastering Coverage: The Definitive Guide to Professional Foundation Packaging
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

                            <p>In the expansive and high-fidelity world of professional face cosmetics, the foundation is the essential canvas for every transformative look. It is the product that promises an even skin tone, radiant glow, and the perfect base for artistic expression. However, because liquid foundations are typically housed in heavy glass bottles and contain sensitive pigments prone to oxidation and light-degradation, their packaging must do much more than just project a luxury image; it must serve as a high-performance protective shield. Custom foundation boxes are your brand's primary vehicle for delivering both aesthetic authority and technical reliability. At CustomPackMakers, we specialize in high-concept foundation packaging that ensures your coverage products dominate the retail market and arrive in perfect, active condition.</p>
                            <p>The technical requirements for foundation packaging are significant and multifaceted. Glass containers are susceptible to impact shattering, and the substantial weight of liquid formulas requires a box with exceptional structural integrity. Furthermore, many modern foundation formulas include volatile ingredients or broad-spectrum UV filters that can be compromised by light exposure. Our design philosophy focuses on "Total Product Preservation," where we utilize reinforced paperboards and specialized light-blocking internal coatings. This ensures your professional formulations remain protected from vibration, shock, and environmental degradation from your manufacture line to your customer's vanity, preserving the texture and shade fidelity of your pigments.</p>

                            <h3>Material Innovation for Professional Cosmetic Security</h3>
                            <p>To differentiate your brand and ensure product integrity, we offer a selection of specialized, structural-grade materials for your custom foundation boxes:</p>
                            <ul>
                                <li><strong>Heavy-Density SBS Cardstock:</strong> Our premium Solid Bleached Sulfate cardstock provide an ultra-smooth, clinical-grade surface that is perfect for high-fidelity printing and supports professional matte lamination perfectly.</li>
                                <li><strong>Corrugated Mailer Options:</strong> For subscription boxes or e-commerce delivery, we offer slim-profile corrugated boards that provide exceptional crush resistance while maintaining a premium aesthetic.</li>
                                <li><strong>Light-Blocking Paperboards:</strong> We can utilize substrates with internal UV-reflecting properties that provide an additional layer of protection for your light-sensitive coverage formulas.</li>
                                <li><strong>FSC-Certified Sustainable Stocks:</strong> We provide eco-friendly options that resonate deeply with conscious beauty consumers, allowing you to lead with sustainability without sacrificing professional quality.</li>
                            </ul>

                            <h3>Strategic Design Elements for Visual Authority</h3>
                            <p>To win on the crowded retail shelf or high-end makeup counter, your custom foundation boxes must include features that project an aura of expertise and luxury:</p>
                            <ul>
                                <li><strong>Precision-Fit Internal Inserts:</strong> We design custom-cut board inserts that lock the foundation bottle in place, preventing movement and ensuring the glass does not encounter the outer box during shipping.</li>
                                <li><strong>Clinical Matte & Soft-Touch Finishes:</strong> Using velvety non-reflective laminates conveys a sense of professional authority and modern luxury, resisting fingerprints and maintaining a pristine look.</li>
                                <li><strong>Sophisticated Foil Stamping:</strong> Adding gold, silver, or rose gold highlights to your brand logo or shade name creates a sensory experience that justifies premium pricing.</li>
                                <li><strong>Shade Identification Windows:</strong> We can incorporate custom-die-cut windows with high-clarity PET film that allow the bottle's pigment to serve as part of the overall packaging design.</li>
                            </ul>

                            <h3>The Science of Color Accuracy and Registration</h3>
                            <p>In the foundation market, shade consistency is the primary builder of consumer trust. Your packaging must accurately represent the undertones and depth of the coverage within. At CustomPackMakers, we utilize advanced color calibration and high-fidelity offset printing to ensure your brand's unique shades are reproduced with absolute precision. Whether you are launching a flagship range of 40 inclusive shades or a specialized treatment formula, we guarantee color consistency across every production run, establishing your brand as a reliable authority in professional face aesthetics.</p>

                            <h3>Scalable Wholesale for Growing Cosmetic Brands</h3>
                            <p>Whether you are a boutique artisan brand launching a single signature formula or a global powerhouse requiring monthly wholesale shipments of tens of thousands, we are built to support you. We offer low minimum order quantities (MOQs) which are perfect for testing seasonal releases or limited-edition collaborations. For established high-volume brands, our industrial production lines deliver massive capacity and exceptional cost efficiencies. Our industry-leading 8-10 day turnaround ensures your supply chain remains agile and responsive to the fast-moving trends of the beauty market.</p>

                            <h3>Environmental Leadership in Luxury Packaging</h3>
                            <p>Modern consumers make purchasing decisions based on a brand's environmental values. We help you lead the way with sustainable foundation packaging solutions. Our options include recycled materials, soy-based inks, and completely plastic-free constructions. By choosing eco-friendly custom foundation boxes, you demonstrate a modern leadership that resonates with today’s conscious buyers, building a deeper brand connection and long-term customer loyalty. Let us guide you through selecting materials that are as responsible to the planet as they are beautiful for your brand.</p>
                            <p>Ultimately, a custom foundation box is an investment in your brand's reputation for professional excellence. It is the messenger of your brand's quality and the protector of your most technical pigments. Let us help you create packaging that is as precise and powerful as the coverage your products offer. Our experts are ready to assist with every technical detail of your design. Contact us today for a custom quote and begin your journey toward retail dominance.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* RELATED PRODUCTS CAROUSEL */}
            <RelatedProductCosmetic />

            {/* WHY CHOOSE US SECTION */}
            <WhyBrandsChooseCosmetic productName="Foundation Box" productImage={mainFoundation} />

            {/* DIFFERENTIATE YOUR BRAND SECTION */}
            <section className="py-10 lg:py-12 bg-white overflow-hidden relative">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* LEFT: Image */}
                        <div className="relative group">
                            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] border border-primary/20 shadow-2xl transform transition-transform duration-700 hover:scale-[1.02]">
                                <img src={mainFoundation} alt="Differentiate Your Foundation Brand" className="w-full h-full object-cover" />
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
                                Differentiate Your <span className="text-primary">Coverage</span> From Others
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                Our bespoke custom foundation boxes are performance-oriented packaging solutions designed to differentiate your coverage formulas in a crowded beauty market. By integrating reinforced structural paperboards and impact-dampening internal trays, we ensure that every bottle remains stationary and protected from accidental leakage or environmental degradation during transit. From modern matte finishes that convey professional authority to vibrant metallic foil accents that catch the light, our packaging is fully customizable. Partner with us for results-oriented wholesale packaging that establishes your brand as a market leader.
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
                                <h2 className="text-2xl md:text-3xl font-bold text-foreground">Foundation Packaging FAQs</h2>
                                <p className="text-base text-muted-foreground">Expert guide for your professional face makeup line.</p>
                            </div>
                            <Accordion type="single" collapsible defaultValue="item-1" className="w-full space-y-2">
                                {[
                                    { id: "item-1", question: "How do you ensure heavy glass bottles don't break during shipping?", answer: "We use high-density structural-grade paperboards and custom-engineered internal inserts that lock every bottle in place, providing absolute vibration and impact protection." },
                                    { id: "item-2", question: "Do you offer light-blocking materials for sensitive coverage formulas?", answer: "Yes, we utilize specialized UV-reflecting coatings and dark-core substrates that provide a consistent protective environment for light-sensitive foundation pigments." },
                                    { id: "item-3", question: "What is the best finish for a professional clinical makeup look?", answer: "A velvety soft-touch matte lamination combined with clinical-grade typography and silver foil highlights is highly recommended for projecting an authoritative professional image." },
                                    { id: "item-4", question: "Are your boxes resistant to liquid foundation spills or leakage?", answer: "Our paperboards are available with high-quality oil and moisture-resistant aqueous coatings that prevent structural softening and staining if a minor leak occurs." },
                                    { id: "item-5", question: "Do you offer eco-friendly packaging for foundation brands?", answer: "Absolutely. Providing FSC-certified materials, soy-based inks, and completely plastic-free paperboard constructions is our specialty for environmentally responsible beauty brands." }
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
                            <img src={FAQimage} alt="Foundation Box FAQ" className="absolute inset-0 w-full h-full object-cover" />
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

export default FoundationBoxes;
