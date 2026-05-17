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
import { RelatedProductApparel } from "@/components/RelatedProductApparel";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";
import { ApparelSEOContent as SEOContent } from "@/components/ApparelSEOContent";

// Placeholder images (using shoe box images as requested)
import customShoeBoxes from "@/assets/industry/apparel-boxes/custom-shoe-boxes.webp";
import cufflinkBox1 from "@/assets/industry/apparel-boxes/cufflink-boxes/cufflink-1.webp";
import cufflinkBox2 from "@/assets/industry/apparel-boxes/cufflink-boxes/cufflink-2.webp";
import cufflinkBox3 from "@/assets/industry/apparel-boxes/cufflink-boxes/cufflink-3.webp";
import cufflinkBox4 from "@/assets/industry/apparel-boxes/cufflink-boxes/cufflink-4.webp";
import cufflinkBox5 from "@/assets/industry/apparel-boxes/cufflink-boxes/cufflink-5.webp";
import cufflinkBox6 from "@/assets/industry/apparel-boxes/cufflink-boxes/deferent.webp";
import cufflinkBox7 from "@/assets/industry/apparel-boxes/cufflink-boxes/why-choos.webp";
import cufflinkBoxHero from "@/assets/industry/apparel-boxes/cufflink-boxes/cufflink-packaging-hero.webp";

// FAQ image
import FAQimage from "@/assets/FAQ-image.webp";

const CufflinkBoxes = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    // Placeholder gallery images
    const productImages = [
        { src: cufflinkBox1, alt: "Custom Cufflink Boxes - Main View" },
        { src: cufflinkBox2, alt: "Custom Cufflink Boxes - Side Angle" },
        { src: cufflinkBox3, alt: "Custom Cufflink Boxes - Open View" },
        { src: cufflinkBox4, alt: "Custom Cufflink Boxes - Detail Shot" },
        { src: cufflinkBox5, alt: "Custom Cufflink Boxes - Lifestyle Shot" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Cufflink Boxes | Luxury Packaging | CustomPackMakers</title>
                <meta name="description" content="Premium custom cufflink boxes wholesale. Elegant packaging solutions for luxury accessories with custom inserts, foil stamping, and magnetic closures." />
                <meta name="keywords" content="custom cufflink boxes, luxury packaging, jewelry boxes, wholesale cufflink packaging, rigid boxes" />
                <meta property="og:title" content="Custom Cufflink Boxes | Luxury Packaging | CustomPackMakers" />
                <meta property="og:description" content="Elevate your brand with premium custom cufflink boxes. Durable, stylish, and fully customizable tailored to your accessory line." />
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
                                    <Link to="/categories/apparel-boxes">Apparel Boxes</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Cufflink Boxes</BreadcrumbPage>
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
                                <span className="text-primary">Custom</span> Cufflink Boxes
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Wholesale custom branded cufflink packaging engineered for sophistication, protection, and premium unboxing built to scale with your business.
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
                                    src={cufflinkBoxHero}
                                    alt="Custom Cufflink Boxes Hero"
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
                        Custom Cufflink Packaging Built for Luxury Brands That Detail Matters
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            Our <strong className="text-foreground">custom cufflink boxes</strong> are precision-engineered for accessory brands that demand elegance. Constructed from rigid chipboard, premium textured paper, and velvet-lined interiors, each box delivers the sophisticated presentation your products deserve while projecting the brand identity your customers admire. Whether you're launching a limited edition collection or scaling a wholesale accessory line, our <strong className="text-foreground">custom branded cufflink packaging</strong> is designed to impress at every touchpoint.
                        </p>
                        <p>
                            From classic square boxes to unique shapes, our <strong className="text-foreground">custom packaging</strong> solutions accommodate all cufflink styles. Each box features secure inserts, durable hinges or lids, and optional foil stamping, ensuring your product is displayed beautifully. With full-color printing, embossing, and matte or gloss finishes, your <strong className="text-foreground">luxury cufflink boxes</strong> become a symbol of quality. Order wholesale with low minimums and our industry-leading 8–10 day turnaround.
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
                            <div className="relative w-full max-w-lg mx-auto overflow-hidden rounded-lg shadow-sm border border-border bg-white" style={{ aspectRatio: '4/3' }}>
                                <img
                                    src={productImages[selectedImage].src}
                                    alt={productImages[selectedImage].alt}
                                    className="w-full h-full object-cover"
                                />
                            </div>
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

                        {/* RIGHT SIDE: Sticky Quote Form */}
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
                                                <Input id="length" type="number" placeholder="3" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label>
                                                <Input id="width" type="number" placeholder="3" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">D (in)</Label>
                                                <Input id="depth" type="number" placeholder="2" className="h-9 bg-white" />
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
            <SEOContent>
                <h2>The Definitive Guide to Custom Cufflink Boxes</h2>
                <p>
                    In the realm of high-end accessories, cufflinks stand as symbols of sophistication and attention to detail. Therefore, <strong>custom cufflink boxes</strong> must reflect the same level of elegance and craftsmanship. Packaging is not merely a protective shell; it is the first physical interaction a customer has with your brand. A well-crafted box sets the tone for the product inside, transforming a simple purchase into a luxurious gifting experience. At CustomPackMakers, we specialize in creating packaging that not only secures your delicate accessories but also elevates your brand's perceived value effectively.
                </p>
                <p>
                    Whether you are a boutique jeweler, a high-street fashion retailer, or a corporate gift supplier, our <strong>wholesale custom cufflink packaging</strong> solutions are tailored to meet your specific needs. We understand that cufflinks come in various materials—from precious metals and gemstones to silk knots—and each requires a unique packaging approach to ensure safety and visual appeal.
                </p>

                <h3>Premium Materials for Maximum Protection and Style</h3>
                <p>
                    The foundation of any great package is its material. For cufflinks, we offer a selection of high-quality options designed to offer both durability and aesthetic pleasure:
                </p>
                <ul>
                    <li><strong>Rigid Chipboard:</strong> The gold standard for luxury. These non-bendable boxes provide superior protection and a substantial, premium feel. They are perfect for two-piece boxes (lid and base) or hinged lid styles often used for high-end jewelry.</li>
                    <li><strong>Textured Specialty Papers:</strong> Wrap your rigid boxes in papers that mimic the look and feel of leather, linen, or velvet. These textures add a tactile dimension to the unboxing experience, signaling quality before the box is even opened.</li>
                    <li><strong>Eco-Friendly Kraft:</strong> For brands focusing on sustainability, our high-quality brown or white Kraft board offers a natural, organic look without compromising on strength. It is 100% biodegradable and recyclable.</li>
                    <li><strong>Metallic Stocks:</strong> Specific for holidays or limited editions, metallic cardstocks can create a dazzling, eye-catching shelf presence.</li>
                </ul>

                <h3>Bespoke Structural Design and Custom Inserts</h3>
                <p>
                    Cufflinks are small and prone to movement, which can cause damage or scratching during transit. Our <strong>custom inserts</strong> are precision-engineered to solve this problem while enhancing presentation:
                </p>
                <ul>
                    <li><strong>Die-Cut Foam & Velvet:</strong> The most popular choice for luxury items. High-density foam cut to the exact shape of your cufflinks holds them securely in place, topped with plush velvet for a soft, elegant backdrop.</li>
                    <li><strong>Cardstock Platforms:</strong> A more eco-friendly alternative, cardstock inserts can be folded to create a riser that displays the cufflinks prominently.</li>
                    <li><strong>Elastic Loops:</strong> Simple and effective, these secure the cufflinks against a card backing, ideal for display hanging boxes or clear-top packaging.</li>
                </ul>

                <h3>Advanced Printing and Finishing Techniques</h3>
                <p>
                    To truly differentiate your brand, you need packaging that pops. Our state-of-the-art printing capabilities allow for limitless creativity:
                </p>
                <ul>
                    <li><strong>Hot Foil Stamping:</strong> Nothing says "luxury" like gold, silver, or rose gold foil. Use it for your logo or border details to catch the light and add an air of exclusivity.</li>
                    <li><strong>Spot UV Coating:</strong> Create a striking contrast by applying a high-gloss finish to specific areas (like your logo) against a matte background. This subtle effect is highly sophisticated.</li>
                    <li><strong>Embossing & Debossing:</strong> Add physical depth to your packaging by raising (emboss) or recessing (deboss) your brand name or pattern. This adds a tactile element that customers love to touch.</li>
                    <li><strong>Soft-Touch Lamination:</strong> A special coating that gives the box a velvety, smooth texture, making it feel expensive and pleasant to hold.</li>
                </ul>

                <h3>Why Choose CustomPackMakers for Your Cufflink Packaging?</h3>
                <p>
                    We are more than just a manufacturer; we are your branding partner. Our commitment to quality, speed, and customer satisfaction sets us apart:
                </p>
                <ul>
                    <li><strong>Low Minimum Orders:</strong> Start small with as few as 100 units, perfect for testing new designs or limited runs.</li>
                    <li><strong>Fast Turnaround:</strong> We understand the pace of retail. Our standard production time is 8-10 business days, with rush options available.</li>
                    <li><strong>Free Design Support:</strong> Our expert designers will help you finalize your artwork, ensure proper die-lines, and create a 3D mockup before production begins.</li>
                    <li><strong>Wholesale Pricing:</strong> As you scale, our unit costs decrease significantly, offering you the best value in the market.</li>
                </ul>
                <p>
                    Invest in packaging that speaks volumes about your brand. Contact us today to start designing your custom cufflink boxes.
                </p>
            </SEOContent>

            {/* RELATED PRODUCTS CAROUSEL */}
            <RelatedProductApparel />

            {/* WHY CHOOSE US SECTION */}
            <section className="py-12 relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #fafafa 0%, #f4f6ff 60%, #f0fdf8 100%)' }}>
                <div className="absolute top-0 left-0 w-80 h-80 bg-primary/4 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-300/8 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl pointer-events-none" />
                <div className="container mx-auto px-[30px] relative z-10">
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
                        <div className="space-y-5">
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
                                        Uncompromising Quality
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Every <strong>custom cufflink box</strong> we produce is built from materials selected for structural integrity and tactile luxury. Our rigorous QC process ensures each unit meets the durability standards your wholesale operation and retail partners demand, shipment after shipment.
                                    </p>
                                </div>
                            </div>
                            <div className="w-full h-px bg-slate-100" />
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
                                        No two accessory lines are identical, and neither are our solutions. We engineer <strong>custom branded packaging</strong> to your exact dimensions, with bespoke structural forms that eliminate movement and protect finish. Your brand's packaging spec, executed flawlessly at scale.
                                    </p>
                                </div>
                            </div>
                            <div className="w-full h-px bg-slate-100" />
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
                                        Eco-Friendly Elegance
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Today's buyers expect sustainability without sacrificing premium aesthetics. Our FSC-certified, recyclable <strong>wholesale boxes</strong> deliver the same luxury look and structural performance, while reducing your brand's environmental footprint.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img
                                    src={cufflinkBox7}
                                    alt="Premium Custom Cufflink Box Packaging"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-7">
                                    <p className="text-white font-bold text-lg leading-snug mb-1">
                                        Trusted by 500+ Brands
                                    </p>
                                    <p className="text-white/75 text-sm">Delivering premium packaging across North America</p>
                                </div>
                            </div>
                            <div className="absolute top-4 -right-2 lg:-right-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80 backdrop-blur-sm">
                                <p className="text-2xl font-bold text-primary leading-none">98%</p>
                                <p className="text-xs text-slate-400 mt-1 font-medium">Satisfaction Rate</p>
                            </div>
                            <div className="absolute bottom-4 -left-2 lg:-left-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80 backdrop-blur-sm">
                                <p className="text-2xl font-bold text-emerald-500 leading-none">8–10</p>
                                <p className="text-xs text-slate-400 mt-1 font-medium">Day Turnaround</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* DIFFERENTIATE YOUR PRODUCTS SECTION */}
            <section className="py-10 lg:py-12 bg-white overflow-hidden relative">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="relative group">
                            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] border border-primary/20 shadow-2xl transform transition-transform duration-700 hover:scale-[1.02]">
                                <img
                                    src={cufflinkBox6}
                                    alt="Differentiate Your Cufflinks"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                            </div>
                            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-60" />
                            <div className="absolute -z-10 -top-8 -right-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl opacity-60" />
                        </div>
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                                Differentiate Your <span className="text-primary">Cufflinks</span> From Others
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                At CustomPackMakers, we understand that your packaging determines the first impression. To ensure your brand stands out, we utilize state-of-the-art manufacturing processes combined with high-end finishing techniques. By integrating distinctive features like custom textures, metallic foils, and precise inserts, we help you create a world-class unboxing experience that builds lasting brand loyalty.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ SECTION */}
            <section className="py-6 bg-slate-50">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
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
                                        question: "Can I get custom inserts for my cufflinks?",
                                        answer: "Yes, we offer custom-cut foam, velvet, and EVA inserts designed to hold your cufflinks securely in place and present them elegantly."
                                    },
                                    {
                                        id: "item-2",
                                        question: "What is the minimum order quantity for cufflink boxes?",
                                        answer: "Our minimum order quantity starts as low as 100 units, making it easy for both boutique brands and large retailers to order."
                                    },
                                    {
                                        id: "item-3",
                                        question: "Do you offer metallic foil stamping?",
                                        answer: "Absolutely. We offer gold, silver, copper, and holographic foil stamping to add a luxurious touch to your packaging logos and designs."
                                    },
                                    {
                                        id: "item-4",
                                        question: "How long does production take?",
                                        answer: "Standard production time is 8-10 business days after design approval. Rush options are available for tighter deadlines."
                                    },
                                    {
                                        id: "item-5",
                                        question: "Can I see a sample before ordering?",
                                        answer: "Yes, we can provide digital proofs or physical samples upon request to ensure the design meets your expectations before full production."
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
                        <div className="relative w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden ">
                            <img
                                src={FAQimage}
                                alt="Custom Cufflink Boxes FAQ"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <BrandRating />
            <QuoteForm />
            <Footer />
        </div >
    );
};

export default CufflinkBoxes;
