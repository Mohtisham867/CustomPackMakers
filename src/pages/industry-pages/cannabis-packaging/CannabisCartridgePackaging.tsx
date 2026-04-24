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

import cartridgePackagingHero from "@/assets/cannabis-packaging/cartridge-packaging/img-hero.webp";
import cartridgePackagingImg1 from "@/assets/cannabis-packaging/cartridge-packaging/img-1.webp";
import cartridgePackagingImg2 from "@/assets/cannabis-packaging/cartridge-packaging/img-2.webp";
import cartridgePackagingImg3 from "@/assets/cannabis-packaging/cartridge-packaging/img-3.webp";
import cartridgePackagingImg4 from "@/assets/cannabis-packaging/cartridge-packaging/img-4.webp";
import cartridgePackagingImg5 from "@/assets/cannabis-packaging/cartridge-packaging/img-5.webp";
import cartridgePackagingImg6 from "@/assets/cannabis-packaging/cartridge-packaging/img-whychoose.webp";
import cartridgePackagingImg7 from "@/assets/cannabis-packaging/cartridge-packaging/img-different.webp";
import FAQimage from "@/assets/FAQ-image.webp";
import tinctureBoxes from "@/assets/cannabis-packaging/tincture-boxes.webp";
import vapePackaging from "@/assets/cannabis-packaging/vape-packaging.webp";
import seedPackaging from "@/assets/cannabis-packaging/seed-packaging.webp";
import cigaretteBoxes from "@/assets/cannabis-packaging/Cannabis Cigarette Boxes.webp";
import mylarBags from "@/assets/cannabis-packaging/mylar-bags.webp";
import flowerPackaging from "@/assets/cannabis-packaging/flower-packaging.webp";
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

const CannabisCartridgePackaging = () => {
    const [selectedImage, setSelectedImage] = useState(0);
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);
    const productImages = [
        { src: cartridgePackagingImg1, alt: "Custom Cannabis Cartridge Packaging" },
        { src: cartridgePackagingImg2, alt: "510 Thread Cartridge Box Front" },
        { src: cartridgePackagingImg3, alt: "Cannabis Cartridge Box Open" },
        { src: cartridgePackagingImg4, alt: "Child-Resistant Cartridge Packaging" },
        { src: cartridgePackagingImg5, alt: "Branded Cannabis Cartridge Box" },
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
                <title>Custom Cannabis Cartridge Packaging | 510 Thread Cart Boxes | CustomPackMakers</title>
                <meta name="description" content="Premium cannabis cartridge packaging with precision-fit inserts, child-resistant closures, and high-impact custom printing for 510-thread and proprietary cartridge systems." />
                <meta name="keywords" content="cannabis cartridge packaging, 510 thread cartridge boxes, vape cartridge packaging, custom cart boxes, child-resistant cartridge packaging" />
                <meta property="og:title" content="Custom Cannabis Cartridge Packaging | 510 Thread Cart Boxes | CustomPackMakers" />
                <meta property="og:description" content="Protect your cartridges from bend damage and leakage with precision-fit custom packaging for 510-thread and proprietary cartridge systems." />
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
                            <BreadcrumbItem><BreadcrumbPage>Cannabis Cartridge Packaging</BreadcrumbPage></BreadcrumbItem>
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
                                <span className="text-primary">Custom</span> Cannabis Cartridge Packaging
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Precision-engineered cartridge boxes with form-fit inserts, certified child-resistant closures, and premium retail printing that protect cartridges and build brand authority on the dispensary shelf.
                            </p>
                            <div className="pt-2">
                                <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300" onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}>Get a Quote</Button>
                            </div>
                        </div>
                        <div className="lg:col-span-5 relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-muted group">
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200">
                                <img src={cartridgePackagingHero} alt="Custom Cannabis Cartridge Packaging" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 max-w-3xl">Engineering Protection for Precision Devices</h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>Cannabis oil cartridges are precision-manufactured devices containing concentrated cannabis extract worth significant investment per unit. A bent center post, cracked glass chamber, or damaged mouthpiece results in product loss, consumer disappointment, and potential oil leakage—all preventable with properly engineered packaging. Our <strong className="text-foreground">custom cannabis cartridge packaging</strong> uses precision-cut inserts and high-caliper board to immobilize cartridges completely, preventing every common transit and handling damage mode.</p>
                        <p>Cartridge packaging exists in the visual crossroads between consumer electronics and cannabis retail. Consumers expect the sleek, precision aesthetic of tech product packaging—clean lines, premium materials, and satisfying unboxing mechanics—combined with the compliance elements and strain information required by the cannabis market. We deliver both without compromise.</p>
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
                                            <div className="space-y-1.5"><Label htmlFor="length" className="text-xs font-semibold text-muted-foreground">L (in)</Label><Input id="length" type="number" placeholder="5" className="h-9 bg-white" /></div>
                                            <div className="space-y-1.5"><Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label><Input id="width" type="number" placeholder="1.5" className="h-9 bg-white" /></div>
                                            <div className="space-y-1.5"><Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">D (in)</Label><Input id="depth" type="number" placeholder="1.5" className="h-9 bg-white" /></div>
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">The Complete Guide to Cannabis Cartridge Packaging</h2>
                    <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="[&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-slate-900 [&>h2]:mb-4 [&>h2]:mt-8 [&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-6 [&>h3]:mb-3 [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-4 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-4 [&>ul]:space-y-2 [&>ul>li]:text-[15px] [&>ul>li]:text-slate-600">
                            <h2>Precision Packaging for High-Value Extract Devices</h2>
                            <p>Cannabis oil cartridges represent a unique packaging challenge in the legal market. They are simultaneously high-value consumer electronics, concentrated psychoactive product, and a regulated cannabis SKU—each category carrying its own packaging demands. Our <strong>custom cannabis cartridge packaging</strong> is engineered to satisfy all three simultaneously: protecting the device with precision-fit inserts, complying with cannabis labeling regulations, and delivering the premium retail presentation that the concentrated extract market commands.</p>
                            <p>The 510-thread cartridge is now the most universally adopted format in the cannabis concentrate market. Its standardized dimensions have enabled a rich ecosystem of packaging solutions—but generic blister packs and flimsily inserted boxes have flooded dispensaries, leaving an opening for brands willing to invest in premium packaging as a competitive differentiator. Our precision-engineered cartridge boxes with die-cut foam or molded fiber inserts deliver the Apple-level unboxing quality that converts first-time purchasers into brand loyalists.</p>

                            <h3>Medical-Grade Material Engineering for Cartridge Protection</h3>
                            <p>Cannabis oil cartridges fail in specific, predictable ways during transit and retail handling. A bent center post prevents the cartridge from threading onto a battery. A cracked glass chamber causes oil leakage that can coat the threading and make the cartridge unusable. Damaged mouthpiece tips break the consumer experience from the first draw. Our packaging engineering addresses every failure mode.</p>
                            <ul>
                                <li><strong>Precision Die-Cut SBS Inserts:</strong> Die-cut from 24pt SBS board, our inserts cradle cartridge bodies with zero lateral movement tolerance—preventing the side-impact deformation that bends center posts and cracks glass chambers during drop events and transit vibration.</li>
                                <li><strong>Mouthpiece Protection Channel:</strong> A dedicated upper channel in the insert protects the mouthpiece tip from direct contact forces when the box is dropped—eliminating the most common cartridge damage mode in retail handling.</li>
                                <li><strong>Anti-Scratch Inner Lining:</strong> A smooth, non-abrasive inner liner prevents the micro-scratching of glass cartridge bodies that consumers notice and associate with compromised quality.</li>
                                <li><strong>Impact-Resistant Outer Box:</strong> 18–24pt SBS outer construction provides drop resistance from heights exceeding standard retail handling specs—protecting both the cartridge and the oil inside from impact-induced micro-fractures in the glass chamber.</li>
                            </ul>

                            <h3>Child-Resistant Design for Cartridge Format</h3>
                            <p>Cartridges require robust child-resistant packaging despite their small form factor. Standard tuck-end boxes provide zero child resistance—and fail regulatory inspection in all major legal cannabis jurisdictions. We engineer CR-certified solutions specifically for the cartridge format that don't compromise the premium aesthetic or add unnecessary bulk.</p>
                            <ul>
                                <li><strong>CR Slide Drawer Construction:</strong> A two-piece slide-out box where the inner tray requires simultaneous pressing and sliding to release—providing CPSC-certified CR performance in a format that feels intentional and premium rather than functional and clunky.</li>
                                <li><strong>CR Magnetic Flip-Top:</strong> For premium single-cartridge packaging, a CR-certified magnetic flip-top mechanism requires pressing a concealed button to release the lid—delivering both child resistance and a satisfying, tech-product unboxing experience.</li>
                                <li><strong>Tamper-Evident Holographic Label:</strong> Applied across the box opening before retail display, our holographic tamper-evident labels provide immediate visual confirmation of product integrity—required in most jurisdictions and a powerful consumer trust signal.</li>
                            </ul>

                            <h3>Odor Barrier and Oil Leakage Containment</h3>
                            <p>Cannabis oil is a concentrated, aromatic product. Even micro-scale leakage from a poorly manufactured cartridge connection can contaminate the packaging interior, stain packaging surfaces, and create retail odor issues. Our cartridge packaging incorporates containment features specifically designed to isolate any incidental leakage without allowing it to compromise the package exterior.</p>
                            <ul>
                                <li><strong>Oil-Impermeable Inner Surface:</strong> A polyethylene-coated inner surface prevents oil absorption into the board substrate, allowing any leakage to be contained without wicking through to the printed exterior—protecting the package's retail presentation integrity.</li>
                                <li><strong>Foil-Lined Insert Option:</strong> For extra protection against terpene vapor migration from cartridge connections, we offer aluminum foil-lined inserts that completely contain aroma inside the package—enabling open retail display without odor concerns.</li>
                                <li><strong>Individual Blister Option:</strong> For multi-pack cartridge retail sets, individual CR blisters within an outer display box provide separate containment for each unit—preventing any single unit's leakage from affecting the remaining product.</li>
                            </ul>

                            <h3>Premium Branding That Signals Technology and Quality</h3>
                            <p>The cartridge consumer is the most tech-forward buyer in the legal cannabis market. They respond to packaging aesthetics that reference consumer electronics—clean geometric designs, minimal color palettes, precision printing, and satisfying physical mechanics that suggest engineering quality. We specialize in this intersection of cannabis and tech branding.</p>
                            <ul>
                                <li><strong>Soft-Touch Matte + Spot UV:</strong> The definitive premium finish combination—a silky matte base with high-gloss spot UV on brand marks creates a tactile and visual contrast that signals luxury and precision manufacturing.</li>
                                <li><strong>Holographic or Silver Foil:</strong> Technical, futuristic foil treatments on logos and strain names align with the technology-forward identity that cartridge consumers associate with quality extract processing.</li>
                                <li><strong>Window Panel with Inner Display Platform:</strong> A die-cut window with the cartridge mounted on a contoured display platform allows consumers to see the oil color, fill level, and hardware quality before purchase—the most effective tool for justifying premium pricing at the dispensary display case.</li>
                            </ul>

                            <h3>Why CustomPackMakers for Cannabis Cartridge Packaging</h3>
                            <ul>
                                <li><strong>510-Thread Expertise:</strong> We have engineered packaging for universal 510-thread, CCELL, and proprietary cartridge formats across dozens of cannabis brands in multiple states.</li>
                                <li><strong>Precision Insert Engineering:</strong> Our insert die-cutting tolerances of ±0.5mm ensure every cartridge fits perfectly—no rattling, no damage, no consumer returns.</li>
                                <li><strong>Compliance-First Design:</strong> All regulatory labeling requirements are integrated into the design template from day one, eliminating costly compliance corrections before production.</li>
                            </ul>
                            <p>Protect your cartridges and build your brand with <strong>cannabis cartridge packaging</strong> engineered to the standard your extract quality deserves. Contact CustomPackMakers for a complimentary engineering and design consultation today.</p>
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
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">Precision insert engineering, certified child-resistant closures, and premium tech aesthetics for the most competitive category in cannabis.</p>
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
                                    <p className="text-sm text-slate-500 leading-relaxed">Our cartridge packaging is designed with dedicated compliance panels for all state-mandated labeling—THC/CBD concentration, health warnings, batch codes, and QR traceability links—integrated seamlessly into the premium tech-inspired design without cluttering the brand's visual identity.</p>
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
                                    <p className="text-sm text-slate-500 leading-relaxed">CPSC-certified CR slide-drawer and magnetic flip-top mechanisms provide full child-resistant protection in cartridge-format packaging—passing all required federal safety testing while delivering the satisfying tech-product unboxing aesthetics that premium concentrates consumers expect.</p>
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
                                    <p className="text-sm text-slate-500 leading-relaxed">Oil-impermeable inner surfaces and foil-lined insert options contain incidental terpene vapor migration and oil leakage completely—protecting retail packaging integrity and eliminating aroma complaints while precision ±0.5mm insert tolerances prevent all cartridge movement damage during transport.</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img src={cartridgePackagingImg6} alt="Professional cannabis cartridge packaging" className="w-full h-full object-cover" />
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
                                <img src={cartridgePackagingImg7} alt="Differentiate Your Cartridge Brand" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                            </div>
                            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-60" />
                            <div className="absolute -z-10 -top-8 -right-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl opacity-60" />
                        </div>
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">Differentiate Your <span className="text-primary">Cartridge Brand</span> From Others</h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">In the crowded cartridge category, generic packaging makes premium oil invisible. Our tech-inspired cartridge boxes with precision-fit inserts, holographic foil, and window display panels position your brand in the premium tier—making your cartridges the first choice for discerning concentrate consumers at every dispensary visit.</p>
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
                                    { id: "item-1", question: "Do your cartridge boxes work with 510-thread and proprietary formats?", answer: "Yes. We engineer custom inserts for any cartridge form factor—510-thread, CCELL, Puffco, and proprietary systems—with precision ±0.5mm tolerances for zero-movement protection." },
                                    { id: "item-2", question: "Are your cartridge boxes child-resistant?", answer: "Yes. We offer CPSC-certified CR slide-drawer and magnetic flip-top mechanisms that pass all federal child safety testing while maintaining premium tech-inspired aesthetics." },
                                    { id: "item-3", question: "Can you add a window cutout so consumers can see the cartridge?", answer: "Absolutely. Die-cut windows with clear PET film allow consumers to view oil color, fill level, and hardware quality before purchase—our most popular option for premium concentrates." },
                                    { id: "item-4", question: "Do you offer oil-proof or smell-proof interior options?", answer: "Yes. Oil-impermeable PE-coated inner surfaces and optional foil-lined inserts prevent oil absorption, surface staining, and terpene vapor migration from incidental leakage." },
                                    { id: "item-5", question: "What is the minimum order quantity for cartridge packaging?", answer: "We offer MOQs starting at 500 units per SKU, practical for new strain launches, alongside large commercial volumes for established multi-SKU concentrate brands." }
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
                            <img src={FAQimage} alt="Cannabis Cartridge Packaging FAQ" className="absolute inset-0 w-full h-full object-cover" />
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

export default CannabisCartridgePackaging;
