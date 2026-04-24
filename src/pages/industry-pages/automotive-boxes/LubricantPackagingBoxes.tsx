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
import { RelatedProductAutomotive } from "@/components/RelatedProductAutomotive";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";

// Product Image
import lubricantpackaginghero from "@/assets/automotive-products/lubricant-packaging/img-hero.webp";
import lubricantpackagingimg1 from "@/assets/automotive-products/lubricant-packaging/img-1.webp";
import lubricantpackagingimg2 from "@/assets/automotive-products/lubricant-packaging/img-2.webp";
import lubricantpackagingimg3 from "@/assets/automotive-products/lubricant-packaging/img-3.webp";
import lubricantpackagingimg4 from "@/assets/automotive-products/lubricant-packaging/img-4.webp";
import lubricantpackagingimg5 from "@/assets/automotive-products/lubricant-packaging/img-5.webp";
import lubricantpackagingimg6 from "@/assets/automotive-products/lubricant-packaging/img-whychoose.webp";
import lubricantpackagingimg7 from "@/assets/automotive-products/lubricant-packaging/img-different.webp";

// FAQ image
import FAQimage from "@/assets/FAQ-image.webp";

const LubricantPackagingBoxes = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    // Placeholder gallery images
    const productImages = [
        { src: lubricantpackagingimg1, alt: "Custom Lubricant Packaging Box" },
        { src: lubricantpackagingimg2, alt: "Motor Oil Bottle Packaging" },
        { src: lubricantpackagingimg3, alt: "Automotive Fluid Box - Open" },
        { src: lubricantpackagingimg4, alt: "Lubricant Packaging - Side" },
        { src: lubricantpackagingimg5, alt: "Branded Motor Oil Box" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Lubricant Packaging Boxes | Motor Oil & Fluid Boxes | CustomPackMakers</title>
                <meta name="description" content="Wholesale custom lubricant packaging for motor oils, brake fluids, and additives. Leak-resistant, sturdy boxes designed for secure retail display and shipping." />
                <meta name="keywords" content="lubricant packaging boxes, motor oil boxes, automotive fluid packaging, custom oil bottle boxes, fluid boxes" />
                <meta property="og:title" content="Custom Lubricant Packaging Boxes | Motor Oil & Fluid Boxes | CustomPackMakers" />
                <meta property="og:description" content="Secure and branded packaging for automotive lubricants. Protect bottles from leaks and damage with our custom solutions." />
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
                                    <Link to="/industries/automotive-boxes">Automotive Boxes</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Lubricant Packaging Boxes</BreadcrumbPage>
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
                                <span className="text-primary">Custom</span> Lubricant Packaging Boxes
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Secure, leak-resistant packaging solutions for motor oils, specialized lubricants, and automotive fluids. Designed to prevent spills and showcase your brand on the retail shelf.
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
                                    src={lubricantpackaginghero}
                                    alt="Custom Lubricant Packaging Boxes"
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
                        Clean, Safe, and Professional Fluid Packaging
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            Packaging for automotive fluids presents a unique set of challenges: weight, potential for leakage, and the need for clear product information. Our <strong className="text-foreground">custom lubricant packaging boxes</strong> meet these challenges head-on. We design boxes that snugly fit standard quart and gallon bottles, minimizing movement and reducing the risk of caps loosening during transit.
                        </p>
                        <p>
                            Visual appeal is equally important in the crowded automotive care aisle. Our boxes offer ample space for vibrant graphics, usage instructions, and safety warnings. Whether you are selling synthetic motor oil, brake fluid, or fuel additives, our <strong className="text-foreground">custom printed boxes</strong> help your product command attention while ensuring it stays secure and leak-free.
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
                                                <Input id="length" type="number" placeholder="4" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label>
                                                <Input id="width" type="number" placeholder="4" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">D (in)</Label>
                                                <Input id="depth" type="number" placeholder="9" className="h-9 bg-white" />
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
                        Leak-Proof and Durable: The Lubricant Packaging Difference
                    </h2>
                    <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="[&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-slate-900 [&>h2]:mb-4 [&>h2]:mt-8 [&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-6 [&>h3]:mb-3 [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-4 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-4 [&>ul]:space-y-2 [&>ul>li]:text-[15px] [&>ul>li]:text-slate-600">
                            <h2>The Science of Packaging Automotive Liquids</h2>
                            <p>
                                In the automotive industry, fluids are the lifeblood of the vehicle. From high-viscosity motor oils to corrosive brake fluids and transmission lubricants, these products require packaging that goes beyond simple containment. <strong>Custom lubricant packaging boxes</strong> are engineered to withstand the unique challenges of specific gravity, hydraulic pressure, and chemical reactivity. At CustomPackMakers, we don't just box bottles; we engineered logistics solutions that ensure your liquids arrive safe, secure, and ready for the shelf.
                            </p>
                            <p>
                                The stakes are high. A leaking bottle doesn't just ruin one unit; it can compromise an entire pallet, causing thousands of dollars in damages and cleanup costs. Our packaging is designed with a "zero-leak" philosophy, utilizing structural reinforcement and material science to immobilize bottles and contain any potential spills. Whether you are packaging quart bottles for retail or gallon jugs for workshops, our boxes are built to handle the load.
                            </p>

                            <h3>Heavy-Weight Performance for Heavy Liquids</h3>
                            <p>
                                Liquid leads to heavy loads. A standard 12-quart case of motor oil can weigh over 25 pounds. Ordinary cardboard often buckles under this stress.
                            </p>
                            <ul>
                                <li><strong>High-Test Corrugated Board:</strong> We utilize 200# test or 275# test double-wall corrugated board (BC-flute) for master cases. This material offers superior stacking strength, ensuring that bottom boxes on a pallet do not crush under the weight of layers above.</li>
                                <li><strong>Reinforced Bottoms:</strong> Our boxes feature crash-lock or auto-lock bottoms that are structurally reinforced to prevent "bottom-out" failures, where the weight of the bottles pushes through the bottom of the box during lifting.</li>
                                <li><strong>Tear-Resistant Handles:</strong> For larger multi-packs, we integrate reinforced die-cut handles that allow for safe, comfortable lifting without tearing the box wall.</li>
                            </ul>

                            <h3>Defensive Coatings & Chemical Resistance</h3>
                            <p>
                                Spills happen. But they shouldn't ruin the packaging.
                            </p>
                            <ul>
                                <li><strong>Aqueous & UV Coatings:</strong> We apply protective coatings to the exterior of the box that repel water and oil splashes. This ensures that your branding remains pristine even in the greasy environment of an auto repair shop.</li>
                                <li><strong>Inner Liners:</strong> For added protection, we can use treated inner liners that resist oil absorption. This prevents minor leaks from soaking into the cardboard and compromising the box's structural integrity.</li>
                            </ul>

                            <h3>Retail Ready & Shelf Stable</h3>
                            <p>
                                In the auto parts store, your product needs to pop.
                            </p>
                            <p>
                                <strong>High-Impact Graphics:</strong> We use high-quality litho-lamination to print photographic graphics that showcase your brand's performance. Use gloss finishes to make colors vibrant or matte finishes for a technical, premium look.
                            </p>
                            <p>
                                <strong>Window Cutouts:</strong> Let the customer see the product. We can integrate die-cut windows that allow the bottle's shape and label to be visible while still securely holding it in place. This builds trust and reduces the need for customers to open the box.
                            </p>

                            <h3>Sustainability in the Chemical Sector</h3>
                            <p>
                                The lubricant industry is moving towards greener practices, and packaging is a big part of that.
                            </p>
                            <ul>
                                <li><strong>100% Recyclable:</strong> Our corrugated boxes are fully recyclable, helping you and your customers reduce environmental impact.</li>
                                <li><strong>Right-Size Engineering:</strong> By designing the box to fit your bottles perfectly, we eliminate the need for excess packaging material and void fill, reducing waste and optimizing shipping volume.</li>
                            </ul>

                            <h3>Why CustomPackMakers is Your Strategic Partner</h3>
                            <p>
                                We support your supply chain with:
                            </p>
                            <ul>
                                <li><strong>Drop-Test Validation:</strong> We can provide prototypes for you to perform ISTA drop tests, ensuring the packaging meets shipping standards before full production.</li>
                                <li><strong>Flexible Volumes:</strong> From small runs for specialized synthetic oils to massive runs for standard motor oil grades, we scale with your needs.</li>
                                <li><strong>JIT Delivery:</strong> Our "Just-in-Time" manufacturing capabilities ensure you have the packaging boxes you need, exactly when your production line is ready to fill them.</li>
                            </ul>
                            <p>
                                Don't risk leaks or brand damage. Choose <strong>custom lubricant packaging boxes</strong> from CustomPackMakers that are as tough and reliable as the fluids they protect.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* RELATED PRODUCTS CAROUSEL */}
            <RelatedProductAutomotive />

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
                                        Leak-Proof Structural Design
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Bottle movement loosens caps and causes leakage during transit. We engineer custom internal dividers and tight-tolerance inserts from corrugated or foam that immobilize each bottle, eliminating lateral rotation that stresses cap seals. Cell dividers in multi-packs prevent bottle-on-bottle contact under long-haul freight vibration loads.
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
                                        Chemical Resistance
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Automotive workshops expose packaging to grease, oil splashes, and humidity. Our aqueous and UV overprint varnishes create a hydrophobic, oleophobic barrier that repels motor oil, gear oil, and lubricant splashes, keeping structural integrity intact and your branding pristine on retail shelves for months.
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
                                        Weight-Optimized Durability
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        A 12-quart motor oil case exceeds 25 lbs, creating enormous base stress during picking. We use 200# or 275# double-wall BC-flute corrugated board, delivering compression strength rated above 400 lbs. Reinforced crash-lock bottoms with four-point interlocking flaps ensure zero bottom-out failures under full pallet-stack weight.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img
                                    src={lubricantpackagingimg6}
                                    alt="Professional lubricant packaging"
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
                                    src={lubricantpackagingimg7}
                                    alt="Differentiate Your Lubricant Brand"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                            </div>
                            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-60" />
                            <div className="absolute -z-10 -top-8 -right-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl opacity-60" />
                        </div>
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                                Differentiate Your <span className="text-primary">Fluid Brand</span> From Others
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                The lubricant market is fiercely competitive. Consumers often choose based on brand recognition and perceived quality. A flimsy box or a damaged label can lose you a sale. Our premium lubricant boxes are designed to project confidence and capability. With sharp printing, oil-resistant finishes, and a solid feel, your packaging tells the customer that the fluid inside is high-performance and trustworthy. Make sure your product is the one they reach for.
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
                                        question: "Can your boxes hold full gallon jugs?",
                                        answer: "Yes, we engineer heavy-duty boxes specifically for gallon containers, reinforcing the bottom and handles to support the weight."
                                    },
                                    {
                                        id: "item-2",
                                        question: "Do you offer multi-pack cases?",
                                        answer: "Absolutely. We can design 6-pack, 12-pack, or custom quantity master cases with internal dividers for safe shipping."
                                    },
                                    {
                                        id: "item-3",
                                        question: "Is the packaging oil resistant?",
                                        answer: "We offer aqueous and UV coatings that provide resistance to oil splashes, keeping the packaging looking clean."
                                    },
                                    {
                                        id: "item-4",
                                        question: "Can I print on the inside of the box?",
                                        answer: "Yes, we offer inside printing, which is great for displaying additional product specs or branding when the case is opened."
                                    },
                                    {
                                        id: "item-5",
                                        question: "What is the turnaround time?",
                                        answer: "Our standard turnaround is 8-10 business days after design approval, ensuring you get your product to market quickly."
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
                                alt="Custom Lubricant Packaging Boxes FAQ"
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

export default LubricantPackagingBoxes;
