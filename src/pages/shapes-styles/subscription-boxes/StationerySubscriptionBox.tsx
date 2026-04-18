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

import heroImage from "@/assets/subscription-boxes/stationery-subscription-box.webp";
import FAQimage from "@/assets/FAQ-image.png";

const StationerySubscriptionBox = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    const productImages = [
        { src: heroImage, alt: "Stationery Subscription Box - Main View" },
        { src: heroImage, alt: "Stationery Subscription Box - Interior" },
        { src: heroImage, alt: "Stationery Subscription Box - Open Box" },
        { src: heroImage, alt: "Stationery Subscription Box - Detail" },
        { src: heroImage, alt: "Stationery Subscription Box - Lifestyle" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Stationery Subscription Box | Branded Paper Goods Packaging | CustomPackMakers</title>
                <meta name="description" content="Order custom stationery subscription boxes wholesale. Premium branded paper goods packaging with full-color printing, custom inserts & fast turnaround. Get a free quote." />
                <meta name="keywords" content="stationery subscription box, custom stationery subscription packaging, monthly stationery boxes, paper goods subscription packaging, desk accessory subscription box" />
                <meta property="og:title" content="Custom Stationery Subscription Box | Branded Paper Goods Packaging | CustomPackMakers" />
                <meta property="og:description" content="Premium custom stationery subscription packaging. Full-color printing, custom dividers & premium finishes. Low minimums, 8–10 day turnaround. Get a free quote." />
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
                            <BreadcrumbItem><BreadcrumbPage>Stationery Subscription Box</BreadcrumbPage></BreadcrumbItem>
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
                                <span className="text-primary">Custom</span> Stationery Subscription Box
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Wholesale custom stationery subscription packaging engineered to present paper goods, pens, planners, and desk accessories in beautiful, curated monthly deliveries that paper-lovers can't wait to unbox.
                            </p>
                            <div className="pt-2">
                                <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300" onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}>
                                    Get a Quote
                                </Button>
                            </div>
                        </div>
                        <div className="lg:col-span-5 relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-muted group">
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200">
                                <img src={heroImage} alt="Stationery Subscription Box Hero" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
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
                        Stationery Subscription Packaging That Celebrates the Joy of Paper
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            Our <strong className="text-foreground">custom stationery subscription boxes</strong> are built for paper goods brands, desk accessory curators, journaling communities, and creative subscription services that deliver handcrafted notebooks, premium pens, washi tape collections, stickers, planners, and art supplies to passionate stationery enthusiasts every month. Manufactured from premium rigid board, corrugate, and specialty textured art paper, our packaging solutions protect ink pens, glass nibs, embossed notebooks, and delicate washi tape from transit damage while presenting every item with gallery-worthy organization.
                        </p>
                        <p>
                            Our <strong className="text-foreground">paper goods subscription packaging</strong> supports complex multi-product layouts with precision cardboard dividers, pen loops, notebook pockets, and sticker sheet covers — ensuring every stationery item arrives pristine and ready to inspire. With full-color CMYK printing, foil stamping, embossed typography, and spot UV finishes, your stationery subscription box becomes a monthly creative statement that subscribers are proud to display on their desks and share with their communities. Low minimums start at 100 units with an 8–10 day production turnaround.
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
                        Why Stationery Subscription Brands Need Premium Packaging
                    </h2>
                    <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8
                            [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="[&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-8 [&>h3]:mb-3 [&>h3]:first:mt-0 [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-5 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-5 [&>ul]:space-y-2 [&>ul>li]:text-[15px] [&>ul>li]:text-slate-600">
                            <p>
                                The stationery subscription community is one of the most enthusiastic and brand-loyal subscriber segments in the entire subscription box ecosystem. Journaling communities, bullet planner enthusiasts, fountain pen collectors, and paper crafting creators are deeply aesthetically attuned individuals who notice every detail of their monthly box — from the exterior print quality to the interior organization layout to the tissue paper color chosen to wrap each item. For stationery subscription brands, packaging is not a peripheral element — it is the opening chapter of the monthly creative experience your subscribers have been anticipating all month.
                            </p>
                            <p>
                                At CustomPackMakers, we've worked with stationery subscription brands, paper goods curators, and journaling community subscription services to create packaging solutions that match the creative passion of their subscriber communities. Our stationery subscription boxes are designed as curated creative environments — organized, beautiful, and worthy of being photographed and shared across the stationery lover communities on Instagram, Pinterest, and YouTube.
                            </p>

                            <h3>Multi-Product Organization Engineering</h3>
                            <p>
                                Stationery subscription boxes contain the most diverse range of product types of almost any subscription category: rigid notebooks, flexible washi tape rolls, glass-tipped dip pens, watercolor pan sets, sticker sheets, embossed bookmarks, and more. Organizing this diversity in one cohesive, visually appealing layout while protecting every piece from transit damage requires meticulous insert engineering:
                            </p>
                            <ul>
                                <li><strong>Pen & Pencil Loops:</strong> Custom sewn or die-cut cardboard pen loops keep writing instruments perfectly aligned and prevent them from rolling, scratching, or puncturing other items.</li>
                                <li><strong>Notebook Pockets:</strong> Structured cardboard pockets hold notebooks flat and upright, preventing page bending or cover scuffing during shipping.</li>
                                <li><strong>Washi Tape Cores:</strong> Custom insert columns hold washi tape rolls safely on their cores without compressing them, preserving the tape's clean-tear functionality.</li>
                                <li><strong>Sticker Sheet Sleeves:</strong> Clear acetate or heavy-gauge glassine sleeves protect sticker sheets from moisture and surface contact that causes stickers to adhere prematurely.</li>
                                <li><strong>Divided Compartment Trays:</strong> Custom-height cardboard divider trays segment the box into product zones that create a beautifully organized reveal when the lid is opened.</li>
                            </ul>

                            <h3>Creative Aesthetics for Paper-Love Communities</h3>
                            <p>
                                Stationery subscribers are highly visual and deeply community-oriented. They share their subscription unboxings extensively and judge boxes harshly on aesthetic coherence. Premium stationery subscription packaging must have a clear visual identity that communicates the month's theme before a single item is removed:
                            </p>
                            <ul>
                                <li><strong>Themed Monthly Artwork:</strong> Full-color exterior artwork coordinated with the month's product theme — florals for spring, celestial patterns for winter — communicates curation quality that subscribers expect from premium stationery subscriptions.</li>
                                <li><strong>Foil Logo and Typography:</strong> Gold, silver, or holographic foil brand names and decorative typography deliver the premium publishing-house aesthetic that stationery communities associate with top-tier brands.</li>
                                <li><strong>Soft-Touch Interior Liner Prints:</strong> Custom-printed interior liner papers in the box wrap the entire unboxing experience in a cohesive visual world from the moment the lid is lifted.</li>
                                <li><strong>Embossed Exterior Patterns:</strong> Subtle geometric or botanical emboss patterns on the box exterior add tactile dimension that stationery lovers — who deeply appreciate texture — will immediately notice and appreciate.</li>
                            </ul>

                            <h3>Building a Stationery Community Through Packaging</h3>
                            <p>
                                The best stationery subscription brands use their packaging to create a sense of membership in an exclusive creative community. Custom packaging elements like a monthly creative challenge card, a featured maker profile, or a beautifully designed product guide booklet transform the unboxing from a product delivery into a community ritual. Our printing capabilities allow you to include all of these elements within your subscription box structure without adding bulk or cost to your per-unit packaging budget.
                            </p>
                            <p>
                                Partner with CustomPackMakers for stationery subscription packaging that matches the aesthetic excellence of your paper goods curation. Our team is ready to build the monthly creative experience your subscribers will photograph, share, and subscribe to indefinitely.
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
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">We combine creative-community-tested aesthetics, precision multi-product organization, and themed artwork flexibility to deliver stationery subscription boxes subscribers love.</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">
                        <div className="space-y-5">
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1"><div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300"><svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div></div>
                                <div><h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Creative-Community Aesthetics</h3><p className="text-sm text-slate-500 leading-relaxed">Our <strong>stationery subscription boxes</strong> are designed with the highly visual journaling and paper-love community in mind — themed monthly artwork, foil typography, and embossed patterns that subscribers are proud to photograph and share with their communities.</p></div>
                            </div>
                            <div className="w-full h-px bg-slate-100" />
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1"><div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors duration-300"><svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg></div></div>
                                <div><h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Multi-Item Organization Precision</h3><p className="text-sm text-slate-500 leading-relaxed">Our pen loops, notebook pockets, washi tape cores, and sticker sleeves keep every <strong>stationery subscription box</strong> item perfectly positioned, preventing damage and creating the organized, gallery-worthy reveal that subscribers film for their YouTube channels.</p></div>
                            </div>
                            <div className="w-full h-px bg-slate-100" />
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1"><div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors duration-300"><svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div></div>
                                <div><h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Monthly Theme Artwork Flexibility</h3><p className="text-sm text-slate-500 leading-relaxed">Our rapid seasonal artwork update system allows <strong>paper goods subscription</strong> brands to refresh their box exterior design each month without structural re-engineering costs — keeping your stationery subscription visually fresh and community-conversation-worthy every cycle.</p></div>
                            </div>
                        </div>
                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img src={heroImage} alt="Premium Stationery Subscription Box" className="w-full h-full object-cover" />
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
                                <img src={heroImage} alt="Differentiate Your Stationery Subscription" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                            </div>
                            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-60" />
                            <div className="absolute -z-10 -top-8 -right-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl opacity-60" />
                        </div>
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                                Differentiate Your <span className="text-primary">Stationery Brand</span> Every Single Month
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                At CustomPackMakers, we understand that stationery subscribers are your brand's most passionate advocates — active community members who share, review, and recommend based on the total monthly experience, beginning with your box. Our design team specializes in engineering stationery subscription boxes that function as monthly creative events: themed exterior artwork that subscribers recognize and anticipate, precision insert systems that reveal each item in a perfectly organized sequence, and premium foil and emboss finishes that communicate your brand's dedication to paper craftsmanship. Give your community a box they're proud to be part of.
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
                                <p className="text-base text-muted-foreground">Everything you need to know about our stationery subscription packaging.</p>
                            </div>
                            <Accordion type="single" collapsible defaultValue="item-1" className="w-full space-y-2">
                                {[
                                    { id: "item-1", question: "Can you create pen loops and notebook pockets inside stationery subscription boxes?", answer: "Yes. We engineer custom die-cut cardboard pen and pencil loops, notebook pockets, washi tape columns, and sticker sheet sleeves as integrated components of your stationery subscription box insert system. We design each insert layout from your specific product list to guarantee perfect fit, secure positioning, and a beautiful organized reveal." },
                                    { id: "item-2", question: "How do you handle themed monthly artwork changes for stationery subscriptions?", answer: "We maintain your structural dieline on file and update the exterior print artwork for each monthly theme refresh — florals, celestial, vintage, modern abstract — without any structural re-engineering costs. You supply the themed print-ready artwork and we turn around the updated production files within 2–3 business days of artwork receipt." },
                                    { id: "item-3", question: "What finish options make stationery subscription boxes look premium?", answer: "For stationery subscription brands, we recommend soft-touch matte lamination as a base with gold or silver foil stamping on your logo and key type elements. Adding subtle embossed geometric or botanical patterns to the exterior creates tactile dimension that your paper-loving subscribers will immediately appreciate. Spot UV gloss accents on design elements against the matte base create a striking premium contrast." },
                                    { id: "item-4", question: "Do you offer interior printing for stationery subscription boxes?", answer: "Yes. Interior lid printing is a popular option for stationery subscription brands. We print monthly theme quotes, featured maker profiles, creative challenge prompts, or beautifully illustrated patterns on the interior lid surface, creating a secondary brand reveal moment that adds depth and collectible value to each month's box." },
                                    { id: "item-5", question: "What minimum order quantity and lead time apply to stationery subscription boxes?", answer: "Minimum order quantity starts at 100 units. Standard production lead time is 8–10 business days from artwork approval. Rush 4–6 day production is available for time-sensitive stationery subscription launch windows. All orders include one complimentary digital proof review before production begins, and free shipping applies to qualifying wholesale orders." }
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
                            <img src={FAQimage} alt="Stationery Subscription Box FAQ" className="absolute inset-0 w-full h-full object-cover" />
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

export default StationerySubscriptionBox;
