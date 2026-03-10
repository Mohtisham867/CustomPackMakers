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

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";


// Reusing existing images 
import customShoeBoxes from "@/assets/apparel-boxes/custom-shoe-boxes.webp";
import shoeBox1 from "@/assets/apparel-boxes/shoe-boxes/shoe 1.jpg";
import shoeBox2 from "@/assets/apparel-boxes/shoe-boxes/shoe 2.png";
import shoeBox3 from "@/assets/apparel-boxes/shoe-boxes/shoe 3.jpg";
import shoeBox4 from "@/assets/apparel-boxes/shoe-boxes/shoe-4.png";
import shoeBox5 from "@/assets/apparel-boxes/shoe-boxes/deferent.png";
import shoeBoxHero from "@/assets/apparel-boxes/shoe-boxes/shoe 5.jpg";

//FAQ image
import FAQimage from "@/assets/FAQ-image.png";

// Placeholder specifically for related products
import { RelatedProductRigidBoxes } from "@/components/RelatedProductRigidBoxes";

export default function FlipTopBoxes() {
    const [selectedImage, setSelectedImage] = useState(0);

    // Product images for gallery
    const productImages = [
        { src: shoeBox1, alt: "Custom Flip Top Boxes - Main View" },
        { src: shoeBox2, alt: "Custom Flip Top Boxes - Side Angle" },
        { src: shoeBox3, alt: "Custom Flip Top Boxes - Open Box View" },
        { src: shoeBox4, alt: "Custom Flip Top Boxes - Detail Shot" },
        { src: shoeBoxHero, alt: "Custom Flip Top Boxes - Lifestyle Shot" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Flip Top Boxes | Premium Rigid Packaging | CustomPackMakers</title>
                <meta name="description" content="Order custom flip top boxes & luxury rigid packaging wholesale. Premium branded flip top boxes with fast turnaround, free shipping & full customization." />
                <meta name="keywords" content="custom flip top packaging, luxury flip top boxes, wholesale rigid boxes, custom branded rigid packaging, rigid box manufacturer" />
                <meta property="og:title" content="Custom Flip Top Boxes | Premium Rigid Packaging | CustomPackMakers" />
                <meta property="og:description" content="Premium custom flip top packaging for luxury brands. Rigid boxes, magnetic closures, full-color printing & eco-friendly options. Get a free quote." />
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
                                    <Link to="/materials">Box by Materials</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link to="/categories/rigid-boxes">Rigid Boxes</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Flip Top Boxes</BreadcrumbPage>
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
                                <span className="text-primary">Premium</span> Flip Top Boxes
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Wholesale custom branded flip top packaging engineered for luxury presentation, brand impact, and a sophisticated unboxing experience built to scale with your business.
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
                                    src={shoeBoxHero} // Placeholder
                                    alt="Custom Flip Top Boxes Hero"
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
                        Custom Flip Top Packaging Built for Brands That Mean Business
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            Our <strong className="text-foreground">custom flip top boxes</strong> are precision-engineered for B2B brands across a multitude of industries that refuse to compromise on quality and presentation. Constructed from high-end rigid chipboard and premium specialty wrapping stocks, each box delivers the sophisticated, hinged opening experience your premium products demand while projecting a brand identity your customers will remember. Whether you're launching a limited-edition fragrance, tech gadgets, or gourmet confections, our <strong className="text-foreground">custom branded flip top packaging</strong> is designed to perform at every touchpoint.
                        </p>
                        <p>
                            From sleek cigar cases to expansive corporate gift sets, our <strong className="text-foreground">rigid flip top packaging</strong> solutions accommodate every size, silhouette, and function. Each box features pristine structural integrity, custom-cut protective inserts, and secure hinged closures, ensuring your product is displayed magnificently the moment the lid is flipped. With foil stamping, embossing, and high-gloss spot UV, your <strong className="text-foreground">luxury flip top boxes</strong> become a powerful brand asset. Order wholesale with low minimums and our industry-leading 8–10 day turnaround.
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
                                                <Input id="length" type="number" placeholder="8" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label>
                                                <Input id="width" type="number" placeholder="6" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">D (in)</Label>
                                                <Input id="depth" type="number" placeholder="3" className="h-9 bg-white" />
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
                        Elevate Premium Products with Rigid Flip Top Packaging
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
                                In the luxury goods sector, the unveiling of a product is a pivotal moment in the consumer journey.
                                Custom rigid flip top boxes provide an unparalleled dramatic reveal. Unlike standard two-piece set-up boxes, a flip top box features a hinged lid that swings open smoothly, presenting the contents in a single, fluid motion reminiscent of opening a treasure chest or a fine jewelry case.
                                This elegant mechanism transforms a simple unboxing into a memorable brand interaction, making it the preferred packaging choice for high-end cosmetics, consumer electronics, artisan chocolates, and corporate gifting.
                            </p>
                            <p>
                                At CustomPackMakers, we design and manufacture custom rigid flip top packaging that serves as the ultimate ambassador for your brand's commitment to quality.
                                We recognize that the satisfying weight of the box, the precise fit of the lid, and the flawless exterior finish all contribute to the perceived value of what lies inside.
                                By investing in top-tier flip top boxes, you ensure your products dominate a crowded retail landscape, fostering immediate brand loyalty and driving customer satisfaction.
                            </p>

                            <h3>Uncompromising Rigid Construction for Maximum Protection</h3>
                            <p>
                                The defining feature of a luxury flip top box is its unyielding structural integrity, essential for protecting high-value items. We utilize premium-grade materials to construct our rigid packaging:
                            </p>
                            <ul>
                                <li><strong>High-Density Chipboard:</strong> The structural backbone of our flip top boxes is made from thick, premium chipboard (ranging from 1mm to 3mm). This solid core protects delicate products from crushing, bending, or impact damage during transit and retail handling.</li>
                                <li><strong>Premium Wrap Materials:</strong> The sturdy chipboard is meticulously wrapped in premium papers or specialty fabrics. We offer soft-touch matte papers, textured linen covers, faux leather wraps, and high-gloss art papers, allowing the box's exterior to perfectly reflect your brand's aesthetic.</li>
                                <li><strong>Secure Hinge Mechanisms:</strong> The hinge is the critical functional component of a flip top box. We engineer sturdy paper or fabric hinges that open smoothly and withstand repeated use without tearing or weakening, ensuring long-term durability.</li>
                            </ul>
                            <p>
                                This combination of a rigid core, elegant wrapping, and a reliable hinge guarantees that your products reach the consumer in pristine condition, instantly enhancing the perception of supreme quality.
                            </p>

                            <h3>Bespoke Customization for Every Industry</h3>
                            <p>
                                The versatility of the flip top style makes it suitable for countless applications. We empower brands to create rigid flip top boxes perfectly tailored to their unique product dimensions and brand identity:
                            </p>
                            <ul>
                                <li><strong>Exact Dimensions & Proportions:</strong> From shallow, wide boxes for artisanal chocolates to deep, compact boxes for luxury watches or perfumes, we manufacture boxes to your precise dimensional requirements.</li>
                                <li><strong>Custom Protective Inserts:</strong> A flip top box often relies on inserts to hold products securely in the "presentation" position. We design custom die-cut inserts from high-density EVA foam, plush velvet, molded pulp, or sophisticated paperboard trays to cradle your items perfectly.</li>
                                <li><strong>Magnetic Closures (Optional):</strong> For added security and an even more satisfying tactile feedback, concealed magnetic catches can be integrated into the lid and base. The "snap" of the magnet closing adds to the premium feel.</li>
                            </ul>

                            <h3>Exquisite Finishing Touches for Luxury Presentation</h3>
                            <p>
                                The true mark of premium flip top packaging lies in its finishing details. Our advanced manufacturing techniques allow us to apply stunning decorative elements that elevate the box into a cherished keepsake:
                            </p>
                            <ul>
                                <li><strong>Hot Foil Stamping:</strong> Apply brilliant metallic foils (gold, silver, holographic, etc.) to logos or key design elements for an unmistakable, eye-catching touch of luxury.</li>
                                <li><strong>Embossing and Debossing:</strong> Create an elegant tactile experience with raised or recessed elements. A debossed pattern on a textured rigid box offers a subtle, highly sophisticated branding approach.</li>
                                <li><strong>Spot UV Coating:</strong> Highlight specific details with a high-gloss finish against a soft matte background, creating visual depth and a modern, high-end aesthetic.</li>
                                <li><strong>Soft-Touch Lamination:</strong> Providing a luxurious, velvety surface that begs to be touched, this finish perfectly complements the premium nature of the goods inside.</li>
                            </ul>

                            <h3>The Psychological Impact of the Flip Top Reveal</h3>
                            <p>
                                In both e-commerce and physical retail, the unboxing experience is a powerful marketing tool. The flip top box provides a specific psychological benefit: it frames the product. When the lid is lifted, the product remains in the base, supported by its insert, presented perfectly to the customer like a piece of art in a frame. This is a significantly different experience than pulling an item out of a tuck-end box or digging through packing peanuts.
                            </p>
                            <p>
                                Furthermore, premium rigid flip top boxes are frequently retained by consumers for storage, organization, or display, keeping your brand visible and top-of-mind long after the initial purchase.
                            </p>
                            <p>
                                Partner with CustomPackMakers to design rigid flip top packaging that reflects the superior quality of your brand, protects your valuable products, and scales alongside your business growth. With our high-volume wholesale manufacturing capabilities, dedicated design support, and rapid turnaround times, achieving packaging perfection is straightforward and cost-effective.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            {/* RELATED PRODUCTS CAROUSEL */}
            <RelatedProductRigidBoxes />

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
                            We combine craftsmanship, precision, and reliable production to deliver hinged packaging that makes your products unforgettable.
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
                                        Uncompromising Structural Integrity
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Every <strong>custom flip top box</strong> we produce is built from thick, unyielding chipboard and engineered with durable, smooth-operating hinges. Materials and mechanics are selected for structural integrity and tactile luxury. Our rigorous QC process ensures each unit meets the durability standards your wholesale operation demands, shipment after shipment.
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
                                        Tailored Presentation & Protection
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        A flip top box is about the reveal. We engineer <strong>custom branded rigid packaging</strong> to your exact product dimensions, with precision-cut velvet, foam, or rigid board inserts that eliminate movement and present the product front and center. Your brand's packaging spec, executed flawlessly at scale.
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
                                        Luxury Finishes at Scale
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Today's premium buyers inspect every detail. Our capabilities include precise foil stamping, deep embossing, intricate spot UV, and flawless soft-touch laminations applied to <strong>rigid flip top packaging</strong>. We deliver boutique-quality finishes consistently across massive wholesale runs, ensuring every box represents your brand perfectly.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT: Square image with floating badges */}
                        <div className="relative flex items-center justify-center py-8">
                            {/* Square image container */}
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img
                                    src={customShoeBoxes} // Placeholder
                                    alt="Premium Custom Flip Top Box Packaging"
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


            {/* DIFFERENTIATE YOUR SHOES SECTION */}
            <section className="py-10 lg:py-12 bg-white overflow-hidden relative">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* LEFT: Image */}
                        <div className="relative group">
                            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] border border-primary/20 shadow-2xl transform transition-transform duration-700 hover:scale-[1.02]">
                                <img
                                    src={shoeBox5} // Placeholder
                                    alt="Differentiate Your Products"
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
                                Differentiate Your <span className="text-primary">Products</span> From Others
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                At CustomPackMakers, we understand that your packaging is the first physical touchpoint for your customers. To ensure your luxury brand stands out, we utilize state-of-the-art manufacturing processes combined with superior folding carton and rigid board techniques. Our team of experts works closely with you to determine the perfect hinged box dimensions, ensuring a snug fit and an elegant presentation for your products. By integrating distinctive features like custom textured wraps, high-end foil stamping, and precisely engineered inserts, we help you create a world-class unboxing experience that builds lasting brand loyalty and drives repeat purchases.
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
                                        question: "What exactly is a rigid flip top box?",
                                        answer: "A rigid flip top box (often called a cigar box style) is a high-end packaging solution made from thick, sturdy chipboard. It features a lid that is permanently hinged to the base of the box, opening upwards like a book or a chest, providing an elegant and dramatic product reveal."
                                    },
                                    {
                                        id: "item-2",
                                        question: "Can these boxes be fitted with magnetic closures?",
                                        answer: "Yes, absolutely. We frequently integrate hidden magnetic catches into the flap and front panel of flip top boxes. This provides a secure closure, a satisfying 'snap' when shut, and eliminates the need for external ribbons or seals, maintaining a clean aesthetic."
                                    },
                                    {
                                        id: "item-3",
                                        question: "What types of products are best suited for flip top packaging?",
                                        answer: "Flip top boxes are incredibly versatile and are the premium standard for a wide range of products including luxury cosmetics and perfumes, consumer electronics (like smartphones), gourmet chocolates and confections, high-end corporate gifts, and specialty beverages."
                                    },
                                    {
                                        id: "item-4",
                                        question: "Can you create custom inserts to securely hold my product?",
                                        answer: "Yes, custom inserts are often essential for flip top boxes. We design and manufacture custom die-cut inserts tailored exactly to your product's dimensions. We offer various insert materials including high-density EVA foam, molded pulp, and luxurious velvet-lined or paperboard trays to ensure a perfect fit and elegant presentation."
                                    },
                                    {
                                        id: "item-5",
                                        question: "Does CustomPackMakers offer wholesale pricing?",
                                        answer: "We strive to offer simple and transparent pricing, prioritizing B2B relationships. Yes, we provide significant volume discounts on wholesale orders for custom rigid flip top boxes. Please request a custom quote based on your specific dimensions and required quantity for the most accurate rates."
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
                                alt="Custom Flip Top Boxes FAQ"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            {/* Overlay */}
                            {/* <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-60" /> */}
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


