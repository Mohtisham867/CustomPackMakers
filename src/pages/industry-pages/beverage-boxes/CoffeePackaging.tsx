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

import productHero from "@/assets/beverage-boxes/Coffee packaging.png";
import img2 from "@/assets/beverage-boxes/tea-boxes.webp";
import img3 from "@/assets/beverage-boxes/wine-boxes.webp";
import img4 from "@/assets/beverage-boxes/juice-boxes.webp";
import img5 from "@/assets/beverage-boxes/soda-packaging.webp";
import FAQimage from "@/assets/FAQ-image.png";

import coffeeImg from "@/assets/beverage-boxes/Coffee packaging.png";
import teaImg from "@/assets/beverage-boxes/tea-boxes.webp";
import wineImg from "@/assets/beverage-boxes/Wine boxes.png";
import beerImg from "@/assets/beverage-boxes/beer-packaging.webp";
import juiceImg from "@/assets/beverage-boxes/juice-boxes.webp";
import sodaImg from "@/assets/beverage-boxes/soda-packaging.webp";
import energyImg from "@/assets/beverage-boxes/energy-drink-boxes.webp";
import waterImg from "@/assets/beverage-boxes/water-bottle-packaging.webp";
import milkImg from "@/assets/beverage-boxes/milk-packaging.webp";
import smoothieImg from "@/assets/beverage-boxes/smoothie-packaging.png";

const carouselProducts = [
    { name: "Coffee Packaging", image: coffeeImg, description: "Airtight coffee packaging with degassing valves and premium branding.", link: "/industries/beverage-boxes/coffee-packaging" },
    { name: "Tea Boxes", image: teaImg, description: "Elegant tea packaging with humidity barriers and compartments.", link: "/industries/beverage-boxes/tea-boxes" },
    { name: "Wine Boxes", image: wineImg, description: "Luxury wine packaging with UV protection and vibration-proof inserts.", link: "/industries/beverage-boxes/wine-boxes" },
    { name: "Beer Packaging", image: beerImg, description: "Craft beer carriers with moisture-resistant walls and bold branding.", link: "/industries/beverage-boxes/beer-packaging" },
    { name: "Juice Boxes", image: juiceImg, description: "FDA-safe juice packaging with vibrant CMYK printing.", link: "/industries/beverage-boxes/juice-boxes" },
    { name: "Soda Packaging", image: sodaImg, description: "Structural multi-pack soda carriers for carbonated beverage loads.", link: "/industries/beverage-boxes/soda-packaging" },
    { name: "Energy Drink Boxes", image: energyImg, description: "Bold energy drink packaging with impact-resistant walls.", link: "/industries/beverage-boxes/energy-drink-boxes" },
    { name: "Water Bottle Packaging", image: waterImg, description: "Eco-recycled water packaging with multi-pack tray designs.", link: "/industries/beverage-boxes/water-bottle-packaging" },
    { name: "Milk Packaging", image: milkImg, description: "Refrigeration-safe dairy packaging with opaque UV barriers.", link: "/industries/beverage-boxes/milk-packaging" },
    { name: "Smoothie Packaging", image: smoothieImg, description: "Insulated smoothie carriers with fresh brand aesthetics.", link: "/industries/beverage-boxes/smoothie-packaging" },
];

const faqs = [
    { id: "item-1", q: "What materials are used for coffee packaging?", a: "We use multi-layer kraft-foil laminates, SBS cardstock, and FSC-certified corrugated board tailored for coffee packaging. Food-grade PE liners and foil barriers block oxygen and moisture, preserving roast freshness. All materials are FDA-compliant and suitable for direct food-contact applications." },
    { id: "item-2", q: "Can you add a degassing valve to coffee bags or boxes?", a: "Yes. We integrate one-way degassing valves into coffee pouches and box inserts, allowing CO₂ released by freshly roasted beans to escape without permitting oxygen ingress. This is critical for maintaining roast quality and extending shelf life from packaging date." },
    { id: "item-3", q: "Do you offer nitrogen-flush compatible coffee packaging?", a: "Absolutely. Our nitrogen-flush compatible packaging uses hermetically sealed seams and pressure-rated foil laminates, extending coffee shelf life by up to 12 months while preventing oxidation and staling throughout distribution." },
    { id: "item-4", q: "Can I get full-color printing on coffee boxes?", a: "Yes. We print in full CMYK plus Pantone color matching on all coffee packaging types. Finishing options include matte lamination, gloss UV, spot UV, foil stamping, and embossing on both retail boxes and wholesale bulk units." },
    { id: "item-5", q: "What is the minimum order quantity for coffee packaging?", a: "Our standard minimum order quantity is 200 units for most coffee packaging formats. Wholesale pricing tiers activate at 500, 1,000, and 5,000 units with progressively larger volume discounts and our standard 8–10 business day turnaround." },
];

const CoffeePackaging = () => {
    const [selectedImage, setSelectedImage] = useState(0);
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);

    const productImages = [
        { src: productHero, alt: "Coffee Packaging - Main View" },
        { src: img2, alt: "Coffee Packaging - Gallery 2" },
        { src: img3, alt: "Coffee Packaging - Gallery 3" },
        { src: img4, alt: "Coffee Packaging - Gallery 4" },
        { src: img5, alt: "Coffee Packaging - Gallery 5" },
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
                <title>Custom Coffee Packaging | Airtight Coffee Boxes | CustomPackMakers</title>
                <meta name="description" content="Premium custom coffee packaging with degassing valves, nitrogen-flush compatibility, and full-color branding. FDA-approved wholesale coffee boxes with 8–10 day turnaround." />
                <meta name="keywords" content="custom coffee packaging, coffee boxes, coffee bag packaging, wholesale coffee packaging, branded coffee boxes" />
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
                            <BreadcrumbItem><BreadcrumbLink asChild><Link to="/industries/beverage-boxes">Beverage Boxes</Link></BreadcrumbLink></BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem><BreadcrumbPage>Coffee Packaging</BreadcrumbPage></BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </div>

            <section className="py-8 bg-background">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-7 space-y-6">
                            <div className="w-20 h-1.5 bg-primary rounded-full"></div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight">
                                <span className="text-primary">Custom</span> Coffee Packaging
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Airtight, freshness-locking coffee packaging engineered for roasters, cafés, and retail brands. Degassing valves, nitrogen-flush compatibility, and full-color branding that commands shelf presence.
                            </p>
                            <div className="pt-2">
                                <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300" onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}>
                                    Get a Quote
                                </Button>
                            </div>
                        </div>
                        <div className="lg:col-span-5 relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-muted group">
                            <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-amber-100">
                                <img src={productHero} alt="Custom Coffee Packaging" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 max-w-3xl">Coffee Packaging Engineered for Freshness, Branding, and Shelf Dominance</h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>Our <strong className="text-foreground">custom coffee packaging</strong> is precision-built for specialty roasters, private-label brands, and café chains that refuse to compromise on freshness or aesthetics. Each solution uses multi-layer foil-kraft laminates with hermetically sealed seams that block oxygen, UV light, and moisture — preserving the full aromatic profile of your roast from production date to customer's cup.</p>
                        <p>From individual retail pouches with one-way degassing valves to wholesale bulk coffee boxes and gift sets, our <strong className="text-foreground">wholesale coffee packaging</strong> accommodates every SKU and distribution channel. Full-color CMYK printing, Pantone matching, matte lamination, and spot UV finishing transform your packaging into a premium brand statement that drives repeat purchases.</p>
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
                                            <div className="space-y-1.5"><Label htmlFor="length" className="text-xs font-semibold text-muted-foreground">L (in)</Label><Input id="length" type="number" placeholder="12" className="h-9 bg-white" /></div>
                                            <div className="space-y-1.5"><Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label><Input id="width" type="number" placeholder="8" className="h-9 bg-white" /></div>
                                            <div className="space-y-1.5"><Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">D (in)</Label><Input id="depth" type="number" placeholder="4" className="h-9 bg-white" /></div>
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">The Complete Guide to Custom Coffee Packaging</h2>
                    <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="[&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-8 [&>h3]:mb-3 [&>h3]:first:mt-0 [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-5 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-5 [&>ul]:space-y-2 [&>ul>li]:text-[15px] [&>ul>li]:text-slate-600">
                            <p>The global specialty coffee industry is valued at over $45 billion and growing at double digits annually. Within this intensely competitive landscape, the packaging surrounding your roast is not secondary — it is a primary sales driver, a freshness guarantee, and your most persistent brand ambassador. Custom coffee packaging from CustomPackMakers is engineered at the intersection of food science and brand design, delivering solutions that protect your product's aromatic integrity while commanding attention on retail shelves, subscription boxes, and café countertops.</p>
                            <p>Coffee is among the most chemically sensitive food products in retail. Within hours of roasting, beans begin releasing CO₂ through degassing while simultaneously becoming vulnerable to four primary freshness enemies: oxygen, moisture, light, and heat. Each of these degradation vectors must be addressed through deliberate packaging engineering. Our solutions provide comprehensive multi-barrier protection addressing all four vectors simultaneously, ensuring your roast reaches your customer at peak flavor and aroma.</p>
                            <h3>Airtight Sealing Technology and Degassing Valves</h3>
                            <p>The most critical technical feature in any premium coffee package is seam integrity and gas management. Our packaging uses three-layer hermetically sealed seams with continuous seal integrity testing at production, ensuring zero oxygen ingress through packaging walls or closures under standard distribution conditions.</p>
                            <ul>
                                <li><strong>One-Way Degassing Valves:</strong> Freshly roasted coffee releases substantial CO₂ for 24–72 hours post-roast. Our pressure-release degassing valves allow this gas to escape without permitting oxygen ingress, enabling brands to package immediately after roasting without compromising seal integrity.</li>
                                <li><strong>Hermetic Heat Seals:</strong> Our four-side seal and pillow bag formats use impulse heat sealing with continuous pressure verification, producing seams tested to 15 PSI minimum burst pressure for reliable oxygen exclusion throughout stated shelf life.</li>
                                <li><strong>Nitrogen Flush Compatibility:</strong> For maximum shelf life extension, our packaging supports MAP nitrogen flush protocols, displacing oxygen to under 0.5% residual concentration and extending roasted coffee shelf life to 12+ months without refrigeration.</li>
                                <li><strong>Resealable Closures:</strong> Retail coffee bags feature pressure-sensitive zipper closures allowing consumers to reseal packages after opening and maintain freshness for the duration of the bag's use period.</li>
                            </ul>
                            <h3>Barrier Materials: Multi-Layer Laminate Engineering</h3>
                            <p>Coffee packaging barrier performance is determined by the laminate structure of the material itself. We engineer custom laminate specifications for each client based on product type, shelf life requirement, and distribution environment:</p>
                            <ul>
                                <li><strong>PET/Al/PE Tri-Laminate:</strong> Our highest-performance barrier structure combines biaxially oriented PET film for mechanical strength, aluminum foil for complete light and oxygen exclusion, and food-grade PE for heat sealability and food-contact compliance. Ideal for whole bean and ground coffee requiring 12+ month shelf life.</li>
                                <li><strong>Kraft/LDPE/Al/PE Quad-Layer:</strong> For brands seeking a natural aesthetic, our kraft outer-face laminates with internal aluminum foil barriers deliver premium protection while maintaining the artisanal visual presentation that specialty coffee consumers expect.</li>
                                <li><strong>Metallized PET/PE Bi-Laminate:</strong> A cost-effective mid-range barrier option using vacuum-metallized PET film instead of solid aluminum foil, providing excellent moisture vapor transmission rates (MVTR below 0.5 g/m²/day) at reduced material cost for higher-velocity SKUs.</li>
                                <li><strong>Clear BiOPP/PE Laminate:</strong> For brands requiring product visibility, we offer clear window structures with EVOH oxygen barrier layers that provide visual access while maintaining freshness protection suitable for 6-month shelf life profiles.</li>
                            </ul>
                            <h3>UV Protection and Light Barrier Performance</h3>
                            <p>Light exposure, particularly ultraviolet wavelengths, drives oxidative rancidity in roasted coffee oils within days. Retail environments with fluorescent or LED lighting are particularly aggressive in accelerating this degradation. Our UV-barrier packaging systems provide comprehensive light protection for retail, DTC, and subscription applications.</p>
                            <ul>
                                <li><strong>Aluminum Foil Barrier:</strong> Provides 100% light exclusion across all wavelengths including UV, visible, and infrared spectra, delivering maximum protection for premium single-origin and limited-edition roasts.</li>
                                <li><strong>UV-Absorbing Coating:</strong> For packaging requiring partial transparency for product visibility, we apply UV-absorbing clear coatings that block over 99% of UVA/UVB radiation while maintaining window clarity.</li>
                                <li><strong>Opaque Kraft Exterior:</strong> Our natural kraft laminate structures inherently block visible light through the exterior face while providing a premium aesthetic that resonates with specialty coffee consumers.</li>
                            </ul>
                            <h3>Custom Printing, Branding, and Finishing</h3>
                            <p>Coffee packaging must simultaneously stand out on a crowded retail shelf while communicating artisanal quality and origin story. Our production capabilities support both imperatives simultaneously with equal technical precision and aesthetic excellence.</p>
                            <ul>
                                <li><strong>10-Color Rotogravure Printing:</strong> Our flagship coffee packaging printing process delivers photographic color reproduction with line ruling up to 200 LPI, enabling intricate origin maps, roast profile graphics, and brand illustration that digital printing cannot match at production volume.</li>
                                <li><strong>Matte Soft-Touch Lamination:</strong> The industry-standard premium finish for specialty coffee packaging, soft-touch matte communicates quality through tactile feel and eliminates the commodity impression associated with glossy packaging finishes.</li>
                                <li><strong>Spot UV and Foil Details:</strong> Logo badges, origin labels, and roast ratings are enhanced through spot UV gloss application or hot foil stamping in gold, silver, or custom colors, creating visual hierarchy that guides the consumer's attention.</li>
                                <li><strong>Full-Color CMYK and Pantone Matching:</strong> Achieve exact brand color consistency across all packaging runs — critical for subscription coffee brands with strict brand standards and seasonal roast label rotations.</li>
                            </ul>
                            <h3>Wholesale Scalability and Turnaround</h3>
                            <p>Coffee brands operate at high velocity with frequent seasonal releases, origin rotations, and limited-edition roasts. Our production infrastructure supports this through flexible minimum order quantities starting at 200 units, rapid digital proofing within 48 hours, and standard production turnaround of 8–10 business days. For roasters scaling from local markets to national retail distribution, our tiered wholesale pricing provides competitive economics at every volume from proof-of-concept runs to multi-pallet monthly replenishment orders.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-8 bg-accent/20">
                <div className="container mx-auto px-[5vw]">
                    <div className="mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Related Beverage Products</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl">Explore our complete range of premium beverage packaging solutions designed to protect and showcase your drinks.</p>
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

            <section className="py-12 relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #fafafa 0%, #f4f6ff 60%, #f0fdf8 100%)' }}>
                <div className="absolute top-0 left-0 w-80 h-80 bg-primary/4 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-300/8 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl pointer-events-none" />
                <div className="container mx-auto px-[30px] relative z-10">
                    <div className="text-center mb-14">
                        <span className="inline-block text-xs font-semibold tracking-widest text-primary uppercase mb-3 bg-primary/10 px-4 py-1.5 rounded-full">Our Promise</span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">Why Brands Choose <span className="text-primary">CustomPackMakers</span></h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">We combine craftsmanship, speed, and reliability to deliver packaging that makes your brand unforgettable.</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">
                        <div className="space-y-5">
                            {[
                                { color: "primary", iconPath: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z", h: "Superior Moisture Resistance", p: "Our PE-extruded multi-layer laminates and hermetically sealed seams block all moisture ingress, protecting coffee grounds from humidity-driven staling. Foil-barrier walls maintain internal relative humidity below 5%, ensuring roast freshness throughout retail shelf life and DTC distribution cycles globally." },
                                { color: "amber-500", iconPath: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z", h: "Structural Integrity for Heavy Loads", p: "Reinforced corrugated E-flute bases and corner stacking columns transfer weight through box structure, not product. This prevents compression damage during pallet stacking and wholesale distribution, ensuring every unit arrives shelf-ready with structural integrity intact for high-volume retail replenishment." },
                                { color: "emerald-500", iconPath: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z", h: "Eco-Friendly Material Sourcing", p: "All coffee packaging substrates are sourced from FSC-certified forests with full chain-of-custody documentation. Soy-based inks, water-based coatings, and compostable kraft options ensure your brand meets the sustainability expectations of specialty coffee consumers and modern retail partner ESG requirements." },
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
                                <img src={productHero} alt="Premium Custom Coffee Packaging" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-7"><p className="text-white font-bold text-lg leading-snug mb-1">Trusted by 500+ Brands</p><p className="text-white/75 text-sm">Delivering premium packaging across North America</p></div>
                            </div>
                            <div className="absolute top-4 -right-2 lg:-right-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80 backdrop-blur-sm"><p className="text-2xl font-bold text-primary leading-none">98%</p><p className="text-xs text-slate-400 mt-1 font-medium">Satisfaction Rate</p></div>
                            <div className="absolute bottom-4 -left-2 lg:-left-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80 backdrop-blur-sm"><p className="text-2xl font-bold text-emerald-500 leading-none">8–10</p><p className="text-xs text-slate-400 mt-1 font-medium">Day Turnaround</p></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-10 lg:py-12 bg-white overflow-hidden relative">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="relative group">
                            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] border border-primary/20 shadow-2xl transform transition-transform duration-700 hover:scale-[1.02]">
                                <img src={productHero} alt="Differentiate Your Coffee Brand" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                            </div>
                            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-60" />
                            <div className="absolute -z-10 -top-8 -right-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl opacity-60" />
                        </div>
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">Differentiate Your <span className="text-primary">Coffee</span> From Others</h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">CustomPackMakers builds coffee packaging where food science meets visual storytelling. Our airtight barrier laminates, degassing valve systems, and full-color brand printing ensure your roast arrives fresh and your brand stands out. Every package is an opportunity to convert a first-time buyer into a loyal subscriber.</p>
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
                                <p className="text-base text-muted-foreground">We're confident that you will love our products and service.</p>
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
                        <div className="relative w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden">
                            <img src={FAQimage} alt="Coffee Packaging FAQ" className="absolute inset-0 w-full h-full object-cover" />
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

export default CoffeePackaging;
