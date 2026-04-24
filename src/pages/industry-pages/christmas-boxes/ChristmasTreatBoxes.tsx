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

import christmasTreatBoxesHero from "@/assets/christmas-products/christmas-treat-boxes/img-hero.webp";
import christmasTreatBoxesImg1 from "@/assets/christmas-products/christmas-treat-boxes/img-1.webp";
import christmasTreatBoxesImg2 from "@/assets/christmas-products/christmas-treat-boxes/img-2.webp";
import christmasTreatBoxesImg3 from "@/assets/christmas-products/christmas-treat-boxes/img-3.webp";
import christmasTreatBoxesImg4 from "@/assets/christmas-products/christmas-treat-boxes/img-4.webp";
import christmasTreatBoxesImg5 from "@/assets/christmas-products/christmas-treat-boxes/img-5.webp";
import christmasTreatBoxesImg6 from "@/assets/christmas-products/christmas-treat-boxes/img-whychoose.webp";
import christmasTreatBoxesImg7 from "@/assets/christmas-products/christmas-treat-boxes/img-different.webp";
import FAQimage from "@/assets/FAQ-image.webp";
import christmasChocolateBoxes from "@/assets/christmas-products/christmas-chocolate-boxes.webp";
import christmasTags from "@/assets/christmas-products/christmas-tags.webp";
import christmasGableBoxes from "@/assets/christmas-products/christmas-gable-boxes.webp";
import christmasCupcakeBoxes from "@/assets/christmas-products/christmas-cupcake-boxes.webp";
import christmasCandyBoxes from "@/assets/christmas-products/christmas-candy-boxes.webp";
import christmasGiftBoxes from "@/assets/christmas-products/christmas-gift-boxes.webp";
import christmasEveBoxes from "@/assets/christmas-products/christmas-eve-boxes.webp";
import christmasPaperBags from "@/assets/christmas-products/christmas-paper-bags.webp";
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
    { name: "Christmas Paper Bags", image: christmasPaperBags, link: "/industries/christmas-boxes/christmas-paper-bags", desc: "Reinforced holiday shopping bags." },
    { name: "Christmas Gift Bags", image: christmasGiftBags, link: "/industries/christmas-boxes/christmas-gift-bags", desc: "Premium gift bags with festive designs." },
    { name: "Christmas Favor Boxes", image: christmasFavorBoxes, link: "/industries/christmas-boxes/christmas-favor-boxes", desc: "Party favor packaging with seasonal motifs." },
    { name: "Christmas Stickers", image: christmasStickers, link: "/industries/christmas-boxes/christmas-stickers", desc: "Festive labels and stickers for holiday branding." },
    { name: "Custom Advent Calendar Boxes", image: adventCalendarBoxes, link: "/industries/christmas-boxes/custom-advent-calendar-boxes", desc: "24-compartment countdown packaging." },
];

const faqs = [
    { id: "item-1", q: "What sizes of Christmas treat boxes are available for different treat quantities?", a: "We offer Christmas treat boxes in mini (3×3×2 inch for 2–4 treats), small (5×3×2.5 inch for a single row assortment), medium (7×5×3 inch for standard cookie or brownie collection), large (10×7×4 inch for full treat platters), and custom dimensions for specific treat configurations. Each size category accommodates different treat-to-box volume relationships—preventing excessive headspace that allows treat movement while maintaining comfortable interior clearance above treat height for stacking and transport safety." },
    { id: "item-2", q: "What seasonal lead times apply to Christmas treat box orders?", a: "For custom-printed Christmas treat boxes, order by October 15th for standard 8–10 business day production before the November holiday retail season launch. November orders require 12–15 business day lead time as festive food packaging production reaches seasonal peak demand. Treat box programs for holiday market stalls, corporate treat gifting, and subscription box programs with December delivery dates should confirm orders by November 1st to guarantee production slots and reliable pre-Christmas delivery scheduling." },
    { id: "item-3", q: "Can Christmas treat boxes include clear windows to display seasonal cookies and confections?", a: "Yes. PET and compostable PLA clear window panels are available in full-lid, partial aperture, and full-front face window configurations—displaying seasonal cookie decorations, colorful confection arrangements, and festive treat presentations without opening the box. Window treat boxes are the optimal retail format for seasonal artisan bakery and confectionery programs where the visual quality of the treat display is a primary point-of-sale sales driver for the holiday impulse and gift purchase consumer segments." },
    { id: "item-4", q: "Are eco-friendly materials available for Christmas treat boxes?", a: "Yes. FSC-certified recycled kraft treat boxes with soy-based ink printing provide the sustainable material option for environmentally positioned holiday treat brands. Kraft Christmas treat boxes have a natural artisan aesthetic that complements organic, naturally sweetened, and handmade seasonal confection products—while FSC certification provides the responsible sourcing credentials that eco-aware holiday treat consumers and ethical gifting program purchasers increasingly require as a non-negotiable selection criterion from premium seasonal treat packaging vendors." },
    { id: "item-5", q: "What festive printing techniques are available for Christmas treat boxes?", a: "Full-color CMYK offset and digital printing of Christmas cookie character graphics, seasonal watercolor patterns, Nordic folk art illustrations, and premium abstract geometric winter designs are all available for Christmas treat box exterior surfaces. Gold and silver foil stamping on brand logos, border elements, and seasonal motifs communicates premium quality. Spot UV gloss highlights on specific graphic elements—snowflakes, star shapes, cookie illustrations—create premium surface texture contrast against matte or soft-touch laminate base coatings." },
];

const ChristmasTreatBoxes = () => {
    const [selectedImage, setSelectedImage] = useState(0);
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);
    const productImages = [
        { src: christmasTreatBoxesImg1, alt: "Christmas Treat Boxes - Main View" },
        { src: christmasTreatBoxesImg2, alt: "Christmas Treat Boxes - Window Panel" },
        { src: christmasTreatBoxesImg3, alt: "Christmas Treat Boxes - Foil Border" },
        { src: christmasTreatBoxesImg4, alt: "Christmas Treat Boxes - Kraft Eco" },
        { src: christmasTreatBoxesImg5, alt: "Christmas Treat Boxes - Cookie Display" },
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
                <title>Custom Christmas Treat Boxes | Festive Holiday Treat Packaging | CustomPackMakers</title>
                <meta name="description" content="Custom Christmas treat boxes with clear display windows, metallic foil borders, eco-friendly kraft options, and vibrant seasonal graphics. Perfect for holiday cookies, confections, and seasonal bakery treats." />
                <meta name="keywords" content="christmas treat boxes, holiday treat packaging, festive treat boxes, custom christmas treat boxes, christmas cookie boxes, holiday treat box wholesale" />
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
                            <BreadcrumbItem><BreadcrumbPage>Christmas Treat Boxes</BreadcrumbPage></BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </div>

            <section className="py-8 bg-background">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-7 space-y-6">
                            <div className="w-20 h-1.5 bg-primary rounded-full" />
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight"><span className="text-primary">Christmas</span> Treat Boxes</h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">Charming Christmas treat boxes with clear display windows, metallic foil border accents, festive seasonal graphics, and eco-certified kraft options—showcasing your holiday cookies, confections, and seasonal sweets with the premium presentation quality that artisan treat brands and holiday gifting programs demand.</p>
                            <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300" onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}>Get a Quote</Button>
                        </div>
                        <div className="lg:col-span-5 relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-muted group">
                            <img src={christmasTreatBoxesHero} alt="Christmas Treat Boxes" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 max-w-3xl">Festive Treat Packaging That Presents Your Holiday Confections at Their Best</h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>Our <strong className="text-foreground">custom Christmas treat boxes</strong> are purpose-engineered for the holiday artisan bakery, confectionery gifting, and seasonal treat subscription market—combining protective structural containment with premium display presentation capabilities that showcase the visual quality of seasonal cookies, brownies, confections, and mixed treat assortments as compellingly as possible at retail and gifting point of presentation. Clear window panel options in full-lid, partial aperture, and front-face formats enable treat color, decoration, and variety to function as a primary sales driver without packaging removal.</p>
                        <p>Full-color seasonal graphic printing in Christmas cookie character designs, Scandinavian folk patterns, watercolor winter botanicals, and abstract geometric holiday motifs transforms treat box exteriors into festive brand identity surfaces—complemented by metallic foil border stamping, spot UV gloss treat illustration highlights, and soft-touch matte lamination on premium treat line packaging. FSC-certified kraft options with soy-based ink printing serve the sustainably positioned artisan treat brand aesthetic while maintaining the natural material warmth that handcrafted holiday confection packaging should communicate.</p>
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
                                            <div className="space-y-1.5"><Label htmlFor="length" className="text-xs font-semibold text-muted-foreground">L (in)</Label><Input id="length" type="number" placeholder="7" className="h-9 bg-white" /></div>
                                            <div className="space-y-1.5"><Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label><Input id="width" type="number" placeholder="5" className="h-9 bg-white" /></div>
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">The Complete Guide to Christmas Treat Box Packaging</h2>
                    <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="[&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-6 [&>h3]:mb-3 [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-4 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-4 [&>ul]:space-y-2 [&>ul>li]:text-[15px] [&>ul>li]:text-slate-600">
                            <p>Christmas treat boxes serve one of the most emotionally resonant packaging functions in the holiday confectionery calendar—presenting the seasonal cookies, brownies, fudge, candied nuts, chocolate bark, and mixed confection assortments that define domestic holiday treat culture as both personal indulgences and thoughtful casual gifting items throughout the Christmas season. For artisan bakers, seasonal confectionery brands, holiday market vendors, and corporate treat gifting programs, the Christmas treat box must accomplish dual merchandising objectives simultaneously: protecting the treat quality through retail display and gifting transit conditions while presenting the seasonal confections as visually premium enough to justify artisan pricing and gift-worthy enough to satisfy seasonal casual gifting needs.</p>
                            <p>The commercial value of Christmas treat box aesthetics is measurable and significant. Studies of seasonal confectionery retail consistently show that window-panel treat boxes demonstrating the product inside achieve significantly higher sell-through rates than opaque boxes at equivalent retail price points—because the treat visual quality functions as a real-time product quality signal that communicates what no exterior graphic can replace: the actual appearance of the product the consumer will receive. This insight shapes the most commercially successful Christmas treat box design programs, which treat the window as the primary packaging feature and organize exterior graphic design around enhancing and framing the treat visual display rather than competing with it for consumer attention.</p>
                            <h3>Christmas Treat Box Formats and Structures</h3>
                            <ul>
                                <li><strong>Window-Lid Treat Boxes:</strong> Clear window lid panel over a deep-sided base with food-safe interior coating—the optimal treat display format for flat cookie, brownie, and bark assortments where a top-view window presents the full treat collection in one visual sweep from a single front-of-shelf viewing angle.</li>
                                <li><strong>Window-Front Treat Boxes:</strong> Clear front face panel on a horizontal-orientation treat display box—ideal for standing upright treat bars, chocolate-dipped items, and tall confection pieces that present more compellingly in a vertical or profile view rather than a flat top-view window configuration.</li>
                                <li><strong>Kraft Tuck-End Treat Boxes:</strong> Natural kraft tuck-end folding carton with minimal or natural-color-only graphic printing—the artisan bakery and organic confectionery treat box format that prioritizes natural material aesthetic and sustainable sourcing values over premium print finishing in the positioning of handcrafted seasonal treats.</li>
                                <li><strong>Pillow Treat Boxes:</strong> Curved shoulder pillow format die-cut treat packaging for individual cookies, chocolate truffles, and single-serve seasonal treat items—providing a charming, giftable packaging format at minimal material cost and compact footprint for point-of-sale impulse treat purchase positioning.</li>
                            </ul>
                            <h3>Seasonal Printing and Finishing Options</h3>
                            <ul>
                                <li><strong>Spot UV Cookie Illustration Highlights:</strong> Glossy UV coating applied selectively to cookie, snowflake, and treat illustration graphic elements against a soft-touch matte base laminate creates a premium tactile contrast finish that draws physical and visual attention to the graphic content distinguishing your seasonal treat brand from commodity Christmas treat alternatives.</li>
                                <li><strong>Metallic Border Foiling:</strong> Gold and silver foil applied to decorative borders, panel dividers, and brand name elements frames the treat display window and overall packaging aesthetic with the festive metallic quality that positions seasonal artisan treats at the premium gifting tier above commodity holiday confectionery alternatives.</li>
                                <li><strong>Compostable Window Films:</strong> PLA-based compostable clear window film provides the treat display function of conventional PET with a compostable end-of-life disposal pathway—enabling artisan treat brands to maintain full product visibility while meeting the sustainable packaging standards that eco-conscious holiday treat consumers increasingly require.</li>
                            </ul>
                            <h3>Why CustomPackMakers for Christmas Treat Boxes</h3>
                            <p>Our Christmas treat packaging team combines food packaging engineering expertise with festive seasonal design capability—delivering treat boxes that protect product integrity, display treat quality compellingly, and communicate the premium artisan brand values that seasonal confectionery programs build Christmas consumer loyalty with. Contact us for a complimentary Christmas treat box sample and quote today.</p>
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
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Clear display windows, foil borders, and eco kraft options for premium Christmas treat packaging.</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">
                        <div className="space-y-5">
                            {[
                                { title: "Clear Display Windows That Sell", body: "Full-lid, front-face, and partial aperture PET and compostable PLA window options display the visual quality of your Christmas treats as a real-time product quality signal—achieving higher sell-through rates than opaque packaging by communicating the treat color, decoration, and variety that drives impulse and gift purchase decisions at holiday retail point of sale." },
                                { title: "Metallic Foil Border Accents", body: "Gold and silver hot foil stamping on decorative borders, brand logo marks, and seasonal motif elements frames the treat display window with the festive metallic quality that positions artisan Christmas confections at the premium gifting tier—creating a sophisticated seasonal aesthetic that communicates craft quality and justifies artisan price positioning in the holiday treat market." },
                                { title: "FSC Kraft Eco Treat Packaging", body: "FSC-certified natural kraft treat boxes with soy-based ink printing serve the sustainably positioned artisan seasonal bakery and confectionery brands—providing the natural, handcrafted material aesthetic that organic and craft treat products require while delivering the third-party verified responsible sourcing credentials that eco-aware holiday treat consumers expect from premium seasonal packaging." },
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
                                <img src={christmasTreatBoxesImg6} alt="Christmas treat boxes" className="w-full h-full object-cover" />
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
                                <img src={christmasTreatBoxesImg7} alt="Differentiate Your Christmas Treat Boxes" className="w-full h-full object-cover" />
                            </div>
                        </div>
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">Differentiate Your <span className="text-primary">Christmas Treats</span> From Others</h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">In the seasonal artisan treat market, packaging that displays, protects, and presents your holiday confections with premium visual quality is the decisive differentiator between brands that command artisan pricing and those competing in the commodity holiday treat segment. Our Christmas treat boxes combine clear display windows that showcase your product quality, metallic foil border accents that communicate premium positioning, festive seasonal graphic printing, and eco-certified kraft options—delivering the complete treat packaging system that holiday artisan bakery, confectionery gifting, and seasonal treat subscription brands depend on to succeed commercially throughout the Christmas season.</p>
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
                            <img src={FAQimage} alt="Christmas Treat Boxes FAQ" className="absolute inset-0 w-full h-full object-cover" />
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

export default ChristmasTreatBoxes;
