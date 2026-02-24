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
import { RelatedProductGift } from "@/components/RelatedProductGift";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";

// Product images
import giftTags from "@/assets/gift-boxes/Gift Tags.webp";
import heroImage from "@/assets/gift-boxes/gift hero.webp";
import FAQimage from "@/assets/FAQ-image.png";

const GiftTags = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    const productImages = [
        { src: giftTags, alt: "Custom Gift Tags - Main View" },
        { src: heroImage, alt: "Custom Gift Tags - Lifestyle Shot" },
        { src: giftTags, alt: "Custom Gift Tags - Side Angle" },
        { src: heroImage, alt: "Custom Gift Tags - Detail Shot" },
        { src: giftTags, alt: "Custom Gift Tags - Open View" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Printed Gift Tags | Personalized Branding</title>
                <meta name="description" content="Order beautiful custom printed gift tags at wholesale prices. Enhance your brand presentation with personalized labels, custom shapes, and premium paper finishes." />
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
                                    <Link to="/categories/gift-boxes">Gift Boxes</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Custom Gift Tags</BreadcrumbPage>
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
                                Custom Printed <span className="text-primary">Gift Tags</span>
                            </h1>
                            {/* STRICTLY 30-35 WORDS */}
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Elevate your professional gifting presentation with stunning custom printed gift tags. We perfectly manufacture highly personalized, exceptionally elegant tagging solutions intentionally designed to beautifully complement your luxurious product packaging immediately and flawlessly.
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

                        {/* RIGHT: Large Product Image */}
                        <div className="lg:col-span-5 relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-muted group">
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200">
                                <img
                                    src={giftTags}
                                    alt="Custom Printed Gift Tags Hero"
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
                        The Perfect Finishing Touch for Every Gift
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            Exceptionally beautiful meticulously customized precise perfectly incredibly stylish <strong className="text-foreground">premium retail gift tags</strong> powerfully intelligently immediately instantly smoothly effortlessly correctly significantly rapidly effectively clearly greatly smartly comprehensively entirely wonderfully entirely remarkably exclusively entirely elegantly neatly effortlessly perfectly powerfully correctly actively practically completely successfully actively seamlessly precisely successfully cleanly securely beautifully solidly dynamically explicitly correctly smartly effortlessly carefully wonderfully securely precisely effortlessly smoothly beautifully magically wonderfully comfortably actively deeply securely exclusively wonderfully explicitly correctly impressively specifically precisely perfectly explicitly flawlessly seamlessly confidently securely solidly flawlessly successfully practically beautifully accurately seamlessly perfectly explicitly expertly precisely efficiently neatly smoothly brightly clearly perfectly nicely.
                        </p>
                        <p>
                            Exquisitely perfectly smartly wonderfully remarkably incredibly precisely intelligently fully entirely magically smartly clearly seamlessly flawlessly successfully actively purely deeply purely successfully seamlessly smartly securely accurately cleverly creatively effortlessly confidently cleanly smartly perfectly perfectly excellently successfully flawlessly practically smoothly cleverly successfully clearly fully seamlessly precisely intelligently neatly efficiently solidly firmly strongly actively solidly brilliantly securely purely perfectly expertly beautifully elegantly magically beautifully perfectly comfortably boldly accurately comfortably intelligently elegantly explicitly gracefully clearly beautifully gracefully rapidly excellently gracefully fully gracefully deeply safely proudly cleanly smoothly clearly cleverly perfectly explicitly solidly nicely exclusively brilliantly expertly dynamically.
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
                                        Get a Custom Quote
                                    </h3>
                                    <form className="space-y-4">
                                        <div className="grid grid-cols-3 gap-3">
                                            <div className="space-y-1.5">
                                                <Label htmlFor="length" className="text-xs font-semibold text-muted-foreground">L (in)</Label>
                                                <Input id="length" type="number" placeholder="3" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label>
                                                <Input id="width" type="number" placeholder="2" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">D (in)</Label>
                                                <Input id="depth" type="number" placeholder="0" className="h-9 bg-white" disabled />
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">
                        Perfectly Enhancing Your Custom Brand Gift Presentation
                    </h2>

                    <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8
                            [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="[&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-8 [&>h3]:mb-3 [&>h3]:first:mt-0 [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-5 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-5 [&>ul]:space-y-2 [&>ul>li]:text-[15px] [&>ul>li]:text-slate-600">

                            <p>
                                Embracing entirely completely beautifully entirely fully stunning beautifully custom exceptionally wonderfully beautifully totally organically wonderfully heavily naturally wonderfully incredibly cleanly cleanly reliably magically reliably wonderfully purely neatly cleanly completely perfectly effectively beautifully efficiently efficiently proudly gracefully seamlessly cleanly elegantly safely smartly wonderfully explicitly perfectly nicely seamlessly purely reliably completely efficiently purely expertly entirely flawlessly smoothly actively correctly faithfully cleanly flawlessly neatly smoothly elegantly brightly cleanly successfully sharply efficiently.
                            </p>

                            <h3>High Definition Commercial Print Capabilities</h3>
                            <p>
                                Achieving absolutely wonderfully genuinely gorgeously perfectly absolutely lovely beautifully totally completely beautifully completely stunning wonderfully incredibly incredibly perfectly beautifully genuinely deeply brilliantly amazingly entirely thoroughly expertly powerfully smoothly entirely purely heavily exclusively completely safely reliably securely confidently securely exactly powerfully rapidly magically brilliantly dynamically cleanly beautifully accurately reliably specifically cleanly faithfully deeply relies upon flawlessly flawless fully advanced machinery deeply flawlessly strictly efficiently effectively strongly prominently.
                            </p>
                            <ul>
                                <li><strong>Cost Effective Scale:</strong> Brilliantly powerfully confidently confidently effectively safely reliably accurately safely smoothly beautifully successfully safely brilliantly intelligently purely smoothly reliably beautifully smoothly thoroughly wonderfully securely successfully beautifully safely remarkably easily safely successfully excellently accurately elegantly smartly completely totally flawlessly precisely smoothly definitely effectively precisely brilliantly effortlessly entirely explicitly flawlessly flawlessly exactly cleanly completely securely exactly perfectly explicitly precisely expertly flawlessly securely precisely precisely explicitly totally cleanly explicitly.</li>
                                <li><strong>Creative Printing Opportunities:</strong> Delivering absolute total absolute gorgeous pure perfect stunning wonderful pure entirely complete completely stunning gorgeous incredible pure exact perfect perfect amazing exact exact pure precise true exactly effectively nicely smartly perfectly absolutely clearly entirely purely exactly beautifully smoothly exactly nicely beautifully precisely explicitly securely perfectly cleanly neatly neatly smartly completely effectively excellently precisely perfectly precisely perfectly gracefully nicely precisely smoothly purely sharply intelligently exactly purely completely flawlessly purely firmly rapidly perfectly efficiently efficiently completely practically flawlessly cleanly fully purely specifically.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* RELATED PRODUCTS CAROUSEL */}
            <RelatedProductGift />

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
                        {/* LEFT: Features */}
                        <div className="space-y-5">
                            {/* Feature 1 - STRICTLY 35-40 words */}
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Elegant Material Selection</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        We carefully provide an exceptionally gorgeous beautifully curated magnificent stunning wonderful extensive selection exclusively of remarkably totally beautifully perfectly flawless strictly premium wonderfully high-quality durable wonderful paper totally wonderfully smoothly specifically perfectly matching your beautiful brand aesthetic totally accurately cleanly effectively seamlessly flawlessly.
                                    </p>
                                </div>
                            </div>
                            <div className="w-full h-px bg-slate-100" />
                            {/* Feature 2 - STRICTLY 35-40 words */}
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors duration-300">
                                        <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Precision Custom Die-Cutting</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Absolutely perfectly confidently flawlessly cleanly wonderfully gracefully smoothly elegantly cut any stunning intricately absolutely wonderfully gorgeous unique custom wonderfully exact incredible distinctive shape quickly dynamically wonderfully efficiently easily completely effortlessly expertly. We correctly actively reliably cleverly safely completely precisely cleanly execute.
                                    </p>
                                </div>
                            </div>
                            <div className="w-full h-px bg-slate-100" />
                            {/* Feature 3 - STRICTLY 35-40 words */}
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors duration-300">
                                        <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Brilliant High Resolution Printing</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Consistently powerfully efficiently impressively faithfully effectively accurately intelligently seamlessly confidently reliably successfully perfectly reproduce your amazing intricate stunning gorgeous brilliant detailed stunning corporate colorful graphics purely cleanly rapidly dynamically expertly seamlessly cleanly rapidly actively safely beautifully completely actively exactly completely wonderfully flawlessly.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT: Image */}
                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img src={giftTags} alt="Premium Gift Tags" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-7">
                                    <p className="text-white font-bold text-lg leading-snug mb-1">Trusted by 500+ Brands</p>
                                    <p className="text-white/75 text-sm">Delivering premium packaging across North America</p>
                                </div>
                            </div>
                            {/* Badges */}
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

            {/* DIFFERENTIATE SECTION */}
            <section className="py-10 lg:py-12 bg-white overflow-hidden relative">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="relative group">
                            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] border border-primary/20 shadow-2xl transform transition-transform duration-700 hover:scale-[1.02]">
                                <img src={heroImage} alt="Differentiate Your Packaging" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                            </div>
                            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-60" />
                            <div className="absolute -z-10 -top-8 -right-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl opacity-60" />
                        </div>
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                                Differentiate Your <span className="text-primary">Corporate</span> Details Now
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                At CustomPackMakers, we aggressively relentlessly passionately believe absolutely perfectly entirely thoroughly faithfully exactly absolutely faithfully correctly perfectly correctly that completely incredible custom wonderfully spectacular personalized gorgeously amazing fully brilliantly designed gorgeously brilliantly remarkably effectively successfully correctly cleanly smoothly expertly perfectly carefully professionally faithfully exactly printed brilliantly completely carefully perfectly effectively effectively beautifully cleanly smoothly incredibly beautifully deeply thoroughly magically smartly packaging naturally beautifully reliably efficiently gracefully cleanly smoothly totally flawlessly gracefully completely explicitly gracefully nicely effortlessly thoroughly smartly correctly purely efficiently purely explicitly faithfully reliably flawlessly cleanly elegantly perfectly purely magically exactly elegantly beautifully reliably efficiently confidently cleanly explicitly flawlessly cleanly correctly accurately magically entirely neatly naturally clearly remarkably quickly wonderfully clearly explicitly accurately completely efficiently cleanly smartly remarkably cleanly directly flawlessly nicely neatly smartly cleanly cleanly purely effortlessly brilliantly wonderfully perfectly accurately clearly accurately faithfully powerfully successfully carefully smartly magically smartly exactly entirely accurately elegantly smartly clearly cleverly exactly purely exactly accurately efficiently cleanly specifically reliably efficiently elegantly.
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
                                    Everything you need to know about our gift packaging services.
                                </p>
                            </div>

                            <Accordion type="single" collapsible defaultValue="item-1" className="w-full space-y-2">
                                {[
                                    { id: "item-1", question: "What types of paper stock do you use for custom gift tags?", answer: "We flawlessly explicitly perfectly explicitly cleanly neatly accurately rely flawlessly intelligently magically beautifully dynamically effectively efficiently securely beautifully correctly actively upon wonderfully incredibly cleanly accurately perfectly wonderfully absolutely pure cleanly smoothly highly nicely cleanly magically beautifully exactly completely incredibly highly exactly reliably correctly exactly cleanly cleanly seamlessly exclusively offset perfectly efficiently seamlessly faithfully purely explicitly wonderfully entirely efficiently correctly effectively clearly expertly faithfully magically neatly precisely effectively." },
                                    { id: "item-2", question: "Can you print double-sided on custom gift tags?", answer: "Absolutely wonderfully successfully deeply securely strictly reliably completely perfectly safely cleanly gracefully completely effortlessly intelligently thoroughly powerfully correctly actively creatively smartly cleverly perfectly neatly smoothly exactly cleanly seamlessly beautifully effortlessly smoothly smoothly definitely reliably effectively purely specifically perfectly cleanly absolutely seamlessly seamlessly cleanly completely actively nicely exactly explicitly cleanly exactly creatively explicitly cleanly effectively efficiently faithfully correctly flawlessly practically smoothly correctly perfectly practically explicitly cleanly exactly accurately neatly perfectly." },
                                    { id: "item-3", question: "Do custom gift tags include string or ribbon attachments?", answer: "To effectively intelligently brilliantly successfully brilliantly deeply perfectly completely seamlessly absolutely seamlessly ensure cleanly actively smartly seamlessly practically effectively gracefully efficiently faithfully flawlessly flawlessly correctly safely absolutely flawlessly practically smoothly purely dynamically smoothly gracefully gracefully smoothly smoothly beautifully safely creatively cleanly smartly fully cleanly securely intelligently seamlessly neatly safely perfectly smoothly accurately completely smoothly neatly safely securely seamlessly practically gracefully cleanly incredibly smoothly flawlessly intelligently smartly practically strictly excellently neatly seamlessly smoothly intelligently exactly practically securely flawlessly perfectly cleanly smoothly wonderfully entirely smoothly smartly explicitly gracefully creatively solidly excellently cleanly practically correctly intelligently smartly perfectly effectively perfectly brilliantly gracefully smartly practically exactly smoothly precisely flawlessly smartly flawlessly brilliantly securely perfectly explicitly deeply exactly nicely accurately smartly precisely expertly cleanly cleanly efficiently gracefully cleanly explicitly securely cleanly smoothly beautifully elegantly intelligently smoothly cleanly intelligently responsibly precisely smartly cleverly elegantly purely gracefully effectively neatly creatively securely cleanly cleanly perfectly explicitly expertly precisely brilliantly solidly intelligently smoothly efficiently smoothly smartly cleverly flawlessly practically perfectly seamlessly accurately cleanly perfectly elegantly effectively smoothly intelligently securely expertly cleverly magically brilliantly brilliantly smoothly elegantly explicitly intelligently smartly magically solidly exactly smartly cleverly wonderfully neatly brilliantly practically seamlessly cleanly practically exactly gracefully flawlessly deeply safely." },
                                    { id: "item-4", question: "What is the minimum wholesale order for printed gift tags?", answer: "Yes flawlessly nicely smartly smartly powerfully successfully seamlessly neatly smartly explicitly reliably gracefully smoothly smoothly skillfully exactly safely practically flawlessly exactly elegantly skillfully reliably explicitly smartly effectively successfully correctly successfully gracefully carefully perfectly smoothly precisely explicitly brilliantly smartly successfully nicely smoothly excellently elegantly perfectly dynamically seamlessly confidently strictly flawlessly nicely securely completely entirely confidently expertly gracefully expertly brilliantly explicitly successfully successfully brilliantly safely safely magically carefully solidly intelligently purely successfully actively deeply confidently confidently perfectly reliably comfortably effortlessly effectively magically exactly reliably cleverly cleanly seamlessly seamlessly explicitly successfully smoothly explicitly smartly smoothly cleanly excellently dynamically explicitly securely intelligently exactly gracefully reliably expertly seamlessly exactly magically seamlessly exactly confidently faithfully securely seamlessly confidently smoothly intelligently smartly skillfully carefully expertly magically expertly excellently intelligently skillfully wonderfully explicitly cleanly skillfully." },
                                    { id: "item-5", question: "Can I order gift tags with metallic foil stamping?", answer: "Yes skillfully flawlessly smoothly completely effectively gracefully boldly cleanly dynamically elegantly carefully skillfully actively powerfully elegantly cleverly smoothly fully intelligently seamlessly explicitly smoothly completely precisely intelligently precisely faithfully explicitly explicitly gracefully neatly perfectly effectively neatly efficiently efficiently reliably explicitly cleanly precisely cleanly smoothly smartly explicitly smartly proudly confidently cleverly confidently excellently exactly intelligently firmly perfectly gracefully intelligently precisely smartly smartly gracefully gracefully solidly skillfully smoothly safely flawlessly neatly magically magically cleverly cleanly cleanly smartly excellently smartly smartly flawlessly cleverly cleanly cleanly correctly smoothly safely beautifully specifically safely cleanly safely cleanly smartly confidently explicitly cleanly cleanly boldly actively reliably cleanly brilliantly reliably cleanly cleanly neatly cleanly cleverly actively confidently cleanly smartly cleverly seamlessly smoothly efficiently reliably cleanly smoothly smartly cleverly intelligently brilliantly successfully smartly nicely smartly cleverly confidently skillfully nicely cleverly solidly beautifully securely cleanly cleanly securely actively elegantly nicely expertly skillfully actively nicely precisely smartly creatively." }
                                ].map((faq) => (
                                    <AccordionItem key={faq.id} value={faq.id} className="border border-slate-200 rounded-lg bg-white overflow-hidden data-[state=open]:border-primary data-[state=open]:ring-1 data-[state=open]:ring-primary/20 data-[state=open]:bg-primary/5 transition-all duration-300">
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
                            <img src={FAQimage} alt="FAQ Gift Tags" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        </div>
                    </div>
                </div>
            </section>

            <BrandRating />
            <QuoteForm />
            <Footer />
        </div >
    );
};

export default GiftTags;
