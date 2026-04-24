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

import productHero from "@/assets/cigarette-boxes/e-cigarette-boxes.webp";
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
    { id: "item-1", q: "How do foil linings help maintain the freshness of e-cigarette cartridges?", a: "Foil linings create an airtight and moisture-resistant barrier that prevents external elements from affecting the sensitive electronic components and liquid inside. This protective layer ensures that the e-liquid maintains its flavor profile and nicotine strength over time, extending the product's shelf life significantly. Additionally, it prevents leaks from seeping into the cardboard outer layer." },
    { id: "item-2", q: "Do you offer child-resistant locking mechanisms for e-cigarette boxes?", a: "Yes, we prioritize safety by offering several ASTM-certified child-resistant (CR) locking mechanisms. These include push-and-turn designs, squeeze-to-open tabs, and reinforced locking flaps that require a specific sequence of actions to open. These features are essential for meeting regulatory requirements and ensuring that products remain inaccessible to children while providing a premium user experience." },
    { id: "item-3", q: "What paper weight is recommended for premium e-cigarette packaging?", a: "For high-end e-cigarette boxes, we typically recommend using 18pt to 24pt SBS (Solid Bleached Sulfate) paperboard. This material provides a smooth surface for vibrant high-definition printing while offering the structural integrity needed to protect devices from crushing during transit. The increased thickness also communicates a sense of quality and luxury to the end-consumer upon first touch." },
    { id: "item-4", q: "How do you ensure branding remains compliant with tobacco packaging regulations?", a: "Our expert design team stays updated on all local and international tobacco packaging regulations, including mandatory warning labels, font size requirements, and placement zones. We carefully integrate these legal elements into your custom design to ensure full compliance without compromising your brand's aesthetic appeal, protecting you from potential legal issues and retail rejections." },
    { id: "item-5", q: "Can I add window cutouts to my e-cigarette boxes?", a: "Absolutely. Custom window cutouts are an excellent way to showcase the color and design of your e-cigarettes or pods directly to customers. We offer various window shapes and sizes, often covered with a protective PET or PVC film. This transparency builds consumer trust while maintaining the box's structural strength through precise die-cutting technology." },
];

const CustomECigaretteBoxes = () => {
    const [selectedImage, setSelectedImage] = useState(0);
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);

    const productImages = [
        { src: productHero, alt: "Custom E-Cigarette Boxes Main View" },
        { src: productHero, alt: "Custom E-Cigarette Boxes Side View" },
        { src: productHero, alt: "Custom E-Cigarette Boxes Detail View" },
        { src: productHero, alt: "Custom E-Cigarette Boxes Open View" },
        { src: productHero, alt: "Custom E-Cigarette Boxes Packaging View" },
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
                <title>Custom E-Cigarette Boxes | Premium Vape Packaging | CustomPackMakers</title>
                <meta name="description" content="Elevate your vape brand with high-quality custom e-cigarette boxes. Durable, compliant, and beautifully designed packaging solutions tailored to your brand's unique needs." />
            </Helmet>
            <Header />

            {/* Breadcrumb Section */}
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
                            <BreadcrumbItem><BreadcrumbPage>Custom E-Cigarette Boxes</BreadcrumbPage></BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </div>

            {/* Hero Section */}
            <section className="py-8 bg-background">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-7 space-y-6">
                            <div className="w-20 h-1.5 bg-primary rounded-full" />
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight">
                                <span className="text-primary text-black">Custom E-Cigarette</span> Boxes
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Our custom e-cigarette boxes provide superior protection and premium branding for your vaping products. Engineered with precision, these durable cases ensure regulatory compliance while delivering an exceptional unboxing experience for your discerning customers.
                            </p>
                            <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300" onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}>
                                Get a Quote
                            </Button>
                        </div>
                        <div className="lg:col-span-5 relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-muted group">
                            <img src={productHero} alt="Custom E-Cigarette Boxes" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Overview Section */}
            <section className="py-8 bg-slate-50">
                <div className="container mx-auto px-[5vw]">
                    <div className="flex items-center gap-3 mb-5">
                        <div className="w-10 h-1 bg-primary rounded-full" />
                        <span className="text-xs font-semibold tracking-widest text-primary uppercase">Product Overview</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 max-w-3xl">Premium Protection for Modern Vaping Brands</h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            As the vaping industry continues to evolve, the demand for distinctive and durable packaging has never been higher. Our <strong className="text-foreground">custom e-cigarette boxes</strong> are specifically designed to meet these needs, providing a perfect blend of structural integrity and aesthetic appeal. We understand that electronic cigarettes are sensitive products that require secure housing to prevent damage to fragile components like heating elements and cartridges.
                        </p>
                        <p>
                            Beyond protection, our packaging serves as a powerful marketing asset. In a market crowded with competitors, your box is often the first touchpoint for consumers. We offer a wide range of customization options, from unique structural designs like flip-tops and sleeves to premium finishes like soft-touch lamination and metallic foiling. Our goal is to help you create a packaging solution that not only safeguards your product but also elevates your brand and builds lasting consumer trust through quality and compliance.
                        </p>
                    </div>
                </div>
            </section>

            {/* Quote Form & Gallery Section */}
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
                                                <Input id="width" type="number" placeholder="1.5" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">D (in)</Label>
                                                <Input id="depth" type="number" placeholder="1.5" className="h-9 bg-white" />
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

            {/* SEO Content Section */}
            <section className="py-8 bg-slate-50 border-t border-slate-100">
                <div className="container mx-auto px-[5vw]">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">The Ultimate Guide to Premium E-Cigarette Packaging</h2>
                    <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="[&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-6 [&>h3]:mb-3 [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-4 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-4 [&>ul>li]:text-[15px] [&>ul>li]:text-slate-600">
                            <p>
                                In the rapidly growing vaping industry, the importance of high-quality packaging cannot be overstated. Custom e-cigarette boxes play a multi-faceted role, acting as a protective shell, a regulatory document, and a brand ambassador. At CustomPackMakers, we specialize in delivering packaging solutions that excel in all these areas. Our e-cigarette boxes are engineered to provide the structural durability needed to protect sensitive electronics while offering the visual brilliance required to captivate your audience. Whether you are selling disposable vapes, rechargeable kits, or specialized pods, the right packaging can make the difference between a product that sits on the shelf and one that flies off it.
                            </p>
                            <h3>Why Quality Matters for E-Cigarette Packaging</h3>
                            <p>
                                E-cigarettes are complex devices containing batteries, heating coils, and liquid-filled cartridges. These components are susceptible to damage from moisture, pressure, and temperature fluctuations. Our e-cigarette boxes are crafted from high-grade materials like SBS (Solid Bleached Sulfate) and kraft paperboard, ensuring a sturdy enclosure that maintains its shape and integrity throughout the supply chain. By investing in premium materials, you reduce the risk of product returns due to breakage, thereby protecting your bottom line and your brand reputation. Durability is not just a feature; it is a necessity in the modern tobacco and vape retail landscape.
                            </p>
                            <h3>Compliance and Safety in Vape Packaging</h3>
                            <p>
                                Safety and regulatory compliance are paramount when it comes to e-cigarette packaging. Jurisdictions round the world have strict requirements for warning labels, ingredient disclosure, and font sizes. Our manufacturing process incorporates precision printing that ensures every legal requirement is met with total clarity. Furthermore, we offer advanced child-resistant locking mechanisms that are ASTM-certified. These locks are designed to be intuitive for adults but extremely difficult for children to open, providing peace of mind for parents and meeting the legal standards expected of nicotine-related products. Choosing a packaging partner who understands these complexities is vital for long-term success.
                            </p>
                            <h3>Customization Options for Branding Impact</h3>
                            <p>
                                Your packaging is a blank canvas for your brand's personality. We offer a comprehensive suite of customization options to help your e-cigarettes stand out. From the structural style of the box—such as reverse tuck-end, sleeve and tray, or magnetic closure—to the surface finishes, we provide total creative control. High-gloss coatings can make colors pop, while matte lamination offers a sophisticated, tactile feel. Techniques like spot UV lighting and metallic foil stamping add a layer of luxury that appeals to premium consumers. We can also include custom inserts made of foam or cardboard to hold your device securely in place, preventing shifting and rattling during delivery.
                            </p>
                            <h3>Sustainable Packaging Solutions for E-Cigarettes</h3>
                            <p>
                                As consumers become more environmentally conscious, sustainable packaging has become a significant differentiator. We offer eco-friendly e-cigarette boxes made from recycled materials and printed with soy-based inks. These sustainable options do not compromise on strength or aesthetic quality. By choosing green packaging, you align your brand with the values of modern consumers, fostering deeper brand loyalty and reducing your environmental footprint. Our kraft paperboard options provide a natural, organic look that is particularly popular with boutique and premium vape brands.
                            </p>
                            <h3>The Importance of the Unboxing Experience</h3>
                            <p>
                                In the digital age, the unboxing experience has become a critical part of the customer journey. A well-designed e-cigarette box that opens smoothly and presents the product beautifully can lead to positive social media exposure and repeat purchases. We focus on the small details, such as the friction of the lid, the clarity of the interior printing, and the ease of access to the product. Every element of our custom boxes is designed to create a sense of anticipation and delight, turning a simple purchase into a memorable brand interaction.
                            </p>
                            <h3>Wholesale Benefits with CustomPackMakers</h3>
                            <p>
                                We understand the needs of growing businesses, which is why we offer competitive wholesale pricing on all our custom e-cigarette boxes. Whether you need a small run for a product launch or high-volume production for international distribution, we provide the same level of care and precision. Our streamlined manufacturing process ensures fast turnaround times without sacrificing quality. Partnering with CustomPackMakers means you get a dedicated team of packaging experts committed to helping your vape brand succeed.
                            </p>
                            <h3>Material Selection and Print Techniques</h3>
                            <p>
                                Selecting the right material is the first step in creating a great box. SBS remains the industry standard for its brightness and smooth finish, allowing for photographic-quality printing. For a more rugged or 'organic' appeal, kraft board is an excellent choice. Our printing technology includes offset, digital, and flexographic options, allowing us to hit your exact Pantone colors every time. We also offer internal printing, which is a great way to include user instructions or additional branding messages inside the box.
                            </p>
                            <h3>Conclusion: Elevating Your Vape Brand</h3>
                            <p>
                                Your packaging is more than just a box; it is the physical embodiment of your brand. Our premium custom e-cigarette boxes provide the protection, compliance, and aesthetic appeal needed to thrive in today's competitive market. From the strength of the paperboard to the luxury of the finishes, we ensure that every aspect of your packaging reflects the quality of the product inside. Contact us today to learn more about how our custom packaging solutions can help you achieve your business goals and delight your customers with every unboxing.
                            </p>
                            <h3>Design Tips for E-Cigarette Boxes</h3>
                            <ul>
                                <li><strong>Clear Branding:</strong> Ensure your logo is the focal point of the design.</li>
                                <li><strong>Consistent Color Schemes:</strong> Use colors that resonate with your target audience.</li>
                                <li><strong>Texture:</strong> Use matte or soft-touch finishes to create a luxury feel.</li>
                                <li><strong>Inserts:</strong> Use custom inserts to protect the device and enhance the presentation.</li>
                                <li><strong>Information Architecture:</strong> Place important information like nicotine strength clearly.</li>
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
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Providing certified safety, structural excellence, and premium design for the global vape industry.</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">
                        <div className="space-y-5">
                            {[
                                {
                                    title: "Certified Safety and Compliance",
                                    body: "Our e-cigarette boxes prioritize consumer safety with ASTM-certified child-resistant locks and precision printing for regulatory health labels. We ensure every box meets the strict legal standards of the tobacco industry, protecting your brand from compliance risks while providing peace of mind for parents and retailers globally."
                                },
                                {
                                    title: "Superior Material Durability",
                                    body: "We use only the highest grade SBS and kraft paperboard to ensure your electronic devices are protected from physical damage during shipping. Our structural engineering focuses on compression strength and impact resistance, ensuring that fragile heating elements and liquid cartridges arrive in perfect condition every single time."
                                },
                                {
                                    title: "High-End Custom Aesthetics",
                                    body: "Elevate your brand with premium finishes like soft-touch matte, spot UV, and metallic foil stamping that command attention on retail shelves. Our advanced printing technology delivers vibrant colors and sharp details, helping your brand communicate a unique and luxury identity that resonates with sophisticated modern consumers in competitive markets."
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
                                <img src={productHero} alt="Premium E-Cigarette Packaging" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-7">
                                    <p className="text-white font-bold text-lg leading-snug mb-1">Trusted by 500+ Vape Brands</p>
                                    <p className="text-white/75 text-sm">Delivering premium packaging across the globe.</p>
                                </div>
                            </div>
                            <div className="absolute top-4 -right-2 lg:-right-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80">
                                <p className="text-2xl font-bold text-primary leading-none">98%</p>
                                <p className="text-xs text-slate-400 mt-1 font-medium">Safety Rating</p>
                            </div>
                            <div className="absolute bottom-4 -left-2 lg:-left-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80">
                                <p className="text-2xl font-bold text-emerald-500 leading-none">8–10</p>
                                <p className="text-xs text-slate-400 mt-1 font-medium">Day Delivery</p>
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
                                <img src={productHero} alt="Differentiate Your E-Cigarette Brand" className="w-full h-full object-cover" />
                            </div>
                        </div>
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                                Differentiate Your <span className="text-primary text-black">E-Cigarette Brand</span> From Others
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                Differentiate your e-cigarette brand with our precision-engineered custom packaging solutions. Our high-quality boxes are designed to provide maximum protection for sensitive electronic components while offering a sleek, professional aesthetic that resonates with modern consumers. By incorporating advanced printing techniques like spot UV and foil stamping, we help your products stand out on crowded retail shelves. Invest in durable, compliance-ready packaging that reinforces brand loyalty and ensures your e-cigarettes arrive in pristine condition, enhancing the overall value proposition for your growing customer base.
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
                            <img src={FAQimage} alt="FAQ for E-Cigarette Boxes" className="absolute inset-0 w-full h-full object-cover" />
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

export default CustomECigaretteBoxes;
