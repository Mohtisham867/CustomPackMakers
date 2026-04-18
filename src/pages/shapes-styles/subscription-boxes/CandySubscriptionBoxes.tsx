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

import heroImage from "@/assets/subscription-boxes/candy-subscription-boxes.webp";
import FAQimage from "@/assets/FAQ-image.png";

const CandySubscriptionBoxes = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    const productImages = [
        { src: heroImage, alt: "Candy Subscription Boxes - Main View" },
        { src: heroImage, alt: "Candy Subscription Boxes - Interior" },
        { src: heroImage, alt: "Candy Subscription Boxes - Open Box" },
        { src: heroImage, alt: "Candy Subscription Boxes - Detail" },
        { src: heroImage, alt: "Candy Subscription Boxes - Lifestyle" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Candy Subscription Boxes | Sweet Treat Box Packaging | CustomPackMakers</title>
                <meta name="description" content="Order custom candy subscription boxes wholesale. Premium branded sweet treat packaging with food-safe materials, vibrant printing & fast turnaround. Get a free quote." />
                <meta name="keywords" content="candy subscription boxes, sweet treat box packaging, custom candy subscription packaging, monthly candy boxes, wholesale candy subscription packaging" />
                <meta property="og:title" content="Custom Candy Subscription Boxes | Sweet Treat Box Packaging | CustomPackMakers" />
                <meta property="og:description" content="Premium custom candy subscription packaging. Food-safe materials, vibrant full-color printing & custom candy trays. Low minimums, 8–10 day turnaround." />
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
                            <BreadcrumbItem><BreadcrumbPage>Candy Subscription Boxes</BreadcrumbPage></BreadcrumbItem>
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
                                <span className="text-primary">Custom</span> Candy Subscription Boxes
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Wholesale custom candy subscription packaging engineered with food-safe materials and vibrant, appetite-stimulating designs to make every monthly sweet delivery a joyful, shareable event for candy lovers everywhere.
                            </p>
                            <div className="pt-2">
                                <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300" onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}>
                                    Get a Quote
                                </Button>
                            </div>
                        </div>
                        <div className="lg:col-span-5 relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-muted group">
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200">
                                <img src={heroImage} alt="Candy Subscription Boxes Hero" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
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
                        Candy Subscription Packaging That Delivers Pure Joy Every Month
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            Our <strong className="text-foreground">custom candy subscription boxes</strong> are designed for confectionery brands, international candy curators, gummy and chocolate specialty services, and nostalgic candy subscription companies that turn monthly deliveries into celebrations. Manufactured from FDA-compliant, food-safe materials including coated SBS board and natural kraft, our candy subscription packaging uses vibrant full-color CMYK printing to achieve the bold, saturated color palettes that candy consumers associate with joy, fun, and delicious anticipation.
                        </p>
                        <p>
                            Whether your sweet subscription features artisan caramels, Japanese candy imports, vegan gummy assortments, seasonal limited-edition chocolates, or nostalgic American candy collections, our <strong className="text-foreground">sweet treat box packaging</strong> accommodates every candy format with custom tray inserts, individual candy compartments, and secure moisture-resistant liners. With holographic foil stamping, glossy UV coating, and bright Pantone color matching, your candy subscription box becomes a monthly celebration that children and adults alike look forward to with genuine excitement. Low minimums start at 100 units.
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
                        Sweet Success: How Packaging Powers Candy Subscription Growth
                    </h2>
                    <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="[&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-8 [&>h3]:mb-3 [&>h3]:first:mt-0 [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-5 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-5 [&>ul]:space-y-2 [&>ul>li]:text-[15px] [&>ul>li]:text-slate-600">
                            <p>
                                The candy subscription box market taps into one of the most universal human experiences — the joy of unexpected sweets. From children who squeal when the brightly colored box arrives at the door, to adults who use candy subscriptions to explore international confectionery cultures or relive beloved nostalgic treats, the candy subscription format has created an incredibly loyal subscriber base that spans demographics, age groups, and geographies. At the center of that loyalty is the packaging experience — the colorful box that signals celebration before it's even opened.
                            </p>
                            <p>
                                At CustomPackMakers, we engineer candy subscription packaging that matches the joy and playfulness of the product category while delivering the food safety, structural protection, and brand consistency that professional candy subscription services require. Our packaging solutions turn monthly candy deliveries into events that subscribers share, review, and renew because the experience is genuinely delightful from box to last piece.
                            </p>

                            <h3>Food-Safe Engineering for Candy Protection</h3>
                            <p>
                                Candy products present specific packaging challenges: moisture sensitivity, temperature-related melting risk, fragility of sugar-coated and hard candy pieces, and the need for compartmentalization to prevent flavor transfer. Our candy subscription box solutions address all of these:
                            </p>
                            <ul>
                                <li><strong>FDA-Compliant Food-Safe Coatings:</strong> All interior surfaces use FDA-approved food-safe coatings that prevent ink or adhesive transfer to candy products while providing a moisture-resistant barrier.</li>
                                <li><strong>Humidity-Barrier Interior Panels:</strong> Our moisture-resistant interior panel coatings prevent ambient humidity from softening hard candies, dissolving sugar coatings, or causing gummies to stick together during shipping.</li>
                                <li><strong>Individual Candy Compartments:</strong> Die-cut cardboard or thermoformed tray compartments separate different candy varieties within the subscription box, preventing flavor cross-contamination and maintaining individual product presentation.</li>
                                <li><strong>Individual Sealed Pouches:</strong> Each candy variety is accommodated in food-safe sealed pouch pockets within the box, maintaining individual freshness seals and allergen separation for multi-variety candy assortments.</li>
                                <li><strong>Temperature-Resistant Construction:</strong> Our rigid chipboard and corrugated formulations provide superior thermal buffering for chocolate-containing candy assortments during summer shipping in warm-climate regions.</li>
                            </ul>

                            <h3>Vibrant Packaging Aesthetics for the Candy Category</h3>
                            <p>
                                Candy packaging must communicate joy, abundance, and playfulness at first glance. The candy category is one where bold, saturated color is not just acceptable — it is expected and demanded by the consumer:
                            </p>
                            <ul>
                                <li><strong>Full-Saturation CMYK Printing:</strong> Our offset presses achieve maximum ink saturation for the bold, high-chroma pinks, yellows, oranges, and purples that candy packaging demands — colors that leap off the porch step and trigger excitement before the box is picked up.</li>
                                <li><strong>Holographic Foil Accents:</strong> Holographic rainbow foil stamping on logos, candy illustrations, and product names creates the magical, festive quality that candy brands use to communicate fun and celebrate the subscriber's monthly treat moment.</li>
                                <li><strong>Gloss UV Coating:</strong> High-gloss UV coating on the exterior panels makes colors appear more vibrant and saturated — the candy-store window effect that makes every candy subscription box look like an invitation to indulge.</li>
                                <li><strong>Illustrated Character Candy Art:</strong> Custom-illustrated candy character mascots, flavor icons, and playful typography create a distinctly branded candy world that subscribers associate with their monthly sweet ritual.</li>
                            </ul>

                            <h3>International and Specialty Candy Curation Categories</h3>
                            <p>
                                The candy subscription market is particularly strong in international candy exploration — Japanese KitKat flavors, Korean jelly candies, Mexican chile-dusted sweets, and European specialty chocolates. Our candy subscription boxes support international curation brands with multilingual labeling panels, origin story graphics, and cultural food education inserts that transform the candy box into a global confectionery passport each month.
                            </p>
                            <p>
                                Whether you're building a seasonal American nostalgic candy service, an international exploration subscription, a vegan-certified candy curation, or an artisan small-batch confectionery monthly, our candy subscription packaging engineers will create a box system that amplifies your brand, protects your sweets, and makes every subscriber's monthly delivery genuinely sweet. Contact our team for a free custom quote tailored to your candy subscription dimensions, assortment profile, and branding vision.
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
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">We combine candy-safe food engineering, vibrant maximum-saturation printing, and playful design to create sweet subscription boxes that subscribers celebrate every month.</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">
                        <div className="space-y-5">
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1"><div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300"><svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div></div>
                                <div><h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Maximum-Saturation Color Printing</h3><p className="text-sm text-slate-500 leading-relaxed">Our full-saturation offset presses reproduce the bold, high-chroma candy colors that turn <strong>candy subscription boxes</strong> into visual celebrations — making every delivery unmistakable from the doorstep and communicating joy before a single piece is tasted.</p></div>
                            </div>
                            <div className="w-full h-px bg-slate-100" />
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1"><div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors duration-300"><svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg></div></div>
                                <div><h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Candy-Safe Food Engineering</h3><p className="text-sm text-slate-500 leading-relaxed">Every <strong>sweet treat subscription box</strong> uses FDA-approved interior coatings, humidity-barrier panels, and individually sealed compartments that protect each candy variety's freshness — from gummies to hard candies to chocolate-enrobed treats — through the entire shipping journey.</p></div>
                            </div>
                            <div className="w-full h-px bg-slate-100" />
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1"><div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors duration-300"><svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div></div>
                                <div><h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Holographic & Gloss Festive Finishes</h3><p className="text-sm text-slate-500 leading-relaxed">Our holographic rainbow foil stamping and high-gloss UV coatings give <strong>candy subscription packaging</strong> the magical, festive visual quality that communicates celebration and abundance — making every delivery feel like a birthday, holiday, and sweet surprise simultaneously.</p></div>
                            </div>
                        </div>
                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img src={heroImage} alt="Premium Candy Subscription Box" className="w-full h-full object-cover" />
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
                                <img src={heroImage} alt="Candy Subscription Brand Differentiation" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                            </div>
                            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-60" />
                            <div className="absolute -z-10 -top-8 -right-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl opacity-60" />
                        </div>
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                                Make Your <span className="text-primary">Candy Brand</span> the Sweetest Box in the Mailbox
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                At CustomPackMakers, we understand that candy subscription brands compete for the most emotionally resonant moment in a subscriber's day — the arrival of something sweet, surprising, and personally curated. Our maximum-saturation printing, holographic foil accents, and food-safe candy compartment engineering help your brand deliver that moment with the visual boldness and product quality that turns first-time candy subscribers into long-term sweet loyalists who share every delivery on social media and gift subscriptions to everyone they know.
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
                                <p className="text-base text-muted-foreground">Everything you need to know about our candy subscription packaging.</p>
                            </div>
                            <Accordion type="single" collapsible defaultValue="item-1" className="w-full space-y-2">
                                {[
                                    { id: "item-1", question: "Are candy subscription box materials food-safe for direct candy contact?", answer: "Yes. All interior surfaces use FDA-approved food-safe coatings that are odor-neutral and free from inks or adhesives that could contaminate candy. Our humidity-barrier internal coatings prevent hard candies from softening, gummies from sticking, and chocolate coatings from blooming during diverse shipping conditions across North America." },
                                    { id: "item-2", question: "Can you separate different candy varieties within the same box?", answer: "Absolutely. We engineer custom die-cut cardboard dividers and thermoformed tray compartments that separate individual candy varieties, preventing flavor cross-contamination and allergen mixing. Each compartment can also accommodate individually sealed foil pouches for maximum freshness preservation and allergen integrity." },
                                    { id: "item-3", question: "What print finishes make candy subscription boxes look most vibrant?", answer: "For maximum candy-category visual impact, we recommend high-gloss UV coating on a full-bleed CMYK exterior print, combined with holographic foil stamping on your logo and key candy illustrations. This combination produces the bold, festive visual quality that the candy subscription market demands — colors that appear luminous even in low-light indoor delivery environments." },
                                    { id: "item-4", question: "Can you design candy subscription boxes for international candy curation brands?", answer: "Yes. We specialize in candy subscription packaging for international curation brands featuring Japanese, Korean, Mexican, and European candy assortments. We support multilingual labeling panels, origin story graphics, cultural education inserts, and allergen compliance panels in multiple languages — all within the primary candy subscription box structure." },
                                    { id: "item-5", question: "What is the minimum order and lead time for candy subscription boxes?", answer: "Minimum order starts at 100 units with standard 8–10 business day production from artwork approval. Rush 4–6 day production is available for seasonal candy collection launches. All orders include one complimentary digital proof before production begins, and free shipping applies to qualifying wholesale candy subscription box orders." }
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
                            <img src={FAQimage} alt="Candy Subscription Boxes FAQ" className="absolute inset-0 w-full h-full object-cover" />
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

export default CandySubscriptionBoxes;
