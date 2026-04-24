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
import mainLipBalm from "@/assets/cosmetic-boxes/Lip Balm Boxes.webp";

const LipBalmBoxes = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    const productImages = [
        { src: mainLipBalm, alt: "Custom Lip Balm Box - Chic Front" },
        { src: mainLipBalm, alt: "Custom Lip Balm Box - Bulk Display View" },
        { src: mainLipBalm, alt: "Custom Lip Balm Box - Glossy Finish" },
        { src: mainLipBalm, alt: "Custom Lip Balm Box - Detail Texture" },
        { src: mainLipBalm, alt: "Custom Lip Balm Box - Retail Setup" },
    ];


    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Lip Balm Boxes | Chic Skincare Packaging Wholesale</title>
                <meta name="description" content="Order custom lip balm boxes wholesale. Chic skincare packaging with spot UV finishes, precision-fit sleeves, and eco-friendly materials. Fast turnaround." />
                <meta name="keywords" content="custom lip balm boxes, lip balm packaging, wholesale skincare boxes, luxury balm packaging, professional cosmetic boxes" />
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
                                <BreadcrumbPage>Lip Balm Boxes</BreadcrumbPage>
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
                                <span className="text-primary">Custom</span> Lip Balm Boxes
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Grace your wellness brand with chic custom lip balm boxes featuring vibrant spot UV finishes and precision-fit structural sleeves that perfectly protect your delicate formulations while delivering a premium retail presence.
                            </p>
                            <div className="pt-2">
                                <Button
                                    size="lg"
                                    className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                                    onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}
                                >
                                    Get chic quote
                                </Button>
                            </div>
                        </div>

                        {/* RIGHT: Large Product Image - Compact */}
                        <div className="lg:col-span-5 relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-muted group">
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200">
                                <img
                                    src={mainLipBalm}
                                    alt="Custom Lip Balm Boxes Hero"
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
                        Vibrant Brilliance for Your Signature Soothing Line
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            Our <strong className="text-foreground">custom lip balm boxes</strong> are precisely engineered for wellness brands that command attention in a competitive skincare retail environment. Lip balm tubes are small, high-churn items that require packaging that is both easy to display in bulk and robust enough to protect the delicate rotational mechanism inside. We utilize lightweight, structural-grade paperboards that provide a secure fit, effectively preventing accidental tube engagement or environmental crushing.
                        </p>
                        <p>
                            To win at the point of purchase, your <strong className="text-foreground">lip balm packaging</strong> must project an aura of vibrant quality. We offer advanced finishing options, from high-gloss aqueous coatings that mirror the shine of your formula to sophisticated spot UV highlights that add a three-dimensional depth to your logo. Combined with our sustainable, FSC-certified materials, these professional details establish your brand as a market leader in natural lip care. Partner with us for results-oriented wholesale packaging that scales with your empire.
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
                                                <Input id="depth" type="number" placeholder="2.75" className="h-9 bg-white" />
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
                        Soothing Retail Success: The Ultimate Guide to Lip Balm Packaging
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

                            <p>In the expansive and essential world of daily skincare, the lip balm is the ubiquitous tool for comfort and protection. It is a product of necessity and impulse, promising instant relief and a healthy glow. However, because lip balms are high-volume retail items typically placed in high-traffic checkout zones or as part of larger gift sets, their packaging must work exceptionally hard to catch the eye and communicate quality. Custom lip balm boxes are your brand's primary vehicle for delivering both aesthetic vibrancy and structural reliability. At CustomPackMakers, we specialize in chic, compact packaging that ensures your soothing balms dominate the retail environment and provide a premium experience for every customer.</p>
                            <p>The engineering challenges of lip balm packaging are specific to their small size and high-turnover nature. The tubes are typically cylindrical and lightweight, requiring a box that provides a "friction-fit" to prevent them from falling out or rattling. Furthermore, lip balms are temperature-sensitive formulations that can soften or sweat in humid environments, necessitating packaging that provides a consistent protective barrier. Our design philosophy focuses on "Agile Protection," where we utilize lightweight yet high-density paperboards and secure structural sleeves. This ensures your products remain protected from crushing and environmental factors from your manufacturing line to your customer's pocket, preserving the texture and aroma of your formulations.</p>

                            <h3>Material Innovation for High-Volume Wellness Success</h3>
                            <p>To differentiate your soothing line and ensure retail performance, we offer a selection of premium, lightweight materials for your custom lip balm boxes:</p>
                            <ul>
                                <li><strong>Solid Bleached Sulfate (SBS) Cardstock:</strong> Our premium-grade SBS provides an ultra-smooth, bright white canvas that is perfect for high-impact printing and supports vibrant spot UV finishes perfectly.</li>
                                <li><strong>Kraft and Recycled Stocks:</strong> We provide high-strength eco-friendly options that resonate deeply with natural wellness consumers, allowing you to lead with sustainability without sacrificing professional quality.</li>
                                <li><strong>Display-Ready Board Grades:</strong> For bulk retail, we utilize paperboards with excellent structural memory, ensuring your boxes maintain their shape even when stacked in checkout counter displays.</li>
                                <li><strong>Specialty Foil-Lined Stocks:</strong> To create a sense of boutique "treasure" for premium balms, we can utilize foil-lined boards that catch the light from every angle.</li>
                            </ul>

                            <h3>Strategic Design Elements for Impulse Point Performance</h3>
                            <p>To win the battle for attention at the retail counter, your custom lip balm boxes must include features that engage the consumer senses immediately:</p>
                            <ul>
                                <li><strong>Precision-Fit Structural Sleeves:</strong> We engineering our boxes to match the exact dimensions of your tubes, providing a secure fit that prevents accidental opening or rattling.</li>
                                <li><strong>High-Contrast Spot UV:</strong> Applying glossy clear coatings to specific areas of your design adds a tactile depth and visual shine that makes your brand pop against competitive products.</li>
                                <li><strong>Vibrant High-Gloss Finishes:</strong> Using mirror-like aqueous coatings reflects the healthy, hydrated finish of your balm and creates a contemporary, "fresh" aesthetic.</li>
                                <li><strong>Custom-Die-Cut Window Displays:</strong> We can incorporate small, strategically placed windows that allow customers to see the tube's design or the balm's color, building immediate trust.</li>
                            </ul>

                            <h3>The Science of Branding on a Small Canvas</h3>
                            <p>In the lip balm market, every millimeter of the packaging is valuable real estate. You must maintain brand consistency while providing mandatory ingredient lists and safety information. At CustomPackMakers, we utilize advanced high-definition offset and digital printing to ensure even the smallest micro-text and complex graphics remain sharp and professional. Whether you need a minimalist botanical look or a bold, colorful pattern, our manufacturing processes deliver perfect registration and clarity for every production run, establishing your brand as a reliable authority in natural lip care.</p>

                            <h3>Scalability for Growing Skincare Empires</h3>
                            <p>Whether you are a boutique artisan brand or a global powerhouse requiring monthly wholesale shipments of tens of thousands, we are built to support you. We offer low minimum order quantities (MOQs) which are perfect for testing seasonal "flavors" or limited-edition collaborations. For established high-volume brands, our industrial production lines deliver massive capacity and exceptional cost efficiencies. Our industry-leading 8-10 day turnaround ensures your supply chain remains lean and responsive to the fast-moving trends of the skincare market. Partnering with us means your best-selling balms are always retail-ready.</p>

                            <h3>Environmental Leadership in Personal Care</h3>
                            <p>Today’s personal care consumers make purchasing decisions based on a brand's harmony with the environment. We help you lead the way with sustainable lip balm packaging solutions. Our options include FSC-certified materials, soy-based inks, and completely plastic-free constructions. By choosing eco-friendly custom lip balm boxes, you demonstrate a modern leadership that resonates with today’s conscious buyers, building a deeper brand connection and long-term customer loyalty. Let us guide you through selecting materials that are as responsible to the planet as they are beautiful for your brand.</p>
                            <p>Ultimately, a custom lip balm box is an investment in your brand's reputation for quality and care. It is the messenger of your brand's vibrancy and the protector of your most soothing products. Let us help you create packaging that is as chic and reliable as the relief your balms offer. Our experts are ready to assist with every technical detail of your design. Contact us today for a custom quote and begin your journey toward retail dominance.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* RELATED PRODUCTS CAROUSEL */}
            <RelatedProductCosmetic />

            {/* WHY CHOOSE US SECTION */}
            <WhyBrandsChooseCosmetic productName="Lip Balm Box" productImage={mainLipBalm} />

            {/* DIFFERENTIATE YOUR BRAND SECTION */}
            <section className="py-10 lg:py-12 bg-white overflow-hidden relative">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* LEFT: Image */}
                        <div className="relative group">
                            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] border border-primary/20 shadow-2xl transform transition-transform duration-700 hover:scale-[1.02]">
                                <img src={mainLipBalm} alt="Differentiate Your Lip Balm Brand" className="w-full h-full object-cover" />
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
                                Differentiate Your <span className="text-primary">Balms</span> From Others
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                Our high-fashion custom lip balm boxes are precisely engineered to differentiate your soothing balms in a competitive skincare market. By utilizing lightweight, structural-grade paperboards and secure secondary internal locking systems, we ensure that every tube remains stationary and protected from environmental damage or crushing. From sophisticated matte laminates that convey modern authority to vibrant high-gloss highlights that command attention on retail shelves, our packaging is fully customizable. Partner with us for results-oriented wholesale packaging that scales with your growing wellness empire.
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
                                <h2 className="text-2xl md:text-3xl font-bold text-foreground">Lip Balm Packaging FAQs</h2>
                                <p className="text-base text-muted-foreground">Expert insights for your vibrant skincare line.</p>
                            </div>
                            <Accordion type="single" collapsible defaultValue="item-1" className="w-full space-y-2">
                                {[
                                    { id: "item-1", question: "How do you protect small lip balm tubes from crushing?", answer: "We use high-density structural-grade paperboards and precision-fit internal dimensions that provide absolute crush resistance for your delicate tubes." },
                                    { id: "item-2", question: "Do you offer display boxes for bulk retail counters?", answer: "Yes, we can design custom counter-top display units that house multiple lip balm boxes, making them perfect for high-traffic impulse purchase zones." },
                                    { id: "item-3", question: "What finish is best for a vibrant modern skincare look?", answer: "A high-gloss aqueous coating combined with targeted spot UV highlights is highly effective for creating a contemporary, vibrant, and 'fresh' aesthetic." },
                                    { id: "item-4", question: "Are your boxes resistant to moisture and temperature changes?", answer: "Our paperboards are available with high-quality moisture-resistant coatings that maintain structural integrity and visual brilliance even in humid retail environments." },
                                    { id: "item-5", question: "Do you offer eco-friendly materials for lip balm brands?", answer: "Providing FSC-certified materials, soy-based inks, and completely recyclable paperboard constructions is our specialty for environmentally responsible wellness brands." }
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
                            <img src={FAQimage} alt="Lip Balm Box FAQ" className="absolute inset-0 w-full h-full object-cover" />
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

export default LipBalmBoxes;
