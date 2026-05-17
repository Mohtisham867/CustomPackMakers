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

import productHero from "@/assets/industry/beverage-boxes/milk-packaging.webp";
import img2 from "@/assets/industry/beverage-boxes/juice-boxes.webp";
import img3 from "@/assets/industry/beverage-boxes/smoothie-packaging.webp";
import img4 from "@/assets/industry/beverage-boxes/water-bottle-packaging.webp";
import img5 from "@/assets/industry/beverage-boxes/tea-boxes.webp";
import FAQimage from "@/assets/FAQ-image.webp";

import coffeeImg from "@/assets/industry/beverage-boxes/Coffee packaging.webp";
import teaImg from "@/assets/industry/beverage-boxes/tea-boxes.webp";
import wineImg from "@/assets/industry/beverage-boxes/Wine boxes.webp";
import beerImg from "@/assets/industry/beverage-boxes/beer-packaging.webp";
import juiceImg from "@/assets/industry/beverage-boxes/juice-boxes.webp";
import sodaImg from "@/assets/industry/beverage-boxes/soda-packaging.webp";
import energyImg from "@/assets/industry/beverage-boxes/energy-drink-boxes.webp";
import waterImg from "@/assets/industry/beverage-boxes/water-bottle-packaging.webp";
import milkImg from "@/assets/industry/beverage-boxes/milk-packaging.webp";
import smoothieImg from "@/assets/industry/beverage-boxes/smoothie-packaging.webp";

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
    { id: "item-1", q: "What light barrier options exist for milk packaging?", a: "We offer three light barrier levels for milk packaging: opaque white PE-extruded liner blocking 100% of visible and UV light, gray PE liner blocking 95%+ of damaging wavelengths, and aluminum foil-laminated board providing absolute light exclusion. All options prevent riboflavin photodegradation that causes the characteristic light-struck off-flavor in exposed dairy products." },
    { id: "item-2", q: "Do you produce FDA-compliant milk packaging materials?", a: "Yes. All milk packaging materials comply with FDA 21 CFR food contact regulations for dairy products. PE inner liners, paperboard substrates, inks, and adhesives all carry food-contact safety documentation. Our dairy packaging materials also comply with EU regulation (EC) No 1935/2004 for brands serving cross-border markets." },
    { id: "item-3", q: "Can milk packaging maintain integrity during refrigerated distribution?", a: "Yes. Wet-strength PE-coated exterior corrugated surfaces maintain structural rigidity through refrigerated truck distribution and cold-chain retail environments where condensation is continuous. Sealed die-cut edges prevent moisture ingress into corrugated medium, maintaining case compression strength throughout the complete refrigerated distribution and retail display cycle." },
    { id: "item-4", q: "What printing options work for dairy brand packaging?", a: "We offer full-color offset lithographic printing for premium dairy brands requiring photographic dairy farm and countryside imagery, and flexographic printing for volume dairy case production. Matte and satin lamination finishes convey the freshness and naturalness associated with premium dairy brand values in competitive retail environments." },
    { id: "item-5", q: "What is the minimum order for custom milk packaging?", a: "Standard milk packaging minimums start at 200 units for retail carton secondary packaging formats. Master shipper case configurations begin at 300 units. Volume pricing tiers provide cost reductions at 500, 1,000, and 5,000-unit order levels. Standard production turnaround is 8–10 business days after digital proof approval and order confirmation." },
];

const MilkPackaging = () => {
    const [selectedImage, setSelectedImage] = useState(0);
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);

    const productImages = [
        { src: productHero, alt: "Milk Packaging - Main View" },
        { src: img2, alt: "Milk Packaging - Gallery 2" },
        { src: img3, alt: "Milk Packaging - Gallery 3" },
        { src: img4, alt: "Milk Packaging - Gallery 4" },
        { src: img5, alt: "Milk Packaging - Gallery 5" },
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
                <title>Custom Milk Packaging | Dairy Packaging Boxes | CustomPackMakers</title>
                <meta name="description" content="Custom milk packaging with opaque UV light barriers, FDA-compliant food-contact materials, and refrigeration-safe corrugated structures. Wholesale dairy packaging for retail and DTC channels." />
                <meta name="keywords" content="custom milk packaging, dairy packaging boxes, milk carton packaging, wholesale dairy boxes, branded milk packaging" />
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
                            <BreadcrumbItem><BreadcrumbPage>Milk Packaging</BreadcrumbPage></BreadcrumbItem>
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
                                <span className="text-primary">Custom</span> Milk Packaging
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Opaque UV light barrier dairy packaging with FDA-compliant food-contact materials, refrigeration-resistant corrugated structures, and credible natural brand printing for premium dairy brands.
                            </p>
                            <div className="pt-2">
                                <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300" onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}>
                                    Get a Quote
                                </Button>
                            </div>
                        </div>
                        <div className="lg:col-span-5 relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-muted group">
                            <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-slate-100">
                                <img src={productHero} alt="Custom Milk Packaging" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 max-w-3xl">Dairy Packaging Engineered for Light Exclusion, FDA Compliance, and Cold-Chain Performance</h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>Our <strong className="text-foreground">custom milk packaging</strong> is engineered for dairy producers, specialty milk brands, and plant-based milk manufacturers that require secondary packaging to protect dairy products from the specific degradation mechanisms that affect milk quality in retail environments: light-induced riboflavin photodegradation causing off-flavor development, refrigeration condensation weakening structural integrity, and food-contact regulatory compliance requirements for materials touching dairy food surfaces.</p>
                        <p>From single-bottle retail carriers to 12-unit master shipper cases, our <strong className="text-foreground">wholesale dairy packaging</strong> range accommodates standard milk gable-top cartons, HDPE rounds, and glass milk bottle formats in retail case configurations. Clean, natural brand printing with farm imagery and verdant countryside aesthetics communicates the freshness and origin authenticity that premium dairy consumers increasingly demand.</p>
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
                                            <div className="space-y-1.5"><Label htmlFor="length" className="text-xs font-semibold text-muted-foreground">L (in)</Label><Input id="length" type="number" placeholder="10" className="h-9 bg-white" /></div>
                                            <div className="space-y-1.5"><Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label><Input id="width" type="number" placeholder="7" className="h-9 bg-white" /></div>
                                            <div className="space-y-1.5"><Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">D (in)</Label><Input id="depth" type="number" placeholder="8" className="h-9 bg-white" /></div>
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">The Complete Guide to Custom Milk Packaging</h2>
                    <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="[&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-8 [&>h3]:mb-3 [&>h3]:first:mt-0 [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-5 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-5 [&>ul]:space-y-2 [&>ul>li]:text-[15px] [&>ul>li]:text-slate-600">
                            <p>Dairy packaging faces a combination of food safety, product quality, and distribution performance requirements that create one of the most technically demanding packaging briefs in the beverage industry. Milk is a nutritionally complex, light-sensitive, and thermally degradable food product that requires packaging systems designed from the ground up to protect its quality throughout cold chain distribution from dairy to consumer. Custom milk packaging from CustomPackMakers is engineered with dairy science at its core — addressing the specific degradation mechanisms that affect milk flavor, nutrition, and visual appearance throughout the retail journey.</p>
                            <p>The modern dairy market has evolved from commodity milk in standard white cartons to a premium, differentiated category encompassing grass-fed, organic, small-farm, A2 protein, and plant-based milk alternatives — each positioning on specific quality, origin, or functional benefit claims that packaging must credibly communicate and physically protect. Our milk packaging range serves every segment of this market with tailored material specifications and brand design capabilities.</p>
                            <h3>Light Barrier Engineering: Preventing Riboflavin Photodegradation</h3>
                            <p>Light oxidation is the primary quality degradation mechanism in retail-displayed milk. Riboflavin (vitamin B2), naturally present in milk at 1.8 mg/L, functions as a photosensitizer when exposed to visible and UV light — catalyzing the oxidation of amino acids to produce aldehydes and ketones responsible for the characteristic "light-struck" or "sunlight flavor" off-taste that consumers commonly attribute to poor milk quality. Secondary packaging that blocks light exposure is essential for maintaining the sensory quality claimed on primary milk carton packaging:</p>
                            <ul>
                                <li><strong>Opaque White PE-Extruded Liner:</strong> Our standard milk packaging light barrier uses opaque white polyethylene extruded onto inner packaging surfaces, blocking 100% of visible light wavelengths responsible for riboflavin-mediated oxidation initiation in whole, reduced-fat, and skim milk varieties.</li>
                                <li><strong>Gray UV-Blocking Liner:</strong> For packaging with exterior printing requiring specific color accuracy, gray PE liners blocking 95%+ of damaging UV and visible wavelengths provide near-complete light protection with minimal impact on print color rendering on adjacent outer panels.</li>
                                <li><strong>Aluminum Foil Laminate:</strong> For our highest-specification light exclusion applications — premium organic dairy gift sets, glass milk bottle retail carriers requiring absolute light protection — aluminum foil-laminated boards provide wavelength-independent light exclusion across the complete UV-visible-IR spectrum.</li>
                                <li><strong>Light-Blocking Transit Outers:</strong> Master shipper cases for milk retail use full-print exterior corrugated with opaque liner substrates ensuring no light penetration during transport to retail, even under high-intensity warehouse fluorescent lighting during receiving and staging operations.</li>
                            </ul>
                            <h3>FDA and Dairy Regulatory Compliance</h3>
                            <p>Milk is regulated under multiple federal and state-level food safety frameworks requiring that all food-contact packaging materials meet specific safety standards for the dairy category. Our milk packaging compliance documentation includes:</p>
                            <ul>
                                <li><strong>FDA 21 CFR 176.170 Paperboard Compliance:</strong> All paperboard substrates meet FDA 176.170 thresholds for food-contact paper and paperboard, with complete extractable content testing documentation confirming compliance for all dairy-contact surface materials.</li>
                                <li><strong>Dairy-Grade PE Inner Liner:</strong> Food-grade polyethylene inner liners are manufactured with dairy-specific formulations verified against FDA food contact substance requirements for high-protein, high-fat aqueous food products within the pH 4.5–7.0 range characteristic of dairy products.</li>
                                <li><strong>Allergen-Free Production:</strong> Our dairy packaging materials are produced in allergen-controlled environments with documented cleaning protocols between production runs, supporting dairy brand allergen management programs and cross-contamination risk prevention in facilities producing multiple allergenic product lines.</li>
                            </ul>
                            <h3>Refrigerated Cold-Chain Structural Performance</h3>
                            <p>Milk distribution operates exclusively within the temperature-controlled cold chain from dairy farm to retail cooler, exposing secondary packaging to prolonged condensation exposure at every stage. Our cold-chain structural engineering for milk packaging uses PE-extruded outer liner surfaces that shed condensation without absorption, wet-strength corrugated medium maintaining flat crush strength above specification minimums through extended refrigeration exposure, and sealed die-cut edges preventing the capillary wicking that destroys conventional corrugated integrity in wet environments. Milk master cases are tested for stacking performance under simulated cold chain conditions — 4°C, 95% relative humidity, 8-layer stacking — ensuring that bottom-layer cases in refrigerated distribution trailers maintain structural competence throughout the complete distribution event from dairy loading dock to retail cold room delivery.</p>
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
                                { color: "primary", iconPath: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z", h: "Opaque UV Light Barrier Protection", p: "Opaque white PE-extruded inner liners block 100% of UV and visible light wavelengths that catalyze riboflavin photodegradation in exposed dairy products. Our light barrier specifications prevent light-struck off-flavor development throughout retail display periods, protecting both product quality and the brand's premium freshness promise at point of sale." },
                                { color: "amber-500", iconPath: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z", h: "Cold-Chain Structural Integrity", p: "PE-coated exterior corrugated liners and sealed die-cut edges maintain structural rigidity through continuous cold-chain condensation exposure from dairy loading dock to retail cooler. Master cases are tested at 4°C and 95% relative humidity under 8-layer stacking loads that simulate real-world cold-chain distribution events without case failure." },
                                { color: "emerald-500", iconPath: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z", h: "FSC-Certified Natural Dairy Aesthetics", p: "FSC-certified paperboard and water-based inks communicate genuine eco credentials alongside pasture, countryside, and dairy farm brand aesthetics that organic and grass-fed dairy consumers trust. Allergen-controlled production environments support dairy brand compliance programs and cross-contamination risk documentation for retail partner food safety audit requirements." },
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
                                <img src={productHero} alt="Premium Custom Milk Packaging" className="w-full h-full object-cover" />
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
                                <img src={productHero} alt="Differentiate Your Dairy Brand" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                            </div>
                            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-60" />
                            <div className="absolute -z-10 -top-8 -right-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl opacity-60" />
                        </div>
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">Differentiate Your <span className="text-primary">Dairy Brand</span> From Others</h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">CustomPackMakers engineers milk packaging where dairy science meets brand authenticity. Opaque UV barriers, cold-chain-rated corrugated structures, and FSC-certified natural materials protect your dairy quality promise and communicate the premium origin story that converts commodity milk buyers into loyal premium dairy advocates and repeat purchasers.</p>
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
                            <img src={FAQimage} alt="Milk Packaging FAQ" className="absolute inset-0 w-full h-full object-cover" />
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

export default MilkPackaging;
