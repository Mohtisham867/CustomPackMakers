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

import chocolateBombBoxesHero from "@/assets/industry/chocolate-boxes/chocolate-bomb-boxes/img-hero.webp";
import chocolateBombBoxesImg1 from "@/assets/industry/chocolate-boxes/chocolate-bomb-boxes/img-1.webp";
import chocolateBombBoxesImg2 from "@/assets/industry/chocolate-boxes/chocolate-bomb-boxes/img-2.webp";
import chocolateBombBoxesImg3 from "@/assets/industry/chocolate-boxes/chocolate-bomb-boxes/img-3.webp";
import chocolateBombBoxesImg4 from "@/assets/industry/chocolate-boxes/chocolate-bomb-boxes/img-4.webp";
import chocolateBombBoxesImg5 from "@/assets/industry/chocolate-boxes/chocolate-bomb-boxes/img-5.webp";
import chocolateBombBoxesImg6 from "@/assets/industry/chocolate-boxes/chocolate-bomb-boxes/img-whychoose.webp";
import chocolateBombBoxesImg7 from "@/assets/industry/chocolate-boxes/chocolate-bomb-boxes/img-different.webp";
import FAQimage from "@/assets/FAQ-image.webp";
import artisanChocolateBox from "@/assets/industry/chocolate-boxes/Artisan Chocolate Box.webp";
import chocolateMilkBoxes from "@/assets/industry/chocolate-boxes/chocolate-milk-boxes.webp";
import chocolateCandyBoxes from "@/assets/industry/chocolate-boxes/chocolate-candy-boxes.webp";
import luxuryChocolateBoxes from "@/assets/industry/chocolate-boxes/luxury-chocolate-boxes.webp";
import chocolateGiftBoxes from "@/assets/industry/chocolate-boxes/chocolate-gift-boxes.webp";
import christmasChocolateBoxes from "@/assets/industry/chocolate-boxes/christmas-chocolate-boxes.webp";
import mushroomChocolateBarPackaging from "@/assets/industry/chocolate-boxes/Mushroom Chocolate Bar Packaging.webp";
import chocolateBarPackaging from "@/assets/industry/chocolate-boxes/Chocolate Bar Packaging.webp";
import chocolateSubscriptionBox from "@/assets/industry/chocolate-boxes/chocolate-subscription-box.webp";

const carouselProducts = [
    { name: "Artisan Chocolate Box", image: artisanChocolateBox, link: "/industries/chocolate-boxes/artisan-chocolate-box", desc: "Handcrafted boxes with food-grade inserts and gold foiling." },
    { name: "Chocolate Milk Boxes", image: chocolateMilkBoxes, link: "/industries/chocolate-boxes/chocolate-milk-boxes", desc: "Moisture-resistant dairy packaging with vibrant graphics." },
    { name: "Chocolate Candy Boxes", image: chocolateCandyBoxes, link: "/industries/chocolate-boxes/chocolate-candy-boxes", desc: "Vibrant candy boxes with PET window displays." },
    { name: "Luxury Chocolate Boxes", image: luxuryChocolateBoxes, link: "/industries/chocolate-boxes/luxury-chocolate-boxes", desc: "Premium rigid board boxes with foil-stamping finishes." },
    { name: "Chocolate Gift Boxes", image: chocolateGiftBoxes, link: "/industries/chocolate-boxes/chocolate-gift-boxes", desc: "Gift-ready packaging with sophisticated ribbon closures." },
    { name: "Christmas Chocolate Boxes", image: christmasChocolateBoxes, link: "/industries/chocolate-boxes/christmas-chocolate-boxes", desc: "Festive holiday-themed chocolate packaging." },
    { name: "Mushroom Chocolate Bar Packaging", image: mushroomChocolateBarPackaging, link: "/industries/chocolate-boxes/mushroom-chocolate-bar-packaging", desc: "Unique packaging for mushroom-infused chocolates." },
    { name: "Chocolate Bar Packaging", image: chocolateBarPackaging, link: "/industries/chocolate-boxes/chocolate-bar-packaging", desc: "Airtight protection and high-fidelity chocolate bar boxes." },
    { name: "Chocolate Subscription Box", image: chocolateSubscriptionBox, link: "/industries/chocolate-boxes/chocolate-subscription-box", desc: "Recurring monthly subscription box packaging solutions." },
];

const faqs = [
    { id: "item-1", q: "What packaging prevents hot chocolate bombs from breaking during shipping?", a: "Our chocolate bomb boxes use thermoformed PET cradle inserts that secure each sphere individually against movement—combined with high-caliper corrugated or rigid outer shells with foam padding that absorbs courier handling impacts, ensuring spheres arrive structurally intact and visually pristine." },
    { id: "item-2", q: "Can the box design reveal the chocolate bomb visually before purchase?", a: "Yes. Clear PET dome windows and die-cut lid reveals are available—allowing consumers to see the chocolate bomb's colour, size, and decoration without removing it from the packaging, building purchase confidence and driving visual impulse buying decisions at point of sale." },
    { id: "item-3", q: "Do you offer gift-set packaging for multiple chocolate bombs?", a: "Absolutely. We offer multi-cavity designs holding 2, 3, 4, or 6 chocolate bombs in individual cradles within a single gift box—available with magnetic closures, ribbon pulls, and gift-ready exterior finishes for seasonal gifting and corporate beverage gift set applications." },
    { id: "item-4", q: "Are the packaging materials heat-resistant for hot beverage use instructions?", a: "Our packaging materials are selected for ambient storage—not direct heat contact. However, we include printing zones for usage instructions, heat warnings, and activation guidance directly on the packaging to ensure consumers use hot chocolate bombs safely in their preferred hot beverage." },
    { id: "item-5", q: "What is the minimum order quantity for chocolate bomb boxes?", a: "MOQ starts at 500 units for single-cavity chocolate bomb designs. Multi-cavity and custom structural formats start at 1,000 units. Volume pricing tiers provide significant per-unit savings at 2,500 and 5,000 units for seasonal gifting production runs." },
];

const ChocolateBombBoxes = () => {
    const [selectedImage, setSelectedImage] = useState(0);
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);

    const productImages = [
        { src: chocolateBombBoxesImg1, alt: "Chocolate Bomb Box - Main View" },
        { src: chocolateBombBoxesImg2, alt: "Chocolate Bomb Box - Cradle Insert" },
        { src: chocolateBombBoxesImg3, alt: "Chocolate Bomb Box - Multi-Pack" },
        { src: chocolateBombBoxesImg4, alt: "Chocolate Bomb Box - Gift Set" },
        { src: chocolateBombBoxesImg5, alt: "Chocolate Bomb Box - Lifestyle" },
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
                <title>Custom Chocolate Bomb Boxes | Hot Cocoa Bomb Packaging | CustomPackMakers</title>
                <meta name="description" content="Protective chocolate bomb boxes with thermoformed PET cradle inserts, dome window reveals, and multi-pack gift set designs. Keep hot chocolate bombs intact during shipping." />
                <meta name="keywords" content="chocolate bomb boxes, hot chocolate bomb packaging, cocoa bomb gift box, chocolate bomb shipping box, spherical chocolate packaging" />
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
                            <BreadcrumbItem><BreadcrumbPage>Chocolate Bomb Boxes</BreadcrumbPage></BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </div>

            <section className="py-8 bg-background">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-7 space-y-6">
                            <div className="w-20 h-1.5 bg-primary rounded-full" />
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight"><span className="text-primary">Custom</span> Chocolate Bomb Boxes</h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">Protective hot cocoa bomb packaging with thermoformed sphere cradle inserts, clear dome window reveals, and gift-ready exterior finishes—safeguarding delicate chocolate spheres through every shipping and retail handling scenario while creating the dramatic unboxing presentation that drives holiday gifting demand.</p>
                            <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300" onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}>Get a Quote</Button>
                        </div>
                        <div className="lg:col-span-5 relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-muted group">
                            <img src={chocolateBombBoxesHero} alt="Custom Chocolate Bomb Boxes" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 max-w-3xl">Chocolate Bomb Packaging That Delivers Every Sphere Intact</h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>Our <strong className="text-foreground">custom chocolate bomb boxes</strong> are purpose-engineered for the unique structural challenge of protecting hollow chocolate spheres during courier shipping and retail handling. Thermoformed PET cradle inserts hold each bomb in a precisely contoured cavity—eliminating the lateral movement and point-contact pressure that causes spheres to crack, chip, or flatten in transit. The result: every hot chocolate bomb arrives in the same decorative perfection it was packed in.</p>
                        <p>Clear dome window designs allow consumers to see the chocolate bomb's colour, decoration, and size without opening the packaging—building purchase confidence and creating the visual spectacle that fuels social media sharing. Multi-pack gift set configurations in 2, 3, 4, and 6-count formats with magnetic closures and ribbon pulls make our chocolate bomb boxes the definitive seasonal gifting packaging solution for hot beverage confectionery brands.</p>
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
                                            <div className="space-y-1.5"><Label htmlFor="length" className="text-xs font-semibold text-muted-foreground">L (in)</Label><Input id="length" type="number" placeholder="5" className="h-9 bg-white" /></div>
                                            <div className="space-y-1.5"><Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label><Input id="width" type="number" placeholder="5" className="h-9 bg-white" /></div>
                                            <div className="space-y-1.5"><Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">D (in)</Label><Input id="depth" type="number" placeholder="5" className="h-9 bg-white" /></div>
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">The Complete Guide to Chocolate Bomb Packaging</h2>
                    <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="[&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-6 [&>h3]:mb-3 [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-4 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-4 [&>ul]:space-y-2 [&>ul>li]:text-[15px] [&>ul>li]:text-slate-600">
                            <p>Hot chocolate bombs emerged as one of the most viral confectionery trends in recent years—hollow chocolate spheres filled with cocoa powder, marshmallows, and flavoring agents that dramatically dissolve when dropped into hot milk. The sensory theatre of the melting bomb and the reveal of the interior ingredients created a social media phenomenon that drove explosive demand for home beverage gifting. But with this opportunity came a unique packaging challenge: hollow chocolate spheres are among the most fragile confection formats ever commercialized.</p>
                            <p>A hot chocolate bomb is essentially a decorative, food-grade hollow sphere—with wall thickness often measuring just 2–3mm. Even minor lateral movement within its packaging can cause surface cracks. Point-contact pressure from inadequately cushioned packaging compresses and flattens sphere surfaces. Temperature variation in transit causes thermal expansion and contraction that stress the already-thin shell. Successfully packaging chocolate bombs for D2C shipping and retail display requires engineering solutions that address every one of these fragility vectors simultaneously.</p>
                            <h3>Cradle Insert Engineering for Sphere Protection</h3>
                            <p>The cradle insert is the most critical structural element in chocolate bomb packaging—the physical mechanism that holds each sphere in precise position while absorbing and distributing external mechanical forces away from the thin chocolate shell.</p>
                            <ul>
                                <li><strong>Thermoformed PET Sphere Cradles:</strong> Custom-thermoformed to the exact sphere diameter of your chocolate bombs, PET cradle inserts provide continuous peripheral support that distributes weight and impact forces across the maximum contact surface area—protecting thin chocolate shells from point-contact failure.</li>
                                <li><strong>Foam Ring Suspension:</strong> Closed-cell EVA foam ring inserts provide exceptional vibration damping for courier parcel shipping—absorbing the repetitive micro-vibrations of transportation that cumulatively stress chocolate sphere shells over extended delivery periods.</li>
                                <li><strong>Corrugated Outer Shell:</strong> Double-wall corrugated outer boxes provide additional compression resistance for stacked courier parcels—preventing the carton compression that transmits crushing forces through to the inner chocolate bomb cradle assembly.</li>
                                <li><strong>Air-Gap Buffer:</strong> Structural internal spacing maintains an air gap between adjacent chocolate bombs in multi-pack configurations—eliminating sphere-to-sphere contact that causes chipping and surface damage during lateral transit movements.</li>
                            </ul>
                            <h3>Window Reveal Design for Retail and D2C Sales</h3>
                            <p>The chocolate bomb's visual appeal—its spherical form, distinctive colour, and decorative surface decoration—is a primary purchase driver. Packaging that conceals this visual appeal forgoes one of the product's most powerful commercial assets.</p>
                            <ul>
                                <li><strong>Dome PET Window:</strong> Clear domed PET inserts fitted to the top panel of the outer box allow consumers to see the wrapped chocolate bomb without opening the packaging—creating the visual spectacle that drives impulse purchasing at retail and provides the unboxing anticipation that drives social media sharing.</li>
                                <li><strong>Die-Cut Reveal Window:</strong> Flat die-cut PET windows in lid panels allow direct visual contact with the chocolate bomb surface—enabling consumers to assess colour, surface decoration quality, and size before purchasing.</li>
                                <li><strong>Full-Reveal Lid Design:</strong> Flat-lid box designs that open completely to reveal the full chocolate bomb arrangement are optimal for gifted multi-packs—maximising the ceremonial reveal quality when the recipient first opens the gift.</li>
                            </ul>
                            <h3>Multi-Pack and Gift Set Configurations</h3>
                            <p>The chocolate bomb category is predominantly a gifting purchase—purchased for personal enjoyment second and as gifts first. Multi-pack configurations with deliberate gift set aesthetics are essential for capturing the premium gifting market that drives the highest per-unit revenue in the category.</p>
                            <ul>
                                <li><strong>2-Pack Gift Sets:</strong> Paired chocolate bomb configurations in complementary flavors—ideal for Valentine's Day, anniversary gifting, and other two-person occasions. Two-piece magnetic lid formats provide premium closure quality.</li>
                                <li><strong>4-Pack and 6-Pack Assortments:</strong> Assorted flavor configurations in single gift boxes—ideal for household gifting occasions and corporate beverage gift baskets where variety and abundance signal gift generosity.</li>
                                <li><strong>Ribbon and Bow Integration:</strong> Structural ribbon channel integration allows the addition of fabric bow embellishments without adhesive damage—facilitating the immediate gift-ready presentation that drives premium retail pricing.</li>
                            </ul>
                            <h3>Temperature Sensitivity Packaging Solutions</h3>
                            <ul>
                                <li><strong>Insulating Board Mass:</strong> High-caliper board construction provides passive thermal buffering against ambient temperature spikes during non-refrigerated shipping—protecting thin chocolate shells from softening and deformation in warm weather courier conditions.</li>
                                <li><strong>Usage Instruction Integration:</strong> Clear, well-designed activation instruction panels printed directly on the packaging explain the hot chocolate bomb dissolution process—reducing consumer confusion and negative product experiences that damage repeat purchase rates.</li>
                            </ul>
                            <h3>Why CustomPackMakers for Chocolate Bomb Packaging</h3>
                            <p>Our engineering team understands the specific structural demands of spherical confectionery packaging—from cradle insert thermoforming to multi-pack gift set assembly. We work with hot chocolate bomb brands from initial structural design consultation through first production run, ensuring every sphere reaches your customers intact, visually spectacular, and ready to create the emotional moment your brand promises. Contact us for a chocolate bomb packaging structural assessment today.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-8 bg-accent/20">
                <div className="container mx-auto px-[5vw]">
                    <div className="mb-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Related Chocolate Products</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl">Explore our full range of premium chocolate packaging for every confection type and gifting occasion.</p>
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
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">Sphere cradle protection, dome window visibility, and multi-pack gift engineering for hot chocolate bomb brands.</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">
                        <div className="space-y-5">
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1"><div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors"><svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div></div>
                                <div><h3 className="text-lg font-bold text-slate-900 mb-2">Sphere Cradle Protection</h3><p className="text-sm text-slate-500 leading-relaxed">Thermoformed PET sphere cradles and EVA foam ring suspension absorb courier handling impacts and transit vibrations—protecting 2–3mm thin chocolate shells from cracking, chipping, and surface deformation, ensuring every hot chocolate bomb arrives in showroom-perfect condition ready to create its spectacular hot beverage reveal moment.</p></div>
                            </div>
                            <div className="w-full h-px bg-slate-100" />
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1"><div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors"><svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg></div></div>
                                <div><h3 className="text-lg font-bold text-slate-900 mb-2">Dome Window Visibility</h3><p className="text-sm text-slate-500 leading-relaxed">Clear domed PET window inserts in the top panel let consumers see the chocolate bomb's colour, decoration, and size without opening the packaging—creating the visual spectacle that turns retail browsers into buyers and provides the unboxing anticipation that drives D2C gifting social media sharing and repeat purchase behaviour.</p></div>
                            </div>
                            <div className="w-full h-px bg-slate-100" />
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1"><div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors"><svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" /></svg></div></div>
                                <div><h3 className="text-lg font-bold text-slate-900 mb-2">Multi-Pack Gift Engineering</h3><p className="text-sm text-slate-500 leading-relaxed">2, 3, 4, and 6-pack configurations with magnetic closures, ribbon channel integration, and gift-ready exterior printing transform chocolate bomb packaging into the premium beverage gifting format that drives seasonal retail revenue and positions hot chocolate bomb brands as the first-choice gift for every holiday, celebration, and corporate gifting occasion.</p></div>
                            </div>
                        </div>
                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img src={chocolateBombBoxesImg6} alt="Chocolate bomb packaging" className="w-full h-full object-cover" />
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
                                <img src={chocolateBombBoxesImg7} alt="Differentiate Your Chocolate Bomb Brand" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                            </div>
                            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-60" />
                            <div className="absolute -z-10 -top-8 -right-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl opacity-60" />
                        </div>
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">Differentiate Your <span className="text-primary">Chocolate Bomb</span> Brand From Others</h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">In the hot beverage gifting category, the packaging is the first spectacle—before the bomb itself dissolves. Our chocolate bomb boxes combine precision sphere cradle inserts, dome window reveals, and gift-ready multi-pack configurations to create packaging as dramatic as the product inside. Every structural decision protects the sphere's integrity while maximizing the visual theatre that makes hot chocolate bomb gifting the most shareable and giftable confectionery format in the modern beverage market.</p>
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
                            <img src={FAQimage} alt="Chocolate Bomb Box FAQ" className="absolute inset-0 w-full h-full object-cover" />
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

export default ChocolateBombBoxes;
