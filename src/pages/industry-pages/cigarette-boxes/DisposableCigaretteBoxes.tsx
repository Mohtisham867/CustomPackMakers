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

import productHero from "@/assets/cigarette-boxes/disposable-cigarette-boxes.webp";
import FAQimage from "@/assets/FAQ-image.png";
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
    { id: "item-1", q: "How do disposable cigarette boxes maintain the freshness of single-use products?", a: "We use lightweight but highly effective inner foil linings that provide a moisture-resistant barrier, ensuring that even in small quantities, your tobacco remains fresh and flavorful from the first cigarette to the last. This inner lining is specifically designed to fit compact box dimensions without compromising its protective qualities, keeping the product perfectly preserved." },
    { id: "item-2", q: "Do you offer child-resistant features for small disposable cigarette packs?", a: "Yes, we have engineered several low-profile child-resistant locking mechanisms that are perfect for smaller disposable packs. These meet all ASTM safety requirements without adding significant bulk to the portable design of the box. Our mechanisms are integrated directly into the paperboard panels, ensuring they remain part of the structural integrity of the small pack." },
    { id: "item-3", q: "What board weight is ideal for slim, disposable cigarette packaging?", a: "For disposable packs, we typically recommend a 14pt to 18pt SBS paperboard. This weight provides enough structural integrity to protect the contents while keeping the box slim and easy to carry in a pocket. This lighter board still provides a high-quality surface for vibrant, multi-color branding and sharp detail reproduction." },
    { id: "item-4", q: "Can all required health warnings fit on a smaller disposable cigarette box?", a: "Absolutely. Our design team is expert at optimizing space. We use high-resolution printing to ensure that all mandatory warnings and legal text are perfectly legible, even on the most compact disposable packaging formats. We optimize the typography and layout to ensure no legal detail is missed while maximizing the remaining room for your brand's unique aesthetics." },
    { id: "item-5", q: "What is the fastest turnaround time for high-volume disposable box orders?", a: "We pride ourselves on our efficiency. For standard disposable box designs, we can often complete manufacturing in 8-10 business days after design approval, ensuring your products hit the shelves as quickly as possible. Our streamlined production process allows us to handle high volumes without sacrificing the individual quality control checks each box receives." },
];

const DisposableCigaretteBoxes = () => {
    const [selectedImage, setSelectedImage] = useState(0);
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);

    const productImages = [
        { src: productHero, alt: "Disposable Cigarette Boxes Portable View" },
        { src: productHero, alt: "Compact Disposable Cigarette Case" },
        { src: productHero, alt: "Custom Printed Disposable Pack" },
        { src: productHero, alt: "Modern Single-Use Tobacco Packaging" },
        { src: productHero, alt: "Slim Portable Cigarette Packaging" },
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
                <title>Disposable Cigarette Boxes | Portable Custom Packaging | CustomPackMakers</title>
                <meta name="description" content="Discover sleek and portable disposable cigarette boxes for your brand. Lightweight, compliant, and beautifully designed packaging for single-use tobacco products." />
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
                            <BreadcrumbItem><BreadcrumbPage>Disposable Cigarette Boxes</BreadcrumbPage></BreadcrumbItem>
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
                                <span className="text-primary text-black">Disposable</span> Cigarette Boxes
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Our custom disposable cigarette boxes offer modern convenience and high-impact branding for single-use tobacco products. Engineered for portability and protection, these sleek cases ensure regulatory compliance while delivering an exceptional consumer experience.
                            </p>
                            <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300" onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}>
                                Get a Quote
                            </Button>
                        </div>
                        <div className="lg:col-span-5 relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-muted group">
                            <img src={productHero} alt="Disposable Cigarette Boxes" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 max-w-3xl">Sleek Portability for the Modern Consumer</h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            As consumer preferences shift toward smaller, more portable options, the demand for single-use and small-count packaging has risen significantly. Our <strong className="text-foreground">custom disposable cigarette boxes</strong> are specifically designed to meet this need, providing a compact and highly functional housing for your tobacco rolls. These boxes are engineered for the on-the-go lifestyle, slipping easily into pockets or small bags while providing the same level of moisture and crush protection as our larger formats.
                        </p>
                        <p>
                            We utilize lightweight yet sturdy paperboard grades, typically 14pt to 18pt SBS, to ensure the box remains portable without feeling flimsy. The structural design focuses on high-tension tuck locks and reinforced corners, keeping your cigarettes secure until they are ready for use. Despite their smaller size, our disposable boxes offer ample surface area for vibrant, high-definition branding and mandatory regulatory labeling. From bold neon colors to sleek minimalist designs, we provide the customization needed to make your disposable packs stand out in a crowded retail environment, appealing to a younger, more dynamic demographic.
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
                                    <h3 className="text-xl font-bold text-foreground mb-5">Get a Disposable Quote</h3>
                                    <form className="space-y-4">
                                        <div className="grid grid-cols-3 gap-3">
                                            <div className="space-y-1.5 align-left">
                                                <Label htmlFor="length" className="text-xs font-semibold text-muted-foreground">L (in)</Label>
                                                <Input id="length" type="number" placeholder="2.5" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label>
                                                <Input id="width" type="number" placeholder="1.5" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">D (in)</Label>
                                                <Input id="depth" type="number" placeholder="0.5" className="h-9 bg-white" />
                                            </div>
                                        </div>
                                        <div className="space-y-1.5">
                                            <Label htmlFor="qty" className="text-xs font-semibold text-muted-foreground">Quantity</Label>
                                            <Input id="qty" type="number" placeholder="2500" className="h-9 bg-white" />
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">The Evolution of Portable Disposable Cigarette Packaging</h2>
                    <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="[&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-6 [&>h3]:mb-3 [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-4 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-4 [&>ul>li]:text-[15px] [&>ul>li]:text-slate-600">
                            <p>
                                In the fast-paced modern retail world, convenience is often the deciding factor for consumers. Disposable and single-use packaging formats have transitioned from niche specialties to mainstream retail essentials. At CustomPackMakers, we are at the forefront of this shift, providing custom disposable cigarette boxes that combine world-class protection with ultimate portability. Our disposable solutions are designed for brands that target active, urban consumers who value efficiency and sleek design over bulk. These boxes are more than just smaller versions of standard packs; they are precision-engineered tools for modern branding that deliver a superior user experience in a compact, high-impact format.
                            </p>
                            <h3>Why Portability is Winning the Retail Market</h3>
                            <p>
                                The rise of the 'on-the-go' consumer means that large, bulky cigarette packs are increasingly being supplemented—or even replaced—by smaller, disposable alternatives. These packs are designed to fit perfectly into a pocket, a small clutch, or a car console without taking up unnecessary space. This portability makes them the ideal choice for festivals, sporting events, night-time retail, and travel. By offering your product in a disposable box, you are providing a level of convenience that matches the lifestyle of your customers, increasing brand loyalty and capturing 'impulse buy' opportunities at the point of sale.
                            </p>
                            <h3>Engineering for Slim-Profile Durability</h3>
                            <p>
                                Creating a small box is easy, but creating a small box that is also durable requires expertise. We use 14pt to 18pt SBS paperboard to provide a rigid structure that resists bending and crushing while maintaining a thin profile. The edges of our disposable boxes are precision-scored to ensure they don't tear under pressure, and the flip-top or side-slide mechanisms are designed to provide a secure seal that prevents cigarettes from falling out in transit. This engineering ensures that even though the packaging is single-use, it provides a high-quality experience for as long as the product is in the consumer's hands.
                            </p>
                            <h3>High-Impact Branding in a Compact Space</h3>
                            <p>
                                Small packaging doesn't mean small branding. In fact, a compact box requires more impactful design to grab attention. At CustomPackMakers, we utilize high-definition printing technology that delivers vibrant colors and sharp details, even on small surfaces. We often recommend high-gloss finishes or tactile spot-UV coatings to help these smaller packs 'pop' on the retail counter. By using contrasting colors and bold typography, we ensure that your brand is immediately recognizable from a distance. The limited surface area of a disposable box forces a focus on your most essential brand elements, resulting in a cleaner and often more modern aesthetic.
                            </p>
                            <h3>Total Compliance for Disposable Formats</h3>
                            <p>
                                Regardless of the size, all tobacco packaging must meet rigorous legal standards. This includes the mandatory placement of health warnings and tax stamps. Our design experts are masters of spatial optimization, ensuring that every legal requirement is met with 100% accuracy while still leaving enough room for your custom artwork. We use high-resolution printing to ensure that warning text remains perfectly legible at smaller sizes, meeting all FDA and jurisdictional requirements. This total compliance protects your brand from retail rejection and legal hurdles, ensuring a smooth path from manufacturing to the consumer.
                            </p>
                            <h3>Structural Styles: Flip-Tops vs. Slim-Slides</h3>
                            <p>
                                The anatomy of a disposable box can be tailored to the specific identity of your brand. We offer traditional hinged flip-top boxes, which provide a familiar and robust user experience. For a more modern or tech-focused vape-cigarette hybrid, we offer slim side-slide boxes that provide a unique 'drawer' opening mechanism. These thin-profile designs are particularly popular for premium, artisanal rolls or specialty cigarette blends. Our structural engineers can create custom die-cuts that match your product's specific dimensions, ensuring a perfect fit that prevents movement and rattling during shipping and carry.
                            </p>
                            <h3>Wholesale Production and Rapid Turnarounds</h3>
                            <p>
                                Scalability is vital for disposable products, which are often sold in high volumes. CustomPackMakers offers efficient wholesale manufacturing that lowers your per-unit cost as your order volume increases. Despite the precision required for smaller boxes, we pride ourselves on our rapid turnaround times, allowing you to replenish your stock and react to market trends with agility. Our streamlined production process includes rigorous quality control at every stage, from the initial digital layout to the final folding and glueing, ensuring that every box in a 50,000-unit run is as perfect as the first.
                            </p>
                            <h3>Sustainability in Disposable Packaging</h3>
                            <p>
                                Single-use packaging often raises environmental concerns. We address this by offering disposable cigarette boxes made from sustainable, FSC-certified recycled materials. These boxes are 100% recyclable and biodegradable, making them a more responsible choice for brands and consumers alike. When paired with soy-based inks and water-based coatings, our disposable packaging provides the ultimate in 'green convenience'. We help you share this sustainable story on the box itself, building trust with eco-conscious consumers who are increasingly looking for guilt-free ways to enjoy their favorite products.
                            </p>
                            <h3>Sensory Branding and Tactile Finishes</h3>
                            <p>
                                In the premium tobacco market, the way a box feels in the hand is just as important as how it looks. We offer a range of tactile finishes for our disposable packs, including soft-touch matte, linen textures, and raised embossing. These features add a sense of luxury and sophistication to the compact format, communicating to the consumer that even though the product is single-use, it is of the highest possible quality. This sensory branding creates a memorable experience that encourages repeat purchases and helps your brand stand out in a sea of generic competitors.
                            </p>
                            <h3>Conclusion: Elevating the Disposable Experience</h3>
                            <p>
                                A disposable cigarette box shouldn't be a secondary consideration—it should be a primary branding asset. At CustomPackMakers, we combine engineering precision with creative excellence to deliver disposable packaging that protects your product, complies with all regulations, and resonates with modern consumers. From the durability of the board grade to the vibrancy of the print, every element of our packaging is optimized for excellence. Contact us today to learn how our custom disposable solutions can help your brand lead the way in portable retail success.
                            </p>
                            <h3>Disposable Box Design Best Practices</h3>
                            <ul>
                                <li><strong>Typography:</strong> Use bold, legible fonts for maximum impact on smaller panels.</li>
                                <li><strong>Material Choice:</strong> Use 16pt SBS for the best balance of slimness and strength.</li>
                                <li><strong>Locking mechanism:</strong> Ensure tuck flaps have high tension to prevent accidental opening.</li>
                                <li><strong>Contrast:</strong> Use sharp color contrasts (e.g., black and gold) for retail visibility.</li>
                                <li><strong>Legal Layout:</strong> Map out health warnings FIRST to ensure compliance before design.</li>
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
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Providing slim-profile durability, high-impact portable branding, and total retail compliance for disposable brands.</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">
                        <div className="space-y-5">
                            {[
                                {
                                    title: "Precision Slim-Profile Engineering",
                                    body: "Our disposable cigarette boxes are engineered to provide maximum structural integrity within a minimal physical footprint. We utilize precise scoring and high-density board stock to ensure that even our slimmest designs remain rigid in a consumer's pocket, protecting your single-use rolls from bending or breaking without adding unnecessary bulk to their portable lifestyle."
                                },
                                {
                                    title: "Retail-Ready Point-of-Sale Branding",
                                    body: "We understand that disposable packaging often lives on the retail counter. Our advanced printing technology delivers vibrant and eye-catching aesthetics that thrive in high-traffic point-of-sale environments. We help your products grab immediate attention through a combination of high-contrast colors, sharp typography, and premium finishes that command a professional retail presence."
                                },
                                {
                                    title: "Legal Compliance Spatial Mastery",
                                    body: "Mapping out mandatory health warnings and legal nicotine disclosures on small boxes requires spatial mastery. Our design team ensures 100% compliance with jurisdictional regulations on even the most compact disposable formats. We use high-resolution printing to ensure that every regulatory detail is legible, protecting your brand from legal liability while maintaining a clean look."
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
                                <img src={productHero} alt="Premium Disposable Tobacco Packaging" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-7">
                                    <p className="text-white font-bold text-lg leading-snug mb-1">Trusted by On-the-Go Brands</p>
                                    <p className="text-white/75 text-sm">Leading the way in portable retail packaging.</p>
                                </div>
                            </div>
                            <div className="absolute top-4 -right-2 lg:-right-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80">
                                <p className="text-2xl font-bold text-primary leading-none">100%</p>
                                <p className="text-xs text-slate-400 mt-1 font-medium">Portable</p>
                            </div>
                            <div className="absolute bottom-4 -left-2 lg:-left-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80">
                                <p className="text-2xl font-bold text-emerald-500 leading-none">16pt</p>
                                <p className="text-xs text-slate-400 mt-1 font-medium">Slim Grade</p>
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
                                <img src={productHero} alt="Differentiate Your Disposable Tobacco Brand" className="w-full h-full object-cover" />
                            </div>
                        </div>
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                                Differentiate Your <span className="text-primary text-black">Disposable Brand</span> From Others
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                Differentiate your tobacco brand with our convenient and precision-engineered custom disposable packaging solutions. Our high-quality disposable cigarette boxes are designed to provide maximum protection for single-use rolls while offering a sleek, portable aesthetic that resonates with modern, on-the-go consumers. By incorporating advanced printing techniques like vibrant spot UV and lightweight board constructions, we help your products stand out with a sharp retail look. Invest in durable, compact disposable packaging that reinforces brand innovation and ensures your cigarettes arrive in perfect condition, elevating the overall quality perception of your merchandise.
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
                            <img src={FAQimage} alt="FAQ for Disposable Cigarette Boxes" className="absolute inset-0 w-full h-full object-cover" />
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

export default DisposableCigaretteBoxes;
