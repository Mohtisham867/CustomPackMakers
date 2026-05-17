import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { QuoteForm } from "@/components/QuoteForm";
import { InstantQuoteFormCompact } from "@/components/InstantQuoteFormCompact";
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
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { TechnicalSpecsSection } from "@/components/TechnicalSpecsSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// Existing Imports
import glassSerumBottle from "@/assets/primary-packaging/glass-serum-bottle/glass-serum-bottle-premium.webp";
import plasticCleanserTube from "@/assets/primary-packaging/plastic-cleanser-tube/plastic-cleanser-tube-premium.webp";
import plasticMistBottle from "@/assets/primary-packaging/plastic-mist-bottle/plastic-mist-bottle-premium.webp";
import glassRollOnBottle from "@/assets/primary-packaging/glass-roll-on-bottle/glass-roll-on-bottle-premium.webp";
import plasticShampooBottle from "@/assets/primary-packaging/plastic-shampoo-bottle/plastic-shampoo-bottle-premium.webp";
import paperTubes from "@/assets/primary-packaging/paper-tubes/paper-tubes-premium.webp";
import glassCandleJars from "@/assets/primary-packaging/glass-candle-jars/glass-candle-jars-premium.webp";
import glassPerfumeBottle from "@/assets/primary-packaging/glass-perfume-bottle/glass-perfume-bottle-premium.webp";
import plasticCapsuleBottle from "@/assets/primary-packaging/plastic-capsule-bottle/plastic-capsule-bottle-premium.webp";
import moisturizerJar from "@/assets/primary-packaging/moisturizer-jar/moisturizer-jar-premium.webp";
import plasticLotionBottle from "@/assets/primary-packaging/plastic-lotion-bottle/plastic-lotion-bottle-premium.webp";
import glassCreamJars from "@/assets/primary-packaging/glass-cream-jars/glass-cream-jars-premium.webp";
import customPreRollTubes from "@/assets/primary-packaging/custom-pre-roll-tubes/custom-pre-roll-tubes-premium.webp";
import dropperBottles from "@/assets/primary-packaging/dropper-bottles/dropper-bottles-premium.webp";
import jarsWithPump from "@/assets/primary-packaging/jars-with-pump/jars-with-pump-premium.webp";
import heroImage from "@/assets/primary-packaging/glass-serum-bottle/glass-serum-bottle-hero.webp";

// New Grid Images
import clearSerum from "@/assets/primary-packaging/glass-serum-bottle/glass-serum-clear.png";
import frostedSerum from "@/assets/primary-packaging/glass-serum-bottle/glass-serum-frosted.png";
import amberSerum from "@/assets/primary-packaging/glass-serum-bottle/glass-serum-amber.png";


const relatedProducts = [
    { name: "Glass Serum Bottle", image: glassSerumBottle, link: "/primary-packaging/glass-serum-bottle", description: "Premium glass serum bottles for high-end skincare products featuring precise dispensing and luxury feel" },
    { name: "Plastic Cleanser Tube", image: plasticCleanserTube, link: "/primary-packaging/plastic-cleanser-tube", description: "Durable plastic cleanser tubes for skincare applications designed for easy use and reliable containment" },
    { name: "Plastic Mist Bottle", image: plasticMistBottle, link: "/primary-packaging/plastic-mist-bottle", description: "Versatile plastic mist bottles for sprays and toners featuring fine-mist sprayers for even application" },
    { name: "Glass Roll on Bottle", image: glassRollOnBottle, link: "/primary-packaging/glass-roll-on-bottle", description: "Convenient glass roll-on bottles for essential oils featuring smooth ball applicators and secure caps" },
    { name: "Plastic Shampoo Bottle", image: plasticShampooBottle, link: "/primary-packaging/plastic-shampoo-bottle", description: "Durable plastic shampoo bottles for hair care products featuring customizable colors and closure options" },
    { name: "Paper Tubes", image: paperTubes, link: "/primary-packaging/paper-tubes", description: "Eco-friendly paper tubes for sustainable packaging solutions featuring organic aesthetics and durability" },
    { name: "Glass Candle Jars", image: glassCandleJars, link: "/primary-packaging/glass-candle-jars", description: "Sturdy and aesthetic glass jars for premium candles designed to withstand high-heat and enhance branding" },
    { name: "Glass Perfume Bottle", image: glassPerfumeBottle, link: "/primary-packaging/glass-perfume-bottle", description: "Elegant glass perfume bottles for fragrances." },
    { name: "Plastic Capsule Bottle", image: plasticCapsuleBottle, link: "/primary-packaging/plastic-capsule-bottle", description: "Secure plastic capsule bottles for supplements featuring child-resistant caps and pharmaceutical grade material" },
    { name: "Moisturizer Jar", image: moisturizerJar, link: "/primary-packaging/moisturizer-jar", description: "Stylish moisturizer jars for creams and lotions featuring thick-walled design and premium cosmetic appearance" },
    { name: "Plastic Lotion Bottle", image: plasticLotionBottle, link: "/primary-packaging/plastic-lotion-bottle", description: "Functional plastic lotion bottles with pump options designed for controlled dispensing and brand impact" },
    { name: "Glass Cream Jars", image: glassCreamJars, link: "/primary-packaging/glass-cream-jars", description: "High-quality glass cream jars for cosmetic treatments offering superior protection and luxury presentation" },
    { name: "Custom Pre Roll Tubes", image: customPreRollTubes, link: "/primary-packaging/custom-pre-roll-tubes", description: "Customizable pre-roll tubes for branding and protection featuring child-resistant seals and opaque colors" },
    { name: "Dropper Bottles", image: dropperBottles, link: "/primary-packaging/dropper-bottles", description: "Precise dropper bottles for oils and liquid medications featuring calibrated pipettes and secure caps" },
    { name: "Jars with Pump", image: jarsWithPump, link: "/primary-packaging/jars-with-pump", description: "Practical jars with pump dispensers for ease of use designed for airless protection of skin care products" },
];

const productOptions = relatedProducts.map(p => p.name);

const GlassSerumBottle = () => {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);
    const [selectedImage, setSelectedImage] = useState(0);

    const productImages = [
        { src: clearSerum, alt: "Glass Serum Bottle - Clear" },
        { src: frostedSerum, alt: "Glass Serum Bottle - Frosted" },
        { src: amberSerum, alt: "Glass Serum Bottle - Amber" },
        { src: heroImage, alt: "Glass Serum Bottle - Main" },
        { src: glassSerumBottle, alt: "Glass Serum Bottle - Premium" },
    ];

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

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Glass Serum Bottles | Premium Skincare Packaging | CustomPackMakers</title>
                <meta name="description" content="Wholesale glass serum bottles for luxury skincare. Available in clear, frosted, and amber glass with precision dropper assemblies." />
            </Helmet>
            
            <Header />

            {/* Breadcrumb */}
            <div className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 mt-[110px] md:mt-[140px]">
                <div className="container mx-auto px-4 py-4">
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
                                    <Link to="/primary-packaging">Primary Packaging</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Glass Serum Bottle</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </div>

            {/* Hero Split Section */}
            <section className="py-8 bg-background">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-16 items-start">
                        {/* Left Content */}
                        <div className="space-y-6 text-center lg:text-left">
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
                                Glass Serum Bottle
                            </h1>
                            <p className="text-[16px] text-muted-foreground leading-relaxed line-clamp-4 px-4 lg:px-0">
                                Explore our premium selection of glass serum bottles and related packaging solutions.
                                Perfect for serums, oils, and other liquid cosmetics, our bottles offer both durability
                                and an elegant aesthetic to elevate your brand.
                            </p>
                            <div className="pt-4 flex justify-center lg:justify-start">
                                <div className="relative w-full max-w-[480px] h-[300px] overflow-hidden rounded-lg shadow-lg bg-muted flex items-center justify-center">
                                    <img src={heroImage} alt="Glass Serum Bottle" className="w-full h-full object-cover" loading="lazy" />
                                </div>
                            </div>
                        </div>

                        {/* Right Form */}
                        <div className="flex justify-end">
                            <InstantQuoteFormCompact customProducts={productOptions} />
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
                        Premium Glass Serum Bottles Engineered for Luxury Skincare Brands
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            Our <strong className="text-foreground">premium glass serum bottles</strong> are precision-engineered for beauty and skincare brands that demand excellence. Constructed from high-quality borosilicate glass, these bottles provide an inert, impermeable environment that preserves the efficacy of active ingredients like Vitamin C, Retinol, and Hyaluronic Acid. Whether you're launching a boutique skincare line or scaling a global cosmetics operation, our <strong className="text-foreground">primary packaging solutions</strong> deliver both luxury aesthetics and uncompromised product protection.
                        </p>
                        <p>
                            From clear and frosted finishes to UV-blocking amber and cobalt blue, our <strong className="text-foreground">wholesale glass serum bottles</strong> accommodate every formulation type. Each bottle pairs flawlessly with our precision dropper assemblies and pump caps, ensuring accurate dosing and an effortless user experience. With extensive customization options including screen printing, hot stamping, and custom labeling, your <strong className="text-foreground">glass cosmetic packaging</strong> transforms into a powerful extension of your brand identity.
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
            <TechnicalSpecsSection 
                title="Glass Serum Bottle Specifications"
                specsTableTitle="Primary Packaging Specs"
                specsTableHeader1="Property"
                specsTableHeader2="Details"
                specsRows={[
                    { label: "Available Sizes", value: "5ml to 100ml" },
                    { label: "Material", value: "Premium Borosilicate Glass" },
                    { label: "Neck Finish", value: "18/410 Industry Standard" },
                    { label: "Color Options", value: "Clear, Amber, Frosted, Cobalt Blue" },
                    { label: "Compatibility", value: "Serums, Essential Oils, Tinctures, Liquid Cosmetics" }
                ]}
                materialTitle="Glass Finishes & Treatments"
                materialList={[
                    "Crystal Clear Glass",
                    "UV-Resistant Amber",
                    "Matte Frosted Finish",
                    "Cobalt Blue",
                    "Custom Color Spray Coating",
                    "Electroplating & Metallization"
                ]}
            />

            {/* Product Carousel Section */}
            <section className="py-16 bg-accent/20">
                <div className="container mx-auto px-4">
                    <div className="mb-12 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            Related Packaging Solutions
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Discover a wide range of packaging options to complement your glass serum bottles.
                        </p>
                    </div>

                    <div className="relative px-12">
                        <Carousel
                            setApi={setApi}
                            opts={{
                                align: "start",
                                loop: true,
                            }}
                            className="w-full"
                        >
                            <CarouselContent className="-ml-4">
                                {relatedProducts.map((product, index) => (
                                    <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                                        <Link to={product.link} className="block h-full">
                                            <Card className="h-full overflow-hidden border-border bg-card hover:shadow-lg transition-all duration-300 group cursor-pointer">
                                                <CardContent className="p-0">
                                                    <div className="relative aspect-square overflow-hidden bg-white">
                                                        <img
                                                            src={product.image}
                                                            alt={product.name}
                                                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" loading="lazy"
                                                        />
                                                    </div>
                                                    <div className="p-4 border-t border-border">
                                                        <h3 className="font-semibold text-foreground text-sm mb-2">
                                                            {product.name}
                                                        </h3>
                                                        <p className="text-xs text-muted-foreground line-clamp-2">
                                                            {product.description}
                                                        </p>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </Link>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />

                            {/* Dot Navigation */}
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

            {/* SEO CONTENT SECTION */}
            <section className="py-8 bg-slate-50 border-t border-slate-100">
                <div className="container mx-auto px-[5vw]">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">
                        Elevating Skincare with Premium Glass Serum Bottles
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
                                In the highly competitive cosmetics and skincare market, your primary packaging does much more than simply hold a product—it acts as the physical embodiment of your brand's quality and promise. For serums, facial oils, and concentrated active treatments, glass serum bottles remain the gold standard in primary packaging. They communicate luxury, ensure formulation integrity, and provide a satisfyingly weighty, premium feel in the customer's hand.
                            </p>
                            <p>
                                Our wholesale glass serum bottles are meticulously manufactured to meet the strict demands of the modern beauty industry. Whether you require standard clear vials for brightly colored serums or specialized amber glass for light-sensitive retinoids, our comprehensive range of capacities (from 5ml trial sizes up to 100ml professional volumes) ensures you have the perfect vessel for every product in your lineup.
                            </p>

                            <h3>The Critical Role of UV Protection in Skincare</h3>
                            <p>
                                Many of today's most effective skincare ingredients—including Vitamin C, retinol, and cold-pressed botanical oils—are highly susceptible to photodegradation. Exposure to ultraviolet (UV) light can rapidly break down these compounds, diminishing product efficacy and potentially altering scent and color. This is where the choice of your glass serum bottle becomes critical to your formulation's success.
                            </p>
                            <ul>
                                <li><strong>Amber Glass:</strong> Provides the highest level of UV protection, blocking out blue and ultraviolet light. It is essential for preserving the potency of delicate active ingredients and extending product shelf life without relying on chemical stabilizers.</li>
                                <li><strong>Cobalt Blue and Green Glass:</strong> Offers moderate UV protection while delivering a distinctive, premium aesthetic that stands out on retail shelves.</li>
                                <li><strong>Frosted and Opaque Coatings:</strong> By diffusing or completely blocking light, specialized coatings can transform a standard clear bottle into a protective barrier, allowing for broader color customization while maintaining formulation stability.</li>
                            </ul>

                            <h3>Precision Dropper Assemblies and Closures</h3>
                            <p>
                                A premium glass serum bottle is only as effective as its dispensing system. Serums are typically highly concentrated and expensive, meaning that precise, controlled dosing is vital for a positive user experience. We offer a wide array of closures engineered perfectly for our 18/410 neck finishes.
                            </p>
                            <ul>
                                <li><strong>Glass Pipette Droppers:</strong> Available with natural rubber, nitrile, or silicone bulbs. We offer both standard rounded tips and precision pointed tips for exact drop-by-drop application.</li>
                                <li><strong>Push-Button Droppers:</strong> An elegant, modern alternative to the traditional squeeze bulb. These auto-loading droppers deliver a precise, pre-measured dose with every click, elevating the luxury feel of the packaging.</li>
                                <li><strong>Treatment Pumps:</strong> Ideal for thicker, gel-based serums or lotions, providing hygienic, airless-like dispensing without exposing the remaining product to contaminants.</li>
                            </ul>

                            <h3>Branding on Glass: Decoration and Customization</h3>
                            <p>
                                Transforming a blank glass serum bottle into a recognizable brand asset requires expert decoration. The non-porous surface of glass requires specialized techniques to ensure durability against oils, water, and frequent handling. We provide end-to-end customization to bring your creative vision to life.
                            </p>
                            <ul>
                                <li><strong>Silk Screen Printing:</strong> Applies vibrant, highly durable ink directly onto the glass surface. Perfect for bold typography and minimalist brand logos.</li>
                                <li><strong>Hot Foil Stamping:</strong> Adds a touch of luxury with metallic gold, silver, or rose-gold accents that catch the light and communicate high-end value.</li>
                                <li><strong>Color Spraying and Frosting:</strong> Custom spray-coating can match any Pantone color, while acid-etching or spray-frosting creates a sophisticated, soft-touch matte finish.</li>
                                <li><strong>Custom Labeling:</strong> We provide waterproof, oil-resistant labels in matte, gloss, or metallic finishes, perfectly sized and applied to your glass serum bottles for a flawless presentation.</li>
                            </ul>
                            
                            <p>
                                Choosing the right glass serum bottle involves balancing aesthetics, functionality, and formulation compatibility. Partnering with CustomPackMakers ensures you receive expert guidance, superior quality control, and reliable wholesale pricing to help your skincare brand thrive.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Brand Rating */}
            <BrandRating />

            {/* Main Quote Form */}
            <QuoteForm />

            <Footer />
        </div>
    );
};

export default GlassSerumBottle;
