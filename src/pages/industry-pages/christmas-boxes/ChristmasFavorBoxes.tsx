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

import productHero from "@/assets/christmas-products/christmas-favor-boxes.webp";
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
import christmasGiftBags from "@/assets/christmas-products/christmas-gift-bags.webp";
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
    { name: "Christmas Gift Bags", image: christmasGiftBags, link: "/industries/christmas-boxes/christmas-gift-bags", desc: "Premium gift bags with festive designs." },
    { name: "Christmas Stickers", image: christmasStickers, link: "/industries/christmas-boxes/christmas-stickers", desc: "Festive labels and stickers for holiday branding." },
    { name: "Custom Advent Calendar Boxes", image: adventCalendarBoxes, link: "/industries/christmas-boxes/custom-advent-calendar-boxes", desc: "24-compartment countdown packaging." },
];

const faqs = [
    { id: "item-1", q: "What are the most popular sizes and shapes for Christmas favor boxes?", a: "The most popular Christmas favor box formats are the classic cube (2×2×2 inch for single truffle or small treat), rectangle (3×2×1.5 inch for cookie or fudge square), pillow box (4×2×2 inch for standard party favor content), and hexagonal (2.5 inch width for visually distinctive seasonal display). Pyramid-fold boxes in 3 and 4 inch base formats provide the most visually distinctive shape option for premium Christmas party favor programs—creating an architectural display arrangement that assembles beautifully on venue table settings." },
    { id: "item-2", q: "What festive finishing techniques are available for Christmas favor boxes?", a: "Gold and silver metallic foil stamping on snowflake patterns, holly and berry motifs, and brand logo marks communicates gift-tier quality positioning for Christmas favor box programs targeting premium party and event gifting occasions. Spot UV gloss highlights on seasonal pattern elements against matte base coating create premium surface texture contrast. Soft-touch matte lamination provides the velvet tactile quality that positions favor boxes above commodity seasonal alternatives. Embossed snowflake and star geometric patterns create premium tactile interest on favor box lid and side panel surfaces." },
    { id: "item-3", q: "Can Christmas favor boxes be used for wedding and corporate Christmas party events?", a: "Yes. Dual-function Christmas favor box programs for combined Christmas-season wedding and corporate event use are one of our most frequently requested favor packaging applications—particularly for November and December event dates where the seasonal festive aesthetic aligns naturally with the occasion calendar. Corporate Christmas party favor boxes can be branded with company logo, event name, and year printing for keepsake event documentation value. Wedding Christmas favor boxes can incorporate couple names, date, and personal messages alongside seasonal festive design to create the combined wedding-and-holiday aesthetic appropriate for December wedding occasions." },
    { id: "item-4", q: "What minimum order quantities apply to custom Christmas favor boxes?", a: "Custom-printed Christmas favor boxes start at a minimum order quantity of 250 units per design configuration—enabling small season event programs to access full custom printing at accessible order volumes. Standard MOQ 500 units per design applies to special-finish programs including foil stamping, soft-touch lamination, and embossed panel treatments. Bulk corporate and retail favor box programs at 2,500+ units access significantly reduced per-unit pricing that makes premium Christmas favor box programs economically viable for mass-scale seasonal event and retail programs." },
    { id: "item-5", q: "Are eco-friendly materials available for Christmas favor boxes?", a: "Yes. FSC-certified recycled paperboard Christmas favor boxes with soy-based ink printing provide the sustainable material option for eco-positioned event and corporate Christmas favor programs. Biodegradable kraft paper pillow favor boxes with compostable window film panels are the most sustainably complete favor box option available—meeting the environmental responsibility standards of corporate sustainability event programs and eco-conscious seasonal gifting campaigns that require verified responsible material sourcing across all event packaging touchpoints." },
];

const ChristmasFavorBoxes = () => {
    const [selectedImage, setSelectedImage] = useState(0);
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);
    const productImages = [
        { src: productHero, alt: "Christmas Favor Boxes - Main View" },
        { src: productHero, alt: "Christmas Favor Boxes - Foil Snowflake" },
        { src: productHero, alt: "Christmas Favor Boxes - Pyramid Shape" },
        { src: productHero, alt: "Christmas Favor Boxes - Kraft Eco" },
        { src: productHero, alt: "Christmas Favor Boxes - Table Setting" },
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
                <title>Custom Christmas Favor Boxes | Festive Party Favor Packaging | CustomPackMakers</title>
                <meta name="description" content="Custom Christmas favor boxes in cube, pillow, and pyramid shapes with foil snowflake printing, soft-touch lamination, and eco-certified materials. Perfect for holiday parties, corporate events, and Christmas weddings." />
                <meta name="keywords" content="christmas favor boxes, holiday favor boxes, christmas party favors, custom christmas favor boxes, festive favor packaging, christmas event favor boxes" />
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
                            <BreadcrumbItem><BreadcrumbPage>Christmas Favor Boxes</BreadcrumbPage></BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </div>

            <section className="py-8 bg-background">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-7 space-y-6">
                            <div className="w-20 h-1.5 bg-primary rounded-full" />
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight"><span className="text-primary">Christmas</span> Favor Boxes</h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">Charming Christmas favor boxes in cube, pillow, pyramid, and hexagonal formats with metallic foil snowflake printing, soft-touch matte lamination, and eco-certified kraft options—creating memorable seasonal gifting moments at holiday parties, corporate Christmas events, and festive wedding celebrations.</p>
                            <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300" onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}>Get a Quote</Button>
                        </div>
                        <div className="lg:col-span-5 relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-muted group">
                            <img src={productHero} alt="Christmas Favor Boxes" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 max-w-3xl">Festive Favor Packaging That Turns Every Table Setting Into a Seasonal Gifting Display</h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>Our <strong className="text-foreground">custom Christmas favor boxes</strong> are designed to create the festive guest gifting moment that transforms holiday party table settings from functional dining arrangements into festive branded gifting experiences—where each guest place setting includes a beautifully presented seasonal favor box that communicates the quality and care invested in the event by the host. Available in classic cube, pillow, pyramid, and hexagonal formats from compact single-treat sizes through larger multi-item favor assortment configurations, each favor box is produced from quality paperboard stocks with the festive visual finishing that distinguishes premium party favors from commodity seasonal packaging alternatives.</p>
                        <p>Metallic gold and silver foil snowflake stamping, embossed geometric winter patterns, full-color seasonal character printing, and spot UV gloss finish highlights on premium matte base coatings provide the complete festive visual vocabulary that Christmas party favor packaging requires—complemented by FSC-certified kraft eco options for sustainably positioned corporate event and holiday party favor programs. Custom branded logo printing, event name and date personalization, and bespoke seasonal illustration programming enable fully customized Christmas favor box programs for corporate events, seasonal retail, and festive wedding occasions where generic seasonal packaging falls short of the specific brand or event identity requirements.</p>
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
                                            <div className="space-y-1.5"><Label htmlFor="length" className="text-xs font-semibold text-muted-foreground">L (in)</Label><Input id="length" type="number" placeholder="3" className="h-9 bg-white" /></div>
                                            <div className="space-y-1.5"><Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label><Input id="width" type="number" placeholder="2" className="h-9 bg-white" /></div>
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">The Complete Guide to Christmas Favor Box Packaging</h2>
                    <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="[&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-6 [&>h3]:mb-3 [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-4 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-4 [&>ul]:space-y-2 [&>ul>li]:text-[15px] [&>ul>li]:text-slate-600">
                            <p>Christmas favor boxes serve the specific function of the guest take-home gifting moment that holiday party planning has made a standard expectation at premium seasonal events—corporate Christmas celebrations, holiday dinner parties, workplace seasonal gatherings, festive charity galas, and Christmas-season wedding receptions where each guest's departure is marked by a beautifully presented seasonal favor gift that extends the event's generosity and brand impression beyond the venue and into the guest's home environment. The favor box is the last tactile brand impression that the event makes on the departing guest—and therefore carries a disproportionate share of the event's overall quality and care impression in the final memory that the guest retains from the occasion.</p>
                            <p>This lasting impression function makes the quality, personalization, and aesthetic of the Christmas favor box a high-priority event planning investment that consistently generates favorable guest feedback and social sharing that amplifies the event's brand value beyond its physical attendees. Premium favor box designs that photograph well—distinctive architectural shapes, beautiful foil snowflake printing, elegant color coordination with the event overall design program—appear in guest social sharing content from holiday events, generating brand and event visibility returns that compound the initial favorable impression with public amplification that commodity seasonal packaging alternatives cannot achieve.</p>
                            <h3>Christmas Favor Box Shape Options</h3>
                            <ul>
                                <li><strong>Classic Cube Form:</strong> Equal-dimension cube format with tuck-top closure is the most versatile and compact favor box option—accommodating chocolate truffles, fudge cubes, bath bomb spheres, ornament balls, and small square gifting items with maximum space efficiency in tabletop display arrangements across range of Christmas party contexts.</li>
                                <li><strong>Pillow Box Form:</strong> Curved-shoulder pillow format with side-pinch closure provides the charming, gift-like appearance that distinguishes seasonal favor packaging from utility box alternatives—particularly effective for soft items, individual confections, and small gift collections where the pillow format's visual warmth complements the seasonal occasion's emotional atmosphere.</li>
                                <li><strong>Pyramid Box Form:</strong> Four-sided pyramid format with top-apex fold closure creates the most architecturally distinctive tabletop display shape available in the favor box format collection—assembling into visually arresting triangular Christmas tree-like arrangements on event tables when grouped together as a destination display element.</li>
                                <li><strong>Hexagonal Box Form:</strong> Six-sided hexagonal prism favor box provides the geometrically sophisticated shape option for contemporary design-forward Christmas party programs—accommodating cylinder-format items, stacked disk confections, and small sphere objects with the visual interest of a non-standard geometric format.</li>
                            </ul>
                            <h3>Personalization for Christmas Favor Box Programs</h3>
                            <ul>
                                <li><strong>Corporate Event Branding:</strong> Company logo, event name, year, and tagline printing on favor box face panels documents the corporate Christmas event on a take-home keepsake that employees and guests retain beyond the event occasion—creating a branded memory vehicle that generates ongoing brand impression through reuse or display in the home or office.</li>
                                <li><strong>Wedding Name and Date Personalization:</strong> Couple's name, wedding date, and personal message printing on Christmas-season wedding favor boxes creates the combined festive-and-matrimonial aesthetic that December wedding occasions naturally invite—providing guests with a personally meaningful take-home memento that functions as both a seasonal favor and a wedding keepsake.</li>
                            </ul>
                            <h3>Why CustomPackMakers for Christmas Favor Boxes</h3>
                            <p>Our favor box design and production team understands the dual aesthetic and functional requirements of premium Christmas event favor packaging—creating beautifully finished, distinctively shaped, and thoughtfully personalized seasonal favor boxes that create the impression, last the distance, and reflect the event quality that premium holiday occasions deserve. Contact us today for a Christmas favor box quote and sample.</p>
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
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Pyramid shapes, foil snowflake prints, and event personalization for premium Christmas favor boxes.</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">
                        <div className="space-y-5">
                            {[
                                { title: "Distinctive Architectural Shapes", body: "Pyramid, hexagonal, and pillow format Christmas favor boxes create the visually arresting tabletop display arrangements that photograph beautifully in event documentation—assembling into festive architectural groupings on party table settings that standard cube formats cannot achieve, generating the social sharing content that premium event packaging investments compound in brand visibility return over time." },
                                { title: "Metallic Foil Snowflake Printing", body: "Gold and silver foil snowflake and botanical motif stamping on favor box surfaces communicates the premium finishing quality that distinguishes seasonal event favor packaging from commodity holiday alternatives—creating the metallic seasonal impression that validates premium event investment and generates the quality memory impression that guests retain and associate with the hosting brand or individual across future seasonal occasions." },
                                { title: "Event & Brand Personalization", body: "Corporate logo, event name, date, couple names, and personal message variable printing enables Christmas favor boxes to function as branded event keepsakes beyond their immediate gifting purpose—creating take-home memory vehicles that generate sustained brand impression through post-event retention and occasional reuse that extends the original packaging investment's impression value well beyond the event occasion itself." },
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
                                <img src={productHero} alt="Christmas favor boxes" className="w-full h-full object-cover" />
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
                                <img src={productHero} alt="Differentiate Your Christmas Favor Boxes" className="w-full h-full object-cover" />
                            </div>
                        </div>
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">Differentiate Your <span className="text-primary">Christmas Event Favors</span> From Others</h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">In the premium holiday event favor market, packaging shape, surface quality, and personalization depth distinguish memorable favor experiences from forgettable generic seasonal alternatives. Our Christmas favor boxes combine distinctive pyramid, hexagonal, pillow, and cube shapes, metallic foil snowflake printing, soft-touch matte lamination, and corporate and wedding event personalization—creating the seasonal gifting moments that guests retain, photograph, and remember long after the holiday occasion has passed.</p>
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
                            <img src={FAQimage} alt="Christmas Favor Boxes FAQ" className="absolute inset-0 w-full h-full object-cover" />
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

export default ChristmasFavorBoxes;
