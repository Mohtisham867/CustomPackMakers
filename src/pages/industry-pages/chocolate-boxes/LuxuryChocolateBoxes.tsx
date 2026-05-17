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

import luxuryChocolateBoxesHero from "@/assets/industry/chocolate-boxes/luxury-chocolate-boxes/img-hero.webp";
import luxuryChocolateBoxesImg1 from "@/assets/industry/chocolate-boxes/luxury-chocolate-boxes/img-1.webp";
import luxuryChocolateBoxesImg2 from "@/assets/industry/chocolate-boxes/luxury-chocolate-boxes/img-2.webp";
import luxuryChocolateBoxesImg3 from "@/assets/industry/chocolate-boxes/luxury-chocolate-boxes/img-3.webp";
import luxuryChocolateBoxesImg4 from "@/assets/industry/chocolate-boxes/luxury-chocolate-boxes/img-4.webp";
import luxuryChocolateBoxesImg5 from "@/assets/industry/chocolate-boxes/luxury-chocolate-boxes/img-5.webp";
import luxuryChocolateBoxesImg6 from "@/assets/industry/chocolate-boxes/luxury-chocolate-boxes/img-whychoose.webp";
import luxuryChocolateBoxesImg7 from "@/assets/industry/chocolate-boxes/luxury-chocolate-boxes/img-different.webp";
import FAQimage from "@/assets/FAQ-image.webp";
import artisanChocolateBox from "@/assets/industry/chocolate-boxes/Artisan Chocolate Box.webp";
import chocolateMilkBoxes from "@/assets/industry/chocolate-boxes/chocolate-milk-boxes.webp";
import chocolateCandyBoxes from "@/assets/industry/chocolate-boxes/chocolate-candy-boxes.webp";
import chocolateBombBoxes from "@/assets/industry/chocolate-boxes/chocolate-bomb-boxes.webp";
import chocolateGiftBoxes from "@/assets/industry/chocolate-boxes/chocolate-gift-boxes.webp";
import christmasChocolateBoxes from "@/assets/industry/chocolate-boxes/christmas-chocolate-boxes.webp";
import mushroomChocolateBarPackaging from "@/assets/industry/chocolate-boxes/Mushroom Chocolate Bar Packaging.webp";
import chocolateBarPackaging from "@/assets/industry/chocolate-boxes/Chocolate Bar Packaging.webp";
import chocolateSubscriptionBox from "@/assets/industry/chocolate-boxes/chocolate-subscription-box.webp";

const carouselProducts = [
    { name: "Artisan Chocolate Box", image: artisanChocolateBox, link: "/industries/chocolate-boxes/artisan-chocolate-box", desc: "Handcrafted boxes with food-grade inserts and gold foiling." },
    { name: "Chocolate Milk Boxes", image: chocolateMilkBoxes, link: "/industries/chocolate-boxes/chocolate-milk-boxes", desc: "Moisture-resistant dairy packaging with vibrant graphics." },
    { name: "Chocolate Candy Boxes", image: chocolateCandyBoxes, link: "/industries/chocolate-boxes/chocolate-candy-boxes", desc: "Vibrant candy boxes with PET window displays." },
    { name: "Chocolate Bomb Boxes", image: chocolateBombBoxes, link: "/industries/chocolate-boxes/chocolate-bomb-boxes", desc: "Secure cradle packaging for hot chocolate bombs." },
    { name: "Chocolate Gift Boxes", image: chocolateGiftBoxes, link: "/industries/chocolate-boxes/chocolate-gift-boxes", desc: "Gift-ready packaging with sophisticated ribbon closures." },
    { name: "Christmas Chocolate Boxes", image: christmasChocolateBoxes, link: "/industries/chocolate-boxes/christmas-chocolate-boxes", desc: "Festive holiday-themed chocolate packaging." },
    { name: "Mushroom Chocolate Bar Packaging", image: mushroomChocolateBarPackaging, link: "/industries/chocolate-boxes/mushroom-chocolate-bar-packaging", desc: "Unique packaging for mushroom-infused chocolates." },
    { name: "Chocolate Bar Packaging", image: chocolateBarPackaging, link: "/industries/chocolate-boxes/chocolate-bar-packaging", desc: "Airtight protection and high-fidelity chocolate bar boxes." },
    { name: "Chocolate Subscription Box", image: chocolateSubscriptionBox, link: "/industries/chocolate-boxes/chocolate-subscription-box", desc: "Recurring monthly subscription box packaging solutions." },
];

const faqs = [
    { id: "item-1", q: "What materials are used for luxury chocolate boxes?", a: "We use premium rigid chipboard covered in specialty papers—leatherette, linen-embossed, satin, or solid duplex—with gold or silver foil stamping, soft-touch matte lamination, and magnetic closures that communicate the exclusivity and brand investment expected in the luxury confectionery market." },
    { id: "item-2", q: "Can you add gold foil stamping to luxury chocolate packaging?", a: "Yes. Hot-die gold, silver, rose gold, and holographic foil stamping are all available with precision brand mark registration—the signature finishing touch that anchors luxury chocolate positioning and communicates the material investment that justifies premium confectionery pricing." },
    { id: "item-3", q: "Do you offer magnetic closure options for premium chocolate boxes?", a: "Absolutely. Concealed neodymium magnetic closures provide the satisfying tactile closure quality that signals a luxury product—available in book-fold, shoulder-box, and hinged-lid formats to match your specific luxury chocolate packaging structural requirements." },
    { id: "item-4", q: "What is the minimum order quantity for luxury chocolate boxes?", a: "MOQ starts at 250 units for luxury rigid box designs—serving independent chocolatiers and established premium brands alike. Volume pricing tiers begin at 1,000 units with significant per-unit savings for recurring luxury confectionery packaging production." },
    { id: "item-5", q: "Are food-safe insert materials available for luxury chocolate boxes?", a: "Yes. All insert materials—thermoformed PET trays, die-cut cardboard, velvet-flocked foam, and silk ribbon—are food-contact safe and certified for direct and near-contact use with chocolate products. Inserts are custom-designed for your specific chocolate format and arrangement." },
];

const LuxuryChocolateBoxes = () => {
    const [selectedImage, setSelectedImage] = useState(0);
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);

    const productImages = [
        { src: luxuryChocolateBoxesImg1, alt: "Luxury Chocolate Box - Hero View" },
        { src: luxuryChocolateBoxesImg2, alt: "Luxury Chocolate Box - Open View" },
        { src: luxuryChocolateBoxesImg3, alt: "Luxury Chocolate Box - Foil Detail" },
        { src: luxuryChocolateBoxesImg4, alt: "Luxury Chocolate Box - Insert View" },
        { src: luxuryChocolateBoxesImg5, alt: "Luxury Chocolate Box - Lifestyle" },
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
                <title>Luxury Chocolate Boxes | Premium Rigid Confection Packaging | CustomPackMakers</title>
                <meta name="description" content="Premium luxury chocolate boxes with rigid chipboard construction, gold foil stamping, magnetic closures, and velvet inserts. Elevate premium confectionery brands with packaging that commands attention." />
                <meta name="keywords" content="luxury chocolate boxes, premium chocolate packaging, rigid chocolate box, gold foil chocolate packaging, magnetic closure chocolate box" />
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
                            <BreadcrumbItem><BreadcrumbPage>Luxury Chocolate Boxes</BreadcrumbPage></BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </div>

            <section className="py-8 bg-background">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-7 space-y-6">
                            <div className="w-20 h-1.5 bg-primary rounded-full" />
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight"><span className="text-primary">Luxury</span> Chocolate Boxes</h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">Premium rigid board chocolate packaging with gold foil stamping, magnetic closures, velvet-flocked inserts, and soft-touch matte lamination—elevating high-end confectionery brands with packaging that commands the premium positioning your chocolates deserve.</p>
                            <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300" onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}>Get a Quote</Button>
                        </div>
                        <div className="lg:col-span-5 relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-muted group">
                            <img src={luxuryChocolateBoxesHero} alt="Luxury Chocolate Boxes" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 max-w-3xl">Premium Rigid Chocolate Boxes for High-End Confectionery Brands</h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>Our <strong className="text-foreground">luxury chocolate boxes</strong> are engineered for premium confectionery brands where packaging investment directly translates into brand positioning advantage. Constructed from high-caliper rigid chipboard wrapped in specialty cover papers—leatherette, satin, linen-embossed, or solid duplex—each box delivers the weight, structure, and surface quality that luxury chocolate consumers immediately recognize as commensurate with a premium product experience.</p>
                        <p>Gold foil stamping, relief embossing, magnetic ribbon closures, and velvet-flocked insert trays combine to create a ceremonial unboxing experience that gift recipients remember, photograph, and share. Every material selection and finishing decision is made to communicate artisanal investment, brand exclusivity, and the caliber of chocolate excellence that commands premium retail pricing across every distribution channel.</p>
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
                                        <div className="space-y-1.5"><Label htmlFor="qty" className="text-xs font-semibold text-muted-foreground">Quantity</Label><Input id="qty" type="number" placeholder="250" className="h-9 bg-white" /></div>
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">The Complete Guide to Luxury Chocolate Box Packaging</h2>
                    <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="[&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-6 [&>h3]:mb-3 [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-4 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-4 [&>ul]:space-y-2 [&>ul>li]:text-[15px] [&>ul>li]:text-slate-600">
                            <p>The luxury chocolate market represents one of the highest-margin categories in the entire food and beverage industry. Premium confectionery brands command price points that are multiples of commodity chocolate—not primarily because of the chocolate itself, but because of the total brand experience the packaging delivers. In luxury confectionery, the box is not incidental to the purchase; it is a primary reason consumers choose to buy at premium prices, gift repeatedly, and recommend to their personal networks.</p>
                            <p>This dynamic places extraordinary demands on luxury chocolate packaging. The material weight must feel substantive in the hand—communicating the density of quality. The closure must function with precision—communicating attention to mechanical detail. The surface must respond to touch with the tactile richness of premium materials—velvet, satin, soft-touch polyurethane—that activate the sensory associations with luxury goods across every product category. And the interior must reveal the chocolate arrangement with the ceremony of a jewellery box opening.</p>
                            <h3>Rigid Board Construction for Premium Presence</h3>
                            <p>Luxury chocolate boxes are defined by their structural rigidity—the physical property that separates them from folding carton alternatives and immediately signals premium product investment to consumers handling the package.</p>
                            <ul>
                                <li><strong>High-Caliper Greyboard Core:</strong> 2.0mm to 3.0mm greyboard forms the structural core—providing the substantial weight and resistance that luxury consumers associate with genuine material investment. The board's density communicates quality before any visual element is registered.</li>
                                <li><strong>Specialty Cover Papers:</strong> Leatherette, linen-embossed, satin finish, and solid duplex papers are wrapped and adhered to the greyboard core—creating the visual and tactile surface that defines the box's luxury character and communicates brand aesthetic.</li>
                                <li><strong>Precision Corner Finishing:</strong> Each corner is manually wrapped with precision alignment—ensuring the crisp, architectural corner quality that distinguishes genuinely handcrafted luxury packaging from mass-production alternatives.</li>
                                <li><strong>Shoulder Box and Book-Fold Formats:</strong> Multiple structural formats accommodate different chocolate arrangements and brand presentation philosophies—from the deep-reveal shoulder box to the intimate book-fold that opens like a personal letter.</li>
                            </ul>
                            <h3>Gold Foil Stamping and Premium Finishing</h3>
                            <p>The finishing elements applied to a luxury chocolate box are the brand's most powerful tool for communicating positioning, exclusivity, and craftsmanship investment—working in tandem with the structural quality to create a complete luxury sensory experience.</p>
                            <ul>
                                <li><strong>Hot-Die Foil Stamping:</strong> Gold, silver, rose gold, bronze, and holographic foil options applied with precision die registration—creating the glint of metallic luxury that consumers associate with the world's most prestigious confectionery brands.</li>
                                <li><strong>Blind and Relief Embossing:</strong> Dimensional brand marks and pattern elements add sculptural depth—creating tactile complexity that photographs beautifully and communicates the layered material investment that distinguishes luxury from premium.</li>
                                <li><strong>Soft-Touch UV Matte Lamination:</strong> The velvet-smooth surface quality of soft-touch lamination communicates restraint, confidence, and sophistication—the exact qualities that luxury chocolate brands must embody to command premium retail positioning.</li>
                                <li><strong>Spot UV Contrast:</strong> Selective gloss UV lacquer applied to specific design elements against a matte background creates a dynamic visual contrast—making brand marks and decorative patterns visually emerge from the packaging surface with striking clarity.</li>
                            </ul>
                            <h3>Velvet Insert Trays and Ceremonial Interior Design</h3>
                            <p>The interior of a luxury chocolate box is the stage on which the chocolate's quality and the brand's artisanal investment are finally revealed. Interior design is as deliberate as exterior finishing in luxury confectionery packaging—engineered to maximize the ceremonial quality of the reveal.</p>
                            <ul>
                                <li><strong>Velvet-Flocked Cavity Trays:</strong> Thermoformed PET trays flocked with velvet fibres in brand colors cradle each chocolate in an individually tailored cavity—creating the jewellery-presentation quality that defines luxury confectionery gifting.</li>
                                <li><strong>Silk-Wrapped Interior Lids:</strong> The inner lid surface wrapped in silk or satin communicates material richness through a tactile surface that gift recipients associate with the world's finest presentation boxes.</li>
                                <li><strong>Magnetic Neodymium Closures:</strong> Concealed magnetic closures with ferrous strikers provide smooth, precise, and durable closure operation—the tactile signature of a luxury box that recipients notice, appreciate, and specifically remember.</li>
                            </ul>
                            <h3>Gifting Occasion Engineering</h3>
                            <p>Luxury chocolate purchases are predominantly gifting occasions—birthdays, anniversaries, corporate gifts, seasonal celebrations. Every element of the box must serve the gifting ritual from the moment of purchase through the recipient's unboxing experience.</p>
                            <ul>
                                <li><strong>Ribbon Pull and Bow Attachment Points:</strong> Structural ribbon channel integration allows the addition of satin bows and gift ribbons without adhesive damage—maintaining the pristine exterior presentation through the full gifting journey.</li>
                                <li><strong>Personalization Zones:</strong> Pre-designed interior panel areas accommodate handwritten gift notes, printed message cards, and personalized brand inserts—enabling the individual touch that transforms a luxury product into an irreplaceable personal gift.</li>
                            </ul>
                            <h3>Why CustomPackMakers for Luxury Chocolate Packaging</h3>
                            <p>Our luxury packaging team combines deep material expertise with precision handcraft finishing capabilities—delivering rigid box structures, foil stamping, and velvet insert assembly that meet the exacting standards of the world's most demanding confectionery brands. With MOQs from 250 units and full design consultation services, we partner with premium chocolate brands to create packaging that elevates their market positioning and drives sustainable luxury brand growth.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-8 bg-accent/20">
                <div className="container mx-auto px-[5vw]">
                    <div className="mb-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Related Chocolate Products</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl">Explore our complete range of premium chocolate packaging solutions for every occasion.</p>
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
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">Rigid board construction, gold foil craftsmanship, and velvet insert engineering for chocolate brands commanding luxury positioning.</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">
                        <div className="space-y-5">
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1"><div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors"><svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div></div>
                                <div><h3 className="text-lg font-bold text-slate-900 mb-2">Rigid Board Luxury Construction</h3><p className="text-sm text-slate-500 leading-relaxed">2.0–3.0mm greyboard cores wrapped in specialty leatherette, satin, and linen-embossed cover papers deliver the substantial weight and tactile richness that luxury chocolate consumers immediately recognize as commensurate with a premium confectionery product investment in every market context.</p></div>
                            </div>
                            <div className="w-full h-px bg-slate-100" />
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1"><div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors"><svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg></div></div>
                                <div><h3 className="text-lg font-bold text-slate-900 mb-2">Gold Foil Stamping Precision</h3><p className="text-sm text-slate-500 leading-relaxed">Hot-die gold, silver, rose gold, and holographic foil stamping applied with precision registration communicates brand exclusivity and artisanal investment—creating the glint of metallic luxury positioning that differentiates premium chocolate brands across retail, gifting, and corporate confectionery channels worldwide.</p></div>
                            </div>
                            <div className="w-full h-px bg-slate-100" />
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1"><div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors"><svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div></div>
                                <div><h3 className="text-lg font-bold text-slate-900 mb-2">Velvet Insert Ceremony</h3><p className="text-sm text-slate-500 leading-relaxed">Velvet-flocked cavity trays, silk-wrapped interior lids, and concealed neodymium magnetic closures create the ceremonial unboxing reveal that transforms chocolate gifting into a memorable event—driving social sharing, repeat gifting purchases, and the brand recommendation cycles that sustain luxury confectionery market growth.</p></div>
                            </div>
                        </div>
                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img src={luxuryChocolateBoxesImg6} alt="Premium luxury chocolate packaging" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-7">
                                    <p className="text-white font-bold text-lg leading-snug mb-1">Trusted by 500+ Brands</p>
                                    <p className="text-white/75 text-sm">Delivering premium packaging across North America</p>
                                </div>
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
                                <img src={luxuryChocolateBoxesImg7} alt="Differentiate Your Luxury Chocolate Brand" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                            </div>
                            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-60" />
                            <div className="absolute -z-10 -top-8 -right-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl opacity-60" />
                        </div>
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">Differentiate Your <span className="text-primary">Luxury Brand</span> From Others</h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">In the premium confectionery market, luxury positioning is communicated through material quality before a single word is read. Our luxury chocolate boxes pair greyboard rigidity with gold foil stamping, velvet-flocked cavity inserts, and magnetic closures to create the ceremonial unboxing experience that justifies premium pricing, drives corporate gifting adoption, and builds the brand prestige that transforms exceptional chocolate into a lasting cultural signifier of quality and discernment.</p>
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
                            <img src={FAQimage} alt="Luxury Chocolate Box FAQ" className="absolute inset-0 w-full h-full object-cover" />
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

export default LuxuryChocolateBoxes;
