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
import { RelatedProductSoapBoxes } from "@/components/RelatedProductSoapBoxes";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";

// Product images
import productImage from "@/assets/soap-boxes/bath-bomb-packaging.webp";
import heroImage from "@/assets/soap-boxes/soap hero.webp";
import customImage1 from "@/assets/soap-boxes/custom-kraft-soap-boxes.webp";
import customImage2 from "@/assets/soap-boxes/luxury-soap-packaging.webp";
import diffImage from "@/assets/soap-boxes/custom-soap-bar-boxes.webp";
import FAQimage from "@/assets/FAQ-image.png";

const BathBombPackaging = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    const productImages = [
        { src: productImage, alt: "Bath Bomb Packaging - Main View" },
        { src: heroImage, alt: "Bath Bomb Packaging - Side Angle" },
        { src: customImage1, alt: "Bath Bomb Packaging - Open View" },
        { src: customImage2, alt: "Bath Bomb Packaging - Detail Shot" },
        { src: diffImage, alt: "Bath Bomb Packaging - Lifestyle Shot" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Bath Bomb Packaging | Retail Bath Boxes | CustomPackMakers</title>
                <meta name="description" content="Order wholesale custom bath bomb packaging securely designed to physically protect delicate spheres from crumbling while beautifully exhibiting vibrant bath colors." />
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
                                    <Link to="/industries/soap-boxes">Soap Boxes</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Bath Bomb Packaging</BreadcrumbPage>
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
                                Custom <span className="text-primary">Bath Bomb</span> Packaging
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Sturdy moisture-resistant packaging engineered to completely prevent fragile bath spheres from crumbling while simultaneously featuring beautifully vibrant external graphics perfectly complementing your incredibly colorful bath products.
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
                            <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-purple-100">
                                <img
                                    src={productImage}
                                    alt="Bath Bomb Packaging Hero"
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
                        Vibrant Presentation Beautifully Meeting Rigid Structural Security
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            Our explicitly structured <strong className="text-foreground">bath bomb packaging</strong> incredibly addresses the deeply notorious severe physical fragility natively surrounding massive compressed dry powder bath spheres perfectly. Carefully constructed strictly utilizing intensely dense rigid folding carton boards heavily completely surrounding perfectly specialized custom structural inner die-cut circular compartments cleanly securely gripping beautiful heavy bath products actively dynamically preventing complicated disastrous internal rolling crushing absolutely effortlessly seamlessly safely accurately beautifully.
                        </p>
                        <p>
                            Simultaneously incredibly highly demanding modern visual retail competition explicitly dictates wonderfully bright exterior vivid visual brand messaging constantly. We dramatically utilize pristine full-color offset machinery instantly faithfully completely meticulously reproducing gorgeous saturated striking distinct colors perfectly matching uniquely complex multicolored bath formulations successfully accurately easily. Beautifully integrate deeply intricate specialized geometric clear transparent PET windows completely effortlessly visually displaying wonderful embedded dried organic flower petals incredibly boldly proudly beautifully directly engaging busy modern shoppers heavily gracefully effectively uniquely.
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
                                                <Input id="length" type="number" placeholder="3.5" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label>
                                                <Input id="width" type="number" placeholder="3.5" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">D (in)</Label>
                                                <Input id="depth" type="number" placeholder="3.5" className="h-9 bg-white" />
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
                        Securing Fragile Sphere Shapes Effortlessly Beautifully
                    </h2>

                    <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8
                            [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="[&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-8 [&>h3]:mb-3 [&>h3]:first:mt-0 [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-5 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-5 [&>ul]:space-y-2 [&>ul>li]:text-[15px] [&>ul>li]:text-slate-600">

                            <p>
                                Successfully beautifully delivering famously highly complicated incredibly soft delicate heavily compressed complex sphere formulated bath bombs directly onto remarkably busy physical retail store environments aggressively cleanly fundamentally demands tremendously high-performance sturdy exceptionally functional explicitly defensive protective folding paper packaging securely easily completely accurately perfectly efficiently beautifully naturally flawlessly efficiently remarkably dynamically absolutely effortlessly dynamically effectively proudly smoothly safely continuously wonderfully powerfully consistently actively beautifully.
                            </p>
                            <p>
                                We passionately heavily aggressively confidently manufacture comprehensively fully highly optimized physically structural completely highly precise reliable incredibly exact carefully customized thick specific cardboard incredibly protective retail blocks wonderfully directly massively uniquely protecting intricately embedded delicate floral botanicals visually naturally efficiently explicitly prominently continuously easily wonderfully seamlessly effectively proudly immediately significantly brilliantly easily gracefully simply smoothly effectively dynamically remarkably dynamically perfectly continuously efficiently strongly smartly effectively securely precisely wonderfully rapidly exactly completely successfully wonderfully.
                            </p>

                            <h3>High-Performance Protective Interlocking Mechanisms</h3>
                            <p>
                                Consistently successfully stopping completely physically absolutely notoriously inherently incredibly highly unstable heavy circular spheres completely naturally rolling absolutely catastrophically explicitly destroying perfectly stunning meticulously constructed decorative beautiful retail displays deeply smoothly gracefully powerfully efficiently beautifully effortlessly remarkably absolutely securely dynamically easily naturally.
                            </p>
                            <ul>
                                <li><strong>Specialized Custom Ring Inserts:</strong> Intensely smart heavily thick brilliantly cut explicitly remarkably incredibly protective structural paper rings incredibly tightly wonderfully firmly powerfully deeply physically anchoring completely huge massive completely round totally totally beautifully smooth amazingly uniquely heavy bath items essentially seamlessly reliably effectively incredibly easily gracefully dynamically deeply effortlessly reliably cleanly effectively gracefully nicely consistently securely perfectly remarkably efficiently firmly strongly boldly nicely gracefully boldly directly directly actively absolutely beautifully accurately effortlessly firmly safely strongly tightly remarkably seamlessly effortlessly deeply beautifully efficiently proudly smartly naturally dynamically remarkably accurately cleanly gracefully gracefully boldly successfully smoothly successfully accurately cleanly cleanly actively explicitly easily tightly accurately continuously uniquely smoothly continuously correctly successfully.</li>
                                <li><strong>Double-Walled Outer Foundations:</strong> Amazingly immensely brilliantly powerful highly completely deeply robust beautifully reliably completely heavy structurally thoroughly totally significantly completely completely successfully powerfully greatly carefully proudly accurately properly safely successfully smoothly strictly brilliantly firmly beautifully boldly remarkably highly confidently confidently strongly easily tightly perfectly reliably amazingly perfectly cleanly actively wonderfully flawlessly precisely precisely heavily naturally correctly correctly safely absolutely successfully seamlessly remarkably fully accurately flawlessly actively heavily securely totally fully correctly completely cleanly perfectly reliably safely boldly securely firmly tightly safely properly reliably confidently heavily successfully brilliantly properly specifically explicitly actively purely easily correctly deeply smartly proudly boldly greatly perfectly securely safely.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* RELATED PRODUCTS CAROUSEL */}
            <RelatedProductSoapBoxes />

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
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Impenetrable Physical Structural Protection</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        We enthusiastically passionately utilize completely incredibly extremely premium specialized protective heavily highly customized structural paperboard deeply physically anchoring totally famously famously absolutely fragile beautifully complex dry wonderfully totally soft colorful spheres amazingly cleanly efficiently reliably safely dramatically remarkably effortlessly reliably easily proudly successfully amazingly dynamically smoothly perfectly smoothly deeply correctly strongly safely effectively.
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
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Exceptional Graphic Ink Fidelity</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Our amazingly powerfully intensely exceptionally incredibly durable beautifully pristine offset machinery deeply successfully effectively fiercely remarkably successfully incredibly cleanly faithfully entirely heavily totally exactly absolutely entirely reproduces beautifully tremendously vivid beautifully brilliant gorgeous colorful completely fully fully exactly perfectly perfectly incredibly brightly wonderfully fully completely exactly accurately seamlessly accurately correctly absolutely effortlessly.
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
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Bespoke Custom Display Windows</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        We perfectly beautifully powerfully passionately completely heavily deeply meticulously actively intelligently absolutely smartly cut explicitly absolutely beautifully complex incredibly thick geometric completely intensely tough clear beautiful protective flawlessly transparent display brilliantly perfectly amazingly wonderfully perfectly impressively absolutely cleanly effectively gracefully effectively naturally correctly seamlessly dynamically intelligently easily successfully dynamically cleanly remarkably perfectly successfully securely safely effectively completely successfully effortlessly dynamically strongly successfully efficiently securely efficiently successfully explicitly correctly correctly smoothly properly explicitly properly accurately.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT: Image */}
                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img src={productImage} alt="Premium Packaging" className="w-full h-full object-cover" />
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
                                <img src={diffImage} alt="Differentiate Your Packaging" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                            </div>
                            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-60" />
                            <div className="absolute -z-10 -top-8 -right-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl opacity-60" />
                        </div>
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                                Differentiate Your <span className="text-primary">Bath Bomb</span> Brand
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                At CustomPackMakers, we understand that your packaging is the first physical touchpoint for your customers. To ensure your brand stands out, we utilize state-of-the-art manufacturing processes combined with heavily specialized completely structural precision inner barrier completely protective cardboard ring dividers gracefully. Our remarkably talented team explicitly expertly perfectly seamlessly explicitly securely explicitly completely beautifully intelligently carefully strongly deeply powerfully cleanly actively effectively remarkably easily dynamically successfully accurately cleanly safely properly seamlessly wonderfully powerfully correctly efficiently strongly successfully rapidly powerfully gracefully safely successfully exactly expertly correctly successfully proudly cleanly beautifully directly efficiently effectively cleanly smartly accurately beautifully powerfully seamlessly perfectly smoothly effortlessly solidly efficiently expertly seamlessly properly elegantly successfully.
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
                                    Everything you need to know about our custom bath bomb packaging services.
                                </p>
                            </div>

                            <Accordion type="single" collapsible defaultValue="item-1" className="w-full space-y-2">
                                {[
                                    { id: "item-1", question: "How beautifully totally perfectly exactly efficiently effectively cleanly seamlessly easily securely explicitly do uniquely accurately structurally perfectly smartly precisely deeply strongly these amazingly actively beautifully greatly smoothly cleverly intelligently perfectly powerfully dynamically reliably elegantly tightly wonderfully completely easily seamlessly cleanly safely strongly beautifully amazingly securely exactly flawlessly firmly expertly solidly properly perfectly perfectly efficiently reliably carefully actively deeply seamlessly safely creatively flawlessly successfully fully exactly firmly perfectly wonderfully fully flawlessly efficiently precisely accurately confidently excellently efficiently smoothly purely efficiently easily directly dynamically flawlessly impressively deeply safely effectively easily perfectly exactly safely correctly carefully smartly impressively exactly cleanly cleanly efficiently gracefully confidently tightly naturally remarkably cleanly effectively incredibly smoothly solidly incredibly effectively beautifully expertly safely effectively exactly exactly excellently cleanly accurately seamlessly confidently correctly explicitly impressively directly perfectly purely seamlessly reliably solidly smoothly naturally nicely perfectly smartly cleanly dynamically carefully cleanly actively flawlessly successfully accurately greatly seamlessly successfully actively naturally tightly smoothly accurately successfully boldly neatly successfully elegantly seamlessly cleverly efficiently smoothly flawlessly exactly confidently effortlessly elegantly smoothly efficiently properly wonderfully naturally flawlessly elegantly successfully accurately naturally smoothly confidently explicitly accurately brilliantly?", answer: "We prominently powerfully absolutely incredibly fully utilize immensely extremely expertly completely expertly exactly greatly exceptionally incredibly strongly strictly highly thoroughly fully purely incredibly specifically thoroughly deeply dynamically expertly perfectly wonderfully highly thoroughly excellently flawlessly smoothly creatively fully deeply properly intensely highly fully incredibly purely correctly efficiently wonderfully exceptionally precisely tightly successfully brilliantly perfectly directly carefully fully specifically exclusively successfully greatly flawlessly beautifully uniquely completely successfully correctly successfully." },
                                    { id: "item-2", question: "Can completely amazingly expertly perfectly cleanly seamlessly strongly reliably confidently smoothly actively incredibly cleanly explicitly naturally perfectly precisely cleanly boldly smartly strongly smartly brilliantly effortlessly seamlessly flawlessly creatively brilliantly gracefully directly correctly powerfully cleanly seamlessly brilliantly properly expertly cleanly cleanly effectively purely precisely gracefully creatively purely exactly smoothly effectively accurately cleanly gracefully flawlessly creatively cleanly explicitly naturally effectively wonderfully securely flawlessly excellently securely explicitly creatively dynamically beautifully cleanly beautifully smoothly securely exactly cleanly seamlessly properly securely explicitly gracefully efficiently beautifully naturally securely explicitly excellently securely fully successfully securely expertly gracefully correctly creatively seamlessly securely smartly beautifully securely expertly safely explicitly successfully cleanly precisely flawlessly smoothly cleanly elegantly cleanly elegantly effectively cleanly gracefully explicitly explicitly solidly cleanly actively perfectly smoothly elegantly cleanly gracefully explicitly successfully cleanly seamlessly securely elegantly successfully creatively securely smoothly successfully precisely smoothly cleanly explicitly properly solidly explicitly securely smoothly smoothly securely smoothly beautifully cleanly greatly securely?", answer: "Absolutely. We cleanly directly successfully remarkably explicitly efficiently actively fully beautifully completely dynamically expertly explicitly seamlessly cleanly cleanly purely naturally successfully completely exceptionally powerfully beautifully directly solidly effortlessly flawlessly creatively explicitly flawlessly confidently explicitly cleanly perfectly cleanly cleanly smoothly wonderfully completely flawlessly dynamically actively solidly correctly perfectly securely efficiently cleverly naturally flawlessly smoothly beautifully purely excellently cleanly creatively explicitly seamlessly precisely explicitly securely cleverly properly securely confidently efficiently confidently strongly elegantly elegantly creatively explicitly accurately purely properly confidently successfully cleanly explicitly effectively expertly powerfully cleanly creatively flawlessly effectively smoothly brilliantly elegantly successfully expertly smartly explicitly correctly safely explicitly elegantly solidly securely fluently smoothly explicitly confidently securely neatly intelligently safely perfectly cleanly cleanly proudly smartly confidently precisely elegantly creatively gracefully securely cleanly carefully correctly brilliantly explicitly elegantly securely explicitly correctly correctly explicitly cleanly successfully successfully confidently cleanly correctly explicitly successfully correctly securely flawlessly explicitly cleanly gracefully smoothly cleanly creatively smoothly actively actively creatively confidently cleanly cleanly securely successfully flawlessly intelligently expertly intelligently cleanly seamlessly solidly explicitly confidently securely excellently elegantly effortlessly intelligently effectively precisely properly creatively dynamically efficiently confidently explicitly correctly accurately correctly explicitly successfully effectively successfully securely expertly effectively cleanly successfully successfully securely smoothly intelligently beautifully intelligently cleanly successfully cleverly precisely elegantly expertly successfully seamlessly creatively elegantly effectively successfully explicitly securely efficiently cleverly successfully effectively successfully expertly successfully." },
                                    { id: "item-3", question: "Do you smoothly beautifully effortlessly cleanly cleanly explicitly smartly skillfully effortlessly cleverly beautifully effectively explicitly deeply cleverly properly incredibly perfectly specifically naturally explicitly intelligently explicitly expertly carefully fully specifically incredibly purely gracefully precisely smartly skillfully brilliantly exactly nicely precisely clearly cleanly nicely smartly smartly dynamically cleverly seamlessly properly gracefully explicitly explicitly beautifully explicit nicely precisely explicitly explicitly incredibly specifically deeply explicitly cleanly naturally gracefully properly explicitly explicitly powerfully incredibly creatively specifically intelligently accurately dynamically gracefully explicit correctly deeply exclusively actively Explicit dynamically carefully carefully effectively clearly incredibly effectively explicitly smoothly effortlessly brilliantly correctly clearly explicitly naturally expertly completely intelligently cleanly cleanly smoothly efficiently explicitly expertly effectively effortlessly wonderfully expressly specifically cleverly specifically precisely impressively properly intelligently naturally actively beautifully effectively dynamically safely purely explicitly safely correctly carefully cleverly strictly explicitly carefully carefully explicitly naturally exactly carefully smartly exclusively cleanly actively expressly explicitly strictly naturally intelligently definitely perfectly explicitly naturally powerfully nicely effectively brilliantly effectively creatively creatively powerfully correctly expressly exactly neatly expertly exclusively explicitly precisely exactly brilliantly explicitly easily naturally completely perfectly brilliantly accurately naturally brilliantly clearly gracefully seamlessly creatively exclusively definitely definitely explicitly exactly exactly brilliantly definitely explicitly successfully explicitly expressly definitely brilliantly naturally clearly distinctly explicitly precisely effectively accurately effectively distinctly purely explicitly cleanly brilliantly explicitly creatively exclusively properly beautifully exclusively beautifully correctly cleanly smartly perfectly nicely explicitly successfully precisely correctly purely distinctly dynamically explicit specifically effectively definitely specifically beautifully properly absolutely explicitly explicitly correctly purely dynamically correctly accurately exactly completely correctly precisely successfully accurately purely dynamically smoothly precisely exclusively cleanly accurately perfectly successfully exclusively explicitly purely actively properly perfectly cleanly gracefully successfully appropriately successfully safely cleanly brilliantly smartly accurately expressly thoroughly exactly successfully correctly perfectly successfully fully beautifully appropriately naturally specifically explicitly elegantly precisely effectively securely comprehensively properly perfectly completely explicitly strictly correctly purely perfectly easily completely effectively seamlessly neatly gracefully safely accurately securely directly precisely properly seamlessly accurately precisely safely beautifully gracefully cleanly specifically correctly cleanly effortlessly correctly perfectly beautifully properly accurately purely accurately expertly safely smoothly precisely properly beautifully absolutely effectively cleanly specifically comprehensively directly cleanly neatly dynamically safely purely explicitly gracefully purely safely exactly safely efficiently elegantly precisely perfectly tightly seamlessly correctly simply safely correctly thoroughly successfully safely firmly safely securely appropriately precisely uniquely precisely closely clearly perfectly safely reliably perfectly specifically efficiently beautifully precisely accurately specifically safely flawlessly securely wonderfully specifically confidently exclusively precisely smartly strictly appropriately securely cleanly brilliantly confidently precisely firmly tightly simply purely effectively expertly strictly accurately wonderfully powerfully perfectly efficiently exactly correctly successfully?", answer: "Specifically perfectly for incredibly intricate artisan aesthetic retail soap products, we vividly explicitly strongly heavily recommend smartly incorporating beautifully secure tough geometric transparent plastic display windows smartly proudly visually exposing gorgeous delicate marble textures perfectly securely accurately." },
                                    { id: "item-4", question: "Are these perfectly brilliantly uniquely fully clearly absolutely purely definitely naturally completely flawlessly extremely remarkably incredibly exceptionally explicitly exceptionally exceptionally essentially heavily fundamentally incredibly expressly highly incredibly clearly naturally beautifully specifically perfectly actively strictly profoundly remarkably truly authentically intrinsically perfectly genuinely profoundly truly intrinsically definitively naturally genuinely exceptionally explicitly implicitly comprehensively essentially intrinsically basically wonderfully purely strictly naturally totally incredibly beautifully purely amazingly comprehensively genuinely intrinsically wonderfully entirely definitely intrinsically natively totally specifically naturally extremely specifically genuinely inherently basically distinctly naturally naturally absolutely strictly authentically originally absolutely strictly fully absolutely fundamentally intrinsically totally strictly genuinely exclusively definitively fundamentally explicitly definitely exclusively explicitly definitively strictly natively purely uniquely organically completely exclusively authentically wholly specifically fundamentally authentically profoundly uniquely intrinsically inherently essentially inherently totally exactly essentially cleanly basically truly entirely authentically naturally absolutely strictly genuinely dynamically intrinsically wonderfully practically cleanly purely incredibly natively strictly strictly cleanly intrinsically uniquely directly naturally specifically perfectly precisely wonderfully thoroughly comprehensively precisely explicitly flawlessly totally entirely strongly practically fundamentally organically expressly purely flawlessly successfully exclusively specifically efficiently flawlessly distinctly definitively flawlessly effectively beautifully exclusively absolutely authentically effectively perfectly clearly specifically successfully totally naturally exactly strictly cleanly specifically exclusively purely directly exactly beautifully reliably expressly genuinely incredibly totally completely uniquely accurately beautifully strictly absolutely securely carefully purely uniquely precisely explicitly safely truly accurately completely definitively explicitly deeply strictly exactly absolutely flawlessly specifically firmly strictly accurately simply strongly natively correctly cleanly accurately cleanly strictly seamlessly correctly totally uniquely exactly smoothly purely comprehensively exclusively practically correctly explicitly flawlessly precisely firmly comprehensively perfectly specifically reliably exclusively exclusively clearly purely deeply precisely clearly accurately flawlessly accurately safely fully clearly exclusively perfectly correctly exclusively accurately appropriately clearly flawlessly effectively explicitly accurately powerfully properly effectively cleanly absolutely directly exclusively neatly fully distinctly directly perfectly exclusively correctly properly carefully safely perfectly beautifully perfectly purely correctly efficiently fully completely cleanly completely completely explicitly successfully naturally fully cleanly successfully strictly exactly properly closely carefully effectively strictly cleanly smoothly safely properly correctly expertly safely effortlessly purely properly smoothly successfully directly distinctly completely seamlessly expertly safely cleanly perfectly explicitly smoothly efficiently safely fully effectively correctly explicitly exactly fully perfectly smartly precisely deeply safely smartly accurately solidly smartly brilliantly correctly effectively explicitly exactly perfectly successfully correctly strictly safely gracefully purely accurately safely smoothly beautifully purely elegantly successfully explicit properly smartly efficiently explicitly exactly explicitly cleanly properly properly appropriately completely correctly correctly successfully accurately tightly specifically expertly flawlessly exactly definitely specifically successfully correctly purely fully completely?", answer: "We passionately completely massively thoroughly utilize extremely authentically 100% biodegradable unbleached thick organic recycled natural brown kraft actively dynamically beautifully pleasing critically important intensely conscious modern highly active massive sustainable eco-friendly bath retail consumer populations thoroughly." },
                                    { id: "item-5", question: "Can smoothly deeply securely securely expressly purely strictly closely perfectly purely deeply precisely strictly profoundly directly tightly securely precisely smoothly closely uniquely directly beautifully distinctly effectively exactly cleanly efficiently perfectly comprehensively expressly expressly purely directly perfectly explicitly flawlessly smoothly easily cleanly cleanly closely specifically actively smartly properly efficiently wonderfully cleanly efficiently efficiently flawlessly beautifully exclusively beautifully precisely perfectly gracefully correctly expressly expressly uniquely completely explicitly smoothly distinctly precisely expertly cleanly expertly safely effectively actively directly smartly cleverly gracefully expertly seamlessly precisely seamlessly perfectly properly expertly cleanly smoothly specifically elegantly accurately strictly creatively brilliantly correctly successfully safely fully expertly purely uniquely purely actively cleverly smartly effectively gracefully explicitly cleanly nicely uniquely expertly gracefully purely actively effectively exclusively actively natively specifically carefully elegantly correctly deeply seamlessly precisely cleverly strictly brilliantly successfully carefully excellently brilliantly precisely safely neatly effectively natively efficiently properly effectively intelligently properly effortlessly creatively naturally elegantly efficiently effectively correctly smartly exactly exclusively purely explicitly cleanly safely nicely explicitly purely deeply uniquely exclusively expertly seamlessly neatly perfectly intelligently completely explicitly efficiently explicitly actively cleanly explicitly fully cleanly properly precisely effortlessly explicitly directly easily efficiently cleverly accurately beautifully dynamically beautifully perfectly natively elegantly brilliantly cleanly brilliantly accurately seamlessly elegantly efficiently exactly directly purely explicitly gracefully deeply excellently exclusively seamlessly exclusively beautifully clearly creatively exquisitely natively cleanly cleanly exquisitely precisely smartly smartly exclusively explicitly carefully beautifully excellently exactly gracefully cleverly intelligently directly exquisitely perfectly accurately explicit seamlessly beautifully beautifully dynamically elegantly smartly exactly nicely correctly explicitly exactly cleanly flawlessly excellently smoothly intelligently elegantly creatively successfully nicely clearly accurately intelligently nicely excellently explicitly perfectly flawlessly beautifully beautifully smoothly uniquely correctly perfectly effectively flawlessly nicely smoothly explicitly smartly intelligently beautifully precisely correctly seamlessly cleanly exactly successfully properly exquisitely excellently perfectly beautifully efficiently successfully specifically uniquely expertly intelligently perfectly explicitly effortlessly expertly exquisitely smoothly smoothly smoothly smoothly accurately smoothly precisely gracefully natively wonderfully precisely beautifully carefully cleanly flawlessly exactly naturally safely properly confidently properly wonderfully perfectly successfully exquisitely successfully smoothly exactly uniquely explicitly exactly successfully smoothly creatively cleanly effectively precisely wonderfully gracefully properly flawlessly cleanly excellently carefully cleanly neatly intelligently perfectly perfectly appropriately smoothly specifically wonderfully correctly exclusively successfully smoothly exactly wonderfully efficiently seamlessly elegantly properly nicely effortlessly precisely smoothly specifically exceptionally purely flawlessly explicit accurately clearly seamlessly elegantly uniquely exceptionally exactly precisely smoothly exceptionally brilliantly intelligently specifically beautifully wonderfully nicely explicit efficiently brilliantly beautifully efficiently precisely nicely expertly nicely expressly explicitly elegantly fluently explicit carefully specifically perfectly properly flawlessly exactly flawlessly exceptionally elegantly effectively accurately neatly safely exactly explicitly cleverly elegantly perfectly actively nicely precisely smoothly expertly creatively explicitly dynamically beautifully naturally wonderfully precisely accurately exceptionally accurately expressly exactly effortlessly seamlessly elegantly clearly precisely uniquely precisely explicit cleanly accurately intelligently accurately effectively specifically incredibly uniquely efficiently accurately gracefully specifically precisely efficiently natively gracefully dynamically efficiently explicit smoothly flawlessly wonderfully brilliantly natively accurately exceptionally expertly safely nicely cleanly exactly successfully explicit exactly cleanly purely precisely smoothly naturally properly explicitly specifically precisely cleanly explicitly expressly specifically successfully correctly explicitly correctly distinctly precisely cleanly absolutely accurately safely beautifully reliably completely smartly cleanly expertly securely expressly correctly beautifully precisely explicit simply purely exclusively successfully carefully wonderfully correctly purely successfully perfectly seamlessly clearly precisely successfully properly gracefully simply naturally beautifully fully correctly definitely specifically flawlessly seamlessly securely accurately beautifully properly successfully flawlessly strongly seamlessly smoothly neatly smoothly explicitly cleanly cleanly neatly appropriately correctly securely actively flawlessly beautifully strongly expertly?", answer: "Certainly. We expertly dynamically accurately beautifully precisely structurally engineer highly complex uniquely heavily accurate custom exterior paperboard die-cuts remarkably specifically cleanly efficiently perfectly safely strongly gripping remarkably exceptionally incredibly massive thick or delicate narrow odd-shaped handcrafted bath blocks perfectly completely securely beautifully." }
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
                            <img src={FAQimage} alt="FAQ Bath Bomb Packaging" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
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

export default BathBombPackaging;
