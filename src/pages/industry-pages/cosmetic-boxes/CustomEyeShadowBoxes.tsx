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
import mainEyeShadow from "@/assets/cosmetic-boxes/Custom Eye Shadow Boxes.webp";

const CustomEyeShadowBoxes = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    const productImages = [
        { src: mainEyeShadow, alt: "Custom Eye Shadow Box - Elite Palette View" },
        { src: mainEyeShadow, alt: "Custom Eye Shadow Box - Window Display" },
        { src: mainEyeShadow, alt: "Custom Eye Shadow Box - Matte Finish Detail" },
        { src: mainEyeShadow, alt: "Custom Eye Shadow Box - Magnetic Closure" },
        { src: mainEyeShadow, alt: "Custom Eye Shadow Box - Bulk Display" },
    ];


    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Eye Shadow Boxes | Professional Palette Packaging Wholesale</title>
                <meta name="description" content="Order custom eye shadow boxes wholesale. Professional palette packaging with magnetic closures, window displays, and impact-dampening trays. Fast turnaround." />
                <meta name="keywords" content="custom eye shadow boxes, palette packaging, wholesale makeup boxes, luxury eye shadow packaging, professional cosmetic boxes" />
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
                                <BreadcrumbPage>Custom Eye Shadow Boxes</BreadcrumbPage>
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
                                <span className="text-primary">Custom</span> Eye Shadow Boxes
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Enhance your professional makeup palettes with sophisticated custom eye shadow boxes featuring high-clarity windows and magnetic closures that perfectly protect your delicate powders while delivering a world-class unboxing experience for beauty enthusiasts.
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
                                    src={mainEyeShadow}
                                    alt="Custom Eye Shadow Boxes Hero"
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
                        Unwavering Precision for Your Professional Palettes
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            Our <strong className="text-foreground">custom eye shadow boxes</strong> are the definitive choice for beauty brands that specialize in vibrant, high-pigment powders. Eye shadows are notoriously delicate and susceptible to crumbling or shattering if subjected to even minor impacts. We utilize reinforced, structural-grade paperboards and impact-dampening internal trays that provide a secure, cushioned seat for every pan in your palette.
                        </p>
                        <p>
                            To command attention in the competitive eye-care market, your <strong className="text-foreground">eye shadow packaging</strong> must reflect both artistic quality and professional reliability. We offer advanced finishing options, from modern matte lamination that conveys professional authority to sophisticated magnetic closures that provide a luxurious "click" upon closing. Partner with us to scale your professional makeup line with results-oriented wholesale packaging solutions.
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
                                                <Input id="width" type="number" placeholder="3" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">D (in)</Label>
                                                <Input id="depth" type="number" placeholder="0.5" className="h-9 bg-white" />
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
                        Artistic Authority: The Definitive Guide to Eye Shadow Palette Packaging
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

                            <p>In the expansive and visually driven world of professional makeup, the eye shadow palette is the ultimate expression of a brand's artistic vision. It is the product that translates trends into color stories, promising endless creative possibilities for makeup artists and beauty enthusiasts alike. However, because pressed powders are notoriously fragile, the packaging must do much more than just look beautiful; it must serve as a high-performance protective shield. Custom eye shadow boxes are your brand's primary vehicle for delivering both aesthetic brilliance and technical reliability. At CustomPackMakers, we specialize in high-concept eye-care packaging that ensures your palettes dominate the market and arrive in perfect, showroom-ready condition.</p>
                            <p>The engineering challenges of eye shadow packaging are significant. Pressed powders have different densities and binder ratios, making some more prone to "shattering" than others. Furthermore, palettes often house multiple pans, requiring a structural frame that maintains its shape and prevents pan displacement. Our design philosophy focuses on "Impact Neutralization," where we utilize reinforced paperboards and custom-engineered internal trays that absorb vibration and shock. This ensures that every individual shadow remains perfectly intact from your manufacturing line to your customer's vanity, preserving the vibrancy and texture of your signature formulations.</p>

                            <h3>Material Innovation for Professional Palette Security</h3>
                            <p>To differentiate your brand and ensure product integrity, we offer a selection of premium, structural-grade materials for your custom eye shadow boxes:</p>
                            <ul>
                                <li><strong>Reinforced Rigid Paperboard:</strong> The gold standard for high-end professional palettes. This material provides a sturdy, non-bending frame that resists crushing and offers a luxurious weight in the hand.</li>
                                <li><strong>Solid Bleached Sulfate (SBS):</strong> Our high-grade SBS cardstock provides an ultra-smooth, bright white canvas that is perfect for high-definition artwork and complex finishes like holographic foiling or soft-touch matte lamination.</li>
                                <li><strong>Impact-Dampening Cardboard Inserts:</strong> We can include custom-cut board or foam trays that hold individual pans securely, preventing them from shifting or hitting each other during transit.</li>
                                <li><strong>Sustainable & FSC-Certified Stocks:</strong> We provide eco-friendly options that maintain a luxury professional feel while meeting the growing demand for environmental responsibility in the beauty world.</li>
                            </ul>

                            <h3>Strategic Design Elements for Visual Authority</h3>
                            <p>To win on the crowded retail shelf or social media feed, your custom eye shadow boxes must include features that engage the consumer senses and build immediate brand trust:</p>
                            <ul>
                                <li><strong>Sophisticated Magnetic Closures:</strong> Incorporating high-strength magnets provides a secure, satisfying "click" upon closing, signaling premium engineering and ensuring the palette remains shut in a makeup bag.</li>
                                <li><strong>High-Clarity PET Windows:</strong> We can design custom-shaped windows that allow your color story to be the focal point of the packaging, enticing customers with the actual pigments inside.</li>
                                <li><strong>Advanced Tactile Finishes:</strong> Using soft-touch matte lamination combined with spot UV or embossing adds a three-dimensional depth that customers can feel as well as see.</li>
                                <li><strong>Holographic and Metallic Foil Stamping:</strong> Adding shifting rainbow or classic metallic highlights to your logo or collection name creates a sense of trendy "must-have" luxury.</li>
                            </ul>

                            <h3>The Science of Color Representation</h3>
                            <p>In the world of high-pigment makeup, color fidelity is everything. Your packaging must accurately represent the intensity and finish of the shadows within. At CustomPackMakers, we utilize advanced color calibration and high-fidelity offset printing to ensure your brand's unique shades are reproduced with absolute precision. Whether you are launching a flagship neutral palette or a bold artistic collection, we guarantee color consistency across every production run, building the trust that leads to lifelong brand loyalty.</p>

                            <h3>Scalable Wholesale for Growing Beauty Empires</h3>
                            <p>Whether you are a boutique artisan brand or a global powerhouse requiring monthly wholesale shipments of tens of thousands, we have the manufacturing capacity to support your growth. We offer low minimum order quantities (MOQs) which are perfect for testing seasonal "drops" or limited-edition collaborations. For established high-volume brands, our industrial production lines deliver massive capacity and exceptional cost efficiencies. Our industry-leading 8-10 day turnaround ensures your supply chain remains lean and responsive to the fast-moving trends of the cosmetics market.</p>

                            <h3>Environmental Leadership in Makeup Packaging</h3>
                            <p>Modern consumers make purchasing decisions based on a brand's environmental values. We help you lead the way with sustainable makeup packaging solutions. Our options include recycled materials, soy-based inks, and completely plastic-free constructions (including plastic-free window options). By choosing eco-friendly custom eye shadow boxes, you demonstrate a modern leadership that resonates with today’s conscious collectors, building deeper brand trust and long-term loyalty. Let us help you select materials that are as responsible as they are beautiful.</p>
                            <p>Ultimately, a custom eye shadow box is an investment in your brand's reputation for quality and artistic excellence. It is the messenger of your brand's creative vision and the protector of your most technical products. Let us help you create packaging that is as bold and reliable as the results your eye shadows offer. Our experts are ready to assist with every technical detail of your design. Contact us today for a custom quote and take the first step toward market dominance.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* RELATED PRODUCTS CAROUSEL */}
            <RelatedProductCosmetic />

            {/* WHY CHOOSE US SECTION */}
            <WhyBrandsChooseCosmetic productName="Eye Shadow Box" productImage={mainEyeShadow} />

            {/* DIFFERENTIATE YOUR BRAND SECTION */}
            <section className="py-10 lg:py-12 bg-white overflow-hidden relative">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* LEFT: Image */}
                        <div className="relative group">
                            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] border border-primary/20 shadow-2xl transform transition-transform duration-700 hover:scale-[1.02]">
                                <img src={mainEyeShadow} alt="Differentiate Your Eye Shadow Brand" className="w-full h-full object-cover" />
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
                                Differentiate Your <span className="text-primary">Palettes</span> From Others
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                Our bespoke custom eye shadow boxes are meticulously engineered to differentiate your vibrant palettes in a crowded cosmetics market. By integrating reinforced structural paperboards and impact-dampening internal trays, we ensure that every pressed powder remains intact and protected from accidental crumbling or contamination during transit. From modern matte finishes that convey artistic authority to elegant silver foil stamping that highlights your logo, our packaging is fully customizable. Partner with us for results-oriented wholesale packaging that establishes your brand as a market leader.
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
                                <h2 className="text-2xl md:text-3xl font-bold text-foreground">Eye Shadow Packaging FAQs</h2>
                                <p className="text-base text-muted-foreground">Expert insights for your professional makeup brand.</p>
                            </div>
                            <Accordion type="single" collapsible defaultValue="item-1" className="w-full space-y-2">
                                {[
                                    { id: "item-1", question: "How do you prevent eye shadows from shattering during shipping?", answer: "We use reinforced rigid paperboards and impact-dampening internal trays that absorb shock and vibration, keeping every pressed powder pan stationary and intact." },
                                    { id: "item-2", question: "What is the benefit of a magnetic closure for palettes?", answer: "Magnetic closures provide a luxury 'click' upon closing, ensuring the palette remains tightly shut in bags while adding a sophisticated sensory element for the customer." },
                                    { id: "item-3", question: "Can you create custom window displays for multi-color palettes?", answer: "Yes, we can design custom-die-cut windows with high-clarity PET film that showcase your entire color story while maintaining structural integrity." },
                                    { id: "item-4", question: "Are your materials resistant to powder spills?", answer: "Our paperboards are available with high-quality aqueous coatings that allow for easy wipe-cleaning if loose pigments encounter the box surface." },
                                    { id: "item-5", question: "Do you offer eco-friendly packaging for professional brands?", answer: "Absolutely. We provide FSC-certified materials, soy-based inks, and completely plastic-free constructions for environmentally responsible beauty brands." }
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
                            <img src={FAQimage} alt="Eye Shadow Box FAQ" className="absolute inset-0 w-full h-full object-cover" />
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

export default CustomEyeShadowBoxes;
