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
import heroImg from "@/assets/pillow-boxes/cardboard_pillow_boxes.webp";
import FAQimage from "@/assets/FAQ-image.png";

const productName = "Custom Cardboard Pillow Boxes";
const overviewTitle = "Durable Cardboard Pillow Packaging for Reliable, Scalable Gift Solutions";

const CardboardPillowBoxes = () => {
    const [selectedImage, setSelectedImage] = useState(0);
    const imageGallery = [
        { src: heroImg, alt: "Cardboard Pillow Boxes - Main View" },
        { src: heroImg, alt: "Cardboard Pillow Boxes - Side Angle" },
        { src: heroImg, alt: "Cardboard Pillow Boxes - Open View" },
        { src: heroImg, alt: "Cardboard Pillow Boxes - Detail Shot" },
        { src: heroImg, alt: "Cardboard Pillow Boxes - Lifestyle Shot" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Cardboard Pillow Boxes | Durable Gift Packaging | CustomPackMakers</title>
                <meta name="description" content="Order custom cardboard pillow boxes wholesale. Strong, durable packaging for retail gifts and e-commerce. Multiple cardstock weights, full-color printing, fast 8-10 day turnaround." />
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
                            <BreadcrumbItem><BreadcrumbPage>Cardboard Pillow Boxes</BreadcrumbPage></BreadcrumbItem>
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
                                <span className="text-primary">Custom Cardboard</span> Pillow Boxes
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Dependable, beautiful, and scalable. Custom cardboard pillow boxes deliver the iconic curved pillow form in a robust, print-ready format built for retail, e-commerce, and corporate gifting programs that demand consistent quality at any volume.
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
                        <p>Our <strong className="text-foreground">custom cardboard pillow boxes</strong> are manufactured from premium-grade coated cardboard in caliper weights from 250 GSM to 600 GSM, providing the structural backbone required for consistent, reliable performance across retail display, gift wrapping, and e-commerce shipping scenarios. The coated cardboard surface accepts full-color CMYK printing with photographic quality, and supports the complete range of premium finishing options from foil stamping to soft-touch lamination. The self-locking arc closure requires no tape or adhesive. Available in all standard and custom sizes, colors, and finishes. Minimum 100 units with 8–10 day turnaround.</p>
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
                                            <div className="space-y-1.5"><Label htmlFor="length" className="text-xs font-semibold text-muted-foreground">L (in)</Label><Input id="length" type="number" placeholder="6" className="h-9 bg-white" /></div>
                                            <div className="space-y-1.5"><Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label><Input id="width" type="number" placeholder="3" className="h-9 bg-white" /></div>
                                            <div className="space-y-1.5"><Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">D (in)</Label><Input id="depth" type="number" placeholder="2" className="h-9 bg-white" /></div>
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">Cardboard Pillow Boxes: The Reliable Foundation of Beautiful Gift Packaging</h2>
                    <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="[&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-8 [&>h3]:mb-3 [&>h3]:first:mt-0 [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-5 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-5 [&>ul]:space-y-2 [&>ul>li]:text-[15px] [&>ul>li]:text-slate-600">
                            <p>Cardboard is the backbone of modern packaging for excellent reason. Premium-grade coated cardboard offers an exceptional combination of structural rigidity, printability, and cost efficiency that makes it the most versatile substrate for custom pillow box manufacturing. When formed into the characteristic curved pillow shape, cardboard's inherent stiffness maintains the beautiful arc under load while providing the print surface quality required for vibrant full-color brand graphics.</p>
                            <p>At CustomPackMakers, we engineer cardboard pillow boxes using carefully selected coated board grades matched to your specific product weight, display requirements, and brand positioning. Our structural packaging engineers specify caliper, coating, and grain direction to ensure every cardboard pillow box performs flawlessly from our facility to the end consumer.</p>
                            <h3>Cardboard Grades Available for Pillow Boxes</h3>
                            <ul>
                                <li><strong>SBS (Solid Bleached Sulfate) 250-400 GSM:</strong> Premium white paperboard delivering the highest print quality and whitest surface. The preferred choice for cosmetic, gift, and retail pillow boxes where color accuracy and print vibrancy are critical.</li>
                                <li><strong>CRB (Coated Recycled Board) 300-450 GSM:</strong> Recycled content board with a white clay-coated front, offering a balance of sustainability credentials and acceptable print quality for general retail applications.</li>
                                <li><strong>FBB (Folding Box Board) 250-500 GSM:</strong> Multi-ply board with mechanical pulp core offering excellent bulk at lower weights, ideal for larger pillow box formats where reducing material cost is important.</li>
                            </ul>
                            <h3>Why Cardboard Outperforms Alternatives for Pillow Boxes</h3>
                            <ul>
                                <li><strong>Consistent Arc Retention:</strong> The inherent stiffness of properly calipered cardboard maintains the pillow box's curved arc shape reliably across temperature and humidity variations encountered in retail and transit environments.</li>
                                <li><strong>Superior Print Surface:</strong> Clay-coated cardboard surfaces provide excellent ink holdout for vibrant CMYK printing and support all premium finishing treatments without adhesion issues.</li>
                                <li><strong>Self-Locking Reliability:</strong> The rigidity of cardboard ensures the self-locking tabs and corresponding slots engage cleanly and hold securely, maintaining closure integrity throughout the product's retail lifecycle.</li>
                                <li><strong>Scalability:</strong> Cardboard pillow boxes can be produced efficiently at volumes from 100 to 1,000,000 units with consistent quality across the entire run, supporting brands from startup to national retail scale-up.</li>
                            </ul>
                            <h3>Finishing Treatments for Cardboard Pillow Boxes</h3>
                            <ul>
                                <li>Full-color CMYK printing up to 6 colors</li>
                                <li>Hot foil stamping in gold, silver, rose gold, and custom metallic colors</li>
                                <li>Gloss, matte, or soft-touch lamination for surface protection and tactile quality</li>
                                <li>Spot UV for selective high-gloss graphic enhancement</li>
                                <li>Embossing and debossing for dimensional logo and graphic effects</li>
                            </ul>
                            <h3>Ordering & Turnaround</h3>
                            <p>Cardboard pillow boxes are available from 100 units minimum, with substantial wholesale pricing from 1,000 units. Standard production turnaround is 8–10 business days after artwork approval. Our dedicated account team manages every order from material selection through final quality inspection to ensure your cardboard pillow boxes arrive flawlessly on schedule.</p>
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
                                <div><h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Unique Aesthetic Appeal</h3><p className="text-sm text-slate-500 leading-relaxed">Premium cardboard pillow boxes combine structural reliability with a smooth, print-ready surface that allows your brand artwork to shine at full vibrancy, creating a beautiful, impactful retail presence backed by engineering-grade structural performance.</p></div>
                            </div>
                            <div className="w-full h-px bg-slate-100" />
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1"><div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors duration-300"><svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg></div></div>
                                <div><h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Effortless Self-Locking Design</h3><p className="text-sm text-slate-500 leading-relaxed">The inherent stiffness of quality cardboard makes our self-locking closure system perform with exceptional reliability, producing a clean, secure closure every time without adhesive or tape.</p></div>
                            </div>
                            <div className="w-full h-px bg-slate-100" />
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1"><div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors duration-300"><svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div></div>
                                <div><h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Versatile Across Industries</h3><p className="text-sm text-slate-500 leading-relaxed">Cardboard pillow boxes serve virtually every retail and gifting category reliably, from jewelry and beauty to food gifting and corporate merchandise, with production scalability to match any business growth curve.</p></div>
                            </div>
                        </div>
                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img src={heroImg} alt="Premium Cardboard Pillow Box Packaging" className="w-full h-full object-cover" />
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
                                <img src={heroImg} alt="Differentiate Your Cardboard Pillow Boxes" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                            </div>
                            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-60" />
                            <div className="absolute -z-10 -top-8 -right-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl opacity-60" />
                        </div>
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">Differentiate Your <span className="text-primary">Pillow Boxes</span> From Others</h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">Custom printing and precision window-cutting unlock the full brand storytelling potential of cardboard pillow boxes. A full-bleed custom print with complementary interior lining color creates an immersive two-stage brand reveal as the recipient first sees the exterior design, then opens to encounter a coordinated color interior. Adding a die-cut window framed by a foil-stamped border transforms the functional cardboard substrate into a premium-looking display package that competes visually with rigid boxes costing five times as much. Our design team will help you maximize every square centimeter of your cardboard pillow box's surface for maximum brand impact.</p>
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
                                    { id: "item-1", question: "What cardboard thickness is best for pillow boxes?", answer: "We recommend 300-350 GSM for standard retail pillow boxes containing lightweight gifts, 350-450 GSM for medium-weight products like jewelry sets and confection assortments, and 450-600 GSM for larger pillow boxes holding heavier apparel or gift sets. Our packaging engineers can advise on the optimal caliper for your specific product." },
                                    { id: "item-2", question: "Can I get recycled cardboard for pillow boxes?", answer: "Yes. We offer CRB (Coated Recycled Board) made from post-consumer recycled content for brands with sustainability commitments. CRB pillowboxes support FSC and recycled content certifications and are suitable for a wide range of retail and gifting applications." },
                                    { id: "item-3", question: "How does cardboard perform for e-commerce shipping?", answer: "While pillow boxes are primarily designed for retail display and in-store gifting, cardboard pillow boxes can be shipped as-is for lower-weight contents within protective outer cartons. For direct e-commerce shipping, we recommend our heavier board weights (400+ GSM) or the addition of a protective outer sleeve." },
                                    { id: "item-4", question: "Can cardboard pillow boxes be printed on both sides?", answer: "Yes, inside-outside printing is available on cardboard pillow boxes. Interior color printing adds a premium brand touchpoint visible the moment the recipient opens the box, creating an immersive unboxing experience that strongly supports premium brand positioning." },
                                    { id: "item-5", question: "What is the minimum order for cardboard pillow boxes?", answer: "Minimum order quantities start at 100 units. Volume pricing becomes available from 1,000 units with further discounts at 5,000 and 10,000 unit thresholds, making cardboard pillow boxes cost-effective for programs of any scale." },
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
                            <img src={FAQimage} alt="Cardboard Pillow Boxes FAQ" className="absolute inset-0 w-full h-full object-cover" />
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

export default CardboardPillowBoxes;
