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
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";

import chocolateBarPackagingHero from "@/assets/industry/chocolate-boxes/chocolate-bar-packaging/img-hero.webp";
import chocolateBarPackagingImg1 from "@/assets/industry/chocolate-boxes/chocolate-bar-packaging/img-1.webp";
import chocolateBarPackagingImg2 from "@/assets/industry/chocolate-boxes/chocolate-bar-packaging/img-2.webp";
import chocolateBarPackagingImg3 from "@/assets/industry/chocolate-boxes/chocolate-bar-packaging/img-3.webp";
import chocolateBarPackagingImg4 from "@/assets/industry/chocolate-boxes/chocolate-bar-packaging/img-4.webp";
import chocolateBarPackagingImg5 from "@/assets/industry/chocolate-boxes/chocolate-bar-packaging/img-5.webp";
import chocolateBarPackagingImg6 from "@/assets/industry/chocolate-boxes/chocolate-bar-packaging/img-whychoose.webp";
import chocolateBarPackagingImg7 from "@/assets/industry/chocolate-boxes/chocolate-bar-packaging/img-different.webp";
import FAQimage from "@/assets/FAQ-image.webp";
import artisanChocolateBox from "@/assets/industry/chocolate-boxes/Artisan Chocolate Box.webp";
import chocolateMilkBoxes from "@/assets/industry/chocolate-boxes/chocolate-milk-boxes.webp";
import chocolateCandyBoxes from "@/assets/industry/chocolate-boxes/chocolate-candy-boxes.webp";
import luxuryChocolateBoxes from "@/assets/industry/chocolate-boxes/luxury-chocolate-boxes.webp";
import chocolateBombBoxes from "@/assets/industry/chocolate-boxes/chocolate-bomb-boxes.webp";
import chocolateGiftBoxes from "@/assets/industry/chocolate-boxes/chocolate-gift-boxes.webp";
import christmasChocolateBoxes from "@/assets/industry/chocolate-boxes/christmas-chocolate-boxes.webp";
import mushroomChocolateBarPackaging from "@/assets/industry/chocolate-boxes/Mushroom Chocolate Bar Packaging.webp";
import chocolateSubscriptionBox from "@/assets/industry/chocolate-boxes/chocolate-subscription-box.webp";

const carouselProducts = [
    { name: "Artisan Chocolate Box", image: artisanChocolateBox, link: "/industries/chocolate-boxes/artisan-chocolate-box", desc: "Handcrafted boxes with food-grade inserts and gold foiling." },
    { name: "Chocolate Milk Boxes", image: chocolateMilkBoxes, link: "/industries/chocolate-boxes/chocolate-milk-boxes", desc: "Moisture-resistant dairy packaging with vibrant graphics." },
    { name: "Chocolate Candy Boxes", image: chocolateCandyBoxes, link: "/industries/chocolate-boxes/chocolate-candy-boxes", desc: "Vibrant candy boxes with PET window displays." },
    { name: "Luxury Chocolate Boxes", image: luxuryChocolateBoxes, link: "/industries/chocolate-boxes/luxury-chocolate-boxes", desc: "Premium rigid board boxes with foil-stamping finishes." },
    { name: "Chocolate Bomb Boxes", image: chocolateBombBoxes, link: "/industries/chocolate-boxes/chocolate-bomb-boxes", desc: "Secure cradle packaging for hot chocolate bombs." },
    { name: "Chocolate Gift Boxes", image: chocolateGiftBoxes, link: "/industries/chocolate-boxes/chocolate-gift-boxes", desc: "Gift-ready packaging with sophisticated ribbon closures." },
    { name: "Christmas Chocolate Boxes", image: christmasChocolateBoxes, link: "/industries/chocolate-boxes/christmas-chocolate-boxes", desc: "Festive holiday-themed chocolate packaging." },
    { name: "Mushroom Chocolate Bar Packaging", image: mushroomChocolateBarPackaging, link: "/industries/chocolate-boxes/mushroom-chocolate-bar-packaging", desc: "Unique wellnes packaging for mushroom-infused chocolates." },
    { name: "Chocolate Subscription Box", image: chocolateSubscriptionBox, link: "/industries/chocolate-boxes/chocolate-subscription-box", desc: "Recurring monthly subscription box packaging solutions." },
];

const faqs = [
    { id: "item-1", q: "What barrier materials protect chocolate bar freshness in packaging?", a: "We use aluminum foil laminated inner wraps, BOPP metallized films, and OPP twist-wrap materials that provide airtight oxygen and moisture barriers—preventing rancidity, chocolate bloom, and the flavor degradation that occurs when chocolate contacts atmospheric air and humidity over its retail shelf life." },
    { id: "item-2", q: "Can chocolate bar packaging include a resealable closure?", a: "Yes. Resealable zipper seals, pressure-sensitive flap closures, and tear-notch partial openings are available for multi-serve chocolate bars—allowing consumers to access a serving and reseal the packaging to preserve freshness of the remaining bar portion for later consumption." },
    { id: "item-3", q: "What printing options achieve rich, photographic chocolate imagery?", a: "Full-color CMYK digital and offset printing on high-gloss or matte-coated stocks delivers photographic-quality chocolate imagery, ingredient callouts, and brand graphic elements with the visual richness that premium confectionery brands require to communicate product quality at retail shelf distance." },
    { id: "item-4", q: "Are sustainable and recyclable materials available for chocolate bar wrappers?", a: "Yes. FSC-certified paper wraps, mono-material PE recyclable films, and compostable cellulose inner wraps are available as sustainable alternatives to traditional multi-layer laminate constructions—supporting brand sustainability commitments without compromising the freshness barrier performance required for chocolate preservation." },
    { id: "item-5", q: "What is the minimum order quantity for custom chocolate bar packaging?", a: "Standard custom chocolate bar wrappers and sleeve boxes have an MOQ of 1,000 units. Specialty sustainable materials and complex die-cut structural carton formats start at 2,000 units. Volume pricing provides significant per-unit savings at 5,000 and 10,000 unit quantities." },
];

const ChocolateBarPackaging = () => {
    const [selectedImage, setSelectedImage] = useState(0);
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);

    const productImages = [
        { src: chocolateBarPackagingImg1, alt: "Chocolate Bar Packaging - Main View" },
        { src: chocolateBarPackagingImg2, alt: "Chocolate Bar Packaging - Barrier Film" },
        { src: chocolateBarPackagingImg3, alt: "Chocolate Bar Packaging - Printed Sleeve" },
        { src: chocolateBarPackagingImg4, alt: "Chocolate Bar Packaging - Sustainable Wrap" },
        { src: chocolateBarPackagingImg5, alt: "Chocolate Bar Packaging - Lifestyle" },
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
                <title>Custom Chocolate Bar Packaging | Premium Chocolate Wrapper Design | CustomPackMakers</title>
                <meta name="description" content="Custom chocolate bar packaging with airtight foil barrier liners, resealable closures, full-color brand printing, and sustainable material options. Perfect for premium chocolate bar brands." />
                <meta name="keywords" content="chocolate bar packaging, chocolate wrapper design, custom chocolate bar box, chocolate wrapper printing, premium chocolate packaging" />
            </Helmet>
            <Header />

            <div className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 mt-[120px] md:mt-[160px]">
                <div className="container mx-auto px-[30px] py-4">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem><BreadcrumbLink asChild><Link to="/">Home</Link></BreadcrumbLink></BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem><BreadcrumbLink asChild><Link to="/industries">Industries</Link></BreadcrumbLink></BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem><BreadcrumbLink asChild><Link to="/industries/chocolate-boxes">Chocolate Boxes</Link></BreadcrumbLink></BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem><BreadcrumbPage>Chocolate Bar Packaging</BreadcrumbPage></BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </div>

            <section className="py-8 bg-background">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-7 space-y-6">
                            <div className="w-20 h-1.5 bg-primary rounded-full" />
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight"><span className="text-primary">Custom</span> Chocolate Bar Packaging</h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">Premium chocolate bar wrappers and packaging with airtight foil laminate barrier liners, resealable multi-serve closures, photographic-quality CMYK brand printing, and sustainable FSC-certified material options—protecting chocolate freshness and projecting brand quality at every retail shelf and D2C unboxing touchpoint.</p>
                            <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300" onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}>Get a Quote</Button>
                        </div>
                        <div className="lg:col-span-5 relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-muted group">
                            <img src={chocolateBarPackagingHero} alt="Custom Chocolate Bar Packaging" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 max-w-3xl">Chocolate Bar Packaging That Preserves Quality and Commands Shelves</h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>Our <strong className="text-foreground">custom chocolate bar packaging</strong> combines the freshness protection that premium chocolate demands with the brand visual quality that competitive retail requires. Aluminum foil laminate inner wraps and metallized BOPP barrier films provide the airtight oxygen and moisture exclusion that prevents rancidity, chocolate bloom, and flavor off-notes throughout the full retail shelf life—regardless of distribution temperature and humidity variations in your supply chain.</p>
                        <p>Full-color CMYK printing on high-gloss or premium matte-coated stocks delivers the photographic brand imagery that positions your chocolate bar at the quality tier its ingredients and recipe deserve. Resealable zipper and pressure-sensitive closures for multi-serve formats, sustainable FSC-certified paper wrap alternatives, and precision nutritional panel printing combine to address every commercial requirement of the modern premium chocolate bar market—from craft artisan boutiques to national confectionery retailer distribution.</p>
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
                                {productImages.map((img, i) => (
                                    <button key={i} onClick={() => setSelectedImage(i)} className={`relative w-full aspect-square overflow-hidden rounded-md border transition-all duration-200 ${selectedImage === i ? 'border-primary shadow-md ring-2 ring-primary/20' : 'border-slate-200 hover:border-slate-300'}`}>
                                        <img src={img.src} alt={`Thumb ${i + 1}`} className="w-full h-full object-cover" />
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
                                            <div className="space-y-1.5"><Label htmlFor="length" className="text-xs font-semibold text-muted-foreground">L (in)</Label><Input id="length" type="number" placeholder="6" className="h-9 bg-white" /></div>
                                            <div className="space-y-1.5"><Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label><Input id="width" type="number" placeholder="3" className="h-9 bg-white" /></div>
                                            <div className="space-y-1.5"><Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">D (in)</Label><Input id="depth" type="number" placeholder="0.5" className="h-9 bg-white" /></div>
                                        </div>
                                        <div className="space-y-1.5"><Label htmlFor="qty" className="text-xs font-semibold text-muted-foreground">Quantity</Label><Input id="qty" type="number" placeholder="1000" className="h-9 bg-white" /></div>
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">The Complete Guide to Chocolate Bar Packaging</h2>
                    <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="[&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-6 [&>h3]:mb-3 [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-4 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-4 [&>ul]:space-y-2 [&>ul>li]:text-[15px] [&>ul>li]:text-slate-600">
                            <p>The chocolate bar is the most fundamental confectionery format—and the most competitive retail category in the entire food sector. Mass-market chocolate bar brands compete on price, distribution breadth, and marketing investment. Premium and artisan chocolate bar brands compete on ingredient quality, sourcing credentials, and the packaging that communicates ingredient investment before a single word of copy is read. In the premium chocolate bar market, packaging is the price-justification mechanism—the visual and tactile proof that this chocolate bar is worth the premium over mass-market alternatives.</p>
                            <p>This commercial reality places enormous performance demands on chocolate bar packaging. The barrier liner must preserve the complex flavor profiles of origin-specific cacao through ambient-temperature retail storage without the controlled environment of specialty food retail. The printed outer must communicate origin, processing method, flavor character, and brand story in a 6x3-inch canvas that consumers assess in under three seconds at shelf. And the structural integrity of the outer carton or sleeve must survive the handling, stacking, and transportation rigors of wholesale distribution without compromising the presentation quality that retail purchasers expect at point of receipt.</p>
                            <h3>Barrier Liner Materials and Freshness Protection</h3>
                            <p>Chocolate is one of the most chemically complex food products—containing over 600 flavor compounds that are susceptible to oxidation, moisture absorption, and temperature-induced crystallization changes that collectively degrade the sensory experience that premium chocolate consumers pay to receive.</p>
                            <ul>
                                <li><strong>Aluminum Foil Laminate:</strong> The gold standard barrier liner for premium chocolate bars—providing complete oxygen and moisture exclusion through a metallic foil layer that blocks both gaseous migration and vapor transmission. Foil laminates are ideal for high-cacao dark chocolate bars where oxidative flavor degradation is the primary preservation challenge.</li>
                                <li><strong>Metallized BOPP Film:</strong> Biaxially oriented polypropylene with a vacuum-deposited aluminum metallization layer provides excellent barrier performance with a thinner, lighter material profile—suitable for milk and white chocolate bars where barrier requirements are less stringent than dark chocolate preservation.</li>
                                <li><strong>Compostable Cellulose Inner Wrap:</strong> NatureFlex cellulose film provides meaningful oxygen and moisture barrier with home-compostable end-of-life disposal—the sustainable barrier alternative for artisan and premium chocolate brands with sustainability commitments that extend to packaging material selection.</li>
                                <li><strong>Heat-Seal Coating:</strong> All barrier liner materials are supplied with appropriate heat-seal coating specifications for reliable, airtight seam sealing on high-speed chocolate bar packing equipment—ensuring consistent barrier integrity across production run volumes.</li>
                            </ul>
                            <h3>Printed Brand Communication Design</h3>
                            <p>The outer surface of a premium chocolate bar is the brand's most concentrated communication medium—a small canvas that must perform multiple communication functions simultaneously within an extremely constrained space envelope.</p>
                            <ul>
                                <li><strong>Front Panel Brand Identity:</strong> The front face communicates brand mark, product name, flavor variant, and the visual element that telegraphs the brand's quality positioning at shelf distance—competing for attention against dozens of adjacent bars in the same confectionery display fixture.</li>
                                <li><strong>Back Panel Storytelling:</strong> Origin sourcing narrative, cacao variety and producer acknowledgment, flavor tasting notes, and brand philosophy copy—communicating the brand's engagement with the chocolate supply chain and the story behind the specific ingredient combination in the bar.</li>
                                <li><strong>Nutritional and Regulatory Panels:</strong> FDA-compliant nutritional facts, ingredient declaration, allergen statements, and applicable organic or fair-trade certification marks—presented in correct format specifications within readable type sizes on high-contrast printing panels.</li>
                                <li><strong>Variant Differentiation:</strong> Color coding, flavor descriptor typography, and cacao percentage callouts that enable consumers to rapidly identify their preferred variant within a multi-SKU product range—reducing decision friction and accelerating the repeat purchase selection process.</li>
                            </ul>
                            <h3>Sustainable Packaging Options</h3>
                            <ul>
                                <li><strong>FSC-Certified Paper Outer:</strong> Forest Stewardship Council certified paper wraps and cartons demonstrate responsible forest management sourcing—aligning chocolate bar packaging material selection with brand sustainability commitments and the values of environmentally conscious premium confectionery consumers.</li>
                                <li><strong>Mono-Material PE Structure:</strong> Single-material polyethylene packaging constructions enable recycling through PE film collection streams—eliminating the multi-material laminate combinations that prevent conventional barrier film packaging from entering recycling systems.</li>
                            </ul>
                            <h3>Why CustomPackMakers for Chocolate Bar Packaging</h3>
                            <p>Our chocolate bar packaging specialists combine deep barrier material knowledge with premium brand printing capability—delivering packaging that protects cacao quality investment and communicates brand positioning with equal precision. From craft single-origin bars to mainstream confectionery distribution, we match material specification, structural format, and print quality to each brand's specific market position and commercial requirements. Contact our team for a complimentary chocolate bar packaging specification review today.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-8 bg-accent/20">
                <div className="container mx-auto px-[5vw]">
                    <div className="mb-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Related Chocolate Products</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl">Explore our full range of premium chocolate packaging solutions for every format and brand tier.</p>
                    </div>
                    <Carousel setApi={setApi} opts={{ align: "start", loop: true }} plugins={[Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })]} className="w-full">
                        <CarouselContent className="-ml-4">
                            {carouselProducts.map((product, index) => (
                                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                                    <Link to={product.link} className="block h-full">
                                        <Card className="overflow-hidden border-border bg-card hover:shadow-xl transition-all duration-300 group cursor-pointer h-full">
                                            <CardContent className="p-0 flex flex-col h-full">
                                                <div className="h-52 w-full bg-gray-50 overflow-hidden">
                                                    <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" loading="lazy" />
                                                </div>
                                                <div className="p-4 border-t border-border flex-grow flex flex-col">
                                                    <h3 className="font-semibold text-foreground text-sm mb-2">{product.name}</h3>
                                                    <p className="text-xs text-muted-foreground line-clamp-2 mb-4 flex-grow">{product.desc}</p>
                                                    <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">View Product</Button>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </Link>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <div className="flex justify-center gap-2 mt-8">
                            {Array.from({ length: count }).map((_, i) => (
                                <button key={i} className={`h-2 rounded-full transition-all duration-300 ${i === current ? "w-8 bg-primary" : "w-2 bg-primary/20 hover:bg-primary/50"}`} onClick={() => api?.scrollTo(i)} aria-label={`Go to slide ${i + 1}`} />
                            ))}
                        </div>
                    </Carousel>
                </div>
            </section>

            <section className="py-12 relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #fafafa 0%, #f4f6ff 60%, #f0fdf8 100%)' }}>
                <div className="absolute top-0 left-0 w-80 h-80 bg-primary/4 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-300/8 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl pointer-events-none" />
                <div className="container mx-auto px-[30px] relative z-10">
                    <div className="text-center mb-14">
                        <span className="inline-block text-xs font-semibold tracking-widest text-primary uppercase mb-3 bg-primary/10 px-4 py-1.5 rounded-full">Our Promise</span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">Why Brands Choose <span className="text-primary">CustomPackMakers</span></h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">Foil barrier freshness, photographic brand printing, and sustainable materials for premium chocolate bar packaging.</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">
                        <div className="space-y-5">
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1"><div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors"><svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div></div>
                                <div><h3 className="text-lg font-bold text-slate-900 mb-2">Airtight Foil Barrier Protection</h3><p className="text-sm text-slate-500 leading-relaxed">Aluminum foil laminate and metallized BOPP barrier liners provide complete oxygen and moisture exclusion—preserving the 600+ flavor compounds in premium chocolate through ambient-temperature retail shelf storage and protecting the cacao quality investment your single-origin sourcing and precision chocolate-making process represents throughout the bar's full retail life cycle.</p></div>
                            </div>
                            <div className="w-full h-px bg-slate-100" />
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1"><div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors"><svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg></div></div>
                                <div><h3 className="text-lg font-bold text-slate-900 mb-2">Photographic Brand Printing</h3><p className="text-sm text-slate-500 leading-relaxed">Full-color CMYK offset printing on premium gloss and matte-coated stocks delivers the photographic-quality brand imagery, origin storytelling typography, and flavor variant differentiation that positions your chocolate bar at the premium tier its ingredients justify—communicating quality investment instantly at retail shelf distance across every distribution channel.</p></div>
                            </div>
                            <div className="w-full h-px bg-slate-100" />
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1"><div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors"><svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg></div></div>
                                <div><h3 className="text-lg font-bold text-slate-900 mb-2">Sustainable Material Options</h3><p className="text-sm text-slate-500 leading-relaxed">FSC-certified paper wraps, compostable NatureFlex cell inner liners, and mono-material PE recyclable formats enable premium chocolate bar brands to align packaging material selection with brand sustainability commitments—attracting the environmentally conscious premium confectionery consumer segment without compromising the barrier performance that chocolate freshness preservation demands.</p></div>
                            </div>
                        </div>
                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img src={chocolateBarPackagingImg6} alt="Premium chocolate bar packaging" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-7"><p className="text-white font-bold text-lg leading-snug mb-1">Trusted by 500+ Brands</p><p className="text-white/75 text-sm">Delivering premium packaging across North America</p></div>
                            </div>
                            <div className="absolute top-4 -right-2 lg:-right-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80"><p className="text-2xl font-bold text-primary leading-none">98%</p><p className="text-xs text-slate-400 mt-1 font-medium">Satisfaction Rate</p></div>
                            <div className="absolute bottom-4 -left-2 lg:-left-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80"><p className="text-2xl font-bold text-emerald-500 leading-none">8–10</p><p className="text-xs text-slate-400 mt-1 font-medium">Day Turnaround</p></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-10 lg:py-12 bg-white overflow-hidden relative">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="relative group">
                            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] border border-primary/20 shadow-2xl transform transition-transform duration-700 hover:scale-[1.02]">
                                <img src={chocolateBarPackagingImg7} alt="Differentiate Your Chocolate Bar Brand" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                            </div>
                            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-60" />
                            <div className="absolute -z-10 -top-8 -right-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl opacity-60" />
                        </div>
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">Differentiate Your <span className="text-primary">Chocolate Bar</span> From Others</h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">In the premium chocolate bar market, packaging is the proof of quality before the tasting. Our chocolate bar packaging combines foil barrier freshness protection with photographic brand printing, origin story storytelling panels, and sustainable material options—creating a wrapper that communicates your cacao quality investment at shelf distance, survives the distribution journey intact, and converts premium shelf positioning into the brand loyalty that sustains long-term confectionery market presence across retail, D2C, and gifting channels.</p>
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
                                {faqs.map(faq => (
                                    <AccordionItem key={faq.id} value={faq.id} className="border border-slate-200 rounded-lg bg-white overflow-hidden data-[state=open]:border-primary data-[state=open]:ring-1 data-[state=open]:ring-primary/20 data-[state=open]:bg-primary/5 transition-all duration-300">
                                        <AccordionTrigger className="px-5 py-3 hover:no-underline [&>svg]:hidden group">
                                            <span className="text-left font-semibold text-foreground text-base">{faq.q}</span>
                                            <div className="shrink-0 ml-4 p-1 rounded-full bg-slate-100 group-data-[state=open]:bg-primary group-data-[state=open]:text-white transition-colors duration-200"><Plus className="h-3 w-3 group-data-[state=open]:hidden" /><Minus className="h-3 w-3 hidden group-data-[state=open]:block" /></div>
                                        </AccordionTrigger>
                                        <AccordionContent className="px-5 pb-5 pt-0 text-slate-600 leading-relaxed text-sm">{faq.a}</AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                        <div className="relative w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden">
                            <img src={FAQimage} alt="Chocolate Bar Packaging FAQ" className="absolute inset-0 w-full h-full object-cover" />
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

export default ChocolateBarPackaging;
