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

import productHero from "@/assets/industry/christmas-boxes/advent-calendar-boxes.webp";
import FAQimage from "@/assets/FAQ-image.webp";
import christmasChocolateBoxes from "@/assets/industry/christmas-boxes/christmas-chocolate-boxes.webp";
import christmasTags from "@/assets/industry/christmas-boxes/christmas-tags.webp";
import christmasGableBoxes from "@/assets/industry/christmas-boxes/christmas-gable-boxes.webp";
import christmasCupcakeBoxes from "@/assets/industry/christmas-boxes/christmas-cupcake-boxes.webp";
import christmasCandyBoxes from "@/assets/industry/christmas-boxes/christmas-candy-boxes.webp";
import christmasGiftBoxes from "@/assets/industry/christmas-boxes/christmas-gift-boxes.webp";
import christmasEveBoxes from "@/assets/industry/christmas-boxes/christmas-eve-boxes.webp";
import christmasTreatBoxes from "@/assets/industry/christmas-boxes/christmas-treat-boxes.webp";
import christmasPaperBags from "@/assets/industry/christmas-boxes/christmas-paper-bags.webp";
import christmasGiftBags from "@/assets/industry/christmas-boxes/christmas-gift-bags.webp";
import christmasFavorBoxes from "@/assets/industry/christmas-boxes/christmas-favor-boxes.webp";
import christmasStickers from "@/assets/industry/christmas-boxes/christmas-stickers.webp";

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
    { name: "Christmas Favor Boxes", image: christmasFavorBoxes, link: "/industries/christmas-boxes/christmas-favor-boxes", desc: "Party favor packaging with seasonal motifs." },
    { name: "Christmas Stickers", image: christmasStickers, link: "/industries/christmas-boxes/christmas-stickers", desc: "Festive labels and stickers for holiday branding." },
];

const faqs = [
    { id: "item-1", q: "How are the 24 compartments structured in a custom advent calendar box?", a: "Custom advent calendar box compartment configurations are available in three primary structural approaches: individual numbered mini-box tray configurations where each of the 24 compartments is a separate small box that pulls out of a master frame structure; grid-tray drawer formats where a single tray containing 24 pull-open mini-drawer compartments numbered 1-24 presents the full calendar face; and perforated punch-out door calendar formats where a flat-panel advent calendar features 24 individually numbered fold-open door panels that conceal product compartments behind each date reveal. Each configuration can be custom-sized to match the specific product dimensions your December daily reveal program requires." },
    { id: "item-2", q: "What products can be packaged in custom advent calendar boxes?", a: "Custom advent calendar boxes accommodate an exceptionally wide range of product categories across daily compartment reveal formats—chocolates and confections (the traditional advent format), luxury beauty and skincare samples, nail polish miniatures, perfume vials, jewelry items, tea and coffee sachets, hot cocoa mixes, spices and condiments, spirit miniatures, craft and hobby items, children's toys and figurines, stationery and desk accessories, candle votives, bath and body products, and branded corporate promotional gifts. Our engineering team will spec compartment dimensions, weight ratings, and structural requirements specific to your product category to ensure a beautiful reveal experience for each calendar day." },
    { id: "item-3", q: "What is the typical lead time for custom advent calendar box production?", a: "Custom advent calendar box production requires 12-16 weeks lead time from artwork approval to delivery—significantly longer than standard packaging production due to the structural complexity of the 24-compartment engineering, multi-material component coordination (outer master box, inner tray frame, individual compartment inserts, numbering elements), multi-panel print registration requirements, and assembly labor requirements that custom advent calendar production involves. For D1 December launch programs, we recommend advent calendar project initiation no later than mid-August to ensure timely delivery with buffer for any approval revision cycles." },
    { id: "item-4", q: "Can advent calendar boxes be designed with a luxury premium aesthetic?", a: "Yes. Premium luxury advent calendar box programs are among the highest-investment seasonal packaging categories—featuring rigid book-style outer cases with magnetic closure, velvet or silk inner tray lining, foil-stamped or embossed outer panel artwork, satin ribbon pull tabs on individual compartment drawers, and custom-illustrated festive outer artwork that transforms the advent calendar into a collectible seasonal display object that consumers retain and repurpose as seasonal home decoration after the daily reveal program is completed. Premium tier advent calendar programs from luxury beauty, spirits, jewelry, and confectionery brands frequently justify investments of $25-50 per calendar unit packaging cost at the volumes and retail price points their product programs command." },
    { id: "item-5", q: "What minimum order quantities apply to custom advent calendar boxes?", a: "Custom advent calendar boxes have a minimum order quantity of 200 units per design configuration due to the multi-component structural complexity, tooling requirement for die-cut compartment and frame components, and assembly labor requirements of full-custom advent calendar production. Standard 500-unit MOQ applies to premium rigid outer case programs. Volume pricing steps at 1,000, 2,500, and 5,000 units provide progressively improved per-unit economics that make large-scale retail and D2C advent calendar programs significantly more cost-competitive at scale than at the design minimum order threshold." },
];

const CustomAdventCalendarBoxes = () => {
    const [selectedImage, setSelectedImage] = useState(0);
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);
    const productImages = [
        { src: productHero, alt: "Custom Advent Calendar Boxes - Main View" },
        { src: productHero, alt: "Custom Advent Calendar Boxes - 24 Compartment Tray" },
        { src: productHero, alt: "Custom Advent Calendar Boxes - Luxury Rigid Case" },
        { src: productHero, alt: "Custom Advent Calendar Boxes - Beauty Edition" },
        { src: productHero, alt: "Custom Advent Calendar Boxes - Foil Print" },
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
                <title>Custom Advent Calendar Boxes | 24-Compartment Holiday Packaging | CustomPackMakers</title>
                <meta name="description" content="Custom advent calendar boxes with 24 individual compartments, luxury rigid outer cases, foil-stamped artwork, and magnetic closures. Bespoke December countdown packaging for beauty, confectionery, spirits, and corporate programs." />
                <meta name="keywords" content="advent calendar boxes, custom advent calendar, 24 compartment advent box, luxury advent calendar packaging, advent calendar wholesale, christmas countdown boxes" />
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
                            <BreadcrumbItem><BreadcrumbPage>Custom Advent Calendar Boxes</BreadcrumbPage></BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </div>

            <section className="py-8 bg-background">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-7 space-y-6">
                            <div className="w-20 h-1.5 bg-primary rounded-full" />
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight"><span className="text-primary">Custom Advent</span> Calendar Boxes</h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">Bespoke 24-compartment Christmas advent calendar boxes with luxury rigid outer cases, foil-stamped festive artwork, magnetic closures, satin ribbon drawer pulls, and individually numbered compartment configurations—creating the daily discovery countdown experience that turns December into a month-long branded seasonal engagement journey.</p>
                            <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300" onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}>Get a Quote</Button>
                        </div>
                        <div className="lg:col-span-5 relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-muted group">
                            <img src={productHero} alt="Custom Advent Calendar Boxes" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 max-w-3xl">The Advent Calendar That Transforms December Into 24 Days of Branded Discovery</h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>Our <strong className="text-foreground">custom advent calendar boxes</strong> represent the most structurally complex and commercially impactful seasonal packaging format available—creating a 24-day branded consumer engagement program that begins December 1st and builds daily anticipation and brand interaction through the final reveal on December 24th. The advent calendar format has expanded dramatically beyond traditional confectionery and chocolate into beauty and skincare, luxury spirits, specialty coffee and tea, jewelry and accessories, children's toys, wellness products, and corporate branded gifting—driven by the powerful combination of daily branded touchpoints and the collectible, shareable unboxing-photography appeal that premium advent calendar packaging generates in consumer social media content throughout December.</p>
                        <p>Custom advent calendar production begins with the structural engineering of the 24-compartment configuration—sizing each individual compartment to the specific product dimensions of your daily reveal item, specifying the drawer, tray, or punch-out door mechanism appropriate to your product category, and designing the master outer frame and case structure that provides the visual impact and physical stability appropriate to the retail price point and gifting tier of your advent calendar program. Luxury rigid outer case programs with magnetic closure, embossed and foil-stamped artwork panels, velvet tray lining, and satin ribbon drawer hardware complete the premium tier specifications that prestige beauty, spirits, jewelry, and confectionery brands require from their December calendar programs.</p>
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
                                            <div className="space-y-1.5"><Label htmlFor="length" className="text-xs font-semibold text-muted-foreground">L (in)</Label><Input id="length" type="number" placeholder="16" className="h-9 bg-white" /></div>
                                            <div className="space-y-1.5"><Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label><Input id="width" type="number" placeholder="12" className="h-9 bg-white" /></div>
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">The Complete Guide to Custom Advent Calendar Box Packaging</h2>
                    <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="[&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-6 [&>h3]:mb-3 [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-4 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-4 [&>ul]:space-y-2 [&>ul>li]:text-[15px] [&>ul>li]:text-slate-600">
                            <p>The custom advent calendar box has become one of the most commercially significant innovations in the seasonal gifting packaging category—transforming a traditional religious Advent countdown tradition into a branded December consumer engagement platform that every major retail and gifting brand now participates in, and that drives significant pre-Christmas revenue across beauty, spirits, confectionery, food and beverage, toy, beauty, coffee and tea, wellness, and luxury accessories product categories simultaneously. The social media unboxing culture that emerged in the early 2020s amplified the commercial value of premium advent calendar packaging dramatically—as daily unboxing content photography and video sharing from advent calendar recipients generates cumulative social awareness that compounds throughout December as the month's content calendar fills with product reveal and packaging photography that celebrates both the revealed product and the packaging that presents it.</p>
                            <p>Premium advent calendar packaging investment has therefore become a direct commercial performance driver in addition to its traditional gifting revenue function—with the packaging quality, visual impact, and daily-reveal mechanism design being primary factors in an advent calendar program's social engagement performance, consumer review scores, and repeat purchase behavior in subsequent December seasons. Brands that invest in premium advent calendar packaging consistently report higher social sharing rates, better consumer review sentiment, and stronger year-on-year repeat purchase behavior than comparable brands with value-tier packaging executing the same product content strategy within their calendar offers.</p>
                            <h3>Advent Calendar Compartment Configuration Options</h3>
                            <ul>
                                <li><strong>Individual Mini-Box Tray Configuration:</strong> 24 individual mini-drawer or pull-out box compartments mounted within a master frame structure—each numbered 1-24 with independent opening mechanism—provides the most premium reveal experience and the greatest visual impact when the full calendar is displayed. Each individual compartment box can potentially be removed by the recipient and individually presented or displayed, which extends the packaging's visual presence beyond its presentation surface into daily environment display throughout December.</li>
                                <li><strong>Grid Tray Drawer Format:</strong> Single rigid tray containing 24 individual pull-drawer compartments numbered 1-24 within a unified grid structure—the most structurally efficient 24-compartment configuration for consistent small-product category advent calendars including mini cosmetics, confectionery, nail colors, and perfume vials where uniform compartment dimension accommodates the full product range without individual sizing complexity.</li>
                                <li><strong>Perforated Punch-Out Door Format:</strong> Flat-panel advent calendar with 24 individually labeled perforated punch-through door panels concealing product pockets behind each date—the most traditional and cost-effective advent calendar format, enabling photographic-quality outer panel artwork across the full calendar face that creates a decorative display object alongside the daily reveal function.</li>
                                <li><strong>Advent House and 3D Architecture Formats:</strong> Three-dimensional architectural advent calendar formats—holiday house shapes, Christmas tree structures, castle towers, snow globe formats—create the most collectible and display-oriented advent calendar objects available, functioning as complete seasonal home decoration installations throughout December that display on tabletops, mantlepieces, and window ledges as festive focal points in addition to their daily product reveal function.</li>
                            </ul>
                            <h3>Premium Advent Calendar Finishing Options</h3>
                            <ul>
                                <li><strong>Magnetic Rigid Outer Case:</strong> Rigid chipboard outer case with magnetic closure flap provides the highest-quality opening and closing mechanism for luxury tier advent calendar programs—communicating premium quality through the satisfying magnetic snap of the case closure that defines the gift-box category's tactile quality standard across the luxury retail packaging spectrum.</li>
                                <li><strong>Velvet Interior Tray Lining:</strong> Velvet-flocked interior compartment tray surfaces within luxury rigid advent calendar frames create the jewellery-box interior quality standard that luxury beauty, accessories, and jewelry advent calendar programs require to present their daily reveal products at the aesthetic level that luxury product quality demands.</li>
                                <li><strong>Foil-Stamped Outer Artwork:</strong> Gold and silver metallic foil stamping on complex multi-element outer panel seasonal illustration artwork creates the festive metallic richness that premium advent calendar outer artwork requires—with foil application on snowflakes, stars, brand marks, and decorative border elements creating dimensional visual interest that flat-print alternatives at any print quality level cannot fully reproduce.</li>
                            </ul>
                            <h3>Why CustomPackMakers for Custom Advent Calendar Boxes</h3>
                            <p>Our advent calendar engineering, design, and production team manages every stage of the complex custom advent calendar development process—from initial compartment dimension specification through structural prototype development, artwork production, pilot print approval, and final production delivery within the tight seasonal timeline that December launch programs require. Start your advent calendar project early and contact us for a complimentary compartment sizing consultation and custom advent calendar quote today.</p>
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
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">24-compartment engineering, luxury rigid cases, and social-ready seasonal design for advent calendar programs.</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">
                        <div className="space-y-5">
                            {[
                                { title: "Expert 24-Compartment Engineering", body: "Our structural engineers spec every compartment's dimensions, weight rating, and reveal mechanism to the precise products your advent calendar program contains—ensuring that drawer, tray, and door configurations open and close smoothly with the satisfying reveal mechanism that creates the daily branded moment of discovery that advent calendar product strategists design their programs to deliver consistently across all 24 days of the December countdown." },
                                { title: "Luxury Rigid Case & Velvet Lining", body: "Rigid chipboard outer cases with magnetic closure, embossed and foil-stamped outer artwork panels, and velvet-flocked inner tray surfaces provide the jewellery-quality interior presentation standard that luxury beauty, accessories, spirit, and prestige confectionery advent calendar programs require—creating the premium unboxing experience that photographic holiday content amplifies in the social channels that drive awareness and purchase intent across the December countdown period." },
                                { title: "Social-Ready Seasonal Design Impacts", body: "Custom-illustrated outer panel festive artwork designed with the social photography context in mind—compositionally balanced for portrait and landscape social image formats, visually distinctive in the crowded December unboxing content stream, and brand-coherent with the overall seasonal identity program—ensures that advent calendar photography content generated by first-recipient unboxers, gifting content creators, and consumer review contributors maximizes brand awareness return on the premium packaging investment." },
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
                                <img src={productHero} alt="Custom Advent Calendar Boxes" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-7"><p className="text-white font-bold text-lg leading-snug mb-1">Trusted by 500+ Brands</p><p className="text-white/75 text-sm">Delivering premium packaging across North America</p></div>
                            </div>
                            <div className="absolute top-4 -right-2 lg:-right-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80"><p className="text-2xl font-bold text-primary leading-none">98%</p><p className="text-xs text-slate-400 mt-1 font-medium">Satisfaction Rate</p></div>
                            <div className="absolute bottom-4 -left-2 lg:-left-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80"><p className="text-2xl font-bold text-emerald-500 leading-none">12–16</p><p className="text-xs text-slate-400 mt-1 font-medium">Week Lead Time</p></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-10 lg:py-12 bg-white overflow-hidden relative">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="relative group">
                            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] border border-primary/20 shadow-2xl transform transition-transform duration-700 hover:scale-[1.02]">
                                <img src={productHero} alt="Differentiate Your Advent Calendar Boxes" className="w-full h-full object-cover" />
                            </div>
                        </div>
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">Differentiate Your <span className="text-primary">Advent Calendar</span> From Others</h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">In the increasingly competitive December advent calendar market, packaging quality, structural innovation, and visual distinctiveness are primary commercial differentiators—determining social sharing rates, consumer review sentiment, gift selection decisions in a market segment crowded with competing programs, and year-on-year repeat purchase behavior. Our custom advent calendar boxes combine expert 24-compartment engineering, luxury rigid outer case construction, foil-stamped festive artwork, and social-photography-ready seasonal design—creating the December countdown packaging program that turns 24 days of branded discovery into measurable consumer loyalty, social awareness, and seasonal revenue performance that standard advent calendar formats cannot match.</p>
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
                            <img src={FAQimage} alt="Custom Advent Calendar Boxes FAQ" className="absolute inset-0 w-full h-full object-cover" />
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

export default CustomAdventCalendarBoxes;
