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
import fallbackHero from "@/assets/shape-style/custom-bags/edible-mylar-bags.webp";
import FAQimage from "@/assets/FAQ-image.webp";

const EdibleMylarBags = () => {
    const [selectedImage, setSelectedImage] = useState(0);
    const productImages = [
        { src: fallbackHero, alt: "Edible Mylar Bags - Main View" },
        { src: fallbackHero, alt: "Edible Mylar Bags - Side Angle" },
        { src: fallbackHero, alt: "Edible Mylar Bags - Open Bag View" },
        { src: fallbackHero, alt: "Edible Mylar Bags - Detail Shot" },
        { src: fallbackHero, alt: "Edible Mylar Bags - Lifestyle Shot" },
    ];
    const faqs = [
        { id: "item-1", question: "What Are The Benefits Of Custom Edible Mylar Bags?", answer: "Our custom edible mylar bags protect gummies and baked edibles with tamper-evident seals, opaque backing, and food-grade verified barrier film. They feature compliance-ready printable surfaces for nutritional labeling and child-resistant options to meet regulatory requirements." },
        { id: "item-2", question: "What Is The Turnaround Time For My Order?", answer: "Our standard turnaround time is 8–10 business days after design approval. Expedited rush options (4–6 business days) are available for time-sensitive product launches." },
        { id: "item-3", question: "Are Fully Custom Dimensional Sizes Available?", answer: "Yes, we manufacture completely bespoke custom dimensional bag structures for single-serve edibles, multi-pack portions, and bulk wholesale quantities of any specification." },
        { id: "item-4", question: "What Material Is Best For Edible Products?", answer: "For edible products, we recommend our food-grade verified barrier film with tamper-evident seals and opaque backing. It provides excellent moisture barrier performance and ensures contents remain safe and compliant throughout the supply chain." },
        { id: "item-5", question: "Do These Bags Meet Food Safety Regulations?", answer: "Yes, our edible mylar bags are manufactured with food safety regulatory compliance in mind. We offer FDA-compliant materials, child-resistant closures, and compliance-ready surfaces for all required nutritional and warning labels." }
    ];
    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Edible Mylar Bags | Premium Customized Packaging</title>
                <meta name="description" content="Order custom edible mylar bags with food-grade barrier film, tamper-evident seals, and compliance-ready label surfaces. Wholesale pricing, fast turnaround." />
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
                        <BreadcrumbItem><BreadcrumbPage>Edible Mylar Bags</BreadcrumbPage></BreadcrumbItem>
                    </BreadcrumbList></Breadcrumb>
                </div>
            </div>
            <section className="py-8 bg-background">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-7 space-y-6">
                            <div className="w-20 h-1.5 bg-primary rounded-full"></div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight"><span className="text-primary">Custom</span> Edible Mylar Bags</h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">Wholesale custom edible mylar bags with food-grade barrier film, tamper-evident seals, opaque backing, and compliance-ready label surfaces for gummy and baked edible brands.</p>
                            <div className="pt-2"><Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300" onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}>Get a Quote</Button></div>
                        </div>
                        <div className="lg:col-span-5 relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-muted group">
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200"><img src={fallbackHero} alt="Custom Edible Mylar Bags Hero" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" /></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-8 bg-slate-50">
                <div className="container mx-auto px-[5vw]">
                    <div className="flex items-center gap-3 mb-5"><div className="w-10 h-1 bg-primary rounded-full" /><span className="text-xs font-semibold tracking-widest text-primary uppercase">Product Overview</span></div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 max-w-3xl">What Makes Our Edible Mylar Bags Stand Out</h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>Our <strong className="text-foreground">custom edible mylar bags</strong> are precision-engineered for cannabis and edible brands that prioritize safety, compliance, and premium brand presentation. Constructed from food-grade verified barrier film with tamper-evident seals and opaque backing, each bag delivers the regulatory-compliant protection your products demand while projecting a premium brand identity that customers trust.</p>
                        <p>With compliance-ready printable surfaces for nutritional labeling, full-color CMYK printing, and child-resistant closure options, your edible mylar bags meet every regulatory requirement while standing out on dispensary shelves. Order wholesale with competitive pricing and our industry-leading 8–10 day turnaround.</p>
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">The Ultimate Guide to Premium Edible Mylar Bags</h2>
                    <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="[&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-8 [&>h3]:mb-3 [&>h3]:first:mt-0 [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-5">
                            <p><strong>Edible Mylar Bags</strong> have rapidly emerged as a cornerstone solution for forward-thinking cannabis and edible brands. Our meticulously crafted bags are designed specifically for safe gummy and baked edible packaging, integrating tamper-evident seals, opaque backing, and compliance-ready printable surfaces for nutritional labeling — ensuring every bag serves as a powerful, compliant marketing tool.</p>
                            <p>Utilizing food-grade verified barrier film, these packages offer a tactile sensation of quality and safety that immediately sets your brand apart from competitors in dispensaries and specialty retailers.</p>
                            <h3>Advanced Manufacturing Process &amp; Superior Material Quality</h3>
                            <p>The foundation of our <strong>Edible Mylar Bags</strong> lies in a deeply refined manufacturing process. By utilizing food-grade verified barrier film, we guarantee a robust baseline of structural strength and regulatory compliance. Advanced multi-layer extrusion and lamination techniques create a unified barrier against moisture, oxygen, and UV light, preserving the integrity and potency of edible contents.</p>
                            <h3>State-of-the-Art Printing Techniques (CMYK &amp; PMS)</h3>
                            <p>Our printing capabilities for <strong>Edible Mylar Bags</strong> are completely unparalleled. We utilize cutting-edge flexographic and high-definition digital printing processes, supporting full CMYK and precise PMS spot colors. Compliance-ready surfaces allow seamless integration of required nutritional facts, dosage information, and regulatory warnings alongside your brand artwork.</p>
                            <h3>Rigorous Durability Testing and Quality Assurance</h3>
                            <p>Before any packaging leaves our facility, it must pass intensive stress tests. Because these bags are utilized for safe gummy and baked edible packaging, we heavily focus on food safety regulatory compliance and moisture barrier testing, ensuring contents remain safe, potent, and compliant throughout the entire supply chain.</p>
                            <h3>Eco-Friendly Benefits &amp; Sustainable Sensibilities</h3>
                            <p>We offer sustainable pathways for our <strong>Edible Mylar Bags</strong>. By sourcing eco-conscious materials and transitioning toward recyclable and biodegradable films where regulation permits, we empower edible brands to lower their environmental footprint without sacrificing performance or compliance.</p>
                            <h3>Maximizing Branding Impact and Return on Investment</h3>
                            <p>Investing in custom <strong>Edible Mylar Bags</strong> is a strategic financial decision that directly influences dispensary shelf performance. Packaging that incorporates compliance-ready printable surfaces for nutritional labeling naturally enhances consumer trust and drives long-term brand recognition in the competitive edible market.</p>
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
                            <div className="flex gap-6 items-start group"><div className="flex-shrink-0 mt-1"><div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300"><svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div></div><div><h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Food-Grade Safety Standards</h3><p className="text-sm text-slate-500 leading-relaxed">Every <strong>custom edible mylar bag</strong> is built from food-grade verified barrier film, selected for safety, regulatory compliance, and superior moisture barrier performance — protecting your edible products from production to consumption.</p></div></div>
                            <div className="w-full h-px bg-slate-100" />
                            <div className="flex gap-6 items-start group"><div className="flex-shrink-0 mt-1"><div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors duration-300"><svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg></div></div><div><h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Compliance-Ready Branding</h3><p className="text-sm text-slate-500 leading-relaxed">We engineer <strong>custom edible packaging</strong> with compliance-ready printable surfaces for all required nutritional labeling, dosage information, and regulatory warnings — seamlessly integrated with your premium brand artwork.</p></div></div>
                            <div className="w-full h-px bg-slate-100" />
                            <div className="flex gap-6 items-start group"><div className="flex-shrink-0 mt-1"><div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors duration-300"><svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div></div><div><h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Child-Resistant Options</h3><p className="text-sm text-slate-500 leading-relaxed">Our <strong>wholesale edible mylar bags</strong> are available with certified child-resistant closure mechanisms, meeting all state and federal packaging requirements for edible cannabis and food products without sacrificing convenient adult accessibility.</p></div></div>
                        </div>
                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}><img src={fallbackHero} alt="Premium Custom Edible Mylar Bag Packaging" className="w-full h-full object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" /><div className="absolute bottom-0 left-0 right-0 p-7"><p className="text-white font-bold text-lg leading-snug mb-1">Trusted by 500+ Brands</p><p className="text-white/75 text-sm">Delivering premium packaging across North America</p></div></div>
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
                        <div className="relative w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden"><img src={FAQimage} alt="Custom Edible Mylar Bags FAQ" className="absolute inset-0 w-full h-full object-cover" /></div>
                    </div>
                </div>
            </section>
            <BrandRating />
            <QuoteForm />
            <Footer />
        </div>
    );
};
export default EdibleMylarBags;
