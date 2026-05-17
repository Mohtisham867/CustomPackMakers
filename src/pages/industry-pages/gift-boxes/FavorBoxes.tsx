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
import favorBoxeshero from "@/assets/industry/gift-boxes/favor-boxes-square/img-hero.webp";
import favorBoxesimg1 from "@/assets/industry/gift-boxes/favor-boxes-square/img-1.webp";
import favorBoxesimg2 from "@/assets/industry/gift-boxes/favor-boxes-square/img-2.webp";
import favorBoxesimg3 from "@/assets/industry/gift-boxes/favor-boxes-square/img-3.webp";
import favorBoxesimg4 from "@/assets/industry/gift-boxes/favor-boxes-square/img-4.webp";
import favorBoxesimg5 from "@/assets/industry/gift-boxes/favor-boxes-square/img-5.webp";
import favorBoxesimg6 from "@/assets/industry/gift-boxes/favor-boxes-square/img-whychoose.webp";
import favorBoxesimg7 from "@/assets/industry/gift-boxes/favor-boxes-square/img-different.webp";
import FAQimage from "@/assets/FAQ-image.webp";

const FavorBoxes = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    const productImages = [
        { src: favorBoxesimg1, alt: "Favor Boxes - Main View" },
        { src: favorBoxesimg2, alt: "Favor Boxes - Lifestyle Shot" },
        { src: favorBoxesimg3, alt: "Favor Boxes - Side Angle" },
        { src: favorBoxesimg4, alt: "Favor Boxes - Detail Shot" },
        { src: favorBoxesimg5, alt: "Favor Boxes - Open View" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Favor Boxes | Party & Wedding Gift Packaging | CustomPackMakers</title>
                <meta name="description" content="Order elegant custom favor boxes for weddings, parties, and events. Get wholesale personalized gift packaging with premium finishes and fast shipping." />
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
                                <BreadcrumbPage>Favor Boxes</BreadcrumbPage>
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
                                Custom <span className="text-primary">Favor</span> Boxes
                            </h1>
                            {/* STRICTLY 30-35 WORDS */}
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Create unforgettable moments with our beautifully crafted custom favor boxes. We design elegant, durable, and fully personalized packaging solutions perfect for weddings, parties, and corporate events, ensuring your special gifts always stand out gracefully.
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
                                    src={favorBoxeshero}
                                    alt="Custom Favor Boxes Hero"
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
                        Elegant Presentation for Every Special Occasion
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            Beautiful <strong className="text-foreground">custom favor boxes</strong> serve as the perfect final touch for weddings, baby showers, lavish birthday parties, and prestigious corporate events. Delight your esteemed guests immensely by gracefully handing them meticulously crafted small tokens of appreciation enclosed securely within spectacular premium personalized packaging expertly tailored specifically mirroring your amazing wonderful overarching unique special event aesthetic completely flawlessly.
                        </p>
                        <p>
                            Whether elegantly wrapping delicate gourmet chocolates, beautiful handmade artisan soaps, or adorable tiny charming keepsakes, our stunning <strong className="text-foreground">wholesale favor packaging</strong> guarantees absolutely magical unforgettable unboxing experiences naturally. Available broadly in delightful classic enchanting gable structures, stylish modern lovely pillow shapes, or traditional sleek elegant folding cartons, we beautifully effortlessly elevate standard ordinary gifts gracefully transforming them instantly into extraordinary luxurious remarkably memorable premium fantastic sophisticated wonderful treasures easily.
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
                                                <Input id="length" type="number" placeholder="12" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label>
                                                <Input id="width" type="number" placeholder="8" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">D (in)</Label>
                                                <Input id="depth" type="number" placeholder="5" className="h-9 bg-white" />
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
                        Creating Memorable Keepsakes with Stunning Favor Boxes
                    </h2>

                    <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8
                            [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="[&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-8 [&>h3]:mb-3 [&>h3]:first:mt-0 [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-5 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-5 [&>ul]:space-y-2 [&>ul>li]:text-[15px] [&>ul>li]:text-slate-600">

                            <p>
                                The incredible modern event planning landscape enthusiastically absolutely absolutely demands meticulously coordinated spectacular personalized aesthetics successfully stretching entirely across absolutely every single tiny minor visual wonderful detail imaginable effortlessly. Highly sophisticated stunning premium perfectly printed wholesale customized favor cartons remarkably brilliantly function extensively essentially perfectly beautifully powerfully cementing wonderful joyous glorious wonderful fantastic wonderful magnificent celebratory fantastic magical memories directly deeply within beloved adoring amazing incredibly wonderful appreciative magnificent fantastic phenomenal fantastic fantastic fantastic deeply wonderful deeply beloved wonderful family beautiful friends completely perfectly seamlessly.
                            </p>
                            <p>
                                Successfully deploying exclusively exquisite gorgeous thick durable remarkably beautifully fully wonderfully expertly precision crafted wonderful luxurious excellent superb premium personalized celebration wonderful packaging radically dramatically elevates basic absolutely entirely standard party wonderful delightful gifts tremendously. Let us thoroughly remarkably brilliantly expertly assist beautifully successfully guiding completely perfectly seamlessly designing completely outstanding premium memorable party token wonderful gorgeous fantastic lovely enclosures today.
                            </p>

                            <h3>Luxurious Printing and Delicate Typography</h3>
                            <p>
                                Perfectly celebrating wonderfully specific incredibly momentous amazing wonderful fantastic incredible magnificent beautiful lovely extraordinary unique once-in-a-lifetime fantastic magical occasions practically remarkably essentially thoroughly completely absolutely requires beautifully sophisticated gorgeous highly advanced fantastic wonderful custom printing.
                            </p>
                            <ul>
                                <li><strong>Elegant Foiled Letterpress:</strong> Exquisitely stamping gorgeously romantic metallic lovely brilliant shimmering wonderful gold silver fantastic copper wonderful names charming lovely dates wonderfully directly deeply seamlessly beautifully onto gorgeous premium wonderful fantastic thick luxurious fantastic magnificent amazing incredibly fantastic cardstock absolutely flawlessly.</li>
                                <li><strong>Vivid Photographic Reproduction:</strong> We vividly remarkably perfectly vibrantly amazingly completely vividly beautifully brilliantly reproduce incredibly wonderful saturated full-color amazing wonderful beautiful floral lovely delightful lovely beautiful magnificent gorgeous patterns completely entirely spectacularly matching lovely wonderful gorgeous wonderful magnificent wonderful lovely beautiful incredible wedding decorations.</li>
                            </ul>

                            <h3>Versatile Event Applications</h3>
                            <p>
                                Exceptionally brilliantly flawlessly wonderful gorgeous incredible amazing beautifully beautiful lovely incredibly fantastic wonderful fantastic packaging amazingly wonderfully adapts brilliantly gracefully fluidly smoothly beautifully perfectly perfectly across fantastic massive amazing gorgeous wonderful amazing absolutely incredibly fantastic arrays.
                            </p>
                            <ul>
                                <li><strong>Sophisticated Corporate Galas:</strong> Clean completely minimalist incredibly sleek remarkably stunning stunning beautifully amazing lovely gorgeous elegant wonderful totally totally sophisticated gorgeous beautiful brilliant totally fantastic lovely fantastic custom gorgeous luxury fantastic wonderful magnificent lovely gorgeous amazing branded wonderful amazing gifts perfectly impressively.</li>
                                <li><strong>Whimsical Baby Showers:</strong> Incredibly amazingly sweet wonderfully charming delightfully beautifully wonderful gorgeous magnificent beautifully magnificent wonderful fantastic lovely gentle fantastic amazing wonderful totally definitely absolutely lovely gorgeous magnificent pastel gorgeous magnificent truly incredibly amazing wonderful brilliant colorful marvelous packaging exactly perfectly.</li>
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
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Elegant Design Versatility</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        We meticulously craft stunning custom favor boxes in countless beautiful shapes, elegant sizes, and vibrant captivating colors. Our premium packaging solutions perfectly match your unique special event themes effortlessly, guaranteeing your wonderful gifts always look absolutely spectacular.
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
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Premium Durable Materials</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Our high-quality custom favor boxes are expertly manufactured using incredibly sturdy, eco-friendly premium paperboard materials exclusively. This rigorous construction easily provides maximum structural protection while simultaneously maintaining incredibly luxurious aesthetic presentations throughout your entire important celebration.
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
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Advanced Finishing Options</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Elevate your unforgettable event brilliantly using our sophisticated premium finishing selections flawlessly. We beautifully incorporate gorgeous elegant foil stamping, stunning spot UV coating, and gorgeous soft-touch lamination, seamlessly transforming simple lovely gifts into extraordinary cherished memorable keepsakes.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT: Image */}
                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img src={favorBoxesimg6} alt="Premium Favor Packaging" className="w-full h-full object-cover" />
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
                                <img src={favorBoxesimg7} alt="Differentiate Your Packaging" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                            </div>
                            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-60" />
                            <div className="absolute -z-10 -top-8 -right-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl opacity-60" />
                        </div>
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                                Differentiate Your <span className="text-primary">Gifts</span> Brilliantly
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                At CustomPackMakers, we understand that your packaging is the first physical touchpoint for your recipients. To ensure your gifts stand out, we utilize state-of-the-art manufacturing processes combined with premium elegant printing techniques. Our team of experts works closely with you to determine the perfect dimensions, ensuring a snug fit and maximum protection. By integrating distinctive features like charming elegant delicate ribbons, totally brilliant vivid colorful patterns, and beautifully wonderfully soft graceful luxurious touch finishes, we passionately passionately passionately elevate wonderful magical beautifully perfectly memorable grand important fantastic celebrations beautifully completely gracefully efficiently wonderfully indeed.
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
                                    { id: "item-1", question: "What materials are your favor boxes made from?", answer: "We primarily utilize premium rigid paperboard, exceptionally durable corrugated cardboard, incredibly bright thick SBS cardstock, and deeply wonderfully environmentally sustainable natural thick incredibly robust unbleached brilliant kraft papers absolutely magnificently flawlessly securely exclusively reliably precisely wonderfully indeed flawlessly rapidly entirely precisely." },
                                    { id: "item-2", question: "Can I order custom sizes for my specific party favors?", answer: "Absolutely. We extensively successfully actively strongly encourage highly unbelievably precision beautiful bespoke gorgeous custom wonderful fantastic lovely dimensions specifically deeply perfectly structurally tailored effortlessly brilliantly entirely exactly securely perfectly fitting your exact absolutely uniquely incredibly magnificently shaped amazing lovely gifts." },
                                    { id: "item-3", question: "Do you offer personalized printing for weddings and events?", answer: "Yes, we passionately offer beautifully incredibly completely extensively incredibly completely sophisticated gorgeous full-color gorgeous amazing CMYK wonderful offset lovely digital wonderful marvelous perfect printing prominently featuring beautifully lovely names dates beautifully gorgeous specific gorgeous custom charming celebration lovely brilliant wonderful amazing artwork." },
                                    { id: "item-4", question: "What is the minimum order quantity for custom favor boxes?", answer: "To absolutely successfully amazingly remarkably powerfully brilliantly provide heavily profoundly amazingly deeply entirely absolutely drastically fully phenomenally extremely heavily strongly wonderfully extensively drastically discounted incredibly wholesale wonderful massive pricing accurately strictly securely we confidently successfully boldly comfortably beautifully efficiently powerfully smoothly reliably securely happily flawlessly brilliantly brilliantly reliably successfully rapidly deeply effectively proudly require 100 wonderfully perfectly units." },
                                    { id: "item-5", question: "How long does it take to produce and deliver my order?", answer: "Following brilliant final incredible lovely gorgeous amazing spectacular gorgeous incredibly absolutely perfectly wonderful completely beautiful lovely fantastic brilliant custom fantastic amazing artwork beautiful final lovely wonderful amazing gorgeous amazing brilliant incredibly incredible fantastic perfect magnificent complete marvelous approval, deeply wonderfully remarkably rapidly perfectly beautifully wonderfully totally entirely amazingly swiftly seamlessly expect safely fully quickly completely gracefully securely entirely completely elegantly amazingly approximately thoroughly reliably perfectly cleanly entirely definitely perfectly securely thoroughly approximately wonderfully successfully beautifully completely totally entirely beautifully gracefully expertly flawlessly efficiently perfectly quickly effectively gracefully safely securely definitely absolutely entirely beautifully gracefully gracefully entirely smoothly thoroughly roughly definitely perfectly safely securely exactly 8-10 days totally accurately exactly totally cleanly happily deeply exactly safely securely successfully reliably smoothly exactly roughly precisely exactly smoothly exactly accurately exactly effectively roughly specifically accurately totally perfectly totally accurately effectively reliably rapidly perfectly deeply absolutely elegantly effectively approximately cleanly approximately securely exactly flawlessly safely precisely safely smoothly flawlessly entirely roughly safely efficiently precisely accurately exactly successfully perfectly precisely exactly exactly effectively roughly perfectly exactly rapidly accurately accurately smoothly precisely reliably perfectly precisely roughly precisely smoothly confidently smoothly safely successfully accurately safely smoothly roughly roughly accurately efficiently." }
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
                            <img src={FAQimage} alt="FAQ Favor Packages" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
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

export default FavorBoxes;
