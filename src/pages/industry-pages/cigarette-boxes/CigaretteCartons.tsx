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

import productHero from "@/assets/cigarette-boxes/cigarette-cartons.webp";
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
    { id: "item-1", q: "How do cigarette cartons protect multiple individual packs during wholesale transit?", a: "Our cartons are engineered with 18pt to 22pt SBS board, which provides superior vertical compression strength. This 'outer shell' prevents the individual soft or hard packs inside from being crushed or dented during the stacking and handling processes typical of large-scale wholesale distribution and warehouse logistics." },
    { id: "item-2", q: "Are there child-resistant features for bulk cigarette cartons?", a: "While cartons are secondary packaging, we can add tamper-evident seals and reinforced locking tabs that act as a primary barrier. These features ensure that the contents remain secure and inaccessible to children until the carton reaches the intended adult consumer or retail environment, providing an extra layer of product safety accountability." },
    { id: "item-3", q: "What board grade is best for heavy 10-pack or 20-pack cartons?", a: "We recommend a 22pt to 24pt heavy-duty SBS or high-density recycled board. This thickness ensures the carton maintains its structural squareness and prevents 'bowing' or sagging under the weight of multiple product packs, reflecting the high quality of your brand even at a high-volume wholesale scale." },
    { id: "item-4", q: "Is there enough room for both branding and wholesale barcodes on the carton?", a: "Absolutely. We design our carton layouts with massive side panels for your primary brand message and dedicated bottom zones for industrial GS1 barcodes. This ensures total scanning accuracy in automated warehouses without interfering with your brand's high-definition retail graphics or mandatory legal health warnings." },
    { id: "item-5", q: "Do you offer custom carton sizes for 5-pack or limited edition sets?", a: "Yes, we can manufacture cartons for any pack count, from small 2-pack gift sets to large 20-pack industrial cases. Our die-cutting equipment is fully customizable, allowing us to tailor the internal dimensions to match your specific retail strategy and product format perfectly, ensuring a snug and secure fit for every pack." },
];

const CigaretteCartons = () => {
    const [selectedImage, setSelectedImage] = useState(0);
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);

    const productImages = [
        { src: productHero, alt: "Custom Cigarette Cartons - Wholesale View" },
        { src: productHero, alt: "10-Pack Wholesale Cigarette Carton" },
        { src: productHero, alt: "Bulk Tobacco Distribution Packaging" },
        { src: productHero, alt: "Premium Branded Cigarette Carton" },
        { src: productHero, alt: "Retail Ready Wholesale Carton" },
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
                <title>Custom Cigarette Cartons | High-Volume Wholesale Packaging | CustomPackMakers</title>
                <meta name="description" content="Discover professional custom cigarette cartons for wholesale distribution. Durable board, prominent branding, and secure designs for high-volume tobacco merchandising." />
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
                            <BreadcrumbItem><BreadcrumbPage>Cigarette Cartons</BreadcrumbPage></BreadcrumbItem>
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
                                <span className="text-primary text-black">Wholesale Cigarette</span> Carton Boxes
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Our custom cigarette cartons provide robust wholesale protection and prominent brand visibility for your high-volume tobacco distribution. Engineered with durable board and secure closure designs, these professional cases ensure efficient retail merchandising.
                            </p>
                            <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300" onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}>
                                Get a Quote
                            </Button>
                        </div>
                        <div className="lg:col-span-5 relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-muted group">
                            <img src={productHero} alt="Cigarette Cartons" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 max-w-3xl">Commanding Scale with Professional Wholesale Packaging</h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            In the massive world of tobacco distribution, the cigarette carton is the backbone of the supply chain. It is the housing that carries your brand from the factory floor to the retail shelf, demanding a perfect balance of structural strength and visual prominence. Our <strong className="text-foreground">custom cigarette cartons</strong> are specifically engineered to provide this balance, offering an 'outer shell' that protects your individual packs while acting as a large-format canvas for your brand's primary marketing message.
                        </p>
                        <p>
                            We utilize high-density SBS and heavy-duty recycled board to ensure our cartons thrive in the high-pressure environments of wholesale logistics. Every carton features precision score lines and 'auto-lock' closure designs that allow for rapid product filling and secure transport. With high-definition offset printing and specialized finishes like aqueous gloss or matte lamination, we help your cartons build a professional and commanding brand presence in busy warehouse aisles and retail backrooms. Our cartons aren't just shipping containers; they are a statement of your brand's scale and commitment to excellence at every level of the distribution process.
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
                                    <h3 className="text-xl font-bold text-foreground mb-5">Wholesale Carton Quote</h3>
                                    <form className="space-y-4">
                                        <div className="grid grid-cols-3 gap-3">
                                            <div className="space-y-1.5 align-left">
                                                <Label htmlFor="length" className="text-xs font-semibold text-muted-foreground">L (in)</Label>
                                                <Input id="length" type="number" placeholder="11.2" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label>
                                                <Input id="width" type="number" placeholder="4.5" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">D (in)</Label>
                                                <Input id="depth" type="number" placeholder="2.1" className="h-9 bg-white" />
                                            </div>
                                        </div>
                                        <div className="space-y-1.5">
                                            <Label htmlFor="qty" className="text-xs font-semibold text-muted-foreground">Quantity (Bulk)</Label>
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">Mastering Global Distribution with Custom Cigarette Cartons</h2>
                    <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="[&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-6 [&>h3]:mb-3 [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-4 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-4 [&>ul>li]:text-[15px] [&>ul>li]:text-slate-600">
                            <p>
                                For high-volume tobacco brands, the cigarette carton is more than just a box; it is the fundamental unit of wholesale commerce. It represents the interface between large-scale manufacturing and the final retail point-of-sale. At CustomPackMakers, we specialize in custom cigarette cartons that are engineered for the rigors of global logistics while providing the bold, commanding branding required to thrive on the wholesale shelf. Our cartons provide the structural insurance your product needs to survive the distribution chain without a single crushed corner, ensuring your brand equity remains intact from the factory to the consumer.
                            </p>
                            <h3>The Engineering of Wholesale Structural Integrity</h3>
                            <p>
                                The primary purpose of a carton is protection at scale. When stacked in a warehouse or on a delivery pallet, cardboard cartons are subject to intense vertical compression. We utilize high-density SBS (Solid Bleached Sulfate) board between 18pt and 24pt to provide maximum stacking strength. This technical selection ensures that the carton maintains its squareness and internal volume, shielding the ten or twenty individual packs inside from the heavy weight of the items stacked above. Our 'reinforced-wall' design is the industry standard for preventing the 'crush damage' that leads to retail returns and wasted inventory.
                            </p>
                            <h3>Logistical Efficiency: BAR-Coding and Tracking</h3>
                            <p>
                                In the world of automated logistics, a carton's readability is a critical asset. We design our custom cartons with dedicated 'non-printable zones' that are specifically calibrated for high-resolution industrial inkjet and laser barcodes. This ensures total scanning accuracy throughout the supply chain, from robotic inventory systems to retail checkout scanning. Proper spatial planning for GS1 barcodes, batch codes, and tax stamp areas ensures that your carton moves through the global distribution maze without friction, reducing logistical errors and speeding up your path to market.
                            </p>
                            <h3>Large-Format Branding: Commanding Wholesale Presence</h3>
                            <p>
                                A cigarette carton offers the largest branding canvas in the tobacco industry. We leverage this space to help your brand make a massive visual statement. Using high-definition offset printing, we can reproduce your brand's core colors, motifs, and security features with absolute consistency across millions of units. A carton that is visually consistent with your individual packs builds trust and reinforces brand recognition for the retailer and the wholesale shopper. We can add high-impact finishes like high-gloss aqueous coatings that catch the harsh retail lighting of a warehouse, making your brand gravitate toward the consumer.
                            </p>
                            <h3>Advanced Finish Options for Wholesale Differentiation</h3>
                            <p>
                                Differentiating at the wholesale level requires more than just bold colors. We offer a full suite of finishing techniques to enhance your cigarette cartons. Soft-touch matte lamination provides a premium, velvet-like feel that suggests a high-end product, while metallic foil stamping can be used to highlight premium variants or limited edition sets. Aqueous and UV coatings are not just for looks; they provide a protective barrier against moisture and surface scuffing during handling. By investing in high-quality finishes, you ensure that your carton looks as professional on the distributor's shelf as it did on our manufacturing line.
                            </p>
                            <h3>Strategic Design for Regulatory Compliance</h3>
                            <p>
                                Carton packaging is subject to strict international regulations regarding the size and contrast of health warnings. These warnings often occupy 50% or more of the package surface, leaving limited room for branding. Our design experts specialize in 'regulatory spatial optimization,' ensuring that every mandatory disclosure is perfectly placed according to local law while still maximizing the impact of your brand logos and colors. We follow FDA, EU, and other global standards with absolute precision, protecting your brand from the legal and logistical nightmares of non-compliant wholesale packaging.
                            </p>
                            <h3>The Economics of High-Volume Wholesale Production</h3>
                            <p>
                                At CustomPackMakers, we optimize our manufacturing processes for maximum cost-efficiency at high volumes. Our high-speed die-cutting and folding equipment allows us to offer the most competitive per-unit pricing in the industry for large-scale carton runs. We operate under a philosophy of 'economies of scale,' passing the savings of mass production directly to our tobacco industry partners. Furthermore, by utilizing 'auto-lock' and easy-fold designs, we reduce the labor costs associated with product filling on your end, providing a holistic and highly profitable packaging solution for your brand.
                            </p>
                            <h3>Sustainability in Wholesale Distribution</h3>
                            <p>
                                Scaling a brand sustainably is an increasing priority for global tobacco leaders. We offer custom cartons made from FSC-certified recycled materials that provide the same structural performance as virgin board. These high-volume eco-friendly solutions are fully recyclable after use, helping your brand meet its corporate social responsibility (CSR) goals while satisfying the environmental expectations of modern consumers. When paired with soy-based inks and water-based coatings, your wholesale distribution becomes a powerful vehicle for your brand's commitment to environmental leadership.
                            </p>
                            <h3>Wholesale Logistics and Supply Chain Reliability</h3>
                            <p>
                                A missed shipment of cartons can stall an entire production line. At CustomPackMakers, we act as a strategic partner to your supply chain, offering flexible manufacturing schedules and inventory management solutions. Our facilities are designed for high-volume output, ensuring that even the largest bulk orders are completed with rapid turnaround times. We provide detailed logistics support, ensuring that your massive shipments of custom cartons arrive on time and in perfect condition, ready to be filled and distributed to your global network of retail partners.
                            </p>
                            <h3>Conclusion: The Pillar of Your Retail Empire</h3>
                            <p>
                                Your cigarette cartons are the physical manifestation of your brand's scale and systematic excellence. They are the guardians of your product's quality and the messengers of your brand's authority. At CustomPackMakers, we provide the engineering precision and manufacturing scale needed to ensure every carton is a success. From the strength of our heavy-duty SBS board to the vibrancy of our high-definition branding, every aspect of our carton packaging is optimized for your efficiency and your profit. Contact us today to discuss your global distribution requirements and discover how our custom cigarette cartons can help you build a more powerful and professional tobacco brand.
                            </p>
                            <h3>Carton Packaging Design Checklist</h3>
                            <ul>
                                <li><strong>Vertical Strength:</strong> Verify 22pt+ board for 10-tier stacking stability.</li>
                                <li><strong>Barcode Integrity:</strong> Ensure 100% white-space clearance for industrial scanning zones.</li>
                                <li><strong>Regulatory Alignment:</strong> Double-check health warning contrast and font size for target markets.</li>
                                <li><strong>Ink Durability:</strong> Use UV-resistant inks to prevent fading under harsh retail lights.</li>
                                <li><strong>Assembly Speed:</strong> Opt for 'easy-open' perforated lines for the final retailer's convenience.</li>
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
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Providing robust wholesale protection, commanding brand scale, and precision logistical engineering for global tobacco distribution.</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">
                        <div className="space-y-5">
                            {[
                                {
                                    title: "Robust Wholesale Vertical Integrity",
                                    body: "Our custom cigarette cartons are engineered with high-density SBS board (18pt - 24pt) to provide superior vertical compression strength. This ensures that your high-volume wholesale shipments remain structurally sound and free from crush-damage even when stacked many units high in automated warehouse environments or during long-distance global distribution."
                                },
                                {
                                    title: "Large-Format Professional Branding",
                                    body: "Using high-definition offset printing and specialized finishes like aqueous gloss, we help your cartons command attention with a professional and prominent look that reflects your brand's scale. We leverage the carton's massive surface area to communicate your primary marketing message with total color consistency, building trust with wholesale distributors and retail partners globally."
                                },
                                {
                                    title: "Precision Logistical Engineering",
                                    body: "We optimize our cartons for modern logistics, incorporating dedicated barcode zones and secure closure designs that ensure total scanning accuracy and rapid product filling. Our spatial planning for tax stamps and regulatory health warnings meets all international legal standards, protecting your brand from the legal and logistical hurdles frequently associated with global tobacco merchandising."
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
                                <img src={productHero} alt="Wholesale Cigarette Carton Distribution" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-7">
                                    <p className="text-white font-bold text-lg leading-snug mb-1">Empowering Global Scale</p>
                                    <p className="text-white/75 text-sm">Setting the standard in high-volume tobacco cartons.</p>
                                </div>
                            </div>
                            <div className="absolute top-4 -right-2 lg:-right-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80">
                                <p className="text-2xl font-bold text-primary leading-none">100%</p>
                                <p className="text-xs text-slate-400 mt-1 font-medium">Stackable</p>
                            </div>
                            <div className="absolute bottom-4 -left-2 lg:-left-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80">
                                <p className="text-2xl font-bold text-emerald-500 leading-none">24pt</p>
                                <p className="text-xs text-slate-400 mt-1 font-medium">Extra Strength</p>
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
                                <img src={productHero} alt="Differentiate Your Carton Brand" className="w-full h-full object-cover" />
                            </div>
                        </div>
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                                Differentiate Your <span className="text-primary text-black">Carton Brand</span> From Others
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                Differentiate your tobacco distribution with our efficient and precision-engineered custom cigarette carton packaging solutions. Our high-quality cartons are designed to provide maximum protection for multiple packs while offering a clean, professional aesthetic that resonates with wholesale distributors. By incorporating advanced printing techniques like high-speed offset calibration and durable board reinforcements, we help your products command attention with a consistent and prominent look. Invest in durable, high-volume carton packaging that reinforces brand scale and ensures your cigarettes arrive in perfect condition, significantly optimizing your overall retail effectiveness.
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
                            <img src={FAQimage} alt="FAQ for Cigarette Cartons" className="absolute inset-0 w-full h-full object-cover" />
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

export default CigaretteCartons;
