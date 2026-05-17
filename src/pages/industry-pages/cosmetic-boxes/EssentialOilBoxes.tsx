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
import mainEssentialOil from "@/assets/industry/cosmetic-boxes/Essential Oil Boxes.webp";

const EssentialOilBoxes = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    const productImages = [
        { src: mainEssentialOil, alt: "Essential Oil Box - Therapeutic Design" },
        { src: mainEssentialOil, alt: "Essential Oil Box - Secure Cradle View" },
        { src: mainEssentialOil, alt: "Essential Oil Box - Matte Finish" },
        { src: mainEssentialOil, alt: "Essential Oil Box - Foil Accents" },
        { src: mainEssentialOil, alt: "Essential Oil Box - Bulk Wholesale Set" },
    ];


    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Essential Oil Boxes | Professional Wellness Packaging Wholesale</title>
                <meta name="description" content="Order custom essential oil boxes wholesale. Professional wellness packaging with impact-resistant cradles, light-blocking materials, and oil-resistant coatings. Fast turnaround." />
                <meta name="keywords" content="custom essential oil boxes, essential oil packaging, wholesale wellness boxes, luxury oil packaging, professional cosmetic boxes" />
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
                                <BreadcrumbPage>Essential Oil Boxes</BreadcrumbPage>
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
                                <span className="text-primary">Custom</span> Essential Oil Boxes
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Protect your therapeutic formulations with elite custom essential oil boxes featuring impact-resistant internal cradles and light-blocking materials that perfectly preserve your delicate essences while delivering a professional, high-end retail presence for every customer.
                            </p>
                            <div className="pt-2">
                                <Button
                                    size="lg"
                                    className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                                    onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}
                                >
                                    Get wellness quote
                                </Button>
                            </div>
                        </div>

                        {/* RIGHT: Large Product Image - Compact */}
                        <div className="lg:col-span-5 relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-muted group">
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200">
                                <img
                                    src={mainEssentialOil}
                                    alt="Custom Essential Oil Boxes Hero"
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
                        Unwavering Protection for Your Therapeutic Essences
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            Our <strong className="text-foreground">custom essential oil boxes</strong> are designed for wellness brands that prioritize the integrity and safety of their liquid formulations. Essential oils are volatile substances sensitive to light and accidental leakage. We utilize high-density, light-blocking paperboards and specialized oil-resistant internal coatings that ensure your vials remain stationary and protected from environmental degradation or spill damage throughout the logistics chain.
                        </p>
                        <p>
                            To command authority in the wellness market, your <strong className="text-foreground">essential oil packaging</strong> must project an aura of therapeutic purity. We offer advanced finishing options from clinical matte lamination to elegant silver foil stamping. These professional details build immediate trust with practitioners and conscious consumers alike. Partner with us for results-oriented wholesale packaging that establishes your brand as a market leader in natural healing.
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
                                                <Input id="depth" type="number" placeholder="2.5" className="h-9 bg-white" />
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
                        Preserving Purity: The Ultimate Guide to Essential Oil Packaging
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

                            <p>In the expansive and growing ecosystem of natural wellness, essential oils are the powerful concentrates of nature's healing. They are products of purity and therapeutic intent, promising physical and emotional transformation. However, because these oils are highly volatile and sensitive to oxygen, light, and temperature, their packaging must do much more than just look professional; it must serve as a high-performance protective barrier. Custom essential oil boxes are your brand's primary vehicle for delivering both aesthetic serenity and technical reliability. At CustomPackMakers, we specialize in high-concept wellness packaging that ensures your therapeutic essences dominate the market and arrive in perfect, active condition.</p>
                            <p>The engineering requirements for essential oil packaging are technically demanding. Small glass vials are prone to breakage and tipping, and the presence of potent oils can degrade traditional adhesives and inks if a small leak occurs. Our design philosophy focuses on "Therapeutic Integrity," where we utilize reinforced paperboards and specialized internal cradles that lock every bottle in place. This prevents vibration and shock from compromising the glass or the seal, ensuring your precious essences remain uncontaminated from your manufacturing line to your customer's home.</p>

                            <h3>Material Innovation for Wellness Product Security</h3>
                            <p>To differentiate your brand and ensure product safety, we offer a selection of specialized, high-performance materials for your custom essential oil boxes:</p>
                            <ul>
                                <li><strong>High-Density SBS Cardstock:</strong> Our premium Solid Bleached Sulfate cardstock provides an ultra-smooth, clinical-grade surface that is perfect for high-fidelity printing and supports professional matte finishes perfectly.</li>
                                <li><strong>Light-Blocking Paperboards:</strong> We can utilize paperboards with internal light-scattering properties or dark-core substrates that provide an additional layer of UV protection for your light-sensitive oils.</li>
                                <li><strong>Oil-Resistant Internal Coatings:</strong> We apply specialized aqueous or UV coatings to the inside of the box to prevent oil stains and structural softening in the event of minor seepage around the dropper.</li>
                                <li><strong>Sustainable & FSC-Certified Stocks:</strong> We provide eco-friendly options that resonate deeply with natural wellness consumers, allowing you to lead with sustainability without sacrificing professional quality.</li>
                            </ul>

                            <h3>Strategic Design Elements for Professional Authority</h3>
                            <p>To win on the crowded wellness shelf or boutique pharmacy counter, your custom essential oil boxes must include features that project an aura of expertise and purity:</p>
                            <ul>
                                <li><strong>Precision-Fit Internal Inserts:</strong> We design custom-cut board inserts that secure the vial and often provide a separation from the glass dropper, reducing the risk of accidental breakage.</li>
                                <li><strong>Clinical Matte Lamination:</strong> This non-reflective, velvety finish conveys a sense of professional authority and scientific precision, perfect for therapeutic-grade oil lines.</li>
                                <li><strong>Silver and Gold Foil Accents:</strong> Adding metallic highlights to your brand logo or botanical name creates a sense of "preciousness" that justifies premium pricing and builds consumer trust.</li>
                                <li><strong>Tamper-Evident Seals:</strong> We can incorporate custom perforated safety tabs or specialized labels that provide customers with absolute peace of mind regarding the product's purity and origin.</li>
                            </ul>

                            <h3>The Science of Regulatory and Visual Clarity</h3>
                            <p>In the wellness industry, information clarity is as important as visual design. Your packaging must house mandatory safety warnings, usage instructions, and ingredient lists without sacrificing its high-end aesthetic. At CustomPackMakers, we utilize advanced high-definition printing to ensure even the smallest micro-text remains legible and professional. Whether you need multilingual instructions or complex decorative botanical patterns, our manufacturing processes deliver perfect registration and clarity for every production run, establishing your brand as a reliable authority in natural health.</p>

                            <h3>Scalable Wholesale for Growing Essential Oil Brands</h3>
                            <p>Whether you are a boutique artisan brand launching a single signature blend or a global powerhouse requiring monthly wholesale shipments of thousands, we are built to support you. We offer low minimum order quantities (MOQs) which are perfect for testing seasonal releases or limited-edition therapeutic blends. For established high-volume brands, our industrial production lines deliver massive capacity and exceptional cost efficiencies. Our industry-leading 8-10 day turnaround ensures your supply chain remains agile and responsive to the fast-moving trends of the wellness market.</p>

                            <h3>Environmental Leadership in Wellness Packaging</h3>
                            <p>Today’s wellness consumers make purchasing decisions based on a brand's harmony with nature. We help you lead the way with sustainable essential oil packaging solutions. Our options include recycled materials, soy-based inks, and completely plastic-free constructions. By choosing eco-friendly custom essential oil boxes, you demonstrate a modern leadership that resonates with today’s conscious buyers, building a deeper brand connection and long-term customer loyalty. Let us guide you through selecting materials that are as responsible to the planet as they are beautiful for your brand.</p>
                            <p>Ultimately, a custom essential oil box is an investment in your brand's reputation for therapeutic excellence. It is the messenger of your brand's purity and the protector of your most delicate essences. Let us help you create packaging that is as precise and powerful as the healing your products offer. Our experts are ready to assist with every technical detail of your design. Contact us today for a custom quote and take the first step toward market dominance.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* RELATED PRODUCTS CAROUSEL */}
            <RelatedProductCosmetic />

            {/* WHY CHOOSE US SECTION */}
            <WhyBrandsChooseCosmetic productName="Essential Oil Box" productImage={mainEssentialOil} />

            {/* DIFFERENTIATE YOUR BRAND SECTION */}
            <section className="py-10 lg:py-12 bg-white overflow-hidden relative">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* LEFT: Image */}
                        <div className="relative group">
                            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] border border-primary/20 shadow-2xl transform transition-transform duration-700 hover:scale-[1.02]">
                                <img src={mainEssentialOil} alt="Differentiate Your Essential Oil Brand" className="w-full h-full object-cover" />
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
                                Differentiate Your <span className="text-primary">Essences</span> From Others
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                Our bespoke custom essential oil boxes are performance-oriented packaging solutions designed to differentiate your therapeutic blends in a crowded wellness market. By integrating reinforced structural paperboards and oil-resistant internal coatings, we ensure that every vial remains stationary and protected from accidental leakage or environmental degradation. From clinical matte finishes that convey professional expertise to vibrant foil accents that command attention on retail shelves, our packaging is fully customizable. Partner with us for results-oriented wholesale packaging that establishes your brand as a market leader.
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
                                <h2 className="text-2xl md:text-3xl font-bold text-foreground">Essential Oil Packaging FAQs</h2>
                                <p className="text-base text-muted-foreground">Expert guide for your therapeutic wellness line.</p>
                            </div>
                            <Accordion type="single" collapsible defaultValue="item-1" className="w-full space-y-2">
                                {[
                                    { id: "item-1", question: "How do you protect small glass vials from breaking?", answer: "We use reinforced structural-grade paperboards and custom-engineered internal cradles that absorb impact and keep every vial stationary during shipping." },
                                    { id: "item-2", question: "Do you offer light-blocking materials for sensitive oils?", answer: "Yes, we can utilize dark-core substrates and light-scattering coatings that provide an extra layer of protection against UV degradation for your therapeutic essences." },
                                    { id: "item-3", question: "Are your boxes resistant to oil leaks and stains?", answer: "Absolutely. We apply specialized oil-resistant aqueous or UV coatings to the interior of the box to prevent staining and structural softening from minor seepage." },
                                    { id: "item-4", question: "Can the packaging include tamper-evident safety features?", answer: "Yes, we can incorporate custom perforated seals or specialized adhesive labels that provide your consumers with peace of mind regarding product purity." },
                                    { id: "item-5", question: "Do you offer eco-friendly materials for wellness brands?", answer: "Providing FSC-certified materials, soy-based inks, and completely plastic-free constructions is our specialty for brands that prioritize environmental harmony." }
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
                            <img src={FAQimage} alt="Essential Oil Box FAQ" className="absolute inset-0 w-full h-full object-cover" />
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

export default EssentialOilBoxes;
