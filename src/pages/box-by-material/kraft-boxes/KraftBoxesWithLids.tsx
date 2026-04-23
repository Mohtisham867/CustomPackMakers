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
import kraftBoxesWithLids from "@/assets/kraft-boxes/kraft-boxes-with-lids.webp";
import FAQimage from "@/assets/FAQ-image.png";

const KraftBoxesWithLids = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    const productImages = [
        { src: kraftBoxesWithLids, alt: "Kraft Boxes With Lids - Two Piece Gift Set" },
        { src: kraftBoxesWithLids, alt: "Kraft Boxes With Lids - Open Box Detail" },
        { src: kraftBoxesWithLids, alt: "Kraft Boxes With Lids - Stacked Retail View" },
        { src: kraftBoxesWithLids, alt: "Kraft Boxes With Lids - Side Profile" },
        { src: kraftBoxesWithLids, alt: "Kraft Boxes With Lids - Interior View" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Kraft Boxes With Lids | Premium Two-Piece Eco Packaging | CustomPackMakers</title>
                <meta name="description" content="Order custom kraft boxes with lids for premium gift & retail presentation. Sustainable, two-piece brown paper boxes with custom printing. Wholesale rates & fast turnaround." />
                <meta name="keywords" content="kraft boxes with lids, two piece kraft boxes, brown gift boxes with lids, eco friendly lid boxes, telescopic kraft packaging" />
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
                                <BreadcrumbPage>Kraft Boxes With Lids</BreadcrumbPage>
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
                                    Kraft Boxes With Lids
                                </h1>
                                <p className="text-xl text-muted-foreground leading-relaxed">
                                    Elevate your product's unboxing experience with the classic sophistication of a two-piece container. Our Kraft Boxes with Lids combine structural permanence with the raw, sustainable charm of unbleached wood pulp.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="p-4 rounded-lg bg-gray-50 border border-border flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">✓</div>
                                    <span className="text-sm font-medium">Classic Two-Piece Design</span>
                                </div>
                                <div className="p-4 rounded-lg bg-gray-50 border border-border flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">✓</div>
                                    <span className="text-sm font-medium">Telescopic Lid Fit</span>
                                </div>
                                <div className="p-4 rounded-lg bg-gray-50 border border-border flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">✓</div>
                                    <span className="text-sm font-medium">Artisan Textured Feel</span>
                                </div>
                                <div className="p-4 rounded-lg bg-gray-50 border border-border flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">✓</div>
                                    <span className="text-sm font-medium">Customizable Wall Thickness</span>
                                </div>
                            </div>

                            <div className="p-6 rounded-xl bg-primary/5 border border-primary/10 space-y-4">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-semibold uppercase tracking-wider text-primary">Luxury Eco-Solution</span>
                                    <span className="px-3 py-1 bg-primary text-white text-[10px] font-bold rounded-full uppercase">Top Rated</span>
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
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground">The ultimate Unboxing Statement</h2>
                        <div className="w-20 h-1 bg-primary mx-auto" />
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            A separate lid and base (telescopic style) is more than just a box—it's a theatrical element of your product's delivery. The slight resistance as the lid descends over the base creates a feeling of luxury and precision. Our Kraft Boxes with Lids are designed for brands that want to communicate quality through every physical touchpoint, from the rustic texture of the paper to the satisfying "whoosh" as the box opens.
                        </p>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-[30px]">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Lid-Style Kraft Packaging?</h2>
                        <p className="text-muted-foreground">Engineering a premium experience for your customers.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <Card className="border-none shadow-none text-center space-y-4 p-6 hover:bg-gray-50 transition-colors duration-300">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary mb-2">
                                <img src="/icons/custom-size.svg" alt="Telescopic" className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold uppercase tracking-tight">Telescopic Engineering</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">We calibrate the lid and base dimensions to within a fraction of a millimeter, ensuring a snug fit that stays closed during transit.</p>
                        </Card>

                        <Card className="border-none shadow-none text-center space-y-4 p-6 hover:bg-gray-50 transition-colors duration-300">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary mb-2">
                                <img src="/icons/eco-friendly.svg" alt="Structural" className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold uppercase tracking-tight">Rigid Wall Design</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">By double-folding the sides of both pieces, we create a strong, four-layered wall that provides superior protection forfragile items.</p>
                        </Card>

                        <Card className="border-none shadow-none text-center space-y-4 p-6 hover:bg-gray-50 transition-colors duration-300">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary mb-2">
                                <img src="/icons/fast-turnaround.svg" alt="Reusability" className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold uppercase tracking-tight">high Reusability Factor</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">Lid boxes are often kept by customers for storage, keeping your brand logo visible in their home for years after the purchase.</p>
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
                                The Premium Standard
                            </div>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-[1.1]">
                                Packaging That <br /> <span className="text-primary">Defines the Luxury Segment</span>
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Step away from the 'standard mailing box' and move into the world of luxury retail. Our two-piece kraft solutions are designed to make your product feel like a curated gift, resulting in higher perceived value and brand loyalty.
                            </p>

                            <div className="space-y-4">
                                {[
                                    { title: "Precision Lip-Gap Engineering", desc: "Choose between full-telescope lids for maximum strength or partial-telescope for easier opening." },
                                    { title: "Custom Internal Platforms", desc: "Integrated cardboard platforms and foam inserts to hold diverse products at a perfect display angle." },
                                    { title: "Textured Multi-Sensory Approach", desc: "The natural grit of unbleached kraft paper paired with high-end lid-design signals quality to the brain." }
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
                                <img src={kraftBoxesWithLids} alt="Kraft Lid Engineering" className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700" />
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
                                <h2>Elevating the Brand Experience with Custom Kraft Boxes with Lids</h2>
                                <p>
                                    In the world of luxury retail and high-end gifting, the structure of the box is just as important as the material. While tuck-top and mailer boxes are efficient for shipping, <strong>Custom Kraft Boxes with Lids</strong> represent a higher tier of brand presentation. By utilizing a separate base and lid—commonly known as a two-piece or telescopic design—you are providing the customer with an unboxing ritual that signals value, care, and attention to detail.
                                </p>
                                <p>
                                    Our kraft lid boxes are favored by companies in the premium jewelry, high-end cosmetics, and bespoke apparel industries. The combination of a rigid, two-piece structure and the natural, unbleached texture of kraft paper creates a "sophisticated-rustic" aesthetic that is currently trending across major global brands. It is a look that feels both established and modern, both luxurious and sustainable.
                                </p>

                                <h3>The Structural Integrity of Two-Piece Packaging</h3>
                                <p>
                                    A common misconception is that a separate lid makes for a weaker box. However, when engineered correctly, the opposite is true. Our Kraft Boxes with Lids utilize a 'double-wall' folding technique. When both the lid and the base are assembled, the vertical walls of the box effectively have four layers of high-GSM kraft cardstock.
                                </p>
                                <p>
                                    This results in incredible vertical strength, allowing these boxes to be stacked on shelf displays or in transport without any risk of crushing. The lids are precision-calibrated to have just enough 'grip' to stay secure, while allowing for a smooth, effortless sliding motion when the customer is ready to reveal the product inside.
                                </p>

                                <h3>Customization Beyond the Surface</h3>
                                <p>
                                    While the classic brown kraft look is stunning on its own, we offer a wide range of customization options to further professionalize your packaging:
                                </p>
                                <ul>
                                    <li><strong>Full-Color Branding:</strong> We use food-safe, soy-based inks to print high-resolution logos on the lid, base, or even the interior of the box.</li>
                                    <li><strong>Internal Fitments:</strong> From cardboard platforms that tilt your product toward the customer to precision-cut foam inserts for jewelry, we design the interior as a stage for your merchandise.</li>
                                    <li><strong>Thumb-Notches:</strong> Half-circle cutouts on the sides of the lid that make it even easier for customers to open the box while maintaining a tight telescopic fit.</li>
                                    <li><strong>Ribbon & Twine Pairing:</strong> The matte finish of kraft paper provides the perfect non-slip surface for decorative ribbons, stickers, and tags.</li>
                                </ul>

                                <h3>Sustainability as a Premium Value</h3>
                                <p>
                                    One of the biggest drivers for the lid-style kraft box is environmental responsibility. Customers are increasingly wary of over-engineered plastic packaging. A sturdy, 100% recyclable lid box is seen as a high-value alternative. Because our boxes are made from long-fiber unbleached pulp, they are exceptionally durable and are often kept by customers as storage containers for years after the initial purchase.
                                </p>
                                <p>
                                    This extended 'afterlife' inside the customer's home provides your brand with ongoing visibility, making the investment in high-quality two-piece packaging one of the most cost-effective long-term marketing strategies available.
                                </p>

                                <h3>Wholesale Support and Scalable Manufacturing</h3>
                                <p>
                                    At CustomPackMakers, we specialize in high-precision, high-volume manufacturing. Whether you are a boutique store requiring a few hundred units for a seasonal collection or a major retailer needing thousands monthly, we provide consistent quality at competitive wholesale rates. Our boxes typically ship flat to save you on logistical costs and storage space, but are designed for rapid, intuitive assembly.
                                </p>
                                <p>
                                    Upgrade your product's perception today. Choose Kraft Boxes with Lids and deliver an unboxing experience that reflects the true quality of your brand.
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
                                    { q: "What are the common uses for lid-style boxes?", a: "These are most popular for gift sets, apparel and accessories, jewelry packaging, and premium stationery. Any product that benefits from a 'reveal' opening experience is a perfect candidate." },
                                    { q: "Can the lid and base have different colors?", a: "Yes! We can manufacture a brown kraft base with a white kraft lid, or vice versa, to create a stunning two-tone contrast for your brand." },
                                    { q: "Do these boxes come pre-assembled?", a: "To minimize shipping costs and storage requirements, we typically ship them flat. They feature pre-glued corners or intuitive folding patterns that snap together in seconds." },
                                    { q: "What is the material thickness?", a: "We typically use 18pt to 24pt kraft cardstock to ensure the box has the necessary 'rigid' feel required for a two-piece design." },
                                    { q: "Can I add a window to the lid component?", a: "Absolutely! Adding a clear PET window to the top lid is a very popular option for retail products that need to be seen while remaining fully protected." }
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

export default KraftBoxesWithLids;
