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
import { RelatedProductCustomShapeBoxes } from "@/components/RelatedProductCustomShapeBoxes";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";

import heroImg from "@/assets/shape-style/custom-shape-boxes/hexagon-boxes.webp";
import FAQimage from "@/assets/FAQ-image.webp";
import placeholderImage from "@/assets/shape-style/custom-shape-boxes/placeholder.webp";

// We extract 'overviewTitle' to ensure no white screen crash.
const overviewTitle = "Geometric Sophistication: The Power of Hexagon Packaging";

const HexagonBoxes = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    const productImages = [
        { src: heroImg, alt: "Hexagon Boxes - Main View" },
        { src: placeholderImage, alt: "Hexagon Boxes - Side Angle" },
        { src: placeholderImage, alt: "Hexagon Boxes - Open Box View" },
        { src: placeholderImage, alt: "Hexagon Boxes - Detail Shot" },
        { src: placeholderImage, alt: "Hexagon Boxes - Lifestyle Shot" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Hexagon Boxes | Custom Hexagonal Packaging | CustomPackMakers</title>
                <meta name="description" content="Elevate your brand with custom hexagon boxes. Unique six-sided packaging for cosmetics, gifts, and luxury retail. Fully brandable, fast turnaround." />
                <meta name="keywords" content="hexagon boxes, wholesale hexagonal packaging, custom branded hexagon boxes, unique shape packaging" />
                <meta property="og:title" content="Hexagon Boxes | Distinctive Six-Sided Packaging | CustomPackMakers" />
                <meta property="og:description" content="Differentiate your products with multifaceted hexagon boxes. Strong construction, premium printing, and stunning shelf appeal. Get a free quote today." />
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
                                <BreadcrumbPage>Hexagon Boxes</BreadcrumbPage>
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
                                <span className="text-primary">Hexagon</span> Boxes
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Differentiate your products with the multifaceted elegance of hexagon boxes, providing a unique six-sided canvas for your brand’s premium presentation.
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
                                    alt="Hexagon Boxes Hero"
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
                        <p>Our <strong className="text-foreground">hexagon boxes</strong> are designed for brands that value structural beauty and retail differentiation. The six-sided format offers a refreshing alternative to standard squares, providing more surface area for branding and a unique geometry that naturally draws the eye. Each box is precision-engineered to ensure a perfect fit and a solid, structurally sound three-dimensional form.</p>
                        <p>From complex honeycomb displays to high-end retail packaging, our <strong className="text-foreground">hexagonal shape boxes</strong> offer the durability and aesthetic appeal your business demands. Available in various dimensions and finishes, these boxes are built to scale with your brand’s growth and creative vision.</p>
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
                                                <Label htmlFor="length" className="text-xs font-semibold text-muted-foreground">Side (in)</Label>
                                                <Input id="length" type="number" placeholder="4" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">Width (in)</Label>
                                                <Input id="width" type="number" placeholder="7" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">Depth (in)</Label>
                                                <Input id="depth" type="number" placeholder="2" className="h-9 bg-white" />
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
                        Multifaceted Marketing: The Strategic Advantage of Hexagon Boxes
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
                                In the geometric landscape of retail, the hexagon is a master of balance. It combines the clean lines of a rectangle with the organic symmetry of nature, creating a silhouette that is both structurally superior and visually intoxicating. Custom Hexagon Boxes offer brands a unique opportunity to break the rectangular monotony of the shelf, providing a multifaceted canvas that naturally encourages consumers to pick up and explore the product from every angle.
                            </p>
                            <p>
                                The psychological impact of hexagonal packaging is rooted in its association with efficiency and natural perfection—think of the honeycomb or the structure of a diamond. By choosing this form, you are signaling to your audience that every aspect of your product has been meticulously considered. This geometric sophistication makes hexagon boxes an ideal choice for high-end cosmetics, luxury confectionery, and specialty gifts that require an extraordinary presentation.
                            </p>

                            <h3>Engineering Six-Sided Structural Excellence</h3>
                            <p>
                                Creating a perfect hexagon requires advanced die-cutting and folding precision. Each of the six panels must be exactly equal, and the closure flaps must align seamlessly to maintain the box's structural integrity. At CustomPackMakers, we specialize in the engineering of complex geometric forms, ensuring your hexagon boxes are as durable as they are beautiful.
                            </p>
                            <ul>
                                <li><strong>High-GSM SBS Cardstock:</strong> Provides the rigidity necessary for geometric facets to remain flat and sharp, ensuring the 3D form doesn't warp or buckle.</li>
                                <li><strong>Precision Tuck and Lock Closures:</strong> We design custom closure mechanisms that keep the six-sided structure secure while remaining easy for the consumer to open.</li>
                                <li><strong>Honeycomb Stacking Strength:</strong> Due to their shape, hexagon boxes distribute external pressure more evenly than squares, offering superior protection for fragile internal items.</li>
                                <li><strong>Scuff-Resistant Finishes:</strong> Because these boxes feature more edges than standard packaging, we recommend protective laminations to maintain a pristine look on the retail shelf.</li>
                            </ul>

                            <h3>Maximized Branding Across Six Dynamic Panels</h3>
                            <p>
                                One of the most significant advantages of a hexagon box is the increased surface area for branding. While a standard box offers four primary sides, the hexagon offers six, allowing you to dedicate specific panels to product variations, brand history, usage instructions, or vibrant lifestyle imagery. This multifaceted approach turns the packaging into a 3D storytelling tool.
                            </p>
                            <p>
                                To enhance the visual drama of the hexagon shape, we offer a range of premium finishes:
                            </p>
                            <ul>
                                <li><strong>Dynamic Panel Foiling:</strong> Applying metallic foils to alternating panels creates a stunning light-play effect as the customer rotates the box.</li>
                                <li><strong>Spot UV on Geometric Accents:</strong> Highlight the sharp edges and corners of the hexagon to accentuate its unique 3D form.</li>
                                <li><strong>Soft-Touch Matte Lamination:</strong> Provides a luxurious, velvet-like feel that encourages tactile engagement and reinforces the premium nature of the brand.</li>
                                <li><strong>Custom Window Cutouts:</strong> Precision die-cut windows on one or more panels allow customers to see the product's color and texture.</li>
                            </ul>

                            <h3>The "Honeycomb" Retail Effect</h3>
                            <p>
                                From a retail perspective, hexagon boxes offer a unique display advantage. When grouped together, they create a "honeycomb" pattern that is inherently satisfying and visually organized. This pattern can be leveraged to create large-scale floor displays or modular shelf arrangements that are far more engaging than traditional rows of boxes. It's a natural way to invite the customer into the brand's world.
                            </p>
                            <p>
                                Furthermore, the hexagon shape allows for specialized internal inserts that hold products centrally. Whether it's a single bottle of perfume or a selection of artisanal truffles, we design custom-fit trays that ensure your items are displayed perfectly the moment the lid is removed.
                            </p>

                            <h3>Sustainability in Geometric Excellence</h3>
                            <p>
                                Our commitment to sustainability means that your hexagon boxes are crafted from responsibly sourced, recyclable materials. By utilizing intelligent die-line optimization, we minimize the material waste traditionally associated with unconventional shapes. The high "keep factor" of these beautiful boxes also means they are frequently reused by customers for storage, further reducing their environmental footprint.
                            </p>
                            <p>
                                At CustomPackMakers, we believe that packaging should be an extension of your brand's innovation. Our team is ready to help you harness the geometric power of hexagon boxes to create a lasting impression and drive retail success.
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
                                        Maximum Brand Visibility
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        With six equal panels, hexagon boxes provide more creative space for your brand messaging and imagery, allowing you to tell a more detailed story across the multifaceted geometric structure perfectly.
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
                                        Superior Structural Integrity
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        The hexagonal shape is inherently strong, distributing weight evenly across its six points. We use premium cardstock to ensure your boxes maintain their perfect geometric form through transit.
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
                                        Iconic Retail Presence
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Hexagon boxes create a unique 'honeycomb' effect when stacked together, transforming your retail display into a visually stunning focal point that captures consumer interest instantly.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img
                                    src={heroImg}
                                    alt="Premium Hexagon Boxes Packaging"
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
                                    alt="Differentiate Your Hexagon Boxes"
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
                                To differentiate your brand, we leverage specialized finishing techniques that highlight the unique edges of our hexagon boxes. These include spot UV on specific facets, metallic foil stamping on the top panel, and custom-designed inserts that hold your products centrally within the six-sided space. These features turn our hexagon boxes into a complete sensory experience that reinforces your brand’s commitment to quality and innovative design.
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
                                    Common questions about our hexagonal packaging solutions.
                                </p>
                            </div>

                            <Accordion type="single" collapsible defaultValue="item-1" className="w-full space-y-2">
                                {[
                                    {
                                        id: "item-1",
                                        question: "What items work best in hexagon boxes?",
                                        answer: "Hexagon boxes are incredibly popular for cosmetics, high-end skincare, organic candles, and luxury confectionery where a premium shelf presence is a top priority."
                                    },
                                    {
                                        id: "item-2",
                                        question: "Are hexagon boxes shipped flat?",
                                        answer: "Yes! Like most of our custom shape packaging, hexagon boxes are shipped flat to minimize freight costs and ensure they arrive in perfect condition, ready for quick assembly."
                                    },
                                    {
                                        id: "item-3",
                                        question: "Can I print on the inside of the box?",
                                        answer: "Absolutely. Printing on the interior panels of a hexagon box creates a delightful surprise during the unboxing process and provides extra space for brand messaging."
                                    },
                                    {
                                        id: "item-4",
                                        question: "How do I determine the right size for my product?",
                                        answer: "Our team can provide you with custom die-lines and even physical prototypes to ensure your product fits snugly and securely within the hexagonal structure."
                                    },
                                    {
                                        id: "item-5",
                                        question: "Is there a minimum order quantity?",
                                        answer: "We offer flexible MOQs starting at 500 units, allowing brands of all sizes to benefit from the unique marketing power of hexagonal packaging."
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
                                alt="Hexagon Boxes FAQ"
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

export default HexagonBoxes;
