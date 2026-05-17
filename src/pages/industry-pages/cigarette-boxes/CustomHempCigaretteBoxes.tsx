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

import productHero from "@/assets/industry/cigarette-boxes/hemp-cigarette-boxes.webp";
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
    { id: "item-1", q: "Are your hemp cigarette boxes made from sustainable or recycled materials?", a: "Yes, we use FSC-certified recycled paperboard and hemp-fiber blends to create eco-friendly packaging that aligns with your brand's environmental values. These materials are fully biodegradable and compostable, providing a guilt-free disposal option for your customers while maintaining the premium look and feel of high-end tobacco packaging." },
    { id: "item-2", q: "How do you preserve the terpene profile of hemp cigarettes in these boxes?", a: "We offer specialized inner coatings and airtight seals that prevent oxygen exposure, keeping the hemp's natural aroma and terpene profile fresh for longer periods. By utilizing high-barrier materials and moisture-resistant finishes, our boxes protect the delicate botanical properties of your hemp products from environmental degradation during shipping and shelf storage." },
    { id: "item-3", q: "What board thickness do you recommend for heavy hemp cigarette packs?", a: "We suggest 16pt to 22pt high-density kraft board, which provides excellent burst strength while maintaining a lightweight and biodegradable profile suitable for organic products. This thickness ensures that the boxes do not collapse under pressure and provides ample protection for the cigarettes inside without adding unnecessary bulk to your wholesale shipments." },
    { id: "item-4", q: "Can I use soy-based inks for branding on hemp boxes?", a: "Absolutely. We specialize in using soy-based and vegetable-derived inks that are non-toxic and fully compatible with our biodegradable hemp and kraft packaging materials. These inks produce vibrant, long-lasting colors while ensuring that the entire packaging remains environmentally friendly and safe for consumers, which is a key selling point for hemp-based brands." },
    { id: "item-5", q: "Do you offer custom die-cut shapes for hemp cigarette packaging?", a: "Yes, our advanced die-cutting machines can create unique geometric shapes and sizes, allowing your hemp brand to stand out from traditional rectangular cigarette packs. Whether you want a hexagonal box, a slim-style case, or unique tuck flaps, we can engineer a structural design that reflects your brand's innovation and attracts attention on the retail shelf." },
];

const CustomHempCigaretteBoxes = () => {
    const [selectedImage, setSelectedImage] = useState(0);
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);

    const productImages = [
        { src: productHero, alt: "Custom Hemp Cigarette Boxes Main" },
        { src: productHero, alt: "Eco-friendly Hemp Packaging View" },
        { src: productHero, alt: "Natural Kraft Hemp Box View" },
        { src: productHero, alt: "Sustainable Hemp Cigarette Case" },
        { src: productHero, alt: "Biodegradable Tobacco Box View" },
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
                <title>Custom Hemp Cigarette Boxes | Eco-Friendly Packaging | CustomPackMakers</title>
                <meta name="description" content="Discover premium custom hemp cigarette boxes crafted from sustainable materials. Natural, durable, and fully customizable packaging for your organic hemp products." />
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
                            <BreadcrumbItem><BreadcrumbPage>Custom Hemp Cigarette Boxes</BreadcrumbPage></BreadcrumbItem>
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
                                <span className="text-primary text-black">Custom Hemp</span> Cigarette Boxes
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Our custom hemp cigarette boxes provide eco-friendly protection and natural branding for your organic tobacco products. Sustainable and sturdy, these premium cases ensure regulatory compliance while delivering an authentic unboxing experience for shoppers.
                            </p>
                            <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300" onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}>
                                Get a Quote
                            </Button>
                        </div>
                        <div className="lg:col-span-5 relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-muted group">
                            <img src={productHero} alt="Custom Hemp Cigarette Boxes" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 max-w-3xl">Sustainable Excellence for Organic Hemp Brands</h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            In the organic and botanical industry, the quality of your packaging is a direct reflection of your product's purity. Our <strong className="text-foreground">custom hemp cigarette boxes</strong> are crafted with this philosophy in mind, utilizing natural fibers and recycled materials to create a packaging solution that is as sustainable as it is sophisticated. We recognize that hemp smokers often value environmental health as much as product quality, and our packaging is designed to appeal directly to those eco-conscious sensibilities.
                        </p>
                        <p>
                            Our hemp boxes go beyond simple aesthetics; they are engineered for performance. Using high-density kraft board and biodegradable laminates, we provide a level of durability that protects your hemp rolls from humidity, pressure, and sunlight. Whether you're looking for a rustic, unbleached brown look or a clean, white-recycled finish, we offer the customization needed to make your brand stand out. From soy-based ink printing to unique geometric die-cuts, every element of our hemp packaging is optimized for brand impact and planet safety.
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
                                            <div className="space-y-1.5">
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">Comprehensive Guide to Hemp Cigarette Packaging</h2>
                    <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="[&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-6 [&>h3]:mb-3 [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-4 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-4 [&>ul>li]:text-[15px] [&>ul>li]:text-slate-600">
                            <p>
                                In the eco-conscious era of modern retail, hemp-based products are leading the way toward a more sustainable future. At CustomPackMakers, we empower this movement by providing custom hemp cigarette boxes that combine environmental responsibility with world-class packaging engineering. Our hemp storage solutions are more than just containers; they are a vital component of your brand's story, communicating authenticity and quality from the moment they are spotted in a dispensary or online shop. As the hemp market becomes increasingly competitive, having packaging that accurately reflects the natural purity and effort put into your product is essential for long-term growth and customer loyalty.
                            </p>
                            <h3>The Rise of Sustainable Hemp Packaging</h3>
                            <p>
                                As consumers shift away from plastic-heavy products, the demand for natural packaging like hemp and kraft board has soared. Our hemp cigarette boxes utilize high-quality recycled fibers that provide a unique tactile experience that standard bleached board cannot match. This 'natural' feel is a powerful psychological cue for consumers, signaling that the product inside is organic, pure, and additive-free. By choosing these materials, you not only reduce your environmental impact but also strengthen your market position as a brand that cares about the planet. Sustainability is no longer a niche preference; it is a primary driver of purchasing decisions in the botanical market.
                            </p>
                            <h3>Material Integrity and Product Preservation</h3>
                            <p>
                                Hemp rolls are highly sensitive to their environment. Exposure to excessive humidity can result in mold, while too much dryness can make the rolls brittle and harsh to smoke. Our hemp cigarette boxes are engineered to maintain internal equilibrium through the use of high-density boards and specialized inner foils. These barriers protect the terpene profile and moisture content of your hemp, ensuring that the last cigarette in the pack is as fresh and flavorful as the first. We offer various board weights, typically ranging from 14pt to 22pt, allowing you to choose the perfect level of rigidity for your specific product line.
                            </p>
                            <h3>Advanced Customization for Hemp Brands</h3>
                            <p>
                                Just because you're using natural materials doesn't mean your design has to be plain. We offer a full suite of customization options for hemp packaging. Our soy-based printing technology delivers sharp, vibrant colors that stand out against the earthy background of kraft and hemp board. For a more luxury feel, we can incorporate embossing or debossing, which adds a 3D tactile element to your logo. Foil stamping is also an option for premium lines, adding a touch of elegance that suggests high perceived value. Our structural design team can create everything from traditional flip-top packs to innovative drawer sleeves that provide a unique opening experience.
                            </p>
                            <h3>Regulatory Compliance and Labelling</h3>
                            <p>
                                Like all tobacco and combustible products, hemp cigarettes are subject to strict legal labeling requirements. This includes FDA warning statements, THC content declarations (where applicable), and batch numbers. Our design process ensures that these mandatory elements are integrated seamlessly into your brand artwork. We provide precise die-lines that allow you to place your branding and legal text exactly where it needs to be, ensuring total compliance and preventing costly retail rejections. We use high-resolution printing to ensure that even the smallest legal text remains perfectly legible, meeting all industry standards with precision.
                            </p>
                            <h3>The Power of Eco-Friendly Storytelling</h3>
                            <p>
                                Packaging is a storyteller. When a customer picks up a pack of hemp cigarettes in a biodegradable, natural-finish box, they are immediately informed about your brand's mission. We encourage our clients to use the surface area of the box to share their sustainability story—from the sourcing of the hemp to the recyclability of the packaging. Including small icons like '100% Recyclable' or 'FSC Certified' builds instant trust and helps turn a casual buyer into a brand advocate. In a world where consumers are increasingly wary of 'greenwashing', having authentic, high-quality sustainable packaging is a massive competitive advantage.
                            </p>
                            <h3>Wholesale Production and Fast Turnaround</h3>
                            <p>
                                Scaling a hemp brand requires a reliable supply chain. At CustomPackMakers, we offer flexible production runs that cater to both artisanal startups and large-scale distributors. Our wholesale pricing ensures that you get the best possible per-unit cost, allowing you to maintain healthy profit margins. Despite the complexity of custom die-cutting and natural material handling, we pride ourselves on our fast turnaround times. Our goal is to ensure that you never run out of the packaging you need to keep your products on the shelves and your business moving forward.
                            </p>
                            <h3>Optimizing for Shelve and Online Performance</h3>
                            <p>
                                In the retail environment, your hemp packaging must work hard to grab attention. We use color theory and structural innovation to ensure your product isn't lost among the competition. High-contrast printing on natural kraft board creates a striking visual effect that is both modern and grounded. For online brands, we ensure that the packaging is durable enough to survive the postal system while remaining light enough to minimize shipping costs. A box that arrives in perfect condition without excess waste is the gold standard for D2C (Direct-to-Consumer) success in the hemp industry.
                            </p>
                            <h3>Conclusion: Investing in Your Hemp Brand's Future</h3>
                            <p>
                                Your packaging is the final stage of your production process, and it's just as important as the cultivation of the hemp itself. Our custom hemp cigarette boxes provide the perfect vessel for your organic products, offering unmatched durability, compliance, and aesthetic appeal. By choosing sustainable materials and premium design, you are investing in the long-term success of your brand and the satisfaction of your customers. Contact CustomPackMakers today to discuss your vision, and let us help you create the perfect eco-friendly packaging solution for your growing business.
                            </p>
                            <h3>Hemp Packaging Best Practices</h3>
                            <ul>
                                <li><strong>Material Selection:</strong> Choose unbleached kraft for a natural, organic look.</li>
                                <li><strong>Ink Choice:</strong> Use soy-based inks to maintain eco-friendly credentials.</li>
                                <li><strong>Barrier Protection:</strong> Use inner foils for long-term freshness.</li>
                                <li><strong>Tactile Design:</strong> Use embossing to add a premium touch without adding plastics.</li>
                                <li><strong>Clear Copy:</strong> Clearly state the organic and sustainable nature of the product.</li>
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
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Eco-friendly focus, botanical preservation experts, and sustainable branding for organic tobacco brands.</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">
                        <div className="space-y-5">
                            {[
                                {
                                    title: "Natural and Sustainable Materials",
                                    body: "We lead the industry in eco-friendly packaging by utilizing FSC-certified recycled paper and hemp-fiber blends. Our materials are fully biodegradable and compostable, ensuring your brand aligns with the values of environmentally conscious consumers without sacrificing structural integrity or premium aesthetic appeal on the retail shelf."
                                },
                                {
                                    title: "Expert Botanical Preservation",
                                    body: "Our packaging is specifically engineered to protect the delicate terpene profiles and moisture content of organic hemp. We use high-barrier inner coatings and moisture-resistant finishes that prevent environmental degradation, ensuring that your products remain as fresh and potent as the day they were packed, enhancing customer satisfaction and repeat sales."
                                },
                                {
                                    title: "Earth-Friendly Printing Tech",
                                    body: "Using low-VOC, soy-based inks, we deliver vibrant and sharp branding that is safe for both consumers and the planet. Our advanced printing technology allows for high-definition graphics on unbleached kraft and hemp surfaces, giving your organic tobacco products a distinctive and authentic look that stands out in a crowded market of traditional packaging."
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
                                <img src={productHero} alt="Sustainable Hemp Packaging" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-7">
                                    <p className="text-white font-bold text-lg leading-snug mb-1">Trusted by 200+ Organic Brands</p>
                                    <p className="text-white/75 text-sm">Leading the way in sustainable retail packaging.</p>
                                </div>
                            </div>
                            <div className="absolute top-4 -right-2 lg:-right-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80">
                                <p className="text-2xl font-bold text-primary leading-none">100%</p>
                                <p className="text-xs text-slate-400 mt-1 font-medium">Recyclable</p>
                            </div>
                            <div className="absolute bottom-4 -left-2 lg:-left-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80">
                                <p className="text-2xl font-bold text-emerald-500 leading-none">100+</p>
                                <p className="text-xs text-slate-400 mt-1 font-medium">Eco Choices</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-10 lg:py-12 bg-white overflow-hidden relative">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="relative group">
                            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] border border-primary/20 shadow-2xl transform transition-transform duration-700 hover:scale-[1.02]">
                                <img src={productHero} alt="Differentiate Your Hemp Brand" className="w-full h-full object-cover" />
                            </div>
                        </div>
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                                Differentiate Your <span className="text-primary text-black">Hemp Brand</span> From Others
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                Differentiate your organic hemp brand with our sustainable and precision-engineered custom packaging solutions. Our high-quality hemp cigarette boxes are designed to provide maximum protection for natural rolls while offering a rustic, eco-conscious aesthetic that resonates with environmentally aware consumers. By utilizing recycled materials and earth-friendly printing techniques, we help your products stand out with a truly authentic look. Invest in durable, biodegradable packaging that reinforces brand values and ensures your hemp cigarettes arrive in perfect condition, significantly enhancing the overall quality perception for your customers.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

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
                            <img src={FAQimage} alt="FAQ for Hemp Cigarette Boxes" className="absolute inset-0 w-full h-full object-cover" />
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

export default CustomHempCigaretteBoxes;
