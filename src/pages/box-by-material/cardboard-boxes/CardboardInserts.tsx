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
import { RelatedProductCardboardBoxes } from "@/components/RelatedProductCardboardBoxes";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";

// Specific product images
import heroImage from "@/assets/material/cardboard-boxes/cardboard-inserts.webp";

// FAQ image
import FAQimage from "@/assets/FAQ-image.webp";

const CardboardInserts = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    // Product images for gallery
    const productImages = [
        { src: heroImage, alt: "Cardboard Inserts - Main View" },
        { src: heroImage, alt: "Cardboard Inserts - Side Angle" },
        { src: heroImage, alt: "Cardboard Inserts - Open Box View" },
        { src: heroImage, alt: "Cardboard Inserts - Detail Shot" },
        { src: heroImage, alt: "Cardboard Inserts - Lifestyle Shot" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Cardboard Inserts | Protective Box Partitions | CustomPackMakers</title>
                <meta name="description" content="Order custom cardboard inserts wholesale. Precision die-cut packaging inserts, partitions, and foam alternatives designed for ultimate product protection." />
                <meta name="keywords" content="cardboard inserts, box partitions, custom packaging inserts, die-cut inserts, wholesale cardboard dividers" />
                <meta property="og:title" content="Custom Cardboard Inserts | Protective Box Partitions | CustomPackMakers" />
                <meta property="og:description" content="Premium custom cardboard inserts and partitions. Precision die-cut, sustainable foam alternative, structural protection & wholesale pricing. Get a free quote." />
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
                                    <Link to="/box-by-material">Box By Material</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link to="/box-by-material/cardboard-boxes">Cardboard Boxes</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Cardboard Inserts</BreadcrumbPage>
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
                                <span className="text-primary">Cardboard</span> Inserts
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Wholesale custom cardboard packaging inserts precision-engineered for maximum product immobilization, impact protection, and sustainable presentation.
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
                                    src={heroImage}
                                    alt="Cardboard Inserts Hero"
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
                        Precision-Engineered Protection for Your Products
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            Our <strong className="text-foreground">custom cardboard inserts</strong> are the invisible heroes of premium packaging. They are precision-engineered to immobilize your products within their master cartons, preventing transit damage while drastically elevating the unboxing experience. Designed as a 100% recyclable, sustainable alternative to styrofoam and plastic blister packs, our <strong className="text-foreground">die-cut cardboard partitions</strong> are crafted from robust corrugated board or premium SBS cardstock depending on your specific needs.
                        </p>
                        <p>
                            Whether you need simple interlocking grids to separate fragile cosmetics, or highly complex, multi-tiered <strong className="text-foreground">punch-out inserts</strong> designed to cradle irregularly shaped tech devices perfectly, our structural engineering team delivers. We can print full-color graphics directly onto the inserts to match your brand aesthetic flawlessly. By eliminating the need for messy void fill, our <strong className="text-foreground">custom packaging inserts</strong> speed up your fulfillment lines and reduce product return rates. Order wholesale with our expert design concierge service.
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
                                            <Input id="quantity" type="number" placeholder="1000" className="h-9 bg-white" />
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">
                        The Structural Importance of Cardboard Inserts
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
                            [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-5 [&>ul]:space-y-2
                            [&>ul>li]:text-[15px] [&>ul>li]:text-slate-600">

                            <p>
                                A beautiful custom box is only half of the packaging equation. If the product inside is allowed to rattle, shift, or collide against the box walls during transit, the risk of damage skyrockets, and the unboxing experience is ruined.
                                This is where custom cardboard inserts become indispensable. By meticulously engineering internal partitions that perfectly match the contours of your product, you create a protective "buffer zone" that absorbs shock and presents the item in a deliberate, highly curated manner.
                            </p>
                            <p>
                                At CustomPackMakers, we treat interior inserts with the same level of structural importance as the master carton itself. We understand that in an era where consumers are highly sensitive to plastic waste, replacing styrofoam peanuts or plastic blister packs with sustainable, custom-engineered cardboard inserts is a powerful brand statement. It communicates that your brand is both environmentally responsible and obsessively focused on quality control.
                            </p>

                            <h3>Precision Die-Cutting & Material Engineering</h3>
                            <p>
                                The effectiveness of a cardboard insert relies entirely on math and material selection. We offer a variety of structural styles tailored to your product's specific needs:
                            </p>
                            <ul>
                                <li><strong>Punch-Out Cavity Inserts:</strong> Utilizing premium SBS cardstock or rigid chipboard, we die-cut the exact silhouette of your product into a raised platform. The product drops snugly into the cavity, lying flush with the insert surface. This is highly popular for cosmetics, electronics, and luxury retail presentations.</li>
                                <li><strong>Interlocking Corrugated Grids:</strong> For separating multiple fragile items (like glass jars or wine bottles) within a single box, we utilize E-flute or B-flute corrugated board. The flutes act as shock absorbers, while the interlocking grid structure provides massive crush resistance.</li>
                                <li><strong>Fold-Over Retention Inserts:</strong> We engineer complex, origami-like cardboard structures that fold over and lock the product in place, essentially suspending the item in the center of the box to prevent impact damage on all six sides.</li>
                            </ul>
                            <p>
                                Every insert we manufacture undergoes rigorous prototyping to ensure the tolerance is perfect. If the cut is too large, the product rattles; if it's too small, fulfillment becomes frustratingly slow. We guarantee the perfect fit.
                            </p>

                            <h3>Enhancing the Unboxing Ceremony</h3>
                            <p>
                                Inserts aren't just for protection; they are an essential tool for presentation. A well-designed insert frames your product, turning the unboxing into a theatrical reveal:
                            </p>
                            <ul>
                                <li><strong>Full-Color Interior Branding:</strong> We don't leave the cardboard blank. We can print full-color patterns, instructional text, or hidden brand messages directly onto the insert surface, ensuring the entire interior of the box reinforces your brand identity.</li>
                                <li><strong>Multi-Level Presentations:</strong> We can engineer multi-tiered inserts with hidden compartments underneath the main display deck—perfect for housing unsightly charging cables, instruction manuals, or secondary accessories out of immediate sight.</li>
                                <li><strong>Premium Finishes:</strong> For high-end applications, we can apply metallic foil stamping to the surface of the cardboard insert or add soft-touch laminations to provide a premium tactile feel.</li>
                            </ul>

                            <h3>The Operational Benefits for Your Fulfillment Team</h3>
                            <p>
                                While custom inserts require an upfront investment in structural design, they almost always yield a positive ROI through massive operational savings:
                            </p>
                            <ul>
                                <li><strong>Drastic Reduction in Packing Time:</strong> Messy void fills (like peanuts or crinkle paper) are incredibly slow to pack correctly. A custom insert allows your fulfillment team to simply drop the product into its designated slot and close the box in seconds, massively increasing throughput.</li>
                                <li><strong>Elimination of Transit Damage:</strong> By physically immobilizing the product, the risk of transit damage drops near zero, saving you the exorbitant costs associated with return shipping, product replacement, and unhappy customer reviews.</li>
                                <li><strong>Inventory Standardization:</strong> Instead of stocking five different sizes of outer boxes, you can stock one master carton and simply use different custom inserts to adapt that single box to fit various products in your lineup.</li>
                            </ul>

                            <h3>Wholesale Manufacturing at Scale</h3>
                            <p>
                                Designing a flawless cardboard insert requires sophisticated CAD software and a deep understanding of packaging physics. Our dedicated team of structural engineers works closely with you, requiring only your product dimensions or a physical sample to create the perfect partition system.
                            </p>
                            <p>
                                Once prototyped and approved, our high-speed die-cutting presses can scale production effortlessly. Whether you need 500 intricate inserts for a VIP PR package or tens of thousands of corrugated grids for a monthly subscription box, we deliver consistent, dimensionally accurate inserts shipped flat to save on freight costs. Let CustomPackMakers engineer the perfect protective interior for your products.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* RELATED PRODUCTS CAROUSEL */}
            <RelatedProductCardboardBoxes />

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
                            We combine advanced CAD structural engineering, premium materials, and flawless execution to deliver inserts that perfectly protect your products.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">
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
                                        Flawless CAD Engineering
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        A sloppy insert is useless. We use advanced CAD software to engineer your <strong>die-cut inserts</strong> to the exact millimeter of your product's dimensions, ensuring a perfectly snug friction-fit that eliminates transit rattle completely.
                                    </p>
                                </div>
                            </div>

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
                                        100% Sustainable Alternative
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Ditch the plastic blister packs and styrofoam. Our <strong>cardboard partitions</strong> are crafted from 100% recyclable, FSC-certified materials, allowing your brand to boast a fully sustainable packaging solution that consumers love.
                                    </p>
                                </div>
                            </div>

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
                                        Fully Printed Presentation
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        We transform functional protection into a branding opportunity. We can print full-color graphics, instructional copy, or seamless patterns directly onto the <strong>cardboard inserts</strong>, ensuring the inside of your box looks as premium as the outside.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img
                                    src={heroImage}
                                    alt="Premium Custom Cardboard Inserts Packaging"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-7">
                                    <p className="text-white font-bold text-lg leading-snug mb-1">
                                        Trusted by Premium Brands
                                    </p>
                                    <p className="text-white/75 text-sm">Delivering protective solutions across North America</p>
                                </div>
                            </div>

                            <div className="absolute top-4 -right-2 lg:-right-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80 backdrop-blur-sm">
                                <p className="text-2xl font-bold text-primary leading-none">0%</p>
                                <p className="text-xs text-slate-400 mt-1 font-medium">Transit Damage Goal</p>
                            </div>

                            <div className="absolute bottom-4 -left-2 lg:-left-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80 backdrop-blur-sm">
                                <p className="text-2xl font-bold text-emerald-500 leading-none">CAD</p>
                                <p className="text-xs text-slate-400 mt-1 font-medium">Precision Fit</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* DIFFERENTIATE SECTION */}
            <section className="py-10 lg:py-12 bg-white overflow-hidden relative">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="relative group">
                            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] border border-primary/20 shadow-2xl transform transition-transform duration-700 hover:scale-[1.02]">
                                <img
                                    src={heroImage}
                                    alt="Differentiate Your Packaging"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                            </div>
                            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-60" />
                            <div className="absolute -z-10 -top-8 -right-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl opacity-60" />
                        </div>

                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                                Differentiate Your <span className="text-primary">Unboxing</span> From Others
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                At CustomPackMakers, we know that consumers associate chaotic, messy packaging with low-quality products. To ensure your brand commands prestige, we utilize advanced CAD structural engineering to create custom inserts that display your product like a work of art. Our team works closely with you to design the perfect partition matrix, ensuring a snug fit and maximum shock absorption. By replacing cheap plastic blister packs and messy void fill with precision-cut, fully printed cardboard inserts, we help you create a world-class, highly curated presentation that reinforces your product's premium value.
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
                                        question: "How Do Cardboard Inserts Save Money On Fulfillment?",
                                        answer: "Custom inserts completely eliminate the need for packers to individually wrap items in bubble wrap or carefully pack messy void fill. They simply drop the product into the pre-cut cavity, closing the box in seconds, which drastically reduces warehouse labor costs."
                                    },
                                    {
                                        id: "item-2",
                                        question: "Can Cardboard Really Protect Fragile Items Like Glass?",
                                        answer: "Yes! When correctly engineered, corrugated cardboard inserts are incredibly protective. The flutes act as shock absorbers, and by immobilizing the glass item in the center of the box, we prevent it from suffering impact damage against the outer walls."
                                    },
                                    {
                                        id: "item-3",
                                        question: "What Do You Need To Design An Insert For My Product?",
                                        answer: "To ensure a perfect fit, our structural engineers typically need either the exact CAD dimensions of your product or, ideally, a physical sample shipped to our facility so we can prototype and test the friction fit."
                                    },
                                    {
                                        id: "item-4",
                                        question: "Can I Print Instructions On The Insert?",
                                        answer: "Absolutely. Printing on the insert is highly recommended. You can print assembly instructions, thank-you notes, or vibrant brand patterns directly onto the SBS cardstock insert, turning it into a marketing asset."
                                    },
                                    {
                                        id: "item-5",
                                        question: "Are Cardboard Inserts Better Than Foam?",
                                        answer: "Cardboard is vastly superior in terms of sustainability, as it is 100% recyclable and biodegradable, whereas EVA foam is generally not. Furthermore, cardboard allows for full-color printing, whereas foam cannot be easily printed on."
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
                                alt="Cardboard Inserts FAQ"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <BrandRating />
            <QuoteForm />
            <Footer />
        </div>
    );
};

export default CardboardInserts;
