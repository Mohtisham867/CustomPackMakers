import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { QuoteForm } from "@/components/QuoteForm";
import { BrandRating } from "@/components/BrandRating";
import { Card, CardContent } from "@/components/ui/card";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SEOContent } from "@/components/SEOContent";
import { TechnicalSpecsSection } from "@/components/TechnicalSpecsSection";
import { RelatedProductKraftBoxes } from "@/components/RelatedProductKraftBoxes";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";

// Product images
import kraftBags from "@/assets/kraft-boxes/kraft-bags.webp";
import FAQimage from "@/assets/FAQ-image.webp";

const KraftBags = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    const productImages = [
        { src: kraftBags, alt: "Kraft Bags - Retail Shopping" },
        { src: kraftBags, alt: "Kraft Bags - Twisted Handle Detail" },
        { src: kraftBags, alt: "Kraft Bags - Various Sizes" },
        { src: kraftBags, alt: "Kraft Bags - Bottom Reinforcement" },
        { src: kraftBags, alt: "Kraft Bags - Lifestyle View" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Kraft Bags | Eco-Friendly Shopping Bags | CustomPackMakers</title>
                <meta name="description" content="Order custom kraft bags with twisted handles. Durable, sustainable brown paper shopping bags for retail & events. Custom printing, wholesale pricing & fast turnaround." />
                <meta name="keywords" content="custom kraft bags, brown paper bags with handles, eco friendly shopping bags, wholesale kraft bags, retail paper bags" />
            </Helmet>
            <Header />

            {/* Breadcrumb */}
            <div className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 mt-[120px] md:mt-[140px]">
                <div className="container mx-auto px-[30px] py-3">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link to="/">Home</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link to="/box-by-materials">Box by Materials</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link to="/box-by-material/kraft-boxes">Kraft Boxes</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Kraft Bags</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </div>

            {/* Hero Section */}
            <section className="py-12 md:py-20">
                <div className="container mx-auto px-[30px]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        {/* Image Gallery */}
                        <div className="space-y-4">
                            <div className="aspect-square bg-white rounded-xl overflow-hidden border border-border shadow-md relative group">
                                <img
                                    src={productImages[selectedImage].src}
                                    alt={productImages[selectedImage].alt}
                                    className="w-full h-full object-contain p-8 transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <div className="grid grid-cols-5 gap-2">
                                {productImages.map((img, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setSelectedImage(idx)}
                                        className={`aspect-square rounded-md overflow-hidden border-2 transition-all ${selectedImage === idx ? "border-primary shadow-sm" : "border-transparent hover:border-border"
                                            }`}
                                    >
                                        <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Product Info */}
                        <div className="space-y-8">
                            <div>
                                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                                    Custom Kraft Bags
                                </h1>
                                <p className="text-xl text-muted-foreground leading-relaxed">
                                    The ultimate standard in sustainable retail. Our Custom Kraft Bags combine high-tensile strength with a clean, natural finish, providing a reliable and eco-conscious way for your customers to carry their purchases.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="p-4 rounded-lg bg-gray-50 border border-border flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">✓</div>
                                    <span className="text-sm font-medium">Twisted Paper Handles</span>
                                </div>
                                <div className="p-4 rounded-lg bg-gray-50 border border-border flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">✓</div>
                                    <span className="text-sm font-medium">Reinforced Square Base</span>
                                </div>
                                <div className="p-4 rounded-lg bg-gray-50 border border-border flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">✓</div>
                                    <span className="text-sm font-medium">High Tear Resistance</span>
                                </div>
                                <div className="p-4 rounded-lg bg-gray-50 border border-border flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">✓</div>
                                    <span className="text-sm font-medium">Biodegradable Liner</span>
                                </div>
                            </div>

                            <div className="p-6 rounded-xl bg-primary/5 border border-primary/10 space-y-4">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-semibold uppercase tracking-wider text-primary">Retail Essential</span>
                                    <span className="px-3 py-1 bg-primary text-white text-[10px] font-bold rounded-full uppercase">Wholesale</span>
                                </div>
                                <QuoteForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Overview Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-[30px]">
                    <div className="max-w-4xl mx-auto text-center space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Sturdy. Sustainable. Sophisticated.</h2>
                        <div className="w-20 h-1 bg-primary mx-auto" />
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Kraft bags have long been the face of eco-friendly shopping. Our custom-printed versions allow you to pair that environmental responsibility with powerful brand marketing. Made from high-GSM unbleached paper, these bags are designed to hold everything from clothing and heavy books to gourmet grocery items without the risk of bottom failure or handle detachment.
                        </p>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-[30px]">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Kraft Bags?</h2>
                        <p className="text-muted-foreground">Premium retail solutions for conscious brands.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <Card className="border-none shadow-none text-center space-y-4 p-6 hover:bg-gray-50 transition-colors duration-300">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary mb-2">
                                <img src="/icons/custom-size.svg" alt="Handles" className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold uppercase tracking-tight">Ergonomic Handles</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">Our tightly-twisted paper handles are bonded to the interior with reinforced patch-strips, ensuring comfort and durability.</p>
                        </Card>

                        <Card className="border-none shadow-none text-center space-y-4 p-6 hover:bg-gray-50 transition-colors duration-300">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary mb-2">
                                <img src="/icons/eco-friendly.svg" alt="Base" className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold uppercase tracking-tight">High-Weight Capacity</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">Unlike flimsy convenience store bags, our retail-grade kraft holds up to 15lbs depending on the bag size selected.</p>
                        </Card>

                        <Card className="border-none shadow-none text-center space-y-4 p-6 hover:bg-gray-50 transition-colors duration-300">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary mb-2">
                                <img src="/icons/fast-turnaround.svg" alt="Branding" className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold uppercase tracking-tight">Print Clarity</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">The absorbent, non-glossy surface of kraft paper allows for high-contrast, bleed-free printing of your brand logo.</p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Differentiate Section */}
            <section className="py-20 bg-[#f8f6f4]">
                <div className="container mx-auto px-[30px]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-widest">
                                The Retail Hero
                            </div>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-[1.1]">
                                Turn Every Customer <br /> <span className="text-primary">Into a Walking Billboard</span>
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                A high-quality shopping bag is often reused by customers for months. Our kraft bags are designed to look and feel premium, ensuring your brand stays visible in the community long after the initial purchase.
                            </p>

                            <div className="space-y-4">
                                {[
                                    { title: "Serrated Edge Finishing", desc: "A classic retail look that prevents paper cuts and adds a textured premium feel." },
                                    { title: "Side Gusset Engineering", desc: "Wide expandable sides to accommodate bulky items like shoe boxes or folded garments." },
                                    { title: "Full Coverage Printing", desc: "Showcase your brand's unique pattern or message across the entire surface of the bag." }
                                ].map((item, id) => (
                                    <div key={id} className="flex gap-4 items-start border-l-2 border-primary/20 pl-6 py-2">
                                        <div>
                                            <h4 className="font-bold text-foreground mb-1">{item.title}</h4>
                                            <p className="text-sm text-muted-foreground">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl skew-y-1 group transition-transform duration-700 hover:skew-y-0">
                                <img src={kraftBags} alt="Kraft Bag Quality" className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-primary/10" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <TechnicalSpecsSection />

            {/* Related Products Carousel */}
            <RelatedProductKraftBoxes />

            {/* SEO Scroll Box */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-[30px]">
                    <div className="max-w-4xl mx-auto">
                        <SEOContent>
                            <div className="prose prose-slate max-w-none prose-h2:text-3xl prose-h2:font-bold prose-h3:text-2xl prose-h3:font-semibold prose-p:text-muted-foreground prose-p:leading-relaxed prose-li:text-muted-foreground">
                                <h2>Maximizing Brand Visibility with Custom Kraft Bags</h2>
                                <p>
                                    As plastic bag bans sweep across the globe, the paper shopping bag has reclaimed its throne as the king of retail. However, for a brand that prides itself on quality, a flimsy, generic bag is unacceptable. <strong>Custom Kraft Bags</strong> represent the gold standard in sustainable transport. By utilizing high-density, unbleached long-fiber wood pulp, we create a substrate that is significantly stronger than standard paper, offering high tear resistance and structural reliability.
                                </p>
                                <p>
                                    When a customer leaves your store carrying a well-designed kraft bag, they are providing a mobile advertisement for your business. The rustic, premium aesthetic of brown kraft paper suggests an "artisan" or "luxury" quality that bleached white paper can't quite capture. It is a material that aligns perfectly with modern consumer values: authentic, sustainable, and high-quality.
                                </p>

                                <h3>The Structural Engineering of a Reliable Bag</h3>
                                <p>
                                    The biggest weakness of any shopping bag is the handle point. We solve this by using a multi-step reinforcement process. First, our twisted paper handles are manufactured with a high-tension core. Second, they are anchored to the interior of the bag using a wide-area patch of high-tack adhesive. This distributes the weight across the entire top-fold of the bag, preventing the "pop-out" failure common in cheaper alternatives.
                                </p>
                                <p>
                                    The base of the bag is also precision-engineered. We use a 'square-bottom' design with reinforced overlap folds. This allows the bag to stand upright on its own—making the packing process faster for your staff and the transport process easier for your customers.
                                </p>

                                <h3>Custom Printing: Boldness on a Natural Surface</h3>
                                <p>
                                    Printing on kraft paper requires specialized knowledge. Because the material is porous and unbleached, it absorbs ink differently than coated board. We utilize high-opacity, water-based inks that sit on top of the fibers, resulting in vibrant colors and deep blacks.
                                </p>
                                <ul>
                                    <li><strong>Single-Sided Branding:</strong> Perfect for minimalist luxury brands.</li>
                                    <li><strong>Full-Gusset Printing:</strong> Add your social media handles or brand tagline to the side panels for visibility from every angle.</li>
                                    <li><strong>Internal Printing:</strong> A premium detail—printing a pattern or message on the inside of the bag for a unique unboxing experience.</li>
                                    <li><strong>Hot Foil Stamping:</strong> Adding a touch of metallic gold or silver to your logo creates a stunning contrast against the matte brown kraft background.</li>
                                </ul>

                                <h3>Eco-Friendly Credentials: Beyond Just Paper</h3>
                                <p>
                                    While all paper bags are generally better for the environment than plastic, our kraft bags go a step further. We source our pulp from FSC-certified forests, ensuring that for every tree harvested, more are planted. Our bags are also 100% recyclable, biodegradable, and compostable. Because we use unbleached paper, the manufacturing process uses fewer chemicals, resulting in a significantly lower carbon footprint.
                                </p>
                                <p>
                                    For brands that want to showcase their "green" commitment, our bags provide a tangible, tactile proof of those values. The absence of plastic lamination or toxic glues makes these bags part of a circular economy.
                                </p>

                                <h3>Wholesale Solutions and Inventory Management</h3>
                                <p>
                                    We support retailers ranging from boutique startups to international department stores. Our wholesale kraft bags are packed in compressed, high-count cartons to minimize the storage space they take up in your back-room. We also offer "mixed-size" orders, allowing you to get small, medium, and large bags in a single SKU to match your diverse inventory.
                                </p>
                                <p>
                                    Invest in a retail tool that works as hard as you do. Choose Custom Kraft Bags and provide your customers with a sustainable, stylish way to carry your brand into the world.
                                </p>
                            </div>
                        </SEOContent>
                    </div>
                </div>
            </section>

            {/* Support Section */}
            <BrandRating />

            {/* FAQ Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-[30px]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Frequently Asked Questions</h2>
                            <Accordion type="single" collapsible className="w-full space-y-4">
                                {[
                                    { q: "What is the weight capacity of these bags?", a: "Our standard medium-sized bags can comfortably hold up to 10-12 lbs. For heavier items like electronics or multiple shoe boxes, we recommend our higher-GSM (120+) kraft stock." },
                                    { q: "Can handles be customized in different colors?", a: "Yes. While our standard handles are natural or black, we can provide custom colored twisted paper handles or even cotton-rope handles for a more premium look." },
                                    { q: "Are the bags recyclable with food grease?", a: "Paper becomes difficult to recycle if it is heavily saturated with grease. For bakery or food use, we recommend our grease-resistant lined kraft bags to maintain recyclability for as long as possible." },
                                    { q: "What sizes are available?", a: "We offer a wide range from 'Small Favor' (5x3x8) to 'Large Retail' (16x6x19). We can also create fully custom dimensions if our standard sizes don't fit your needs." },
                                    { q: "Is there a minimum order quantity (MOQ)?", a: "For custom printed bags, our MOQ starts at 500 units. For plain unprinted bags, we offer smaller pack sizes starting at 100 units." }
                                ].map((item, idx) => (
                                    <AccordionItem key={idx} value={`faq-${idx}`} className="bg-white px-6 rounded-lg border border-border">
                                        <AccordionTrigger className="hover:no-underline font-bold text-left py-4">
                                            {item.q}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-muted-foreground pb-4 leading-relaxed">
                                            {item.a}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                        <div className="hidden lg:block relative">
                            <div className="absolute -inset-4 bg-primary/5 rounded-full blur-3xl" />
                            <img src={FAQimage} alt="FAQ Customer Support" className="relative w-full max-w-md mx-auto drop-shadow-2xl" />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default KraftBags;
