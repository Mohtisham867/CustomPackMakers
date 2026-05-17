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
import fallbackHero from "@/assets/shape-style/mylar-bags/kraft-mylar-bags-premium.webp";
import FAQimage from "@/assets/FAQ-image.webp";

const KraftMylarBags = () => {
    const [selectedImage, setSelectedImage] = useState(0);
    const productImages = [
        { src: fallbackHero, alt: "Kraft Mylar Bags - Main View" },
        { src: fallbackHero, alt: "Kraft Mylar Bags - Natural Texture" },
        { src: fallbackHero, alt: "Kraft Mylar Bags - Open View" },
        { src: fallbackHero, alt: "Kraft Mylar Bags - Detail Shot" },
        { src: fallbackHero, alt: "Kraft Mylar Bags - Lifestyle Shot" },
    ];
    const faqs = [
        { id: "item-1", question: "What Makes Kraft Mylar Bags Different?", answer: "Custom kraft mylar bags combine the natural, earthy visual aesthetic of kraft paper with the superior oxygen, moisture, and UV barrier performance of mylar barrier films. The kraft paper exterior creates the natural, eco-conscious brand aesthetic that resonates with sustainability-positioned consumer goods brands, while the inner mylar barrier layers provide the functional preservation premium required by quality-focused products." },
        { id: "item-2", question: "What Is The Turnaround Time For My Order?", answer: "Our standard turnaround time is 8–10 business days after design approval. Expedited rush options (4–6 business days) are available for urgent restock situations and product launches." },
        { id: "item-3", question: "Are Kraft Mylar Bags Eco-Friendly?", answer: "Our kraft mylar bags use kraft paper exterior layers sourced from FSC-certified forests. While the inner barrier films are polymer-based (required for functional barrier performance), the dominant visual material — kraft paper — communicates a natural, eco-conscious brand identity that resonates strongly with sustainably positioned consumer goods brands and their target audiences." },
        { id: "item-4", question: "What Products Are Best Suited For Kraft Mylar Bags?", answer: "Kraft mylar bags are ideal for natural and organic food brands (coffee, tea, nuts, snacks), botanical supplements and herbal products, artisanal cannabis brands positioning around natural and organic values, and any specialty goods brand whose target consumer is motivated by natural, artisanal, or eco-conscious brand positioning." },
        { id: "item-5", question: "What Printing Options Are Available On Kraft Bags?", answer: "Full-color CMYK printing, screen printing, and digital printing are all available on kraft mylar bag surfaces. Matte laminates, spot UV, and embossing achieve particularly effective visual results on kraft's natural texture, creating a premium artisanal aesthetic that complements sustainable and organic brand positioning." },
    ];
    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Kraft Mylar Bags | Natural Eco-Aesthetic Packaging</title>
                <meta name="description" content="Order custom kraft mylar bags with natural kraft paper exterior, premium barrier films, and full-color printing. Wholesale pricing for natural and organic brands." />
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
                        <BreadcrumbItem><BreadcrumbPage>Kraft Mylar Bags</BreadcrumbPage></BreadcrumbItem>
                    </BreadcrumbList></Breadcrumb>
                </div>
            </div>
            <section className="py-8 bg-background">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-7 space-y-6">
                            <div className="w-20 h-1.5 bg-primary rounded-full"></div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight"><span className="text-primary">Custom</span> Kraft Mylar Bags</h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">Wholesale custom kraft mylar bags combining natural kraft paper aesthetics with premium multi-layer mylar barrier performance — ideal for organic food, botanical, artisanal cannabis, and eco-conscious specialty goods brands.</p>
                            <div className="pt-2"><Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300" onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}>Get a Quote</Button></div>
                        </div>
                        <div className="lg:col-span-5 relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-muted group">
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200"><img src={fallbackHero} alt="Custom Kraft Mylar Bags Hero" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" /></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-8 bg-slate-50">
                <div className="container mx-auto px-[5vw]">
                    <div className="flex items-center gap-3 mb-5"><div className="w-10 h-1 bg-primary rounded-full" /><span className="text-xs font-semibold tracking-widest text-primary uppercase">Product Overview</span></div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 max-w-3xl">What Makes Our Kraft Mylar Bags Stand Out</h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>Our <strong className="text-foreground">custom kraft mylar bags</strong> uniquely combine two distinct packaging worlds: the natural, earthy visual language of kraft paper with the superior oxygen, moisture, and UV barrier performance of premium mylar film construction. The kraft paper exterior creates an authentic natural and artisanal brand aesthetic that instantly communicates eco-conscious values, while the inner multi-layer barrier films provide the functional preservation performance that protects product quality from packaging to consumption.</p>
                        <p>With matte lamination, spot UV, embossing, and full-color CMYK printing options, our kraft mylar bags serve organic food brands, botanical supplement companies, artisanal cannabis brands, and any specialty goods brand seeking premium barrier packaging that resonates with the natural and sustainable values of their target consumer. Order wholesale with our 8–10 day turnaround.</p>
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">The Complete Guide to Custom Kraft Mylar Bags</h2>
                    <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="[&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-8 [&>h3]:mb-3 [&>h3]:first:mt-0 [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-5">
                            <p><strong>Kraft Mylar Bags</strong> serve a distinct market need: brands whose consumers are motivated by natural, organic, and eco-conscious values but who also require the premium product preservation that only mylar barrier films can deliver. The packaging format resolves what appears to be a tension — natural aesthetics versus synthetic barrier performance — by combining kraft paper exterior surfaces with inner barrier layers engineered entirely for functional performance.</p>
                            <h3>The Kraft Paper Aesthetic Signal</h3>
                            <p>In consumer goods marketing, packaging materials communicate brand values at a subconscious level before any brand messaging is consciously processed. The natural, earthy texture of kraft paper in our <strong>Kraft Mylar Bags</strong> immediately communicates natural ingredients, artisanal production methods, and environmental awareness — the precise brand value signals that consumers in the organic food, botanical supplement, and natural cannabis segments are conditioned to seek and trust as authenticity indicators.</p>
                            <h3>Functional Barrier Without Compromise</h3>
                            <p>The kraft paper exterior of our <strong>Kraft Mylar Bags</strong> is a laminated outer layer — not the primary barrier construction. The inner barrier film layers that actually protect product freshness are identical multi-layer BoPET constructions used in standard mylar formats, achieving equivalent oxygen transmission rates, moisture vapor transmission rates, and UV barrier performance. Natural aesthetics and premium barrier performance are not competing values in our kraft mylar construction.</p>
                            <h3>Printing and Finishing on Kraft Surfaces</h3>
                            <p>Kraft paper's natural fiber texture creates a distinct printing surface that achieves different aesthetic results than standard mylar film. Full-color CMYK printing achieves a slightly muted, organic color character that many natural brands find more authentic than the high-saturation colors achievable on standard films. Matte laminate finishes, earthy PMS color schemes, black or dark brown inks, and spot UV logo accents all achieve premium artisanal aesthetics particularly effective for premium organic food, coffee, and botanical product positioning.</p>
                            <h3>Sustainable Positioning Applications</h3>
                            <p>For brands where environmental values are central to market positioning, our <strong>Kraft Mylar Bags</strong> provide authentic sustainable signal value through FSC-certified kraft paper exterior material — enabling brands to truthfully communicate responsibly sourced packaging materials to environmentally motivated consumer segments who factor packaging sustainability into purchase decisions.</p>
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
                            <div className="flex gap-6 items-start group"><div className="flex-shrink-0 mt-1"><div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300"><svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div></div><div><h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Natural Aesthetic Authority</h3><p className="text-sm text-slate-500 leading-relaxed">Our <strong>custom kraft mylar bags</strong> use FSC-certified kraft paper exterior layers that create the authentic natural, artisanal aesthetic consumers in the organic food, botanical supplement, and natural cannabis categories specifically seek — validating brand eco-conscious positioning at point of sale with genuine material authenticity.</p></div></div>
                            <div className="w-full h-px bg-slate-100" />
                            <div className="flex gap-6 items-start group"><div className="flex-shrink-0 mt-1"><div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors duration-300"><svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg></div></div><div><h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Premium Barrier Without Compromise</h3><p className="text-sm text-slate-500 leading-relaxed">We engineer <strong>kraft mylar packaging</strong> where the natural paper exterior does not reduce barrier performance — the inner multi-layer mylar barrier construction maintains equivalent oxygen, moisture, and UV exclusion performance to standard mylar formats, combining natural aesthetics with uncompromised product preservation capability.</p></div></div>
                            <div className="w-full h-px bg-slate-100" />
                            <div className="flex gap-6 items-start group"><div className="flex-shrink-0 mt-1"><div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors duration-300"><svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div></div><div><h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Artisanal Finish Compatibility</h3><p className="text-sm text-slate-500 leading-relaxed">Our <strong>wholesale kraft mylar bags</strong> are optimized for artisanal finishing techniques — matte laminates, spot UV gloss contrasts, embossing, and black or earth-tone CMYK printing — that amplify the natural kraft texture to create premium artisanal packaging aesthetics that command premium positioning in natural and organic retail channels.</p></div></div>
                        </div>
                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}><img src={fallbackHero} alt="Premium Kraft Mylar Bags" className="w-full h-full object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" /><div className="absolute bottom-0 left-0 right-0 p-7"><p className="text-white font-bold text-lg leading-snug mb-1">Trusted by 500+ Brands</p><p className="text-white/75 text-sm">Delivering premium packaging across North America</p></div></div>
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
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">At CustomPackMakers, kraft mylar bags are where natural aesthetics meet functional excellence. We help organic, botanical, and artisanal brands create packaging that authentically communicates natural values through real kraft paper textures, earthy color palettes, spot UV accents, and embossed logo details — combined with barrier performance that keeps products fresh as long as premium brands demand. Stand out with packaging that your customers trust and love.</p>
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
                        <div className="relative w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden"><img src={FAQimage} alt="Kraft Mylar Bags FAQ" className="absolute inset-0 w-full h-full object-cover" /></div>
                    </div>
                </div>
            </section>
            <BrandRating />
            <QuoteForm />
            <Footer />
        </div>
    );
};
export default KraftMylarBags;
