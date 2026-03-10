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

import seedPackagingHero from "@/assets/cannabis-packaging/seed-packaging/img-hero.png";
import seedPackaging1 from "@/assets/cannabis-packaging/seed-packaging/img-1.png";
import seedPackaging2 from "@/assets/cannabis-packaging/seed-packaging/img-2.png";
import seedPackaging3 from "@/assets/cannabis-packaging/seed-packaging/img-3.png";
import seedPackaging4 from "@/assets/cannabis-packaging/seed-packaging/img-4.png";
import seedPackaging5 from "@/assets/cannabis-packaging/seed-packaging/img-5.png";
import seedPackaging6 from "@/assets/cannabis-packaging/seed-packaging/img-whychoose.png";
import seedPackaging7 from "@/assets/cannabis-packaging/seed-packaging/img-different.png";
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

const CannabisSeedPackaging = () => {
    const [selectedImage, setSelectedImage] = useState(0);
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);
    const productImages = [
        { src: seedPackaging1, alt: "Custom Cannabis Seed Packaging" },
        { src: seedPackaging2, alt: "Seed Packet Box Design" },
        { src: seedPackaging3, alt: "Cannabis Seed Container Open" },
        { src: seedPackaging4, alt: "Moisture-Proof Seed Packaging" },
        { src: seedPackaging5, alt: "Branded Cannabis Seed Box" },
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
                <title>Custom Cannabis Seed Packaging | Moisture-Proof Seed Boxes | CustomPackMakers</title>
                <meta name="description" content="Premium cannabis seed packaging with moisture-proof barriers, child-resistant closures, and custom strain printing. Protect seed viability and build brand authority in the legal market." />
                <meta name="keywords" content="cannabis seed packaging, seed boxes, moisture-proof seed containers, custom seed packets, cannabis seed boxes" />
                <meta property="og:title" content="Custom Cannabis Seed Packaging | Moisture-Proof Seed Boxes | CustomPackMakers" />
                <meta property="og:description" content="Protect seed viability and build brand authority with custom moisture-proof cannabis seed packaging designed for the legal market." />
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
                            <BreadcrumbItem><BreadcrumbPage>Cannabis Seed Packaging</BreadcrumbPage></BreadcrumbItem>
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
                                <span className="text-primary">Custom</span> Cannabis Seed Packaging
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Preserve seed viability and build brand authority with moisture-proof, UV-blocking seed packaging engineered for compliance and premium presentation in the legal cannabis market.
                            </p>
                            <div className="pt-2">
                                <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300" onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}>Get a Quote</Button>
                            </div>
                        </div>
                        <div className="lg:col-span-5 relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-muted group">
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200">
                                <img src={seedPackagingHero} alt="Custom Cannabis Seed Packaging" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 max-w-3xl">Protecting Seed Viability from Seed Bank to Grower</h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>Cannabis seeds are among the most biologically sensitive products in the legal market. Moisture, heat, UV radiation, and oxygen can destroy seed viability within weeks of improper storage. Our <strong className="text-foreground">custom cannabis seed packaging</strong> uses multi-layer foil barrier materials and UV-blocking lamination to create a hermetically stable environment that preserves seed germination rates for 12–24 months.</p>
                        <p>Beyond preservation, seed packaging serves as a critical compliance and branding document. With space for strain-specific genetics, THC/CBD lineage information, and full regulatory labeling, your seed packets communicate scientific credibility and brand prestige to professional cultivators and home growers alike.</p>
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
                                            <div className="space-y-1.5"><Label htmlFor="length" className="text-xs font-semibold text-muted-foreground">L (in)</Label><Input id="length" type="number" placeholder="4" className="h-9 bg-white" /></div>
                                            <div className="space-y-1.5"><Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label><Input id="width" type="number" placeholder="3" className="h-9 bg-white" /></div>
                                            <div className="space-y-1.5"><Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">D (in)</Label><Input id="depth" type="number" placeholder="1" className="h-9 bg-white" /></div>
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">The Complete Guide to Cannabis Seed Packaging</h2>
                    <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="[&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-slate-900 [&>h2]:mb-4 [&>h2]:mt-8 [&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-6 [&>h3]:mb-3 [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-4 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-4 [&>ul]:space-y-2 [&>ul>li]:text-[15px] [&>ul>li]:text-slate-600">
                            <h2>Packaging That Protects Genetic Investments</h2>
                            <p>Cannabis seeds represent significant genetic and financial investment for seed banks, breeders, and commercial cultivators. A single batch of feminized or autoflowering seeds from elite genetics can be worth thousands of dollars. When compromised by improper packaging—moisture ingress, heat damage, or UV degradation—the loss is irreversible. Our <strong>custom cannabis seed packaging</strong> is engineered as a precision instrument for preserving genetic viability across the entire supply chain, from breeder to end cultivator.</p>
                            <p>The legal seed market carries its own compliance obligations. Seed counts, THC content of the resulting plant, breeder licensing numbers, and child-resistant packaging requirements all appear on seed packets in regulated jurisdictions. Our design team integrates all mandatory disclosure text while preserving the premium, scientific aesthetic that serious cultivators respect and trust in seed bank branding.</p>

                            <h3>Medical-Grade Barrier Materials for Seed Viability</h3>
                            <p>The enemies of seed viability are moisture, oxygen, heat, and light. Our seed packaging neutralizes all four threats using materials typically used in pharmaceutical packaging—the same industries where product integrity over multi-year shelf periods is a baseline expectation.</p>
                            <ul>
                                <li><strong>Multi-Layer Foil Laminates:</strong> Aluminum foil barrier layers with BiaxiallyOriented Polypropylene (BOPP) exterior provide an MVTR (Moisture Vapor Transmission Rate) of near zero, eliminating moisture ingress that causes seed rot and germination failure.</li>
                                <li><strong>Oxygen Scavenger Integration:</strong> For premium seed banks requiring multi-year viability guarantees, we integrate oxygen-absorbing sachets or sachets directly into the pack structure, maintaining a near-zero oxygen environment inside the sealed packet.</li>
                                <li><strong>UV-Opaque Outer Box:</strong> Our outer carton uses UV-blocking inks and lamination to prevent the photodegradation of seed embryos, which can occur even through indirect light exposure during display storage.</li>
                                <li><strong>Temperature-Stable Adhesives:</strong> All structural adhesives used in seed packaging are tested for performance across temperature ranges from 40°F (cold storage) to 95°F (warm retail environments), preventing delamination or seal failure.</li>
                            </ul>

                            <h3>Child-Resistant Seed Packaging</h3>
                            <p>Cannabis seeds, while not directly consumable, fall under child-resistant packaging mandates in most regulated markets. We engineer CR-compliant seed packaging that is both effective for child-safety testing and elegant for the premium seed bank market.</p>
                            <ul>
                                <li><strong>CR Folding Carton with Inner Foil Pouch:</strong> A two-layer system where the inner foil pouch contains the seeds in a hermetic environment, and the outer carton features a CPSC-compliant push-and-pull tuck flap.</li>
                                <li><strong>CR Zip-Lock Foil Packets:</strong> Resealable foil pouches with a child-resistant zip-lock mechanism allow cultivators to access a portion of their seeds while resealing the remainder in a fresh, protected environment.</li>
                                <li><strong>Serialized Batch Coding:</strong> Every packet is printed with a unique batch identifier and QR code linking to genetic, germination rate, and breeder certification data—supporting seed-to-sale tracking compliance.</li>
                            </ul>

                            <h3>Premium Branding for Seed Banks and Breeders</h3>
                            <p>Elite seed banks compete on genetics, but their packaging is the first tangible experience a cultivator has with the brand. Packaging that communicates scientific precision and genetic quality commands premium prices and builds collector demand for limited genetics releases. We offer the full spectrum of premium finishing options suited to the sophistication of the seed bank market.</p>
                            <ul>
                                <li><strong>Embossed Genetic Illustrations:</strong> Detailed botanical illustrations with embossed or debossed detailing communicate the artisanal, science-forward identity of premium seed breeders.</li>
                                <li><strong>Metallic Foil Accents:</strong> Gold foil on strain names and breeder seals conveys genetic rarity and value—important signals in the collector seed market where limited editions command 10x premiums.</li>
                                <li><strong>Soft-Touch Packaging:</strong> Soft-touch matte lamination gives seed packets a velvety, premium tactile quality that differentiates elite genetics from mass-market seed collections.</li>
                                <li><strong>QR-Linked Genetic Profiles:</strong> QR codes linking to detailed terpene profiles, lineage charts, and cultivation guides add significant value to your packaging, building brand trust and repeat purchases.</li>
                            </ul>

                            <h3>Shelf-Life Extension Through Packaging Science</h3>
                            <p>Properly packaged cannabis seeds retain viability for 5+ years under ideal conditions. Our packaging systems are engineered to maximize this window, giving seed banks a quality guarantee they can confidently communicate to commercial cultivators making large genetic investments.</p>
                            <ul>
                                <li><strong>Hermetic Heat Sealing:</strong> Industrial heat-sealing equipment creates airtight foil seals with zero micro-pitting, preventing any atmospheric exchange that could degrade seed quality.</li>
                                <li><strong>Desiccant Integration:</strong> Silica gel or clay desiccant sachets are heat-welded directly into the inner pocket, maintaining relative humidity below 8%—the critical threshold for seed viability preservation.</li>
                                <li><strong>Food-Grade Safety:</strong> All inner-surface materials in contact with seeds meet FDA food-contact material standards, ensuring no chemical migration that could affect seed germination chemistry.</li>
                            </ul>

                            <h3>Why CustomPackMakers for Cannabis Seed Packaging</h3>
                            <ul>
                                <li><strong>Pharmaceutical-Grade Materials:</strong> We source barrier materials from suppliers serving the pharmaceutical and food industries, applying their quality standards to your seed packaging.</li>
                                <li><strong>Scalable Volumes:</strong> From 500-unit boutique genetics releases to 100,000-unit commercial seed bank productions, our facilities scale with your growth.</li>
                                <li><strong>Compliance Support:</strong> Our team understands multi-state seed regulations and builds labeling compliance into your design from the outset.</li>
                            </ul>
                            <p>Protect your genetic legacy with <strong>cannabis seed packaging</strong> built to pharmaceutical standards. Contact CustomPackMakers for a complimentary barrier engineering consultation.</p>
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
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">We apply pharmaceutical-grade material science to cannabis seed packaging, protecting genetic investments and building brand authority.</p>
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
                                    <p className="text-sm text-slate-500 leading-relaxed">Our seed packaging integrates all state-mandated disclosures—seed counts, THC lineage data, breeder license numbers, and regulatory warnings—directly into a compliant layout that also satisfies child-resistant packaging mandates across all major legal cannabis jurisdictions.</p>
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
                                    <p className="text-sm text-slate-500 leading-relaxed">CPSC-compliant CR foil pouches with child-resistant zip-locks and push-pull outer cartons provide dual-layer child safety without sacrificing the premium unboxing experience that elite seed bank customers expect when acquiring valuable genetics.</p>
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
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">High-Barrier Protection</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">Multi-layer aluminum foil laminates with near-zero MVTR ratings and integrated desiccant sachets maintain sub-8% relative humidity inside each packet, preserving seed germination viability for up to 5 years under proper storage conditions.</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img src={seedPackaging6} alt="Professional cannabis seed packaging" className="w-full h-full object-cover" />
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
                                <img src={seedPackaging7} alt="Differentiate Your Seed Brand" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                            </div>
                            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-60" />
                            <div className="absolute -z-10 -top-8 -right-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl opacity-60" />
                        </div>
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">Differentiate Your <span className="text-primary">Seed Brand</span> From Others</h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">Elite genetics deserve elite packaging. Our precision barrier seed packets with embossed botanical illustrations, metallic foil accents, and QR-linked genetic profiles command premium shelf prices—making your seed bank the first choice for serious cultivators investing in their next grow.</p>
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
                                    { id: "item-1", question: "How long does your seed packaging preserve viability?", answer: "With our multi-layer foil barrier and desiccant integration, properly stored seeds can maintain germination viability for up to 5 years under cool, dark conditions." },
                                    { id: "item-2", question: "Do you offer child-resistant seed packaging?", answer: "Yes. We offer CPSC-certified CR foil pouches and push-pull tuck cartons that meet child-resistant requirements across all major legal cannabis jurisdictions." },
                                    { id: "item-3", question: "Can you accommodate different seed counts per packet?", answer: "Absolutely. We engineer packets for any seed count—3 seeds, 5 seeds, 10 seeds, and bulk commercial quantities—with precise inner compartment sizing." },
                                    { id: "item-4", question: "Can you print detailed strain information and lineage data?", answer: "Yes. We design panels for full strain profiles including genetics, terpene data, cultivation notes, and breeder certifications with QR code integration." },
                                    { id: "item-5", question: "What is the minimum order quantity?", answer: "We offer flexible MOQs starting at 500 packets, making it practical for boutique seed banks releasing limited edition genetics alongside large commercial productions." }
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
                            <img src={FAQimage} alt="Cannabis Seed Packaging FAQ" className="absolute inset-0 w-full h-full object-cover" />
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

export default CannabisSeedPackaging;
