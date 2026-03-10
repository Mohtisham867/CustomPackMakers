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

import christmasChocolateBoxesHero from "@/assets/christmas-products/christmas-chocolate-boxes/img-hero.png";
import christmasChocolateBoxesImg1 from "@/assets/christmas-products/christmas-chocolate-boxes/img-1.png";
import christmasChocolateBoxesImg2 from "@/assets/christmas-products/christmas-chocolate-boxes/img-2.png";
import christmasChocolateBoxesImg3 from "@/assets/christmas-products/christmas-chocolate-boxes/img-3.png";
import christmasChocolateBoxesImg4 from "@/assets/christmas-products/christmas-chocolate-boxes/img-4.png";
import christmasChocolateBoxesImg5 from "@/assets/christmas-products/christmas-chocolate-boxes/img-5.png";
import christmasChocolateBoxesImg6 from "@/assets/christmas-products/christmas-chocolate-boxes/img-whychoose.png";
import christmasChocolateBoxesImg7 from "@/assets/christmas-products/christmas-chocolate-boxes/img-different.png";

import FAQimage from "@/assets/FAQ-image.png";
import christmasTags from "@/assets/christmas-products/christmas-tags.webp";
import christmasGableBoxes from "@/assets/christmas-products/christmas-gable-boxes.webp";
import christmasCupcakeBoxes from "@/assets/christmas-products/christmas-cupcake-boxes.webp";
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
    { name: "Christmas Tags", image: christmasTags, link: "/industries/christmas-boxes/christmas-tags", desc: "Custom holiday gift tags with premium foil printing." },
    { name: "Christmas Gable Boxes", image: christmasGableBoxes, link: "/industries/christmas-boxes/christmas-gable-boxes", desc: "Festive carry boxes with built-in handles." },
    { name: "Christmas Cupcake Boxes", image: christmasCupcakeBoxes, link: "/industries/christmas-boxes/christmas-cupcake-boxes", desc: "Holiday cupcake packaging with secure inserts." },
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
    { id: "item-1", q: "What lead times should I expect for Christmas chocolate box orders during peak holiday season?", a: "We strongly recommend placing Christmas chocolate packaging orders by early October to guarantee delivery before December 1st. Our standard 8–10 business day turnaround applies through mid-October; however, from November 1st onward, lead times extend to 12–15 business days due to peak production demand. Rush service is available at an additional cost for orders placed after November 15th." },
    { id: "item-2", q: "Can festive metallic gold and silver foiling be applied to Christmas chocolate boxes?", a: "Yes. Hot foil stamping in gold, silver, copper, and holographic metallic finishes is available on all our Christmas chocolate box formats. Foiling is most commonly applied to brand logos, snowflake motifs, and Christmas tree graphics on the front panel—creating the premium, gift-worthy aesthetic that premium festive chocolate brands require to justify elevated seasonal price points at retail or D2C." },
    { id: "item-3", q: "Are food-grade safe materials used for chocolate Christmas box inserts?", a: "All insert materials supplied with our Christmas chocolate boxes are FDA-compliant food-contact-safe—including food-grade coated cardboard dividers, thermoformed PET trays, and food-safe foam cavity inserts. These materials are specifically selected to prevent chocolate migration, aroma contamination, and physical damage during transit, preserving confectionery quality from production facility through to the consumer's Christmas unboxing moment." },
    { id: "item-4", q: "What eco-friendly material options are available for Christmas chocolate packaging?", a: "We offer FSC-certified kraft and SBS cardstock, soy-based inks, and compostable PLA window film as sustainable holiday packaging alternatives. These materials allow Christmas chocolate brands to align their seasonal packaging with year-round sustainability commitments—appealing to the environmentally conscious premium confectionery consumer without sacrificing the festive visual quality that holiday gifting occasions demand." },
    { id: "item-5", q: "Can Christmas chocolate boxes include a viewing window to display the product?", a: "Yes. Clear PET or compostable PLA window panels can be die-cut and applied to front or lid panels of Christmas chocolate boxes—allowing recipients to see the chocolate assortment inside before opening. Windows are particularly effective on gift boxes where the visual presentation of the chocolate arrangement itself is part of the premium holiday gifting experience." },
];

const ChristmasChocolateBoxes = () => {
    const [selectedImage, setSelectedImage] = useState(0);
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);
    const productImages = [
        { src: christmasChocolateBoxesImg1, alt: "Christmas Chocolate Boxes - Main View" },
        { src: christmasChocolateBoxesImg2, alt: "Christmas Chocolate Boxes - Foil Accents" },
        { src: christmasChocolateBoxesImg3, alt: "Christmas Chocolate Boxes - Interior Insert" },
        { src: christmasChocolateBoxesImg4, alt: "Christmas Chocolate Boxes - Eco Kraft" },
        { src: christmasChocolateBoxesImg5, alt: "Christmas Chocolate Boxes - Gift Stack" },
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
                <title>Custom Christmas Chocolate Boxes | Festive Holiday Chocolate Packaging | CustomPackMakers</title>
                <meta name="description" content="Premium custom Christmas chocolate boxes with festive foil stamping, food-grade inserts, eco-friendly materials, and gift-ready designs. Perfect for holiday chocolate gifting." />
                <meta name="keywords" content="christmas chocolate boxes, holiday chocolate packaging, festive chocolate gift boxes, custom christmas chocolate packaging, christmas chocolate box wholesale" />
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
                            <BreadcrumbItem><BreadcrumbPage>Christmas Chocolate Boxes</BreadcrumbPage></BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </div>

            {/* HERO */}
            <section className="py-8 bg-background">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-7 space-y-6">
                            <div className="w-20 h-1.5 bg-primary rounded-full" />
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight"><span className="text-primary">Christmas</span> Chocolate Boxes</h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">Festive custom chocolate boxes with metallic foil stamping, food-safe compartment inserts, eco-friendly FSC-certified materials, and gift-ready seasonal designs—crafted to make every holiday chocolate gifting moment premium, memorable, and worthy of the season.</p>
                            <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300" onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}>Get a Quote</Button>
                        </div>
                        <div className="lg:col-span-5 relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-muted group">
                            <img src={christmasChocolateBoxesHero} alt="Christmas Chocolate Boxes" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                        </div>
                    </div>
                </div>
            </section>

            {/* OVERVIEW */}
            <section className="py-8 bg-slate-50">
                <div className="container mx-auto px-[5vw]">
                    <div className="flex items-center gap-3 mb-5">
                        <div className="w-10 h-1 bg-primary rounded-full" />
                        <span className="text-xs font-semibold tracking-widest text-primary uppercase">Product Overview</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 max-w-3xl">Festive Chocolate Packaging That Elevates Holiday Gifting</h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>Our <strong className="text-foreground">custom Christmas chocolate boxes</strong> are engineered to transform holiday chocolate gifting into a premium brand experience. Constructed from food-safe SBS cardstock and eco-certified kraft, each box pairs structural integrity with the festive aesthetic finishes that seasonal retail demands—gold and silver foil stamping, gloss and soft-touch matte lamination, and seasonal CMYK graphics that immediately communicate holiday occasion premium value before the recipient lifts the lid.</p>
                        <p>Precision-cut food-grade insert systems—thermoformed PET trays, kraft cardboard dividers, and cavity foam sheets—protect individual chocolates from transit damage and presentation disarray. Window panel options display the chocolate assortment as part of the gifting aesthetic. Whether you're packaging artisan truffles, milk chocolate assortments, or premium dark chocolate bars for festive retail, wholesale distribution, or branded corporate gifting programs, our <strong className="text-foreground">Christmas chocolate packaging</strong> delivers the quality and seasonal appeal your holiday products deserve.</p>
                    </div>
                </div>
            </section>

            {/* FORM + GALLERY */}
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
                                            <div className="space-y-1.5"><Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label><Input id="width" type="number" placeholder="6" className="h-9 bg-white" /></div>
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

            {/* SEO CONTENT */}
            <section className="py-8 bg-slate-50 border-t border-slate-100">
                <div className="container mx-auto px-[5vw]">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">The Complete Guide to Christmas Chocolate Box Packaging</h2>
                    <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="[&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-6 [&>h3]:mb-3 [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-4 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-4 [&>ul]:space-y-2 [&>ul>li]:text-[15px] [&>ul>li]:text-slate-600">
                            <p>The Christmas holiday season is the single most commercially intense period in the global confectionery calendar. Chocolate gifting alone accounts for billions in annual retail revenue across the months of November and December—and the packaging that contains, presents, and protects that chocolate is the first sensory impression that determines whether a gifting purchase feels premium or perfunctory. In the modern festive retail environment, custom Christmas chocolate boxes are not merely functional containers—they are essential components of the holiday gifting experience that justify premium price positioning and generate the emotional associations that drive brand loyalty long after the Christmas season ends.</p>
                            <p>For chocolate brands, confectionery retailers, corporate gifting program managers, and D2C subscription businesses, investing in custom Christmas chocolate packaging is an investment in perceived product value, gift recipient satisfaction, and brand recall that extends into the new year. The visual and tactile quality of the box communicates the quality of the chocolate inside before a single piece is tasted—making packaging the most efficient quality communication tool available to seasonal confectionery businesses at scale.</p>
                            <h3>Festive Aesthetic Finishes for Christmas Chocolate Packaging</h3>
                            <p>The visual language of Christmas packaging is one of the most codified in consumer retail—red and green seasonal palettes, metallic gold and silver accents, snowflake and Christmas tree iconography, and the premium finishing techniques that signal gift-worthy quality at shelf distance. Our Christmas chocolate boxes are available with the full range of festive finishing options required to communicate seasonal premium positioning effectively.</p>
                            <ul>
                                <li><strong>Gold and Silver Foil Stamping:</strong> Hot foil application of metallic gold, silver, copper, and holographic finishes to brand logos, snowflake patterns, and decorative borders—creating the premium metallic gleam that signals luxury holiday gifting quality and differentiates premium chocolate packaging from mass-market commodity seasonal products.</li>
                                <li><strong>Soft-Touch Matte Lamination:</strong> Velvet-soft matte laminate surface coating provides the tactile luxury sensation that premium holiday packaging communicates through touch—particularly effective for dark chocolate gifting ranges where the sophisticated, understated aesthetic of soft-touch matte aligns with the premium dark chocolate brand positioning.</li>
                                <li><strong>Spot UV Gloss Coating:</strong> Selective high-gloss UV coating applied over matte-laminated surfaces creates a striking visual contrast that highlights specific design elements—brand marks, holographic snowflake patterns, and seasonal graphic accents—with an eye-catching dimensional quality that catches retail display lighting.</li>
                                <li><strong>Embossed and Debossed Brand Elements:</strong> Raised and recessed surface texturing of logos, Christmas motifs, and decorative border patterns adds tactile depth that communicates premium craftsmanship quality—the physical dimensionality that differentiates genuinely premium holiday chocolate packaging from flat-printed commodity alternatives.</li>
                                <li><strong>Festive CMYK Seasonal Graphics:</strong> Full-color offset and digital CMYK printing of Santa, reindeer, Christmas village, winter landscape, and luxury abstract seasonal graphics with Pantone matching for precise brand color consistency across the full holiday packaging range.</li>
                            </ul>
                            <h3>Food-Safe Insert Systems for Christmas Chocolate Protection</h3>
                            <p>Premium chocolate is a structurally vulnerable product—susceptible to breakage, surface bloom from temperature variation, and presentation disarray from inadequate packaging support. Christmas chocolate gifting occasions require that every piece arrive in pristine, gift-ready condition—because damaged or disordered chocolate significantly undermines the premium gifting experience that recipients and gift-givers expect.</p>
                            <ul>
                                <li><strong>Thermoformed PET Cavity Trays:</strong> Precision-formed individual chocolate cavities in food-grade PET maintain the position and orientation of each piece through transit—preventing the collision-induced breakage that cardboard-only packaging permits. Thermoformed trays are available in custom cavity configurations matching the specific dimensions and quantities of each chocolate assortment format.</li>
                                <li><strong>Food-Safe Cardboard Dividers:</strong> Scored and slotted food-grade coated cardboard grids divide the box interior into individual chocolate sections—providing structural separation with the lightweight material economy that keeps packaging cost manageable at seasonal volume scales.</li>
                                <li><strong>Cavity Foam Sheet Inserts:</strong> Low-density food-safe foam cavity sheets with precision die-cut chocolate positions provide premium transit protection and visual presentation quality—particularly effective in rigid chocolate gift boxes where the visual impact of the insert display contributes meaningfully to the premium unboxing experience.</li>
                            </ul>
                            <h3>Eco-Friendly Materials for Sustainable Christmas Chocolate Packaging</h3>
                            <ul>
                                <li><strong>FSC-Certified Kraft and SBS:</strong> Forest Stewardship Council certified paper and board materials demonstrate responsible sourcing—aligning seasonal chocolate packaging with the brand sustainability commitments that premium confectionery consumers increasingly expect.</li>
                                <li><strong>Compostable PLA Window Film:</strong> Plant-based polylactic acid window film provides the product visibility function of conventional PET while offering compostable end-of-life disposal—enabling Christmas chocolate brands to show product interiors without the multi-layer plastic laminate waste that standard PET windows generate.</li>
                                <li><strong>Soy-Based Inks:</strong> Soy-derived printing inks deliver vibrant, color-accurate festive graphics with significantly lower VOC emissions than petroleum-based ink systems—supporting ISO 14001 environmental management commitments and appealing to sustainably minded premium chocolate consumers.</li>
                            </ul>
                            <h3>Why CustomPackMakers for Christmas Chocolate Packaging</h3>
                            <p>Our seasonal packaging team operates with the holiday production calendar in mind—advising brands on optimal ordering windows, managing peak-season production scheduling, and delivering Christmas chocolate packaging that meets both quality standards and festive delivery deadlines. From craft confectionery studios to national retail chocolate brands, we provide the packaging quality, seasonal expertise, and production reliability that successful holiday chocolate programs require. Contact our team today for a complimentary Christmas chocolate packaging consultation.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CAROUSEL */}
            <section className="py-8 bg-accent/20">
                <div className="container mx-auto px-[5vw]">
                    <div className="mb-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Related Christmas Products</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl">Explore our complete festive packaging range for every holiday gifting format and occasion.</p>
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

            {/* WHY US */}
            <section className="py-12 relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #fafafa 0%, #f4f6ff 60%, #f0fdf8 100%)' }}>
                <div className="container mx-auto px-[30px] relative z-10">
                    <div className="text-center mb-14">
                        <span className="inline-block text-xs font-semibold tracking-widest text-primary uppercase mb-3 bg-primary/10 px-4 py-1.5 rounded-full">Our Promise</span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">Why Brands Choose <span className="text-primary">CustomPackMakers</span></h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">Festive foil finishes, food-safe inserts, and eco materials for premium Christmas chocolate packaging.</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">
                        <div className="space-y-5">
                            {[
                                { color: "primary", title: "Gold & Silver Foil Stamping", body: "Hot foil application in metallic gold, silver, copper, and holographic finishes brings the premium visual quality that festive chocolate gifting demands—applied to logos, snowflake motifs, and seasonal border patterns across every Christmas chocolate box format we produce." },
                                { color: "amber-500", title: "Food-Safe Insert Systems", body: "Thermoformed PET cavity trays, food-grade cardboard dividers, and die-cut foam inserts ensure every piece arrives in pristine presentation-ready condition—protecting the chocolate quality investment your confectionery brand and gift recipients expect from premium seasonal packaging." },
                                { color: "emerald-500", title: "FSC-Certified Eco Materials", body: "FSC-certified kraft and SBS stocks, soy-based inks, and compostable PLA window film enable Christmas chocolate brands to align seasonal packaging material selection with sustainability commitments—meeting premium eco-conscious consumer expectations without compromising festive aesthetic quality." },
                            ].map((item, i) => (
                                <div key={i}>
                                    <div className="flex gap-6 items-start group">
                                        <div className="flex-shrink-0 mt-1"><div className={`w-10 h-10 rounded-full bg-${item.color}/10 flex items-center justify-center`}><svg className={`w-5 h-5 text-${item.color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div></div>
                                        <div><h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3><p className="text-sm text-slate-500 leading-relaxed">{item.body}</p></div>
                                    </div>
                                    {i < 2 && <div className="w-full h-px bg-slate-100 mt-5" />}
                                </div>
                            ))}
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

            {/* DIFFERENTIATE */}
            <section className="py-10 lg:py-12 bg-white overflow-hidden relative">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="relative group">
                            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] border border-primary/20 shadow-2xl transform transition-transform duration-700 hover:scale-[1.02]">
                                <img src={christmasChocolateBoxesImg7} alt="Differentiate Your Christmas Chocolate Brand" className="w-full h-full object-cover" />
                            </div>
                        </div>
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">Differentiate Your <span className="text-primary">Christmas Chocolate</span> From Others</h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">In the peak-season confectionery market, festive packaging is the premium signal that converts browsers into buyers. Our Christmas chocolate boxes combine gold foil stamping, food-safe cavity inserts, eco-certified materials, and gift-ready seasonal graphics—delivering the visual and tactile quality that positions your chocolate at the premium gifting tier, commands higher price points, and creates the unboxing moment recipients photograph and share across the digital platforms that drive holiday brand visibility.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
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
                            <img src={FAQimage} alt="Christmas Chocolate Boxes FAQ" className="absolute inset-0 w-full h-full object-cover" />
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
