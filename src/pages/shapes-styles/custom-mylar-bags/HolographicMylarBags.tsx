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
import { RelatedProductCustomMylarBags } from "@/components/RelatedProductCustomMylarBags";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";
import fallbackHero from "@/assets/mylar-bags/holographic-mylar-bags-premium.webp";
import FAQimage from "@/assets/FAQ-image.png";

const HolographicMylarBags = () => {
    const [selectedImage, setSelectedImage] = useState(0);
    const productImages = [
        { src: fallbackHero, alt: "Holographic Mylar Bags - Main View" },
        { src: fallbackHero, alt: "Holographic Mylar Bags - Light Shift Effect" },
        { src: fallbackHero, alt: "Holographic Mylar Bags - Open View" },
        { src: fallbackHero, alt: "Holographic Mylar Bags - Detail Shot" },
        { src: fallbackHero, alt: "Holographic Mylar Bags - Lifestyle Shot" },
    ];
    const faqs = [
        { id: "item-1", question: "What Creates The Holographic Effect On These Bags?", answer: "Our holographic mylar bags use specialized metalized film laminates with micro-embossed diffraction grating patterns that split ambient light into its spectral components — creating the rainbow, iridescent color-shifting visual effect that changes dramatically as the bag moves or as viewing angles change. The effect is produced at the film layer, not through printing." },
        { id: "item-2", question: "What Is The Turnaround Time For My Order?", answer: "Our standard turnaround time is 8–10 business days after design approval. Expedited rush options (4–6 business days) are available for urgent product launches and limited edition releases." },
        { id: "item-3", question: "Can Custom Artwork Be Printed Over The Holographic Surface?", answer: "Yes. We offer two holographic bag approaches: full holographic surface with overprint artwork (text and logo elements printed on the holographic film), and selective holographic areas combined with standard print regions — allowing precise placement of iridescent effects as design elements within conventional brand artwork layouts." },
        { id: "item-4", question: "Do Holographic Bags Have The Same Barrier Performance?", answer: "Yes. The holographic film is integrated at the laminate construction level — the barrier performance of the BoPET and additional barrier layers remains equivalent to standard mylar formats. Holographic effects are aesthetic modifications, not structural compromises." },
        { id: "item-5", question: "Are Holographic Bags Available With Child-Resistant Closures?", answer: "Yes. Our holographic mylar bags are available with ASTM D3475-certified child-resistant closures in all dispensary-standard sizes, making them suitable for compliant cannabis product packaging in all regulated markets." },
    ];
    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Holographic Mylar Bags | Premium Rainbow Packaging</title>
                <meta name="description" content="Order custom holographic mylar bags with rainbow iridescent color-shifting effects, premium barrier films, and full-color printing. Wholesale pricing, fast turnaround." />
            </Helmet>
            <Header />
            <div className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 mt-[120px] md:mt-[160px]">
                <div className="container mx-auto px-[30px] py-4">
                    <Breadcrumb><BreadcrumbList>
                        <BreadcrumbItem><BreadcrumbLink asChild><Link to="/">Home</Link></BreadcrumbLink></BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem><BreadcrumbLink asChild><Link to="/shapes-styles">Shapes &amp; Styles</Link></BreadcrumbLink></BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem><BreadcrumbLink asChild><Link to="/custom-mylar-bags">Custom Mylar Bags</Link></BreadcrumbLink></BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem><BreadcrumbPage>Holographic Mylar Bags</BreadcrumbPage></BreadcrumbItem>
                    </BreadcrumbList></Breadcrumb>
                </div>
            </div>
            <section className="py-8 bg-background">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-7 space-y-6">
                            <div className="w-20 h-1.5 bg-primary rounded-full"></div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight"><span className="text-primary">Custom</span> Holographic Mylar Bags</h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">Wholesale custom holographic mylar bags with rainbow iridescent color-shifting film laminates, premium barrier performance, and full-color printing overlay for cannabis and specialty goods brands demanding extraordinary shelf presence.</p>
                            <div className="pt-2"><Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300" onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}>Get a Quote</Button></div>
                        </div>
                        <div className="lg:col-span-5 relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-muted group">
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200"><img src={fallbackHero} alt="Custom Holographic Mylar Bags Hero" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" /></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-8 bg-slate-50">
                <div className="container mx-auto px-[5vw]">
                    <div className="flex items-center gap-3 mb-5"><div className="w-10 h-1 bg-primary rounded-full" /><span className="text-xs font-semibold tracking-widest text-primary uppercase">Product Overview</span></div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 max-w-3xl">What Makes Our Holographic Mylar Bags Stand Out</h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>Our <strong className="text-foreground">custom holographic mylar bags</strong> combine the barrier excellence of multi-layer mylar film with specialized holographic metalized laminates that create the captivating rainbow, iridescent color-shifting visual effect that makes these bags stop consumers in their tracks at point of sale. The diffraction grating patterns integrated into the laminate structure split ambient light into spectral components that shift with every movement — creating living, dynamic packaging that commands attention in any lighting environment.</p>
                        <p>With overlay CMYK print options, child-resistant closures, and all dispensary-standard sizes, our holographic mylar bags serve limited edition drops, premium product lines, and cannabis brands seeking the most distinctive visual shelf presence available in flexible packaging. Order wholesale with our 8–10 day turnaround.</p>
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
                                        <div className="space-y-1.5"><Label htmlFor="length" className="text-xs font-semibold text-muted-foreground">L (in)</Label><Input id="length" type="number" placeholder="8" className="h-9 bg-white" /></div>
                                        <div className="space-y-1.5"><Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label><Input id="width" type="number" placeholder="5" className="h-9 bg-white" /></div>
                                        <div className="space-y-1.5"><Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">D (in)</Label><Input id="depth" type="number" placeholder="2" className="h-9 bg-white" /></div>
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">The Ultimate Guide to Premium Holographic Mylar Bags</h2>
                    <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="[&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-8 [&>h3]:mb-3 [&>h3]:first:mt-0 [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-5">
                            <p><strong>Holographic Mylar Bags</strong> represent the most visually dynamic packaging format available in flexible pouch manufacturing. By integrating diffraction grating metalized laminates that create genuine rainbow iridescent effects that shift with ambient light and viewing angle, holographic bags deliver a living, animated visual presence that static print — however sophisticated — cannot replicate. In the cannabis retail environment, this visual dynamism creates an irreplaceable shelf impact that drives consumer selection instinctively.</p>
                            <h3>The Science of Holographic Film Effects</h3>
                            <p>The rainbow iridescent effect in our <strong>Holographic Mylar Bags</strong> is created by micro-embossed diffraction grating patterns at the nanoscale level within the metalized film layer. These patterns act as optical gratings that split incoming white light into its component spectral wavelengths at angle-dependent directions — so different colors appear dominant as viewing angle or light source position changes. This creates the characteristic color-shifting, rainbow effect that appears to move as the bag moves in any lighting environment.</p>
                            <h3>Overlay Printing Techniques</h3>
                            <p>Our <strong>Holographic Mylar Bags</strong> support two distinct print integration approaches. Full-surface holographic with overprint artwork uses transparent and semi-transparent inks over the holographic surface, allowing the iridescent effect to show through brand artwork elements. Selective holographic placement uses non-holographic regions for standard CMYK print and holographic panels as design accent elements — enabling more complex, layered visual designs that use holographic effects strategically rather than as a uniform background.</p>
                            <h3>Limited Edition and Collector Applications</h3>
                            <p>The cannabis industry's evolution toward collection culture — where consumers actively seek out limited edition strains, collaboration products, and exclusivity-signaling packaging — makes holographic bags a strategic tool for building the urgency and collector behavior that drives sell-out velocity and brand prestige accumulation. Our <strong>Holographic Mylar Bags</strong> are particularly effective as limited-edition release packaging that signals product exclusivity and rewards early-adopter brand loyalists.</p>
                            <h3>Barrier Performance Integration</h3>
                            <p>The holographic effect in our bags is achieved through laminate film technology that does not compromise the multi-layer barrier performance of the underlying BoPET mylar film. Oxygen, moisture, and UV barrier specifications remain equivalent to standard mylar formats, ensuring holographic bags deliver both extraordinary visual impact and the functional cannabis preservation performance that maintains product potency and quality from packaging to consumption.</p>
                        </div>
                    </div>
                </div>
            </section>
            <RelatedProductCustomMylarBags />
            <section className="py-12 relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #fafafa 0%, #f4f6ff 60%, #f0fdf8 100%)' }}>
                <div className="container mx-auto px-[30px] relative z-10">
                    <div className="text-center mb-14">
                        <span className="inline-block text-xs font-semibold tracking-widest text-primary uppercase mb-3 bg-primary/10 px-4 py-1.5 rounded-full">Our Promise</span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">Why Brands Choose <span className="text-primary">CustomPackMakers</span></h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">We combine craftsmanship, speed, and reliability to deliver packaging that makes your brand unforgettable.</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">
                        <div className="space-y-5">
                            <div className="flex gap-6 items-start group"><div className="flex-shrink-0 mt-1"><div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300"><svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div></div><div><h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">True Holographic Film Technology</h3><p className="text-sm text-slate-500 leading-relaxed">Our <strong>custom holographic mylar bags</strong> use authentic diffraction grating metalized laminates — not printed simulations — that create genuine rainbow iridescent effects that shift dynamically with ambient light and viewer movement, producing the living visual quality that makes these bags genuinely memorable at every point of sale.</p></div></div>
                            <div className="w-full h-px bg-slate-100" />
                            <div className="flex gap-6 items-start group"><div className="flex-shrink-0 mt-1"><div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors duration-300"><svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg></div></div><div><h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Overlay Print Integration</h3><p className="text-sm text-slate-500 leading-relaxed">We deliver full print-over-holographic and selective holographic area placement options — enabling <strong>holographic cannabis packaging</strong> that integrates brand artwork, compliance text, strain information, and design elements seamlessly with iridescent effects for coherent, high-impact designs beyond simple all-holographic backgrounds.</p></div></div>
                            <div className="w-full h-px bg-slate-100" />
                            <div className="flex gap-6 items-start group"><div className="flex-shrink-0 mt-1"><div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors duration-300"><svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div></div><div><h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Limited Edition Strategy Support</h3><p className="text-sm text-slate-500 leading-relaxed">Our <strong>wholesale holographic mylar bags</strong> are designed to support limited edition product launches and seasonal drops — providing the "must-have" visual distinctiveness that creates collector urgency, social media sharing behavior, and the brand buzz that compound into organic marketing ROI far exceeding the packaging investment cost.</p></div></div>
                        </div>
                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}><img src={fallbackHero} alt="Premium Holographic Mylar Bags" className="w-full h-full object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" /><div className="absolute bottom-0 left-0 right-0 p-7"><p className="text-white font-bold text-lg leading-snug mb-1">Trusted by 500+ Brands</p><p className="text-white/75 text-sm">Delivering premium packaging across North America</p></div></div>
                            <div className="absolute top-4 -right-2 lg:-right-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80 backdrop-blur-sm"><p className="text-2xl font-bold text-primary leading-none">98%</p><p className="text-xs text-slate-400 mt-1 font-medium">Satisfaction Rate</p></div>
                            <div className="absolute bottom-4 -left-2 lg:-left-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80 backdrop-blur-sm"><p className="text-2xl font-bold text-emerald-500 leading-none">8–10</p><p className="text-xs text-slate-400 mt-1 font-medium">Day Turnaround</p></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-10 lg:py-12 bg-white overflow-hidden relative">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="relative group">
                            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] border border-primary/20 shadow-2xl transform transition-transform duration-700 hover:scale-[1.02]"><img src={fallbackHero} alt="Differentiate Your Mylar Bags" className="w-full h-full object-cover" /><div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" /></div>
                            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-60" />
                            <div className="absolute -z-10 -top-8 -right-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl opacity-60" />
                        </div>
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">Differentiate Your <span className="text-primary">Mylar Bags</span> From Others</h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">At CustomPackMakers, holographic packaging is where art meets science. We combine authentic diffraction grating film technology with precision CMYK overlay printing to create mylar bags that are living, light-reactive brand experiences — impossible to ignore, impossible to forget. Our experts design holographic mylar bags that become the visual signature of your brand, driving the social sharing and collector loyalty that transforms packaging into your most powerful organic marketing asset.</p>
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
                        <div className="relative w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden"><img src={FAQimage} alt="Holographic Mylar Bags FAQ" className="absolute inset-0 w-full h-full object-cover" /></div>
                    </div>
                </div>
            </section>
            <BrandRating />
            <QuoteForm />
            <Footer />
        </div>
    );
};
export default HolographicMylarBags;
