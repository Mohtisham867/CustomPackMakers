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

import displayImg from "@/assets/candle-products/Custom Candle Display Boxes.webp";
import jarImg from "@/assets/candle-products/Custom Candle Jar Boxes.webp";
import twoPieceImg from "@/assets/candle-products/Two Piece Candle Boxes.webp";
import shippingImg from "@/assets/candle-products/Candle Shipping Boxes.webp";
import taperImg from "@/assets/candle-products/taper-candle-boxes.webp";
import insertsImg from "@/assets/candle-products/candle-boxes-inserts.webp";
import labelsImg from "@/assets/candle-products/candle-labels.webp";
import windowImg from "@/assets/candle-products/candle-boxes-window.webp";
import waxMeltImg from "@/assets/candle-products/wax-melt-packaging.webp";
import subscriptionImg from "@/assets/candle-products/candle-subscription-boxes.webp";
import luxuryImg from "@/assets/candle-products/luxury-candle-boxes.webp";
import wishesImg from "@/assets/candle-products/16 Wishes Candle Boxes.webp";
import dustImg from "@/assets/candle-products/Candle Dust Covers.webp";
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
    { id: "item-1", q: "What is a two-piece candle box?", a: "A two-piece candle box consists of a separate lid and a base. This design is often associated with luxury and premium gifting, as the act of lifting off the lid creates a more deliberate and high-end unboxing experience compared to standard tuck-top boxes." },
    { id: "item-2", q: "Are these boxes suitable for shipping?", a: "Yes, especially when made from rigid board or reinforced cardstock. The overlapping lid provides double-walled protection on the sides, increasing the box's resistance to crushing. For e-commerce, we recommend placing them inside a secondary shipping mailer for complete protection." },
    { id: "item-3", q: "What custom closures can I add to a two-piece box?", a: "We can incorporate magnetic closures for a satisfying snap, or add custom ribbon ties and thumb notches for easy lid removal. These additions enhance the luxury feel and ensure the lid stays securely in place during handling." },
    { id: "item-4", q: "Can I customize the interior of the base?", a: "Absolutely. We can print on the inside of the base or add a custom insert to hold your candle jar perfectly. Choosing a contrasting color or adding a brand message inside adds a surprise element that customers love during the unboxing process." },
    { id: "item-5", q: "What finishes look best on these boxes?", a: "For two-piece boxes, soft-touch matte lamination combined with spot UV or foil stamping on the lid provides a truly premium look. The contrast between the velvety texture and the shiny metallic or glossy elements communicates high value and sophistication." },
];

const TwoPieceCandleBoxes = () => {
    const [selectedImage, setSelectedImage] = useState(0);
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);

    const productImages = [
        { src: twoPieceImg, alt: "Two Piece Candle Boxes - Main" },
        { src: displayImg, alt: "Custom Candle Display Boxes" },
        { src: jarImg, alt: "Custom Candle Jar Boxes" },
        { src: shippingImg, alt: "Candle Shipping Boxes" },
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
                <title>Two Piece Candle Boxes | Luxury Lid & Base Packaging | CustomPackMakers</title>
                <meta name="description" content="Premium two piece candle boxes with elegant lid and base design. Perfect for luxury gifts and retail. Custom sizes, finishes, and inserts available. Get a quote!" />
                <meta name="keywords" content="two piece candle boxes, lid and base candle boxes, luxury candle gift boxes, custom candle packaging, rigid candle boxes" />
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
                            <BreadcrumbItem><BreadcrumbPage>Two Piece Candle Boxes</BreadcrumbPage></BreadcrumbItem>
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
                                <span className="text-primary">Two Piece</span> Candle Boxes
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                The ultimate in luxury gifting. Our premium two-piece boxes feature a separate lid and base design, providing a classic unboxing experience for your most sophisticated candle collections.
                            </p>
                            <div className="pt-2">
                                <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300" onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}>
                                    Get a Quote
                                </Button>
                            </div>
                        </div>
                        <div className="lg:col-span-5 relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-muted group">
                            <div className="absolute inset-0 bg-gradient-to-br from-rose-50 to-pink-100">
                                <img src={twoPieceImg} alt="Two Piece Candle Boxes" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 max-w-3xl leading-tight">Elevated Unboxing with Premium Lid and Base Construction</h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>Our <strong className="text-foreground">custom two piece candle boxes</strong> are the gold standard for high-end candle brands. The dual-component structure provides an extra layer of structural rigidity, making them ideal for heavier jars and sets. By separating the lid from the base, you create a tiered reveal that enhances the perceived value of your product and encourages social media sharing during the first unboxing.</p>
                        <p>We provide extensive customization for both the lid and base, allowing for contrasting colors, internal printing, and custom thumb notches for easy access. Whether you require a <strong className="text-foreground">rigid two-piece box</strong> for luxury gifting or a heavy-duty folding carton version for retail, we utilize precision die-cutting and artisan finishing techniques to ensure every box reflects the excellence of your candle brand.</p>
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
                                            <div className="space-y-1.5"><Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">D (in)</Label><Input id="depth" type="number" placeholder="5" className="h-9 bg-white" /></div>
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">The Luxury Appeal of Two-Piece Lid and Base Packaging</h2>
                    <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="[&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-8 [&>h3]:mb-3 [&>h3]:first:mt-0 [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-5 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-5 [&>ul]:space-y-2 [&>ul>li]:text-[15px] [&>ul>li]:text-slate-600">
                            <p>In the world of luxury fragrance and boutique candles, the two-piece box is widely regarded as the pinnacle of secondary packaging design. Often associated with high-end perfumes and designer jewelry, the lid and base construction offers a sense of ceremony that standard folding cartons simply cannot replicate. Custom two-piece candle boxes from CustomPackMakers are engineered to capitalize on this premium perception, providing a robust and elegant enclosure that signifies quality even before the customer smells the candle inside. This structural choice is a statement of intent, signaling that the product within is worth the extra care in its presentation.</p>
                            <p>The technical advantage of the two-piece design lies in its overlapping panels. When the lid is placed over the base, the sides of the box essentially become double-walled. This significantly increases the compression strength of the packaging, making it much more resistant to crushing in retail stacks or during transport. For heavy artisanal candle jars, this extra structural integrity is a critical functional benefit, ensuring that the glass vessel remains safe and the box retains its crisp, professional shape throughout its journey.</p>
                            <h3>Structural Variations: From Telescoping to Shoulder Boxes</h3>
                            <p>Two-piece boxes come in several structural variations, each offering a different aesthetic and unboxing feel. The most common is the full-telescoping box, where the lid completely covers the height of the base. This provides the most protection and a very clean, monolithic look. Partial-telescoping boxes, where the lid only covers a portion of the base, allow for a contrasting color or brand pattern on the base to be partially visible, adding visual interest to the shelf presence. This 'reveal' can be used strategically to pique customer curiosity and encourage them to pick up the item.</p>
                            <p>Another premium variation is the 'shoulder' or 'neck' box. In this design, a third component—a neck insert—is placed inside the base, creating a physical ledge for the lid to rest upon. This results in the lid and base being flush with each other, separated by a thin, visible band (the neck). When the neck is colored in a metallic foil or a vibrant brand color, it creates a striking horizontal line that screams luxury. At CustomPackMakers, our structural designers can help you choose the best iteration for your specific jar dimensions and brand positioning, ensuring a fit that is perfectly snug yet easy to open.</p>
                            <h3>Artisan Finishes and the 'Slow Reveal'</h3>
                            <p>The beauty of a two-piece box is that it allows for two distinct branding surfaces. The lid typically carries the primary brand identity—the logo, imagery, and product name—while the base can be used for supplementary brand storytelling, candle care instructions, or contrasting artistic patterns. We utilize advanced finishing techniques to maximize this real estate. Soft-touch matte lamination on the lid, paired with a high-gloss spot UV pattern on the base, creates a tactile contrast that engages the customer's sense of touch. Foil stamping on the lid's top panel provides a metallic shimmer that catches retail lighting, drawing the eye from across the room.</p>
                            <p>The 'slow reveal' is a key psychological component of two-piece packaging. By engineering the fit between the lid and base with precision, we can create a gentle friction that causes the lid to slide off slowly when lifted. This deliberate unboxing process builds anticipation and gives the customer an extra few seconds to focus on your branding. It's a subtle detail that distinguishes a generic product from a curated fragrance experience. We can even add custom thumb notches to the lid to facilitate this process, or integrate premium ribbon pull-tabs for an even more artisanal feel.</p>
                            <h3>Protective Integrity for Fragile Vessels</h3>
                            <p>While the aesthetic benefits are clear, the primary job of any candle box is protection. Glass jars are heavy and prone to breakage if allowed to shift inside their packaging. Two-piece boxes are particularly well-suited for internal inserts. We can design custom cardboard or foam inserts that sit flush inside the base, locking the jar in place. Because the lid fits so securely over the base, the entire package becomes a rigid unit that protects against both vertical compression and lateral shocks. This makes two-piece boxes an excellent choice for candles shipped via e-commerce or those sold in high-traffic retail environments where handling is frequent.</p>
                            <p>Sustainability is also easily addressed within this format. By utilizing FSC-certified rigid boards or high-density recycled cardstocks, your two-piece packaging can be as environmentally responsible as it is luxurious. We prioritize the use of mono-materials, ensuring that both the lid, base, and any internal cardboard inserts can be recycled together by the consumer. This alignment with eco-conscious values, combined with the extreme durability and reusability of a two-piece box (customers often keep them for storage long after the candle is spent), creates a positive and lasting impression of your brand.</p>
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
                                { color: "primary", iconPath: "M13 10V3L4 14h7v7l9-11h-7z", h: "Heat-Resistant Premium Materials", p: "We utilize specialized heat-resistant cardstock and adhesives that maintain structural integrity near warm candle production lines. Our coatings are engineered to prevent warping or yellowing, ensuring your two-piece packaging preserves its pristine look even in humid environments or variable storage temperatures across global distribution channels from our facility." },
                                { color: "amber-500", iconPath: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z", h: "Luxury Finishes and Customization", p: "From elegant gold foiling to high-depth embossing and soft-touch lamination, we offer a full suite of artisan finishes for two-piece boxes. These luxury details elevate your brand positioning, transforming functional boxes into tactile brand experiences that justify premium price points and captivate the attention of sophisticated retail candle consumers everywhere." },
                                { color: "emerald-500", iconPath: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", h: "Protective Inserts for Glass Fragility", p: "Our structural engineers design precision-cut custom inserts using foam or reinforced cardboard to cradle delicate glass candle jars. These inserts act as a shock absorber, preventing internal movement and significantly reducing the risk of breakage during transit, ensuring your two-piece product arrives in perfect condition for the customer." },
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
                                <img src={twoPieceImg} alt="Premium Two Piece Packaging Excellence" className="w-full h-full object-cover" />
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
                                <img src={twoPieceImg} alt="Differentiate Your Luxury Candle Brand" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                            </div>
                            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-60" />
                            <div className="absolute -z-10 -top-8 -right-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl opacity-60" />
                        </div>
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">Differentiate Your <span className="text-primary">Two Piece Brand</span> From Others</h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">In the luxury fragrance market, the two-piece box is the ultimate symbol of artisanal quality. CustomPackMakers engineers lid and base boxes that utilize sensory-rich materials and precision-fit structural design to protect your product while telling your brand story. Our focus on extreme durability and luxury aesthetic ensures your candles arrive safely while your brand defines the premium standard.</p>
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

export default TwoPieceCandleBoxes;
