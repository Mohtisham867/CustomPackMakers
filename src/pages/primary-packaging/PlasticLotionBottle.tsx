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
import heroImage from "@/assets/primary-packaging/plastic-lotion-bottle/plastic-lotion-bottle-hero.webp";

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

const PlasticLotionBottle = () => {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);
    const [selectedImage, setSelectedImage] = useState(0);

    const productImages = [
        { src: plasticLotionBottle, alt: "Plastic Lotion Bottle - Premium" },
        { src: heroImage, alt: "Plastic Lotion Bottle - Hero" },
        { src: plasticShampooBottle, alt: "Plastic Lotion Bottle - Alternative 1" },
        { src: jarsWithPump, alt: "Plastic Lotion Bottle - Alternative 2" },
        { src: plasticLotionBottle, alt: "Plastic Lotion Bottle - Main" },
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
                <title>Plastic Lotion Bottles | Pump Dispenser Packaging | CustomPackMakers</title>
                <meta name="description" content="Wholesale plastic lotion bottles with pump dispensers. Durable PET and HDPE packaging designed for body lotions, liquid soaps, and sanitizers." />
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
                                <BreadcrumbPage>Plastic Lotion Bottle</BreadcrumbPage>
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
                                Plastic Lotion Bottle
                            </h1>
                            <p className="text-[16px] text-muted-foreground leading-relaxed line-clamp-4 px-4 lg:px-0">
                                Functional plastic lotion bottles with pump options designed for controlled dispensing and significant brand impact. Ideal for body lotions, hand creams, liquid soaps, and sanitizers.
                            </p>
                            <div className="pt-4 flex justify-center lg:justify-start">
                                <div className="relative w-full max-w-[480px] h-[300px] overflow-hidden rounded-lg shadow-lg bg-muted flex items-center justify-center">
                                    <img src={heroImage} alt="Plastic Lotion Bottle" className="w-full h-full object-cover" loading="lazy" />
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
                        Effortless Dispensing for Viscous Liquids
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            For highly viscous liquids like rich body lotions, hand creams, conditioning gels, and liquid soaps, standard screw caps or disc tops often prove frustrating for the end-user. The packaging must facilitate effortless, one-handed dispensing. Our <strong className="text-foreground">wholesale plastic lotion bottles</strong> combine ergonomic, stable bottle designs with highly functional pump mechanisms to ensure your product is delivered smoothly from the very first drop to the last.
                        </p>
                        <p>
                            We offer these bottles in a wide array of profiles—from classic cylindrical Boston rounds to sleek, modern squares and ovals. Manufactured in durable PET and HDPE plastics, our bottles are designed to withstand daily use in bathrooms and kitchens. By pairing the right bottle shape with an optimized dispensing pump, we provide a packaging solution that enhances the user experience and encourages repeat purchases of your skincare products.
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
                title="Plastic Lotion Bottle Specifications"
                specsTableTitle="Primary Packaging Specs"
                specsTableHeader1="Property"
                specsTableHeader2="Details"
                specsRows={[
                    { label: "Available Sizes", value: "50ml, 100ml, 250ml, 500ml, 1000ml (1 Liter)" },
                    { label: "Material Options", value: "PET (Clear/Tinted), HDPE (Opaque), PCR Plastics" },
                    { label: "Neck Finishes", value: "24/410, 24/415, 28/410 Industry Standards" },
                    { label: "Pump Types", value: "Standard Lotion Pump, High-Output Pump, Treatment Pump" },
                    { label: "Compatibility", value: "Body Lotions, Hand Creams, Liquid Soaps, Sanitizers" }
                ]}
                materialTitle="Decoration & Finishing Options"
                materialList={[
                    "Custom Color Tinting (Opaque & Translucent)",
                    "Soft-Touch Matte Coating",
                    "Silk Screen Printing (Up to 6 Colors)",
                    "Wrap-Around Waterproof Labeling",
                    "Hot Foil Stamping on Collars",
                    "Metallic/Aluminum Pump Over-shells"
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
                            Discover a wide range of packaging options to complement your skincare and body care line.
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
                        Perfecting the Pump: Wholesale Plastic Lotion Bottles
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
                                Body lotions and liquid soaps present a specific packaging challenge: the product is too thick to flow easily through a standard opening, yet the consumer requires precise, mess-free dispensing, often with only one free hand. The solution is the iconic plastic lotion bottle equipped with a high-quality pump dispenser. However, not all lotion bottles are created equal. A pump that clogs, stutters, or breaks before the bottle is empty will result in frustration and lost brand loyalty.
                            </p>
                            <p>
                                At CustomPackMakers, we manufacture premium wholesale plastic lotion bottles engineered to pair flawlessly with advanced dispensing pumps. Whether you are packaging a lightweight summer moisturizer or a thick, heavy-duty hand salve, we have the ideal bottle and pump combination for your formulation.
                            </p>

                            <h3>Material Selection: PET vs. HDPE for Lotions</h3>
                            <p>
                                The plastic you choose impacts not only the look of your bottle but its chemical compatibility with your lotion's ingredients.
                            </p>
                            <ul>
                                <li><strong>PET (Polyethylene Terephthalate):</strong> Ideal for visually appealing formulations where you want the consumer to see the color and texture of the lotion. PET provides glass-like clarity and high rigidity, ensuring the bottle maintains its pristine shape as the pump creates a vacuum to draw the product up.</li>
                                <li><strong>HDPE (High-Density Polyethylene):</strong> The go-to choice for classic, opaque white or deeply colored lotion bottles. HDPE is naturally frosted, blocks UV light (protecting sensitive active ingredients), and is highly durable. While it is squeezable, when paired with a pump, its structural integrity keeps the bottle stable on the countertop.</li>
                            </ul>

                            <h3>The Anatomy of a Reliable Lotion Pump</h3>
                            <p>
                                A lotion bottle is only as good as the pump attached to it. Our dispensing pumps are engineered for longevity and consistent output.
                            </p>
                            <ul>
                                <li><strong>Output Volume (Dosage):</strong> Pumps are calibrated to dispense a specific amount of liquid per stroke (e.g., 2cc, 4cc). We help you match the pump output to the usage instructions of your product—a small dose for a facial moisturizer, and a high output for a full-body lotion.</li>
                                <li><strong>Lock-Down vs. Twist-Lock Mechanisms:</strong> Essential for e-commerce shipping. A lock-down pump must be pushed down and twisted to lock, preventing accidental discharge in transit. Twist-lock pumps can be locked and unlocked simply by twisting the head left or right, offering a more premium, reusable user experience.</li>
                                <li><strong>Dip Tube Optimization:</strong> The plastic tube extending into the bottle must be cut to the precise millimeter. A tube that is too short leaves expensive product trapped at the bottom, while a tube that is too long will bend, potentially restricting flow.</li>
                            </ul>

                            <h3>Enhancing Shelf Appeal with Custom Decoration</h3>
                            <p>
                                In the crowded personal care aisle, your packaging must catch the eye instantly. We offer a full suite of decoration services to ensure your plastic lotion bottles stand out.
                            </p>
                            <ul>
                                <li><strong>Metallic Collars:</strong> Upgrade a standard plastic pump by adding a sleek, electroplated aluminum collar in gold, silver, or rose gold. This instantly elevates the perceived value of the product.</li>
                                <li><strong>Direct Printing:</strong> Silk screen printing directly onto the bottle provides a seamless, high-end look that is impervious to the water and oils often present in bathrooms.</li>
                                <li><strong>Soft-Touch Finishes:</strong> Apply a velvety, matte coating to your HDPE bottles. This provides a luxurious tactile experience that aligns perfectly with moisturizing products.</li>
                            </ul>
                            
                            <p>
                                Partnering with CustomPackMakers guarantees that you receive perfectly matched bottle and pump assemblies that deliver your product smoothly and showcase your brand beautifully.
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

export default PlasticLotionBottle;
