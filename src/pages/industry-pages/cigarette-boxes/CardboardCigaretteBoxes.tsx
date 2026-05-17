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

import productHero from "@/assets/industry/cigarette-boxes/cardboard-cigarette-boxes.webp";
import FAQimage from "@/assets/FAQ-image.webp";
import eCigaretteBoxes from "@/assets/industry/cigarette-boxes/e-cigarette-boxes.webp";
import hempCigaretteBoxes from "@/assets/industry/cigarette-boxes/hemp-cigarette-boxes.webp";
import paperCigaretteBoxes from "@/assets/industry/cigarette-boxes/paper-cigarette-boxes.webp";
import cardboardCigaretteBoxes from "@/assets/industry/cigarette-boxes/cardboard-cigarette-boxes.webp";
import blankCigaretteBoxes from "@/assets/industry/cigarette-boxes/blank-cigarette-boxes.webp";
import disposableCigaretteBoxes from "@/assets/industry/cigarette-boxes/disposable-cigarette-boxes.webp";
import lighterBoxes from "@/assets/industry/cigarette-boxes/lighter-boxes.webp";
import emptyCigaretteBoxes from "@/assets/industry/cigarette-boxes/empty-cigarette-boxes.webp";
import cigaretteDisplayBoxes from "@/assets/industry/cigarette-boxes/cigarette-display-boxes.webp";
import cardboardCigarBoxes from "@/assets/industry/cigarette-boxes/cardboard-cigar-boxes.webp";
import cigaretteCartons from "@/assets/industry/cigarette-boxes/cigarette-cartons.webp";

const carouselProducts = [
    { name: "Custom E-Cigarette Boxes", image: eCigaretteBoxes, link: "/industries/cigarette-boxes/custom-e-cigarette-boxes", desc: "Modern packaging for electronic cigarettes featuring sleek designs and high-quality protective finishes." },
    { name: "Custom Hemp Cigarette Boxes", image: hempCigaretteBoxes, link: "/industries/cigarette-boxes/custom-hemp-cigarette-boxes", desc: "Eco-friendly hemp cigarette packaging offering natural appeal and sustainable material construction." },
    { name: "Paper Cigarette Boxes", image: paperCigaretteBoxes, link: "/industries/cigarette-boxes/paper-cigarette-boxes", desc: "Classic paper cigarette packaging featuring elegant finishes and professional retail presentation." },
    { name: "Cardboard Cigarette Boxes", image: cardboardCigaretteBoxes, link: "/industries/cigarette-boxes/cardboard-cigarette-boxes", desc: "Sturdy cardboard packaging with premium print quality designed for durability and shelf impact." },
    { name: "Blank Cigarette Boxes", image: blankCigaretteBoxes, link: "/industries/cigarette-boxes/blank-cigarette-boxes", desc: "Plain white cigarette boxes ready for your fully custom branding and artistic graphic designs." },
    { name: "Disposable Cigarette Boxes", image: disposableCigaretteBoxes, link: "/industries/cigarette-boxes/disposable-cigarette-boxes", desc: "Single-use packaging solutions for convenience, portability, and high-impact branding possibilities." },
    { name: "Lighter Boxes", image: lighterBoxes, link: "/industries/cigarette-boxes/lighter-boxes", desc: "Custom lighter packaging with clear window display options and professional retail-ready branding." },
    { name: "Empty Cigarette Boxes", image: emptyCigaretteBoxes, link: "/industries/cigarette-boxes/empty-cigarette-boxes", desc: "Empty boxes ready for efficient product filling, featuring durable board and secure closure designs." },
    { name: "Cigarette Display Boxes", image: cigaretteDisplayBoxes, link: "/industries/cigarette-boxes/cigarette-display-boxes", desc: "Retail display stands designed for maximum brand visibility and organized product merchandising." },
    { name: "Cardboard Cigar Boxes", image: cardboardCigarBoxes, link: "/industries/cigarette-boxes/cardboard-cigar-boxes", desc: "Premium cigar packaging featuring luxury finishes and robust materials for high-end retail presentation." },
    { name: "Cigarette Cartons", image: cigaretteCartons, link: "/industries/cigarette-boxes/cigarette-cartons", desc: "Bulk cigarette carton packaging designed for secure wholesale distribution and prominent branding." },
];

const faqs = [
    { id: "item-1", q: "How does the thickness of cardboard help in preserving cigarette freshness?", a: "Thicker cardboard acts as a thermal insulator and a stronger physical barrier, shielding the cigarettes from sudden temperature changes and physical pressure that can compromise the inner seal and freshness of the tobacco. This increased density helps maintain a consistent internal environment, reducing the rate of moisture loss and keeping the product in optimal smoking condition for longer periods." },
    { id: "item-2", q: "Can you implement child-resistant locks on rigid cardboard cigarette boxes?", a: "Absolutely. Rigid cardboard is ideal for more complex CR mechanisms, such as sliding drawer locks and push-and-pull tabs, which require more structural strength to operate effectively and meet safety certifications. These locks are built into the cardboard's anatomy, ensuring they are both functional and durable throughout the life of the product." },
    { id: "item-3", q: "What is the recommended board grade for cardboard cigarette packaging?", a: "We recommend using 20pt to 28pt high-grade cardboard for maximum durability. This provides a solid, premium feel that doesn't buckle under pressure, ensuring the long-term protection of your valuable tobacco products during transport and retail display. Heavier board stock also allows for deeper embossing and more pronounced tactile branding effects." },
    { id: "item-4", q: "Does cardboard packaging offer more space for regulatory information?", a: "Yes, the robust nature of cardboard allows for larger box formats and folded flaps, providing ample surface area to print all required health warnings, ingredient lists, and branding without feeling overcrowded or cluttered. We meticulously plan the layout to ensure every legal requirement is met while leaving plenty of room for your unique brand designs." },
    { id: "item-5", q: "What finishing options are best for a rugged cardboard cigarette box?", a: "For a rugged yet premium look, we suggest a combination of soft-touch matte lamination and spot UV. This protects the cardboard from scuffs and moisture while highlighting your logo with a sharp, high-gloss contrast that commands attention on the shelf. This finish combination is particularly effective for outdoor or heritage-style tobacco brands." },
];

const CardboardCigaretteBoxes = () => {
    const [selectedImage, setSelectedImage] = useState(0);
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);

    const productImages = [
        { src: productHero, alt: "Cardboard Cigarette Boxes Sturdy View" },
        { src: productHero, alt: "Heavy-Duty Cardboard Tobacco Box" },
        { src: productHero, alt: "Premium Printed Cardboard Cigarette Pack" },
        { src: productHero, alt: "Secure Cardboard Cigarette Case" },
        { src: productHero, alt: "Retail Cardboard Tobacco Packaging" },
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
                <title>Cardboard Cigarette Boxes | Durable Custom Tobacco Packaging | CustomPackMakers</title>
                <meta name="description" content="Elevate your tobacco brand with sturdy and high-quality custom cardboard cigarette boxes. Superior protection, premium printing, and total customization for your retail needs." />
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
                            <BreadcrumbItem><BreadcrumbLink asChild><Link to="/industries/cigarette-boxes">Cigarette Boxes</Link></BreadcrumbLink></BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem><BreadcrumbPage>Cardboard Cigarette Boxes</BreadcrumbPage></BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </div>

            <section className="py-8 bg-background">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-7 space-y-6">
                            <div className="w-20 h-1.5 bg-primary rounded-full" />
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight">
                                <span className="text-primary text-black">Sturdy Cardboard</span> Cigarette Boxes
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Our custom cardboard cigarette boxes provide heavy-duty protection and high-impact branding for your premium tobacco products. Built for durability, these robust cases ensure regulatory compliance while delivering a high-quality retail presence.
                            </p>
                            <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300" onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}>
                                Get a Quote
                            </Button>
                        </div>
                        <div className="lg:col-span-5 relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-muted group">
                            <img src={productHero} alt="Cardboard Cigarette Boxes" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 max-w-3xl">Maximum Strength for Premium Tobacco Lines</h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            In the highly competitive tobacco industry, durability and brand presence are two factors that cannot be compromised. Our <strong className="text-foreground">custom cardboard cigarette boxes</strong> are specifically engineered for brands that require a higher level of structural integrity than traditional paper packs offer. By using high-grade, heavy-weight cardboard, we provide a packaging solution that stands up to the rigors of global distribution and frequent consumer handling, ensuring your cigarettes remain perfect from the factory to the flame.
                        </p>
                        <p>
                            The robustness of cardboard allows for a wider array of structural innovations and luxury finishes. Whether you are looking for a rigid magnetic flip-top case or a heavy-duty sliding drawer set, cardboard provides the solid foundation needed to support these high-end features. We offer total customization of the board weight and finish, allowing you to create a package that feels substantial and premium in the consumer's hand. From deep embossing that highlights your brand's heritage to soft-touch coatings that add a layer of modern sophistication, our cardboard boxes are designed to elevate your brand's retail value.
                        </p>
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
                                        <img src={img.src} alt={`Thumbnail ${i + 1}`} className="w-full h-full object-cover" />
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
                                            <div className="space-y-1.5 align-left">
                                                <Label htmlFor="length" className="text-xs font-semibold text-muted-foreground">L (in)</Label>
                                                <Input id="length" type="number" placeholder="4" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label>
                                                <Input id="width" type="number" placeholder="2.5" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">D (in)</Label>
                                                <Input id="depth" type="number" placeholder="1.2" className="h-9 bg-white" />
                                            </div>
                                        </div>
                                        <div className="space-y-1.5">
                                            <Label htmlFor="qty" className="text-xs font-semibold text-muted-foreground">Quantity</Label>
                                            <Input id="qty" type="number" placeholder="1000" className="h-9 bg-white" />
                                        </div>
                                        <div className="space-y-1.5">
                                            <Label htmlFor="name" className="text-xs font-semibold text-muted-foreground">Name</Label>
                                            <Input id="name" type="text" placeholder="Your Name" className="h-9 bg-white" />
                                        </div>
                                        <div className="space-y-1.5">
                                            <Label htmlFor="email" className="text-xs font-semibold text-muted-foreground">Email</Label>
                                            <Input id="email" type="email" placeholder="email@example.com" className="h-9 bg-white" />
                                        </div>
                                        <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 shadow-md hover:shadow-lg transition-all duration-300 mt-2">
                                            Submit Inquiry
                                        </Button>
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">The Science of Durable Cardboard Cigarette Boxes</h2>
                    <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="[&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-6 [&>h3]:mb-3 [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-4 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-4 [&>ul>li]:text-[15px] [&>ul>li]:text-slate-600">
                            <p>
                                For many high-end and heritage cigarette brands, standard paper packaging simply isn't enough. They require a material that speaks to the quality and history of the product inside while providing a level of protection that exceeds the industry norm. Custom cardboard cigarette boxes are the solution. At CustomPackMakers, we utilize heavy-duty, premium-grade cardboard to create packaging that is as tough as it is beautiful. These boxes are designed to solve the common problems of crushed cigarettes and compromised seals, ensuring that your customers enjoy a perfect product every time they open the pack. In a busy retail environment, the weight and solidity of a cardboard box are immediate signals of premium quality.
                            </p>
                            <h3>Why Cardboard Over Traditional Paper?</h3>
                            <p>
                                The primary advantage of cardboard is its density. While paper packs are lightweight and convenient, they are easily crushed in pockets or bags. Our cardboard boxes use board grades ranging from 20pt to 28pt, providing a rigid structural frame that protects the cigarettes from any external pressure. This durability also allows for more complex branding techniques like deep debossing and multi-level embossing, which require a thicker substrate to hold the detail. Cardboard is also inherently better at resisting humidity and temperature shifts, which can negatively affect the burning quality and flavor profile of the tobacco inside.
                            </p>
                            <h3>Material Engineering for Tobacco Preservation</h3>
                            <p>
                                Preserving the 'fresh-out-of-the-factory' state of tobacco is a matter of material engineering. Cardboard provides a thicker insulation layer than paper, shielding the inner contents from rapid shifts in external climate. We often pair our cardboard boxes with premium inner foil linings that are glued directly to the board, creating a seamless and airtight environment. This barrier prevents moisture from seeping in or essential oils from seeping out, maintaining the integrity of the tobacco's terpene profile for an extended period. Quality-focused brands recognize that the durability of the box is the first line of defense in product quality control.
                            </p>
                            <h3>Advanced Printing on Heavy-Duty Cardboard</h3>
                            <p>
                                Printing on thick cardboard requires precision technology. We utilize advanced offset and digital presses that are calibrated to handle high-density board stock with total accuracy. This ensures that your brand colors are vibrant and that fine details in your artwork are perfectly reproduced. For cardboard packaging, we often recommend matte or soft-touch laminations to provide a sophisticated, velvet-like feel. These finishes also add a layer of scuff resistance, ensuring the box looks pristine even after being handled multiple times on the retail shelf or during transit.
                            </p>
                            <h3>Legal Compliance and Regulatory Requirements</h3>
                            <p>
                                The tobacco market is heavily regulated, and your packaging must reflect that. The larger surface area and structural variety of cardboard boxes provide ample room to integrate mandatory health warnings, nicotine content labels, and tax stamps without compromising the brand's aesthetic. We ensure that every piece of legal text is printed at the required font size and contrast level to meet national and international standards. Our design team is experienced in jurisdictional regulations, helping you navigate the complexities of tobacco labeling to ensure your products are legally compliant and ready for sale in any market.
                            </p>
                            <h3>Structural Innovation: Beyond the Slide Box</h3>
                            <p>
                                One of the greatest benefits of cardboard is the ability to experiment with structural design. Beyond the traditional hinged flip-top, we can create sliding drawer boxes that offer a luxurious unveiling experience. We also design rigid shell-and-slide packs and magnetic closure sets for limited-edition or premium-tier products. These structural innovations are only possible because of the inherent strength of the cardboard, which allows for mechanical features that would tear or collapse on a lighter-weight paper pack. Your box's anatomy can be just as unique as the blend inside.
                            </p>
                            <h3>Custom Inserts and Wholesale Distribution</h3>
                            <p>
                                Cardboard boxes are the preferred choice for bulk and wholesale distribution due to their stackability and compression strength. They are far less likely to suffer from 'edge crush' during palletized shipping, reducing the risk of wholesale returns. Inside the box, we can incorporate cardboard or foam inserts to hold cigarettes or accessories like lighters and filters securely in place. This prevents rattling and ensures a professional presentation upon unboxing. We offer competitive wholesale pricing on all cardboard products, providing a cost-effective solution for large-scale tobacco manufacturing.
                            </p>
                            <h3>Sustainable Cardboard Solutions</h3>
                            <p>
                                Just because the packaging is heavy-duty doesn't mean it can't be green. We offer high-strength cardboard made from 100% recycled fibers that still provide excellent structural performance. These eco-friendly options are fully recyclable and can be paired with water-based coatings and soy inks to minimize their environmental footprint. We help you create a 'sustainable luxury' brand story by combining the robustness of cardboard with the ethics of environmental responsibility, a combination that is increasingly popular with modern, conscious consumers.
                            </p>
                            <h3>The Tactile Advantage of Cardboard</h3>
                            <p>
                                There is a psychological weight to quality. When a consumer picks up a cigarette box made of heavy cardboard, they immediately perceive it as more valuable than a flimsy paper alternative. This tactile feedback is a powerful brand-building tool. We enhance this experience through textured finishes like linen or sand-pattern coatings, which add a unique grip and a premium feel to the box. In an industry where sensory experience is everything, your packaging should be as satisfying to hold as your product is to use.
                            </p>
                            <h3>Conclusion: Building Brand Authority with Cardboard</h3>
                            <p>
                                A custom cardboard cigarette box is an investment in your brand's authority and consumer trust. At CustomPackMakers, we combine heavy-duty materials with world-class printing and innovative structural engineering to deliver packaging that protects your product and elevates your brand's market position. From the strength of the board grade to the precision of the finishing, we ensure every aspect of your box reflects the excellence of your tobacco. Contact us today to discuss how our cardboard packaging solutions can help you achieve retail success and provide a superior consumer experience.
                            </p>
                            <h3>Cardboard Packaging Design Checklist</h3>
                            <ul>
                                <li><strong>Board Weight:</strong> Choose 20pt+ for a true 'premium cardboard' feel.</li>
                                <li><strong>Finish Strategy:</strong> Use soft-touch matte to reduce scuffing and fingerprints.</li>
                                <li><strong>Structural Fit:</strong> Ensure hinges and slides have a tight, precise tolerance.</li>
                                <li><strong>Color Consistency:</strong> Use PMS matching to ensure brand colors stay true on denser board.</li>
                                <li><strong>Regulatory Clarity:</strong> Place health warnings in high-contrast zones for total compliance.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-8 bg-accent/20">
                <div className="container mx-auto px-[5vw]">
                    <div className="mb-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Related Cigarette Products</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl">Explore our complete cigarette packaging range for every format and application.</p>
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
                                <button
                                    key={i}
                                    className={`h-2 rounded-full transition-all duration-300 ${i === current ? "w-8 bg-primary" : "w-2 bg-primary/20 hover:bg-primary/50"}`}
                                    onClick={() => api?.scrollTo(i)}
                                    aria-label={`Go to slide ${i + 1}`}
                                />
                            ))}
                        </div>
                    </Carousel>
                </div>
            </section>

            <section className="py-12 relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #fafafa 0%, #f4f6ff 60%, #f0fdf8 100%)' }}>
                <div className="container mx-auto px-[30px] relative z-10">
                    <div className="text-center mb-14">
                        <span className="inline-block text-xs font-semibold tracking-widest text-primary uppercase mb-3 bg-primary/10 px-4 py-1.5 rounded-full">Our Promise</span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">Why Brands Choose <span className="text-primary text-black">CustomPackMakers</span></h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Providing unmatched structural density, high-resolution cardboard printing, and retail-ready tobacco compliance.</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">
                        <div className="space-y-5">
                            {[
                                {
                                    title: "Industrial Grade Board Selection",
                                    body: "We provide access to high-density board options ranging from 20pt up to 28pt, ensuring that your heavy-duty cigarette packaging resists crushing and holds its shape during transition. Our cardboard is sourced for its superior fiber strength, providing a solid and professional retail presence that commands immediate respect and confirms tobacco quality to every customer."
                                },
                                {
                                    title: "Precision Tobacco Compliance",
                                    body: "Our cardboard cigarette boxes offer the structural surface area required to host all mandatory legal warnings and health declarations with total clarity. We use high-impact offset printing to ensure every piece of regulatory information meets national and international standards, protecting your brand from legal liability while maintaining a clean and professional retail aesthetic."
                                },
                                {
                                    title: "Advanced Finish Engineering",
                                    body: "Using a combination of soft-touch matte coatings and tactical spot UV, we create high-contrast packaging that resists retail scuffs and fingerprints. Our finish engineering focuses on both aesthetic beauty and structural surface protection, ensuring that your cardboard cigarette boxes retain their premium look and feel long after they have left the factory for the retail shelves."
                                },
                            ].map((item, i) => (
                                <div key={i}>
                                    <div className="flex gap-6 items-start group">
                                        <div className="flex-shrink-0 mt-1">
                                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                                            <p className="text-sm text-slate-500 leading-relaxed">{item.body}</p>
                                        </div>
                                    </div>
                                    {i < 2 && <div className="w-full h-px bg-slate-100 mt-5" />}
                                </div>
                            ))}
                        </div>
                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img src={productHero} alt="Heavy Duty Cardboard Tobacco Box" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-7">
                                    <p className="text-white font-bold text-lg leading-snug mb-1">Trusted by Industrial Brands</p>
                                    <p className="text-white/75 text-sm">Setting the standard in durable retail packaging.</p>
                                </div>
                            </div>
                            <div className="absolute top-4 -right-2 lg:-right-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80">
                                <p className="text-2xl font-bold text-primary leading-none">28pt</p>
                                <p className="text-xs text-slate-400 mt-1 font-medium">Max Density</p>
                            </div>
                            <div className="absolute bottom-4 -left-2 lg:-left-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80">
                                <p className="text-2xl font-bold text-emerald-500 leading-none">600+</p>
                                <p className="text-xs text-slate-400 mt-1 font-medium">GSM Grade</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Differentiate Section */}
            <section className="py-10 lg:py-12 bg-white overflow-hidden relative">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="relative group">
                            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] border border-primary/20 shadow-2xl transform transition-transform duration-700 hover:scale-[1.02]">
                                <img src={productHero} alt="Differentiate Your Cardboard Brand" className="w-full h-full object-cover" />
                            </div>
                        </div>
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                                Differentiate Your <span className="text-primary text-black">Cardboard Brand</span> From Others
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                Differentiate your tobacco brand with our robust and precision-engineered custom cardboard packaging solutions. Our high-quality cardboard cigarette boxes are designed to provide maximum protection for premium rolls while offering a sturdy, professional aesthetic that resonates with value-focused consumers. By incorporating advanced printing techniques like matte lamination and structural reinforcements, we help your products stand out on busy retail shelves with superior strength. Invest in durable cardboard packaging that reinforces brand reliability and ensures your cigarettes arrive in perfect condition, enhancing the overall quality perception of your merchandise.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-6 bg-slate-50">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <h2 className="text-2xl md:text-3xl font-bold text-foreground">Frequently Asked Questions</h2>
                                <p className="text-base text-muted-foreground">We're confident that you will love our products and service.</p>
                            </div>
                            <Accordion type="single" collapsible defaultValue="item-1" className="w-full space-y-2">
                                {faqs.map((faq) => (
                                    <AccordionItem key={faq.id} value={faq.id} className="border border-slate-200 rounded-lg bg-white overflow-hidden data-[state=open]:border-primary data-[state=open]:ring-1 data-[state=open]:ring-primary/20 data-[state=open]:bg-primary/5 transition-all duration-300">
                                        <AccordionTrigger className="px-5 py-3 hover:no-underline [&>svg]:hidden group">
                                            <span className="text-left font-semibold text-foreground text-base">
                                                {faq.q}
                                            </span>
                                            <div className="shrink-0 ml-4 p-1 rounded-full bg-slate-100 group-data-[state=open]:bg-primary group-data-[state=open]:text-white transition-colors duration-200">
                                                <Plus className="h-3 w-3 group-data-[state=open]:hidden" />
                                                <Minus className="h-3 w-3 hidden group-data-[state=open]:block" />
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent className="px-5 pb-5 pt-0 text-slate-600 leading-relaxed text-sm">
                                            {faq.a}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                        <div className="relative w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden">
                            <img src={FAQimage} alt="FAQ for Cardboard Cigarette Boxes" className="absolute inset-0 w-full h-full object-cover" />
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

export default CardboardCigaretteBoxes;
