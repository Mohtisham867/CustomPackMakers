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

import heroImage from "@/assets/subscription-boxes/cosmetic-subscription-box.webp";
import FAQimage from "@/assets/FAQ-image.png";

const CosmeticSubscriptionBoxes = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    const productImages = [
        { src: heroImage, alt: "Cosmetic Subscription Boxes - Main View" },
        { src: heroImage, alt: "Cosmetic Subscription Boxes - Interior" },
        { src: heroImage, alt: "Cosmetic Subscription Boxes - Open Box" },
        { src: heroImage, alt: "Cosmetic Subscription Boxes - Detail" },
        { src: heroImage, alt: "Cosmetic Subscription Boxes - Lifestyle" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Cosmetic Subscription Boxes | Branded Beauty Box Packaging | CustomPackMakers</title>
                <meta name="description" content="Order custom cosmetic subscription boxes wholesale. Premium branded beauty box packaging with luxury finishes, product inserts & fast turnaround. Get a free quote." />
                <meta name="keywords" content="cosmetic subscription boxes, beauty box packaging, custom beauty subscription boxes, monthly cosmetic boxes, wholesale beauty box packaging" />
                <meta property="og:title" content="Custom Cosmetic Subscription Boxes | Branded Beauty Box Packaging | CustomPackMakers" />
                <meta property="og:description" content="Premium custom cosmetic subscription packaging for beauty brands. Luxury finishes, custom inserts & full-color printing. Low minimums, 8–10 day turnaround." />
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
                            <BreadcrumbItem><BreadcrumbPage>Cosmetic Subscription Boxes</BreadcrumbPage></BreadcrumbItem>
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
                                <span className="text-primary">Custom</span> Cosmetic Subscription Boxes
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Wholesale custom beauty subscription packaging designed to wow subscribers, protect delicate cosmetic products, and deliver a premium unboxing experience that drives loyalty and social sharing.
                            </p>
                            <div className="pt-2">
                                <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300" onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}>
                                    Get a Quote
                                </Button>
                            </div>
                        </div>
                        <div className="lg:col-span-5 relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-muted group">
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200">
                                <img src={heroImage} alt="Cosmetic Subscription Boxes Hero" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
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
                        Beauty Subscription Packaging That Captivates From the Outside In
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            Our <strong className="text-foreground">custom cosmetic subscription boxes</strong> are purpose-built for beauty brands, skincare curators, and makeup subscription services that demand packaging worthy of the products inside. From rigid magnetic closure boxes with velvet-lined interiors to custom-divider beauty trays that hold serums, palettes, lipsticks, and brushes in perfect position, our packaging solutions are engineered to make every beauty unboxing a shareable, brand-amplifying event.
                        </p>
                        <p>
                            Manufactured from premium rigid chipboard, specialty art paper, and FSC-certified materials, our <strong className="text-foreground">beauty subscription boxes</strong> support full-color CMYK printing, gold and rose-gold foil stamping, soft-touch lamination, and embossing to create packaging that communicates the luxury, aspiration, and self-care ethos of your beauty brand. With custom inserts for every cosmetic product type and low minimums starting at 100 units, we make premium beauty packaging accessible from launch through scale.
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
                        The Power of Packaging in Cosmetic Subscription Brand Building
                    </h2>
                    <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8
                            [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="[&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-8 [&>h3]:mb-3 [&>h3]:first:mt-0 [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-5 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-5 [&>ul]:space-y-2 [&>ul>li]:text-[15px] [&>ul>li]:text-slate-600">
                            <p>
                                The beauty subscription market is among the most packaging-sensitive categories in all of consumer commerce. Subscription boxes like Birchbox, Ipsy, and FabFitFun built empires not on the strength of their products alone but on the power of their packaging as a monthly event that subscribers looked forward to and eagerly shared online. For emerging beauty brands and independent cosmetic curators, investing in premium cosmetic subscription packaging is one of the highest-ROI decisions you can make, directly impacting subscriber acquisition, retention, and organic word-of-mouth growth.
                            </p>
                            <p>
                                At CustomPackMakers, we have worked with beauty brands at every scale — from indie founder pre-launch boxes to established brands shipping tens of thousands of monthly subscribers. Our cosmetic subscription packaging solutions are informed by deep category expertise and designed to help beauty brands compete with the industry's best-packaged subscription experiences.
                            </p>

                            <h3>Custom Insert Solutions for Every Cosmetic Format</h3>
                            <p>
                                The cosmetic category is extraordinarily diverse in product shapes, sizes, and fragility profiles. A single beauty subscription box might contain a mascara wand, a glass serum bottle, a powder palette, a lip gloss tube, and a single-use sheet mask. Our insert engineering team creates custom internal configurations for any combination of cosmetic formats:
                            </p>
                            <ul>
                                <li><strong>Thermoformed Plastic Trays:</strong> Precision-vacuum-formed trays with individual cavities for each product ensure nothing shifts in transit. Available in clear, frosted, or colored formats to complement your brand aesthetic.</li>
                                <li><strong>Die-Cut Cardboard Cradles:</strong> Sustainably sourced cardboard inserts cut to the exact profile of each product provide a cost-effective, recyclable alternative to plastic trays.</li>
                                <li><strong>Velvet-Lined Compartments:</strong> For luxury beauty subscription tiers, velvet-lined compartments add tactile richness that elevates the perceived value of every product inside.</li>
                                <li><strong>Ribbon Pull-Tab Trays:</strong> A satin ribbon pull-tab beneath the insert tray adds a gifting ritual element that beauty subscribers photograph and share, driving organic UGC for your brand.</li>
                            </ul>

                            <h3>Beauty-Specific Print & Finish Capabilities</h3>
                            <p>
                                Beauty packaging must look as flawless as the products it contains. Our printing and finishing capabilities for cosmetic subscription boxes are specifically calibrated for the beauty aesthetic:
                            </p>
                            <ul>
                                <li><strong>Rose Gold & Gold Foil Stamping:</strong> The gold and rose-gold foil palette is the visual language of premium beauty. Our stamping achieves razor-sharp registration on even the most intricate logo typography.</li>
                                <li><strong>Pastel Pantone Color Matching:</strong> Perfect soft-pink, lavender, sage, and ivory pastel reproduction that matches your brand palette exactly, subscription-to-subscription consistency guaranteed.</li>
                                <li><strong>Soft-Touch Matte with Gloss Spot UV:</strong> The contrast of velvety matte surfaces with gloss spot UV highlights creates the tactile and visual premium effect that beauty consumers associate with high-end cosmetic brands.</li>
                                <li><strong>Embossed Floral & Abstract Patterns:</strong> Custom-embossed surface patterns add dimension and artistic identity to your beauty subscription box, making it feel like a collectible object of beauty in itself.</li>
                            </ul>

                            <h3>Social-Media-Ready Unboxing Design</h3>
                            <p>
                                Every element of a cosmetic subscription box should be designed with the camera in mind. Subscribers who film unboxing content become brand ambassadors reaching thousands of organic viewers. Our cosmetic subscription boxes are engineered for maximum visual impact during the unboxing sequence: a stunning exterior, a satisfying magnetic open, a branded tissue paper reveal, a perfectly arranged product insert, and a personalized card or beauty tip booklet. Each layer of the reveal is a planned sequence designed to maximize filming worthiness and social sharing.
                            </p>
                            <p>
                                Partner with CustomPackMakers to create cosmetic subscription packaging that makes every delivery date a beauty event your subscribers can't wait to share. Our team is ready to consult on every detail from structural engineering to print artwork guidance.
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
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">We combine beauty-category expertise, luxury finishing, and precision insert engineering to make every cosmetic subscription delivery unforgettable.</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">
                        <div className="space-y-5">
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1"><div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300"><svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div></div>
                                <div><h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">UGC-Optimized Unboxing</h3><p className="text-sm text-slate-500 leading-relaxed">Our <strong>cosmetic subscription boxes</strong> are engineered as filmed experiences — from satisfying magnetic opens to layered tissue reveals. Every element is designed to maximize social sharing, turning subscribers into organic brand influencers.</p></div>
                            </div>
                            <div className="w-full h-px bg-slate-100" />
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1"><div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors duration-300"><svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg></div></div>
                                <div><h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Beauty-Grade Precision Inserts</h3><p className="text-sm text-slate-500 leading-relaxed">From custom thermoformed trays to velvet-lined compartments, our <strong>beauty subscription box</strong> inserts secure every mascara wand, serum bottle, and palette perfectly — protecting products and maximizing the visual presentation moment.</p></div>
                            </div>
                            <div className="w-full h-px bg-slate-100" />
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1"><div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors duration-300"><svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div></div>
                                <div><h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Rose-Gold Luxury Finishing</h3><p className="text-sm text-slate-500 leading-relaxed">Our rose-gold and gold foil stamping, soft-touch matte lamination, and spot UV capabilities deliver the beauty-category aesthetic that turns first-time subscribers into long-term brand loyalists who proudly display your <strong>cosmetic subscription packaging</strong>.</p></div>
                            </div>
                        </div>
                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img src={heroImage} alt="Premium Cosmetic Subscription Box" className="w-full h-full object-cover" />
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
                                <img src={heroImage} alt="Differentiate Your Beauty Subscription" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                            </div>
                            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-60" />
                            <div className="absolute -z-10 -top-8 -right-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl opacity-60" />
                        </div>
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                                Differentiate Your <span className="text-primary">Beauty Brand</span> With Packaging That Commands Attention
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                At CustomPackMakers, we understand that the beauty subscription space demands packaging that is as aspirational and carefully curated as the products inside. Our team collaborates closely with beauty brands to engineer cosmetic subscription boxes that don't just contain products — they create multi-sensory brand experiences. From perfectly matched Pantone palettes and rose-gold foil logos to custom-printed tissue layers and personalized beauty tip inserts, we help you build the kind of unboxing ritual your subscribers film, share, and wait excitedly for every month.
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
                                <p className="text-base text-muted-foreground">Everything you need to know about our cosmetic subscription packaging.</p>
                            </div>
                            <Accordion type="single" collapsible defaultValue="item-1" className="w-full space-y-2">
                                {[
                                    { id: "item-1", question: "What insert types work best for mixed cosmetic assortments?", answer: "For mixed beauty subscription boxes containing products of different shapes and sizes, we recommend custom thermoformed plastic trays or die-cut cardboard inserts with individual product cavities. These keep each item — serums, lipsticks, mascaras, palettes — individually secured regardless of product size variation. We engineer the insert layout from your specific product dimensions to guarantee a perfect fit every time." },
                                    { id: "item-2", question: "Can you match specific Pantone colors for our beauty brand palette?", answer: "Yes. We use the Pantone Matching System (PMS) for exact color reproduction on cosmetic subscription boxes, ensuring that your brand's specific pastel pink, nude, lavender, or any other signature color is reproduced accurately and consistently across every production run, regardless of volume." },
                                    { id: "item-3", question: "Do you offer magnetic closure boxes for beauty subscriptions?", answer: "Absolutely. Magnetic closure rigid boxes are one of our most popular formats for premium beauty subscription brands. The satisfying magnetic snap adds a ritualistic quality to the unboxing experience that subscribers film and share. We offer single-magnet flap configurations and double-magnet book-style openings in various box depths." },
                                    { id: "item-4", question: "Can I add a custom interior print to my cosmetic subscription boxes?", answer: "Yes. Interior lid printing is available for all rigid box formats. This space is ideal for printing your brand story, a seasonal product guide, a motivational beauty quote, or ingredient highlights. Interior printing creates a secondary brand touchpoint that adds depth to the unboxing experience without any exterior packaging space cost." },
                                    { id: "item-5", question: "What is the lead time for cosmetic subscription boxes?", answer: "Our standard production lead time for custom cosmetic subscription boxes is 8–10 business days after artwork approval. Rush production at 4–6 business days is available for time-sensitive beauty subscription launches. All orders include a free digital proof review before production proceeds." }
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
                            <img src={FAQimage} alt="Cosmetic Subscription Boxes FAQ" className="absolute inset-0 w-full h-full object-cover" />
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

export default CosmeticSubscriptionBoxes;
