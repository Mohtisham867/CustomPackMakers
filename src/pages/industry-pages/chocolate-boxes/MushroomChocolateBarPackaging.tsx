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

 import mushroomChocolateBarPackagingHero from "@/assets/chocolate-products/mushroom-chocolate-bar-packaging/img-hero.webp";
 import mushroomChocolateBarPackagingImg1 from "@/assets/chocolate-products/mushroom-chocolate-bar-packaging/img-1.webp";
 import mushroomChocolateBarPackagingImg2 from "@/assets/chocolate-products/mushroom-chocolate-bar-packaging/img-2.webp";
 import mushroomChocolateBarPackagingImg3 from "@/assets/chocolate-products/mushroom-chocolate-bar-packaging/img-3.webp";
 import mushroomChocolateBarPackagingImg4 from "@/assets/chocolate-products/mushroom-chocolate-bar-packaging/img-4.webp";
 import mushroomChocolateBarPackagingImg5 from "@/assets/chocolate-products/mushroom-chocolate-bar-packaging/img-5.webp";
 import mushroomChocolateBarPackagingImg6 from "@/assets/chocolate-products/mushroom-chocolate-bar-packaging/img-whychoose.webp";
 import mushroomChocolateBarPackagingImg7 from "@/assets/chocolate-products/mushroom-chocolate-bar-packaging/img-different.webp";
import FAQimage from "@/assets/FAQ-image.webp";
import artisanChocolateBox from "@/assets/chocolate-products/Artisan Chocolate Box.webp";
import chocolateMilkBoxes from "@/assets/chocolate-products/chocolate-milk-boxes.webp";
import chocolateCandyBoxes from "@/assets/chocolate-products/chocolate-candy-boxes.webp";
import luxuryChocolateBoxes from "@/assets/chocolate-products/luxury-chocolate-boxes.webp";
import chocolateBombBoxes from "@/assets/chocolate-products/chocolate-bomb-boxes.webp";
import chocolateGiftBoxes from "@/assets/chocolate-products/chocolate-gift-boxes.webp";
import christmasChocolateBoxes from "@/assets/chocolate-products/christmas-chocolate-boxes.webp";
import chocolateBarPackaging from "@/assets/chocolate-products/Chocolate Bar Packaging.webp";
import chocolateSubscriptionBox from "@/assets/chocolate-products/chocolate-subscription-box.webp";

const carouselProducts = [
    { name: "Artisan Chocolate Box", image: artisanChocolateBox, link: "/industries/chocolate-boxes/artisan-chocolate-box", desc: "Handcrafted boxes with food-grade inserts and gold foiling." },
    { name: "Chocolate Milk Boxes", image: chocolateMilkBoxes, link: "/industries/chocolate-boxes/chocolate-milk-boxes", desc: "Moisture-resistant dairy packaging with vibrant graphics." },
    { name: "Chocolate Candy Boxes", image: chocolateCandyBoxes, link: "/industries/chocolate-boxes/chocolate-candy-boxes", desc: "Vibrant candy boxes with PET window displays." },
    { name: "Luxury Chocolate Boxes", image: luxuryChocolateBoxes, link: "/industries/chocolate-boxes/luxury-chocolate-boxes", desc: "Premium rigid board boxes with foil-stamping finishes." },
    { name: "Chocolate Bomb Boxes", image: chocolateBombBoxes, link: "/industries/chocolate-boxes/chocolate-bomb-boxes", desc: "Secure cradle packaging for hot chocolate bombs." },
    { name: "Chocolate Gift Boxes", image: chocolateGiftBoxes, link: "/industries/chocolate-boxes/chocolate-gift-boxes", desc: "Gift-ready packaging with sophisticated ribbon closures." },
    { name: "Christmas Chocolate Boxes", image: christmasChocolateBoxes, link: "/industries/chocolate-boxes/christmas-chocolate-boxes", desc: "Festive holiday-themed chocolate packaging." },
    { name: "Chocolate Bar Packaging", image: chocolateBarPackaging, link: "/industries/chocolate-boxes/chocolate-bar-packaging", desc: "Airtight protection and high-fidelity chocolate bar boxes." },
    { name: "Chocolate Subscription Box", image: chocolateSubscriptionBox, link: "/industries/chocolate-boxes/chocolate-subscription-box", desc: "Recurring monthly subscription box packaging solutions." },
];

const faqs = [
    { id: "item-1", q: "What compliance information is required on mushroom chocolate packaging?", a: "Medicinal mushroom and functional chocolate bar packaging requires clear ingredient listing, supplement facts panels, dosage guidance, and applicable regulatory disclaimers. We provide full-bleed print areas for compliance copy alongside brand design elements—ensuring your packaging meets FDA labeling standards." },
    { id: "item-2", q: "Do you offer tamper-evident sealing for mushroom chocolate bar packaging?", a: "Yes. Tear-strip seals, heat-shrink bands, and breakable seal stickers are available as tamper-evident elements—communicating product integrity and safety compliance that is particularly critical in the functional chocolate and mushroom supplement market." },
    { id: "item-3", q: "Can the packaging communicate functional benefits clearly?", a: "Absolutely. We provide ample printing zones for benefit messaging—cognitive support, stress relief, immune enhancement, energy support—alongside QR code integration for product education links, brand story content, and third-party lab certification documentation for health-conscious consumers." },
    { id: "item-4", q: "Are child-resistant packaging options available for mushroom chocolates?", a: "Yes. Child-resistant reclosable pouch formats and push-and-turn box closures are available for mushroom chocolate products sold in markets requiring child-deterrent packaging compliance—particularly relevant for high-potency functional mushroom dosage formats." },
    { id: "item-5", q: "What is the minimum order quantity for mushroom chocolate packaging?", a: "MOQ starts at 500 units for standard folding carton mushroom chocolate formats. Specialty structural formats with tamper-evidence and compliance panel integration start at 1,000 units. Volume pricing is available at 2,500 and 5,000 units." },
];

const MushroomChocolateBarPackaging = () => {
    const [selectedImage, setSelectedImage] = useState(0);
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);

    const productImages = [
        { src: mushroomChocolateBarPackagingImg1, alt: "Mushroom Chocolate Bar Packaging - Main View" },
        { src: mushroomChocolateBarPackagingImg2, alt: "Mushroom Chocolate Bar Packaging - Compliance Panel" },
        { src: mushroomChocolateBarPackagingImg3, alt: "Mushroom Chocolate Bar Packaging - Tamper Seal" },
        { src: mushroomChocolateBarPackagingImg4, alt: "Mushroom Chocolate Bar Packaging - QR Integration" },
        { src: mushroomChocolateBarPackagingImg5, alt: "Mushroom Chocolate Bar Packaging - Lifestyle" },
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
                <title>Mushroom Chocolate Bar Packaging | Functional Chocolate Packaging | CustomPackMakers</title>
                <meta name="description" content="Custom mushroom chocolate bar packaging with compliance labeling zones, tamper-evident seals, QR code integration, and distinctive functional wellness brand aesthetics for the growing adaptogen market." />
                <meta name="keywords" content="mushroom chocolate packaging, functional chocolate packaging, adaptogen chocolate box, mushroom bar packaging, nootropic chocolate packaging" />
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
                            <BreadcrumbItem><BreadcrumbPage>Mushroom Chocolate Bar Packaging</BreadcrumbPage></BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </div>

            <section className="py-8 bg-background">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-7 space-y-6">
                            <div className="w-20 h-1.5 bg-primary rounded-full" />
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight"><span className="text-primary">Mushroom</span> Chocolate Bar Packaging</h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">Functional wellness chocolate packaging with regulatory compliance printing zones, tamper-evident safety seals, QR-code education integration, and the distinctive earthy-modern aesthetic language that resonates with adaptogenic and nootropic chocolate consumers in the rapidly growing functional food market.</p>
                            <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300" onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}>Get a Quote</Button>
                        </div>
                        <div className="lg:col-span-5 relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-muted group">
                            <img src={mushroomChocolateBarPackagingHero} alt="Mushroom Chocolate Bar Packaging" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 max-w-3xl">Packaging Built for the Functional Chocolate Wellness Market</h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>Our <strong className="text-foreground">mushroom chocolate bar packaging</strong> is purpose-designed for the rapidly growing functional food market at the intersection of premium chocolate and adaptogenic wellness. Compliance-ready printing zones accommodate the ingredient panels, supplement facts, dosage guidance, and regulatory disclaimers required for functional chocolate products—without compromising the bold, earthy-modern brand aesthetics that differentiate mushroom chocolate brands in an increasingly competitive wellness category.</p>
                        <p>Tamper-evident tear strips, child-resistant closure options, and QR code integration for product education and lab certification documentation communicate the safety transparency and scientific credibility that health-conscious functional food consumers require before purchasing mushroom-infused consumables. Premium food-safe barrier laminates protect chocolate freshness while projecting the sustainability values that resonate with the wellness-oriented consumers driving mushroom chocolate market growth.</p>
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
                                            <div className="space-y-1.5"><Label htmlFor="length" className="text-xs font-semibold text-muted-foreground">L (in)</Label><Input id="length" type="number" placeholder="7" className="h-9 bg-white" /></div>
                                            <div className="space-y-1.5"><Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label><Input id="width" type="number" placeholder="4" className="h-9 bg-white" /></div>
                                            <div className="space-y-1.5"><Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">D (in)</Label><Input id="depth" type="number" placeholder="0.5" className="h-9 bg-white" /></div>
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">The Complete Guide to Mushroom Chocolate Bar Packaging</h2>
                    <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="[&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-6 [&>h3]:mb-3 [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-4 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-4 [&>ul]:space-y-2 [&>ul>li]:text-[15px] [&>ul>li]:text-slate-600">
                            <p>Mushroom chocolate—chocolate bars infused or enriched with functional mushroom extracts such as lion's mane, reishi, chaga, cordyceps, and psilocybin (in legally approved markets)—represents one of the fastest-growing segments in the functional food category. Consumer interest in adaptogenic wellness ingredients, combined with the accessibility and flavor masking capability of chocolate as a delivery vehicle, has created a rapidly expanding market for mushroom chocolate products that straddles the confectionery and nutraceutical categories simultaneously.</p>
                            <p>This dual-category positioning creates unique packaging demands. As a confectionery product, mushroom chocolate packaging must project the premium aesthetic quality, flavor appeal, and gifting capability of premium chocolate. As a functional supplement product, it must communicate scientific credibility, safety transparency, regulatory compliance, and dosage precision. These demands are not contradictory—but they require deliberate, sophisticated packaging design that satisfies both simultaneously without compromise.</p>
                            <h3>Regulatory Compliance Printing Architecture</h3>
                            <p>Functional chocolate products are subject to FDA labeling requirements that govern the format, placement, and content of several mandatory information elements—ingredients, supplement facts, dosage guidance, and applicable health claim disclaimers. Designing packaging that meets these requirements without compromising brand aesthetic quality requires systematic compliance printing architecture built into the structural design from the outset.</p>
                            <ul>
                                <li><strong>Supplement Facts Panel:</strong> Right-format supplement facts panels with correct grid, type size, and nutrient declaration requirements printed in high-legibility contrast on the information panel—fulfilling FDA compliance requirements while maintaining design cohesion with the primary branding surface.</li>
                                <li><strong>Dosage Guidance:</strong> Clear serving size and usage guidance printed in a dedicated design zone—communicating responsible consumption guidance that health-conscious functional food consumers specifically expect and regulators require for supplement-category products.</li>
                                <li><strong>QR Code Integration:</strong> QR code linking to third-party Certificate of Analysis (CoA) documentation, product education content, and brand story—enabling the transparency communication that brand-savvy functional food consumers increasingly demand and that distinguishes credible wellness brands from unverified competitors.</li>
                                <li><strong>Regulatory Disclaimer Zones:</strong> Pre-designed disclaimer text zones for FDA-required statements, health claim qualifications, and market-specific regulatory language—ensuring compliance copy is legible and correctly positioned without requiring design revisions during regulatory review.</li>
                            </ul>
                            <h3>Brand Aesthetic for the Wellness Market</h3>
                            <p>Mushroom chocolate brands operate in a visual culture that has its own distinctive aesthetic conventions—drawing from functional wellness design language while simultaneously differentiating from both conventional chocolate brands and pharmaceutical supplement categories.</p>
                            <ul>
                                <li><strong>Earthy Color Palettes:</strong> Deep forest greens, warm terracottas, muted mushroom taupes, and fungi-inspired purples communicate the organic, earth-connected brand identity that adaptogenic wellness consumers viscerally associate with authentic functional mushroom products.</li>
                                <li><strong>Botanical Illustration:</strong> Detailed mushroom species botanical illustration—rendered with scientific accuracy or artistic interpretation—communicates the product's natural ingredient provenance and the brand's deep knowledge of functional mushroom botany and cultivation.</li>
                                <li><strong>Premium Matte Surfaces:</strong> Soft-touch matte lamination communicates the quiet confidence and material restraint that premium wellness brands consistently deploy—differentiating from the high-gloss candy category aesthetic while projecting the same premium material investment as luxury food brands.</li>
                            </ul>
                            <h3>Safety and Tamper Evidence</h3>
                            <ul>
                                <li><strong>Tear-Strip Seals:</strong> Continuous perforated tear-strip seals across primary closure panels provide clear tamper evidence—communicating product integrity and original seal status to consumers who specifically assess functional food products for evidence of prior opening.</li>
                                <li><strong>Child-Resistant Formats:</strong> Push-and-slide drawer formats and reclosable zipper pouches with child-resistant specifications are available for functional mushroom products in markets where child-deterrent packaging requirements apply to edible supplement formats.</li>
                            </ul>
                            <h3>Why CustomPackMakers for Mushroom Chocolate Packaging</h3>
                            <p>Our functional food packaging specialists understand the specific compliance, aesthetic, and safety requirements of mushroom chocolate bar packaging—delivering solutions that satisfy regulatory demands, communicate wellness brand authenticity, and maintain the premium confectionery quality standard that distinguishes leading adaptogenic chocolate brands. Contact our team for a complimentary compliance labeling review and structural design consultation tailored to your specific mushroom chocolate product requirements today.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-8 bg-accent/20">
                <div className="container mx-auto px-[5vw]">
                    <div className="mb-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Related Chocolate Products</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl">Explore our complete range of premium chocolate packaging across every functional format and confection type.</p>
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
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">Compliance-ready print architecture, wellness brand aesthetics, and safety sealing for the mushroom chocolate functional food market.</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">
                        <div className="space-y-5">
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1"><div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors"><svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div></div>
                                <div><h3 className="text-lg font-bold text-slate-900 mb-2">Regulatory Compliance Architecture</h3><p className="text-sm text-slate-500 leading-relaxed">Pre-designed supplement facts, dosage guidance, and regulatory disclaimer zones fulfil FDA functional food labeling requirements while maintaining the bold brand aesthetics that differentiate mushroom chocolate brands in the rapidly growing adaptogenic wellness category—without the costly design revisions that non-compliance-aware packaging suppliers typically require after regulatory review.</p></div>
                            </div>
                            <div className="w-full h-px bg-slate-100" />
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1"><div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors"><svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg></div></div>
                                <div><h3 className="text-lg font-bold text-slate-900 mb-2">Tamper-Evident Safety Sealing</h3><p className="text-sm text-slate-500 leading-relaxed">Perforated tear-strip seals and child-resistant closure options communicate the product integrity and consumer safety transparency that functional food consumers expect from premium wellness brands—reducing consumer hesitation at point of purchase and building the safety trust that drives repeat purchasing in the functional mushroom chocolate category.</p></div>
                            </div>
                            <div className="w-full h-px bg-slate-100" />
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1"><div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors"><svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg></div></div>
                                <div><h3 className="text-lg font-bold text-slate-900 mb-2">Wellness Brand Aesthetic</h3><p className="text-sm text-slate-500 leading-relaxed">Earthy color palettes, botanical mushroom illustration, and premium soft-touch matte surfaces create the distinctive functional wellness visual language that adaptogenic chocolate consumers trust—differentiating your brand from conventional confectionery and pharmaceutical packaging aesthetics while communicating the organic authenticity and scientific credibility your wellness positioning demands.</p></div>
                            </div>
                        </div>
                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img src={mushroomChocolateBarPackagingImg6} alt="Mushroom chocolate bar packaging" className="w-full h-full object-cover" />
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
                                <img src={mushroomChocolateBarPackagingImg7} alt="Differentiate Your Mushroom Chocolate Brand" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                            </div>
                            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-60" />
                            <div className="absolute -z-10 -top-8 -right-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl opacity-60" />
                        </div>
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">Differentiate Your <span className="text-primary">Functional Chocolate</span> From Others</h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">In the growing functional chocolate market, credibility is communicated before the first bite. Our mushroom chocolate bar packaging builds consumer trust through regulatory compliance architecture, tamper-evident safety sealing, and QR transparency tools—while projecting the earthy botanical brand aesthetic that wellness consumers use to identify authentic adaptogenic products. The result: packaging that converts skeptical wellness shoppers into brand advocates who recommend your mushroom chocolate not just for its taste, but for the trust your packaging communicates.</p>
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
                            <img src={FAQimage} alt="Mushroom Chocolate Packaging FAQ" className="absolute inset-0 w-full h-full object-cover" />
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

export default MushroomChocolateBarPackaging;
