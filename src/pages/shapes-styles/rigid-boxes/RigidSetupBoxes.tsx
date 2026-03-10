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

export default function RigidSetupBoxes() {
    const [selectedImage, setSelectedImage] = useState(0);

    // Product images for gallery
    const productImages = [
        { src: shoeBox1, alt: "Custom Rigid Setup Boxes - Main View" },
        { src: shoeBox2, alt: "Custom Rigid Setup Boxes - Side Angle" },
        { src: shoeBox3, alt: "Custom Rigid Setup Boxes - Open Box View" },
        { src: shoeBox4, alt: "Custom Rigid Setup Boxes - Detail Shot" },
        { src: shoeBoxHero, alt: "Custom Rigid Setup Boxes - Lifestyle Shot" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Rigid Setup Boxes | Premium Packaging Wholesale | CustomPackMakers</title>
                <meta name="description" content="Order custom rigid setup boxes & luxury two-piece packaging wholesale. Premium branded rigid setup boxes with fast turnaround, free shipping & full customization." />
                <meta name="keywords" content="custom rigid setup packaging, luxury rigid setup boxes, wholesale rigid boxes, custom branded rigid packaging, two-piece box manufacturer" />
                <meta property="og:title" content="Custom Rigid Setup Boxes | Premium Packaging Wholesale | CustomPackMakers" />
                <meta property="og:description" content="Premium custom rigid setup packaging for luxury retail and gifting. Two-piece rigid boxes, full-color printing & eco-friendly options. Get a free quote." />
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
                                Wholesale custom branded rigid setup packaging engineered for luxury retail, classic unboxing moments, and uncompromising product protection built to scale.
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
                        Classic Custom Setup Packaging Built for High-End Retail
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            Our <strong className="text-foreground">custom rigid setup boxes</strong> represent the foundational standard for luxury and high-end retail packaging. Also known as two-piece lift-off lid boxes, these are precision-engineered for brands that demand a classic, substantial feel. Constructed from thick rigid chipboard and wrapped in premium specialty papers, each box delivers a dramatic, slow-moving unboxing experience—the "friction fit" lid that builds anticipation before revealing the product. Whether you're selling designer footwear, luxury apparel, fine jewelry, or gourmet confections, our <strong className="text-foreground">custom branded setup packaging</strong> is designed to elevate your product's perceived value instantly.
                        </p>
                        <p>
                            From shallow, wide garment boxes to deep, robust vessels for fragile glassware, our <strong className="text-foreground">wholesale rigid setup boxes</strong> accommodate every size and retail requirement. Each box arrives fully assembled, featuring pristine structural integrity and the option for custom-cut protective bases (foam, velvet, or paperboard traps). With exquisite foil stamping, deep embossing, and rich spot UV textures applied to the lid, your <strong className="text-foreground">luxury setup boxes</strong> become a powerful, tactile brand asset. Order wholesale with low minimums and our industry-leading 8–10 day turnaround.
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
                                                <Input id="width" type="number" placeholder="9" className="h-9 bg-white" />
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
                        The Foundation of Retail Luxury: Rigid Setup Packaging
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
                                In the hierarchy of premium packaging, the classic two-piece rigid setup box reigns supreme. It is the ubiquitous symbol of high-end retail, immediately recognizable by its solid construction and the characteristic slow slide of the lid opening due to a perfectly engineered friction fit. This deliberate, paced unboxing process builds anticipation, transforming a retail purchase into an event. From iconic smartphone packaging to luxury fashion houses, custom rigid setup boxes are the standard-bearer for brands demanding superior presentation.
                            </p>
                            <p>
                                At CustomPackMakers, we specialize in engineering setup packaging that serves as the bedrock of your brand's physical presence. We understand that a setup box must not only protect its contents profoundly but must also look impeccable on a retail shelf or upon delivery. By investing in our top-tier custom rigid setup boxes, you ensure your products dominate, fostering immediate brand prestige and driving long-term customer loyalty.
                            </p>

                            <h3>Uncompromising Construction for the Ultimate Unboxing</h3>
                            <p>
                                The defining feature of a setup box is its "set up" or fully assembled nature. Unlike folding cartons, it cannot be flattened, meaning its structural integrity is absolute. We utilize premium-grade materials to construct our rigid setup packaging:
                            </p>
                            <ul>
                                <li><strong>High-Density Chipboard Core:</strong> The structural backbone of both the base and the lid is made from dense, premium chipboard (ranging from 1mm up to 3mm). This solid core guarantees the box will not crush, bend, or warp, providing impenetrable protection for heavy or fragile items.</li>
                                <li><strong>Premium Exterior Wrap:</strong> The robust chipboard is meticulously wrapped in premium papers or fabrics. We offer thousands of options including soft-touch matte papers, textured linen covers, faux leather wraps, and high-gloss chromecoat papers. The tight, flawless wrap over the rigid board is what separates a premium setup box from a cheap imitation.</li>
                                <li><strong>The "Friction Fit" Lid:</strong> Our engineers calculate the exact tolerances required between the outer dimensions of the base and the inner dimensions of the lid. This creates the sought-after "swoosh" effect—the gentle vacuum resistance felt when lifting the lid, a hallmark of true luxury packaging.</li>
                            </ul>
                            <p>
                                This combination of a heavy rigid core and precision wrapping guarantees that your products look spectacular and feel incredibly substantial in the consumer's hands.
                            </p>

                            <h3>Bespoke Versatility: Full Telescope, Partial Telescope, and Neck Trays</h3>
                            <p>
                                The two-piece setup box is highly versatile. We empower brands to choose the specific architectural style that best suits their product and aesthetic preferences:
                            </p>
                            <ul>
                                <li><strong>Full Telescope Boxes:</strong> The lid covers the entire depth of the base, extending all the way down to the bottom edge. This provides double-wall protection on the sides and offers the largest continuous surface area on the lid for branding and artwork.</li>
                                <li><strong>Partial Telescope Boxes:</strong> The lid covers only a portion of the base's depth. This is an elegant choice when you want the base color or material to be visible even when the box is closed, creating a striking two-tone effect.</li>
                                <li><strong>Shoulder / Neck Boxes:</strong> An inner tray (the "neck" or "shoulder") extends above the base. The lid rests upon this shoulder, creating a distinct, flush exterior profile and often revealing a contrasting color band between the lid and base.</li>
                            </ul>

                            <h3>Exquisite Finishing Touches for Retail Dominance</h3>
                            <p>
                                The broad, flat surface of a rigid setup box lid is the perfect canvas for premium finishing details. Our advanced manufacturing techniques elevate the box into a visually stunning brand asset:
                            </p>
                            <ul>
                                <li><strong>Hot Foil Stamping:</strong> Apply brilliant metallic foils (gold, silver, holographic) to your logo or typography for a catching, luxurious gleam.</li>
                                <li><strong>Deep Embossing and Debossing:</strong> Create an elegant tactile experience. A debossed pattern across the entire lid of a textured setup box offers a sophisticated, highly physical branding approach.</li>
                                <li><strong>Spot UV Coating:</strong> Highlight specific design elements with a high-gloss finish against a soft matte background, creating refined visual depth and a modern aesthetic.</li>
                                <li><strong>Custom Interior Linings:</strong> The inside of the base and lid can be lined with contrasting colors, printed patterns, or luxurious materials like velvet or silk to continue the premium experience once the box is opened.</li>
                            </ul>

                            <h3>The Logistical Advantages of Premium Setup Boxes</h3>
                            <p>
                                While setup boxes ship fully assembled (requiring more freight volume than flat-pack boxes), they offer significant operational advantages. They require zero assembly time on your fulfillment line or retail floor. Your staff simply drop the product in, place the lid on top, and it is ready for the customer. This significantly speeds up high-volume packing operations.
                            </p>
                            <p>
                                Partner with CustomPackMakers to design rigid setup packaging that reflects the superior quality of your brand, protects your valuable retail products, and ensures a flawless customer experience. With our high-volume wholesale manufacturing capabilities, dedicated structural design support, and rapid turnaround times, achieving retail packaging perfection is straightforward and highly effective.
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
                            We combine classic craftsmanship, tight tolerances, and reliable production to deliver two-piece setup packaging that dominates retail shelves.
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
                                        Flawless Structural Assembly
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Every <strong>custom rigid setup box</strong> we produce arrives fully assembled, built from thick chipboard with razor-sharp wrapped edges. We guarantee structural integrity and zero assembly time on your end. Our rigorous QC process ensures each unit meets the durability standards your high-end retail operation demands, shipment after shipment.
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
                                        Precision Friction Fit Lids
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        The mark of a true setup box is the smooth, paced removal of the lid. We engineer <strong>custom branded rigid packaging</strong> with exacting dimensional tolerances, ensuring a satisfying vacuum resistance as the lid is lifted. It's an orchestrated unboxing experience executed flawlessly at scale.
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
                                        Retail-Ready Finishes at Scale
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        The lid is your billboard. Our capabilities include precise foil stamping, deep embossing, expansive spot UV, and flawless soft-touch laminations applied to your <strong>wholesale rigid setup boxes</strong>. We deliver boutique-quality, retail-ready finishes consistently across massive production runs.
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
                                    alt="Premium Custom Rigid Setup Box Packaging"
                                    className="w-full h-full object-cover"
                                />
                                {/* Bottom gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                                {/* Bottom text overlay */}
                                <div className="absolute bottom-0 left-0 right-0 p-7">
                                    <p className="text-white font-bold text-lg leading-snug mb-1">
                                        Trusted by Global Retailers
                                    </p>
                                    <p className="text-white/75 text-sm">Delivering classic packaging solutions worldwide</p>
                                </div>
                            </div>

                            {/* Floating badge — top right */}
                            <div className="absolute top-4 -right-2 lg:-right-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80 backdrop-blur-sm">
                                <p className="text-2xl font-bold text-primary leading-none">99%</p>
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
                                    alt="Differentiate Your Retail Presence"
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
                                Differentiate Your <span className="text-primary">Retail Presence</span> From Others
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                At CustomPackMakers, we understand that your packaging is the steadfast ambassador of your brand's quality on the retail floor. To ensure your products outshine the competition, we utilize state-of-the-art manufacturing processes combined with traditional rigid board assembly. Our team works closely with you to perfect the architectural style—whether a full telescope or an elegant shoulder box—ensuring a secure fit and a magnificent display. By integrating distinctive features like custom interior linings, high-end foil stamping, and precisely engineered 'friction fit' lids, we help you create a world-class unboxing experience that builds lasting brand equity and drives premium positioning.
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
                                        question: "Do rigid setup boxes ship flat like other packaging?",
                                        answer: "No. The defining characteristic of a rigid setup box is that it is manufactured 'set up' or fully assembled. It cannot be folded flat. While this requires more shipping volume, it offers unmatched structural integrity, a heavier premium feel, and zero assembly time on your production line."
                                    },
                                    {
                                        id: "item-2",
                                        question: "What is a 'full telescope' vs. 'partial telescope' setup box?",
                                        answer: "These terms describe how the lid fits over the base. In a full telescope box, the lid extends all the way down to the bottom edge of the base. In a partial telescope box, the lid only covers a portion of the base's depth, often revealing a contrasting color or material on the exposed base."
                                    },
                                    {
                                        id: "item-3",
                                        question: "Can you create the slow 'swoosh' effect when opening the lid?",
                                        answer: "Yes, this is a hallmark of high-end setup packaging known as a 'friction fit'. Our manufacturing tolerances are precise enough to create a tight but smooth fit between the lid and base, creating a gentle vacuum resistance that causes the base to slide out slowly when the lid is lifted."
                                    },
                                    {
                                        id: "item-4",
                                        question: "Are setup boxes eco-friendly despite their solid construction?",
                                        answer: "Yes. The thick, rigid chipboard core of setup boxes is typically made from 100% recycled paper content. Furthermore, they can be wrapped in FSC-certified, recyclable kraft or art papers, and printed with soy-based inks. They are also frequently kept and reused by consumers because of their durability."
                                    },
                                    {
                                        id: "item-5",
                                        question: "What is the typical minimum order quantity (MOQ) for wholesale setup boxes?",
                                        answer: "Due to the extensive setup and machinery calibration required for rigid box manufacturing, we typically have minimum production runs that start at 250-500 units depending on size. We encourage you to request a custom quote so we can evaluate your specific dimensions and volume needs."
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
                                alt="Custom Rigid Setup Boxes FAQ"
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


