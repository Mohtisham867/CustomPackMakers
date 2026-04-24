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

import productHero from "@/assets/beverage-boxes/smoothie-packaging.webp";
import img2 from "@/assets/beverage-boxes/juice-boxes.webp";
import img3 from "@/assets/beverage-boxes/milk-packaging.webp";
import img4 from "@/assets/beverage-boxes/water-bottle-packaging.webp";
import img5 from "@/assets/beverage-boxes/energy-drink-boxes.webp";
import FAQimage from "@/assets/FAQ-image.webp";

import coffeeImg from "@/assets/beverage-boxes/Coffee packaging.webp";
import teaImg from "@/assets/beverage-boxes/tea-boxes.webp";
import wineImg from "@/assets/beverage-boxes/Wine boxes.webp";
import beerImg from "@/assets/beverage-boxes/beer-packaging.webp";
import juiceImg from "@/assets/beverage-boxes/juice-boxes.webp";
import sodaImg from "@/assets/beverage-boxes/soda-packaging.webp";
import energyImg from "@/assets/beverage-boxes/energy-drink-boxes.webp";
import waterImg from "@/assets/beverage-boxes/water-bottle-packaging.webp";
import milkImg from "@/assets/beverage-boxes/milk-packaging.webp";
import smoothieImg from "@/assets/beverage-boxes/smoothie-packaging.webp";

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
    { id: "item-1", q: "What thermal insulation options are available for smoothie packaging?", a: "We offer three insulation levels for smoothie packaging: standard corrugated air-gap thermal delay, expanded EPS foam liner inserts providing 2–4 hour chill retention, and vacuum-insulated panel board (VIP board) achieving 6+ hour temperature maintenance. All are compatible with gel ice pack integration for DTC cold-chain smoothie delivery applications." },
    { id: "item-2", q: "Can smoothie packaging prevent color and flavor degradation?", a: "Yes. Our smoothie packaging uses UV-blocking inner liners that prevent photooxidation of anthocyanin and carotenoid pigments responsible for smoothie color vitality. Oxygen-barrier laminated structures reduce headspace oxygen ingress that causes both off-flavor development and browning in fruit-forward and vegetable smoothie compositions during retail display." },
    { id: "item-3", q: "Are smoothie packaging materials FDA-compliant for food contact?", a: "All smoothie packaging materials comply with FDA 21 CFR food contact regulations for cold beverage applications. Inner liner PE films, paperboard substrates, and adhesives carry food-contact safety documentation. Smoothie packaging materials are also tested for compatibility with acidic juice compositions and protein shake formulations in pH ranges from 3.5–7.0." },
    { id: "item-4", q: "Can you produce smoothie packaging for DTC subscription delivery?", a: "Yes. Our DTC smoothie delivery packaging combines insulated corrugated outer boxes with custom-fit inner tray structures that immobilize smoothie bottles or pouches during courier delivery. Branded exterior printing with vibrant fruit imagery and QR code engagement panels transforms functional DTC shipping packaging into premium unboxing experiences for smoothie subscription customers." },
    { id: "item-5", q: "What is the minimum order quantity for smoothie packaging?", a: "Standard smoothie carrier minimums are 200 units. Insulated DTC delivery boxes with custom inserts begin at 300 units due to structural tooling requirements. Volume pricing tiers apply at 500 and 1,000-unit levels. Standard production turnaround is 8–10 business days after digital proof approval, with expedited options available for launch timelines." },
];

const SmoothiePackaging = () => {
    const [selectedImage, setSelectedImage] = useState(0);
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);

    const productImages = [
        { src: productHero, alt: "Smoothie Packaging - Main View" },
        { src: img2, alt: "Smoothie Packaging - Gallery 2" },
        { src: img3, alt: "Smoothie Packaging - Gallery 3" },
        { src: img4, alt: "Smoothie Packaging - Gallery 4" },
        { src: img5, alt: "Smoothie Packaging - Gallery 5" },
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
                <title>Custom Smoothie Packaging | Insulated Smoothie Boxes | CustomPackMakers</title>
                <meta name="description" content="Custom smoothie packaging with thermal insulation, UV-blocking inner liners, and vibrant fresh brand printing. Wholesale smoothie boxes for retail, gym, and DTC subscription delivery." />
                <meta name="keywords" content="custom smoothie packaging, smoothie boxes, insulated smoothie packaging, wholesale smoothie packaging, DTC smoothie delivery boxes" />
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
                            <BreadcrumbItem><BreadcrumbPage>Smoothie Packaging</BreadcrumbPage></BreadcrumbItem>
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
                                <span className="text-primary">Custom</span> Smoothie Packaging
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Thermally insulated smoothie packaging with UV-blocking inner liners, vibrant fresh brand printing, and DTC-ready cold-chain structures for retail, gym, and subscription delivery smoothie brands.
                            </p>
                            <div className="pt-2">
                                <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300" onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}>
                                    Get a Quote
                                </Button>
                            </div>
                        </div>
                        <div className="lg:col-span-5 relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-muted group">
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-emerald-100">
                                <img src={productHero} alt="Custom Smoothie Packaging" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 max-w-3xl">Smoothie Packaging Engineered for Temperature Control, Color Preservation, and Vibrant Brand Design</h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>Our <strong className="text-foreground">custom smoothie packaging</strong> is engineered for smoothie brands, cold-pressed juice producers, and DTC meal kit companies that require secondary packaging to maintain cold temperatures during retail display and courier delivery, protect vibrant fruit and vegetable color pigments from photooxidation, and present the fresh, vitality-communicating brand aesthetics that motivate smoothie consumer purchasing decisions at point of display.</p>
                        <p>From retail multi-bottle smoothie trays to fully insulated DTC subscription delivery boxes with custom foam inserts, our <strong className="text-foreground">wholesale smoothie packaging</strong> serves the full range of smoothie brand channels and formats. Vibrant full-color fruit photography printing, spot UV accents, and embossed brand logos transform functional smoothie packaging into a premium brand experience that drives repeat subscription and retail loyalty.</p>
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
                                            <div className="space-y-1.5"><Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label><Input id="width" type="number" placeholder="6" className="h-9 bg-white" /></div>
                                            <div className="space-y-1.5"><Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">D (in)</Label><Input id="depth" type="number" placeholder="8" className="h-9 bg-white" /></div>
                                        </div>
                                        <div className="space-y-1.5"><Label htmlFor="quantity" className="text-xs font-semibold text-muted-foreground">Quantity</Label><Input id="quantity" type="number" placeholder="300" className="h-9 bg-white" /></div>
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">The Complete Guide to Custom Smoothie Packaging</h2>
                    <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="[&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-8 [&>h3]:mb-3 [&>h3]:first:mt-0 [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-5 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-5 [&>ul]:space-y-2 [&>ul>li]:text-[15px] [&>ul>li]:text-slate-600">
                            <p>The smoothie and cold-pressed beverage market has evolved from a niche health food category into a mainstream wellness product segment generating over $14 billion annually in North America alone. Within this market, secondary packaging serves a dual function that distinguishes smoothie packaging from most other beverage categories: it must actively maintain cold product temperatures across variable retail and delivery conditions, and it must communicate the vibrant, health-forward brand aesthetic that defines consumer perception of smoothie product quality and wellness value.</p>
                            <p>Smoothie brands navigate an increasingly complex multi-channel distribution environment — brick-and-mortar grocery, gym and health club retail, corporate wellness delivery accounts, and DTC subscription boxes — each requiring different packaging specifications from the same brand identity. Custom smoothie packaging from CustomPackMakers provides modular packaging architecture that maintains brand visual consistency while accommodating the distinct functional requirements of each channel through tailored structural and material specifications.</p>
                            <h3>Thermal Insulation Engineering: Keeping Smoothies Cold</h3>
                            <p>Cold temperature maintenance is the primary functional challenge in smoothie secondary packaging, particularly for DTC delivery where packages may be in transit for 12–48 hours without refrigeration access. Our thermal engineering for smoothie packaging:</p>
                            <ul>
                                <li><strong>Corrugated Air-Gap Thermal Delay:</strong> Standard smoothie retail packaging uses corrugated flute air channels as passive thermal insulation, slowing surface heat transfer rate by 30–40% compared to non-corrugated structures — sufficient for 2–4 hour retail display of refrigerated smoothies without temperature excursion beyond FDA recommended 40°F thresholds.</li>
                                <li><strong>EPS Foam Liner Integration:</strong> DTC smoothie delivery boxes incorporate custom-fit expanded polystyrene foam liner panels providing 2–4 hour chill retention in ambient temperature environments when used with standard gel ice pack inclusion — sufficient for same-day and next-morning courier delivery in urban markets.</li>
                                <li><strong>Vacuum Insulated Panel (VIP) Board:</strong> For our highest-performance smoothie delivery specification, vacuum insulated panel boards integrated into corrugated outer structures achieve 6+ hour cold retention in 70°F ambient environments — enabling 2-day ground shipping for smoothie subscription brands serving markets outside major metropolitan same-day delivery zones.</li>
                                <li><strong>Gel Ice Pack Accommodation:</strong> All DTC smoothie packaging designs incorporate measured internal volume allocation for standard 14oz and 24oz flat gel ice pack formats, with textured inner surfaces preventing ice pack migration during transit that would compromise thermal efficiency and product immobilization.</li>
                            </ul>
                            <h3>Color and Flavor Preservation Through Packaging Science</h3>
                            <p>Fresh smoothie quality — particularly the vibrant color that signals ingredient freshness to consumers — is vulnerable to two primary degradation pathways that packaging can address:</p>
                            <ul>
                                <li><strong>UV-Induced Anthocyanin Degradation:</strong> Anthocyanins, the polyphenol pigments responsible for red, purple, and blue colors in berry smoothie formulations, are highly photolabile — degrading within hours under fluorescent retail lighting exposure. Our UV-blocking inner liner coating reflects wavelengths below 400nm that initiate anthocyanin photodegradation, maintaining berry smoothie color vibrancy throughout the full retail display period.</li>
                                <li><strong>Carotenoid Oxidative Browning:</strong> Beta-carotene and lycopene pigments in mango, carrot, and tomato smoothie formulations — orange and red components — oxidize when packaging headspace oxygen is present during retail storage. Our oxygen-barrier laminated packaging structures reduce headspace oxygen levels, significantly slowing carotenoid oxidation rates and maintaining the warm color vitality of fruit-forward smoothie products.</li>
                                <li><strong>Chlorophyll Phaeophytinization:</strong> Green smoothie vibrancy — derived from chlorophyll in spinach, kale, matcha, and spirulina components — is vulnerable to heat-accelerated phaeophytinization that converts bright chlorophyll green to olive-brown phaeophytin. Combined thermal insulation and light blocking in our smoothie packaging is specifically calibrated to protect chlorophyll integrity through the retail display period.</li>
                            </ul>
                            <h3>Premium Brand Design for Wellness Positioning</h3>
                            <p>Smoothie brand packaging must communicate freshness, vitality, and wellness values that justify premium price points in a category where consumers are paying 3–5x the price of conventional juice products. Our premium print and finishing options for smoothie packaging — full-color fruit photography printing, matte soft-touch lamination that conveys natural product authenticity, spot UV logo highlights adding luxury tactile texture, and embossed brand icons communicating craft production values — combine to create smoothie packaging that earns consumer trust at the price points that sustain healthy-margin smoothie businesses. These investments in packaging premium design quality consistently deliver measurable returns in subscription retention rates and retail shelf-to-hand conversion metrics for our smoothie brand clients across the wellness beverage category.</p>
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
                                { color: "primary", iconPath: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z", h: "Active Cold-Chain Moisture Resistance", p: "EPS foam liner and VIP board insulation options maintain cold temperatures through humid DTC transit environments. PE-coated outer corrugated surfaces shed condensation from gel ice packs without structural weakening, ensuring smoothie packaging arrives at subscriber doors with intact structure, maintained chill, and brand-perfect presentation that drives social sharing." },
                                { color: "amber-500", iconPath: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z", h: "UV-Barrier Structural Integrity", p: "UV-blocking inner liner coatings protect berry anthocyanins, citrus carotenoids, and green chlorophyll pigments from photo-degradation that destroys smoothie color vitality under retail fluorescent lighting. Combined with thermal insulation, our packaging science preserves the vibrant freshness signals that validate smoothie quality and justify premium price points at retail." },
                                { color: "emerald-500", iconPath: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z", h: "Eco-Certified Wellness Brand Packaging", p: "Recycled-content corrugated, FSC-certified paperboard, and plastic-free closure systems support smoothie brand sustainability narratives that resonate with wellness-oriented consumers prioritizing environmental values alongside personal health. Water-based inks and allergen-controlled production provide the verified documentation that premium smoothie brands require for retailer compliance and DTC marketing trust." },
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
                                <img src={productHero} alt="Premium Custom Smoothie Packaging" className="w-full h-full object-cover" />
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
                                <img src={productHero} alt="Differentiate Your Smoothie Brand" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                            </div>
                            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-60" />
                            <div className="absolute -z-10 -top-8 -right-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl opacity-60" />
                        </div>
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">Differentiate Your <span className="text-primary">Smoothie Brand</span> From Others</h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">CustomPackMakers engineers smoothie packaging where cold-chain thermal science meets vibrant wellness brand design. Insulated DTC delivery boxes, UV-barrier liners, and eco-certified materials protect your smoothie quality promise and communicate the health-forward brand values that convert first-time buyers into loyal subscribers who share their unboxing experience with their networks.</p>
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
                            <img src={FAQimage} alt="Smoothie Packaging FAQ" className="absolute inset-0 w-full h-full object-cover" />
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

export default SmoothiePackaging;
