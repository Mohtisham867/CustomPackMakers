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
import heroImg from "@/assets/pillow-boxes/kraft_pillow_boxes.webp";
import FAQimage from "@/assets/FAQ-image.webp";

const productName = "Custom Kraft Pillow Boxes";
const overviewTitle = "Eco-Friendly Kraft Pillow Packaging With Natural Artisan Appeal";

const KraftPillowBoxes = () => {
    const [selectedImage, setSelectedImage] = useState(0);
    const imageGallery = [
        { src: heroImg, alt: "Kraft Pillow Boxes - Main View" },
        { src: heroImg, alt: "Kraft Pillow Boxes - Side Angle" },
        { src: heroImg, alt: "Kraft Pillow Boxes - Open View" },
        { src: heroImg, alt: "Kraft Pillow Boxes - Detail Shot" },
        { src: heroImg, alt: "Kraft Pillow Boxes - Lifestyle Shot" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Kraft Pillow Boxes | Eco-Friendly Gift Packaging | CustomPackMakers</title>
                <meta name="description" content="Order custom kraft pillow boxes wholesale. Eco-friendly natural finish for organic brands, artisan products, and sustainable gifting. Premium kraft board with fast turnaround." />
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
                            <BreadcrumbItem><BreadcrumbPage>Kraft Pillow Boxes</BreadcrumbPage></BreadcrumbItem>
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
                                <span className="text-primary">Custom Kraft</span> Pillow Boxes
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Where sustainability meets style. Custom kraft pillow boxes deliver an earthy, artisan aesthetic that resonates deeply with eco-conscious consumers, pairing the beloved curved pillow silhouette with biodegradable natural kraft fiber for packaging that feels authentic and purposeful.
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
                    <div className="text-muted-foreforeground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>Our <strong className="text-foreground">custom kraft pillow boxes</strong> fuse the iconic curved pillow shape with the warm, tactile character of natural unbleached kraft fiber, creating packaging that instantly communicates environmental responsibility and artisan craftsmanship. Manufactured from FSC-certified 100% recycled kraft board available in multiple caliper weights, these boxes provide excellent structural support for gifts, jewelry, organic beauty products, and food items. The natural brown surface accepts printed black, white, and colored inks beautifully, producing a distinctly hand-crafted print aesthetic. The self-locking arc closure requires no glue or tape, enabling efficient high-volume assembly. Order from 100 units with standard 8–10 day delivery.</p>
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">The Eco-Conscious Choice: Kraft Pillow Boxes for Sustainable Brands</h2>
                    <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="[&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-8 [&>h3]:mb-3 [&>h3]:first:mt-0 [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-5 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-5 [&>ul]:space-y-2 [&>ul>li]:text-[15px] [&>ul>li]:text-slate-600">
                            <p>As consumer awareness around environmental responsibility continues to accelerate, brands that choose sustainable packaging are earning measurable loyalty advantages. Custom kraft pillow boxes deliver a powerful sustainability signal while maintaining the distinctive curved pillow shape that creates exceptional visual appeal in retail and gifting contexts. For organic beauty brands, artisan food producers, eco-conscious jewelry designers, and ethical gift companies, kraft pillow boxes represent the perfect convergence of ecological responsibility and attractive packaging design.</p>
                            <p>At CustomPackMakers, our kraft pillow boxes are manufactured using FSC-certified kraft board sourced from responsibly managed forests. The natural, unbleached fiber requires no chemical whitening processes, making it one of the most environmentally clean packaging materials available. Paired with soy-based or water-based inks that eliminate harmful VOC emissions, our kraft pillow boxes allow brands to make genuine, substantiated eco-claims that resonate with today's values-driven consumers.</p>
                            <h3>Why Kraft Pillow Boxes Stand Out</h3>
                            <ul>
                                <li><strong>Authentic Natural Aesthetic:</strong> The warm golden-brown tones of natural kraft fiber create an artisan, handcrafted visual quality that communicates integrity and authenticity, qualities that consumers reward with trust and loyalty.</li>
                                <li><strong>100% Biodegradable & Recyclable:</strong> Kraft pillow boxes decompose naturally and can be recycled through standard municipal paper recycling streams, supporting your brand's zero-waste packaging goals.</li>
                                <li><strong>Superior Printing on Natural Stock:</strong> Custom printed labels, logos, and patterns on kraft board create a distinctive visual style unavailable on white or glossy substrates, making your packaging uniquely recognizable on crowded retail shelves.</li>
                            </ul>
                            <h3>Material Options for Kraft Pillow Boxes</h3>
                            <ul>
                                <li><strong>Natural Brown Kraft (80-350 GSM):</strong> Classic unbleached kraft in a range of weights for small favor boxes through to robust gift packaging. The slightly textured surface adds tactile interest and communicates handcrafted quality.</li>
                                <li><strong>White Kraft Board:</strong> Bleached kraft fiber offering a bright white surface with the same eco-credentials as natural kraft, ideal for brands that want clean color printing while maintaining sustainability claims.</li>
                                <li><strong>Recycled Kraft Board:</strong> Made from post-consumer recycled content, this option maximizes environmental credentials for brands with strict sustainability commitments.</li>
                            </ul>
                            <h3>Printing Techniques Suited for Kraft</h3>
                            <ul>
                                <li><strong>Flexographic Printing:</strong> Cost-effective single or two-color printing ideal for simple logo marks, monograms, and text on natural kraft surfaces.</li>
                                <li><strong>Digital Printing:</strong> Full-color digital printing on kraft delivers rich, detailed artwork with a characteristic warm, earthy tone that enhances the natural aesthetic.</li>
                                <li><strong>Foil Stamping:</strong> Gold or copper foil stamping on natural kraft creates a stunning premium contrast that elevates the perceived value significantly.</li>
                                <li><strong>Embossing:</strong> Raised text and logo elements on kraft produce a beautifully tactile, artisanal quality that communicates premium craftsmanship without chemical finishes.</li>
                            </ul>
                            <h3>Industries That Favor Kraft Pillow Boxes</h3>
                            <ul>
                                <li>Organic beauty and skincare brands</li>
                                <li>Artisan soap, candle, and bath product makers</li>
                                <li>Eco-conscious jewelry and accessories designers</li>
                                <li>Gourmet food and confection producers</li>
                                <li>Sustainable gift basket and hamper curators</li>
                                <li>Wedding and event planners prioritizing eco-friendly favors</li>
                            </ul>
                            <h3>Wholesale Pricing & Production Scalability</h3>
                            <p>Our kraft pillow boxes are available from a minimum order of 100 units, with competitive volume pricing for larger orders. Whether you need 200 boxes for a farmers market season or 20,000 units for a national retail program, our production capabilities scale seamlessly to meet your timeline and budget. Standard turnaround is 8–10 business days after artwork approval.</p>
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
                                <div><h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Unique Aesthetic Appeal</h3><p className="text-sm text-slate-500 leading-relaxed">The warm golden-brown kraft surface combined with the curved pillow edges creates a naturally beautiful, artisan aesthetic that stands out on shelves and immediately communicates authenticity, craftsmanship, and eco-conscious brand values.</p></div>
                            </div>
                            <div className="w-full h-px bg-slate-100" />
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1"><div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors duration-300"><svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg></div></div>
                                <div><h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Effortless Self-Locking Design</h3><p className="text-sm text-slate-500 leading-relaxed">Our kraft pillow boxes feature the same precision-engineered self-locking mechanism that assembles in seconds without adhesive or tape, keeping your packing operations clean, fast, and efficient at scale.</p></div>
                            </div>
                            <div className="w-full h-px bg-slate-100" />
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1"><div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors duration-300"><svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div></div>
                                <div><h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Versatile Across Industries</h3><p className="text-sm text-slate-500 leading-relaxed">Kraft pillow boxes are beloved by organic beauty brands, artisan food producers, eco-friendly jewelry designers, and sustainable gift companies, making them one of the most versatile packaging formats for mission-driven brands.</p></div>
                            </div>
                        </div>
                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img src={heroImg} alt="Premium Kraft Pillow Box Packaging" className="w-full h-full object-cover" />
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
                                <img src={heroImg} alt="Differentiate Your Kraft Pillow Boxes" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                            </div>
                            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-60" />
                            <div className="absolute -z-10 -top-8 -right-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl opacity-60" />
                        </div>
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">Differentiate Your <span className="text-primary">Pillow Boxes</span> From Others</h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">The natural kraft surface of pillow boxes offers a distinctive starting point for custom printing that creates a brand aesthetic impossible to achieve on standard white stock. Embossed kraft pillow boxes project a handcrafted, artisanal quality that resonates powerfully with premium organic and artisan brands. Add a custom window cutout to reveal a beautifully arranged confection or a handwritten gift note inside. Pair copper foil stamping with natural kraft for an earthy-luxe combination that photographs stunningly for social media and e-commerce. Strategic ribbon holes and tissue paper tucking transform kraft pillow boxes into a complete, sophisticated gifting package.</p>
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
                                    { id: "item-1", question: "Are kraft pillow boxes truly eco-friendly?", answer: "Yes. Our kraft pillow boxes are manufactured from FSC-certified, sustainably sourced kraft board. They are 100% biodegradable, recyclable through standard paper recycling, and printed with soy-based or water-based inks to minimize environmental impact." },
                                    { id: "item-2", question: "Can I print in color on kraft pillow boxes?", answer: "Absolutely. While the natural brown surface does influence color rendering (colors will appear slightly warmer and more muted than on white), we can produce excellent full-color digital printing, flexographic printing, and Pantone color printing on kraft surfaces. White ink printing is also available for a striking reverse effect." },
                                    { id: "item-3", question: "What kraft board weights are available?", answer: "We offer kraft pillow boxes in board weights from 80 GSM for lightweight favor packaging up to 350 GSM for heavy-duty gift boxes. Our packaging engineers can recommend the optimal weight for your specific product and shipping requirements." },
                                    { id: "item-4", question: "Can I get kraft pillow boxes with a window cutout?", answer: "Yes. We can add a die-cut window covered with clear biodegradable PLA film to kraft pillow boxes, allowing product visibility while maintaining the eco-friendly credentials of the packaging." },
                                    { id: "item-5", question: "What is the minimum order for kraft pillow boxes?", answer: "Our minimum order quantity is 100 units for standard sizes. Custom sizes and specialty finishes may have slightly higher minimums. Volume discounts are available for orders of 1,000 units and above." },
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
                            <img src={FAQimage} alt="Kraft Pillow Boxes FAQ" className="absolute inset-0 w-full h-full object-cover" />
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

export default KraftPillowBoxes;
