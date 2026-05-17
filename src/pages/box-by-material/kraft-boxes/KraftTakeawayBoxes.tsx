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
import kraftTakeawayHero from "@/assets/material/kraft-boxes/kraft-takeaway-boxes.webp";
import FAQimage from "@/assets/FAQ-image.webp";

const KraftTakeawayBoxes = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    const productImages = [
        { src: kraftTakeawayHero, alt: "Kraft Takeaway Boxes - Food Service Ready" },
        { src: kraftTakeawayHero, alt: "Kraft Takeaway Boxes - Multi-size Set" },
        { src: kraftTakeawayHero, alt: "Kraft Takeaway Boxes - Grease-Resistant View" },
        { src: kraftTakeawayHero, alt: "Kraft Takeaway Boxes - Stacked Ready" },
        { src: kraftTakeawayHero, alt: "Kraft Takeaway Boxes - Eco-Branding Shot" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Kraft Takeaway Boxes | Eco-Friendly Food Containers | CustomPackMakers</title>
                <meta name="description" content="Order custom kraft takeaway boxes for leak-resistant, professional food delivery. Sustainable brown food containers with grease protection. Wholesale rates & fast shipping." />
                <meta name="keywords" content="kraft takeaway boxes, brown food containers, eco friendly food packaging, custom printed takeaway boxes, wholesale restaurant packaging" />
                <meta property="og:title" content="Custom Kraft Takeaway Boxes | Eco-Friendly Food Containers | CustomPackMakers" />
                <meta property="og:description" content="Premium kraft takeaway packaging for modern restaurants and QSRs. Sturdy, leak-resistant, and 100% sustainable. Get a free quote today." />
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
                                <BreadcrumbPage>Kraft Takeaway Boxes</BreadcrumbPage>
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
                                <span className="text-primary">Kraft</span> Takeaway Boxes
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Redefining the delivery experience with sustainable logic. Our custom kraft takeaway boxes combine leak-resistant technology with a premium, organic look for modern gastronomy.
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
                                    src={kraftTakeawayHero}
                                    alt="Kraft Takeaway Boxes Hero"
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
                        High-Performance Food Packaging for the Modern Brand
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            Our <strong className="text-foreground">custom kraft takeaway boxes</strong> are designed for Quick Service Restaurants (QSRs), cloud kitchens, and gourmet bistros that refuse to compromise on either style or structural integrity. In an era where the delivery experience is as critical as the meal itself, these boxes provide a rigid, leak-resistant, and thermally-efficient shell for your culinary creations. Built from high-GSM unbleached kraft paperboard, our <strong className="text-foreground">eco-friendly takeaway containers</strong> offer the perfect organic backdrop for your brand's narrative while ensuring food stays fresh and presented as intended.
                        </p>
                        <p>
                            With advanced grease-resistant internal coatings and precision-scored folding mechanisms, our <strong className="text-foreground">brown food boxes</strong> turn a standard delivery into a curated brand touchpoint. We provide absolute flexibility in sizing—from individual burger boxes to large family meal containers—and offer wholesale solutions that include full-color custom printing with food-safe inks. With our 8–10 day turnaround, your restaurant can scale effectively without sacrificing the premium, sustainable aesthetic that modern diners demand.
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
                                        Restaurant Inquiry Form
                                    </h3>
                                    <form className="space-y-4">
                                        <div className="grid grid-cols-3 gap-3">
                                            <div className="space-y-1.5">
                                                <Label htmlFor="length" className="text-xs font-semibold text-muted-foreground">L (in)</Label>
                                                <Input id="length" type="number" placeholder="8" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label>
                                                <Input id="width" type="number" placeholder="6" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">D (in)</Label>
                                                <Input id="depth" type="number" placeholder="3" className="h-9 bg-white" />
                                            </div>
                                        </div>
                                        <div className="space-y-1.5">
                                            <Label htmlFor="quantity" className="text-xs font-semibold text-muted-foreground">Monthly Quantity</Label>
                                            <Input id="quantity" type="number" placeholder="1000" className="h-9 bg-white" />
                                        </div>
                                        <div className="space-y-1.5">
                                            <Label htmlFor="name" className="text-xs font-semibold text-muted-foreground">Restaurant Name</Label>
                                            <Input id="name" type="text" placeholder="Your Brand Name" className="h-9 bg-white" />
                                        </div>
                                        <div className="space-y-1.5">
                                            <Label htmlFor="email" className="text-xs font-semibold text-muted-foreground">Email</Label>
                                            <Input id="email" type="email" placeholder="contact@youreats.com" className="h-9 bg-white" />
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
                        Revolutionizing Food Delivery: The Power of Custom Kraft Takeaway Boxes
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
                                In the rapidly expanding world of food delivery, the takeaway container is no longer just a vessel; it is a critical touchpoint in the culinary journey. For modern gastronomy brands, <strong>Custom Kraft Takeaway Boxes</strong> have emerged as the gold standard for delivering a "premium, sustainable meal experience." By moving away from plastic-heavy alternatives and towards raw plant fibers, restaurants can communicate their environmental values while ensuring that the quality and presentation of the food remains intact.
                            </p>
                            <p>
                                At CustomPackMakers, we focus on the intersection of engineering and lifestyle. A takeaway box must perform under pressure: it has to resist grease, retain heat, prevents leaks, and survive the turbulent journey from the kitchen to the customer's front door. Our kraft takeaway solutions are designed to exceed these performance standards while providing an earthy, organic aesthetic that encourages social media sharing and builds lasting brand loyalty.
                            </p>

                            <h3>Structural Integrity: Built for the High-Demand Kitchen</h3>
                            <p>
                                The professional kitchen environment is fast-paced and demanding. Our boxes are designed for rapid, tool-free assembly, featuring precision-scored lines and auto-lock mechanisms that allow your staff to pack and seal in seconds. 
                            </p>
                            <ul>
                                <li><strong>Leak-Resistant Corners:</strong> We use an integrated fold design that minimizes corner gaps, ensuring that sauces and juices stay inside the container.</li>
                                <li><strong>Rigid Stacking Strength:</strong> Our high-GSM kraft cardstock provides the necessary structural rigidity to stack multiple orders on top of each other in a delivery bag without crushing the bottom containers.</li>
                                <li><strong>Steam Management:</strong> Naturally breathable kraft fibers coupled with discreet ventilation options ensure that hot food stays warm while preventing the condensation that makes fries and breads soggy.</li>
                            </ul>

                            <h3>Eco-Friendly Branding: The Visual Appeal of Natural Kraft</h3>
                            <p>
                                Choosing kraft is a powerful statement of brand ethics. The unbleached, raw texture of kraft paper signals to the customer that the brand cares about the planet as much as the produce. It suggests an "artisanal, hand-crafted" quality that plastic or bleached white cardboard simply cannot replicate. 
                            </p>
                            <p>
                                We use FSC-certified wood fibers and food-safe, soy-based inks, ensuring that every box is 100% recyclable and often biodegradable. This transparency builds deep trust with modern diners—particularly Millennials and Gen Z—who actively seek out restaurants that align with their sustainable values. By providing premium takeaway packaging, you demonstrate that your commitment to excellence extends from the first ingredient to the final box disposal.
                            </p>

                            <h3>Versatility: From Street Food to Gourmet Dining</h3>
                            <p>
                                The applications for kraft takeaway boxes are virtually unlimited. 
                            </p>
                            <ul>
                                <li><strong>Burgers and Street Food:</strong> Our grease-resistant liners prevent oil from saturating the paperboard, keeping the box clean and professional throughout the use.</li>
                                <li><strong>Gourmet Bistro Meals:</strong> Perfect for pasta, grain bowls, and curated proteins where the presentation must reflect the restaurant's sit-down quality.</li>
                                <li><strong>Sweet Treats and Pastries:</strong> Ideal for donuts, cookies, and small tarts where the rustic look complements the hand-made appeal.</li>
                            </ul>

                            <h3>Technical Excellence: Biodegradable Coatings and Heat Retention</h3>
                            <p>
                                To achieve high performance without plastic, we utilize specialized biodegradable internal coatings. These clay-based or plant-based barriers provide the necessary grease and moisture resistance while allowing the box to remain compostable or recyclable. 
                            </p>
                            <p>
                                Heat retention is also a core focus. The insulating properties of multi-layered kraft cardstock help maintain the optimal serving temperature of your dishes for longer than standard plastic or foil wrappers. This is critical for maintaining the flavor profile and texture of your food during the "last mile" of delivery, which can often take 20 minutes or longer.
                            </p>

                            <h3>Wholesale Success for High-Volume QSRs</h3>
                            <p>
                                Whether you're running a single boutique kitchen or a national franchise, our manufacturing process is designed to support your scale. We offer wholesale pricing models that ensure your premium, sustainable transition doesn't inflate your fulfillment costs. Our boxes ship flat to maximize your storage space and are designed for rapid deployment during peak meal-time rushes.
                            </p>
                            <p>
                                Partner with CustomPackMakers and deliver your food in packaging that honors your culinary art. Let us help you turn every delivery into a world-class brand experience.
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
                        <span className="inline-block text-xs font-semibold tracking-widest text-primary uppercase mb-3 bg-primary/10 px-4 py-1.5 rounded-full">Gastronomy standard</span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
                            Why Top <span className="text-primary">Eateries</span> Trust Us
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            We bridge the gap between high-performance restaurant logistics and artisan, eco-friendly aesthetics.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">
                        {/* LEFT: typography */}
                        <div className="space-y-5">
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Leak-Resistant Engineering</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Precision-scored folds and integrated corner seals ensure that sauces and juices stay inside the box, not in your delivery driver's bag.
                                    </p>
                                </div>
                            </div>
                            <div className="w-full h-px bg-slate-100" />
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors duration-300">
                                        <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Superior Heat Retention</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Our insulating multi-layered kraft cardstock helps maintain optimal serving temperature through the critical "last mile" of delivery.
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
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Eco-Brand Identity</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Transition away from plastic and demonstrate your commitment to a circular economy with 100% recyclable, FSC-certified fibers.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT: Image with floating badges */}
                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img
                                    src={kraftTakeawayHero}
                                    alt="Restaurant Grade Takeaway Presentation"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-7">
                                    <p className="text-white font-bold text-lg leading-snug mb-1">
                                        QSR-Ready Efficiency
                                    </p>
                                    <p className="text-white/75 text-sm">Empowering high-volume cloud kitchens and gourmet bistros</p>
                                </div>
                            </div>

                            {/* Floating badges */}
                            <div className="absolute top-4 -right-2 lg:-right-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80 backdrop-blur-sm">
                                <p className="text-2xl font-bold text-primary leading-none">PLA</p>
                                <p className="text-xs text-slate-400 mt-1 font-medium">Internal Lining</p>
                            </div>
                            <div className="absolute bottom-4 -left-2 lg:-left-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80 backdrop-blur-sm">
                                <p className="text-2xl font-bold text-emerald-500 leading-none">100%</p>
                                <p className="text-xs text-slate-400 mt-1 font-medium">Food-Safe Ink</p>
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
                                    src={kraftTakeawayHero}
                                    alt="Differentiate Your Restaurant Brand"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                            </div>
                        </div>

                        {/* RIGHT: Content */}
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                                Differentiate Your <span className="text-primary">Eatery</span> with Sustainable Style
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                At CustomPackMakers, we know that your takeaway container is the final bridge between your kitchen and your customer. We utilize advanced manufacturing to ensure that each kraft takeaway box is structurally robust, grease-resistant, and aesthetically striking. By integrating leak-resistant designs with high-impact custom printing and sustainable textures, we help you create a world-class dining experience that builds immediate trust, ensures product hygiene, and drives repeat business across every delivery order.
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
                                    Technical insights into our restaurant-grade takeaway solutions.
                                </p>
                            </div>

                            <Accordion type="single" collapsible defaultValue="item-1" className="w-full space-y-2">
                                {[
                                    {
                                        id: "item-1",
                                        question: "Will the box leak if I pack hot pasta or sauces?",
                                        answer: "Our takeaway boxes are engineered with integrated corner seals and grease-resistant barriers to minimize the risk of leakage. For very high-liquid dishes, we recommend our specialized wax-free internal linings which are fully biodegradable and provide maximum moisture protection."
                                    },
                                    {
                                        id: "item-2",
                                        question: "Can these boxes be safely used in a microwave?",
                                        answer: "Most of our kraft takeaway boxes are microwave-safe as they do not contain metal components or plastic poly-coatings. However, for boxes with metallic foil stamping or specific coatings, we recommend checking the technical specifications for each specific order."
                                    },
                                    {
                                        id: "item-3",
                                        question: "What is the turnaround time for bulk restaurant orders?",
                                        answer: "Our standard turnaround time is 8-10 business days after digital design approval. We maintain high production capacity to support franchises and cloud kitchens during high-demand periods and new location launches."
                                    },
                                    {
                                        id: "item-4",
                                        question: "Are your food containers 100% recyclable?",
                                        answer: "Yes, our kraft boxes are made from unbleached paper and use water-based or soy-based inks, making them fully recyclable. Depending on the internal lining used, many are also industrially compostable."
                                    },
                                    {
                                        id: "item-5",
                                        question: "Can I get custom-sized containers for my specific dishes?",
                                        answer: "Absolutely! We specialize in custom engineering. We can calculate the perfect dimensions for your burgers, bowls, or family sets to ensure a snug fit that prevents food from shifting and stays thermally efficient."
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
                                alt="Kraft Takeaway Boxes Technical Support"
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

export default KraftTakeawayBoxes;
