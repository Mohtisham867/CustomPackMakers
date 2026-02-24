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

import productHero from "@/assets/christmas-products/christmas-cupcake-boxes.webp";
import FAQimage from "@/assets/FAQ-image.png";
import christmasChocolateBoxes from "@/assets/christmas-products/christmas-chocolate-boxes.webp";
import christmasTags from "@/assets/christmas-products/christmas-tags.webp";
import christmasGableBoxes from "@/assets/christmas-products/christmas-gable-boxes.webp";
import christmasCandyBoxes from "@/assets/christmas-products/christmas-candy-boxes.webp";
import christmasGiftBoxes from "@/assets/christmas-products/christmas-gift-boxes.webp";
import christmasEveBoxes from "@/assets/christmas-products/christmas-eve-boxes.webp";
import christmasTreatBoxes from "@/assets/christmas-products/christmas-treat-boxes.webp";
import christmasPaperBags from "@/assets/christmas-products/christmas-paper-bags.webp";
import christmasGiftBags from "@/assets/christmas-products/christmas-gift-bags.webp";
import christmasFavorBoxes from "@/assets/christmas-products/christmas-favor-boxes.webp";
import christmasStickers from "@/assets/christmas-products/christmas-stickers.webp";
import adventCalendarBoxes from "@/assets/christmas-products/advent-calendar-boxes.webp";

const carouselProducts = [
    { name: "Christmas Chocolate Boxes", image: christmasChocolateBoxes, link: "/industries/christmas-boxes/christmas-chocolate-boxes", desc: "Festive chocolate packaging with foil stamping and food-safe inserts." },
    { name: "Christmas Tags", image: christmasTags, link: "/industries/christmas-boxes/christmas-tags", desc: "Custom die-cut holiday gift tags." },
    { name: "Christmas Gable Boxes", image: christmasGableBoxes, link: "/industries/christmas-boxes/christmas-gable-boxes", desc: "Handle carry boxes for holiday treats." },
    { name: "Custom Christmas Candy Boxes", image: christmasCandyBoxes, link: "/industries/christmas-boxes/custom-christmas-candy-boxes", desc: "Seasonal candy packaging in vibrant holiday colors." },
    { name: "Christmas Gift Boxes", image: christmasGiftBoxes, link: "/industries/christmas-boxes/christmas-gift-boxes", desc: "Premium gift boxes with magnetic closures." },
    { name: "Christmas Eve Boxes", image: christmasEveBoxes, link: "/industries/christmas-boxes/christmas-eve-boxes", desc: "Enchanting tradition boxes for Christmas Eve." },
    { name: "Christmas Treat Boxes", image: christmasTreatBoxes, link: "/industries/christmas-boxes/christmas-treat-boxes", desc: "Charming treat packaging for holiday snacks." },
    { name: "Christmas Paper Bags", image: christmasPaperBags, link: "/industries/christmas-boxes/christmas-paper-bags", desc: "Reinforced holiday shopping bags." },
    { name: "Christmas Gift Bags", image: christmasGiftBags, link: "/industries/christmas-boxes/christmas-gift-bags", desc: "Premium gift bags with festive designs." },
    { name: "Christmas Favor Boxes", image: christmasFavorBoxes, link: "/industries/christmas-boxes/christmas-favor-boxes", desc: "Party favor packaging with seasonal motifs." },
    { name: "Christmas Stickers", image: christmasStickers, link: "/industries/christmas-boxes/christmas-stickers", desc: "Festive labels and stickers for holiday branding." },
    { name: "Custom Advent Calendar Boxes", image: adventCalendarBoxes, link: "/industries/christmas-boxes/custom-advent-calendar-boxes", desc: "24-compartment countdown packaging." },
];

const faqs = [
    { id: "item-1", q: "What cupcake cavity configurations are available for Christmas cupcake boxes?", a: "We produce Christmas cupcake boxes in 1, 2, 4, 6, 12, and 24 cupcake cavity configurations—with both standard and mini cupcake cavity dimensions available across each count format. Cavity inserts are constructed from food-grade SBS or PET thermoform materials with individually recessed positions that cradle each cupcake base and prevent movement, frosting transfer, and decorative topping damage during transit and display in retail or gifting environments." },
    { id: "item-2", q: "What lead times should I plan for Christmas cupcake box orders during the holiday season?", a: "Holiday cupcake box orders should be placed by early October to allow standard 8–10 business day production. November orders require 12–15 business day allocation due to peak bakery packaging demand throughout the festive confectionery season. We strongly advise early ordering for custom die-cut Christmas cupcake box programs—particularly those with window panels, foil stamping, or bespoke cavity configurations that require additional structural tooling preparation time before production commences." },
    { id: "item-3", q: "Can Christmas cupcake boxes include a clear window to display decorated cupcakes?", a: "Yes. PET and compostable PLA transparent window panels are available on lid panels and side faces of Christmas cupcake boxes—allowing the festive cupcake decorations, seasonal frosting colors, and decorative sprinkle arrangements to be visible through the packaging without opening. Window panels are particularly valuable for retail display cupcake programs where the visual quality of the product interior is a primary purchase decision driver at point of sale." },
    { id: "item-4", q: "Are food-safe coatings applied to Christmas cupcake box interiors?", a: "Yes. All cupcake-contact interior surfaces of our Christmas cupcake boxes are coated with FDA-compliant food-safe coatings that prevent cake moisture migration, grease absorption, and aroma transfer through the cardboard substrate. Food-safe barrier coatings are particularly important for buttercream and cream cheese frosted cupcakes with high fat content—maintaining box structural integrity during the refrigeration and ambient temperature transitions that holiday bakery distribution involves." },
    { id: "item-5", q: "What festive seasonal graphics can be printed on Christmas cupcake boxes?", a: "Our full-color offset and digital printing system produces any Christmas seasonal graphic design in vibrant CMYK plus Pantone color accuracy—from Santa and reindeer illustrated scenes to snowflake geometric patterns, Christmas plaid textures, holly and berry botanical motifs, and elegant winter minimal abstracts. Custom brand logo integration, seasonal typography, and holiday color palette specifications are all accommodated within our standard Christmas cupcake box print production workflow." },
];

const ChristmasCupcakeBoxes = () => {
    const [selectedImage, setSelectedImage] = useState(0);
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);
    const productImages = [
        { src: productHero, alt: "Christmas Cupcake Boxes - Main View" },
        { src: productHero, alt: "Christmas Cupcake Boxes - Window Panel" },
        { src: productHero, alt: "Christmas Cupcake Boxes - 12-Cavity" },
        { src: productHero, alt: "Christmas Cupcake Boxes - Foil Lid" },
        { src: productHero, alt: "Christmas Cupcake Boxes - Eco Kraft" },
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
                <title>Custom Christmas Cupcake Boxes | Festive Holiday Bakery Packaging | CustomPackMakers</title>
                <meta name="description" content="Custom Christmas cupcake boxes with food-grade cavity inserts, festive window panels, metallic foil lids, and seasonal holiday graphics. Perfect for holiday bakeries and festive confectionery brands." />
                <meta name="keywords" content="christmas cupcake boxes, holiday cupcake packaging, festive bakery boxes, custom christmas cupcake packaging, holiday cupcake box wholesale" />
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
                            <BreadcrumbItem><BreadcrumbLink asChild><Link to="/industries/christmas-boxes">Christmas Boxes</Link></BreadcrumbLink></BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem><BreadcrumbPage>Christmas Cupcake Boxes</BreadcrumbPage></BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </div>

            <section className="py-8 bg-background">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-7 space-y-6">
                            <div className="w-20 h-1.5 bg-primary rounded-full" />
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight"><span className="text-primary">Christmas</span> Cupcake Boxes</h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">Holiday cupcake packaging with food-safe cavity inserts in 1–24 count configurations, clear display windows, festive metallic foil lid printing, and seasonal full-color graphics—protecting and presenting your holiday bakes with the premium quality that festive bakery brands demand.</p>
                            <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300" onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}>Get a Quote</Button>
                        </div>
                        <div className="lg:col-span-5 relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-muted group">
                            <img src={productHero} alt="Christmas Cupcake Boxes" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 max-w-3xl">Festive Cupcake Boxes Built for Holiday Bakeries That Demand Perfection</h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>Our <strong className="text-foreground">custom Christmas cupcake boxes</strong> are purpose-engineered for holiday bakery programs that refuse to compromise on presentation or protection. Food-grade SBS cavity insert systems in 1, 2, 4, 6, 12, and 24 cupcake configurations hold each cupcake individually—preventing frosting contact, decorative topping dislodgement, and cupcake collision damage through the transit and display conditions of seasonal bakery distribution. Clear PET window lid panels display the festive decoration arrangement as a primary purchase driver at retail point of sale.</p>
                        <p>Full-color seasonal graphic printing—Santa scenes, snowflake geometrics, Christmas plaid textures, and premium minimal winter abstracts—transforms the packaging exterior into a brand impression vehicle that communicates festive quality before the lid is lifted. Gold and silver foil lid stamping, soft-touch matte lamination, and embossed typography elevate the cupcake box from functional bakery container to premium holiday gifting package—positioning your seasonal baked goods at the premium confectionery price tier that artisan and branded holiday bakery programs require for commercial success.</p>
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
                                            <div className="space-y-1.5"><Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label><Input id="width" type="number" placeholder="10" className="h-9 bg-white" /></div>
                                            <div className="space-y-1.5"><Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">D (in)</Label><Input id="depth" type="number" placeholder="4" className="h-9 bg-white" /></div>
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">The Complete Guide to Christmas Cupcake Box Packaging</h2>
                    <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="[&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-6 [&>h3]:mb-3 [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-4 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-4 [&>ul]:space-y-2 [&>ul>li]:text-[15px] [&>ul>li]:text-slate-600">
                            <p>Christmas cupcake gifting has become one of the most rapidly growing segments of the festive confectionery market over the past decade—driven by the cultural intersection of artisan baking culture, social media food photography, and the premium gifting occasion that Christmas represents in consumer spending calendars. For holiday bakeries, confectionery subscription services, and seasonal food gifting brands, the cupcake box has become as commercially significant as the cupcakes it contains—because the packaging is the first impression that determines whether the gifting purchase feels artisanal and premium or commodity and undifferentiated in the competitive Christmas bakery market.</p>
                            <p>The technical requirements of cupcake packaging are among the most demanding in the food packaging category. Cupcakes must be transported in a static, vibration-resistant environment that prevents frosting contact with lid surfaces, eliminates lateral movement that dislodges decorative toppings, and maintains the visual presentation of intricate seasonal decoration work through the transit conditions of delivery and retail display. Christmas cupcake boxes must accomplish this protection function while simultaneously communicating festive seasonal quality through exterior printed design—creating packaging that functions as both an engineering solution and a brand communication vehicle.</p>
                            <h3>Cavity Insert System Engineering for Christmas Cupcakes</h3>
                            <p>The cavity insert is the functional heart of the Christmas cupcake box—the internal structural component that determines whether festively decorated holiday cupcakes arrive in pristine presentation condition or with compromised frosting and displaced decorative elements.</p>
                            <ul>
                                <li><strong>Thermoformed PET Cavity Trays:</strong> Individual recessed cupcake positions in food-grade PET thermoform material provide precise dimensional support for cupcake bases—preventing lateral movement without applying pressure to the cupcake body or frosting surface above the rim of each individual cavity position.</li>
                                <li><strong>Food-Grade SBS Cardboard Grid Inserts:</strong> Scored and interlocked food-safe coated cardboard grid systems create individual cupcake bays within the box interior—providing structural separation at lower material cost than thermoform inserts while maintaining adequate movement prevention for standard-height frosted cupcake configurations.</li>
                                <li><strong>Mini Cupcake Cavity Configurations:</strong> Precision-dimensioned mini cupcake cavity inserts (typically 1.25–1.75 inch diameter) in 12, 24, and 36 count configurations enable the efficient packaging of mini cupcake assortments that are increasingly popular as corporate Christmas gifting formats and party favor distributions.</li>
                            </ul>
                            <h3>Seasonal Display Windows for Christmas Cupcakes</h3>
                            <ul>
                                <li><strong>Full-Lid Clear Window Panels:</strong> Transparent PET or compostable PLA panels applied across the full area of the cupcake box lid create a complete display case effect—allowing all cupcake decorations, frosting colors, and seasonal topping arrangements to be fully visible as a retail point-of-sale purchase driver without requiring box opening.</li>
                                <li><strong>Partial Window Apertures:</strong> Die-cut window openings in specific geometric formats—circular, rectangular, snowflake-shaped—provide selective product visibility while preserving printable lid areas for festive seasonal graphic and brand messaging content alongside the product display function.</li>
                                <li><strong>Compostable PLA Window Option:</strong> Plant-based PLA window film provides the display transparency function of conventional PET with compostable end-of-life disposal—enabling Christmas cupcake brands to maintain full product visibility without the multi-layer plastic waste that conventional PET window panels generate.</li>
                            </ul>
                            <h3>Premium Festive Finishes for Christmas Cupcake Boxes</h3>
                            <ul>
                                <li><strong>Metallic Foil Lid Stamping:</strong> Gold and silver foil applied to brand logos, snowflake patterns, and decorative border elements on cupcake box lids communicates premium quality at the physical contact surface that gift recipients first interact with when receiving Christmas cupcake packaging.</li>
                                <li><strong>Soft-Touch Matte Lamination:</strong> Velvet-texture matte laminate exterior coating creates the sensory luxury impression that premium holiday bakery brands require—particularly effective on dark festive background designs where the tactile quality of the surface communicates premium craftsmanship before any graphic element is processed.</li>
                                <li><strong>Full-Color Seasonal Graphics:</strong> Offset and digital CMYK printing of Christmas scenes, snowflake patterns, plaid textures, and botanical holly and berry motifs transforms cupcake box exteriors into festive brand communication surfaces that function as point-of-sale marketing materials across retail bakery display environments.</li>
                            </ul>
                            <h3>Why CustomPackMakers for Christmas Cupcake Boxes</h3>
                            <p>Our Christmas cupcake packaging team supports holiday bakery programs from initial cavity configuration specification through festive graphic print production and seasonal delivery—ensuring every cupcake box in your holiday range arrives in pristine condition, on schedule, and at the quality standard that premium festive bakery brands require. Contact our holiday packaging team today for a consultative quote and complimentary sample program.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-8 bg-accent/20">
                <div className="container mx-auto px-[5vw]">
                    <div className="mb-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Related Christmas Products</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl">Explore our complete festive packaging range for every holiday occasion.</p>
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
                <div className="container mx-auto px-[30px] relative z-10">
                    <div className="text-center mb-14">
                        <span className="inline-block text-xs font-semibold tracking-widest text-primary uppercase mb-3 bg-primary/10 px-4 py-1.5 rounded-full">Our Promise</span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">Why Brands Choose <span className="text-primary">CustomPackMakers</span></h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Cavity insert precision, clear display windows, and festive foil finishes for premium Christmas cupcake packaging.</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">
                        <div className="space-y-5">
                            {[
                                { title: "Precision Cavity Insert Systems", body: "Food-grade thermoformed PET and SBS cardboard cavity inserts in 1–24 cupcake configurations prevent frosting contact, lateral movement, and decorative topping displacement through the transit and display conditions of seasonal bakery distribution—ensuring every Christmas cupcake arrives in the pristine decorated presentation condition that holiday gifting quality expectations demand." },
                                { title: "Clear Display Window Options", body: "Full-lid and partial aperture clear PET and compostable PLA window panels display festive cupcake decorations as a retail purchase driver without box opening—creating the visual merchandising function that seasonal bakery retail display programs require while maintaining the premium packaging exterior that positions holiday cupcakes at the gifting quality tier." },
                                { title: "Festive Metallic Foil Lids", body: "Gold and silver hot foil stamping on cupcake box lids communicates premium holiday quality at the first physical contact point—applied to brand marks, snowflake patterns, and seasonal border elements with the precision finishing quality that luxury bakery brands and corporate Christmas gifting programs require from their seasonal cupcake packaging formats." },
                            ].map((item, i) => (
                                <div key={i}>
                                    <div className="flex gap-6 items-start group">
                                        <div className="flex-shrink-0 mt-1"><div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center"><svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div></div>
                                        <div><h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3><p className="text-sm text-slate-500 leading-relaxed">{item.body}</p></div>
                                    </div>
                                    {i < 2 && <div className="w-full h-px bg-slate-100 mt-5" />}
                                </div>
                            ))}
                        </div>
                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img src={productHero} alt="Christmas cupcake boxes" className="w-full h-full object-cover" />
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
                                <img src={productHero} alt="Differentiate Your Christmas Cupcake Boxes" className="w-full h-full object-cover" />
                            </div>
                        </div>
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">Differentiate Your <span className="text-primary">Christmas Cupcake Boxes</span> From Others</h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">In the premium holiday bakery market, cupcake packaging that protects and presents is the differentiator between brands that command premium seasonal price points and those that compete on commodity bakery value. Our Christmas cupcake boxes combine food-safe precision cavity inserts, clear display windows, metallic foil festive lids, and vibrant seasonal graphic printing—delivering the engineering integrity and premium aesthetic that holiday bakery brands, corporate Christmas gifting programs, and confectionery subscription services depend on for festive season commercial success.</p>
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
                            <img src={FAQimage} alt="Christmas Cupcake Boxes FAQ" className="absolute inset-0 w-full h-full object-cover" />
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

export default ChristmasCupcakeBoxes;
