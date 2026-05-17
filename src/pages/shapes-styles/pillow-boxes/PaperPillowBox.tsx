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
import { RelatedProductPillowBoxes } from "@/components/RelatedProductPillowBoxes";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";
import heroImg from "@/assets/shape-style/pillow-boxes/paper_pillow_box.webp";
import FAQimage from "@/assets/FAQ-image.webp";

const productName = "Custom Paper Pillow Box";
const overviewTitle = "Lightweight Paper Pillow Packaging for Eco-Friendly Gifting in Any Volume";

const PaperPillowBox = () => {
    const [selectedImage, setSelectedImage] = useState(0);
    const imageGallery = [
        { src: heroImg, alt: "Paper Pillow Box - Main View" },
        { src: heroImg, alt: "Paper Pillow Box - Side Angle" },
        { src: heroImg, alt: "Paper Pillow Box - Open View" },
        { src: heroImg, alt: "Paper Pillow Box - Detail Shot" },
        { src: heroImg, alt: "Paper Pillow Box - Lifestyle Shot" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Paper Pillow Box | Eco Gift Packaging | CustomPackMakers</title>
                <meta name="description" content="Order custom paper pillow boxes wholesale. Lightweight, eco-friendly paper packaging for boutique gifts, events, and artisan products. Full-color printing and fast turnaround." />
            </Helmet>
            <Header />
            <div className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 mt-[70px] md:mt-[70px]">
                <div className="container mx-auto px-[30px] py-4">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem><BreadcrumbLink asChild><Link to="/">Home</Link></BreadcrumbLink></BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem><BreadcrumbLink asChild><Link to="/shapes-styles">All Shapes & Styles</Link></BreadcrumbLink></BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem><BreadcrumbLink asChild><Link to="/shapes-styles/pillow-boxes">Pillow Boxes</Link></BreadcrumbLink></BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem><BreadcrumbPage>Paper Pillow Box</BreadcrumbPage></BreadcrumbItem>
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
                                <span className="text-primary">Custom Paper</span> Pillow Box
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Elegant simplicity redefined. Custom paper pillow boxes deliver the signature curved silhouette in a lightweight, cost-efficient, and eco-responsible format ideal for boutique event favors, artisan product packaging, and gifting programs prioritizing a minimal environmental footprint.
                            </p>
                            <div className="pt-2">
                                <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300" onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}>
                                    Get a Quote
                                </Button>
                            </div>
                        </div>
                        <div className="lg:col-span-5 relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-muted group">
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200">
                                <img src={heroImg} alt={`${productName} Hero`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 max-w-3xl">{overviewTitle}</h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>Our <strong className="text-foreground">custom paper pillow boxes</strong> use coated art paper (90-160 GSM) laminated over a lightweight chipboard core, creating a pillow box that retains the distinctive curved silhouette while achieving lower material weights suited to lightweight contents such as ribbon, stickers, paper confetti, seed packets, light confections, and fabric samples. The printed paper exterior provides an excellent surface for vibrant full-color printing and premium finishes, while the lighter overall weight reduces shipping costs for high-volume event campaigns. Self-locking arc closure operates without adhesive for fast assembly. Minimum 100 units, 8–10 day turnaround.</p>
                    </div>
                </div>
            </section>
            <section className="py-10 bg-accent/5" id="quote-form">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end">
                        <div className="lg:col-span-7 space-y-6">
                            <div className="relative w-full max-w-lg mx-auto overflow-hidden rounded-lg shadow-sm border border-border bg-white" style={{ aspectRatio: '4/3' }}>
                                <img src={imageGallery[selectedImage].src} alt={imageGallery[selectedImage].alt} className="w-full h-full object-cover" />
                            </div>
                            <div className="w-full max-w-lg mx-auto grid grid-cols-5 gap-2">
                                {imageGallery.map((image, index) => (
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
                                            <div className="space-y-1.5"><Label htmlFor="length" className="text-xs font-semibold text-muted-foreground">L (in)</Label><Input id="length" type="number" placeholder="5" className="h-9 bg-white" /></div>
                                            <div className="space-y-1.5"><Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label><Input id="width" type="number" placeholder="2.5" className="h-9 bg-white" /></div>
                                            <div className="space-y-1.5"><Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">D (in)</Label><Input id="depth" type="number" placeholder="1.5" className="h-9 bg-white" /></div>
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">Paper Pillow Boxes: Light, Beautiful, and Accessible at Any Scale</h2>
                    <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="[&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-8 [&>h3]:mb-3 [&>h3]:first:mt-0 [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-5 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-5 [&>ul]:space-y-2 [&>ul>li]:text-[15px] [&>ul>li]:text-slate-600">
                            <p>Paper pillow boxes occupy an important niche in the gift packaging ecosystem: they deliver the visual charm and curved elegance of the pillow form at lower material weights and costs that make them particularly well-suited to event-scale gifting, artisan product packaging, and boutique retail applications where very lightweight contents are the norm. For wedding planners, conference organizers, subscription box curators, and independent makers, paper pillow boxes provide an entry point to beautifully branded pillow packaging that balances aesthetic quality with budget-conscious production efficiency.</p>
                            <h3>Paper Material Construction</h3>
                            <ul>
                                <li><strong>Coated Art Paper (90-160 GSM):</strong> The outer printing surface of paper pillow boxes uses premium C2S (coated two sides) art paper that provides a smooth, clay-coated surface receptive to high-quality offset and digital printing with vibrant color reproduction.</li>
                                <li><strong>Lightweight Chipboard Core:</strong> A thin chipboard laminated interior provides the structural backbone needed to maintain the pillow arc shape while keeping overall material weight minimized for shipping efficiency.</li>
                                <li><strong>Kraft Paper Variant:</strong> Uncoated natural kraft paper wrapped over chipboard creates an artisanal paper pillow box with a warm, organic aesthetic suited to eco-conscious artisan brands.</li>
                            </ul>
                            <h3>Printing Options for Paper Pillow Boxes</h3>
                            <ul>
                                <li><strong>Digital Printing:</strong> Ideal for smaller paper pillow box runs, digital printing delivers excellent full-color quality with fast setup and no plate costs, making it cost-effective from 100 units.</li>
                                <li><strong>Offset Printing:</strong> For larger volumes, offset printing delivers superior color consistency, sharper fine details, and lower per-unit cost on paper pillow box runs of 1,000 units and above.</li>
                                <li><strong>Foil Stamping on Paper:</strong> Delicate foil stamping on paper pillow boxes is possible using lower-temperature foil processes that preserve the paper surface quality while adding elegant metallic accents.</li>
                            </ul>
                            <h3>Best Products for Paper Pillow Boxes</h3>
                            <ul>
                                <li>Ribbon, twine, and fabric trim samples</li>
                                <li>Paper confetti and seed packet favors</li>
                                <li>Single candy, chocolate, or truffle pieces</li>
                                <li>Mini greeting cards and gift tags</li>
                                <li>Hair accessories, stickers, and lightweight novelties</li>
                                <li>Artisan soap slivers and bath salts sachets</li>
                            </ul>
                            <h3>Shipping Efficiency Advantage</h3>
                            <p>The reduced material weight of paper pillow boxes translates directly into lower shipping costs per unit for national e-commerce distribution, an important consideration for subscription box brands and event planners shipping large quantities nationwide. Paper pillow boxes can typically be shipped in greater quantities per carton compared to heavier cardboard alternatives, delivering material cost advantages that compound at scale.</p>
                            <h3>Minimum Orders & Turnaround</h3>
                            <p>Paper pillow boxes are available from 100 units minimum with an 8–10 business day production turnaround. High-volume event orders of 10,000 units and above may qualify for rush production scheduling and expedited shipping. Contact our team to discuss your specific event or program timeline.</p>
                        </div>
                    </div>
                </div>
            </section>
            <RelatedProductPillowBoxes />
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
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1"><div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300"><svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div></div>
                                <div><h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Unique Aesthetic Appeal</h3><p className="text-sm text-slate-500 leading-relaxed">Paper pillow boxes deliver the beloved curved silhouette in a light, beautiful format that carries vibrant printed artwork with fidelity, creating an attractive and accessible premium presentation for lightweight artisan and gift products.</p></div>
                            </div>
                            <div className="w-full h-px bg-slate-100" />
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1"><div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors duration-300"><svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg></div></div>
                                <div><h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Effortless Self-Locking Design</h3><p className="text-sm text-slate-500 leading-relaxed">The self-locking arc closure on paper pillow boxes assembles in seconds without tape or glue, enabling extremely fast, high-volume assembly at events or in fulfillment environments where efficiency is essential.</p></div>
                            </div>
                            <div className="w-full h-px bg-slate-100" />
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1"><div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors duration-300"><svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div></div>
                                <div><h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Versatile Across Industries</h3><p className="text-sm text-slate-500 leading-relaxed">Paper pillow boxes serve independent artisans, wedding planners, boutique retailers, and corporate event teams equally well, providing accessible branded gift packaging in a cost-efficient format suitable for programs of any scale.</p></div>
                            </div>
                        </div>
                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img src={heroImg} alt="Premium Paper Pillow Box" className="w-full h-full object-cover" />
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
                                <img src={heroImg} alt="Differentiate Your Paper Pillow Boxes" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                            </div>
                            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-60" />
                            <div className="absolute -z-10 -top-8 -right-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl opacity-60" />
                        </div>
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">Differentiate Your <span className="text-primary">Pillow Boxes</span> From Others</h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">Custom printing and precise window-cutting transform paper pillow boxes into miniature brand experiences far more impactful than their lightweight format might suggest. A full-bleed pattern print in your brand color palette, combined with a die-cut window revealing the delicate contents inside, creates an irresistible point-of-sale display piece. For event applications where hundreds of paper pillow boxes are arranged together, a coordinated print design creates a powerful, visually cohesive display that photographs beautifully and generates organic social media content, extending your brand's reach far beyond the event room itself.</p>
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
                                <p className="text-base text-muted-foreground">We're confident that you will love our products and service.</p>
                            </div>
                            <Accordion type="single" collapsible defaultValue="item-1" className="w-full space-y-2">
                                {[
                                    { id: "item-1", question: "How much weight can a paper pillow box hold?", answer: "Paper pillow boxes are best suited for lightweight contents up to approximately 150-200g. For heavier contents, we recommend our cardboard or SBS pillow boxes which offer greater structural rigidity and closure strength." },
                                    { id: "item-2", question: "What paper weights are available for paper pillow boxes?", answer: "We offer paper pillow boxes with outer paper weights from 90 GSM (lightweight, cost-effective) to 160 GSM (heavier, more premium feel). The chipboard lamination is available in multiple calipers to tune the overall box rigidity for your specific application." },
                                    { id: "item-3", question: "Can paper pillow boxes be composted or recycled?", answer: "Yes. Our paper pillow boxes (particularly the uncoated kraft paper variant) are home compostable and recyclable through standard municipal paper streams. Coated art paper variants are recyclable but not home compostable. Specify your sustainability requirements in your inquiry." },
                                    { id: "item-4", question: "Are paper pillow boxes suitable for high-humidity environments?", answer: "Paper pillow boxes are less moisture-resistant than coated cardboard options. For environments with high humidity or direct moisture exposure (e.g., outdoor events), we recommend coating the paper with a moisture-resistant varnish, or selecting our SBS cardstock with matte lamination as an alternative." },
                                    { id: "item-5", question: "What is the minimum order for paper pillow boxes?", answer: "Minimum order quantity is 100 units. Paper pillow boxes ordered in high volumes (5,000+ units) for events and seasonal programs qualify for significant per-unit price reductions. Contact us for event-scale pricing specific to your timeline and quantity requirements." },
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
                            <img src={FAQimage} alt="Paper Pillow Box FAQ" className="absolute inset-0 w-full h-full object-cover" />
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

export default PaperPillowBox;
