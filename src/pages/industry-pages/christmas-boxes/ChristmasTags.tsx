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

import christmasTagsHero from "@/assets/christmas-products/christmas-tags/img-hero.webp";
import christmasTagsImg1 from "@/assets/christmas-products/christmas-tags/img-1.webp";
import christmasTagsImg2 from "@/assets/christmas-products/christmas-tags/img-2.webp";
import christmasTagsImg3 from "@/assets/christmas-products/christmas-tags/img-3.webp";
import christmasTagsImg4 from "@/assets/christmas-products/christmas-tags/img-4.webp";
import christmasTagsImg5 from "@/assets/christmas-products/christmas-tags/img-5.webp";
import christmasTagsImg6 from "@/assets/christmas-products/christmas-tags/img-whychoose.webp";
import christmasTagsImg7 from "@/assets/christmas-products/christmas-tags/img-different.webp";

import FAQimage from "@/assets/FAQ-image.webp";
import christmasChocolateBoxes from "@/assets/christmas-products/christmas-chocolate-boxes.webp";
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
    { name: "Christmas Chocolate Boxes", image: christmasChocolateBoxes, link: "/industries/christmas-boxes/christmas-chocolate-boxes", desc: "Festive chocolate packaging with foil stamping and food-safe inserts." },
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
    { name: "Custom Advent Calendar Boxes", image: adventCalendarBoxes, link: "/industries/christmas-boxes/custom-advent-calendar-boxes", desc: "24-compartment countdown packaging." },
];

const faqs = [
    { id: "item-1", q: "What shapes are available for custom die-cut Christmas gift tags?", a: "We offer standard rectangular, rounded corner, ornament-shaped, Christmas tree silhouette, star, stocking, and snowflake die-cut configurations for custom Christmas tags. Completely bespoke die-cut shapes are available with a one-time tooling investment—enabling brands to create signature holiday tag shapes that are uniquely recognizable at retail display and when tied to gift packaging throughout the festive season." },
    { id: "item-2", q: "What seasonal lead time is required for Christmas tag orders?", a: "Standard Christmas tag orders require 8–10 business days in turnaround from approved artwork through September and early October. From October 15th onward, we recommend allowing 12–15 days due to peak holiday production demand. Urgent orders placed in November can be accommodated with rush service at an additional fee—contact our team immediately for availability during peak December production periods." },
    { id: "item-3", q: "Can Christmas tags include metallic foil finishing?", a: "Yes. Gold, silver, copper, and holographic metallic foil stamping is available on all our Christmas gift tag formats—applied to text, borders, snowflake accents, and brand logos. Foil finishing significantly elevates the perceived premium quality of gift tags relative to standard CMYK-only printed alternatives, making foiled tags particularly appropriate for luxury retail, premium corporate gifting programs, and high-end holiday product lines." },
    { id: "item-4", q: "Are eco-friendly materials available for sustainable Christmas tag printing?", a: "Yes. FSC-certified recycled kraft and uncoated natural paper stocks with soy-based inks are available for environmentally positioned Christmas tag programs. Recycled kraft tags have a natural, artisan aesthetic that complements craft and premium organic brand positioning—while FSC certification provides verifiable sustainable sourcing credentials that sustainability-focused gift brands can communicate to their environmentally conscious consumer audiences." },
    { id: "item-5", q: "Can Christmas tags include a pre-punched hole and ribbon for immediate use?", a: "Yes. Pre-punched eyelet holes with reinforcing metal grommet rings are available as a standard tag finishing option—preventing tearing during use and enabling direct ribbon, twine, and cord attachment without additional preparation. Natural jute twine pre-threading is also available as a premium finishing option for artisan and cottage industry gift tag programs targeting the premium hand-crafted market positioning." },
];

const ChristmasTags = () => {
    const [selectedImage, setSelectedImage] = useState(0);
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);
    const productImages = [
        { src: christmasTagsImg1, alt: "Christmas Tags - Main View" },
        { src: christmasTagsImg2, alt: "Christmas Tags - Gold Foil" },
        { src: christmasTagsImg3, alt: "Christmas Tags - Die-Cut Shapes" },
        { src: christmasTagsImg4, alt: "Christmas Tags - Eco Kraft" },
        { src: christmasTagsImg5, alt: "Christmas Tags - Gift Tied" },
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
                <title>Custom Christmas Tags | Festive Holiday Gift Tags | CustomPackMakers</title>
                <meta name="description" content="Custom Christmas gift tags with die-cut festive shapes, metallic gold and silver foil, eco-certified kraft stocks, and pre-punched ribbon holes. Perfect for holiday retail and gifting brands." />
                <meta name="keywords" content="christmas gift tags, custom holiday tags, festive gift tags, christmas tag printing, holiday tag wholesale" />
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
                            <BreadcrumbItem><BreadcrumbPage>Christmas Tags</BreadcrumbPage></BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </div>

            <section className="py-8 bg-background">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-7 space-y-6">
                            <div className="w-20 h-1.5 bg-primary rounded-full" />
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight"><span className="text-primary">Christmas</span> Tags</h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">Custom die-cut Christmas gift tags with metallic gold and silver foil stamping, eco-certified kraft and coated stocks, festive seasonal graphics, and pre-punched ribbon holes—the premium finishing touch that elevates every holiday gift package.</p>
                            <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300" onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}>Get a Quote</Button>
                        </div>
                        <div className="lg:col-span-5 relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-muted group">
                            <img src={christmasTagsHero} alt="Christmas Tags" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 max-w-3xl">Holiday Gift Tags That Add the Perfect Festive Touch</h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>Our <strong className="text-foreground">custom Christmas tags</strong> transform every gift package into a branded holiday experience. Available in standard rectangular, ornament, Christmas tree, star, and completely bespoke die-cut silhouettes, each tag is printed on premium coated and uncoated stocks with the full range of festive finishing options—gold and silver hot foil stamping, spot UV gloss accents, and CMYK seasonal graphic printing across red, green, white, and metallics color palettes.</p>
                        <p>Pre-punched eyelet holes with reinforcing grommet rings enable immediate ribbon, twine, and cord attachment without tearing—making our tags production-ready for high-volume gift packaging operations as well as artisanal gift wrapping programs. FSC-certified recycled kraft options provide the sustainable natural material alternative that eco-positioned holiday retail and gifting brands require. From boutique gift shops to corporate gifting programs distributing thousands of branded holiday packages, our <strong className="text-foreground">Christmas gift tags</strong> provide the premium finishing detail that completes the festive gifting experience.</p>
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
                                        <div className="grid grid-cols-2 gap-3">
                                            <div className="space-y-1.5"><Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label><Input id="width" type="number" placeholder="3" className="h-9 bg-white" /></div>
                                            <div className="space-y-1.5"><Label htmlFor="height" className="text-xs font-semibold text-muted-foreground">H (in)</Label><Input id="height" type="number" placeholder="5" className="h-9 bg-white" /></div>
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">The Complete Guide to Custom Christmas Gift Tags</h2>
                    <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="[&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-6 [&>h3]:mb-3 [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-4 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-4 [&>ul]:space-y-2 [&>ul>li]:text-[15px] [&>ul>li]:text-slate-600">
                            <p>The Christmas gift tag occupies a small but commercially significant position in the holiday packaging ecosystem. As the physical identifier of the gift-giver and recipient relationship—the piece that carries the personal message that transforms an anonymous product into a considered personal gift—the tag is the most personal element of the holiday packaging experience. For retail and gifting brands, custom Christmas tags serve the dual commercial function of personal communication vehicle and brand impression touchpoint: the final branded surface that connects brand identity with the deeply emotional experience of holiday gift-giving.</p>
                            <p>Gift tags have experienced a significant premiumization trend in the past decade—driven by the Instagram-era gifting aesthetic that places equal emphasis on the visual presentation of wrapped gifts and the tags attached to them as on the gifts themselves. The photographable quality of a beautifully presented gift package—foil-stamped tag attached with natural jute twine, premium kraft wrapping paper, and coordinated ribbon—has made custom Christmas tag design a meaningful brand impression investment for retail, e-commerce, and corporate gifting programs that understand the social media amplification value of the holiday gifting moment.</p>
                            <h3>Die-Cut Shape Options for Christmas Tags</h3>
                            <p>Shape is the most immediate visual differentiator for custom Christmas gift tags—far more immediate at gift display distance than typography or color variation. Our die-cut Christmas tag shape library provides immediate festive visual differentiation from standard rectangular alternatives.</p>
                            <ul>
                                <li><strong>Standard Rectangular with Rounded Corners:</strong> The classic gift tag format in sizes from 2×3 inches through 4×6 inches—providing maximum printable surface area for brand messaging, personalization text, and holistic festive graphic design within a universally familiar format.</li>
                                <li><strong>Christmas Tree Silhouette:</strong> A triangular graduated silhouette that immediately communicates the Christmas season through form alone—available with star apex detail die-cutting and internal negative space graphic elements that create a visually complex festive impression.</li>
                                <li><strong>Ornament Shape:</strong> Circular or teardrop ornament silhouette with top cap die-cut detail—referencing the Christmas tree ornament aesthetic in a tag format that resonates immediately with the seasonal holiday gifting occasion and photographs beautifully when attached to wrapped gifts.</li>
                                <li><strong>Snowflake Die-Cut:</strong> Intricate snowflake silhouette die-cuts for ultra-premium artisan and luxury brand tag programs where the structural die-cutting itself communicates the premium craftsmanship investment that positions the brand at the upper tier of the festive gift tag market.</li>
                                <li><strong>Fully Custom Bespoke Silhouettes:</strong> Brand-specific die-cut shape development with one-time tooling investment—enabling brands to create an ownable signature Christmas tag form that is uniquely recognizable and protectable as brand intellectual property across seasonal packaging programs.</li>
                            </ul>
                            <h3>Premium Festive Finishing Techniques</h3>
                            <ul>
                                <li><strong>Gold and Silver Foil Stamping:</strong> Hot foil application in 24-carat gold, silver, copper, and holographic finishes delivers the metallic gleam that signals premium quality at the gift display—applied to typography, border frames, snowflake accents, and brand marks.</li>
                                <li><strong>Embossed Relief Detailing:</strong> Raised surface embossing of snowflake patterns, typography, and decorative elements adds the tactile premium dimension that differentiates luxury Christmas tags from flat-printed commodity alternatives.</li>
                                <li><strong>Spot UV Gloss Accents:</strong> Selective high-gloss coating applied over matte background printing creates the striking contrast that catches ambient holiday lighting and draws attention to specific tag design elements.</li>
                            </ul>
                            <h3>Eco-Friendly and Sustainable Tag Materials</h3>
                            <p>Sustainability in holiday packaging is increasingly a commercial requirement rather than an optional brand value signal—particularly among the premium confectionery, luxury gifting, and artisan craft brand segments where environmentally conscious consumer demographics are most concentrated.</p>
                            <ul>
                                <li><strong>FSC-Certified Recycled Kraft:</strong> Natural brown recycled kraft stock with FSC chain-of-custody certification—providing the artisan aesthetic, tactile texture, and verifiable sustainable sourcing credentials that eco-positioned holiday gifting brands require.</li>
                                <li><strong>Uncoated Natural White Stock:</strong> Uncoated substrate preserves ink porosity and provides the matte natural visual quality that luxury minimal aesthetic brand positions require—particularly popular in Scandinavian-inspired holiday gift presentation trends.</li>
                                <li><strong>Compostable and Biodegradable Substrates:</strong> Fully compostable tag stocks derived from agricultural waste fibers are available for brands seeking to eliminate all petroleum-derived packaging components from their holiday product range.</li>
                            </ul>
                            <h3>Why CustomPackMakers for Christmas Gift Tags</h3>
                            <p>Our Christmas tag design and production team supports brands from initial shape and format selection through die-line development, artwork setup, proofing, and delivery—ensuring that every tag in your holiday packaging program meets the quality, aesthetic consistency, and production deadline requirements that seasonal gifting success demands. Contact us today for a complimentary Christmas tag consultation and quote.</p>
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
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Foil-stamped shapes, eco kraft stocks, and pre-punched grommet holes for premium Christmas gift tags.</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">
                        <div className="space-y-5">
                            {[
                                { title: "Die-Cut Festive Shapes", body: "Ornament, Christmas tree, star, snowflake, and fully bespoke silhouette die-cuts communicate the festive occasion through tag form alone—differentiating your holiday gift tags from standard rectangular alternatives and creating the photographable premium presentation that drives social media gifting visibility across the holiday season." },
                                { title: "Metallic Foil Excellence", body: "Gold, silver, copper, and holographic foil stamping elevates Christmas tags to gift-worthy premium accessories—applied to typography, decorative borders, and festive motifs with the precision that luxury retail and corporate gifting programs demand from every branded holiday touchpoint." },
                                { title: "Sustainable Eco Materials", body: "FSC-certified recycled kraft, soy-based inks, and compostable substrate options meet the sustainability credential requirements of eco-conscious premium gifting brands—providing verifiable responsible sourcing credentials that resonate with the environmentally aware consumer demographics most concentrated in the premium holiday retail segment." },
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
                                <img src={christmasTagsImg6} alt="Christmas gift tags" className="w-full h-full object-cover" />
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
                                <img src={christmasTagsImg7} alt="Differentiate Your Christmas Tags" className="w-full h-full object-cover" />
                            </div>
                        </div>
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">Differentiate Your <span className="text-primary">Christmas Tags</span> From Others</h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">In the social-media-driven gifting culture that defines modern Christmas, the tag is the photographed detail that completes the premium gift presentation. Our custom Christmas tags pair die-cut festive silhouettes, metallic foil stamping, and eco-certified sustainable stocks—creating gift tags that elevate every holiday package into the premium unboxing aesthetic that recipients share, brands value, and gifting programs depend on to differentiate their holiday product presentation from commodity seasonal alternatives.</p>
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
                            <img src={FAQimage} alt="Christmas Tags FAQ" className="absolute inset-0 w-full h-full object-cover" />
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

export default ChristmasTags;
