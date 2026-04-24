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
import { Label } from "@/components/ValueLabel"; // Check if this exists or use regular Label
import { TechnicalSpecsSection } from "@/components/TechnicalSpecsSection";
import { RelatedProductCustomShapeBoxes } from "@/components/RelatedProductCustomShapeBoxes";

// Correction: Use standard @/components/ui/label if ValueLabel is not standard
import { Label as UiLabel } from "@/components/ui/label";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";

import heroImg from "@/assets/custom-shape-boxes/octagon-boxes.webp";
import FAQimage from "@/assets/FAQ-image.webp";
import placeholderImage from "@/assets/custom-shape-boxes/placeholder.webp";

// We extract 'overviewTitle' to ensure no white screen crash.
const overviewTitle = "Geometric Harmony: The Appeal of Octagon Packaging";

const OctagonBoxes = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    const productImages = [
        { src: heroImg, alt: "Octagon Boxes - Main View" },
        { src: placeholderImage, alt: "Octagon Boxes - Side Angle" },
        { src: placeholderImage, alt: "Octagon Boxes - Open Box View" },
        { src: placeholderImage, alt: "Octagon Boxes - Detail Shot" },
        { src: placeholderImage, alt: "Octagon Boxes - Lifestyle Shot" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Octagon Boxes | Custom Octagonal Packaging | CustomPackMakers</title>
                <meta name="description" content="Premium octagon boxes for a unique, eight-sided product presentation. Ideal for luxury gifts, jewelry, and specialty retail. Fully brandable, custom finishes." />
                <meta name="keywords" content="octagon boxes, custom octagonal packaging, wholesale octagon boxes, unique shape gift boxes" />
                <meta property="og:title" content="Octagon Boxes | Luxury Eight-Sided Packaging | CustomPackMakers" />
                <meta property="og:description" content="Elevate your brand with symmetrical octagon boxes. Strong, multifaceted construction with premium branding options. Worldwide shipping." />
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
                                    <Link to="/shapes-styles">Shapes & Styles</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link to="/shapes-styles/custom-shape-boxes">Custom Shape Boxes</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Octagon Boxes</BreadcrumbPage>
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
                                <span className="text-primary">Octagon</span> Boxes
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Elevate your brand with the harmonious symmetry of octagon boxes, providing a unique eight-sided canvas that signifies luxury and structural excellence.
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
                                    src={heroImg}
                                    alt="Octagon Boxes Hero"
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
                        <span className="text-xs font-semibold tracking-widest text-primary uppercase">Product Overview</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 max-w-3xl">
                        {overviewTitle}
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>Our <strong className="text-foreground">octagon boxes</strong> are designed for brands that want to convey a sense of balance, luxury, and meticulous attention to detail. The eight-sided format offers a sophisticated alternative to standard shapes, providing a unique geometry that naturally draws the eye and suggests a premium price point. Each box is precision-engineered to ensure a perfect fit and a solid, structurally sound three-dimensional form that protects its precious contents perfectly.</p>
                        <p>From custom embossed lids to multifaceted printing, our <strong className="text-foreground">custom octagonal gift packaging</strong> offers endless possibilities for high-end branding. Available in various diameters and heights, these boxes are as functional as they are visually striking, ensuring your products are the center of attention in any high-end retail environment.</p>
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
                                    src={productImages[selectedImage].src}
                                    alt={productImages[selectedImage].alt}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="w-full max-w-lg mx-auto grid grid-cols-5 gap-2">
                                {productImages.map((image, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setSelectedImage(index)}
                                        className={"relative w-full aspect-square overflow-hidden rounded-md border transition-all duration-200 " + (selectedImage === index ? 'border-primary shadow-md ring-2 ring-primary/20' : 'border-slate-200 hover:border-slate-300 hover:shadow-sm')}
                                    >
                                        <img
                                            src={image.src}
                                            alt={"Thumbnail " + (index + 1)}
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
                                        Get a Custom Quote
                                    </h3>
                                    <form className="space-y-4">
                                        <div className="grid grid-cols-3 gap-3">
                                            <div className="space-y-1.5">
                                                <UiLabel htmlFor="diameter" className="text-xs font-semibold text-muted-foreground">Dia (in)</UiLabel>
                                                <Input id="diameter" type="number" placeholder="8" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <UiLabel htmlFor="height" className="text-xs font-semibold text-muted-foreground">Height (in)</UiLabel>
                                                <Input id="height" type="number" placeholder="3" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <UiLabel htmlFor="quantity" className="text-xs font-semibold text-muted-foreground">Qty</UiLabel>
                                                <Input id="quantity" type="number" placeholder="250" className="h-9 bg-white" />
                                            </div>
                                        </div>
                                        <div className="space-y-1.5">
                                            <UiLabel htmlFor="name" className="text-xs font-semibold text-muted-foreground">Name</UiLabel>
                                            <Input id="name" type="text" placeholder="Your Name" className="h-9 bg-white" />
                                        </div>
                                        <div className="space-y-1.5">
                                            <UiLabel htmlFor="email" className="text-xs font-semibold text-muted-foreground">Email</UiLabel>
                                            <Input id="email" type="email" placeholder="email@example.com" className="h-9 bg-white" />
                                        </div>
                                        <div className="space-y-1.5">
                                            <UiLabel htmlFor="message" className="text-xs font-semibold text-muted-foreground">Message</UiLabel>
                                            <Input id="message" type="text" placeholder="Special requirements..." className="h-9 bg-white" />
                                        </div>
                                        <Button
                                            type="submit"
                                            size="lg"
                                            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 shadow-md hover:shadow-lg transition-all duration-300 mt-2"
                                            onClick={(e) => e.preventDefault()}
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
                        Sacred Geometry in Retail: The Marketing Power of Custom Octagon Boxes
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
                            [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-5 [&>ul>li]:text-[15px] [&>ul>li]:text-slate-600">

                            <p>
                                In the hierarchy of geometric shapes, the octagon occupies a unique middle ground between the stability of a square and the infinity of a circle. This "rounded-but-faceted" silhouette is instinctively associated with luxury, precision, and historical elegance. Custom Octagon Boxes offer brands a sophisticated way to break the rectangular monotony of the retail shelf, providing a form that is both structurally superior and visually intoxicating. For jewelry, high-end timepieces, and premium confectionery, the octagon is more than a box—it is a symbol of excellence.
                            </p>
                            <p>
                                The psychological allure of the octagon is rooted in its symmetrical perfection. It feels balanced from every angle, encouraging the consumer to pick up the package and rotate it, leading to a longer brand interaction time. This tactile engagement is a critical driver of conversion in high-end retail environments. By choosing octagonal packaging, you are signaling to your audience that the treasure inside is of extraordinary value and meticulously crafted.
                            </p>

                            <h3>Engineering Eight-Sided Structural Superiority</h3>
                            <p>
                                Creating a perfect octagon is an engineering feat that requires extreme die-cutting precision. Each of the eight identical panels must be exactly the same width, and the lid must fit over the facets with zero tolerance for error. At CustomPackMakers, we specialize in the manufacturing of multifaceted rigid and paperboard boxes, ensuring your octagon packaging is a masterpiece of geometric harmony.
                            </p>
                            <ul>
                                <li><strong>Multifaceted Load Distribution:</strong> The eight points of an octagon distribute weight more evenly than a square, providing exceptional protection against crushing during transit.</li>
                                <li><strong>Precision-Scored Facets:</strong> We utilize advanced scoring technology to create clean, sharp edges that don't crack, maintaining a pristine geometric look even with dark, full-bleed printing.</li>
                                <li><strong>Rigid Board Specialty:</strong> For maximum luxury, we often produce octagon boxes using rigid "greyboard" wrapped in premium specialty papers, creating a solid, permanent-feeling container.</li>
                                <li><strong>Custom Locking mechanisms:</strong> Our octagon lids are designed to stay securely in place, often featuring friction-fit or magnetic closures that provide a high-end sensory experience upon opening.</li>
                            </ul>

                            <h3>Strategic Branding Across Eight Dynamic Panels</h3>
                            <p>
                                The octagon offers a unique branding advantage: a large, centrally focused top panel and eight auxiliary side panels. This allows for a hierarchical design approach where the primary logo sits proudly on the lid, while the side panels can be used for secondary brand elements, patterns, or detailed product information. This multifaceted layout turns the box into a 3D storytelling device.
                            </p>
                            <p>
                                We recommend specific finishes to accentuate the eight-sided form:
                            </p>
                            <ul>
                                <li><strong>Metallic Leaf Bordering:</strong> Running a gold or silver foil line along the top multifaceted edge highlights the unique shape and adds an immediate luxury "shimmer."</li>
                                <li><strong>Alternating Panel Textures:</strong> Using spot UV on alternating facets creates a dynamic light-and-shadow effect as the customer rotates the box in their hands.</li>
                                <li><strong>Soft-Touch Matte Finish:</strong> A velvet-like coating on octagonal facets feels incredible to the touch, reinforcing the premium quality of the product inside.</li>
                                <li><strong>Embossed Lid Details:</strong> Raising your logo or a geometric pattern on the octagonal lid adds a tactile dimension that customers find inherently satisfying.</li>
                            </ul>

                            <h3>The "Crown Jewel" of Retail Displays</h3>
                            <p>
                                Octagon boxes are the ultimate "centerpiece" of a retail display. Their rounded profile allows them to be grouped in circular patterns or isolated as a focal point among traditional packaging. This visual distinction is highly effective for limited-edition products or high-margin retail items that need to stand out.
                            </p>
                            <p>
                                To complement the exterior, we design custom internal inserts that hold your products centrally. Whether it's a molded velvet tray for a luxury watch or a specialized cardboard cutout for premium truffles, our internal engineering ensures your product is showcased in its most flattering light the moment the box is opened.
                            </p>

                            <h3>Sustainability in Multifaceted Design</h3>
                            <p>
                                At CustomPackMakers, we ensure that your octagonal boxes are produced with sustainability in mind. By optimizing our die-lines, we minimize the material waste traditionally associated with complex shapes. Furthermore, the high structural quality and aesthetic beauty of octagon boxes lead to a very high reuse rate, extending the brand's visibility and reducing the environmental footprint.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* RELATED PRODUCTS CAROUSEL */}
            <RelatedProductCustomShapeBoxes />

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
                                        Symbolic Luxury Silhouette
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        The octagonal shape is historically associated with excellence, making it the perfect choice for high-end jewelry, luxury watches, and premium gift items that require a truly distinguished presentation.
                                    </p>
                                </div>
                            </div>
                            <div className="w-full h-px bg-slate-100" />
                            {/* Feature 2 */}
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors duration-300">
                                        <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5z" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">
                                        Precision Multi-Facet Engineering
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        We utilize advanced die-cutting technology to ensure every one of the eight facets meets perfectly at the corners, resulting in an exceptionally solid package that maintains its geometric beauty flawlessly.
                                    </p>
                                </div>
                            </div>
                            <div className="w-full h-px bg-slate-100" />
                            {/* Feature 3 */}
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors duration-300">
                                        <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">
                                        Maximized Branding Surface
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        With eight panels and a large top surface, octagon boxes provide an expansive canvas for your brand messaging, allowing you to create a multifaceted brand story beautifully.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img
                                    src={heroImg}
                                    alt="Premium Octagon Boxes Packaging"
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

            {/* DIFFERENTIATE YOUR BOXES SECTION */}
            <section className="py-10 lg:py-12 bg-white overflow-hidden relative">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="relative group">
                            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] border border-primary/20 shadow-2xl transform transition-transform duration-700 hover:scale-[1.02]">
                                <img
                                    src={heroImg}
                                    alt="Differentiate Your Octagon Boxes"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                            </div>
                            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-60" />
                            <div className="absolute -z-10 -top-8 -right-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl opacity-60" />
                        </div>
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                                Differentiate Your <span className="text-primary">Shape Boxes</span> From Others
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                To differentiate your brand, we leverage specialized finishing techniques that highlight the unique multifaceted edges of our octagon boxes. These include spot UV on alternating panels, metallic foil stamping on the top lid, and custom-designed inserts that hold your products centrally within the eight-sided space. These features turn our octagon boxes into a complete sensory experience that reinforces your brand’s commitment to quality and innovative, symmetrical design.
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
                                    Common questions about our octagonal packaging solutions.
                                </p>
                            </div>

                            <Accordion type="single" collapsible defaultValue="item-1" className="w-full space-y-2">
                                {[
                                    {
                                        id: "item-1",
                                        question: "What items are best suited for octagon boxes?",
                                        answer: "Octagon boxes are the industry standard for high-end luxury goods, including jewelry, watches, premium confectionery, and limited-edition gift items."
                                    },
                                    {
                                        id: "item-2",
                                        question: "Are octagon boxes shipped pre-assembled?",
                                        answer: "Octagon boxes can be produced in both flat-pack (folding) styles and rigid (pre-assembled) styles, depending on your brand's requirements and shipping budget."
                                    },
                                    {
                                        id: "item-3",
                                        question: "Can I get a custom lid style?",
                                        answer: "Absolutely. We offer various lid styles, including full-cover lids, partial-cover lids, and even hinged octagon lids for a more permanent gift box feel."
                                    },
                                    {
                                        id: "item-4",
                                        question: "Can you provide custom inserts for jewelry?",
                                        answer: "Yes, we specialize in high-quality inserts made from foam, velvet, or specialized cardstock that hold jewelry securely and beautifully within the octagonal frame."
                                    },
                                    {
                                        id: "item-5",
                                        question: "What is the minimum order for octagon boxes?",
                                        answer: "Due to the specialized nature of octagonal tooling, our MOQs typically start at 500 units, allowing for cost-effective production of these unique shapes."
                                    }
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
                                alt="Octagon Boxes FAQ"
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

export default OctagonBoxes;
