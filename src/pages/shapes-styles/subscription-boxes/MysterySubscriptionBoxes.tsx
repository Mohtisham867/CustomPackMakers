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

import heroImage from "@/assets/subscription-boxes/mystery-subscription-boxes.webp";
import FAQimage from "@/assets/FAQ-image.webp";

const MysterySubscriptionBoxes = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    const productImages = [
        { src: heroImage, alt: "Mystery Subscription Boxes - Main View" },
        { src: heroImage, alt: "Mystery Subscription Boxes - Interior" },
        { src: heroImage, alt: "Mystery Subscription Boxes - Open Box" },
        { src: heroImage, alt: "Mystery Subscription Boxes - Detail" },
        { src: heroImage, alt: "Mystery Subscription Boxes - Lifestyle" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Mystery Subscription Boxes | Surprise Box Packaging | CustomPackMakers</title>
                <meta name="description" content="Order custom mystery subscription boxes wholesale. Premium surprise box packaging with enigmatic designs, durable construction & fast turnaround. Get a free quote." />
                <meta name="keywords" content="mystery subscription boxes, surprise box packaging, custom mystery box packaging, monthly mystery boxes, wholesale mystery subscription packaging" />
                <meta property="og:title" content="Custom Mystery Subscription Boxes | Surprise Box Packaging | CustomPackMakers" />
                <meta property="og:description" content="Premium custom mystery subscription packaging. Enigmatic designs, secure construction & premium finishes. Low minimums, 8–10 day turnaround. Get a free quote today." />
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
                            <BreadcrumbItem><BreadcrumbPage>Mystery Subscription Boxes</BreadcrumbPage></BreadcrumbItem>
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
                                <span className="text-primary">Custom</span> Mystery Subscription Boxes
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Wholesale custom mystery subscription packaging engineered to build maximum anticipation, deliver a theatrical reveal experience, and create the kind of monthly surprise that subscribers talk about, film, and share obsessively.
                            </p>
                            <div className="pt-2">
                                <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300" onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}>
                                    Get a Quote
                                </Button>
                            </div>
                        </div>
                        <div className="lg:col-span-5 relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-muted group">
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200">
                                <img src={heroImage} alt="Mystery Subscription Boxes Hero" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
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
                        Mystery Subscription Packaging Built to Maximize Surprise and Drive Unboxing Obsession
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            Our <strong className="text-foreground">custom mystery subscription boxes</strong> are purpose-engineered for brands that understand the addictive power of surprise. The mystery subscription model is one of the highest-engagement formats in subscription commerce because it transforms a routine monthly package into an event — a moment of genuine excitement, curiosity, and anticipation that subscribers film from the moment they pick up their box. The packaging is the stage for that performance, and it must be worthy of the theatrical reveal it contains.
                        </p>
                        <p>
                            Our <strong className="text-foreground">surprise box packaging</strong> is designed to build suspense from the outside in: enigmatic exterior designs that hint at mystery without revealing content, secure closure systems that resist spoiler-peeking, and layered interior reveal sequences that maximize the surprise moment with tissue layers, decorated crinkle filler, and individually wrapped product reveals. Manufactured in rigid chipboard and premium corrugated, every mystery subscription box we produce is structurally robust enough to survive transit while maintaining the pristine theatrical presentation that makes great unboxing content. Low minimums and fast turnaround support every subscription cycle.
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
                        The Psychology of Mystery Boxes and the Packaging That Powers Them
                    </h2>
                    <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8
                            [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="[&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-8 [&>h3]:mb-3 [&>h3]:first:mt-0 [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-5 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-5 [&>ul]:space-y-2 [&>ul>li]:text-[15px] [&>ul>li]:text-slate-600">
                            <p>
                                The mystery subscription box is one of the most psychologically compelling consumer products ever conceived. Behavioral economists identify the anticipation of uncertain reward as one of the most powerful motivators in human psychology — more compelling than the certainty of a known reward. Mystery subscription boxes harness this principle deliberately: subscribers pay for the anticipation itself, the ritual of the reveal, and the dopamine spike of discovering something unexpected and desirable. The packaging is the primary vehicle of that psychological experience, and it must be engineered with the same intentionality as a stage magician's performance.
                            </p>
                            <p>
                                At CustomPackMakers, we work with mystery subscription brands across every category — pop culture collectibles, gaming merchandise, beauty brands, snack curation services, book clubs, and hobbyist communities — to engineer packaging that maximizes the theatrical potential of every monthly reveal. Our mystery subscription boxes are built to perform, structurally first and experientially always.
                            </p>

                            <h3>Exterior Design: Building Suspense Without Spoiling</h3>
                            <p>
                                The exterior of a mystery subscription box walks a fine line: it must generate excitement and anticipation without revealing the contents or reducing the surprise impact of the interior reveal. Our mystery subscription exterior design capabilities include:
                            </p>
                            <ul>
                                <li><strong>Cryptic Symbol and Pattern Design:</strong> Enigmatic graphic patterns — mystery runes, question mark motifs, abstract celestial designs — communicate the spirit of surprise without hinting at specific products or themes.</li>
                                <li><strong>Teaser Copy and Intrigue Typography:</strong> Bold typographic teaser phrases — "What's Inside?", "Your Secret Has Arrived", "Open When Ready" — build anticipation and signal to subscribers that this is a performance, not just a package.</li>
                                <li><strong>Theme-Coded Color Palettes:</strong> Monthly color palette shifts on a consistent structural design signal a new theme is inside without explicitly revealing it — training subscribers to anticipate color changes as event signals.</li>
                                <li><strong>Tamper-Evident Seals:</strong> Custom-printed tamper-evident seals with mystery messaging ("Seal the Secret" / "The Mystery Awaits") serve the dual function of product security and theatrical experience building.</li>
                            </ul>

                            <h3>Interior Reveal Engineering: The Theatrical Sequence</h3>
                            <p>
                                The interior of a mystery subscription box must be engineered as a performance sequence — each layer revealed builds anticipation for the next. Our interior design capabilities for mystery boxes include:
                            </p>
                            <ul>
                                <li><strong>Layered Tissue Reveal:</strong> Custom-printed tissue paper in mystery-themed patterns serves as the first interior reveal layer — a satisfying rustle that signals something significant is about to be discovered.</li>
                                <li><strong>Themed Crinkle Filler:</strong> Color-coordinated crinkle cut paper filler between products adds visual volume and conceals product shapes, extending the discovery sequence and adding a tactile texture that photographs beautifully for unboxing content.</li>
                                <li><strong>Individually Wrapped Products:</strong> Wrapping individual products within the mystery box extends the reveal sequence and creates multiple surprise moments within each box opening — a powerful technique for maximizing subscriber satisfaction scores.</li>
                                <li><strong>Mystery Welcome Card:</strong> A theatrically designed welcome card that reveals the month's theme narrative, product backstory, or mystery challenge creates a narrative context for the discovery process that deepens subscriber engagement with your brand world.</li>
                            </ul>

                            <h3>Unboxing Content Optimization</h3>
                            <p>
                                Mystery subscription boxes are the single most filmed product category on YouTube, TikTok, and Instagram. Unboxing content featuring mystery subscription boxes generates hundreds of millions of organic views annually — content created for free by enthusiastic subscribers. Our mystery subscription packaging is engineered to be maximally filmable:
                            </p>
                            <ul>
                                <li>Bold, visually striking exterior designs that look dramatic in overhead flat-lay shots</li>
                                <li>Slow, satisfying magnetic closure openings that build genuine filmed anticipation</li>
                                <li>Visual interior organization that creates a beautiful "first reveal" frame for thumbnails</li>
                                <li>Color-coordinated interior elements that create cohesive visual storytelling across the entire film sequence</li>
                                <li>Individual product reveal moments engineered for maximum reaction-worthy surprise</li>
                            </ul>

                            <h3>Driving Retention Through Mystery Category Specifics</h3>
                            <p>
                                The mystery subscription model has one structural vulnerability: if subscribers consistently receive products they don't value, churn spikes rapidly. The best mystery subscription brands manage this challenge through smart curation, personalization questionnaires, and — critically — packaging that convinces subscribers the reveal experience itself is worth subscribing to regardless of any individual item. Premium packaging is the most powerful tool for convincing subscribers to renew after a less-than-perfect month, because the experience of opening the box remains excellent even when the contents feel ordinary. Partner with CustomPackMakers to build the mystery subscription box that keeps subscribers locked in month after month.
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
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">We combine theatrical reveal engineering, suspense-building exterior design, and unboxing-content optimization to create mystery boxes subscribers can't stop filming.</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">
                        <div className="space-y-5">
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1"><div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300"><svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div></div>
                                <div><h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Theatrical Reveal Sequencing</h3><p className="text-sm text-slate-500 leading-relaxed">Our <strong>mystery subscription boxes</strong> are engineered as performance sequences — layered tissue reveals, themed crinkle filler, individually wrapped products, and mystery welcome cards that turn every unboxing into a dramatic, multi-moment reveal that subscribers can't stop filming.</p></div>
                            </div>
                            <div className="w-full h-px bg-slate-100" />
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1"><div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors duration-300"><svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg></div></div>
                                <div><h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Suspense-Building Exterior Design</h3><p className="text-sm text-slate-500 leading-relaxed">Our cryptic symbol designs, teaser typography, and theme-coded color palettes build maximum anticipation on the exterior of every <strong>surprise box</strong> — training subscribers to feel genuine excitement from the moment the carrier scan notification hits their phone.</p></div>
                            </div>
                            <div className="w-full h-px bg-slate-100" />
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1"><div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors duration-300"><svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div></div>
                                <div><h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Unboxing Content Optimization</h3><p className="text-sm text-slate-500 leading-relaxed">Every element of our <strong>mystery subscription packaging</strong> is designed with the camera in mind — bold visual sequences, satisfying magnetic openings, and color-coordinated interior reveals that produce beautiful unboxing content that subscribers share across social media, driving organic subscriber acquisition at zero cost.</p></div>
                            </div>
                        </div>
                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img src={heroImage} alt="Premium Mystery Subscription Box" className="w-full h-full object-cover" />
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
                                <img src={heroImage} alt="Differentiate Your Mystery Subscription" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                            </div>
                            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-60" />
                            <div className="absolute -z-10 -top-8 -right-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl opacity-60" />
                        </div>
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                                Make Your <span className="text-primary">Mystery Brand</span> the Most Anticipated Box of the Month
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                At CustomPackMakers, we understand that the mystery subscription model lives and dies on the quality of the reveal experience. Our team specializes in engineering mystery subscription packaging that turns every monthly delivery into a genuine event — from the enigmatic exterior design and satisfying magnetic close to the layered tissue reveal, themed crinkle filler sequence, and individually wrapped product discovery moments. We give your subscribers a box they film, share, and subscribe to again and again because the opening experience itself is worth every dollar. Let us help you build the most-anticipated mystery box in your category.
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
                                <p className="text-base text-muted-foreground">Everything you need to know about our mystery subscription packaging.</p>
                            </div>
                            <Accordion type="single" collapsible defaultValue="item-1" className="w-full space-y-2">
                                {[
                                    { id: "item-1", question: "How do you design mystery subscription boxes to maximize unboxing suspense?", answer: "We engineer mystery subscription boxes with multiple suspense-building layers: enigmatic exterior graphics that hint at mystery without revealing products, tamper-evident seals with mystery-themed messaging, layered tissue paper reveals on opening, themed crinkle filler between individually wrapped products, and a theatrical mystery welcome card that reveals the month's narrative theme. Each layer is designed to build anticipation for the next." },
                                    { id: "item-2", question: "Can monthly mystery box exteriors change themes while keeping the same structure?", answer: "Yes. This is the most cost-effective approach for mystery subscription brands. We engineer one structural dieline and update the exterior print artwork monthly with each new mystery theme — new color palettes, graphic motifs, and teaser copy — without any structural retooling fees. Monthly artwork updates turn around in 2–3 business days from file submission." },
                                    { id: "item-3", question: "Can you print mystery-themed graphics on tissue paper and interior elements?", answer: "Yes. We print custom question mark patterns, celestial mystery motifs, and branded graphics on tissue paper that serves as the first interior reveal layer. Interior base panels and dividers can also be printed with themed background patterns that create a cohesive mystery world visual experience from the moment the outer lid is lifted." },
                                    { id: "item-4", question: "Do you offer tamper-evident seals for mystery subscription boxes?", answer: "Yes. We offer custom-printed tamper-evident sticker seals in multiple sizes that serve both as product security mechanisms and theatrical experience elements. Mystery-themed seal printing — 'Do Not Open Until Ready', 'Your Secret Awaits', 'Seal of Mystery' — bridges functional security with experiential engagement that enhances the unboxing ritual." },
                                    { id: "item-5", question: "What minimum order and lead time apply to mystery subscription boxes?", answer: "Minimum order quantity starts at 100 units. Standard production lead time is 8–10 business days from artwork approval. Rush 4–6 day production is available. All orders include one complimentary digital proof review. Monthly artwork update fees are minimal — contact our team for a detailed pricing schedule for ongoing mystery subscription box production commitments." }
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
                            <img src={FAQimage} alt="Mystery Subscription Boxes FAQ" className="absolute inset-0 w-full h-full object-cover" />
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

export default MysterySubscriptionBoxes;
