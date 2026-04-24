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
import { RelatedProductHolographicBoxes } from "@/components/RelatedProductHolographicBoxes";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";

// Product images
import holographicFoilingBoxes from "@/assets/holographic-foiling-boxes.webp";
import placeholder1 from "@/assets/holographic-boxes-hero.webp";
import placeholder2 from "@/assets/holographic-mylar-bags.webp";
import placeholder3 from "@/assets/holographic-bags.webp";
import placeholder4 from "@/assets/holographic-foiling-boxes.webp";

// FAQ image
import FAQimage from "@/assets/FAQ-image.webp";

const HolographicFoilingBoxesMaterial = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    const productImages = [
        { src: holographicFoilingBoxes, alt: "Custom Holographic Foiling Boxes - Main View" },
        { src: placeholder1, alt: "Custom Holographic Foiling Boxes - Angle" },
        { src: placeholder2, alt: "Custom Holographic Foiling Boxes - Detail" },
        { src: placeholder3, alt: "Custom Holographic Foiling Boxes - Close up" },
        { src: placeholder4, alt: "Custom Holographic Foiling Boxes - Lifestyle" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Holographic Foiling Boxes | Premium Holographic Packaging | CustomPackMakers</title>
                <meta name="description" content="Order custom holographic foiling boxes & iridescent packaging wholesale. Premium branded holographic foiling boxes with rainbow effects, fast turnaround & free shipping." />
                <meta name="keywords" content="custom holographic foiling boxes, holographic packaging, iridescent boxes, rainbow effect bags, custom branded packaging" />
                <meta property="og:title" content="Custom Holographic Foiling Boxes | Premium Holographic Packaging | CustomPackMakers" />
                <meta property="og:description" content="Premium custom holographic foiling boxes for modern brands. Iridescent finish, rainbow effects, and futuristic packaging appeal. Get a free quote." />
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
                                    <Link to="/categories/holographic-boxes">Holographic Boxes</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Holographic Foiling Boxes</BreadcrumbPage>
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
                                <span className="text-primary">Iridescent</span> Holographic Foiling Boxes
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Wholesale custom branded holographic foiling boxes featuring stunning rainbow effects and futuristic visual appeal to make your brand stand out instantly.
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
                                    alt="Custom Holographic Foiling Boxes Hero"
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
                        Custom Holographic Foiling Boxes Designed for Maximum Visual Impact
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            Our <strong className="text-foreground">custom holographic foiling boxes</strong> are engineered to captivate and convert. Featuring a mesmerizing <strong className="text-foreground">iridescent finish</strong> that shifts and shimmers with the light, these packaging solutions provide a <strong className="text-foreground">futuristic appeal</strong> that modern consumers crave. Whether you're in the beauty, tech, or high-end fashion industry, our <strong className="text-foreground">holographic packaging</strong> ensures your product is the center of attention from the moment it's seen on the shelf or unboxed at home.
                        </p>
                        <p>
                            Utilizing advanced printing techniques and premium holographic substrates, we deliver <strong className="text-foreground">rainbow effects</strong> that are both vivid and durable. Each <strong className="text-foreground">holographic holographic foiling boxes</strong> is a testament to our commitment to <strong className="text-foreground">visual branding</strong> excellence. With options for custom shapes, sizes, and additional finishes like spot UV or embossing, your packaging becomes a high-performance marketing asset. Order wholesale today and experience the CustomPackMakers difference with our industry-leading turnaround times.
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
                        The Power of Iridescent Finishes and Rainbow Effects in Modern Branding
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
                                In an era where visual saturation is at an all-time high, brands must find innovative ways to capture consumer attention. Custom holographic packaging, with its mesmerizing <strong className="text-foreground">Iridescent Finish</strong> and dynamic <strong className="text-foreground">Rainbow Effects</strong>, offers a unique solution that transcends traditional design. This <strong className="text-foreground">Futuristic Packaging Appeal</strong> is not just about aesthetics; it's a strategic tool for <strong className="text-foreground">Visual Branding</strong> that communicates innovation, premium quality, and a forward-thinking brand identity.
                            </p>
                            <p>
                                At CustomPackMakers, we understand the science of shimmer. Our holographic solutions are engineered to leverage the way light interacts with surfaces, creating a multi-dimensional experience that traditional printing cannot replicate. Whether you are launching a new product or revitalizing an existing brand, incorporating holographic elements into your packaging is a guaranteed way to increase shelf presence and create a lasting impression on your customers.
                            </p>

                            <h3>The Science of the Iridescent Finish</h3>
                            <p>
                                What makes an <strong className="text-foreground">Iridescent Finish</strong> so captivating? It's the phenomenon of certain surfaces appearing to change color as the angle of view or the angle of illumination changes. In packaging, this is achieved through thin-film interference or micro-embossed holographic patterns. When light hits these surfaces, it splits into its spectral components, creating those signature <strong className="text-foreground">Rainbow Effects</strong>. This dynamic quality ensures that your packaging is never static—it "moves" with the customer, inviting interaction and exploration.
                            </p>
                            <p>
                                We offer various ways to achieve this effect:
                            </p>
                            <ul>
                                <li><strong>Holographic Substrates:</strong> Entire sheets of paperboard or film that are inherently holographic. These provide a consistent, all-over shimmer that is perfect for bold, high-impact designs.</li>
                                <li><strong>Holographic Foil Stamping:</strong> For a more subtle and sophisticated look, we can apply holographic foils to specific areas of your design, such as logos, text, or intricate patterns. This adds a layer of luxury and precision to your <strong className="text-foreground">Visual Branding</strong>.</li>
                                <li><strong>Iridescent Laminations:</strong> Applying a specialized film over your printed design to create a soft, ethereal glow that shifts subtly between pastel hues.</li>
                            </ul>

                            <h3>Futuristic Packaging Appeal for Modern Consumers</h3>
                            <p>
                                Today's consumers, particularly Gen Z and Millennials, are drawn to designs that feel technological, innovative, and "social-media ready." The <strong className="text-foreground">Futuristic Packaging Appeal</strong> of holographic materials fits perfectly into this aesthetic. It suggests a brand that is cutting-edge and unafraid to push boundaries. This visual language is particularly effective in industries like:
                            </p>
                            <ul>
                                <li><strong>Cosmetics and Beauty:</strong> Where the shifting colors of the packaging can mirror the transformative nature of the products themselves.</li>
                                <li><strong>Consumer Electronics:</strong> Where the high-tech look of holography reinforces the innovation of the device inside.</li>
                                <li><strong>Gaming and Collectibles:</strong> Where the "rare" and "premium" feel of holographic effects aligns with the value placed on special editions.</li>
                                <li><strong>Apparel and Footwear:</strong> Where bold, iridescent accents can make a product feel like a piece of wearable technology.</li>
                            </ul>

                            <h3>Enhancing Visual Branding Through Light and Color</h3>
                            <p>
                                Your packaging is the physical embodiment of your brand. Effective <strong className="text-foreground">Visual Branding</strong> requires a cohesive and memorable design language. Holographic elements can be used to reinforce your brand's core values. For example, a brand focused on sustainability might use holographic foils on recycled kraft board to suggest a "natural brilliance," while a luxury brand might use a deep-toned holographic pattern to convey exclusivity and depth.
                            </p>
                            <p>
                                Our design team works closely with you to ensure that the <strong className="text-foreground">Rainbow Effects</strong> enhance, rather than overwhelm, your branding. We focus on balance—using the brilliance of holography to draw the eye to your most important brand assets, such as your logo or unique selling propositions.
                            </p>

                            <h3>Durability Meets Aesthetics</h3>
                            <p>
                                While the focus is often on the look, we never compromise on performance. Our custom holographic foiling boxes are built to withstand the rigors of the supply chain. The holographic finishes are integrated into the structure of the packaging, ensuring they remain vibrant and scuff-resistant throughout shipping and handling. This combination of beauty and brawn is what makes CustomPackMakers a leader in the packaging industry.
                            </p>
                            <p>
                                We use high-quality adhesives and substrates that prevent peeling or fading, ensuring that the first impression a customer has when they receive their order is just as powerful as the one they had when they saw it online. Our <strong className="text-foreground">Visual Branding</strong> solutions are designed to last, maintaining their futuristic appeal from the warehouse to the customer's doorstep.
                            </p>

                            <h3>The Role of Holography in the Unboxing Experience</h3>
                            <p>
                                The unboxing experience is a critical marketing touchpoint. When a customer receives a package that shimmers with an <strong className="text-foreground">Iridescent Finish</strong>, it creates an immediate sense of excitement and anticipation. This "wow factor" is highly shareable, encouraging customers to create user-generated content (UGC) for platforms like Instagram and TikTok, providing your brand with free and authentic organic reach.
                            </p>
                            <p>
                                Imagine a customer opening a shipping box to find a holographic foiling boxes that glows with <strong className="text-foreground">Rainbow Effects</strong>. That moment of delight builds a positive emotional connection with your brand, fostering loyalty and increasing the likelihood of repeat purchases. Investing in premium holographic packaging is an investment in your customer's happiness and your brand's long-term success.
                            </p>
                            <p>
                                Whether you're looking for a bold statement or a subtle accent, CustomPackMakers has the expertise and technology to bring your vision to life. Let us help you harness the power of light and color to create packaging that truly shines.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* RELATED PRODUCTS CAROUSEL */}
            <RelatedProductHolographicBoxes />

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
                            We combine cutting-edge technology with creative design to deliver packaging that makes your brand unforgettable.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">

                        {/* LEFT: editorial typography */}
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
                                        Innovative Holographic Technology
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        We utilize the latest in holographic printing and lamination technology to deliver vivid <strong className="text-foreground">Rainbow Effects</strong> and flawless <strong className="text-foreground">Iridescent Finishes</strong>. Our materials are selected for their brilliance and durability, ensuring your brand always looks its best.
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
                                        Tailored Branding Solutions
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Your brand is unique, and your packaging should be too. We offer fully bespoke customization, from exact dimensions to intricate foil stamping. Our experts work with you to integrate holographic elements that perfectly align with your <strong className="text-foreground">Visual Branding</strong> strategy.
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
                                        Rapid Wholesale Fulfillment
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        We understand the pace of modern business. Our streamlined production process ensures a fast 8–10 day turnaround for wholesale orders. Get your <strong className="text-foreground">Futuristic Packaging</strong> designed, manufactured, and delivered with unmatched speed and reliability.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT: image with floating badges */}
                        <div className="relative flex items-center justify-center py-8">
                            {/* Square image container */}
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img
                                    src={productImages[0].src}
                                    alt="Premium Holographic Packaging"
                                    className="w-full h-full object-cover"
                                />
                                {/* Bottom gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                                {/* Bottom text overlay */}
                                <div className="absolute bottom-0 left-0 right-0 p-7">
                                    <p className="text-white font-bold text-lg leading-snug mb-1">
                                        Leading the Future of Packaging
                                    </p>
                                    <p className="text-white/75 text-sm">Trusted by innovative brands worldwide</p>
                                </div>
                            </div>

                            {/* Floating badge — top right */}
                            <div className="absolute top-4 -right-2 lg:-right-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80 backdrop-blur-sm">
                                <p className="text-2xl font-bold text-primary leading-none">99%</p>
                                <p className="text-xs text-slate-400 mt-1 font-medium">Color Accuracy</p>
                            </div>

                            {/* Floating badge — bottom left */}
                            <div className="absolute bottom-4 -left-2 lg:-left-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80 backdrop-blur-sm">
                                <p className="text-2xl font-bold text-emerald-500 leading-none">8–10</p>
                                <p className="text-xs text-slate-400 mt-1 font-medium">Day Delivery</p>
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
                                    src={productImages[1].src}
                                    alt="Differentiate Your Brand"
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
                                Differentiate Your <span className="text-primary">Brand</span> with Light
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                At CustomPackMakers, we know that in a crowded marketplace, standing still is the same as moving backward. Our holographic solutions allow your brand to move forward by literally reflecting the light in new and exciting ways. By combining <strong className="text-foreground">rainbow effects</strong> with high-quality materials, we help you create a <strong className="text-foreground">Visual Branding</strong> experience that is impossible to ignore. Whether it's the subtle shimmer of a foiling box or the bold brilliance of a mylar bag, our <strong className="text-foreground">futuristic packaging</strong> ensures your brand is always seen in its best light.
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
                                    Everything you need to know about our holographic packaging solutions.
                                </p>
                            </div>

                            <Accordion type="single" collapsible defaultValue="item-1" className="w-full space-y-2">
                                {[
                                    {
                                        id: "item-1",
                                        question: "Are holographic boxes recyclable?",
                                        answer: "Yes, many of our holographic boxes are recyclable. We use eco-friendly holographic films and soy-based inks. However, recyclability can depend on the specific combination of materials used. Contact our experts for a sustainable solution tailored to your brand."
                                    },
                                    {
                                        id: "item-2",
                                        question: "Can I print my logo over the holographic finish?",
                                        answer: "Absolutely. We specialize in overprinting on holographic substrates. We can use opaque inks to make your logo stand out against the shimmer, or translucent inks to create unique color-shifting branding effects."
                                    },
                                    {
                                        id: "item-3",
                                        question: "What is the difference between holographic and iridescent?",
                                        answer: "Holography often involves complex patterns that create 3D-like rainbow effects, while iridescence typically refers to a smoother, pearl-like color shift. Both offer stunning visual appeal and we provide options for both styles."
                                    },
                                    {
                                        id: "item-4",
                                        question: "Is there a minimum order quantity for custom holographic bags?",
                                        answer: "We offer low minimum order quantities (MOQs) to support brands of all sizes. For most custom holographic solutions, our MOQs start as low as 500 units, with significant discounts available for larger wholesale volumes."
                                    },
                                    {
                                        id: "item-5",
                                        question: "How durable are the rainbow effects? Will they scratch off?",
                                        answer: "Our holographic effects are highly durable. We use advanced lamination and coating techniques that integrate the shimmer into the packaging surface, making it resistant to scratches, scuffs, and fading during transit."
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
                                alt="Custom Holographic Packaging FAQ"
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

export default HolographicFoilingBoxesMaterial;
