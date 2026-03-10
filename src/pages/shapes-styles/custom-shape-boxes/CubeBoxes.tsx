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

import heroImg from "@/assets/custom-shape-boxes/cube-boxes.webp";
import FAQimage from "@/assets/FAQ-image.png";
import placeholderImage from "@/assets/custom-shape-boxes/placeholder.webp";

// We extract 'overviewTitle' to ensure no white screen crash.
const overviewTitle = "Geometric Prowess: The Impact of Cube Packaging";

const CubeBoxes = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    const productImages = [
        { src: heroImg, alt: "Cube Boxes - Main View" },
        { src: placeholderImage, alt: "Cube Boxes - Side Angle" },
        { src: placeholderImage, alt: "Cube Boxes - Open Box View" },
        { src: placeholderImage, alt: "Cube Boxes - Detail Shot" },
        { src: placeholderImage, alt: "Cube Boxes - Lifestyle Shot" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Cube Boxes | Wholesale Cubic Packaging | CustomPackMakers</title>
                <meta name="description" content="Perfectly symmetrical custom cube boxes for a modern, high-impact product presentation. Ideal for retail, electronics, and luxury gifts. Durable and brandable." />
                <meta name="keywords" content="cube boxes, custom cubic packaging, wholesale cube boxes, square cube gift boxes" />
                <meta property="og:title" content="Cube Boxes | Symmetrical Custom Packaging | CustomPackMakers" />
                <meta property="og:description" content="Maximize your brand with perfectly balanced cube boxes. Industrial strength meets modern minimalism. Get a custom quote today!" />
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
                                <BreadcrumbPage>Cube Boxes</BreadcrumbPage>
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
                                <span className="text-primary">Cube</span> Boxes
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Command attention with the bold, industrial symmetry of cube boxes, offering a perfectly equal three-dimensional canvas for your most significant brand statements.
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
                                    alt="Cube Boxes Hero"
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
                        <p>Our <strong className="text-foreground">cube boxes</strong> are designed for brands that want to make a bold, modern, and structurally superior statement. The perfectly equal length, width, and depth of a cube create a sense of absolute balance and geometric prowess that is both visually striking and incredibly strong. Whether you are packaging a high-end luxury candle, a sophisticated jewelry piece, or a specialized electronics accessory, the cube format provides an industrial-grade aesthetic that commands respect on any retail shelf or unboxing video.</p>
                        <p>From precision die-cut cardstock to ultra-premium rigid board constructions, our <strong className="text-foreground">custom cubic gift packaging</strong> offers endless possibilities for creative branding. Available in various sizes, these boxes are as functional as they are visually striking, ensuring your products are the center of attention in any professional or high-end retail environment.</p>
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
                                                <Label htmlFor="size" className="text-xs font-semibold text-muted-foreground">Size (in)</Label>
                                                <Input id="size" type="number" placeholder="4" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5 font-bold flex items-center justify-center pt-6 text-muted-foreground">x</div>
                                            <div className="space-y-1.5">
                                                <Label className="text-xs font-semibold text-muted-foreground opacity-0">Size</Label>
                                                <Input disabled value="4" className="h-9 bg-slate-100 italic" />
                                            </div>
                                        </div>
                                        <p className="text-[10px] text-muted-foreground italic -mt-2">*Cubes have equal length, width, and depth.</p>
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
                        A New Dimension in Branding: The Impact of Custom Cube Boxes
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
                                In the geometric world of packaging, the cube is the embodiment of structural perfection and modern minimalism. With six equal faces, it offers a sense of balanced sophistication that is both timeless and highly professional. Custom Cube Boxes by CustomPackMakers allow your brand to leverage this iconic shape to create a memorable retail presence. Whether you are packaging luxury perfumes, artisanal candles, or high-end tech gadgets, the cube box provides a compact, sturdy, and visually striking vessel that instantly communicates quality.
                            </p>
                            <p>
                                The psychological impact of a cube is rooted in its stability. It is a shape that suggests reliability and precision. On the shelf, cube boxes create a clean, modular aesthetic that encourages consumers to interact with the product. Their identical dimensions allow for creative stacking and display arrangements, effectively turning your packaging into a 3D branding tool that works from every angle.
                            </p>

                            <h3>Engineering Six-Sided Structural Excellence</h3>
                            <p>
                                Creating a perfect cube requires advanced manufacturing precision. Even a slight deviation in the equal length, width, and depth can lead to a box that looks lopsided or won't close properly. At CustomPackMakers, we utilize state-of-the-art die-cutting and folding technology to ensure every cube box is a masterpiece of geometric accuracy.
                            </p>
                            <ul>
                                <li><strong>High-GSM SBS Cardstock:</strong> We use dense, high-quality board to ensure the cube's facets remain perfectly flat and the edges stay razor-sharp.</li>
                                <li><strong>Precision Tuck and Lock Closures:</strong> Our cube boxes feature seamlessly integrated closures that maintain the symmetrical silhouette while offering a secure hold.</li>
                                <li><strong>Multidirectional Crush Resistance:</strong> The six-sided symmetry of the cube provides exceptional structural strength, protecting internal items from external pressure during global shipping.</li>
                                <li><strong>Clean-Crease Folding:</strong> We ensure that every fold is crisp and clean, preventing the board from cracking and maintaining a pristine appearance even on dark-colored boxes.</li>
                            </ul>

                            <h3>The 360-Degree Branding Canvas</h3>
                            <p>
                                One of the most significant advantages of a cube box is the abundance of equal-sized branding surfaces. With five visible faces (excluding the base), you have a unique opportunity to create a multi-dimensional brand story. You can dedicate the top to your primary logo, the front to the product name, and use the side panels for vibrant lifestyle imagery, product details, or detailed storytelling.
                            </p>
                            <p>
                                To further enhance the visual impact of your cube boxes, we offer a variety of premium finishes:
                            </p>
                            <ul>
                                <li><strong>Spot UV on Geometric Patterns:</strong> Highlight specific design elements or create subtle, reflective patterns that catch the light as the customer rotates the box.</li>
                                <li><strong>Metallic Foil Accents:</strong> Add a touch of luxury by applying gold, silver, or rose-gold foil to your lettering or floral patterns.</li>
                                <li><strong>Soft-Touch Lamination:</strong> Give your cube boxes a premium, velvet-like feel that encourages tactile engagement and reinforces the high value of the product inside.</li>
                                <li><strong>Custom Die-Cut Windows:</strong> Precision-cut windows on one or more faces allow customers to see the product's color and texture, creating an immediate connection.</li>
                            </ul>

                            <h3>Versatility in Luxury Gift and Retail</h3>
                            <p>
                                Cube boxes are a favorite in the luxury gift and specialized retail markets. They are the perfect size for "set" packaging, where multiple small items are presented together in a cohesive, aesthetically pleasing arrangement. Their compact size also makes them ideal for boutique retail, where shelf space is at a premium but visual impact is critical.
                            </p>
                            <p>
                                We specialize in custom internal inserts that are specifically designed for the cube format. Whether it's a molded foam tray for a delicate glass bottle or a specialized cardboard divider for a gift set, our internal engineering ensures that your products are held securely and presented perfectly the moment the lid is removed.
                            </p>

                            <h3>Sustainability in Symmetrical Design</h3>
                            <p>
                                Our commitment to sustainability means that your cube boxes are crafted from responsibly sourced, 100% recyclable materials. By optimizing our die-lines for the cube's simple geometry, we minimize material waste during production. The high "keep factor" of these beautiful, sturdy boxes also means they are frequently reused by customers for storage, further reducing their environmental footprint. At CustomPackMakers, we believe that perfect packaging should also be kind to the planet.
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
                                        Absolute Geometric Balance
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        The six identical faces of a cube box provide a perfectly consistent brand experience from every angle, ensuring your logo and messaging are always presented with mathematical precision effortlessly.
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
                                        Superior Industrial Strength
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        The cubic form is inherently one of the strongest geometric shapes, providing exceptional resistance to vertical compression and ensuring your products are protected by a near-impenetrable structural fortress.
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
                                        Optimized Shelf Presence
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Cube boxes can be stacked and arranged in modular, grid-like patterns that transform your retail display into a clean, architectural masterpiece that organizes your brand identity beautifully.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img
                                    src={heroImg}
                                    alt="Premium Cube Boxes Packaging"
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
                                    alt="Differentiate Your Cube Boxes"
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
                                To differentiate your brand, we push the boundaries of cubic design with specialized structural and aesthetic enhancements. We offer "pull-out" drawer styles, magnetic book-style closures, and precision-cut internal "stages" that elevate your product the moment the box is opened. Combined with high-end techniques like soft-touch lamination, holographic foil stamping, or specialized textured papers, our cube boxes turn a standard geometric shape into an premium, unforgettable brand icon.
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
                                    Everything you need to know about our custom cubic packaging.
                                </p>
                            </div>

                            <Accordion type="single" collapsible defaultValue="item-1" className="w-full space-y-2">
                                {[
                                    {
                                        id: "item-1",
                                        question: "What is the largest size cube box you can produce?",
                                        answer: "We can manufacture cube boxes from small 1-inch product favors up to large 12-inch or even 18-inch industrial display cubes, depending on the material chosen."
                                    },
                                    {
                                        id: "item-2",
                                        question: "Can I get a cube box with a window?",
                                        answer: "Yes! We can add custom-shaped die-cut windows on one or multiple faces of the cube, often with a clear PET or acetate film for product protection."
                                    },
                                    {
                                        id: "item-3",
                                        question: "Are cube boxes shipped flat?",
                                        answer: "Most cardstock cube boxes are shipped flat for efficiency. However, our luxury 'Rigid' cube boxes are shipped pre-assembled and ready to be filled."
                                    },
                                    {
                                        id: "item-4",
                                        question: "Do you offer metallic printing for all sides?",
                                        answer: "Yes, we can apply metallic foils, spot UV, and full-color printing to all six faces of the cube to ensure a premium look from every angle."
                                    },
                                    {
                                        id: "item-5",
                                        question: "What items are typically packaged in cube boxes?",
                                        answer: "Cubes are popular for luxury candles, specialized skincare creams, electronics, jewelry, and limited-edition collectors' items."
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
                                alt="Cube Boxes FAQ"
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

export default CubeBoxes;
