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
import mainCosmeticLabels from "@/assets/cosmetic-boxes/Cosmetic Labels.webp";

const CosmeticLabels = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    const productImages = [
        { src: mainCosmeticLabels, alt: "Custom Cosmetic Label - HD Print View" },
        { src: mainCosmeticLabels, alt: "Custom Cosmetic Label - Moisture-Resistant" },
        { src: mainCosmeticLabels, alt: "Custom Cosmetic Label - Foil Detail" },
        { src: mainCosmeticLabels, alt: "Custom Cosmetic Label - Matte Finish" },
        { src: mainCosmeticLabels, alt: "Custom Cosmetic Label - Bulk Sheet Set" },
    ];


    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Cosmetic Labels | High-Definition Beauty Labeling Wholesale</title>
                <meta name="description" content="Order custom cosmetic labels wholesale. High-definition beauty labeling with moisture-resistant finishes, oil-proof adhesives, and premium foil stamping. Fast turnaround." />
                <meta name="keywords" content="custom cosmetic labels, beauty product labeling, wholesale cosmetic sticker printing, oilproof labels for cosmetics, premium brand labels" />
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
                                <BreadcrumbPage>Cosmetic Labels</BreadcrumbPage>
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
                                <span className="text-primary">Custom</span> Cosmetic Labels
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Enhance your beauty containers with elite custom cosmetic labels featuring vibrant high-definition printing and moisture-resistant finishes that perfectly represent your brand identity while ensuring maximum durability on every premium retail shelf.
                            </p>
                            <div className="pt-2">
                                <Button
                                    size="lg"
                                    className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                                    onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}
                                >
                                    Get custom labels
                                </Button>
                            </div>
                        </div>

                        {/* RIGHT: Large Product Image - Compact */}
                        <div className="lg:col-span-5 relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-muted group">
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200">
                                <img
                                    src={mainCosmeticLabels}
                                    alt="Custom Cosmetic Labels Hero"
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
                        Unyeilding Clarity for Your Professional Product Line
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            Our <strong className="text-foreground">custom cosmetic labels</strong> are designed for beauty and wellness brands that demand the highest standards of visual clarity and physical durability. Your label is the defining element of your product's "face" in the retail world. We utilize advanced high-definition offset printing and industrial-grade adhesives that ensure your branding remains stationary and vibrant, regardless of environmental factors like moisture or oil contact.
                        </p>
                        <p>
                            To command authority in the luxury beauty market, your <strong className="text-foreground">cosmetic labeling</strong> must project an aura of professional precision. We offer advanced finishing options, from modern matte laminates that convey authoritative reliability to elegant metallic foil stamping that catches the consumer's eye. Partner with us for results-oriented wholesale labeling that establishes your brand as a market leader in professional cosmetics and personal care.
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
                                        <div className="grid grid-cols-2 gap-3">
                                            <div className="space-y-1.5">
                                                <Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">Width (in)</Label>
                                                <Input id="width" type="number" placeholder="2.5" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="height" className="text-xs font-semibold text-muted-foreground">Height (in)</Label>
                                                <Input id="height" type="number" placeholder="4" className="h-9 bg-white" />
                                            </div>
                                        </div>

                                        <div className="space-y-1.5">
                                            <Label htmlFor="quantity" className="text-xs font-semibold text-muted-foreground">Quantity</Label>
                                            <Input id="quantity" type="number" placeholder="5000" className="h-9 bg-white" />
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
                        Vibrant Visibility: The Definitive Guide to Professional Cosmetic Labeling
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

                            <p>In the expansive and hyper-competitive world of beauty and personal care, the label is the primary vehicle for your brand's voice. It is the defining feature of your container, promising quality, efficacy, and aesthetic pleasure. However, because cosmetic products are frequently used in high-moisture environments like bathrooms or involve oils and chemicals that can degrade traditional materials, your labels must do much more than just look professional; they must serve as a high-performance, durable skin for your product. Custom cosmetic labels are your brand's primary asset for delivering both aesthetic brilliance and technical reliability. At CustomPackMakers, we specialize in high-concept beauty labeling that ensures your products dominate the market and maintain their pristine look through every use.</p>
                            <p>The engineering challenges of cosmetic labeling are significant and specific. Foundations, serums, and oils can soften adhesives and cause inks to bleed or smudge if not formulated correctly. Furthermore, labels are often applied to curved glass or plastic surfaces that require specialized "memory" properties to prevent flagging or peeling at the edges. Our design philosophy focuses on "Molecular Adhesion," where we utilize industrial-grade adhesives and moisture-resistant substrates. This ensures your professional branding remains perfectly registered and vibrant from your filling line to your customer's final drop, preserving the luxury status of your product.</p>

                            <h3>Material Innovation for Durable Beauty Branding</h3>
                            <p>To differentiate your brand and ensure long-term visibility, we offer a selection of specialized, high-performance materials for your custom cosmetic labels:</p>
                            <ul>
                                <li><strong>BOPP (Biaxially Oriented Polypropylene):</strong> The gold standard for cosmetic labeling. This plastic-based film is completely waterproof and oil-resistant, available in clear, white, or silver finishes.</li>
                                <li><strong>Estate and Specialty Texture Papers:</strong> For boutique artisan brands, we offer luxury paper stocks that provide a classic, tactile feel while being treated for incidental moisture resistance.</li>
                                <li><strong>Ultra-Clear "No-Label Look" Films:</strong> We provide high-clarity films that allow your product's color to shine through, creating a seamless, high-end integration with glass containers.</li>
                                <li><strong>FSC-Certified Sustainable Substrates:</strong> We offer eco-friendly label options that maintain professional durability while meeting the growing demand for environmental harmony in the beauty world.</li>
                            </ul>

                            <h3>Strategic Design Elements for Interactive Success</h3>
                            <p>To win on the crowded retail shelf or high-end makeup counter, your custom cosmetic labels must include features that engage the consumer's senses immediately:</p>
                            <ul>
                                <li><strong>High-Definition Offset Printing:</strong> Utilizing advanced 4-color and Pantone matching ensures your brand colors are reproduced with absolute fidelity and micro-text remains perfectly legible.</li>
                                <li><strong>Sophisticated Foil Stamping:</strong> Adding gold, silver, or holographic highlights to your brand logo creates a sensory experience that justifies premium pricing and builds brand trust.</li>
                                <li><strong>Advanced Tactile Finishes:</strong> Using soft-touch matte lamination or spot UV layering adds a three-dimensional depth that customers can feel as well as see.</li>
                                <li><strong>Custom-Die-Cut Shapes:</strong> We can create labels in any unique geometric form to perfectly wrap around uniquely shaped bottles or to create a standout visual signature.</li>
                            </ul>

                            <h3>The Science of Regulatory and Visual Clarity</h3>
                            <p>In the cosmetics industry, information clarity is as important as visual design. Your labeling must house mandatory ingredient lists, safety warnings, and usage instructions without sacrificing its high-end aesthetic. At CustomPackMakers, we utilize advanced high-definition digital and offset printing to ensure every detail remains sharp and professional. Whether you need multilingual instructions or complex decorative patterns, our manufacturing processes deliver perfect registration for every production run, establishing your brand as a reliable authority in professional beauty.</p>

                            <h3>Scalable Wholesale for Growing Cosmetic Empires</h3>
                            <p>Whether you are a boutique artisan brand launching a single signature serum or a global powerhouse requiring monthly wholesale shipments of hundreds of thousands, we are built to support you. We offer low minimum order quantities (MOQs) which are perfect for testing seasonal releases or limited-edition collaborations. For established high-volume brands, our industrial printing lines deliver massive capacity and exceptional cost efficiencies. Our industry-leading 8-10 day turnaround ensures your supply chain remains agile and responsive to the fast-moving trends of the beauty market.</p>

                            <h3>Environmental Leadership in Beauty Labeling</h3>
                            <p>Modern consumers make purchasing decisions based on a brand's environmental values. We help you lead the way with sustainable labeling solutions. Our options include recycled content liners, soy-based inks, and completely recyclable films. By choosing eco-friendly custom cosmetic labels, you demonstrate a modern leadership that resonates with today’s conscious buyers, building a deeper brand connection and long-term loyalty. Let us guide you through selecting materials that are as responsible to the planet as they are beautiful for your brand.</p>
                            <p>Ultimately, a custom cosmetic label is an investment in your brand's reputation for professional excellence. It is the messenger of your brand's quality and the protector of your most technical branding. Let us help you create labeling that is as precise and powerful as the results your products offer. Our experts are ready to assist with every technical detail of your design. Contact us today for a custom quote and take the first step toward market dominance.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* RELATED PRODUCTS CAROUSEL */}
            <RelatedProductCosmetic />

            {/* WHY CHOOSE US SECTION */}
            <WhyBrandsChooseCosmetic productName="Cosmetic Label" productImage={mainCosmeticLabels} />

            {/* DIFFERENTIATE YOUR BRANDING SECTION */}
            <section className="py-10 lg:py-12 bg-white overflow-hidden relative">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* LEFT: Image */}
                        <div className="relative group">
                            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] border border-primary/20 shadow-2xl transform transition-transform duration-700 hover:scale-[1.02]">
                                <img src={mainCosmeticLabels} alt="Differentiate Your Label Branding" className="w-full h-full object-cover" />
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
                                Differentiate Your <span className="text-primary">Branding</span> From Others
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                Our bespoke custom cosmetic labels are performance-oriented branding solutions designed to differentiate your beauty products in a crowded market. By integrating advanced high-definition offset printing and specialized oil-resistant coatings, we ensure that every label remains vibrant and protected from accidental leakage or environmental degradation. From modern matte finishes that convey professional authority to elegant metallic foil stamping that catches the light, our labels are fully customizable. Partner with us for results-oriented wholesale labeling that establishes your brand as a market leader.
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
                                <h2 className="text-2xl md:text-3xl font-bold text-foreground">Cosmetic Labeling FAQs</h2>
                                <p className="text-base text-muted-foreground">Expert insights for your premium branding.</p>
                            </div>
                            <Accordion type="single" collapsible defaultValue="item-1" className="w-full space-y-2">
                                {[
                                    { id: "item-1", question: "Are your cosmetic labels waterproof and oil-resistant?", answer: "Yes, we specialize in BOPP and specialized film substrates that provide 100% moisture and oil resistance, ensuring your label remains pristine in bathroom and heavy-use environments." },
                                    { id: "item-2", question: "Can you achieve a 'no-label look' on glass bottles?", answer: "Absolutely. We utilize high-clarity clear films and specialized adhesives that create a seamless, transparent integration with glass or plastic containers." },
                                    { id: "item-3", question: "How do you ensure the label doesn't peel at the edges (flagging)?", answer: "We use industrial-strength adhesives and substrates with excellent 'memory' properties that ensure the label stays flat and secure on curved or cylindrical surfaces." },
                                    { id: "item-4", question: "Do you offer premium finishes like foil stamping on labels?", answer: "Yes, we can incorporate silver, gold, and holographic foil stamping to highlight your brand logo and signify premium quality to your customers." },
                                    { id: "item-5", question: "What is the minimum order quantity for custom labels?", answer: "We offer low MOQs perfect for testing new products or limited batches, while our high-volume lines deliver exceptional cost efficiencies for wholesale accounts." }
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
                        <div className="relative w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden ">
                            <img src={FAQimage} alt="Cosmetic Label FAQ" className="absolute inset-0 w-full h-full object-cover" />
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

export default CosmeticLabels;
