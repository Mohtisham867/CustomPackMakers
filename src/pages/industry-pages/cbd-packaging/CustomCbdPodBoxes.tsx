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
import { TechnicalSpecsSection } from "@/components/TechnicalSpecsSection";
import { RelatedProductCBD } from "@/components/RelatedProductCBD";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";

import cbdPodBoxes from "@/assets/industry/cbd-packaging/custom-cbd-pod-boxes.webp";
import FAQimage from "@/assets/FAQ-image.webp";

const CustomCbdPodBoxes = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    const productImages = [
        { src: cbdPodBoxes, alt: "Custom CBD Pod Boxes - Main View" },
        { src: cbdPodBoxes, alt: "Custom CBD Pod Boxes - Angle View" },
        { src: cbdPodBoxes, alt: "Custom CBD Pod Boxes - Detail View" },
        { src: cbdPodBoxes, alt: "Custom CBD Pod Boxes - Open View" },
        { src: cbdPodBoxes, alt: "Custom CBD Pod Boxes - Bottom View" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom CBD Pod Boxes | Branded Vape Pod Packaging</title>
                <meta name="description" content="Order custom CBD pod boxes wholesale. High-quality vape pod packaging with child-resistant slots, compliant labeling, and luxury retail finishes. Get a free quote today!" />
            </Helmet>
            <Header />

            {/* Breadcrumb */}
            <div className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 mt-[120px] md:mt-[160px]">
                <div className="container mx-auto px-[30px] py-4">
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
                                    <Link to="/industries">All Industries</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link to="/industries/cbd-packaging">CBD Packaging</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Custom CBD Pod Boxes</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </div>

            {/* HERO SECTION */}
            <section className="py-8 bg-background">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-7 space-y-6">
                            <div className="w-20 h-1.5 bg-primary rounded-full"></div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight">
                                Custom <span className="text-primary">CBD Pod</span> Boxes
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Modernize your vaping line with our luxury custom CBD pod boxes, featuring sleek magnetic closures, precision-cut internal slots, and child-resistant engineering that ensures your high-tech cartridges remain secure, compliant, and extraordinarily visible.
                            </p>
                            <div className="pt-2">
                                <Button
                                    size="lg"
                                    className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                                    onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}
                                >
                                    Get a Quote
                                </Button>
                            </div>
                        </div>

                        <div className="lg:col-span-5 relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-muted group">
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200">
                                <img
                                    src={cbdPodBoxes}
                                    alt="Custom CBD Pod Boxes Hero"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PRODUCT OVERVIEW SECTION */}
            <section className="py-8 bg-slate-50">
                <div className="container mx-auto px-[5vw]">
                    <div className="flex items-center gap-3 mb-5">
                        <div className="w-10 h-1 bg-primary rounded-full" />
                        <span className="text-xs font-semibold tracking-widest text-primary uppercase">Modern Vape Gear</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 max-w-3xl">
                        Pristine Secondary Packaging for CBD Vape Pods and Units
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            Our <strong>custom CBD pod boxes</strong> are engineered for brands that prioritize tech-forward aesthetics and absolute safety. We utilize rigid paperboard or high-end cardstock to create <strong>premium vape pod packaging</strong> that protects delicate glass and ceramic components from impact damage. Every box is precision-cut with custom internal foam or cardboard inserts that lock pods into place, preventing rattling during transit. Differentiate your brand with <strong>wholesale CBD pod packaging</strong> featuring sophisticated finishes like holographic foiling and spot UV while ensuring 100% compliance with nicotine and hemp labeling regulations.
                        </p>
                    </div>
                </div>
            </section>

            {/* INTERACTIVE PRODUCT & FORM SECTION */}
            <section className="py-10 bg-accent/5" id="quote-form">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end">
                        <div className="lg:col-span-7 space-y-6">
                            <div className="relative w-full max-w-lg mx-auto overflow-hidden rounded-lg shadow-sm border border-border bg-white" style={{ aspectRatio: '4/3' }}>
                                <img
                                    src={productImages[selectedImage]?.src || cbdPodBoxes}
                                    alt={productImages[selectedImage]?.alt || "Custom CBD Pod Boxes"}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="w-full max-w-lg mx-auto grid grid-cols-5 gap-2">
                                {productImages.map((image, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setSelectedImage(index)}
                                        className={`relative w-full aspect-square overflow-hidden rounded-md border transition-all duration-200 ${selectedImage === index
                                            ? 'border-primary shadow-md ring-2 ring-primary/20'
                                            : 'border-slate-200 hover:border-slate-300 hover:shadow-sm'
                                            }`}
                                    >
                                        <img
                                            src={image.src}
                                            alt={`Thumbnail ${index + 1}`}
                                            className="w-full h-full object-cover"
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="lg:col-span-5 lg:sticky lg:top-24">
                            <Card className="shadow-lg border-slate-200 bg-slate-50/50 backdrop-blur-sm overflow-hidden">
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold text-foreground mb-5">
                                        Pod Link Quote
                                    </h3>
                                    <form className="space-y-4">
                                        <div className="grid grid-cols-3 gap-3">
                                            <div className="space-y-1.5">
                                                <Label htmlFor="length" className="text-xs font-semibold text-muted-foreground">L (in)</Label>
                                                <Input id="length" type="number" placeholder="12" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label>
                                                <Input id="width" type="number" placeholder="8" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">D (in)</Label>
                                                <Input id="depth" type="number" placeholder="5" className="h-9 bg-white" />
                                            </div>
                                        </div>

                                        <div className="space-y-1.5">
                                            <Label htmlFor="quantity" className="text-xs font-semibold text-muted-foreground">Quantity</Label>
                                            <Input id="quantity" type="number" placeholder="500" className="h-9 bg-white" />
                                        </div>

                                        <div className="space-y-1.5">
                                            <Label htmlFor="name" className="text-xs font-semibold text-muted-foreground">Name</Label>
                                            <Input id="name" type="text" placeholder="Your Name" className="h-9 bg-white" />
                                        </div>

                                        <div className="space-y-1.5">
                                            <Label htmlFor="email" className="text-xs font-semibold text-muted-foreground">Email</Label>
                                            <Input id="email" type="email" placeholder="email@example.com" className="h-9 bg-white" />
                                        </div>

                                        <Button
                                            type="submit"
                                            size="lg"
                                            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 shadow-md hover:shadow-lg transition-all duration-300 mt-2"
                                        >
                                            Submit Inquiry
                                        </Button>
                                    </form>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* TECHNICAL SPECIFICATIONS SECTION */}
            <TechnicalSpecsSection />

            {/* SEO CONTENT SECTION */}
            <section className="py-8 bg-slate-50 border-t border-slate-100">
                <div className="container mx-auto px-[5vw]">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">
                        The Importance of Premium Packaging for Custom CBD Pod Boxes
                    </h2>

                    <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8
                            [&::-webkit-scrollbar]:w-2
                            [&::-webkit-scrollbar-track]:bg-gray-100
                            [&::-webkit-scrollbar-track]:rounded-full
                            [&::-webkit-scrollbar-thumb]:bg-primary
                            [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="
                            [&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-8 [&>h3]:mb-3 [&>h3]:first:mt-0
                            [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-5
                            [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-5 [&>ul]:space-y-2
                            [&>ul>li]:text-[15px] [&>ul>li]:text-slate-600">
                            <p>
                                In today's highly competitive CBD market, establishing a strong brand identity is more crucial than ever. For businesses specializing in Custom CBD Pod Boxes, custom packaging serves as the frontline ambassador of your brand's values, quality, and commitment to excellence. Premium Custom CBD Pod Boxes do far more than merely encase a product; they communicate trust, ensure safety, and deliver a memorable unboxing experience that resonates with discerning consumers. As the CBD industry continues to mature, standing out on crowded retail shelves or in a competitive e-commerce landscape requires packaging that is both visually captivating and structurally superior.
                            </p>
                            <p>
                                Our bespoke Custom CBD Pod Boxes are meticulously engineered to meet the unique demands of CBD products. We understand that items like Custom CBD Pod Boxes often require specialized protection against environmental factors such as light, moisture, and air. By utilizing high-grade materials and advanced manufacturing techniques, we provide packaging solutions that preserve the efficacy and freshness of your products while projecting an image of premium luxury. Investing in high-quality Custom CBD Pod Boxes is an investment in your brand's long-term success, helping to foster customer loyalty and differentiate your offerings in a saturated market.
                            </p>

                            <h3>Unmatched Material Quality &amp; Structural Durability</h3>
                            <p>
                                The foundation of any exceptional Custom CBD Pod Boxes is the material from which it is crafted. We offer a comprehensive suite of premium substrates, each carefully selected to provide optimal protection and aesthetic appeal for CBD products:
                            </p>
                            <ul>
                                <li><strong>Rigid Chipboard:</strong> Ideal for luxury and high-end Custom CBD Pod Boxes, rigid chipboard provides an unparalleled premium feel. Its solid structure offers maximum protection and a weighty, substantial presentation that communicates exclusivity.</li>
                                <li><strong>Premium SBS (Solid Bleached Sulfate):</strong> Known for its brilliant white finish and excellent printability, SBS cardstock is perfect for vibrant, photographic-quality graphics. It provides a clean, professional look essential for health and wellness products.</li>
                                <li><strong>Eco-Friendly Kraft Board:</strong> For brands emphasizing natural, organic, and sustainable values, our kraft board options are perfect. These biodegradable materials offer an earthy, authentic aesthetic without compromising on structural integrity.</li>
                                <li><strong>Corrugated Materials (E-Flute):</strong> For mailer boxes and shipping needs, E-flute corrugated board provides excellent crush resistance and durability, ensuring that your Custom CBD Pod Boxes arrive in immaculate condition, whether shipped locally or internationally.</li>
                            </ul>
                            <p>
                                Every material option undergoes rigorous quality control to ensure it meets our strict standards for durability, moisture resistance, and edge-crush performance. This guarantees that your Custom CBD Pod Boxes provide reliable protection throughout the entire supply chain and retail lifecycle.
                            </p>

                            <h3>Advanced Child-Resistant &amp; Compliance Features</h3>
                            <p>
                                Navigating the complex regulatory landscape of the CBD industry requires packaging that prioritizes safety without sacrificing design. Our Custom CBD Pod Boxes can be customized with a variety of child-resistant (CR) mechanisms designed to meet stringent legal requirements across different jurisdictions.
                            </p>
                            <ul>
                                <li><strong>Push-and-Turn Mechanisms:</strong> For jar and bottle enclosures housed within our Custom CBD Pod Boxes, we offer structural designs that accommodate and secure these closures effectively.</li>
                                <li><strong>Locking Tabs and Hidden Latches:</strong> Our folding cartons and rigid boxes can be engineered with specialized locking tabs that require distinct, simultaneous actions to open, providing effective child resistance while remaining accessible to adult consumers.</li>
                                <li><strong>Tamper-Evident Seals:</strong> To guarantee product integrity and reassure consumers, our Custom CBD Pod Boxes can incorporate tamper-evident labels, shrink bands, or custom die-cut void tabs.</li>
                            </ul>
                            <p>
                                Beyond structural safety, compliance extends to labeling and information display. Our high-resolution printing processes ensure that crucial regulatory information, such as nutritional facts, ingredient lists, government warnings, and QR codes linking to Certificates of Analysis (COAs), are rendered with absolute clarity and legibility, keeping your Custom CBD Pod Boxes fully compliant and trustworthy.
                            </p>

                            <h3>Customization Options That Elevate Your Brand</h3>
                            <p>
                                True brand differentiation comes from the ability to fully customize your Custom CBD Pod Boxes. Our advanced manufacturing and design capabilities allow for virtually unlimited structural and visual possibilities:
                            </p>
                            <ul>
                                <li><strong>Precision Sizing:</strong> We engineer every box to the exact dimensions of your product. This tailored fit minimizes movement during transit, enhances product protection, and eliminates the need for excess void fill, reducing your environmental footprint.</li>
                                <li><strong>Custom Inserts and Dividers:</strong> To elevate the presentation of your Custom CBD Pod Boxes, we offer bespoke inserts made from die-cut cardboard, molded pulp, or high-density EVA foam. These inserts cradle your product perfectly, creating a striking, organized display upon opening.</li>
                                <li><strong>Window Cutouts:</strong> Strategically placed die-cut windows, reinforced with crystal-clear PET film, allow consumers to view the product inside. This transparency builds trust and can significantly increase impulse purchases at the retail level.</li>
                                <li><strong>Unique Structural Styles:</strong> From classic tuck-end boxes and auto-bottom cartons to luxurious magnetic closure rigid boxes and two-piece setup boxes, we provide structural designs that complement the value of the Custom CBD Pod Boxes inside.</li>
                            </ul>

                            <h3>State-of-the-Art Printing &amp; Finishing Techniques</h3>
                            <p>
                                The visual impact of your Custom CBD Pod Boxes is paramount. We employ state-of-the-art offset and digital printing technologies to deliver breathtaking graphics and flawless color accuracy that make your brand stand out:
                            </p>
                            <ul>
                                <li><strong>Full-Color CMYK &amp; Pantone Matching:</strong> Achieve vibrant, lifelike imagery and ensure absolute color consistency across your entire product line with our precise color matching systems.</li>
                                <li><strong>Metallic Foil Stamping:</strong> Add a touch of luxury with premium hot foil stamping in gold, silver, copper, or holographic finishes. Foil accents highlight logos, borders, or specific design elements, creating a captivating visual contrast.</li>
                                <li><strong>Embossing and Debossing:</strong> Engage the consumer's sense of touch with raised or recessed elements. Embossing adds 3D depth to your logo or typography, conveying a high-end, tactile experience that elevates the perceived value of your Custom CBD Pod Boxes.</li>
                                <li><strong>Spot UV Coating:</strong> Create a striking juxtaposition between matte and gloss finishes. Spot UV applies a high-gloss, slightly raised coating to specific areas, making them pop against a soft-touch or matte background.</li>
                                <li><strong>Specialty Laminations:</strong> Choose from a variety of protective and aesthetic coatings, including our popular velvety soft-touch lamination, scratch-resistant matte, or high-gloss finishes that protect your Custom CBD Pod Boxes from scuffs while enhancing its visual appeal.</li>
                            </ul>

                            <h3>Commitment to Sustainable Packaging Solutions</h3>
                            <p>
                                As consumer demand for eco-friendly products grows, aligning your brand with sustainable practices is essential. The CBD industry, rooted in natural wellness, is uniquely positioned to lead in environmental responsibility. We are proud to offer sustainable options for your Custom CBD Pod Boxes:
                            </p>
                            <ul>
                                <li>Materials sourced from responsibly managed, FSC-certified forests.</li>
                                <li>100% recyclable and naturally biodegradable cardboard and kraft options.</li>
                                <li>Soy-based and water-based inks that produce vibrant colors without the release of harmful volatile organic compounds (VOCs).</li>
                                <li>Optimized box designs aimed at reducing material waste without compromising the structural integrity of the Custom CBD Pod Boxes.</li>
                            </ul>

                            <h3>Wholesale Pricing &amp; Dedicated Support</h3>
                            <p>
                                Whether you are launching a new line of Custom CBD Pod Boxes or scaling an established brand, our production capabilities are designed to scale with your needs. We offer competitive wholesale pricing structures, low minimum order quantities (MOQs) for startups, and significant economies of scale for large production runs. Our standard turnaround time is an industry-leading 8-10 business days, with expedited options available for rushed timelines.
                            </p>
                            <p>
                                Partnering with us means gaining access to a dedicated team of packaging experts. From initial concept and structural engineering to graphic design support and final delivery, we provide comprehensive guidance at every step. Let us assist you in creating Custom CBD Pod Boxes that not only protect and preserve your product but also tell your brand's unique story and captivate your target audience.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* RELATED PRODUCTS CAROUSEL */}
            <RelatedProductCBD />

            {/* WHY CHOOSE US SECTION */}
            <section className="py-12 relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #fafafa 0%, #f4f6ff 60%, #f0fdf8 100%)' }}>
                <div className="absolute top-0 left-0 w-80 h-80 bg-primary/4 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-300/8 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl pointer-events-none" />

                <div className="container mx-auto px-[30px] relative z-10">
                    <div className="text-center mb-14">
                        <span className="inline-block text-xs font-semibold tracking-widest text-primary uppercase mb-3 bg-primary/10 px-4 py-1.5 rounded-full">Our Promise</span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
                            Why Brands Choose <span className="text-primary">CustomPackMakers</span>
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            We combine craftsmanship, speed, and reliability to deliver packaging that makes your brand unforgettable.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">
                        <div className="space-y-5">
                            {/* Feature 1 */}
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">
                                        Uncompromising Protection
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Our specialized CBD pod boxes are engineered using premium rigid cardstock and protective barriers. This resilient build delivers outstanding impact resistance, ensuring your fragile glass cartridges remain flawlessly intact and reliably shielded during extensive commercial distribution.
                                    </p>
                                </div>
                            </div>

                            <div className="w-full h-px bg-slate-100" />

                            {/* Feature 2 */}
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors duration-300">
                                        <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">
                                        Tailored Brand Aesthetics
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        We construct vape packaging providing exact dimensions meticulously tailored for your concentrated formulas. Harnessing vibrant full-color printing alongside striking metallic finishes, we guarantee your CBD pod dominate display cases while projecting your modern lifestyle brand impeccably.
                                    </p>
                                </div>
                            </div>

                            <div className="w-full h-px bg-slate-100" />

                            {/* Feature 3 */}
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors duration-300">
                                        <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">
                                        Eco-Friendly & Compliant
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Today's market demands environmental mindfulness paired with absolute safety. Our CBD pod boxes utilize fully recyclable, eco-conscious materials that diminish environmental harm. Simultaneously, we implement certified child-resistant locking features verifying strict legal compliance during premium unboxing.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img
                                    src={cbdPodBoxes}
                                    alt="Custom CBD Pod Boxes Packaging"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-7">
                                    <p className="text-white font-bold text-lg leading-snug mb-1">
                                        Trusted by 500+ Brands
                                    </p>
                                    <p className="text-white/75 text-sm">Delivering premium packaging across North America</p>
                                </div>
                            </div>

                            <div className="absolute top-4 -right-2 lg:-right-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80 backdrop-blur-sm">
                                <p className="text-2xl font-bold text-primary leading-none">98%</p>
                                <p className="text-xs text-slate-400 mt-1 font-medium">Satisfaction Rate</p>
                            </div>

                            <div className="absolute bottom-4 -left-2 lg:-left-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80 backdrop-blur-sm">
                                <p className="text-2xl font-bold text-emerald-500 leading-none">8–10</p>
                                <p className="text-xs text-slate-400 mt-1 font-medium">Day Turnaround</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* DIFFERENTIATE YOUR BRAND SECTION */}
            <section className="py-10 lg:py-12 bg-white overflow-hidden relative">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="relative group">
                            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] border border-primary/20 shadow-2xl transform transition-transform duration-700 hover:scale-[1.02]">
                                <img
                                    src={cbdPodBoxes}
                                    alt="Differentiate Your Custom CBD Pod Boxes"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                            </div>
                            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-60" />
                            <div className="absolute -z-10 -top-8 -right-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl opacity-60" />
                        </div>

                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                                Differentiate Your <span className="text-primary">Next-Gen</span> Vape Line
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                In the fast-moving CBD vape pod market, your packaging represents your technological edge. Our bespoke CBD pod boxes allow you to create a premium physical bridge between your high-tech hardware and the consumer's hands. We specialize in safety-first engineering, providing child-resistant locking mechanisms that guarantee compliance without sacrificing sleek retail aesthetics. By combining heavyweight sustainable cardstock with sophisticated finishes like holographic foils or matte lamination, we help you differentiate your brand as a leader in premium, safe, and modern wellness. Let us create a high-impact, secure unboxing experience that perfectly reflects the innovation of your product line.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ SECTION */}
            <section className="py-6 bg-slate-50">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                                    Frequently Asked Questions
                                </h2>
                                <p className="text-base text-muted-foreground">
                                    We're confident that you will love our products and service.
                                </p>
                            </div>

                            <Accordion type="single" collapsible defaultValue="item-1" className="w-full space-y-2">
                                {[
                                    {
                                        id: "item-1",
                                        question: "Do the boxes have clear display windows?",
                                        answer: "Yes, we can add custom shape die-cut windows backed with durable PET plastic, allowing your premium cartridges to be viewed securely."
                                    },
                                    {
                                        id: "item-2",
                                        question: "Are the boxes compliant with vape regulations?",
                                        answer: "We specialize in fully compliant packaging, incorporating necessary warning label dimensions and certified child-safe locking tab structures required by law."
                                    },
                                    {
                                        id: "item-3",
                                        question: "Can you create hang tab boxes for dispensaries?",
                                        answer: "Absolutely. We seamlessly integrate reinforced die-cut hang tabs into the carton structure, optimizing your CBD pod for standard retail pegboard displays."
                                    },
                                    {
                                        id: "item-4",
                                        question: "Do you offer foam inserts for delicate cartridges?",
                                        answer: "Yes, we offer precision-cut high-density EVA foam and eco-molded pulp inserts to securely cradle standard 510-thread cartridges and batteries."
                                    },
                                    {
                                        id: "item-5",
                                        question: "How quickly are CBD pod boxes manufactured?",
                                        answer: "Our streamlined production floor guarantees typical orders are finalized within 8 to 10 business days, ensuring you never miss a product drop."
                                    },
                                ].map((faq) => (
                                    <AccordionItem
                                        key={faq.id}
                                        value={faq.id}
                                        className="border border-slate-200 rounded-lg bg-white overflow-hidden data-[state=open]:border-primary data-[state=open]:ring-1 data-[state=open]:ring-primary/20 data-[state=open]:bg-primary/5 transition-all duration-300"
                                    >
                                        <AccordionTrigger className="px-5 py-3 hover:no-underline [&>svg]:hidden group">
                                            <span className="text-left font-semibold text-foreground text-base">{faq.question}</span>
                                            <div className="shrink-0 ml-4 p-1 rounded-full bg-slate-100 group-data-[state=open]:bg-primary group-data-[state=open]:text-white transition-colors duration-200">
                                                <Plus className="h-3 w-3 group-data-[state=open]:hidden" />
                                                <Minus className="h-3 w-3 hidden group-data-[state=open]:block" />
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent className="px-5 pb-5 pt-0 text-slate-600 leading-relaxed text-sm">
                                            {faq.answer}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>

                        <div className="relative w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden ">
                            <img
                                src={FAQimage}
                                alt="Custom CBD Pod Boxes FAQ"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
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

export default CustomCbdPodBoxes;
