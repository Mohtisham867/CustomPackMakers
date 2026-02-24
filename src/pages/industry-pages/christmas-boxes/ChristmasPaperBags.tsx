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

import productHero from "@/assets/christmas-products/christmas-paper-bags.webp";
import FAQimage from "@/assets/FAQ-image.png";
import christmasChocolateBoxes from "@/assets/christmas-products/christmas-chocolate-boxes.webp";
import christmasTags from "@/assets/christmas-products/christmas-tags.webp";
import christmasGableBoxes from "@/assets/christmas-products/christmas-gable-boxes.webp";
import christmasCupcakeBoxes from "@/assets/christmas-products/christmas-cupcake-boxes.webp";
import christmasCandyBoxes from "@/assets/christmas-products/christmas-candy-boxes.webp";
import christmasGiftBoxes from "@/assets/christmas-products/christmas-gift-boxes.webp";
import christmasEveBoxes from "@/assets/christmas-products/christmas-eve-boxes.webp";
import christmasTreatBoxes from "@/assets/christmas-products/christmas-treat-boxes.webp";
import christmasGiftBags from "@/assets/christmas-products/christmas-gift-bags.webp";
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
    { name: "Christmas Gift Bags", image: christmasGiftBags, link: "/industries/christmas-boxes/christmas-gift-bags", desc: "Premium gift bags with festive designs." },
    { name: "Christmas Favor Boxes", image: christmasFavorBoxes, link: "/industries/christmas-boxes/christmas-favor-boxes", desc: "Party favor packaging with seasonal motifs." },
    { name: "Christmas Stickers", image: christmasStickers, link: "/industries/christmas-boxes/christmas-stickers", desc: "Festive labels and stickers for holiday branding." },
    { name: "Custom Advent Calendar Boxes", image: adventCalendarBoxes, link: "/industries/christmas-boxes/custom-advent-calendar-boxes", desc: "24-compartment countdown packaging." },
];

const faqs = [
    { id: "item-1", q: "What weight capacities do Christmas paper bags carry safely?", a: "Our Christmas paper bags are produced in lightweight (up to 2 lb), standard (up to 5 lb), medium-duty (up to 10 lb), and heavy-duty (up to 20 lb) weight capacity configurations—determined by paper substrate weight, reinforced base board thickness, and handle type selection. Twisted kraft rope handles accommodate heavier loads than twisted paper handles, with flat ribbon handles optimal for gift-tier presentation at light content weights. All bags undergo load testing verification before production approval for each weight class configuration." },
    { id: "item-2", q: "What seasonal lead times apply to Christmas paper bag orders?", a: "Custom-printed Christmas paper bags require order placement by October 10th for standard 8–10 business day delivery before the November retail season. November orders extend to 10–12 business days due to peak seasonal production demand. Large-format Christmas paper bag programs (10,000+ units) for retail chain distribution should place orders by September 15th to ensure production capacity allocation, substrate procurement lead time, and the delivery scheduling lead time that national retail Christmas shopping season programs require for reliable store-level distribution." },
    { id: "item-3", q: "Can Christmas paper bags be produced with eco-certified sustainable materials?", a: "Yes. Our Christmas paper bags are available in FSC-certified kraft paper, 100% recycled post-consumer content paper, and Forest Stewardship Council-certified white paper stocks—with soy-based ink printing and paper-twist handles eliminating all plastic component content from the bag construction. Fully FSC-certified, soy-ink, paper-handle Christmas paper bags provide the complete sustainable material bill of materials that retail sustainability policies and eco-positioned holiday brand consumer communications increasingly require as a minimum packaging standard." },
    { id: "item-4", q: "What handle options are available for Christmas paper bags?", a: "Twisted paper handles in seasonal color-matched ribbon and natural kraft finishes are the primary Christmas paper bag handle option—providing adequate carry strength for standard weight retail and gifting applications at minimal cost. Twisted kraft rope handles in natural and colored finishes provide enhanced carry strength for heavier product loads. Flat ribbon handles in satin and grosgrain textures provide the premium gifting tier handle aesthetic for luxury seasonal retail bags where the tactile handle experience is a brand quality communication element." },
    { id: "item-5", q: "What standard sizes are available for Christmas retail and gift paper bags?", a: "Standard Christmas paper bag dimensions include mini (6×3×8 inch), small gift (8×4×10 inch), medium retail (10×5×12 inch), large retail (12×6×15 inch), and extra-large (16×6×19 inch) format configurations—covering the full range of seasonal gift, retail shopping, and hospitality bag application requirements. Custom dimensions outside these standard configurations are available for branded Christmas paper bag programs with specific product dimension or retail display requirements." },
];

const ChristmasPaperBags = () => {
    const [selectedImage, setSelectedImage] = useState(0);
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);
    const productImages = [
        { src: productHero, alt: "Christmas Paper Bags - Main View" },
        { src: productHero, alt: "Christmas Paper Bags - Rope Handle" },
        { src: productHero, alt: "Christmas Paper Bags - Ribbon Handle" },
        { src: productHero, alt: "Christmas Paper Bags - Kraft Eco" },
        { src: productHero, alt: "Christmas Paper Bags - Large Retail" },
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
                <title>Custom Christmas Paper Bags | Festive Holiday Shopping Bags | CustomPackMakers</title>
                <meta name="description" content="Custom Christmas paper bags with festive seasonal graphics, rope and ribbon handles, eco-certified kraft materials, and premium foil printing. Perfect for holiday retail, gifting, and seasonal shopping." />
                <meta name="keywords" content="christmas paper bags, holiday paper bags, festive shopping bags, custom christmas paper bags, christmas retail bags, holiday paper bag wholesale" />
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
                            <BreadcrumbItem><BreadcrumbPage>Christmas Paper Bags</BreadcrumbPage></BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </div>

            <section className="py-8 bg-background">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-7 space-y-6">
                            <div className="w-20 h-1.5 bg-primary rounded-full" />
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight"><span className="text-primary">Christmas</span> Paper Bags</h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">Festive Christmas paper bags with seasonal full-color graphic printing, premium rope and ribbon handles, eco-certified kraft and recycled paper options, and metallic foil brand stamping—the holiday retail and gifting packaging that extends your seasonal brand presence from store to street.</p>
                            <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300" onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}>Get a Quote</Button>
                        </div>
                        <div className="lg:col-span-5 relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-muted group">
                            <img src={productHero} alt="Christmas Paper Bags" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 max-w-3xl">Holiday Paper Bags That Carry Your Brand Through Every Christmas Shopping Street</h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>Our <strong className="text-foreground">custom Christmas paper bags</strong> transform the functional retail shopping and gifting carrier into a brand awareness medium that travels through holiday shopping environments as a walking advertisement for your seasonal brand. Available from mini gift bag through extra-large retail carry configurations, each bag is produced from premium kraft or white paper stocks with reinforced base boards, gusset-side construction for maximum volume capacity, and handle configurations ranging from twisted paper through premium satin ribbon—accommodating the full weight and aesthetic requirements of holiday retail programs.</p>
                        <p>Full-color CMYK seasonal graphic printing across the full bag face surface area—Christmas village scenes, Nordic snowflake patterns, Santa and reindeer illustrations, bold geometric holiday typography—transforms the bag into a mobile billboard that the Christmas shopping street environment amplifies as an ambient brand awareness medium for every consumer who sees a shopper carrying your branded seasonal bag. Gold and silver foil stamping on brand logos and decorative elements, soft-touch matte lamination, and FSC-certified sustainable material options complete the premium Christmas paper bag specification for brands that demand quality, sustainability, and festive visual impact from their seasonal retail packaging program.</p>
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
                                            <div className="space-y-1.5"><Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">Gusset</Label><Input id="width" type="number" placeholder="5" className="h-9 bg-white" /></div>
                                            <div className="space-y-1.5"><Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">H (in)</Label><Input id="depth" type="number" placeholder="12" className="h-9 bg-white" /></div>
                                        </div>
                                        <div className="space-y-1.5"><Label htmlFor="qty" className="text-xs font-semibold text-muted-foreground">Quantity</Label><Input id="qty" type="number" placeholder="1000" className="h-9 bg-white" /></div>
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">The Complete Guide to Christmas Paper Bag Packaging</h2>
                    <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="[&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-6 [&>h3]:mb-3 [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-4 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-4 [&>ul]:space-y-2 [&>ul>li]:text-[15px] [&>ul>li]:text-slate-600">
                            <p>The Christmas paper bag occupies a unique position in the seasonal retail packaging ecosystem—simultaneously functioning as a practical product carry solution for the holiday shopping consumer, a brand visibility medium in the festive street and shopping mall environment, and a sustainability signal that increasingly forms part of the brand values communication conveyed to eco-conscious Christmas shoppers. Unlike seasonal packaging formats that are opened, enjoyed, and discarded, the retail paper bag travels through public spaces for hours after purchase—generating ambient brand impression exposures with every consumer who sees the bag carried through the holiday retail environment.</p>
                            <p>This mobile brand impression function makes the aesthetic quality of the Christmas paper bag a marketing investment with quantifiable brand awareness return beyond the purely functional packaging economics. Brands that invest in premium-quality seasonal paper bags with distinctive graphic design, memorable festive colors, and quality material presentation consistently benefit from the brand impression amplification that the busy Christmas retail environment provides—creating the word-of-mouth and social sharing opportunity that high-quality Christmas retail bags generate when the visual quality registers as genuinely premium rather than commodity seasonal retail packaging.</p>
                            <h3>Christmas Paper Bag Construction and Materials</h3>
                            <ul>
                                <li><strong>Kraft Paper Stocks:</strong> Natural unbleached and bleached kraft paper in weights from 90gsm through 150gsm provides the primary material substrate for Christmas paper bag production—with paper weight selection matched to carry load requirements, handle configuration, and overall bag size format to ensure structural integrity across the intended product weight capacity for each specific seasonal bag program.</li>
                                <li><strong>Reinforced Base Boards:</strong> Heavy chipboard base insert panels glued to the bag interior base provide the structural rigidity that prevents base panel failure under load—particularly important for medium and large Christmas retail bags carrying gift boxed merchandise, bottled products, and multi-item holiday shopping assortments that concentrate significant weight on the bag base structure.</li>
                                <li><strong>Gusset Side Construction:</strong> Accordion-fold gusset side panels expand the effective bag volume significantly relative to flat-side bag formats—enabling the bag body to accommodate wider and bulkier holiday merchandise without distortion, overfilling, or handle stress that would compromise bag structural performance and appearance during retail shopping carry use.</li>
                                <li><strong>Twisted Rope Handles:</strong> Natural and colored twisted kraft rope handles with reinforced paper board anchor tabs provide the premium carry handle option for medium and heavy-duty Christmas paper bags—combining adequate tensile strength for heavier gift and retail loads with the tactile quality that distinguishes premium from commodity seasonal paper bag programs in the holiday retail environment.</li>
                            </ul>
                            <h3>Festive Printing and Finishing for Christmas Paper Bags</h3>
                            <ul>
                                <li><strong>Full-Face CMYK Seasonal Graphics:</strong> Offset and digital printing of full-color festive graphic designs across the complete outer bag face surface—Christmas villages, illustrated Santa scenes, Nordic geometric snowflake patterns, and abstract winter minimalist designs in vibrant seasonal color palettes create the visual impact that makes branded Christmas paper bags stand out as ambient brand advertising in the busy holiday retail environment.</li>
                                <li><strong>Metallic Foil Brand Stamping:</strong> Gold and silver hot foil stamping of brand logos, seasonal taglines, and decorative frame elements on Christmas paper bag front panels communicates the premium quality positioning that luxury holiday retail brands require from their seasonal paper bag programs—creating a distinctive metallic visual element that registers quality in the glance-duration consumer impression that street carry generates.</li>
                                <li><strong>Soft-Touch Matte Lamination:</strong> Full-surface soft-touch matte laminate coating on premium Christmas paper bags creates a tactile luxury surface impression that begins communicating brand quality at the point of first physical contact with the bag—the velvet-texture sensation that distinguishes premium retail packaging from standard seasonal alternatives in the consumer's immediate sensory quality assessment.</li>
                            </ul>
                            <h3>Eco-Friendly Christmas Paper Bag Options</h3>
                            <p>FSC-certified recycled kraft paper with soy-based ink printing and paper-twist handles provides the fully plastic-free, responsibly sourced Christmas paper bag option that retail sustainability policies and eco-positioned seasonal brand consumer communications require—delivering complete festive printing quality on a verified sustainable material platform that eliminates all plastic component content from the seasonal paper bag product.</p>
                            <h3>Why CustomPackMakers for Christmas Paper Bags</h3>
                            <p>Our Christmas paper bag production team combines premium graphic printing capability with sustainable material engineering and seasonal production scheduling expertise—delivering the holiday retail bags that carry your brand prominently through the Christmas shopping environment while meeting the sustainability standards that modern retail procurement and eco-conscious consumers demand. Contact us for a Christmas paper bag quote and sample today.</p>
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
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Full-face seasonal printing, eco-certified kraft, and premium rope handles for festive Christmas paper bags.</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">
                        <div className="space-y-5">
                            {[
                                { title: "Full-Face Seasonal Graphic Printing", body: "Offset and digital CMYK printing across the complete outer face surface of Christmas paper bags creates a festive mobile brand impression medium that generates ambient awareness exposures throughout the holiday retail environment—establishing the visual quality standard that distinguishes premium seasonal retail brands from commodity holiday shopping bag alternatives in the consumer's peripheral awareness." },
                                { title: "Premium Rope and Ribbon Handles", body: "Twisted kraft rope and satin ribbon flat handles provide the carry quality and tactile premium impression that festive retail and gift paper bag programs require—rope handles for medium-heavy carry loads and ribbon handles for the luxury gift bag aesthetic, both with reinforced board anchor tabs ensuring handle integrity through repeated carry use across the holiday shopping season." },
                                { title: "Fully Plastic-Free Eco Options", body: "FSC-certified recycled kraft paper, soy-based ink printing, and paper-twist handles combine to eliminate all plastic component content from Christmas paper bag production—meeting retail chain sustainability procurement policies, eco-brand consumer communication standards, and the plastic-free packaging commitment that sustainability-positioned holiday retail programs increasingly require from their seasonal packaging supply partners." },
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
                                <img src={productHero} alt="Christmas paper bags" className="w-full h-full object-cover" />
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
                                <img src={productHero} alt="Differentiate Your Christmas Paper Bags" className="w-full h-full object-cover" />
                            </div>
                        </div>
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">Differentiate Your <span className="text-primary">Christmas Paper Bags</span> From Others</h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">In the competitive holiday retail environment, a premium Christmas paper bag is a brand awareness opportunity that travels beyond your storefront into the shopping street, the car park, and the gift-giving occasion. Our Christmas paper bags combine full-face seasonal graphic printing, metallic foil brand stamping, premium rope and ribbon handles, and eco-certified kraft material options—creating the mobile festive brand presence that premium holiday retail programs, boutique seasonal businesses, and sustainable Christmas brands depend on to maximize their seasonal visibility and consumer quality impression throughout the Christmas shopping season.</p>
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
                            <img src={FAQimage} alt="Christmas Paper Bags FAQ" className="absolute inset-0 w-full h-full object-cover" />
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

export default ChristmasPaperBags;
