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

import heroImage from "@/assets/shape-style/subscription-boxes/subscription-boxes-for-women.webp";
import FAQimage from "@/assets/FAQ-image.webp";

const SubscriptionBoxesForWomen = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    const productImages = [
        { src: heroImage, alt: "Subscription Boxes For Women - Main View" },
        { src: heroImage, alt: "Subscription Boxes For Women - Interior" },
        { src: heroImage, alt: "Subscription Boxes For Women - Open Box" },
        { src: heroImage, alt: "Subscription Boxes For Women - Detail" },
        { src: heroImage, alt: "Subscription Boxes For Women - Lifestyle" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Subscription Boxes For Women | Women's Gift Box Packaging | CustomPackMakers</title>
                <meta name="description" content="Order custom subscription boxes for women wholesale. Premium women's gift box packaging with luxurious finishes, elegant designs & fast turnaround. Get a free quote." />
                <meta name="keywords" content="subscription boxes for women, women's subscription box packaging, custom women's gift boxes, monthly women's boxes, wholesale women's subscription packaging" />
                <meta property="og:title" content="Custom Subscription Boxes For Women | Women's Gift Box Packaging | CustomPackMakers" />
                <meta property="og:description" content="Premium custom women's subscription packaging. Luxurious finishes, elegant designs & custom product inserts. Low minimums, 8–10 day turnaround. Get a free quote." />
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
                            <BreadcrumbItem><BreadcrumbPage>Subscription Boxes For Women</BreadcrumbPage></BreadcrumbItem>
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
                                <span className="text-primary">Custom</span> Subscription Boxes For Women
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Wholesale custom women's subscription packaging designed with elegance, empowerment, and premium self-care aesthetics to create monthly deliveries that women genuinely look forward to and enthusiastically share.
                            </p>
                            <div className="pt-2">
                                <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300" onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}>
                                    Get a Quote
                                </Button>
                            </div>
                        </div>
                        <div className="lg:col-span-5 relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-muted group">
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200">
                                <img src={heroImage} alt="Subscription Boxes For Women Hero" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
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
                        Women's Subscription Packaging Built to Celebrate, Inspire & Delight
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            Our <strong className="text-foreground">custom subscription boxes for women</strong> serve the full spectrum of women's lifestyle, wellness, beauty, and empowerment subscription brands — from luxury self-care curations and feminist book clubs to women's wellness supplement services, fashion accessory subscriptions, and creative hobby boxes. Manufactured from premium rigid chipboard and specialty art paper, our women's subscription packaging is available in an extensive range of elegant aesthetic directions: sophisticated minimalism, vibrant floral maximalism, empowerment-themed typography, and soft luxury spa aesthetics.
                        </p>
                        <p>
                            Our <strong className="text-foreground">women's gift box packaging</strong> supports the broadest range of product types in any subscription category — beauty products, books, jewelry, candles, wellness supplements, fashion accessories, stationery, and food items — with category-appropriate inserts, velvet-lined compartments, and tissue-layer reveals that create a consistently luxurious unboxing experience regardless of the month's specific product mix. Rose gold and gold foil stamping, soft-touch matte lamination, and pastel Pantone printing make every women's subscription box a beautiful monthly gift. Low minimums from 100 units, 8–10 day turnaround.
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
                        Packaging That Celebrates Women: The Art of Women's Subscription Box Design
                    </h2>
                    <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="[&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-8 [&>h3]:mb-3 [&>h3]:first:mt-0 [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-5 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-5 [&>ul]:space-y-2 [&>ul>li]:text-[15px] [&>ul>li]:text-slate-600">
                            <p>
                                The women's subscription box market is the largest and most diverse segment in the global subscription commerce industry. From luxury beauty curation services charging $150+ per month to wellness and self-care subscriptions serving everyday mindfulness rituals, women's subscription brands span an enormous range of price points, aesthetics, and value propositions. What unites them is the powerful role that packaging plays in communicating brand identity, subscriber value, and the aspiration of the lifestyle they're inviting women to inhabit.
                            </p>
                            <p>
                                At CustomPackMakers, we've engineered packaging for women's subscription brands across every aesthetic — from soft pastel luxury and botanical wellness to bold empowerment typography and sophisticated minimalism. Our women's subscription packaging team understands that every design choice communicates something about the woman your brand is made for, and we work with you to ensure every visual and tactile element of your box resonates authentically with your specific subscriber community.
                            </p>

                            <h3>Aesthetic Direction for Women's Subscription Brands</h3>
                            <p>
                                Women's subscription packaging encompasses a wider aesthetic range than almost any other category, and choosing the right visual direction for your brand and subscriber community is critical:
                            </p>
                            <ul>
                                <li><strong>Soft Luxury Pastel:</strong> Soft blush pinks, lavender, sage green, and ivory Pantone palettes with rose gold foil communicate the aspirational self-care luxury of premium beauty and wellness subscription brands.</li>
                                <li><strong>Bold Empowerment Typography:</strong> Large, confident typographic statements — inspiring quotes, affirmations, and brand manifestos — communicate the values-led mission of empowerment-focused women's subscription brands.</li>
                                <li><strong>Botanical Wellness Print:</strong> Detailed botanical illustration wraps in sage and terracotta evoke the natural, holistic wellness aesthetic of plant-based beauty and clean supplement subscription services.</li>
                                <li><strong>Sophisticated Dark Luxury:</strong> Deep burgundy, midnight navy, and forest green with gold foil create a mature, sophisticated luxury aesthetic for premium women's lifestyle subscription brands targeting professional women.</li>
                                <li><strong>Vibrant Maximalist Pattern:</strong> Bold floral, geometric, or abstract pattern prints in vivid Pantone palettes communicate the playful, self-expressive joy of fashion accessory and creative hobby subscription brands.</li>
                            </ul>

                            <h3>Multi-Category Product Organization for Women's Subscriptions</h3>
                            <p>
                                Women's lifestyle subscriptions often curate the most diverse product assortments of any subscription category. A single box might include a skincare serum, a book, a scented candle, a jewelry piece, a snack, and a motivational card. Organizing this diversity beautifully requires sophisticated insert engineering:
                            </p>
                            <ul>
                                <li><strong>Velvet-Lined Jewelry Trays:</strong> Velvet-lined individual compartments display jewelry pieces in museum-quality presentation that communicates gift-level value for even modest pieces.</li>
                                <li><strong>Candle Protection Inserts:</strong> Foam inserts prevent candle jar breakage and wax surface damage while presenting candles upright in a visually appealing reveal position.</li>
                                <li><strong>Book and Card Pockets:</strong> Flat-bottom structural pockets hold books, journals, and cards flat and pristine within the box structure.</li>
                                <li><strong>Tissue-Wrapped Beauty Reveal:</strong> Beauty products wrapped in branded tissue paper beneath a top-layer crinkle filler create a layered reveal sequence that extends the unboxing pleasure.</li>
                            </ul>

                            <h3>The Self-Care Economy and Women's Subscription Loyalty</h3>
                            <p>
                                The self-care movement has fundamentally reshaped women's consumer behavior around subscription services. Women's subscription brands that communicate authentic care for their subscriber's wellbeing — through thoughtful curation, meaningful packaging, and consistent quality — earn extraordinary loyalty. Premium packaging is the most visible physical expression of that care. When a subscriber receives your women's subscription box and it feels genuinely luxurious, personally curated, and worthy of sharing, she doesn't just renew: she becomes an active advocate who introduces your brand to her network. Invest in packaging that makes every subscriber feel celebrated.
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
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">We combine women's aesthetic expertise, multi-category product organization, and premium self-care presentation to create subscription boxes women genuinely treasure.</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">
                        <div className="space-y-5">
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1"><div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300"><svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div></div>
                                <div><h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Women's Aesthetic Mastery</h3><p className="text-sm text-slate-500 leading-relaxed">Our team specializes in the full spectrum of women's subscription aesthetics — from blush rose-gold luxury and botanical wellness to bold empowerment typography and sophisticated dark luxury — creating <strong>subscription boxes for women</strong> that authentically resonate with each brand's specific subscriber community and lifestyle identity.</p></div>
                            </div>
                            <div className="w-full h-px bg-slate-100" />
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1"><div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors duration-300"><svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg></div></div>
                                <div><h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Multi-Category Insert Engineering</h3><p className="text-sm text-slate-500 leading-relaxed">Our velvet jewelry trays, candle protection inserts, book pockets, and tissue beauty reveals organize diverse product assortments within every <strong>women's subscription box</strong> into a visually beautiful, luxuriously layered presentation that maximizes the self-care ritual experience of every monthly opening.</p></div>
                            </div>
                            <div className="w-full h-px bg-slate-100" />
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1"><div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors duration-300"><svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div></div>
                                <div><h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Rose Gold Luxury Finishing</h3><p className="text-sm text-slate-500 leading-relaxed">Our rose-gold and gold foil stamping, soft-touch matte lamination, and pastel Pantone printing create <strong>women's subscription packaging</strong> that women genuinely treasure — boxes they display on their dressing tables, share in community groups, and point to when recommending your subscription to every woman in their network.</p></div>
                            </div>
                        </div>
                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img src={heroImage} alt="Premium Women's Subscription Box" className="w-full h-full object-cover" />
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
                                <img src={heroImage} alt="Women's Subscription Brand Differentiation" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                            </div>
                            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-60" />
                            <div className="absolute -z-10 -top-8 -right-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl opacity-60" />
                        </div>
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                                Create a <span className="text-primary">Women's Brand</span> She'll Open With Genuine Joy Every Month
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                At CustomPackMakers, we understand that women's subscription brands have the opportunity to create the most anticipated monthly moment in their subscribers' lives — a curated delivery of products, ideas, and experiences that says "you deserve this." Our packaging team specializes in creating women's subscription boxes that are as thoughtfully curated as the products inside — from the exact Pantone blush tone of the exterior to the velvet jewelry tray reveal and the empowerment affirmation on the interior lid. We build the kind of packaging experience that makes women proud to be subscribers and eager to share their box every month.
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
                                <p className="text-base text-muted-foreground">Everything you need to know about our women's subscription packaging.</p>
                            </div>
                            <Accordion type="single" collapsible defaultValue="item-1" className="w-full space-y-2">
                                {[
                                    { id: "item-1", question: "What aesthetic styles work best for women's subscription boxes?", answer: "Women's subscription packaging performs best when the aesthetic is precisely matched to the brand's specific subscriber community value proposition. Soft blush and rose gold for luxury beauty and self-care brands; bold empowerment typography for values-led mission brands; botanical wellness aesthetics for clean beauty and supplement brands; and vibrant maximalist patterns for creative hobby and fashion accessory subscriptions. We offer brand aesthetic consultation to help identify the visual direction that resonates most authentically with your subscriber community." },
                                    { id: "item-2", question: "Can you accommodate mixed product types — beauty, books, jewelry — in one box?", answer: "Yes. We specialize in multi-category insert systems for women's lifestyle subscriptions that span beauty, accessories, books, candles, snacks, and wellness products. Each product type receives dedicated structural accommodation — velvet jewelry pockets, candle protection inserts, book pockets, beauty tissue layers — organized within a unified visual reveal sequence that maximizes the luxury unboxing experience." },
                                    { id: "item-3", question: "Do you offer rose gold foil stamping for women's subscription branding?", answer: "Yes. Rose gold foil stamping is one of our most popular finishing options for women's subscription packaging. We offer rose gold in warm, cool, and true-rose tone variants to match specific brand palettes. Combined with soft-touch matte lamination, rose gold foil creates the ultra-premium feminine aesthetic that the most successful beauty and lifestyle subscription brands use to command premium subscriber pricing." },
                                    { id: "item-4", question: "Can an inspirational quote or affirmation be printed inside the box lid?", answer: "Absolutely. Interior lid printing of monthly affirmations, motivational quotes, brand missions, or seasonal wellness themes is one of our most popular women's subscription features. It transforms every box opening into a two-stage experience — the visual product reveal followed by an uplifting message — creating an emotional connection that significantly improves subscriber satisfaction scores and renewal rates." },
                                    { id: "item-5", question: "What is the minimum order and lead time for women's subscription boxes?", answer: "Minimum order starts at 100 units. Standard production lead time is 8–10 business days from artwork approval. Rush 4–6 day production is available for International Women's Day, Mother's Day, or seasonal campaign launch windows. Free shipping on qualifying wholesale women's subscription packaging orders." }
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
                            <img src={FAQimage} alt="Subscription Boxes For Women FAQ" className="absolute inset-0 w-full h-full object-cover" />
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

export default SubscriptionBoxesForWomen;
