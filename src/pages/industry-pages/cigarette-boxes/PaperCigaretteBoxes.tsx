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

import productHero from "@/assets/cigarette-boxes/paper-cigarette-boxes.webp";
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
    { id: "item-1", q: "How do paper cigarette boxes protect the moisture content of tobacco?", a: "We use moisture-resistant coatings and inner foil laminates that create a protective barrier, preventing the tobacco from drying out and maintaining its intended flavor profile and smooth smoking experience. This barrier also protects against external humidity, ensuring the cigarettes do not become soggy or lose their combustion quality." },
    { id: "item-2", q: "Are there child-resistant options for lightweight paper cigarette packs?", a: "Yes, we offer specialized paperboard structures with reinforced locking tabs and 'squeeze-and-pull' mechanisms that provide ASTM-certified child resistance without the need for thick plastic components, maintaining a sleek paper profile. These designs are rigorously tested to ensure they meet all safety standards while remaining easy for adults to open." },
    { id: "item-3", q: "What is the standard GSM for high-quality paper cigarette boxes?", a: "We typically use 250gsm to 350gsm premium paperboard (SBS or C1S) to balance lightweight portability with the structural rigidity required to prevent crushing during transit and daily use by consumers. This range provides a high-quality surface for sharp printing and various finishes like gloss or matte lamination." },
    { id: "item-4", q: "Can you print mandatory health warnings directly on the paper boxes?", a: "Absolutely. Our high-definition offset printing ensures that all mandatory health warnings and regulatory text are sharp and fully compliant with national and international tobacco labeling standards across all box faces. We can handle multiple languages and specific jurisdictional requirements with ease to ensure your products are retail-ready." },
    { id: "item-5", q: "Do you offer textured paper options for a more premium cigarette pack?", a: "Yes, we provide various textured finishes, including linen, pebble, and soft-touch matte, which add a distinctive tactile dimension to your packaging, helping your brand feel more luxurious and unique in the hand. These textures are often combined with embossing or foil stamping to create a truly high-end consumer product." },
];

const PaperCigaretteBoxes = () => {
    const [selectedImage, setSelectedImage] = useState(0);
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);

    const productImages = [
        { src: productHero, alt: "Paper Cigarette Boxes Classic Design" },
        { src: productHero, alt: "Premium Paperboard Cigarette Case" },
        { src: productHero, alt: "Custom Printed Paper Cigarette Box" },
        { src: productHero, alt: "Traditional Paper Tobacco Packaging" },
        { src: productHero, alt: "Lightweight Paper Cigarette Pack" },
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
                <title>Paper Cigarette Boxes | Premium Custom Paper Packaging | CustomPackMakers</title>
                <meta name="description" content="Discover elegant and durable paper cigarette boxes for your brand. High-quality printing, customizable finishes, and compliant designs to elevate your tobacco packaging." />
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
                            <BreadcrumbItem><BreadcrumbPage>Paper Cigarette Boxes</BreadcrumbPage></BreadcrumbItem>
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
                                <span className="text-primary text-black">Classic Paper</span> Cigarette Boxes
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Our premium paper cigarette boxes offer classic styling and exceptional protection for your tobacco brands. Engineered with high-quality finishes, these lightweight yet sturdy cases ensure regulatory compliance while delivering a professional retail experience.
                            </p>
                            <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300" onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}>
                                Get a Quote
                            </Button>
                        </div>
                        <div className="lg:col-span-5 relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-muted group">
                            <img src={productHero} alt="Paper Cigarette Boxes" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 max-w-3xl">Timeless Design Meets Modern Durability</h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            For decades, paper has been the gold standard for cigarette packaging, offering a perfect balance between cost-efficiency, printability, and portable convenience. Our <strong className="text-foreground">paper cigarette boxes</strong> are a modern interpretation of this classic format, utilizing high-grade SBS (Solid Bleached Sulfate) paperboard to ensure a smooth, brilliant white surface for your custom branding. These boxes are not just containers; they are a critical part of the retail tradition, providing the clean lines and crisp 'snap' that consumers associate with premium tobacco products.
                        </p>
                        <p>
                            We offer extensive customization for our paper boxes, ranging from the weight of the cardstock to the intricate details of the finish. Whether you prefer a matte look for a modern vibe or a high-gloss finish for retail vibrancy, our printing technology ensures every detail of your logo is reproduced with total accuracy. Beyond aesthetics, our paper boxes are engineered for structural stability. We incorporate precise scoring and folding techniques that ensure the box retains its shape even after repeated use, protecting your cigarettes from bending or breaking while maintaining a slim, pocketable profile that users love.
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">Mastering Paper Cigarette Box Aesthetics and Function</h2>
                    <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="[&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-6 [&>h3]:mb-3 [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-4 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-4 [&>ul>li]:text-[15px] [&>ul>li]:text-slate-600">
                            <p>
                                In the world of tobacco retail, the paper cigarette box remains the absolute classic. Despite the advent of new materials, paperboard continues to dominate due to its versatility, exceptional print quality, and environmental friendliness. At CustomPackMakers, we specialize in elevating this traditional format into a high-performance branding asset. Our paper boxes are engineered to serve three primary goals: protecting the integrity of your tobacco product, complying with rigorous international regulations, and providing a visually stunning platform for your brand's unique identity. Whether you're targeting a mass-market audience or a niche luxury segment, our paper packaging is designed to deliver excellence at every touchpoint.
                            </p>
                            <h3>Why Choose Paperboard for Cigarette Boxes?</h3>
                            <p>
                                Paperboard, specifically Solid Bleached Sulfate (SBS), is the preferred material for cigarette packaging because of its superior surface smoothness and whiteness. This allows for the highest level of color accuracy and detail in printing, which is essential for brand recognition and regulatory compliance. Paper is also a highly sustainable choice; our materials are FSC-certified and fully recyclable, helping your brand meet modern environmental standards. Furthermore, paperboard provides the 'dead-fold' characteristic that allows for crisp corners and secure lids, ensuring the box feels solid and premium in the consumer's hand.
                            </p>
                            <h3>Material Science and Tobacco Preservation</h3>
                            <p>
                                Maintaining the moisture level of tobacco is critical to the smoking experience. Too much moisture leads to mold, while too little causes the tobacco to burn too fast and lose its flavor. Our paper cigarette boxes often feature an internal aluminum foil or metallized paper laminate that acts as a moisture vapor barrier. This ensures that the product inside remains in its optimal state for months on the shelf. We also offer various board weights, and we recommend a minimum of 250gsm to ensure that the box does not crush under the weight of other packs during transit or while being carried in a pocket.
                            </p>
                            <h3>Advanced Printing Techniques for Retail Impact</h3>
                            <p>
                                The retail shelf is a battlefield for brand attention. We help your product stand out through the use of advanced printing and finishing techniques. Our high-definition offset printing can reproduce complex gradients and intricate patterns with total clarity. To add a layer of luxury, we offer techniques like Spot UV, which adds a glossy sheen to specific brand elements, and foil stamping in gold, silver, or holographic finishes. Embossing and debossing are also popular for paper boxes, adding a 3D tactile dimension that makes the logo feel significant and high-value. These details communicate quality before a single cigarette is ever lit.
                            </p>
                            <h3>Compliance with International Labeling Standards</h3>
                            <p>
                                The tobacco industry is subject to some of the world's most stringent packaging regulations. From the size and placement of health warnings to ingredient disclosures and tax stamps, every millimeter of the box must be considered. Our design team works closely with you to ensure that all legal requirements are met without sacrificing your brand's aesthetic. We use high-resolution printing to ensure that even the smallest legal text is sharp and legible, protecting your business from regulatory fines and retail disruptions. We are experts in multi-region compliance, helping you launch products globally with confidence.
                            </p>
                            <h3>Structural Styles and Opening Mechanisms</h3>
                            <p>
                                The 'unboxing' or 'popping open' a cigarette pack is an iconic part of the user experience. We offer various structural styles to enhance this interaction. The traditional flip-top (hinged lid) box remains the most popular for its intuitive use and structural strength. We also offer slide boxes, which provide a modern gift-box feel, and slim-case designs for specialty 'lights' or premium blends. Our precision die-cutting ensures that every lid fits perfectly, providing a satisfying snap and a secure seal that protects the contents while signaling quality construction to the consumer.
                            </p>
                            <h3>Custom Inserts and Bundle Packaging</h3>
                            <p>
                                For premium gift sets or multi-pack cartons, we offer custom inserts and secondary paper packaging. These inserts can be made of lighter-weight paperboard and are designed to hold individual packs or accessories securely. We can also create custom paper cartons for bulk sales, ensuring that your branding remains consistent from the individual pack all the way to the wholesale level. This level of consistency reinforces brand authority and professional retail presentation.
                            </p>
                            <h3>Eco-Friendly Packaging for Green Brands</h3>
                            <p>
                                Sustainability is a growing priority for many consumers. We offer eco-friendly paper boxes made from 100% post-consumer waste (PCW) recycled materials. These materials have a unique, natural texture that can be a great asset for brands looking to convey an organic or 'heritage' brand story. When combined with soy-based inks, these boxes are fully compostable and biodegradable. We help you navigate the balance between sustainability and protection, ensuring your green packaging still provides the high-level barrier protection your product needs.
                            </p>
                            <h3>Wholesale Solutions with Fast Turnarounds</h3>
                            <p>
                                Whether you're a boutique brand or a large-scale manufacturer, we offer scalable production solutions. Our wholesale pricing models are designed to give you the best possible cost-per-unit, allowing you to stay competitive in a price-sensitive market. We utilize a streamlined manufacturing process that minimizes waste and maximizes efficiency, allowing us to offer some of the industry's fastest turnaround times without compromising on our strict quality control standards.
                            </p>
                            <h3>Conclusion: The Enduring Value of Paper Packaging</h3>
                            <p>
                                A custom paper cigarette box is more than just a container; it's a physical representative of your brand's heritage and commitment to quality. At CustomPackMakers, we combine traditional craftsmanship with modern material science to deliver paper packaging that protects, informs, and inspires. From the crispness of the printing to the strength of the board, every element is optimized for excellence. Contact us today to learn how our custom paper solutions can help you build brand equity and delight your customers with every pack.
                            </p>
                            <h3>Paper Packaging Design Checklist</h3>
                            <ul>
                                <li><strong>Board Selection:</strong> Use high-grade SBS for the best print results.</li>
                                <li><strong>Barrier Protection:</strong> Always include an inner foil for moisture control.</li>
                                <li><strong>Regulatory Zones:</strong> Ensure health warnings are clearly visible and correctly sized.</li>
                                <li><strong>Finish Detail:</strong> Use Spot UV to highlight your logo against a matte background.</li>
                                <li><strong>Ergonomics:</strong> Ensure the box is easy to open with one hand.</li>
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
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Providing structural integrity, retail-ready printing, and international compliance for global tobacco brands.</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">
                        <div className="space-y-5">
                            {[
                                {
                                    title: "World-Class Material Physics",
                                    body: "We optimize the GSM and fiber density of our paperboard to ensure a perfect balance between lightweight portability and crush resistance. Our paper boxes survive the rigors of global shipping and daily pocket carry, protecting your rolls from bending and ensuring they remain in pristine condition until the final cigarette is enjoyed by the consumer."
                                },
                                {
                                    title: "Precision Regulatory Printing",
                                    body: "Our high-definition offset printing technology ensures that all mandatory health warnings, tax stamps, and ingredient labels are reproduced with 100% clarity and jurisdictional compliance. We help you navigate the complex global legal landscape of tobacco packaging, ensuring your brand stays legal and retail-ready across every market you choose to enter safely."
                                },
                                {
                                    title: "Iconic Traditional Aesthetics",
                                    body: "We blend traditional flip-top craftsmanship with modern finishing techniques like soft-touch lamination, Spot UV, and metallic gold foil stamping. This creates a packaging experience that honors the classic heritage of tobacco branding while providing the premium, high-contrast visual impact needed to captivate consumers in the modern and highly competitive retail environment."
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
                                <img src={productHero} alt="Premium Paper Cigarette Packaging" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-7">
                                    <p className="text-white font-bold text-lg leading-snug mb-1">Trusted by Iconic Brands</p>
                                    <p className="text-white/75 text-sm">Setting the standard in tobacco retail packaging.</p>
                                </div>
                            </div>
                            <div className="absolute top-4 -right-2 lg:-right-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80">
                                <p className="text-2xl font-bold text-primary leading-none">99%</p>
                                <p className="text-xs text-slate-400 mt-1 font-medium">Print Accuracy</p>
                            </div>
                            <div className="absolute bottom-4 -left-2 lg:-left-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80">
                                <p className="text-2xl font-bold text-emerald-500 leading-none">SBS</p>
                                <p className="text-xs text-slate-400 mt-1 font-medium">Premium Grade</p>
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
                                <img src={productHero} alt="Differentiate Your Paper Brand" className="w-full h-full object-cover" />
                            </div>
                        </div>
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                                Differentiate Your <span className="text-primary text-black">Paper Brand</span> From Others
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                Differentiate your tobacco brand with our classic and precision-engineered custom paper packaging solutions. Our high-quality paper cigarette boxes are designed to provide maximum protection for traditional rolls while offering an elegant, professional aesthetic that resonates with quality-conscious consumers. By incorporating advanced printing techniques like gloss lamination and precise die-cutting, we help your products stand out with a timeless retail look. Invest in durable, lightweight paper packaging that reinforces brand prestige and ensures your cigarettes arrive in pristine condition, significantly elevating the perceived value of your premium products.
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
                            <img src={FAQimage} alt="FAQ Image for Paper Cigarette Boxes" className="absolute inset-0 w-full h-full object-cover" />
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

export default PaperCigaretteBoxes;
