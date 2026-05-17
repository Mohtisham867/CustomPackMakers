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

import artisanChocolateBoxHero from "@/assets/industry/chocolate-boxes/Artisan-chocolate/img-hero.webp";
import artisanChocolateBoxImg1 from "@/assets/industry/chocolate-boxes/Artisan-chocolate/img-1.webp";
import artisanChocolateBoxImg2 from "@/assets/industry/chocolate-boxes/Artisan-chocolate/img-2.webp";
import artisanChocolateBoxImg3 from "@/assets/industry/chocolate-boxes/Artisan-chocolate/img-3.webp";
import artisanChocolateBoxImg4 from "@/assets/industry/chocolate-boxes/Artisan-chocolate/img-4.webp";
import artisanChocolateBoxImg5 from "@/assets/industry/chocolate-boxes/Artisan-chocolate/img-5.webp";
import artisanChocolateBoxImg6 from "@/assets/industry/chocolate-boxes/Artisan-chocolate/img-whychoose.webp";
import artisanChocolateBoxImg7 from "@/assets/industry/chocolate-boxes/Artisan-chocolate/img-different.webp";
import FAQimage from "@/assets/FAQ-image.webp";
import chocolateMilkBoxes from "@/assets/industry/chocolate-boxes/chocolate-milk-boxes.webp";
import chocolateCandyBoxes from "@/assets/industry/chocolate-boxes/chocolate-candy-boxes.webp";
import luxuryChocolateBoxes from "@/assets/industry/chocolate-boxes/luxury-chocolate-boxes.webp";
import chocolateBombBoxes from "@/assets/industry/chocolate-boxes/chocolate-bomb-boxes.webp";
import chocolateGiftBoxes from "@/assets/industry/chocolate-boxes/chocolate-gift-boxes.webp";
import christmasChocolateBoxes from "@/assets/industry/chocolate-boxes/christmas-chocolate-boxes.webp";
import mushroomChocolateBarPackaging from "@/assets/industry/chocolate-boxes/Mushroom Chocolate Bar Packaging.webp";
import chocolateBarPackaging from "@/assets/industry/chocolate-boxes/Chocolate Bar Packaging.webp";
import chocolateSubscriptionBox from "@/assets/industry/chocolate-boxes/chocolate-subscription-box.webp";

const carouselProducts = [
    { name: "Chocolate Milk Boxes", image: chocolateMilkBoxes, link: "/industries/chocolate-boxes/chocolate-milk-boxes", desc: "Moisture-resistant packaging for chocolate milk products." },
    { name: "Chocolate Candy Boxes", image: chocolateCandyBoxes, link: "/industries/chocolate-boxes/chocolate-candy-boxes", desc: "Vibrant boxes for chocolate candies with clear windows." },
    { name: "Luxury Chocolate Boxes", image: luxuryChocolateBoxes, link: "/industries/chocolate-boxes/luxury-chocolate-boxes", desc: "Premium rigid board boxes with foil-stamping finishes." },
    { name: "Chocolate Bomb Boxes", image: chocolateBombBoxes, link: "/industries/chocolate-boxes/chocolate-bomb-boxes", desc: "Secure cradle packaging for hot chocolate bombs." },
    { name: "Chocolate Gift Boxes", image: chocolateGiftBoxes, link: "/industries/chocolate-boxes/chocolate-gift-boxes", desc: "Gift-ready packaging with ribbon closures." },
    { name: "Christmas Chocolate Boxes", image: christmasChocolateBoxes, link: "/industries/chocolate-boxes/christmas-chocolate-boxes", desc: "Festive holiday-themed chocolate packaging." },
    { name: "Mushroom Chocolate Bar Packaging", image: mushroomChocolateBarPackaging, link: "/industries/chocolate-boxes/mushroom-chocolate-bar-packaging", desc: "Unique packaging for mushroom-infused chocolates." },
    { name: "Chocolate Bar Packaging", image: chocolateBarPackaging, link: "/industries/chocolate-boxes/chocolate-bar-packaging", desc: "Airtight protection and high-fidelity chocolate bar boxes." },
    { name: "Chocolate Subscription Box", image: chocolateSubscriptionBox, link: "/industries/chocolate-boxes/chocolate-subscription-box", desc: "Recurring subscription box packaging solutions." },
];

const faqs = [
    { id: "item-1", q: "Are your artisan chocolate boxes food-grade safe?", a: "Yes. All materials meet FDA food-contact safety standards with no VOC off-gassing—protecting the flavour and safety integrity of your hand-crafted chocolates throughout retail shelf life." },
    { id: "item-2", q: "Do you offer grease-resistant coatings for chocolate inserts?", a: "Absolutely. Our PE-coated inner linings are certified grease-resistant, preventing cocoa butter migration from pralines and ganaches from staining packaging surfaces." },
    { id: "item-3", q: "Can you add gold foil stamping to artisan chocolate boxes?", a: "Yes. We offer hot-die gold, silver, rose gold, and holographic foil stamping with precision registration for logos, brand marks, and decorative border patterns." },
    { id: "item-4", q: "What insert options protect individual chocolates?", a: "We offer die-cut cardboard compartment trays, thermoformed food-safe PET inserts, and tissue-wrapped cavities in configurations from 4-piece to 48-piece—each preventing collision damage to hand-crafted surfaces." },
    { id: "item-5", q: "What is the minimum order quantity?", a: "MOQ starts at 250 units per design. Volume pricing tiers begin at 1,000 units for significant per-unit savings on recurring confectionery orders." },
];

const ArtisanChocolateBox = () => {
    const [selectedImage, setSelectedImage] = useState(0);
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);

    const productImages = [
        { src: artisanChocolateBoxImg1, alt: "Artisan Chocolate Box - Main View" },
        { src: artisanChocolateBoxImg2, alt: "Artisan Chocolate Box - Open View" },
        { src: artisanChocolateBoxImg3, alt: "Artisan Chocolate Box - Insert Detail" },
        { src: artisanChocolateBoxImg4, alt: "Artisan Chocolate Box - Foil Stamping" },
        { src: artisanChocolateBoxImg5, alt: "Artisan Chocolate Box - Lifestyle" },
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
                <title>Custom Artisan Chocolate Boxes | Handcrafted Confection Packaging | CustomPackMakers</title>
                <meta name="description" content="Premium artisan chocolate boxes with food-grade inserts, gold foil stamping, and grease-resistant coatings. Preserve freshness and deliver a luxury unboxing experience." />
                <meta name="keywords" content="artisan chocolate boxes, custom chocolate packaging, luxury confection packaging, food-grade chocolate box" />
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
                            <BreadcrumbItem><BreadcrumbPage>Artisan Chocolate Box</BreadcrumbPage></BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </div>

            <section className="py-8 bg-background">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-7 space-y-6">
                            <div className="w-20 h-1.5 bg-primary rounded-full" />
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight"><span className="text-primary">Custom</span> Artisan Chocolate Boxes</h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">Bespoke packaging for handcrafted confections—food-grade compartmentalized inserts, gold foil stamping, and premium soft-touch finishes that protect delicate pieces and communicate artisanal excellence at every touchpoint.</p>
                            <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300" onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}>Get a Quote</Button>
                        </div>
                        <div className="lg:col-span-5 relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-muted group">
                            <img src={artisanChocolateBoxHero} alt="Custom Artisan Chocolate Boxes" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 max-w-3xl">Handcrafted Boxes for Chocolates That Deserve the Best</h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>Our <strong className="text-foreground">custom artisan chocolate boxes</strong> are precision-engineered for confectionery brands that refuse to let packaging undermine product quality. Constructed from food-grade rigid board with grease-resistant inner linings, each box protects delicate ganaches, truffles, and pralines from temperature variation, humidity fluctuations, and mechanical stress during transit.</p>
                        <p>Compartmentalized food-grade inserts cradle each chocolate individually, preventing movement and surface scuffing. Layer in gold foil brand stamping, embossed motifs, and magnetic ribbon closures and you have <strong className="text-foreground">artisan chocolate packaging</strong> that transforms the unboxing into a ceremonial experience customers photograph, share, and return for.</p>
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
                                            <div className="space-y-1.5"><Label htmlFor="length" className="text-xs font-semibold text-muted-foreground">L (in)</Label><Input id="length" type="number" placeholder="8" className="h-9 bg-white" /></div>
                                            <div className="space-y-1.5"><Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label><Input id="width" type="number" placeholder="6" className="h-9 bg-white" /></div>
                                            <div className="space-y-1.5"><Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">D (in)</Label><Input id="depth" type="number" placeholder="2" className="h-9 bg-white" /></div>
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">The Complete Guide to Artisan Chocolate Box Packaging</h2>
                    <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="[&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-6 [&>h3]:mb-3 [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-4 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-4 [&>ul]:space-y-2 [&>ul>li]:text-[15px] [&>ul>li]:text-slate-600">
                            <p>The artisan chocolate market has matured into one of the most premium segments in specialty food retail. Consumers purchasing handcrafted truffles, single-origin ganaches, and estate pralines are not buying candy—they are purchasing an emotional experience rooted in provenance, craft, and exclusivity. In this context, custom artisan chocolate boxes are a co-equal component of the product itself, shaping perception before the first piece is tasted.</p>
                            <p>Research consistently shows that luxury food consumers form quality judgments within the first three seconds of handling a product. Packaging that communicates attention to detail—through precision construction, premium finishing, and deliberate material selection—activates the same neural pathways as tasting a high-quality product. Our artisan chocolate packaging is engineered to make that three-second impression count, every single time.</p>
                            <h3>Food-Grade Materials That Protect and Preserve</h3>
                            <p>Artisan chocolate is acutely sensitive to temperature fluctuation, humidity, light exposure, and aromatic contamination. A truffle exposed to mild temperature cycling develops fat bloom—the white crystalline surface that signals poor storage. Our packaging material engineering addresses every preservation challenge comprehensively.</p>
                            <ul>
                                <li><strong>Food-Grade Rigid Board:</strong> Certified food-safe rigid chipboard with no VOC off-gassing that could transfer to temperature-sensitive chocolate. The board's thermal mass moderates temperature spikes during retail transit.</li>
                                <li><strong>Grease-Resistant Inner Lining:</strong> PE-coated inner linings certified grease-resistant to prevent cocoa butter migration from pralines and ganaches—maintaining pristine interior appearance throughout the product's retail shelf life.</li>
                                <li><strong>Food-Safe Compartmentalized Inserts:</strong> Die-cut from FDA-compliant cardboard or thermoformed food-safe PET, our inserts cradle each chocolate individually—preventing mechanical collision that chips corners and smears hand-painted decorations.</li>
                                <li><strong>Humidity-Resistant Lamination:</strong> External lamination resists moisture absorption in high-humidity retail environments—preventing warping and delamination that causes luxury boxes to lose structural integrity before the gift is presented.</li>
                            </ul>
                            <h3>Gold Foiling and Premium Finishing</h3>
                            <p>Artisan positioning requires packaging that signals luxury through every sensory touchpoint. The resonant click of a magnetic closure, the velvety resistance of soft-touch lamination, and the glint of gold foil stamping all contribute to an experience that consumers associate with genuine artisanal craftsmanship and justify premium pricing.</p>
                            <ul>
                                <li><strong>Gold and Silver Foil Stamping:</strong> Hot-die foil stamping applies metallic film to brand marks, monograms, and decorative border patterns—creating the gilded aesthetic that anchors artisan luxury positioning.</li>
                                <li><strong>Soft-Touch Matte Lamination:</strong> Our velvet-finish lamination communicates restraint and refinement—qualities that resonate with premium chocolate consumers. Anti-fingerprint surfaces maintain pristine appearance throughout the gifting experience.</li>
                                <li><strong>Embossed Brand Marks:</strong> Relief-embossed logos and botanical motifs add sculptural dimension—creating tactile richness that photographs beautifully and signals genuine material investment.</li>
                                <li><strong>Spot UV on Matte:</strong> Selective gloss UV over matte backgrounds creates a striking contrast effect that luxury confectionery brands use to make brand marks leap from the packaging surface.</li>
                            </ul>
                            <h3>Gift-Ready Aesthetics and Luxury Unboxing</h3>
                            <p>The artisan chocolate purchase is overwhelmingly a gifting occasion. The recipient's unboxing experience is the moment your brand's investment in craft is finally revealed. We engineer that reveal deliberately through layered packaging elements.</p>
                            <ul>
                                <li><strong>Magnetic Ribbon Closure:</strong> A concealed magnetic mechanism allows the lid to close with satisfying resistance and open smoothly—creating the ceremonial quality that transforms unwrapping into an event.</li>
                                <li><strong>Tissue Wrap Interior:</strong> Chocolate-safe tissue paper in brand colors cushions and wraps individual chocolates—extending the unboxing experience with layers of reveal.</li>
                                <li><strong>Personalization Panels:</strong> Dedicated panels on the inner lid or insert cards allow the inclusion of handwritten notes, personalized messages, or batch-printed gift cards.</li>
                                <li><strong>Window Cutout Options:</strong> Die-cut windows with food-safe PET film allow consumers to see the chocolate arrangement—reducing purchase uncertainty and driving retail impulse purchases.</li>
                            </ul>
                            <h3>Temperature and Shelf-Life Considerations</h3>
                            <p>Unlike shelf-stable categories, artisan chocolate requires packaging that actively manages the thermal and humidity environment. Our material science approach addresses seasonal retail challenges that standard food packaging cannot handle reliably.</p>
                            <ul>
                                <li><strong>Insulating Board Mass:</strong> High-caliper rigid board provides passive thermal mass protecting butter ganaches and cream fillings from heat-induced destabilization during last-mile delivery.</li>
                                <li><strong>Dessicant Integration:</strong> Inner insert designs can accommodate food-safe silica dessicant sachets maintaining optimal 50–55% relative humidity—preventing bloom formation over long retail cycles.</li>
                            </ul>
                            <h3>Why CustomPackMakers for Artisan Chocolate Packaging</h3>
                            <p>We bring together food safety certification, boutique MOQs starting from 250 units, and in-house foiling, embossing, and lamination capabilities. Our dedicated packaging design team works alongside your confectionery brand from structural concept through final production—ensuring every delivery reinforces the premium artisan positioning your chocolates deserve. Partner with CustomPackMakers and let your packaging communicate the depth of your craft before your customer takes a single bite.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-8 bg-accent/20">
                <div className="container mx-auto px-[5vw]">
                    <div className="mb-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Related Chocolate Products</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl">Explore our full range of premium chocolate packaging solutions for every confection format and occasion.</p>
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
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">Food-grade safety, gold foil craftsmanship, and gift-ready unboxing engineering built for artisan confectionery brands.</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">
                        <div className="space-y-5">
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1"><div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300"><svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div></div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Food-Grade Safety</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">Every artisan chocolate box uses FDA-compliant food-safe rigid board with certified grease-resistant inner linings that prevent cocoa butter migration and aromatic contamination—ensuring chocolates arrive in pristine condition throughout the full retail shelf life cycle.</p>
                                </div>
                            </div>
                            <div className="w-full h-px bg-slate-100" />
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1"><div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors duration-300"><svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg></div></div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Gold Foil Craftsmanship</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">Hot-die gold and silver foil stamping with precision registration creates the gilded luxury aesthetic that anchors premium artisan confectionery positioning—communicating brand exclusivity and material investment through every visual and tactile touchpoint before the first chocolate is tasted.</p>
                                </div>
                            </div>
                            <div className="w-full h-px bg-slate-100" />
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1"><div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors duration-300"><svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div></div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Gift-Ready Unboxing</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">Magnetic ribbon closures, tissue wrap interiors, and compartmentalized food-grade inserts transform the unwrapping into a ceremonial reveal—engineering the luxury unboxing moment that gift recipients photograph, share, and specifically seek out for every high-value gifting occasion.</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img src={artisanChocolateBoxImg6} alt="Premium artisan chocolate packaging" className="w-full h-full object-cover" />
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
                                <img src={artisanChocolateBoxImg7} alt="Differentiate Your Artisan Chocolate Brand" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                            </div>
                            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-60" />
                            <div className="absolute -z-10 -top-8 -right-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl opacity-60" />
                        </div>
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">Differentiate Your <span className="text-primary">Artisan Brand</span> From Others</h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">In the premium confectionery market, packaging is the first sensory experience your customer has with your craft. Our artisan chocolate boxes pair food-grade safety engineering with gold foil luxury finishes, soft-touch laminated surfaces, and ceremonial magnetic closures. Every element delivers a gift-ready unboxing moment that communicates artisanal depth, drives social sharing, and builds the brand loyalty that transforms first-time buyers into lifetime enthusiasts of your confectionery craft.</p>
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
                            <img src={FAQimage} alt="Artisan Chocolate Box FAQ" className="absolute inset-0 w-full h-full object-cover" />
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

export default ArtisanChocolateBox;
