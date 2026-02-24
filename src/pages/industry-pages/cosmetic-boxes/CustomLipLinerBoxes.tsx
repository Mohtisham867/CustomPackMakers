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
import mainLipLiner from "@/assets/cosmetic-boxes/Custom Lip Liner Boxes.webp";

const CustomLipLinerBoxes = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    const productImages = [
        { src: mainLipLiner, alt: "Custom Lip Liner Box - Sleek Front" },
        { src: mainLipLiner, alt: "Custom Lip Liner Box - Precision Fit" },
        { src: mainLipLiner, alt: "Custom Lip Liner Box - Glossy Finish" },
        { src: mainLipLiner, alt: "Custom Lip Liner Box - Detail Texture" },
        { src: mainLipLiner, alt: "Custom Lip Liner Box - Bulk Display" },
    ];


    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Lip Liner Boxes | Slim Makeup Packaging Wholesale</title>
                <meta name="description" content="Order custom lip liner boxes wholesale. Sleek makeup packaging for pencils featuring precision fit, color-accurate printing, and premium finishes. Fast shipping." />
                <meta name="keywords" content="custom lip liner boxes, lip liner packaging, wholesale makeup boxes, luxury lip liner packaging, professional cosmetic boxes" />
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
                                <BreadcrumbPage>Custom Lip Liner Boxes</BreadcrumbPage>
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
                                <span className="text-primary">Custom</span> Lip Liner Boxes
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Enhance your professional makeup line with sleek custom lip liner boxes engineered to provide a perfect fit for delicate pencils while delivering a sophisticated retail presence that reflects your brand's commitment to precision.
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
                                    src={mainLipLiner}
                                    alt="Custom Lip Liner Boxes Hero"
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
                        Precision-Fit Security for Defining Beauty
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            Our <strong className="text-foreground">custom lip liner boxes</strong> are designed for brands that prioritize accuracy and elegance. Lip liners are delicate precision tools, and their packaging should offer unyielding protection against breakage and tipping. We utilize slim-profile, high-density paperboards that provide a secure fit, ensuring your pencils remain sharpened and intact throughout the logistics chain.
                        </p>
                        <p>
                            Consistency is key in makeup branding. Our <strong className="text-foreground">lip liner packaging</strong> utilizes precision color-matching technology to ensure that the shade represented on the box perfectly matches the pigment inside. With professional finishing options like matte lamination and silver foiling, our boxes elevate your product's perceived value and build immediate trust with makeup enthusiasts.
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
                                                <Input id="length" type="number" placeholder="0.5" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label>
                                                <Input id="width" type="number" placeholder="0.5" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">D (in)</Label>
                                                <Input id="depth" type="number" placeholder="5.5" className="h-9 bg-white" />
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
                        Precision and Protection: The Definitive Guide to Lip Liner Packaging
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

                            <p>In the expansive landscape of modern cosmetics, the lip liner remains the essential tool for defining a professional look. It is a product of precision, and its packaging must reflect that exactness. Custom lip liner boxes are more than just protective containers; they are the physical manifestation of your brand's commitment to detail and quality. In a market where consumers value both function and artistic presentation, your packaging must work twice as hard to secure its place in a customer's makeup bag. At CustomPackMakers, we specialize in slim-profile, high-impact packaging that guarantees your lip liners are the first choice for makeup artists and home users alike.</p>
                            <p>The challenges of lip liner packaging are specific to their slender, delicate nature. These pencils are prone to internal lead breakage if dropped and can easily lose their caps if the packaging is not engineered with a precise internal fit. Our design philosophy focuses on "snug-fit" security, ensuring that every liner is cradled in a protective sleeve that maintains its sharpness and integrity from your manufacture line to the customer's vanity. Beyond protection, we focus on maximizing the visual impact of these small canvases through advanced printing and luxury finishing techniques.</p>

                            <h3>The Anatomy of High-Performance Lip Liner Boxes</h3>
                            <p>Because lip liners have a small physical footprint, every millimeter of the packaging must be utilized effectively. We offer specialized material and construction options to achieve this:</p>
                            <ul>
                                <li><strong>Ultra-Slim Cardstock Sleeves:</strong> We use high-density, low-weight SBS paperboard that provides surprising strength with a minimalist profile, perfectly matching the sleekness of the liner itself.</li>
                                <li><strong>Auto-Locking Bottom Closures:</strong> To prevent the accidental sliding-out of the pencil, we incorporate secure bottom designs that provide a sturdy foundation for the slender product.</li>
                                <li><strong>Color-Accurate End-Flaps:</strong> We can print high-fidelity color swatches on the top and bottom flaps of the boxes, allowing customers and retail clerks to identify shades instantly without opening the box.</li>
                                <li><strong>Protective Internal Coatings:</strong> Specialized internal laminates can be applied to prevent the transfer of pencil pigments or oils to the outer box if the cap is slightly loose.</li>
                            </ul>

                            <h3>Strategic Branding for Professional Authority</h3>
                            <p>In the professional beauty world, minimalist designs often convey a sense of expertise and clinical precision. Custom lip liner boxes allow you to create a cohesive brand language that resonates with your target audience. Whether you want a monochromatic, matte look for a high-end salon brand or a vibrant, high-gloss pattern for a trendy e-commerce line, we provide the platform for your creativity. silver foiling or spot UV can be used to highlight your logo or specific shade names, adding a layer of sophisticated visual interest that catch the eye in a crowded display case.</p>
                            <p>Tactile finishes are also a powerful conversion tool. A soft-touch laminate provides a velvety, non-slip texture that suggests luxury and comfortable application, while a traditional smooth aqueous coating keeps the packaging looking clean and professional. These subtle sensory cues build a perception of value that justifies premium pricing and encourages brand loyalty.</p>

                            <h3>Scalable Wholesale Solutions for Global Makeup Brands</h3>
                            <p>The path from a viral boutique brand to a nationwide retail staple requires a packaging partner that understands scalability. At CustomPackMakers, we offer flexible production to support your growth. Our low minimum order quantities (MOQs) allow you to test new seasonal shades or limited collaborations without significant upfront risk. For established wholesale accounts, our high-volume production lines deliver massive capacity and significant cost efficiencies. With our standard 8-10 day turnaround, you can maintain an agile supply chain and never miss a beat when your best-selling liners go viral.</p>

                            <h3>The Eco-Conscious Beauty Standards</h3>
                            <p>Environmentally responsible packaging is no longer optional in the beauty industry. We help you lead with sustainability by offering FSC-certified materials, soy-based inks, and completely recyclable paperboard options. By choosing eco-friendly custom lip liner boxes, you demonstrate a commitment to the planet that resonates with today’s conscious consumers. We can help you create packaging that is as responsible to the environment as it is beautiful for your brand.</p>
                            <p>Ultimately, a custom lip liner box is an investment in your brand's reputation for precision. Let us help you create packaging that is as sharp and reliable as the tools inside. Our team of packaging experts is ready to assist you with every technical detail, from custom die-line creation to the final selection of luxury finishes. Contact us today for a results-oriented design consultation and take your lip line to the next level.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* RELATED PRODUCTS CAROUSEL */}
            <RelatedProductCosmetic />

            {/* WHY CHOOSE US SECTION */}
            <WhyBrandsChooseCosmetic productName="Lip Liner Box" productImage={mainLipLiner} />

            {/* DIFFERENTIATE YOUR BRAND SECTION */}
            <section className="py-10 lg:py-12 bg-white overflow-hidden relative">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* LEFT: Image */}
                        <div className="relative group">
                            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] border border-primary/20 shadow-2xl transform transition-transform duration-700 hover:scale-[1.02]">
                                <img src={mainLipLiner} alt="Differentiate Your Lip Liner Brand" className="w-full h-full object-cover" />
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
                                Differentiate Your <span className="text-primary">Precision</span> From Others
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                Our bespoke custom lip liner boxes are performance-oriented packaging solutions designed to differentiate your defining pencils in a crowded beauty market. By integrating reinforced structural sleeves and color-accurate printing, we ensure that every liner remains secure and perfectly represented. From modern matte finishes that convey professional authority to vibrant metallic accents that catch the light, our packaging is fully customizable. Partner with us for results-oriented wholesale packaging that scales with your growing makeup empire while maintaining the highest quality standards.
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
                                <h2 className="text-2xl md:text-3xl font-bold text-foreground">Lip Liner Packaging FAQs</h2>
                                <p className="text-base text-muted-foreground">Expert guide for your professional pencil line.</p>
                            </div>
                            <Accordion type="single" collapsible defaultValue="item-1" className="w-full space-y-2">
                                {[
                                    { id: "item-1", question: "How do you ensure the pencils don't break during shipping?", answer: "We use precision-fit structural sleeves that prevent internal movement, combined with high-density paperboard that provides excellent impact resistance to keep leads intact." },
                                    { id: "item-2", question: "Can you accurately match the box color to the lip liner shade?", answer: "Yes, we utilize advanced CMYK and Pantone color-matching technology to ensure that the shade represented on your packaging is an exact match for the product inside." },
                                    { id: "item-3", question: "What is the best finish for a professional clinical makeup look?", answer: "A soft-touch matte lamination combined with clean, minimalist typography is highly recommended for creating an authoritative and premium professional brand identity." },
                                    { id: "item-4", question: "Are your materials resistant to moisture and oils?", answer: "Absolutely. We offer specialized aqueous and UV coatings that maintain the box's structural integrity and visual clarity even in high-moisture salon or bathroom environments." },
                                    { id: "item-5", question: "Do you offer eco-friendly options for makeup brands?", answer: "Yes, we provide FSC-certified materials, soy-based inks, and completely recyclable paperboard options for brands that prioritize environmental responsibility." }
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
                            <img src={FAQimage} alt="Lip Liner Box FAQ" className="absolute inset-0 w-full h-full object-cover" />
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

export default CustomLipLinerBoxes;
