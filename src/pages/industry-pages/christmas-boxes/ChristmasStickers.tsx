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

import productHero from "@/assets/christmas-products/christmas-stickers.webp";
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
import christmasFavorBoxes from "@/assets/christmas-products/christmas-favor-boxes.webp";
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
    { name: "Christmas Favor Boxes", image: christmasFavorBoxes, link: "/industries/christmas-boxes/christmas-favor-boxes", desc: "Party favor packaging with seasonal motifs." },
    { name: "Custom Advent Calendar Boxes", image: adventCalendarBoxes, link: "/industries/christmas-boxes/custom-advent-calendar-boxes", desc: "24-compartment countdown packaging." },
];

const faqs = [
    { id: "item-1", q: "What materials are available for Christmas stickers and labels?", a: "Christmas stickers are available on white paper, kraft paper, holographic silver, gloss white vinyl, matte white vinyl, and transparent clear vinyl substrates—with adhesive options for permanent, removable, and freezer-grade food-safe applications. White paper and kraft paper stickers suit label and tag applications on dry surfaces. Gloss and matte vinyl stickers provide superior durability for outdoor, moisture-exposed, and reusable surface applications. Clear transparent vinyl stickers are ideal for glass and packaging surface label applications where the underlying surface should show through the label for a premium no-label-look effect." },
    { id: "item-2", q: "What die-cut shapes are available for custom Christmas stickers?", a: "Standard Christmas sticker die-cut shapes include circles, ovals, rectangles, squares, rounded rectangles, stars, snowflakes, holly leaf outlines, Christmas tree silhouettes, and stocking shapes—available in standard size options from 1 inch through 5 inch maximum dimension. Custom contour die-cutting matches the sticker outline precisely to your Christmas character or product illustration—creating organic, illustration-following shapes that eliminate the visible rectangular white sticker border and create the premium floating graphic impression that premium seasonal brand identity sticker programs require." },
    { id: "item-3", q: "What minimum order quantities apply to custom Christmas stickers?", a: "Custom Christmas sticker sheets start at 50 sheets per design—enabling small seasonal gifting and retail programs access to fully custom-printed sticker sheet products. Individual contour-cut sticker labels start at 250 pieces per design for standard vinyl and paper substrates. Specialty substrate stickers (holographic, kraft, clear) have 500 piece minimum orders per design. Multiple-design combined orders counting toward a single total minimum order quantity are available for seasonal sticker collections requiring 3–6 design variants across a unified festive graphic program." },
    { id: "item-4", q: "Can Christmas stickers be produced with gold or silver metallic finish?", a: "Yes. Christmas stickers are available on holographic silver and gold metallic vinyl substrates with full-color printing for festive metallic label and sticker applications—particularly effective for premium gift seals, bottle labels, favor box seals, and branded seasonal identity stickers where the metallic reflective base material creates the decorative premium impression appropriate to luxury Christmas gifting occasions. Metallic foil applied finish is also available on paper and vinyl sticker substrates through digital foil printing technology for selected metallic element highlights on specific graphic elements within a full-color sticker design." },
    { id: "item-5", q: "Are eco-friendly options available for Christmas stickers?", a: "Yes. FSC-certified recycled kraft paper Christmas stickers with soy-based ink printing and compostable adhesive systems provide the most sustainably complete sticker option for eco-positioned seasonal brand programs. Biodegradable paper substrates with water-based inks and natural plant-based adhesives are available for certified home-compostable Christmas sticker programs. Clear compostable PLA film sticker substrates with compostable adhesives provide the transparent label option for eco-packaging programs requiring a see-through label format without any non-compostable component content." },
];

const ChristmasStickers = () => {
    const [selectedImage, setSelectedImage] = useState(0);
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);
    const productImages = [
        { src: productHero, alt: "Christmas Stickers - Main View" },
        { src: productHero, alt: "Christmas Stickers - Holographic Silver" },
        { src: productHero, alt: "Christmas Stickers - Contour Cut" },
        { src: productHero, alt: "Christmas Stickers - Kraft Paper" },
        { src: productHero, alt: "Christmas Stickers - Sheet Format" },
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
                <title>Custom Christmas Stickers | Festive Holiday Labels & Stickers | CustomPackMakers</title>
                <meta name="description" content="Custom Christmas stickers and labels in die-cut festive shapes, holographic finishes, vinyl and kraft paper substrates. Perfect for holiday branding, gift seals, packaging labels, and seasonal decorative stickers." />
                <meta name="keywords" content="christmas stickers, holiday stickers, custom christmas stickers, festive labels, christmas labels, holiday brand stickers, christmas gift seals" />
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
                            <BreadcrumbItem><BreadcrumbPage>Christmas Stickers</BreadcrumbPage></BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </div>

            <section className="py-8 bg-background">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-7 space-y-6">
                            <div className="w-20 h-1.5 bg-primary rounded-full" />
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight"><span className="text-primary">Christmas</span> Stickers</h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">Custom Christmas stickers and labels in die-cut festive shapes, holographic silver and gold finishes, vinyl and kraft paper substrates—delivering the premium seasonal brand identity touch that holiday packaging, gift seals, product labels, and event stationery require across the Christmas season.</p>
                            <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300" onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}>Get a Quote</Button>
                        </div>
                        <div className="lg:col-span-5 relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-muted group">
                            <img src={productHero} alt="Christmas Stickers" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 max-w-3xl">Festive Seasonal Stickers That Add the Premium Holiday Branding Touch to Every Christmas Occasion</h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>Our <strong className="text-foreground">custom Christmas stickers</strong> serve the versatile seasonal brand identity function that no other packaging format matches for scale, cost efficiency, and application breadth—from gift seal closures on holiday packages and product labels on seasonal retail items through event stationery embellishments, favor packaging accents, holiday card seals, and direct-to-consumer subscription box seasonal identity touches. Available on white paper, kraft paper, holographic metallic, gloss vinyl, matte vinyl, and clear transparent film substrates with permanent and removable adhesive options, Christmas stickers adapt to virtually any seasonal application where festive brand identity is required.</p>
                        <p>Custom contour die-cutting that follows the precise outline of Christmas character illustrations, snowflake geometry, botanical holly and berry compositions, and abstract seasonal forms creates the premium floating graphic impression that rectangular border stickers cannot achieve—elevating the perceived quality of the sticker identity element on every surface it is applied to. Holographic silver and gold metallic substrates with full-color printing create the light-catching, colour-shifting festive impression that premium seasonal brand identity programs require from gift seals and premium packaging label applications—while FSC-certified kraft and compostable paper sticker options serve the sustainably positioned Christmas gifting and packaging programs that eco-brand values require.</p>
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
                                            <div className="space-y-1.5"><Label htmlFor="length" className="text-xs font-semibold text-muted-foreground">Width (in)</Label><Input id="length" type="number" placeholder="3" className="h-9 bg-white" /></div>
                                            <div className="space-y-1.5"><Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">Height (in)</Label><Input id="width" type="number" placeholder="3" className="h-9 bg-white" /></div>
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">The Complete Guide to Custom Christmas Sticker and Label Programs</h2>
                    <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="[&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-6 [&>h3]:mb-3 [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-4 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-4 [&>ul]:space-y-2 [&>ul>li]:text-[15px] [&>ul>li]:text-slate-600">
                            <p>Custom Christmas stickers occupy a uniquely versatile position in the seasonal brand identity ecosystem—functioning simultaneously as product labels, gift seals, packaging closure elements, promotional giveaway items, event stationery embellishments, subscription box identity touches, and direct-application decorative seasonal brand expression tools. No other seasonal identity format matches the cost efficiency, application breadth, and instant festive brand impression capability of a well-designed Christmas sticker program—making seasonal sticker production one of the highest-return investment categories available to brands managing a comprehensive Christmas identity program across multiple consumer touchpoints simultaneously.</p>
                            <p>The design sophistication of Christmas sticker programs has elevated significantly as digital printing technology has democratized access to full-color custom sticker production at volumes appropriate to small-business seasonal programs. Contemporary Christmas sticker design draws from illustration traditions—Scandinavian folk art, watercolor botanical, geometric minimalism, vintage Victorian Christmas lithography, and contemporary character illustration—to create seasonal sticker identities that communicate brand values, aesthetic positioning, and the specific festive emotion that each brand's Christmas identity seeks to convey to its seasonal consumer audience.</p>
                            <h3>Christmas Sticker Substrate Options</h3>
                            <ul>
                                <li><strong>White Paper Stickers:</strong> Standard premium white paper substrate is the most cost-effective and most broadly applicable Christmas sticker material option—providing a brilliant white base for full-color CMYK seasonal illustration printing on paper, cardboard, and dry surface applications where long-term durability and moisture resistance are not primary requirements.</li>
                                <li><strong>Kraft Paper Stickers:</strong> Natural unbleached kraft paper substrate creates the warm, artisan aesthetic that accompanies natural and organic Christmas gifting brand positioning—the slightly warm-toned background complementing earth-tone seasonal color palettes and providing the material texture contrast that distinguishes kraft sticker applications on premium packaging from the generic bright-white label aesthetic of standard paper stickers.</li>
                                <li><strong>Holographic Silver and Gold Vinyl:</strong> Metallic holographic vinyl substrates with full-color topcoat printing create the light-catching, color-shifting festive impression that premium gift seal, product label, and premium seasonal identity sticker applications require—delivering a distinctly premium visual quality standard that no paper substrate alternative can replicate in seasonal brand identity elevation terms.</li>
                                <li><strong>Clear Transparent Vinyl:</strong> Transparent vinyl sticker substrate with full-color printing and no visible white border creates the premium no-label-look effect on glass jars, bottles, and transparent packaging surfaces—enabling the underlying substrate texture, color, or product to show through the sticker label, contributing to the overall aesthetic composition rather than interrupting it with an opaque white background.</li>
                                <li><strong>Compostable PLA Film:</strong> Clear compostable PLA film substrate with compostable adhesive provides the fully biodegradable transparent sticker option for eco-positioned Christmas packaging programs requiring verified compostable material credentials across every packaging component including sticker and label elements.</li>
                            </ul>
                            <h3>Christmas Sticker Application Formats</h3>
                            <ul>
                                <li><strong>Gift Seal Stickers:</strong> Premium circular and ornate shaped gift seal stickers in embossed wax-texture-print and metallic foil finishes provide the digital-era equivalent of the traditional wax seal—applied to flap closures of Christmas cards, mailers, gift boxes, bags, and tissue paper bundles to create a formal, premium closure that communicates seasonal occasion gravitas.</li>
                                <li><strong>Product Label Stickers:</strong> Custom printed product label programs in seasonal Christmas design for seasonal edition packaging—limited edition Christmas product variations from standard-format retail products use seasonal sticker labels applied over or alongside standard year-round labeling to signal the seasonal special edition identity without requiring separate seasonal packaging production.</li>
                                <li><strong>Sticker Sheet Collections:</strong> Seasonal sticker sheet collections containing multiple Christmas character, motif, and pattern designs on a single sheet provide the decorative sticker product format for retail seasonal gifting, subscription box content, and event stationery programs where a variety of seasonal design options on a single product provides the greatest consumer decorative flexibility.</li>
                            </ul>
                            <h3>Why CustomPackMakers for Christmas Stickers</h3>
                            <p>Our Christmas sticker and label team offers the full range of substrate, die-cut, and finishing options to deliver festive seasonal brand identity stickers that perform beautifully across every application your Christmas program requires—from premium gift seals through product labels, subscription box identity stickers, event stationery embellishments, and promotional giveaway sticker designs. Contact us for a Christmas sticker program quote and sample today.</p>
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
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Holographic finishes, contour die-cutting, and eco substrates for premium Christmas sticker programs.</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">
                        <div className="space-y-5">
                            {[
                                { title: "Custom Contour Die-Cutting", body: "Contour die-cutting that follows the precise outline of Christmas characters, snowflake geometry, and seasonal botanical compositions eliminates the visible rectangular sticker border—creating the premium floating graphic impression that positions custom Christmas sticker identity above commodity seasonal label alternatives and communicates design craftsmanship through the sticker shape itself as a brand quality signal." },
                                { title: "Holographic Metallic Substrates", body: "Silver and gold holographic vinyl substrates with full-color topcoat printing create the light-catching, color-shifting seasonal impression that premium gift seal, specialty label, and brand identity sticker applications require—delivering the festive metallic visual quality that premium Christmas packaging programs and luxury seasonal product lines need to communicate the quality tier positioning that holographic material perception naturally conveys." },
                                { title: "Compostable & FSC Eco Stickers", body: "FSC-certified kraft paper and compostable PLA film Christmas sticker substrates with soy-based inks and plant-based adhesives provide the fully sustainable material option for eco-positioned seasonal brand programs—meeting the compostable and responsibly sourced material credentials that environmentally committed Christmas gifting and packaging brands require from every identity and label element in their seasonal packaging specification." },
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
                                <img src={productHero} alt="Christmas stickers" className="w-full h-full object-cover" />
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
                                <img src={productHero} alt="Differentiate Your Christmas Stickers" className="w-full h-full object-cover" />
                            </div>
                        </div>
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">Differentiate Your <span className="text-primary">Christmas Brand Identity</span> With Stickers</h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">In the seasonal brand identity landscape, a premium custom Christmas sticker program delivers the highest-impression-per-dollar brand identity investment available to seasonal packaging programs—amplifying brand presence across gift packaging, product labels, subscription boxes, stationery, event materials, and direct-to-consumer seasonal communications simultaneously. Our Christmas stickers combine custom contour die-cutting, holographic metallic substrate options, FSC-certified eco materials, and full-color festive illustration printing—creating the seasonal brand touchpoints that Christmas consumers notice, appreciate, and associate with the premium quality and festive character that defines your holiday brand identity across every seasonal interaction.</p>
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
                            <img src={FAQimage} alt="Christmas Stickers FAQ" className="absolute inset-0 w-full h-full object-cover" />
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

export default ChristmasStickers;
