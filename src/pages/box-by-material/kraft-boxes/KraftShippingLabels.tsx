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
import kraftLabelHero from "@/assets/material/kraft-boxes/kraft-shipping-labels.webp";
import FAQimage from "@/assets/FAQ-image.webp";

const KraftShippingLabels = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    const productImages = [
        { src: kraftLabelHero, alt: "Kraft Shipping Labels - Logistics Essential" },
        { src: kraftLabelHero, alt: "Kraft Shipping Labels - Roll Detail" },
        { src: kraftLabelHero, alt: "Kraft Shipping Labels - Sheet View" },
        { src: kraftLabelHero, alt: "Kraft Shipping Labels - Adhesive Detail" },
        { src: kraftLabelHero, alt: "Kraft Shipping Labels - Applied View" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Kraft Shipping Labels | High-Tack Eco Stickers | CustomPackMakers</title>
                <meta name="description" content="Order custom kraft shipping labels & rustic package stickers. Durable brown paper labels with strong adhesive for cartons & mailers. Wholesale rates & custom printing." />
                <meta name="keywords" content="kraft shipping labels, brown paper stickers, custom printed shipping labels, eco friendly mailing labels, high tack kraft stickers, logistics labels" />
                <meta property="og:title" content="Custom Kraft Shipping Labels | High-Tack Eco Stickers | CustomPackMakers" />
                <meta property="og:description" content="Premium kraft shipping labels for a seamless sustainable brand experience. High-tack adhesive, smudge-free, and 100% recyclable. Get a free quote today." />
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
                                <BreadcrumbPage>Kraft Shipping Labels</BreadcrumbPage>
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
                                <span className="text-primary">Kraft</span> Shipping Labels
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Seal your packages with a professional touch that matches your values. Our kraft shipping labels offer high-performance logistics branding with a sustainable artisan finish.
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
                                    src={kraftLabelHero}
                                    alt="Kraft Shipping Labels Hero"
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
                        A Cohesive Eco-Narrative for Modern Logistics
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            Our <strong className="text-foreground">custom kraft shipping labels</strong> are designed for e-commerce brands that believe sustainability should extend to the very last detail. In a competitive logistics environment, a bright white plastic label on a natural brown box creates a jarring aesthetic disconnect. Our <strong className="text-foreground">eco-friendly paper labels</strong> provide a seamless, rustic finish that tells your customers you care about every aspect of your environmental footprint, from the product inside to the sticker on the outside.
                        </p>
                        <p>
                            Constructed from high-quality unbleached kraft paper and reinforced with industrial-grade permanent adhesive, these labels are built to survive the turbulence of global shipping. They offer smudge-free absorption for high-contrast barcodes and provide a perfect surface for custom branding and artisan messaging. Order <strong className="text-foreground">wholesale kraft mailing labels</strong> in rolls or sheets with our industry-leading 8–10 day turnaround, and transform your logistics chain into a powerful brand ambassador that resonates with modern, eco-conscious diners and shoppers alike.
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
                                        Label Quote Request
                                    </h3>
                                    <form className="space-y-4">
                                        <div className="grid grid-cols-3 gap-3">
                                            <div className="space-y-1.5">
                                                <Label htmlFor="length" className="text-xs font-semibold text-muted-foreground">L (in)</Label>
                                                <Input id="length" type="number" placeholder="4" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label>
                                                <Input id="width" type="number" placeholder="6" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">Qty (sets)</Label>
                                                <Input id="depth" type="number" placeholder="10" className="h-9 bg-white" />
                                            </div>
                                        </div>
                                        <div className="space-y-1.5">
                                            <Label htmlFor="quantity" className="text-xs font-semibold text-muted-foreground">Total Labels</Label>
                                            <Input id="quantity" type="number" placeholder="5000" className="h-9 bg-white" />
                                        </div>
                                        <div className="space-y-1.5">
                                            <Label htmlFor="name" className="text-xs font-semibold text-muted-foreground">Brand Name</Label>
                                            <Input id="name" type="text" placeholder="Your Brand" className="h-9 bg-white" />
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

            <TechnicalSpecsSection />

            {/* SEO CONTENT SECTION */}
            <section className="py-8 bg-slate-50 border-t border-slate-100">
                <div className="container mx-auto px-[5vw]">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">
                        Logistics Branding: The Power of Custom Kraft Shipping Labels
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
                                Sustainable packaging is a holistic endeavor that shouldn't end with the box itself. If you use a beautiful, unbleached kraft box but slap a bright white, plastic-coated shipping label on it, you create a visual and ethical disruption in your brand narrative. <strong>Custom Kraft Shipping Labels</strong> provide the perfect solution for this aesthetic dilemma. Made from high-quality, long-fiber kraft paper, these labels offer a seamless, rustic finish that tells your customers you care about every single detail of your environmental footprint.
                            </p>
                            <p>
                                At CustomPackMakers, we focus on the intersection of technical performance and artisan style. A shipping label is a critical logistics asset; if it peels or smudges, it can lead to misdeliveries and inventory loss. Our kraft labeling solutions are designed to exceed the performance metrics of standard adhesive stickers while providing an earthy, organic look that reinforces your brand's commitment to the planet.
                            </p>

                            <h3>Adhesion Science: Why High-Tack Acrylic Matters</h3>
                            <p>
                                The most critical component of any shipping label is the adhesive bond. Our labels use an industrial-grade, pressure-sensitive acrylic adhesive that is specifically formulated to penetrate the coarse fibers of kraft and corrugated board. 
                            </p>
                            <ul>
                                <li><strong>Permanent Bonding:</strong> Achieve 90% bond strength within seconds of application, ensuring the label cannot be accidentally removed or snagged during transit.</li>
                                <li><strong>Temperature Stability:</strong> Our adhesive is engineered to remain stable in temperatures ranging from -20°F (essential for refrigerated transport) to 150°F (common in summer delivery trucks).</li>
                                <li><strong>Surface Versatility:</strong> While optimized for paper, these labels bond effectively to poly mailers, glass jars, and metal containers, providing consistent branding across your product line.</li>
                            </ul>

                            <h3>Visual Consistency: Aligning Labels with Eco-Friendly Boxes</h3>
                            <p>
                                Using a brown label on a brown box isn't just about camouflaging the sticker; it's about creating a unified "Eco-Signature." The natural unbleached fibers of the label material mimic the texture of the box itself, suggesting a boutique, "limit-edition" quality. High-contrast black ink looks exceptionally sharp on the medium-brown surface, creating a sophisticated and world-class retail look for even the most basic shipping cartons.
                            </p>

                            <h3>Operational Efficiency: Smudge-Free Printing and Scanning</h3>
                            <p>
                                Logistics labels must be functional. Our kraft stock is specially treated to have a consistent porosity that locks in ink instantly. This is critical for high-volume thermal, laser, or inkjet printing environments where a smudged barcode can derail an entire shipment. 
                            </p>
                            <ul>
                                <li><strong>High-Contrast Scannability:</strong> Black barcodes on kraft paper maintain a high enough contrast ratio for automated sorting machines and smartphone scanners to read them instantly.</li>
                                <li><strong>Matt Finish:</strong> The non-glossy surface prevents light glare from interfering with scanner optics, further reducing the risk of processing delays.</li>
                                <li><strong>Tear Resistance:</strong> High-GSM paper fibers provide more strength than standard white paper stickers, acting as a small protective patch on your package.</li>
                            </ul>

                            <h3>Environmental Impact: Recyclability and the Circular Economy</h3>
                            <p>
                                Choosing paper-based labels over plastic versions is a major step toward a circular economy. Our kraft labels can be recycled directly along with the cardboard boxes they are attached to, simplifying the disposal process for your end consumer. Furthermore, we use water-based or soy-based inks and non-toxic, solvent-free adhesives, ensuring that the chemical footprint of your labeling is as low as possible.
                            </p>

                            <h3>Wholesale Scale for High-Volume E-Commerce</h3>
                            <p>
                                Whether you are running a single neighborhood boutique or a national e-commerce franchise, our manufacturing process is designed to support your growth. We offer labels in rolls for high-speed automated application or in sheets for traditional desktop printing. Our wholesale pricing models ensure that moving to a premium, sustainable labeling standard doesn't inflate your fulfillment costs.
                            </p>
                            <p>
                                Partner with CustomPackMakers and complete your brand's sustainable journey. Let us help you deliver a package that is consistent, professional, and responsibly built from the warehouse to the front door.
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
                        <span className="inline-block text-xs font-semibold tracking-widest text-primary uppercase mb-3 bg-primary/10 px-4 py-1.5 rounded-full">Logistics standard</span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
                            Why Top <span className="text-primary">Shippers</span> Choose Us
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            We bridge the gap between high-performance logistics utility and artisan, eco-friendly brand aesthetics.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">
                        {/* LEFT: typography */}
                        <div className="space-y-5">
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">High-Tack Permanent Bond</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Industrial-grade acrylic adhesive ensures your labels stay permanently bonded to your packages through world-wide transit.
                                    </p>
                                </div>
                            </div>
                            <div className="w-full h-px bg-slate-100" />
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors duration-300">
                                        <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 12v4m0 0V8m0 4h-4M4 8h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Smudge-Free Scannability</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Optimized fiber porosity locks in ink instantly, ensuring barcodes stay sharp and scannable by all automated logistics systems.
                                    </p>
                                </div>
                            </div>
                            <div className="w-full h-px bg-slate-100" />
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors duration-300">
                                        <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M22 6l-10 7-10-7" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Eco-Brand Synergy</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Align your shipping labels with your recycled boxes to create a professional and unified sustainable brand narrative that wows customers.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT: Image with floating badges */}
                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img
                                    src={kraftLabelHero}
                                    alt="Professional Logistics Branding"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-7">
                                    <p className="text-white font-bold text-lg leading-snug mb-1">
                                        Universal Labeling Standards
                                    </p>
                                    <p className="text-white/75 text-sm">Empowering e-commerce brands with unified sustainable narratives</p>
                                </div>
                            </div>

                            {/* Floating badges */}
                            <div className="absolute top-4 -right-2 lg:-right-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80 backdrop-blur-sm">
                                <p className="text-2xl font-bold text-primary leading-none">FREE</p>
                                <p className="text-xs text-slate-400 mt-1 font-medium">Digital Templates</p>
                            </div>
                            <div className="absolute bottom-4 -left-2 lg:-left-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80 backdrop-blur-sm">
                                <p className="text-2xl font-bold text-emerald-500 leading-none">100%</p>
                                <p className="text-xs text-slate-400 mt-1 font-medium">Eco-Safe Ink</p>
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
                                    src={kraftLabelHero}
                                    alt="Differentiate Your Shipping"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                            </div>
                        </div>

                        {/* RIGHT: Content */}
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                                Differentiate Your <span className="text-primary">Packages</span> with Unified Design
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                At CustomPackMakers, we know that your shipping label is more than just data—it's the first physical contact your brand makes. We utilize advanced manufacturing to ensure that each kraft shipping label is structurally robust and visually striking. By integrating high-tack adhesives with smudge-free printing and sustainable textures, we help you create a world-class delivery experience that builds immediate trust, ensures product scannability, and drives brand loyalty across every single shipment.
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
                                    Insights into our eco-friendly logistics solutions.
                                </p>
                            </div>

                            <Accordion type="single" collapsible defaultValue="item-1" className="w-full space-y-2">
                                {[
                                    {
                                        id: "item-1",
                                        question: "Can these labels be printed at home?",
                                        answer: "Yes! Our kraft labels are available in standard A4 or US Letter sheets that are fully compatible with any home inkjet or laser printer. We provide digital templates to ensure your design aligns perfectly within the die-cut edges."
                                    },
                                    {
                                        id: "item-2",
                                        question: "Are barcodes easy to scan on brown kraft paper?",
                                        answer: "Absolutely. We specify a medium-brown kraft stock that provides a high enough contrast ratio for automated logistics scanners and smartphone cameras to read black ink instantly without errors."
                                    },
                                    {
                                        id: "item-3",
                                        question: "Is the adhesive really permanent?",
                                        answer: "Yes, we use an industrial-grade acrylic adhesive that creates a permanent bond with cardboard and paper. Once applied with pressure, the label is extremely difficult to remove without damaging the package surface."
                                    },
                                    {
                                        id: "item-4",
                                        question: "Can I use these labels for food containers?",
                                        answer: "Yes, our kraft labels are non-toxic and use food-safe, soy-based inks. They are widely used for marking jars, bags, and boxes in the artisanal food industry while maintaining a cohesive organic aesthetic."
                                    },
                                    {
                                        id: "item-5",
                                        question: "What is the turnaround time for bulk roll labels?",
                                        answer: "Our standard turnaround time is 8-10 business days after digital design approval. We maintain high-capacity production lines to ensure your fulfillment operations never run out of essential branding materials."
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
                                alt="Kraft Shipping Labels Support"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                style={{ transform: 'none' }} 
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

export default KraftShippingLabels;
