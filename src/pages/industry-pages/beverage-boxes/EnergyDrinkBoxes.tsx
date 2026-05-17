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

import productHero from "@/assets/industry/beverage-boxes/energy-drink-boxes.webp";
import img2 from "@/assets/industry/beverage-boxes/soda-packaging.webp";
import img3 from "@/assets/industry/beverage-boxes/beer-packaging.webp";
import img4 from "@/assets/industry/beverage-boxes/juice-boxes.webp";
import img5 from "@/assets/industry/beverage-boxes/water-bottle-packaging.webp";
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
    { id: "item-1", q: "What packaging formats are available for energy drinks?", a: "We produce 4-pack and 6-pack can carriers, 12-pack and 24-pack shipper boxes, single-can premium gift tubes, and gym bag-friendly 3-count sleeve packs. All formats are engineered for the standard 8.4oz, 12oz, and 16oz can sizes with custom inserts available for specialty tall-boy and slim-can energy drink formats." },
    { id: "item-2", q: "Can energy drink packaging withstand impact during distribution?", a: "Yes. Our energy drink shipper cases use double-wall C-flute corrugated with minimum burst strength of 200 PSI, tested to ISTA 2A simulation protocols including 24-inch drop testing and random vibration cycles. Corner column reinforcement prevents case wall buckling in mixed freight environments alongside heavier distribution cargo." },
    { id: "item-3", q: "Can I get bold, high-energy graphic designs on energy drink boxes?", a: "Absolutely. Full-color lithographic offset and flexographic printing on energy drink carriers delivers the high-contrast neon color schemes, metallic foil accents, and aggressive typographic treatments that define the energy drink visual category. Gloss spot UV and hot foil stamping add premium tactile impact to flagship SKU packaging." },
    { id: "item-4", q: "Are energy drink boxes available in eco-friendly materials?", a: "Yes. FSC-certified corrugated and recycled-content paperboard options are available for energy drink brands pursuing sustainability certification and retailer ESG compliance. Water-based inks and plastic-free carrier designs replace solvent inks and plastic rings without compromising the bold visual impact required in the energy drink retail category." },
    { id: "item-5", q: "What is the minimum order quantity for energy drink packaging?", a: "Our energy drink packaging minimum order quantity is 200 units for standard carrier formats. Custom shipper case designs begin at 300 units. Volume pricing tiers provide significant discounts at 500, 1,000, and 5,000-unit thresholds. Standard production turnaround is 8–10 business days after digital proof approval." },
];

const EnergyDrinkBoxes = () => {
    const [selectedImage, setSelectedImage] = useState(0);
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);

    const productImages = [
        { src: productHero, alt: "Energy Drink Boxes - Main View" },
        { src: img2, alt: "Energy Drink Boxes - Gallery 2" },
        { src: img3, alt: "Energy Drink Boxes - Gallery 3" },
        { src: img4, alt: "Energy Drink Boxes - Gallery 4" },
        { src: img5, alt: "Energy Drink Boxes - Gallery 5" },
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
                <title>Custom Energy Drink Boxes | Bold Energy Packaging | CustomPackMakers</title>
                <meta name="description" content="Custom energy drink boxes with impact-resistant walls, bold neon printing, and metallic foil accents. Wholesale energy drink packaging for retail, gym, and DTC channels." />
                <meta name="keywords" content="custom energy drink boxes, energy drink packaging, energy can carriers, wholesale energy drink boxes, bold beverage packaging" />
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
                            <BreadcrumbItem><BreadcrumbPage>Energy Drink Boxes</BreadcrumbPage></BreadcrumbItem>
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
                                <span className="text-primary">Custom</span> Energy Drink Boxes
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Impact-resistant energy drink packaging with bold neon printing, metallic foil accents, and structural walls engineered for mixed freight distribution, gym retail, and e-commerce DTC delivery.
                            </p>
                            <div className="pt-2">
                                <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300" onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}>
                                    Get a Quote
                                </Button>
                            </div>
                        </div>
                        <div className="lg:col-span-5 relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-muted group">
                            <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-yellow-100">
                                <img src={productHero} alt="Custom Energy Drink Boxes" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 max-w-3xl">Energy Drink Packaging Built for High-Impact Retail and Maximum Brand Aggression</h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>Our <strong className="text-foreground">custom energy drink boxes</strong> are engineered for energy drink brands competing in the highest-velocity, most visually aggressive retail beverage category in the market. From convenience store coolers to gym supplement retail and online DTC subscription boxes, energy drink packaging must simultaneously withstand rough mixed-freight distribution handling and deliver maximum visual impact that converts casual browsers into loyal customers. Our impact-resistant double-wall corrugated constructions and vibrant full-color printing meet both demands without compromise.</p>
                        <p>From 4-pack slim-can carriers to 24-count master shipper cases with aggressive brand graphics, our <strong className="text-foreground">wholesale energy drink packaging</strong> range serves startup energy brands at 200-unit MOQ and global beverage groups at multi-million unit annual volumes. Every order receives the same production quality standard, digital proof approval process, and 8–10 business day turnaround commitment regardless of order size.</p>
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">The Complete Guide to Custom Energy Drink Boxes</h2>
                    <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="[&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-8 [&>h3]:mb-3 [&>h3]:first:mt-0 [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-5 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-5 [&>ul]:space-y-2 [&>ul>li]:text-[15px] [&>ul>li]:text-slate-600">
                            <p>The energy drink market has grown into a $90 billion global industry defined by intense brand competition, extreme lifestyle marketing, and packaging that must communicate performance, edge, and attitude before the consumer reads a single word of copy. Energy drink packaging from CustomPackMakers is engineered for this demanding brand environment — combining structural engineering that protects product through rough distribution channels with print and finishing capabilities that deliver the visual aggression energy drink consumers expect and respond to in retail environments.</p>
                            <p>Energy drink brands operate across extraordinarily diverse retail channels: convenience store coolers, gym and supplement retail, warehouse clubs, online DTC subscription boxes, and event and esports venue concessions. Each channel presents different packaging performance requirements, from moisture resistance in refrigerated coolers to impact resistance in mixed-freight DTC shipping cartons. Our energy drink packaging range is engineered to perform across all channels without requiring separate packaging specifications for each retail environment.</p>
                            <h3>Impact Resistance: Engineering for Rough Handling Environments</h3>
                            <p>Energy drinks move through distribution networks alongside heavy, incompatible cargo in mixed-freight environments where pallets are hand-jacked, floor-stacked with incompatible neighboring freight, and handled with forklifts across loading dock environments that impose lateral impact loads conventional packaging cannot withstand. Our impact resistance engineering for energy drink packaging:</p>
                            <ul>
                                <li><strong>Double-Wall Corrugated Construction:</strong> Energy drink master shipper cases use double-wall B/C-flute corrugated achieving minimum puncture resistance of 300 J (Cobb puncture test), providing protection against forklift tine contact, corner impact from adjacent freight, and conveyor belt edge impact that commonly damages single-wall cases in mixed-freight distribution.</li>
                                <li><strong>Corner Column Reinforcement:</strong> Engineered stacking columns at all four case corners transfer vertical compression loads through structural elements rather than through case wall panels, enabling safe palletizing at 8–10 layers without case failure under the full weight of upper pallet layers.</li>
                                <li><strong>Glued-Tab Closure System:</strong> Master case glued tab closures provide significantly higher resistance to accidental opening under lateral impact compared to tape-closed designs, preventing case opening during conveyor handling that loses product and creates line-stoppage incidents at distribution facilities.</li>
                                <li><strong>Foam Corner Inserts for DTC:</strong> Energy drink DTC shipping boxes include optional expanded polystyrene or molded pulp corner inserts that immobilize can multipacks within the shipper, preventing lateral movement and can-to-can impact damage during last-mile courier handling and porch delivery events.</li>
                            </ul>
                            <h3>Bold Visual Design: Energy Drink Packaging as Brand Statement</h3>
                            <p>In energy drink retail, packaging is a brand statement before it is a container. The consumer picking up a 4-pack sees the package design before they see the can itself, making carrier design a primary brand impression opportunity. Our print and finishing capabilities for energy drink carriers deliver the visual intensity the category demands:</p>
                            <ul>
                                <li><strong>Neon-Equivalent Color Reproduction:</strong> We use extended gamut printing with fluorescent ink overprinting to achieve neon-equivalent color reproduction on paperboard surfaces that standard CMYK printing cannot achieve, delivering the electric visual impact of neon yellow, electric green, and hot pink characteristic of energy drink brand palettes.</li>
                                <li><strong>Metallic Foil Carrier Panels:</strong> Hot foil stamping in metallic silver, gold, chrome, and holographic effects elevates 4-pack and 6-pack carrier panels to a luxury-adjacent visual register that commands premium positioning in convenience store coolers where visual differentiation directly correlates with price premium acceptance.</li>
                                <li><strong>Matte/Gloss Contrast Finishing:</strong> The juxtaposition of soft-touch matte lamination backgrounds with high-gloss spot UV logo treatments creates a visual and tactile contrast that makes energy drink carriers physically attention-seeking — an effect that has been demonstrated to increase point-of-decision brand selection in consumer behavior research.</li>
                                <li><strong>QR Code and Interactive Packaging:</strong> We integrate QR code panels into energy drink carrier designs linking to workout content, esports activation pages, and limited-edition content experiences, transforming functional packaging into a brand engagement touchpoint that extends the marketing moment from shelf to consumer mobile experience.</li>
                            </ul>
                            <h3>Eco-Forward Energy Drink Packaging</h3>
                            <p>The energy drink consumer demographic skews younger and increasingly prioritizes sustainability credentials in purchasing decisions. Our eco-forward energy drink packaging options — recycled-content corrugated, FSC-certified paperboard carriers, water-based ink printing, and plastic-free closure systems — allow energy brands to communicate sustainability commitment without sacrificing the bold visual impact that defines category leadership. These options come with complete third-party certification documentation supporting retailer sustainability compliance audits and brand ESG reporting requirements in annual sustainability reporting cycles.</p>
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
                                { color: "primary", iconPath: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z", h: "Maximum Moisture Resistance", p: "PE-extruded carrier surfaces and sealed corrugated edges block condensation absorption in refrigerated convenience store cooler environments. Wet-strength corrugated medium maintains full structural rigidity through extended refrigerated retail display periods, preventing in-store carrier failures that cause product loss and brand reputation damage at point of sale." },
                                { color: "amber-500", iconPath: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z", h: "Double-Wall Impact Structural Integrity", p: "Double-wall B/C-flute corrugated shipper cases with corner column reinforcement resist forklift tine impact, mixed-freight lateral loading, and 10-layer pallet compressive stress. ISTA 2A-tested drop and vibration performance ensures energy drink cans arrive undamaged across every last-mile courier and freight distribution scenario." },
                                { color: "emerald-500", iconPath: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z", h: "Eco-Certified Packaging for Gen Z Brands", p: "Recycled-content corrugated, FSC-certified paperboard carriers, and water-based inks deliver genuine sustainability credentials that younger energy drink consumers increasingly require for brand trust. Plastic-free carrier alternatives replace single-use plastic rings and plastic shrink wrapping with certified recyclable paperboard solutions at comparable per-unit economics." },
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
                                <img src={productHero} alt="Premium Custom Energy Drink Boxes" className="w-full h-full object-cover" />
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
                                <img src={productHero} alt="Differentiate Your Energy Drink Brand" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                            </div>
                            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-60" />
                            <div className="absolute -z-10 -top-8 -right-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl opacity-60" />
                        </div>
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">Differentiate Your <span className="text-primary">Energy Brand</span> From Others</h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">CustomPackMakers engineers energy drink packaging where structural performance collides with aggressive brand design. Double-wall impact resistance, neon-equivalent printing, and metallic foil finishes ensure your energy drink commands the cooler, converts gym browsers, and arrives intact to every DTC subscriber across North America.</p>
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
                            <img src={FAQimage} alt="Energy Drink Boxes FAQ" className="absolute inset-0 w-full h-full object-cover" />
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

export default EnergyDrinkBoxes;
