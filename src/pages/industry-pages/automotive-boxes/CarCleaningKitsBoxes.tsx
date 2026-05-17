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
import carcleaningkitboxeshero from "@/assets/industry/automotive-boxes/car-cleaning-kits-boxes/img-hero.webp";
import carcleaningkitboxes1 from "@/assets/industry/automotive-boxes/car-cleaning-kits-boxes/img-1.webp";
import carcleaningkitboxes2 from "@/assets/industry/automotive-boxes/car-cleaning-kits-boxes/img-2.webp";
import carcleaningkitboxes3 from "@/assets/industry/automotive-boxes/car-cleaning-kits-boxes/img-3.webp";
import carcleaningkitboxes4 from "@/assets/industry/automotive-boxes/car-cleaning-kits-boxes/img-4.webp";
import carcleaningkitboxes5 from "@/assets/industry/automotive-boxes/car-cleaning-kits-boxes/img-5.webp";
import carcleaningkitboxes6 from "@/assets/industry/automotive-boxes/car-cleaning-kits-boxes/img-whychoose.webp";
import carcleaningkitboxes7 from "@/assets/industry/automotive-boxes/car-cleaning-kits-boxes/img-different.webp";

// FAQ image
import FAQimage from "@/assets/FAQ-image.webp";

const CarCleaningKitsBoxes = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    // Placeholder gallery images
    const productImages = [
        { src: carcleaningkitboxes1, alt: "Custom Car Cleaning Kit Box" },
        { src: carcleaningkitboxes2, alt: "Auto Detailing Set Packaging" },
        { src: carcleaningkitboxes3, alt: "Car Wax Kit Box - Open" },
        { src: carcleaningkitboxes4, alt: "Car Wash Bucket Kit Box" },
        { src: carcleaningkitboxes5, alt: "Branded Car Care Packaging" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Car Cleaning Kit Boxes | Auto Detailing Packaging | CustomPackMakers</title>
                <meta name="description" content="Water-resistant custom boxes for car cleaning kits. Organize bottles, sprays, and cloths in premium packaging designed for retail appeal." />
                <meta name="keywords" content="car cleaning kit boxes, auto detailing packaging, car wash kit boxes, car care packaging, custom cleaning product boxes" />
                <meta property="og:title" content="Custom Car Cleaning Kit Boxes | Auto Detailing Packaging | CustomPackMakers" />
                <meta property="og:description" content="Showcase your auto detailing products with custom packaging that resists water and highlights quality." />
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
                                <BreadcrumbPage>Car Cleaning Kits Boxes</BreadcrumbPage>
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
                                <span className="text-primary">Custom</span> Car Cleaning Kit Boxes
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Make your car care products shine on the shelf. Our custom boxes are designed to hold heavy liquid bottles securely while offering water resistance and premium print quality.
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
                                    src={carcleaningkitboxeshero}
                                    alt="Custom Car Cleaning Kit Boxes"
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
                        Clean Look for Clean Cars
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            Selling a car cleaning kit is about selling the promise of a showroom shine. Your packaging needs to reflect that same level of polish. Our <strong className="text-foreground">custom cleaning kit boxes</strong> are built to handle the unique challenges of liquid products, including weight support and leak resistance.
                        </p>
                        <p>
                            Whether you're bundling a wash-and-wax set or a complete interior detailing kit, we create packaging that keeps bottles upright and organized. With vibrant, high-definition printing, we help you communicate the effectiveness of your formulas and the value of your brand.
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
                                                <Input id="length" type="number" placeholder="12" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label>
                                                <Input id="width" type="number" placeholder="8" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">D (in)</Label>
                                                <Input id="depth" type="number" placeholder="10" className="h-9 bg-white" />
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">
                        Packaging That Works as Hard as You Do
                    </h2>
                    <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="[&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-slate-900 [&>h2]:mb-4 [&>h2]:mt-8 [&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-6 [&>h3]:mb-3 [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-4 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-4 [&>ul]:space-y-2 [&>ul>li]:text-[15px] [&>ul>li]:text-slate-600">
                            <h2>The Art of the "Unboxing" Shine</h2>
                            <p>
                                Car detailing is an obsession for many. It's not just about a clean car; it's about the process, the tools, and the results. <strong>Custom car cleaning kit boxes</strong> play a pivotal role in this experience. They transform a collection of bottles and towels into a premium, gift-worthy set that commands a higher price point.
                            </p>
                            <p>
                                At CustomPackMakers, we understand the specific challenges of packaging heavy liquids and chemical products. Our solutions are engineered to withstand the rigors of shipping while delivering a visual impact that promises a mirror finish.
                            </p>

                            <h3>Engineered for Liquids: Strength & Safety</h3>
                            <p>
                                Shipping liquids is risky. A single leak can ruin an entire pallet. Our packaging mitigates this risk through structural design.
                            </p>
                            <ul>
                                <li><strong>Load-Bearing Capacity:</strong> A wash kit with a gallon of soap, a spray wax, and a tire shine can be heavy. We use double-wall corrugated board or heavy-duty B-flute to ensure the box holds its shape and doesn't buckle under the weight.</li>
                                <li><strong>Leak Containment:</strong> We can design the bottom of the box as a "catch basin" with sealed corners, helping to contain minor leaks and prevent them from compromising outer shipping cartoons.</li>
                                <li><strong>Divider Systems:</strong> Glass cleaners and wheel acids shouldn't mix during transit. Our custom corrugated dividers separate each bottle, preventing glass breakage and cap-popping caused by impact.</li>
                            </ul>

                            <h3>Moisture Resistance for the Garage</h3>
                            <p>
                                These products are used in wet environments. Your packaging needs to survive the splash zone.
                            </p>
                            <p>
                                <strong>Laminated Finishes:</strong> We highly recommend a gloss or matte polypropylene lamination. This plastic film bonds to the paper, making the box water-resistant and wipeable. It ensures the box doesn't turn into pulp if it sits on a wet driveway.
                            </p>
                            <p>
                                <strong>UV Coating:</strong> For a budget-friendly option, a heavy coat of UV varnish provides moderate water resistance and a high-gloss finish that makes colors pop.
                            </p>

                            <h3>Retail Presence: The "Gift Set" Appeal</h3>
                            <p>
                                Cleaning kits are popular gifts for holidays and Father's Day. The packaging needs to sell itself.
                            </p>
                            <ul>
                                <li><strong>Carry Handles:</strong> We integrate heavy-duty plastic handles or reinforced die-cut handles, turning the box into a convenient caddy that the customer can carry right to the car wash bay.</li>
                                <li><strong>Window Cutouts:</strong> Let the vibrant colors of your chemicals shine. Die-cut windows allow customers to see the neon green wash or the deep blue tire gel, creating visual excitement and confirming the contents.</li>
                                <li><strong>High-Fidelity Printing:</strong> We use advanced offset printing to reproduce the deep, glossy reflections in your product photography. If your box looks dull, customers assume the wax is dull too.</li>
                            </ul>

                            <h3>Eco-Friendly Options for Green Brands</h3>
                            <p>
                                For waterless wash brands and biodegradable cleaners, we offer sustainable packaging solutions.
                            </p>
                            <p>
                                <strong>Kraft Core:</strong> Utilize unbleached, high-strength kraft board. It communicates "natural" and "safe" before the customer even reads the label.
                            </p>
                            <p>
                                <strong>No-Plastic Inserts:</strong> We can engineering complex internal structures from cardboard to hold bottles securely, eliminating the need for vacuum-formed plastic trays or foam, making the entire package 100% recyclable.
                            </p>

                            <h3>Why Brands Trust CustomPackMakers</h3>
                            <p>
                                We are experts in bundling and kit packaging.
                            </p>
                            <ul>
                                <li><strong>Prototyping:</strong> We know bottle shapes vary wildly. We provide physical white samples to test the fit of your specific bottles, spray heads, and trigger sprayers before production begins.</li>
                                <li><strong>Logistics Optimization:</strong> We design master cartons that fit your kit boxes perfectly, maximizing pallet density and minimizing shipping costs for these heavy items.</li>
                                <li><strong>Flexibility:</strong> From 500 units for a limited "Winter Prep" kit to 50,000 units for a core product line, we scale our production to meet your seasonal demands.</li>
                            </ul>
                            <p>
                                Make your products the clear choice. Choose <strong>custom car cleaning kit packaging</strong> that combines heavy-duty durability with showroom-ready aesthetics.
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
                                        Garage-Proof Lamination
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Car care products face wet, chemically harsh environments—driveways, wash bays, and garages with soap runoff and pH-aggressive tire cleaners. Our gloss or matte BOPP lamination bonds a 20–25 micron film, creating a waterproof barrier that withstands direct splashes, coastal humidity, and spray-can condensation without warping.
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
                                        Heavy-Liquid Support
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        A full car care kit bundling shampoo, wax, tire shine, and microfiber cloths can exceed 15 lbs. We engineer 200lb double-wall corrugated bases with crash-lock closures and die-cut carry handles rated for 30 lbs static pull, ensuring customers carry kits from shelf to vehicle without failure.
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
                                        Gift-Ready Presentation
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Car cleaning kits are popular automotive gifts for Father's Day and the holidays. We use high-gloss litho-laminate printing at 150 line-screen to reproduce vivid product photography. Precision die-cut PET windows expose actual product colors—green shampoo, blue glass cleaner, black tire shine—driving impulse purchases and gifting decisions.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img
                                    src={carcleaningkitboxes6}
                                    alt="Professional car cleaning kit packaging"
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
                                    src={carcleaningkitboxes7}
                                    alt="Differentiate Your Car Care Brand"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                            </div>
                            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-60" />
                            <div className="absolute -z-10 -top-8 -right-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl opacity-60" />
                        </div>
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                                Differentiate Your <span className="text-primary">Car Care Brand</span> From Others
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                In a crowded market of sprays and waxes, packaging is your silent salesman. A customer often judges the quality of the chemical by the quality of the box it comes in. Our custom car cleaning kit boxes are designed to look as good as the results your products promise. With sturdy construction that feels premium in the hand and high-gloss finishes that pop under store lights, we help your brand clean up the competition.
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
                                        question: "Can your boxes support heavy 1-gallon jugs?",
                                        answer: "Yes, we use heavy-duty corrugated board and reinforced bottom designs specifically for heavy liquid containers."
                                    },
                                    {
                                        id: "item-2",
                                        question: "Are the boxes water-resistant?",
                                        answer: "We offer lamination (gloss or matte) that provides a barrier against moisture and incidental splashes."
                                    },
                                    {
                                        id: "item-3",
                                        question: "Can you design inserts for multiple bottle sizes?",
                                        answer: "Absolutely. We create custom die-cut inserts that can hold various combinations of bottles, sponges, and towels securely."
                                    },
                                    {
                                        id: "item-4",
                                        question: "Do you offer handles for the kits?",
                                        answer: "Yes, plastic or integrated cardboard handles are a popular addition for making kits easy to carry."
                                    },
                                    {
                                        id: "item-5",
                                        question: "Can I see a prototype before ordering?",
                                        answer: "Yes, we can provide a physical sample of the box structure to ensure your bottles fit perfectly before full production."
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
                                alt="Custom Car Cleaning Kit Boxes FAQ"
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

export default CarCleaningKitsBoxes;
