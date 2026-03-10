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

import christmasChocolateBoxesHero from "@/assets/chocolate-products/christmas-chocolate-boxes/img-hero.png";
import christmasChocolateBoxesImg1 from "@/assets/chocolate-products/christmas-chocolate-boxes/img-1.png";
import christmasChocolateBoxesImg2 from "@/assets/chocolate-products/christmas-chocolate-boxes/img-2.png";
import christmasChocolateBoxesImg3 from "@/assets/chocolate-products/christmas-chocolate-boxes/img-3.png";
import christmasChocolateBoxesImg4 from "@/assets/chocolate-products/christmas-chocolate-boxes/img-4.png";
import christmasChocolateBoxesImg5 from "@/assets/chocolate-products/christmas-chocolate-boxes/img-5.png";
import christmasChocolateBoxesImg6 from "@/assets/chocolate-products/christmas-chocolate-boxes/img-whychoose.png";
import christmasChocolateBoxesImg7 from "@/assets/chocolate-products/christmas-chocolate-boxes/img-different.png";
import FAQimage from "@/assets/FAQ-image.png";
import artisanChocolateBox from "@/assets/chocolate-products/Artisan Chocolate Box.webp";
import chocolateMilkBoxes from "@/assets/chocolate-products/chocolate-milk-boxes.webp";
import chocolateCandyBoxes from "@/assets/chocolate-products/chocolate-candy-boxes.webp";
import luxuryChocolateBoxes from "@/assets/chocolate-products/luxury-chocolate-boxes.webp";
import chocolateBombBoxes from "@/assets/chocolate-products/chocolate-bomb-boxes.webp";
import chocolateGiftBoxes from "@/assets/chocolate-products/chocolate-gift-boxes.webp";
import mushroomChocolateBarPackaging from "@/assets/chocolate-products/Mushroom Chocolate Bar Packaging.webp";
import chocolateBarPackaging from "@/assets/chocolate-products/Chocolate Bar Packaging.webp";
import chocolateSubscriptionBox from "@/assets/chocolate-products/chocolate-subscription-box.webp";

const carouselProducts = [
    { name: "Artisan Chocolate Box", image: artisanChocolateBox, link: "/industries/chocolate-boxes/artisan-chocolate-box", desc: "Handcrafted boxes with food-grade inserts and gold foiling." },
    { name: "Chocolate Milk Boxes", image: chocolateMilkBoxes, link: "/industries/chocolate-boxes/chocolate-milk-boxes", desc: "Moisture-resistant dairy packaging with vibrant graphics." },
    { name: "Chocolate Candy Boxes", image: chocolateCandyBoxes, link: "/industries/chocolate-boxes/chocolate-candy-boxes", desc: "Vibrant candy boxes with PET window displays." },
    { name: "Luxury Chocolate Boxes", image: luxuryChocolateBoxes, link: "/industries/chocolate-boxes/luxury-chocolate-boxes", desc: "Premium rigid board boxes with foil-stamping finishes." },
    { name: "Chocolate Bomb Boxes", image: chocolateBombBoxes, link: "/industries/chocolate-boxes/chocolate-bomb-boxes", desc: "Secure cradle packaging for hot chocolate bombs." },
    { name: "Chocolate Gift Boxes", image: chocolateGiftBoxes, link: "/industries/chocolate-boxes/chocolate-gift-boxes", desc: "Gift-ready packaging with sophisticated ribbon closures." },
    { name: "Mushroom Chocolate Bar Packaging", image: mushroomChocolateBarPackaging, link: "/industries/chocolate-boxes/mushroom-chocolate-bar-packaging", desc: "Unique packaging for mushroom-infused chocolates." },
    { name: "Chocolate Bar Packaging", image: chocolateBarPackaging, link: "/industries/chocolate-boxes/chocolate-bar-packaging", desc: "Airtight protection and high-fidelity chocolate bar boxes." },
    { name: "Chocolate Subscription Box", image: chocolateSubscriptionBox, link: "/industries/chocolate-boxes/chocolate-subscription-box", desc: "Recurring monthly subscription box packaging solutions." },
];

const faqs = [
    { id: "item-1", q: "What seasonal graphic options are available for Christmas chocolate boxes?", a: "We offer full-color CMYK seasonal graphics including classic Christmas motifs, contemporary Scandinavian winter designs, elegant gold-and-burgundy color palettes, and playful illustrated holiday scenes—all available in standard stock designs or fully custom brand-integrated seasonal artwork." },
    { id: "item-2", q: "Can Christmas chocolate boxes ship safely in winter cold conditions?", a: "Yes. Our high-caliper board construction provides passive thermal buffering against cold shock during winter courier shipping—preventing the blooming and condensation moisture damage that affects chocolate surfaces when temperature transitions are rapid and unprotected." },
    { id: "item-3", q: "Do you offer advent calendar chocolate box designs?", a: "Absolutely. We design and produce custom advent calendar chocolate boxes with 12 or 24 numbered compartments—available in both flat two-dimensional grid formats and three-dimensional house or forest scene structures for retail and corporate gifting programs." },
    { id: "item-4", q: "What is the lead time for holiday Christmas chocolate packaging?", a: "Standard Christmas chocolate boxes require 8–10 business day production. For seasonal orders, we recommend placing holiday packaging orders 6–8 weeks before required delivery to accommodate seasonal production demand and ensure shipping buffer for retail readiness." },
    { id: "item-5", q: "Are Christmas chocolate boxes available with gift messaging options?", a: "Yes. Inner lid panel printing, removable message card inserts, and personalized belly bands are available for Christmas chocolate gift boxes—enabling corporate gifting programs and retail brands to deliver personally addressed seasonal greetings at production scale." },
];

const ChristmasChocolateBoxes = () => {
    const [selectedImage, setSelectedImage] = useState(0);
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);

    const productImages = [
        { src: christmasChocolateBoxesImg1, alt: "Christmas Chocolate Box - Main View" },
        { src: christmasChocolateBoxesImg2, alt: "Christmas Chocolate Box - Seasonal Graphics" },
        { src: christmasChocolateBoxesImg3, alt: "Christmas Chocolate Box - Advent Calendar" },
        { src: christmasChocolateBoxesImg4, alt: "Christmas Chocolate Box - Gift Set" },
        { src: christmasChocolateBoxesImg5, alt: "Christmas Chocolate Box - Lifestyle" },
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
                <title>Christmas Chocolate Boxes | Festive Holiday Confection Packaging | CustomPackMakers</title>
                <meta name="description" content="Festive Christmas chocolate boxes with seasonal graphics, advent calendar formats, thermal winter protection, and gift messaging options. Capture the holiday chocolate gifting market." />
                <meta name="keywords" content="christmas chocolate boxes, holiday chocolate packaging, festive chocolate gift boxes, advent calendar chocolate packaging, winter chocolate boxes" />
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
                            <BreadcrumbItem><BreadcrumbPage>Christmas Chocolate Boxes</BreadcrumbPage></BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </div>

            <section className="py-8 bg-background">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-7 space-y-6">
                            <div className="w-20 h-1.5 bg-primary rounded-full" />
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight"><span className="text-primary">Christmas</span> Chocolate Boxes</h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">Festive holiday chocolate packaging with seasonal CMYK graphic printing, advent calendar compartment formats, thermal winter shipping protection, and personalized gift messaging integration—capturing the holiday confectionery gifting market with the seasonal presentation quality that makes chocolate the most gifted product of the Christmas season.</p>
                            <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300" onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}>Get a Quote</Button>
                        </div>
                        <div className="lg:col-span-5 relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-muted group">
                            <img src={christmasChocolateBoxesHero} alt="Christmas Chocolate Boxes" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 max-w-3xl">Seasonal Chocolate Packaging That Captures the Holiday Market</h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>Our <strong className="text-foreground">custom Christmas chocolate boxes</strong> are engineered to capture the defining confectionery gifting season of the year. Full-color seasonal CMYK printing on premium SBS cardstock delivers the visual warmth and festive energy of classic Christmas motifs, contemporary Scandinavian winter palettes, and elegant gold-and-burgundy brand-integrated seasonal designs—creating packaging that consumers select first on seasonal retail shelves and photograph before gifting to share their chocolate gift on social platforms.</p>
                        <p>Thermal winter shipping protection via high-caliper board construction buffers against cold shock during courier transit—preventing the chocolate blooming and surface condensation that reduce quality perception. Advent calendar compartment designs in 12 and 24-count formats bring the beloved holiday countdown ritual into the premium confectionery category, creating the highest-per-unit-revenue seasonal packaging format available in the Christmas chocolate market.</p>
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
                                            <div className="space-y-1.5"><Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">D (in)</Label><Input id="depth" type="number" placeholder="3" className="h-9 bg-white" /></div>
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">The Complete Guide to Christmas Chocolate Box Packaging</h2>
                    <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="[&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-6 [&>h3]:mb-3 [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-4 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-4 [&>ul]:space-y-2 [&>ul>li]:text-[15px] [&>ul>li]:text-slate-600">
                            <p>Christmas is the single largest chocolate gifting period in the calendar year—accounting for a disproportionate share of annual confectionery revenue across every retail channel from specialty boutiques to mass-market grocery. For chocolate brands, mastering Christmas packaging is not optional—it is a critical commercial capability that determines market share during the most competitive and highest-value selling period of the year. Brands that invest in genuinely seasonal, high-quality Christmas chocolate packaging consistently outperform those using generic year-round packaging repurposed for the holiday shelf.</p>
                            <p>What makes Christmas chocolate packaging succeed commercially is its ability to simultaneously communicate festive warmth and brand identity—maintaining the brand's visual equity while adopting the seasonal color language and motif vocabulary that consumers specifically seek during the Christmas gifting season. Generic red-and-green packaging communicates seasonality but not brand distinction. Premium Christmas chocolate packaging delivers both—using seasonal elements as a canvas for elevated brand expression that consumers remember and specifically repurchase season after season.</p>
                            <h3>Seasonal Graphic Design Capabilities</h3>
                            <p>Christmas chocolate packaging design is a specialized capability—requiring intimate understanding of seasonal consumer psychology, retail shelf competition dynamics, and the cultural evolution of Christmas aesthetic conventions across different demographic segments and regional markets.</p>
                            <ul>
                                <li><strong>Classic Traditional Motifs:</strong> Holly, ribbons, snowflakes, and candlelight imagery rendered in rich burgundy, forest green, and traditional gold—the evergreen aesthetic canon of luxury Christmas confectionery that resonates strongly across generational demographics and premium gifting occasions.</li>
                                <li><strong>Contemporary Scandinavian Winter:</strong> Clean geometric patterns, minimalist snowflake illustrations, and cool nordic palettes in slate, white, and midnight blue—capturing the growing premium consumer preference for restrained elegance over traditional ornamental Christmas aesthetics.</li>
                                <li><strong>Illustrated Holiday Scenes:</strong> Custom illustrated winter landscapes, village scenes, and festive characters rendered in a brand-coherent illustration style—creating visually complex packaging that rewards extended consumer attention and communicates artisanal design investment.</li>
                                <li><strong>Photographic Winter Imagery:</strong> Full-bleed photographic winter and food styling imagery on premium coated stocks—delivering maximum visual impact with the photorealistic richness that consumers associate with premium brand marketing investment.</li>
                            </ul>
                            <h3>Advent Calendar Packaging Engineering</h3>
                            <p>The chocolate advent calendar has evolved from a novelty confectionery product into a premium gifting category in its own right—commanding per-unit prices that far exceed standard gift box equivalents and creating the daily brand touchpoint across 12 or 24 December days that no other packaging format provides.</p>
                            <ul>
                                <li><strong>24-Window Flat-Grid Format:</strong> The classic advent calendar format—a flat board with 24 numbered numbered flap compartments revealing individual chocolates—available in custom dimensions to accommodate everything from small pralines to full-sized chocolate bars.</li>
                                <li><strong>Three-Dimensional House Format:</strong> Die-cut and assembled three-dimensional Christmas house or village scene structures with individual numbered drawer compartments—the premium advent calendar format that becomes a seasonal home decoration in addition to a confectionery product.</li>
                                <li><strong>Tower Stack Format:</strong> Vertically stacked disc or rectangular compartment towers with numbered drawers—a contemporary advent calendar structural alternative that photographs distinctively and displays elegantly on counter and shelf surfaces throughout December.</li>
                            </ul>
                            <h3>Winter Shipping and Thermal Protection</h3>
                            <p>Christmas chocolate shipments face unique environmental challenges—cold shock transitions between heated vehicles and outdoor temperatures, extended shipping networks during peak courier season, and the mechanical stress of compressed seasonal parcel volumes on individual carton integrity.</p>
                            <ul>
                                <li><strong>High-Caliper Board Thermal Mass:</strong> Thicker board construction provides greater passive thermal mass—slowing the rate of temperature change when packages transition between cold exterior and warm interior environments, protecting chocolate from the crystallization and blooming effects of rapid thermal transition.</li>
                                <li><strong>Condensation Resistance Coating:</strong> Interior moisture-resistance coatings prevent condensation from forming on chocolate surfaces during temperature transitions—preserving the aesthetic quality of chocolate surfaces through the humidity fluctuations inherent in winter-season distribution logistics.</li>
                                <li><strong>Corrugated Transit Outer:</strong> Corrugated transit outers for D2C Christmas chocolate shipments provide the mechanical compression resistance required for peak-season courier parcel stacking—protecting the presentation inner box throughout extended logistics chains.</li>
                            </ul>
                            <h3>Why CustomPackMakers for Christmas Chocolate Packaging</h3>
                            <p>Our seasonal packaging team works with confectionery brands through the full Christmas packaging cycle—from graphic concept and structural engineering in summer through production completion 6–8 weeks before seasonal shipping windows. We manage the production timing complexity of seasonal packaging so your team can focus on chocolate production and retail execution. Contact our team now to begin planning your Christmas chocolate packaging programme for the upcoming holiday season.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-8 bg-accent/20">
                <div className="container mx-auto px-[5vw]">
                    <div className="mb-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Related Chocolate Products</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl">Explore our complete range of premium chocolate packaging for every season and occasion.</p>
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
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">Festive seasonal graphics, advent calendar engineering, and winter-protection board for Christmas chocolate market dominance.</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">
                        <div className="space-y-5">
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1"><div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors"><svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div></div>
                                <div><h3 className="text-lg font-bold text-slate-900 mb-2">Festive Seasonal Graphics</h3><p className="text-sm text-slate-500 leading-relaxed">Full-color CMYK seasonal printing across traditional, Scandinavian, and illustrated holiday design vocabularies delivers the festive visual energy that positions your chocolate gifting line directly in the premium segment of the Christmas confectionery market—ahead of generic seasonal competitors who repurpose year-round packaging with minimal seasonal graphic investment.</p></div>
                            </div>
                            <div className="w-full h-px bg-slate-100" />
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1"><div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors"><svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg></div></div>
                                <div><h3 className="text-lg font-bold text-slate-900 mb-2">Advent Calendar Engineering</h3><p className="text-sm text-slate-500 leading-relaxed">Custom 12 and 24-window advent calendar structures—from flat-grid board formats to three-dimensional house and village scenes—provide the daily brand touchpoint across the entire December lead-up to Christmas, commanding the highest per-unit pricing and most extended consumer relationship of any chocolate packaging format available in the seasonal confectionery market.</p></div>
                            </div>
                            <div className="w-full h-px bg-slate-100" />
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1"><div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors"><svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg></div></div>
                                <div><h3 className="text-lg font-bold text-slate-900 mb-2">Winter Thermal Protection</h3><p className="text-sm text-slate-500 leading-relaxed">High-caliper board construction and condensation-resistance interior coatings protect chocolate surfaces through the cold shock transitions of winter courier shipping—preventing blooming and condensation damage in peak-season parcel flows, ensuring Christmas chocolate gifts arrive in the pristine presentation condition that reflects your brand's seasonal quality standards.</p></div>
                            </div>
                        </div>
                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img src={christmasChocolateBoxesImg6} alt="Christmas chocolate packaging" className="w-full h-full object-cover" />
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
                                <img src={christmasChocolateBoxesImg7} alt="Differentiate Your Christmas Chocolate Brand" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                            </div>
                            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-60" />
                            <div className="absolute -z-10 -top-8 -right-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl opacity-60" />
                        </div>
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">Differentiate Your <span className="text-primary">Christmas Chocolate</span> From Others</h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">In the Christmas confectionery market, seasonal packaging is the purchase decision catalyst. Our Christmas chocolate boxes combine genuinely festive graphic design with structural formats—advent calendars, gift towers, ribbon-closure sets—that consumers specifically seek as holiday gifts. Thermal protection ensures every box arrives in perfect gift-ready condition. The result: a Christmas packaging program that dominates seasonal shelf space, commands premium gifting pricing, and builds the brand association with holiday celebration that drives year-after-year repeat purchasing.</p>
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
                            <img src={FAQimage} alt="Christmas Chocolate Box FAQ" className="absolute inset-0 w-full h-full object-cover" />
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

export default ChristmasChocolateBoxes;
