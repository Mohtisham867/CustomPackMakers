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
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";

import productHero from "@/assets/bakery-products/donut-boxes.webp";
import img2 from "@/assets/bakery-products/custom-cake-boxes.webp";
import img3 from "@/assets/bakery-products/pastry-boxes.webp";
import img4 from "@/assets/bakery-products/cookie-boxes.webp";
import img5 from "@/assets/bakery-products/muffin-boxes.webp";
import FAQimage from "@/assets/FAQ-image.png";
import { RelatedProductBakery } from '@/components/RelatedProductBakery';

const faqs = [
    { id: "item-1", q: "How do you prevent glaze from sticking to the donut box?", a: "We use PE-extruded food-grade interior coatings and FDA-approved fluorochemical grease barriers that create a non-stick surface resistant to sugar glaze and cream filling adhesion. Both the product and packaging stay pristine from point of sale to customer delivery." },
    { id: "item-2", q: "Can you make boxes for a dozen donuts with a window?", a: "Yes! Our 12-count donut boxes are available with full-lid clear PET windows, arch windows, or oval display cutouts. Anti-fog film ensures crystal clarity even when boxes move between cold storage and room temperature environments." },
    { id: "item-3", q: "Do your donut boxes have carry handles?", a: "All our standard donut boxes include reinforced die-cut carry handles. Premium options with rope or ribbon handles are also available for specialty gifting and event donut box configurations." },
    { id: "item-4", q: "What sizes of donut boxes do you offer?", a: "We manufacture donut boxes in any custom size, from single-donut gifting sleeves to 18-count wholesale carriers. Common configurations include 6-count, 12-count, and 24-count. Custom sizing available with no minimum tooling charges." },
    { id: "item-5", q: "Are your donut boxes suitable for cream-filled donuts?", a: "Absolutely. For cream-filled and jelly donuts, we offer an optional non-stick silicone wax coating on interior contact surfaces that prevents filling residue from bonding to box walls, ensuring a clean and presentable product every time." },
];

const DonutBoxes = () => {
    const [selectedImage, setSelectedImage] = useState(0);
    const productImages = [
        { src: productHero, alt: "Donut Boxes - Main View" },
        { src: img2, alt: "Donut Boxes - Cake Style" },
        { src: img3, alt: "Donut Boxes - Pastry Style" },
        { src: img4, alt: "Donut Boxes - Cookie Style" },
        { src: img5, alt: "Donut Boxes - Muffin Style" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Donut Boxes | Food-Safe Donut Packaging | CustomPackMakers</title>
                <meta name="description" content="Custom donut boxes with grease-resistant liners, window displays, and carrying handles. FDA-approved wholesale donut packaging with fast 8-10 day turnaround." />
                <meta name="keywords" content="custom donut boxes, donut packaging, bakery donut boxes, food-safe donut packaging, wholesale donut boxes" />
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
                            <BreadcrumbItem><BreadcrumbLink asChild><Link to="/industries/bakery-boxes">Bakery Boxes</Link></BreadcrumbLink></BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem><BreadcrumbPage>Donut Boxes</BreadcrumbPage></BreadcrumbItem>
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
                                <span className="text-primary">Custom</span> Donut Boxes
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Grease-proof, FDA-approved donut packaging built for high-volume bakeries. Window displays, integrated handles, and custom printing keep glazed creations fresh and your brand front and center.
                            </p>
                            <div className="pt-2">
                                <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300" onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}>
                                    Get a Quote
                                </Button>
                            </div>
                        </div>
                        <div className="lg:col-span-5 relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-muted group">
                            <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-amber-100">
                                <img src={productHero} alt="Custom Donut Boxes" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 max-w-3xl">Donut Packaging Engineered for Freshness and On-the-Go Convenience</h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>Our <strong className="text-foreground">custom donut boxes</strong> are designed for the unique demands of donut shops, bakeries, and food trucks. From single-donut gifting boxes to high-capacity 12-count carriers, each box features FDA-approved grease-resistant liners that prevent glazing from transferring to the box surface, maintaining a pristine display from counter to customer hands.</p>
                        <p>Built with reinforced corrugated bases for structural stability during stacking, integrated carry handles for customer convenience, and optional clear window panels for irresistible impulse-purchase displays, our <strong className="text-foreground">wholesale donut packaging</strong> is engineered to drive sales and support your brand at every touchpoint.</p>
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
                                            <div className="space-y-1.5"><Label htmlFor="length" className="text-xs font-semibold text-muted-foreground">L (in)</Label><Input id="length" type="number" placeholder="16" className="h-9 bg-white" /></div>
                                            <div className="space-y-1.5"><Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label><Input id="width" type="number" placeholder="12" className="h-9 bg-white" /></div>
                                            <div className="space-y-1.5"><Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">D (in)</Label><Input id="depth" type="number" placeholder="3" className="h-9 bg-white" /></div>
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">The Complete Guide to Custom Donut Boxes</h2>
                    <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="[&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-8 [&>h3]:mb-3 [&>h3]:first:mt-0 [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-5 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-5 [&>ul]:space-y-2 [&>ul>li]:text-[15px] [&>ul>li]:text-slate-600">
                            <p>Donuts are among the most visually compelling and highly impulse-purchased items in the food retail sector. Their vibrant glazes, brilliant sprinkle toppings, cream fillings, and artistic drizzle decorations make them natural social media magnets—but only if they arrive looking exactly as they left your fryer. The single most important factor determining whether a donut arrives in photo-worthy condition is the quality of its packaging. Custom donut boxes from CustomPackMakers are engineered to solve every challenge unique to donut packaging: glaze transfer prevention, stacking damage resistance, handle ergonomics, and visual merchandise display optimization.</p>
                            <p>Donut shops operate at high velocity. On a busy Friday morning, a single location can sell hundreds of dozens before noon. This operational reality demands packaging that is not only food-safe and visually compelling but also fast and easy to assemble and load under pressure. Our auto-bottom donut box designs snap open and lock into a rigid structure in under two seconds, enabling high-speed packing operations without sacrificing box integrity.</p>

                            <h3>Grease-Resistance: The Core Technical Challenge</h3>
                            <p>Donuts are fried in oil, and regardless of how well they are drained, residual fats migrate outward through contact surfaces over time. Glazes are particularly aggressive—sugar glaze dissolves into a sticky liquid at temperatures above 85°F and will adhere permanently to uncoated paperboard. Our grease-resistance solutions address each of these challenges specifically and comprehensively.</p>
                            <ul>
                                <li><strong>Kraft Liner with PE Extrusion:</strong> Our standard donut box interior uses a food-grade PE extrusion coating over kraft liner, creating a seamless, impermeable moisture and grease barrier that is both FDA-compliant and highly resistant to sugar glaze stickiness.</li>
                                <li><strong>Fluorochemical-Treated SBS:</strong> For premium donut boxes requiring interior print quality, fluorochemical-treated SBS board provides excellent grease resistance while maintaining a bright white surface for branding.</li>
                                <li><strong>Non-Stick Interior Wax Coating:</strong> For filled donuts, an optional silicone wax coating prevents cream and jelly filling residue from bonding to box walls during transport, delivering a clean presentation every time.</li>
                            </ul>

                            <h3>Structural Design for Stacking and Transport</h3>
                            <p>Donut shops routinely stack multiple boxes for bulk orders, catering deliveries, and wholesale distribution. Without adequate structural engineering, boxes compress under stacked weight, crushing the donuts beneath. Our structural designs specifically address this critical failure mode.</p>
                            <ul>
                                <li><strong>Corner Stacking Posts:</strong> Integrated corner column structures within box walls create dedicated load-bearing points transferring stacking weight directly to the box base, completely bypassing the product space.</li>
                                <li><strong>Reinforced Corrugated Base:</strong> E-flute corrugated base panels provide superior rigidity, preventing the box from flexing under the weight of a full dozen donuts during stacking and transport.</li>
                                <li><strong>Lid Lock Tabs:</strong> Precision die-cut locking tabs ensure lids stay securely closed during stacking, preventing boxes from sliding and donuts from shifting within their compartments.</li>
                            </ul>

                            <h3>Window Display and Visual Merchandising</h3>
                            <p>Few food products are as visually compelling as premium donuts. A box with a clear window panel is a powerful impulse-purchase driver in retail, café, and market environments. Our window engineering maximizes visual impact while maintaining FDA food hygiene standards.</p>
                            <ul>
                                <li><strong>Full-Lid Clear Windows:</strong> Clear PET top panels covering the entire lid surface create a stunning display case effect, allowing customers to see every donut in its full colorful glory without opening the box.</li>
                                <li><strong>Arch and Oval Windows:</strong> Decorative arch or oval window cutouts on the front face of the box provide a sophisticated retail aesthetic, allowing partial product visibility that drives curiosity and purchase intent.</li>
                                <li><strong>Anti-Fog PET Film:</strong> All window panels use anti-fog coated PET film to ensure clarity is maintained when transitioning between cold and warm environments, critical for donuts sold from refrigerated display cases.</li>
                            </ul>

                            <h3>Ergonomic Handle Design for Customer Convenience</h3>
                            <p>The customer experience of carrying a donut box is a significant but often overlooked aspect of bakery packaging design. A box with a poorly designed handle frustrates customers and increases the risk of dropping and damaging contents. Our ergonomic handle designs are engineered for both comfort and security throughout the delivery journey.</p>
                            <ul>
                                <li><strong>Integrated Die-Cut Carry Handles:</strong> Reinforced die-cut carry handles built directly into the box lid provide a secure, two-finger grip that distributes weight evenly and prevents the box from tipping during transport.</li>
                                <li><strong>Rope Handles:</strong> For premium and event donut boxes, rope or ribbon handles attached through reinforced grommets elevate the unboxing experience to a gifting level that customers remember and share.</li>
                            </ul>

                            <h3>Branding, Print and Wholesale Scalability</h3>
                            <p>Donut boxes travel in public—on public transport, in offices, and at events—making them walking advertisements for your brand. Eye-catching design drives significant foot traffic and social media exposure. Our full-color CMYK printing, Pantone color matching, and spot UV finishing ensure your brand stands out. With flexible production scaling from 200 to 500,000 units and an 8–10 business day turnaround, your packaging supply chain stays ahead of your production needs at every volume level.</p>
                        </div>
                    </div>
                </div>
            </section>

            <RelatedProductBakery />

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
                            {[
                                { color: "primary", iconPath: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z", h: "FDA-Approved Glaze Protection", p: "Our PE-extruded food-grade interiors and FDA-compliant fluorochemical barriers block sugar glaze adhesion and oil migration. Non-stick wax coatings for filled donuts prevent cream residue from bonding to interior walls, keeping donut boxes pristine from fryer to counter throughout peak retail hours." },
                                { color: "amber-500", iconPath: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z", h: "Stacking Structural Strength", p: "Integrated corner stacking posts and E-flute corrugated bases transfer full stacking weight through structural load paths, bypassing the product space entirely. Precision lid lock tabs keep every box securely closed throughout stacking, transport, and the high-energy retail rush hour your shop faces daily." },
                                { color: "emerald-500", iconPath: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z", h: "Visual Merchandising Impact", p: "Full-lid clear PET windows and anti-fog coatings showcase every donut's vibrant glaze and toppings, driving powerful impulse purchases. Combined with full-color brand printing and ergonomic carry handles, our donut boxes function as mobile brand billboards generating organic social media exposure for your shop." },
                            ].map((item, i) => (
                                <div key={i}>
                                    <div className="flex gap-6 items-start group">
                                        <div className="flex-shrink-0 mt-1"><div className={`w-10 h-10 rounded-full bg-${item.color}/10 flex items-center justify-center group-hover:bg-${item.color}/20 transition-colors duration-300`}><svg className={`w-5 h-5 text-${item.color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.iconPath} /></svg></div></div>
                                        <div><h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">{item.h}</h3><p className="text-sm text-slate-500 leading-relaxed">{item.p}</p></div>
                                    </div>
                                    {i < 2 && <div className="w-full h-px bg-slate-100 mt-5" />}
                                </div>
                            ))}
                        </div>
                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img src={productHero} alt="Premium Custom Donut Box Packaging" className="w-full h-full object-cover" />
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
                                <img src={productHero} alt="Differentiate Your Donut Brand" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                            </div>
                            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-60" />
                            <div className="absolute -z-10 -top-8 -right-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl opacity-60" />
                        </div>
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">Differentiate Your <span className="text-primary">Donuts</span> From Others</h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">CustomPackMakers creates donut packaging where food science meets visual impact. Our grease-proof liners, stacking-strength engineering, and full-color display windows are designed to keep your donuts fresh and your brand identity bold. Every box is a moving advertisement that earns your shop a second glance—and a second purchase visit.</p>
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
                                {faqs.map((faq) => (
                                    <AccordionItem key={faq.id} value={faq.id} className="border border-slate-200 rounded-lg bg-white overflow-hidden data-[state=open]:border-primary data-[state=open]:ring-1 data-[state=open]:ring-primary/20 data-[state=open]:bg-primary/5 transition-all duration-300">
                                        <AccordionTrigger className="px-5 py-3 hover:no-underline [&>svg]:hidden group">
                                            <span className="text-left font-semibold text-foreground text-base">{faq.q}</span>
                                            <div className="shrink-0 ml-4 p-1 rounded-full bg-slate-100 group-data-[state=open]:bg-primary group-data-[state=open]:text-white transition-colors duration-200">
                                                <Plus className="h-3 w-3 group-data-[state=open]:hidden" />
                                                <Minus className="h-3 w-3 hidden group-data-[state=open]:block" />
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent className="px-5 pb-5 pt-0 text-slate-600 leading-relaxed text-sm">{faq.a}</AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                        <div className="relative w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden">
                            <img src={FAQimage} alt="Donut Boxes FAQ" className="absolute inset-0 w-full h-full object-cover" />
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

export default DonutBoxes;


