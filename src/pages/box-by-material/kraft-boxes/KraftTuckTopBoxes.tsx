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
import kraftTuckTopBoxes from "@/assets/material/kraft-boxes/kraft-tuck-top-boxes.webp";
import FAQimage from "@/assets/FAQ-image.webp";

const KraftTuckTopBoxes = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    const productImages = [
        { src: kraftTuckTopBoxes, alt: "Kraft Tuck Top Boxes - Retail standard" },
        { src: kraftTuckTopBoxes, alt: "Kraft Tuck Top Boxes - Open View" },
        { src: kraftTuckTopBoxes, alt: "Kraft Tuck Top Boxes - Stacked View" },
        { src: kraftTuckTopBoxes, alt: "Kraft Tuck Top Boxes - Side Angle" },
        { src: kraftTuckTopBoxes, alt: "Kraft Tuck Top Boxes - Closing Tab Detail" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Kraft Tuck Top Boxes | Versatile Retail Packaging | CustomPackMakers</title>
                <meta name="description" content="Order custom kraft tuck top boxes for efficient retail & gift packaging. Durable brown paper boxes with secure closure tabs. Wholesale rates, custom printing & fast shipping." />
                <meta name="keywords" content="kraft tuck top boxes, brown retail boxes, custom tuck boxes, eco friendly retail packaging, wholesale kraft tuck boxes" />
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
                                <BreadcrumbPage>Kraft Tuck Top Boxes</BreadcrumbPage>
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
                                    Kraft Tuck Top Boxes
                                </h1>
                                <p className="text-xl text-muted-foreground leading-relaxed">
                                    The workhorse of the retail industry, refined through sustainable engineering. Our Kraft Tuck Top Boxes provide a fast, secure, and professional packaging solution for everything from cosmetics to dry food items.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="p-4 rounded-lg bg-gray-50 border border-border flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">✓</div>
                                    <span className="text-sm font-medium">Friction-Lock Closure</span>
                                </div>
                                <div className="p-4 rounded-lg bg-gray-50 border border-border flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">✓</div>
                                    <span className="text-sm font-medium">High-Tensile Kraft Stock</span>
                                </div>
                                <div className="p-4 rounded-lg bg-gray-50 border border-border flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">✓</div>
                                    <span className="text-sm font-medium">Precision Die-Cut Tabs</span>
                                </div>
                                <div className="p-4 rounded-lg bg-gray-50 border border-border flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">✓</div>
                                    <span className="text-sm font-medium">Artisanal Matte Finish</span>
                                </div>
                            </div>

                            <div className="p-6 rounded-xl bg-primary/5 border border-primary/10 space-y-4">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-semibold uppercase tracking-wider text-primary">High-Efficiency Design</span>
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
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Fast, functional, and Sustainable</h2>
                        <div className="w-20 h-1 bg-primary mx-auto" />
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Efficiency in fulfillment is the lifeblood of any modern business. Our Kraft Tuck Top Boxes are designed to pop into shape instantly and close securely without the need for glue, tape, or staples. This makes them the ultimate choice for high-volume retail environments and growing e-commerce brands. By utilizing unbleached kraft paperboard, you provide a professional, eco-friendly container that reduces your fulfillment time and your environmental footprint simultaneously.
                        </p>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-[30px]">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Tuck Top Packaging?</h2>
                        <p className="text-muted-foreground">The ultimate balance of speed and structural integrity.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <Card className="border-none shadow-none text-center space-y-4 p-6 hover:bg-gray-50 transition-colors duration-300">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary mb-2">
                                <img src="/icons/custom-size.svg" alt="Safety" className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold uppercase tracking-tight">Security Lock Tabs</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">We use specialized 'friction-fit' tabs that snap into place, ensuring the box doesn't open accidentally during transport or on the shelf.</p>
                        </Card>

                        <Card className="border-none shadow-none text-center space-y-4 p-6 hover:bg-gray-50 transition-colors duration-300">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary mb-2">
                                <img src="/icons/eco-friendly.svg" alt="Surface" className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold uppercase tracking-tight">High-Grip Surface</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">The natural, unbleached surface of kraft paper provides extra friction, making these boxes easy to handle and stack without slipping.</p>
                        </Card>

                        <Card className="border-none shadow-none text-center space-y-4 p-6 hover:bg-gray-50 transition-colors duration-300">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary mb-2">
                                <img src="/icons/fast-turnaround.svg" alt="Storage" className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold uppercase tracking-tight">Ultra-Flat Shipping</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">Designed for maximum storage efficiency, our tuck boxes ship ultra-flat and pop into a rigid structure in a single movement.</p>
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
                                The Retail workhorse
                            </div>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-[1.1]">
                                High-Speed Fulfillment <br /> <span className="text-primary">Meets Artisan Quality</span>
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Don't let your packaging slow down your growth. Our tuck top solutions are optimized for rapid packing lines while maintaining the premium, sustainable feel that modern consumers expect from high-end retail brands.
                            </p>

                            <div className="space-y-4">
                                {[
                                    { title: "Dust-Flap Engineering", desc: "Internal flaps that provide extra corner protection and prevent fine particles from entering the box." },
                                    { title: "Bespoke Auto-Bottom Options", desc: "Choose our auto-lock bottom for even faster assembly—the box snaps into its final shape automatically." },
                                    { title: "High-Resolution Branding", desc: "Showcase your logo and brand story with crisp, bleed-free printing on all six sides of the box." }
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
                                <img src={kraftTuckTopBoxes} alt="Kraft Tuck Top Engineering" className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700" />
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
                                <h2>Streamlining Retail Logistics with Custom Kraft Tuck Top Boxes</h2>
                                <p>
                                    In the world of CPG (Consumer Packaged Goods), efficiency is the most valuable commodity. Whether you are selling tech accessories, organic tea, or luxury candles, you need a packaging solution that is fast to fulfill, secure during transit, and professional on the shelf. <strong>Custom Kraft Tuck Top Boxes</strong> are the industry's answer to this demand. Known as 'folding cartons,' these boxes represent the pinnacle of structural efficiency—shipping flat to save storage space and assembling in a single, intuitive motion.
                                </p>
                                <p>
                                    However, efficiency doesn't have to mean generic. Our kraft tuck boxes utilize unbleached, high-density wood pulp, offering a sophisticated matte texture that immediately distinguishes your product from the glossy, plastic-coated containers that dominate the market. It is a material that suggests authenticity, handicraft, and environmental responsibility.
                                </p>

                                <h3>Technical Excellence: The Architecture of the Tuck</h3>
                                <p>
                                    A tuck box is only as good as its closure. If the tabs are too loose, the box opens during shipping; if they are too tight, the customer rips the box while opening it. At CustomPackMakers, we use precision CAD-driven die-cutting to ensure a perfect 'friction-lock.'
                                </p>
                                <ul>
                                    <li><strong>Straight Tuck End (STE):</strong> Lids fold from the same side, creating a clean 'front' appearance, ideal for shelf display.</li>
                                    <li><strong>Reverse Tuck End (RTE):</strong> Lids fold from opposite sides, allowing for maximum nesting during production and reduced material waste.</li>
                                    <li><strong>Dust Flaps:</strong> Every box includes internal flaps that fill the gaps at the top and bottom corners, providing extra structural rigidity and protecting the contents from dust.</li>
                                    <li><strong>Auto-Lock Bottom:</strong> For higher volumes, we offer an auto-bottom option where the base of the box is pre-glued to snap into a rigid structure as soon as the side-walls are expanded.</li>
                                </ul>

                                <h3>branding and Printing Optimization</h3>
                                <p>
                                    The matte, absorbent surface of kraft paper is the ideal canvas for high-contrast branding. We utilize non-toxic, soy-based inks that bond deeply with the fibers, resulting in crisp, permanent graphics that won't smudge or fade.
                                </p>
                                <p>
                                    Many modern brands choose a 'minimalist' approach on kraft—using just black, white, or single-color logos to emphasize the material's natural beauty. For a more premium look, we offer foil stamping and debossing, which create a stunning tactile contrast against the raw paper surface. Because white is a favorite color for kraft-based branding, we use high-opacity white ink that remains vibrant even on the dark brown background.
                                </p>

                                <h3>Sustainability in Every Fiber</h3>
                                <p>
                                    Consumer behavior has shifted permanently toward environmental values. Over-packaging and non-recyclable materials are now major brand detractors. Our Kraft Tuck Top Boxes are 100% recyclable, biodegradable, and compostable. Furthermore, because we do not use plastic lamination to achieve a glossy finish, the recycling process is significantly more efficient.
                                </p>
                                <p>
                                    By using custom dimensions, you also show your customers that you aren't wasting material. A box that fits your product perfectly reduces the need for bubble wrap or plastic void fill, further enhancing your 'green' credentials and reducing your overall carbon footprint.
                                </p>

                                <h3>Wholesale Solutions for Scalable Brands</h3>
                                <p>
                                    At CustomPackMakers, we specialize in high-volume production for growing retailers. Our production lines are optimized for speed and consistency, ensuring that whether you order 500 or 50,000 units, each box meets the same exacting standards. We offer competitive wholesale pricing models and rapid turnaround times to ensure that your inventory always keeps up with your sales growth.
                                </p>
                                <p>
                                    Invest in a retail tool that works as hard as you do. Choose Kraft Tuck Top Boxes and deliver a professional, sustainable, and efficient packaging experience to your customers.
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
                                    { q: "What is the difference between STE and RTE?", a: "STE (Straight Tuck End) has both top and bottom flaps on the same side, which is purely for aesthetics. RTE (Reverse Tuck End) has them on opposite sides, which is more cost-effective as more boxes can fit on a single sheet of paper during production." },
                                    { q: "Do I need tape to close these boxes?", a: "Generally, no. Our boxes feature 'friction-fit' tabs ensure they stay closed under normal handling. For heavy shipping, a small circular security seal or sticker is recommended." },
                                    { q: "What weight of paper should I choose?", a: "For lightweight items like cosmetics, 14pt-18pt is standard. For heavier products like candles or glass jars, we recommend 22pt or higher for extra rigidity." },
                                    { q: "Can I add a window to a tuck top box?", a: "Absolutely! Adding a viewing window is a great way to combine efficiency with retail display. We use high-clarity PET or PLA for these windows." },
                                    { q: "Are these boxes suitable for shipping?", a: "While sturdy, retail tuck boxes are designed for shelves or for being placed inside another shipping mailer. We do not recommend using them as a stand-alone shipping container for heavy courier journeys." }
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

export default KraftTuckTopBoxes;
