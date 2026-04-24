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

import productHero from "@/assets/cigarette-boxes/lighter-boxes.webp";
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
    { id: "item-1", q: "How do lighter boxes protect the sensitive ignition surfaces from scratches?", a: "Our lighter boxes feature soft-touch inner coatings or custom inserts that prevent the lighter's finish from rubbing against the outer cardboard, shielding the sensitive ignition parts and polished surfaces from micro-scratches during transport. This protective barrier is essential for maintaining the 'mint' condition of collectible or high-end metallic lighters." },
    { id: "item-2", q: "Are there child-resistant options available for lighter packaging?", a: "While lighters have internal safety features, we can add a secondary layer of security to the packaging with child-resistant locking tabs. This provides an extra barrier that prevents young children from accessing the device, ensuring your brand meets the highest safety standards. These locks are carefully engineered to be adult-friendly while maintaining rigorous safety compliance." },
    { id: "item-3", q: "What board weight is recommended for luxury lighter gift boxes?", a: "For a luxury feel, we recommend 22pt to 28pt rigid board or high-density SBS. This weight gives the box a substantial, premium feel that reflects the quality of the accessory inside while providing excellent crush resistance for high-end retail display. Thicker board also allows for deeper, more detailed embossing of your brand's logo." },
    { id: "item-4", q: "Can I add a clear PVC window to my lighter boxes to show the product?", a: "Absolutely. We offer custom die-cut windows with clear PVC or PET film, allowing customers to see the design and finish of the lighter directly. This transparency builds consumer trust and is an excellent way to showcase limited edition graphics or unique metallic finishes without the need for customers to open the box." },
    { id: "item-5", q: "Do you provide custom foam inserts to hold lighters securely?", a: "Yes, we specialize in custom-fit EVA or high-density foam inserts that are precision-cut to match the exact dimensions of your lighters. These inserts prevent rattling, provide superior impact protection, and create an impressive, high-end unboxing experience that reinforces the perceived value of your products." },
];

const LighterBoxes = () => {
    const [selectedImage, setSelectedImage] = useState(0);
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);

    const productImages = [
        { src: productHero, alt: "Custom Lighter Boxes - Professional View" },
        { src: productHero, alt: "Luxury Lighter Gift Box" },
        { src: productHero, alt: "Clear Window Lighter Packaging" },
        { src: productHero, alt: "Premium Accessory Case" },
        { src: productHero, alt: "Custom Printed Lighter Box" },
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
                <title>Custom Lighter Boxes | Premium Accessory Packaging | CustomPackMakers</title>
                <meta name="description" content="Elevate your accessory brand with high-quality custom lighter boxes. Durable, stylish, and fully customizable packaging solutions with window options and premium finishes." />
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
                            <BreadcrumbItem><BreadcrumbPage>Lighter Boxes</BreadcrumbPage></BreadcrumbItem>
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
                                <span className="text-primary text-black">Custom Lighter</span> Packaging Boxes
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Our custom lighter boxes provide premium protection and retail-ready branding for your brand's accessories. Engineered with clear window options and durable finishes, these sleek cases ensure a high-quality presentation for every customer.
                            </p>
                            <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300" onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}>
                                Get a Quote
                            </Button>
                        </div>
                        <div className="lg:col-span-5 relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-muted group">
                            <img src={productHero} alt="Custom Lighter Boxes" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 max-w-3xl">Gift-Ready Excellence for Premium Lighter Brands</h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            In the world of tobacco accessories, the lighter is much more than a tool; it's a statement of style and a collectible item. Our <strong className="text-foreground">custom lighter boxes</strong> are designed to treat these products with the respect they deserve, providing a high-end gift-box experience that delights customers upon unboxing. Whether you are selling luxury jet lighters, heritage butane models, or colorful electronic variants, our packaging provides the structural integrity and aesthetic polish needed to bridge the gap between a utility item and a premium accessory.
                        </p>
                        <p>
                            We focus on the fine details of accessory packaging, offering custom-fit inserts and crystal-clear window displays that showcase the product's finish directly to the shopper. Our use of heavy-duty SBS board and rigid paperboard ensures that the lighters are protected from the elements and physical impact during transit. With customization options like metallic foil stamping, velvet-lined interiors, and precise spot-UV highlights, we help your brand create a multi-sensory retail experience. Our lighter boxes don't just hold a product; they frame it as a high-value piece of craftsmanship, encouraging higher price points and building long-term brand equity.
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
                                    <h3 className="text-xl font-bold text-foreground mb-5">Get an Accessory Quote</h3>
                                    <form className="space-y-4">
                                        <div className="grid grid-cols-3 gap-3">
                                            <div className="space-y-1.5 align-left">
                                                <Label htmlFor="length" className="text-xs font-semibold text-muted-foreground">L (in)</Label>
                                                <Input id="length" type="number" placeholder="2.8" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label>
                                                <Input id="width" type="number" placeholder="1.2" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">D (in)</Label>
                                                <Input id="depth" type="number" placeholder="0.6" className="h-9 bg-white" />
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">A Masterclass in High-End Lighter Packaging Design</h2>
                    <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="[&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-6 [&>h3]:mb-3 [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-4 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-4 [&>ul>li]:text-[15px] [&>ul>li]:text-slate-600">
                            <p>
                                The lighter industry is a unique intersection of utility, fashion, and technology. As lighters become more sophisticated—from windproof butane torches to plasma USB models—the packaging must evolve to match these advancements. At CustomPackMakers, we specialize in light-box engineering that balances retail-ready durability with a premium gift-box aesthetic. Our custom lighter boxes are more than just protective shells; they are vital branding platforms that communicate quality and build consumer trust. Whether you are selling through boutique smoke shops or global e-commerce platforms, our lighter packaging solutions are designed to make your accessories shine and your brand succeed.
                            </p>
                            <h3>The Importance of Protective Engineering</h3>
                            <p>
                                Lighters, especially premium models with metallic, lacquered, or printed finishes, are highly susceptible to damage during shipping. Scratches, dents, and surface abrasions can significantly devalue a collectible or gift item. We solve this problem through precision engineering. Our lighter boxes are made from high-density paperboard grades (22pt to 28pt SBS) that provide substantial crush resistance. Internally, we offer custom-fit foam or cardboard inserts that keep the lighter stationary, preventing any movement that could cause rattling or friction damage. This levels of protection ensure that your product arrives in the same flawless condition it left the factory.
                            </p>
                            <h3>Showcasing Style: The Power of Window Cutouts</h3>
                            <p>
                                Visual transparency is a powerful tool in accessory retail. Customers want to see the color, texture, and design of a lighter before they commit to a purchase. We offer custom die-cut windows, allowing the product's finish to be viewed directly through a clear PVC or PET protective film. This not only builds trust but also allows the aesthetic of the lighter itself to contribute to the overall brand presentation. Windows are particularly effective for limited-edition lighters or those featuring complex artistic graphics, as they turn the packaging into a display case that highlights the product's unique selling points immediately.
                            </p>
                            <h3>Advanced Finish Techniques for Gift-Ready Packaging</h3>
                            <p>
                                A lighter is often a gift, and the packaging should reflect that special occasion. We help your brand create a luxury 'gift-ready' look through advanced finishing options. Metallic foil stamping in gold, silver, or rose-copper adds a touch of elegance that suggests high value. Soft-touch matte lamination provides a velvety feel that makes the box satisfying to hold, while spot UV adds a high-gloss contrast to your logo or brand icons. Embossing and debossing can be used to add a 3D tactile effect, giving your packaging a significant, high-end presence that rivals major luxury fashion and accessory brands.
                            </p>
                            <h3>Compliance and Safety in Accessory Packaging</h3>
                            <p>
                                While lighters are accessories, they still carry inherent risks that must be addressed through packaging. We ensure that all mandatory safety warnings and legal text—such as 'Keep Away From Children' and fuel-type disclosures—are printed with total clarity and jurisdictional compliance. We use high-resolution printing to ensure these warnings are sharp and satisfy all regulatory font-size requirements. Our design team can also integrate child-resistant (CR) locking features into the box structure itself, providing an extra layer of safety that protects your customers and adds to your brand's reputation for responsibility and quality.
                            </p>
                            <h3>Structural Styles: From Flip-Tops to Two-Piece Boxes</h3>
                            <p>
                                The 'unboxing' experience is a critical part of the accessory market. We offer various structural styles to match your brand's identity. The classic hinged flip-top box is durable and retail-ready, while the two-piece 'lid and base' setup offers a traditional luxury gift-box feel. For a more modern and tech-focused look, we can design sliding drawer boxes with ribbon pull-tabs. Our precision die-cutting ensures that every drawer and lid fits with a perfect tolerance, providing a smooth opening experience that signals meticulous quality control and high manufacturing standards to the consumer.
                            </p>
                            <h3>Wholesale Production and Efficient Logistics</h3>
                            <p>
                                Whether you're a boutique brand or a large-scale distributor, we offer scalable production solutions. Our wholesale pricing models are designed to give you the best possible cost-per-unit, allowing for healthy profit margins in a competitive market. We utilize a streamlined manufacturing process that minimizes waste and maximizes efficiency, allowing us to offer fast turnaround times without compromising on quality. Each batch of lighter boxes undergoes rigorous quality checks to ensure color consistency and structural integrity, ensuring that your supply chain remains reliable and your products are always ready for the shelves.
                            </p>
                            <h3>Sustainability in Lighter Packaging</h3>
                            <p>
                                Modern consumers are increasingly prioritizing brands that demonstrate environmental responsibility. We offer eco-friendly lighter boxes made from FSC-certified recycled paperboard and natural kraft materials. These materials have a unique, earthy aesthetic that is highly effective for heritage or 'green' accessory lines. When paired with soy-based inks and biodegradable laminates, your lighter packaging becomes fully recyclable. We help you tell this sustainable story directly on the box, building a deep connection with eco-conscious shoppers and differentiating your brand as one that cares about its environmental footprint.
                            </p>
                            <h3>Optimizing for E-Commerce and Retail Display</h3>
                            <p>
                                In the digital age, your packaging must perform well both on a physical shelf and in a shipping box. We ensure that our lighter boxes are robust enough to withstand the postal system while remaining lightweight enough to minimize shipping costs. For brick-and-mortar retail, we can design the boxes with 'hang tabs' or integrated display panels that make them easy to merchandise in a variety of store environments. A lighter box that is easy to see, easy to ship, and easy to gift is a powerful asset for any multi-channel accessory brand.
                            </p>
                            <h3>Conclusion: Protecting and Promoting Your Accessories</h3>
                            <p>
                                A custom lighter box is an investment in your brand's future and customer satisfaction. At CustomPackMakers, we combine engineering excellence with creative vision to deliver packaging that protects your accessories and elevates your brand's status. From the protection of custom foam inserts to the visual impact of metallic foil stamping, every element of our lighter packaging is designed to inspire confidence and delight. Contact us today to learn how our custom lighter solutions can help you build a stronger brand and provide a superior unboxing experience for every customer.
                            </p>
                            <h3>Lighter Box Design Checklist</h3>
                            <ul>
                                <li><strong>Internal Fit:</strong> Always use a custom insert to prevent product movement.</li>
                                <li><strong>Window Placement:</strong> Center the window to highlight the lighter's primary graphic.</li>
                                <li><strong>Material Choice:</strong> Use 24pt SBS for a high-end, substantial hand-feel.</li>
                                <li><strong>Finish Contrast:</strong> Pair a matte body with a glossy spot-UV logo for shelf impact.</li>
                                <li><strong>Safety Labels:</strong> Ensure all fuel and fire warnings are placed in high-visibility zones.</li>
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

            <section className="py-12 relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #fafafa 0%, #f4f6ff 60%, #f0fdf8 100%)' }}>
                <div className="container mx-auto px-[30px] relative z-10">
                    <div className="text-center mb-14">
                        <span className="inline-block text-xs font-semibold tracking-widest text-primary uppercase mb-3 bg-primary/10 px-4 py-1.5 rounded-full">Our Promise</span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">Why Brands Choose <span className="text-primary text-black">CustomPackMakers</span></h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Providing high-grade accessory protection, gift-ready luxury finishes, and crystal-clear retail visibility for lighter brands.</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">
                        <div className="space-y-5">
                            {[
                                {
                                    title: "Accessory-Specific Impact Shielding",
                                    body: "Our lighter boxes are engineered to protect delicate ignition surfaces and polished finishes from the rigors of shipping and retail handling. We utilize high-density SBS board and custom-fit protective inserts that keep your accessories stationary and safe, ensuring that every product arrives in pristine, mint condition for your customers to enjoy immediately."
                                },
                                {
                                    title: "Crystal-Clear Product Visibility",
                                    body: "We expert in the integration of high-clarity PVC and PET window cutouts that allow your lighter's unique graphics and metallic finishes to be viewed directly by shoppers. This transparency builds instant consumer trust and is an essential tool for showcasing limited edition designs or premium-tier accessories without the need to ever open the packaging."
                                },
                                {
                                    title: "Luxury Gift-Ready Finishing",
                                    body: "Using a masterclass of finishing techniques like deep embossing, metallic foil stamping, and soft-touch velvet coatings, we transform standard accessory boxes into high-value gift items. Our focus on tactile excellence ensures that your lighter packaging communicates a sense of luxury and high perceived value that resonates with quality-conscious consumers globally."
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
                                <img src={productHero} alt="Premium Lighter Accessory Packaging" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-7">
                                    <p className="text-white font-bold text-lg leading-snug mb-1">Trusted by Luxury Accessory Brands</p>
                                    <p className="text-white/75 text-sm">Setting the standard in lighter retail packaging.</p>
                                </div>
                            </div>
                            <div className="absolute top-4 -right-2 lg:-right-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80">
                                <p className="text-2xl font-bold text-primary leading-none">100%</p>
                                <p className="text-xs text-slate-400 mt-1 font-medium">Gift Ready</p>
                            </div>
                            <div className="absolute bottom-4 -left-2 lg:-left-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80">
                                <p className="text-2xl font-bold text-emerald-500 leading-none">24pt</p>
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
                                <img src={productHero} alt="Differentiate Your Lighter Brand" className="w-full h-full object-cover" />
                            </div>
                        </div>
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                                Differentiate Your <span className="text-primary text-black">Lighter Brand</span> From Others
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                Differentiate your accessory brand with our stylish and precision-engineered custom lighter packaging solutions. Our high-quality lighter boxes are designed to provide maximum protection for electronic and butane lighters while offering a sleek, professional aesthetic that resonates with quality-conscious consumers. By incorporating advanced printing techniques like metallic foil stamping and protective window cutouts, we help your products stand out on retail shelves with a premium look. Invest in durable, compact lighter packaging that reinforces brand prestige and ensures your accessories arrive in perfect condition, enhancing the overall quality perception of your merchandise.
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
                            <img src={FAQimage} alt="FAQ for Lighter Packaging" className="absolute inset-0 w-full h-full object-cover" />
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

export default LighterBoxes;
