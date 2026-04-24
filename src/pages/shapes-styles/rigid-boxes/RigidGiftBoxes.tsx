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
import shoeBox1 from "@/assets/apparel-boxes/shoe-boxes/shoe 1.webp";
import shoeBox2 from "@/assets/apparel-boxes/shoe-boxes/shoe 2.webp";
import shoeBox3 from "@/assets/apparel-boxes/shoe-boxes/shoe 3.webp";
import shoeBox4 from "@/assets/apparel-boxes/shoe-boxes/shoe-4.webp";
import shoeBox5 from "@/assets/apparel-boxes/shoe-boxes/deferent.webp";
import shoeBoxHero from "@/assets/apparel-boxes/shoe-boxes/shoe 5.webp";

//FAQ image
import FAQimage from "@/assets/FAQ-image.webp";

// Placeholder specifically for related products
import { RelatedProductRigidBoxes } from "@/components/RelatedProductRigidBoxes";

export default function RigidGiftBoxes() {
    const [selectedImage, setSelectedImage] = useState(0);

    // Product images for gallery
    const productImages = [
        { src: shoeBox1, alt: "Custom Rigid Gift Boxes - Main View" },
        { src: shoeBox2, alt: "Custom Rigid Gift Boxes - Side Angle" },
        { src: shoeBox3, alt: "Custom Rigid Gift Boxes - Open Box View" },
        { src: shoeBox4, alt: "Custom Rigid Gift Boxes - Detail Shot" },
        { src: shoeBoxHero, alt: "Custom Rigid Gift Boxes - Lifestyle Shot" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Rigid Gift Boxes | Premium Rigid Packaging | CustomPackMakers</title>
                <meta name="description" content="Order custom rigid gift boxes & luxury rigid packaging wholesale. Premium branded rigid gift boxes with fast turnaround, free shipping & full customization." />
                <meta name="keywords" content="custom rigid gift packaging, luxury rigid gift boxes, wholesale rigid boxes, custom branded rigid packaging, rigid box manufacturer" />
                <meta property="og:title" content="Custom Rigid Gift Boxes | Premium Rigid Packaging | CustomPackMakers" />
                <meta property="og:description" content="Premium custom rigid gift packaging for luxury brands. Rigid boxes, magnetic closures, full-color printing & eco-friendly options. Get a free quote." />
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
                                <BreadcrumbPage>Rigid Gift Boxes</BreadcrumbPage>
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
                                <span className="text-primary">Premium</span> Rigid Gift Boxes
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Wholesale custom branded rigid gift packaging engineered for luxury presentation, unforgettable corporate gifting, and premium unboxing experiences built to scale.
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
                                    alt="Custom Rigid Gift Boxes Hero"
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
                        Custom Rigid Gift Packaging Built for Brands That Demand Excellence
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            Our <strong className="text-foreground">custom rigid gift boxes</strong> are precision-engineered for B2B brands, luxury boutiques, and corporate gift suppliers that refuse to compromise on quality and presentation. Constructed from high-end rigid chipboard and wrapped in premium specialty papers, each box transforms your product selection into a breathtaking, cohesive gift set while projecting a brand identity your recipients will cherish. Whether you're launching a holiday collection, a PR influencer kit, or scaling a corporate gifting program, our <strong className="text-foreground">custom branded rigid gift packaging</strong> is designed to perform at every touchpoint.
                        </p>
                        <p>
                            From intricate multi-item beauty collections to high-value executive tech gifts, our <strong className="text-foreground">wholesale rigid gift boxes</strong> accommodate every size, concept, and style. Each box features pristine structural integrity, custom-cut protective bases (foam, velvet, or paperboard), and secure closures—such as ribbon ties or concealed magnets. With foil stamping, deep embossing, and rich spot UV textures, your <strong className="text-foreground">luxury gift boxes</strong> become a powerful brand asset that recipients often keep long after the gift is gone. Order wholesale with low minimums and our industry-leading 8–10 day turnaround.
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
                                                <Input id="length" type="number" placeholder="10" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label>
                                                <Input id="width" type="number" placeholder="8" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">D (in)</Label>
                                                <Input id="depth" type="number" placeholder="4" className="h-9 bg-white" />
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
                        Transforming Presentations with Premium Rigid Gift Packaging
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
                                In the art of gifting—whether for high-end retail holidays, exclusive corporate events, or luxury subscription services—the presentation often matters as much as the gift itself. Custom rigid gift boxes represent the pinnacle of packaging luxury. They immediately communicate thoughtfulness, exclusivity, and premium quality. The substantial weight and perfect precision of a rigid box elevate a collection of products into a unified, high-value gift set that commands attention and appreciation.
                            </p>
                            <p>
                                At CustomPackMakers, we specialize in engineering custom rigid gift packaging that serves as the perfect canvas for your brand's generosity and vision. We understand that a gift box must not only protect its contents but must also unfold a narrative of luxury as it is opened. By investing in our top-tier custom rigid gift boxes, you ensure your presentation dominates, fostering immediate brand loyalty and driving profound customer and client satisfaction.
                            </p>

                            <h3>Uncompromising Rigid Construction for Maximum Impact</h3>
                            <p>
                                The defining feature of a luxury gift box is its unyielding structural integrity, essential for protecting high-value curations and projecting quality. We utilize premium-grade materials to construct our rigid gift packaging:
                            </p>
                            <ul>
                                <li><strong>High-Density Chipboard:</strong> The structural backbone of our gift boxes is made from dense, premium chipboard (ranging from 1mm to 3mm). This solid core protects delicate products from crushing or impact damage, ensuring pristine presentation upon delivery.</li>
                                <li><strong>Premium Wrap Materials:</strong> The sturdy chipboard base is meticulously wrapped in premium papers or specialty fabrics. We offer thousands of options including soft-touch matte papers, textured linen covers, faux leather wraps, metallic sheets, and high-gloss art papers. The box's exterior can perfectly embody the spirit of the gift.</li>
                                <li><strong>Flawless Edges:</strong> The hallmark of a truly premium rigid box lies in the wrapping precision. We ensure sharp, clean edges and perfect corners, free from bubbling or tearing, demonstrating superior craftsmanship.</li>
                            </ul>
                            <p>
                                This combination of a rigid core and elegant wrapping guarantees that your gift collections not only survive transit but arrive looking spectacular, instantly enhancing the perception of supreme quality.
                            </p>

                            <h3>Bespoke Customization for Every Occasion</h3>
                            <p>
                                The versatility of the rigid box style makes it suitable for countless gifting applications. We empower brands to create custom rigid gift boxes perfectly tailored to their unique product dimensions, brand identity, and the occasion:
                            </p>
                            <ul>
                                <li><strong>Exact Dimensions & Proportions:</strong> From expansive, shallow presentation boxes for skincare sets to deep, robust boxes for wine and spirits, we manufacture boxes to your precise dimensional requirements.</li>
                                <li><strong>Custom Protective Inserts:</strong> A successful gift box must hold multiple items securely in a curated arrangement. We design custom die-cut inserts from high-density EVA foam, plush velvet-lined trays, molded pulp, or sophisticated paperboard step-downs to cradle your items perfectly and prevent movement.</li>
                                <li><strong>Elegant Closures:</strong> Elevate the opening experience further. Choose from classic two-piece (lid-off) designs, hinged lids with concealed magnetic catches for a satisfying 'snap', or beautiful grosgrain or satin ribbon ties that must be physically untied by the recipient.</li>
                            </ul>

                            <h3>Exquisite Finishing Touches for Luxury Presentation</h3>
                            <p>
                                The true mark of premium gift packaging lies in its finishing details. Our advanced manufacturing techniques allow us to apply stunning decorative elements that elevate the box into a cherished keepsake:
                            </p>
                            <ul>
                                <li><strong>Hot Foil Stamping:</strong> Apply brilliant metallic foils (gold, silver, holographic, etc.) to your logo, holiday messaging, or key design elements for an unmistakable, eye-catching touch of luxury.</li>
                                <li><strong>Embossing and Debossing:</strong> Create an elegant tactile experience with raised or recessed elements. A debossed pattern on a textured rigid box offers a subtle, highly sophisticated branding approach perfect for corporate gifts.</li>
                                <li><strong>Spot UV Coating:</strong> Highlight specific details with a high-gloss finish against a soft matte background, creating visual depth and a modern, high-end aesthetic.</li>
                                <li><strong>Soft-Touch Lamination:</strong> Providing a luxurious, velvety surface that begs to be touched, this finish perfectly complements the premium nature of the bespoke goods inside.</li>
                            </ul>

                            <h3>The Psychological Impact of the Gift Box Reveal</h3>
                            <p>
                                The act of receiving and opening a gift is profoundly emotional. A premium rigid gift box slows the process down. The recipient notes the weight, admires the texture, unties the ribbon or breaks the magnetic seal, and lifts the lid to reveal the curated contents perfectly nested inside. This orchestrated unboxing is a powerful marketing tool that dramatically increases the perceived value of your brand's offering.
                            </p>
                            <p>
                                Furthermore, premium rigid gift boxes are frequently retained by consumers for home storage and organization, keeping your brand visible and top-of-mind long after the initial gift was received.
                            </p>
                            <p>
                                Partner with CustomPackMakers to design rigid gift packaging that reflects the superior quality of your brand, protects your valuable product curations, and makes every occasion unforgettable. With our high-volume wholesale manufacturing capabilities, dedicated structural design support, and rapid turnaround times, achieving packaging perfection for your next big launch or holiday season is straightforward and cost-effective.
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
                            We combine unparalleled craftsmanship, precision engineering, and reliable production to deliver gift packaging that makes your collections extraordinary.
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
                                        Every <strong>custom rigid gift box</strong> we produce is built from thick, unyielding chipboard and flawlessly wrapped. Materials and mechanics are selected for structural integrity and tactile luxury. Our rigorous QC process ensures each unit meets the durability standards your corporate or retail operation demands, shipment after shipment.
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
                                        Tailored Presentation & Curations
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        A gift box is about the grand reveal. We engineer <strong>custom branded rigid packaging</strong> to your exact collection dimensions, with precision-cut velvet, foam, or rigid board inserts that secure multiple items and present them flawlessly. Your brand's exact curational vision, executed perfectly at scale.
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
                                        The gift is in the details. Our capabilities include precise foil stamping, deep embossing, intricate spot UV, and flawless soft-touch laminations applied to your <strong>wholesale rigid gift boxes</strong>. We deliver boutique-quality finishes consistently across massive production runs, ensuring every box represents your brand perfectly.
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
                                    alt="Premium Custom Rigid Gift Box Packaging"
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
                                    alt="Differentiate Your Gifts"
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
                                Differentiate Your <span className="text-primary">Gifts</span> From Others
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                At CustomPackMakers, we understand that your packaging is the first physical touchpoint for your clients and customers. To ensure your luxury gift sets stand out, we utilize state-of-the-art manufacturing processes combined with superior rigid board techniques. Our team of experts works closely with you to determine the perfect box dimensions and structural layouts, ensuring an elegant presentation for collections of products. By integrating distinctive features like custom textured wraps, gorgeous foil stamping, ribbons, and precisely engineered inserts, we help you create a world-class gifting experience that builds lasting brand appreciation.
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
                                        question: "How do custom rigid gift boxes differ from standard folding retail boxes?",
                                        answer: "Unlike standard folding cartons that ship flat and require assembly, custom rigid gift boxes are manufactured over a thick, solid chipboard core wrapped in premium paper. They are shipped fully assembled and cannot be flattened, offering far superior durability, a heavier, luxurious feel, and an impeccable presentation."
                                    },
                                    {
                                        id: "item-2",
                                        question: "Can I order custom inserts to hold multiple different products securely in a gift box?",
                                        answer: "Absolutely. We specialize in designing custom die-cut inserts specifically for gift sets. Whether you are combining various cosmetics, gourmet treats, or corporate items, we can design foam, velvet-lined, or molded pulp inserts that hold every item perfectly in place during transit and upon opening."
                                    },
                                    {
                                        id: "item-3",
                                        question: "What types of closures can be added to custom gift boxes?",
                                        answer: "We offer several elegant closure options. The most popular are standard two-piece set-up boxes (lid over base) and hinged book-style boxes featuring concealed magnetic catches for a seamless 'snap'. We can also integrate satin or grosgrain ribbon ties for a highly traditional gifting aesthetic."
                                    },
                                    {
                                        id: "item-4",
                                        question: "Can you match my specific brand colors or corporate pantone colors?",
                                        answer: "Yes. Our advanced printing capabilities include full CMYK process printing as well as precise Pantone Matching System (PMS) inks. We ensure your brand colors are replicated perfectly on the wrapping paper of the rigid box, maintaining exact brand consistency."
                                    },
                                    {
                                        id: "item-5",
                                        question: "What is the minimum order quantity (MOQ) for wholesale rigid gift boxes?",
                                        answer: "To offer the best wholesale pricing while covering the extensive setup required for rigid box manufacturing, we typically have minimum production runs that start at 250-500 units depending on size. However, we encourage you to request a custom quote so we can review your specific needs."
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
                                alt="Custom Rigid Gift Boxes FAQ"
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


