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

import productHero from "@/assets/chocolate-products/chocolate-gift-boxes.webp";
import FAQimage from "@/assets/FAQ-image.png";
import artisanChocolateBox from "@/assets/chocolate-products/Artisan Chocolate Box.webp";
import chocolateMilkBoxes from "@/assets/chocolate-products/chocolate-milk-boxes.webp";
import chocolateCandyBoxes from "@/assets/chocolate-products/chocolate-candy-boxes.webp";
import luxuryChocolateBoxes from "@/assets/chocolate-products/luxury-chocolate-boxes.webp";
import chocolateBombBoxes from "@/assets/chocolate-products/chocolate-bomb-boxes.webp";
import christmasChocolateBoxes from "@/assets/chocolate-products/christmas-chocolate-boxes.webp";
import mushroomChocolateBarPackaging from "@/assets/chocolate-products/Mushroom Chocolate Bar Packaging.webp";
import chocolateBarPackaging from "@/assets/chocolate-products/Chocolate Bar Packaging.webp";
import chocolateSubscriptionBox from "@/assets/chocolate-products/chocolate-subscription-box.webp";

const carouselProducts = [
    { name: "Artisan Chocolate Box", image: artisanChocolateBox, link: "/industries/chocolate-boxes/artisan-chocolate-box", desc: "Handcrafted boxes with food-grade inserts and gold foiling." },
    { name: "Chocolate Milk Boxes", image: chocolateMilkBoxes, link: "/industries/chocolate-boxes/chocolate-milk-boxes", desc: "Moisture-resistant dairy packaging with vibrant graphics." },
    { name: "Chocolate Candy Boxes", image: chocolateCandyBoxes, link: "/industries/chocolate-boxes/chocolate-candy-boxes", desc: "Vibrant candy boxes with PET window displays." },
    { name: "Luxury Chocolate Boxes", image: luxuryChocolateBoxes, link: "/industries/chocolate-boxes/luxury-chocolate-boxes", desc: "Premium rigid board boxes with foil-stamping finishes." },
    { name: "Chocolate Bomb Boxes", image: chocolateBombBoxes, link: "/industries/chocolate-boxes/chocolate-bomb-boxes", desc: "Secure cradle packaging for hot chocolate bombs." },
    { name: "Christmas Chocolate Boxes", image: christmasChocolateBoxes, link: "/industries/chocolate-boxes/christmas-chocolate-boxes", desc: "Festive holiday-themed chocolate packaging." },
    { name: "Mushroom Chocolate Bar Packaging", image: mushroomChocolateBarPackaging, link: "/industries/chocolate-boxes/mushroom-chocolate-bar-packaging", desc: "Unique packaging for mushroom-infused chocolates." },
    { name: "Chocolate Bar Packaging", image: chocolateBarPackaging, link: "/industries/chocolate-boxes/chocolate-bar-packaging", desc: "Airtight protection and high-fidelity chocolate bar boxes." },
    { name: "Chocolate Subscription Box", image: chocolateSubscriptionBox, link: "/industries/chocolate-boxes/chocolate-subscription-box", desc: "Recurring monthly subscription box packaging solutions." },
];

const faqs = [
    { id: "item-1", q: "What closure options are available for chocolate gift boxes?", a: "We offer magnetic ribbon closures, satin bow channels, traditional tuck-closure lids, and slide-drawer formats—each providing a distinct gifting aesthetic and closure experience, from the ceremonial magnetic reveal to the casual accessibility of a slide-out drawer format." },
    { id: "item-2", q: "Can you personalize chocolate gift boxes with custom messaging?", a: "Yes. We offer personalization printing on interior lid panels, insert cards, and belly bands—enabling branded corporate gifting messages, seasonal greetings, and personal dedication notes to be integrated into the packaging structure at production scale." },
    { id: "item-3", q: "Do you offer corporate chocolate gift box programs?", a: "Absolutely. We offer corporate gifting programs including branded exterior printing, custom interior messaging, multiple recipient delivery coordination, and tiered volume pricing—designed for businesses sending branded chocolate gifts to clients, partners, and employee recognition recipients." },
    { id: "item-4", q: "Are food-safe inserts available for diverse chocolate gift assortments?", a: "Yes. Configurable insert trays in cardboard, PET, and velvet-flocked formats accommodate chocolate assortments of varying sizes and formats within a single gift box—holding truffles, bars, bonbons, and specialty pieces in individually secure cavities." },
    { id: "item-5", q: "What is the minimum order for custom chocolate gift boxes?", a: "Custom chocolate gift boxes have an MOQ of 250 units for rigid format designs and 500 units for folding carton gift box configurations. Corporate gifting programs with consistent repeat orders qualify for dedicated account pricing and production priority." },
];

const ChocolateGiftBoxes = () => {
    const [selectedImage, setSelectedImage] = useState(0);
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);

    const productImages = [
        { src: productHero, alt: "Chocolate Gift Box - Main View" },
        { src: productHero, alt: "Chocolate Gift Box - Ribbon Closure" },
        { src: productHero, alt: "Chocolate Gift Box - Interior Reveal" },
        { src: productHero, alt: "Chocolate Gift Box - Corporate Set" },
        { src: productHero, alt: "Chocolate Gift Box - Lifestyle" },
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
                <title>Custom Chocolate Gift Boxes | Elegant Confection Gift Packaging | CustomPackMakers</title>
                <meta name="description" content="Premium chocolate gift boxes with magnetic ribbon closures, personalized interior panels, and elegant exterior finishes. Create unforgettable gifting moments for every occasion." />
                <meta name="keywords" content="chocolate gift boxes, custom gift packaging, chocolate gift set packaging, corporate chocolate gifts, personalized chocolate box" />
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
                            <BreadcrumbItem><BreadcrumbLink asChild><Link to="/industries/chocolate-boxes">Chocolate Boxes</Link></BreadcrumbLink></BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem><BreadcrumbPage>Chocolate Gift Boxes</BreadcrumbPage></BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </div>

            <section className="py-8 bg-background">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-7 space-y-6">
                            <div className="w-20 h-1.5 bg-primary rounded-full" />
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight"><span className="text-primary">Custom</span> Chocolate Gift Boxes</h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">Elegant gift-ready chocolate packaging with magnetic ribbon closures, personalized interior messaging panels, and premium exterior finishes—engineered to create the ceremonial unboxing experience that transforms chocolate into the most memorable and re-gifted confectionery present for every personal and corporate occasion.</p>
                            <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300" onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}>Get a Quote</Button>
                        </div>
                        <div className="lg:col-span-5 relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-muted group">
                            <img src={productHero} alt="Custom Chocolate Gift Boxes" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 max-w-3xl">Gift Boxes That Make Every Chocolate Occasion Unforgettable</h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>Our <strong className="text-foreground">custom chocolate gift boxes</strong> are purpose-built for the gifting occasions that define confectionery brand success: birthdays, anniversaries, corporate milestones, seasonal celebrations, and every personal expression of care, celebration, or appreciation. Magnetic ribbon closures, satin bow channels, and premium lid formats convert the practical packaging requirement into a ceremonial gifting ritual that recipients experience before tasting a single chocolate piece.</p>
                        <p>Personalized interior messaging panels, custom insert cards, and brandable belly bands allow chocolatiers and corporate gifting teams to customize the interior reveal with occasion-specific messaging at production scale—without per-unit manual personalization. Combined with configurable food-safe insert trays that accommodate diverse chocolate assortments, our gift boxes provide the versatility and personalization capability that powers recurring corporate gifting programs and seasonal confectionery retail success.</p>
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
                                            <div className="space-y-1.5"><Label htmlFor="length" className="text-xs font-semibold text-muted-foreground">L (in)</Label><Input id="length" type="number" placeholder="9" className="h-9 bg-white" /></div>
                                            <div className="space-y-1.5"><Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label><Input id="width" type="number" placeholder="7" className="h-9 bg-white" /></div>
                                            <div className="space-y-1.5"><Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">D (in)</Label><Input id="depth" type="number" placeholder="3" className="h-9 bg-white" /></div>
                                        </div>
                                        <div className="space-y-1.5"><Label htmlFor="qty" className="text-xs font-semibold text-muted-foreground">Quantity</Label><Input id="qty" type="number" placeholder="250" className="h-9 bg-white" /></div>
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">The Complete Guide to Chocolate Gift Box Packaging</h2>
                    <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="[&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-6 [&>h3]:mb-3 [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-4 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-4 [&>ul]:space-y-2 [&>ul>li]:text-[15px] [&>ul>li]:text-slate-600">
                            <p>Chocolate is the world's most gifted food product—spanning birthdays, Valentine's Day, Mother's Day, Christmas, corporate gifting seasons, and countless personal appreciation occasions throughout the calendar year. This universal gifting use case creates both the greatest commercial opportunity and the most demanding packaging requirement in the confectionery category: a gift box that delivers on the emotional promise of the gifting moment while protecting product integrity throughout the logistics chain connecting giver to recipient.</p>
                            <p>The gift box is not incidental packaging in the chocolate purchasing decision—it is frequently the primary decision driver. Research from confectionery retail studies consistently shows that the quality of a chocolate gift box influences purchase decisions more strongly than the visible chocolate product itself. Consumers evaluating gift options at retail assess the box first—its structural quality, finishing elegance, closure mechanism, and overall presentation—determining whether it communicates the appropriate level of care and investment for their specific gifting occasion.</p>
                            <h3>Closure Design and Gifting Ritual</h3>
                            <p>The closure mechanism of a chocolate gift box defines the opening ritual—the sequence of physical interactions through which the recipient accesses the chocolate. Every aspect of this ritual contributes to the emotional quality of the gifting experience and the memorable quality of the brand moment.</p>
                            <ul>
                                <li><strong>Magnetic Ribbon Closure:</strong> Concealed neodymium magnets allow the lid to open with smooth, controlled resistance—the tactile signature of a premium gift that communicates deliberate engineering investment. The clean, clutter-free exterior presents beautifully with or without additional ribbon embellishment.</li>
                                <li><strong>Satin Ribbon Pull:</strong> Ribbon pulls on drawer-format chocolate boxes allow the recipient to reveal the chocolate arrangement through a smooth, directional pulling motion—creating a theatrical gift-opening sequence that cannot be replicated by any other closure format.</li>
                                <li><strong>Traditional Hinged Lid:</strong> Classic hinged lid formats with interior lid veneers create the jewelry-box opening moment—the full reveal of a chocolate arrangement framed from above—that recipients consistently describe as their most memorable gifting experience.</li>
                                <li><strong>Belly Band Seal:</strong> Printed belly bands wrapped around closed boxes serve as both a tamper-evidence indicator and a personalization canvas for occasion-specific messaging—allowing mass personalization of gift boxes at production scale without individual manual processing.</li>
                            </ul>
                            <h3>Interior Personalization at Scale</h3>
                            <p>The ability to personalize chocolate gift box interiors with occasion-specific, recipient-specific, or brand-specific messaging at production scale is one of the most commercially valuable capabilities we offer—enabling corporate gifting programs and seasonal confectionery brands to deliver personally meaningful gift experiences at volumes that would be logistically impossible through manual personalization approaches.</p>
                            <ul>
                                <li><strong>Inner Lid Panel Printing:</strong> The inner surface of a magnetic lid or hinged box cover provides a high-impact personalization zone—a positioned print area that the recipient reads immediately upon opening, before engaging with the chocolate arrangement. Corporate messages, brand stories, occasion greetings, and personal dedications all work effectively in this format.</li>
                                <li><strong>Insert Gift Cards:</strong> Printed insert cards slotted into designated card pockets within the insert tray structure allow variable-data personalization for individual recipient names, specific messages, and occasion details—enabling genuine personalization at corporate gifting scale.</li>
                                <li><strong>Brandable Belly Bands:</strong> Exterior belly bands with complete print coverage allow seasonal or occasion-specific messaging to wrap the closed gift box—providing the visual context that tells the recipient the occasion and the sender's sentiment before the box is even opened.</li>
                            </ul>
                            <h3>Corporate Chocolate Gifting Program Capabilities</h3>
                            <p>Corporate chocolate gifting represents the highest-value, highest-volume segment of the chocolate gift box market—enabling businesses to express brand generosity, client appreciation, employee recognition, and milestone celebration through a universally welcomed confectionery gift format.</p>
                            <ul>
                                <li><strong>Tiered Pricing Programs:</strong> Volume pricing programs for corporate accounts with consistent seasonal ordering—enabling procurement teams to budget accurately and qualify for the per-unit pricing that makes branded chocolate gifting commercially viable at enterprise scale.</li>
                                <li><strong>Brand-Standard Exterior Printing:</strong> Complete brand-standard exterior printing maintains corporate visual identity standards across gift box formats—creating gifting packaging that communicates the same brand quality as the company's own commercial packaging.</li>
                                <li><strong>Assortment Configuration:</strong> Corporate chocolate gift assortments curated to budget tier, recipient profile, and seasonal occasion—with packaging structured to present the assortment arrangement in the most visually impactful format possible.</li>
                            </ul>
                            <h3>Seasonal Gift Box Design Capabilities</h3>
                            <ul>
                                <li><strong>Valentine's Heart Formats:</strong> Heart-shaped rigid boxes in deep red and rose gold finishes—the definitive Valentine's chocolate gifting format with maximum emotional resonance for the world's largest annual chocolate gifting occasion.</li>
                                <li><strong>Christmas Gift Tower Sets:</strong> Stacked circular or rectangular gift box sets wrapped in festive seasonal graphics—creating a dramatic gifting statement that photographs beautifully and provides multiple product tiers within a single gift presentation.</li>
                                <li><strong>Mother's Day Pastel Collections:</strong> Soft pastel rigid boxes with floral embossing and ribbon closure—aligned with the aesthetic language of the Mother's Day gifting occasion across all confectionery retail channels.</li>
                            </ul>
                            <h3>Why CustomPackMakers for Chocolate Gift Packaging</h3>
                            <p>Our gift packaging team works with chocolatiers, confectionery brands, and corporate gifting departments to design and produce chocolate gift boxes that deliver emotional impact, structural protection, and personalization capability at every required scale. From 250-unit boutique runs to 50,000-unit corporate programs, we partner with gift packaging buyers who understand that the box is the gift's first impression, and first impressions define the gifting memory. Contact us to discuss your chocolate gift box requirements today.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-8 bg-accent/20">
                <div className="container mx-auto px-[5vw]">
                    <div className="mb-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Related Chocolate Products</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl">Explore our complete range of premium chocolate packaging for every gifting format and occasion.</p>
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
                <div className="absolute top-0 left-0 w-80 h-80 bg-primary/4 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-300/8 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl pointer-events-none" />
                <div className="container mx-auto px-[30px] relative z-10">
                    <div className="text-center mb-14">
                        <span className="inline-block text-xs font-semibold tracking-widest text-primary uppercase mb-3 bg-primary/10 px-4 py-1.5 rounded-full">Our Promise</span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">Why Brands Choose <span className="text-primary">CustomPackMakers</span></h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">Magnetic ribbon elegance, interior personalization, and corporate gifting program support for premium chocolate gift brands.</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">
                        <div className="space-y-5">
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1"><div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors"><svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div></div>
                                <div><h3 className="text-lg font-bold text-slate-900 mb-2">Magnetic Ribbon Elegance</h3><p className="text-sm text-slate-500 leading-relaxed">Concealed neodymium magnetic closures open with smooth, deliberate resistance—creating the ceremonial ritual quality that gift recipients remember long after the chocolate is finished, driving repeat gifting purchases and brand recommendation that compounds luxury confectionery brand equity across every gifting season and occasion throughout the calendar year.</p></div>
                            </div>
                            <div className="w-full h-px bg-slate-100" />
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1"><div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors"><svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg></div></div>
                                <div><h3 className="text-lg font-bold text-slate-900 mb-2">Interior Personalization at Scale</h3><p className="text-sm text-slate-500 leading-relaxed">Inner lid panel printing, insert gift cards, and belly band messaging enable occasion-specific personalization for corporate gifting programs and seasonal confectionery launches—delivering genuinely personal gift experiences at enterprise production volumes without manual per-unit intervention or supply chain complexity that inflates per-unit gifting program cost.</p></div>
                            </div>
                            <div className="w-full h-px bg-slate-100" />
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1"><div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors"><svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg></div></div>
                                <div><h3 className="text-lg font-bold text-slate-900 mb-2">Corporate Gifting Programs</h3><p className="text-sm text-slate-500 leading-relaxed">Tiered volume pricing, brand-standard exterior printing, and assortment configuration capabilities support enterprise chocolate gifting programs for client appreciation, employee recognition, and milestone celebration—delivering consistently premium gifting presentation that reflects the corporate brand standards and investment level your business relationships deserve.</p></div>
                            </div>
                        </div>
                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img src={productHero} alt="Chocolate gift box packaging" className="w-full h-full object-cover" />
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
                                <img src={productHero} alt="Differentiate Your Chocolate Gift Brand" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                            </div>
                            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-60" />
                            <div className="absolute -z-10 -top-8 -right-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl opacity-60" />
                        </div>
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">Differentiate Your <span className="text-primary">Chocolate Gift</span> From Others</h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">When every chocolate brand offers a gift option, the packaging is the decisive differentiator. Our chocolate gift boxes pair magnetic ribbon elegance with personalized interior messaging, configurable assortment inserts, and premium seasonal exterior finishes—creating gift packaging that recipients consider too beautiful to discard, photograph alongside the chocolate to share on social media, and specifically request by brand for repeat gifting occasions because the box itself has become part of your confectionery brand's identity and value proposition.</p>
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
                            <img src={FAQimage} alt="Chocolate Gift Box FAQ" className="absolute inset-0 w-full h-full object-cover" />
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

export default ChocolateGiftBoxes;
