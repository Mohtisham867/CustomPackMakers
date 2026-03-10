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

import christmasGiftBagsHero from "@/assets/christmas-products/christmas-gift-bags/img-hero.png";
import christmasGiftBagsImg1 from "@/assets/christmas-products/christmas-gift-bags/img-1.png";
import christmasGiftBagsImg2 from "@/assets/christmas-products/christmas-gift-bags/img-2.png";
import christmasGiftBagsImg3 from "@/assets/christmas-products/christmas-gift-bags/img-3.png";
import christmasGiftBagsImg4 from "@/assets/christmas-products/christmas-gift-bags/img-4.png";
import christmasGiftBagsImg5 from "@/assets/christmas-products/christmas-gift-bags/img-5.png";
import christmasGiftBagsImg6 from "@/assets/christmas-products/christmas-gift-bags/img-whychoose.png";
import christmasGiftBagsImg7 from "@/assets/christmas-products/christmas-gift-bags/img-different.png";
import FAQimage from "@/assets/FAQ-image.png";
import christmasChocolateBoxes from "@/assets/christmas-products/christmas-chocolate-boxes.webp";
import christmasTags from "@/assets/christmas-products/christmas-tags.webp";
import christmasGableBoxes from "@/assets/christmas-products/christmas-gable-boxes.webp";
import christmasCupcakeBoxes from "@/assets/christmas-products/christmas-cupcake-boxes.webp";
import christmasCandyBoxes from "@/assets/christmas-products/christmas-candy-boxes.webp";
import christmasGiftBoxes from "@/assets/christmas-products/christmas-gift-boxes.webp";
import christmasEveBoxes from "@/assets/christmas-products/christmas-eve-boxes.webp";
import christmasTreatBoxes from "@/assets/christmas-products/christmas-treat-boxes.webp";
import christmasPaperBags from "@/assets/christmas-products/christmas-paper-bags.webp";
import christmasFavorBoxes from "@/assets/christmas-products/christmas-favor-boxes.webp";
import christmasStickers from "@/assets/christmas-products/christmas-stickers.webp";
import adventCalendarBoxes from "@/assets/christmas-products/advent-calendar-boxes.webp";

const carouselProducts = [
    { name: "Christmas Chocolate Boxes", image: christmasChocolateBoxes, link: "/industries/christmas-boxes/christmas-chocolate-boxes", desc: "Festive chocolate packaging with foil and food-safe inserts." },
    { name: "Christmas Tags", image: christmasTags, link: "/industries/christmas-boxes/christmas-tags", desc: "Custom die-cut holiday gift tags." },
    { name: "Christmas Gable Boxes", image: christmasGableBoxes, link: "/industries/christmas-boxes/christmas-gable-boxes", desc: "Handle carry boxes for holiday treats." },
    { name: "Christmas Cupcake Boxes", image: christmasCupcakeBoxes, link: "/industries/christmas-boxes/christmas-cupcake-boxes", desc: "Holiday cupcake packaging with secure inserts." },
    { name: "Custom Christmas Candy Boxes", image: christmasCandyBoxes, link: "/industries/christmas-boxes/custom-christmas-candy-boxes", desc: "Seasonal candy packaging in vibrant holiday colors." },
    { name: "Christmas Gift Boxes", image: christmasGiftBoxes, link: "/industries/christmas-boxes/christmas-gift-boxes", desc: "Premium gift boxes with magnetic closures." },
    { name: "Christmas Eve Boxes", image: christmasEveBoxes, link: "/industries/christmas-boxes/christmas-eve-boxes", desc: "Enchanting tradition boxes for Christmas Eve." },
    { name: "Christmas Treat Boxes", image: christmasTreatBoxes, link: "/industries/christmas-boxes/christmas-treat-boxes", desc: "Charming treat packaging for holiday snacks." },
    { name: "Christmas Paper Bags", image: christmasPaperBags, link: "/industries/christmas-boxes/christmas-paper-bags", desc: "Reinforced holiday shopping bags." },
    { name: "Christmas Favor Boxes", image: christmasFavorBoxes, link: "/industries/christmas-boxes/christmas-favor-boxes", desc: "Party favor packaging with seasonal motifs." },
    { name: "Christmas Stickers", image: christmasStickers, link: "/industries/christmas-boxes/christmas-stickers", desc: "Festive labels and stickers for holiday branding." },
    { name: "Custom Advent Calendar Boxes", image: adventCalendarBoxes, link: "/industries/christmas-boxes/custom-advent-calendar-boxes", desc: "24-compartment countdown packaging." },
];

const faqs = [
    { id: "item-1", q: "What differentiates Christmas gift bags from standard Christmas paper bags?", a: "Christmas gift bags are specifically designed for the gifting context—featuring premium handle configurations (satin ribbon, grosgrain, twisted silk cord), higher gloss or soft-touch matte laminate finish quality, metallic foil brand and decorative elements, and interior tissue presentation compatibility as standard design features. Standard retail paper bags prioritize functional carry quantity economics over individual gift presentation quality. Gift bags are sized to accommodate specific gift item categories rather than standardized retail formats, with more curated size ranges for jewelry, clothing, accessory, and multi-item gift assortment applications." },
    { id: "item-2", q: "What premium handle configurations are available for Christmas gift bags?", a: "Satin ribbon flat loop handles in Christmas red, forest green, gold, white, and ivory provide the traditional luxury gift bag handle option with the festive color coordination that gift-wrapped presentation aesthetics require. Grosgrain ribbon handles in seasonal colors offer a more structured texture alternative. Twisted silk cord handles in gold, silver, and seasonal colors provide the most premium handle option—communicating luxury tier positioning through the premium tactile quality of the twisted silk material that distinguishes high-end holiday gift bag programs from standard seasonal alternatives." },
    { id: "item-3", q: "Can Christmas gift bags be produced with custom illustrated seasonal artwork?", a: "Yes. Custom illustrated Christmas gift bag artwork—original holiday character illustrations, bespoke seasonal pattern designs, brand-specific holiday graphic programs, and festive lettering typography—can be produced through our in-house design service or applied directly from brand-supplied artwork files. Custom illustration programming creates the exclusively branded seasonal gift bag identity that sets premium holiday gifting programs apart from generic seasonal bag alternatives—building the distinctive visual identity that consumers associate with the brand's seasonal gift presentation quality across multiple Christmas gifting seasons." },
    { id: "item-4", q: "What sizes are standard for Christmas gift bags?", a: "Christmas gift bag standard sizes include small (7×3×9 inch for jewelry, accessories, and small gifts), medium (10×4×12 inch for books, clothing accessories, and boxed gifts), large (13×6×15 inch for clothing, multi-item gift sets, and wine format gifts), and extra-large (16×7×19 inch for large apparel, hamper-style mixed gifts, and oversized gift configurations). Custom dimensions are available for specific gift product categories with non-standard size requirements—particularly relevant for hospitality gifting programs with bespoke product dimension specifications." },
    { id: "item-5", q: "Are eco-friendly options available for premium Christmas gift bags?", a: "Yes. Premium Christmas gift bags are available in FSC-certified recycled kraft paper and bleached white paper stocks with soy-based ink printing, water-based laminate coatings, and natural fiber ribbon or paper-cord handles—providing a fully sustainable material bill of materials for eco-positioned luxury Christmas gifting brand programs that require premium presentation quality combined with verified responsible sourcing credentials." },
];

const ChristmasGiftBags = () => {
    const [selectedImage, setSelectedImage] = useState(0);
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);
    const productImages = [
        { src: christmasGiftBagsImg1, alt: "Christmas Gift Bags - Main View" },
        { src: christmasGiftBagsImg2, alt: "Christmas Gift Bags - Satin Handle" },
        { src: christmasGiftBagsImg3, alt: "Christmas Gift Bags - Foil Print" },
        { src: christmasGiftBagsImg4, alt: "Christmas Gift Bags - Grosgrain Handle" },
        { src: christmasGiftBagsImg5, alt: "Christmas Gift Bags - Large Size" },
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
                <title>Custom Christmas Gift Bags | Premium Holiday Gift Bag Packaging | CustomPackMakers</title>
                <meta name="description" content="Custom Christmas gift bags with satin ribbon handles, metallic foil printing, soft-touch lamination, and custom illustrated seasonal artwork. Premium gifting bag packaging for luxury holiday brands." />
                <meta name="keywords" content="christmas gift bags, holiday gift bags, premium christmas gift bags, luxury christmas gift bags, custom christmas gift bags, christmas gift bag wholesale" />
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
                            <BreadcrumbItem><BreadcrumbPage>Christmas Gift Bags</BreadcrumbPage></BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </div>

            <section className="py-8 bg-background">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-7 space-y-6">
                            <div className="w-20 h-1.5 bg-primary rounded-full" />
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight"><span className="text-primary">Christmas</span> Gift Bags</h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">Premium Christmas gift bags with satin ribbon and silk cord handles, metallic foil festive printing, soft-touch matte lamination, and custom illustrated seasonal artwork—designed to present holiday gifts with the luxury quality impression that premium gifting occasions and brand programs demand.</p>
                            <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300" onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}>Get a Quote</Button>
                        </div>
                        <div className="lg:col-span-5 relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-muted group">
                            <img src={christmasGiftBagsHero} alt="Christmas Gift Bags" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 max-w-3xl">Holiday Gift Bags That Present Every Christmas Gift at the Premium Quality Tier</h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>Our <strong className="text-foreground">custom Christmas gift bags</strong> occupy the premium tier of the seasonal gift packaging format spectrum—combining luxury handle configurations, high-quality paper stocks, premium laminate finishing, and metallic foil printing to create the gift bag presentation that communicates the value and care invested in the holiday gift before the recipient sees what's inside. Satin ribbon loop handles in Christmas red, gold, and forest green, twisted silk cord handles in metallic finishes, and grosgrain ribbon alternatives provide the handle material variety to match every luxury gifting tier and brand aesthetic preference.</p>
                        <p>Full-color illustrated seasonal artwork across bag face panels—original Christmas character illustrations, branded holiday pattern designs, classic festive motifs in contemporary graphic interpretations—creates the distinctively branded gift bag identity that recipients retain and reuse, extending brand impression beyond the immediate gifting moment into sustained post-holiday brand recall. Soft-touch matte lamination on the bag exterior, gold foil brand mark and holiday motif stamping, and premium interior tissue paper presentation coordination complete the comprehensive luxury Christmas gift bag experience from the moment the bag arrives in the recipient's hands through the interior reveal of the gift within.</p>
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
                                            <div className="space-y-1.5"><Label htmlFor="length" className="text-xs font-semibold text-muted-foreground">W (in)</Label><Input id="length" type="number" placeholder="10" className="h-9 bg-white" /></div>
                                            <div className="space-y-1.5"><Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">Gusset</Label><Input id="width" type="number" placeholder="4" className="h-9 bg-white" /></div>
                                            <div className="space-y-1.5"><Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">H (in)</Label><Input id="depth" type="number" placeholder="12" className="h-9 bg-white" /></div>
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">The Complete Guide to Premium Christmas Gift Bag Packaging</h2>
                    <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="[&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-6 [&>h3]:mb-3 [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-4 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-4 [&>ul]:space-y-2 [&>ul>li]:text-[15px] [&>ul>li]:text-slate-600">
                            <p>The premium Christmas gift bag occupies a distinctive position in the holiday gifting packaging hierarchy—providing the bag-format equivalent of the luxury gift box, with all the visual presentation quality, tactile material richness, and brand communication value of premium rigid gift box packaging in a more flexible, lighter-weight, and structurally adaptable format that accommodates the irregular shapes and soft-good product categories that box formats cannot efficiently package. For luxury retail brands, premium D2C gifting businesses, and corporate Christmas gift programs managing gift items across multiple product categories and size ranges, the Christmas gift bag program provides the packaging flexibility to accommodate the full variety of holiday product dimensions while maintaining consistent premium brand identity presentation across all gifting occasions.</p>
                            <p>The social visibility component of the Christmas gift bag—appearing in the hands of gift-givers and photographed alongside gifts in the Christmas holiday documentation that social media channels amplify throughout the season—makes the visual quality of a premium Christmas gift bag a measurable brand marketing asset beyond its functional packaging utility. Distinctive custom-illustrated festive artwork, premium laminate surface treatments, and quality handle materials that appear in Christmas morning photography, corporate gifting documentation, and social sharing content generate brand awareness and quality association returns that compound across each holiday gifting season in which the branded gift bag program appears in consumer-generated holiday content.</p>
                            <h3>Premium Handle Materials for Christmas Gift Bags</h3>
                            <ul>
                                <li><strong>Satin Ribbon Flat Loop Handles:</strong> Flat-loop satin ribbon handles in Christmas red, forest green, gold, white, and ivory provide the traditional luxury gift bag handle aesthetic—the smooth, reflective sheen of quality satin ribbon communicating premium gift presentation quality that distinguishes gift-tier bags from commodity seasonal alternatives in the immediate tactile and visual quality assessment that first physical contact initiates.</li>
                                <li><strong>Twisted Silk Cord Handles:</strong> Twisted silk cord in gold, silver, champagne, and seasonal color mixes provides the highest-tier handle option for ultra-premium Christmas gift bag programs—communicating luxury tier positioning through the premium tactile texture and visual richness that twisted silk cord delivers relative to all alternative handle material options available in the seasonal gift bag construction market.</li>
                                <li><strong>Grosgrain Ribbon Handles:</strong> Ribbed-texture grosgrain ribbon in seasonal colorways provides a structured, textured alternative to satin flat ribbon—popular for contemporary luxury gift bag programs that seek the visual color quality of ribbon handles with added tactile texture interest that the grosgrain weave structure creates against smooth laminate bag surfaces.</li>
                            </ul>
                            <h3>Premium Lamination and Finishing for Christmas Gift Bags</h3>
                            <ul>
                                <li><strong>Soft-Touch Matte Lamination:</strong> Full-surface soft-touch matte laminate coating creates the velvet-texture tactile surface that communicates premium quality from first physical contact—the most requested premium finishing option for luxury Christmas gift bag programs where the bag's physical quality impression is as commercially important as the visual graphic content it carries.</li>
                                <li><strong>High-Gloss Lamination:</strong> Full-surface high-gloss laminate creates a vibrant, color-saturated exterior with strong visual impact appropriate to colorful contemporary Christmas gift bag graphic programs—particularly effective for vivid seasonal color palettes and photographic-quality illustrated artwork that benefits from the color saturation amplification that gloss lamination provides.</li>
                                <li><strong>Spot UV Gloss Highlights:</strong> Selectively applied UV gloss coating on specific graphic elements—snowflake shapes, star motifs, brand logo marks—against a matte base laminate creates premium surface texture contrast that draws physical and visual attention to the highlighted design elements and communicates craftsmanship in the finishing detail awareness that premium gift bag recipients notice.</li>
                            </ul>
                            <h3>Why CustomPackMakers for Christmas Gift Bags</h3>
                            <p>Our Christmas gift bag design and production team combines custom illustration capability, premium finishing expertise, and seasonal production scheduling precision—delivering luxury holiday gift bags that carry brand quality, festive visual identity, and premium material impression to every gift recipient throughout the Christmas season. Contact us for a complimentary Christmas gift bag sample and program quote today.</p>
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
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Silk cord handles, soft-touch lamination, and custom illustrations for premium Christmas gift bags.</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">
                        <div className="space-y-5">
                            {[
                                { title: "Luxury Silk Cord & Satin Handles", body: "Twisted silk cord in gold and champagne finishes and satin ribbon loop handles in Christmas seasonal colorways provide the premium handle materials that communicate luxury gifting tier positioning through tactile quality from the moment hand contacts bag—distinguishing premium Christmas gift bag programs from standard seasonal alternatives through the material experience that the handle medium delivers before the gift inside is revealed." },
                                { title: "Custom Illustrated Seasonal Artwork", body: "Original holiday character illustrations and bespoke seasonal pattern designs created through our in-house design studio establish exclusively branded gift bag visual identities that recipients retain, reuse, and photograph—building cross-season brand awareness return on the packaging investment as branded gift bags appear in the seasonal content that social media holiday culture generates and amplifies throughout the Christmas gifting period." },
                                { title: "Soft-Touch Matte Premium Finish", body: "Full-surface soft-touch matte lamination on premium Christmas gift bag exteriors creates the velvet-texture tactile surface impression that communicates luxury quality from first physical contact—providing the sensory richness that distinguishes luxury gift bag programs from standard seasonal alternatives and validates the premium positioning that luxury holiday retail and gifting brand programs require from every consumer-facing material touchpoint." },
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
                                <img src={christmasGiftBagsImg6} alt="Christmas gift bags" className="w-full h-full object-cover" />
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
                                <img src={christmasGiftBagsImg7} alt="Differentiate Your Christmas Gift Bags" className="w-full h-full object-cover" />
                            </div>
                        </div>
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">Differentiate Your <span className="text-primary">Christmas Gift Bags</span> From Others</h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">In the premium holiday gifting market, the gift bag is the first quality signal the recipient perceives—before the tissue is parted and before the product inside is revealed. Our Christmas gift bags combine luxury handle materials, custom illustrated seasonal artwork, soft-touch matte laminate finishing, and metallic foil festive printing—creating the premium bag-format gift presentation that luxury retail brands, high-end D2C gifting programs, and sophisticated corporate Christmas gift distribution depend on to frame their holiday gifts with the quality impression and brand identity richness that Christmas gifting occasions demand.</p>
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
                            <img src={FAQimage} alt="Christmas Gift Bags FAQ" className="absolute inset-0 w-full h-full object-cover" />
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

export default ChristmasGiftBags;
