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
import { TechnicalSpecsSection } from "@/components/TechnicalSpecsSection";
import { RelatedProductWindowPackaging } from "@/components/RelatedProductWindowPackaging";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";

import productImg from "@/assets/shape-style/window-packaging/cookie-boxes-with-window.webp";
import customHeroImage from "@/assets/shape-style/window-packaging/window-packaging-hero.webp";
import FAQimage from "@/assets/FAQ-image.webp";

const CookieBoxesWithWindow = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    const productImages = [
        { src: productImg, alt: "Cookie Boxes With Window - Main View" },
        { src: productImg, alt: "Cookie Boxes With Window - High Angle" },
        { src: productImg, alt: "Cookie Boxes With Window - Packaging Detail" },
        { src: productImg, alt: "Cookie Boxes With Window - Presentation" },
        { src: customHeroImage, alt: "Cookie Boxes With Window - Lifestyle" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Cookie Boxes With Window | Bakery Packaging | CustomPackMakers</title>
                <meta name="description" content="Wholesale custom cookie boxes featuring high-transparency viewing windows. Grease resistant interiors with sturdy barriers keeping artisan cookies bakery crisp. Free quotes." />
                <meta name="keywords" content="cookie boxes with window, custom bakery boxes, wholesale cookie packaging, transparent cookie boxes, grease resistant packaging" />
                <meta property="og:title" content="Custom Cookie Boxes With Window | Bakery Fresh Display" />
                <meta property="og:description" content="Capture the bakery aesthetic instantly. Food-safe clear window die-cuts designed perfectly for decadent chocolate chip or ornate iced cookies." />
            </Helmet>
            <Header />

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
                                    <Link to="/industries">All Industries</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link to="/categories/window-packaging">Window Packaging</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Cookie Boxes With Window</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </div>

            <section className="py-8 bg-background">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-7 space-y-6">
                            <div className="w-20 h-1.5 bg-primary rounded-full"></div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight">
                                <span className="text-primary">Cookie Boxes</span> With Window
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Deliver bakery-fresh aesthetics straight to the retail aisle. Uniting heavy-duty grease resistance with flawless, fog-free transparent panes guaranteeing your cookies look irresistible.
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
                                    src={customHeroImage}
                                    alt="Cookie Window Boxes Hero"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-8 bg-slate-50">
                <div className="container mx-auto px-[5vw]">
                    <div className="flex items-center gap-3 mb-5">
                        <div className="w-10 h-1 bg-primary rounded-full" />
                        <span className="text-xs font-semibold tracking-widest text-primary uppercase">Product Overview</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 max-w-3xl">
                        A Transparent Barrier Locking In Pure Freshness
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            Fresh-baked products demand immediate visual engagement to communicate their soft texture and quality ingredients. When displaying intricately iced sugar cookies or profoundly thick chocolate-chip variations, an opaque box entirely defeats the purpose. Opting for <strong className="text-foreground">custom cookie boxes with windows</strong> immediately weaponizes your visual presentation. Showing the product seamlessly removes all buyer hesitation and exponentially scales impulse conversions.
                        </p>
                        <p>
                            Beyond visual flair, our engineering focuses heavily on structural food safety and rigidness. A baked good generates humidity and leeches internal oils over time. Using heavy SBS bright white cardboards layered extensively with FDA-approved grease-resistant interior laminates guarantees your box walls never warp or stain. The plastic viewing window forms an immaculate seal against the border, safeguarding the crunch and preventing premature staleness.
                        </p>
                    </div>
                </div>
            </section>

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
                                        Get a Custom Quote
                                    </h3>
                                    <form className="space-y-4">
                                        <div className="grid grid-cols-3 gap-3">
                                            <div className="space-y-1.5">
                                                <Label htmlFor="length" className="text-xs font-semibold text-muted-foreground">L (in)</Label>
                                                <Input id="length" type="number" placeholder="6" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label>
                                                <Input id="width" type="number" placeholder="4" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">D (in)</Label>
                                                <Input id="depth" type="number" placeholder="3" className="h-9 bg-white" />
                                            </div>
                                        </div>
                                        <div className="space-y-1.5">
                                            <Label htmlFor="quantity" className="text-xs font-semibold text-muted-foreground">Quantity</Label>
                                            <Input id="quantity" type="number" placeholder="1000" className="h-9 bg-white" />
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

            <TechnicalSpecsSection />

            <section className="py-8 bg-slate-50 border-t border-slate-100">
                <div className="container mx-auto px-[5vw]">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">
                        Sealing Bakery Excellence Inside Custom Viewable Parameters
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
                                Establishing a dominant foothold in the highly saturated commercial or boutique bakery arena necessitates moving beyond simple graphics. Your confectionary product is an art form, and boxing it up inside completely solid paperboard strictly harms your potential reach. Implementing <strong>custom cookie boxes with windows</strong> solves the disconnect immediately. It permits an unadulterated gaze straight onto the rich chocolate chips, delicate sugar-frosting details, and the inviting golden textures of the bake. CustomPackMakers builds these transparency assets utilizing ultra-clear PET panes matched entirely to massive architectural stability.
                            </p>
                            <p>
                                Baked products demand an entirely specialized environment. A fresh cookie perpetually emits ambient humidity and deep baking oils. An inferior packaging cardboard rapidly absorbs these elements; subsequently, the box physically sags out of shape and forms atrocious dark grease rings alerting customers to staleness. To combat this violently, our constructs embed powerful lipophobic (grease-blocking) laminations internally against heavy 18pt to 22pt high-density paperboards, leaving the exterior perfectly matte or glossy while safely containing extreme culinary outputs.
                            </p>

                            <h3>Why Invest Deeply in Bakery Viewports?</h3>
                            <p>
                                Cookies are sensory purchases. If a consumer cannot interact with the item prior softly analyzing its crunch to chew ratio visually, conversion rates halve.
                            </p>
                            <ul>
                                <li><strong>Validating Icing and Artwork:</strong> For holiday-themed cookie companies, intricate icing represents immense labor value. Why hide this effort inside an opaque cube? A window serves to frame and validate this intense labor visually.</li>
                                <li><strong>Impulse Counter Domination:</strong> Placing clearly viewable half-dozen cookie trays beside high-traffic coffee-shop registers fundamentally weaponizes the human craving response generating extreme auxiliary revenues.</li>
                                <li><strong>Pre-Constructed Gifting Assets:</strong> A beautifully molded transparent box instantly communicates immediate presenting readiness minimizing extra foil wrapping layers.</li>
                            </ul>

                            <h3>Structural Dynamics Around Wide Die-Cuts</h3>
                            <p>
                                Removing half of a folding lid to install a giant plastic viewing patch intuitively destroys the tension strength of a standard carton. Without expert engineering compensations, boxes loaded with 16oz of heavy gourmet cookies easily buckle under sheer gravity when stacked. 
                            </p>
                            <p>
                                Our remedy relies entirely upon precision substrate thickness spanning up to 24pt board strengths combined with internally applied clear film bridges. When we lock the PET sheet securely via food-grade adhesives overlapping the inside board framing, the plastics functionally reclaim the tensile pressure of the missing cardboard resulting in zero crush damages down the distribution line.
                            </p>

                            <h3>Tuning The Interior Aesthetics with Inserts</h3>
                            <p>
                                When granting transparency to a box, the positioning of the cookie becomes pivotal. A window is utterly useless if the items are jumbled haphazardly sideways within the deep cavity. 
                            </p>
                            <p>
                                We design specialized custom dividing trays, food-safe waffle paper partitions, and molded internal holding structures ensuring all cookies rest perfectly parallel to the viewing window permanently framing their optimal angle against the shoppers' peripheral sweeps. Stacking aesthetics are absolutely crucial for a polished, highly-professional food presentation.
                            </p>

                            <h3>High Definition Brand Integration</h3>
                            <p>
                                Just because half the box is clear plastic doesn't mean branding suffers. Conversely, the board framing the window performs like an art gallery perimeter. Embellishing this border utilizing metallic copper foiling creates phenomenal contrast against the brown bake of the underlying cookies. Implementing CMYK offset vectors wrapping 3D ribbons seamlessly toward the center cutout generates extreme perceived luxury securing premium tiered item pricing reliably. 
                            </p>

                            <h3>Environmentally Responsible Retail Presence</h3>
                            <p>
                                Modern food culture expects conscious ecological stewardship from vendors. Partnering non-toxic soy inks against 100% repulpable Kraft paper sets a trustworthy environmental foundation. However, to complete a totally green offering we are capable of integrating clear PLA (Polylactic Acid) biodegradable bioplastic window formats creating entirely compost-friendly bakery packaging without sacrificing structural resistance. Partner with CustomPackMakers and scale your bakery fulfillment through dedicated 8-10 day turnaround volumes smoothly maintaining extreme shelf life.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <RelatedProductWindowPackaging />

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
                            Combining advanced anti-grease structures with stunningly lucid presentation windows.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">
                        <div className="space-y-5">
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
                                        Total Grease Immunity
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Bakery oils rapidly ruin external packaging graphics visually. We lock these lipids safely deep inside deploying invisible FDA-approved PE layers shielding your outer aesthetic presentation endlessly.
                                    </p>
                                </div>
                            </div>

                            <div className="w-full h-px bg-slate-100" />

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
                                        Anti-Fogging Visualization
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Locking baked goods often creates internal condensation that physically hazes over the display portal ruining visibility. Our specific films are engineered with anti-fog properties maintaining pristine photographic views constantly.
                                    </p>
                                </div>
                            </div>

                            <div className="w-full h-px bg-slate-100" />

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
                                        Unwavering Stack Resistance
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Do not sacrifice volume for transparency. Utilizing extremely rigid folded structural configurations, your bakery box performs defensively against exterior weights protecting brittle icings securely.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img
                                    src={productImg}
                                    alt="Premium Cookie Storage Window Boxes"
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

            <section className="py-10 lg:py-12 bg-white overflow-hidden relative">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="relative group">
                            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] border border-primary/20 shadow-2xl transform transition-transform duration-700 hover:scale-[1.02]">
                                <img
                                    src={productImg}
                                    alt="Differentiate Sweet Displays Visually"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                            </div>
                            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-60" />
                            <div className="absolute -z-10 -top-8 -right-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl opacity-60" />
                        </div>

                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                                Transmit the <span className="text-primary">Bakery Feel Directly</span>
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                Achieving wholesale distribution success inherently relies on simulating localized artisan charm. Pushing cookies bound visually by opaque white grids rapidly feels overly manufactured generating purchasing hesitation. Replacing that dead space integrating wide-open rectangular PET tracking channels immediately proves authenticity rendering the exact baked surface visible dynamically to passing shoppers. Supplementing specialized cookie inserts guaranteeing all elements stack tightly while remaining centered under the window frame constructs the pinnacle artisan display generating exponential sales velocities effortlessly.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-6 bg-slate-50">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                                    Frequently Asked Questions
                                </h2>
                                <p className="text-base text-muted-foreground">
                                    Understanding exact protective dynamics regarding baked goods and windowed boards.
                                </p>
                            </div>

                            <Accordion type="single" collapsible defaultValue="item-1" className="w-full space-y-2">
                                {[
                                    {
                                        id: "item-1",
                                        question: "Does exactly sealing the plastic alter cookie crispness?",
                                        answer: "Actually, sealing it tighter using precision adhesion retains the ambient humidity ratio longer actively warding off harsh atmospheric changes extending your cookie's crispy textures efficiently."
                                    },
                                    {
                                        id: "item-2",
                                        question: "Are your window films completely food grade?",
                                        answer: "Absolutely. Our production array strictly mandates deploying FDA-cleared PET polymer sheets totally mitigating potentially dangerous toxic material transfers touching the food."
                                    },
                                    {
                                        id: "item-3",
                                        question: "How do you align multiple cookies facing the window?",
                                        answer: "We engineer precise waffle-paper inserts or corrugated dividing matrices perfectly organizing and holding separated items completely still, orienting their decorated angles flatly against the window."
                                    },
                                    {
                                        id: "item-4",
                                        question: "Will the cutout corners easily rip when handled?",
                                        answer: "No. Although removing heavy portions of the layout weakens standard cardboard, we mitigate this via heavy-grade 18pt SBS boards backing the film tension completely protecting the structure."
                                    },
                                    {
                                        id: "item-5",
                                        question: "Do they assemble quickly at commercial food counters?",
                                        answer: "Yes, we prioritize rapid execution via interlocking crash bottom structures allowing employees to snap open the shape perfectly instantly bypassing tedious taping phases entirely."
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
                                alt="Cookie Window Packages FAQ"
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

export default CookieBoxesWithWindow;
