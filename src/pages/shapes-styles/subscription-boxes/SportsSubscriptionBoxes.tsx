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

import heroImage from "@/assets/subscription-boxes/sports-subscription-boxes.webp";
import FAQimage from "@/assets/FAQ-image.webp";

const SportsSubscriptionBoxes = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    const productImages = [
        { src: heroImage, alt: "Sports Subscription Boxes - Main View" },
        { src: heroImage, alt: "Sports Subscription Boxes - Interior" },
        { src: heroImage, alt: "Sports Subscription Boxes - Open Box" },
        { src: heroImage, alt: "Sports Subscription Boxes - Detail" },
        { src: heroImage, alt: "Sports Subscription Boxes - Lifestyle" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Sports Subscription Boxes | Athlete Box Packaging | CustomPackMakers</title>
                <meta name="description" content="Order custom sports subscription boxes wholesale. Premium athlete box packaging with bold performance aesthetics, durable materials & fast turnaround. Get a free quote." />
                <meta name="keywords" content="sports subscription boxes, athlete box packaging, custom sports subscription packaging, monthly sports boxes, wholesale sports subscription packaging" />
                <meta property="og:title" content="Custom Sports Subscription Boxes | Athlete Box Packaging | CustomPackMakers" />
                <meta property="og:description" content="Premium custom sports subscription packaging. Bold performance aesthetics, durable materials & custom athletic inserts. Low minimums, 8–10 day turnaround. Get a quote." />
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
                            <BreadcrumbItem><BreadcrumbPage>Sports Subscription Boxes</BreadcrumbPage></BreadcrumbItem>
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
                                <span className="text-primary">Custom</span> Sports Subscription Boxes
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Wholesale custom sports subscription packaging engineered for athletes, fitness enthusiasts, and sports lifestyle subscribers — combining high-energy performance aesthetics with durable construction for monthly deliveries that fuel competitive passion.
                            </p>
                            <div className="pt-2">
                                <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300" onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}>
                                    Get a Quote
                                </Button>
                            </div>
                        </div>
                        <div className="lg:col-span-5 relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-muted group">
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200">
                                <img src={heroImage} alt="Sports Subscription Boxes Hero" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
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
                        Sports Subscription Packaging Built for Peak Performance Athletes and Lifestyle Enthusiasts
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            Our <strong className="text-foreground">custom sports subscription boxes</strong> serve fitness brands, athletic training supplement curators, running and cycling lifestyle subscription services, team sports merchandise boxes, outdoor adventure gear monthly services, and sports nutrition subscription brands. The sports and fitness subscription market is driven by consumers who apply their athletic performance mindset to every product in their training ecosystem — including the packaging those products arrive in. A premium sports subscription box that looks and feels like premium performance gear communicates that your brand belongs in a serious athlete's training regimen.
                        </p>
                        <p>
                            Our <strong className="text-foreground">athlete box packaging</strong> is engineered with the high-energy visual language of the sports performance world — bold geometric graphics, high-contrast color palettes in electric blue, neon green, performance orange, and athletic red, and typography derived from championship sports design. Durable corrugated and heavyweight chipboard construction withstands the abuse of residential delivery for heavier athletic product categories, while precision foam and cardboard inserts protect supplement containers, training equipment, and performance apparel from transit damage. Low minimums from 100 units, 8–10 day turnaround.
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
                        Powering Athletic Performance Through Premium Sports Subscription Packaging
                    </h2>
                    <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="[&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-8 [&>h3]:mb-3 [&>h3]:first:mt-0 [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-5 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-5 [&>ul]:space-y-2 [&>ul>li]:text-[15px] [&>ul>li]:text-slate-600">
                            <p>
                                Sports and fitness subscription boxes serve a consumer community that is uniquely motivated, disciplined, and brand-aware. Athletes and fitness enthusiasts are highly attuned to quality signals in every product they bring into their training ecosystem — from the quality of their running shoes and training supplements to the packaging their monthly subscription box arrives in. A sports subscription box that looks premium, feels durable, and projects the high-energy visual identity of peak athletic performance communicates that your brand belongs in a serious athlete's world.
                            </p>
                            <p>
                                At CustomPackMakers, we engineer sports subscription packaging that matches the intensity, ambition, and visual energy of the sports and fitness world. Our sports subscription boxes are designed to motivate before they're even opened — conveying strength, movement, and competitive excellence through every design element.
                            </p>

                            <h3>Performance Aesthetic Design for Athletic Subscribers</h3>
                            <p>
                                Sports subscription packaging demands a bold, dynamic visual language that communicates performance credibility to athletes:
                            </p>
                            <ul>
                                <li><strong>High-Contrast Performance Color Palettes:</strong> Electric blue, neon green, performance orange, athletic red, and clean white used in bold, high-contrast combinations communicate the intensity and energy of peak athletic performance. Our sports subscription boxes use these palettes at maximum print saturation for maximum visual impact.</li>
                                <li><strong>Dynamic Motion Graphics:</strong> Diagonal typography, athlete silhouette photography, motion blur graphics, and geometric energy patterns evoke the physical dynamism of athletic performance — creating packaging that feels like it's in motion even when sitting still.</li>
                                <li><strong>Athletic Typography Systems:</strong> Condensed, bold sans-serif typefaces derived from championship sports design communicate confidence, authority, and competitive seriousness — the visual language that athletes immediately recognize as authentically belonging to their world.</li>
                                <li><strong>Sport-Specific Iconography:</strong> Custom-designed sport-specific icons — running shoes, kettlebells, bicycle wheels, basketball hoops — communicate specialized expertise that athletes value in subscription services serving their specific discipline.</li>
                            </ul>

                            <h3>Heavy-Duty Construction for Athletic Products</h3>
                            <p>
                                Sports subscription products are frequently among the heaviest in any subscription category — supplement tubs, resistance bands, training equipment, hydration bottles, and athletic footwear all require robust structural engineering:
                            </p>
                            <ul>
                                <li><strong>Reinforced Corrugated Construction:</strong> Double-wall corrugated outer box structures provide the structural resilience to survive commercial carrier transit with heavy athletic product loads without box compression or corner failure.</li>
                                <li><strong>Foam Equipment Inserts:</strong> Precision-cut EVA or polyurethane foam inserts cradle supplement containers, training tools, and electronic fitness accessories against impact damage during transit.</li>
                                <li><strong>Compartmentalized Product Organization:</strong> Custom corrugated dividers create organized product zones that prevent heavier items from shifting and crushing softer items during shipping.</li>
                                <li><strong>Performance Apparel Folding Trays:</strong> Structured flat-bottom trays accommodate folded compression gear, athletic socks, and performance apparel samples without wrinkling — arriving as neatly folded as a pro locker room deliver.</li>
                            </ul>

                            <h3>Building the Athletic Subscription Community</h3>
                            <p>
                                The most successful sports subscription brands build genuine training communities around their monthly boxes — online challenges, performance tracking, athlete spotlights, and training plan guides that use the physical subscription box as a community organizing touchpoint. Our printing capabilities support training challenge cards, athlete profile inserts, QR code workout program links, and nutrition guide booklets within your sports subscription box structure, transforming each monthly delivery into a training community engagement touchpoint. Partner with CustomPackMakers to build the sports subscription that serious athletes train with every month.
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
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">We combine high-energy athletic aesthetics, heavy-duty construction, and sports community engagement tools to create subscription boxes that athletes are proud to train with.</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">
                        <div className="space-y-5">
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1"><div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300"><svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div></div>
                                <div><h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Performance Athletic Aesthetics</h3><p className="text-sm text-slate-500 leading-relaxed">Our high-contrast color palettes, dynamic motion graphics, and championship typography create <strong>sports subscription boxes</strong> that communicate performance credibility — packaging that athletes immediately recognize as belonging to their world and that motivates before it's even opened.</p></div>
                            </div>
                            <div className="w-full h-px bg-slate-100" />
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1"><div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors duration-300"><svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg></div></div>
                                <div><h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Heavy-Duty Athletic Construction</h3><p className="text-sm text-slate-500 leading-relaxed">Our reinforced corrugated construction and precision foam equipment inserts ensure every <strong>athlete subscription box</strong> arrives structurally intact with all athletic products protected — from supplement tubs and resistance bands to training electronics and performance apparel.</p></div>
                            </div>
                            <div className="w-full h-px bg-slate-100" />
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1"><div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors duration-300"><svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div></div>
                                <div><h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Training Community Engagement Tools</h3><p className="text-sm text-slate-500 leading-relaxed">Our training challenge cards, athlete spotlight inserts, and QR-linked workout program capabilities transform every <strong>sports subscription box</strong> into a community engagement touchpoint — connecting subscribers to online training communities that dramatically improve subscription retention rates.</p></div>
                            </div>
                        </div>
                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img src={heroImage} alt="Premium Sports Subscription Box" className="w-full h-full object-cover" />
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
                                <img src={heroImage} alt="Sports Subscription Brand Differentiation" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                            </div>
                            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-60" />
                            <div className="absolute -z-10 -top-8 -right-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl opacity-60" />
                        </div>
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                                Train Your <span className="text-primary">Sports Brand</span> for Long-Term Subscriber Loyalty
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                At CustomPackMakers, we understand that sports subscription brands compete for the loyalty of highly motivated consumers who evaluate every product in their training ecosystem against strict quality and performance standards. Our team creates sports subscription packaging that passes that evaluation — bold performance aesthetics that communicate athletic credibility, heavy-duty construction that handles the heaviest athletic product loads, and training community engagement inserts that connect subscribers to the online community that dramatically improves subscription retention. Build the sports subscription brand that athletes keep renewing because your box makes them better athletes every month.
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
                                <p className="text-base text-muted-foreground">Everything you need to know about our sports subscription packaging.</p>
                            </div>
                            <Accordion type="single" collapsible defaultValue="item-1" className="w-full space-y-2">
                                {[
                                    { id: "item-1", question: "Can sports subscription boxes accommodate heavy supplement tubs and training equipment?", answer: "Yes. For heavy sports subscription products, we use reinforced double-wall corrugated construction with custom-cut EVA foam inserts that immobilize supplement containers, training tools, and electronic fitness devices against impact damage during commercial carrier transit. Our structural engineers specify the exact board weight and foam density required for your specific product weight and fragility profile." },
                                    { id: "item-2", question: "What performance aesthetic styles work best for sports subscription brands?", answer: "Sports subscription packaging performs strongest with high-contrast color palettes in electric blue, neon green, performance orange, or athletic red combined with dynamic geometric motion graphics and condensed bold sans-serif typography. For premium sports lifestyle brands targeting an older demographic, we also have strong results with refined matte black and silver approaches that project athletic sophistication rather than raw energy." },
                                    { id: "item-3", question: "Can you print training guides or workout challenge cards to include in sports boxes?", answer: "Yes. We print full-color training challenge cards, athlete spotlight features, QR-linked workout program cards, nutrition guide booklets, and performance tracking charts for inclusion in sports subscription boxes. These community engagement inserts significantly improve digital engagement rates and are directly correlated with improved subscription retention statistics for sports brands." },
                                    { id: "item-4", question: "Do you offer sport-specific packaging for niche athletic disciplines?", answer: "Yes. We design sport-specific packaging for running, cycling, CrossFit, swimming, basketball, soccer, baseball, martial arts, yoga, and any other athletic discipline. Sport-specific iconography, color coding, and design language communicates expertise and curation credibility to subscribers who actively seek out subscription services specialized for their specific athletic practice." },
                                    { id: "item-5", question: "What is the minimum order and lead time for sports subscription boxes?", answer: "Minimum order starts at 100 units with standard 8–10 business day production from artwork approval. Rush 4–6 day production is available for new season launch campaigns or major sporting event tie-in releases. Free shipping on qualifying wholesale sports subscription packaging orders. Volume pricing improves at 500-unit, 1,000-unit, and 5,000-unit monthly thresholds." }
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
                            <img src={FAQimage} alt="Sports Subscription Boxes FAQ" className="absolute inset-0 w-full h-full object-cover" />
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

export default SportsSubscriptionBoxes;
