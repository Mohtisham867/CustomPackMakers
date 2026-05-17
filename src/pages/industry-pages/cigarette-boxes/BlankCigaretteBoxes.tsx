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

import productHero from "@/assets/industry/cigarette-boxes/blank-cigarette-boxes.webp";
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
    { id: "item-1", q: "How do blank cigarette boxes prevent external contaminants from affecting the tobacco?", a: "Our blank boxes are made from high-density, non-porous paperboard that acts as a physical shield against dust and environmental pollutants, ensuring the cigarettes inside remain clean and pure for the user. This high-density board also provides a mild moisture barrier, which helps in maintaining the combustion quality of the tobacco products during short-term retail storage." },
    { id: "item-2", q: "Can child-resistant locks be added to blank cigarette boxes after purchase?", a: "No, the CR features must be integrated during the manufacturing process. We can produce blank boxes with pre-installed child-resistant tabs that are ASTM-certified, keeping your unique designs safe and compliant from day one. These pre-installed mechanisms are tested for reliability and longevity, ensuring that safety is a permanent part of your custom-designed packaging solution." },
    { id: "item-3", q: "What is the best board thickness for DIY branding on blank boxes?", a: "We recommend 18pt to 22pt SBS board. This provides a balance of structural strength and a smooth surface that is ideal for various labeling, stamping, or secondary printing techniques you might use. The 'brilliant white' surface of our SBS board ensures that any colors you apply remain vibrant and true to your original vision, without being absorbed or dulled by the material." },
    { id: "item-4", q: "How do I ensure my custom designs on blank boxes stay within legal regulations?", a: "While the boxes start blank, any branding you apply must follow local tobacco laws. We can provide templates showing the exact zones where health warnings and tax stamps should go to ensure your final product is compliant and retail-ready. This proactive planning helps you avoid costly mistakes and ensures that your creative vision doesn't interfere with the mandatory legal elements required on tobacco packaging." },
    { id: "item-5", q: "Do you offer blank boxes in colors other than white?", a: "Yes, while white is standard for maximum print clarity, we also offer blank boxes in natural kraft and even pre-dyed black or metallic stocks for a more sophisticated and unique base for your branding. These colored bases can drastically reduce the amount of secondary printing needed, allowing for a more minimalist and modern aesthetic while still maintaining the sturdiness of our standard cigarette boxes." },
];

const BlankCigaretteBoxes = () => {
    const [selectedImage, setSelectedImage] = useState(0);
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);

    const productImages = [
        { src: productHero, alt: "Blank Cigarette Boxes - Unprinted View" },
        { src: productHero, alt: "White Blank Cigarette Case" },
        { src: productHero, alt: "Plain Cigarette Box Structure" },
        { src: productHero, alt: "Blank Tobacco Packaging Sample" },
        { src: productHero, alt: "Empty White Cigarette Pack" },
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
                <title>Blank Cigarette Boxes | Plain White Custom Packaging | CustomPackMakers</title>
                <meta name="description" content="Get high-quality blank cigarette boxes ready for your unique branding. Durable, white paperboard boxes designed for total customizability and professional retail impact." />
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
                            <BreadcrumbItem><BreadcrumbPage>Blank Cigarette Boxes</BreadcrumbPage></BreadcrumbItem>
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
                                <span className="text-primary text-black">Blank White</span> Cigarette Boxes
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Our blank cigarette boxes provide a clean slate for your unique branding and artistic designs. Engineered with high-quality white paperboard, these durable cases ensure regulatory compliance while offering total creative freedom.
                            </p>
                            <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300" onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}>
                                Get a Quote
                            </Button>
                        </div>
                        <div className="lg:col-span-5 relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-muted group">
                            <img src={productHero} alt="Blank Cigarette Boxes" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 max-w-3xl">The Ultimate Canvas for Your Tobacco Identity</h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            In an industry where branding is everything, sometimes the best place to start is from zero. Our <strong className="text-foreground">blank cigarette boxes</strong> are designed specifically for brands that want full control over their visual narrative. Whether you are an artisanal boutique, a product development team prototyping new lines, or an established brand looking for high-quality unprinted stock, our blank boxes deliver the professional structural foundation you need. Each box is manufactured to the same rigorous standards as our fully printed lines, ensuring perfection in every fold.
                        </p>
                        <p>
                            We use premium, brilliant white SBS (Solid Bleached Sulfate) board that provides a non-porous, smooth surface ideal for a variety of post-manufacturing processes. This material is excellent for direct-to-box labeling, manual ink stamping, or even digital overprinting. The crisp white finish ensures that your applied colors pop with maximum vibrancy. Beyond the surface, our blank boxes feature precision-scored edges and secure tuck-locks that maintain their integrity throughout the product life cycle. It's not just a blank box; it's a professional-grade starting point for your brand's unique story and retail success.
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
                                    <h3 className="text-xl font-bold text-foreground mb-5">Request Blank Batch</h3>
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">Navigating Creative Freedom with Blank Cigarette Boxes</h2>
                    <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="[&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-6 [&>h3]:mb-3 [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-4 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-4 [&>ul>li]:text-[15px] [&>ul>li]:text-slate-600">
                            <p>
                                In the modern landscape of product development and boutique retail, the ability to iterate quickly and maintain total design control is a massive competitive advantage. Blank cigarette boxes provide exactly this opportunity. At CustomPackMakers, we offer high-grade, unprinted cigarette packaging that serves as a professional-level starting point for your creative vision. Whether you are launching a limited edition line, testing new branding concepts, or providing personalized custom gifts, our blank boxes offer the structural reliability and material purity you need to succeed. By starting with a clean slate, you eliminate the constraints of pre-fixed designs and open up a world of total artistic possibility.
                            </p>
                            <h3>The Professional Advantage of Starting Blank</h3>
                            <p>
                                Why choose a blank professional box instead of an off-the-shelf alternative? The difference lies in the material science and structural engineering. Our blank cigarette boxes are manufactured using premium SBS (Solid Bleached Sulfate) board, the same high-standard material used by top-tier global tobacco brands. This ensures that even before you apply your branding, the box communicates a sense of quality and professionalism. OFF-the-shelf boxes often use lower-grade materials that yellow over time or lose their shape; our blank boxes are engineered to remain pristine and rigid, protecting your product and your reputation as a quality-focused brand.
                            </p>
                            <h3>Advanced Material Science: SBS and Beyond</h3>
                            <p>
                                The foundation of a great blank box is the board it's made from. SBS remains the industry preferred choice because of its brilliant white color and exceptionally smooth surface. This creates a high-contrast background that makes any branding you apply manually—whether through high-end labels, screen printing, or foil stamps—look its absolute best. We also offer blank boxes in natural kraft for an organic, artisanal aesthetic. Each box is precision-cut using CAD-guided die-cutting technology, ensuring that the folds are crisp and the locks are secure every time. This precision is vital for creating a reliable user experience that consumers appreciate.
                            </p>
                            <h3>Customizing Blank Boxes for Your Brand</h3>
                            <p>
                                Just because the box starts blank doesn't mean it has to stay that way. Our blank boxes are optimized for secondary processing. If you have an in-house digital printer, our SBS board is designed to take ink without excessive bleeding or absorption. For artisanal brands, manual wax sealing or hand-stamping provides a level of authenticity that mass printing cannot match. You can also add custom stickers, ribbons, or sleeves to create a multi-layered unboxing experience. The versatility of a blank box allows you to tailor your packaging to specific campaigns, holidays, or customer segments without having to order entirely new batches of printed packaging.
                            </p>
                            <h3>Regulation and Compliance in Custom Designs</h3>
                            <p>
                                Even when starting with a blank box, compliance remains a key consideration in the tobacco industry. If the final product is for retail sale, you must still integrate mandatory health warnings and jurisdictional tax stamps. We provide our clients with digital templates that show the exact placement zones for these legal elements. This ensures that your creative designs don't overlap with the areas required by law. By planning your design with compliance in mind, you can create a beautiful, artistic product that meets all legal standards and is ready for the retail shelf without any regulatory hurdles.
                            </p>
                            <h3>The Prototyping and Low-Volume Benefit</h3>
                            <p>
                                Blank boxes are an essential tool for product prototyping and market testing. Before committing to a large run of 10,000+ printed boxes, you can use blank stock to create physical samples of different designs. This allows you to gather real-world feedback from distributors and focus groups using a professional-feeling product. Furthermore, if you are a small startup with low initial volumes, starting with blank boxes and applying high-quality labels in-house can be a highly cost-effective way to maintain a premium look while managing your cash flow effectively. We scale with you as your business grows.
                            </p>
                            <h3>Sustainability and Eco-Friendly Creative Packaging</h3>
                            <p>
                                Environmental consciousness is a primary driver in modern purchasing decisions. We offer blank boxes made from FSC-certified sustainable materials that are 100% recyclable and biodegradable. By choosing eco-friendly blank stock, you can pair it with sustainable labeling and soy-based inks to create a truly green product. This resonates deeply with 'alternative' and organic market segments, where the natural, unprinted look of high-quality kraft or recycled board is often seen as a mark of authenticity and environmental ethics. Your blank box is a statement of values as much as a container for your product.
                            </p>
                            <h3>The Psychological Impact of the Clean Slate</h3>
                            <p>
                                There is a powerful psychological appeal to a clean, well-constructed white box. It signals purity, transparency, and a focus on the product itself. For many modern brands, a minimalist 'blank' look with just a single, high-quality seal or stamp is more effective than a busy, multi-colored design. We focus on the'snap' and the 'feel' of the box, ensuring that the consumer's first tactile interaction is one of quality. A box that feels sturdy and opens with a satisfying friction hinge is a box that consumers will keep and reuse, extending your brand's presence in their daily lives.
                            </p>
                            <h3>Wholesale Availability and Streamlined Logistics</h3>
                            <p>
                                At CustomPackMakers, we maintain a regular inventory of standard-sized blank cigarette boxes, allowing for rapid shipping and delivery. Whether you need a few hundred sets for a special project or a few thousand for a new product line, we provide consistent quality across every batch. Our wholesale pricing ensures that you get the best value for your investment, allowing you to focus your budget on the creative and marketing aspects of your brand while relying on our manufacturing expertise for your structural needs.
                            </p>
                            <h3>Conclusion: Unleashing Your Brand's Potential</h3>
                            <p>
                                A blank cigarette box is more than just an unprinted surface; it's an opportunity to build a unique brand from the ground up without compromise. Our premium blank packaging provides the structural integrity, material quality, and professional finish needed to bring your most creative visions to life. From robust SBS board to precision die-cutting, we ensure that every box meets the same high standards we set for our flagship global clients. Contact us today to order your sample batch and discover how our blank packaging solutions can provide the perfect foundation for your brand's future success.
                            </p>
                            <h3>Design Tips for Blank Boxes</h3>
                            <ul>
                                <li><strong>Quality Labels:</strong> Use high-adhesive, textured labels for a premium feel.</li>
                                <li><strong>Stamping:</strong> Use archival-quality inks for manual stamping to prevent smudging.</li>
                                <li><strong>Compliance zones:</strong> Always leave clear space for mandatory health warnings.</li>
                                <li><strong>Layering:</strong> Use a semi-transparent sleeve for a sophisticated modern look.</li>
                                <li><strong>Seals:</strong> A high-quality foil or wax seal can add a luxury finishing touch.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Inline Related Products Carousel */}
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
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Providing a professional foundation for total creative control and retail-ready prototyping.</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">
                        <div className="space-y-5">
                            {[
                                {
                                    title: "Total Creative Freedom for Brands",
                                    body: "Our blank cigarette boxes are designed to empower your internal design team with a professional-grade blank canvas. Whether you use them for artisanal stamping, premium luxury labeling, or digital prototyping, our unprinted white paperboard ensures that your brand has total control over its visual identity from start to finish."
                                },
                                {
                                    title: "Industry-Standard Material Specs",
                                    body: "Starting blank doesn't mean starting cheap. We use the same high-density SBS board and precision die-cutting technology for our blank boxes as we do for our flagship global clients. This ensures that every unprinted box provides the structural integrity, snap-lock security, and professional tactile feel that consumers associate with premium-tier tobacco brands."
                                },
                                {
                                    title: "Ready-to-Use Prototyping Stock",
                                    body: "For brands in the development phase, our blank cigarette boxes offer the perfect medium for retail testing and consumer focus groups. By using high-quality physical samples early in the process, you can gathering valuable feedback on unboxing experiences and structural durability before committing to high-volume manufacturing, saving both time and budget."
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
                                <img src={productHero} alt="Premium Blank Tobacco Packaging" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-7">
                                    <p className="text-white font-bold text-lg leading-snug mb-1">Empowering Creative Brands</p>
                                    <p className="text-white/75 text-sm">Professional structural shells for unique artistic visions.</p>
                                </div>
                            </div>
                            <div className="absolute top-4 -right-2 lg:-right-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80">
                                <p className="text-2xl font-bold text-primary leading-none">SBS</p>
                                <p className="text-xs text-slate-400 mt-1 font-medium">Material Grade</p>
                            </div>
                            <div className="absolute bottom-4 -left-2 lg:-left-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80">
                                <p className="text-2xl font-bold text-emerald-500 leading-none">100%</p>
                                <p className="text-xs text-slate-400 mt-1 font-medium">Customizable</p>
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
                                <img src={productHero} alt="Differentiate Your Blank Tobacco Brand" className="w-full h-full object-cover" />
                            </div>
                        </div>
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                                Differentiate Your <span className="text-primary text-black">Blank Tobacco Brand</span> From Others
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                Differentiate your tobacco brand with our versatile and precision-engineered blank custom packaging solutions. Our high-quality blank cigarette boxes are designed to provide a perfect canvas for your unique artwork while offering a sturdy, professional structure that resonates with creative brands. By providing a clean, unprinted surface ready for any finish, we help your products become a truly custom masterpiece. Invest in durable, ready-to-brand packaging that reinforces your brand's artistic vision and ensures your cigarettes arrive in perfect condition, setting the stage for total creative expression.
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
                            <img src={FAQimage} alt="FAQ for Blank Cigarette Boxes" className="absolute inset-0 w-full h-full object-cover" />
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

export default BlankCigaretteBoxes;
