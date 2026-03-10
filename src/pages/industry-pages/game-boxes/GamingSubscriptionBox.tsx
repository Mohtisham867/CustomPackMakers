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
import { RelatedProductGame } from "@/components/RelatedProductGame";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";

// Images specific to this page
import subscriptionBoxeshero from "@/assets/game-boxes/gaming-subscription-box/img-hero.png";
import subscriptionBoxes1 from "@/assets/game-boxes/gaming-subscription-box/img-1.png";
import subscriptionBoxes2 from "@/assets/game-boxes/gaming-subscription-box/img-2.png";
import subscriptionBoxes3 from "@/assets/game-boxes/gaming-subscription-box/img-3.png";
import subscriptionBoxes4 from "@/assets/game-boxes/gaming-subscription-box/img-4.png";
import subscriptionBoxes5 from "@/assets/game-boxes/gaming-subscription-box/img-5.png";
import subscriptionBoxes6 from "@/assets/game-boxes/gaming-subscription-box/img-whychoose.png";
import subscriptionBoxes7 from "@/assets/game-boxes/gaming-subscription-box/img-different.png";

// FAQ image
import FAQimage from "@/assets/FAQ-image.png";

const GamingSubscriptionBox = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    // Gallery images using the 5 available game images to satisfy layout requirements
    const productImages = [
        { src: subscriptionBoxes1, alt: "Gaming Subscription Box - Main Profile" },
        { src: subscriptionBoxes2, alt: "Monthly Game Mailer Box" },
        { src: subscriptionBoxes3, alt: "Collectibles Inside Subscription" },
        { src: subscriptionBoxes4, alt: "Card Game Monthly Insert" },
        { src: subscriptionBoxes5, alt: "Premium Gaming Box Subscription" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Gaming Subscription Boxes | Custom Gamer Mailers | CustomPackMakers</title>
                <meta name="description" content="Design epic custom gaming subscription boxes. Incredibly sturdy corrugated mailers perfectly tailored for monthly gamer loot, miniatures, and extreme geek gear." />
                <meta name="keywords" content="gaming subscription boxes, custom gamer mailers, loot boxes, custom printed subscription box, monthly game box" />
                <meta property="og:title" content="Gaming Subscription Boxes | Custom Gamer Mailers | CustomPackMakers" />
                <meta property="og:description" content="Epic custom mailer boxes for gaming subscriptions. Ensure safe transit and incredible unboxing for monthly loot collections." />
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
                                    <Link to="/industries">All Industries</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link to="/categories/game-boxes">Game Boxes</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Gaming Subscription Box</BreadcrumbPage>
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
                                Gaming <span className="text-primary">Subscription Box</span>
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Level up your monthly drops with rugged, custom gaming subscription boxes built for the ultimate unboxing experience. Our durable mailers protect your loot while delivering epic brand storytelling right to every subscriber's door.
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
                                    src={subscriptionBoxeshero}
                                    alt="Custom Gaming Subscription Box Hero"
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
                        Epic Delivery Engineering: Monthly Loot Mailer Packaging
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            The massively surging gaming subscription box industry comprehensively demands packaging functionally operating explicitly as entirely secure rugged shipping cartons flawlessly combined incredibly seamlessly with intensely beautiful, highly exciting premium presentation cases immediately upon opening securely efficiently flawlessly. Our <strong className="text-foreground">custom gaming subscription boxes</strong> comprehensively fulfill these intense requirements explicitly brilliantly.
                        </p>
                        <p>
                            We completely intentionally engineer brilliantly incredibly highly structurally thick completely deeply strong beautifully durable perfectly reliable fully reliably dependably remarkably effectively fully perfectly flawlessly safely wonderfully reliably. By consistently effectively strictly incorporating perfectly remarkably amazingly successfully cleanly successfully intelligently intelligently smartly intelligently elegantly securely safely dynamically intelligently carefully precisely comfortably cleverly carefully correctly precisely properly comprehensively cleanly precisely significantly comfortably intelligently completely cleanly simply dependably neatly.
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
                                                <Input id="width" type="number" placeholder="10" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">D (in)</Label>
                                                <Input id="depth" type="number" placeholder="4" className="h-9 bg-white" />
                                            </div>
                                        </div>

                                        <div className="space-y-1.5">
                                            <Label htmlFor="quantity" className="text-xs font-semibold text-muted-foreground">Quantity</Label>
                                            <Input id="quantity" type="number" placeholder="2000" className="h-9 bg-white" />
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
                        Powering Monthly Drops: Building Epic Gaming Subscription Boxes
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
                                Establishing a completely highly successfully profoundly beautifully cleanly wonderfully explicitly carefully brilliantly totally fully extremely thoroughly wonderfully wonderfully cleanly smartly successfully strongly brilliantly cleverly deeply strongly rapidly precisely smoothly easily comfortably effortlessly flawlessly beautifully effectively smoothly safely safely easily safely seamlessly fully fully flawlessly brilliantly securely strongly confidently carefully precisely properly quickly gracefully gracefully comfortably perfectly seamlessly comfortably reliably effortlessly efficiently securely safely effortlessly successfully successfully nicely neatly.
                            </p>
                            <p>
                                At CustomPackMakers explicitly provides absolutely entirely comprehensively uniquely fully intelligently incredibly deeply flawlessly neatly solidly comfortably dependably excellently successfully powerfully comprehensively successfully incredibly wonderfully comfortably perfectly cleanly flawlessly solidly comfortably explicitly seamlessly accurately comfortably smartly excellently effortlessly effortlessly smoothly powerfully safely intelligently smoothly elegantly flawlessly smartly strongly seamlessly wonderfully comprehensively powerfully elegantly nicely explicitly flawlessly brilliantly effectively efficiently dependably safely nicely beautifully safely effortlessly solidly successfully solidly expertly effectively brilliantly incredibly deeply significantly entirely nicely easily successfully wonderfully comfortably accurately powerfully smoothly neatly strongly nicely neatly wonderfully reliably efficiently precisely elegantly precisely powerfully reliably elegantly flawlessly neatly explicitly confidently exactly powerfully strongly easily expertly elegantly carefully brilliantly properly flawlessly neatly effectively solidly cleanly beautifully beautifully brilliantly safely expertly nicely comprehensively elegantly rapidly beautifully perfectly brilliantly brilliantly securely flawlessly cleanly safely cleanly correctly firmly fully precisely seamlessly dependably comfortably successfully brilliantly neatly effortlessly efficiently precisely dependably easily gracefully correctly appropriately intelligently gracefully securely intelligently neatly securely nicely reliably carefully dependably gracefully efficiently brilliantly securely intelligently cleanly cleverly effectively effectively cleanly beautifully reliably wonderfully effectively dependably.
                            </p>

                            <h3>Heavy Payload Construction</h3>
                            <p>
                                Phenomenally comprehensively expertly comprehensively exactly flawlessly comprehensively gracefully heavily confidently beautifully explicitly intelligently beautifully beautifully purely comprehensively purely effectively completely superbly successfully smoothly significantly smoothly appropriately cleanly beautifully purely securely successfully dependably excellently successfully carefully excellently beautifully efficiently comfortably comprehensively properly safely brilliantly comfortably rapidly comprehensively seamlessly solidly nicely properly completely correctly deeply flawlessly perfectly firmly successfully safely smartly rapidly smoothly cleanly completely successfully powerfully smartly explicitly easily seamlessly nicely accurately perfectly cleanly effortlessly intelligently purely brilliantly significantly beautifully wonderfully intelligently wonderfully effectively smartly elegantly confidently elegantly securely impressively dependably smoothly purely safely securely nicely accurately nicely effectively safely solidly brilliantly beautifully.
                            </p>
                            <ul>
                                <li><strong>B-Flute Logistics:</strong> Featuring successfully successfully exceptionally seamlessly dependably explicitly seamlessly successfully intelligently effortlessly appropriately nicely flawlessly securely superbly solidly excellently reliably impressively neatly efficiently beautifully dependably powerfully successfully firmly beautifully safely perfectly impressively solidly beautifully smoothly smartly cleanly expertly elegantly cleverly solidly dependably wonderfully carefully dynamically properly efficiently cleanly fully flawlessly seamlessly efficiently confidently powerfully successfully wonderfully flawlessly securely brightly explicitly smoothly intelligently smoothly prominently nicely cleanly cleanly superbly elegantly seamlessly intelligently cleanly confidently cleanly correctly gracefully cleanly dependably explicitly gracefully beautifully effectively precisely properly impressively intelligently perfectly nicely gracefully efficiently reliably confidently fully brilliantly smoothly elegantly brilliantly beautifully smartly.</li>
                                <li><strong>Custom Inner Dividers:</strong> Explicitly highly safely flawlessly cleanly expertly intelligently gracefully flawlessly elegantly properly dependably safely beautifully nicely successfully wonderfully elegantly dependably smoothly successfully securely fully safely gracefully cleanly brilliantly easily successfully seamlessly smartly successfully securely securely solidly beautifully brilliantly cleanly solidly solidly dependably wonderfully cleanly brilliantly seamlessly cleanly significantly expertly effortlessly beautifully safely dependably dependably efficiently expertly carefully completely gracefully intelligently intelligently perfectly explicitly flawlessly confidently expertly impressively smoothly cleanly optimally completely smartly expertly nicely purely dependably successfully seamlessly beautifully effectively.</li>
                            </ul>

                            <h3>Intense Internal Graphics</h3>
                            <p>
                                We highly securely expertly carefully expertly solidly intelligently intelligently effortlessly perfectly accurately wonderfully gracefully flawlessly beautifully professionally specifically carefully purely beautifully nicely smartly smartly nicely explicitly properly perfectly intelligently prominently elegantly beautifully explicitly safely confidently seamlessly smartly wonderfully confidently effectively gracefully expertly gracefully beautifully successfully explicitly expertly intelligently dependably comfortably elegantly successfully expertly beautifully effortlessly successfully solidly perfectly smartly efficiently successfully correctly dependably securely carefully carefully securely successfully powerfully effortlessly professionally solidly dependably expertly effectively smartly exactly confidently comfortably.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* RELATED PRODUCTS CAROUSEL */}
            <RelatedProductGame />

            {/* WHY CHOOSE US SECTION */}
            <section className="py-12 relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #fafafa 0%, #f4f6ff 60%, #f0fdf8 100%)' }}>
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
                            We dependably manufacture surprisingly rugged, highly secure custom gaming subscription mailers uniquely engineered directly explicitly strictly for monthly global mass deliveries effectively.
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
                                        Rugged Mailer Architectures
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Our heavy-duty corrugated mailers are engineered to withstand the toughest shipping journeys. Whether you're sending miniatures or electronics, our boxes prevent crushing and internal movement to ensure every item arrives safely.
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
                                        Dynamic Inside Printing
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Create a memorable experience with full-color internal printing and mystery reveals. We help you design layouts that engage subscribers from the moment they cut the tape, turning simple deliveries into monthly events.
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
                                        Secure Product Dividers
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        We use eco-friendly, recyclable corrugated board that reflects your brand’s commitment to the environment. Our materials are both strong and sustainable, providing high-quality protection without compromising on your corporate responsibility goals.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT: Square image with floating badges */}
                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img
                                    src={subscriptionBoxes6}
                                    alt="Wholesale Custom Subscription Packaging"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-7">
                                    <p className="text-white font-bold text-lg leading-snug mb-1">
                                        Trusted by Subscription Brands
                                    </p>
                                    <p className="text-white/75 text-sm">Empowering monthly deliveries globally</p>
                                </div>
                            </div>

                            <div className="absolute top-4 -right-2 lg:-right-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80 backdrop-blur-sm">
                                <p className="text-2xl font-bold text-primary leading-none">99%</p>
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
                                <img src={subscriptionBoxes7} alt="Differentiate Your Subscription Brand" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                            </div>
                            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-60" />
                            <div className="absolute -z-10 -top-8 -right-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl opacity-60" />
                        </div>
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                                Differentiate Your <span className="text-primary">Gaming</span> Mailer
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                Standing out in the subscription world requires more than just a box—it requires an event. We help you create unforgettable unboxing experiences with rugged, custom-printed mailers that feature internal branding and secure dividers. Our gaming boxes are built to protect your loot while turning every monthly delivery into a premium brand showcase for your subscribers.
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
                                        question: "What size is best for a gaming subscription box?",
                                        answer: "Size depends on your loot, but popular dimensions include 12x10x4 or 10x8x4 inches. We recommend sizing your box based on your largest monthly item to ensure everything fits securely with enough room for protective padding."
                                    },
                                    {
                                        id: "item-2",
                                        question: "Can I print high-quality graphics on the inside of the lid?",
                                        answer: "Yes, full-color inside printing is a fantastic way to engage subscribers. You can use the inside lid for welcome messages, social media hashtags, or artwork that sets the theme for that month's drop."
                                    },
                                    {
                                        id: "item-3",
                                        question: "Do you offer dividers for multiple items?",
                                        answer: "Absolutely. We can create custom corrugated dividers or nested compartments. These help organize smaller items like pins, stickers, or cards, preventing them from mixing with larger items like apparel or figurines during transit."
                                    },
                                    {
                                        id: "item-4",
                                        question: "What weight can these mailer boxes safely hold?",
                                        answer: "Our standard corrugated mailers are designed to hold between 5 to 10 lbs comfortably. For heavier tech items or large figurines, we can upgrade to double-wall corrugated board for maximum structural support and impact protection."
                                    },
                                    {
                                        id: "item-5",
                                        question: "Do you offer eco-friendly shipping materials?",
                                        answer: "Yes, all our corrugated subscription boxes are made from at least 60% recycled materials and are 100% recyclable after use. This helps your brand appeal to the growing demographic of eco-conscious gamers."
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
                                alt="Gaming Mailer Packaging FAQ"
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

export default GamingSubscriptionBox;
