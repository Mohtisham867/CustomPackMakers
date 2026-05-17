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

import productHero from "@/assets/industry/beverage-boxes/water-bottle-packaging.webp";
import img2 from "@/assets/industry/beverage-boxes/milk-packaging.webp";
import img3 from "@/assets/industry/beverage-boxes/juice-boxes.webp";
import img4 from "@/assets/industry/beverage-boxes/soda-packaging.webp";
import img5 from "@/assets/industry/beverage-boxes/smoothie-packaging.webp";
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
    { id: "item-1", q: "What types of water bottle packaging do you produce?", a: "We produce shrink-wrapped multi-bottle trays, corrugated carry-handle cases, bundled film sleeve packs, and display-ready shipper cases for still and sparkling water. Both single-serve 500ml and bulk 1.5L bottle formats are accommodated with custom tray dimensions matched to your specific bottle neck and body profile." },
    { id: "item-2", q: "Can water bottle packaging handle heavy palletized distribution?", a: "Yes. Our water bottle corrugated tray specifications use C-flute material with minimum ECT ratings of 44 lbs/in for standard distribution and 51 lbs/in for warehouse club palletized formats. Column-aligned footprint design enables safe 10-layer pallet stacking without tray wall buckling under full 24-bottle case weight loads." },
    { id: "item-3", q: "Is eco-friendly packaging available for water brands?", a: "Absolutely. We offer 100% recycled-content corrugated trays, FSC-certified virgin fiber options, water-based inks, and plastic-free carry handle designs that eliminate polypropylene handles from paperboard water carriers. Compostable tray liner options support water brands pursuing full plastic elimination from their secondary packaging supply chain." },
    { id: "item-4", q: "Can water packaging be printed with brand logos and hydration messaging?", a: "Yes. Flexographic printing up to 8 colors on corrugated water trays and shrink-film graphics deliver clean, minimalist water brand aesthetics. Matte and aqueous gloss coating options are available to achieve the fresh, pure visual presentation associated with premium water brand packaging across retail and hospitality channels." },
    { id: "item-5", q: "What is your MOQ for water bottle packaging?", a: "Our minimum order quantity for water bottle packaging trays is 200 units. Bundled film sleeve configurations begin at 500 units due to tooling requirements. Volume pricing activates at 1,000 and 5,000-unit thresholds. Standard production turnaround is 8–10 business days after digital proof approval and order confirmation." },
];

const WaterBottlePackaging = () => {
    const [selectedImage, setSelectedImage] = useState(0);
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);

    const productImages = [
        { src: productHero, alt: "Water Bottle Packaging - Main View" },
        { src: img2, alt: "Water Bottle Packaging - Gallery 2" },
        { src: img3, alt: "Water Bottle Packaging - Gallery 3" },
        { src: img4, alt: "Water Bottle Packaging - Gallery 4" },
        { src: img5, alt: "Water Bottle Packaging - Gallery 5" },
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
                <title>Custom Water Bottle Packaging | Eco-Friendly Water Packaging | CustomPackMakers</title>
                <meta name="description" content="Custom water bottle packaging with recycled-content corrugated trays, plastic-free handles, and clean brand printing. Wholesale water packaging for retail and hospitality markets." />
                <meta name="keywords" content="custom water bottle packaging, water packaging boxes, eco water packaging, wholesale water bottle boxes, branded water packaging" />
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
                            <BreadcrumbItem><BreadcrumbPage>Water Bottle Packaging</BreadcrumbPage></BreadcrumbItem>
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
                                <span className="text-primary">Custom</span> Water Bottle Packaging
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Eco-certified water packaging with recycled-content corrugated trays, plastic-free carry handles, and clean brand printing engineered for retail, hospitality, and warehouse club distribution formats.
                            </p>
                            <div className="pt-2">
                                <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300" onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}>
                                    Get a Quote
                                </Button>
                            </div>
                        </div>
                        <div className="lg:col-span-5 relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-muted group">
                            <div className="absolute inset-0 bg-gradient-to-br from-sky-50 to-sky-100">
                                <img src={productHero} alt="Custom Water Bottle Packaging" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 max-w-3xl">Water Packaging Built for High-Volume Distribution, Retail Shelving, and Sustainability Goals</h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>Our <strong className="text-foreground">custom water bottle packaging</strong> is designed for premium water brands, private-label water producers, and hospitality venue water suppliers navigating simultaneous demands for palletized distribution efficiency, retail shelf presentation, and credible sustainability credentials. With consumer and regulatory pressure mounting against single-use plastic packaging, our plastic-free corrugated tray and carry handle systems provide a commercially viable, sustainably certified alternative to conventional polypropylene and shrink film packaging formats.</p>
                        <p>From 6-bottle carry trays with integrated handle panels to 24-bottle warehouse club shipper cases with display-ready perforated fronts, our <strong className="text-foreground">wholesale water packaging</strong> accommodates every retail channel and bottle format. Clean, minimal flexographic printing with matte aqueous coating delivers the pure, fresh brand aesthetic that premium water consumers associate with quality and environmental responsibility.</p>
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
                                            <div className="space-y-1.5"><Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">D (in)</Label><Input id="depth" type="number" placeholder="9" className="h-9 bg-white" /></div>
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">The Complete Guide to Custom Water Bottle Packaging</h2>
                    <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="[&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-8 [&>h3]:mb-3 [&>h3]:first:mt-0 [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-5 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-5 [&>ul]:space-y-2 [&>ul>li]:text-[15px] [&>ul>li]:text-slate-600">
                            <p>Water is the world's highest volume packaged beverage, with global bottled water consumption exceeding 500 billion liters annually. As the most commoditized beverage category, premium water brands face an acute packaging challenge: secondary packaging must communicate brand differentiation and quality while meeting the extreme cost efficiency demands of ultra-competitive retail pricing. Custom water bottle packaging from CustomPackMakers solves this challenge by combining engineered structural performance with clean, premium-aesthetic print options at wholesale economics that support competitive retail price points.</p>
                            <p>Water packaging also operates at the epicenter of the packaging sustainability debate. The bottled water industry's plastic footprint — including secondary PE shrink film and polypropylene carry handles — has generated significant regulatory and consumer backlash that creates both compliance risk and brand reputation risk for water companies using conventional plastic packaging formats. Our plastic-free corrugated alternatives are positioned precisely to address this risk while delivering competitive functional performance.</p>
                            <h3>Structural Engineering for High-Volume Water Distribution</h3>
                            <p>Water is among the heaviest beverage categories per unit volume — a single 1.5L bottle weighs over 3 lbs, and a 12-bottle master case weighs 40+ lbs. Distribution at scale involves pallet configurations of 600–800 bottles, imposing extreme bottom-layer compressive loads that only properly specified corrugated structures can manage:</p>
                            <ul>
                                <li><strong>C-Flute ECT-51 Corrugated Cases:</strong> Our standard water bottle master case specification uses C-flute corrugated medium with edge crush test (ECT) ratings of 51 lbs/in, providing verified box compression strength sufficient for 10-layer pallet stacking at full 40-lb case weight without case wall failure or flute collapse.</li>
                                <li><strong>Column-Stack Case Geometry:</strong> Water bottle case footprints are designed to align with standard half-pallet and full-pallet grid dimensions, enabling column stacking that transfers load through corner structural elements rather than through side wall panels — the fundamental difference between a case that holds and one that fails under load.</li>
                                <li><strong>Integrated Carry Handle Panels:</strong> Corrugated carry handle panels die-cut into water bottle tray designs eliminate polypropylene handle hardware while maintaining single-handed carry functionality for 6-bottle consumer-format trays up to 12 lbs. Handle attachment zones are reinforced with double-ply laminated board at mechanical stress concentration points.</li>
                                <li><strong>Moisture-Resistant Corrugated Treatments:</strong> Water distribution environments — cold chain trucks, refrigerated retail back rooms, outdoor event concessions — expose packaging to condensation, humidity, and occasional direct water contact. Our PE-coated exterior liner specification maintains case structural integrity through these conditions without compromising recyclability of the overall packaging structure.</li>
                            </ul>
                            <h3>Sustainability Credentials for Water Brand Positioning</h3>
                            <p>Premium water brand consumers are among the most environmentally motivated purchasers in the beverage category — purchasing premium-priced water precisely because the brand's values align with their environmental commitment. Our sustainable water packaging materials provide the authentic credentials these consumers and their advocacy organizations require:</p>
                            <ul>
                                <li><strong>100% Recycled-Content Corrugated:</strong> Water bottle trays and master cases produced from 100% post-consumer recycled corrugated content eliminate virgin fiber demand from water packaging supply chains, supporting brand claims of circular packaging and closed-loop material use.</li>
                                <li><strong>FSC-Certified Virgin Fiber Options:</strong> For food-adjacent water packaging applications requiring certified virgin fiber for regulatory compliance, FSC Chain of Custody certified paperboard provides the responsible sourcing verification that retail partners' sustainability audits require.</li>
                                <li><strong>Plastic-Free Closure Systems:</strong> Replacing polypropylene carry handles and PE shrink film with corrugated paper alternatives eliminates 100% of plastic from secondary water packaging — a compliance-ready response to incoming single-use plastic regulations in multiple jurisdictions across North America and the European Union.</li>
                                <li><strong>Water-Based Inks Throughout:</strong> Our print production uses water-based ink systems eliminating volatile organic compound emissions from the production process, supporting water brand sustainability reports with verified science-based reduction claims beyond just material composition.</li>
                            </ul>
                            <h3>Brand Design for Premium Water Positioning</h3>
                            <p>Water packaging communicates brand values through restraint and material quality rather than visual complexity. The most successful premium water brands use packaging that implies purity through minimalism — clean white space, precise typography, subtle mountain or spring source imagery, and material texture that communicates environmental authenticity. Our print specifications for water packaging are calibrated for this aesthetic: matte aqueous coating for a natural, unprocessed surface feel; minimal palette flexographic printing with precise color matching to brand standards; and embossed or debossed carry handle logos that add tactile brand presence without visual complexity. These specifications combine to create water packaging that earns its position alongside premium beverages in upscale grocery, hotel, restaurant, and DTC delivery contexts.</p>
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
                                { color: "primary", iconPath: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z", h: "Cold-Chain Moisture Resistance", p: "PE-coated corrugated exterior liners block condensation absorption throughout refrigerated distribution, cold chain delivery, and outdoor event environments. Moisture-resistant sealed edges prevent capillary wicking into corrugated medium, maintaining full structural integrity for water bottle trays and master cases through the complete distribution event." },
                                { color: "amber-500", iconPath: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z", h: "High-Stack Structural Integrity", p: "C-flute ECT-51 corrugated cases with column-aligned footprints handle 10-layer pallet stacking for the heaviest water distribution volumes. Integrated corrugated carry handles replace polypropylene hardware, maintaining single-handed tray carry at full 6-bottle weight without plastic components that compromise recyclability or trigger single-use plastic regulations." },
                                { color: "emerald-500", iconPath: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z", h: "100% Plastic-Free Eco Packaging", p: "Recycled-content corrugated trays, FSC-certified paperboard handles, and water-based inks eliminate all plastic from secondary water packaging. Third-party certification documentation supports retailer ESG compliance audits and water brand sustainability reports, providing verified environmental claims beyond generic marketing language for environmentally motivated premium water consumers." },
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
                                <img src={productHero} alt="Premium Custom Water Bottle Packaging" className="w-full h-full object-cover" />
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
                                <img src={productHero} alt="Differentiate Your Water Brand" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                            </div>
                            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-60" />
                            <div className="absolute -z-10 -top-8 -right-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl opacity-60" />
                        </div>
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">Differentiate Your <span className="text-primary">Water Brand</span> From Others</h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">CustomPackMakers engineers water packaging where sustainability science meets premium brand design. Plastic-free corrugated trays, FSC-certified materials, and clean matte printing communicate environmental authenticity that premium water consumers trust — building brand loyalty that outlasts price comparison and transforms first-time retail buyers into lifetime DTC subscribers.</p>
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
                            <img src={FAQimage} alt="Water Bottle Packaging FAQ" className="absolute inset-0 w-full h-full object-cover" />
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

export default WaterBottlePackaging;
