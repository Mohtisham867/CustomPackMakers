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

import cigaretteBoxesHero from "@/assets/cannabis-packaging/Cannabis-Cigarette-Boxes/img-hero.png";
import cigaretteimg1 from "@/assets/cannabis-packaging/Cannabis-Cigarette-Boxes/img-1.png";
import cigaretteimg2 from "@/assets/cannabis-packaging/Cannabis-Cigarette-Boxes/img-2.png";
import cigaretteimg3 from "@/assets/cannabis-packaging/Cannabis-Cigarette-Boxes/img-3.png";
import cigaretteimg4 from "@/assets/cannabis-packaging/Cannabis-Cigarette-Boxes/img-4.png";
import cigaretteimg5 from "@/assets/cannabis-packaging/Cannabis-Cigarette-Boxes/img-5.png";
import cigaretteimg6 from "@/assets/cannabis-packaging/Cannabis-Cigarette-Boxes/img-whychoose.png";
import cigaretteimg7 from "@/assets/cannabis-packaging/Cannabis-Cigarette-Boxes/img-different.png";
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

const CannabisCigaretteBoxes = () => {
    const [selectedImage, setSelectedImage] = useState(0);
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);
    const productImages = [
        { src: cigaretteimg1, alt: "Custom Cannabis Cigarette Box" },
        { src: cigaretteimg2, alt: "Pre-Roll Cigarette Packaging Front" },
        { src: cigaretteimg3, alt: "Cannabis Cigarette Box Open" },
        { src: cigaretteimg4, alt: "Child-Resistant Pre-Roll Box" },
        { src: cigaretteimg5, alt: "Branded Cannabis Cigarette Packaging" },
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
                <title>Custom Cannabis Cigarette Boxes | Pre-Roll Packaging | CustomPackMakers</title>
                <meta name="description" content="Premium cannabis cigarette boxes with child-resistant closures, tamper-evident seals, and high-definition custom printing for pre-roll products in the legal cannabis market." />
                <meta name="keywords" content="cannabis cigarette boxes, pre-roll packaging, cannabis pre-roll boxes, custom cigarette packaging, child-resistant pre-roll boxes" />
                <meta property="og:title" content="Custom Cannabis Cigarette Boxes | Pre-Roll Packaging | CustomPackMakers" />
                <meta property="og:description" content="Protect and brand your pre-roll products with compliant, premium cigarette-style packaging for the legal cannabis retail market." />
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
                            <BreadcrumbItem><BreadcrumbPage>Cannabis Cigarette Boxes</BreadcrumbPage></BreadcrumbItem>
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
                                <span className="text-primary">Custom</span> Cannabis Cigarette Boxes
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Elevate your pre-roll products with sophisticated cigarette-style packaging featuring certified child-resistant closures, fresh-preserving liners, and premium retail branding.
                            </p>
                            <div className="pt-2">
                                <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300" onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}>Get a Quote</Button>
                            </div>
                        </div>
                        <div className="lg:col-span-5 relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-muted group">
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200">
                                <img src={cigaretteBoxesHero} alt="Custom Cannabis Cigarette Boxes" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 max-w-3xl">Pre-Roll Packaging That Commands the Dispensary Shelf</h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>Cannabis pre-rolls presented in premium cigarette-style boxes transform a commodity product into a luxury experience. Our <strong className="text-foreground">custom cannabis cigarette boxes</strong> replicate the elegant flip-top structure of premium tobacco packaging—adapted for the legal cannabis market with certified child-resistant features, freshness-preserving inner foil liners, and the compliance labeling required by each jurisdiction.</p>
                        <p>Pre-rolls are the fastest-growing format in the cannabis market and the most purchased product category by new consumers. First impressions matter enormously—a well-designed cigarette box signals quality, professionalism, and a brand worth trusting. Our packaging helps you make that impression every single time.</p>
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
                                            <div className="space-y-1.5"><Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label><Input id="width" type="number" placeholder="2" className="h-9 bg-white" /></div>
                                            <div className="space-y-1.5"><Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">D (in)</Label><Input id="depth" type="number" placeholder="1" className="h-9 bg-white" /></div>
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">The Definitive Guide to Cannabis Cigarette Box Packaging</h2>
                    <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="[&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-slate-900 [&>h2]:mb-4 [&>h2]:mt-8 [&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-6 [&>h3]:mb-3 [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-4 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-4 [&>ul]:space-y-2 [&>ul>li]:text-[15px] [&>ul>li]:text-slate-600">
                            <h2>Luxury Pre-Roll Packaging for the Legal Cannabis Market</h2>
                            <p>The cannabis pre-roll market has undergone a dramatic premiumization over the past three years. What was once considered a low-margin commodity—a ready-made joint—has evolved into one of the most innovative product categories in the legal market. Infused pre-rolls, multi-pack cigarette boxes, and single premium joints now command prices rivaling craft spirits. <strong>Custom cannabis cigarette boxes</strong> from CustomPackMakers are engineered to match and reinforce this premium positioning with packaging that speaks sophistication from the first glance.</p>
                            <p>The classic cigarette box format has proven uniquely compelling for cannabis pre-rolls. The flip-top structure is intuitive, compact, protective, and signals quality to consumers conditioned by decades of premium tobacco packaging. We engineer this format specifically for the cannabis market—with the child-resistant closures, freshness barriers, and compliance labeling that the legal market demands, without sacrificing a single element of the premium aesthetic.</p>

                            <h3>Medical-Grade Materials: Freshness from Dispensary to Last Puff</h3>
                            <p>Cannabis pre-rolls are highly perishable. Terpenes—the aromatic compounds that define strain character and contribute to the entourage effect—begin to degrade immediately upon exposure to oxygen, light, and low humidity. Our cigarette boxes integrate medical-grade barrier materials specifically selected to preserve terpene profiles and prevent moisture loss that causes harsh, crumbly joints.</p>
                            <ul>
                                <li><strong>Inner Foil Liner:</strong> An aluminum foil or mylar inner liner creates a complete barrier against oxygen and moisture exchange, maintaining the optimal 55–62% relative humidity inside the box—the industry standard for preserved flower and pre-rolls.</li>
                                <li><strong>UV-Opaque Outer Shell:</strong> Medical-grade SBS outer board with UV-blocking lamination prevents the photodegradation of THC to CBN that occurs when pre-rolls are displayed under fluorescent dispensary lighting.</li>
                                <li><strong>Food-Grade Inner Surfaces:</strong> All inner surfaces in contact with pre-rolls use FDA-approved food-grade inks and coatings, preventing any chemical transfer to the cannabis product inside.</li>
                                <li><strong>Humidity-Stable Adhesives:</strong> Our structural adhesives are tested across humidity ranges typical of dispensary environments, ensuring boxes don't warp or delaminate during extended retail display periods.</li>
                            </ul>

                            <h3>Child-Resistant Mechanisms for Cigarette Box Formats</h3>
                            <p>Engineering child-resistant features into the sleek profile of a cigarette-style box is one of our core competencies. State regulations mandate CR packaging for all cannabis products, and the cigarette format presents unique structural challenges that we solve with elegance.</p>
                            <ul>
                                <li><strong>CR Flip-Top Mechanism:</strong> A patented push-and-slide CR mechanism replaces the standard flip-top hinge, requiring simultaneous pressing and lifting to open—passing CPSC adult panel tests while remaining intuitive for regular users.</li>
                                <li><strong>CR Tuck Sleeve Construction:</strong> An outer sleeve with a CR-certified push-in slide mechanism contains an inner tray holding the pre-rolls, combining tactile premium quality with full child-resistance certification.</li>
                                <li><strong>Tamper-Evident Foil Wrap:</strong> A breakable foil wrap sealed across the box opening provides immediate visual tamper evidence—required in most jurisdictions and a powerful consumer confidence signal at the point of sale.</li>
                            </ul>

                            <h3>Smell-Proof Engineering for Retail and Transport</h3>
                            <p>Cannabis pre-rolls carry a significant terpene aroma that presents retail display and transport challenges. Multi-layer barrier construction neutralizes odor migration, protecting the retail environment and ensuring your products can be displayed openly without complaints from neighboring retail sections.</p>
                            <ul>
                                <li><strong>EVOH Barrier Layer:</strong> Ethylene Vinyl Alcohol (EVOH) film laminated between outer board and inner liner provides outstanding odor-barrier properties, sealing terpene molecules inside the package with near-zero migration rate.</li>
                                <li><strong>Heat-Sealed Closure:</strong> The inner foil liner is heat-sealed rather than pressure-sealed, creating a hermetic closure that maintains odor containment until the consumer deliberately opens the package.</li>
                                <li><strong>Multi-Pack Freshness:</strong> For five-pack and ten-pack cigarette boxes, we engineer individual inner dividers with mini barrier pouches for each pre-roll, ensuring that opening the box for one doesn't compromise the freshness of the remaining product.</li>
                            </ul>

                            <h3>Premium Branding for the Pre-Roll Category</h3>
                            <p>The visual language of premium tobacco packaging translates powerfully to cannabis cigarette boxes. Embossed logos, metallic foil accents, and sophisticated colour palettes all signal quality to the discerning cannabis consumer who chooses pre-rolls as their primary consumption format.</p>
                            <ul>
                                <li><strong>Embossed Brand Mark:</strong> A debossed or embossed brand logo on the flip-top panel creates a tactile identity that consumers recognize even in low-light dispensary environments.</li>
                                <li><strong>Metallic Ink Details:</strong> Gold or silver metallic inks applied to borders, brand names, and strain identifiers give cigarette boxes a premium, limited-edition feel without the tooling cost of full foil stamping.</li>
                                <li><strong>Matte Lamination:</strong> Soft-touch matte lamination gives pre-roll boxes a velvety, upscale feel that stands in deliberate contrast to the glossy packaging of mass-market competitors.</li>
                            </ul>

                            <h3>Why CustomPackMakers for Cannabis Cigarette Packaging</h3>
                            <ul>
                                <li><strong>Pre-Roll Expertise:</strong> We have engineered cigarette-format packaging for dozens of cannabis brands across multiple states, giving us unique insight into what works structurally and aesthetically in this format.</li>
                                <li><strong>Modular SKU System:</strong> One structural design serves all your strain/product SKUs with colour-coded printing—reducing tooling investment and simplifying dispensary restocking.</li>
                                <li><strong>Fast Turnaround:</strong> Standard 8–12 business day production with express options for product launches or seasonal collections.</li>
                            </ul>
                            <p>Elevate your pre-roll brand with <strong>cannabis cigarette boxes</strong> that match the quality of the product inside. Contact CustomPackMakers for a complimentary design and compliance consultation today.</p>
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
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">Premium pre-roll packaging that meets every compliance standard while delivering the luxury experience your brand demands.</p>
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
                                    <p className="text-sm text-slate-500 leading-relaxed">Every cannabis cigarette box is designed to carry all state-mandated health warnings, batch codes, THC/CBD content disclosures, and QR traceability links within a carefully planned compliance panel that integrates seamlessly with premium brand graphics.</p>
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
                                    <p className="text-sm text-slate-500 leading-relaxed">CPSC-certified CR flip-top mechanisms and push-slide sleeve constructions pass all federal child safety tests without compromising the luxury cigarette box aesthetic—ensuring your pre-roll packaging is both legally compliant and shelf-worthy.</p>
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
                                    <p className="text-sm text-slate-500 leading-relaxed">EVOH odor-barrier films and hermetically sealed inner foil liners contain terpene vapors completely—allowing open retail display without aroma complaints while preserving ideal 55–62% relative humidity to keep every pre-roll smoking smoothly.</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img src={cigaretteimg6} alt="Professional cannabis cigarette packaging" className="w-full h-full object-cover" />
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
                                <img src={cigaretteimg7} alt="Differentiate Your Pre-Roll Brand" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                            </div>
                            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-60" />
                            <div className="absolute -z-10 -top-8 -right-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl opacity-60" />
                        </div>
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">Differentiate Your <span className="text-primary">Pre-Roll Brand</span> From Others</h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">In the fastest-growing cannabis category, mediocre packaging unfortunately makes even the most premium pre-rolls invisible to discerning consumers. At CustomPackMakers, our luxury cigarette-style boxes are meticulously designed to ensure your brand commands attention. Featuring sophisticated embossed logos, advanced odor-barrier liners, and secure CR flip-tops, our packaging signals superior quality and meticulous care to every consumer. By prioritizing both elegance and functionality, we help you turn simple first purchases into long-term dispensary loyalty, effectively showcasing your product’s premium status in a highly competitive retail environment.</p>
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
                                    { id: "item-1", question: "Do your cannabis cigarette boxes meet child-resistant requirements?", answer: "Yes. Our CR flip-top and push-slide mechanisms are CPSC-certified and we provide full compliance documentation for state regulatory authorities." },
                                    { id: "item-2", question: "Can you make smell-proof pre-roll cigarette boxes?", answer: "Absolutely. We integrate EVOH odor-barrier films and hermetically sealed inner foil liners that contain terpene vapors for open retail display without complaints." },
                                    { id: "item-3", question: "What pack sizes can you accommodate—singles, five-packs, ten-packs?", answer: "Yes. We engineer packaging for all pre-roll pack configurations—singles, 3-packs, 5-packs, 10-packs, and custom counts with individual inner dividers." },
                                    { id: "item-4", question: "Can you match the classic cigarette box flip-top format?", answer: "That is our specialty. We replicate premium cigarette box aesthetics with CR-adapted flip-tops, inner foil liners, and all compliance labeling integrated into the design." },
                                    { id: "item-5", question: "What is the minimum order quantity?", answer: "We offer MOQs starting at 500 units, making it practical for boutique pre-roll brands launching new strains alongside large commercial operations." }
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
                            <img src={FAQimage} alt="Cannabis Cigarette Boxes FAQ" className="absolute inset-0 w-full h-full object-cover" />
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

export default CannabisCigaretteBoxes;
