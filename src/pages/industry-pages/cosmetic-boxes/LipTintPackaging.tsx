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
import mainLipTint from "@/assets/industry/cosmetic-boxes/Lip Tint Packaging.webp";

const LipTintPackaging = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    const productImages = [
        { src: mainLipTint, alt: "Custom Lip Tint Package - Chic Front" },
        { src: mainLipTint, alt: "Custom Lip Tint Package - Leak-Proof View" },
        { src: mainLipTint, alt: "Custom Lip Tint Package - Glossy Finish" },
        { src: mainLipTint, alt: "Custom Lip Tint Package - Detail Texture" },
        { src: mainLipTint, alt: "Custom Lip Tint Package - Retail Setup" },
    ];


    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Lip Tint Packaging | Chic Beauty Containers Wholesale</title>
                <meta name="description" content="Order custom lip tint packaging wholesale. Chic beauty containers with leak-proof internal cradles, high-gloss finishes, and premium materials. Fast turnaround." />
                <meta name="keywords" content="custom lip tint packaging, lip tint boxes, wholesale cosmetic packaging, luxury tint containers, professional beauty boxes" />
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
                                <BreadcrumbPage>Lip Tint Packaging</BreadcrumbPage>
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
                                <span className="text-primary">Custom</span> Lip Tint Packaging
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Grace your beauty brand with chic custom lip tint packaging featuring leak-proof internal cradles and vibrant high-gloss finishes that perfectly protect your delicate formulations while delivering a premium retail presence for every customer.
                            </p>
                            <div className="pt-2">
                                <Button
                                    size="lg"
                                    className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                                    onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}
                                >
                                    Get chic packaging
                                </Button>
                            </div>
                        </div>

                        {/* RIGHT: Large Product Image - Compact */}
                        <div className="lg:col-span-5 relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-muted group">
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200">
                                <img
                                    src={mainLipTint}
                                    alt="Custom Lip Tint Packaging Hero"
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
                        Vibrant Presentation for Your Signature Long-Wear Tints
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            Our <strong className="text-foreground">custom lip tint packaging</strong> is designed for high-fashion beauty brands that demand the highest standards of physical protection and photographic branding. Lip tint containers are small, high-density items that require packaging providing a secure, leak-proof environment. We utilize reinforced structural paperboards and custom-engineered internal cradles that ensure every bottle remains stationary and protected from accidental leakage or impact damage during transit.
                        </p>
                        <p>
                            Visual impact is the primary driver of accessory authority. Our <strong className="text-foreground">lip tint packaging</strong> features advanced finishing options, from modern matte lamination that conveys professional authority to vibrant high-gloss highlights that mirror your tint's shine. Combined with our sustainable, FSC-certified materials, these professional details establish your brand as a market leader in professional cosmetics. Partner with us for results-oriented wholesale packaging that scales with your empire.
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
                                                <Input id="length" type="number" placeholder="1" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label>
                                                <Input id="width" type="number" placeholder="1" className="h-9 bg-white" />
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
                        Agile Artistry: The Ultimate Guide to Lip Tint Packaging
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

                            <p>In the expansive and high-churn world of modern lip cosmetics, the lip tint is the essential tool for effortless, long-wear color. It is a product of convenience and intense pigment, promising a "just-bitten" glow that lasts through every activity. However, because lip tints are liquid formulations typically housed in small glass or plastic vials, their packaging must do much more than just look stylish; it must serve as a high-performance, leak-proof shield. Custom lip tint packaging is your brand's primary vehicle for delivering both aesthetic vibrancy and technical reliability. At CustomPackMakers, we specialize in chic, compact packaging that ensures your tints dominate the retail market and provide a premium unboxing experience for every customer.</p>
                            <p>The technical challenges of lip tint packaging are significant. Liquid formulations are prone to leakage around the applicator neck if subjected to vibration or pressure changes, and the presence of intense pigments can stain the outer box if not protected. Our design philosophy focuses on "Leak-Proof Logic," where we utilize reinforced paperboards and precision-fit internal cradles. This ensures your products remain stationary and protected from environmental factors from your manufacturing line to your customer's makeup bag, preserving the shade fidelity and aroma of your signature formulations.</p>

                            <h3>Material Innovation for Professional Cosmetic Success</h3>
                            <p>To differentiate your brand and ensure product integrity, we offer a selection of specialized, high-performance materials for your custom lip tint packaging:</p>
                            <ul>
                                <li><strong>Solid Bleached Sulfate (SBS) Cardstock:</strong> Our premium SBS provides an ultra-smooth, bright white canvas that is perfect for high-impact printing and supports vibrant high-gloss finishes perfectly.</li>
                                <li><strong>Moisture-Resistant Laminates:</strong> We apply high-quality film laminates that create an external barrier against moisture and incidental formula contact, maintaining the box's pristine appearance.</li>
                                <li><strong>Structural Cardboard Inserts:</strong> We design custom-cut board seats that lock the vial in place, preventing the glass from encountering the outer walls during transit.</li>
                                <li><strong>Sustainable & FSC-Certified Options:</strong> We provide eco-friendly packaging that maintains a luxury feel while meeting the growing demand for environmental harmony in the beauty world.</li>
                            </ul>

                            <h3>Strategic Design Elements for Visual Dominance</h3>
                            <p>To win on the crowded retail shelf or digital storefront, your custom lip tint packaging must include features that engage the consumer senses immediately:</p>
                            <ul>
                                <li><strong>High-Clarity PET Windows:</strong> We can design custom-shaped windows that allow your signature pigments to serve as the focal point of the overall design.</li>
                                <li><strong>Vibrant High-Gloss Finishes:</strong> Using mirror-like aqueous coatings reflects the high-shine quality of your product and creates a contemporary, "fresh" aesthetic.</li>
                                <li><strong>Sophisticated Foil Stamping:</strong> Adding shifting silver, gold, or holographic highlights to your logo creates a sense of trendy "must-have" luxury.</li>
                                <li><strong>Tactile Spot UV Points:</strong> Applying glossy clear coatings to specific decorative elements adds a depth that customers can feel as well as see.</li>
                            </ul>

                            <h3>The Science of Branding on a Dynamic Canvas</h3>
                            <p>In the lip tint market, your branding must accurately represent the intensity and finish of the product within. At CustomPackMakers, we utilize advanced color calibration and high-fidelity offset printing to ensure your brand's unique shades are reproduced with absolute precision. Whether you are launching a flagship neutral line or a bold artistic collection, we guarantee color consistency across every production run, establishing your brand as a reliable authority in professional beauty.</p>

                            <h3>Scalable Wholesale for Growing Beauty Empires</h3>
                            <p>Whether you are a boutique artisan brand launching a single signature tint or a global powerhouse requiring monthly wholesale shipments of thousands, we are built to support you. We offer low minimum order quantities (MOQs) which are perfect for testing seasonal releases or limited-edition collaborations. For established high-volume brands, our industrial production lines deliver massive capacity and exceptional cost efficiencies. Our industry-leading 8-10 day turnaround ensures your supply chain remains agile and responsive to the fast-moving trends of the cosmetics market. Partnering with us means your products are always retail-ready.</p>

                            <h3>Environmental Leadership in Modern Beauty</h3>
                            <p>Modern consumers make purchasing decisions based on a brand's environmental values. We help you lead the way with sustainable lip tint packaging solutions. Our options include recycled materials, soy-based inks, and completely plastic-free constructions. By choosing eco-friendly custom lip tint boxes, you demonstrate a modern leadership that resonates with today’s conscious buyers, building a deeper brand connection and long-term customer loyalty. Let us guide you through selecting materials that are as responsible to the planet as they are beautiful for your brand.</p>
                            <p>Ultimately, a custom lip tint box is an investment in your brand's reputation for quality and artistic precision. It is the messenger of your brand's vibrancy and the protector of your most delicate pigments. Let us help you create packaging that is as chic and reliable as the results your tints offer. Our experts are ready to assist with every technical detail of your design. Contact us today for a custom quote and begin your journey toward retail dominance.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* RELATED PRODUCTS CAROUSEL */}
            <RelatedProductCosmetic />

            {/* WHY CHOOSE US SECTION */}
            <WhyBrandsChooseCosmetic productName="Lip Tint Packaging" productImage={mainLipTint} />

            {/* DIFFERENTIATE YOUR BRAND SECTION */}
            <section className="py-10 lg:py-12 bg-white overflow-hidden relative">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* LEFT: Image */}
                        <div className="relative group">
                            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] border border-primary/20 shadow-2xl transform transition-transform duration-700 hover:scale-[1.02]">
                                <img src={mainLipTint} alt="Differentiate Your Lip Tint Brand" className="w-full h-full object-cover" />
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
                                Differentiate Your <span className="text-primary">Tints</span> From Others
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                Our high-fashion custom lip tint packaging is precisely engineered to differentiate your vibrant formulations in a competitive cosmetics market. By utilizing reinforced structural paperboards and secure secondary internal locking systems, we ensure that every bottle remains stationary and protected from accidental leakage or environmental damage. From velvety soft-touch laminates that signify modern luxury to vibrant high-gloss highlights that mirror your tint's shine, our packaging is fully customizable. Partner with us for results-oriented wholesale packaging that scales with your growing beauty empire.
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
                                <h2 className="text-2xl md:text-3xl font-bold text-foreground">Lip Tint Packaging FAQs</h2>
                                <p className="text-base text-muted-foreground">Expert insights for your vibrant beauty line.</p>
                            </div>
                            <Accordion type="single" collapsible defaultValue="item-1" className="w-full space-y-2">
                                {[
                                    { id: "item-1", question: "How do you prevent lip tint bottles from leaking during shipping?", answer: "We use precision-fit internal cradles and high-density paperboards that lock every bottle in place, providing absolute vibration protection and maintaining seal integrity." },
                                    { id: "item-2", question: "Can you create custom window displays for multi-shade collections?", answer: "Yes, we can design custom-die-cut windows with high-clarity PET film that showcase your signature pigments directly for maximum consumer engagement." },
                                    { id: "item-3", question: "What finish is best for a vibrant modern tint brand?", answer: "A mirror-like high-gloss aqueous coating is highly effective for reflecting the shine of your product and creating a contemporary, vibrant aesthetic." },
                                    { id: "item-4", question: "Are your boxes resistant to accidental tint stains?", answer: "Our paperboards are available with high-quality moisture-resistant laminates that allow for easy wipe-cleaning if incidental formula contact occurs during application." },
                                    { id: "item-5", question: "Do you offer eco-friendly packaging for lip products?", answer: "Absolutely. Providing FSC-certified materials, soy-based inks, and completely plastic-free constructions is our specialty for environmentally responsible beauty brands." }
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
                            <img src={FAQimage} alt="Lip Tint Package FAQ" className="absolute inset-0 w-full h-full object-cover" />
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

export default LipTintPackaging;
