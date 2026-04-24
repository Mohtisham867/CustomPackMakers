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

import flowerPackagingHero from "@/assets/cannabis-packaging/flower-packaging/img-hero.webp";
import flowerPackagingImg1 from "@/assets/cannabis-packaging/flower-packaging/img-1.webp";
import flowerPackagingImg2 from "@/assets/cannabis-packaging/flower-packaging/img-2.webp";
import flowerPackagingImg3 from "@/assets/cannabis-packaging/flower-packaging/img-3.webp";
import flowerPackagingImg4 from "@/assets/cannabis-packaging/flower-packaging/img-4.webp";
import flowerPackagingImg5 from "@/assets/cannabis-packaging/flower-packaging/img-5.webp";
import flowerPackagingImg6 from "@/assets/cannabis-packaging/flower-packaging/img-whychoose.webp";
import flowerPackagingImg7 from "@/assets/cannabis-packaging/flower-packaging/img-different.webp";
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

const CannabisFlowerPackaging = () => {
    const [selectedImage, setSelectedImage] = useState(0);
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);
    const productImages = [
        { src: flowerPackagingImg1, alt: "Custom Cannabis Flower Packaging" },
        { src: flowerPackagingImg2, alt: "Flower Container Front View" },
        { src: flowerPackagingImg3, alt: "Cannabis Flower Box Open" },
        { src: flowerPackagingImg4, alt: "Airtight Flower Packaging" },
        { src: flowerPackagingImg5, alt: "Branded Cannabis Flower Container" },
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
                <title>Custom Cannabis Flower Packaging | Premium Flower Containers | CustomPackMakers</title>
                <meta name="description" content="Airtight cannabis flower packaging with humidity control, UV protection, and child-resistant closures. Preserve terpene profiles and build premium brand equity in the legal cannabis market." />
                <meta name="keywords" content="cannabis flower packaging, marijuana flower containers, airtight flower packaging, custom cannabis flower boxes, dispensary flower containers" />
                <meta property="og:title" content="Custom Cannabis Flower Packaging | Premium Flower Containers | CustomPackMakers" />
                <meta property="og:description" content="Preserve terpene profiles and build premium brand equity with airtight cannabis flower packaging designed for the legal dispensary market." />
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
                            <BreadcrumbItem><BreadcrumbPage>Cannabis Flower Packaging</BreadcrumbPage></BreadcrumbItem>
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
                                <span className="text-primary">Custom</span> Cannabis Flower Packaging
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Preserve every terpene, protect every bud—premium airtight cannabis flower packaging with integrated humidity control, UV blocking, and child-resistant closures for the premium dispensary market.
                            </p>
                            <div className="pt-2">
                                <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300" onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}>Get a Quote</Button>
                            </div>
                        </div>
                        <div className="lg:col-span-5 relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-muted group">
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200">
                                <img src={flowerPackagingHero} alt="Custom Cannabis Flower Packaging" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
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
                        Packaging That Protects What Makes Your Flower Premium
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>Cannabis flower is the most perishable product in any dispensary—and the most price-sensitive to quality. A premium indoor grow can command 3–5× the price of mid-tier flower, but only if the packaging preserves the terpene profile and bud structure that justify the premium. Our <strong className="text-foreground">custom cannabis flower packaging</strong> is engineered to protect the microscopic trichomes, volatile terpenes, and moisture content that make top-shelf flower worth the price premium.</p>
                        <p>From airtight glass-alternative containers to rigid pasteboard boxes with interior foil pouches, we design flower packaging that matches the visual weight of the product inside—telling the consumer instantly that what they're about to experience is worth every dollar spent.</p>
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
                                            <div className="space-y-1.5"><Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label><Input id="width" type="number" placeholder="4" className="h-9 bg-white" /></div>
                                            <div className="space-y-1.5"><Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">D (in)</Label><Input id="depth" type="number" placeholder="2" className="h-9 bg-white" /></div>
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">The Complete Guide to Cannabis Flower Packaging</h2>
                    <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="[&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-slate-900 [&>h2]:mb-4 [&>h2]:mt-8 [&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-6 [&>h3]:mb-3 [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-4 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-4 [&>ul]:space-y-2 [&>ul>li]:text-[15px] [&>ul>li]:text-slate-600">
                            <h2>Protecting the Most Valuable Asset in Your Dispensary</h2>
                            <p>Cannabis flower represents the heart of every dispensary—the product consumers know best, purchase most frequently, and judge most critically. When a consumer opens your flower packaging and finds dry, crumbly flower with faded aroma, they don't blame cultivation conditions—they associate the disappointing experience with your brand. Our <strong>custom cannabis flower packaging</strong> ensures that the quality your cultivators achieve at harvest is precisely the quality your consumers experience at consumption—weeks or months later in a retail environment.</p>
                            <p>Flower packaging must simultaneously achieve three often-competing objectives: maximum barrier performance, compliance with extensive regulatory labeling requirements, and premium brand presentation that commands shelf attention in an increasingly sophisticated retail environment. Our packaging design team specializes in the intersection of all three, creating solutions that never compromise between these demands.</p>

                            <h3>Medical-Grade Materials for Terpene and Potency Preservation</h3>
                            <p>Cannabis terpenes are the most volatile components in flower—they begin to evaporate at temperatures as low as 68°F and degrade rapidly when exposed to oxygen, UV light, or low-humidity environments. Protecting them requires the same material science used in pharmaceutical and specialty food packaging, where multi-year shelf life preservation is an engineered outcome rather than a hopeful assumption.</p>
                            <ul>
                                <li><strong>Multi-Wall Rigid Containers:</strong> High-caliper SBS or corrugate outer boxes with molded inner inserts cradle flower without compressing trichomes—the crystalline glands where cannabinoids and terpenes are concentrated—preventing the mechanical damage that destroys premium flower quality during transport.</li>
                                <li><strong>Inner Foil Barrier Pouch:</strong> A heat-sealed aluminum/polyester inner pouch provides pharmaceutical-grade barrier performance—OTR below 0.1 cc/m²/day and MVTR below 0.1 g/m²/day—maintaining optimal humidity and preventing the THC-to-CBN oxidation that degrades potency over retail shelf life.</li>
                                <li><strong>Integrated Humidity Control:</strong> Boveda or equivalent two-way humidity control packets sized to the container volume maintain a precise 58–62% relative humidity throughout the product's retail life, preventing the drying that causes aroma loss and the excess moisture that promotes mold.</li>
                                <li><strong>UV-Opaque Outer Shell:</strong> Complete UV opacity in all outer panels prevents the photodegradation of both terpenes and THC during dispensary display under fluorescent and LED lighting systems.</li>
                            </ul>

                            <h3>Child-Resistant Solutions for Flower Containers</h3>
                            <p>Flower packaging presents unique child-resistance engineering challenges. Unlike unit-dose products, flower containers are opened and re-accessed multiple times. CR mechanisms must function reliably through the entire product lifecycle—not just the first opening.</p>
                            <ul>
                                <li><strong>CR Push-Down-and-Turn Lid:</strong> For round rigid containers, a push-down-and-turn HDPE lid provides pharmaceutical-grade child resistance with every reclosure, protecting against repeated-access child exposure.</li>
                                <li><strong>CR Magnetic Closure Box with Inner Pouch:</strong> An outer rigid box with a CR-certified magnetic closure contains the inner sealed foil pouch—providing two layers of protection with a premium unboxing sequence that elevates the consumer experience.</li>
                                <li><strong>Tamper-Evident Seals:</strong> Breakable label bridges, inner foil tabs, or shrink-band seals prevent pre-sale access and provide immediate visual confirmation of product integrity—required in most jurisdictions and a powerful consumer confidence signal.</li>
                            </ul>

                            <h3>Premium Branding That Matches Premium Genetics</h3>
                            <p>Top-shelf flower is purchased by the most discerning cannabis consumers in the market—and the most brand-aware. A premium flower container sitting alongside mid-tier flower in the same dispensary case must communicate its superior quality instantly through packaging design alone.</p>
                            <ul>
                                <li><strong>Soft-Touch Matte Lamination:</strong> The velvety tactile quality of matte lamination signals restraint and confidence—qualities associated with genuine luxury in every premium consumer category.</li>
                                <li><strong>Botanical Illustration Printing:</strong> Detailed, artisanal botanical illustrations of the strain's genetics, leaf structures, or terpene flavor profile create a collector-quality aesthetic aligned with the craft flower market.</li>
                                <li><strong>Gold/Silver Foil Stamping:</strong> Brand marks and strain names rendered in foil create a precious-metal visual cue that positions your flower alongside artisanal spirits and premium spirits in the consumer's perception of quality and value.</li>
                                <li><strong>Window Panels:</strong> Clear panels allow consumers to appreciate bud size, colour, and trichome coverage—reducing purchase uncertainty and justifying premium pricing at the point of sale.</li>
                            </ul>

                            <h3>Strain-Differentiated Packaging Systems</h3>
                            <p>Premium flower brands often carry 6–12+ strains with different genetic lineages, terpene profiles, and effect categories. A well-designed packaging system allows consumers to navigate your range intuitively while maintaining a cohesive brand identity across every SKU.</p>
                            <ul>
                                <li><strong>Colour-Coding by Genetics:</strong> Sativa, Indica, and Hybrid strains each receive a designated colour palette within the same structural template—creating instant visual differentiation while maintaining brand coherence.</li>
                                <li><strong>Limited Edition Drops:</strong> Foil-stamped limited edition numbering and signature panels create collector demand for seasonal or genetic drops—a powerful purchase driver in the premium consumer cannabis category.</li>
                            </ul>

                            <h3>Why CustomPackMakers for Cannabis Flower Packaging</h3>
                            <ul>
                                <li><strong>Preservation Engineering:</strong> We engineer packaging systems around your specific flower's terpene and moisture requirements—not generic standards—delivering optimal shelf-life outcomes for your genetics.</li>
                                <li><strong>Full Compliance Integration:</strong> All mandatory labeling elements are designed into the packaging template from day one, eliminating costly label application steps.</li>
                                <li><strong>Flexible Volume Options:</strong> From 500-unit craft batches to 50,000-unit commercial runs, we scale without minimums sacrificing quality.</li>
                            </ul>
                            <p>Elevate your cultivar with <strong>cannabis flower packaging</strong> that preserves every terpene and builds the premium brand equity your flower deserves. Contact CustomPackMakers for a complimentary barrier consultation today.</p>
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
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">Pharmaceutical-grade barrier performance and premium brand aesthetics that preserve your flower's quality and build dispensary loyalty.</p>
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
                                    <p className="text-sm text-slate-500 leading-relaxed">Our cannabis flower packaging is designed with full regulatory panel planning—accommodating all state-mandated health advisories, batch codes, THC/CBD content by weight, and QR seed-to-sale links within a layout that enhances rather than compromises your premium brand presentation.</p>
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
                                    <p className="text-sm text-slate-500 leading-relaxed">CPSC-certified push-down-and-turn lids for rigid containers and CR magnetic closure boxes with inner sealed pouches pass all federal child safety testing protocols—providing reliable, repeatable protection throughout the product's entire multi-access consumer lifecycle.</p>
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
                                    <p className="text-sm text-slate-500 leading-relaxed">Hermetic inner foil pouches with integrated humidity control maintain optimal 58–62% relative humidity while containing terpene vapors completely—preserving the aromatic profile that defines your strain's identity and the dispensary freshness that drives repeat consumer purchases.</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img src={flowerPackagingImg6} alt="Professional cannabis flower packaging" className="w-full h-full object-cover" />
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
                                <img src={flowerPackagingImg7} alt="Differentiate Your Flower Brand" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                            </div>
                            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-60" />
                            <div className="absolute -z-10 -top-8 -right-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl opacity-60" />
                        </div>
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">Differentiate Your <span className="text-primary">Flower Brand</span> From Others</h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">At CustomPackMakers, we firmly believe that premium indoor genetics deserve a container of equal excellence. Our bespoke, rigid airtight flower boxes featuring sophisticated foil stamping, luxurious soft-touch matte lamination, and humidity-controlled inner pouches signal top-shelf quality before the lid is ever lifted. By prioritizing both aesthetic elegance and optimal product preservation, we help you build the significant brand equity that justifies premium pricing. This meticulously crafted packaging ensures a superior unboxing experience, effectively setting your brand apart while fostering deep consumer trust and long-term market authority.</p>
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
                                    { id: "item-1", question: "Do your flower containers include humidity control?", answer: "Yes. We integrate Boveda or equivalent two-way humidity packs sized to the container volume, maintaining precise 58–62% relative humidity throughout the product's full retail life." },
                                    { id: "item-2", question: "Are your flower containers child-resistant?", answer: "Yes. Push-down-and-turn lids for rigid containers and CR magnetic closure boxes both carry CPSC certification with reliable repeated-access child-resistant performance." },
                                    { id: "item-3", question: "Can you accommodate different flower quantities—1g, 3.5g, 7g, 28g?", answer: "Absolutely. We engineer container dimensions and structural parameters for any flower quantity from single-gram samples to ounce containers and bulk display jars." },
                                    { id: "item-4", question: "Do you offer smell-proof and UV-protected packaging?", answer: "Yes. Hermetically sealed inner foil pouches with UV-opaque outer shells provide comprehensive odor containment and photodegradation protection throughout the retail display period." },
                                    { id: "item-5", question: "What is the minimum order for cannabis flower packaging?", answer: "We offer MOQs starting at 500 units per SKU for rigid containers, making it practical for boutique cultivators launching new genetics alongside large commercial operations." }
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
                            <img src={FAQimage} alt="Cannabis Flower Packaging FAQ" className="absolute inset-0 w-full h-full object-cover" />
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

export default CannabisFlowerPackaging;
