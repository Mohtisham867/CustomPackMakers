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
import heroImage from "@/assets/primary-packaging/paper-tubes/paper-tubes-hero.webp";

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

const PaperTubes = () => {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);
    const [selectedImage, setSelectedImage] = useState(0);

    const productImages = [
        { src: paperTubes, alt: "Paper Tubes - Premium" },
        { src: heroImage, alt: "Paper Tubes - Hero" },
        { src: customPreRollTubes, alt: "Paper Tubes - Alternative 1" },
        { src: glassCandleJars, alt: "Paper Tubes - Alternative 2" },
        { src: paperTubes, alt: "Paper Tubes - Main" },
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
                <title>Custom Paper Tubes | Eco-Friendly Packaging | CustomPackMakers</title>
                <meta name="description" content="Eco-friendly custom paper tubes and cardboard cylinder packaging for cosmetics, dry goods, and apparel. 100% recyclable and biodegradable." />
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
                                <BreadcrumbPage>Paper Tubes</BreadcrumbPage>
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
                                Paper Tubes
                            </h1>
                            <p className="text-[16px] text-muted-foreground leading-relaxed line-clamp-4 px-4 lg:px-0">
                                Eco-friendly paper tubes for sustainable packaging solutions featuring organic aesthetics and impressive structural durability. Perfect for cosmetics, dry goods, and retail products that demand a premium, environmentally conscious presentation.
                            </p>
                            <div className="pt-4 flex justify-center lg:justify-start">
                                <div className="relative w-full max-w-[480px] h-[300px] overflow-hidden rounded-lg shadow-lg bg-muted flex items-center justify-center">
                                    <img src={heroImage} alt="Paper Tubes" className="w-full h-full object-cover" loading="lazy" />
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
                        Sustainable, Rigid Cylinder Packaging for Forward-Thinking Brands
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            As consumer demand for sustainable packaging reaches an all-time high, our <strong className="text-foreground">custom paper tube packaging</strong> provides an elegant, 100% recyclable alternative to traditional plastics and heavy glass. Constructed from sturdy kraft paper and rigid virgin paperboard, these cylindrical containers offer excellent structural integrity to protect your products while delivering a distinctive, premium unboxing experience.
                        </p>
                        <p>
                            Paper tubes are incredibly versatile. We manufacture push-up tubes for eco-friendly lip balms and solid deodorants, shaker-top cylinders for dry cosmetics and spices, and high-end telescopic tubes for luxury apparel, loose-leaf tea, and coffee packaging. With options for food-grade aluminum linings or oil-resistant wax coatings, our <strong className="text-foreground">biodegradable cardboard tubes</strong> can safely house a massive variety of products while significantly reducing your brand's environmental footprint.
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
                title="Custom Paper Tube Specifications"
                specsTableTitle="Primary Packaging Specs"
                specsTableHeader1="Property"
                specsTableHeader2="Details"
                specsRows={[
                    { label: "Dimensions", value: "Custom Diameters (0.5\" to 6\") and Lengths" },
                    { label: "Core Material", value: "Rigid Kraft Paper, Virgin Paperboard, Recycled Cardboard" },
                    { label: "Structural Styles", value: "1-Piece Push Up, 2-Piece Telescopic, 3-Piece Rolled Edge" },
                    { label: "Internal Linings", value: "Food-Grade Aluminum Foil, Oil-Resistant Wax, PE Lamination" },
                    { label: "Compatibility", value: "Deodorants, Lip Balms, Dry Foods, Tea, Coffee, Apparel, Gifts" }
                ]}
                materialTitle="Decoration & Finishing Options"
                materialList={[
                    "Full-Color CMYK Offset Printing",
                    "Spot UV Gloss & Embossing",
                    "Hot Foil Stamping (Gold, Silver, Holographic)",
                    "Matte or Gloss Lamination",
                    "Natural Kraft Finish (Uncoated)",
                    "Custom Die-Cut Windows"
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
                            Discover a wide range of packaging options to complement your sustainable product line.
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
                        Transforming Packaging with Sustainable Custom Paper Tubes
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
                                In today's environmentally conscious market, brands are rapidly moving away from single-use plastics and searching for packaging solutions that align with their customers' eco-friendly values. Custom paper tubes and cardboard cylinders have emerged as one of the most popular and versatile sustainable packaging options available. By combining the rigid strength of layered paperboard with endless customization possibilities, paper tubes offer a premium unboxing experience that doesn't compromise the planet.
                            </p>
                            <p>
                                At CustomPackMakers, we specialize in manufacturing high-quality, wholesale paper tube packaging for a wide array of industries, from cosmetics and personal care to gourmet food, apparel, and retail gifts. Our tubes are 100% recyclable, biodegradable, and can be manufactured using post-consumer recycled materials.
                            </p>

                            <h3>Versatile Structural Designs for Any Product</h3>
                            <p>
                                A paper tube is not just a simple cylinder. We engineer various structural styles to perfectly suit the functionality of your specific product:
                            </p>
                            <ul>
                                <li><strong>Telescopic Tubes (2-Piece):</strong> The classic design featuring a base and a lid that slides snugly over top. Excellent for retail packaging, candles, apparel (like rolled t-shirts), and luxury gift items.</li>
                                <li><strong>3-Piece Tubes with Rolled Edges:</strong> Features an exposed inner neck that the lid sits on, creating a flush, seamless exterior when closed. The rolled paper edges provide a highly polished, premium look ideal for luxury cosmetics and high-end teas.</li>
                                <li><strong>Push-Up Tubes (1-Piece):</strong> Designed specifically for solid cosmetics like lip balms, solid perfumes, and natural deodorants. The consumer simply pushes a movable disc at the bottom to dispense the product, completely eliminating the need for plastic twist mechanisms.</li>
                                <li><strong>Shaker Top Tubes:</strong> Equipped with perforated paper or plastic lids, these are perfect for dispensing dry powders, spices, dry shampoo, or talc.</li>
                            </ul>

                            <h3>Specialized Linings for Product Protection</h3>
                            <p>
                                While paper is inherently porous, our advanced manufacturing techniques allow paper tubes to safely house products that contain oils, moisture, or require food-safe environments.
                            </p>
                            <ul>
                                <li><strong>Aluminum Foil Linings:</strong> Provide a food-grade, airtight barrier that preserves the freshness of loose-leaf tea, coffee beans, spices, and powdered supplements while protecting the exterior paper from grease spots.</li>
                                <li><strong>Wax and Oil-Resistant Linings:</strong> Crucial for cosmetic push-up tubes housing lip balms or deodorants. These linings prevent the essential oils and butters in the formulation from seeping into the cardboard and ruining the structural integrity or exterior print.</li>
                            </ul>

                            <h3>Unleashing Creativity with High-End Printing</h3>
                            <p>
                                One of the greatest advantages of paper tube packaging is the ability to print edge-to-edge in full color. Unlike plastic bottles that require separate labels, the outer paper wrap of a tube is printed flat using state-of-the-art offset printing before being wrapped around the rigid core.
                            </p>
                            <ul>
                                <li><strong>Full CMYK Offset Printing:</strong> Achieve photorealistic imagery, complex gradients, and razor-sharp typography across the entire surface of the tube.</li>
                                <li><strong>Luxury Finishes:</strong> Elevate your brand with hot foil stamping for metallic logos, spot UV gloss to highlight specific patterns against a matte background, or elegant embossing that provides a tactile, premium feel.</li>
                                <li><strong>Natural Kraft Aesthetics:</strong> For brands leaning into an organic, minimalist look, we can print directly onto uncoated brown or white kraft paper, utilizing simple, bold inks to communicate an earthy, natural vibe.</li>
                            </ul>
                            
                            <p>
                                Upgrading to custom paper tube packaging not only enhances your brand's commitment to sustainability but also creates a memorable, tactile experience for your customers. Partner with CustomPackMakers to design the perfect cylindrical packaging that protects your product and perfectly communicates your brand identity.
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

export default PaperTubes;
