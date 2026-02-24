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

import productHero from "@/assets/chocolate-products/chocolate-subscription-box.webp";
import FAQimage from "@/assets/FAQ-image.png";
import artisanChocolateBox from "@/assets/chocolate-products/Artisan Chocolate Box.webp";
import chocolateMilkBoxes from "@/assets/chocolate-products/chocolate-milk-boxes.webp";
import chocolateCandyBoxes from "@/assets/chocolate-products/chocolate-candy-boxes.webp";
import luxuryChocolateBoxes from "@/assets/chocolate-products/luxury-chocolate-boxes.webp";
import chocolateBombBoxes from "@/assets/chocolate-products/chocolate-bomb-boxes.webp";
import chocolateGiftBoxes from "@/assets/chocolate-products/chocolate-gift-boxes.webp";
import christmasChocolateBoxes from "@/assets/chocolate-products/christmas-chocolate-boxes.webp";
import mushroomChocolateBarPackaging from "@/assets/chocolate-products/Mushroom Chocolate Bar Packaging.webp";
import chocolateBarPackaging from "@/assets/chocolate-products/Chocolate Bar Packaging.webp";

const carouselProducts = [
    { name: "Artisan Chocolate Box", image: artisanChocolateBox, link: "/industries/chocolate-boxes/artisan-chocolate-box", desc: "Handcrafted boxes with food-grade inserts and gold foiling." },
    { name: "Chocolate Milk Boxes", image: chocolateMilkBoxes, link: "/industries/chocolate-boxes/chocolate-milk-boxes", desc: "Moisture-resistant dairy packaging with vibrant graphics." },
    { name: "Chocolate Candy Boxes", image: chocolateCandyBoxes, link: "/industries/chocolate-boxes/chocolate-candy-boxes", desc: "Vibrant candy boxes with PET window displays." },
    { name: "Luxury Chocolate Boxes", image: luxuryChocolateBoxes, link: "/industries/chocolate-boxes/luxury-chocolate-boxes", desc: "Premium rigid board boxes with foil-stamping finishes." },
    { name: "Chocolate Bomb Boxes", image: chocolateBombBoxes, link: "/industries/chocolate-boxes/chocolate-bomb-boxes", desc: "Secure cradle packaging for hot chocolate bombs." },
    { name: "Chocolate Gift Boxes", image: chocolateGiftBoxes, link: "/industries/chocolate-boxes/chocolate-gift-boxes", desc: "Gift-ready packaging with sophisticated ribbon closures." },
    { name: "Christmas Chocolate Boxes", image: christmasChocolateBoxes, link: "/industries/chocolate-boxes/christmas-chocolate-boxes", desc: "Festive holiday-themed chocolate packaging." },
    { name: "Mushroom Chocolate Bar Packaging", image: mushroomChocolateBarPackaging, link: "/industries/chocolate-boxes/mushroom-chocolate-bar-packaging", desc: "Compliance-ready packaging for functional mushroom chocolates." },
    { name: "Chocolate Bar Packaging", image: chocolateBarPackaging, link: "/industries/chocolate-boxes/chocolate-bar-packaging", desc: "Airtight protection and high-fidelity chocolate bar boxes." },
];

const faqs = [
    { id: "item-1", q: "Can subscription boxes include monthly theme variation?", a: "Yes. We support monthly theme rotation programs with seasonal color palette swaps, occasion-specific graphic panels, and rotating editorial card inserts—printing each month's run as a distinct design on a consistent structural box form, enabling the fresh discovery experience that subscription chocolate consumers pay a premium to receive each delivery cycle." },
    { id: "item-2", q: "How do you protect chocolate during D2C subscription shipping?", a: "Corrugated outer shipping cartons with precision-fit inner fiberboard inserts provide mechanical protection during courier transit. Optional cold-shield liners and phase-change material packs are available for temperature-sensitive chocolate items during warm-weather shipping months." },
    { id: "item-3", q: "Can you include personalized unboxing inserts for each subscriber?", a: "Yes. Variable-data printed welcome cards, subscriber name personalization, and monthly curator notes are available as insert options—creating the personal membership feeling that distinguishes premium chocolate subscription brands from generic periodic confectionery delivery services." },
    { id: "item-4", q: "What structural formats are available for chocolate subscription boxes?", a: "We offer rigid lift-lid boxes, magnetic-closure presentation boxes, corrugated shipper-with-tray formats, and drawer-style reveal boxes in standard and custom dimensions—each optimized for the specific chocolate assortment, shipping method, and subscriber unboxing experience your brand's subscription model requires." },
    { id: "item-5", q: "What is the minimum order for chocolate subscription box packaging?", a: "Standard subscription box structural formats have an MOQ of 500 units per month per design variation, with volume pricing at 1,000 and 2,500 units. Monthly theme variation printing programs are available without tooling re-investment between monthly design rotations at equivalent MOQs." },
];

const ChocolateSubscriptionBox = () => {
    const [selectedImage, setSelectedImage] = useState(0);
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);

    const productImages = [
        { src: productHero, alt: "Chocolate Subscription Box - Main View" },
        { src: productHero, alt: "Chocolate Subscription Box - Monthly Theme" },
        { src: productHero, alt: "Chocolate Subscription Box - Interior Reveal" },
        { src: productHero, alt: "Chocolate Subscription Box - Personalized Card" },
        { src: productHero, alt: "Chocolate Subscription Box - Lifestyle" },
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
                <title>Chocolate Subscription Box Packaging | Monthly Chocolate Box Design | CustomPackMakers</title>
                <meta name="description" content="Premium chocolate subscription box packaging with monthly theme rotation, personalized unboxing inserts, D2C shipping protection, and discovery-focused design for recurring chocolate delivery brands." />
                <meta name="keywords" content="chocolate subscription box, monthly chocolate box packaging, chocolate box subscription packaging, D2C chocolate packaging, recurring chocolate delivery box" />
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
                            <BreadcrumbItem><BreadcrumbPage>Chocolate Subscription Box</BreadcrumbPage></BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </div>

            <section className="py-8 bg-background">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-7 space-y-6">
                            <div className="w-20 h-1.5 bg-primary rounded-full" />
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight"><span className="text-primary">Chocolate</span> Subscription Box</h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">Monthly rotating chocolate subscription box packaging with seasonal theme graphic rotation, personalized subscriber welcome cards, D2C transit protection, and the discovery-focused interior reveal that rewards repeat unboxing and transforms monthly delivery into the premier chocolate membership experience your subscribers anticipate each cycle.</p>
                            <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300" onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}>Get a Quote</Button>
                        </div>
                        <div className="lg:col-span-5 relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-muted group">
                            <img src={productHero} alt="Chocolate Subscription Box" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 max-w-3xl">Subscription Packaging That Turns Every Delivery Into a Discovery Event</h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>Our <strong className="text-foreground">chocolate subscription boxes</strong> are engineered around the central subscriber psychology that powers recurring chocolate membership retention: the discovery experience. Monthly theme graphic rotation—realized through seasonal color palette variation, editorial interior panels, and rotating curator note cards—ensures that every delivery is visually distinct from the previous month's box, maintaining the surprise and freshness that subscribers pay a recurring premium to receive and that reduces the churn risk that identical monthly packaging would accelerate.</p>
                        <p>Structural formats designed for D2C shipping—corrugated outer containers with precision-fit rigid inner presentation boxes, optional cold-shield liners for warm-weather deliveries, and configurable insert trays sized for diverse chocolate assortments—ensure the discovery moment subscribers anticipate arrives intact after the courier journey. Personalized subscriber welcome cards and variable-data name printing transform the generic delivery into the genuine membership communication that builds the emotional brand relationships sustaining long-term subscription retention.</p>
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
                                            <div className="space-y-1.5"><Label htmlFor="length" className="text-xs font-semibold text-muted-foreground">L (in)</Label><Input id="length" type="number" placeholder="10" className="h-9 bg-white" /></div>
                                            <div className="space-y-1.5"><Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label><Input id="width" type="number" placeholder="8" className="h-9 bg-white" /></div>
                                            <div className="space-y-1.5"><Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">D (in)</Label><Input id="depth" type="number" placeholder="4" className="h-9 bg-white" /></div>
                                        </div>
                                        <div className="space-y-1.5"><Label htmlFor="qty" className="text-xs font-semibold text-muted-foreground">Quantity</Label><Input id="qty" type="number" placeholder="500" className="h-9 bg-white" /></div>
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">The Complete Guide to Chocolate Subscription Box Packaging</h2>
                    <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="[&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-6 [&>h3]:mb-3 [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-4 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-4 [&>ul]:space-y-2 [&>ul>li]:text-[15px] [&>ul>li]:text-slate-600">
                            <p>The chocolate subscription box model has transformed a segment of the confectionery market—moving high-value chocolate consumers from occasional retail purchases to committed recurring membership relationships that generate predictable monthly revenue, enable deep subscriber data collection, and create the regular brand touchpoint that mass-market retail chocolate distribution cannot replicate. The packaging in a chocolate subscription model is not merely functional containment—it is the primary subscriber experience delivery mechanism, the brand touchpoint that subscribers anticipate and that determines whether they renew or cancel at the next billing cycle.</p>
                            <p>This commercial reality imposes specific packaging requirements that are fundamentally different from conventional retail chocolate packaging. Subscription packaging must perform across three dimensions simultaneously: D2C shipping structural protection (the box must survive courier transit intact), subscriber unboxing experience quality (the reveal moment must feel premium and worth the subscription price paid), and monthly discovery freshness (the packaging must feel new and exciting with each monthly delivery, not repetitive and predictable). Achieving all three simultaneously is the central design challenge of chocolate subscription box packaging—and the differentiator that separates thriving subscription businesses from those experiencing chronic churn.</p>
                            <h3>Monthly Theme Rotation Without Tool Re-Investment</h3>
                            <p>The subscription model's core value proposition is discovery—the promise that each month's delivery will contain something new, curated with care, and presented in a way that feels fresh and exciting. Static packaging that looks identical month after month contradicts this discovery promise and accelerates subscriber boredom churn at the rate of 2.8x compared to brands implementing monthly packaging variation.</p>
                            <ul>
                                <li><strong>Seasonal Color Palette Rotation:</strong> Monthly color palette shifts—spring pastels transitioning to summer brights, autumn warms, and winter metallics—provide immediate visual freshness with each delivery without requiring structural tooling changes between months.</li>
                                <li><strong>Monthly Editorial Panel:</strong> Rotating interior lid panel designs featuring monthly chocolate origin features, maker stories, tasting guides, and curation rationale—printed fresh each month and delivering educational content that justifies the subscription's curation value proposition and increases subscriber engagement with the chocolate selection inside.</li>
                                <li><strong>Seasonal Structural Accents:</strong> Interchangeable exterior belly bands, seasonal sticker seals, and rotating tissue paper colors provide monthly tactile and visual variation without the cost of complete box redesign—maintaining the budget efficiency essential to subscription business unit economics.</li>
                            </ul>
                            <h3>Personalization at Subscription Scale</h3>
                            <p>The most effective subscriber retention tool in the chocolate subscription category is personalization—the communication that the brand recognizes the specific subscriber as an individual rather than as an anonymous delivery address. Digital print integration enables meaningful personalization at subscription volume scale without the cost of manual personalization intervention.</p>
                            <ul>
                                <li><strong>Subscriber Name Personalization:</strong> Variable-data printing of subscriber names on welcome cards, interior messaging panels, and exterior address labels—creating the personal greeting that makes each delivery feel addressed specifically to the recipient rather than sent generically to a mailing list.</li>
                                <li><strong>Preference-Based Curation Notes:</strong> Monthly curator notes referencing the subscriber's stated chocolate preferences—milk vs. dark, origin preferences, flavor profile history—communicate that the monthly selection has been thought about specifically for this subscriber, increasing perceived curation value and subscription justification.</li>
                                <li><strong>Milestone Acknowledgment:</strong> Automated milestone recognition—three month anniversary, one year subscriber, referral reward acknowledgment—printed into welcome card variable data fields to create the relationship depth that transforms transactional subscription into genuine brand membership with emotional retention value.</li>
                            </ul>
                            <h3>D2C Shipping Architecture</h3>
                            <p>Chocolate subscription boxes must routinely survive the most demanding logistics environment in consumer goods distribution—uncontrolled courier networks, ambient temperature variation, mechanical stacking pressure, and extended transit times that premium retail channels never impose on confectionery packaging.</p>
                            <ul>
                                <li><strong>Corrugated Outer Shipper:</strong> Double-wall or triple-wall corrugated outer shipping cartons provide the mechanical compression resistance and impact absorption required to protect the inner presentation box through courier handling, sorting, and delivery without visible structural damage to the outer surface that subscribers first see upon delivery.</li>
                                <li><strong>Precision-Fit Inner Box:</strong> Inner rigid presentation boxes dimensioned to fit exactly within the corrugated outer with minimal movement—preventing the shifting, impact, and abrasion that damages both packaging and chocolate product when inner and outer dimensions are poorly matched for shipping dynamics.</li>
                                <li><strong>Temperature Conditioning:</strong> Optional cold-shield foil-laminate inner liners and phase-change material gel packs for warm-weather delivery months—protecting temperature-sensitive chocolate inclusions from heat-induced blooming during summer shipping without the cost and complexity of refrigerated courier networks.</li>
                            </ul>
                            <h3>Why CustomPackMakers for Chocolate Subscription Packaging</h3>
                            <p>Our subscription packaging team partners with chocolate subscription brands at every stage—from initial structural design and monthly theme rotation planning through production scheduling that coordinates with your subscriber billing and fulfillment timeline. We design for the entire subscriber lifecycle: the acquisition unboxing that converts first-time recipients into subscribers, the monthly experience that retains them, and the milestone moments that deepen long-term membership loyalty. Contact our team to discuss your chocolate subscription packaging program today.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-8 bg-accent/20">
                <div className="container mx-auto px-[5vw]">
                    <div className="mb-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Related Chocolate Products</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl">Explore our complete range of premium chocolate packaging across every format, occasion, and subscription tier.</p>
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
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">Monthly theme rotation, subscriber personalization, and D2C transit protection for premium chocolate subscription box programs.</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">
                        <div className="space-y-5">
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1"><div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors"><svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div></div>
                                <div><h3 className="text-lg font-bold text-slate-900 mb-2">Monthly Discovery Freshness</h3><p className="text-sm text-slate-500 leading-relaxed">Seasonal color palette rotation, monthly editorial interior panels, and rotating structural accents deliver the visual freshness with each delivery that maintains subscriber excitement and reduces churn—without the tooling re-investment of complete structural redesign, preserving the subscription business unit economics that make monthly theme variation commercially sustainable at scale.</p></div>
                            </div>
                            <div className="w-full h-px bg-slate-100" />
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1"><div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors"><svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg></div></div>
                                <div><h3 className="text-lg font-bold text-slate-900 mb-2">Subscriber Personalization at Scale</h3><p className="text-sm text-slate-500 leading-relaxed">Variable-data subscriber name printing, preference-based curation note integration, and milestone acknowledgment cards create the personal membership relationship that distinguishes premium chocolate subscription brands—building the emotional brand loyalty that sustains long-term subscriber retention and drives the organic referral growth that reduces acquisition cost across the subscription program's operating lifetime.</p></div>
                            </div>
                            <div className="w-full h-px bg-slate-100" />
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1"><div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors"><svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" /></svg></div></div>
                                <div><h3 className="text-lg font-bold text-slate-900 mb-2">D2C Shipping Protection</h3><p className="text-sm text-slate-500 leading-relaxed">Corrugated outer shippers, precision-fit rigid presentation boxes, and optional temperature-conditioning inserts protect chocolate subscription deliveries through the mechanical and thermal stresses of uncontrolled courier networks—ensuring every subscriber receives their monthly box in the pristine reveal-ready condition that justifies the subscription premium and sustains the brand reputation your subscription program depends on.</p></div>
                            </div>
                        </div>
                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img src={productHero} alt="Chocolate subscription box packaging" className="w-full h-full object-cover" />
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
                                <img src={productHero} alt="Differentiate Your Chocolate Subscription Brand" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                            </div>
                            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-60" />
                            <div className="absolute -z-10 -top-8 -right-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl opacity-60" />
                        </div>
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">Differentiate Your <span className="text-primary">Chocolate Subscription</span> From Others</h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">In a market where subscription box proliferation has trained consumers to cancel anything that feels repetitive, packaging freshness is the subscription retention mechanism. Our chocolate subscription box packaging delivers monthly discovery through theme rotation, subscriber personalization that creates genuine membership feeling, and D2C transit protection that ensures every delivery arrives as the premium unboxing event your subscribers photograph and share—sustaining the organic social visibility that attracts new subscribers and the emotional retention that keeps existing ones.</p>
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
                            <img src={FAQimage} alt="Chocolate Subscription Box FAQ" className="absolute inset-0 w-full h-full object-cover" />
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

export default ChocolateSubscriptionBox;
