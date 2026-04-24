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
import fallbackHero from "@/assets/custom_bags/paper-bags-with-handles.webp";
import FAQimage from "@/assets/FAQ-image.webp";

const PaperBagsWithHandles = () => {
    const [selectedImage, setSelectedImage] = useState(0);
    const productImages = [
        { src: fallbackHero, alt: "Paper Bags With Handles - Main View" },
        { src: fallbackHero, alt: "Paper Bags With Handles - Side Angle" },
        { src: fallbackHero, alt: "Paper Bags With Handles - Open View" },
        { src: fallbackHero, alt: "Paper Bags With Handles - Detail Shot" },
        { src: fallbackHero, alt: "Paper Bags With Handles - Lifestyle Shot" },
    ];
    const faqs = [
        { id: "item-1", question: "What Handle Types Are Available?", answer: "We offer a comprehensive range of handle options including twisted rope handles in kraft or cotton, flat ribbon handles, die-cut carry handles, and rolled-paper reinforced handles — each providing different weight capacities and aesthetic options to match your brand identity." },
        { id: "item-2", question: "What Is The Turnaround Time For My Order?", answer: "Our standard turnaround time is 8–10 business days after design approval. Expedited rush options (4–6 business days) are available for time-sensitive product launches and seasonal campaigns." },
        { id: "item-3", question: "Are Fully Custom Dimensional Sizes Available?", answer: "Yes, we manufacture completely bespoke custom dimensional paper bags with handles from small boutique gift bags to large retail shopping bags, accommodating all your size requirements." },
        { id: "item-4", question: "What Paper Weight Is Best For Heavy Products?", answer: "For heavy products, we recommend 150gsm–200gsm coated art paper with reinforced bottom panels and sturdy twisted rope or cotton ribbon handles. This combination provides excellent weight capacity while maintaining premium retail aesthetics." },
        { id: "item-5", question: "Can These Bags Be Printed With Luxury Finishes?", answer: "Yes, our paper bags with handles support premium printing with luxury finishes including soft-touch matte lamination, high-gloss UV coating, foil stamping, embossing, and spot UV — transforming standard shopping bags into premium brand experiences." }
    ];
    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Paper Bags With Handles | Premium Customized Packaging</title>
                <meta name="description" content="Order custom paper bags with handles in twisted rope, ribbon, and die-cut styles with premium printing and luxury finishes. Wholesale pricing, fast turnaround." />
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
                        <BreadcrumbItem><BreadcrumbPage>Paper Bags With Handles</BreadcrumbPage></BreadcrumbItem>
                    </BreadcrumbList></Breadcrumb>
                </div>
            </div>
            <section className="py-8 bg-background">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-7 space-y-6">
                            <div className="w-20 h-1.5 bg-primary rounded-full"></div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight"><span className="text-primary">Custom</span> Paper Bags With Handles</h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">Wholesale custom paper bags with handles in twisted rope, ribbon, and die-cut styles with premium printing and luxury finishes built for retail, boutique, and gifting brands.</p>
                            <div className="pt-2"><Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300" onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}>Get a Quote</Button></div>
                        </div>
                        <div className="lg:col-span-5 relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-muted group">
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200"><img src={fallbackHero} alt="Custom Paper Bags With Handles Hero" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" /></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-8 bg-slate-50">
                <div className="container mx-auto px-[5vw]">
                    <div className="flex items-center gap-3 mb-5"><div className="w-10 h-1 bg-primary rounded-full" /><span className="text-xs font-semibold tracking-widest text-primary uppercase">Product Overview</span></div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 max-w-3xl">What Makes Our Paper Bags With Handles Stand Out</h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>Our <strong className="text-foreground">custom paper bags with handles</strong> are precision-engineered for luxury retail, boutique, and gifting brands that demand premium unboxing experiences. Available with twisted rope handles, flat ribbon handles, and die-cut carry handles, each bag combines functional carrying convenience with premium brand presentation that customers remember and reuse.</p>
                        <p>With luxury finishes including soft-touch matte lamination, high-gloss UV coating, foil stamping, and embossing, your branded shopping bags become coveted accessories that extend your brand's reach far beyond the initial purchase. Order wholesale with competitive pricing and our industry-leading 8–10 day turnaround.</p>
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
                                        <div className="space-y-1.5"><Label htmlFor="length" className="text-xs font-semibold text-muted-foreground">L (in)</Label><Input id="length" type="number" placeholder="12" className="h-9 bg-white" /></div>
                                        <div className="space-y-1.5"><Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label><Input id="width" type="number" placeholder="8" className="h-9 bg-white" /></div>
                                        <div className="space-y-1.5"><Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">D (in)</Label><Input id="depth" type="number" placeholder="5" className="h-9 bg-white" /></div>
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">The Ultimate Guide to Premium Paper Bags With Handles</h2>
                    <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="[&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-8 [&>h3]:mb-3 [&>h3]:first:mt-0 [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-5">
                            <p><strong>Paper Bags With Handles</strong> represent the quintessential retail branding tool for luxury, boutique, and gifting brands. These bags transcend their functional purpose, becoming brand ambassadors that consumers willingly carry through shopping malls, streets, and social events — providing powerful, passive brand advertising long after the initial purchase.</p>
                            <p>The selection of the right handle type is crucial for brand positioning. Twisted rope handles communicate premium quality, flat ribbon handles evoke elegance and sophistication, while die-cut carry handles offer minimalist clean aesthetics. Our team guides brands to the handle option that best reflects their unique identity and target consumer expectations.</p>
                            <h3>Advanced Manufacturing Process &amp; Superior Material Quality</h3>
                            <p>The foundation of our <strong>Paper Bags With Handles</strong> lies in precision manufacturing. We source premium art paper from 120gsm to 200gsm+, applying advanced offset and digital printing before precision lamination and handle attachment. Each handle is mechanically reinforced using riveted attachment points and reinforced punch reinforcement, ensuring structural integrity under real-world loading conditions.</p>
                            <h3>State-of-the-Art Printing &amp; Finishing Options</h3>
                            <p>Our printing capabilities for <strong>Paper Bags With Handles</strong> enable complete brand expression. Full-color CMYK and PMS printing is enhanced with luxury finishes including soft-touch matte lamination, high-gloss UV coating, localized spot UV, hot foil stamping in gold, silver, and Pantone colors, and blind embossing — transforming shopping bags into genuine luxury accessories.</p>
                            <h3>Rigorous Durability Testing and Quality Assurance</h3>
                            <p>Before any packaging leaves our facility, it must pass intensive durability assessments including handle pull strength testing, bottom panel burst testing, and print adhesion testing across lamination options. Our paper bags with handles consistently exceed performance standards for the weight categories they are rated for.</p>
                            <h3>Eco-Friendly Benefits &amp; Sustainable Sensibilities</h3>
                            <p>We offer sustainable pathways for our <strong>Paper Bags With Handles</strong>. From FSC-certified paper sourcing to natural cotton rope handles, water-based inks, and biodegradable coatings, we help brands deliver premium retail experiences while genuinely minimizing their environmental impact — a growing consumer expectation across luxury retail.</p>
                            <h3>Maximizing Branding Impact and Return on Investment</h3>
                            <p>Investing in premium custom <strong>Paper Bags With Handles</strong> delivers ROI through multiple channels. Their reusability extends brand impressions over weeks and months, their premium aesthetic commands higher perceived product values, and their presence as walking advertisements in retail environments provides organic brand exposure that no digital campaign can replicate.</p>
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
                            <div className="flex gap-6 items-start group"><div className="flex-shrink-0 mt-1"><div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300"><svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div></div><div><h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Premium Handle Options</h3><p className="text-sm text-slate-500 leading-relaxed">Every <strong>custom paper bag with handles</strong> is available with twisted rope, flat ribbon, and die-cut carry handles — each providing a distinct brand aesthetic and appropriate weight capacity for retail, boutique, and gifting applications.</p></div></div>
                            <div className="w-full h-px bg-slate-100" />
                            <div className="flex gap-6 items-start group"><div className="flex-shrink-0 mt-1"><div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors duration-300"><svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg></div></div><div><h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Luxury Finish Options</h3><p className="text-sm text-slate-500 leading-relaxed">We engineer <strong>custom shopping bags</strong> with premium finishing options including soft-touch matte lamination, high-gloss UV coating, hot foil stamping, and blind embossing — transforming functional shopping bags into premium brand accessories.</p></div></div>
                            <div className="w-full h-px bg-slate-100" />
                            <div className="flex gap-6 items-start group"><div className="flex-shrink-0 mt-1"><div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors duration-300"><svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div></div><div><h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Passive Brand Advertising</h3><p className="text-sm text-slate-500 leading-relaxed">Our <strong>wholesale paper bags with handles</strong> become brand ambassadors that consumers willingly carry through retail environments — providing powerful, passive brand advertising that extends brand impressions far beyond the retail store at zero additional marketing cost.</p></div></div>
                        </div>
                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}><img src={fallbackHero} alt="Premium Paper Bags With Handles" className="w-full h-full object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" /><div className="absolute bottom-0 left-0 right-0 p-7"><p className="text-white font-bold text-lg leading-snug mb-1">Trusted by 500+ Brands</p><p className="text-white/75 text-sm">Delivering premium packaging across North America</p></div></div>
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
                        <div className="relative w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden"><img src={FAQimage} alt="Custom Paper Bags With Handles FAQ" className="absolute inset-0 w-full h-full object-cover" /></div>
                    </div>
                </div>
            </section>
            <BrandRating />
            <QuoteForm />
            <Footer />
        </div>
    );
};
export default PaperBagsWithHandles;
