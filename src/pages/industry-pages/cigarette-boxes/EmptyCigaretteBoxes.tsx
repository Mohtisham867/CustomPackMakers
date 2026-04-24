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

import productHero from "@/assets/cigarette-boxes/empty-cigarette-boxes.webp";
import FAQimage from "@/assets/FAQ-image.webp";
import eCigaretteBoxes from "@/assets/cigarette-boxes/e-cigarette-boxes.webp";
import hempCigaretteBoxes from "@/assets/cigarette-boxes/hemp-cigarette-boxes.webp";
import paperCigaretteBoxes from "@/assets/cigarette-boxes/paper-cigarette-boxes.webp";
import cardboardCigaretteBoxes from "@/assets/cigarette-boxes/cardboard-cigarette-boxes.webp";
import blankCigaretteBoxes from "@/assets/cigarette-boxes/blank-cigarette-boxes.webp";
import disposableCigaretteBoxes from "@/assets/cigarette-boxes/disposable-cigarette-boxes.webp";
import lighterBoxes from "@/assets/cigarette-boxes/lighter-boxes.webp";
import emptyCigaretteBoxes from "@/assets/cigarette-boxes/empty-cigarette-boxes.webp";
import cigaretteDisplayBoxes from "@/assets/cigarette-boxes/cigarette-display-boxes.webp";
import cardboardCigarBoxes from "@/assets/cigarette-boxes/cardboard-cigar-boxes.webp";
import cigaretteCartons from "@/assets/cigarette-boxes/cigarette-cartons.webp";

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
    { id: "item-1", q: "How do empty cigarette boxes maintain their shape during high-speed automated filling?", a: "Our empty boxes are engineered with reinforced score lines and high-tensile paperboard that prevent warping or collapsing under the pressure of automated filling machines. This structural stability ensures a 0% failure rate during the packaging phase, keeping your production line moving efficiently and reducing material waste in large-scale manufacturing environments." },
    { id: "item-2", q: "Can I order empty boxes with pre-applied child-resistant features?", a: "Yes, we specialized in producing empty boxes with pre-integrated and ASTM-certified child-resistant locking flaps. These are designed to be fully compatible with standard filling equipment, allowing you to add safety compliance to your production line without requiring secondary manual steps. This integration ensures that the safety feature is as robust and reliable as the box itself." },
    { id: "item-3", q: "What board grade is best for efficient machine handling of empty packs?", a: "We recommend a 16pt to 18pt SBS or high-density recycled board. This thickness provides the necessary rigidity for robotic suction cups and folding arms to grip the box securely without causing surface indentations or feeding errors in your automated systems. This specific board grade is also optimized for high-speed folding without cracking along the score lines." },
    { id: "item-4", q: "Is there enough room on empty boxes for both branding and industrial batch coding?", a: "Absolutely. We design our layouts with dedicated 'clear zones' for your industrial inkjet or laser batch coding. This ensures that essential production data remains legible without interfering with your brand's high-definition graphics or mandatory legal health warnings. We can provide technical templates to ensure your coding equipment is perfectly aligned with these zones." },
    { id: "item-5", q: "Do you offer bulk wholesale pricing for high-volume empty box orders?", a: "We specialize in high-volume production and offer significantly reduced per-unit costs for large wholesale orders. Our facility is optimized for millions of units, providing the consistent quality and rapid delivery times required to support global tobacco manufacturing operations. We also offer multi-year supply contracts to ensure price stability for our largest clients." },
];

const EmptyCigaretteBoxes = () => {
    const [selectedImage, setSelectedImage] = useState(0);
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);

    const productImages = [
        { src: productHero, alt: "Empty Cigarette Boxes - Manufacturing View" },
        { src: productHero, alt: "High-Speed Filling Compatible Box" },
        { src: productHero, alt: "Empty Tobacco Packaging Solution" },
        { src: productHero, alt: "Ready-to-Fill Cigarette Pack" },
        { src: productHero, alt: "Bulk Empty Cigarette Boxes" },
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
                <title>Empty Cigarette Boxes | High-Speed Filling Ready | CustomPackMakers</title>
                <meta name="description" content="Discover professional-grade empty cigarette boxes optimized for automated filling lines. Durable, compliant, and cost-effective packaging for global tobacco manufacturing." />
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
                            <BreadcrumbItem><BreadcrumbPage>Empty Cigarette Boxes</BreadcrumbPage></BreadcrumbItem>
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
                                <span className="text-primary text-black">Empty Wholesale</span> Cigarette Boxes
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Our high-quality empty cigarette boxes offer the perfect structural housing for your large-scale tobacco manufacturing. Engineered for efficient filling and durable protection, these premium cases ensure regulatory compliance and professional retail presentation.
                            </p>
                            <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300" onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}>
                                Get a Quote
                            </Button>
                        </div>
                        <div className="lg:col-span-5 relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-muted group">
                            <img src={productHero} alt="Empty Cigarette Boxes" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 max-w-3xl">Optimized for Industrial Efficiency and Speed</h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            In the massive global tobacco market, efficiency in the manufacturing and packaging phase is a critical driver of profitability. Our <strong className="text-foreground">custom empty cigarette boxes</strong> are specifically engineered to integrate seamlessly with high-speed automated filling lines. We understand that even a minor structural inconsistency can lead to costly downtime in an industrial environment. That's why every batch of our empty boxes is manufactured with rigorous adherence to dimensional tolerances, ensuring a flawlessly smooth feed through your proprietary machines.
                        </p>
                        <p>
                            Beyond machine compatibility, our empty packs deliver the high-level branding and durability your product requires. Utilizing premium SBS paperboard and high-definition offset printing, we provide a packaging solution that looks stunning on the retail shelf while surviving the rigors of mass distribution. We offer a wide range of customization options, from specialized varnishes that reduce friction on the production line to high-resolution areas for industrial batch coding and health warning integration. Our empty box solutions are the gold standard for global tobacco brands that refuse to choose between manufacturing speed and retail excellence.
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
                                    <h3 className="text-xl font-bold text-foreground mb-5">Bulk Wholesale Inquiry</h3>
                                    <form className="space-y-4">
                                        <div className="grid grid-cols-3 gap-3">
                                            <div className="space-y-1.5 align-left">
                                                <Label htmlFor="length" className="text-xs font-semibold text-muted-foreground">L (in)</Label>
                                                <Input id="length" type="number" placeholder="3.5" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label>
                                                <Input id="width" type="number" placeholder="2.1" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">D (in)</Label>
                                                <Input id="depth" type="number" placeholder="0.8" className="h-9 bg-white" />
                                            </div>
                                        </div>
                                        <div className="space-y-1.5">
                                            <Label htmlFor="qty" className="text-xs font-semibold text-muted-foreground">Quantity (Wholesale)</Label>
                                            <Input id="qty" type="number" placeholder="10000" className="h-9 bg-white" />
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
                                            Get Wholesale Price
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">Mastering Large-Scale Efficiency with Empty Cigarette Boxes</h2>
                    <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="[&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-6 [&>h3]:mb-3 [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-4 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-4 [&>ul>li]:text-[15px] [&>ul>li]:text-slate-600">
                            <p>
                                In the industrial heart of the tobacco world, the humble empty cigarette box is a marvel of precision engineering. For global manufacturers, these boxes are more than just containers; they are integral components of a high-speed production system that must operate with absolute reliability. At CustomPackMakers, we specialize in delivering high-volume empty box solutions that are calibrated for consistency, durability, and retail impact. We bridge the gap between heavy-duty manufacturing needs and premium consumer expectations, providing the structural shells that carry some of the world's most recognizable brands. Our focus is on ensuring that your production line never stops and your product always looks its retail best.
                            </p>
                            <h3>Engineering for Automated High-Speed Filling</h3>
                            <p>
                                The biggest challenge with empty boxes in a factory setting is mechanical consistency. High-speed filling machines rely on precise dimensional tolerances to fold, fill, and seal thousands of units per hour. Even a fractional deviation in board thickness or score line placement can cause jams and production delays. We use state-of-the-art CAD/CAM manufacturing and automated inspection systems to ensure that every empty box in a million-unit run meets your exact machine specifications. Our boxes are designed to lay flat for space-efficient shipping and then pop open with perfect reliability when they hit your conveyor belts, maximizing your operational uptime.
                            </p>
                            <h3>Material Physics: Ridigity and Surface Friction</h3>
                            <p>
                                Selecting the right board for empty packaging is a science. We typically recommend 16pt to 18pt SBS for its optimal balance of strength and flexibility. The material must be rigid enough to withstand robotic handling but flexible enough to fold cleanly without cracking. Furthermore, we can apply specialized low-friction varnishes to the exterior of the boxes. These 'slip-coatings' prevent the boxes from sticking together during high-speed feeding, a common cause of industrial packaging failures. This attention to material physics ensures that your packaging is as high-performing as the machinery that fills it.
                            </p>
                            <h3>High-Definition Printing and Global Branding</h3>
                            <p>
                                Being 'empty' doesn't mean the boxes are simple. Our empty packs feature the same high-definition offset printing used for finished retail products. We can reproduce complex brand graphics, metallic accents, and intricate security features with total color consistency across massive production runs. This consistency is vital for maintaining brand equity across different global markets. We also utilize high-resolution plate technology to ensure that even the smallest legal text and ingredient lists remain perfectly sharp, meeting all international standards for tobacco brand presentation.
                            </p>
                            <h3>Regulatory Compliance Spatial Planning</h3>
                            <p>
                                Navigating the global maze of tobacco packaging regulations requires expert planning. Empty cigarette boxes must host mandatory health warnings, nicotine disclosures, and tax stamp zones that vary significantly from country to country. Our design team works within these jurisdictional constraints, mapping out 'legal zones' that meet all font and contrast requirements without interfering with your primary branding. We ensure that your empty boxes are retail-ready for any market, protecting you from the legal and logistical nightmares of regulatory non-compliance and retail rejection.
                            </p>
                            <h3>Industrial Coding and Batch Tracking</h3>
                            <p>
                                Traceability is a modern manufacturing requirement. We design our empty boxes with dedicated 'clear sections'—areas of the board left unvarnished or specifically treated to receive industrial inkjet or laser coding. This allows your production equipment to apply batch numbers, expiry dates, and QR codes with total legibility and ink adhesion. This spatial planning is critical for high-speed tracking systems that monitor product movement throughout the global supply chain, ensuring that your data remains as clear as your branding.
                            </p>
                            <h3>Sustainability in High-Volume Manufacturing</h3>
                            <p>
                                Scaling a brand sustainably is an increasing priority for global tobacco leaders. We offer empty boxes made from FSC-certified recycled materials that provide the same industrial performance as virgin board. These high-volume sustainable solutions are fully recyclable and biodegradable, helping your brand meet its corporate social responsibility (CSR) goals while satisfying the environmental ethics of modern consumers. When paired with our low-waste manufacturing processes and soy-based inks, your industrial packaging becomes a powerful statement of environmental leadership.
                            </p>
                            <h3>Tactile Excellence and Consumer Perception</h3>
                            <p>
                                While the box starts in a factory, it ends in a consumer's hands. We ensure that our empty packs maintain their structural integrity and tactile appeal throughout the distribution process. Using premium coatings like soft-touch matte or high-gloss aqueous, we create a surface that is satisfying to touch and visually command attention. The solid 'snap' of the lid and the crisp feel of the corners are sensory cues that tell the consumer they are holding a high-quality product, reinforcing the prestige of your tobacco blend before the pack is even opened.
                            </p>
                            <h3>Wholesale Logistics and Supply Chain Reliability</h3>
                            <p>
                                At CustomPackMakers, we operate as a strategic partner to your supply chain. We offer flexible manufacturing schedules and inventory management solutions that ensure you never run out of the packaging you need. Our facilities are designed for high-volume output, allowing us to offer the industry's most competitive wholesale pricing while maintaining strict quality control. We provide detailed logistics support, ensuring that your massive shipments of empty boxes arrive on time, every time, and in perfect condition for your production cycles.
                            </p>
                            <h3>Conclusion: The Foundation of Retail Success</h3>
                            <p>
                                Your empty cigarette boxes are the first physical step in your product's journey to the consumer. At CustomPackMakers, we provide the engineering excellence and manufacturing scale needed to ensure that step is a success. From industrial-grade material selection to high-precision regulatory printing, every aspect of our empty packaging is optimized for your efficiency and your brand's prestige. Contact us today to discuss your global production requirements and discover how our custom empty box solutions can optimize your manufacturing and elevate your retail status.
                            </p>
                            <h3>Industrial Packaging Quality Checklist</h3>
                            <ul>
                                <li><strong>Dimensional Tolerance:</strong> Verify +/- 0.5mm accuracy for machine compatibility.</li>
                                <li><strong>Score Line Tension:</strong> Ensure clean folds without board cracking at high speeds.</li>
                                <li><strong>Ink Adhesion:</strong> Test coding zones for total ink/laser reception.</li>
                                <li><strong>Surface Coefficient:</strong> Match the slip-varnish level to your specific feeder type.</li>
                                <li><strong>Color Consistency:</strong> Use spectrophotometer monitoring for stable brand shades.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Products Section */}
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

            {/* Why Brands Choose Section */}
            <section className="py-12 relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #fafafa 0%, #f4f6ff 60%, #f0fdf8 100%)' }}>
                <div className="container mx-auto px-[30px] relative z-10">
                    <div className="text-center mb-14">
                        <span className="inline-block text-xs font-semibold tracking-widest text-primary uppercase mb-3 bg-primary/10 px-4 py-1.5 rounded-full">Our Promise</span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">Why Brands Choose <span className="text-primary text-black">CustomPackMakers</span></h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Providing industrial-grade consistency, high-speed filling compatibility, and global wholesale scale for tobacco manufacturers.</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">
                        <div className="space-y-5">
                            {[
                                {
                                    title: "Industrial-Grade Dimensional Consistency",
                                    body: "Our empty cigarette boxes are manufactured with absolute adherence to industrial dimensional tolerances, ensuring a flawlessly smooth and failure-free feed through your proprietary high-speed automated filling lines. We utilize advanced CAD/CAM technology to guarantee that every box meets your machine's exact mechanical requirements to maximize your production uptime."
                                },
                                {
                                    title: "Expert Regulatory Spatial Planning",
                                    body: "We excel in the spatial planning required to integrate mandatory health warnings and legal nicotine disclosures on empty boxes without sacrificing your brand's primary visual identity. Our high-definition printing technology ensure every jurisdictional requirement is met with 100% clarity, protecting your global manufacturing operations from regulatory liability and retail rejection."
                                },
                                {
                                    title: "Advanced Surface Physics Calibration",
                                    body: "Using specialized low-friction varnishes and high-tensile paperboard grades, we calibrate the surface physics of our empty packs for optimal vacuum-grip and folding-arm performance. This attention to detail reduces mechanical friction and material waste on your production floor, providing a cost-effective and highly efficient packaging solution for your large-scale tobacco distribution."
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
                                <img src={productHero} alt="Industrial Empty Tobacco Packaging" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-7">
                                    <p className="text-white font-bold text-lg leading-snug mb-1">Trusted by Global Manufacturers</p>
                                    <p className="text-white/75 text-sm">Setting the standard in high-speed retail packaging.</p>
                                </div>
                            </div>
                            <div className="absolute top-4 -right-2 lg:-right-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80">
                                <p className="text-2xl font-bold text-primary leading-none">0%</p>
                                <p className="text-xs text-slate-400 mt-1 font-medium">Machine Failure</p>
                            </div>
                            <div className="absolute bottom-4 -left-2 lg:-left-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80">
                                <p className="text-2xl font-bold text-emerald-500 leading-none">1M+</p>
                                <p className="text-xs text-slate-400 mt-1 font-medium">Daily Output</p>
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
                                <img src={productHero} alt="Differentiate Your Wholesale Brand" className="w-full h-full object-cover" />
                            </div>
                        </div>
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                                Differentiate Your <span className="text-primary text-black">Wholesale Brand</span> From Others
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                Differentiate your tobacco manufacturing with our efficient and precision-engineered custom empty packaging solutions. Our high-quality empty cigarette boxes are designed to provide maximum protection for mass-produced rolls while offering a clean, professional aesthetic that resonates with large-scale distributors. By incorporating advanced printing techniques like high-speed offset calibration and durable board reinforcements, we help your products stand out with a consistent and premium look. Invest in durable, empty packaging that reinforces brand scale and ensures your cigarettes arrive in perfect condition, significantly optimizing your overall production and retail efficiency.
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
                            <img src={FAQimage} alt="FAQ for Empty Cigarette Boxes" className="absolute inset-0 w-full h-full object-cover" />
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

export default EmptyCigaretteBoxes;
