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
import { RelatedProductCorrugatedBoxes } from "@/components/RelatedProductCorrugatedBoxes";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";

// Product images for Corrugated Mailer Boxes
import corrugatedMailerBoxes from "@/assets/material/corrugated-boxes/corrugated-mailer-boxes.webp";
import FAQimage from "@/assets/FAQ-image.webp";

const CorrugatedMailerBoxes = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    // Product images for gallery
    const productImages = [
        { src: corrugatedMailerBoxes, alt: "Corrugated Mailer Boxes - Main View" },
        { src: corrugatedMailerBoxes, alt: "Corrugated Mailer Boxes - Side Angle" },
        { src: corrugatedMailerBoxes, alt: "Corrugated Mailer Boxes - Open Box View" },
        { src: corrugatedMailerBoxes, alt: "Corrugated Mailer Boxes - Detail Shot" },
        { src: corrugatedMailerBoxes, alt: "Corrugated Mailer Boxes - Lifestyle Shot" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Corrugated Mailer Boxes | E-commerce Packaging | CustomPackMakers</title>
                <meta name="description" content="Order custom corrugated mailer boxes wholesale. Premium shipping safety, exceptional durability, and custom flute types with fast turnaround & free shipping." />
                <meta name="keywords" content="corrugated mailer boxes, custom e-commerce packaging, durable shipping boxes, custom flute types, corrugated manufacturer" />
                <meta property="og:title" content="Custom Corrugated Mailer Boxes | CustomPackMakers" />
                <meta property="og:description" content="Premium custom corrugated packaging for brands. Highly durable mailer boxes, full-color printing & eco-friendly options. Get a free quote." />
            </Helmet>
            <Header />

            {/* Breadcrumb */}
            <div className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 mt-[120px] md:mt-[140px]">
                <div className="container mx-auto px-[30px] py-3">
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
                                    <Link to="/materials">Box by Materials</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link to="/box-by-material/corrugated-boxes">Corrugated Boxes</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Corrugated Mailer Boxes</BreadcrumbPage>
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
                                <span className="text-primary">Corrugated</span> Mailer Boxes
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Wholesale custom corrugated mailer boxes engineered for incredible durability, shipping safety, and premium brand impact built to scale with your e-commerce business.
                            </p>
                            <div className="pt-2">
                                <Button
                                    size="lg"
                                    className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                                    onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}
                                >
                                    Get a Quote
                                </Button>
                            </div>
                        </div>

                        {/* RIGHT: Large Product Image - Compact */}
                        <div className="lg:col-span-5 relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-muted group">
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200">
                                <img
                                    src={corrugatedMailerBoxes}
                                    alt="Corrugated Mailer Boxes Hero"
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
                        Custom Corrugated Packaging Built for E-commerce Brands That Mean Business
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            Our <strong className="text-foreground">corrugated mailer boxes</strong> are precision-engineered for e-commerce brands that refuse to compromise on quality and shipping safety. Constructed from premium fluted materials, each box delivers the structural durability your supply chain demands while projecting the brand identity your customers remember. Whether you're launching a subscription box or scaling a retail operation, our <strong className="text-foreground">custom branded corrugated packaging</strong> is designed to perform at every touchpoint.
                        </p>
                        <p>
                            From delicate cosmetics to sturdy apparel, our <strong className="text-foreground">custom corrugated packaging</strong> solutions accommodate every size, weight, and style. Each mailer box features reinforced corners, variable flute types, and secure self-locking mechanisms, ensuring your product arrives in pristine condition, every time. With full-color CMYK printing, flexo options, and protective coatings, your <strong className="text-foreground">mailer boxes</strong> become a powerful brand asset. Order wholesale with low minimums and our industry-leading turnaround times.
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
                                                <Input id="length" type="number" placeholder="12" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label>
                                                <Input id="width" type="number" placeholder="8" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">D (in)</Label>
                                                <Input id="depth" type="number" placeholder="5" className="h-9 bg-white" />
                                            </div>
                                        </div>

                                        <div className="space-y-1.5">
                                            <Label htmlFor="quantity" className="text-xs font-semibold text-muted-foreground">Quantity</Label>
                                            <Input id="quantity" type="number" placeholder="500" className="h-9 bg-white" />
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
                        The Importance of Premium Corrugated Packaging for Brands
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

                            <p>
                                In today's highly competitive e-commerce and retail landscape, packaging serves as much more than just a means of transportation. For forward-thinking brands, custom corrugated mailer boxes represent a pivotal moment in the customer journey, bridging the gap between digital expectations and physical reality. Premium corrugated packaging instantly communicates a dedication to quality, attention to detail, and a commitment to customer satisfaction before the product is even unboxed. 
                            </p>
                            <p>
                                Our custom corrugated mailer boxes are strategically developed with these multifaceted requirements at their core. We analyze every component—from the foundational fluted architecture to the intricate finishing touches—to engineer an unboxing experience that profoundly delights your customers while simultaneously reinforcing your unique brand identity. Whether you operate an emerging artisanal startup or a massive multinational e-commerce enterprise, investing in extraordinarily durable packaging showcases your commitment to excellence, practically eliminates shipping damages, and generates the lasting impressions necessary to cultivate fierce brand loyalty and drive consistent repeat purchases.
                            </p>

                            <h3>Unparalleled Durability and Exceptional Shipping Safety</h3>
                            <p>
                                The cornerstone of our exceptional packaging solutions is a relentless focus on maximum durability and absolute shipping safety. The journey from warehouse shelf to customer doorstep is fraught with potential hazards, including heavy stacking, impacts, moisture, and rough handling. Inferior packaging inevitably leads to damaged goods, infuriated customers, costly returns, and irreparable brand damage. By utilizing high-test corrugated board, our mailers provide an impenetrable shield against these threats. 
                            </p>
                            <p>
                                Durability in corrugated packaging is fundamentally a science of structure. We rigorously test our materials for edge crush resistance (ECT) and Mullen burst strength, ensuring that the structural integrity of your boxes far exceeds standard shipping requirements. The presence of a dedicated, self-locking tab design adds a vital secondary layer of protection, immensely improving rigidity and completely preventing the crushing of delicate internal contents. This approach to shipping safety means that your products remain pristine, dramatically reducing reverse logistics costs and preserving your profit margins.
                            </p>

                            <h3>Understanding Flute Types: A, B, C, E, and F</h3>
                            <p>
                                The secret to corrugated durability lies in the specific flute types used within the board. The fluted medium is the wavy layer of paper sandwiched between the flat linerboards. Different flute profiles offer wildly different performance characteristics, and selecting the correct flute is essential for balancing shipping safety, weight, and printability:
                            </p>
                            <ul>
                                <li><strong>A-Flute:</strong> The original corrugated flute design, A-flute is the thickest option available. It provides outstanding cushioning properties and incredible top-to-bottom compression strength, making it the premier choice for extremely fragile items and heavy industrial applications where maximum shipping safety is the absolute highest priority.</li>
                                <li><strong>B-Flute:</strong> Considerably thinner than A-flute and C-flute, B-flute possesses a higher number of flutes per linear foot. This dense structure yields excellent crush resistance and puncture resistance. Its smoother surface also makes it a fantastic substrate for high-quality printing, offering a beautiful balance of durability and aesthetic appeal.</li>
                                <li><strong>C-Flute:</strong> The undisputed workhorse of the shipping industry, C-flute accounts for the vast majority of corrugated boxes globally. It provides a phenomenal middle ground, delivering great stacking strength, excellent cushioning, and solid printability. When general-purpose shipping safety is needed, C-flute is reliably up to the task.</li>
                                <li><strong>E-Flute:</strong> This ultra-thin flute is primarily utilized for retail packaging and premium mailer boxes. While it sacrifices some of the heavy-duty cushioning of larger flutes, E-flute provides unparalleled crush resistance for its size and offers an incredibly smooth, flat surface that is absolutely perfect for high-resolution graphics and intricate brand messaging.</li>
                                <li><strong>F-Flute:</strong> Even thinner than E-flute, F-flute is a specialty micro-flute designed as a highly durable, eco-friendly alternative to traditional folding cartons. It provides excellent rigidity and a flawlessly smooth printing canvas, making it ideal for cosmetics, luxury goods, and sophisticated e-commerce presentations where both durability and visual perfection are demanded.</li>
                            </ul>
                            <p>
                                By expertly matching the correct flute types to your specific product requirements, we ensure that you are never paying for unnecessary bulk while always guaranteeing the exact level of shipping safety your merchandise requires.
                            </p>

                            <h3>Customization Options That Elevate Your Brand</h3>
                            <p>
                                True market differentiation is born from strategic customization. Our state-of-the-art manufacturing capabilities unlock virtually limitless design possibilities, empowering you to create corrugated mailer boxes that perfectly embody your brand's ethos:
                            </p>
                            <ul>
                                <li><strong>Bespoke Dimensions:</strong> We precision-engineer every mailer to perfectly envelop your unique product specifications. Exact sizing drastically minimizes the need for wasteful void-fill materials, prevents internal movement during transit, and significantly enhances overall shipping safety.</li>
                                <li><strong>Self-Locking Architecture:</strong> Our mailers are designed with intelligent dust flaps and cherry locks that securely close the box without the need for excessive tape, ensuring a clean and secure unboxing experience.</li>
                                <li><strong>Custom Interior Architecture:</strong> We design and manufacture specialized corrugated inserts, dividers, and protective cradles that keep multiple items flawlessly organized, entirely eliminating friction and impact damage during complex shipping routes.</li>
                            </ul>

                            <h3>Advanced Printing and Premium Finishing Techniques</h3>
                            <p>
                                Your corrugated boxes should function as high-impact mobile billboards. We deploy advanced flexographic, litho-lamination, and direct-to-corrugated digital printing technologies to achieve jaw-dropping, color-accurate results that command attention in crowded retail environments and on social media unboxing videos:
                            </p>
                            <ul>
                                <li><strong>High-Fidelity CMYK Printing:</strong> Achieve stunning photographic imagery and vibrant, consistent brand colors with our precision printing processes, perfect for intricate graphics and detailed product highlights.</li>
                                <li><strong>Vibrant Pantone Color Matching:</strong> Maintain absolute brand consistency across your entire packaging portfolio with exact, unyielding Pantone (PMS) color matching.</li>
                                <li><strong>Luxury Metallic Foil Stamping:</strong> Infuse an aura of undeniable prestige with gleaming gold, silver, copper, or dynamic holographic foil accents that catch the light and instantly elevate perceived product value.</li>
                                <li><strong>Tactile Embossing and Debossing:</strong> Add rich, dimensional depth with raised or recessed design elements that engage the customer's sense of touch.</li>
                            </ul>

                            <h3>Sustainable and Scalable Packaging Solutions</h3>
                            <p>
                                Environmental responsibility is a critical imperative for modern brands. Our corrugated mailer boxes are manufactured using highly sustainable, recyclable materials sourced from responsibly managed forests. We utilize soy-based inks and water-based adhesives to ensure your packaging is as eco-friendly as it is durable. Whether you need a short run of 100 units for a localized promotional event or 100,000 units for a nationwide retail launch, our scalable production infrastructure guarantees flawless execution, unbeatable durability, and unmatched shipping safety at any volume. Partner with CustomPackMakers to revolutionize your packaging strategy.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            {/* RELATED PRODUCTS CAROUSEL */}
            <RelatedProductCorrugatedBoxes />

            {/* WHY CHOOSE US SECTION */}
            <section className="py-12 relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #fafafa 0%, #f4f6ff 60%, #f0fdf8 100%)' }}>
                {/* Subtle decorative blobs */}
                <div className="absolute top-0 left-0 w-80 h-80 bg-primary/4 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-300/8 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl pointer-events-none" />

                <div className="container mx-auto px-[30px] relative z-10">
                    {/* Centered Section Header */}
                    <div className="text-center mb-14">
                        <span className="inline-block text-xs font-semibold tracking-widest text-primary uppercase mb-3 bg-primary/10 px-4 py-1.5 rounded-full">Our Promise</span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
                            Why Brands Choose <span className="text-primary">CustomPackMakers</span>
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            We combine craftsmanship, speed, and reliability to deliver packaging that makes your brand unforgettable.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">

                        {/* LEFT: Luxury editorial typography */}
                        <div className="space-y-5">

                            {/* Feature 1 */}
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">
                                        Uncompromising Durability
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Every <strong>corrugated mailer box</strong> we produce is built from high-test fluted board, materials selected for structural integrity and shipping safety. Our rigorous QC process ensures each unit meets the durability standards your wholesale operation and retail partners demand, shipment after shipment.
                                    </p>
                                </div>
                            </div>

                            {/* Thin divider */}
                            <div className="w-full h-px bg-slate-100" />

                            {/* Feature 2 */}
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors duration-300">
                                        <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">
                                        Tailored Perfection
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        No two products are identical, and neither are our solutions. We engineer <strong>custom branded packaging</strong> to your exact SKU dimensions, utilizing various flute types (A, B, C, E, F) and bespoke structural forms that eliminate movement and maximize shipping safety. Your brand's packaging spec, executed flawlessly at scale.
                                    </p>
                                </div>
                            </div>

                            {/* Thin divider */}
                            <div className="w-full h-px bg-slate-100" />

                            {/* Feature 3 */}
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors duration-300">
                                        <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">
                                        Eco-Friendly Strength
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Today's buyers expect sustainability without sacrificing durability. Our recyclable <strong>corrugated mailers</strong> deliver the exact shipping safety you need, while reducing your brand's environmental footprint and meeting the ESG expectations of modern retail partners and conscious consumers.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT: Square image with floating badges */}
                        <div className="relative flex items-center justify-center py-8">
                            {/* Square image container */}
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img
                                    src={corrugatedMailerBoxes}
                                    alt="Premium Corrugated Mailer Packaging"
                                    className="w-full h-full object-cover"
                                />
                                {/* Bottom gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                                {/* Bottom text overlay */}
                                <div className="absolute bottom-0 left-0 right-0 p-7">
                                    <p className="text-white font-bold text-lg leading-snug mb-1">
                                        Trusted by 500+ Brands
                                    </p>
                                    <p className="text-white/75 text-sm">Delivering premium packaging across North America</p>
                                </div>
                            </div>

                            {/* Floating badge — top right */}
                            <div className="absolute top-4 -right-2 lg:-right-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80 backdrop-blur-sm">
                                <p className="text-2xl font-bold text-primary leading-none">98%</p>
                                <p className="text-xs text-slate-400 mt-1 font-medium">Satisfaction Rate</p>
                            </div>

                            {/* Floating badge — bottom left */}
                            <div className="absolute bottom-4 -left-2 lg:-left-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80 backdrop-blur-sm">
                                <p className="text-2xl font-bold text-emerald-500 leading-none">8–10</p>
                                <p className="text-xs text-slate-400 mt-1 font-medium">Day Turnaround</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            {/* DIFFERENTIATE YOUR BOXES SECTION */}
            <section className="py-10 lg:py-12 bg-white overflow-hidden relative">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* LEFT: Image */}
                        <div className="relative group">
                            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] border border-primary/20 shadow-2xl transform transition-transform duration-700 hover:scale-[1.02]">
                                <img
                                    src={corrugatedMailerBoxes}
                                    alt="Differentiate Your Boxes"
                                    className="w-full h-full object-cover"
                                />
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
                                Differentiate Your <span className="text-primary">Boxes</span> From Others
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                At CustomPackMakers, we understand that your packaging is the critical last step in your fulfillment process and the first physical touchpoint for your customers. To ensure your brand stands out, we utilize state-of-the-art manufacturing processes combined with premium printing techniques. Our team of experts works closely with you to determine the perfect flute types (from E-flute for retail to A-flute for heavy shipping) ensuring a snug fit and maximum shipping safety. By integrating distinctive features and high-end finishes, we help you create a world-class unboxing experience that builds lasting brand loyalty.
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
                                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                                    Frequently Asked Questions
                                </h2>
                                <p className="text-base text-muted-foreground">
                                    We’re confident that you will love our products and service.
                                </p>
                            </div>

                            <Accordion type="single" collapsible defaultValue="item-1" className="w-full space-y-2">
                                {[
                                    {
                                        id: "item-1",
                                        question: "What Are The Outcomes Of Using Corrugated Mailer Boxes?",
                                        answer: "Using our custom corrugated mailer boxes significantly enhances your shipping safety and customer unboxing experience. They provide robust protection for your products during transit, drastically reduce return rates due to damage, and serve as a mobile billboard for your brand."
                                    },
                                    {
                                        id: "item-2",
                                        question: "What Time Does It Take To Manufacture My Order?",
                                        answer: "Our standard turnaround time is 8-10 business days after design approval. We also offer expedited rush options (4-6 business days) for time-sensitive launches. Shipping times depend on your location and chosen delivery method."
                                    },
                                    {
                                        id: "item-3",
                                        question: "How do different flute types impact durability?",
                                        answer: "Flute types directly determine the durability and shipping safety of your box. For heavy items requiring maximum cushioning, A-flute or C-flute is ideal. For a balance of strength and high-quality printing, B-flute is great. For retail presentation with solid crush resistance, E-flute or F-flute are perfect."
                                    },
                                    {
                                        id: "item-4",
                                        question: "Can I print on both the inside and outside of the box?",
                                        answer: "Absolutely. We offer full-color CMYK printing on both the exterior and interior of our corrugated boxes. Interior printing is a fantastic way to surprise customers and elevate the unboxing experience."
                                    },
                                    {
                                        id: "item-5",
                                        question: "Are your corrugated boxes eco-friendly?",
                                        answer: "Yes, our corrugated boxes are highly sustainable. They are made from a high percentage of recycled materials and are fully recyclable and biodegradable after use, making them an excellent choice for eco-conscious brands."
                                    }
                                ].map((faq) => (
                                    <AccordionItem
                                        key={faq.id}
                                        value={faq.id}
                                        className="border border-slate-200 rounded-lg bg-white overflow-hidden data-[state=open]:border-primary data-[state=open]:ring-1 data-[state=open]:ring-primary/20 data-[state=open]:bg-primary/5 transition-all duration-300"
                                    >
                                        <AccordionTrigger className="px-5 py-3 hover:no-underline [&>svg]:hidden group">
                                            <span className="text-left font-semibold text-foreground text-base">{faq.question}</span>
                                            <div className="shrink-0 ml-4 p-1 rounded-full bg-slate-100 group-data-[state=open]:bg-primary group-data-[state=open]:text-white transition-colors duration-200">
                                                <Plus className="h-3 w-3 group-data-[state=open]:hidden" />
                                                <Minus className="h-3 w-3 hidden group-data-[state=open]:block" />
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent className="px-5 pb-5 pt-0 text-slate-600 leading-relaxed text-sm">
                                            {faq.answer}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>

                        {/* RIGHT COLUMN: Image */}
                        <div className="relative w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden ">
                            <img
                                src={FAQimage}
                                alt="Corrugated Mailer Boxes FAQ"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Brand Rating */}
            <BrandRating />

            {/* Main Quote Form */}
            <QuoteForm />

            <Footer />
        </div >
    );
};

export default CorrugatedMailerBoxes;
