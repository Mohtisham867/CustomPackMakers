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
import { SEOContent } from "@/components/SEOContent";
import { TechnicalSpecsSection } from "@/components/TechnicalSpecsSection";
import { RelatedProductRigidBoxes } from "@/components/RelatedProductRigidBoxes";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";

// Product images
import rigidSetupBoxes from "@/assets/material/rigid-boxes/rigid-setup-boxes-v2.webp";
import placeholder1 from "@/assets/material/rigid-boxes/rigid-setup-boxes-v2.webp";
import placeholder2 from "@/assets/material/rigid-boxes/flip-top-boxes-v2.webp";
import placeholder3 from "@/assets/material/rigid-boxes/rigid-gift-boxes-v2.webp";
import placeholder4 from "@/assets/material/rigid-boxes/wallet-boxes-v2.webp";

// FAQ image
import FAQimage from "@/assets/FAQ-image.webp";

const RigidSetupBoxesMaterial = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    const productImages = [
        { src: rigidSetupBoxes, alt: "Custom Rigid Setup Boxes - Main View" },
        { src: placeholder1, alt: "Custom Rigid Setup Boxes - Angle" },
        { src: placeholder2, alt: "Custom Rigid Setup Boxes - Detail" },
        { src: placeholder3, alt: "Custom Rigid Setup Boxes - Close up" },
        { src: placeholder4, alt: "Custom Rigid Setup Boxes - Lifestyle" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Rigid Setup Boxes | Premium Rigid Packaging | CustomPackMakers</title>
                <meta name="description" content="Order custom rigid setup boxes & luxury rigid packaging wholesale. Premium branded rigid setup boxes with fast turnaround, free shipping & full customization." />
                <meta name="keywords" content="custom rigid setup boxes, luxury rigid setup boxes, wholesale rigid boxes, custom branded packaging, rigid box manufacturer" />
                <meta property="og:title" content="Custom Rigid Setup Boxes | Premium Rigid Packaging | CustomPackMakers" />
                <meta property="og:description" content="Premium custom rigid setup boxes for luxury brands. Rigid boxes, magnetic closures, full-color printing & eco-friendly options. Get a free quote." />
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
                                    <Link to="/categories/rigid-boxes">Rigid Boxes</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Rigid Setup Boxes</BreadcrumbPage>
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
                                <span className="text-primary">Premium</span> Rigid Setup Boxes
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Wholesale custom branded rigid setup boxes engineered for luxury presentation, extreme durability, and a premium unboxing experience built to scale with your business.
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
                                    src={productImages[0].src}
                                    alt="Custom Rigid Setup Boxes Hero"
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
                        Custom Rigid Setup Boxes Built for Luxury Brands That Mean Business
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            Our <strong className="text-foreground">custom rigid setup boxes</strong> are precision-engineered for B2B brands that refuse to compromise on quality. Constructed from high-end rigid chipboard, premium specialty stocks, and elegant textured materials, each box delivers the sophisticated presentation your luxury items demand while projecting the brand identity your customers remember. Whether you're launching a designer line or scaling a boutique, our <strong className="text-foreground">custom branded packaging</strong> is designed to perform at every touchpoint.
                        </p>
                        <p>
                            From minimalist styles to classic configurations, our <strong className="text-foreground">rigid rigid setup boxes</strong> solutions accommodate every size, silhouette, and style. Each box features pristine structural integrity, custom-cut velvet or foam inserts, and optional magnetic closures, ensuring your product is displayed magnificently. With foil stamping, embossing, and soft-touch lamination, your <strong className="text-foreground">luxury boxes</strong> become a powerful brand asset. Order wholesale with low minimums and our industry-leading 8–10 day turnaround.
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
                                                <Input id="length" type="number" placeholder="5" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label>
                                                <Input id="width" type="number" placeholder="4" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">D (in)</Label>
                                                <Input id="depth" type="number" placeholder="1.5" className="h-9 bg-white" />
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
                        The Importance of Premium Quality and Luxury Unboxing Experiences
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
                                In the high-end retail and e-commerce markets, the packaging a product arrives in is often as significant as the item itself.
                                Custom rigid packaging is not just a container; it is the initial physical handshake between your brand and your customer.
                                It sets the stage for luxury, communicating the craftsmanship, attention to detail, and exclusivity of your products before the customer even sees what is inside.
                                A meticulously designed box elevates the perceived value of your items, transforming a simple purchase into a premium gifting or unboxing experience.
                            </p>
                            <p>
                                At CustomPackMakers, we specialize in engineering custom rigid packaging that speaks volumes about your brand's dedication to Premium Quality.
                                Whether you are packaging sleek electronics, delicate jewelry, or luxury accessories, the right rigid box provides unmatched Durability while serving as a powerful marketing asset.
                                Investing in top-tier packaging ensures your products stand out in a crowded retail landscape, fostering immense brand loyalty and turning first-time buyers into lifelong advocates.
                            </p>

                            <h3>Uncompromising Rigid Board Quality for Maximum Durability</h3>
                            <p>
                                The defining characteristic of a luxury rigid box is its structural integrity and Extreme Durability. Unlike folding cartons, rigid boxes do not collapse, offering a robust and sturdy feel that instantly conveys quality.
                                We utilize premium-grade materials to construct our rigid packaging:
                            </p>
                            <ul>
                                <li><strong>High-Density Chipboard:</strong> The core of our rigid boxes is made from thick, high-quality chipboard (typically ranging from 1mm to 3mm). This provides a solid, unyielding foundation that protects your delicate goods from crushing or bending during transit.</li>
                                <li><strong>Premium Wrap Materials:</strong> The raw chipboard is meticulously wrapped in premium papers or fabrics. We offer soft-touch papers, textured linen covers, faux leather wraps, and high-gloss art papers to match your exact brand aesthetic.</li>
                                <li><strong>Protective Inserts:</strong> A luxury box must hold the product securely. We design custom die-cut inserts from high-density EVA foam, plush velvet, or molded plastic trays to cradle your item perfectly, preventing any movement that could cause scuffs or damage.</li>
                            </ul>
                            <p>
                                The combination of a solid rigid structure and tailored inserts guarantees that your items reach the consumer in pristine, showroom-ready condition, enhancing the overall perception of your brand's Premium Quality.
                            </p>

                            <h3>Bespoke Customization for a Unique Brand Identity</h3>
                            <p>
                                Stand out from off-the-shelf packaging with our comprehensive customization options.
                                We empower brands to create rigid boxes that are perfectly tailored to their unique identity and product lines.
                                Our customization capabilities allow you to dictate every aspect of the box's design and functionality:
                            </p>
                            <ul>
                                <li><strong>Exact Dimensions:</strong> From slimline sleeves to deeper boxes, we manufacture boxes to your precise dimensional requirements.</li>
                                <li><strong>Innovative Box Styles:</strong> Choose from classic two-piece lift-off lids, sophisticated Magnetic Closures, sleek sliding drawer designs, or elegant hinged lid configurations. Magnetic Closures add an undeniable layer of luxury, offering a satisfying "snap" that defines the high-end unboxing experience.</li>
                                <li><strong>Custom Color Matching:</strong> We utilize the Pantone Matching System (PMS) to ensure your brand's exact colors are faithfully reproduced on the packaging exterior and interior, creating a cohesive visual experience.</li>
                            </ul>

                            <h3>Exquisite Finishing Touches for Luxury Presentation</h3>
                            <p>
                                The true mark of a premium box lies in its finishing.
                                Our advanced manufacturing techniques allow us to apply stunning decorative elements that elevate a simple box into a keepsake item.
                                These finishes add tactile and visual interest, making the Luxury Unboxing Experience truly memorable:
                            </p>
                            <ul>
                                <li><strong>Hot Foil Stamping:</strong> Apply brilliant metallic foils (gold, silver, rose gold, or copper) to logos, crests, or typography for an unmistakable touch of luxury.</li>
                                <li><strong>Embossing and Debossing:</strong> Create an elegant, tactile experience with raised or recessed elements. A debossed logo on a textured rigid box offers a subtle, sophisticated branding approach.</li>
                                <li><strong>Spot UV Coating:</strong> Highlight specific design elements with a high-gloss finish against a matte background, adding depth and a modern aesthetic to your packaging.</li>
                                <li><strong>Soft-Touch Lamination:</strong> Also known as a "velvet" finish, this lamination provides a luxurious, tactile surface that begs to be touched, perfectly complementing the feel of fine goods.</li>
                            </ul>

                            <h3>The Role of Unboxing in E-commerce and Retail</h3>
                            <p>
                                In the age of social media, the Luxury Unboxing Experience is a critical component of marketing and customer satisfaction.
                                A rigid box with Magnetic Closures provides a ceremonious opening—the satisfying resistance of a perfectly fitted lift-off lid, or the crisp snap of the magnets.
                                These sensory details contribute significantly to customer delight.
                                Furthermore, premium rigid boxes are often repurposed by consumers for storage or organization, keeping your brand visible in their homes long after the initial purchase.
                            </p>
                            <p>
                                Whether displayed securely behind a glass retail counter or shipped directly to an e-commerce customer, custom boxes ensure your product makes a flawless first impression.
                                Partner with CustomPackMakers to design rigid packaging that reflects the superior Premium Quality of your products, protects your investment with exceptional Durability, and scales alongside your business growth.
                                With our wholesale manufacturing capabilities, low minimum order quantities, and rapid turnaround times, achieving packaging perfection is easier than ever.
                            </p>
                            <p>
                                Magnetic Closures are particularly popular for brands seeking to provide a truly Luxury Unboxing Experience. They offer a clean, seamless look without the need for visible locks or clasps, relying on hidden magnets integrated into the rigid board. This design not only enhances the aesthetic appeal but also provides a secure closure that protects the contents during transit and storage.
                            </p>
                            <p>
                                When you choose our rigid boxes, you are investing in Premium Quality that speaks for itself. The Durability of our materials ensures that your packaging can withstand the rigors of shipping while maintaining its pristine appearance. We understand that a Luxury Unboxing Experience is about more than just aesthetics; it's about creating an emotional connection with your customer from the moment they receive your product. Let us help you craft that unforgettable moment with our superior rigid packaging solutions.
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
                            We combine craftsmanship, speed, and reliability to deliver packaging that makes your luxury accessories unforgettable.
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
                                        Uncompromising Rigid Quality
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Every <strong>custom box</strong> we produce is built from thick, high-density chipboard wrapped in premium specality papers. Materials selected for structural integrity and tactile luxury. Our rigorous QC process ensures each unit meets the durability standards your wholesale operation and retail partners demand, shipment after shipment.
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
                                        Tailored Accessory Protection
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        No two product lines are identical, and neither are our solutions. We engineer <strong>custom branded packaging</strong> to your exact product dimensions, with precision-cut velvet or foam inserts that eliminate movement and protect fine finishes. Your brand's packaging spec, executed flawlessly at scale.
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
                                        Today's luxury buyers inspect every detail. Our capabilities include precise foil stamping, deep embossing, and flawless soft-touch laminations applied to <strong>rigid packaging</strong>. We deliver boutique-quality finishes consistently across massive wholesale runs, ensuring every box represents your brand perfectly.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT: Square image with floating badges */}
                        <div className="relative flex items-center justify-center py-8">
                            {/* Square image container */}
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img
                                    src={productImages[0].src}
                                    alt="Premium Custom Packaging"
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
                                    src={productImages[1].src}
                                    alt="Differentiate Your Accessories"
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
                                Differentiate Your <span className="text-primary">Brand</span> From Others
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                At CustomPackMakers, we understand that your packaging is the first physical touchpoint for your customers. To ensure your luxury brand stands out, we utilize state-of-the-art manufacturing processes combined with premium wrap materials and finishing techniques. Our team of experts works closely with you to determine the perfect rigid box dimensions, ensuring a snug fit and maximum protection. By integrating distinctive features like custom textures, high-end foil stamping, and elegant inserts, we help you create a world-class unboxing experience that builds lasting brand loyalty and drives repeat purchases.
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
                                        question: "What makes rigid boxes different from regular cardboard boxes?",
                                        answer: "Rigid boxes are constructed from thick, high-density chipboard (unlike thin folding cartons), meaning they do not collapse or fold flat. They are wrapped in premium papers or fabrics, providing a solid, luxurious feel and superior protection that is essential for high-end accessories."
                                    },
                                    {
                                        id: "item-2",
                                        question: "Can you create custom inserts to securely hold my items?",
                                        answer: "Yes, absolutely. We design and manufacture custom inserts tailored exactly to the dimensions of your specific products. We offer various insert materials including high-density EVA foam, molded pulp, and luxurious velvet-lined trays to ensure a perfect fit and elegant presentation."
                                    },
                                    {
                                        id: "item-3",
                                        question: "What finishing options are available for luxury packaging?",
                                        answer: "We offer a wide array of premium finishes to elevate your brand. These include hot foil stamping (gold, silver, etc.), deep embossing and debossing, glossy spot UV coating, and soft-touch (velvet) lamination for a highly tactile, luxurious feel."
                                    },
                                    {
                                        id: "item-4",
                                        question: "What is your standard production time for rigid boxes?",
                                        answer: "Because rigid boxes require more complex manufacturing and assembly processes than standard folding cartons, our standard turnaround time is typically 10-15 business days after final design approval. We recommend planning your inventory needs accordingly."
                                    },
                                    {
                                        id: "item-5",
                                        question: "Do you offer eco-friendly options for rigid packaging?",
                                        answer: "Yes, we are committed to sustainability. The chipboard core of our rigid boxes is typically made from 100% recycled materials. We can also wrap the boxes in FSC-certified, recyclable kraft papers and use eco-friendly soy-based inks for all printing."
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
                                alt="Custom Packaging FAQ"
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

export default RigidSetupBoxesMaterial;
