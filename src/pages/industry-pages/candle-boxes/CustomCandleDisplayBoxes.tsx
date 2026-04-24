import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { QuoteForm } from "@/components/QuoteForm";
import { BrandRating } from "@/components/BrandRating";
import { Card, CardContent } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TechnicalSpecsSection } from "@/components/TechnicalSpecsSection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import displayImg from "@/assets/candle-products/Custom Candle Display Boxes.webp";
import jarImg from "@/assets/candle-products/Custom Candle Jar Boxes.webp";
import twoPieceImg from "@/assets/candle-products/Two Piece Candle Boxes.webp";
import shippingImg from "@/assets/candle-products/Candle Shipping Boxes.webp";
import taperImg from "@/assets/candle-products/taper-candle-boxes.webp";
import insertsImg from "@/assets/candle-products/candle-boxes-inserts.webp";
import labelsImg from "@/assets/candle-products/candle-labels.webp";
import windowImg from "@/assets/candle-products/candle-boxes-window.webp";
import waxMeltImg from "@/assets/candle-products/wax-melt-packaging.webp";
import subscriptionImg from "@/assets/candle-products/candle-subscription-boxes.webp";
import luxuryImg from "@/assets/candle-products/luxury-candle-boxes.webp";
import wishesImg from "@/assets/candle-products/16 Wishes Candle Boxes.webp";
import dustImg from "@/assets/candle-products/Candle Dust Covers.webp";
import FAQimage from "@/assets/FAQ-image.webp";

const carouselProducts = [
    { name: "Custom Candle Display Boxes", image: displayImg, description: "Showcase candles with elegant display boxes featuring window cutouts and premium presentation finishes", link: "/industries/candle-boxes/custom-candle-display-boxes" },
    { name: "Custom Candle Jar Boxes", image: jarImg, description: "Secure packaging for glass jar candles with protective inserts preventing breakage during shipping", link: "/industries/candle-boxes/custom-candle-jar-boxes" },
    { name: "Two Piece Candle Boxes", image: twoPieceImg, description: "Premium lid and base packaging offering luxury presentation with magnetic or ribbon closure options", link: "/industries/candle-boxes/two-piece-candle-boxes" },
    { name: "Candle Shipping Boxes", image: shippingImg, description: "Safe transit packaging for fragile candles featuring cushioned interiors and reinforced construction", link: "/industries/candle-boxes/candle-shipping-boxes" },
    { name: "Taper Candle Boxes", image: taperImg, description: "Slim packaging designed specifically for taper candles with protective sleeves and elegant branding", link: "/industries/candle-boxes/taper-candle-boxes" },
    { name: "Candle Boxes with Inserts", image: insertsImg, description: "Custom inserts for protection featuring foam or cardboard dividers securing candles in place safely", link: "/industries/candle-boxes/candle-boxes-with-inserts" },
    { name: "Candle Labels", image: labelsImg, description: "Brand your candles beautifully with custom labels featuring premium finishes and adhesive quality", link: "/industries/candle-boxes/candle-labels" },
    { name: "Candle Boxes With Window", image: windowImg, description: "Display candles through clear windows allowing customers to see products while maintaining protection", link: "/industries/candle-boxes/candle-boxes-window" },
    { name: "Wax Melt Packaging", image: waxMeltImg, description: "Compartment boxes for wax melts with individual slots and attractive designs for retail presentation", link: "/industries/candle-boxes/wax-melt-packaging" },
    { name: "Candle Subscription Boxes", image: subscriptionImg, description: "Monthly subscription packaging designed for recurring deliveries with branded unboxing experiences", link: "/industries/candle-boxes/candle-subscription-boxes" },
    { name: "Luxury Candle Boxes", image: luxuryImg, description: "High-end rigid gift boxes featuring premium materials and sophisticated finishes for luxury candles", link: "/industries/candle-boxes/luxury-candle-boxes" },
    { name: "16 Wishes Candle Boxes", image: wishesImg, description: "Celebratory birthday candle boxes with festive designs perfect for special occasion gift packaging", link: "/industries/candle-boxes/16-wishes-candle-boxes" },
    { name: "Candle Dust Covers", image: dustImg, description: "Protective covers for candles preventing dust accumulation while maintaining elegant display presentation", link: "/industries/candle-boxes/candle-dust-covers" },
];

const faqs = [
    { id: "item-1", q: "What materials are best for candle display boxes?", a: "We recommend high-quality 14pt or 16pt cardstock for retail display boxes. For a more premium feel, rigid board provides exceptional durability and a weighted luxury feel. All our materials are chosen for their ability to hold shape while showcasing vibrant, high-definition printing and intricate die-cut window designs." },
    { id: "item-2", q: "Can I add a custom window to my candle display box?", a: "Yes, custom window patching is one of our most popular features. We can create windows in any shape or size, allowing customers to see the texture and color of the candle and smell the fragrance. Our windows are made from high-clarity PET, ensuring protection from dust and fingerprints while maintaining visual appeal." },
    { id: "item-3", q: "Are your candle boxes heat-resistant?", a: "While the boxes themselves are not meant to be near an open flame, we use heat-stable coatings and adhesives that prevent the packaging from warping or the glue from losing its bond due to the ambient warmth of a recently extinguished candle or during storage in varying climates." },
    { id: "item-4", q: "What kind of luxury finishes do you offer?", a: "To make your candle brand stand out, we offer gold and silver foil stamping, spot UV for a glossy contrast, embossing for a 3D tactile effect, and soft-touch lamination for a velvety feel. These finishes communicate luxury and quality, encouraging customers to choose your product over competitors." },
    { id: "item-5", q: "How do you ensure glass jar candles don't break in these boxes?", a: "For display boxes, we design custom-fit inserts and internal structures that cradle the glass jar. These inserts prevent the jar from shifting and provide a buffer against impact. For shipping, we recommend pairing display boxes with our reinforced corrugated shipping containers for double-layered protection." },
];

const CustomCandleDisplayBoxes = () => {
    const [selectedImage, setSelectedImage] = useState(0);
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);

    const productImages = [
        { src: displayImg, alt: "Custom Candle Display Boxes - Main" },
        { src: jarImg, alt: "Custom Candle Jar Boxes" },
        { src: twoPieceImg, alt: "Two Piece Candle Boxes" },
        { src: shippingImg, alt: "Candle Shipping Boxes" },
        { src: windowImg, alt: "Candle Boxes With Window" },
    ];

    useEffect(() => {
        if (!api) return;
        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap());
        api.on("select", () => setCurrent(api.selectedScrollSnap()));
    }, [api]);

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Candle Display Boxes | Luxury Candle Packaging | CustomPackMakers</title>
                <meta name="description" content="Elevate your brand with custom candle display boxes. Premium window cutouts, luxury finishes, and heat-resistant materials. Get a free quote today!" />
                <meta name="keywords" content="custom candle display boxes, candle window boxes, luxury candle packaging, wholesale candle boxes, candle gift boxes" />
            </Helmet>
            <Header />

            <div className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 mt-[120px] md:mt-[160px]">
                <div className="container mx-auto px-[30px] py-4">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem><BreadcrumbLink asChild><Link to="/">Home</Link></BreadcrumbLink></BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem><BreadcrumbLink asChild><Link to="/industries">All Industries</Link></BreadcrumbLink></BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem><BreadcrumbLink asChild><Link to="/industries/candle-boxes">Candle Boxes</Link></BreadcrumbLink></BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem><BreadcrumbPage>Custom Candle Display Boxes</BreadcrumbPage></BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </div>

            <section className="py-8 bg-background">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-7 space-y-6 text-left">
                            <div className="w-20 h-1.5 bg-primary rounded-full"></div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight">
                                <span className="text-primary">Custom</span> Candle Display Boxes
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Showcase your artisanal candles with stunning display boxes. Featuring premium window cutouts, luxury tactile finishes, and structural integrity that protects your glass jars while captivating retail customers.
                            </p>
                            <div className="pt-2">
                                <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300" onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}>
                                    Get a Quote
                                </Button>
                            </div>
                        </div>
                        <div className="lg:col-span-5 relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-muted group">
                            <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-orange-100">
                                <img src={displayImg} alt="Custom Candle Display Boxes" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-8 bg-slate-50">
                <div className="container mx-auto px-[5vw]">
                    <div className="flex items-center gap-3 mb-5">
                        <div className="w-10 h-1 bg-primary rounded-full" />
                        <span className="text-xs font-semibold tracking-widest text-primary uppercase">Product Overview</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 max-w-3xl leading-tight">Artisanal Packaging Designed to Showcase Fragrance and Style</h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>Our <strong className="text-foreground">custom candle display boxes</strong> are engineered for brands that understand the visual and olfactory appeal of their products. By incorporating high-clarity PET window patching, we allow your customers to engage with the product's color and texture immediately. These boxes are more than just containers; they are a stage for your candles, designed to reflect the quality and passion that goes into every pour.</p>
                        <p>Constructed from premium cardstock or rigid board, our <strong className="text-foreground">luxury candle packaging</strong> offers superior protection for glass jars. We utilize advanced die-cutting technology to ensure a precise fit, combined with luxury finishes like gold foiling and spot UV to create a premium shelf presence. Whether for a boutique shop or a major retail chain, our display boxes ensure your candles stand out in a crowded market.</p>
                    </div>
                </div>
            </section>

            <section className="py-10 bg-accent/5" id="quote-form">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end">
                        <div className="lg:col-span-7 space-y-6">
                            <div className="relative w-full max-w-lg mx-auto overflow-hidden rounded-lg shadow-sm border border-border bg-white" style={{ aspectRatio: '4/3' }}>
                                <img src={productImages[selectedImage].src} alt={productImages[selectedImage].alt} className="w-full h-full object-cover" />
                            </div>
                            <div className="w-full max-w-lg mx-auto grid grid-cols-5 gap-2">
                                {productImages.map((image, index) => (
                                    <button key={index} onClick={() => setSelectedImage(index)} className={`relative w-full aspect-square overflow-hidden rounded-md border transition-all duration-200 ${selectedImage === index ? 'border-primary shadow-md ring-2 ring-primary/20' : 'border-slate-200 hover:border-slate-300 hover:shadow-sm'}`}>
                                        <img src={image.src} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="lg:col-span-5 lg:sticky lg:top-24">
                            <Card className="shadow-lg border-slate-200 bg-slate-50/50 backdrop-blur-sm overflow-hidden">
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold text-foreground mb-5">Get a Custom Quote</h3>
                                    <form className="space-y-4">
                                        <div className="grid grid-cols-3 gap-3">
                                            <div className="space-y-1.5"><Label htmlFor="length" className="text-xs font-semibold text-muted-foreground">L (in)</Label><Input id="length" type="number" placeholder="4" className="h-9 bg-white" /></div>
                                            <div className="space-y-1.5"><Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label><Input id="width" type="number" placeholder="4" className="h-9 bg-white" /></div>
                                            <div className="space-y-1.5"><Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">D (in)</Label><Input id="depth" type="number" placeholder="5" className="h-9 bg-white" /></div>
                                        </div>
                                        <div className="space-y-1.5"><Label htmlFor="quantity" className="text-xs font-semibold text-muted-foreground">Quantity</Label><Input id="quantity" type="number" placeholder="500" className="h-9 bg-white" /></div>
                                        <div className="space-y-1.5"><Label htmlFor="name" className="text-xs font-semibold text-muted-foreground">Name</Label><Input id="name" type="text" placeholder="Your Name" className="h-9 bg-white" /></div>
                                        <div className="space-y-1.5"><Label htmlFor="email" className="text-xs font-semibold text-muted-foreground">Email</Label><Input id="email" type="email" placeholder="email@example.com" className="h-9 bg-white" /></div>
                                        <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 shadow-md hover:shadow-lg transition-all duration-300 mt-2">Submit Inquiry</Button>
                                    </form>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            <TechnicalSpecsSection />

            <section className="py-8 bg-slate-50 border-t border-slate-100">
                <div className="container mx-auto px-[5vw]">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">Mastering the Art of Candle Display Packaging</h2>
                    <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="[&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-8 [&>h3]:mb-3 [&>h3]:first:mt-0 [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-5 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-5 [&>ul]:space-y-2 [&>ul>li]:text-[15px] [&>ul>li]:text-slate-600">
                            <p>The candle industry is as much about the visual and sensory experience as it is about the fragrance itself. In a marketplace saturated with options, your packaging is often the first and most critical point of contact between your brand and a potential customer. Custom candle display boxes serve as the silent salesperson, communicating the essence of your brand, the quality of your ingredients, and the care taken in your artisanal process. At CustomPackMakers, we specialize in creating display solutions that don't just hold your product—they elevate it.</p>
                            <p>Designing effective candle display packaging involves a delicate balance of aesthetics, structural engineering, and material science. Candles are fragile, sensitive to temperature, and often housed in heavy glass jars that require robust support. Furthermore, the fragrance—the product's primary selling point—needs to be protected while being allowed to subtly entice the consumer. Our approach to display boxes addresses all these challenges through innovation and premium craftsmanship.</p>
                            <h3>The Psychology of the Unboxing Experience</h3>
                            <p>While display boxes are primarily for retail shelves, they are also the first layer of the unboxing experience. The tactile feel of the cardstock, the smooth glide of the opening mechanism, and the immediate visual impact of the candle seen through a custom window cutout all contribute to a sense of value. When a customer picks up a candle in a well-weighted, beautifully finished box, their perception of the product's quality increases significantly. This psychological impact is what converts a browser into a buyer and a first-time purchaser into a loyal brand advocate.</p>
                            <p>Luxury candles often command high price points, and the packaging must justify that investment. We utilize spot UV, foil stamping, and high-depth embossing to create a multi-sensory experience. Imagine a deep matte black box with a gold-foiled logo that shines under retail lights, paired with an embossed texture that mimics the feel of fine linen. These details speak of heritage, luxury, and attention to detail, aligning your packaging with the premium nature of your candles.</p>
                            <h3>Structural Integrity Meets Visual Clarity</h3>
                            <p>One of the most requested features for candle display boxes is the window cutout. A window allows the natural beauty of the candle—the ivory wax, the dried botanical inclusions, or the elegant glass jar—to be the star. However, adding a window can compromise structural integrity if not engineered correctly. We use high-clarity, non-toxic PET (polyethylene terephthalate) for our window patching, which provides a rigid buffer while offering maximum transparency. This prevents dust and fingerprints from reaching the candle while maintaining a crystal-clear view.</p>
                            <p>Furthermore, we design internal supports and custom-fit folds that reinforce the box around the window area. This ensures that even for heavy 12oz or 16oz jars, the box maintains its shape and doesn't buckle under the weight. Our structural designers work with your specific jar dimensions to create a "zero-tolerance" fit, minimizing any internal movement that could lead to glass breakage during handling and transport.</p>
                            <h3>Material Excellence and Sustainability</h3>
                            <p>Sustainability is no longer an option; it's a requirement for modern fragrance and wellness brands. We offer a wide range of eco-friendly materials, including FSC-certified cardstock and recycled kraft boards. Our soy-based inks and water-based coatings ensure that your packaging is as kind to the environment as your candles are to the home. Choosing sustainable materials doesn't mean compromising on aesthetics; our high-quality eco-boards take print and luxury finishes exceptionally well, allowing you to maintain a premium brand image while meeting your environmental commitments.</p>
                            <p>Heat resistance is also an underrated factor in candle packaging. While the primary function is protection during shipping and display, the ambient warmth of recently poured candles or storage in high-temperature warehouses can cause standard adhesives and coatings to fail. We use heat-stable glues and specialized coatings that prevent warping, peeling, or yellowing, ensuring that your packaging looks as fresh when it reaches the customer as it did when it left the production line.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-8 bg-accent/20">
                <div className="container mx-auto px-[5vw]">
                    <div className="mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Related Candle Products</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl">Explore our complete range of premium candle packaging solutions designed to elevate your brand's presence.</p>
                    </div>
                    <div className="relative px-4">
                        <Carousel setApi={setApi} opts={{ align: "start", loop: true }} plugins={[Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })]} className="w-full">
                            <CarouselContent className="-ml-4">
                                {carouselProducts.map((product, index) => (
                                    <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                                        <div className="h-full">
                                            <Link to={product.link} className="block h-full">
                                                <Card className="overflow-hidden border-border bg-card hover:shadow-xl transition-all duration-300 group cursor-pointer h-full">
                                                    <CardContent className="p-0 flex flex-col h-full">
                                                        <div className="h-48 lg:h-64 w-full bg-gray-50 overflow-hidden relative">
                                                            <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" loading="lazy" />
                                                        </div>
                                                        <div className="p-5 border-t border-border flex-grow flex flex-col">
                                                            <h3 className="font-semibold text-foreground text-base mb-2">{product.name}</h3>
                                                            <p className="text-sm text-muted-foreground line-clamp-2 mb-4 flex-grow">{product.description}</p>
                                                            <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors mt-auto">View Product</Button>
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
                                    <button key={index} className={`h-2 rounded-full transition-all duration-300 ${index === current ? "w-8 bg-primary" : "w-2 bg-primary/20 hover:bg-primary/50"}`} onClick={() => api?.scrollTo(index)} aria-label={`Go to slide ${index + 1}`} />
                                ))}
                            </div>
                        </Carousel>
                    </div>
                </div>
            </section>

            <section className="py-12 relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #fffaf5 0%, #fffefe 60%, #fef8f0 100%)' }}>
                <div className="absolute top-0 left-0 w-80 h-80 bg-primary/4 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-300/8 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl pointer-events-none" />
                <div className="container mx-auto px-[30px] relative z-10">
                    <div className="text-center mb-14">
                        <span className="inline-block text-xs font-semibold tracking-widest text-primary uppercase mb-3 bg-primary/10 px-4 py-1.5 rounded-full">Our Promise</span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">Why Brands Choose <span className="text-primary">CustomPackMakers</span></h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">We combine artisanal quality with technical precision to deliver candle packaging that defines your brand's excellence.</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">
                        <div className="space-y-5">
                            {[
                                { color: "primary", iconPath: "M13 10V3L4 14h7v7l9-11h-7z", h: "Heat-Resistant Premium Materials", p: "We utilize specialized cardstock and heat-stable adhesives that maintain structural integrity near warm candle production lines. Our coatings are engineered to prevent warping or yellowing, ensuring your packaging preserves its pristine look even in humid environments or variable storage temperatures across global distribution channels." },
                                { color: "amber-500", iconPath: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z", h: "Luxury Finishes and Customization", p: "From elegant gold foiling to high-depth embossing and soft-touch lamination, we offer a full suite of artisan finishes. These luxury details elevate your brand positioning, transforming functional boxes into tactile brand experiences that justify premium price points and captivate the attention of sophisticated retail candle consumers." },
                                { color: "emerald-500", iconPath: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", h: "Protective Inserts for Glass Fragility", p: "Our structural engineers design precision-cut custom inserts using foam or reinforced cardboard to cradle delicate glass candle jars. These inserts act as a shock absorber, preventing internal movement and significantly reducing the risk of breakage during transit, ensuring your product arrives in perfect condition every time." },
                            ].map((item, i) => (
                                <div key={i}>
                                    <div className="flex gap-6 items-start group">
                                        <div className="flex-shrink-0 mt-1"><div className={`w-10 h-10 rounded-full bg-${item.color}/10 flex items-center justify-center group-hover:bg-${item.color}/20 transition-colors duration-300`}><svg className={`w-5 h-5 text-${item.color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.iconPath} /></svg></div></div>
                                        <div><h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">{item.h}</h3><p className="text-sm text-slate-500 leading-relaxed">{item.p}</p></div>
                                    </div>
                                    {i < 2 && <div className="w-full h-px bg-slate-100 mt-5" />}
                                </div>
                            ))}
                        </div>
                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img src={displayImg} alt="Premium Candle Packaging Excellence" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-7"><p className="text-white font-bold text-lg leading-snug mb-1">Trusted by 500+ Luxury Brands</p><p className="text-white/75 text-sm">Delivering excellence in fragrance packaging across North America</p></div>
                            </div>
                            <div className="absolute top-4 -right-2 lg:-right-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80 backdrop-blur-sm"><p className="text-2xl font-bold text-primary leading-none">98%</p><p className="text-xs text-slate-400 mt-1 font-medium">Brand Loyalty</p></div>
                            <div className="absolute bottom-4 -left-2 lg:-left-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80 backdrop-blur-sm"><p className="text-2xl font-bold text-secondary leading-none">8–10</p><p className="text-xs text-slate-400 mt-1 font-medium">Day Turnaround</p></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-10 lg:py-12 bg-white overflow-hidden relative">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="relative group">
                            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] border border-primary/20 shadow-2xl transform transition-transform duration-700 hover:scale-[1.02]">
                                <img src={displayImg} alt="Differentiate Your Candle Brand" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                            </div>
                            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-60" />
                            <div className="absolute -z-10 -top-8 -right-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl opacity-60" />
                        </div>
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">Differentiate Your <span className="text-primary">Candle Brand</span> From Others</h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">In the artisan candle market, your packaging is the bridge between a fragrance and its environment. CustomPackMakers engineers display boxes that utilize sensory-rich materials and precision-fit structural design to tell your brand story before the candle is even lit. Our focus on protective resilience and luxury aesthetic ensures your glass jars remain safe while your brand remains unforgettable.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-6 bg-slate-50">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <h2 className="text-2xl md:text-3xl font-bold text-foreground">Frequently Asked Questions</h2>
                                <p className="text-base text-muted-foreground">Detailed answers to common questions about our candle packaging solutions.</p>
                            </div>
                            <Accordion type="single" collapsible defaultValue="item-1" className="w-full space-y-2">
                                {faqs.map((faq) => (
                                    <AccordionItem key={faq.id} value={faq.id} className="border border-slate-200 rounded-lg bg-white overflow-hidden data-[state=open]:border-primary data-[state=open]:ring-1 data-[state=open]:ring-primary/20 data-[state=open]:bg-primary/5 transition-all duration-300">
                                        <AccordionTrigger className="px-5 py-3 hover:no-underline [&>svg]:hidden group">
                                            <span className="text-left font-semibold text-foreground text-base">{faq.q}</span>
                                            <div className="shrink-0 ml-4 p-1 rounded-full bg-slate-100 group-data-[state=open]:bg-primary group-data-[state=open]:text-white transition-colors duration-200">
                                                <Plus className="h-3 w-3 group-data-[state=open]:hidden" />
                                                <Minus className="h-3 w-3 hidden group-data-[state=open]:block" />
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent className="px-5 pb-5 pt-0 text-slate-600 leading-relaxed text-sm">{faq.a}</AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                        <div className="relative w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden shadow-md">
                            <img src={FAQimage} alt="Candle Packaging FAQ Support" className="absolute inset-0 w-full h-full object-cover" />
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

export default CustomCandleDisplayBoxes;
