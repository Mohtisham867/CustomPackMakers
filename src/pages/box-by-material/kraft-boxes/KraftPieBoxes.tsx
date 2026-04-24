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
import kraftPieHero from "@/assets/kraft-boxes/kraft-pie-boxes.webp";
import FAQimage from "@/assets/FAQ-image.webp";

const KraftPieBoxes = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    const productImages = [
        { src: kraftPieHero, alt: "Kraft Pie Boxes - Home Style Display" },
        { src: kraftPieHero, alt: "Kraft Pie Boxes - Bakery Stack View" },
        { src: kraftPieHero, alt: "Kraft Pie Boxes - Close-up Texture" },
        { src: kraftPieHero, alt: "Kraft Pie Boxes - Window Detail" },
        { src: kraftPieHero, alt: "Kraft Pie Boxes - Recycled Material" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Kraft Pie Boxes | Professional Bakery Packaging | CustomPackMakers</title>
                <meta name="description" content="Order custom kraft pie boxes for a rustic, artisan bakery presentation. Durable brown paper pie packaging with windows. Wholesale rates, custom printing & fast shipping." />
                <meta name="keywords" content="kraft pie boxes, brown bakery boxes, custom printed pie packaging, eco friendly pie boxes with window, wholesale pie boxes" />
                <meta property="og:title" content="Custom Kraft Pie Boxes | Professional Bakery Packaging | CustomPackMakers" />
                <meta property="og:description" content="Premium kraft pie packaging for bakeries and home-style brands. Sustainable, sturdy, and designed for optimal pastry protection. Get a free quote." />
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
                                <BreadcrumbPage>Kraft Pie Boxes</BreadcrumbPage>
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
                                <span className="text-primary">Artisan</span> Pie Boxes
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Give your baked goods the presentation they deserve. Our custom kraft pie boxes offer a rustic, home-style look with the structural strength essential for delicate crusts.
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
                                    src={kraftPieHero}
                                    alt="Kraft Pie Boxes Hero"
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
                        Rustic Presentation for Bakes That Feel Like Home
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            Our <strong className="text-foreground">custom kraft pie boxes</strong> are designed for professional and artisanal bakeries that want to convey a sense of "hand-crafted quality." In a market saturated with generic bleached cardboard, the natural, unbleached texture of kraft material provides a refreshing and sophisticated difference. Whether you're selling classic apple pies, savory quiches, or seasonal tarts, our <strong className="text-foreground">bakery-grade pie packaging</strong> offers a robust and eco-friendly shell that protects your delicate flaky crusts from damage during transit and display.
                        </p>
                        <p>
                            We offer <strong className="text-foreground">wholesale brown pie boxes</strong> that can be tailored to your specific product size, from 6-inch individual tarts to heavy 12-inch family pies. Each box features high-clarity viewing windows to showcase your baking art and is treated with food-safe grease barriers to prevent oil stains from saturating the paperboard. With our industry-leading 8–10 day turnaround, you can maintain a consistent supply of <strong className="text-foreground">custom branded bakery containers</strong> that align with modern sustainable values.
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
                                        Custom Bakery Quote
                                    </h3>
                                    <form className="space-y-4">
                                        <div className="grid grid-cols-3 gap-3">
                                            <div className="space-y-1.5">
                                                <Label htmlFor="length" className="text-xs font-semibold text-muted-foreground">L (in)</Label>
                                                <Input id="length" type="number" placeholder="9" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label>
                                                <Input id="width" type="number" placeholder="9" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">D (in)</Label>
                                                <Input id="depth" type="number" placeholder="2.5" className="h-9 bg-white" />
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
                        Elegance and Protection: The Importance of Custom Kraft Pie Boxes
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
                                In the artisan tradition of baking, the presentation is a critical final step. For pies—the quintessential "home-style" comfort food—the packaging must communicate a sense of warmth, quality, and heritage. <strong>Custom Kraft Pie Boxes</strong> have emerged as the gold standard for boutiques and craft bakeries looking to separate themselves from industrial, mass-market alternatives. By choosing unbleached, raw kraft fibers, you signal to your customers that your product is natural and responsibly made.
                            </p>
                            <p>
                                At CustomPackMakers, we focus on the intersection of aesthetics and utility. A pie is a heavy and often delicate item; the crust can crumble, and the filling can shift. Our kraft pie packaging is engineered with reinforced corners and high-GSM paperboard to provide the structural "vault" your pastry needs while maintaining the organic beauty that modern consumers crave.
                            </p>

                            <h3>Structural Integrity for Delicate Pastry: Preventing Crust Damage</h3>
                            <p>
                                The most common failure in pie logistics is crust damage. A flaky crust is fragile by nature, and a box that flexes too much will cause it to crack. Our boxes are built from high-density rigid kraft stock that maintains its shape even when stacked on bakery transport racks. 
                            </p>
                            <ul>
                                <li><strong>Auto-Locking Bases:</strong> Our pie boxes feature reinforced "tuck" or "auto-lock" bases that prevent the bottom from sagging under the weight of heavy fruit or custard fillings.</li>
                                <li><strong>Secure Corner Tabs:</strong> Precision-scored corner tabs ensure the lid remains tightly closed, preventing external pressure from impacting the product.</li>
                                <li><strong>Multi-Size Range:</strong> From 4-inch mini tarts to 12-inch family pies, we provide dimensions that fit your specific product footprint, eliminating excess space where the pie could slide.</li>
                            </ul>

                            <h3>Steam Ventilation and Moisture Control</h3>
                            <p>
                                A fresh pie is often boxed while still warm. If the packaging isn't breathable, steam will collect on the interior, making the crust soggy and the window fogged. Our kraft paperboard is naturally breathable, allowing moisture to dissipate without the material becoming soft or compromised. 
                            </p>
                            <p>
                                Furthermore, we can integrate discreet ventilation holes or "steam vents" into the side panels of the box. This technical detail ensures that your crust stays "oven-fresh" and crisp, even if the customer doesn't enjoy it for several hours after purchase. For displays, our fog-resistant window film ensures a crystal-clear view of the product regardless of the internal temperature.
                            </p>

                            <h3>Eco-Friendly Material Selection: Unbleached Kraft and Food Safety</h3>
                            <p>
                                Since our pie boxes come into direct contact with food, safety and hygiene are our top priorities. Our kraft stock is chemical-free, meaning there are no toxic odors or substances that could affect the delicate flavor profile of your bakes. 
                            </p>
                            <p>
                                We use FSC-certified wood fibers and soy-based inks, ensuring that every box is 100% recyclable and biodegradable. This environmental transparency is a significant brand asset, building deep loyalty with consumers who actively support "zero-plastic" and "responsibly sourced" businesses.
                            </p>

                            <h3>Visual Appeal: Windows and Bakery Branding</h3>
                            <p>
                                Transparency drives sales. A well-placed window allows the customer to see the intricate lattice work or the vibrant color of a fruit filling. We offer custom die-cut windows in various shapes—from standard squares to brand silhouettes—to help your bakes stand out on the retail shelf. 
                            </p>
                            <p>
                                Our advanced printing facilities allow you to add high-impact branding to the organic kraft surface. Think of your bakery's logo in a high-contrast white or a luxury gold foil, creating a stunning contrast against the matte brown paper. This combination of textures and transparency elevates your product from a simple dessert to a premium gift item.
                            </p>

                            <h3>Wholesale Excellence for Growing Brands</h3>
                            <p>
                                Whether you're a neighborhood shop testing new recipes or a regional franchise scaling your production, our manufacturing process is designed to support your growth. Our pie boxes ship flat to maximize your storage space and are designed for rapid, tool-free assembly, which is critical during high-volume periods like Thanksgiving and Christmas.
                            </p>
                            <p>
                                Partner with CustomPackMakers and deliver your pies in packaging that honors your artisan tradition. Let us help you turn your passion for baking into a world-class brand experience.
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
                        <span className="inline-block text-xs font-semibold tracking-widest text-primary uppercase mb-3 bg-primary/10 px-4 py-1.5 rounded-full">Bakery Craft</span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
                            Why Professional <span className="text-primary">Bakers</span> Trust Us
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            We combine traditional artisan aesthetics with modern structural engineering to protect your pastry legacy.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">
                        {/* LEFT: typography */}
                        <div className="space-y-5">
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Crust-Protecting Rigidity</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Our pie boxes are built from high-GSM kraft cardstock that maintains its shape, ensuring your delicate flaky crusts don't crack during transit.
                                    </p>
                                </div>
                            </div>
                            <div className="w-full h-px bg-slate-100" />
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors duration-300">
                                        <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Moisture Ventilation</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Naturally breathable kraft fibers paired with technical ventilation options ensure your warm bakes stay crisp and never soggy.
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
                                        Empower your bakery's eco-identity with 100% recyclable, plastic-minimal packaging that modern consumers trust.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT: Image with floating badges */}
                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img
                                    src={kraftPieHero}
                                    alt="Luxury Bakery Pie Presentation"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-7">
                                    <p className="text-white font-bold text-lg leading-snug mb-1">
                                        Bakery-Grade Standards
                                    </p>
                                    <p className="text-white/75 text-sm">Engineered for family-sized portions and delicate tarts</p>
                                </div>
                            </div>

                            {/* Floating badges */}
                            <div className="absolute top-4 -right-2 lg:-right-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80 backdrop-blur-sm">
                                <p className="text-2xl font-bold text-primary leading-none">9+</p>
                                <p className="text-xs text-slate-400 mt-1 font-medium">Standard Sizes</p>
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
                                    src={kraftPieHero}
                                    alt="Differentiate Your Pie Brand"
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
                                At CustomPackMakers, we know that your pie packaging is the final touch of your artisanal process. We utilize advanced manufacturing to ensure your kraft pie boxes are structurally sound, grease-resistant, and aesthetically striking. By integrating crystal-clear viewing windows with high-contrast custom printing and sustainable textures, we help you create a world-class unboxing experience that builds lasting brand loyalty, ensures product safety, and drives repeat business across every seasonal holiday collection.
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
                                    Insights into our professional bakery-grade packaging.
                                </p>
                            </div>

                            <Accordion type="single" collapsible defaultValue="item-1" className="w-full space-y-2">
                                {[
                                    {
                                        id: "item-1",
                                        question: "Will the box become soggy from the steam of fresh pies?",
                                        answer: "No. Our kraft paperboard is naturally breathable, and we can add side ventilation holes to ensure steam dissipates quickly. This keeps your crust crisp and your viewing window clear even if boxed immediately after the oven."
                                    },
                                    {
                                        id: "item-2",
                                        question: "Can these boxes handle heavy family-sized fruit pies?",
                                        answer: "Absolutely. We specify high-GSM rigid kraft stock and reinforced auto-lock bases for our pie boxes, ensuring they can support the weight of heavy fillings without sagging or bottom collapse."
                                    },
                                    {
                                        id: "item-3",
                                        question: "What is the turnaround time for wholesale bakery orders?",
                                        answer: "Our standard turnaround time is 8-10 business days after digital design approval. We maintain high production capacity to support bakeries during high-demand holidays like Thanksgiving and Christmas."
                                    },
                                    {
                                        id: "item-4",
                                        question: "Is the window material heat resistant?",
                                        answer: "Yes, our food-grade PET window films are stable at standard bakery temperatures and will not warp or release odors when in close proximity to warm pastries."
                                    },
                                    {
                                        id: "item-5",
                                        question: "Are your bakery boxes grease resistant?",
                                        answer: "Yes, we treat our kraft board with food-safe internal barriers that prevent butter and oil from saturating the fibers, ensuring the exterior of the box remains clean and professional."
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
                                alt="Kraft Pie Boxes Technical Support"
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

export default KraftPieBoxes;
