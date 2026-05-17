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

import productHero from "@/assets/industry/cigarette-boxes/cardboard-cigar-boxes.webp";
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
    { id: "item-1", q: "How do cardboard cigar boxes maintain the humidity of premium tobacco?", a: "Our cigar boxes feature high-density rigid board that acts as a natural insulator, and we can add specialized inner liners that help maintain a consistent internal environment. This helps in preserving the essential oils and moisture level of the cigars during the crucial retail display phase, ensuring they remain in peak condition for the aficionado." },
    { id: "item-2", q: "Are child-resistant features available for large-format cigar boxes?", a: "Yes, we can integrate discreet child-resistant locking mechanisms into the box structure. These are designed to be elegant and sophisticated, meeting all ASTM safety requirements without compromising the luxury, 'aficionado-focused' aesthetic of the premium cigar packaging. These locks are carefully hidden within the structural design to maintain the classic look." },
    { id: "item-3", q: "What board grade is best for heavy, multi-count cigar boxes?", a: "For multi-count cigar packaging, we recommend 28pt to 40pt rigid paperboard. This extreme thickness provides the 'vibe' of a traditional wooden box while offering the lightweight benefits and superior print quality of modern cardboard, ensuring a substantial and high-end feel that communicates the premium nature of the products inside." },
    { id: "item-4", q: "Can you achieve deep, multi-level embossing on cardboard cigar boxes?", a: "Absolutely. Our thick rigid board is perfect for multi-level embossing and debossing. We can create deep, tactile textures for your logos and motifs, giving your packaging a 3D architectural quality that rivals the most expensive limited-edition cigar housings in the world. This tactile quality is a key driver in the luxury tobacco market." },
    { id: "item-5", q: "Do you provide custom cedar-lined or cardboard dividers for cigars?", a: "Yes, we offer custom-fit internal dividers made from either high-density paperboard or premium Spanish cedar veneers. These dividers prevent the cigars from touching, avoiding surface damage and ensuring each individual roll is presented in a perfect, organized fashion upon opening, creating a truly professional and high-end unboxing experience." },
];

const CardboardCigarBoxes = () => {
    const [selectedImage, setSelectedImage] = useState(0);
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);

    const productImages = [
        { src: productHero, alt: "Cardboard Cigar Boxes - Luxury View" },
        { src: productHero, alt: "Rigid Board Cigar Gift Box" },
        { src: productHero, alt: "Custom Branded Cigar Packaging" },
        { src: productHero, alt: "Premium Tobacco Storage Case" },
        { src: productHero, alt: "Lid-and-Base Cigar Packaging" },
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
                <title>Custom Cardboard Cigar Boxes | Luxury Rigid Packaging | CustomPackMakers</title>
                <meta name="description" content="Elevate your cigar brand with premium custom cardboard cigar boxes. Durable rigid board, luxury finishes, and sophisticated designs tailored for tobacco aficionados." />
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
                            <BreadcrumbItem><BreadcrumbPage>Cardboard Cigar Boxes</BreadcrumbPage></BreadcrumbItem>
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
                                <span className="text-primary text-black">Cardboard Cigar</span> Packaging Boxes
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Our custom cardboard cigar boxes provide luxury protection and heritage branding for your premium tobacco products. Engineered with rigid board and elegant finishes, these sophisticated cases ensure a world-class unboxing experience for every aficionado.
                            </p>
                            <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300" onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}>
                                Get a Quote
                            </Button>
                        </div>
                        <div className="lg:col-span-5 relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-muted group">
                            <img src={productHero} alt="Cardboard Cigar Boxes" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 max-w-3xl">Lifting the Standard for Premium Tobacco Presentation</h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            In the luxury world of cigar retail, the heritage of the product must be mirrored by the prestige of its housing. Our <strong className="text-foreground">custom cardboard cigar boxes</strong> provide a modern, sustainable, and highly customizable alternative to traditional wooden cases, without losing any of the premium 'vibe' discerning aficionados expect. We specialize in using ultra-thick rigid paperboard (28pt to 48pt) to create a substantial, heavy-duty box that feels as solid as it looks, providing maximum protection for delicate tobacco leaves.
                        </p>
                        <p>
                            Every detail of our cigar packaging is optimized for excellence. From custom-fit internal dividers and cedar-veneer linings to sophisticated lid-and-base structural designs, we frame your cigars as masterpieces of craftsmanship. Our advanced finishing techniques—including deep multi-level embossing, metallic foil stamps, and textured linen laminations—allow you to create a truly unique brand identity that commands pride of place on the retail shelf. With a focus on both structural durability and sensory branding, we help your premium cigar lines build long-term value and win the hearts of aficionados globally.
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
                                    <h3 className="text-xl font-bold text-foreground mb-5">Get a Luxury Quote</h3>
                                    <form className="space-y-4">
                                        <div className="grid grid-cols-3 gap-3">
                                            <div className="space-y-1.5 align-left">
                                                <Label htmlFor="length" className="text-xs font-semibold text-muted-foreground">L (in)</Label>
                                                <Input id="length" type="number" placeholder="8.0" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label>
                                                <Input id="width" type="number" placeholder="5.5" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">D (in)</Label>
                                                <Input id="depth" type="number" placeholder="1.8" className="h-9 bg-white" />
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">Crafting the Ultimate Premium Cardboard Cigar Packaging</h2>
                    <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="[&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-6 [&>h3]:mb-3 [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-4 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-4 [&>ul>li]:text-[15px] [&>ul>li]:text-slate-600">
                            <p>
                                In the global tobacco market, cigars represent the pinnacle of luxury and craftsmanship. The packaging for these premium products must do more than just contain them; it must elevate the entire experience of ownership. At CustomPackMakers, we specialize in custom cardboard cigar boxes that combine the heritage 'vibe' of traditional wooden chests with the modern versatility and superior print quality of high-density rigid board. From the substantial 'snap' of the lid to the tactile richness of textured lamination, every element of our cigar packaging is engineered for excellence. We help premium brands differentiate themselves through sophisticated design and world-class structural integrity.
                            </p>
                            <h3>Redefining Luxury with Rigid Board Technology</h3>
                            <p>
                                While wood was once the standard for cigars, modern rigid paperboard provides a superior canvas for branding and complex design. We utilize ultra-thick (28pt to 40pt) Solid Bleached Sulfate (SBS) board to create boxes that are structurally indistinguishable from wood in terms of strength and hand-feel. This thickness provides extreme crush resistance, vital for protecting delicate cigar leaves from physical impact. Furthermore, cardboard allows for high-definition offset printing and complex finishing techniques—like vibrant multi-color graphics and precise spot UV—that are difficult and costly to achieve on traditional wood surfaces.
                            </p>
                            <h3>Sensory Branding: The Tactile Appeal of Cigar Boxes</h3>
                            <p>
                                Cigar aficionados are highly tactile consumers. The way a box feels in the fingers is a direct indicator of the quality of the tobacco inside. We enhance this sensory experience through a full suite of finishing techniques. Textured linen or leather-look laminations add a sophisticated feel, while metallic foil stamping in gold, silver, or aged copper adds a touch of timeless luxury. Deep, multi-level embossing can be used to create 3D brand logos that demand to be touched. By creating a multi-sensory unboxing journey, we help your brand build a deeper emotional connection with its most discerning customers.
                            </p>
                            <h3>Heritage Meets Harmony: Custom Internal Features</h3>
                            <p>
                                The inside of a cigar box is as important as the outside. To maintain the 'heritage' look, we offer Spanish cedar veneer linings that provide the traditional aroma associated with high-end cigars. We also specialize in custom-fit internal dividers made from high-density rigid board. These dividers are precision-cut to match the ring gauge and length of your cigars, ensuring they stay perfectly stationary during distribution. This prevents surface-on-surface friction that could tear delicate wrappers. Whether you are packaging a single 'Churchill' or a 25-count bulk set, our internal engineering ensures a perfect presentation every time.
                            </p>
                            <h3>Structural Innovation: Lid-and-Base vs. Hinged Designs</h3>
                            <p>
                                The structural style of your cigar box is a primary branding decision. The classic two-piece 'lid and base' box offers a traditional luxury feel and is exceptionally study for multi-year storage. For a more modern and accessible approach, we offer hinged cardboard boxes with magnetic closure flaps. These provide a satisfying 'snap' when closed and are popular for boutique or artisanal brands. Our CAD-guided die-cutting ensures that the tolerance between the lid and the base is perfectly calibrated, creating a friction-fit that feels secure and premium throughout the life of the product.
                            </p>
                            <h3>Regulatory Excellence in the Premium Space</h3>
                            <p>
                                Even in the luxury space, tobacco packaging must meet rigorous legal standards. This includes the mandatory placement of high-contrast health warnings and jurisdictional tax stamps. Our design experts are masters of spatial optimization, ensuring that every legal requirement is met with 100% accuracy while still leaving ample room for your primary heritage branding. We use high-resolution printing to ensure that legal text remains sharp and perfectly legible. This total compliance protects your brand from retail rejection and legal hurdles, ensuring a smooth path to the high-end retail shelf.
                            </p>
                            <h3>Wholesale Production and Consistent Quality Control</h3>
                            <p>
                                For established tobacco brands, scalability is vital. CustomPackMakers operates a high-volume manufacturing facility capable of producing thousands of rigid boxes with total consistency in color and structure. Every batch undergoes rigorous quality control checks, from spectrophotometer monitoring for color accuracy to structural stress tests for lid integrity. Our wholesale pricing models are designed to give you the best possible value for your investment, allowing for healthy profit margins while maintaining the high standards your aficionados demand. We ensure your supply chain remains as premium as your product.
                            </p>
                            <h3>Sustainability and Environmental Responsibility</h3>
                            <p>
                                Modern tobacco consumers are increasingly looking for brands that reflect their environmental values. We offer eco-friendly cigar boxes made from FSC-certified sustainable materials that are 100% recyclable. By switching from tropical woods to high-density recycled rigid board, you can significantly reduce your brand's carbon footprint without sacrificing quality. When paired with soy-based inks and biodegradable laminates, your cigar packaging becomes a statement of environmental leadership. We help you communicate this green commitment on the box, building trust with a new generation of eco-conscious tobacco drinkers.
                            </p>
                            <h3>Optimizing for Gift-Giving and Retail Display</h3>
                            <p>
                                Cigars are one of the most popular gift items in the world. As such, the packaging must be 'gift-ready' the moment it hits the shelf. Our boxes are designed to look stunning in boutique retail displays and are robust enough to be shipped directly to consumers via e-commerce. We can add custom 'gift sleeves' or integrated hang tabs for specialized retail environments. A box that is easy to gift, easy to display, and easy to protect is a multifaceted asset for any premium cigar brand looking to grow its market share in the global tobacco accessory market.
                            </p>
                            <h3>Conclusion: Protecting Your Brand's Heritage</h3>
                            <p>
                                A custom cardboard cigar box is more than just packaging; it is a housing for your brand's heritage and a shield for your product's quality. At CustomPackMakers, we combine manufacturing precision with a deep understanding of aficionado culture to deliver packaging solutions that thrive in the luxury world. From the strength of our rigid board to the tactile richness of our finishes, every element of our cigar packaging is optimized for excellence. Contact us today to learn how our custom cigar solutions can help you build a more prestigious brand and provide a superior unboxing experience for every aficionado.
                            </p>
                            <h3>Cigar Box Design Best Practices</h3>
                            <ul>
                                <li><strong>Material Choice:</strong> Use 32pt - 40pt rigid board for that traditional 'substantial' feel.</li>
                                <li><strong>Internal Liners:</strong> Use Spanish cedar veneers for the authentic cigar aroma.</li>
                                <li><strong>Finish Strategy:</strong> Use deep embossing for the primary brand motif to add tactile value.</li>
                                <li><strong>Closures:</strong> Opt for hidden magnetic closures for a modern, high-end 'snap'.</li>
                                <li><strong>Dividers:</strong> Ensure a snug fit for each cigar to prevent movement and friction damage.</li>
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
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Providing luxury rigid protection, heritage-grade finishes, and sophisticated internal engineering for global cigar brands.</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">
                        <div className="space-y-5">
                            {[
                                {
                                    title: "Ultra-Thick Rigid Board Protection",
                                    body: "Our cardboard cigar boxes utilize extreme board thicknesses from 28pt to 40pt to provide the substantial, heavy-duty hand-feel that tobacco aficionados associate with luxury heritage brands. This rigid construction offers superior crush resistance, ensuring that your premium rolls are perfectly protected from physical impact throughout the global distribution cycle."
                                },
                                {
                                    title: "Heritage-Grade Luxury Finishing",
                                    body: "Using a masterclass of finishing techniques like deep multi-level embossing, metallic foil stamping, and textured linen laminations, we create an aesthetic that rivals traditional wooden chests. Our focus on sensory branding ensures that your packaging communicates a sense of timeless prestige and high value that resonates with discerning aficionados and encourages repeat purchases."
                                },
                                {
                                    title: "Precision Internal Engineering",
                                    body: "We excel in the design of custom-fit internal dividers and cedar-veneer linings that keep your cigars stationary and smelling authentic. Our precision die-cutting ensures each individual roll is housed with a perfect tolerance, preventing surface-on-surface friction that could damage delicate tobacco wrappers, guaranteeing a flawless presentation upon every unboxing experience."
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
                                <img src={productHero} alt="Luxury Cardboard Cigar Packaging" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-7">
                                    <p className="text-white font-bold text-lg leading-snug mb-1">Empowering Heritage Brands</p>
                                    <p className="text-white/75 text-sm">Setting the standard in luxury tobacco packaging.</p>
                                </div>
                            </div>
                            <div className="absolute top-4 -right-2 lg:-right-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80">
                                <p className="text-2xl font-bold text-primary leading-none">100%</p>
                                <p className="text-xs text-slate-400 mt-1 font-medium">Luxury</p>
                            </div>
                            <div className="absolute bottom-4 -left-2 lg:-left-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80">
                                <p className="text-2xl font-bold text-emerald-500 leading-none">40pt</p>
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
                                <img src={productHero} alt="Differentiate Your Cigar Brand" className="w-full h-full object-cover" />
                            </div>
                        </div>
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                                Differentiate Your <span className="text-primary text-black">Cigar Brand</span> From Others
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                Differentiate your cigar brand with our sophisticated and precision-engineered custom cardboard packaging solutions. Our high-quality cardboard cigar boxes are designed to provide maximum protection for premium rolls while offering a traditional, high-end aesthetic that resonates with discerning aficionados. By incorporating advanced printing techniques like deep embossing and textured linen finishes, we help your products command attention with a professional and timeless look. Invest in durable, luxury cigar packaging that reinforces brand prestige and ensures your tobacco arrives in perfect condition, elevating the overall quality perception of your merchandise.
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
                            <img src={FAQimage} alt="FAQ for Cardboard Cigar Boxes" className="absolute inset-0 w-full h-full object-cover" />
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

export default CardboardCigarBoxes;
