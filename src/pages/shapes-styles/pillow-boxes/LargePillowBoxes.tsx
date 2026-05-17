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
import heroImg from "@/assets/shape-style/pillow-boxes/large_pillow_boxes.webp";
import FAQimage from "@/assets/FAQ-image.webp";

const productName = "Custom Large Pillow Boxes";
const overviewTitle = "Spacious Curved Packaging for Apparel, Gifts & High-Volume Retail";

const LargePillowBoxes = () => {
    const [selectedImage, setSelectedImage] = useState(0);
    const imageGallery = [
        { src: heroImg, alt: "Large Pillow Boxes - Main View" },
        { src: heroImg, alt: "Large Pillow Boxes - Side Angle" },
        { src: heroImg, alt: "Large Pillow Boxes - Open View" },
        { src: heroImg, alt: "Large Pillow Boxes - Detail Shot" },
        { src: heroImg, alt: "Large Pillow Boxes - Lifestyle Shot" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Large Pillow Boxes | Apparel & Gift Packaging | CustomPackMakers</title>
                <meta name="description" content="Order custom large pillow boxes wholesale. Perfect for apparel items, scarves, and large gift sets. Premium cardstock or kraft board with full-color printing and fast turnaround." />
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
                            <BreadcrumbItem><BreadcrumbPage>Large Pillow Boxes</BreadcrumbPage></BreadcrumbItem>
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
                                <span className="text-primary">Custom Large</span> Pillow Boxes
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Scale up the iconic curved pillow shape for your most impressive gift presentations. Custom large pillow boxes deliver the same elegant arc and self-locking convenience in a spacious format designed for folded apparel, gift sets, home décor, and premium retail packaging.
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
                        <p>Our <strong className="text-foreground">custom large pillow boxes</strong> bring the irresistible curved pillow aesthetic to a generous format built for bulkier, more substantial gifts and retail items. Engineered from heavy-caliper SBS cardstock and rigid kraft board, these oversized pillow boxes maintain structural integrity even for heavier contents like folded scarves, knitwear, framed prints, and subscription gift sets. The large format provides an expansive canvas for bold custom printing, making your brand statement unmistakable. Despite their substantial size, large pillow boxes retain the signature self-locking mechanism that assembles without adhesive or tape. Order wholesale from 100 units with an 8–10 day production window.</p>
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
                                            <div className="space-y-1.5"><Label htmlFor="length" className="text-xs font-semibold text-muted-foreground">L (in)</Label><Input id="length" type="number" placeholder="12" className="h-9 bg-white" /></div>
                                            <div className="space-y-1.5"><Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label><Input id="width" type="number" placeholder="6" className="h-9 bg-white" /></div>
                                            <div className="space-y-1.5"><Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">D (in)</Label><Input id="depth" type="number" placeholder="4" className="h-9 bg-white" /></div>
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">Large Pillow Boxes: Making Grand Gestures Beautifully Packaged</h2>
                    <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="[&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-8 [&>h3]:mb-3 [&>h3]:first:mt-0 [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-5 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-5 [&>ul]:space-y-2 [&>ul>li]:text-[15px] [&>ul>li]:text-slate-600">
                            <p>When the gift is substantial and the occasion is important, large pillow boxes deliver packaging grandeur that matches the moment. The inherent elegance of the curved pillow silhouette scales beautifully to larger dimensions, creating visual impact and a sense of occasion that standard rectangular boxes cannot achieve. From corporate holiday gifts and premium retail sets to boutique clothing packaging and high-end subscription boxes, large pillow boxes create a memorable presentation that elevates perceived value before the recipient even begins to open the package.</p>
                            <p>CustomPackMakers engineers large pillow boxes using heavy-caliper board weights selected to support bulkier contents without sagging or losing structural integrity during transit. Our structural design team optimizes each format for the specific product weight and dimensions, ensuring the curved arc maintains its elegant shape and the self-locking closure keeps contents securely contained throughout the entire delivery journey.</p>
                            <h3>Popular Applications for Large Pillow Boxes</h3>
                            <ul>
                                <li><strong>Folded Apparel:</strong> Scarves, knitwear, t-shirts, pajama sets, and silk garments fold and fit beautifully inside large pillow boxes, adding an unexpected premium flourish to clothing gifts.</li>
                                <li><strong>Premium Gift Sets:</strong> Curated gift collections featuring candles, skincare, and accessories can be beautifully assembled inside large pillow boxes with tissue paper and a custom ribbon.</li>
                                <li><strong>Home Décor Items:</strong> Framed prints, small decorative items, and cushion covers all fit within the spacious confines of large pillow boxes with elegant branded presentation.</li>
                                <li><strong>Wine & Gourmet Food:</strong> Individual wine bottles, artisan food hamper items, and gourmet confection collections are increasingly packaged in large pillow boxes for premium retail and hospitality gifting.</li>
                            </ul>
                            <h3>Material & Board Weight Options</h3>
                            <ul>
                                <li><strong>Heavy SBS Cardstock (400-600 GSM):</strong> Maximum printability and smooth surface quality in a weight sufficient to support heavier gift contents without structural compromise.</li>
                                <li><strong>Rigid Kraft Board (350-500 GSM):</strong> Natural, sustainable heavy-weight kraft board offering excellent structural performance and the artisan aesthetic preferred by premium organic brands.</li>
                                <li><strong>Coated Duplex Board:</strong> White clay-coated front with a grey back, offering excellent rigidity and a premium printing surface for high-volume corporate gift programs.</li>
                            </ul>
                            <h3>Printing & Finishing at Scale</h3>
                            <ul>
                                <li><strong>Full-Color Offset Printing:</strong> For large print runs of identical designs, offset printing delivers superior color consistency and the finest detail reproduction across every unit.</li>
                                <li><strong>Large-Format Foil Stamping:</strong> Brand names and logos in gold or silver foil on the front panel of a large pillow box create instant premium impact visible from across the retail floor.</li>
                                <li><strong>Matte Lamination:</strong> Full matte lamination on large pillow boxes creates a premium, tactile surface that photographs beautifully and communicates brand sophistication.</li>
                                <li><strong>Interior Printing:</strong> Adding a full interior color coating or printed pattern transforms the unboxing moment into a brand story that unfolds as the recipient opens the box.</li>
                            </ul>
                            <h3>Wholesale Ordering for Large Pillow Boxes</h3>
                            <p>Large pillow boxes are available from 100 units minimum with significant volume pricing advantages applied from 500 units and beyond. Our production team will work with you to select the optimal board weight, print specifications, and structural design to ensure your large pillow boxes perform flawlessly from warehouse to final recipient. Standard turnaround is 8–10 business days after artwork approval.</p>
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
                                <div><h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Unique Aesthetic Appeal</h3><p className="text-sm text-slate-500 leading-relaxed">At large scale, the curved pillow edges create dramatic visual impact at retail, instantly distinguishing your gift packaging from conventional rectangular boxes and projecting a premium, curated gifting experience.</p></div>
                            </div>
                            <div className="w-full h-px bg-slate-100" />
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1"><div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors duration-300"><svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg></div></div>
                                <div><h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Effortless Self-Locking Design</h3><p className="text-sm text-slate-500 leading-relaxed">Even at large dimensions, our precision-engineered self-locking closure assembles quickly and holds contents securely without tape or glue, keeping your fulfillment operation fast and visually clean.</p></div>
                            </div>
                            <div className="w-full h-px bg-slate-100" />
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1"><div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors duration-300"><svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div></div>
                                <div><h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Versatile Across Industries</h3><p className="text-sm text-slate-500 leading-relaxed">From apparel and home décor to gourmet food gifting and corporate hampers, large pillow boxes adapt to an impressive range of product categories, making them one of the most flexible premium gift packaging formats available.</p></div>
                            </div>
                        </div>
                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img src={heroImg} alt="Premium Large Pillow Box Packaging" className="w-full h-full object-cover" />
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
                                <img src={heroImg} alt="Differentiate Your Large Pillow Boxes" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                            </div>
                            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-60" />
                            <div className="absolute -z-10 -top-8 -right-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl opacity-60" />
                        </div>
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">Differentiate Your <span className="text-primary">Pillow Boxes</span> From Others</h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">Custom printing and window-cutting unlock the full potential of large pillow boxes as premium brand experiences. A large front panel window cut into a custom shape—circular, heart, or geometric—creates a dramatic product reveal moment that encourages social sharing and repeat purchasing. Full-bleed photographic printing across the entire exterior surface turns each box into a miniature brand billboard. Interior lining with printed tissue paper, custom ribbon handles, and branded seal stickers complete a large pillow box presentation that far exceeds the cost of the packaging in perceived value delivered to your customers.</p>
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
                                    { id: "item-1", question: "What are the largest standard pillow box sizes available?", answer: "Our large pillow boxes start at approximately 10×5×3 inches and scale up to 16×8×5 inches as standard sizes. We also engineer fully custom dimensions for specific product requirements—please contact us with your exact dimensions for a tailored quote." },
                                    { id: "item-2", question: "Can large pillow boxes support the weight of apparel items?", answer: "Yes. Our large pillow boxes are manufactured from heavy-caliper board (400-600 GSM) that provides excellent structural support for folded apparel items including scarves, knitwear, robes, and multiple garment gift sets." },
                                    { id: "item-3", question: "Do large pillow boxes still use a self-locking closure?", answer: "Yes. The self-locking arc closure system is engineered to function effectively at all pillow box sizes. Our structural designers ensure the tab dimensions and board caliper are optimized for each large format to deliver reliable, clean closure." },
                                    { id: "item-4", question: "Can I get large pillow boxes with a window cutout?", answer: "Absolutely. Window cutouts in custom shapes covered with clear PET or biodegradable PLA film can be added to large pillow boxes, creating a stunning product reveal that showcases the contents while maintaining the structural integrity of the box." },
                                    { id: "item-5", question: "What is the turnaround time for large pillow box orders?", answer: "Our standard production turnaround for large pillow boxes is 8–10 business days after artwork approval. Rush production options are available for urgent corporate gifting programs and seasonal retail launches." },
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
                            <img src={FAQimage} alt="Large Pillow Boxes FAQ" className="absolute inset-0 w-full h-full object-cover" />
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

export default LargePillowBoxes;
