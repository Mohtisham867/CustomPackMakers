import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { QuoteForm } from "@/components/QuoteForm";
import { BrandRating } from "@/components/BrandRating";
import { Card, CardContent } from "@/components/ui/card";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TechnicalSpecsSection } from "@/components/TechnicalSpecsSection";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";

import vapePackagingHero from "@/assets/industry/cannabis-packaging/vape-packaging/img-hero.webp";
import vapePackaging1 from "@/assets/industry/cannabis-packaging/vape-packaging/img-1.webp";
import vapePackaging2 from "@/assets/industry/cannabis-packaging/vape-packaging/img-2.webp";
import vapePackaging3 from "@/assets/industry/cannabis-packaging/vape-packaging/img-3.webp";
import vapePackaging4 from "@/assets/industry/cannabis-packaging/vape-packaging/img-4.webp";
import vapePackaging5 from "@/assets/industry/cannabis-packaging/vape-packaging/img-5.webp";
import vapePackaging6 from "@/assets/industry/cannabis-packaging/vape-packaging/img-whychoose.webp";
import vapePackaging7 from "@/assets/industry/cannabis-packaging/vape-packaging/img-different.webp";
import FAQimage from "@/assets/FAQ-image.webp";

import tinctureBoxes from "@/assets/industry/cannabis-packaging/tincture-boxes.webp";
import vapePackaging from "@/assets/industry/cannabis-packaging/vape-packaging.webp";
import seedPackaging from "@/assets/industry/cannabis-packaging/seed-packaging.webp";
import cigaretteBoxes from "@/assets/industry/cannabis-packaging/Cannabis Cigarette Boxes.webp";
import mylarBags from "@/assets/industry/cannabis-packaging/mylar-bags.webp";
import flowerPackaging from "@/assets/industry/cannabis-packaging/flower-packaging.webp";
import cartridgePackaging from "@/assets/industry/marijuana-packaging/cartridge-packaging.webp";

const relatedProducts = [
    { name: "Cannabis Tincture Boxes", image: tinctureBoxes, description: "Child-resistant tincture packaging with dropper-safe inserts and compliant regulatory labeling.", link: "/industries/cannabis-packaging/cannabis-tincture-boxes" },
    { name: "Cannabis Vape Packaging", image: vapePackaging, description: "Premium vape pen boxes with secure display features and high-impact retail brand visibility.", link: "/industries/cannabis-packaging/cannabis-vape-packaging" },
    { name: "Cannabis Seed Packaging", image: seedPackaging, description: "Moisture-proof seed containers with custom high-definition printing and detailed strain information.", link: "/industries/cannabis-packaging/cannabis-seed-packaging" },
    { name: "Cannabis Cigarette Boxes", image: cigaretteBoxes, description: "Pre-roll cigarette packaging with secure child-resistant closures and professional custom branding.", link: "/industries/cannabis-packaging/cannabis-cigarette-boxes" },
    { name: "Cannabis Mylar Bags", image: mylarBags, description: "Smell-proof mylar bags with custom graphics, resealable zippers, and high-barrier protection.", link: "/industries/cannabis-packaging/cannabis-mylar-bags" },
    { name: "Cannabis Flower Packaging", image: flowerPackaging, description: "Airtight flower containers designed to preserve freshness, aroma, and potency for premium experience.", link: "/industries/cannabis-packaging/cannabis-flower-packaging" },
    { name: "Cannabis Cartridge Packaging", image: cartridgePackaging, description: "Secure cartridge boxes with custom inserts for maximum protection and professional display.", link: "/industries/cannabis-packaging/cannabis-cartridge-packaging" },
];

const CannabisVapePackaging = () => {
    const [selectedImage, setSelectedImage] = useState(0);
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);

    const productImages = [
        { src: vapePackaging1, alt: "Custom Cannabis Vape Packaging" },
        { src: vapePackaging2, alt: "Vape Pen Box - Front View" },
        { src: vapePackaging3, alt: "Cannabis Vape Packaging - Open" },
        { src: vapePackaging4, alt: "Premium Vape Box Design" },
        { src: vapePackaging5, alt: "Branded Cannabis Vape Packaging" },
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
                <title>Custom Cannabis Vape Packaging | Vape Pen Boxes | CustomPackMakers</title>
                <meta name="description" content="Premium custom cannabis vape packaging featuring child-resistant closures, smell-proof liners, and high-impact retail printing for vape pens and cartridges." />
                <meta name="keywords" content="cannabis vape packaging, vape pen boxes, vape cartridge packaging, child-resistant vape boxes, custom cannabis vape boxes" />
                <meta property="og:title" content="Custom Cannabis Vape Packaging | Vape Pen Boxes | CustomPackMakers" />
                <meta property="og:description" content="Protect and showcase your vape products with compliant, premium packaging designed for the legal cannabis retail market." />
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
                            <BreadcrumbItem><BreadcrumbPage>Cannabis Vape Packaging</BreadcrumbPage></BreadcrumbItem>
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
                                <span className="text-primary">Custom</span> Cannabis Vape Packaging
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Showcase your vape pens and cartridges with premium, child-resistant packaging engineered for compliance and dispensary shelf impact—designed to win at first glance.
                            </p>
                            <div className="pt-2">
                                <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300" onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}>
                                    Get a Quote
                                </Button>
                            </div>
                        </div>
                        <div className="lg:col-span-5 relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-muted group">
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200">
                                <img src={vapePackagingHero} alt="Custom Cannabis Vape Packaging" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 max-w-3xl">
                        Vape Packaging Built for Compliance and Retail Impact
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            Cannabis vape packaging must balance sleek aesthetics with serious functional requirements. Our <strong className="text-foreground">custom cannabis vape packaging</strong> is engineered from high-caliper SBS board with precision-cut inserts that hold vape pens and cartridges securely, preventing rattling, scratching, and battery activation during transit—a critical safety consideration for lithium-cell devices.
                        </p>
                        <p>
                            With the vape category being one of the most visually competitive in the dispensary, packaging design is your primary brand differentiator. We offer full-bleed CMYK printing, premium foil stamping, soft-touch matte lamination, and spot UV treatments that reflect the sophisticated, tech-forward identity that today's vape consumers expect.
                        </p>
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
                                            <div className="space-y-1.5"><Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label><Input id="width" type="number" placeholder="1" className="h-9 bg-white" /></div>
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">
                        The Complete Guide to Cannabis Vape Packaging
                    </h2>
                    <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="[&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-slate-900 [&>h2]:mb-4 [&>h2]:mt-8 [&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-6 [&>h3]:mb-3 [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-4 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-4 [&>ul]:space-y-2 [&>ul>li]:text-[15px] [&>ul>li]:text-slate-600">
                            <h2>Premium Packaging for the Cannabis Vape Category</h2>
                            <p>
                                The cannabis vape category has exploded into one of the most lucrative and visually competitive segments in the legal market. Vape pens and cartridges attract a design-forward consumer base that evaluates packaging as a direct proxy for product quality. Our <strong>custom cannabis vape packaging</strong> is engineered to meet the dual demands of stringent regulatory compliance and premium retail presentation—giving your brand the shelf presence it deserves in licensed dispensaries.
                            </p>
                            <p>
                                Regulatory requirements for vape packaging are among the most complex in the cannabis industry. Child-resistant closures, tamper-evident seals, opaque outer packaging, health warnings, batch codes, and QR traceability links are all mandatory across most legal jurisdictions. Our design team integrates all these requirements into a seamlessly branded package that never looks like a compliance afterthought.
                            </p>

                            <h3>Medical-Grade Materials for Product Safety</h3>
                            <p>
                                Vape pens and cartridges are delicate, precision-engineered devices. Packaging failures—such as cracked mouthpieces, bent cartridges, or activated buttons—lead to costly returns, consumer dissatisfaction, and potential safety incidents. Our vape packaging uses medical-grade SBS board with custom-engineered foam or cardboard inserts that hold each device in a fixed, protected position throughout the supply chain.
                            </p>
                            <ul>
                                <li><strong>Precision-Cut SBS Inserts:</strong> Die-cut to hold pen and cartridge bodies with zero movement tolerance, preventing battery contacts from engaging during transit—a critical lithium-battery safety requirement.</li>
                                <li><strong>Anti-Static Liners:</strong> Optional anti-static inner liners protect sensitive electronic components from electrostatic discharge during manufacturing and warehousing.</li>
                                <li><strong>Impact-Resistant Board:</strong> High-caliper 18–24pt SBS board provides excellent drop resistance, protecting the fragile glass or ceramic cartridge body from impact during retail handling.</li>
                                <li><strong>Opaque Outer Shell:</strong> All our vape packaging uses opaque materials as required by law, preventing minors from seeing the product through the packaging.</li>
                            </ul>

                            <h3>Child-Resistant Engineering for Vape Products</h3>
                            <p>
                                The CPSC requires child-resistant packaging for all cannabis products, and vape packaging presents unique engineering challenges. The slim, elongated form factor of vape pens requires CR closures that are both effective and elegant. We offer several certified CR solutions tailored to the vape category.
                            </p>
                            <ul>
                                <li><strong>CR Slide Boxes:</strong> A two-piece slide construction with a thumb-notch and friction-lock mechanism that passes CPSC CR testing while delivering a premium, luxury unboxing experience.</li>
                                <li><strong>CR Tuck-End Boxes:</strong> Push-in-and-pull-up tuck flaps that require two simultaneous actions to open, meeting CR requirements while integrating seamlessly with your box design.</li>
                                <li><strong>Blister-Card CR Solutions:</strong> For single-use disposable vapes, we offer CR-certified backer card and blister combinations that work on retail pegboards.</li>
                                <li><strong>Tamper-Evident Stickers:</strong> Holographic or matte tamper-evident labels seal the box opening, providing visible evidence of tampering and building consumer confidence at the point of sale.</li>
                            </ul>

                            <h3>Smell-Proof and Barrier Protection</h3>
                            <p>
                                While vape pens themselves don't emit strong odours at room temperature, the cannabis oil inside cartridges can release terpene vapors through micro-fractures or poorly sealed connections. Our vape packaging incorporates high-barrier materials that contain any incidental terpene migration, keeping the product fresh and preventing odour complaints during dispensary display.
                            </p>
                            <ul>
                                <li><strong>Foil-Lined Interiors:</strong> Optional aluminum foil interior linings provide a complete barrier against terpene vapor migration, moisture ingress, and oxygen exposure—extending cartridge shelf life and maintaining oil colour and potency.</li>
                                <li><strong>Moisture-Barrier Coatings:</strong> External coatings prevent humidity from degrading the box structure or causing label adhesive failure in high-humidity retail environments.</li>
                                <li><strong>Resealable Packaging Options:</strong> For multi-cartridge retail sets, we offer resealable magnetic closure boxes that keep unused cartridges fresh between sessions.</li>
                            </ul>

                            <h3>Premium Branding and Printing for the Vape Market</h3>
                            <p>
                                Vape consumers are brand-loyal and highly visual. Packaging aesthetics directly influence purchase decisions and social media sharing. We offer the full spectrum of premium finishing options to make your vape packaging a retail showstopper.
                            </p>
                            <ul>
                                <li><strong>Soft-Touch Matte + Spot UV:</strong> The combination of a silky matte base with high-gloss spot UV on logos and strain names creates a tactile contrast that communicates luxury and sophistication.</li>
                                <li><strong>Holographic Foil Stamping:</strong> Holographic foil on logos, brand marks, or geometric patterns gives your vape packaging an premium, futuristic look aligned with the tech-forward vape category.</li>
                                <li><strong>Full-Bleed CMYK Printing:</strong> Vibrant, photographic-quality full-bleed printing supports the complex artwork and gradient designs popular in vape packaging aesthetics.</li>
                                <li><strong>Window Cutouts:</strong> Die-cut windows with clear PET film allow consumers to see the pen without opening the box, building purchase confidence and reducing returns.</li>
                            </ul>

                            <h3>Strain-Coded Packaging Systems</h3>
                            <p>
                                Vape brands often carry multiple strain or flavour SKUs. A well-designed colour-coding system allows budtenders to identify products instantly and helps consumers navigate your range. We design scalable packaging systems where the structural form remains constant across all SKUs, with only the colour scheme and strain-specific content changing.
                            </p>
                            <p>
                                This modular approach significantly reduces your tooling costs—one die works for all SKUs—and ensures brand consistency across your entire vape product line while making retail display and inventory management simple and efficient.
                            </p>

                            <h3>Why CustomPackMakers for Cannabis Vape Packaging</h3>
                            <ul>
                                <li><strong>Compliance Expertise:</strong> We understand multi-state cannabis regulations and build compliance requirements directly into the design process from day one.</li>
                                <li><strong>Low Minimums:</strong> Start from 500 units per SKU, perfect for new strain launches and limited-edition drops without overcommitting inventory capital.</li>
                                <li><strong>Fast Production:</strong> Standard 8–12 business day turnaround with expedited options for product launches and dispensary grand openings.</li>
                            </ul>
                            <p>
                                Elevate your <strong>cannabis vape packaging</strong> and outperform competitors on every dispensary shelf. Contact CustomPackMakers today for a complimentary design consultation and compliance review.
                            </p>
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
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">We combine compliance engineering, barrier science, and brand design to deliver vape packaging that dominates dispensary shelves.</p>
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
                                    <p className="text-sm text-slate-500 leading-relaxed">Our vape packaging is designed to state cannabis labeling mandates—incorporating required health warnings, batch codes, and QR traceability links directly into the print layout while maintaining premium aesthetics that never compromise your brand's visual identity.</p>
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
                                    <p className="text-sm text-slate-500 leading-relaxed">CPSC-certified CR slide boxes and squeeze-to-open tuck flaps are seamlessly integrated into sleek vape pen packaging—passing all federal safety protocols while delivering the luxury unboxing experience that discerning cannabis consumers expect from premium vape brands.</p>
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
                                    <p className="text-sm text-slate-500 leading-relaxed">Foil-lined interiors and moisture-barrier coatings create an airtight environment preventing terpene vapor migration and oxidation that degrades oil potency. Your cartridges reach consumers at full potency with original colour, aroma, and flavour profile preserved throughout their shelf life.</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img src={vapePackaging6} alt="Professional cannabis vape packaging" className="w-full h-full object-cover" />
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
                                <img src={vapePackaging7} alt="Differentiate Your Vape Brand" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                            </div>
                            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-60" />
                            <div className="absolute -z-10 -top-8 -right-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl opacity-60" />
                        </div>
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">Differentiate Your <span className="text-primary">Vape Brand</span> From Others</h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">In the competitive vape aisle, generic packaging makes you invisible. Our premium custom vape boxes with holographic foil, soft-touch matte finishes, and precision-cut device windows signal quality before the pen is even removed—building brand loyalty from the first interaction.</p>
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
                                    { id: "item-1", question: "Do your vape boxes meet child-resistant requirements?", answer: "Yes. All our vape packaging integrates CPSC-certified child-resistant mechanisms and we provide full compliance documentation for state regulatory submissions." },
                                    { id: "item-2", question: "Can you create packaging for both vape pens and cartridges?", answer: "Absolutely. We design custom packaging for all vape form factors—disposable pens, 510-thread cartridges, pod systems, and multi-piece bundles." },
                                    { id: "item-3", question: "Do you offer smell-proof or barrier-enhanced vape packaging?", answer: "Yes. Foil-lined interiors and moisture-barrier coatings prevent terpene migration and protect oil quality throughout the distribution chain." },
                                    { id: "item-4", question: "Can you handle multi-SKU vape lines with strain-coded designs?", answer: "Absolutely. We design modular packaging systems where one die serves all SKUs with colour-coded printing to distinguish strains and potency levels." },
                                    { id: "item-5", question: "What is your minimum order quantity for vape packaging?", answer: "We offer flexible MOQs starting at 500 units per SKU, making it viable for new strain launches without over-investing in inventory." }
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
                            <img src={FAQimage} alt="Cannabis Vape Packaging FAQ" className="absolute inset-0 w-full h-full object-cover" />
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

export default CannabisVapePackaging;
