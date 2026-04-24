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
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SEOContent } from "@/components/SEOContent";
import { TechnicalSpecsSection } from "@/components/TechnicalSpecsSection";
import { RelatedProductKraftBoxes } from "@/components/RelatedProductKraftBoxes";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";

// Product images
import smallKraftHero from "@/assets/kraft-boxes/small-kraft-boxes.webp";
import FAQimage from "@/assets/FAQ-image.webp";

const SmallKraftBoxes = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    const productImages = [
        { src: smallKraftHero, alt: "Small Kraft Boxes - Jewelry Style" },
        { src: smallKraftHero, alt: "Small Kraft Boxes - Keepsake View" },
        { src: smallKraftHero, alt: "Small Kraft Boxes - Texture Detailed" },
        { src: smallKraftHero, alt: "Small Kraft Boxes - Stacked Unit" },
        { src: smallKraftHero, alt: "Small Kraft Boxes - Gift Set View" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Small Kraft Boxes | Boutique Jewelry & Gift Packaging | CustomPackMakers</title>
                <meta name="description" content="Order custom small kraft boxes for jewelry, gifts, and boutique items. Sustainable mini brown paper boxes with custom printing & inserts. Wholesale rates & fast shipping." />
                <meta name="keywords" content="small kraft boxes, mini brown gift boxes, small jewelry boxes, eco friendly small packaging, custom printed mini kraft boxes, wholesale small boxes" />
                <meta property="og:title" content="Custom Small Kraft Boxes | Boutique Jewelry & Gift Packaging | CustomPackMakers" />
                <meta property="og:description" content="Premium small kraft packaging for high-end boutique brands. Sustainable, elegant, and perfectly sized for jewelry and keepsakes. Get a free quote." />
            </Helmet>
            <Header />

            {/* Breadcrumb Section */}
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
                                    <Link to="/box-by-materials">Box by Materials</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link to="/box-by-material/kraft-boxes">Kraft Boxes</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Small Kraft Boxes</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </div>

            {/* HERO SECTION */}
            <section className="py-8 bg-background">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        {/* LEFT CONTENT */}
                        <div className="lg:col-span-7 space-y-6">
                            <div className="w-20 h-1.5 bg-primary rounded-full"></div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight">
                                <span className="text-primary">Small</span> Kraft Boxes
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Big impact in a small package. Our custom small kraft boxes offer a rustic, artisanal look that creates an unforgettable unboxing experience for your most precious boutique items.
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

                        {/* RIGHT HERO IMAGE */}
                        <div className="lg:col-span-5 relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-muted group">
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200">
                                <img
                                    src={smallKraftHero}
                                    alt="Small Kraft Boxes Hero"
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
                    <div className="flex items-center gap-3 mb-5">
                        <div className="w-10 h-1 bg-primary rounded-full" />
                        <span className="text-xs font-semibold tracking-widest text-primary uppercase">Product Overview</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 max-w-3xl">
                        Organic Luxury for Your Boutique Collection
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            Our <strong className="text-foreground">custom small kraft boxes</strong> are precision-engineered for brands that understand the psychology of the "little brown box." In the boutique retail world, small items like jewelry, organic skincare samples, and artisan keepsakes deserve packaging that reflects their inherent value. Constructed from high-density unbleached kraft paperboard, our <strong className="text-foreground">miniature kraft packaging</strong> combines an organic, artisan aesthetic with rigid structural protection, ensuring your most delicate items are safe and stunningly presented.
                        </p>
                        <p>
                            We offer <strong className="text-foreground">wholesale small brown boxes</strong> with a level of customization usually reserved for large-scale logistics. From precision-cut foam inserts to custom die-cut silhouettes and high-contrast branding, our <strong className="text-foreground">small gift boxes</strong> turn a minor purchase into a curated brand experience. With our industry-leading 8–10 day turnaround and low minimum order quantities, boutique owners can scale their packaging alongside their growth, maintaining a consistent and sustainable brand profile that resonates with modern eco-conscious consumers.
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
                                        Small Box Inquiry
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
                                                <Input id="depth" type="number" placeholder="1" className="h-9 bg-white" />
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
                                            Submit Request
                                        </Button>
                                    </form>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            <TechnicalSpecsSection />

            {/* SEO CONTENT SECTION */}
            <section className="py-8 bg-slate-50 border-t border-slate-100">
                <div className="container mx-auto px-[5vw]">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">
                        Crafting Luxury at Scale: The Strategic Impact of Custom Small Kraft Boxes
                    </h2>
                    <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8
                            [&::-webkit-scrollbar]:w-2
                            [&::-webkit-scrollbar-track]:bg-gray-100
                            [&::-webkit-scrollbar-track]:rounded-full
                            [&::-webkit-scrollbar-thumb]:bg-primary
                            [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="
                            [&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-8 [&>h3]:mb-3 [&>h3]:first:mt-0
                            [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-5
                            [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-5 [&>ul>li]:text-[15px] [&>ul>li]:text-slate-600">
                            
                            <p>
                                In the diverse universe of retail, sometimes the most profound brand messages are delivered in the smallest packages. <strong>Custom Small Kraft Boxes</strong> represent a unique fusion of organic artisan aesthetics and high-end boutique luxury. For products that are small in physical footprint but large in perceived value—such as fine jewelry, luxury timepieces, and concentrated serums—the packaging must act as a protective vault that honors the item's significance.
                            </p>
                            <p>
                                At CustomPackMakers, we specialize in the engineering of miniature excellence. We understand that a small box requires even higher precision in manufacturing; every fold, every edge, and every print detail is magnified at this scale. Our small kraft solutions are designed to leverage the tactile, unbleached texture of kraft fibers to create an unboxing moment that feels intimate, authentic, and responsibly made. In a digital world, this physical touchpoint is your best opportunity to build lasting brand loyalty.
                            </p>

                            <h3>Jewelry and Keepsakes: The Natural Choice for Small Luxuries</h3>
                            <p>
                                The transition towards sustainable materials in the jewelry sector is more than just a trend; it's a reflection of modern consumer ethics. Natural brown kraft provides a stunning, organic contrast for gold, silver, and precious stones. 
                            </p>
                            <ul>
                                <li><strong>Texture Contrast:</strong> The matte, earthy surface of the kraft board makes the brilliance of metal and gemstones stand out vividly, creating a sophisticated visual narrative.</li>
                                <li><strong>The Artisan Signature:</strong> Small kraft boxes suggest a boutique, "limit-edition" quality that bleached or plastic packaging simply cannot replicate.</li>
                                <li><strong>Gifting Excellence:</strong> The rustic look is the perfect canvas for ribbons, wax seals, and custom tags, turning a simple purchase into a curated gift.</li>
                            </ul>

                            <h3>Structural Strength in Miniature: Maintaining Rigidity at Small Scales</h3>
                            <p>
                                A common misconception is that small boxes don't need significant structural integrity. On the contrary, small boxes are often carried in pockets, handbags, or mailed in large shipping envelopes where they can be subjected to intense pressure. We use high-GSM (grams per square meter) rigid kraft cardstock to ensure our small boxes maintain their vault-like silhouette.
                            </p>
                            <p>
                                Each box is precision-scored and folded to ensure that edges remain crisp and corners are perfectly square. This structural perfection is critical for establishing a sense of "engineered luxury." Whether it's a two-piece lid-and-base style or a sliding drawer box, our manufacturing process ensures a smooth, satisfying opening experience every single time.
                            </p>

                            <h3>Eco-Friendly Unboxing: Why Small Brands are Leading the Kraft Charge</h3>
                            <p>
                                Small-scale boutique brands are often the pioneers of the "unboxing revolution." By choosing 100% recyclable, FSC-certified kraft paper, you demonstrate a brand philosophy that respects the planet as much as the product. Modern consumers, particularly in the Millennial and Gen Z demographics, actively seek out "plastic-free" brand experiences. Our small kraft boxes are biodegradable and chemical-free, allowing your brand to align with these critical sustainable values without sacrificing the premium retail look.
                            </p>

                            <h3>Technical Customization: Die-Cutting and Foam Inserts</h3>
                            <p>
                                Just because the materials are organic doesn't mean the technical options are limited. We offer a full suite of customization for our small-scale packaging.
                            </p>
                            <ul>
                                <li><strong>Precision Foam Inserts:</strong> We can die-cut EVA or velvet-flocked foam to the exact silhouette of your product, ensuring it remains static and secure.</li>
                                <li><strong>Die-Cut Windows:</strong> Add a miniature viewing portal to showcase a specific detail of your product while maintaining full structural protection.</li>
                                <li><strong>Foil Stamping:</strong> Elevate the organic kraft with gold, silver, or rose-gold foil accents for a high-contrast, luxury finish.</li>
                            </ul>

                            <h3>Wholesale Scale for Boutique Retailers</h3>
                            <p>
                                Whether you're an artisan selling at local markets or a regional brand scaling into high-end retail, our production process is designed to support your growth. We offer wholesale pricing models with low minimum order quantities, ensuring you can maintain a professional brand image without massive overhead. With our industry-leading 8–10 day turnaround, your boutique can react quickly to new launches and seasonal trends.
                            </p>
                            <p>
                                Partner with CustomPackMakers and deliver your products in packaging that honors your craft. Let us help you turn every small sale into a world-class brand experience.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <RelatedProductKraftBoxes />

            {/* WHY CHOOSE US SECTION */}
            <section className="py-12 relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #fafafa 0%, #f4f6ff 60%, #f0fdf8 100%)' }}>
                <div className="absolute top-0 left-0 w-80 h-80 bg-primary/4 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-300/8 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl pointer-events-none" />

                <div className="container mx-auto px-[30px] relative z-10">
                    <div className="text-center mb-14">
                        <span className="inline-block text-xs font-semibold tracking-widest text-primary uppercase mb-3 bg-primary/10 px-4 py-1.5 rounded-full">Boutique standard</span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
                            Why Luxury <span className="text-primary">Boutiques</span> Choose Us
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            We bridge the gap between organic artisan aesthetics and high-precision luxury engineering for your smallest treasures.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">
                        {/* LEFT: typography */}
                        <div className="space-y-5">
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.382-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Miniature Precision</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Engineered with high-GSM cardstock and precision-scored edges to maintain a vault-like rigidity even at the smallest scales.
                                    </p>
                                </div>
                            </div>
                            <div className="w-full h-px bg-slate-100" />
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors duration-300">
                                        <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Custom Security Inserts</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        From velvet-flocked trays to precision-cut foam, we ensure your jewelry and delicate items remain static and safely displayed.
                                    </p>
                                </div>
                            </div>
                            <div className="w-full h-px bg-slate-100" />
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors duration-300">
                                        <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Artisan Eco-Elegance</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Leverage the matte, tactile organic texture of unbleached kraft to align your brand with modern sustainable values and honest luxury.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT: Image with floating badges */}
                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img
                                    src={smallKraftHero}
                                    alt="Luxury Boutique Presentation"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-7">
                                    <p className="text-white font-bold text-lg leading-snug mb-1">
                                        Big Impact in Small Boxes
                                    </p>
                                    <p className="text-white/75 text-sm">Empowering boutique brands with intimate unboxing narratives</p>
                                </div>
                            </div>

                            {/* Floating badges */}
                            <div className="absolute top-4 -right-2 lg:-right-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80 backdrop-blur-sm">
                                <p className="text-2xl font-bold text-primary leading-none">FREE</p>
                                <p className="text-xs text-slate-400 mt-1 font-medium">Design Samples</p>
                            </div>
                            <div className="absolute bottom-4 -left-2 lg:-left-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80 backdrop-blur-sm">
                                <p className="text-2xl font-bold text-emerald-500 leading-none">100%</p>
                                <p className="text-xs text-slate-400 mt-1 font-medium">Recycled Fiber</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* DIFFERENTIATE SECTION */}
            <section className="py-10 lg:py-12 bg-white overflow-hidden relative">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* LEFT: Image */}
                        <div className="relative group">
                            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] border border-primary/20 shadow-2xl transform transition-transform duration-700 hover:scale-[1.02]">
                                <img
                                    src={smallKraftHero}
                                    alt="Differentiate Your Boutique Brand"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                            </div>
                        </div>

                        {/* RIGHT: Content */}
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                                Differentiate Your <span className="text-primary">Boutique</span> with Organic Luxury
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                At CustomPackMakers, we know that your small packaging is the final touch of your artisanal process. We utilize advanced manufacturing to ensure your small kraft boxes are structurally robust, aesthetically striking, and perfectly sized. By integrating custom-cut inserts with high-contrast printing and sustainable textures, we help you create a world-class unboxing experience that builds lasting brand loyalty, ensures product safety, and drives repeat business across every seasonal collection.
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
                                    Technical insights into our high-precision boutique solutions.
                                </p>
                            </div>

                            <Accordion type="single" collapsible defaultValue="item-1" className="w-full space-y-2">
                                {[
                                    {
                                        id: "item-1",
                                        question: "How small can you manufacture kraft boxes?",
                                        answer: "We specialize in miniature engineering. We can manufacture boxes as small as 1 x 1 x 0.5 inches, which are commonly used for single ring presentation or small cosmetic samples. At this scale, we maintain absolute structural precision to ensure the box remains rigid and high-end."
                                    },
                                    {
                                        id: "item-2",
                                        question: "Do you offer custom-cut inserts for jewelry?",
                                        answer: "Yes. We offer a full range of internal fitment options, including precision-cut cardboard, EVA foam, or velvet-flocked trays. We can die-cut the inserts to perfectly silhouette your necklaces, rings, earrings, or timepieces to ensure they stay secure and static."
                                    },
                                    {
                                        id: "item-3",
                                        question: "What is the turnaround time for boutique orders?",
                                        answer: "Our standard turnaround time is 8-10 business days after digital design approval. We understand that boutique brands need to react quickly to trends, and our production lines are optimized for fast, high-quality output."
                                    },
                                    {
                                        id: "item-4",
                                        question: "Are these boxes strong enough for shipping?",
                                        answer: "While our small kraft boxes are rigid, they are primarily designed as primary product containers. For shipping via USPS or FedEx, we recommend placing your boutique box inside a standard corrugated mailer or a kraft bubble mailer to provide the ultimate dual-layer protection."
                                    },
                                    {
                                        id: "item-5",
                                        question: "Can I get metallic printing on the brown kraft paper?",
                                        answer: "Absolutely! We offer luxury foil stamping in gold, silver, copper, and rose gold. This creates a stunning high-contrast finish against the matte, organic texture of the kraft paper, elevating the unboxing experience from rustic to truly high-end."
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

                        {/* RIGHT COLUMN: FAQ Image */}
                        <div className="relative w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden ">
                            <img
                                src={FAQimage}
                                alt="Small Kraft Boxes Technical Support"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Brand Rating & Bottom Quote Section */}
            <BrandRating />
            <div className="py-10">
                <QuoteForm />
            </div>

            <Footer />
        </div>
    );
};

export default SmallKraftBoxes;
