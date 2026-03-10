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

import chocolateCandyBoxesHero from "@/assets/chocolate-products/chocolate-candy-boxes/img-hero.png";
import chocolateCandyBoxesImg1 from "@/assets/chocolate-products/chocolate-candy-boxes/img-1.png";
import chocolateCandyBoxesImg2 from "@/assets/chocolate-products/chocolate-candy-boxes/img-2.png";
import chocolateCandyBoxesImg3 from "@/assets/chocolate-products/chocolate-candy-boxes/img-3.png";
import chocolateCandyBoxesImg4 from "@/assets/chocolate-products/chocolate-candy-boxes/img-4.png";
import chocolateCandyBoxesImg5 from "@/assets/chocolate-products/chocolate-candy-boxes/img-5.png";
import chocolateCandyBoxesImg6 from "@/assets/chocolate-products/chocolate-candy-boxes/img-whychoose.png";
import chocolateCandyBoxesImg7 from "@/assets/chocolate-products/chocolate-candy-boxes/img-different.png";
import FAQimage from "@/assets/FAQ-image.png";
import artisanChocolateBox from "@/assets/chocolate-products/Artisan Chocolate Box.webp";
import chocolateMilkBoxes from "@/assets/chocolate-products/chocolate-milk-boxes.webp";
import luxuryChocolateBoxes from "@/assets/chocolate-products/luxury-chocolate-boxes.webp";
import chocolateBombBoxes from "@/assets/chocolate-products/chocolate-bomb-boxes.webp";
import chocolateGiftBoxes from "@/assets/chocolate-products/chocolate-gift-boxes.webp";
import christmasChocolateBoxes from "@/assets/chocolate-products/christmas-chocolate-boxes.webp";
import mushroomChocolateBarPackaging from "@/assets/chocolate-products/Mushroom Chocolate Bar Packaging.webp";
import chocolateBarPackaging from "@/assets/chocolate-products/Chocolate Bar Packaging.webp";
import chocolateSubscriptionBox from "@/assets/chocolate-products/chocolate-subscription-box.webp";

const carouselProducts = [
    { name: "Artisan Chocolate Box", image: artisanChocolateBox, link: "/industries/chocolate-boxes/artisan-chocolate-box", desc: "Handcrafted boxes with food-grade inserts and gold foiling." },
    { name: "Chocolate Milk Boxes", image: chocolateMilkBoxes, link: "/industries/chocolate-boxes/chocolate-milk-boxes", desc: "Moisture-resistant dairy packaging with vibrant graphics." },
    { name: "Luxury Chocolate Boxes", image: luxuryChocolateBoxes, link: "/industries/chocolate-boxes/luxury-chocolate-boxes", desc: "Premium rigid board boxes with foil-stamping finishes." },
    { name: "Chocolate Bomb Boxes", image: chocolateBombBoxes, link: "/industries/chocolate-boxes/chocolate-bomb-boxes", desc: "Secure cradle packaging for hot chocolate bombs." },
    { name: "Chocolate Gift Boxes", image: chocolateGiftBoxes, link: "/industries/chocolate-boxes/chocolate-gift-boxes", desc: "Gift-ready packaging with sophisticated ribbon closures." },
    { name: "Christmas Chocolate Boxes", image: christmasChocolateBoxes, link: "/industries/chocolate-boxes/christmas-chocolate-boxes", desc: "Festive holiday-themed chocolate packaging." },
    { name: "Mushroom Chocolate Bar Packaging", image: mushroomChocolateBarPackaging, link: "/industries/chocolate-boxes/mushroom-chocolate-bar-packaging", desc: "Unique packaging for mushroom-infused chocolates." },
    { name: "Chocolate Bar Packaging", image: chocolateBarPackaging, link: "/industries/chocolate-boxes/chocolate-bar-packaging", desc: "Airtight protection and high-fidelity chocolate bar boxes." },
    { name: "Chocolate Subscription Box", image: chocolateSubscriptionBox, link: "/industries/chocolate-boxes/chocolate-subscription-box", desc: "Recurring monthly subscription box packaging solutions." },
];

const faqs = [
    { id: "item-1", q: "What box styles are available for chocolate candy packaging?", a: "We offer tuck-end boxes, auto-lock bottom boxes, two-piece lid-and-base sets, and window boxes with PET film windows—each structural format available in custom dimensions to suit wrapped candies, truffles, and chocolate-covered confections of every size." },
    { id: "item-2", q: "Can you add window cutouts to chocolate candy boxes?", a: "Yes. Die-cut PET windows are a popular option for chocolate candy packaging—allowing consumers to see the confection arrangement inside, building purchase confidence and creating an appealing retail display that drives candy impulse purchase decisions." },
    { id: "item-3", q: "Are grease-resistant coatings available for chocolate candy inserts?", a: "Absolutely. Our PE-coated inserts and greaseproof cardboard dividers prevent cocoa butter and oil migration from chocolate-covered candies—maintaining pristine interior packaging aesthetics throughout the product's full retail shelf life." },
    { id: "item-4", q: "What printing options are available for colorful candy box branding?", a: "Full-color CMYK printing, Pantone spot color matching, and digital printing are all available—enabling vibrant, photographic-quality candy brand graphics, seasonal color palettes, and the playful design language that resonates with confectionery consumers." },
    { id: "item-5", q: "What is the minimum order quantity for chocolate candy boxes?", a: "Our MOQ starts at 500 units for standard chocolate candy box designs. Custom die-line structures require 1,000-unit minimums. Volume pricing tiers provide competitive per-unit costs for seasonal and recurring candy brand production runs." },
];

const ChocolateCandyBoxes = () => {
    const [selectedImage, setSelectedImage] = useState(0);
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);

    const productImages = [
        { src: chocolateCandyBoxesImg1, alt: "Chocolate Candy Boxes - Main View" },
        { src: chocolateCandyBoxesImg2, alt: "Chocolate Candy Boxes - Window Display" },
        { src: chocolateCandyBoxesImg3, alt: "Chocolate Candy Boxes - Insert Detail" },
        { src: chocolateCandyBoxesImg4, alt: "Chocolate Candy Boxes - Opened" },
        { src: chocolateCandyBoxesImg5, alt: "Chocolate Candy Boxes - Lifestyle" },
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
                <title>Custom Chocolate Candy Boxes | Colorful Confection Packaging | CustomPackMakers</title>
                <meta name="description" content="Vibrant chocolate candy boxes with PET window cutouts, grease-resistant inserts, and full-color CMYK printing. Showcase your confections with gift-ready packaging built for retail impact." />
                <meta name="keywords" content="chocolate candy boxes, candy packaging, confection boxes, window candy boxes, custom candy packaging, colorful chocolate boxes" />
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
                            <BreadcrumbItem><BreadcrumbPage>Chocolate Candy Boxes</BreadcrumbPage></BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </div>

            <section className="py-8 bg-background">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-7 space-y-6">
                            <div className="w-20 h-1.5 bg-primary rounded-full" />
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight"><span className="text-primary">Custom</span> Chocolate Candy Boxes</h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">Vibrant confection packaging with PET window cutouts, grease-resistant dividers, and full-color CMYK printing—designed to showcase chocolate candies with retail-ready clarity, preserve cocoa freshness, and deliver a gift-worthy presentation that drives impulse purchases.</p>
                            <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300" onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}>Get a Quote</Button>
                        </div>
                        <div className="lg:col-span-5 relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-muted group">
                            <img src={chocolateCandyBoxesHero} alt="Custom Chocolate Candy Boxes" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 max-w-3xl">Candy Boxes Engineered for Visual Impact and Freshness Preservation</h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>Our <strong className="text-foreground">custom chocolate candy boxes</strong> are designed for confectionery brands that understand packaging is as critical as the candy itself. Clear PET window cutouts reveal the candy arrangement inside without compromising protection—building consumer confidence at point of purchase while eliminating the guesswork that costs sales. Grease-resistant cardboard dividers and PE-coated inner linings prevent cocoa butter migration that stains packaging and signals poor quality.</p>
                        <p>Full-color CMYK printing on SBS cardstock delivers the vibrant, playful brand imagery that resonates in the confectionery category—from seasonal holiday palettes to everyday candy brand color systems. Every structural format, from tuck-end retail boxes to two-piece lid-and-base gift sets, is available with custom dimensions to perfectly house your full chocolate candy product range with zero excess movement.</p>
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
                                            <div className="space-y-1.5"><Label htmlFor="length" className="text-xs font-semibold text-muted-foreground">L (in)</Label><Input id="length" type="number" placeholder="6" className="h-9 bg-white" /></div>
                                            <div className="space-y-1.5"><Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label><Input id="width" type="number" placeholder="4" className="h-9 bg-white" /></div>
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">The Complete Guide to Chocolate Candy Box Packaging</h2>
                    <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="[&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-6 [&>h3]:mb-3 [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-4 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-4 [&>ul]:space-y-2 [&>ul>li]:text-[15px] [&>ul>li]:text-slate-600">
                            <p>The chocolate candy market is one of the most visually competitive retail categories in existence. From the impulse purchase zone at checkout to the seasonal gifting aisle during holidays, chocolate candy brands compete for consumer attention across dozens of competing products in the same display environment. In this high-competition context, the packaging is almost always the deciding factor in the purchase decision—especially for first-time buyers who cannot evaluate taste before buying.</p>
                            <p>Custom chocolate candy boxes serve multiple simultaneous functions: they protect fragile confections from mechanical damage, preserve freshness and aroma through appropriate barrier properties, communicate brand identity through printing and finishing, facilitate retail merchandising through structural format, and create the gifting presentation that drives repeat purchase and brand recommendation. No packaging category demands this range of functional and aesthetic performance simultaneously.</p>
                            <h3>Window Design for Retail Transparency</h3>
                            <p>The most powerful conversion tool in chocolate candy retail packaging is the visual reveal. When consumers can see the actual chocolate candies through a die-cut PET window, purchase confidence increases substantially—eliminating the uncertainty that causes hesitation and drives consumers toward familiar competitors.</p>
                            <ul>
                                <li><strong>Die-Cut PET Windows:</strong> Custom die-cut openings in virtually any shape—rectangular, oval, heart-shaped for Valentine's products, star-shaped for Christmas—covered with crystal-clear food-safe PET film that protects the candy while maximizing visibility.</li>
                                <li><strong>Window Placement Strategy:</strong> Front-panel windows reveal the full candy arrangement; lid windows on two-piece boxes create an unboxing reveal effect; side windows showcase product depth and quantity—each placement option chosen to maximize the specific retail context.</li>
                                <li><strong>Anti-Fog PET Film:</strong> Standard PET film can fog in temperature-varying retail environments. Our anti-fog film options maintain crystal clarity through temperature cycling—critical for candy packaging in retail environments with variable HVAC performance.</li>
                            </ul>
                            <h3>Grease-Resistant Inserts and Dividers</h3>
                            <p>Chocolate candies present a unique preservation challenge: the cocoa butter in chocolate migrates to packaging surfaces over time when direct contact occurs, creating unsightly staining that signals poor quality and degrades the premium appearance that justifies confectionery pricing.</p>
                            <ul>
                                <li><strong>PE-Coated Cardboard Dividers:</strong> Polyethylene coating creates a continuous grease barrier between individual chocolates and cardboard divider surfaces—maintaining the pristine white or branded insert appearance throughout the product's full retail shelf life.</li>
                                <li><strong>Cavity Insert Trays:</strong> Thermoformed PET or die-cut cardboard cavity trays position each candy in its own dedicated space—preventing movement, collision damage, and the smearing of hand-decorated or enrobed candy surfaces during transit.</li>
                                <li><strong>Food-Safe BOPP Lining:</strong> Biaxially oriented polypropylene lining on box interiors provides both moisture and grease resistance—maintaining interior aesthetics while providing a food-safe barrier layer between candy and packaging material.</li>
                            </ul>
                            <h3>Seasonal and Occasion-Specific Design Capabilities</h3>
                            <p>The chocolate candy market is acutely seasonal—with Valentine's Day, Easter, Halloween, and Christmas accounting for a disproportionate share of annual confectionery revenue. Packaging that can be rapidly redesigned for each seasonal occasion provides critical commercial agility.</p>
                            <ul>
                                <li><strong>Rapid Design Turnaround:</strong> Our digital printing capability supports rapid seasonal design changes with no tooling cost—enabling seasonal variants, limited editions, and promotional packaging refreshes without minimum order penalties.</li>
                                <li><strong>Seasonal Color Palettes:</strong> Pre-approved seasonal color matching ensures your Valentine's reds, Easter pastels, Halloween oranges, and Christmas greens remain consistent across production runs and packaging format variants.</li>
                                <li><strong>Holiday Die-Lines:</strong> Pre-engineered structural die-lines for heart-shaped boxes, egg-shaped carrier packaging, and festive geometric formats—available for rapid customization with your brand graphics and product dimensions.</li>
                            </ul>
                            <h3>Gift Presentation Engineering</h3>
                            <p>Beyond retail display, chocolate candy packaging must excel as a gifting vehicle—providing the ceremonial presentation quality that makes chocolate candy one of the most gifted products in the confectionery category throughout the calendar year.</p>
                            <ul>
                                <li><strong>Ribbon-Pull Design:</strong> Integrated ribbon loops on the box exterior allow gift ribbon embellishment without external wrapping—creating immediate gift-ready presentation that consumers appreciate at point of purchase.</li>
                                <li><strong>Magnetic Closure Options:</strong> Concealed magnetic closures on two-piece or book-style candy boxes provide the premium closure quality that signals a luxury gift—communicating material investment and brand quality before the box is opened.</li>
                                <li><strong>Tissue Paper Interior:</strong> Candy-safe tissue paper in brand or seasonal colors cushions and wraps the candy arrangement—adding a privacy layer that extends the unboxing experience and adds perceived value.</li>
                            </ul>
                            <h3>Why CustomPackMakers for Chocolate Candy Packaging</h3>
                            <p>We combine food-safe material expertise, seasonal design agility, and premium finishing capabilities to deliver chocolate candy boxes that perform across every retail and gifting context. With MOQs from 500 units and volume pricing from 2,500 units, we serve independent confectionery brands and established candy manufacturers alike. Contact our team for a complimentary structural design consultation for your chocolate candy packaging requirements today.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-8 bg-accent/20">
                <div className="container mx-auto px-[5vw]">
                    <div className="mb-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Related Chocolate Products</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl">Explore our complete range of premium chocolate packaging solutions for every confection format.</p>
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
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">Window cutouts for retail clarity, grease-resistant inserts for freshness, and vibrant color printing for candy brand impact.</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">
                        <div className="space-y-5">
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1"><div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300"><svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div></div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">PET Window Transparency</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">Custom die-cut PET windows in any shape—rectangular, oval, or seasonal—reveal the candy arrangement inside with crystal-clear clarity, eliminating purchase uncertainty and driving the impulse confectionery buying decisions that translate directly into increased retail basket value for your chocolate candy brand.</p>
                                </div>
                            </div>
                            <div className="w-full h-px bg-slate-100" />
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1"><div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors duration-300"><svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg></div></div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Grease-Resistant Protection</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">PE-coated dividers and BOPP-lined interiors prevent cocoa butter migration from chocolate-covered candies—maintaining pristine packaging aesthetics throughout the full retail shelf life and preserving the premium presentation that justifies confectionery pricing in competitive candy retail environments.</p>
                                </div>
                            </div>
                            <div className="w-full h-px bg-slate-100" />
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1"><div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors duration-300"><svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div></div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Seasonal Design Agility</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">Digital printing and pre-engineered seasonal die-lines enable rapid candy packaging redesigns for Valentine's, Easter, Halloween, and Christmas—with no tooling costs and short run minimums that let confectionery brands capture seasonal revenue without overcommitting to large production volumes months in advance.</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img src={chocolateCandyBoxesImg6} alt="Premium chocolate candy packaging" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-7">
                                    <p className="text-white font-bold text-lg leading-snug mb-1">Trusted by 500+ Brands</p>
                                    <p className="text-white/75 text-sm">Delivering premium packaging across North America</p>
                                </div>
                            </div>
                            <div className="absolute top-4 -right-2 lg:-right-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80 backdrop-blur-sm">
                                <p className="text-2xl font-bold text-primary leading-none">98%</p>
                                <p className="text-xs text-slate-400 mt-1 font-medium">Satisfaction Rate</p>
                            </div>
                            <div className="absolute bottom-4 -left-2 lg:-left-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80 backdrop-blur-sm">
                                <p className="text-2xl font-bold text-emerald-500 leading-none">8–10</p>
                                <p className="text-xs text-slate-400 mt-1 font-medium">Day Turnaround</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-10 lg:py-12 bg-white overflow-hidden relative">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="relative group">
                            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] border border-primary/20 shadow-2xl transform transition-transform duration-700 hover:scale-[1.02]">
                                <img src={chocolateCandyBoxesImg7} alt="Differentiate Your Chocolate Candy Brand" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                            </div>
                            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-60" />
                            <div className="absolute -z-10 -top-8 -right-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl opacity-60" />
                        </div>
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">Differentiate Your <span className="text-primary">Candy Brand</span> From Others</h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">In the visually saturated candy aisle, packaging clarity drives the purchase decision. Our chocolate candy boxes deliver PET window reveal, vibrant CMYK candy graphics, grease-resistant inserts, and gift-ready structural formats—creating the retail shelf presence, purchase confidence, and brand memorability that transform your confection into the automatic first choice for everyday indulgence and every gifting occasion throughout the confectionery buying calendar.</p>
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
                                            <div className="shrink-0 ml-4 p-1 rounded-full bg-slate-100 group-data-[state=open]:bg-primary group-data-[state=open]:text-white transition-colors duration-200">
                                                <Plus className="h-3 w-3 group-data-[state=open]:hidden" />
                                                <Minus className="h-3 w-3 hidden group-data-[state=open]:block" />
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent className="px-5 pb-5 pt-0 text-slate-600 leading-relaxed text-sm">{faq.a}</AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                        <div className="relative w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden">
                            <img src={FAQimage} alt="Chocolate Candy Box FAQ" className="absolute inset-0 w-full h-full object-cover" />
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

export default ChocolateCandyBoxes;
