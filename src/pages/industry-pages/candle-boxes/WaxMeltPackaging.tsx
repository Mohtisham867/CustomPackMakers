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
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import displayImg from "@/assets/industry/candle-boxes/Custom Candle Display Boxes.webp";
import jarImg from "@/assets/industry/candle-boxes/Custom Candle Jar Boxes.webp";
import twoPieceImg from "@/assets/industry/candle-boxes/Two Piece Candle Boxes.webp";
import shippingImg from "@/assets/industry/candle-boxes/Candle Shipping Boxes.webp";
import taperImg from "@/assets/industry/candle-boxes/taper-candle-boxes.webp";
import insertsImg from "@/assets/industry/candle-boxes/candle-boxes-inserts.webp";
import labelsImg from "@/assets/industry/candle-boxes/candle-labels.webp";
import windowImg from "@/assets/industry/candle-boxes/candle-boxes-window.webp";
import waxMeltImg from "@/assets/industry/candle-boxes/wax-melt-packaging.webp";
import subscriptionImg from "@/assets/industry/candle-boxes/candle-subscription-boxes.webp";
import luxuryImg from "@/assets/industry/candle-boxes/luxury-candle-boxes.webp";
import wishesImg from "@/assets/industry/candle-boxes/16 Wishes Candle Boxes.webp";
import dustImg from "@/assets/industry/candle-boxes/Candle Dust Covers.webp";
import FAQimage from "@/assets/FAQ-image.webp";

const carouselProducts = [
    { name: "Custom Candle Display Boxes", image: displayImg, description: "Showcase candles with elegant display boxes featuring window cutouts and premium presentation finishes", link: "/industries/candle-boxes/custom-candle-display-boxes" },
    { name: "Custom Candle Jar Boxes", image: jarImg, description: "Secure packaging for glass jar candles with protective inserts preventing breakage during shipping", link: "/industries/candle-boxes/custom-candle-jar-boxes" },
    { name: "Two Piece Candle Boxes", image: twoPieceImg, description: "Premium lid and base packaging offering luxury presentation with magnetic or ribbon closure options", link: "/industries/candle-boxes/two-piece-candle-boxes" },
    { name: "Candle Shipping Boxes", image: shippingImg, description: "Safe transit packaging for fragile candles featuring cushioned interiors and reinforced construction", link: "/industries/candle-boxes/candle-shipping-boxes" },
    { name: "Taper Candle Boxes", image: taperImg, description: "Slim packaging designed specifically for taper candles with protective sleeves and elegant branding", link: "/industries/candle-boxes/taper-candle-boxes" },
    { name: "Candle Boxes with Inserts", image: insertsImg, description: "Custom inserts for protection featuring foam or cardboard dividers securing candles in place safely", link: "/industries/candle-boxes/candle-boxes-with-inserts" },
    { name: "Candle Labels", image: labelsImg, description: "Brand your candles beautifully with custom labels featuring premium finishes and adhesive quality", link: "/industries/candle-boxes/candle-labels" },
    { name: "Candle Boxes With Window", image: windowImg, description: "Display candles through clear windows allowing customers to see products while maintaining protection", link: "/industries/candle-boxes/candle-boxes-window" },
    { name: "Wax Melt Packaging", image: waxMeltImg, description: "Compartment boxes for wax melts with individual slots and attractive designs for retail presentation", link: "/industries/candle-boxes/wax-melt-packaging" },
    { name: "Candle Subscription Boxes", image: subscriptionImg, description: "Monthly subscription packaging designed for recurring deliveries with branded unboxing experiences", link: "/industries/candle-boxes/candle-subscription-boxes" },
    { name: "Luxury Candle Boxes", image: luxuryImg, description: "High-end rigid gift boxes featuring premium materials and sophisticated finishes for luxury candles", link: "/industries/candle-boxes/luxury-candle-boxes" },
    { name: "16 Wishes Candle Boxes", image: wishesImg, description: "Celebratory birthday candle boxes with festive designs perfect for special occasion gift packaging", link: "/industries/candle-boxes/16-wishes-candle-boxes" },
    { name: "Candle Dust Covers", image: dustImg, description: "Protective covers for candles preventing dust accumulation while maintaining elegant display presentation", link: "/industries/candle-boxes/candle-dust-covers" },
];

const faqs = [
    { id: "item-1", q: "What materials are best for wax melt boxes?", a: "We recommend high-density SBS (Solid Bleached Sulfate) cardstock, typically 16pt or 18pt. It provides a smooth, premium surface for high-resolution printing and is sturdy enough to protect the delicate wax shapes from crushing and heat-related softening during transit." },
    { id: "item-2", q: "Can you provide grease-proof coatings for wax melts?", a: "Yes, wax melts often have a high fragrance oil content which can seep into standard paperboard. We apply a specialized aqueous or grease-resistant coating to the interior of our boxes to prevent unsightly oil spots and maintain a pristine exterior appearance." },
    { id: "item-3", q: "What are the most popular styles for wax melt branding?", a: "Sleeve-and-tray boxes, snap-top tuck boxes, and 'matchbox' style packaging are very popular. These styles offer a satisfying tactile unboxing experience and provide a large billboard area for your brand's unique scent illustrations and logos." },
    { id: "item-4", q: "Can I add a window to my wax melt packaging?", a: "Absolutely. Die-cut windows are a great way to showcase the color and shape of your melts. We can even leave the window 'open' (without plastic film) to allow customers to smell the fragrance directly, which is a powerful sales trigger in retail settings." },
    { id: "item-5", q: "Are your wax melt boxes eco-friendly?", a: "Yes, we prioritize the use of FSC-certified cardstock and offer 100% recyclable and biodegradable options. By using soy-based inks and water-based coatings, we ensure your packaging aligns with the values of eco-conscious fragrance consumers." },
];

const WaxMeltPackaging = () => {
    const [selectedImage, setSelectedImage] = useState(0);
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);

    const productImages = [
        { src: waxMeltImg, alt: "Wax Melt Packaging - Main" },
        { src: displayImg, alt: "Custom Candle Display Boxes" },
        { src: jarImg, alt: "Custom Candle Jar Boxes" },
        { src: twoPieceImg, alt: "Two Piece Candle Boxes" },
        { src: windowImg, alt: "Candle Boxes With Window" },
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
                <title>Custom Wax Melt Packaging | Elegant Fragrance Boxes | CustomPackMakers</title>
                <meta name="description" content="Premium custom wax melt packaging. Grease-proof coatings, luxury finishes, and artisan designs. Protect your home fragrance products with style. Get a quote today!" />
                <meta name="keywords" content="wax melt packaging, custom wax melt boxes, snap bar packaging, fragrance melt boxes, luxury wax melt branding" />
            </Helmet>
            <Header />

            <div className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 mt-[120px] md:mt-[160px]">
                <div className="container mx-auto px-[30px] py-4">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem><BreadcrumbLink asChild><Link to="/">Home</Link></BreadcrumbLink></BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem><BreadcrumbLink asChild><Link to="/industries">All Industries</Link></BreadcrumbLink></BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem><BreadcrumbLink asChild><Link to="/industries/candle-boxes">Candle Boxes</Link></BreadcrumbLink></BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem><BreadcrumbPage>Wax Melt Packaging</BreadcrumbPage></BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </div>

            <section className="py-8 bg-background">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-7 space-y-6 text-left">
                            <div className="w-20 h-1.5 bg-primary rounded-full"></div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight">
                                <span className="text-primary">Wax Melt</span> Packaging
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Artisanal protection for your scent collections. Our custom wax melt boxes combine grease-proof technology with luxury finishes to create a memorable unboxing for fragrance lovers.
                            </p>
                            <div className="pt-2">
                                <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300" onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}>
                                    Get a Quote
                                </Button>
                            </div>
                        </div>
                        <div className="lg:col-span-5 relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-muted group">
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-violet-100">
                                <img src={waxMeltImg} alt="Wax Melt Packaging" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                            </div>
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 max-w-3xl leading-tight">Sophisticated Branding for Hand-Poured Scent Collections</h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>Our <strong className="text-foreground">custom wax melt packaging</strong> is specifically engineered to meet the unique requirements of high-fragrance oil wax products. Wax melts are delicate and can easily lose their shape or leave greasy residue if improperly packaged. We utilize high-quality, grease-resistant SBS board that prevents oil seepage while providing a sturdy, rigid structure to protect your snap bars or individual melts during transit and retail handling.</p>
                        <p>We offer a wide range of <strong className="text-foreground">fragrance melt boxes</strong>, from elegant sleeves to full-closure tuck boxes with transparent PET windows. Our precision printing capabilities allow you to showcase intricate scent profiles and vivid brand colors. With options for luxurious finishes like soft-touch lamination, holographic foil, and deep embossing, we help you transform simple wax melts into premium home fragrance gifts that justify high value and drive repeat sales.</p>
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
                                {productImages.map((image, index) => (
                                    <button key={index} onClick={() => setSelectedImage(index)} className={`relative w-full aspect-square overflow-hidden rounded-md border transition-all duration-200 ${selectedImage === index ? 'border-primary shadow-md ring-2 ring-primary/20' : 'border-slate-200 hover:border-slate-300 hover:shadow-sm'}`}>
                                        <img src={image.src} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
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
                                            <div className="space-y-1.5"><Label htmlFor="length" className="text-xs font-semibold text-muted-foreground">L (in)</Label><Input id="length" type="number" placeholder="4" className="h-9 bg-white" /></div>
                                            <div className="space-y-1.5"><Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label><Input id="width" type="number" placeholder="4" className="h-9 bg-white" /></div>
                                            <div className="space-y-1.5"><Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">D (in)</Label><Input id="depth" type="number" placeholder="1" className="h-9 bg-white" /></div>
                                        </div>
                                        <div className="space-y-1.5"><Label htmlFor="quantity" className="text-xs font-semibold text-muted-foreground">Quantity</Label><Input id="quantity" type="number" placeholder="500" className="h-9 bg-white" /></div>
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">Mastering the Art of Wax Melt Box Design</h2>
                    <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="[&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-8 [&>h3]:mb-3 [&>h3]:first:mt-0 [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-5 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-5 [&>ul]:space-y-2 [&>ul>li]:text-[15px] [&>ul>li]:text-slate-600">
                            <p>In the home fragrance market, wax melts have carved out a unique and explosively growing niche. They offer customers an accessible, smoke-free way to enjoy complex scents, and for makers, they provide a canvas for incredible creativity in shapes and colors. However, the success of a wax melt brand often hinges on its packaging. A beautifully poured melt can be ruined by a cheap, oily box that doesn't survive shipping. Custom wax melt packaging from CustomPackMakers is engineered specifically to address the technical and aesthetic needs of this vibrant industry, combining oil-proof material science with artisanal finishing techniques.</p>
                            <p>The core challenge of wax melt packaging is the wax itself. Most melts are made from soy or coconut wax blends with a very high fragrance oil load (often 10% or more). As these melts sit in their packaging, especially during warm weather or in fulfillment centers, the oils want to migrate into the paperboard. This leads to grease spots that make the brand look unprofessional. Our solution involves specialized coatings and high-density SBS board that creates a barrier, keeping the oils inside the wax and the exterior of the box pristine.</p>
                            <h3>Structural Styles: From Snap Bars to Sample Sets</h3>
                            <p>Wax melts come in a dizzying array of formats, and we offer structural designs to match each one. Snap bars are incredibly popular, and we design slim, rigid 'pouch' style boxes or tuck-top boxes that fit them perfectly, preventing the bar from snapping prematurely. For individual melts shaped like hearts, stars, or seasonal motifs, we offer sleeve-and-tray boxes that act like chocolate boxes, presenting each melt as a precious gift. These 'tray' style boxes are excellent for sample sets, allowing customers to explore multiple fragrances in a single, organized package.</p>
                            <p>We also specialize in 'pillow boxes' and triangular prism shapes for brands looking to differentiate themselves on retail shelves. These non-traditional shapes catch the eye and provide a unique tactile experience for the customer. Regardless of the shape, we focus on ease of opening and closing—a snap-bottom or self-tuck closure is essential for products that customers will reach into multiple times as they refresh their warmers.</p>
                            <h3>Visual Storytelling through Digital Precision</h3>
                            <p>Because wax melts are often sold as 'experience-based' products, the graphic design of the box must do much of the heavy lifting. We utilize state-of-the-art digital printing that brings complex fragrance illustrations to life with vivid color and sharp detail. Whether you want a minimalist, 'clean-girl' aesthetic with muted tones or a maximalist, vibrant design for seasonal scents, our printing process delivers industrial-level consistency.</p>
                            <p>To further enhance the visual impact, we recommend the use of die-cut windows. A window not only showcases the color and texture of the melts but also adds a professional retail feel. We can even combine windows with foil border accents to frame your products like jewelry. This is especially effective for 'glitter-melts' or those with botanical inclusions, as it allows the customer to see the artisanal quality of the wax before they even open the box.</p>
                            <h3>Sustainability and the Conscious Fragrance Consumer</h3>
                            <p>Today's home fragrance consumers are some of the most eco-conscious buyers in the market. They often seek out natural waxes and sustainable practices, and they expect the packaging to follow suit. At CustomPackMakers, we prioritize the use of FSC-certified cardstock and offer 100% recyclable and biodegradable options. By using soy-based inks and avoiding non-recyclable plastic laminations where possible, we help you build a brand that is as kind to the planet as it is beautiful to the eye. Furthermore, the high-quality construction of our wax melt boxes often encourages customers to reuse them for storage, extending the life of the materials and reinforcing brand loyalty. When you choose us, you are choosing a partner who values artisanal excellence and environmental responsibility in equal measure.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-8 bg-accent/20">
                <div className="container mx-auto px-[5vw]">
                    <div className="mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Related Candle Products</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl">Explore our complete range of premium candle packaging solutions designed to elevate your brand's presence.</p>
                    </div>
                    <div className="relative px-4">
                        <Carousel setApi={setApi} opts={{ align: "start", loop: true }} plugins={[Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })]} className="w-full">
                            <CarouselContent className="-ml-4">
                                {carouselProducts.map((product, index) => (
                                    <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                                        <div className="h-full">
                                            <Link to={product.link} className="block h-full">
                                                <Card className="overflow-hidden border-border bg-card hover:shadow-xl transition-all duration-300 group cursor-pointer h-full">
                                                    <CardContent className="p-0 flex flex-col h-full">
                                                        <div className="h-48 lg:h-64 w-full bg-gray-50 overflow-hidden relative">
                                                            <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" loading="lazy" />
                                                        </div>
                                                        <div className="p-5 border-t border-border flex-grow flex flex-col">
                                                            <h3 className="font-semibold text-foreground text-base mb-2">{product.name}</h3>
                                                            <p className="text-sm text-muted-foreground line-clamp-2 mb-4 flex-grow">{product.description}</p>
                                                            <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors mt-auto">View Product</Button>
                                                        </div>
                                                    </CardContent>
                                                </Card>
                                            </Link>
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <div className="flex justify-center gap-2 mt-8 flex-wrap">
                                {Array.from({ length: count }).map((_, index) => (
                                    <button key={index} className={`h-2 rounded-full transition-all duration-300 ${index === current ? "w-8 bg-primary" : "w-2 bg-primary/20 hover:bg-primary/50"}`} onClick={() => api?.scrollTo(index)} aria-label={`Go to slide ${index + 1}`} />
                                ))}
                            </div>
                        </Carousel>
                    </div>
                </div>
            </section>

            <section className="py-12 relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #fffaf5 0%, #fffefe 60%, #fef8f0 100%)' }}>
                <div className="absolute top-0 left-0 w-80 h-80 bg-primary/4 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-300/8 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl pointer-events-none" />
                <div className="container mx-auto px-[30px] relative z-10">
                    <div className="text-center mb-14">
                        <span className="inline-block text-xs font-semibold tracking-widest text-primary uppercase mb-3 bg-primary/10 px-4 py-1.5 rounded-full">Our Promise</span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">Why Brands Choose <span className="text-primary">CustomPackMakers</span></h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">We combine artisanal quality with technical precision to deliver candle packaging that defines your brand's excellence.</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">
                        <div className="space-y-5">
                            {[
                                { color: "primary", iconPath: "M13 10V3L4 14h7v7l9-11h-7z", h: "Heat-Resistant Premium Materials", p: "We utilize specialized heat-resistant cardstock and adhesives that maintain structural integrity near warm candle production lines. Our coatings are engineered to prevent warping or yellowing, ensuring your wax melt packaging preserves its pristine look even in humid environments or variable storage temperatures across global distribution channels from our facility." },
                                { color: "amber-500", iconPath: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z", h: "Luxury Finishes and Customization", p: "From elegant gold foiling to high-depth embossing and soft-touch lamination, we offer a full suite of artisan finishes for wax melt boxes. These luxury details elevate your brand positioning, transforming functional boxes into tactile brand experiences that justify premium price points and captivate the attention of sophisticated retail candle consumers everywhere." },
                                { color: "emerald-500", iconPath: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", h: "Protective Inserts for Glass Fragility", p: "Our structural engineers design precision-cut custom inserts using foam or reinforced cardboard to cradle delicate glass candle jars. These inserts act as a shock absorber, preventing internal movement and significantly reducing the risk of breakage during transit, ensuring your wax-melt product arrives in perfect condition for the customer." },
                            ].map((item, i) => (
                                <div key={i}>
                                    <div className="flex gap-6 items-start group">
                                        <div className="flex-shrink-0 mt-1"><div className={`w-10 h-10 rounded-full bg-${item.color}/10 flex items-center justify-center group-hover:bg-${item.color}/20 transition-colors duration-300`}><svg className={`w-5 h-5 text-${item.color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.iconPath} /></svg></div></div>
                                        <div><h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">{item.h}</h3><p className="text-sm text-slate-500 leading-relaxed">{item.p}</p></div>
                                    </div>
                                    {i < 2 && <div className="w-full h-px bg-slate-100 mt-5" />}
                                </div>
                            ))}
                        </div>
                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img src={waxMeltImg} alt="Premium Wax Melt Packaging Excellence" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-7"><p className="text-white font-bold text-lg leading-snug mb-1">Trusted by 500+ Luxury Brands</p><p className="text-white/75 text-sm">Delivering excellence in fragrance packaging across North America</p></div>
                            </div>
                            <div className="absolute top-4 -right-2 lg:-right-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80 backdrop-blur-sm"><p className="text-2xl font-bold text-primary leading-none">98%</p><p className="text-xs text-slate-400 mt-1 font-medium">Brand Loyalty</p></div>
                            <div className="absolute bottom-4 -left-2 lg:-left-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80 backdrop-blur-sm"><p className="text-2xl font-bold text-secondary leading-none">8–10</p><p className="text-xs text-slate-400 mt-1 font-medium">Day Turnaround</p></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-10 lg:py-12 bg-white overflow-hidden relative">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="relative group">
                            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] border border-primary/20 shadow-2xl transform transition-transform duration-700 hover:scale-[1.02]">
                                <img src={waxMeltImg} alt="Differentiate Your Wax Melt Brand" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                            </div>
                            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-60" />
                            <div className="absolute -z-10 -top-8 -right-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl opacity-60" />
                        </div>
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">Differentiate Your <span className="text-primary">Wax Melt Brand</span> From Others</h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">In the delicate scent market, your wax melt packaging is a symbol of fragrance quality. CustomPackMakers engineers wax melt boxes that utilize oil-proof materials and custom-fit structural design to protect your product while telling your brand story. Our focus on extreme durability and elegant unboxing ensures your wax melts arrive safely while your brand defines the artisanal standard.</p>
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
                                <p className="text-base text-muted-foreground">Detailed answers to common questions about our candle packaging solutions.</p>
                            </div>
                            <Accordion type="single" collapsible defaultValue="item-1" className="w-full space-y-2">
                                {faqs.map((faq) => (
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
                        <div className="relative w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden shadow-md">
                            <img src={FAQimage} alt="Candle Packaging FAQ Support" className="absolute inset-0 w-full h-full object-cover" />
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

export default WaxMeltPackaging;
