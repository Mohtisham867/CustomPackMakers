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
import { RelatedProductStickersLabels } from "@/components/RelatedProductStickersLabels";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";

import heroImg from "@/assets/shape-style/stickers-and-labels/christmas-stickers.webp";
import FAQimage from "@/assets/FAQ-image.webp";

const ChristmasStickers = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    const productImages = [
        { src: heroImg, alt: "Christmas Stickers - View 1" },
        { src: heroImg, alt: "Christmas Stickers - View 2" },
        { src: heroImg, alt: "Christmas Stickers - View 3" },
        { src: heroImg, alt: "Christmas Stickers - View 4" },
        { src: heroImg, alt: "Christmas Stickers - View 5" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Christmas Stickers | Premium Custom Labels | CustomPackMakers</title>
                <meta name="description" content="Order custom Christmas stickers and holiday labels. Foil-stamped, festive designs for gift packaging, e-commerce mailers, and seasonal retail branding." />
                <meta name="keywords" content="christmas stickers, holiday packaging labels, custom festive stickers, foil stamped holiday labels, seasonal retail stickers" />
                <meta property="og:title" content="Christmas Stickers | Premium Custom Labels | CustomPackMakers" />
                <meta property="og:description" content="Order custom Christmas stickers and holiday labels. Foil-stamped, festive designs for gift packaging, e-commerce mailers, and seasonal retail branding." />
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
                                    <Link to="/shapes-styles">Shapes &amp; Styles</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link to="/shapes-styles/stickers-labels">Stickers &amp; Labels</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Christmas Stickers</BreadcrumbPage>
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
                                <span className="text-primary">Custom</span> Christmas Stickers
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Wholesale custom branded Christmas stickers engineered for seasonal unboxing joy, luxurious metallic accents, and festive packaging upgrades built to elevate your holiday sales.
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
                                    src={heroImg}
                                    alt="Christmas Stickers Hero"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section><section className="py-8 bg-slate-50">
                <div className="container mx-auto px-[5vw]">
                    {/* Section label + accent bar */}
                    <div className="flex items-center gap-3 mb-5">
                        <div className="w-10 h-1 bg-primary rounded-full" />
                        <span className="text-xs font-semibold tracking-widest text-primary uppercase">Product Overview</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 max-w-3xl">
                        Custom Christmas Stickers Built for the Magical Unboxing
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>Our custom Christmas stickers are precision-crafted for e-commerce brands, retailers, and gift-givers who refuse to let the holiday season pass without a magical unboxing experience. Constructed from premium glossy papers, shimmering metallic foils, and crisp die-cut snowflakes or ornaments, each holiday label delivers the festive cheer your brand demands while projecting the premium identity your customers expect. Whether you're sealing festive tissue paper or applying a seasonal logo to your standard mailer boxes, our custom branded holiday stickers instantly transform ordinary packaging.</p>
                        <p>From elegant "To/From" gift tags and golden reindeer silhouettes to modern minimalist holiday greetings, our custom sticker solutions accommodate every festive aesthetic. Each label features precision-cut edges, brilliant metallic finishes, and reliable adhesives, ensuring your product remains securely sealed from the dispatch warehouse to under the tree. With stunning CMYK printing, holographic snow effects, and luxurious soft-touch lamination, your holiday packaging becomes highly shareable on social media. Order wholesale and wrap up your Q4 prep early.</p>
                    </div>
                </div>
            </section>

            {/* INTERACTIVE PRODUCT & FORM SECTION */}
            <section className="py-10 bg-accent/5" id="quote-form">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end">
                        <div className="lg:col-span-7 space-y-6">
                            <div className="relative w-full max-w-lg mx-auto overflow-hidden rounded-lg shadow-sm border border-border bg-white" style={{ aspectRatio: '4/3' }}>
                                <img src={productImages[selectedImage].src} alt={productImages[selectedImage].alt} className="w-full h-full object-cover" />
                            </div>
                            <div className="w-full max-w-lg mx-auto grid grid-cols-5 gap-2">
                                {productImages.map((image, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setSelectedImage(index)}
                                        className={`relative w-full aspect-square overflow-hidden rounded-md border transition-all duration-200 ${selectedImage === index ? 'border-primary shadow-md ring-2 ring-primary/20' : 'border-slate-200 hover:border-slate-300 hover:shadow-sm'}`}
                                    >
                                        <img src={image.src} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="lg:col-span-5 lg:sticky lg:top-24">
                            <Card className="shadow-lg border-slate-200 bg-slate-50/50 backdrop-blur-sm overflow-hidden">
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold text-foreground mb-5">Get a Custom Quote</h3>
                                    <form className="space-y-4">
                                        <div className="grid grid-cols-3 gap-3">
                                            <div className="space-y-1.5"><Label htmlFor="length" className="text-xs font-semibold text-muted-foreground">L (in)</Label><Input id="length" type="number" placeholder="2" className="h-9 bg-white" /></div>
                                            <div className="space-y-1.5"><Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label><Input id="width" type="number" placeholder="2" className="h-9 bg-white" /></div>
                                            <div className="space-y-1.5"><Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">D (in)</Label><Input id="depth" type="number" placeholder="0" className="h-9 bg-white" disabled /></div>
                                        </div>
                                        <div className="space-y-1.5"><Label htmlFor="quantity" className="text-xs font-semibold text-muted-foreground">Quantity</Label><Input id="quantity" type="number" placeholder="1000" className="h-9 bg-white" /></div>
                                        <div className="space-y-1.5"><Label htmlFor="name" className="text-xs font-semibold text-muted-foreground">Name</Label><Input id="name" type="text" placeholder="Your Name" className="h-9 bg-white" /></div>
                                        <div className="space-y-1.5"><Label htmlFor="email" className="text-xs font-semibold text-muted-foreground">Email</Label><Input id="email" type="email" placeholder="email@example.com" className="h-9 bg-white" /></div>
                                        <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 shadow-md hover:shadow-lg transition-all duration-300 mt-2">Submit Inquiry</Button>
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
                        The Importance of Seasonal Packaging Upgrades
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
                            <p>In the hyper-competitive Q4 retail and e-commerce landscape, packaging is the final extension of the holiday shopping experience. For brands of all sizes, custom Christmas stickers represent an incredibly cost-effective, high-impact method to 'holiday-ize' your standard year-round packaging. Premium holiday labeling communicates festive joy, gift-readiness, and brand warmth without the massive expense of buying entirely new custom holiday boxes.</p>
                            <p>Our custom Christmas stickers are designed with seasonal aesthetics and rapid application at their core. Every element, from the glistening gold foil that catches the string lights, to the easy-peel roll format for warehouse speed, is carefully considered to create a striking presentation that delights customers. Investing in high-quality seasonal packaging stickers demonstrates your brand's attention to the festive spirit and creates a gifting experience that drives customer retention into the new year.</p>
                            
                            
                            <h3>Unmatched Festive Materials & Lustrous Quality</h3>
                            <p>The foundation of an exceptional holiday sticker begins with materials that feel magical. We offer a comprehensive range of premium substrates to suit any vibe:</p>
                            <ul><li>BOPP & Glossy Paper: Our most popular choice for vibrant, highly saturated reds, greens, and brilliant whites that pop off the cardboard box.</li><li>Holographic & Glitter Bases: Opt for specialty substrates to make your Christmas sticker shift colors like a starry winter night or sparkle brilliantly like fresh snow.</li><li>Textured Estate Paper: For artisanal brands, textured paper delivers a premium, organic 'classic Christmas' feel perfect for wine bottles, gourmet foods, and boutique cosmetics.</li></ul>
                            
                            <h3>Precision Die-Cutting for Ornaments & Snowflakes</h3>
                            <p>Break out of the standard circle! Our advanced finishing equipment ensures perfectly festive custom shapes:</p>
                            <ul><li>Intricate Contour Following: Our digital blades can track complex snowflake tendrils, jagged pine trees, or custom ornament shapes flawlessly.</li><li>Clean, Burr-Free Edges: We ensure the cut completely slices the vinyl without fraying, leaving a smooth, premium retail-ready edge.</li><li>Roll Format for Speed: We provide seasonal stickers on large, easy-peel rolls so your fulfillment team can slap them onto Q4 orders at lightning speed without slowing down the line.</li></ul>
                            
                            <h3>Advanced Foil Stamping & Finishing</h3>
                            <p>Transform a basic logo sticker into a premium holiday gift seal with our state-of-the-art finishing capabilities:</p>
                            <ul><li>Metallic Foil Stamping: Add incredible luxury with brilliant Gold, Silver, or Rose-Gold foil accents that elevate your packaging to a premium jewelry-level unboxing.</li><li>High-Gloss Lamination: Create a vibrant, shiny finish that makes your seasonal photography pop and actively repels moisture from snow on the porch.</li><li>Soft-Touch Lamination: Our velvety soft-touch matte finish provides a luxurious, cozy tactile feel that communicates top-shelf brand quality.</li></ul>
                            
                        </div>
                    </div>
                </div>
            </section>

            <RelatedProductStickersLabels />

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
                        <div className="space-y-5">
                            
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            {/* Static icon path for simplicity */}
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"} />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Uncompromising Quality</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">Every custom Christmas sticker we produce is built from premium papers and brilliant foils, selected for maximum visual impact. Our rigorous QC process ensures each unit meets the aesthetic standards your ecstatic gift-receiving customers demand.</p>
                                </div>
                            </div>
                            <div className="w-full h-px bg-slate-100" />
                            
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors duration-300">
                                        <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            {/* Static icon path for simplicity */}
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={"M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"} />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Tailored Perfection</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">No two holiday campaigns are identical. We engineer custom branded seasonal stickers to your exact die-cut dimensions, perfectly framing your holiday messaging or smoothly wrapping the corner of your e-commerce mailer boxes.</p>
                                </div>
                            </div>
                            <div className="w-full h-px bg-slate-100" />
                            
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors duration-300">
                                        <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            {/* Static icon path for simplicity */}
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={"M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"} />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Rapid Q4 Turnarounds</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">We know the holiday rush waits for no one. Our expedited production lines and reliable domestic shipping ensure your massive rolls of seasonal stickers arrive exactly when your warehouse needs them to start fulfilling the November/December spike.</p>
                                </div>
                            </div>
                            
                            
                        </div>

                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img src={heroImg} alt="Christmas Stickers" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-7">
                                    <p className="text-white font-bold text-lg leading-snug mb-1">Trusted by 500+ Brands</p>
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

            {/* DIFFERENTIATE SECTION */}
            <section className="py-10 lg:py-12 bg-white overflow-hidden relative">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="relative group">
                            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] border border-primary/20 shadow-2xl transform transition-transform duration-700 hover:scale-[1.02]">
                                <img src={heroImg} alt="Christmas Stickers Differentiation" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                            </div>
                            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-60" />
                            <div className="absolute -z-10 -top-8 -right-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl opacity-60" />
                        </div>
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                                Differentiate Your <span className="text-primary">Product</span> From Others
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                At CustomPackMakers, we understand that your holiday packaging is a crucial component of Q4 revenue. To ensure your seasonal boxes stand out under the tree, we utilize state-of-the-art foil stamping and high-resolution printing techniques that render metallic golds and vibrant candy-apple reds with absolute clarity. Our team of experts works closely with you to determine the perfect die-cut shape, ensuring your stickers add immense value to your generic packaging. By integrating distinctive features like holographic snow bases, buttery-matte laminations, and elegant typography, we help you create a highly giftable holiday presentation.
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
                                <h2 className="text-2xl md:text-3xl font-bold text-foreground">Frequently Asked Questions</h2>
                                <p className="text-base text-muted-foreground">We’re confident that you will love our products and service.</p>
                            </div>
                            <Accordion type="single" collapsible defaultValue="item-0" className="w-full space-y-2">
                                {[{"id":"item-0","q":"Can I use these Christmas stickers to seal my shipping boxes?","a":"Yes! We offer aggressive, high-tack adhesives specifically designed for corrugated cardboard. A beautifully designed, foil-stamped holiday sticker placed over the seam of your box acts as a gorgeous, festive, and functional tamper-evident seal."},{"id":"item-1","q":"Do you offer metallic gold and silver printing for a premium holiday look?","a":"Absolutely. Metallic finishes are our specialty for the holidays! We offer true hot-foil stamping for incredibly reflective real gold and silver, as well as affordable cold-foil options that give your seasonal branding an incredibly luxurious, high-end shimmer."},{"id":"item-2","q":"Can I get my stickers cut into the shape of a Christmas tree or snowflake?","a":"Yes! We specialize in custom die-cut stickers. We can cut your holiday labels into absolutely any custom shape you desire, from intricately jagged snowflakes to smooth bauble ornaments, breaking free from boring standard circles to maximize festive cheer."},{"id":"item-3","q":"We need these on rolls for rapid warehouse application, is that possible?","a":"Yes, it is highly recommended. For high-volume Q4 fulfillment, we provide your Christmas stickers strictly on continuous rolls with specific core sizes, perfectly optimized for incredibly fast manual peeling or automatic machine application on your assembly line."},{"id":"item-4","q":"Are the colors accurately matched to my brand's specific holiday campaign?","a":"Yes, we utilize advanced Pantone Color Matching (PMS) alongside photographic CMYK digital presses. This ensures that the specific 'Coca-Cola Red' or 'Tiffany Blue' of your holiday campaign is reproduced with razor-sharp, exact accuracy."}].map((faq, idx) => (
                                    <AccordionItem
                                        key={faq.id}
                                        value={faq.id}
                                        className="border border-slate-200 rounded-lg bg-white overflow-hidden data-[state=open]:border-primary data-[state=open]:ring-1 data-[state=open]:ring-primary/20 data-[state=open]:bg-primary/5 transition-all duration-300"
                                    >
                                        <AccordionTrigger className="px-5 py-3 hover:no-underline [&>svg]:hidden group">
                                            <span className="text-left font-semibold text-foreground text-base">{faq.q}</span>
                                            <div className="shrink-0 ml-4 p-1 rounded-full bg-slate-100 group-data-[state=open]:bg-primary group-data-[state=open]:text-white transition-colors duration-200">
                                                <Plus className="h-3 w-3 group-data-[state=open]:hidden" />
                                                <Minus className="h-3 w-3 hidden group-data-[state=open]:block" />
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent className="px-5 pb-5 pt-0 text-slate-600 leading-relaxed text-sm">
                                            {faq.a}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                        <div className="relative w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden ">
                            <img src={FAQimage} alt="Christmas Stickers FAQ" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
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

export default ChristmasStickers;
