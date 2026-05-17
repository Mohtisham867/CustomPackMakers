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

import productHero from "@/assets/industry/cigarette-boxes/cigarette-display-boxes.webp";
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
    { id: "item-1", q: "How do cigarette display boxes remain stable on busy retail counters?", a: "Our display boxes are engineered with wide, weighted bases and reinforced back panels that prevent tipping or sliding even when fully loaded. This stability is crucial for maintaining an organized and professional appearance in high-traffic retail environments where products are frequently handled by both staff and customers." },
    { id: "item-2", q: "Can the tiers be adjusted to show more of the cigarette pack branding?", a: "Yes, we offer custom-staggered tier designs that allow for maximum visibility of each individual pack's face. By angling the levels and using precise die-cuts, we ensure that your brand's unique graphics and logos are clearly visible to the customer from multiple shelf heights, maximizing your brand's retail exposure." },
    { id: "item-3", q: "What board grade provides the best longevity for a retail countertop display?", a: "We recommend high-density corrugated board or 30pt+ rigid SBS for retail displays. These materials are chosen for their ability to withstand the 'wear and tear' of a retail counter, remaining crisp and unbent despite the constant removal and replacement of product packs throughout the business day." },
    { id: "item-4", q: "Is there space for a large brand header on the display box?", a: "Absolutely. We include integrated, upright header panels that provide a large canvas for your primary brand message, promotional graphics, or health warnings. These headers are designed to sit above the product line, catching the customer's eye from across the store aisle and inviting them to explore your products." },
    { id: "item-5", q: "Do you offer display boxes in different sizes for varying retail footprints?", a: "Yes, we can manufacture everything from small 5-pack 'impulse' counter displays to large 20-carton floor stands. Our design team can tailor the dimensions to match your specific retail strategy, ensuring that your display fits perfectly into its intended retail real estate, whether it's a tight checkout counter or a large gondola shelf." },
];

const CigaretteDisplayBoxes = () => {
    const [selectedImage, setSelectedImage] = useState(0);
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);

    const productImages = [
        { src: productHero, alt: "Cigarette Display Boxes - Retail Counter View" },
        { src: productHero, alt: "Multi-Tiered Cigarette Display Stand" },
        { src: productHero, alt: "Custom Branded Tobacco Display Stand" },
        { src: productHero, alt: "Retail Ready Cigarette Merchandiser" },
        { src: productHero, alt: "Countertop Cigarette Display Box" },
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
                <title>Cigarette Display Boxes | Retail Merchandising Stands | CustomPackMakers</title>
                <meta name="description" content="Elevate your brand with custom cigarette display boxes. High-impact retail stands designed for maximum visibility, shelf organization, and professional tobacco merchandising." />
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
                            <BreadcrumbItem><BreadcrumbPage>Cigarette Display Boxes</BreadcrumbPage></BreadcrumbItem>
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
                                <span className="text-primary text-black">Cigarette Display</span> Merchandising Boxes
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Our custom cigarette display boxes are designed for maximum brand visibility and organized retail merchandising. Engineered for shelf impact and durability, these professional stands ensure your tobacco products capture immediate consumer attention.
                            </p>
                            <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300" onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}>
                                Get a Quote
                            </Button>
                        </div>
                        <div className="lg:col-span-5 relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-muted group">
                            <img src={productHero} alt="Cigarette Display Boxes" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 max-w-3xl">Commanding Attention in the Competitive Retail Space</h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            In the crowded environment of a modern smoke shop or convenience store, the way your product is presented can be just as important as the product itself. Our <strong className="text-foreground">custom cigarette display boxes</strong> are engineered to solve the 'shelf-blindness' problem, providing a dedicated, high-visibility platform that highlights your brand's unique aesthetics. These display stands are designed to sit prominently on countertops or within point-of-sale displays, organizing your product packs into a professional, easily accessible arrangement that invites consumer interaction.
                        </p>
                        <p>
                            We utilize heavy-duty corrugated board or high-density rigid SBS to ensure our display boxes maintain their structural integrity throughout their retail life cycle. Every display features custom tiers and precision-cut slots that keep each cigarette pack perfectly aligned and visible. With ample space for large header graphics and side-panel branding, these units act as silent salesmen, communicating your brand story and quality markers to every passerby. From sleek modern minimalist stands to large, multi-carton merchandisers, we provide the engineering and design expertise needed to turn a simple shelf into a powerful brand destination.
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
                                    <h3 className="text-xl font-bold text-foreground mb-5">Display Box Quote</h3>
                                    <form className="space-y-4">
                                        <div className="grid grid-cols-3 gap-3">
                                            <div className="space-y-1.5 align-left">
                                                <Label htmlFor="length" className="text-xs font-semibold text-muted-foreground">L (in)</Label>
                                                <Input id="length" type="number" placeholder="12.0" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label>
                                                <Input id="width" type="number" placeholder="8.0" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">D (in)</Label>
                                                <Input id="depth" type="number" placeholder="10.0" className="h-9 bg-white" />
                                            </div>
                                        </div>
                                        <div className="space-y-1.5">
                                            <Label htmlFor="qty" className="text-xs font-semibold text-muted-foreground">Quantity</Label>
                                            <Input id="qty" type="number" placeholder="500" className="h-9 bg-white" />
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">Optimizing the Retail Experience with Cigarette Display Boxes</h2>
                    <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="[&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-6 [&>h3]:mb-3 [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-4 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-4 [&>ul>li]:text-[15px] [&>ul>li]:text-slate-600">
                            <p>
                                In the brick-and-mortar retail environment, every square inch of counter space is a battleground for consumer attention. Tobacco products, often located behind the counter or in specific checkout zones, require specialized merchandising to stand out from the competition. At CustomPackMakers, we specialize in high-impact cigarette display boxes that transform standard product assortments into organized, professional brand destinations. Our display solutions are designed to bridge the gap between simple packaging and full-scale retail marketing. By combining structural engineering with creative design, we ensure that your products are always presented in their best possible light, driving impulse purchases and reinforcing brand authority.
                            </p>
                            <h3>The Science of Shelf Impact and Organization</h3>
                            <p>
                                Organization is more than just aesthetics; it's a psychology. A neat, well-maintained display stand signals quality and reliability to the consumer. Our cigarette display boxes utilize custom-tiered layouts that keep your product packs perfectly aligned and facing the customer at all times. This 'retail-facing' orientation is vital for brand recognition, ensuring that your logo and graphics are the first thing a shopper sees. We use precision die-cutting to create slots that provide just enough friction to hold the packs securely but allow for an easy, 'smooth' removal by the retailer or customer.
                            </p>
                            <h3>Choosing the Right Materials for Countertop Durability</h3>
                            <p>
                                A retail display is a high-traffic item. It is moved, cleaned, and refilled hundreds of times over its lifespan. As such, choosing the right material is essential for long-term success. We recommend high-density E-flute or B-flute corrugated board for larger displays that require maximum strength. For sleek, modern countertop stands, we utilize high-grammage (30pt to 48pt) rigid SBS or paperboard. These materials are chosen for their ability to resist edge-crushing and moisture absorption, ensuring your display remains pristine even in humid or high-use retail environments.
                            </p>
                            <h3>The Power of the Branded Header Panel</h3>
                            <p>
                                The header is the most valuable piece of real estate on a display box. It is the first element to catch a customer's eye as they approach the checkout. At CustomPackMakers, we design our displays with integrated, upright header panels that provide a massive canvas for your primary brand messaging. We can add custom die-cut shapes to these headers—such as your logo's silhouette—to create a more dynamic 3D visual presence. By utilizing high-definition printing and vibrant colors on the header, you transform a storage unit into a powerful marketing tool that communicates your brand's unique identity instantly.
                            </p>
                            <h3>Advanced Finish Options for High-End Merchandising</h3>
                            <p>
                                To truly differentiate your brand, the display should feel premium to the touch. We offer a full suite of finishing techniques to enhance your display boxes. High-gloss aqueous coatings provide a brilliant shine that reflects retail lighting, while soft-touch matte finishes offer a sophisticated, velvety feel that suggests artisanal quality. Spot UV can be used to highlight specific graphic elements or your brand name, creating a satisfying light-play that draws the shopper's eye. Metallic foil stamping in gold or silver can be added to the edges or header for a touch of luxury that commands a higher price perception.
                            </p>
                            <h3>Customizing for Different Retail Footprints</h3>
                            <p>
                                Every retail environment has different space constraints. We offer total customization of our display dimensions, allowing you to create the perfect stand for your intended location. For tight checkout counters, we can design narrow, vertically-oriented towers. For large tobacco specialty shops, we create wide, multi-product merchandisers that can host several different lines or flavors in one cohesive unit. Our design team works with you to understand your primary retail settings, ensuring that your display box provides maximum product count while maintaining a compact and efficient footprint.
                            </p>
                            <h3>Wholesale Manufacturing and Simplified Assembly</h3>
                            <p>
                                Scalability and speed are vital for any retail campaign. We operate a streamlined manufacturing facility that can produce thousands of custom displays with absolute color and structural consistency. Despite their complex appearance, our display boxes are designed for simplified, fast assembly. We utilize 'auto-lock' bottoms and intuitive folding flaps that allow retailers to set up the display in seconds without the need for adhesives or tools. This ease of use ensures high adoption rates among busy store managers and distributors, getting your products on the floor faster.
                            </p>
                            <h3>Compliance Integration for Global Markets</h3>
                            <p>
                                Tobacco displays are subject to strict legal regulations regarding the visibility of health warnings and the size of branding elements. Our designers are experts at navigating these jurisdictional rules. We ensure that every display box meets all mandatory disclosure requirements without compromising on your brand's primary aesthetics. We can provide templates that show exactly where legal text will be placed, ensuring that your creative vision remains compliant with FDA and international standards. This total compliance protects your brand from retail rejection and legal hurdles during the merchandising phase.
                            </p>
                            <h3>Sustainability in Retail Merchandising</h3>
                            <p>
                                The environmental impact of short-term retail displays is an increasing concern for modern brands. At CustomPackMakers, we offer eco-friendly display solutions made from FSC-certified recycled materials that are 100% recyclable after use. By using soy-based inks and water-based coatings, we ensure that your marketing materials match the environmental ethics of your consumers. A sustainable display box is a powerful statement of corporate responsibility that resonates deeply with eco-conscious market segments, building trust and loyalty beyond the product itself.
                            </p>
                            <h3>Conclusion: Elevating Your Point-of-Sale Strategy</h3>
                            <p>
                                A high-quality cigarette display box is a critical component of a successful retail strategy. It protects your packs, organizes your shelf, and communicates your brand story with total clarity. At CustomPackMakers, we combine manufacturing precision with creative excellence to deliver display solutions that thrive in the competitive retail world. From the strength of the board to the vibrancy of the header graphics, every element of our displays is optimized for impact. Contact us today to learn how our custom display boxes can turn your tobacco products into a retail destination and drive your brand's long-term growth.
                            </p>
                            <h3>Display Box Design Best Practices</h3>
                            <ul>
                                <li><strong>Header Visibility:</strong> Ensure the top 1/3 of the display is dedicated to bold branding.</li>
                                <li><strong>Material Strength:</strong> Use 48pt rigid board for displays holding 10+ packs to prevent sagging.</li>
                                <li><strong>Color Contrast:</strong> Use high-contrast colors (e.g., white text on dark background) for readability.</li>
                                <li><strong>Assembly:</strong> Opt for 'pop-up' designs to ensure retailers actually use the display.</li>
                                <li><strong>Regulatory Zones:</strong> Clearly separate legal warnings from primary brand graphics.</li>
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
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Providing maximum brand visibility, shelf-ready organization, and durable countertop merchandising for tobacco brands.</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">
                        <div className="space-y-5">
                            {[
                                {
                                    title: "Maximum Retail Shelf Visibility",
                                    body: "Our cigarette display boxes are engineered to command attention in high-traffic retail environments. By utilizing custom-angled tiers and integrated upright header panels, we ensure that your brand's unique graphics and logos are always perfectly facing the consumer, maximizing your shelf impact and significantly increasing your brand's overall market presence."
                                },
                                {
                                    title: "Durable Countertop Construction",
                                    body: "We understand that retail displays must withstand constant handling and refilling. We utilize high-density corrugated board and 30pt+ rigid SBS to ensure that our stands remain crisp, upright, and professional throughout their lifecycle. Our commitment to material quality ensures your product is always presented in a container that reflects its premium nature."
                                },
                                {
                                    title: "Simplified Rapid-Assembly Design",
                                    body: "We optimize our display solutions for retail efficiency, utilizing auto-lock bottoms and intuitive folding mechanisms that allow for setup in seconds without adhesives. This ease of use ensures high adoption rates among busy store managers, ensuring your branded displays are actually used on the floor to drive the impulse sales your brand requires."
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
                                <img src={productHero} alt="Premium Cigarette Retail Display" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-7">
                                    <p className="text-white font-bold text-lg leading-snug mb-1">Empowering Local Retail Brands</p>
                                    <p className="text-white/75 text-sm">Setting the standard in tobacco merchandising.</p>
                                </div>
                            </div>
                            <div className="absolute top-4 -right-2 lg:-right-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80">
                                <p className="text-2xl font-bold text-primary leading-none">100%</p>
                                <p className="text-xs text-slate-400 mt-1 font-medium">Visible</p>
                            </div>
                            <div className="absolute bottom-4 -left-2 lg:-left-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80">
                                <p className="text-2xl font-bold text-emerald-500 leading-none">48pt</p>
                                <p className="text-xs text-slate-400 mt-1 font-medium">Rigid Grade</p>
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
                                <img src={productHero} alt="Differentiate Your Display Brand" className="w-full h-full object-cover" />
                            </div>
                        </div>
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                                Differentiate Your <span className="text-primary text-black">Display Brand</span> From Others
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                Differentiate your tobacco brand with our eye-catching and precision-engineered custom cigarette display packaging solutions. Our high-quality display boxes are designed to provide maximum visibility for retail packs while offering a sleek, professional structure that resonates with busy shoppers. By incorporating advanced printing techniques like vibrant high-gloss finishes and sturdy corrugated structures, we help your products dominate the shelf with a sharp, organized look. Invest in durable, high-impact display packaging that reinforces brand prominence and ensures your cigarettes are always presented in perfect order, elevating the overall retail effectiveness of your merchandise.
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
                            <img src={FAQimage} alt="FAQ for Cigarette Display Boxes" className="absolute inset-0 w-full h-full object-cover" />
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

export default CigaretteDisplayBoxes;
