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
import airfilterboxeshero from "@/assets/industry/automotive-boxes/air-filter-boxes/img-hero.webp";
import airfilterboxesimg1 from "@/assets/industry/automotive-boxes/air-filter-boxes/img-1.webp";
import airfilterboxesimg2 from "@/assets/industry/automotive-boxes/air-filter-boxes/img-2.webp";
import airfilterboxesimg3 from "@/assets/industry/automotive-boxes/air-filter-boxes/img-3.webp";
import airfilterboxesimg4 from "@/assets/industry/automotive-boxes/air-filter-boxes/img-4.webp";
import airfilterboxesimg5 from "@/assets/industry/automotive-boxes/air-filter-boxes/img-5.webp";
import airfilterboxesimg6 from "@/assets/industry/automotive-boxes/air-filter-boxes/img-whychoose.webp";
import airfilterboxesimg7 from "@/assets/industry/automotive-boxes/air-filter-boxes/img-different.webp";

// FAQ image
import FAQimage from "@/assets/FAQ-image.webp";

const AirFilterBoxes = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    // Placeholder gallery images
    const productImages = [
        { src: airfilterboxesimg1, alt: "Custom Air Filter Box" },
        { src: airfilterboxesimg2, alt: "Engine Air Filter Packaging" },
        { src: airfilterboxesimg3, alt: "Cabin Air Filter Box - Open" },
        { src: airfilterboxesimg4, alt: "Eco-Friendly Filter Packaging" },
        { src: airfilterboxesimg5, alt: "Branded Air Filter Box" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Air Filter Boxes | Automotive Filter Packaging | CustomPackMakers</title>
                <meta name="description" content="Premium custom air filter boxes for engine and cabin filters. Lightweight yet sturdy packaging designed to prevent deformation and maximize shelf appeal." />
                <meta name="keywords" content="air filter boxes, automotive filter packaging, engine air filter box, cabin filter packaging, custom auto parts boxes" />
                <meta property="og:title" content="Custom Air Filter Boxes | Automotive Filter Packaging | CustomPackMakers" />
                <meta property="og:description" content="Showcase your filtration products with custom boxes. Designed to maintain filter shape and maximize retail visibility." />
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
                                <BreadcrumbPage>Air Filter Boxes</BreadcrumbPage>
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
                                <span className="text-primary">Custom</span> Air Filter Boxes
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Maintain the perfect shape of your filters with structural packaging designed for protection and retail impact. Lightweight, eco-friendly, and fully customizable.
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
                                    src={airfilterboxeshero}
                                    alt="Custom Air Filter Boxes"
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
                        Clean Packaging for Clean Air Solutions
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            Air filters are lightweight but prone to crushing and pleat deformation. Unlike heavy parts, the challenge here is retaining structural integrity without adding unnecessary weight. Our <strong className="text-foreground">custom air filter boxes</strong> use precisely engineered corrugated or high-caliper cardstock to create a rigid shell that keeps panel and cone filters perfectly shaped.
                        </p>
                        <p>
                            With the automotive market shifting towards sustainability, our packaging follows suit. We offer 100% recycled and recyclable material options that resonate with eco-conscious consumers. Vibrant printing capabilities allow you to display filtration efficiency charts, vehicle compatibility lists, and installation guides clearly, turning the box into a silent salesperson.
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
                                                <Input id="length" type="number" placeholder="10" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label>
                                                <Input id="width" type="number" placeholder="8" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">D (in)</Label>
                                                <Input id="depth" type="number" placeholder="2" className="h-9 bg-white" />
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
                        Filtration Packaging That Breathes Quality
                    </h2>
                    <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="[&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-slate-900 [&>h2]:mb-4 [&>h2]:mt-8 [&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-6 [&>h3]:mb-3 [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-4 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-4 [&>ul]:space-y-2 [&>ul>li]:text-[15px] [&>ul>li]:text-slate-600">
                            <h2>Packaging That Breathes: Air Filter Solutions</h2>
                            <p>
                                An air filter is the lungs of a vehicle, but its delicate pleated structure makes it highly susceptible to deformation during shipping and handling. A crushed filter restricts airflow and can be difficult to install. <strong>Custom air filter boxes</strong> from CustomPackMakers are engineered to provide a rigid protective shell that maintains the geometric integrity of the filter media. Whether you are manufacturing high-flow performance cones or standard panel filters for passenger cars, our packaging ensures your product arrives in showroom condition.
                            </p>
                            <p>
                                The automotive aftermarket is competitive. DIY mechanics and service centers have dozens of options. Your packaging needs to do more than protect; it needs to inform and persuade. Our boxes are designed to be informative billboards, offering ample space for cross-reference charts, installation diagrams, and performance claims that help close the sale.
                            </p>

                            <h3>Protecting the Pleats: Preventing Deformation</h3>
                            <p>
                                The primary function of air filter packaging is to prevent compression.
                            </p>
                            <ul>
                                <li><strong>Structural Rigidity:</strong> We typically recommend B-flute or E-flute corrugated board. The fluting acts as a series of columns, providing excellent crush resistance against vertical stacking weight, ensuring the box doesn't collapse onto the filter.</li>
                                <li><strong>Precision Sizing:</strong> A loose filter is a damaged filter. We create custom dielines that match your filter's dimensions exactly, often eliminating the need for internal plastic bags or void fill, which reduces cost and waste.</li>
                                <li><strong>Dust & Contamination Control:</strong> Filters must be clean to work. Our boxes are designed with full-overlap flaps or dust wings that effectively seal out environmental dust and moisture during storage.</li>
                            </ul>

                            <h3>Material Choices: Corrugated vs. Folding Carton</h3>
                            <p>
                                We match the material to the application.
                            </p>
                            <h4>Corrugated Board</h4>
                            <p>
                                Ideal for larger engine air filters and heavy-duty truck filters. It offers superior stacking strength for warehousing and palletizing. We can print directly on the board or use high-quality litho-labels for photographic finish.
                            </p>
                            <h4>Folding Carton (Cardstock)</h4>
                            <p>
                                Perfect for smaller cabin air filters or lightweight breather filters. It offers a smoother printing surface for intricate graphics and text, providing a premium feel for the retail shelf.
                            </p>

                            <h3>Retail Display: Hanging Tabs and Windows</h3>
                            <p>
                                Maximize your visibility in the auto parts store.
                            </p>
                            <ul>
                                <li><strong>Hanging Tabs:</strong> Integrated euro-slots or reinforced hanging tabs allow smaller filters to be displayed on pegboards, placing them at eye level for the customer.</li>
                                <li><strong>Die-Cut Windows:</strong> Optional cello-windows allow customers to see the filter media quality—crucial for performance brands showing off high-flow cotton gauze or synthetic materials.</li>
                            </ul>

                            <h3>Eco-Friendly Filtration Packaging</h3>
                            <p>
                                Brands that promote clean air and engine efficiency should also promote environmental responsibility.
                            </p>
                            <ul>
                                <li><strong>100% Recycled Kraft:</strong> Our unbleached kraft corrugated options are made from up to 100% post-consumer waste. They offer a natural, rugged look that aligns perfectly with eco-friendly product lines ("Clean Air, Clean Planet").</li>
                                <li><strong>Vegetable-Based Inks:</strong> We print with soy and vegetable-based inks that release fewer Volatile Organic Compounds (VOCs) during the printing process.</li>
                                <li><strong>Monocaterial Design:</strong> By designing the box to be protective without foam inserts, we create a single-stream recycling solution for the end user.</li>
                            </ul>

                            <h3>Supply Chain Efficiency: Flat-Pack Design</h3>
                            <p>
                                We help you save on logistics before the product is even packed.
                            </p>
                            <p>
                                <strong>Shipped Flat:</strong> All our boxes are shipped to you flat-packed. This minimizes your storage requirements, allowing you to keep thousands of boxes in a small footprint until they are ready for assembly and filling.
                            </p>
                            <p>
                                <strong>Easy Assembly:</strong> Our designs feature intuitive fold lines and auto-locking bottoms where appropriate, ensuring your packing line runs at maximum speed with minimal labor.
                            </p>

                            <h3>Why CustomPackMakers is Your Filter Packaging Partner</h3>
                            <p>
                                We bring expertise and efficiency to your supply chain.
                            </p>
                            <ul>
                                <li><strong>Library of Sizes:</strong> We have experience packaging thousands of automotive parts. We may already have a die size that fits your filter, saving you tooling costs.</li>
                                <li><strong>Speed and Agility:</strong> Launching a new filter line? We can produce prototypes in days and full production runs in under two weeks.</li>
                                <li><strong>Global Logistics:</strong> Our packaging is designed to cube out pallets efficiently, reducing your freight costs whether you're shipping domestic or international.</li>
                            </ul>
                            <p>
                                Deliver a product that breathes quality. Choose <strong>custom air filter packaging</strong> that protects your filters and elevates your brand. Contact us today for a custom quote.
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
                                        Structural Rigidity
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Our automotive packaging is engineered with high-grade double-wall corrugated fiberboard for maximum structural integrity. Specifically designed to handle the dead-weight of dense metal components, these boxes prevent crushing during multi-level stacking, safeguarding filter frames, end caps, and media from deformation throughout the entire distribution chain.
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
                                        Sustainable Choice
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Air filter brands are closely associated with clean performance and environmental responsibility. Our boxes are manufactured from a minimum of 70% post-consumer recycled fiber via FSC-certified mills, are fully curbside recyclable, and use soy-based inks to reduce VOC emissions, helping you communicate eco-credentials on-pack.
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
                                        Precision Fit
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Air filters range from rectangular panel filters to conical performance and oval cabin units. Using structural CAD tools, we engineer boxes with ±1mm tolerances, ensuring a snug fit that eliminates internal movement during transit while making the filter easy to extract at the point of installation.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img
                                    src={airfilterboxesimg6}
                                    alt="Professional air filter packaging"
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
                                    src={airfilterboxesimg7}
                                    alt="Differentiate Your Filter Brand"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                            </div>
                            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-60" />
                            <div className="absolute -z-10 -top-8 -right-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl opacity-60" />
                        </div>
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                                Differentiate Your <span className="text-primary">Filter Brand</span> From Others
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                In a saturated market, your packaging is your billboard. A crushed or poorly printed box reflects poorly on the quality of the filter inside. Our custom air filter boxes combine structural rigidity with high-definition graphics to create a premium unboxing experience. Highlight your unique selling points—whether it's HEPA filtration, long life, or superior flow—directly on the box, and give customers the confidence to choose your brand.
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
                                        question: "Do you offer eco-friendly materials?",
                                        answer: "Yes! We offer 100% recycled kraft and other sustainable board options to reduce your environmental footprint."
                                    },
                                    {
                                        id: "item-2",
                                        question: "Can you add a hanging tab for retail displays?",
                                        answer: "Absolutely. We can integrate euro-slots or standard hanging tabs into the box design for easy pegboard display."
                                    },
                                    {
                                        id: "item-3",
                                        question: "Will the box protect the filter pleats?",
                                        answer: "Yes, our boxes are engineered with rigid fluting to resist crushing and maintain the structural integrity of the filter."
                                    },
                                    {
                                        id: "item-4",
                                        question: "What is the minimum order quantity?",
                                        answer: "We offer flexible MOQs starting as low as 100 boxes, making it easy to launch new product lines."
                                    },
                                    {
                                        id: "item-5",
                                        question: "Can you match my brand colors?",
                                        answer: "Yes, we use PMS color matching to ensure your packaging aligns perfectly with your brand identity."
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
                                alt="Custom Air Filter Boxes FAQ"
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

export default AirFilterBoxes;
