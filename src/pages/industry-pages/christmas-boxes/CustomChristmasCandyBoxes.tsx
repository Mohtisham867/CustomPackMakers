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

import christmasCandyBoxesHero from "@/assets/christmas-products/christmas-candy-boxes/img-hero.png";
import christmasCandyBoxesImg1 from "@/assets/christmas-products/christmas-candy-boxes/img-1.png";
import christmasCandyBoxesImg2 from "@/assets/christmas-products/christmas-candy-boxes/img-2.png";
import christmasCandyBoxesImg3 from "@/assets/christmas-products/christmas-candy-boxes/img-3.png";
import christmasCandyBoxesImg4 from "@/assets/christmas-products/christmas-candy-boxes/img-4.png";
import christmasCandyBoxesImg5 from "@/assets/christmas-products/christmas-candy-boxes/img-5.png";
import christmasCandyBoxesImg6 from "@/assets/christmas-products/christmas-candy-boxes/img-whychoose.png";
import christmasCandyBoxesImg7 from "@/assets/christmas-products/christmas-candy-boxes/img-different.png";
import FAQimage from "@/assets/FAQ-image.png";
import christmasChocolateBoxes from "@/assets/christmas-products/christmas-chocolate-boxes.webp";
import christmasTags from "@/assets/christmas-products/christmas-tags.webp";
import christmasGableBoxes from "@/assets/christmas-products/christmas-gable-boxes.webp";
import christmasCupcakeBoxes from "@/assets/christmas-products/christmas-cupcake-boxes.webp";
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
    { name: "Christmas Cupcake Boxes", image: christmasCupcakeBoxes, link: "/industries/christmas-boxes/christmas-cupcake-boxes", desc: "Holiday cupcake packaging with secure inserts." },
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
    { id: "item-1", q: "What candy box styles are available for Christmas candy packaging?", a: "We offer folding carton tuck-end, magnetic closure, window display, pillow boxes, and rigid setup box styles for Christmas candy packaging. Window-front boxes with clear PET panels are the most popular format for candy retail display—allowing full product color visibility at shelf level while maintaining the festive exterior graphic that communicates holiday occasion. Rigid setup boxes with magnetic closures are preferred for premium candy gifting assortments where the box itself is part of the premium gifting presentation." },
    { id: "item-2", q: "What seasonal lead time is required for custom Christmas candy box orders?", a: "Order your custom Christmas candy boxes by the first week of October to guarantee standard 8–10 business day production and delivery well ahead of the November retail sales season launch. From October 15th through November, lead times extend to 12–14 business days due to peak confectionery packaging demand. Rush service is available for late-season orders—contact our Christmas candy packaging team urgently if you need delivery by early December." },
    { id: "item-3", q: "Can Christmas candy boxes include festive holographic foiling?", a: "Yes. Holographic foil stamping—which produces a rainbow-spectrum reflective metallic finish that shifts color under movement and different lighting conditions—is available on all our Christmas candy box formats. Holographic foiling is particularly effective on candy packaging because it creates a visually dynamic, attention-capturing effect at retail point-of-sale that registers premium quality and stimulates the sensory excitement that holiday candy gifting occasions emotionally demand from packaging presentation." },
    { id: "item-4", q: "Are food-safe interior coatings used in Christmas candy boxes?", a: "Yes. FDA-compliant food-contact-safe coatings are applied to all interior surfaces of candy-contact Christmas boxes—preventing flavor migration, aroma transfer through the cardboard substrate, and grease absorption that would structurally compromise packaging integrity. Food barrier coating selection is matched to specific candy type requirements, with different coating weights applied for wrapped hard candy, chocolate-coated pieces, and soft sugar confections with different moisture and fat content characteristics." },
    { id: "item-5", q: "What minimum order quantities apply to custom Christmas candy boxes?", a: "Minimum order quantities for standard custom-printed Christmas candy boxes start at 500 units—enabling small candy producers, boutique confectionery brands, and seasonal gifting businesses to access custom festive packaging at commercially viable pricing. Volume pricing tiers provide significant per-unit cost reduction at 1,000, 2,500, 5,000, and 10,000+ unit thresholds. Contact our sales team for specific Christmas candy box pricing based on your configuration, finish, and seasonal volume requirements." },
];

const CustomChristmasCandyBoxes = () => {
    const [selectedImage, setSelectedImage] = useState(0);
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);
    const productImages = [
        { src: christmasCandyBoxesImg1, alt: "Custom Christmas Candy Boxes - Main View" },
        { src: christmasCandyBoxesImg2, alt: "Custom Christmas Candy Boxes - Window Front" },
        { src: christmasCandyBoxesImg3, alt: "Custom Christmas Candy Boxes - Holographic Foil" },
        { src: christmasCandyBoxesImg4, alt: "Custom Christmas Candy Boxes - Magnetic Closure" },
        { src: christmasCandyBoxesImg5, alt: "Custom Christmas Candy Boxes - Pillow Box" },
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
                <title>Custom Christmas Candy Boxes | Festive Holiday Candy Packaging | CustomPackMakers</title>
                <meta name="description" content="Custom Christmas candy boxes with vibrant holiday graphics, holographic foil stamping, food-safe coatings, and clear window display panels. Perfect for seasonal confectionery gifting and retail." />
                <meta name="keywords" content="christmas candy boxes, holiday candy packaging, festive candy boxes, custom christmas candy packaging, christmas candy box wholesale" />
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
                            <BreadcrumbItem><BreadcrumbPage>Custom Christmas Candy Boxes</BreadcrumbPage></BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </div>

            <section className="py-8 bg-background">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-7 space-y-6">
                            <div className="w-20 h-1.5 bg-primary rounded-full" />
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight"><span className="text-primary">Custom Christmas</span> Candy Boxes</h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">Vibrant custom Christmas candy boxes with holographic and metallic foil stamping, food-safe interior coatings, clear display windows, and full-color seasonal graphics—the premium festive packaging that positions your holiday candy at the gifting-tier quality that seasonal confectionery sales demand.</p>
                            <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300" onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}>Get a Quote</Button>
                        </div>
                        <div className="lg:col-span-5 relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-muted group">
                            <img src={christmasCandyBoxesHero} alt="Custom Christmas Candy Boxes" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 max-w-3xl">Christmas Candy Packaging That Turns Every Piece Into a Festive Gift</h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>Our <strong className="text-foreground">custom Christmas candy boxes</strong> are engineered to merchandise holiday confections at the premium gift-worthy quality level that seasonal candy sales require. Available in folding carton tuck-end, magnetic closure rigid, pillow box, and window-display formats, each style provides the structural candy containment, food-safe interior barrier, and festive exterior visual quality that holiday confectionery brands need to compete effectively across retail shelf, e-commerce, and corporate gifting program channels throughout the Christmas season.</p>
                        <p>Holographic and metallic gold/silver foil stamping on candy box faces, full-color CMYK holiday graphic printing in vibrant red, green, white, and gold palettes, and clear PET window panels that display candy color and variety at shelf level create a complete festive packaging system that sells the seasonal gifting occasion as compellingly as the candy inside. From 2-oz individual candy treat boxes through 2-lb assortment gift box formats, our <strong className="text-foreground">Christmas candy packaging</strong> scales with your seasonal program from boutique confectionery to national retail distribution volume.</p>
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
                                            <div className="space-y-1.5"><Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label><Input id="width" type="number" placeholder="4" className="h-9 bg-white" /></div>
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">The Complete Guide to Custom Christmas Candy Box Packaging</h2>
                    <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="[&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-6 [&>h3]:mb-3 [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-4 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-4 [&>ul]:space-y-2 [&>ul>li]:text-[15px] [&>ul>li]:text-slate-600">
                            <p>Christmas candy packaging occupies a commercially critical position at the intersection of seasonal indulgence and gift-giving culture—the festive confectionery category that spans everyday holiday treat consumption through premium gift-tier candy assortments in beautifully presented collectible boxes. For candy brands navigating this wide market spectrum, packaging is the primary tool for communicating where on the quality and occasion spectrum any given product sits—and the visual and tactile quality of the Christmas candy box determines whether consumers perceive the contents as a personal indulgence, a thoughtful casual gift, or a premium gifting occasion product worthy of elevated price positioning.</p>
                            <p>The strategic importance of Christmas candy box design has intensified significantly with the growth of social media culture around holiday season gifting aesthetics. Candy assortment unboxing content, festive confectionery gift guides in food and lifestyle publications, and the photographable presentation of holiday candy arrangements have collectively elevated consumer aesthetic expectations for Christmas candy packaging well beyond the functional containment standards that defined the category a decade ago. Premium confectionery brands now invest in candy packaging as a marketing channel with measurable return on brand awareness, social amplification, and premium price positioning—making Christmas candy box design a strategic commercial investment rather than a fulfillment cost center.</p>
                            <h3>Christmas Candy Box Structural Formats</h3>
                            <ul>
                                <li><strong>Window Display Folding Cartons:</strong> Tuck-end folding carton format with clear PET front window panel—the standard retail Christmas candy box configuration that enables full candy visibility at shelf display level, communicating product color, variety, and quality to the browsing consumer without requiring packaging opening or product sampling.</li>
                                <li><strong>Magnetic Closure Rigid Boxes:</strong> Heavy chipboard rigid construction with magnetic lid closure—the premium gift-tier Christmas candy box format that positions assortments at the luxury gifting level with structural permanence and the satisfying tactile lid movement that communicates premium quality before contents are revealed.</li>
                                <li><strong>Pillow Boxes:</strong> Curved shoulder pillow box die-cut format with saddle-end closures—a space-efficient and visually distinctive festive candy packaging format ideal for individual piece and small assortment candy programs where the structural form itself communicates artisan craftsmanship and seasonal charm.</li>
                                <li><strong>Advent Calendar Candy Box:</strong> Multi-compartment numbered grid box configuration for countdown candy assortment programs—enabling confectionery brands to participate in the growing advent calendar gifting market with a custom daily candy portion delivery structure beneath festive numbered door panels.</li>
                            </ul>
                            <h3>Premium Festive Finishing for Christmas Candy</h3>
                            <ul>
                                <li><strong>Holographic Foil Stamping:</strong> Rainbow-spectrum holographic foil creates a visually dynamic, attention-commanding finish on Christmas candy boxes that captures holiday retail display lighting and stands apart from standard metallic gold and silver foil options—registered as premium by consumers and photographically impactful for social media gifting content.</li>
                                <li><strong>Gold and Silver Metallic Foil:</strong> Traditional hot foil stamping in 24-carat gold, bright silver, and rose gold metallic finishes communicates the classic premium holiday quality signal that luxury candy gift assortments require from their exterior packaging presentation.</li>
                                <li><strong>Full CMYK Seasonal Graphics:</strong> Vibrant red, green, white, and gold color palette seasonal graphic printing in offset or digital production—delivering the festive visual identity that communicates Christmas occasion instantaneously at retail shelf distance and in online product photography.</li>
                            </ul>
                            <h3>Food Safety and Material Standards</h3>
                            <p>FDA-compliant food-contact-safe interior coatings, soy-based exterior inks, and FSC-certified substrate stocks form the material foundation of our Christmas candy box production—meeting both food safety regulatory requirements and the sustainable sourcing standards that premium confectionery brands increasingly require from their seasonal packaging supply chains. All candy-contact surfaces undergo coating weight verification to guarantee barrier performance across the candy type and storage duration parameters of each specific product program.</p>
                            <h3>Why CustomPackMakers for Christmas Candy Boxes</h3>
                            <p>Our Christmas candy packaging team combines festive design expertise with food-safe material engineering to produce candy boxes that meet the quality, safety, and aesthetic standards of premium seasonal confectionery programs at competitive wholesale pricing with reliable holiday delivery schedules. Request your complimentary Christmas candy box sample and quote today.</p>
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
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Holographic foiling, food-safe coatings, and clear display windows for premium Christmas candy packaging.</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">
                        <div className="space-y-5">
                            {[
                                { title: "Holographic Foil Stamping", body: "Rainbow-spectrum holographic foil creates a visually dynamic finish on Christmas candy boxes that captures holiday retail lighting and stands apart from standard metallic alternatives—delivering the attention-commanding premium signal that seasonal candy brands require to differentiate their holiday assortments at competitive retail point-of-sale display environments." },
                                { title: "Clear Display Windows", body: "PET and compostable PLA window panels display Christmas candy color, variety, and arrangement as a primary retail purchase driver without requiring box opening—creating the visual merchandising function that seasonal confectionery brands depend on for self-service retail candy sales performance during the high-traffic holiday shopping season." },
                                { title: "Food-Safe Interior Coatings", body: "FDA-compliant food-contact-safe coatings on all candy-contact interior surfaces prevent flavor migration, aroma transfer, and moisture absorption—maintaining candy quality integrity through the retail distribution and consumer storage conditions of the extended Christmas confectionery season from production through holiday gifting consumption." },
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
                                <img src={christmasCandyBoxesImg6} alt="Christmas candy boxes" className="w-full h-full object-cover" />
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
                                <img src={christmasCandyBoxesImg7} alt="Differentiate Your Christmas Candy Boxes" className="w-full h-full object-cover" />
                            </div>
                        </div>
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">Differentiate Your <span className="text-primary">Christmas Candy</span> From Others</h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">In the crowded holiday confectionery market, premium candy packaging is the fastest route to gift-tier positioning and the shelf standout that drives impulse seasonal purchase decisions. Our custom Christmas candy boxes combine holographic foil stamping, clear display windows, food-safe interior coatings, and vibrant seasonal CMYK graphics—creating the premium festive candy packaging that positions your holiday sweets above commodity seasonal alternatives and commands the price premium that quality packaging justifies in the Christmas gifting market.</p>
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
                            <img src={FAQimage} alt="Christmas Candy Boxes FAQ" className="absolute inset-0 w-full h-full object-cover" />
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

export default CustomChristmasCandyBoxes;
