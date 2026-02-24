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

import productHero from "@/assets/chocolate-products/chocolate-milk-boxes.webp";
import FAQimage from "@/assets/FAQ-image.png";
import artisanChocolateBox from "@/assets/chocolate-products/Artisan Chocolate Box.webp";
import chocolateCandyBoxes from "@/assets/chocolate-products/chocolate-candy-boxes.webp";
import luxuryChocolateBoxes from "@/assets/chocolate-products/luxury-chocolate-boxes.webp";
import chocolateBombBoxes from "@/assets/chocolate-products/chocolate-bomb-boxes.webp";
import chocolateGiftBoxes from "@/assets/chocolate-products/chocolate-gift-boxes.webp";
import christmasChocolateBoxes from "@/assets/chocolate-products/christmas-chocolate-boxes.webp";
import mushroomChocolateBarPackaging from "@/assets/chocolate-products/Mushroom Chocolate Bar Packaging.webp";
import chocolateBarPackaging from "@/assets/chocolate-products/Chocolate Bar Packaging.webp";
import chocolateSubscriptionBox from "@/assets/chocolate-products/chocolate-subscription-box.webp";

const carouselProducts = [
    { name: "Artisan Chocolate Box", image: artisanChocolateBox, link: "/industries/chocolate-boxes/artisan-chocolate-box", desc: "Handcrafted boxes with food-grade compartmentalized inserts." },
    { name: "Chocolate Candy Boxes", image: chocolateCandyBoxes, link: "/industries/chocolate-boxes/chocolate-candy-boxes", desc: "Vibrant boxes for chocolate candies with clear windows." },
    { name: "Luxury Chocolate Boxes", image: luxuryChocolateBoxes, link: "/industries/chocolate-boxes/luxury-chocolate-boxes", desc: "Premium rigid board boxes with foil-stamping finishes." },
    { name: "Chocolate Bomb Boxes", image: chocolateBombBoxes, link: "/industries/chocolate-boxes/chocolate-bomb-boxes", desc: "Secure cradle packaging for hot chocolate bombs." },
    { name: "Chocolate Gift Boxes", image: chocolateGiftBoxes, link: "/industries/chocolate-boxes/chocolate-gift-boxes", desc: "Gift-ready packaging with sophisticated ribbon closures." },
    { name: "Christmas Chocolate Boxes", image: christmasChocolateBoxes, link: "/industries/chocolate-boxes/christmas-chocolate-boxes", desc: "Festive holiday-themed chocolate packaging." },
    { name: "Mushroom Chocolate Bar Packaging", image: mushroomChocolateBarPackaging, link: "/industries/chocolate-boxes/mushroom-chocolate-bar-packaging", desc: "Unique packaging for mushroom-infused chocolates." },
    { name: "Chocolate Bar Packaging", image: chocolateBarPackaging, link: "/industries/chocolate-boxes/chocolate-bar-packaging", desc: "Airtight protection and high-fidelity chocolate bar boxes." },
    { name: "Chocolate Subscription Box", image: chocolateSubscriptionBox, link: "/industries/chocolate-boxes/chocolate-subscription-box", desc: "Recurring subscription box packaging solutions." },
];

const faqs = [
    { id: "item-1", q: "What materials are used for chocolate milk boxes?", a: "We use moisture-resistant SBS cardboard and PE-coated liners that protect against condensation and humidity—keeping chocolate milk carton packaging structurally sound and visually pristine throughout cold chain transit and retail display." },
    { id: "item-2", q: "Can you print FDA-compliant labels on chocolate milk packaging?", a: "Yes. All inks and coatings used on chocolate milk boxes are food-contact compliant and meet FDA labelling requirements for beverage packaging—including mandatory nutritional information, allergy statements, and expiry date fields." },
    { id: "item-3", q: "Do you offer moisture-resistant coatings for cold storage?", a: "Absolutely. Our aqueous moisture-barrier coatings and PE lamination options protect chocolate milk packaging against condensation in cold storage and refrigerated retail display environments—maintaining print quality and structural integrity throughout the supply chain." },
    { id: "item-4", q: "What printing options are available for chocolate milk box branding?", a: "We offer full-color CMYK offset printing, Pantone spot color matching, and high-definition digital printing—achieving photographic-quality dairy brand imagery and vibrant color reproduction on moisture-resistant substrates optimized for chocolate milk packaging." },
    { id: "item-5", q: "What is the minimum order quantity for chocolate milk boxes?", a: "Our MOQ starts at 500 units for chocolate milk boxes. Volume pricing tiers provide substantial per-unit savings at 2,500 and 5,000 units—scaling efficiently with dairy and beverage brand production requirements." },
];

const ChocolateMilkBoxes = () => {
    const [selectedImage, setSelectedImage] = useState(0);
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);

    const productImages = [
        { src: productHero, alt: "Chocolate Milk Boxes - Main View" },
        { src: productHero, alt: "Chocolate Milk Boxes - Side View" },
        { src: productHero, alt: "Chocolate Milk Boxes - Detail" },
        { src: productHero, alt: "Chocolate Milk Boxes - Opened" },
        { src: productHero, alt: "Chocolate Milk Boxes - Lifestyle" },
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
                <title>Custom Chocolate Milk Boxes | Moisture-Resistant Dairy Packaging | CustomPackMakers</title>
                <meta name="description" content="Premium chocolate milk boxes with moisture-resistant coatings, vibrant CMYK printing, and FDA-compliant materials. Protect dairy freshness with professionally branded packaging." />
                <meta name="keywords" content="chocolate milk boxes, dairy packaging, moisture-resistant chocolate boxes, custom milk carton packaging, food-grade beverage boxes" />
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
                            <BreadcrumbItem><BreadcrumbPage>Chocolate Milk Boxes</BreadcrumbPage></BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </div>

            <section className="py-8 bg-background">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-7 space-y-6">
                            <div className="w-20 h-1.5 bg-primary rounded-full" />
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight"><span className="text-primary">Custom</span> Chocolate Milk Boxes</h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">Moisture-resistant dairy packaging engineered for cold chain integrity—vibrant CMYK brand graphics on PE-coated substrates that withstand refrigeration, condensation, and retail handling while communicating your dairy brand's quality and freshness promise.</p>
                            <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300" onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}>Get a Quote</Button>
                        </div>
                        <div className="lg:col-span-5 relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-muted group">
                            <img src={productHero} alt="Custom Chocolate Milk Boxes" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 max-w-3xl">Chocolate Milk Packaging Built for Dairy Freshness and Brand Impact</h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>Our <strong className="text-foreground">custom chocolate milk boxes</strong> are engineered for dairy and beverage brands that demand moisture resistance, structural stability, and vivid print fidelity throughout the cold supply chain. PE-coated SBS board resists condensation, refrigeration humidity, and handling stress—maintaining both structural integrity and brand graphic quality across every shelf-life touchpoint, from cold chain transit to retail refrigerated display.</p>
                        <p>Full-color CMYK printing on moisture-resistant substrate delivers the photographic brand imagery and vibrant color saturation that differentiates chocolate milk products in the highly competitive dairy beverage category. FDA-compliant inks and coatings ensure regulatory conformance while embossed brand marks and gloss spot finishes elevate perceived quality above commodity dairy packaging alternatives.</p>
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
                                            <div className="space-y-1.5"><Label htmlFor="length" className="text-xs font-semibold text-muted-foreground">L (in)</Label><Input id="length" type="number" placeholder="4" className="h-9 bg-white" /></div>
                                            <div className="space-y-1.5"><Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label><Input id="width" type="number" placeholder="3" className="h-9 bg-white" /></div>
                                            <div className="space-y-1.5"><Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">D (in)</Label><Input id="depth" type="number" placeholder="7" className="h-9 bg-white" /></div>
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">The Complete Guide to Chocolate Milk Box Packaging</h2>
                    <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="[&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-6 [&>h3]:mb-3 [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-4 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-4 [&>ul]:space-y-2 [&>ul>li]:text-[15px] [&>ul>li]:text-slate-600">
                            <p>Chocolate milk occupies a unique position in the food and beverage market—simultaneously a children's nutrition staple, a post-workout recovery beverage, and a premium indulgence product. This diversity of end-users creates packaging demands that span functional cold chain requirements, regulatory compliance obligations, and the brand differentiation challenges of a crowded dairy category. Custom chocolate milk boxes must navigate all three dimensions simultaneously to deliver commercial success at retail scale.</p>
                            <p>The chocolate milk packaging challenge begins with the cold environment. Unlike ambient products, chocolate milk packaging must maintain both physical and aesthetic performance through cold storage, transit temperature cycling, retail refrigeration condensation, and the humidity stresses that accumulate throughout the supply chain. Standard packaging approaches fail at one or more of these environment stages—creating delamination, print degradation, and structural softening that signals poor quality to retail buyers and end consumers alike.</p>
                            <h3>Moisture-Resistant Substrates for Cold Chain Integrity</h3>
                            <p>Our chocolate milk boxes are constructed from SBS cardboard with polyethylene (PE) lamination—a material architecture proven in dairy beverage applications across global food supply chains.</p>
                            <ul>
                                <li><strong>PE Moisture Barrier:</strong> Polyethylene lamination creates a continuous moisture barrier that prevents condensation from penetrating the board structure during refrigerated transit—maintaining structural rigidity and preventing the softening that leads to carton compression failure in refrigerated display stacks.</li>
                                <li><strong>Aqueous Barrier Coating:</strong> For brands prioritizing recyclability, our aqueous barrier coating options provide moisture resistance without PE lamination—maintaining the structural performance requirements of chocolate milk packaging with improved end-of-life recyclability.</li>
                                <li><strong>Cold-Temperature Adhesives:</strong> Standard adhesives embrittle and fail in sub-zero transit. Our cold-temperature adhesive formulations maintain bond integrity from -20°C to +40°C, ensuring carton closure security across the full cold chain temperature range.</li>
                                <li><strong>Condensation-Resistant Inks:</strong> Print inks and coatings are selected for moisture resistance in refrigerated retail display—preventing the smearing, fading, and color shift that degrades brand imagery in high-condensation environments over extended display periods.</li>
                            </ul>
                            <h3>FDA-Compliant Regulatory Labelling</h3>
                            <p>Chocolate milk is a regulated food product requiring precise compliance with FDA labelling requirements, including nutritional panels, allergen declarations, and manufacturing country-of-origin statements. Our structural design engineers accommodate these mandatory elements within the packaging architecture while preserving brand design integrity.</p>
                            <ul>
                                <li><strong>Nutritional Facts Panel:</strong> Mandatory FDA-format nutritional information panels designed and positioned per 21 CFR 101 requirements—ensuring retail compliance without compromising front-panel brand design.</li>
                                <li><strong>Allergen Declaration:</strong> Milk allergen statements positioned and formatted per FDA allergen labelling requirements, accommodating the specific regulatory language required for dairy beverage products in US retail distribution.</li>
                                <li><strong>UPC and Barcode Integration:</strong> Industry-standard GS1 barcode placement with adequate quiet zones for reliable retail scanning—critical for supply chain integration across major retail chains.</li>
                            </ul>
                            <h3>Brand Differentiation Through Premium Printing</h3>
                            <p>In the competitive dairy beverage category, packaging is the primary brand differentiation vehicle on refrigerated retail shelves where all products compete simultaneously for consumer attention.</p>
                            <ul>
                                <li><strong>Full-Color CMYK Printing:</strong> Photographic-quality dairy brand imagery—product photography, lifestyle scenes, and crest graphics reproduced with vibrant color accuracy on moisture-resistant substrates.</li>
                                <li><strong>Pantone Color Matching:</strong> Exact brand color consistency critical for dairy brands maintaining visual identity standards across SKU ranges and seasonal promotional variants.</li>
                                <li><strong>Gloss Spot Finish:</strong> Selective gloss coating on brand marks and product imagery creates visual hierarchy and differentiation against competitor packaging in the same refrigerated display environment.</li>
                            </ul>
                            <h3>Structural Engineering for Dairy Distribution</h3>
                            <ul>
                                <li><strong>Compression Strength:</strong> Board caliper and flute selection engineered for the specific stacking weights encountered in refrigerated distribution pallets and retail refrigerator stacking configurations.</li>
                                <li><strong>Gable-Top and Flat-Top Options:</strong> Multiple closure formats available to match dairy production line sealing equipment specifications and retailer packaging format preferences.</li>
                                <li><strong>Tamper-Evidence:</strong> Perforated opening designs that provide visual tamper evidence for regulatory compliance and consumer confidence in refrigerated dairy product integrity.</li>
                            </ul>
                            <h3>Why CustomPackMakers for Chocolate Milk Packaging</h3>
                            <p>Our team has deep experience in food and beverage packaging engineering—from cold chain material selection through FDA-compliant regulatory design. We work with dairy startups, established regional brands, and national beverage companies to deliver chocolate milk packaging that protects product integrity, meets regulatory requirements, and differentiates your brand across every retail touchpoint. Contact us for a structural design consultation and material specification review for your chocolate milk packaging project today.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-8 bg-accent/20">
                <div className="container mx-auto px-[5vw]">
                    <div className="mb-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Related Chocolate Products</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl">Explore our full range of premium chocolate packaging solutions for every confection format and brand occasion.</p>
                    </div>
                    <div className="relative">
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
                </div>
            </section>

            <section className="py-12 relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #fafafa 0%, #f4f6ff 60%, #f0fdf8 100%)' }}>
                <div className="absolute top-0 left-0 w-80 h-80 bg-primary/4 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-300/8 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl pointer-events-none" />
                <div className="container mx-auto px-[30px] relative z-10">
                    <div className="text-center mb-14">
                        <span className="inline-block text-xs font-semibold tracking-widest text-primary uppercase mb-3 bg-primary/10 px-4 py-1.5 rounded-full">Our Promise</span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">Why Brands Choose <span className="text-primary">CustomPackMakers</span></h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">Cold chain moisture resistance, FDA-compliant printing, and vivid dairy brand graphics for chocolate milk packaging that performs throughout the full retail supply chain.</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">
                        <div className="space-y-5">
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1"><div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300"><svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div></div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Cold Chain Moisture Resistance</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">PE-coated SBS board with aqueous barrier coating and cold-temperature adhesives maintains structural integrity and print quality through refrigerated transit, cold storage humidity cycling, and condensation-heavy retail refrigerator display environments throughout the chocolate milk product shelf life.</p>
                                </div>
                            </div>
                            <div className="w-full h-px bg-slate-100" />
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1"><div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors duration-300"><svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg></div></div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">FDA-Compliant Regulatory Design</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">Mandatory nutritional panels, allergen declarations, and UPC barcode placement all engineered to FDA food labelling standards—ensuring retail compliance and distribution partner acceptance for chocolate milk packaging across national and regional grocery retail channels.</p>
                                </div>
                            </div>
                            <div className="w-full h-px bg-slate-100" />
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1"><div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors duration-300"><svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div></div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Vibrant Dairy Brand Graphics</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">Full-color CMYK printing with Pantone color matching on moisture-resistant substrates delivers photographic-quality brand imagery and retail shelf differentiation—with selective gloss finishes that elevate chocolate milk packaging above competitive dairy products in the same refrigerated display environment.</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img src={productHero} alt="Premium chocolate milk packaging" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-7">
                                    <p className="text-white font-bold text-lg leading-snug mb-1">Trusted by 500+ Brands</p>
                                    <p className="text-white/75 text-sm">Delivering premium packaging across North America</p>
                                </div>
                            </div>
                            <div className="absolute top-4 -right-2 lg:-right-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80 backdrop-blur-sm">
                                <p className="text-2xl font-bold text-primary leading-none">98%</p>
                                <p className="text-xs text-slate-400 mt-1 font-medium">Satisfaction Rate</p>
                            </div>
                            <div className="absolute bottom-4 -left-2 lg:-left-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80 backdrop-blur-sm">
                                <p className="text-2xl font-bold text-emerald-500 leading-none">8–10</p>
                                <p className="text-xs text-slate-400 mt-1 font-medium">Day Turnaround</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-10 lg:py-12 bg-white overflow-hidden relative">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="relative group">
                            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] border border-primary/20 shadow-2xl transform transition-transform duration-700 hover:scale-[1.02]">
                                <img src={productHero} alt="Differentiate Your Chocolate Milk Brand" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                            </div>
                            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-60" />
                            <div className="absolute -z-10 -top-8 -right-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl opacity-60" />
                        </div>
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">Differentiate Your <span className="text-primary">Chocolate Milk</span> From Others</h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">In the refrigerated dairy aisle, shelf presence is everything. Our chocolate milk boxes combine PE-coated moisture barriers with vibrant CMYK brand graphics, selective gloss finishes, and FDA-compliant nutritional labelling to create packaging that maintains cold chain integrity and stands apart from commodity competition. Every carton communicates freshness, quality, and brand identity—driving the consumer preference and retail buyer confidence that build sustainable dairy market share.</p>
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
                            <img src={FAQimage} alt="Chocolate Milk Box FAQ" className="absolute inset-0 w-full h-full object-cover" />
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

export default ChocolateMilkBoxes;
