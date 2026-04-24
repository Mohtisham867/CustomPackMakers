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
import mainSkinCare from "@/assets/cosmetic-boxes/Skin Care Packaging.webp";

const SkinCarePackaging = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    const productImages = [
        { src: mainSkinCare, alt: "Custom Skin Care Package - Clinical Glass View" },
        { src: mainSkinCare, alt: "Custom Skin Care Package - UV Protective View" },
        { src: mainSkinCare, alt: "Custom Skin Care Package - Matte Finish" },
        { src: mainSkinCare, alt: "Custom Skin Care Package - Foil Detail" },
        { src: mainSkinCare, alt: "Custom Skin Care Package - Complete Retail Set" },
    ];


    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Skin Care Packaging | Clinical Beauty Solutions Wholesale</title>
                <meta name="description" content="Order custom skin care packaging wholesale. Clinical beauty solutions with light-blocking substrates, moisture-resistant finishes, and UV-protective materials. Fast turnaround." />
                <meta name="keywords" content="custom skin care packaging, skincare boxes, wholesale clinical packaging, luxury beauty containers, professional dermatological boxes" />
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
                                <BreadcrumbPage>Skin Care Packaging</BreadcrumbPage>
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
                                <span className="text-primary">Custom</span> Skin Care Packaging
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Protect your professional dermatological formulations with elite skin care packaging featuring light-blocking substrates and moisture-resistant finishes that perfectly preserve your sensitive ingredients while delivering a premium retail presence for every customer.
                            </p>
                            <div className="pt-2">
                                <Button
                                    size="lg"
                                    className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                                    onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}
                                >
                                    Get clinical quote
                                </Button>
                            </div>
                        </div>

                        {/* RIGHT: Large Product Image - Compact */}
                        <div className="lg:col-span-5 relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-muted group">
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200">
                                <img
                                    src={mainSkinCare}
                                    alt="Custom Skin Care Packaging Hero"
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
                        Unwavering Protection for Your Scientific Beauty Regimen
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            Our <strong className="text-foreground">custom skin care packaging</strong> is engineered for dermatological and clinical beauty brands that demand the highest standards of active ingredient preservation and structural reliability. Skincare formulas often contain volatile antioxidants, retinols, or UV-sensitive botanicals that can be compromised by light and heat exposure. We utilize high-density, light-blocking paperboards and secure structural sleeves that provide a protective environment for your jars and bottles.
                        </p>
                        <p>
                            To command authority in the professional wellness market, your <strong className="text-foreground">skin care packaging</strong> must project an aura of scientific excellence. We offer advanced finishing options, from Velvety soft-touch laminates that signify modern luxury to vibrant high-gloss highlights that mirror your product's purity. Partner with us for results-oriented wholesale packaging that establishes your brand as a market leader in professional dermatological aesthetics and personal care supplies.
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
                                                <Input id="length" type="number" placeholder="2.5" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label>
                                                <Input id="width" type="number" placeholder="2.5" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">D (in)</Label>
                                                <Input id="depth" type="number" placeholder="6" className="h-9 bg-white" />
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
                        Dermatological Excellence: The Ultimate Guide to Professional Skin Care Packaging
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

                            <p>In the expansive and scientifically-driven world of modern dermatology and luxury skincare, the packaging is the primary interface between your clinical formulation and the consumer. Skin care products are investments in health and radiant vitality, promising transformative results through active ingredients. Consequently, custom skin care packaging is your brand's most critical asset for delivering both aesthetic purity and technical reliability. At CustomPackMakers, we specialize in high-concept skincare containers and boxes that ensure your professional formulations dominate the retail market and remain in potent, active condition for every customer.</p>
                            <p>The engineering challenges of skincare packaging are uniquely demanding. Many high-efficacy ingredients, such as Vitamin C, Retinol, and various botanical extracts, are highly sensitive to UV light and thermal fluctuations. Furthermore, heavy glass jars and delicate treatment pumps require structural protection to prevent impact shattering and mechanical failure. Our design philosophy focuses on "Molecular Security," where we utilize light-neutralizing substrates and reinforced paperboards. This ensures your professional formulations remain protected from environmental degradation from your manufacture line to your customer's vanity, preserving the potency and luxury finish of the contents.</p>

                            <h3>Material Innovation for Clinical Wellness Branding</h3>
                            <p>To differentiate your skin care line and ensure product integrity, we offer a selection of specialized, structural-grade materials for your custom boxes:</p>
                            <ul>
                                <li><strong>Solid Bleached Sulfate (SBS) Cardstock:</strong> Our premium-grade SBS provides an ultra-smooth, clinical-grade surface perfect for high-fidelity printing and precise brand representation.</li>
                                <li><strong>UV-Resistant and Light-Blocking Boards:</strong> We utilize substrates with specialized internal coatings that provide a consistent protective environment for light-sensitive treatment formulas.</li>
                                <li><strong>High-Strength Corrugated Options:</strong> For subscription sets or heavy glass jar collections, we offer slim-profile corrugated boards that provide exceptional crush resistance.</li>
                                <li><strong>Eco-Friendly & FSC-Certified Stocks:</strong> We provide sustainable packaging options that resonate deeply with conscious wellness consumers, allowing you to lead with responsibility.</li>
                            </ul>

                            <h3>Strategic Design Elements for Scientific Authority</h3>
                            <p>To win on the crowded boutique shelf or luxury department store counter, your custom skin care packaging must include features that project an aura of expertise:</p>
                            <ul>
                                <li><strong>Precision-Fit Internal Inserts:</strong> We design custom-cut board seats that lock your jars and bottles in place, preventing rattling and ensuring glass-on-glass protection.</li>
                                <li><strong>Clinical Matte and Soft-Touch Laminates:</strong> Non-reflective velvety finishes convey a sense of modern authority and medical-grade reliability, resisting fingerprints through daily use.</li>
                                <li><strong>Sophisticated Foil Stamping:</strong> Adding silver, gold, or holographic highlights to your collection name creates a sensory experience that signifies premium quality and scientific innovation.</li>
                                <li><strong>Interactive Instructions & Die-Cuts:</strong> We can design multi-panel boxes that provide ample space for complex usage instructions and clinical study results without sacrificing the aesthetic.</li>
                            </ul>

                            <h3>The Science of Color Fidelity and Brand Trust</h3>
                            <p>In the skincare industry, visual purity is paramount. A customer expects the packaging to reflect the clean, effective nature of the contents. At CustomPackMakers, we utilize advanced color calibration and high-definition offset printing to ensure your brand's unique "clean" palette is reproduced with absolute precision. Whether you are launching a flagship range of 10 clinical serums or a comprehensive botanical regimen, we guarantee aesthetic consistency across every production run, establishing your brand as a reliable authority in professional skincare.</p>

                            <h3>Scalable Wholesale for Growing Skincare Empires</h3>
                            <p>Whether you are a boutique artisan brand or a global powerhouse requiring monthly wholesale shipments of thousands, we are built to support you. We offer low minimum order quantities (MOQs) which are perfect for testing seasonal "active" releases or limited-edition designer collaborations. For established high-volume brands, our industrial production lines deliver massive capacity and exceptional cost efficiencies. Our standard 8-10 day turnaround ensures your supply chain remains lean and responsive to the fast-moving trends of the global beauty market.</p>

                            <h3>Environmental Leadership in Personal Care</h3>
                            <p>Today's personal care consumers make purchasing decisions based on a brand's harmony with the environment. We help you meet this demand with sustainable skin care packaging solutions. Our options include recycled materials, soy-based inks, and completely plastic-free constructions. By choosing eco-friendly custom skincare boxes, you demonstrate a modern leadership that resonates with today’s conscious buyers, building a deeper brand connection and long-term loyalty. Let us guide you through selecting materials that are as responsible to the planet as they are beautiful for your brand.</p>
                            <p>Ultimately, a custom skin care box is an investment in your brand's reputation for professional excellence and scientific care. It is the messenger of your brand's quality and the protector of your most technical formulations. Let us help you create packaging that is as precise and powerful as the results your products offer. Our experts are ready to assist with every technical detail of your design. Contact us today for a custom quote and begin your journey toward market dominance.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* RELATED PRODUCTS CAROUSEL */}
            <RelatedProductCosmetic />

            {/* WHY CHOOSE US SECTION */}
            <WhyBrandsChooseCosmetic productName="Skin Care Boxes" productImage={mainSkinCare} />

            {/* DIFFERENTIATE YOUR BRAND SECTION */}
            <section className="py-10 lg:py-12 bg-white overflow-hidden relative">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* LEFT: Image */}
                        <div className="relative group">
                            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] border border-primary/20 shadow-2xl transform transition-transform duration-700 hover:scale-[1.02]">
                                <img src={mainSkinCare} alt="Differentiate Your Skincare Brand" className="w-full h-full object-cover" />
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
                                Differentiate Your <span className="text-primary">Clinical Care</span> From Others
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-xl">
                                Our high-fashion skin care packaging is precisely engineered to differentiate your clinical formulations in a competitive wellness market. By utilizing reinforced structural paperboards and secure secondary internal locking systems, we ensure that every jar and bottle remains stationary and protected from environmental thermal changes or crushing. From velvety soft-touch laminates that signify modern luxury to vibrant high-gloss highlights that mirror your product's purity, our packaging is fully customizable. Partner with us for results-oriented wholesale packaging that scales with your growing skincare empire.
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
                                <h2 className="text-2xl md:text-3xl font-bold text-foreground">Skin Care Packaging FAQs</h2>
                                <p className="text-base text-muted-foreground">Expert insights for your professional wellness line.</p>
                            </div>
                            <Accordion type="single" collapsible defaultValue="item-1" className="w-full space-y-2">
                                {[
                                    { id: "item-1", question: "Do you offer light-blocking materials for sensitive serums?", answer: "Yes, we utilize specialized UV-reflecting coatings and dark-core substrates that provide a consistent protective environment for light-sensitive dermatological pigments." },
                                    { id: "item-2", question: "Can you create custom fitment inserts for uniquely shaped jars?", answer: "Absolutely. We engineering custom-cut board seats that precisely lock your unique containers in place, providing absolute vibration and impact protection." },
                                    { id: "item-3", question: "What finish is best for a medical-grade professional look?", answer: "A velvety soft-touch matte lamination combined with clinical-grade typography is highly recommended for projecting an authoritative medical professional image." },
                                    { id: "item-4", question: "Are your boxes resistant to oil and moisture from skincare products?", answer: "Our paperboards are available with high-quality oil-resistant aqueous coatings that prevent structural softening and staining if incidental contact occurs." },
                                    { id: "item-5", question: "Do you offer eco-friendly packaging for skincare brands?", answer: "Providing FSC-certified materials, soy-based inks, and completely plastic-free paperboard constructions is our specialty for environmentally responsible beauty brands." }
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
                            <img src={FAQimage} alt="Skincare Box FAQ" className="absolute inset-0 w-full h-full object-cover" />
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

export default SkinCarePackaging;
