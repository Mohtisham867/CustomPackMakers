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
import mainLipstick from "@/assets/industry/cosmetic-boxes/Custom Lipstick Boxes.webp";

const CustomLipstickBoxes = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    const productImages = [
        { src: mainLipstick, alt: "Custom Lipstick Box - Luxury View" },
        { src: mainLipstick, alt: "Custom Lipstick Box - Open Display" },
        { src: mainLipstick, alt: "Custom Lipstick Box - Gold Foil Detail" },
        { src: mainLipstick, alt: "Custom Lipstick Box - Matte Texture" },
        { src: mainLipstick, alt: "Custom Lipstick Box - Bulk Retail" },
    ];


    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Lipstick Boxes | Luxury Cosmetic Packaging Wholesale</title>
                <meta name="description" content="Order custom lipstick boxes wholesale. Luxury makeup packaging with velvet-touch finishes, gold foil accents, and rigid board construction. Fast turnaround." />
                <meta name="keywords" content="custom lipstick boxes, lipstick packaging, wholesale makeup boxes, luxury lipstick packaging, professional cosmetic boxes" />
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
                                <BreadcrumbPage>Custom Lipstick Boxes</BreadcrumbPage>
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
                                <span className="text-primary">Custom</span> Lipstick Boxes
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Grace your makeup brand with luxury custom lipstick boxes featuring elegant velvet-touch finishes and gold foil accents that perfectly protect your signature shades while delivering a world-class unboxing experience for every customer.
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
                                    src={mainLipstick}
                                    alt="Custom Lipstick Boxes Hero"
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
                        Unrivaled Artistry for Your Signature Pigments
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            Our <strong className="text-foreground">custom lipstick boxes</strong> are the standard for premium beauty brands seeking to command attention in a crowded retail environment. We utilize high-density, rigid cardstocks that provide an unmistakable high-end weight and professional structural integrity. Every box is precision-engineered to provide a snug fit for your lipstick tubes, ensuring they remain secure and protected from accidental engagement during transit.
                        </p>
                        <p>
                            Visual impact is the primary driver of cosmetic sales. Our <strong className="text-foreground">lipstick packaging</strong> features advanced printing and finishing techniques, from velvety soft-touch lamination to classic gold foiling. These luxury details aggregate to create a perception of unrivaled quality that resonates with discerning makeup enthusiasts worldwide. Partner with us to transform your lip collection into a market-leading luxury brand.
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
                                                <Input id="depth" type="number" placeholder="3" className="h-9 bg-white" />
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
                        Elite Elegance: The Ultimate Guide to Luxury Lipstick Packaging
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

                            <p>In the high-stakes world of luxury cosmetics, a lipstick is never just a tube of color; it is a symbol of identity, an accessory of fashion, and a tool of transformation. When a customer picks up a lipstick box, they are evaluating the entire Brand's worth based on that single tactile interaction. Custom lipstick boxes are the silent ambassadors of your brand's heritage and quality. They must be designed not only to protect the delicate rotational mechanism and vibrant pigments within but to deliver a sense of exclusivity and prestige from the moment they are spotted on a retail shelf. At CustomPackMakers, we specialize in high-concept lipstick packaging that defines the boundaries of modern beauty luxury.</p>
                            <p>The engineering of a perfect lipstick box requires a deep understanding of balanced proportions and high-end materials. Because lipstick containers are compact and relatively heavy for their size, the packaging must offer exceptional structural integrity without excessive bulk. Our design philosophy centers on "compact luxury," where every millimeter of the box is utilized to communicate brand authority. From heavy-duty rigid boards to sophisticated specialty papers, we provide the physical foundation for your most iconic beauty products, ensuring they survive the rigors of global logistics while arriving in pristine, showroom condition.</p>

                            <h3>Material Innovation for Premium Brand Authority</h3>
                            <p>To differentiate your brand in a crowded luxury market, you must start with the highest quality substrates. We offer a curated selection of materials for custom lipstick boxes:</p>
                            <ul>
                                <li><strong>Luxury Rigid Board:</strong> The premiere choice for high-end boutique brands. These sturdy, non-bending boxes offer a gratifying weight and a professional "click" upon closing, signaling ultimate value to the consumer.</li>
                                <li><strong>Solid Bleached Sulfate (SBS):</strong> Our premium grade SBS cardstock provides an ultra-smooth, bright white canvas that is perfect for high-definition printing and complex finishes like spot UV or holographic foiling.</li>
                                <li><strong>Textured Specialty Stocks:</strong> To create a unique tactile experience, we offer papers with linen, leather, or metallic textures that invite the customer to feel the quality as much as they see it.</li>
                                <li><strong>Recycled & Sustainable Options:</strong> We provide FSC-certified materials that maintain a luxury feel while meeting the demands of the modern, eco-conscious beauty consumer.</li>
                            </ul>

                            <h3>Strategic Design Elements for the Global Retail Stage</h3>
                            <p>To dominate the retail shelf, your lipstick packaging must include design features that enhance both function and aesthetic appeal:</p>
                            <ul>
                                <li><strong>Precision-Fit Inserts:</strong> We can include custom-cut foam or board inserts that hold the lipstick tube stationary, preventing it from rattling and ensuring its cap remains securely fastened during transit.</li>
                                <li><strong>Soft-Touch Matte Lamination:</strong> This velvet-like finish creates a non-slip, premium surface that feels contemporary and luxurious, resisting fingerprints and maintaining a clean look.</li>
                                <li><strong>High-Impact Foil Stamping:</strong> Using metallic gold, silver, or rose gold foil to highlight your brand logo or the shade number adds a level of sophistication that immediately catches the eye.</li>
                                <li><strong>Embossing & Debossing:</strong> Adding physical depth to your packaging through textured 3D logos or patterns creates a sensory experience that builds a lasting memory of your brand.</li>
                            </ul>

                            <h3>The Science of Color Accuracy</h3>
                            <p>In the lipstick market, color fidelity is everything. A customer expects the shade represented on the box or the end-flap to be an exact match for the bullet inside. At CustomPackMakers, we utilize advanced color calibration and high-fidelity offset printing to ensure your pigments are perfectly represented. Whether you are launching a flagship red or a limited-edition nude, we guarantee shade consistency across every production run, building the trust and reliability that leads to lifelong brand loyalty.</p>

                            <h3>Scalability for Growing Cosmetic Empires</h3>
                            <p>Whether you are a viral startup needing a small batch for a "drop" or an established powerhouse requiring monthly wholesale shipments of thousands, our production lines are built to scale with you. We offer low minimum order quantities (MOQs) for flexibility alongside massive industrial capacity for global distribution. Our industry-leading 8-10 day turnaround ensures that your supply chain remains responsive and that your bestselling shades are always ready for your customers. Partnering with us means you have a dedicated packaging expert focused on making your brand the number-one choice in the luxury lip market.</p>

                            <h3>Sustainability in Luxury Beauty</h3>
                            <p>True luxury today includes a commitment to the planet. We help your brand lead the way with sustainable lipstick packaging solutions. From completely plastic-free constructions to soy-based inks and biodegradable coatings, we can create packaging that aligns with your environmental values without sacrificing its high-end character. Choosing eco-friendly custom lipstick boxes demonstrates a modern leadership that resonates deeply with today’s conscious collectors, turning one-time buyers into dedicated brand advocates.</p>
                            <p>Ultimately, your lipstick box is the defining container for your brand's most intimate product. Let us help you create packaging that is as bold and beautiful as the colors you produce. Our experts are ready to assist with every detail of technical development and design. Contact us today for a custom quote and begin the journey toward market dominance.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* RELATED PRODUCTS CAROUSEL */}
            <RelatedProductCosmetic />

            {/* WHY CHOOSE US SECTION */}
            <WhyBrandsChooseCosmetic productName="Lipstick Box" productImage={mainLipstick} />

            {/* DIFFERENTIATE YOUR BRAND SECTION */}
            <section className="py-10 lg:py-12 bg-white overflow-hidden relative">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* LEFT: Image */}
                        <div className="relative group">
                            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] border border-primary/20 shadow-2xl transform transition-transform duration-700 hover:scale-[1.02]">
                                <img src={mainLipstick} alt="Differentiate Your Lipstick Brand" className="w-full h-full object-cover" />
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
                                Differentiate Your <span className="text-primary">Lipsticks</span> From Others
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                Our high-end custom lipstick boxes are meticulously engineered to differentiate your pigments in a competitive luxury beauty landscape. By utilizing rigid, structural-grade paperboard and precision-fit internal cradles, we ensure that every lipstick tube remains stationary and protected from accidental engagement or environmental damage. From sophisticated matte laminates that convey modern authority to vibrant holographic highlights that catch the light, our packaging is fully customizable. Partner with us to create a cohesive brand identity that resonates with your audience and drives significant long-term growth.
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
                                <h2 className="text-2xl md:text-3xl font-bold text-foreground">Lipstick Packaging FAQs</h2>
                                <p className="text-base text-muted-foreground">Expert insights for your premium beauty line.</p>
                            </div>
                            <Accordion type="single" collapsible defaultValue="item-1" className="w-full space-y-2">
                                {[
                                    { id: "item-1", question: "How do you ensure lipstick tubes don't rattle in the box?", answer: "We utilize custom-engineered internal dimensions and optional precision-fit inserts that hold the lipstick tube snugly, preventing movement and rattling during transit." },
                                    { id: "item-2", question: "What finishes achieve a luxury boutique aesthetic?", answer: "We highly recommend combining a soft-touch matte lamination with gold or rose gold foil stamping to achieve a sophisticated, high-end boutique aesthetic." },
                                    { id: "item-3", question: "Are your materials resistant to environmental moisture?", answer: "Yes, our high-density paperboards are treated with aqueous or UV coatings that maintain structural integrity and visual brilliance even in humid environments." },
                                    { id: "item-4", question: "Can you guarantee color matching for lipstick shades?", answer: "Absolutely. We use high-fidelity color-matching technology to ensure that any shade swatches on your packaging perfectly represent the product bullet inside." },
                                    { id: "item-5", question: "Do you offer sustainable packaging for makeup brands?", answer: "Yes, we provide FSC-certified materials, soy-based inks, and recycled cardstock options that align perfectly with the values of modern eco-conscious beauty consumers." }
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
                            <img src={FAQimage} alt="Lipstick Box FAQ" className="absolute inset-0 w-full h-full object-cover" />
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

export default CustomLipstickBoxes;
