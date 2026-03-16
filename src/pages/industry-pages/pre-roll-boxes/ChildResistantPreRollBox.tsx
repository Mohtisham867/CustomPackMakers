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
import { RelatedProductPreRoll } from "@/components/RelatedProductPreRoll";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";
import childresistantprerollhero from "@/assets/pre-roll-boxes/child-resistant-pre-roll-box/img-hero.png";
import childresistantpreroll1 from "@/assets/pre-roll-boxes/child-resistant-pre-roll-box/img-1.png";
import childresistantpreroll2 from "@/assets/pre-roll-boxes/child-resistant-pre-roll-box/img-2.png";
import childresistantpreroll3 from "@/assets/pre-roll-boxes/child-resistant-pre-roll-box/img-3.png";
import childresistantpreroll4 from "@/assets/pre-roll-boxes/child-resistant-pre-roll-box/img-4.png";
import childresistantpreroll5 from "@/assets/pre-roll-boxes/child-resistant-pre-roll-box/img-5.png";
import childresistantpreroll6 from "@/assets/pre-roll-boxes/child-resistant-pre-roll-box/img-whychoose.png";
import childresistantpreroll7 from "@/assets/pre-roll-boxes/child-resistant-pre-roll-box/img-different.png";
import FAQimage from "@/assets/FAQ-image.png";

const ChildResistantPreRollBox = () => {
    const [selectedImage, setSelectedImage] = useState(0);
    const productImages = [
        { src: childresistantpreroll1, alt: "Child Resistant Pre Roll Box - Main View" },
        { src: childresistantpreroll2, alt: "Child Resistant Pre Roll Box - Side Angle" },
        { src: childresistantpreroll3, alt: "Child Resistant Pre Roll Box - Open View" },
        { src: childresistantpreroll4, alt: "Child Resistant Pre Roll Box - Detail Shot" },
        { src: childresistantpreroll5, alt: "Child Resistant Pre Roll Box - Lifestyle Shot" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Child Resistant Pre Roll Box | Custom Printed Packaging | CustomPackMakers</title>
                <meta name="description" content="Order wholesale child-resistant pre-roll boxes. Safety-first certified packaging featuring certified locking mechanisms and durable outer shells for compliance." />
            </Helmet>
            <Header />
            <div className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 mt-[120px] md:mt-[160px]">
                <div className="container mx-auto px-[30px] py-4">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem><BreadcrumbLink asChild><Link to="/">Home</Link></BreadcrumbLink></BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem><BreadcrumbLink asChild><Link to="/industries">All Industries</Link></BreadcrumbLink></BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem><BreadcrumbLink asChild><Link to="/industries/pre-roll-boxes">Pre Roll Boxes</Link></BreadcrumbLink></BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem><BreadcrumbPage>Child Resistant Pre Roll Box</BreadcrumbPage></BreadcrumbItem>
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
                                Child <span className="text-primary">Resistant</span> Pre Roll Box
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Safety-first packaging for compliance featuring certified child-resistant locks and durable outer shells reliably strongly. We engineer rigorously tested regulatory-compliant pre-roll boxes universally protecting children while maintaining elegant brand identity.
                            </p>
                            <div className="pt-2">
                                <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300" onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}>
                                    Get a Quote
                                </Button>
                            </div>
                        </div>
                        <div className="lg:col-span-5 relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-muted group">
                            <div className="absolute inset-0">
                                <img src={childresistantprerollhero} alt="Child Resistant Pre Roll Box Hero" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 max-w-3xl">Certified Safety Mechanisms Engineered for Full Regulatory Compliance</h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>Compliant <strong className="text-foreground">child resistant pre roll boxes</strong> demand robust certified engineering to powerfully protect children from accessing essentially restricted organic products inside flawlessly. We exclusively implement CPSC-tested locking mechanisms ensuring absolute safety standards are maintained without compromising sophisticated brand visuals gracefully.</p>
                        <p>Intelligently integrating specific dual push-and-squeeze locking panels deeply physically secures contents absolutely entirely preventing unsupervised infant access consistently correctly. Accentuating sophisticated vibrant high-resolution legal warning text printing rapidly satisfies mandatory compliance requirements without ever sacrificing distinct luxurious exterior advertising aesthetics successfully.</p>
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
                            <div className="w-full max-w-lg mx-auto flex justify-center gap-2">
                                {productImages.map((image, index) => (
                                    <button key={index} onClick={() => setSelectedImage(index)} className={`relative w-[94px] h-[94px] flex-shrink-0 overflow-hidden rounded-md border transition-all duration-200 ${selectedImage === index ? 'border-primary shadow-md ring-2 ring-primary/20' : 'border-slate-200 hover:border-slate-300'}`}>
                                        <img src={image.src} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover p-0 m-0 block" />
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
                                            <div className="space-y-1.5"><Label htmlFor="length" className="text-xs font-semibold text-muted-foreground">L (in)</Label><Input id="length" type="number" placeholder="4" className="h-9 bg-white" /></div>
                                            <div className="space-y-1.5"><Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label><Input id="width" type="number" placeholder="2" className="h-9 bg-white" /></div>
                                            <div className="space-y-1.5"><Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">D (in)</Label><Input id="depth" type="number" placeholder="1" className="h-9 bg-white" /></div>
                                        </div>
                                        <div className="space-y-1.5"><Label htmlFor="quantity" className="text-xs font-semibold text-muted-foreground">Quantity</Label><Input id="quantity" type="number" placeholder="1000" className="h-9 bg-white" /></div>
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">Perfecting Child Safety Standards Systematically</h2>
                    <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="[&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-8 [&>h3]:mb-3 [&>h3]:first:mt-0 [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-5 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-5 [&>ul]:space-y-2 [&>ul>li]:text-[15px] [&>ul>li]:text-slate-600">
                            <p>Distributing heavily regulated sensitive retail botanical materials demands impressively fortified certified child-resistant containers explicitly protecting pristine herbal contents perfectly. Inferior generic flimsy envelopes notoriously fail regulatory inspections dramatically effectively destroying expensive premium brand reputations instantly terribly completely.</p>
                            <p>Seamlessly structurally integrating tremendously precise durable push-squeeze locks perfectly captures essential safety compliance drastically halting massive rapid unauthorized child access constantly beautifully preserving maximum intended user confidence vigorously successfully naturally.</p>
                            <h3>High-Performance Certified Materials</h3>
                            <p>Masterfully locking importantly sensitive organic contents permanently necessitates immensely dense structural stock exclusively cleanly preventing massive heavy natural unauthorized access utterly perfectly continually.</p>
                            <ul>
                                <li><strong>CPSC-Certified Paperboard:</strong> Employing immensely thick 24pt SBS board constructions fiercely trapping entirely sensitive powerful organic contents perfectly guaranteeing absolute retail compliance smoothly continuously perfectly successfully correctly dynamically reliably efficiently seamlessly precisely securely.</li>
                                <li><strong>Eco-Friendly Certified Kraft:</strong> Specifically matching perfectly authentic pure organic unbleached interior contents exactly naturally successfully pleasing remarkably heavily environmentally conscious modern expanding regulatory bodies proudly responsibly vigorously cleanly carefully precisely successfully.</li>
                            </ul>
                            <h3>Bespoke Safety Lock Designs</h3>
                            <ul>
                                <li><strong>Dual Push-Squeeze Mechanism:</strong> Engineering absolutely brilliant complex two-finger requirements powerfully actively effectively defeating incredibly curious tiny unsupervised infant hands strictly massively legally smoothly perfectly totally absolutely securely completely safely dynamically successfully completely.</li>
                                <li><strong>Tamper-Evident Outer Shell:</strong> Producing remarkably precise incredibly durable laminated outer shell panels forcefully effectively halting massive rapid premature destructive external unauthorized access safely entirely successfully permanently continuously actively reliably efficiently dynamically correctly flawlessly accurately beautifully.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <RelatedProductPreRoll />

            <section className="py-12 relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #fafafa 0%, #f4f6ff 60%, #f0fdf8 100%)' }}>
                <div className="absolute top-0 left-0 w-80 h-80 bg-primary/4 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none" />
                <div className="container mx-auto px-[30px] relative z-10">
                    <div className="text-center mb-14">
                        <span className="inline-block text-xs font-semibold tracking-widest text-primary uppercase mb-3 bg-primary/10 px-4 py-1.5 rounded-full">Our Promise</span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">Why Brands Choose <span className="text-primary">CustomPackMakers</span></h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">We combine craftsmanship, speed, and reliability to deliver packaging that makes your brand unforgettable.</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">
                        <div className="space-y-5">
                            {[
                                { title: "Certified Safety Compliance", text: "We rigorously test every single child-resistant mechanism against all CPSC mandatory federal requirements perfectly guaranteeing every shipment clears retail inspections safely effectively without any rejections systematically accurately reliably." },
                                { title: "Exceptional Brand Integration", text: "Our incredibly durable child-resistant configurations fiercely withstand massive physical adult pressures perfectly gracefully maintaining heavily regulated mandatory safety requirements consistently throughout entirely stressful complicated multi-stop routing safely securely reliably dynamically efficiently perfectly." },
                                { title: "Vibrant Graphic Realization", text: "We passionately employ advanced pristine offset machinery accurately capturing fiercely beautiful intricate corporate artwork prominently vividly dynamically instantly transforming generic safety boxes permanently into immensely compelling incredibly lucrative stunning beautiful miniature advertisements effectively accurately." },
                            ].map((feat, i) => (
                                <div key={i}>
                                    <div className="flex gap-6 items-start group">
                                        <div className="flex-shrink-0 mt-1">
                                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                                                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">{feat.title}</h3>
                                            <p className="text-sm text-slate-500 leading-relaxed">{feat.text}</p>
                                        </div>
                                    </div>
                                    {i < 2 && <div className="w-full h-px bg-slate-100 mt-5" />}
                                </div>
                            ))}
                        </div>
                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img src={childresistantpreroll6} alt="Child Resistant Packaging" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-7"><p className="text-white font-bold text-lg leading-snug mb-1">Trusted by 500+ Brands</p><p className="text-white/75 text-sm">Delivering premium packaging across North America</p></div>
                            </div>
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
                            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] border border-primary/20 shadow-2xl transform transition-transform duration-700 hover:scale-[1.02]">
                                <img src={childresistantpreroll7} alt="Differentiate Your Safety Packaging" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                            </div>
                        </div>
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">Differentiate Your <span className="text-primary">Safety</span> Identity</h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">At CustomPackMakers, we understand that your packaging is the first physical touchpoint for your customers. To ensure your brand stands out, we utilize state-of-the-art manufacturing processes combined with premium printing techniques. Our team of experts works closely with you to determine the perfect dimensions, ensuring a snug fit and maximum protection. By integrating distinctive features like certified child-resistant dual-squeeze mechanisms, immensely saturated vibrant graphic artwork, advanced smell-proof barriers, and specialized custom die-cut foam inserts, we aggressively elevate your brand in this extremely competitive modern regulated retail market.</p>
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
                                <p className="text-base text-muted-foreground">Everything you need to know about our certified child-resistant packaging services.</p>
                            </div>
                            <Accordion type="single" collapsible defaultValue="item-1" className="w-full space-y-2">
                                {[
                                    { id: "item-1", question: "Are these boxes certified child-resistant by CPSC?", answer: "Yes, we prominently utilize certified CPSC-tested push-and-squeeze dual action locking mechanisms on all child-resistant configurations perfectly guaranteeing every order ships entirely legally compliant for regulated retail environments successfully perfectly." },
                                    { id: "item-2", question: "Can I still print my brand on child-resistant boxes?", answer: "Absolutely. Child-resistant boxes receive the same full-color high-resolution printing as any premium package. We seamlessly stretch vibrant corporate artwork and legally mandated warnings across absolutely every exterior panel clearly effectively." },
                                    { id: "item-3", question: "Do these meet state cannabis packaging requirements?", answer: "Yes. Our child-resistant designs adhere entirely to all state cannabis packaging mandates including tamper-evident outer shells, mandatory safety symbols, and opaque material requirements to protect product from light exposure." },
                                    { id: "item-4", question: "Can you provide eco-friendly certified materials?", answer: "We passionately maintain huge active bulk inventories comprehensively supplying stunning premium robust authentic completely recycled certified FSC-certified paperboard entirely pleasing incredibly environmentally conscious modern sustainable consumer public cleanly rapidly successfully." },
                                    { id: "item-5", question: "Will smell-proof technology be preserved with CR locks?", answer: "Certainly. We expertly engineer tiny strategically placed structural inner poly-laminate barriers smoothly allowing child-resistant panels to close entirely airtight vigorously preserving intensely perfect organic freshness and aroma containment thoroughly safely." }
                                ].map((faq) => (
                                    <AccordionItem key={faq.id} value={faq.id} className="border border-slate-200 rounded-lg bg-white overflow-hidden data-[state=open]:border-primary data-[state=open]:ring-1 data-[state=open]:ring-primary/20 data-[state=open]:bg-primary/5 transition-all duration-300">
                                        <AccordionTrigger className="px-5 py-3 hover:no-underline [&>svg]:hidden group">
                                            <span className="text-left font-semibold text-foreground text-base">{faq.question}</span>
                                            <div className="shrink-0 ml-4 p-1 rounded-full bg-slate-100 group-data-[state=open]:bg-primary group-data-[state=open]:text-white transition-colors duration-200">
                                                <Plus className="h-3 w-3 group-data-[state=open]:hidden" /><Minus className="h-3 w-3 hidden group-data-[state=open]:block" />
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent className="px-5 pb-5 pt-0 text-slate-600 leading-relaxed text-sm">{faq.answer}</AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                        <div className="relative w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden">
                            <img src={FAQimage} alt="FAQ Child Resistant Pre Roll Box" className="absolute inset-0 w-full h-full object-cover" />
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

export default ChildResistantPreRollBox;
