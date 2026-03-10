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
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SEOContent } from "@/components/SEOContent";
import { TechnicalSpecsSection } from "@/components/TechnicalSpecsSection";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";

// Images
import heroImage from "@/assets/tea-coffee-cups/to-go-coffee-cups.webp";
import FAQimage from "@/assets/FAQ-image.png";

// Related Products Carousel Images
import customTeaBoxes from "@/assets/tea-coffee-cups/custom-tea-boxes.webp";
import customPrintedCoffee from "@/assets/tea-coffee-cups/custom-printed-coffee-packaging.webp";
import coffeeSleeves from "@/assets/tea-coffee-cups/coffee-sleeves.webp";
import coffeeCupsLids from "@/assets/tea-coffee-cups/coffee-cups-with-lids.webp";
import disposableCoffeeCups from "@/assets/tea-coffee-cups/Disposable Coffee Cups.png";
import paperCoffeeCups from "@/assets/tea-coffee-cups/paper-coffee-cups.webp";
import cuteCoffeeCups from "@/assets/tea-coffee-cups/Cute Coffee Cups.png";
import compostableCoffeeCups from "@/assets/tea-coffee-cups/compostable-coffee-cups.webp";
import doubleWallCoffeeCups from "@/assets/tea-coffee-cups/Double wall cofee cups.png";
import restaurantCoffeeCups from "@/assets/tea-coffee-cups/Restaurant Coffee Cups.png";

const relatedProducts = [
    { name: "Custom Tea Boxes", image: customTeaBoxes, description: "Premium packaging for tea products featuring internal flavor dividers and high-impact retail graphics", link: "/industries/tea-coffee-cups/custom-tea-boxes" },
    { name: "Custom Printed Coffee Packaging", image: customPrintedCoffee, description: "Branded coffee packaging solutions featuring flavor-seal valves and vibrant high-resolution label prints", link: "/industries/tea-coffee-cups/custom-printed-coffee-packaging" },
    { name: "Coffee Sleeves", image: coffeeSleeves, description: "Insulated sleeves for hot beverages featuring corrugated texture for grip and custom branded heat protection", link: "/industries/tea-coffee-cups/coffee-sleeves" },
    { name: "Coffee Cups with Lids", image: coffeeCupsLids, description: "Complete cup and lid sets featuring heat-insulated walls and secure snap-on lids for on-the-go service", link: "/industries/tea-coffee-cups/coffee-cups-with-lids" },
    { name: "Disposable Coffee Cups", image: disposableCoffeeCups, description: "Convenient single-use coffee cups featuring durable poly-lined paper and high-impact custom branding", link: "/industries/tea-coffee-cups/disposable-coffee-cups" },
    { name: "Paper Coffee Cups", image: paperCoffeeCups, description: "Eco-friendly paper cup options featuring biodegradable materials and elegant minimalist brand designs", link: "/industries/tea-coffee-cups/paper-coffee-cups" },
    { name: "Cute Coffee Cups", image: cuteCoffeeCups, description: "Stylish and attractive cup designs featuring vibrant artistic patterns and premium tactile print effects", link: "/industries/tea-coffee-cups/cute-coffee-cups" },
    { name: "Compostable Coffee Cups", image: compostableCoffeeCups, description: "Environmentally friendly compostable cups featuring plant-based liners and sustainable paper materials", link: "/industries/tea-coffee-cups/compostable-coffee-cups" },
    { name: "Double Wall Coffee Cups", image: doubleWallCoffeeCups, description: "Extra insulation for hot drinks featuring air-gap technology and premium thick-walled construction", link: "/industries/tea-coffee-cups/double-wall-coffee-cups" },
    { name: "Restaurant Coffee Cups", image: restaurantCoffeeCups, description: "Professional-grade cups for restaurants featuring sturdy build and high-impact wholesale customization", link: "/industries/tea-coffee-cups/restaurant-coffee-cups" },
];


const ToGoCoffeeCups = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    // Carousel state
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!api) {
            return;
        }

        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap());

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap());
        });
    }, [api]);

    const productImages = [
        { src: heroImage, alt: "To Go Coffee Cups - Main View" },
        { src: heroImage, alt: "To Go Coffee Cups - Side Angle" },
        { src: heroImage, alt: "To Go Coffee Cups - In Hand" },
        { src: heroImage, alt: "To Go Coffee Cups - Detail Shot" },
        { src: heroImage, alt: "To Go Coffee Cups - Lifestyle Shot" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom To Go Coffee Cups | Printed Drinkware | CustomPackMakers</title>
                <meta name="description" content="Order custom to-go coffee cups wholesale. Premium branded takeaway cups built with leak-proof secure lids, powerful heat insulation, and brilliant customization." />
                <meta name="keywords" content="to go coffee cups, custom takeaway cups, branded to go cups, to go cups wholesale" />
                <meta property="og:title" content="Custom To Go Coffee Cups | Printed Drinkware | CustomPackMakers" />
                <meta property="og:description" content="Premium custom to-go coffee cups for busy brands. Secure leak-proof lids, powerful heat insulation & brilliant wrap-around prints. Get a quote today." />
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
                                    <Link to="/industries/tea-and-coffee-cups">Tea & Coffee Cups</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>To Go Coffee Cups</BreadcrumbPage>
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
                                <span className="text-primary">To Go</span> Coffee Cups
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Provide exceptional on-the-go convenience equipped with premium presentation. Specially designed takeaway coffee cups combining completely secure-fit leak protection, superior thermal insulation, and completely striking high-definition customization options.
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
                                    alt="To Go Coffee Cups Hero"
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
                        Custom Takeaway Cups Engineered for Active Customers and Maximum Exposure
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            Our <strong className="text-foreground">custom to go coffee cups</strong> are expertly built to withstand the rigorous demands of active modern life while consistently promoting your business. Constructed from premium heavy-duty paper materials perfectly integrated with high-performance heat-blocking liners and completely spill-proof snap-on lids, they guarantee a flawless, thoroughly insulated customer experience perfectly suited for busy commutes.
                        </p>
                        <p>
                            We understand that every single takeaway container represents a highly visible opportunity. By utilizing advanced, vibrant wrap-around printing deeply integrated with sophisticated finishing capabilities, we transform standard <strong className="text-foreground">branded takeaway vessels</strong> into completely engaging, exceptionally attractive promotional tools that easily draw significant local attention literally everywhere your satisfied customers enthusiastically travel.
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
                                                <Input id="width" type="number" placeholder="8" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">D (in)</Label>
                                                <Input id="depth" type="number" placeholder="5" className="h-9 bg-white" />
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
                        The Importance of Premium Packaging for Coffee & Tea Brands
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
                                In today's competitive beverage landscape, packaging has evolved far beyond its traditional role as a simple container.
                                For coffee and tea brands, custom packaging represents a critical touchpoint in the customer journey, one that can significantly
                                influence brand perception, customer loyalty, and ultimately, your bottom line. Premium packaging communicates quality,
                                attention to detail, and brand values before the customer even takes their first sip.
                            </p>
                            <p>
                                Our custom beverage packaging is designed with this understanding at its core. Every element, from the structural design to
                                the finishing touches, is carefully considered to create an experience that delights customers and reinforces
                                your brand identity. Whether you're a boutique roaster or a large-scale tea manufacturer, investing
                                in high-quality packaging demonstrates your commitment to excellence and creates lasting impressions that drive repeat purchases.
                            </p>

                            <h3>Unmatched Material Quality & Structural Durability</h3>
                            <p>
                                The foundation of exceptional beverage packaging begins with superior materials. We offer a comprehensive range of premium
                                substrates, each selected for specific performance characteristics and aesthetic qualities:
                            </p>
                            <ul>
                                <li><strong>Eco-Friendly Paperboard:</strong> Our most popular choice for cup packaging, offering the perfect balance between strength and printability while supporting sustainability initiatives.</li>
                                <li><strong>Double-Wall Construction:</strong> For hot beverages, double-wall insulation provides an unparalleled premium feel and essential heat protection without compromising design.</li>
                                <li><strong>Kraft Cardstock:</strong> Eco-conscious brands appreciate our sustainable kraft options. These biodegradable, recyclable materials offer a natural, authentic aesthetic while maintaining structural integrity.</li>
                                <li><strong>High-Barrier Liners:</strong> For maximum freshness retention, specialized liners ensure your coffee and tea products remain perfectly preserved from roaster to cup.</li>
                            </ul>
                            <p>
                                Each material undergoes rigorous testing for heat resistance, edge crush resistance, and leak prevention,
                                ensuring your beverages arrive safely and in perfect condition regardless of handling.
                            </p>

                            <h3>Customization Options That Elevate Your Brand</h3>
                            <p>
                                True differentiation comes from customization. Our advanced manufacturing capabilities allow for virtually unlimited
                                design possibilities, enabling you to create packaging that perfectly aligns with your brand identity:
                            </p>
                            <ul>
                                <li><strong>Custom Capacities:</strong> We engineer packaging to fit your exact specifications, from 8oz espresso cups to 16oz grande sizes, minimizing waste and ensuring perfect portions.</li>
                                <li><strong>Precision Lids:</strong> Strategically designed secure-fit lids prevent spills and maintain temperature, building trust and driving purchase decisions.</li>
                                <li><strong>Interior Linings:</strong> Custom PLA or PE linings keep hot drinks insulated, prevent leaks during transit, and accommodate all types of specialty beverages.</li>
                                <li><strong>Unique Texture Applications:</strong> Choose from embossed sleeves, ripple textures, or smooth matte finishes that enhance functionality while adding a premium touch.</li>
                            </ul>

                            <h3>Advanced Printing & Finishing Techniques</h3>
                            <p>
                                Transform your beverage packaging into powerful marketing assets with our state-of-the-art printing and finishing capabilities.
                                We utilize both offset and digital printing technologies to achieve stunning, color-accurate results that make your brand stand out:
                            </p>
                            <ul>
                                <li><strong>High-Definition Wrap-Around Printing:</strong> Achieve photographic-quality images and vibrant brand colors seamlessly across curved surfaces.</li>
                                <li><strong>Pantone Color Matching:</strong> Ensure perfect brand color consistency across all packaging with exact Pantone color matching, critical for maintaining brand standards.</li>
                                <li><strong>Metallic Foil Stamping:</strong> Add luxury and visual impact with gold, silver, copper, or holographic foil accents that catch light and draw attention to logos.</li>
                                <li><strong>Spot UV Coating:</strong> Create striking contrast and tactile interest by applying high-gloss UV coating to specific areas against a matte background.</li>
                                <li><strong>Embossing & Debossing:</strong> Add dimensional depth and premium tactile quality with raised or recessed design elements that customers can feel.</li>
                            </ul>

                            <h3>Sustainable Packaging Solutions</h3>
                            <p>
                                Environmental responsibility is no longer optional. It's essential. We're committed to helping brands reduce their
                                environmental impact without compromising on quality or aesthetics. Our sustainable packaging options include:
                            </p>
                            <ul>
                                <li>100% compostable and biodegradable materials sourced from responsibly managed resources</li>
                                <li>Soy-based and vegetable-based inks that eliminate harmful VOCs</li>
                                <li>Optimized structural designs that minimize material usage while maintaining strength</li>
                                <li>Water-based coatings and plant-based PLA linings that support industrial composting</li>
                            </ul>

                            <h3>Wholesale Pricing & Scalable Production</h3>
                            <p>
                                Whether you're a startup testing the market with a small initial run or an established brand requiring tens of
                                thousands of units monthly, our flexible production capabilities scale to meet your needs. We offer competitive
                                pricing on volume orders and substantial discounts for wholesale pallet shipments.
                            </p>
                            <p>
                                Partnering with us means gaining a dedicated packaging team committed to your success. From initial design consultation
                                through final delivery, we provide expert guidance, proactive communication, and quality assurance at every step.
                                Let us help you create custom beverage packaging that protects your products, elevates your brand, and delights your customers.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* RELATED PRODUCTS CAROUSEL */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            Explore Related Packaging
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-3xl">
                            Discover more options perfectly suited for your beverage brand.
                        </p>
                    </div>

                    <div className="relative px-4">
                        <Carousel
                            setApi={setApi}
                            opts={{
                                align: "start",
                                loop: true,
                            }}
                            plugins={[
                                Autoplay({
                                    delay: 3000,
                                    stopOnInteraction: false,
                                    stopOnMouseEnter: true,
                                }),
                            ]}
                            className="w-full"
                        >
                            <CarouselContent className="-ml-4">
                                {relatedProducts.map((product, index) => (
                                    <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                                        <div className="h-full">
                                            <Link to={product.link} className="block h-full group">
                                                <Card className="overflow-hidden border-border bg-card hover:shadow-xl transition-all duration-300 cursor-pointer h-full">
                                                    <CardContent className="p-0 flex flex-col h-full">
                                                        <div className="h-48 lg:h-64 w-full bg-gray-50 overflow-hidden relative">
                                                            <img
                                                                src={product.image}
                                                                alt={product.name}
                                                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                                                loading="lazy"
                                                            />
                                                        </div>
                                                        <div className="p-5 border-t border-border flex-grow flex flex-col">
                                                            <h3 className="font-semibold text-foreground text-base mb-2">
                                                                {product.name}
                                                            </h3>
                                                            <p className="text-sm text-muted-foreground line-clamp-2 mb-4 flex-grow">
                                                                {product.description}
                                                            </p>
                                                            <Button
                                                                variant="outline"
                                                                size="sm"
                                                                className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors mt-auto"
                                                            >
                                                                View Product
                                                            </Button>
                                                        </div>
                                                    </CardContent>
                                                </Card>
                                            </Link>
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <div className="flex justify-center gap-2 mt-8 flex-wrap">
                                {Array.from({ length: count }).map((_, index) => (
                                    <button
                                        key={index}
                                        className={`h-2 rounded-full transition-all duration-300 ${index === current ? "w-8 bg-primary" : "w-2 bg-primary/20 hover:bg-primary/50"
                                            }`}
                                        onClick={() => api?.scrollTo(index)}
                                        aria-label={`Go to slide ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </Carousel>
                    </div>
                </div>
            </section>


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
                            We combine craftsmanship, speed, and reliability to deliver packaging that makes your brand unforgettable.
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
                                        Secure-Fit Spill Lids
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Our completely secure-fit leak protection lids expertly snap into place securely on meticulously formed tight paper rims completely preventing serious messy leaks handling sudden movement on the daily rigorous routine perfectly.
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
                                        Double-Wall Insulation
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Our double-wall insulation thoroughly isolates extreme temperatures safely preventing customer hand burns, completely avoiding the need for individual cardboard protection while perfectly generating a distinctly premium high-quality overall customer tactile response.
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
                                        High-Definition Wrap-Around Printing
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Using advanced high-definition wrap-around printing techniques, we flawlessly transfer intricate brand colors vividly entirely around smoothly curved exteriors, effectively transforming essential to-go drink items directly into exceptionally striking mobile billboard promotional materials!
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT: Square image with floating badges */}
                        <div className="relative flex items-center justify-center py-8">
                            {/* Square image container */}
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img
                                    src={heroImage}
                                    alt="Premium Custom To Go Coffee Cups"
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
                                    src={heroImage}
                                    alt="Differentiate Your Beverage Brands"
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
                                At CustomPackMakers, we understand that your packaging is the first physical touchpoint for your customers. To ensure your brand stands out, we utilize state-of-the-art manufacturing processes combined with premium offset and digital printing techniques. Our team of experts works closely with you to determine the perfect dimensions, ensuring a snug fit and maximum protection. By integrating distinctive features like custom textures, high-end finishes, and sustainable materials, we help you create a world-class unboxing experience that builds lasting brand loyalty and drives repeat purchases.
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
                                        question: "Do secure-fit lids truly prevent serious transit leaks effectively?",
                                        answer: "Our meticulously manufactured secure-fit lids snap with precision, gripping tightly onto rolled paper rims to successfully prevent serious leakage during movement, ensuring an entirely mess-free handling process perfect for safe on-the-go customer takeaway."
                                    },
                                    {
                                        id: "item-2",
                                        question: "How reliable is the heat resistance of your double-wall options?",
                                        answer: "Our double-wall technology provides exceptional heat resistance designed to easily handle high-temperature fluids securely, protecting hands from intense heat perfectly and entirely eliminating your need to provide external corrugated cardboard or Kraft heat-blocking sleeves."
                                    },
                                    {
                                        id: "item-3",
                                        question: "Is high-definition wrap-around printing restricted on curved surfaces?",
                                        answer: "Our high-definition wrap-around printing flawlessly adapts to all exterior curved structures, maintaining crisp image clarity without distortion, guaranteeing your complex logos and color gradients replicate sharply and accurately completely around the packaging."
                                    },
                                    {
                                        id: "item-4",
                                        question: "Can I easily mix standard custom sizes in bulk orders?",
                                        answer: "Absolutely, we offer great flexibility when ordering custom sizes like standard 8oz, 12oz, or 16oz capacities in one comprehensive combined wholesale order, giving you maximum convenience for accommodating varied menu requirements easily."
                                    },
                                    {
                                        id: "item-5",
                                        question: "Are your eco-friendly compostable materials fully certified?",
                                        answer: "Yes, our eco-friendly packaging completely conforms to strict industrial composting standards with full certification backing, utilizing naturally plant-based PLA linings rather than plastics, ensuring complete sustainable biodegradation processes while retaining full product handling integrity."
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

export default ToGoCoffeeCups;
