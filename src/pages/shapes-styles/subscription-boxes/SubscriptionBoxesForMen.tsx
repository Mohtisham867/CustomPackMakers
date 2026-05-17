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
import { RelatedProductEcommerce } from "@/components/RelatedProductEcommerce";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";

import heroImage from "@/assets/shape-style/subscription-boxes/subscription-boxes-for-men.webp";
import FAQimage from "@/assets/FAQ-image.webp";

const SubscriptionBoxesForMen = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    const productImages = [
        { src: heroImage, alt: "Subscription Boxes For Men - Main View" },
        { src: heroImage, alt: "Subscription Boxes For Men - Interior" },
        { src: heroImage, alt: "Subscription Boxes For Men - Open Box" },
        { src: heroImage, alt: "Subscription Boxes For Men - Detail" },
        { src: heroImage, alt: "Subscription Boxes For Men - Lifestyle" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Subscription Boxes For Men | Branded Men's Gift Box Packaging | CustomPackMakers</title>
                <meta name="description" content="Order custom subscription boxes for men wholesale. Premium branded men's gift box packaging with bold designs, durable materials & fast turnaround. Get a free quote." />
                <meta name="keywords" content="subscription boxes for men, men's subscription box packaging, custom men's gift boxes, monthly men's boxes, wholesale men's subscription packaging" />
                <meta property="og:title" content="Custom Subscription Boxes For Men | Branded Men's Gift Box Packaging | CustomPackMakers" />
                <meta property="og:description" content="Premium custom men's subscription box packaging. Bold designs, durable construction & custom inserts. Low minimums, 8–10 day turnaround. Get a free quote today." />
            </Helmet>
            <Header />

            <div className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 mt-[120px] md:mt-[140px]">
                <div className="container mx-auto px-[30px] py-3">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem><BreadcrumbLink asChild><Link to="/">Home</Link></BreadcrumbLink></BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem><BreadcrumbLink asChild><Link to="/shapes-styles">Shapes & Styles</Link></BreadcrumbLink></BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem><BreadcrumbLink asChild><Link to="/shapes-styles/subscription-boxes">Subscription Boxes</Link></BreadcrumbLink></BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem><BreadcrumbPage>Subscription Boxes For Men</BreadcrumbPage></BreadcrumbItem>
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
                                <span className="text-primary">Custom</span> Subscription Boxes For Men
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Wholesale custom men's subscription packaging engineered with a bold, masculine aesthetic and durable construction to deliver an exceptional monthly experience for every man's lifestyle and interest.
                            </p>
                            <div className="pt-2">
                                <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300" onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}>
                                    Get a Quote
                                </Button>
                            </div>
                        </div>
                        <div className="lg:col-span-5 relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-muted group">
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200">
                                <img src={heroImage} alt="Subscription Boxes For Men Hero" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
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
                        Men's Subscription Packaging Built for Bold Brands and Discerning Subscribers
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            Our <strong className="text-foreground">custom subscription boxes for men</strong> are purpose-built for men's lifestyle brands, grooming subscription services, outdoor gear curators, and gift-box companies serving the male demographic. Constructed from heavyweight rigid chipboard, double-wall corrugated, and premium kraft materials, our men's subscription packaging prioritizes the structural integrity and tactile confidence that masculine brands demand — while delivering the premium unboxing experience that keeps subscribers loyal month after month.
                        </p>
                        <p>
                            Whether your men's subscription features craft grooming products, premium snacks and spirits, tactical gear samples, tech accessories, or curated sporting goods, our <strong className="text-foreground">men's gift box packaging</strong> accommodates diverse product weights and dimensions with precision custom inserts. With bold typographic printing, matte black finishes, gunmetal foil accents, and masculine color palettes, your subscription box projects exactly the brand identity that resonates with modern male consumers. Low minimums and fast 8–10 day turnaround make scaling your men's subscription seamless.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-10 bg-accent/5" id="quote-form">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end">
                        <div className="lg:col-span-7 space-y-6">
                            <div className="relative w-full max-w-lg mx-auto overflow-hidden rounded-lg shadow-sm border border-border bg-white" style={{ aspectRatio: '4/3' }}>
                                <img src={productImages[selectedImage].src} alt={productImages[selectedImage].alt} className="w-full h-full object-cover" />
                            </div>
                            <div className="w-full max-w-lg mx-auto grid grid-cols-5 gap-2">
                                {productImages.map((image, index) => (
                                    <button key={index} onClick={() => setSelectedImage(index)} className={`relative w-full aspect-square overflow-hidden rounded-md border transition-all duration-200 ${selectedImage === index ? 'border-primary shadow-md ring-2 ring-primary/20' : 'border-slate-200 hover:border-slate-300 hover:shadow-sm'}`}>
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
                                            <div className="space-y-1.5"><Label htmlFor="length" className="text-xs font-semibold text-muted-foreground">L (in)</Label><Input id="length" type="number" placeholder="12" className="h-9 bg-white" /></div>
                                            <div className="space-y-1.5"><Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label><Input id="width" type="number" placeholder="8" className="h-9 bg-white" /></div>
                                            <div className="space-y-1.5"><Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">D (in)</Label><Input id="depth" type="number" placeholder="5" className="h-9 bg-white" /></div>
                                        </div>
                                        <div className="space-y-1.5"><Label htmlFor="quantity" className="text-xs font-semibold text-muted-foreground">Quantity</Label><Input id="quantity" type="number" placeholder="500" className="h-9 bg-white" /></div>
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

            <section className="py-8 bg-slate-50 border-t border-slate-100">
                <div className="container mx-auto px-[5vw]">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">
                        The Growing Market for Premium Men's Subscription Packaging
                    </h2>
                    <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8
                            [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="[&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-8 [&>h3]:mb-3 [&>h3]:first:mt-0 [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-5 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-5 [&>ul]:space-y-2 [&>ul>li]:text-[15px] [&>ul>li]:text-slate-600">
                            <p>
                                The men's subscription box market has exploded over the past decade, growing from a niche novelty into a multi-billion-dollar segment spanning grooming, food and beverage, outdoor adventure, fitness, technology, and lifestyle curation. Brands like Dollar Shave Club, Birchbox Man, Bespoke Post, and Manscaped built category-defining companies on the strength of a simple premise: men who were historically underserved by subscription retail want high-quality curated products delivered to their door with a packaging experience that respects their aesthetic intelligence. Premium packaging is central to that value proposition.
                            </p>
                            <p>
                                At CustomPackMakers, we work with men's lifestyle brands at every stage of growth — from pre-launch test subscriptions to established brands serving tens of thousands of male subscribers monthly. Our men's subscription box solutions are informed by deep market research into the masculine packaging aesthetic: bold, confident, minimal graphics, dark color palettes, and structural materials that feel durable and substantial in the hand.
                            </p>

                            <h3>Masculine Aesthetic Design Principles</h3>
                            <p>
                                Men's subscription packaging requires a distinctly different design language from general consumer subscription boxes. The men's market rewards restraint, boldness, and a sense of quality that communicates without over-decoration:
                            </p>
                            <ul>
                                <li><strong>Matte Black & Charcoal Finishes:</strong> Deep matte black and charcoal laminations communicate premium masculine quality without the fussiness of multi-color decorative patterns. Our matte lambents achieve a velvety depth that feels expensive in the hand.</li>
                                <li><strong>Bold Typographic Branding:</strong> Large, confident san-serif and serif typefaces in silver, white, or gunmetal foil on dark backgrounds create an immediate visual authority that the men's market responds to strongly.</li>
                                <li><strong>Gunmetal & Silver Foil Accents:</strong> Metal-toned foil stamping in silver, gunmetal, or brushed metal finishes communicates the industrial-quality aesthetic that resonates with male consumers across grooming, outdoor, and lifestyle categories.</li>
                                <li><strong>Minimal Graphic Approach:</strong> Clean, uncluttered exterior designs with strategic use of negative space project confidence and premium status — avoiding the visual busyness that male consumers tend to interpret as cheap or juvenile.</li>
                            </ul>

                            <h3>Heavy-Duty Construction for Men's Product Categories</h3>
                            <p>
                                Men's subscription boxes frequently contain heavier, bulkier products than beauty or food subscription categories — razors, multi-tools, protein bars, tech gadgets, leather goods, and outdoor gear. Our construction specifications for men's subscription packaging reflect these demands:
                            </p>
                            <ul>
                                <li><strong>Heavyweight Rigid Chipboard:</strong> Our standard men's subscription box uses 2.5mm or 3mm chipboard that provides the solid, weighty feel that male consumers associate with quality and durability.</li>
                                <li><strong>Double-Wall Corrugated Outer Shippers:</strong> For heavy product assortments (protein tubs, multi-tools, outdoor gear), our double-wall corrugated outer shippers provide the structural robustness to survive commercial carrier handling without any damage to the interior presentation box.</li>
                                <li><strong>High-Tension Magnetic Closures:</strong> Our heavy-duty neodymium magnet closures provide the firm, satisfying snap that communicates structural confidence and adds a tactile premium quality to the unboxing experience.</li>
                                <li><strong>Custom Foam Inserts:</strong> Precision-cut EVA or polyurethane foam inserts cradling each product provide maximum protection for metal, glass, and electronic items commonly found in men's lifestyle subscription boxes.</li>
                            </ul>

                            <h3>Men's Subscription Categories We Serve</h3>
                            <p>
                                Our men's subscription packaging solutions are deployed across a diverse range of male subscription verticals, each with specific packaging requirements we understand deeply:
                            </p>
                            <ul>
                                <li>Premium grooming and men's skincare subscription services</li>
                                <li>Craft whiskey, beer, and cigars subscription curation boxes</li>
                                <li>Outdoor adventure and tactical gear monthly subscriptions</li>
                                <li>Men's fashion accessories and leather goods subscription boxes</li>
                                <li>Gaming and tech gadget subscription curation services</li>
                                <li>Fitness supplement and performance nutrition subscription boxes</li>
                            </ul>

                            <h3>Gifting as a Driver: Men's Subscription Box as the Perfect Gift</h3>
                            <p>
                                A significant percentage of men's subscription box revenue comes from gift purchases — partners, parents, and friends who buy subscriptions as birthday, holiday, and Father's Day gifts. This means your packaging must perform equally well as a direct-to-subscriber delivery and as a premium gift presentation. Our men's subscription boxes support custom gifting elements including personalized message cards, gift-ready magnetic closures that require no additional gift wrapping, and custom ribbon pulls that make opening the first delivery an occasion. Contact our team to discuss how we can develop a packaging system that serves both your subscriber and gifting customer segments simultaneously.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <RelatedProductEcommerce />

            <section className="py-12 relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #fafafa 0%, #f4f6ff 60%, #f0fdf8 100%)' }}>
                <div className="absolute top-0 left-0 w-80 h-80 bg-primary/4 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-300/8 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl pointer-events-none" />
                <div className="container mx-auto px-[30px] relative z-10">
                    <div className="text-center mb-14">
                        <span className="inline-block text-xs font-semibold tracking-widest text-primary uppercase mb-3 bg-primary/10 px-4 py-1.5 rounded-full">Our Promise</span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">Why Brands Choose <span className="text-primary">CustomPackMakers</span></h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">We combine bold masculine aesthetics, heavyweight construction, and subscription reliability to create men's boxes that subscribers genuinely look forward to every month.</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">
                        <div className="space-y-5">
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1"><div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300"><svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div></div>
                                <div><h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Bold Masculine Packaging Design</h3><p className="text-sm text-slate-500 leading-relaxed">Our <strong>subscription boxes for men</strong> use matte black finishes, gunmetal foil accents, and bold typographic branding that communicates the premium, confident masculine aesthetic modern male subscribers expect from premium lifestyle brands.</p></div>
                            </div>
                            <div className="w-full h-px bg-slate-100" />
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1"><div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors duration-300"><svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg></div></div>
                                <div><h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Heavyweight Structural Construction</h3><p className="text-sm text-slate-500 leading-relaxed">Our heavyweight chipboard and double-wall corrugated options ensure every <strong>men's subscription box</strong> feels as substantial and durable as the products inside — the kind of structural confidence that turns a first-time subscriber into a lifelong brand advocate.</p></div>
                            </div>
                            <div className="w-full h-px bg-slate-100" />
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1"><div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors duration-300"><svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div></div>
                                <div><h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Gift-Ready Presentation</h3><p className="text-sm text-slate-500 leading-relaxed">Our <strong>men's gift box packaging</strong> is engineered to perform equally as a subscriber delivery and a premium gift — with magnetic closures, ribbon pulls, and personalized card slots built into the structure to serve the significant gifting segment of men's subscription revenue.</p></div>
                            </div>
                        </div>
                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img src={heroImage} alt="Premium Men's Subscription Box" className="w-full h-full object-cover" />
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

            <section className="py-10 lg:py-12 bg-white overflow-hidden relative">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="relative group">
                            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] border border-primary/20 shadow-2xl transform transition-transform duration-700 hover:scale-[1.02]">
                                <img src={heroImage} alt="Differentiate Your Men's Subscription" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                            </div>
                            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-60" />
                            <div className="absolute -z-10 -top-8 -right-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl opacity-60" />
                        </div>
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                                Differentiate Your <span className="text-primary">Men's Brand</span> With Packaging That Commands Respect
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                At CustomPackMakers, we understand that men's subscription brands compete in a market where packaging communicates brand character loudly. Our team specializes in developing men's subscription packaging that projects the premium, confident identity that drives male subscriber loyalty and gift purchase decisions. From matte black exteriors with silver foil logos to heavyweight chipboard construction and precision foam inserts for grooming tools and tech accessories, we create the kind of subscription boxes that men actually show to their friends — the highest endorsement a subscription brand can receive.
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
                                <h2 className="text-2xl md:text-3xl font-bold text-foreground">Frequently Asked Questions</h2>
                                <p className="text-base text-muted-foreground">Everything you need to know about our men's subscription packaging.</p>
                            </div>
                            <Accordion type="single" collapsible defaultValue="item-1" className="w-full space-y-2">
                                {[
                                    { id: "item-1", question: "What finish options work best for a premium men's subscription aesthetic?", answer: "For men's subscription boxes, we recommend matte black or charcoal lamination as a base finish, paired with silver or gunmetal foil stamping for logos and brand names. This combination projects the confident, premium masculine aesthetic that the men's subscription market rewards. We also offer soft-touch matte for a velvet finish and spot UV accents for tactical-style graphic highlights." },
                                    { id: "item-2", question: "Can you accommodate heavy products like tools, grooming kits, or supplement bottles?", answer: "Yes. For heavy men's subscription products, we use heavyweight 3mm chipboard with reinforced corner construction, and we offer double-wall corrugated outer shippers for extreme weight situations. Custom-cut EVA or polyurethane foam inserts secure heavy metal, glass, and plastic items against impact during commercial carrier transit." },
                                    { id: "item-3", question: "Can the packaging work as a gift box without additional gift wrapping?", answer: "Absolutely. Our men's subscription boxes feature high-tension magnetic closures, clean matte exteriors, and optional ribbon pull-tab mechanisms that make the box inherently gift-ready — no additional gift wrapping required. We can also add personalized message card slots and gift-tier branding differentiators for subscribers who purchase at premium gifting levels." },
                                    { id: "item-4", question: "Do you offer eco-friendly materials for men's subscription boxes?", answer: "Yes. Our eco-friendly options for men's subscription packaging include recycled kraft board with soy-based inks, FSC-certified chipboard, and water-based coatings throughout. We also offer natural kraft exterior finishes with dark foil stamping for an eco-masculine aesthetic that appeals strongly to the outdoors and sustainability-conscious male subscriber segment." },
                                    { id: "item-5", question: "What is the minimum order and lead time for men's subscription boxes?", answer: "Minimum order quantity starts at 100 units with no structural tooling fees. Standard production lead time is 8–10 business days after artwork approval. Rush 4–6 day production is available. All orders include one complimentary digital proof before production begins, and free shipping applies to qualifying wholesale orders of men's subscription packaging." }
                                ].map((faq) => (
                                    <AccordionItem key={faq.id} value={faq.id} className="border border-slate-200 rounded-lg bg-white overflow-hidden data-[state=open]:border-primary data-[state=open]:ring-1 data-[state=open]:ring-primary/20 data-[state=open]:bg-primary/5 transition-all duration-300">
                                        <AccordionTrigger className="px-5 py-3 hover:no-underline [&>svg]:hidden group">
                                            <span className="text-left font-semibold text-foreground text-base">{faq.question}</span>
                                            <div className="shrink-0 ml-4 p-1 rounded-full bg-slate-100 group-data-[state=open]:bg-primary group-data-[state=open]:text-white transition-colors duration-200"><Plus className="h-3 w-3 group-data-[state=open]:hidden" /><Minus className="h-3 w-3 hidden group-data-[state=open]:block" /></div>
                                        </AccordionTrigger>
                                        <AccordionContent className="px-5 pb-5 pt-0 text-slate-600 leading-relaxed text-sm">{faq.answer}</AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                        <div className="relative w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden">
                            <img src={FAQimage} alt="Subscription Boxes For Men FAQ" className="absolute inset-0 w-full h-full object-cover" />
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

export default SubscriptionBoxesForMen;
