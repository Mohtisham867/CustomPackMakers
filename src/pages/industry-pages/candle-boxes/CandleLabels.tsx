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

import displayImg from "@/assets/industry/candle-boxes/Custom Candle Display Boxes.webp";
import jarImg from "@/assets/industry/candle-boxes/Custom Candle Jar Boxes.webp";
import twoPieceImg from "@/assets/industry/candle-boxes/Two Piece Candle Boxes.webp";
import shippingImg from "@/assets/industry/candle-boxes/Candle Shipping Boxes.webp";
import taperImg from "@/assets/industry/candle-boxes/taper-candle-boxes.webp";
import insertsImg from "@/assets/industry/candle-boxes/candle-boxes-inserts.webp";
import labelsImg from "@/assets/industry/candle-boxes/candle-labels.webp";
import windowImg from "@/assets/industry/candle-boxes/candle-boxes-window.webp";
import waxMeltImg from "@/assets/industry/candle-boxes/wax-melt-packaging.webp";
import subscriptionImg from "@/assets/industry/candle-boxes/candle-subscription-boxes.webp";
import luxuryImg from "@/assets/industry/candle-boxes/luxury-candle-boxes.webp";
import wishesImg from "@/assets/industry/candle-boxes/16 Wishes Candle Boxes.webp";
import dustImg from "@/assets/industry/candle-boxes/Candle Dust Covers.webp";
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
    { id: "item-1", q: "Are your candle labels heat-resistant?", a: "Yes, our candle labels are engineered with specialized adhesives and face stocks that can withstand the high temperatures generated by burning candles. This prevents the edges from curling or the adhesive from bubbling, ensuring your branding remains pristine until the very last burn." },
    { id: "item-2", q: "What is the best material for glass jar labels?", a: "For glass jars, we recommend our premium vinyl or BOPP materials. They are oil-resistant (essential for fragrant wax) and offer excellent clarity if you want a 'no-label' look. For a more artisanal feel, our textured linen papers provide a sophisticated, high-end aesthetic." },
    { id: "item-3", q: "Can you produce warning and safety labels?", a: "Absolutely. We can print standardized CLP and safety warning labels to ensure your products meet all legal requirements. These can be integrated into your primary design or produced as separate, smaller labels for the base of the jar." },
    { id: "item-4", q: "What luxury finishes are available for labels?", a: "We offer gold, silver, and rose gold foil stamping, spot UV for high-gloss accents, and soft-touch lamination for a velvety feel. We can also provide high-depth embossing on paper labels, adding a tactile dimension to your candle branding." },
    { id: "item-5", q: "Do you offer low minimum order quantities for labels?", a: "Yes, through our digital printing process, we can offer low MOQs, making it perfect for seasonal scents, limited editions, or small boutique candle makers. We can also scale to millions of labels using our high-speed flexographic presses as your brand grows." },
];

const CandleLabels = () => {
    const [selectedImage, setSelectedImage] = useState(0);
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);

    const productImages = [
        { src: labelsImg, alt: "Candle Labels - Main" },
        { src: displayImg, alt: "Custom Candle Display Boxes" },
        { src: jarImg, alt: "Custom Candle Jar Boxes" },
        { src: twoPieceImg, alt: "Two Piece Candle Boxes" },
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
                <title>Custom Candle Labels | Heat-Resistant Jar Labels | CustomPackMakers</title>
                <meta name="description" content="Premium custom candle labels. Heat-resistant adhesives, luxury foil finishes, and oil-proof materials. Perfect for glass jars and tins. Get your custom quote today!" />
                <meta name="keywords" content="custom candle labels, heat resistant labels, jar labels, oil proof labels, luxury candle stickers, CLP labels" />
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
                            <BreadcrumbItem><BreadcrumbPage>Candle Labels</BreadcrumbPage></BreadcrumbItem>
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
                                <span className="text-primary">Custom</span> Candle Labels
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Define your brand identity with precision. Our high-performance candle labels are engineered for heat resistance and premium aesthetics, ensuring your scent story is told beautifully.
                            </p>
                            <div className="pt-2">
                                <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300" onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}>
                                    Get a Quote
                                </Button>
                            </div>
                        </div>
                        <div className="lg:col-span-5 relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-muted group">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-fuchsia-100">
                                <img src={labelsImg} alt="Custom Candle Labels" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 max-w-3xl leading-tight">High-Performance Labelling Solutions for the Fragrance Industry</h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>Our <strong className="text-foreground">custom candle labels</strong> are more than just stickers; they are a critical component of your product's safety and branding. We utilize specialized adhesives designed to maintain a permanent bond on glass, metal, and ceramic surfaces, even when subjected to the prolonged heat of a burning candle. This heat-stability ensures your brand message remains crisp and aligned throughout the entire lifecycle of the product.</p>
                        <p>We provide a comprehensive range of <strong className="text-foreground">premium candle stickers</strong>, from oil-proof vinyls for essential oil-rich waxes to textured artisanal papers that offer a tactile luxury feel. With options for metallic foil stamping, high-gloss spot UV, and precision die-cutting, we provide the tools you need to create a label that captures the essence of your fragrance and stands out in a competitive boutique market.</p>
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
                                        <div className="grid grid-cols-2 gap-3">
                                            <div className="space-y-1.5"><Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">Width (in)</Label><Input id="width" type="number" placeholder="3" className="h-9 bg-white" /></div>
                                            <div className="space-y-1.5"><Label htmlFor="height" className="text-xs font-semibold text-muted-foreground">Height (in)</Label><Input id="height" type="number" placeholder="4" className="h-9 bg-white" /></div>
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">The Science and Artistry of High-Quality Candle Labels</h2>
                    <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="[&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-8 [&>h3]:mb-3 [&>h3]:first:mt-0 [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-5 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-5 [&>ul]:space-y-2 [&>ul>li]:text-[15px] [&>ul>li]:text-slate-600">
                            <p>For a candle maker, the label is the primary storyteller. It communicates the fragrance notes, the brand's origin, and the product's quality levels in a single glance. However, in the candle industry, a label must be much more than just a graphic element; it must be a high-performance technical component. Candle labels face unique environmental stressors, primarily intense heat and potential contact with fragrant oils. Custom candle labels from CustomPackMakers are engineered specifically to thrive under these conditions, combining artisanal visual beauty with industrial-grade durability to ensure your brand remains pristine from the shelf to the final burn.</p>
                            <p>The challenge of candle labeling lies in the interaction between the adhesive, the face stock, and the surface of the container (usually glass or metal). As a candle burns, the jar heats up significantly. A non-specialized label will often experience 'adhesive failure,' where the edges begin to curl or lift, or 'bubbling,' where trapped air or moisture expands under the heat. Our labeling solutions solve these issues through specialized material science and precision manufacturing.</p>
                            <h3>Heat-Resistant Adhesives and Oil-Proof Stocks</h3>
                            <p>The core of a high-performance candle label is the adhesive. We utilize specialized 'high-tack' and heat-stabilized acrylic adhesives that are formulated to maintain a permanent bond even at elevated temperatures. These adhesives are tested to ensure they don't yellow or degrade over time, which is critical for long-shelf-life luxury candles. Furthermore, we consider the surface energy of common candle vessels, ensuring our labels adhere perfectly to textured ceramics, smooth glass, or brushed metal tins.</p>
                            <p>The face stock (the material you print on) is equally important. Fragrant oils used in candle wax can sometimes traces onto the exterior of the container during the pouring process or through capillary action over time. A standard paper label will absorb these oils, leading to translucent grease spots that ruin the aesthetic. We recommend our BOPP (Biaxially Oriented Polypropylene) or vinyl stocks for maximum oil resistance. These materials are wiped-clean, waterproof, and offer exceptional color vibrancy. For brands that demand a paper feel, we offer oil-resistant coatings that provide a natural look with industrial-level protection.</p>
                            <h3>Artisan Finishes for Boutique Branding</h3>
                            <p>In the premium fragrance market, the tactile quality of the label is just as important as the visual design. We offer a full suite of artisan finishes that elevate your labels from functional stickers to luxury brand elements. Metallic foil stamping—available in gold, silver, rose gold, and holo—provides a reflective shimmer that communicates high value. Debossing and embossing add physical depth, encouraging the customer to touch the label and engage with the product's tactile story.</p>
                            <p>We also specialize in high-resolution digital printing, which is ideal for complex, multi-colored scent illustrations and small-batch seasonal runs. Our spot UV capabilities allow you to add high-gloss patterns to a matte label, creating a sophisticated contrast that catches the light in a retail setting. Whether you are aiming for a minimalist 'no-label' look on clear glass or a full-wrap maximalist artistic statement, our finishing techniques provide the professional edge your brand needs.</p>
                            <h3>Compliance and Safety: CLP and Warning Labels</h3>
                            <p>Beyond the primary branding, candle labels carry a heavy burden of regulatory compliance. CLP (Classification, Labelling and Packaging) requirements are strictly enforced, and failure to include correct safety warnings can lead to legal issues and retail rejection. CustomPackMakers simplifies this process. We can integrate your required safety information into your primary label design or produce coordinated secondary labels for the base of your jars. Our high-density printing ensures that even the smallest safety text remains perfectly legible, meeting all legal standards without compromising your brand's aesthetic.</p>
                            <p>Finally, we understand that for boutique labels, flexibility and speed are key. Our digital presses allow for low minimum order quantities and rapid turnaround times, perfect for testing new scents or launching seasonal collections. As your brand scales, our flexographic capabilities provide massive cost efficiencies for large-scale retail distribution. When you choose CustomPackMakers, you are choosing a partner who understands that every label is a promise of quality to your customer, and we are dedicated to helping you keep that promise beautifully and safely.</p>
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
                                { color: "primary", iconPath: "M13 10V3L4 14h7v7l9-11h-7z", h: "Heat-Resistant Premium Materials", p: "We utilize specialized heat-resistant cardstock and adhesives that maintain structural integrity near warm candle production lines. Our coatings are engineered to prevent warping or yellowing, ensuring your label packaging preserves its pristine look even in humid environments or variable storage temperatures across global distribution channels from our facility." },
                                { color: "amber-500", iconPath: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z", h: "Luxury Finishes and Customization", p: "From elegant gold foiling to high-depth embossing and soft-touch lamination, we offer a full suite of artisan finishes for candle labels. These luxury details elevate your brand positioning, transforming functional labels into tactile brand experiences that justify premium price points and captivate the attention of sophisticated retail candle consumers everywhere." },
                                { color: "emerald-500", iconPath: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", h: "Protective Inserts for Glass Fragility", p: "Our structural engineers design precision-cut custom inserts using foam or reinforced cardboard to cradle delicate glass candle jars. These inserts act as a shock absorber, preventing internal movement and significantly reducing the risk of breakage during transit, ensuring your labeled product arrives in perfect condition for the customer." },
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
                                <img src={labelsImg} alt="Premium Label Packaging Excellence" className="w-full h-full object-cover" />
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
                                <img src={labelsImg} alt="Differentiate Your Candle Label Brand" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                            </div>
                            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-60" />
                            <div className="absolute -z-10 -top-8 -right-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl opacity-60" />
                        </div>
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">Differentiate Your <span className="text-primary">Label Brand</span> From Others</h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">In the precision wax market, your custom label is a symbol of identity quality. CustomPackMakers engineers candle labels that utilize high-performance materials and artisan design to tell your brand story while resisting heat. Our focus on extreme durability and professional aesthetic ensures your labels remain perfect while your brand defines the artisanal standard.</p>
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
                        <div className="relative w-full max-md mx-auto aspect-square rounded-2xl overflow-hidden shadow-md">
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

export default CandleLabels;
