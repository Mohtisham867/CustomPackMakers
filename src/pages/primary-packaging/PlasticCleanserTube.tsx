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
import heroImage from "@/assets/primary-packaging/plastic-cleanser-tube/plastic-cleanser-tube-hero.webp";

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

const PlasticCleanserTube = () => {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);
    const [selectedImage, setSelectedImage] = useState(0);

    const productImages = [
        { src: plasticCleanserTube, alt: "Plastic Cleanser Tube - Premium" },
        { src: heroImage, alt: "Plastic Cleanser Tube - Hero" },
        { src: plasticShampooBottle, alt: "Plastic Cleanser Tube - Alternative 1" },
        { src: plasticLotionBottle, alt: "Plastic Cleanser Tube - Alternative 2" },
        { src: plasticCleanserTube, alt: "Plastic Cleanser Tube - Main" },
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
                <title>Plastic Cleanser Tubes | Custom Skincare Packaging | CustomPackMakers</title>
                <meta name="description" content="Wholesale plastic cleanser tubes for skincare brands. Durable, customizable, and eco-friendly squeeze tubes for facial cleansers, lotions, and scrubs." />
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
                                <BreadcrumbPage>Plastic Cleanser Tube</BreadcrumbPage>
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
                                Plastic Cleanser Tube
                            </h1>
                            <p className="text-[16px] text-muted-foreground leading-relaxed line-clamp-4 px-4 lg:px-0">
                                Our plastic cleanser tubes are designed for durability and ease of use, providing a reliable packaging solution for your skincare and beauty products. Customizable to fit your brand's aesthetic, these tubes ensure your product remains fresh, accessible, and perfectly dispensed every time.
                            </p>
                            <div className="pt-4 flex justify-center lg:justify-start">
                                <div className="relative w-full max-w-[480px] h-[300px] overflow-hidden rounded-lg shadow-lg bg-muted flex items-center justify-center">
                                    <img src={heroImage} alt="Plastic Cleanser Tube" className="w-full h-full object-cover" loading="lazy" />
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
                        Durable, Flexible, and High-Performance Squeeze Tubes
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            Engineered for flexibility and barrier protection, our <strong className="text-foreground">premium plastic cleanser tubes</strong> are the industry standard for facial washes, exfoliating scrubs, body lotions, and thick creams. Unlike rigid bottles, squeeze tubes offer superior product evacuation, ensuring your customers can effortlessly dispense every last drop of your meticulously crafted formulations. Whether you're launching a targeted acne treatment or an all-over body butter, our <strong className="text-foreground">custom cosmetic tubes</strong> provide the structural integrity and aesthetic appeal your brand requires.
                        </p>
                        <p>
                            We offer a vast array of materials including LDPE for maximum squeezability, MDPE/HDPE for structural firmness, and PCR (Post-Consumer Recycled) and Sugarcane Bioplastics for eco-conscious brands. Paired with reliable closures like flip-top caps, acrylic twist-offs, or precision nozzle tips, your <strong className="text-foreground">skincare packaging</strong> becomes a seamless extension of the user experience. With our state-of-the-art offset printing, silk screening, and hot stamping capabilities, your tubes will capture attention and communicate premium quality on any retail shelf.
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
                title="Plastic Cleanser Tube Specifications"
                specsTableTitle="Primary Packaging Specs"
                specsTableHeader1="Property"
                specsTableHeader2="Details"
                specsRows={[
                    { label: "Available Sizes", value: "15ml to 250ml" },
                    { label: "Material Options", value: "PE (LDPE/MDPE/HDPE), PCR, Sugarcane Bioplastic" },
                    { label: "Tube Layers", value: "Mono-layer, 2-layer, 5-layer EVOH (High Barrier)" },
                    { label: "Closure Types", value: "Flip-Top Cap, Screw Cap, Acrylic Cap, Slant Tip" },
                    { label: "Compatibility", value: "Facial Cleansers, Scrubs, Body Lotions, Thick Creams" }
                ]}
                materialTitle="Decoration & Finishing Options"
                materialList={[
                    "Offset Printing (Up to 8 colors)",
                    "Silk Screen Printing",
                    "Hot Foil Stamping (Gold/Silver)",
                    "Matte or High-Gloss Coating",
                    "Soft-Touch Velvet Finish",
                    "Custom Pantone Matching"
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
                            Discover a wide range of packaging options to complement your skincare line.
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
                        Optimizing Skincare Delivery with Plastic Cleanser Tubes
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
                                In the diverse landscape of cosmetic and personal care packaging, plastic squeeze tubes remain one of the most reliable, cost-effective, and user-friendly options available. Specifically engineered for thicker formulations like facial cleansers, body scrubs, masks, and rich moisturizers, plastic cleanser tubes provide unparalleled convenience. They allow consumers to dispense precise amounts of product with minimal effort, making them a staple in bathrooms and travel bags worldwide.
                            </p>
                            <p>
                                At CustomPackMakers, our wholesale plastic cleanser tubes are manufactured to the highest industry standards. We understand that your packaging must not only look pristine on a retail shelf but must also withstand the rigors of daily use in wet environments like showers and sinks. From the material composition to the closure mechanism, every element of our tubes is designed to protect your formulation while delivering a superior customer experience.
                            </p>

                            <h3>Material Expertise: Finding the Right Plastic for Your Formula</h3>
                            <p>
                                Not all skincare formulations are the same, and neither are our tubes. Selecting the appropriate material is crucial for preserving the integrity of your active ingredients and preventing issues like paneling (where the tube collapses inward) or chemical degradation.
                            </p>
                            <ul>
                                <li><strong>LDPE (Low-Density Polyethylene):</strong> The softest and most flexible option. Perfect for products that need to be squeezed easily and repeatedly, returning to their original shape quickly.</li>
                                <li><strong>MDPE/HDPE (Medium/High-Density Polyethylene):</strong> Offers a stiffer, more rigid structure. Ideal for thicker tubes that need to stand upright securely on their caps and resist deformation.</li>
                                <li><strong>5-Layer EVOH Barrier Tubes:</strong> For formulations containing highly active ingredients, essential oils, or sunscreens, a standard single-layer tube is not enough. Our 5-layer tubes incorporate an EVOH (Ethylene Vinyl Alcohol) layer that acts as an impermeable barrier against oxygen and moisture, dramatically extending shelf life.</li>
                            </ul>

                            <h3>Eco-Friendly Packaging: Sustainable Tube Solutions</h3>
                            <p>
                                Modern consumers demand environmental responsibility from their favorite beauty brands. We are proud to offer cutting-edge sustainable alternatives that do not compromise on performance or aesthetics.
                            </p>
                            <ul>
                                <li><strong>PCR (Post-Consumer Recycled) Plastics:</strong> Incorporating recycled resins into your packaging reduces the reliance on virgin plastics and appeals to eco-conscious buyers. We offer tubes with up to 100% PCR content.</li>
                                <li><strong>Sugarcane Bioplastics:</strong> A renewable, plant-based alternative to traditional petroleum-based plastics. These tubes are 100% recyclable and significantly reduce the carbon footprint of your packaging.</li>
                            </ul>

                            <h3>Closures and Dispensing Mechanisms</h3>
                            <p>
                                The cap is the primary interaction point for the consumer. A high-quality closure ensures a mess-free experience and prevents product leakage during transit.
                            </p>
                            <ul>
                                <li><strong>Flip-Top Caps:</strong> The standard for shower and sink products, allowing for easy, one-handed operation. Available in various orifice sizes to accommodate both runny lotions and thick scrubs.</li>
                                <li><strong>Screw Caps:</strong> A classic, secure closure often preferred for travel sizes and pharmaceutical-grade treatments.</li>
                                <li><strong>Acrylic and Metallic Caps:</strong> Elevate a standard plastic tube into the luxury category with heavy-walled acrylic caps or metallic hot-stamped bands that catch the eye.</li>
                            </ul>

                            <h3>Advanced Printing and Decoration Techniques</h3>
                            <p>
                                The seamless, cylindrical surface of a squeeze tube provides an excellent canvas for your branding. Because tubes do not require separate paper labels that can peel or warp in humid environments, the printing is applied directly to the plastic.
                            </p>
                            <ul>
                                <li><strong>Offset Printing:</strong> Capable of printing up to 8 colors simultaneously, providing photorealistic images, complex gradients, and crisp typography.</li>
                                <li><strong>Silk Screen Printing:</strong> Delivers a thick, tactile layer of ink that is highly durable and vibrant, perfect for bold logos and minimalist designs.</li>
                                <li><strong>Hot Stamping:</strong> Apply luxurious metallic foils (gold, silver, rose gold) directly to the tube to highlight specific design elements.</li>
                                <li><strong>Matte and Gloss Finishes:</strong> Choose a high-gloss coating for a bright, energetic look, or a soft-touch matte finish for a modern, sophisticated tactile experience.</li>
                            </ul>
                            
                            <p>
                                From concept to delivery, partnering with CustomPackMakers guarantees that your plastic cleanser tubes will perfectly embody your brand's quality. Our dedicated team provides expert guidance on material compatibility, structural design, and custom decoration to ensure your product succeeds in the competitive beauty market.
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

export default PlasticCleanserTube;
