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
import { useState, useEffect } from "react";
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
import kraftCupcakeHero from "@/assets/kraft-boxes/kraft-cupcake-boxes.webp";
import FAQimage from "@/assets/FAQ-image.webp";

const KraftCupcakeBoxes = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    const productImages = [
        { src: kraftCupcakeHero, alt: "Kraft Cupcake Boxes - Bakery Display" },
        { src: kraftCupcakeHero, alt: "Kraft Cupcake Boxes - Individual View" },
        { src: kraftCupcakeHero, alt: "Kraft Cupcake Boxes - Multi-Pack View" },
        { src: kraftCupcakeHero, alt: "Kraft Cupcake Boxes - Insert Detail" },
        { src: kraftCupcakeHero, alt: "Kraft Cupcake Boxes - Open View" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Kraft Cupcake Boxes | Eco-Friendly Bakery Packaging | CustomPackMakers</title>
                <meta name="description" content="Order custom kraft cupcake boxes for professional bakery presentation. Sustainable brown cupcake packaging with windows & inserts. Wholesale rates & custom printing." />
                <meta name="keywords" content="kraft cupcake boxes, brown bakery boxes, eco friendly cupcake packaging, custom cupcake boxes with window, individual cupcake boxes, wholesale bakery packaging" />
                <meta property="og:title" content="Custom Kraft Cupcake Boxes | Eco-Friendly Bakery Packaging | CustomPackMakers" />
                <meta property="og:description" content="Premium kraft cupcake packaging with precision-cut inserts and viewing windows. Food-grade, sustainable, and perfect for artisan bakeries. Get a free quote." />
            </Helmet>
            <Header />

            {/* Breadcrumb Section */}
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
                                <BreadcrumbPage>Kraft Cupcake Boxes</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </div>

            {/* HERO SECTION */}
            <section className="py-8 bg-background">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        {/* LEFT CONTENT */}
                        <div className="lg:col-span-7 space-y-6">
                            <div className="w-20 h-1.5 bg-primary rounded-full"></div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight">
                                <span className="text-primary">Kraft</span> Cupcake Boxes
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Showcase your artisan cupcakes in packaging that reflects your commitment to quality. Our kraft cupcake boxes combine rustic elegance with food-grade protection.
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

                        {/* RIGHT HERO IMAGE */}
                        <div className="lg:col-span-5 relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-muted group">
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200">
                                <img
                                    src={kraftCupcakeHero}
                                    alt="Kraft Cupcake Boxes Hero"
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
                        Elegance and Protection for Your Most Delicate Treats
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            Our <strong className="text-foreground">custom kraft cupcake boxes</strong> are precision-engineered for professional bakeries that understand the importance of first impressions. Constructed from unbleached, high-density kraft paperboard, each box features precision-cut inserts designed to keep your cupcakes static and secure during transit. Whether you are delivering a single individual gift or a wholesale order of dozens, our <strong className="text-foreground">bakery-grade cupcake packaging</strong> is designed to protect delicate frosting while showcasing your brand's commitment to sustainability.
                        </p>
                        <p>
                            With high-transparency viewing windows and grease-resistant material, our <strong className="text-foreground">brown cupcake boxes</strong> turn a delicious treat into a curated gift experience. The natural, organic texture of the kraft board provides the perfect backdrop for your artisan decorations, while our advanced printing options allow you to integrate your custom bakery branding seamlessly. Order wholesale with low minimums and enjoy our industry-leading 8–10 day turnaround for your next seasonal launch.
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

                        {/* RIGHT SIDE: Sticky Quote Form */}
                        <div className="lg:col-span-5 lg:sticky lg:top-24">
                            <Card className="shadow-lg border-slate-200 bg-slate-50/50 backdrop-blur-sm overflow-hidden">
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold text-foreground mb-5">
                                        Bakery Inquiry Form
                                    </h3>
                                    <form className="space-y-4">
                                        <div className="grid grid-cols-3 gap-3">
                                            <div className="space-y-1.5">
                                                <Label htmlFor="length" className="text-xs font-semibold text-muted-foreground">L (in)</Label>
                                                <Input id="length" type="number" placeholder="4" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label>
                                                <Input id="width" type="number" placeholder="4" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">D (in)</Label>
                                                <Input id="depth" type="number" placeholder="4" className="h-9 bg-white" />
                                            </div>
                                        </div>
                                        <div className="space-y-1.5">
                                            <Label htmlFor="quantity" className="text-xs font-semibold text-muted-foreground">Quantity</Label>
                                            <Input id="quantity" type="number" placeholder="500" className="h-9 bg-white" />
                                        </div>
                                        <div className="space-y-1.5">
                                            <Label htmlFor="name" className="text-xs font-semibold text-muted-foreground">Name</Label>
                                            <Input id="name" type="text" placeholder="Bakery Name" className="h-9 bg-white" />
                                        </div>
                                        <div className="space-y-1.5">
                                            <Label htmlFor="email" className="text-xs font-semibold text-muted-foreground">Email</Label>
                                            <Input id="email" type="email" placeholder="contact@yourbakery.com" className="h-9 bg-white" />
                                        </div>
                                        <Button
                                            type="submit"
                                            size="lg"
                                            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 shadow-md hover:shadow-lg transition-all duration-300 mt-2"
                                        >
                                            Submit Request
                                        </Button>
                                    </form>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            <TechnicalSpecsSection />

            {/* SEO CONTENT SECTION */}
            <section className="py-8 bg-slate-50 border-t border-slate-100">
                <div className="container mx-auto px-[5vw]">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">
                        The Culinary Impact of Professional Custom Kraft Cupcake Boxes
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
                                In the bakery industry, the first bite is taken with the eyes. For cupcakes—where the frosting and decorations are intricate works of art—the packaging must act as both a protective vault and a stage. <strong>Custom Kraft Cupcake Boxes</strong> are designed to fulfill this dual role perfectly. By using high-strength kraft paperboard, we provide a rigid structure that prevents external pressure from damaging delicate toppers, while the natural brown color speaks to a brand founded on quality, authenticity, and premium ingredients.
                            </p>
                            <p>
                                As social media becomes the primary driver for food businesses, the "unboxing" of your cupcakes is a critical marketing transition. A rustic kraft box, tied with twine and featuring a clear window, creates a photogenic aesthetic that encourages customers to share your products online, effectively providing free viral advertising for your pâtisserie. At CustomPackMakers, we focus on every detail, from the structural integrity of the base to the clarity of the film, ensuring your treats always arrive looking as perfect as they did in the display case.
                            </p>

                            <h3>Precision Engineering: The Importance of Anti-Tumble Inserts</h3>
                            <p>
                                The most common failure in cupcake logistics is movement. A cupcake that slides even half an inch during transport will likely see its frosting smeared against the side of the box. We solve this through precision-calibrated inserts that are die-cut to fit the specific footprint of your liners. 
                            </p>
                            <ul>
                                <li><strong>Locking Tabs:</strong> Our inserts feature 'locking tabs' that grip the base of the cupcake liner securely, preventing any lateral movement.</li>
                                <li><strong>Finger Holes:</strong> We include 'finger holes' on either side of each cupcake slot, allowing customers to lift the cupcake out without touching the side or the frosting.</li>
                                <li><strong>Deep-Pocket Design:</strong> For jumbo cupcakes and high-frosting styles, our inserts are adjustable to provide the necessary vertical clearance.</li>
                            </ul>
                            <p>
                                This technical attention to the interior of the box is what separates a professional bakery from a hobbyist operation, building immediate trust and perceived value with your clientele.
                            </p>

                            <h3>Material Excellence: Food-Grade Kraft and Grease Resistance</h3>
                            <p>
                                Since our boxes come into direct contact with food, we adhere to the most stringent safety standards. Our kraft stock is unbleached, chemical-free, and FSC-certified, meaning there are no toxic odors or substances that could migrate and affect the flavor profile of your treats. 
                            </p>
                            <p>
                                Furthermore, we treat our kraft board with natural, food-safe grease barriers. This is essential for maintaining a professional look; it prevents unsightly oil spots or buttercream saturation from forming on the bottom of the box, ensuring the packaging remains pristine throughout the customer's journey. The high tear-resistance of the board also means it can support the weight of multiple cupcakes without buckling, perfect for stackable retail displays.
                            </p>

                            <h3>Visual Presentation: Viewing Windows and Display Appeal</h3>
                            <p>
                                A clear window isn't just a design choice; it's a sales tool. By allowing customers to preview the frosting and decorations without opening the container, you maintain product hygiene while driving impulse purchases. We use high-clarity PET or plant-based PLA film for our windows, which are specially treated to be fog-resistant. This is critical for cupcakes kept in refrigerated cases, as it ensures a clear view of the product regardless of temperature fluctuations.
                            </p>
                            <p>
                                The organic brown backdrop of the kraft paper provides a stunning contrast for vibrant frostings, making rainbow sprinkles or deep chocolate ganache stand out vividly. It suggests a boutique, "farm-to-table" quality that white bleached paper cannot replicate.
                            </p>

                            <h3>Branding Opportunities for Artisan Bakeries</h3>
                            <p>
                                Just because the material is rustic doesn't mean the branding has to be simple. We offer full-color CMYK printing using food-safe, soy-based inks that produce rich and vibrant results. 
                            </p>
                            <ul>
                                <li><strong>Lid Branding:</strong> Place your primary logo and tagline on the top for maximum visibility.</li>
                                <li><strong>Side-Flap Messaging:</strong> Include your bakery's social media handles or a "thank you" message on the interior flaps for a delightful surprise.</li>
                                <li><strong>Metallic Accents:</strong> Elevate holiday gift sets with gold or rose gold foil stamping against the matte kraft surface.</li>
                            </ul>

                            <h3>Sustainability: The Future of Bakery Packaging</h3>
                            <p>
                                Modern bakery customers are increasingly environmentally conscious. Choosing kraft is a powerful statement of brand ethics. Our boxes are 100% recyclable and often sourced from upcycled wood fibers. This transparency builds significant loyalty, particularly in the organic and artisanal sectors where plastic reduction is a core value.
                            </p>
                            <p>
                                Partnering with CustomPackMakers means investing in a packaging solution that respects the planet as much as it respects your budget. Let us help you turn your cupcakes into unforgettable gifts.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <RelatedProductKraftBoxes />

            {/* WHY CHOOSE US SECTION */}
            <section className="py-12 relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #fafafa 0%, #f4f6ff 60%, #f0fdf8 100%)' }}>
                <div className="absolute top-0 left-0 w-80 h-80 bg-primary/4 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-300/8 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl pointer-events-none" />

                <div className="container mx-auto px-[30px] relative z-10">
                    <div className="text-center mb-14">
                        <span className="inline-block text-xs font-semibold tracking-widest text-primary uppercase mb-3 bg-primary/10 px-4 py-1.5 rounded-full">Bakery Standard</span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
                            Why Professional <span className="text-primary">Bakers</span> Choose Us
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            We bridge the gap between artisan aesthetics and industrial-grade protection for your delicate desserts.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">
                        {/* LEFT: typography */}
                        <div className="space-y-5">
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-.856.12-1.683.342-2.466" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Anti-Tumble Protection</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Precision-cut inserts with locking tabs ensure your cupcakes stay static and secure, regardless of the delivery road conditions.
                                    </p>
                                </div>
                            </div>
                            <div className="w-full h-px bg-slate-100" />
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors duration-300">
                                        <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Crystal Clear Viewing</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        High-opacity, fog-resistant windows allow customers to preview your intricate edible art while maintaining full product hygiene.
                                    </p>
                                </div>
                            </div>
                            <div className="w-full h-px bg-slate-100" />
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors duration-300">
                                        <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Artisan Eco-Brand</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Leverage the raw, organic aesthetic of unbleached kraft paper to align your bakery with modern sustainable values.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT: Image with floating badges */}
                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img
                                    src={kraftCupcakeHero}
                                    alt="Luxury Bakery Presentation"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-7">
                                    <p className="text-white font-bold text-lg leading-snug mb-1">
                                        Trusted by 500+ Bakeries
                                    </p>
                                    <p className="text-white/75 text-sm">Perfect for retail display and high-end event catering</p>
                                </div>
                            </div>

                            {/* Floating badges */}
                            <div className="absolute top-4 -right-2 lg:-right-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80 backdrop-blur-sm">
                                <p className="text-2xl font-bold text-primary leading-none">FREE</p>
                                <p className="text-xs text-slate-400 mt-1 font-medium">Custom Inserts</p>
                            </div>
                            <div className="absolute bottom-4 -left-2 lg:-left-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80 backdrop-blur-sm">
                                <p className="text-2xl font-bold text-emerald-500 leading-none">8–10</p>
                                <p className="text-xs text-slate-400 mt-1 font-medium">Day Delivery</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* DIFFERENTIATE SECTION */}
            <section className="py-10 lg:py-12 bg-white overflow-hidden relative">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* LEFT: Image */}
                        <div className="relative group">
                            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] border border-primary/20 shadow-2xl transform transition-transform duration-700 hover:scale-[1.02]">
                                <img
                                    src={kraftCupcakeHero}
                                    alt="Differentiate Your Bakery"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                            </div>
                        </div>

                        {/* RIGHT: Content */}
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                                Differentiate Your <span className="text-primary">Bakery</span> From the Crowd
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                At CustomPackMakers, we know that your cupcake packaging is the final touch of your artisan process. We utilize advanced manufacturing to ensure your kraft cupcake boxes are structurally sound, grease-resistant, and aesthetically striking. By integrating crystal-clear viewing windows with high-contrast custom printing and sustainable textures, we help you create a world-class unboxing experience that builds lasting brand loyalty, ensures product safety, and drives repeat business across every seasonal collection.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ SECTION */}
            <section className="py-6 bg-slate-50">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                        {/* LEFT COLUMN: FAQs */}
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                                    Frequently Asked Questions
                                </h2>
                                <p className="text-base text-muted-foreground">
                                    Common inquiries about our artisan bakery packaging.
                                </p>
                            </div>

                            <Accordion type="single" collapsible defaultValue="item-1" className="w-full space-y-2">
                                {[
                                    {
                                        id: "item-1",
                                        question: "Do the inserts come with every cupcake box order?",
                                        answer: "Yes, our cupcake boxes are sold as complete units including the custom-fit inserts. This ensures your cupcakes stay perfectly static and secure during transit without you needing to source separate components."
                                    },
                                    {
                                        id: "item-2",
                                        question: "Are these boxes suitable for different cupcake sizes?",
                                        answer: "We offer standard inserts for 2-inch bases and mini inserts for 1.25-inch bases. We can also custom-engineer inserts for jumbo cupcakes or specialty dessert silhouettes upon request."
                                    },
                                    {
                                        id: "item-3",
                                        question: "What is the turnaround time for custom bakery orders?",
                                        answer: "Our standard turnaround time is 8-10 business days after you approve the digital design. We also offer expedited rush options for holiday launches and large event catering."
                                    },
                                    {
                                        id: "item-4",
                                        question: "Is the window material compostable?",
                                        answer: "We offer both standard PET windows (recyclable) and plant-based PLA windows (compostable). Please specify your preference during the quote process to align with your bakery's eco-philosophy."
                                    },
                                    {
                                        id: "item-5",
                                        question: "Can I print my bakery's logo on the inside of the box?",
                                        answer: "Absolutely! Internal printing is a fantastic way to create a premium, cohesive brand narrative. We can print logos, assembly instructions, or social media handles on the interior flaps."
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

                        {/* RIGHT COLUMN: FAQ Image */}
                        <div className="relative w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden ">
                            <img
                                src={FAQimage}
                                alt="Kraft Cupcake Boxes Technical Support"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Brand Rating & Bottom Quote Section */}
            <BrandRating />
            <div className="py-10">
                <QuoteForm />
            </div>

            <Footer />
        </div>
    );
};

export default KraftCupcakeBoxes;
