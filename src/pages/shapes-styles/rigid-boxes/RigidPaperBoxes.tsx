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

export default function RigidPaperBoxes() {
    const [selectedImage, setSelectedImage] = useState(0);

    // Product images for gallery
    const productImages = [
        { src: shoeBox1, alt: "Custom Rigid Paper Boxes - Main View" },
        { src: shoeBox2, alt: "Custom Rigid Paper Boxes - Side Angle" },
        { src: shoeBox3, alt: "Custom Rigid Paper Boxes - Open Box View" },
        { src: shoeBox4, alt: "Custom Rigid Paper Boxes - Detail Shot" },
        { src: shoeBoxHero, alt: "Custom Rigid Paper Boxes - Lifestyle Shot" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Rigid Paper Boxes | Premium Retail Packaging | CustomPackMakers</title>
                <meta name="description" content="Order custom rigid paper boxes & premium retail packaging wholesale. Branded chipboard boxes with specialty paper wraps, fast turnaround & free shipping." />
                <meta name="keywords" content="custom rigid paper boxes, rigid chipboard packaging, wholesale rigid boxes, wrapped rigid packaging, premium paper boxes" />
                <meta property="og:title" content="Custom Rigid Paper Boxes | Premium Retail Packaging | CustomPackMakers" />
                <meta property="og:description" content="High-end custom rigid paper boxes wrapped in premium specialty stocks. Uncompromising structural integrity for luxury retail. Get a free quote." />
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
                                <BreadcrumbPage>Rigid Paper Boxes</BreadcrumbPage>
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
                                <span className="text-primary">Premium</span> Rigid Paper Boxes
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Wholesale custom rigid chipboard boxes flawlessly wrapped in premium specialty papers, engineered for luxury presentation, unyielding protection, and massive retail impact.
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
                                    alt="Custom Rigid Paper Boxes Hero"
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
                        Uncompromising Rigid Construction Meets Exquisite Paper Finishing
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            Our <strong className="text-foreground">custom rigid paper boxes</strong> are the gold standard for premium packaging across all luxury retail sectors. This packaging style combines the brute structural strength of dense, compressed chipboard with the refined elegance of specialty paper covers. Whether you require a tactile soft-touch matte wrap, a textured linen finish, or a high-gloss metallic art paper, the 'wrap' is applied over the rigid core to create a flawless, seamless exterior. These boxes do not fold flat; they are manufactured 'set up' and ready to dominate the retail shelf. They are the premier choice for cosmetics, high-end spirits, designer apparel, and fine jewelry.
                        </p>
                        <p>
                            We offer unparalleled customization for your <strong className="text-foreground">rigid chipboard packaging</strong>. Beyond the choice of exterior paper, you can fully dictate the interior architecture—from custom printed linings to bespoke die-cut foam, velvet, or rigid paper-trap inserts. Elevate your brand with striking finishes like hot foil stamping, deep debossing, or precision spot UV coating applied directly to the premium paper wrap. Order wholesale with CustomPackMakers to ensure your <strong className="text-foreground">premium rigid boxes</strong> meet the absolute highest standards of quality, produced at scale with fast 8–10 day turnarounds.
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
                        The Anatomy of Prestige: Custom Rigid Paper Packaging
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
                                In the crowded landscape of retail, the physical weight, texture, and structural integrity of a box communicate value before the customer ever sees the product inside. Custom rigid paper boxes are the definitive packaging format for brands demanding absolute premium positioning. Unlike folding cartons which feel light and collapsible, a wrapped rigid box feels substantial, permanent, and inherently valuable. It signals to the consumer that the item within is precious enough to warrant uncompromising protection and exquisite presentation.
                            </p>
                            <p>
                                At CustomPackMakers, we specialize in manufacturing these high-end vessels. We understand that a rigid paper box is essentially a marriage of two distinct elements: the heavy, unyielding chipboard core that provides the profound structure, and the delicate, highly customized paper wrap that dictates the tactile and visual aesthetic. By controlling the tolerances of both elements entirely in-house, we ensure your rigid boxes possess the flawless edges, perfect fit, and stunning surface finishes required by luxury retail.
                            </p>

                            <h3>Deconstructing the Rigid Paper Box: Core and Wrap</h3>
                            <p>
                                The superiority of a rigid box stems from its two-part construction process. It is "built", not just folded:
                            </p>
                            <ul>
                                <li><strong>The Solid Chipboard Core:</strong> We start with very dense, highly compressed greyboard or chipboard, typically ranging from 1mm up to 3mm thick. This core is die-cut and precision-scored, then corners are taped or glued to form a solid, immovable 3D structure. This base provides incredible crush resistance and the 'weight' associated with luxury packaging.</li>
                                <li><strong>The Premium Paper Wrap:</strong> The raw chipboard is rarely left exposed. It is meticulously wrapped with a thinner, highly decorative paper stock (usually 120gsm to 157gsm). The wrap is glued perfectly flat against the board and folded sharply over the edges into the interior, completely concealing the structural core.</li>
                                <li><strong>Thousands of Texture Options:</strong> The choice of wrap dictates the soul of the box. We offer soft-touch matte stocks for a modern, velvety feel; uncoated textured linens for an organic, artisanal look; high-gloss chromecoat papers for vibrant color reproduction; or even metallic and pearlescent papers for dramatic impact.</li>
                            </ul>

                            <h3>Architectural Versatility of Rigid Packaging</h3>
                            <p>
                                The rigid board construction allows for a vast array of architectural styles, ensuring the unboxing experience matches the product type perfectly:
                            </p>
                            <ul>
                                <li><strong>Two-Piece Setup Boxes (Full or Partial Telescope):</strong> The classic retail format where a lid lifts slowly off a base (the famous 'friction fit' swoosh effect).</li>
                                <li><strong>Magnetic Closure "Book" Boxes:</strong> A single-piece construction mimicking a hardcover book, featuring a front flap that snaps shut securely using hidden neodymium magnets.</li>
                                <li><strong>Slipcase and Drawer (Matchbox Style):</strong> A highly rigid outer sleeve housing a sturdy inner tray that slides out, often featuring an elegant ribbon pull-tab.</li>
                                <li><strong>Shoulder / Neck Boxes:</strong> An inner collar extends above the base tray, providing a shoulder for the lid to rest upon, creating beautiful tiered aesthetics or color banding.</li>
                            </ul>

                            <h3>High-End Finishing Applications on Rigid Paper Packs</h3>
                            <p>
                                Because the exterior wrap is applied to a perfectly flat, solid board, rigid boxes provide the absolute best canvas for high-end decorative techniques. Our advanced manufacturing allows us to apply finishes with incredible precision:
                            </p>
                            <ul>
                                <li><strong>Deep Foil Stamping:</strong> Apply brilliant gold, silver, or custom color metallic foils to logos and typography. On a rigid box, foil can be applied with significant pressure without crushing the box, creating stunning results.</li>
                                <li><strong>Crisp Embossing and Debossing:</strong> Create highly tactile, raised or sunken relief patterns across the surface. A debossed logo on a thick, soft-touch wrapped rigid box is the epitome of modern minimalist luxury.</li>
                                <li><strong>Spot UV and Varnishes:</strong> Highlight specific design elements or patterns with a high-gloss finish contrasting against a matte background, adding sophisticated depth to the paper wrap.</li>
                            </ul>

                            <h3>The Sustainability Shift in Rigid Packaging</h3>
                            <p>
                                Luxury packaging does not have to compromise environmental ethics. The thick chipboard core of all our rigid boxes is manufactured from 100% recycled post-consumer waste paper. Furthermore, we offer a wide range of FSC-certified, fully recyclable, and sustainable exterior wraps. The very nature of a rigid box—its durability and beauty—means it is rarely thrown away; consumers actively keep and repurpose them, fundamentally extending the lifecycle of the packaging.
                            </p>
                            <p>
                                Partner with CustomPackMakers to manufacture rigid paper packaging that commands respect on the retail floor and protects your most valuable products. With our immense structural expertise, vast wrap library, and scalable wholesale production, achieving packaging perfection is straightforward and highly impactful to your bottom line.
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
                            We combine heavy-duty chipboard construction with flawless paper wrapping to deliver packaging that defines retail luxury.
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
                                        Immaculate Wrapper Fit & Finish
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        The quality of a rigid box is judged by its edges. Every <strong>custom rigid paper box</strong> we produce features flawlessly glued specialty wraps with razor-sharp corners and perfectly flush turn-ins on the interior. Zero bubbling, zero peeling. Our rigorous QC process ensures pristine aesthetics across massive wholesale runs.
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
                                        Bank-Vault Structural Integrity
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Beneath the beautiful paper wrap lies true strength. We engineer our <strong>rigid chipboard packaging</strong> using highly compressed greyboard. This provides extreme crush-resistance and structural rigidity, ensuring maximum protection for heavy glass bottles, delicate electronics, or high-value cosmetics during transit and handling.
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
                                        Limitless Finish Customization
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        The paper wrap is your canvas. Our capabilities include precise metallic foil stamping, deep tactile debossing, heavy spot UV, and sourcing thousands of unique textured paper stocks for your <strong>wholesale rigid boxes</strong>. We deliver boutique-quality, retail-ready finishes consistently across high-volume production.
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
                                    alt="Premium Custom Rigid Paper Box Packaging"
                                    className="w-full h-full object-cover"
                                />
                                {/* Bottom gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                                {/* Bottom text overlay */}
                                <div className="absolute bottom-0 left-0 right-0 p-7">
                                    <p className="text-white font-bold text-lg leading-snug mb-1">
                                        Trusted by Luxury Brands
                                    </p>
                                    <p className="text-white/75 text-sm">Delivering premium paper packaging worldwide</p>
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
                                Differentiate Your <span className="text-primary">Retail Dominance</span> From Others
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                At CustomPackMakers, we understand that your packaging is the steadfast ambassador of your brand's ultimate quality on the retail floor. To ensure your products immediately signal 'premium', we utilize a highly controlled manufacturing process combining brute structural board with delicate, precision paper wrapping. Our team works closely with you to perfect the architectural style, ensuring perfect interior sizing. By integrating distinctive features like high-end textured paper stocks, profound foil stamping, and deep debossing, we help you create a world-class unboxing experience that builds lasting brand equity and justifies premium product positioning.
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
                                        question: "What is the difference between a folding carton and a rigid paper box?",
                                        answer: "A folding carton (like a standard cereal box) is printed on thinner cardstock and ships flat, requiring assembly. A rigid box is constructed from thick, unbendable greyboard that is then wrapped in printed paper. It ships fully set up, offers massive structural protection, and feels significantly more luxurious and substantial."
                                    },
                                    {
                                        id: "item-2",
                                        question: "Can I choose specific textures for the outer paper wrap?",
                                        answer: "Yes. The paper 'wrap' is highly customizable. You can choose from standard smooth coated papers for bright printing, soft-touch matte stocks for a velvety feel, uncoated textured linens or kraft papers for an organic look, or even premium faux-leather or metallic papers."
                                    },
                                    {
                                        id: "item-3",
                                        question: "Are the edges of a rigid box sharp or rounded?",
                                        answer: "Standard premium rigid boxes feature sharp, crisp 90-degree corners. This is achieved by cutting a V-groove into the thick chipboard before folding it, resulting in a very modern, architectural profile. If a softer look is required, standard scored corners can provide a slightly more rounded edge."
                                    },
                                    {
                                        id: "item-4",
                                        question: "Are rigid paper boxes environmentally friendly?",
                                        answer: "Yes, they can be highly sustainable. The thick chipboard core of all our rigid boxes is typically made from 100% recycled paper material. We can also utilize FSC-certified exterior wrap papers printed with eco-friendly inks, ensuring the entire luxury package remains environmentally responsible."
                                    },
                                    {
                                        id: "item-5",
                                        question: "What is the minimum order quantity (MOQ) for custom rigid boxes?",
                                        answer: "Due to the specialized machinery, die molds, and wrapping calibration required for rigid box manufacturing, we typically require a minimum production run of 250-500 units depending on size. Please request a custom quote to discuss your specific volume needs."
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
                                alt="Custom Rigid Paper Boxes FAQ"
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


