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
import { RelatedProductCardboardBoxes } from "@/components/RelatedProductCardboardBoxes";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";

// Specific product images
import heroImage from "@/assets/material/cardboard-boxes/cardboard-box-with-handle.webp";

// FAQ image
import FAQimage from "@/assets/FAQ-image.webp";

const CardboardBoxWithHandle = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    // Product images for gallery
    const productImages = [
        { src: heroImage, alt: "Cardboard Box With Handle - Main View" },
        { src: heroImage, alt: "Cardboard Box With Handle - Side Angle" },
        { src: heroImage, alt: "Cardboard Box With Handle - Open Box View" },
        { src: heroImage, alt: "Cardboard Box With Handle - Detail Shot" },
        { src: heroImage, alt: "Cardboard Box With Handle - Lifestyle Shot" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Cardboard Boxes With Handles | Portable Packaging | CustomPackMakers</title>
                <meta name="description" content="Order custom cardboard boxes with handles wholesale. Premium portable packaging perfect for retail, food, and heavy items. Free shipping & fast turnaround." />
                <meta name="keywords" content="cardboard boxes with handles, portable packaging, custom handle boxes, wholesale carrier boxes, heavy duty handle boxes" />
                <meta property="og:title" content="Custom Cardboard Boxes With Handles | Portable Packaging" />
                <meta property="og:description" content="Premium custom cardboard boxes with integrated handles. Easy carrying, secure locking, full-color printing & durable construction. Get a free quote." />
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
                                    <Link to="/box-by-material">Box By Material</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link to="/box-by-material/cardboard-boxes">Cardboard Boxes</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Cardboard Box With Handle</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </div>

            {/* HERO SECTION */}
            <section className="py-8 bg-background">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        {/* LEFT: Product Title & Description */}
                        <div className="lg:col-span-7 space-y-6">
                            <div className="w-20 h-1.5 bg-primary rounded-full"></div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight">
                                <span className="text-primary">Cardboard Box</span> With Handle
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Wholesale custom cardboard handle boxes engineered for effortless portability, structural integrity, and maximum brand visibility built to scale with your retail needs.
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

                        {/* RIGHT: Large Product Image - Compact */}
                        <div className="lg:col-span-5 relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-muted group">
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200">
                                <img
                                    src={heroImage}
                                    alt="Cardboard Box With Handle Hero"
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
                    {/* Section label + accent bar */}
                    <div className="flex items-center gap-3 mb-5">
                        <div className="w-10 h-1 bg-primary rounded-full" />
                        <span className="text-xs font-semibold tracking-widest text-primary uppercase">Product Overview</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 max-w-3xl">
                        Portable, Heavy-Duty Packaging Built for Retail Convenience
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            Our <strong className="text-foreground">cardboard boxes with handles</strong> are precision-engineered for B2B brands that prioritize customer convenience and secure transport. Constructed from robust B-flute or E-flute corrugated cardboard, these boxes feature integrated, reinforced handles designed to withstand the weight of heavy or bulky items without tearing. Whether you're packaging multi-pack beverages, small appliances, retail gift sets, or heavy automotive parts, our <strong className="text-foreground">custom carrier packaging</strong> is designed to perform safely and reliably.
                        </p>
                        <p>
                            From classic gable boxes and auto-bottom carriers to custom die-cut suitcase styles, our <strong className="text-foreground">handle box packaging</strong> solutions eliminate the need for separate plastic shopping bags, making them a highly sustainable retail solution. The large surface area provides an excellent billboard for full-color CMYK printing, allowing your brand messaging to be carried visibly down the street. With optional gloss laminations, window cutouts, and custom dimensions, your <strong className="text-foreground">portable boxes</strong> become a mobile advertisement. Order wholesale with our industry-leading 8–10 day turnaround.
                        </p>
                    </div>
                </div>
            </section>

            {/* INTERACTIVE PRODUCT & FORM SECTION */}
            <section className="py-10 bg-accent/5" id="quote-form">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end">

                        {/* LEFT SIDE: Product Gallery */}
                        <div className="lg:col-span-7 space-y-6">
                            {/* Large Main Image - 4:3 aspect ratio, object-cover */}
                            <div className="relative w-full max-w-lg mx-auto overflow-hidden rounded-lg shadow-sm border border-border bg-white" style={{ aspectRatio: '4/3' }}>
                                <img
                                    src={productImages[selectedImage].src}
                                    alt={productImages[selectedImage].alt}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Thumbnail Row — 5 images, aligned to main image width */}
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

                        {/* RIGHT SIDE: Sticky Quote Form - Compact & Styled */}
                        <div className="lg:col-span-5 lg:sticky lg:top-24">
                            <Card className="shadow-lg border-slate-200 bg-slate-50/50 backdrop-blur-sm overflow-hidden">
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold text-foreground mb-5">
                                        Get a Custom Quote
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
                                                <Input id="depth" type="number" placeholder="10" className="h-9 bg-white" />
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
                        The Strategic Advantage of Cardboard Boxes With Handles
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
                                In the modern retail landscape, customer convenience is paramount. When a customer purchases a heavy, bulky, or multi-item product, how they carry it out of the store—or into their home—significantly impacts their overall brand experience.
                                Custom cardboard boxes with integrated handles provide an elegant, all-in-one solution. They eliminate the need for secondary plastic or paper shopping bags, streamline the checkout process, and transform the packaging itself into a highly functional carrying case.
                            </p>
                            <p>
                                At CustomPackMakers, we engineer our handle boxes to balance ergonomic comfort with serious structural integrity. A handle is useless if it tears under the weight of the product. By utilizing advanced die-cutting techniques and multi-layered reinforcement, our cardboard carrier boxes ensure safe, reliable transport for everything from craft beer assortments and heavy pet food to sensitive electronics and premium bakery goods.
                            </p>

                            <h3>Advanced Structural Engineering for Heavy Loads</h3>
                            <p>
                                Designing a cardboard handle that won't tear requires precise mathematical engineering and the correct choice of substrate. We offer several structural options tailored to your product's weight class:
                            </p>
                            <ul>
                                <li><strong>Reinforced Corrugated Handles:</strong> For heavy items (5-20+ lbs) like beverages, hardware, or appliances, we utilize strong B-flute or C-flute corrugated board. The handle area is often engineered to fold over on itself, creating a double-thick layer of cardboard at the grip point to distribute weight and prevent tearing.</li>
                                <li><strong>Auto-Bottom Carrier Boxes:</strong> A popular choice for retail. These boxes snap into shape instantly without tape. They feature a reinforced, interlocking bottom that won't give out under weight, paired with a secure die-cut handle at the top.</li>
                                <li><strong>Gable Boxes:</strong> Perfect for lighter retail items, food takeout, and gift sets. The classic gable design features a pitched "roof" that folds into a comfortable, built-in carrying handle. These are typically made from premium SBS cardstock for brilliant printability.</li>
                                <li><strong>Suitcase Style Boxes:</strong> Designed to mimic a briefcase, these boxes feature a handle on the side panel and open like a clamshell. Excellent for promotional kits, sample presentations, and high-end electronics.</li>
                            </ul>
                            <p>
                                Every handle design undergoes rigorous drop-testing and suspension-testing in our facility to guarantee it meets the weight requirements of your specific product payload before mass production begins.
                            </p>

                            <h3>Maximizing Brand Visibility (The Mobile Billboard)</h3>
                            <p>
                                One of the greatest hidden benefits of a cardboard box with a handle is its marketing potential. Because the box is designed to be carried openly by the customer—rather than hidden inside an opaque plastic shopping bag—it becomes a mobile billboard for your brand as the customer walks through a mall, down the street, or into an office.
                            </p>
                            <ul>
                                <li><strong>360-Degree Printing:</strong> Since the box is carried exposed, all sides are visible. We offer full-color CMYK printing on every panel, including the handle itself, maximizing your brand's real estate.</li>
                                <li><strong>Premium Finishes:</strong> Make your mobile billboard stand out. We offer high-gloss UV coatings that catch the sunlight, soft-touch laminations for a premium feel, and metallic foil stamping for luxury retail items.</li>
                                <li><strong>Window Cutouts:</strong> We can integrate clear PET windows into the side panels of the carrier box, allowing the product itself to tempt passersby while still remaining securely packaged and easily portable.</li>
                            </ul>

                            <h3>The Sustainability Factor: Eliminating the Shopping Bag</h3>
                            <p>
                                Environmental responsibility is a major driving force for modern consumers. By integrating the handle directly into the primary packaging, you completely eliminate the need for the retailer to provide a secondary plastic or paper shopping bag.
                            </p>
                            <ul>
                                <li><strong>100% Recyclable:</strong> Our standard corrugated and SBS handle boxes are fully recyclable in standard municipal streams.</li>
                                <li><strong>Material Reduction:</strong> Eliminating the shopping bag reduces overall material consumption in the supply chain.</li>
                                <li><strong>Eco-Friendly Inks:</strong> We utilize soy and vegetable-based inks, ensuring the entire carrier box is environmentally safe and biodegradable.</li>
                            </ul>
                            <p>
                                This built-in sustainability is a powerful marketing message that resonates deeply with eco-conscious shoppers and helps retailers meet their plastic reduction goals.
                            </p>

                            <h3>Wholesale Production & Seamless Fulfillment</h3>
                            <p>
                                Handle boxes must be designed not only for the consumer but also for the packer. We engineer our carrier boxes to ship flat to your facility, taking up minimal warehouse space. When it's time for fulfillment, designs like our auto-lock bottoms allow workers to pop the box into shape in less than a second, drastically reducing assembly time compared to standard taped boxes.
                            </p>
                            <p>
                                Whether you need a short run for a promotional event or hundreds of thousands of units for ongoing retail distribution, our high-speed production lines scale effortlessly. Partnering with CustomPackMakers means gaining a dedicated team of packaging engineers. From calculating the exact flute profile needed to support your product's weight to executing flawless printing, we deliver carrier boxes that perform perfectly from the warehouse to the customer's home.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* RELATED PRODUCTS CAROUSEL */}
            <RelatedProductCardboardBoxes />

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
                            We combine heavy-duty structural engineering, ergonomic design, and flawless printing to deliver carrier packaging that won't let you down.
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
                                        Reinforced Load Bearing
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        A handle is useless if it rips. We engineer your <strong>custom handle boxes</strong> with double-folded grips and premium corrugated fluting, rigorously testing the load capacity to ensure safe, reliable transport for heavy or fragile items.
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
                                        Ergonomic Design
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Customer comfort matters. We design the <strong>die-cut handles</strong> with smooth, folded edges that prevent the cardboard from digging into the carrier's hands, improving the post-purchase experience and brand perception.
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
                                        Rapid Assembly
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Save money on warehouse labor. Our auto-lock bottom carrier designs ship flat to save space but pop into shape instantly without tape, allowing your team to fulfill orders rapidly and efficiently at scale.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img
                                    src={heroImage}
                                    alt="Premium Custom Handle Box Packaging"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-7">
                                    <p className="text-white font-bold text-lg leading-snug mb-1">
                                        Trusted by Retail Brands
                                    </p>
                                    <p className="text-white/75 text-sm">Delivering portable packaging across North America</p>
                                </div>
                            </div>

                            <div className="absolute top-4 -right-2 lg:-right-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80 backdrop-blur-sm">
                                <p className="text-2xl font-bold text-primary leading-none">100%</p>
                                <p className="text-xs text-slate-400 mt-1 font-medium">Recyclable Carrier</p>
                            </div>

                            <div className="absolute bottom-4 -left-2 lg:-left-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80 backdrop-blur-sm">
                                <p className="text-2xl font-bold text-emerald-500 leading-none">0</p>
                                <p className="text-xs text-slate-400 mt-1 font-medium">Plastic Bags Needed</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* DIFFERENTIATE SECTION */}
            <section className="py-10 lg:py-12 bg-white overflow-hidden relative">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="relative group">
                            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] border border-primary/20 shadow-2xl transform transition-transform duration-700 hover:scale-[1.02]">
                                <img
                                    src={heroImage}
                                    alt="Differentiate Your Packaging"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                            </div>
                            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-60" />
                            <div className="absolute -z-10 -top-8 -right-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl opacity-60" />
                        </div>

                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                                Differentiate Your <span className="text-primary">Packaging</span> From Others
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                At CustomPackMakers, we know that convenience is a powerful brand differentiator. To ensure your product is the easiest to buy and carry, we utilize advanced structural engineering combined with high-impact printing. Our team works closely with you to design the perfect handle profile and load-bearing structure for your specific item weight. By integrating distinctive features like custom die-cut windows, ergonomic grips, and vibrant 360-degree graphics, we help you create a world-class portable packaging solution that acts as a walking billboard for your brand.
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
                                    We’re confident that you will love our products and service.
                                </p>
                            </div>

                            <Accordion type="single" collapsible defaultValue="item-1" className="w-full space-y-2">
                                {[
                                    {
                                        id: "item-1",
                                        question: "How Much Weight Can A Cardboard Handle Box Hold?",
                                        answer: "This entirely depends on the design. Standard gable boxes are great for 1-3 lbs, while our heavy-duty corrugated carriers with double-reinforced handles can comfortably hold 15-20+ lbs (perfect for beverages or heavy auto parts). We engineer the box specifically for your product's weight."
                                    },
                                    {
                                        id: "item-2",
                                        question: "Are The Handles Comfortable To Carry?",
                                        answer: "Yes. We specifically design our die-cut handles with score lines that allow the cardboard to fold inward. This provides a smooth, double-thick, flat surface against the hand, preventing the sharp edge of the cardboard from digging into the fingers."
                                    },
                                    {
                                        id: "item-3",
                                        question: "Do These Boxes Require Tape To Assemble?",
                                        answer: "Most of our carrier boxes, including gable boxes and auto-bottom styles, are designed to interlock and snap into shape securely without the need for any packing tape, saving you significant assembly time and maintaining a clean aesthetic."
                                    },
                                    {
                                        id: "item-4",
                                        question: "Can I Print On The Handle Area?",
                                        answer: "Absolutely. The handle is part of the die-cut sheet, meaning we can print full-color graphics, logos, or instructions across the entire box, including the handle itself."
                                    },
                                    {
                                        id: "item-5",
                                        question: "Do These Ship Assembled?",
                                        answer: "No, to save you massive amounts of money on shipping and warehouse storage, our handle boxes are shipped flat. Their intuitive design allows your fulfillment team to pop them into their 3D shape in seconds."
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
                                alt="Cardboard Box With Handle FAQ"
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

export default CardboardBoxWithHandle;
