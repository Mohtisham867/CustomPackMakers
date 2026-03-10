import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { QuoteForm } from "@/components/QuoteForm";
import { BrandRating } from "@/components/BrandRating";
import { Card, CardContent } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TechnicalSpecsSection } from "@/components/TechnicalSpecsSection";
import { RelatedProductCustomBags } from "@/components/RelatedProductCustomBags";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";
import fallbackHero from "@/assets/custom_bags/tin-tie-paper-bags.webp";
import FAQimage from "@/assets/FAQ-image.png";

const TinTiePaperBags = () => {
    const [selectedImage, setSelectedImage] = useState(0);
    const productImages = [
        { src: fallbackHero, alt: "Tin Tie Paper Bags - Main View" },
        { src: fallbackHero, alt: "Tin Tie Paper Bags - Side Angle" },
        { src: fallbackHero, alt: "Tin Tie Paper Bags - Open View" },
        { src: fallbackHero, alt: "Tin Tie Paper Bags - Detail Shot" },
        { src: fallbackHero, alt: "Tin Tie Paper Bags - Lifestyle Shot" },
    ];
    const faqs = [
        { id: "item-1", question: "What Are The Benefits Of Tin Tie Paper Bags?", answer: "Our custom tin tie paper bags offer the perfect combination of natural paper aesthetics and convenient reclosable wire closure. The tin tie metal wire embedded in the bag's neck allows repeated opening and closing without degrading, maintaining product freshness between uses while projecting an authentic artisan brand image ideal for coffee, tea, bakery, and specialty food brands." },
        { id: "item-2", question: "What Is The Turnaround Time For My Order?", answer: "Our standard turnaround time is 8–10 business days after design approval. Expedited rush options (4–6 business days) are available for time-sensitive product launches and seasonal campaigns." },
        { id: "item-3", question: "Are Fully Custom Dimensional Sizes Available?", answer: "Yes, we manufacture completely bespoke custom dimensional tin tie paper bag structures from small quarter-pound pouches to bulk multi-pound coffee and tea bags, accommodating all specialty food size specifications." },
        { id: "item-4", question: "What Materials Are Available For Tin Tie Bags?", answer: "We offer tin tie bags in natural kraft paper, white bleached paper, and kraft paper with food-grade inner liners. Options include single-ply kraft for natural aesthetics and multi-ply laminated constructions with oxygen and moisture barriers for demanding food preservation requirements." },
        { id: "item-5", question: "Are These Bags Suitable For Coffee And Tea?", answer: "Yes, our tin tie paper bags are a premium choice for coffee and loose-leaf tea. Available with degassing valves for freshly roasted coffee, inner foil liners for extended freshness, and premium kraft exteriors for premium brand presentation — they meet all requirements of specialty coffee and tea packaging." }
    ];
    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Tin Tie Paper Bags | Premium Customized Packaging</title>
                <meta name="description" content="Order custom tin tie paper bags with reclosable wire closure and premium natural paper aesthetics for coffee, tea, and bakery brands. Wholesale pricing, fast turnaround." />
            </Helmet>
            <Header />
            <div className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 mt-[120px] md:mt-[160px]">
                <div className="container mx-auto px-[30px] py-4">
                    <Breadcrumb><BreadcrumbList>
                        <BreadcrumbItem><BreadcrumbLink asChild><Link to="/">Home</Link></BreadcrumbLink></BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem><BreadcrumbLink asChild><Link to="/shapes-styles">Shapes &amp; Styles</Link></BreadcrumbLink></BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem><BreadcrumbLink asChild><Link to="/shapes-styles/custom-bags">Custom Bags</Link></BreadcrumbLink></BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem><BreadcrumbPage>Tin Tie Paper Bags</BreadcrumbPage></BreadcrumbItem>
                    </BreadcrumbList></Breadcrumb>
                </div>
            </div>
            <section className="py-8 bg-background">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-7 space-y-6">
                            <div className="w-20 h-1.5 bg-primary rounded-full"></div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight"><span className="text-primary">Custom</span> Tin Tie Paper Bags</h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">Wholesale custom tin tie paper bags with reclosable wire closure and natural paper aesthetics built for coffee, tea, bakery, and specialty food brands that value artisan brand identity.</p>
                            <div className="pt-2"><Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300" onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}>Get a Quote</Button></div>
                        </div>
                        <div className="lg:col-span-5 relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-muted group">
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200"><img src={fallbackHero} alt="Custom Tin Tie Paper Bags Hero" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" /></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-8 bg-slate-50">
                <div className="container mx-auto px-[5vw]">
                    <div className="flex items-center gap-3 mb-5"><div className="w-10 h-1 bg-primary rounded-full" /><span className="text-xs font-semibold tracking-widest text-primary uppercase">Product Overview</span></div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 max-w-3xl">What Makes Our Tin Tie Paper Bags Stand Out</h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>Our <strong className="text-foreground">custom tin tie paper bags</strong> are precision-engineered for specialty food brands that demand the perfect marriage of artisan aesthetics and functional reclosability. The tin tie metal wire closure embedded in the bag's reinforced neck is rated for repeated opening and closing cycles without fatigue — maintaining product freshness between uses far better than fold-top alternatives.</p>
                        <p>Available in natural kraft, bleached white paper, and multi-layer laminated constructions with food-grade inner liners and optional CO2 degassing valves, our tin tie paper bags meet every specialty food packaging requirement from artisan bakeries to premium coffee roasters. Order wholesale with competitive pricing and our industry-leading 8–10 day turnaround.</p>
                    </div>
                </div>
            </section>
            <section className="py-10 bg-accent/5" id="quote-form">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end">
                        <div className="lg:col-span-7 space-y-6">
                            <div className="relative w-full max-w-lg mx-auto overflow-hidden rounded-lg shadow-sm border border-border bg-white" style={{ aspectRatio: '4/3' }}><img src={productImages[selectedImage].src} alt={productImages[selectedImage].alt} className="w-full h-full object-cover" /></div>
                            <div className="w-full max-w-lg mx-auto grid grid-cols-5 gap-2">{productImages.map((image, index) => (<button key={index} onClick={() => setSelectedImage(index)} className={`relative w-full aspect-square overflow-hidden rounded-md border transition-all duration-200 ${selectedImage === index ? 'border-primary shadow-md ring-2 ring-primary/20' : 'border-slate-200 hover:border-slate-300 hover:shadow-sm'}`}><img src={image.src} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" /></button>))}</div>
                        </div>
                        <div className="lg:col-span-5 lg:sticky lg:top-24">
                            <Card className="shadow-lg border-slate-200 bg-slate-50/50 backdrop-blur-sm overflow-hidden"><CardContent className="p-6">
                                <h3 className="text-xl font-bold text-foreground mb-5">Get a Custom Quote</h3>
                                <form className="space-y-4">
                                    <div className="grid grid-cols-3 gap-3">
                                        <div className="space-y-1.5"><Label htmlFor="length" className="text-xs font-semibold text-muted-foreground">L (in)</Label><Input id="length" type="number" placeholder="10" className="h-9 bg-white" /></div>
                                        <div className="space-y-1.5"><Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label><Input id="width" type="number" placeholder="5" className="h-9 bg-white" /></div>
                                        <div className="space-y-1.5"><Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">D (in)</Label><Input id="depth" type="number" placeholder="3" className="h-9 bg-white" /></div>
                                    </div>
                                    <div className="space-y-1.5"><Label htmlFor="quantity" className="text-xs font-semibold text-muted-foreground">Quantity</Label><Input id="quantity" type="number" placeholder="500" className="h-9 bg-white" /></div>
                                    <div className="space-y-1.5"><Label htmlFor="name" className="text-xs font-semibold text-muted-foreground">Name</Label><Input id="name" type="text" placeholder="Your Name" className="h-9 bg-white" /></div>
                                    <div className="space-y-1.5"><Label htmlFor="email" className="text-xs font-semibold text-muted-foreground">Email</Label><Input id="email" type="email" placeholder="email@example.com" className="h-9 bg-white" /></div>
                                    <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 shadow-md hover:shadow-lg transition-all duration-300 mt-2">Submit Inquiry</Button>
                                </form>
                            </CardContent></Card>
                        </div>
                    </div>
                </div>
            </section>
            <TechnicalSpecsSection />
            <section className="py-8 bg-slate-50 border-t border-slate-100">
                <div className="container mx-auto px-[5vw]">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">The Ultimate Guide to Premium Tin Tie Paper Bags</h2>
                    <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="[&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-8 [&>h3]:mb-3 [&>h3]:first:mt-0 [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-5">
                            <p><strong>Tin Tie Paper Bags</strong> have earned their place as the gold standard of artisan specialty food packaging. The signature tin tie wire closure — a metal wire embedded in the folded top edge of the bag — provides reliable, repeatable reclosability that fold-top alternatives simply cannot match. For coffee, tea, bakery, and specialty food brands, the tin tie bag communicates authenticity, craftsmanship, and premium quality in a complete packaging statement.</p>
                            <p>Beyond functionality, the natural paper aesthetic of tin tie bags resonates powerfully with today's consumers who seek authentic connections with artisan producers. Premium printing on natural kraft creates a warm, handcrafted aesthetic that synthetic materials simply cannot replicate — making tin tie bags a cornerstone of effective artisan brand storytelling.</p>
                            <h3>Advanced Manufacturing Process &amp; Superior Material Quality</h3>
                            <p>The foundation of our <strong>Tin Tie Paper Bags</strong> lies in precision multi-ply paper manufacturing and tin tie attachment engineering. Natural kraft or bleached paper is combined with food-grade inner liners where required, and the precision-formed tin tie wire is embedded and secured in the reinforced top section using advanced machinery that ensures consistent, repeatable closure performance across the entire production run.</p>
                            <h3>State-of-the-Art Printing Techniques (CMYK &amp; PMS)</h3>
                            <p>Our printing capabilities for <strong>Tin Tie Paper Bags</strong> deliver outstanding visual results on natural paper substrates. Advanced flexographic and digital printing technologies achieve crisp, vibrant artwork reproduction that leverages the warm kraft background as a natural design element. Logo placements, flavor descriptors, origin stories, and premium brand identities all translate beautifully to tin tie bag surfaces.</p>
                            <h3>Specialty Options: Degassing Valves and Barrier Liners</h3>
                            <p>For freshly roasted specialty coffee, we integrate precision CO2 degassing valves that allow outgassing without allowing oxygen ingress — preserving peak flavor for weeks to months. Combined with multi-layer foil inner liners, our tin tie bags for coffee provide the complete freshness preservation system that specialty roasters demand.</p>
                            <h3>Eco-Friendly Benefits &amp; Sustainable Sensibilities</h3>
                            <p>Our <strong>Tin Tie Paper Bags</strong> are inherently eco-friendly. Natural kraft paper is biodegradable and recyclable. We source from FSC-certified forests and offer recycled content options, aligning our tin tie bags with the environmental values that specialty food consumers consistently prioritize in their brand relationships.</p>
                            <h3>Maximizing Branding Impact and Return on Investment</h3>
                            <p>Investing in custom <strong>Tin Tie Paper Bags</strong> delivers measurable ROI for specialty food brands. The premium, artisan aesthetic commands higher perceived product values, the tin tie closure communicates quality through tactile interaction, and the natural material creates memorable multi-sensory brand experiences that drive repeat purchases and brand advocacy.</p>
                        </div>
                    </div>
                </div>
            </section>
            <RelatedProductCustomBags />
            <section className="py-12 relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #fafafa 0%, #f4f6ff 60%, #f0fdf8 100%)' }}>
                <div className="absolute top-0 left-0 w-80 h-80 bg-primary/4 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-300/8 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl pointer-events-none" />
                <div className="container mx-auto px-[30px] relative z-10">
                    <div className="text-center mb-14">
                        <span className="inline-block text-xs font-semibold tracking-widest text-primary uppercase mb-3 bg-primary/10 px-4 py-1.5 rounded-full">Our Promise</span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">Why Brands Choose <span className="text-primary">CustomPackMakers</span></h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">We combine craftsmanship, speed, and reliability to deliver packaging that makes your brand unforgettable.</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">
                        <div className="space-y-5">
                            <div className="flex gap-6 items-start group"><div className="flex-shrink-0 mt-1"><div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300"><svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div></div><div><h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Reliable Tin Tie Closure</h3><p className="text-sm text-slate-500 leading-relaxed">Every <strong>custom tin tie bag</strong> features precision-embedded metal wire closures rated for repeated opening and closing cycles without fatigue — maintaining product freshness between uses and providing consumer convenience that fold-top alternatives cannot match.</p></div></div>
                            <div className="w-full h-px bg-slate-100" />
                            <div className="flex gap-6 items-start group"><div className="flex-shrink-0 mt-1"><div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors duration-300"><svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg></div></div><div><h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Artisan Brand Aesthetics</h3><p className="text-sm text-slate-500 leading-relaxed">We engineer <strong>custom tin tie packaging</strong> with natural kraft and bleached paper options combined with premium printing — creating authentic artisan aesthetics that communicate craftsmanship and quality to specialty food consumers who value provenance and handcrafted excellence.</p></div></div>
                            <div className="w-full h-px bg-slate-100" />
                            <div className="flex gap-6 items-start group"><div className="flex-shrink-0 mt-1"><div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors duration-300"><svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div></div><div><h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Coffee-Ready Options</h3><p className="text-sm text-slate-500 leading-relaxed">Our <strong>wholesale tin tie paper bags</strong> are available with CO2 degassing valves and foil inner liners specifically designed for freshly roasted specialty coffee — providing complete freshness preservation that protects your craft roaster's quality reputation from production to the last cup.</p></div></div>
                        </div>
                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}><img src={fallbackHero} alt="Premium Tin Tie Paper Bags" className="w-full h-full object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" /><div className="absolute bottom-0 left-0 right-0 p-7"><p className="text-white font-bold text-lg leading-snug mb-1">Trusted by 500+ Brands</p><p className="text-white/75 text-sm">Delivering premium packaging across North America</p></div></div>
                            <div className="absolute top-4 -right-2 lg:-right-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80 backdrop-blur-sm"><p className="text-2xl font-bold text-primary leading-none">98%</p><p className="text-xs text-slate-400 mt-1 font-medium">Satisfaction Rate</p></div>
                            <div className="absolute bottom-4 -left-2 lg:-left-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80 backdrop-blur-sm"><p className="text-2xl font-bold text-emerald-500 leading-none">8–10</p><p className="text-xs text-slate-400 mt-1 font-medium">Day Turnaround</p></div>
                        </div>
                    </div>
                </div>
            </section>
            {/* DIFFERENTIATE YOUR BAGS SECTION */}
            <section className="py-10 lg:py-12 bg-white overflow-hidden relative">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="relative group">
                            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] border border-primary/20 shadow-2xl transform transition-transform duration-700 hover:scale-[1.02]">
                                <img src={fallbackHero} alt="Differentiate Your Bags" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                            </div>
                            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-60" />
                            <div className="absolute -z-10 -top-8 -right-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl opacity-60" />
                        </div>
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">Differentiate Your <span className="text-primary">Bags</span> From Others</h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">At CustomPackMakers, we understand that your packaging is the very first physical impression your brand makes. To ensure your bags stand out on crowded retail shelves, we combine state-of-the-art manufacturing with premium offset and digital printing. Choose from distinctive finishes — matte, gloss, soft-touch, foil stamping, or spot UV — applied to premium sustainable materials. Our experts collaborate with you to dial in the right dimensions, structures, and finishes that transform every bag into a powerful, memorable brand ambassador that drives repeat purchases and lasting customer loyalty.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-6 bg-slate-50">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                        <div className="space-y-6">
                            <div className="space-y-2"><h2 className="text-2xl md:text-3xl font-bold text-foreground">Frequently Asked Questions</h2><p className="text-base text-muted-foreground">We're confident that you will love our products and service.</p></div>
                            <Accordion type="single" collapsible defaultValue="item-1" className="w-full space-y-2">
                                {faqs.map((faq) => (<AccordionItem key={faq.id} value={faq.id} className="border border-slate-200 rounded-lg bg-white overflow-hidden data-[state=open]:border-primary data-[state=open]:ring-1 data-[state=open]:ring-primary/20 data-[state=open]:bg-primary/5 transition-all duration-300"><AccordionTrigger className="px-5 py-3 hover:no-underline [&>svg]:hidden group"><span className="text-left font-semibold text-foreground text-base">{faq.question}</span><div className="shrink-0 ml-4 p-1 rounded-full bg-slate-100 group-data-[state=open]:bg-primary group-data-[state=open]:text-white transition-colors duration-200"><Plus className="h-3 w-3 group-data-[state=open]:hidden" /><Minus className="h-3 w-3 hidden group-data-[state=open]:block" /></div></AccordionTrigger><AccordionContent className="px-5 pb-5 pt-0 text-slate-600 leading-relaxed text-sm">{faq.answer}</AccordionContent></AccordionItem>))}
                            </Accordion>
                        </div>
                        <div className="relative w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden"><img src={FAQimage} alt="Custom Tin Tie Paper Bags FAQ" className="absolute inset-0 w-full h-full object-cover" /></div>
                    </div>
                </div>
            </section>
            <BrandRating />
            <QuoteForm />
            <Footer />
        </div>
    );
};
export default TinTiePaperBags;
