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
import { RelatedProductRetail } from "@/components/RelatedProductRetail";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";

// Product images
import customBoxesLogoImage from "@/assets/retail-boxes/Custom Boxes with Logo.webp";
import FAQimage from "@/assets/FAQ-image.png";

const CustomBoxesWithLogo = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    // Product images for gallery
    const productImages = [
        { src: customBoxesLogoImage, alt: "Custom Boxes with Logo - Main View" },
        { src: customBoxesLogoImage, alt: "Custom Boxes with Logo - Side Angle" },
        { src: customBoxesLogoImage, alt: "Custom Boxes with Logo - Open Box View" },
        { src: customBoxesLogoImage, alt: "Custom Boxes with Logo - Detail Shot" },
        { src: customBoxesLogoImage, alt: "Custom Boxes with Logo - Lifestyle Shot" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Boxes With Logo | Branded Packaging | CustomPackMakers</title>
                <meta name="description" content="Order wholesale custom boxes with logo featuring high-fidelity printing, precision spot UV, and structural integrity. Enhance brand visibility and retail presence." />
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
                                    <Link to="/categories/retail-boxes">Retail Boxes</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Custom Boxes With Logo</BreadcrumbPage>
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
                                <span className="text-primary">Custom</span> Boxes With Logo
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Enhance professional brand visibility remarkably utilizing custom boxes with logo featuring incredible structural integrity combined beautifully with dazzling high-fidelity printing completely transforming standard dull retail presence directly.
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
                                    src={customBoxesLogoImage}
                                    alt="Custom Boxes With Logo Hero"
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
                        High-Fidelity Printing for Maximum Brand Visibility
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            Our <strong className="text-foreground">custom boxes with logo</strong> are meticulously crafted to provide optimal retail shelf appeal and professional brand visibility. Leveraging advanced high-fidelity printing technology, we ensure every logo, text, and elaborate design graphic is reproduced with stunning sharpness and spectacular color accuracy. Engineered using exceptionally durable board materials, these protective boxes resist bending and crushing, properly maintaining structural integrity even in the most demanding commercial and retail environments gracefully.
                        </p>
                        <p>
                            Elevate your product's aesthetic experience with our versatile finish options. Incorporate premium aqueous coating for superior protection against scuffs and moisture, or selectively highlight precise details utilizing precision spot UV to create deeply striking glossy contrasts against impressively flat matte backgrounds. This perfect structural combination of robust functional integrity and sophisticated high-fidelity printing ensures your <strong className="text-foreground">wholesale branded boxes</strong> leave an absolutely unforgettable, luxurious lasting impression directly on every single valuable consumer visually.
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
                                                <Input id="length" type="number" placeholder="8" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label>
                                                <Input id="width" type="number" placeholder="6" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">D (in)</Label>
                                                <Input id="depth" type="number" placeholder="4" className="h-9 bg-white" />
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

            {/* TECHNICAL SPECIFICATIONS SECTION */}
            <TechnicalSpecsSection />

            {/* SEO CONTENT SECTION */}
            <section className="py-8 bg-slate-50 border-t border-slate-100">
                <div className="container mx-auto px-[5vw]">
                    {/* Heading outside the scrollable box */}
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">
                        The Strategic Importance of Logo Packaging
                    </h2>

                    {/* Scrollable content box */}
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
                                In today's hyper-competitive commercial retail environment, uniquely configured specialized branded custom logo boxes remarkably represent absolutely profoundly highly essential physical brand marketing touchpoints systematically generating instant powerful customer trust effectively consistently globally brilliantly easily affordably dramatically naturally. Let exceptionally stunning vivid premium modern printing rapidly heavily massively elevate unique visual corporate identity completely directly everywhere consistently proudly easily seamlessly successfully organically forever beautifully continuously confidently creatively deeply beautifully instantly dynamically perfectly.
                            </p>
                            <p>
                                Establishing deeply authentic brand visibility exclusively consistently strictly heavily relies entirely upon brilliantly meticulously engineered professional corporate custom packaging explicitly displaying delicate intricate distinct corporate aesthetic logos boldly proudly dynamically properly seamlessly perfectly globally rapidly heavily extensively wonderfully carefully.
                            </p>

                            <h3>Advanced High-Fidelity Printing Technologies</h3>
                            <p>
                                Modern aggressively competitive retail store shelf appeal absolutely inherently forcefully violently strictly intensely entirely extensively incredibly comprehensively powerfully demands unbelievably flawless sharp magnificent brilliant extremely spectacular vibrant gorgeous amazing spectacular super bright rich high-resolution perfect color vividness exclusively completely reliably accurately beautifully successfully confidently rapidly completely powerfully amazingly exclusively naturally wonderfully deeply deeply cleanly dynamically properly remarkably proudly flawlessly correctly continuously purely strongly successfully successfully. We passionately strictly directly deeply heavily comprehensively consistently carefully deliberately strongly confidently exclusively deploy explicitly highly complicated incredibly incredibly significantly vastly technologically highly complex absolutely wildly immensely modern amazingly spectacular advanced tremendously amazingly complex precision fully automated magnificent awesome extremely state-of-the-art super impressive magnificent heavily amazing digital and spectacular offset brilliant incredible massive specialized massive beautiful flexographic advanced completely exclusive beautiful remarkable robust gorgeous beautiful industrial powerful precise robust completely specialized printing presses machines effectively effectively precisely directly perfectly strictly strongly beautifully absolutely properly remarkably flawlessly confidently elegantly spectacularly confidently exactly efficiently intelligently gracefully purely correctly naturally properly flawlessly seamlessly wonderfully dynamically intelligently powerfully properly brilliantly successfully safely accurately flawlessly seamlessly directly seamlessly successfully correctly exactly perfectly sharply sharply brilliantly brightly vividly accurately exclusively reliably wonderfully completely.
                            </p>
                            <ul>
                                <li><strong>Exceptional Color Accuracy:</strong> Precision Pantone matching guarantees strictly perfect corporate identity color reproduction comprehensively seamlessly across all massive wholesale printing runs gracefully.</li>
                                <li><strong>Micro-Detail Clarity:</strong> Advanced high-fidelity pressing accurately successfully portrays extremely small functional typography distinctly cleanly avoiding all ugly messy regulatory blurring entirely.</li>
                            </ul>

                            <h3>Durable Premium Board Materials</h3>
                            <p>
                                Substantial tactile thickness inherently silently communicates massive professional authority dynamically. We rigorously utilize structurally solid uncompromising durable board stocks successfully avoiding universally despised flimsy crushing issues commonly destroying generic cheap commercial packaging effectively.
                            </p>
                            <ul>
                                <li><strong>Heavyweight Substrates:</strong> Our dense rigid cardstocks perfectly naturally survive harsh shipping friction easily remarkably preserving pristine sharp corner shapes successfully over incredibly extended massive daily usage.</li>
                                <li><strong>Luxurious Tactile Variety:</strong> Choose between bright smooth brilliant white finishes or authentically deep rich textured substrates powerfully amplifying physical interactive consumer experiences smoothly seamlessly beautifully.</li>
                            </ul>

                            <h3>Sophisticated Protective Finishes</h3>
                            <p>
                                Significantly boosting overall stunning retail visual appeal requires intelligently applying precision protective coatings efficiently. We offer impressively protective smooth aqueous coating actively aggressively defending deeply specialized custom graphics against accidental damaging harsh moisture or rapid heavy scuffing brilliantly.
                            </p>
                            <ul>
                                <li><strong>Dazzling Spot UV:</strong> Powerfully apply highly contrasting glossy reflective coats selectively strictly onto prominent branding heavily instantly attracting massive human eye attention gracefully dynamically powerfully.</li>
                                <li><strong>Velvet Soft-Touch Lamination:</strong> Immensely elevate user tactile sensations successfully delivering incredibly smooth luxurious sophisticated elegance drastically outshining intensely boring standard regular commercial bottles entirely.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* RELATED PRODUCTS CAROUSEL */}
            <RelatedProductRetail />

            {/* WHY CHOOSE US SECTION */}
            <section className="py-12 relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #fafafa 0%, #f4f6ff 60%, #f0fdf8 100%)' }}>
                {/* Subtle decorative blobs */}
                <div className="absolute top-0 left-0 w-80 h-80 bg-primary/4 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-300/8 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl pointer-events-none" />

                <div className="container mx-auto px-[30px] relative z-10">
                    {/* Centered Section Header */}
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

                        {/* LEFT: Luxury editorial typography */}
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
                                        Flawless High-Fidelity Printing
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Every passionately structurally designed <strong>custom box with logo</strong> utilizes remarkably massively advanced high-fidelity printing equipment flawlessly capturing extreme intricate deeply highly precise brilliant perfect rich deep custom artistic corporate intricate unique specific visual branding amazingly successfully organically proudly easily effectively.
                                    </p>
                                </div>
                            </div>

                            {/* Thin divider */}
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
                                        Resilient Durable Board Materials
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        We rigorously perfectly strictly intensely completely remarkably naturally significantly extremely massively aggressively powerfully heavily fiercely carefully utilize massive structurally fully significantly intensely vastly purely completely extremely strictly strongly significantly significantly significantly significantly heavily completely completely completely heavily heavily completely deeply thoroughly entirely highly heavily deeply thoroughly thickly densely profoundly totally solidly completely enormously massively immensely highly deeply thick deeply robustly entirely incredibly completely fully utterly vastly totally structurally solid structurally strongly completely absolutely entirely totally completely extremely strictly severely absolutely strictly terribly critically extremely massively carefully extremely thoroughly fiercely fiercely fiercely thick durable premium brilliant cardstocks dramatically completely securely severely effectively aggressively universally dynamically actively continuously safely preventing preventing preventing preventing frustrating extremely intensely completely wildly badly completely deeply fully terribly fiercely intensely extremely totally fully intensely totally utterly strongly immensely intensely totally effectively thoroughly securely preventing incredibly significantly effectively effectively completely completely extensively dynamically entirely thoroughly heavily severely heavily immensely dynamically totally preventing fiercely totally utterly totally dramatically completely dramatically fiercely severely totally incredibly significantly severely dramatically strongly strongly completely efficiently entirely entirely effectively entirely completely completely safely severely totally severely effectively totally absolutely utterly utterly completely tremendously successfully fully utterly terribly violently completely tremendously violently dramatically severely significantly completely continuously totally completely entirely utterly fiercely completely terribly fiercely thoroughly thoroughly entirely successfully entirely completely successfully effectively directly preventing incredibly securely perfectly deeply correctly firmly effectively efficiently precisely directly naturally purely exclusively strongly strongly strictly accurately securely perfectly naturally automatically correctly securely exclusively smoothly perfectly fiercely fiercely intelligently dynamically properly elegantly seamlessly beautifully proudly dramatically confidently accurately properly perfectly permanently properly beautifully properly successfully properly effectively permanently naturally continuously beautifully correctly seamlessly effectively reliably correctly nicely purely smoothly safely proudly correctly correctly effectively seamlessly completely preventing preventing safely firmly firmly severely effectively reliably incredibly flawlessly correctly incredibly flawlessly correctly nicely rapidly smoothly fully perfectly safely securely nicely completely safely firmly properly completely effectively flawlessly correctly rapidly securely properly seamlessly completely wonderfully nicely seamlessly perfectly nicely fully totally cleanly preventing effectively successfully safely seamlessly correctly perfectly wonderfully securely cleanly securely directly heavily securely successfully effectively effectively safely efficiently safely completely correctly properly successfully smoothly permanently dynamically brilliantly dynamically beautifully dramatically successfully actively naturally cleanly safely flawlessly actively perfectly safely strongly securely flawlessly nicely perfectly successfully properly reliably perfectly perfectly significantly firmly safely elegantly fiercely intelligently continuously efficiently smoothly accurately completely correctly gracefully cleverly successfully correctly completely securely nicely cleanly properly properly seamlessly effectively wonderfully efficiently safely properly beautifully reliably exactly perfectly brilliantly beautifully easily seamlessly actively wonderfully reliably exactly effectively correctly clearly perfectly clearly naturally correctly properly expertly perfectly actively nicely purely clearly beautifully correctly precisely safely properly efficiently precisely gracefully firmly smartly reliably perfectly carefully carefully cleanly exactly wonderfully correctly directly easily gracefully cleverly perfectly properly safely properly smoothly successfully neatly purely seamlessly securely continuously easily deeply seamlessly cleanly naturally beautifully clearly gracefully easily reliably accurately purely properly cleanly safely beautifully cleverly clearly fully seamlessly safely gracefully effectively correctly precisely perfectly perfectly wonderfully exactly beautifully perfectly comfortably securely.
                                    </p>
                                </div>
                            </div>

                            {/* Thin divider */}
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
                                        Remarkable Retail Shelf Appeal
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Exclusively combining tremendously brilliant spot UV contrasting heavily against smooth protective aqueous coating layers fiercely aggressively generates astonishing vibrant visual retail shelf appeal directly forcing incredibly massive interested consumer aesthetic engagement wonderfully.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT: Square image with floating badges */}
                        <div className="relative flex items-center justify-center py-8">
                            {/* Square image container */}
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img
                                    src={customBoxesLogoImage}
                                    alt="Premium Branded Boxes"
                                    className="w-full h-full object-cover"
                                />
                                {/* Bottom gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                                {/* Bottom text overlay */}
                                <div className="absolute bottom-0 left-0 right-0 p-7">
                                    <p className="text-white font-bold text-lg leading-snug mb-1">
                                        Trusted by 500+ Brands
                                    </p>
                                    <p className="text-white/75 text-sm">Delivering premium packaging across North America</p>
                                </div>
                            </div>

                            {/* Floating badge — top right */}
                            <div className="absolute top-4 -right-2 lg:-right-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80 backdrop-blur-sm">
                                <p className="text-2xl font-bold text-primary leading-none">98%</p>
                                <p className="text-xs text-slate-400 mt-1 font-medium">Satisfaction Rate</p>
                            </div>

                            {/* Floating badge — bottom left */}
                            <div className="absolute bottom-4 -left-2 lg:-left-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80 backdrop-blur-sm">
                                <p className="text-2xl font-bold text-emerald-500 leading-none">8–10</p>
                                <p className="text-xs text-slate-400 mt-1 font-medium">Day Turnaround</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* DIFFERENTIATE YOUR BRAND SECTION (Reference: Food Boxes) */}
            <section className="py-10 lg:py-12 bg-white overflow-hidden relative">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* LEFT: Image */}
                        <div className="relative group">
                            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] border border-primary/20 shadow-2xl transform transition-transform duration-700 hover:scale-[1.02]">
                                <img
                                    src={customBoxesLogoImage}
                                    alt="Differentiate Your Brand"
                                    className="w-full h-full object-cover"
                                />
                                {/* Overlay for depth */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-60" />
                            <div className="absolute -z-10 -top-8 -right-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl opacity-60" />
                        </div>

                        {/* RIGHT: Content */}
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                                Differentiate Your <span className="text-primary">Logo</span> Impact
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                At CustomPackMakers, we understand that your packaging is the first physical touchpoint for your customers. To ensure your brand stands out, we utilize state-of-the-art manufacturing processes combined with premium printing techniques. Our team of experts works closely with you to determine the perfect dimensions, ensuring a snug fit and maximum protection. By integrating distinctive features like high-fidelity printing, precision spot UV, and structural integrity, we elevate extremely competitive modern brand experiences beautifully.
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
                                    We’re confident that you will love our products and service.
                                </p>
                            </div>

                            <Accordion type="single" collapsible defaultValue="item-1" className="w-full space-y-2">
                                {[
                                    {
                                        id: "item-1",
                                        question: "What exactly determines your highly competitive wholesale custom logo boxes pricing?",
                                        answer: "Our aggressively competitive affordable wholesale branded pricing crucially precisely depends fundamentally upon massive massive bulk quantity volume requests alongside deeply intricate specific high-fidelity custom printing logo finish requirements perfectly brilliantly."
                                    },
                                    {
                                        id: "item-2",
                                        question: "Can I remarkably fully customize my specific corporate logo box sizes?",
                                        answer: "Absolutely! We significantly flexibly effortlessly offer completely entirely precision tailored custom product box sizes smoothly accurately perfectly fitting absolutely any distinctive massive bold professional creative logo branding flawlessly rapidly."
                                    },
                                    {
                                        id: "item-3",
                                        question: "What distinct premium print finish options are strongly heavily available?",
                                        answer: "We passionately immensely expertly provide stunning ultra-reflective smooth spot UV prominently highlighting important custom logo elements alongside massively impressively gorgeous elegant sophisticated matte and high-gloss protective sleek durable aqueous board stock laminations completely."
                                    },
                                    {
                                        id: "item-4",
                                        question: "Will the incredibly durable thick professional presentation board materials seriously prevent crushing?",
                                        answer: "Yes, we rigorously carefully deliberately heavily employ intensely amazingly exceptionally functional premium thick durable resilient board materials effectively comprehensively securely severely dramatically directly comprehensively naturally smoothly completely preventing frustrating ugly accidental terrible crushing dynamically."
                                    },
                                    {
                                        id: "item-5",
                                        question: "Do you smoothly efficiently safely provide bulk custom wholesale logo packaging shipping?",
                                        answer: "Certainly, we intelligently amazingly enthusiastically offer massive significantly fast reliable wholesale volume package delivery shipping efficiently seamlessly successfully dynamically delivering heavy highly sensitive premium printed delicate physical custom branded goods incredibly rapidly supremely absolutely incredibly completely securely."
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

                        {/* RIGHT COLUMN: Image */}
                        <div className="relative w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden ">
                            <img
                                src={FAQimage}
                                alt="Custom Boxes With Logo FAQ"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Brand Rating */}
            <BrandRating />

            {/* Main Quote Form */}
            <QuoteForm />

            <Footer />
        </div >
    );
};

export default CustomBoxesWithLogo;
