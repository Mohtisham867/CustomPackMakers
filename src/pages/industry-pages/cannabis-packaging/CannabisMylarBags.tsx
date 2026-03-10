import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { QuoteForm } from "@/components/QuoteForm";
import { BrandRating } from "@/components/BrandRating";
import { Card, CardContent } from "@/components/ui/card";
import {
    Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList,
    BreadcrumbPage, BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
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

import mylarBagsHero from "@/assets/cannabis-packaging/mylar-bags/img-hero.png";
import mylarBagsImg1 from "@/assets/cannabis-packaging/mylar-bags/img-1.png";
import mylarBagsImg2 from "@/assets/cannabis-packaging/mylar-bags/img-2.png";
import mylarBagsImg3 from "@/assets/cannabis-packaging/mylar-bags/img-3.png";
import mylarBagsImg4 from "@/assets/cannabis-packaging/mylar-bags/img-4.png";
import mylarBagsImg5 from "@/assets/cannabis-packaging/mylar-bags/img-5.png";
import mylarBagsImg6 from "@/assets/cannabis-packaging/mylar-bags/img-whychoose.png";
import mylarBagsImg7 from "@/assets/cannabis-packaging/mylar-bags/img-different.png";
import FAQimage from "@/assets/FAQ-image.png";
import tinctureBoxes from "@/assets/cannabis-packaging/tincture-boxes.png";
import vapePackaging from "@/assets/cannabis-packaging/vape-packaging.png";
import seedPackaging from "@/assets/cannabis-packaging/seed-packaging.png";
import cigaretteBoxes from "@/assets/cannabis-packaging/Cannabis Cigarette Boxes.png";
import mylarBags from "@/assets/cannabis-packaging/mylar-bags.webp";
import flowerPackaging from "@/assets/cannabis-packaging/flower-packaging.png";
import cartridgePackaging from "@/assets/marijuana-packaging/cartridge-packaging.webp";

const relatedProducts = [
    { name: "Cannabis Tincture Boxes", image: tinctureBoxes, description: "Child-resistant tincture packaging with dropper-safe inserts and compliant regulatory labeling.", link: "/industries/cannabis-packaging/cannabis-tincture-boxes" },
    { name: "Cannabis Vape Packaging", image: vapePackaging, description: "Premium vape pen boxes with secure display features and high-impact retail brand visibility.", link: "/industries/cannabis-packaging/cannabis-vape-packaging" },
    { name: "Cannabis Seed Packaging", image: seedPackaging, description: "Moisture-proof seed containers with custom high-definition printing and detailed strain information.", link: "/industries/cannabis-packaging/cannabis-seed-packaging" },
    { name: "Cannabis Cigarette Boxes", image: cigaretteBoxes, description: "Pre-roll cigarette packaging with secure child-resistant closures and professional custom branding.", link: "/industries/cannabis-packaging/cannabis-cigarette-boxes" },
    { name: "Cannabis Mylar Bags", image: mylarBags, description: "Smell-proof mylar bags with custom graphics, resealable zippers, and high-barrier protection.", link: "/industries/cannabis-packaging/cannabis-mylar-bags" },
    { name: "Cannabis Flower Packaging", image: flowerPackaging, description: "Airtight flower containers designed to preserve freshness, aroma, and potency for premium experience.", link: "/industries/cannabis-packaging/cannabis-flower-packaging" },
    { name: "Cannabis Cartridge Packaging", image: cartridgePackaging, description: "Secure cartridge boxes with custom inserts for maximum protection and professional display.", link: "/industries/cannabis-packaging/cannabis-cartridge-packaging" },
];

const CannabisMylarBags = () => {
    const [selectedImage, setSelectedImage] = useState(0);
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);
    const productImages = [
        { src: mylarBagsImg1, alt: "Custom Cannabis Mylar Bags" },
        { src: mylarBagsImg2, alt: "Smell-Proof Mylar Bag Front" },
        { src: mylarBagsImg3, alt: "Cannabis Mylar Bag Open" },
        { src: mylarBagsImg4, alt: "Resealable Cannabis Bag" },
        { src: mylarBagsImg5, alt: "Branded Cannabis Mylar Packaging" },
    ];
    useEffect(() => {
        if (!api) return;
        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap());
        api.on("select", () => { setCurrent(api.selectedScrollSnap()); });
    }, [api]);

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Cannabis Mylar Bags | Smell-Proof Packaging | CustomPackMakers</title>
                <meta name="description" content="Premium cannabis mylar bags with certified smell-proof barriers, child-resistant zippers, and full-surface custom printing for flower, edibles, and concentrate packaging." />
                <meta name="keywords" content="cannabis mylar bags, smell-proof bags, custom mylar bags, cannabis packaging bags, marijuana mylar bags, child-resistant bags" />
                <meta property="og:title" content="Custom Cannabis Mylar Bags | Smell-Proof Packaging | CustomPackMakers" />
                <meta property="og:description" content="Keep flower fresh and brand prominent with certified smell-proof cannabis mylar bags designed for the legal retail market." />
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
                            <BreadcrumbItem><BreadcrumbLink asChild><Link to="/industries/cannabis-packaging">Cannabis Packaging</Link></BreadcrumbLink></BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem><BreadcrumbPage>Cannabis Mylar Bags</BreadcrumbPage></BreadcrumbItem>
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
                                <span className="text-primary">Custom</span> Cannabis Mylar Bags
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                The industry standard for cannabis flower and extract packaging—high-barrier mylar bags with certified smell-proof performance, CR zippers, and full-surface brand printing.
                            </p>
                            <div className="pt-2">
                                <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300" onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}>Get a Quote</Button>
                            </div>
                        </div>
                        <div className="lg:col-span-5 relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-muted group">
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200">
                                <img src={mylarBagsHero} alt="Custom Cannabis Mylar Bags" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 max-w-3xl">The Gold Standard in Cannabis Barrier Packaging</h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>Mylar bags have become the dominant packaging format in the legal cannabis flower market because they deliver the highest available barrier protection in the industry. Our <strong className="text-foreground">custom cannabis mylar bags</strong> use medical-grade polyester/aluminum laminate structures that achieve near-zero oxygen and moisture transmission rates—the same barrier performance used in pharmaceutical blister packaging and military ration packs.</p>
                        <p>Beyond performance, mylar bags offer the largest printable surface area of any cannabis packaging format—providing brands with maximum creative real estate for full-wrap, photographic-quality graphics that command attention on dispensary shelves and generate social media engagement.</p>
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
                                            <div className="space-y-1.5"><Label htmlFor="length" className="text-xs font-semibold text-muted-foreground">L (in)</Label><Input id="length" type="number" placeholder="8" className="h-9 bg-white" /></div>
                                            <div className="space-y-1.5"><Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label><Input id="width" type="number" placeholder="5" className="h-9 bg-white" /></div>
                                            <div className="space-y-1.5"><Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">D (in)</Label><Input id="depth" type="number" placeholder="2" className="h-9 bg-white" /></div>
                                        </div>
                                        <div className="space-y-1.5"><Label htmlFor="quantity" className="text-xs font-semibold text-muted-foreground">Quantity</Label><Input id="quantity" type="number" placeholder="1000" className="h-9 bg-white" /></div>
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">The Complete Guide to Cannabis Mylar Bag Packaging</h2>
                    <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="[&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-slate-900 [&>h2]:mb-4 [&>h2]:mt-8 [&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-6 [&>h3]:mb-3 [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-4 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-4 [&>ul]:space-y-2 [&>ul>li]:text-[15px] [&>ul>li]:text-slate-600">
                            <h2>Why Mylar Bags Dominate the Legal Cannabis Market</h2>
                            <p>Since the earliest days of the legal cannabis market, mylar bags have been the preferred packaging format for dispensary flower sales. Their dominance is not accidental—it reflects genuine technical superiority in barrier performance, cost efficiency, and versatility that no other packaging format can match at equivalent price points. <strong>Custom cannabis mylar bags</strong> from CustomPackMakers apply pharmaceutical-grade barrier science and premium brand printing to help cannabis brands dominate category sales in licensed dispensaries.</p>
                            <p>The defining characteristic of mylar is its metalized polyester film structure. Biaxially oriented polyethylene terephthalate (BoPET) film—known commercially as Mylar—provides outstanding tensile strength, puncture resistance, and dimensional stability. When laminated with an aluminum foil or vapor-deposited aluminum layer, the result is one of the most effective barrier structures available to the packaging industry, bar none.</p>

                            <h3>Medical-Grade Barrier Science: Preserving Potency and Freshness</h3>
                            <p>Cannabis flower is extraordinarily sensitive to its packaging environment. Terpenes—the compounds responsible for strain character, aroma, and therapeutic effects—begin to evaporate at temperatures above 70°F. Cannabinoids degrade in the presence of oxygen and UV light, converting potent THC to sedative CBN over time. Our mylar bags are engineered to address every degradation pathway simultaneously.</p>
                            <ul>
                                <li><strong>Oxygen Transmission Rate (OTR):</strong> Our medical-grade mylar laminates achieve OTR values below 0.01 cc/m²/day—comparable to pharmaceutical blister packaging—preventing the oxidative conversion of THC that degrades flower potency over shelf life.</li>
                                <li><strong>Moisture Vapor Transmission Rate (MVTR):</strong> MVTR below 0.05 g/m²/day maintains optimal 55–62% relative humidity inside the bag through the entire retail cycle, preventing the drying and crumbling that makes customers reluctant to repurchase.</li>
                                <li><strong>UV-Opaque Structure:</strong> Full opacity in all layers prevents UV photodegradation of terpenes and cannabinoids during fluorescent dispensary display—maintaining original strain profile throughout the retail period.</li>
                                <li><strong>Heat-Sealed Closure:</strong> Industrial heat-sealing creates hermetic bottom and side seals with zero micro-pitting, ensuring complete barrier integrity from filling to sale—even under the mechanical stress of transport and retail handling.</li>
                            </ul>

                            <h3>Certified Smell-Proof Performance</h3>
                            <p>The terpene aroma of cannabis flower is one of the most recognizable and legally sensitive odors in retail commerce. Our mylar bags deliver certified smell-proof performance that meets the odor containment requirements of legal dispensaries and allows bags to be transported and displayed without restriction.</p>
                            <ul>
                                <li><strong>EVOH Barrier Layer:</strong> Ethylene Vinyl Alcohol (EVOH) film incorporated into the laminate structure provides outstanding terpene vapor containment—the same technology used in wine preservation bags and pharmaceutical primary packaging.</li>
                                <li><strong>Child-Resistant Zip-Lock:</strong> Our CR-certified zip-lock closures seal with an audible and tactile click that confirms closure, preventing incidental bag opening during transport that could cause aroma release in vehicles or public spaces.</li>
                                <li><strong>Tamper-Evident Heat Seal:</strong> An initial heat seal across the bag opening (separate from the zip-lock) provides a tamper-evident feature—required in most jurisdictions—that visually confirms product integrity at point of sale.</li>
                            </ul>

                            <h3>Child-Resistant Zip-Lock Engineering</h3>
                            <p>CPSC-certified child-resistant closures for flexible bag formats require specialized engineering. Standard press-to-close ziplocks fail CR testing—children find them intuitive to open. Our CR zip-locks incorporate a two-step mechanism requiring simultaneous pressing and squeezing to engage the track.</p>
                            <ul>
                                <li><strong>CPSC-Certified CR Zipper:</strong> Our proprietary CR zip-lock design passes both senior-friendly adult panel tests and child-resistant testing protocols, fulfilling the dual requirements of accessibility and safety.</li>
                                <li><strong>Resealable for Multi-Use:</strong> The CR zipper allows consumers to remove partial quantities and reseal the bag, maintaining freshness for the remaining flower—a practical feature that increases purchase satisfaction and repeat sales.</li>
                                <li><strong>Reinforced Zipper Walls:</strong> The zipper track is reinforced with heavier gauge film at the attachment point, preventing the delamination that causes non-compliant mylar bags to fail in the field.</li>
                            </ul>

                            <h3>Full-Surface Premium Branding</h3>
                            <p>The large flat surface area of mylar bags makes them the most impactful canvas in cannabis packaging. Full-surface, full-bleed printing allows brands to execute complex artwork—photographic flower imagery, gradient backgrounds, intricate botanical illustrations—that commands dispensary attention from across the room.</p>
                            <ul>
                                <li><strong>10-Color Flexographic Printing:</strong> Up to 10 ink colors including metallic and fluorescent options allow the full spectrum of brand expression on mylar surfaces.</li>
                                <li><strong>Matte or Gloss Finish:</strong> Matte lamination for a premium, editorial aesthetic, or high-gloss finish for vivid colour saturation and retail impact—your choice for every SKU.</li>
                                <li><strong>Window Cutouts:</strong> Clear window panels in die-cut shapes allow consumers to see the flower inside, building purchase confidence and reducing uncertainty about product quality.</li>
                                <li><strong>QR and Batch Coding:</strong> Variable data printing integrates unique QR codes and batch identifiers direct-to-surface, enabling seed-to-sale compliance tracking without sticker application.</li>
                            </ul>

                            <h3>Why CustomPackMakers for Cannabis Mylar Bags</h3>
                            <ul>
                                <li><strong>Pharmaceutical Barrier Standards:</strong> We source mylar film from suppliers serving the pharmaceutical and food industries, applying their quality standards to your cannabis packaging.</li>
                                <li><strong>Flexible MOQs:</strong> Start from 500 bags per SKU—practical for boutique flower brands alongside large commercial productions.</li>
                                <li><strong>Compliance Built-In:</strong> All labeling requirements are designed into your bag template from the outset, eliminating costly reprints and compliance corrections.</li>
                            </ul>
                            <p>Elevate your flower brand with <strong>cannabis mylar bags</strong> built to pharmaceutical barrier standards. Contact CustomPackMakers for a complimentary design and barrier specification consultation today.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-8 bg-accent/20">
                <div className="container mx-auto px-[5vw]">
                    <div className="mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Related Cannabis Products</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl">Explore our complete range of premium cannabis packaging solutions designed to protect, comply, and impress.</p>
                    </div>
                    <div className="relative px-4">
                        <Carousel setApi={setApi} opts={{ align: "start", loop: true }} plugins={[Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })]} className="w-full">
                            <CarouselContent className="-ml-4">
                                {relatedProducts.map((product, index) => (
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
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">Pharmaceutical-grade barrier science, certified smell-proof performance, and premium brand printing that dominates the dispensary shelf.</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">
                        <div className="space-y-5">
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Regulatory Compliance</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">Every cannabis mylar bag is engineered with full-surface panels for state-mandated health warnings, QR traceability codes, batch identifiers, and THC/CBD disclosures—integrated during the design phase to ensure labeling compliance across all regulated cannabis markets without post-production sticker applications.</p>
                                </div>
                            </div>
                            <div className="w-full h-px bg-slate-100" />
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors duration-300">
                                        <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Child-Resistant Features</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">Our proprietary CPSC-certified CR zip-lock mechanism passes all federal child safety testing protocols while remaining reliably reusable for adult consumers—combining legal compliance with a premium, resealable freshness feature that actively increases consumer satisfaction and repeat purchase rates.</p>
                                </div>
                            </div>
                            <div className="w-full h-px bg-slate-100" />
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors duration-300">
                                        <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">High-Barrier Smell-Proof Protection</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">Medical-grade PET/foil/EVOH laminate structures achieve near-zero OTR and MVTR ratings—certified smell-proof performance that preserves terpene profiles and flower potency while eliminating aroma complaints in dispensary retail environments and during consumer transport.</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img src={mylarBagsImg6} alt="Professional cannabis mylar bag packaging" className="w-full h-full object-cover" />
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
                                <img src={mylarBagsImg7} alt="Differentiate Your Cannabis Bag Brand" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                            </div>
                            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-60" />
                            <div className="absolute -z-10 -top-8 -right-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl opacity-60" />
                        </div>
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">Differentiate Your <span className="text-primary">Flower Brand</span> From Others</h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">At CustomPackMakers, we believe that full-wrap photographic printing on pharmaceutical-grade barrier bags provides your flower brand with a striking visual impact that no competitor can match. By strategically incorporating advanced features like secure CR zippers, custom window cutouts, and sophisticated embossed finishes, we transform a standard commodity bag into the premium brand touchpoint your high-quality product truly deserves. Our expert team ensures that every detail reflects excellence, effectively capturing consumer attention while maintaining product freshness and signaling a level of professionalism that builds lasting market authority.</p>
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
                                {[
                                    { id: "item-1", question: "Are your cannabis mylar bags truly smell-proof?", answer: "Yes. Our PET/foil/EVOH laminate structure achieves certified smell-proof performance with near-zero OTR and MVTR ratings—suitable for dispensary display and consumer transport." },
                                    { id: "item-2", question: "Do your mylar bags have child-resistant closures?", answer: "Yes. Our proprietary CR zip-lock is CPSC-certified, passing child safety testing while remaining accessible to adult consumers and maintaining a hermetic resealable seal." },
                                    { id: "item-3", question: "Can you print full-color designs on mylar bags?", answer: "Absolutely. We offer up to 10-color flexographic printing with matte or gloss lamination, including photographic imagery, gradients, and metallic ink accents." },
                                    { id: "item-4", question: "What sizes are available for cannabis mylar bags?", answer: "We offer a full size range from small concentrate pouches (2×3 inches) to large flower bags (12×18 inches), with any custom size available for specific product requirements." },
                                    { id: "item-5", question: "What is the minimum order quantity?", answer: "We offer MOQs starting at 500 bags per design, with bulk pricing at 5,000+ units for established brands requiring regular dispensary restocking volumes." }
                                ].map((faq) => (
                                    <AccordionItem key={faq.id} value={faq.id} className="border border-slate-200 rounded-lg bg-white overflow-hidden data-[state=open]:border-primary data-[state=open]:ring-1 data-[state=open]:ring-primary/20 data-[state=open]:bg-primary/5 transition-all duration-300">
                                        <AccordionTrigger className="px-5 py-3 hover:no-underline [&>svg]:hidden group">
                                            <span className="text-left font-semibold text-foreground text-base">{faq.question}</span>
                                            <div className="shrink-0 ml-4 p-1 rounded-full bg-slate-100 group-data-[state=open]:bg-primary group-data-[state=open]:text-white transition-colors duration-200">
                                                <Plus className="h-3 w-3 group-data-[state=open]:hidden" />
                                                <Minus className="h-3 w-3 hidden group-data-[state=open]:block" />
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent className="px-5 pb-5 pt-0 text-slate-600 leading-relaxed text-sm">{faq.answer}</AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                        <div className="relative w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden">
                            <img src={FAQimage} alt="Cannabis Mylar Bags FAQ" className="absolute inset-0 w-full h-full object-cover" />
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

export default CannabisMylarBags;
