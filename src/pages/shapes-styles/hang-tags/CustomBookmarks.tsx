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
import { RelatedProductHangTags } from "@/components/RelatedProductHangTags";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";
import productHero from "@/assets/hang-tags/custom-bookmarks.webp";
import hangTagsHero from "@/assets/hang-tags/hang-tags-hero.webp";
import FAQimage from "@/assets/FAQ-image.webp";

const CustomBookmarks = () => {
    const [selectedImage, setSelectedImage] = useState(0);
    const overviewTitle = "Custom Bookmarks That Keep Your Brand in Readers' Hands Every Day";
    const productImages = [
        { src: productHero, alt: "Custom Bookmarks - Main View" },
        { src: productHero, alt: "Custom Bookmarks - Detail" },
        { src: productHero, alt: "Custom Bookmarks - Premium" },
        { src: productHero, alt: "Custom Bookmarks - Printed" },
        { src: hangTagsHero, alt: "Custom Bookmarks - Lifestyle" },
    ];
    const faqs = [
        { id: "item-1", question: "What is the standard bookmark size?", answer: "The most popular bookmark size is 2\"x7\". We also offer 2\"x8\", 2.5\"x8.5\", and fully custom sizes to match your content and design requirements." },
        { id: "item-2", question: "Can bookmarks include a tassel or ribbon?", answer: "Yes. We offer pre-attached satin ribbon tassels in a wide variety of colors and metallic cord options to give your bookmarks a premium, gift-worthy finish." },
        { id: "item-3", question: "What paper stocks do you recommend for bookmarks?", answer: "We recommend 14pt or 16pt cardstock with gloss or matte lamination for maximum durability, as bookmarks require resistance to handling and bending." },
        { id: "item-4", question: "Can you print both front and back of bookmarks?", answer: "Yes. We always recommend double-sided printing — use the front for your main design and the back for additional content, contact info, or a QR code." },
        { id: "item-5", question: "What is the minimum order quantity?", answer: "Our minimum order is 500 units. Volume discounts are available, making bookmarks an excellent, low-cost branded promotional item for libraries, bookstores, and authors." },
    ];
    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Bookmarks | Printed Bookmarks | CustomPackMakers</title>
                <meta name="description" content="Order custom bookmarks wholesale. Premium durable bookmarks with vibrant double-sided printing, protective lamination, and tassel options for brands and publishers." />
                <meta name="keywords" content="custom bookmarks, printed bookmarks, branded bookmarks, wholesale bookmarks, promotional bookmarks" />
                <meta property="og:title" content="Custom Bookmarks | Printed Bookmarks | CustomPackMakers" />
                <meta property="og:description" content="Premium custom bookmarks with vibrant full-color printing and protective coatings. Great for brands, publishers, and bookstores." />
            </Helmet>
            <Header />
            <div className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 mt-[120px] md:mt-[160px]">
                <div className="container mx-auto px-[30px] py-4">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem><BreadcrumbLink asChild><Link to="/">Home</Link></BreadcrumbLink></BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem><BreadcrumbLink asChild><Link to="/shapes-styles">Shapes &amp; Styles</Link></BreadcrumbLink></BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem><BreadcrumbLink asChild><Link to="/shapes-styles/hang-tags">Hang Tags</Link></BreadcrumbLink></BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem><BreadcrumbPage>Custom Bookmarks</BreadcrumbPage></BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </div>
            <section className="py-8 bg-background">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-7 space-y-6">
                            <div className="w-20 h-1.5 bg-primary rounded-full"></div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight"><span className="text-primary">Custom</span> Bookmarks</h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">Premium durable branded bookmarks with vibrant double-sided printing and protective coatings — keeping your brand in readers' hands long after they leave your store.</p>
                            <div className="pt-2">
                                <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300" onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}>Get a Quote</Button>
                            </div>
                        </div>
                        <div className="lg:col-span-5 relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-muted group">
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200"><img src={hangTagsHero} alt="Custom Bookmarks Hero" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" /></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-8 bg-slate-50">
                <div className="container mx-auto px-[5vw]">
                    <div className="flex items-center gap-3 mb-5"><div className="w-10 h-1 bg-primary rounded-full" /><span className="text-xs font-semibold tracking-widest text-primary uppercase">Product Overview</span></div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 max-w-3xl">{overviewTitle}</h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>Our <strong className="text-foreground">custom bookmarks</strong> are an exceptionally effective and affordable branded promotional item. Unlike digital ads that disappear in seconds, a beautifully printed bookmark stays with your customer through every reading session — providing repeated brand exposure at zero additional cost. Produced on durable 14pt or 16pt cardstock with lamination, our bookmarks are built to last and designed to impress.</p>
                        <p>Available with full-color double-sided printing, glossy or matte lamination, spot UV accents, and optional foil stamping, every <strong className="text-foreground">wholesale custom bookmark</strong> we produce is a miniature work of art. Add a satin ribbon tassel or metallic cord for a premium, gift-worthy finish that elevates corporate gifting, bookstore promotions, and literary event giveaways alike.</p>
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
                            <div className="w-full max-w-lg mx-auto grid grid-cols-5 gap-2">
                                {productImages.map((image, index) => (
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
                                            <div className="space-y-1.5"><Label htmlFor="length" className="text-xs font-semibold text-muted-foreground">L (in)</Label><Input id="length" type="number" placeholder="7" className="h-9 bg-white" /></div>
                                            <div className="space-y-1.5"><Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label><Input id="width" type="number" placeholder="2" className="h-9 bg-white" /></div>
                                            <div className="space-y-1.5"><Label htmlFor="qty" className="text-xs font-semibold text-muted-foreground">Qty</Label><Input id="qty" type="number" placeholder="1000" className="h-9 bg-white" /></div>
                                        </div>
                                        <div className="space-y-1.5"><Label htmlFor="material" className="text-xs font-semibold text-muted-foreground">Tassel / Attachment Type</Label><Input id="material" type="text" placeholder="Satin Ribbon Tassel" className="h-9 bg-white" /></div>
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">Custom Bookmarks: Durable Brand Impressions That Last a Lifetime</h2>
                    <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="[&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-8 [&>h3]:mb-3 [&>h3]:first:mt-0 [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-5 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-5 [&>ul]:space-y-2 [&>ul>li]:text-[15px] [&>ul>li]:text-slate-600">
                            <p>Bookmarks are one of the most practical and well-received promotional items available. Unlike flyers or brochures that get discarded, a quality bookmark finds a permanent home in a reader's favorite book — providing passive brand impressions for months or even years. For bookstores, publishers, educational institutions, and brands that want to reach a literary audience, custom bookmarks offer exceptional ROI at a very low production cost.</p>
                            <h3>Durable Material Options</h3>
                            <ul>
                                <li><strong>14pt Gloss Laminated Cardstock:</strong> Vibrant colors, moisture resistance, and great durability. The most popular choice for bookmarks.</li>
                                <li><strong>14pt Matte Laminated Cardstock:</strong> Smooth, premium feel that gives bookmarks a high-end, professional aesthetic. Ideal for upscale brands and literary events.</li>
                                <li><strong>Soft-Touch Lamination:</strong> An ultra-premium tactile finish that feels luxurious and creates a memorable sensory experience for the user.</li>
                            </ul>
                            <h3>Finishing &amp; Attachment Options</h3>
                            <ul>
                                <li><strong>Spot UV:</strong> Add a high-gloss accent to a logo or design element for eye-catching contrast.</li>
                                <li><strong>Foil Stamping:</strong> Gold, silver, or holographic foil for authors, boutique brands, and premium gifting programs.</li>
                                <li><strong>Satin Ribbon Tassel:</strong> Pre-punched and pre-attached with a satin ribbon tassel in your choice of color for a gift-ready, premium presentation.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <RelatedProductHangTags />
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
                                <div><h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Long-Lasting Brand Impressions</h3><p className="text-sm text-slate-500 leading-relaxed">Unlike disposable marketing materials, a quality custom bookmark stays in use for months or years. Our durable laminated designs ensure your brand is seen repeatedly at zero additional cost — making bookmarks one of the highest-ROI promotional items available to any business.</p></div>
                            </div>
                            <div className="w-full h-px bg-slate-100" />
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1"><div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors duration-300"><svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg></div></div>
                                <div><h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Premium Material Variety</h3><p className="text-sm text-slate-500 leading-relaxed">We offer coated and uncoated cardstock, kraft paper, and specialty stocks, all laminated for durability. Gloss, matte, and soft-touch finishes give your <strong>custom bookmarks</strong> a tactile quality that feels premium from the first touch, ensuring users are delighted to use them daily.</p></div>
                            </div>
                            <div className="w-full h-px bg-slate-100" />
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1"><div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors duration-300"><svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div></div>
                                <div><h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Tassel &amp; Attachment Options</h3><p className="text-sm text-slate-500 leading-relaxed">We offer satin ribbon tassels, metallic cord, and cotton string in a wide range of colors, pre-attached through a precision-punched hole. Our pre-finished <strong>wholesale bookmarks</strong> arrive ready to distribute, gift, or sell, saving your team time while maintaining a consistently premium brand presentation.</p></div>
                            </div>
                        </div>
                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img src={productHero} alt="Premium Custom Bookmarks" className="w-full h-full object-cover" />
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
                                <img src={hangTagsHero} alt="Differentiate Your Bookmarks From Others" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                            </div>
                            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-60" />
                            <div className="absolute -z-10 -top-8 -right-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl opacity-60" />
                        </div>
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">Differentiate Your <span className="text-primary">Bookmarks</span> From Others</h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">At CustomPackMakers, we create bookmarks that are objects of beauty in their own right. Our team works with you to design a bookmark that represents your brand with the same care and quality you pour into your primary products. From selecting the right lamination to choosing the perfect tassel color, every detail is considered to ensure your bookmark is one that users reach for again and again.</p>
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
                                {faqs.map((faq) => (
                                    <AccordionItem key={faq.id} value={faq.id} className="border border-slate-200 rounded-lg bg-white overflow-hidden data-[state=open]:border-primary data-[state=open]:ring-1 data-[state=open]:ring-primary/20 data-[state=open]:bg-primary/5 transition-all duration-300">
                                        <AccordionTrigger className="px-5 py-3 hover:no-underline [&>svg]:hidden group">
                                            <span className="text-left font-semibold text-foreground text-base">{faq.question}</span>
                                            <div className="shrink-0 ml-4 p-1 rounded-full bg-slate-100 group-data-[state=open]:bg-primary group-data-[state=open]:text-white transition-colors duration-200"><Plus className="h-3 w-3 group-data-[state=open]:hidden" /><Minus className="h-3 w-3 hidden group-data-[state=open]:block" /></div>
                                        </AccordionTrigger>
                                        <AccordionContent className="px-5 pb-5 pt-0 text-slate-600 leading-relaxed text-sm">{faq.answer}</AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                        <div className="relative w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden"><img src={FAQimage} alt="Custom Bookmarks FAQ" className="absolute inset-0 w-full h-full object-cover" /></div>
                    </div>
                </div>
            </section>
            <BrandRating />
            <QuoteForm />
            <Footer />
        </div>
    );
};

export default CustomBookmarks;
