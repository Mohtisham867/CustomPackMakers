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

import productHero from "@/assets/beverage-boxes/soda-packaging.webp";
import img2 from "@/assets/beverage-boxes/energy-drink-boxes.webp";
import img3 from "@/assets/beverage-boxes/beer-packaging.webp";
import img4 from "@/assets/beverage-boxes/juice-boxes.webp";
import img5 from "@/assets/beverage-boxes/water-bottle-packaging.webp";
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
    { id: "item-1", q: "What structural features handle carbonated soda pressure in multi-packs?", a: "Our soda multi-pack trays use B-flute corrugated bases with corner column load paths that transfer carbonated can weight through structural elements. PE-extruded surfaces resist condensation on chilled cans. Case burst strength ratings exceed minimum industry standards for pressurized beverage multi-pack palletized distribution." },
    { id: "item-2", q: "Can soda packaging withstand refrigerated retail condensation?", a: "Yes. PE-extruded exterior liner surfaces and sealed die-cut edges prevent moisture absorption that weakens standard corrugated tray structures in refrigerated retail environments. Our wet-strength specifications maintain full structural rigidity through extended condensation exposure at refrigerated ambient temperatures throughout the retail display cycle." },
    { id: "item-3", q: "Do you offer branded promotional multi-pack soda packaging?", a: "Absolutely. Full-color flexographic and lithographic printing on soda multi-pack carriers and shipper cases allow brands to customize seasonal promotions, sponsorship logos, and limited-edition designs. Short-run digital plate production enables frequent packaging refreshes without prohibitive minimum order quantity or tooling cost requirements." },
    { id: "item-4", q: "Can you produce display-ready soda shipper cases?", a: "Yes. Our display-ready perforated shipper cases open at retail into shelf-ready display trays with decorative front panel printing. These eliminate retailer repacking labor, improve on-shelf availability, and are used by major soda brands in convenience store, grocery, and warehouse club retail channels nationwide." },
    { id: "item-5", q: "What is the MOQ for custom soda packaging?", a: "Standard multi-pack carrier minimum order quantity is 200 units. Full shipper case configurations begin at 300 units. Volume pricing activates at 500 and 1,000-unit thresholds with discounts scaling through 5,000 units. Our standard production turnaround is 8–10 business days after digital proof approval." },
];

const SodaPackaging = () => {
    const [selectedImage, setSelectedImage] = useState(0);
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);

    const productImages = [
        { src: productHero, alt: "Soda Packaging - Main View" },
        { src: img2, alt: "Soda Packaging - Gallery 2" },
        { src: img3, alt: "Soda Packaging - Gallery 3" },
        { src: img4, alt: "Soda Packaging - Gallery 4" },
        { src: img5, alt: "Soda Packaging - Gallery 5" },
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
                <title>Custom Soda Packaging | Carbonated Beverage Multi-Pack Boxes | CustomPackMakers</title>
                <meta name="description" content="Custom soda packaging with structural multi-pack trays, moisture-resistant carriers, and bold brand printing for carbonated beverage retail. Wholesale soda boxes with 8–10 day turnaround." />
                <meta name="keywords" content="custom soda packaging, soda boxes, carbonated beverage packaging, multi-pack soda carriers, wholesale soda packaging" />
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
                            <BreadcrumbItem><BreadcrumbPage>Soda Packaging</BreadcrumbPage></BreadcrumbItem>
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
                                <span className="text-primary">Custom</span> Soda Packaging
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Structural multi-pack soda carriers engineered for carbonated beverage weight, refrigerated retail condensation, and bold brand expression across 6-pack, 12-pack, and display-ready shipper formats.
                            </p>
                            <div className="pt-2">
                                <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300" onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}>
                                    Get a Quote
                                </Button>
                            </div>
                        </div>
                        <div className="lg:col-span-5 relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-muted group">
                            <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-red-100">
                                <img src={productHero} alt="Custom Soda Packaging" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 max-w-3xl">Soda Packaging Engineered for Carbonated Weight, Retail Durability, and Brand Impact</h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>Our <strong className="text-foreground">custom soda packaging</strong> is precision-engineered for carbonated beverage brands, private-label soda producers, and specialty sparkling drink manufacturers that require packaging to support the considerable weight of pressurized aluminum cans and glass bottles across refrigerated retail display and high-stack warehouse distribution simultaneously. Multi-pack tray structural specifications carry full carbonated can loads through engineered load paths, not through packaging walls alone.</p>
                        <p>From 2-liter bottle secondary packaging to 24-can display-ready shipper cases, our <strong className="text-foreground">wholesale soda packaging</strong> accommodates every carbonated beverage format and retail channel requirement. Full-color brand printing, spot UV accents, and display-ready perforated case designs ensure your soda brand commands maximum shelf presence from warehouse floor to convenience store cooler door.</p>
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">The Complete Guide to Custom Soda Packaging</h2>
                    <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="[&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-8 [&>h3]:mb-3 [&>h3]:first:mt-0 [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-5 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-5 [&>ul]:space-y-2 [&>ul>li]:text-[15px] [&>ul>li]:text-slate-600">
                            <p>Carbonated soft drinks represent the largest segment of the global beverage market by volume, with annual production exceeding 200 billion servings worldwide. Within this massive market, secondary and tertiary packaging serves critical structural, logistical, and brand functions that directly impact retail sell-through rates, distribution efficiency, and consumer purchase decision-making. Custom soda packaging from CustomPackMakers is engineered for the specific physical and commercial demands of carbonated beverage distribution, from regional craft soda brands to national market players seeking retail packaging that maximizes shelf presence and structural performance simultaneously.</p>
                            <p>Soda packaging faces structural challenges that distinguish it from other beverage categories. Carbonated aluminum cans at ambient temperature maintain internal pressures of 40–60 PSI, creating rigid structures that nevertheless transmit compressive stress to secondary packaging during distribution stacking. A 24-pack of 12oz soda cans weighs approximately 22 lbs, and when palletized 8 cases high, bottom case units experience over 170 lbs of compressive load. Secondary packaging must distribute this load without failure, while simultaneously managing condensation from refrigerated cans and resisting impact damage during warehouse and retail handling.</p>
                            <h3>Structural Engineering for Carbonated Beverage Loads</h3>
                            <p>The primary engineering challenge in soda multi-pack packaging is load path management across the full range of distribution stress events. Our corrugated engineering for soda packaging addresses each stress vector:</p>
                            <ul>
                                <li><strong>B-Flute Corrugated Trays:</strong> Our standard soda 6-pack and 12-pack carrier tray specification uses B-flute corrugated medium providing a balance of flat crush strength (minimum 40 PSI) and puncture resistance suitable for the lateral impact stresses common in cooler stocking and consumer handling at retail.</li>
                                <li><strong>C-Flute Shipper Cases:</strong> Full 24-unit shipper cases use C-flute corrugated with minimum box compression strength of 800 lbs (ECT testing), providing reliable stacking performance at the 8-layer pallet heights standard in warehouse club and grocery distribution network stacking configurations.</li>
                                <li><strong>Column-Stack Alignment:</strong> We design soda shipper case footprints to align with standard half-pallet and full-pallet grid dimensions, enabling column stacking rather than offset stacking — reducing compressive load on individual cases by distributing weight through corner column structures rather than through side wall panels.</li>
                                <li><strong>Glued Corner Construction:</strong> Soda shipper cases use RS flap glued corner construction rather than tape-closed designs, providing 40% higher resistance to box opening under compressive load — preventing accidental case opening in warehouse conveyor systems and retail back-stock areas.</li>
                            </ul>
                            <h3>Moisture Resistance for Refrigerated Soda Retail</h3>
                            <p>Soda retail environments present constant moisture challenges. Refrigerated cooler condensation on chilled cans wets carrier and shipper surfaces continuously. Ice dispensing in convenience store environments creates pooled water contact. Outdoor event and sporting venue soda sales involve weather exposure. Our moisture engineering for soda packaging addresses each scenario:</p>
                            <ul>
                                <li><strong>Aqueous Acrylic Coating:</strong> Exterior printed soda carrier surfaces receive high-build aqueous acrylic coating providing water resistance at lower cost than polyethylene extrusion, suitable for 2–4 hours condensation exposure in refrigerated retail environments.</li>
                                <li><strong>PE-Extrusion Coating:</strong> For extended refrigerated display applications and outdoor ice-bath sales environments, PE-extruded exterior liner surfaces beaded and shed surface water without absorption for the full duration of retail display.</li>
                                <li><strong>Wax-Impregnated Corrugated:</strong> Our highest-specification moisture resistance option for ice-bath and outdoor event soda packaging uses wax-cascaded corrugated medium that remains rigid through direct ice water immersion, suitable for sports venue, festival, and outdoor catering applications.</li>
                            </ul>
                            <h3>Brand Printing and Visual Retail Impact</h3>
                            <p>In a category dominated by global mega-brands with enormous marketing budgets, regional and craft soda packaging must achieve visual impact through design excellence rather than media spending. Our printing capabilities enable small-to-mid-size soda brands to compete visually in retail environments:</p>
                            <ul>
                                <li><strong>Flexographic Brand Printing:</strong> Up to 8-color inline flexographic printing on corrugated soda carrier surfaces delivers the bold, saturated color fields and high-contrast logotype treatments that create brand recognition across a crowded refrigerator case.</li>
                                <li><strong>Display-Ready Perforation:</strong> Pre-perforated shipper case panels allow retail staff to tear down the case front to create an instant shelf-ready display tray, reducing the labor cost of a retail soda set and improving on-shelf availability during high-velocity retail periods.</li>
                                <li><strong>Seasonal Design Flexibility:</strong> Our flexographic plate production and short-run digital proofing processes support seasonal label refreshes, limited-edition flavors, and promotional partnership packaging without the minimum order quantities that make frequent design changes economically prohibitive for independent soda brands.</li>
                            </ul>
                            <h3>Sustainability in Soda Packaging</h3>
                            <p>The soda industry faces increasing regulatory and consumer pressure to reduce packaging environmental impact. Our sustainable soda packaging options include 100% recycled-content corrugated cases with post-consumer recycled fiber content, FSC-certified virgin fiber options for food-adjacency requirements, water-based inks replacing solvent-based formulas throughout our print production, and plastic-free carrier designs that eliminate the plastic ring multi-pack format that has generated significant consumer and regulatory pushback in recent years. These options allow soda brands to transition toward circular packaging with genuine third-party certification documentation rather than marketing claims.</p>
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
                                { color: "primary", iconPath: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z", h: "Moisture Resistance for Refrigerated Retail", p: "PE-extruded carrier surface coatings and sealed corrugated edges block condensation absorption that degrades soda carrier structural rigidity in wet refrigerated retail environments. Our wet-strength specifications maintain tray integrity through the full duration of retail display, preventing in-store structural failures and product loss incidents." },
                                { color: "amber-500", iconPath: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z", h: "High Compressive Structural Integrity", p: "C-flute shipper cases with 800 lbs minimum box compression strength and column-stack-aligned footprints handle 8-layer pallet heights in warehouse distribution without case failure. Glued corner construction resists opening under conveyor conveyor and retail back-stock compressive loads at full can pack weight." },
                                { color: "emerald-500", iconPath: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z", h: "Eco Alternatives for Plastic Ring Packaging", p: "Our plastic-free cardboard can carrier alternatives eliminate the multi-pack plastic ring format facing regulatory bans across North America and Europe. Recycled-content corrugated tray carriers with water-based inks deliver genuine sustainability credentials that support retailer ESG commitments and consumer plastic-free purchasing preferences." },
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
                                <img src={productHero} alt="Premium Custom Soda Packaging" className="w-full h-full object-cover" />
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
                                <img src={productHero} alt="Differentiate Your Soda Brand" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                            </div>
                            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-60" />
                            <div className="absolute -z-10 -top-8 -right-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl opacity-60" />
                        </div>
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">Differentiate Your <span className="text-primary">Soda</span> From Others</h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">CustomPackMakers engineers soda packaging where structural performance meets brand visual power. Moisture-resistant carriers, column-stacking case geometry, and bold flexographic printing ensure your carbonated beverages survive distribution and dominate the retail cooler — driving trial, repeat purchase, and brand loyalty at scale.</p>
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
                            <img src={FAQimage} alt="Soda Packaging FAQ" className="absolute inset-0 w-full h-full object-cover" />
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

export default SodaPackaging;
