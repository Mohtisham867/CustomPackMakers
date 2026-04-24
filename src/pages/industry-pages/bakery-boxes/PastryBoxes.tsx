import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { QuoteForm } from "@/components/QuoteForm";
import { BrandRating } from "@/components/BrandRating";
import { Card, CardContent } from "@/components/ui/card";
import {
    Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TechnicalSpecsSection } from "@/components/TechnicalSpecsSection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";

import pastryBoxeshero from "@/assets/bakery-products/pastry-boxes/img-hero.webp";
import pastryBoxesimg1 from "@/assets/bakery-products/pastry-boxes/img-1.webp";
import pastryBoxesimg2 from "@/assets/bakery-products/pastry-boxes/img-2.webp";
import pastryBoxesimg3 from "@/assets/bakery-products/pastry-boxes/img-3.webp";
import pastryBoxesimg4 from "@/assets/bakery-products/pastry-boxes/img-4.webp";
import pastryBoxesimg5 from "@/assets/bakery-products/pastry-boxes/img-5.webp";
import pastryBoxesimg6 from "@/assets/bakery-products/pastry-boxes/img-whychoose.webp";
import pastryBoxesimg7 from "@/assets/bakery-products/pastry-boxes/img-different.webp";
import FAQimage from "@/assets/FAQ-image.webp";
import { RelatedProductBakery } from '@/components/RelatedProductBakery';


const PastryBoxes = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    const productImages = [
        { src: pastryBoxesimg1, alt: "Pastry Boxes - Main View" },
        { src: pastryBoxesimg2, alt: "Pastry Boxes - Cake Style" },
        { src: pastryBoxesimg3, alt: "Pastry Boxes - Cupcake Style" },
        { src: pastryBoxesimg4, alt: "Pastry Boxes - Cookie Style" },
        { src: pastryBoxesimg5, alt: "Pastry Boxes - Muffin Style" },
    ];


    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Pastry Boxes | Grease-Resistant Pastry Packaging | CustomPackMakers</title>
                <meta name="description" content="Premium custom pastry boxes with grease-resistant, FDA-approved materials. Elegant packaging for croissants, eclairs, and pastries. Wholesale with fast turnaround." />
                <meta name="keywords" content="custom pastry boxes, pastry packaging, grease-resistant pastry boxes, bakery pastry packaging, food-safe pastry boxes" />
                <meta property="og:title" content="Custom Pastry Boxes | Grease-Resistant Pastry Packaging | CustomPackMakers" />
                <meta property="og:description" content="Food-grade pastry boxes engineered for grease resistance and aesthetic appeal. Perfect for croissants, eclairs, and delicate pastries." />
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
                            <BreadcrumbItem><BreadcrumbPage>Pastry Boxes</BreadcrumbPage></BreadcrumbItem>
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
                                <span className="text-primary">Custom</span> Pastry Boxes
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Grease-resistant, FDA-approved pastry packaging that preserves flaky layers, prevents sogginess, and showcases your delicate creations with elegant retail presentation.
                            </p>
                            <div className="pt-2">
                                <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300" onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}>
                                    Get a Quote
                                </Button>
                            </div>
                        </div>
                        <div className="lg:col-span-5 relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-muted group">
                            <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-amber-100">
                                <img src={pastryBoxeshero} alt="Custom Pastry Boxes" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 max-w-3xl">
                        Pastry Packaging That Preserves Freshness and Elevates Presentation
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            Our <strong className="text-foreground">custom pastry boxes</strong> are engineered for patisseries, artisan bakeries, and food service operators that demand uncompromising quality in both food safety and brand presentation. From flaky croissants and chocolate eclairs to delicate mille-feuilles and fruit tarts, our <strong className="text-foreground">grease-resistant pastry packaging</strong> maintains the structural integrity of your creations from kitchen to customer.
                        </p>
                        <p>
                            Featuring FDA-approved food-grade materials, precision ventilation engineering, and full-color printing capabilities, each <strong className="text-foreground">custom pastry box</strong> is a carefully balanced solution between protection and visual appeal. Our wholesale pricing and 8–10 business day turnaround make premium pastry packaging accessible at every scale of operation.
                        </p>
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
                                            <div className="space-y-1.5"><Label htmlFor="length" className="text-xs font-semibold text-muted-foreground">L (in)</Label><Input id="length" type="number" placeholder="12" className="h-9 bg-white" /></div>
                                            <div className="space-y-1.5"><Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label><Input id="width" type="number" placeholder="8" className="h-9 bg-white" /></div>
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">
                        The Complete Guide to Custom Pastry Boxes
                    </h2>
                    <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="[&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-8 [&>h3]:mb-3 [&>h3]:first:mt-0 [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-5 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-5 [&>ul]:space-y-2 [&>ul>li]:text-[15px] [&>ul>li]:text-slate-600">
                            <p>
                                Pastry packaging presents a uniquely complex set of requirements that generic boxes simply cannot meet. Artisan pastries—from buttery croissants and custard-filled eclairs to delicate fruit tarts and layers of mille-feuille—are among the most structurally fragile and oil-rich baked goods in the food service industry. Without specialized custom pastry boxes engineered specifically for these challenges, your products will arrive damaged, soggy, or visually compromised, undermining the artisanship your team invested in their creation.
                            </p>
                            <p>
                                CustomPackMakers designs and manufactures custom pastry boxes that meet the exacting demands of professional patisseries, hotel bakeries, and retail pastry shops. Every box is built around three core engineering principles: grease resistance to preserve exterior appearance, moisture management to maintain flakiness and crispness, and structural design to prevent crushing of delicate pastry architecture.
                            </p>

                            <h3>The Science of Grease Resistance in Pastry Packaging</h3>
                            <p>
                                Pastry is inherently high in fat content. Croissants, danish pastries, pain au chocolat, and kouign-amann all achieve their signature textures through generous quantities of laminated butter. This butter, especially in warm retail environments, will melt and migrate outward through contact surfaces, saturating standard paperboard within hours. The resulting oil stain compromises both the aesthetic presentation of the box and the structural integrity of the board material.
                            </p>
                            <ul>
                                <li><strong>Fluoropolymer Treatment:</strong> Our premium grease barrier uses an FDA-approved fluoropolymer treatment applied directly to the paperboard fiber matrix, creating an invisible but highly effective barrier that prevents oil and fat migration without affecting the food-safe profile or recyclability of the material.</li>
                                <li><strong>Clay-Coated Liner:</strong> For maximum print quality alongside grease resistance, we utilize clay-coated interior liners that provide both a smooth, non-porous food contact surface and an excellent substrate for vibrant interior printing.</li>
                                <li><strong>Silicone Release Liner:</strong> For cream-filled pastries where direct contact with the box interior cannot be avoided, we offer optional silicone release liner inserts that prevent frosting and cream from adhering to the box walls, making removal clean and presentation-perfect.</li>
                            </ul>

                            <h3>Ventilation Engineering for Pastry Crispness</h3>
                            <p>
                                One of the most common complaints from pastry customers is loss of crispness during transport. This occurs because moisture released by warm pastries becomes trapped inside a sealed box, creating a humid microenvironment that condenses on the surfaces of your products, softening flaky layers and dissolving sugar glazes. Our ventilation engineering solves this problem definitively.
                            </p>
                            <ul>
                                <li><strong>Micro-Perforation Arrays:</strong> We integrate precisely calculated arrays of micro-perforations in the side walls of pastry boxes that allow moisture vapor to escape while maintaining the structural integrity of the box. The perforation pattern and sizing are engineered based on the specific moisture output of different pastry types.</li>
                                <li><strong>Vented Window Panels:</strong> Clear PET window panels with embedded micro-mesh ventilation allow customers to see the product while still providing adequate airflow to prevent condensation on the display surface.</li>
                                <li><strong>Convection-Optimized Lid Design:</strong> Our lid designs include specific clearance gaps that promote natural convection currents, drawing moist warm air upward and out of the box through micro-vents without allowing external contaminants to enter.</li>
                            </ul>

                            <h3>Structural Design for Fragile Pastry Architecture</h3>
                            <p>
                                The architectural complexity of artisan pastries—the multiple laminated layers of a croissant, the delicate choux shell of an eclair, the precisely piped cream of a Paris-Brest—requires packaging that provides secure containment without applying any compressive forces to the pastry surface.
                            </p>
                            <ul>
                                <li><strong>Elevated Interior Base:</strong> We engineer a subtle internal platform or corrugated base layer that keeps the pastry elevated off the box floor, preventing the underside from becoming soggy or stained while also protecting delicate bottom glazes.</li>
                                <li><strong>Precision Depth Engineering:</strong> Each pastry box is engineered to the exact height profile needed—tall enough to prevent the lid from touching the tallest point of the pastry (such as the horns of a croissant), yet snug enough to prevent lateral sliding during transport.</li>
                                <li><strong>Divider Systems:</strong> For mixed pastry assortments, we design internal paper divider systems that separate individual pieces, preventing flavor cross-contamination and physical damage from items bumping together during transit.</li>
                            </ul>

                            <h3>Aesthetic and Brand Presentation</h3>
                            <p>
                                In the premium pastry market, packaging is as much a part of the product experience as the pastry itself. Customers who pay premium prices for artisan pastries expect the box to match the quality of the contents. Our finishing options allow you to create a pastry box that is as beautiful and carefully crafted as the goods inside.
                            </p>
                            <ul>
                                <li><strong>Ribbon Handles:</strong> Satin ribbon pulls integrated into the lid or side panels add an immediate sense of luxury that elevates a simple pastry purchase into a gifting experience.</li>
                                <li><strong>Embossed Brand Logos:</strong> Raised embossed logos on the exterior of matte-laminated pastry boxes create a tactile premium impression that reinforces brand quality from the first touch.</li>
                                <li><strong>Clear Window Panels:</strong> Custom-shaped clear windows allow customers to view the pastry within, building trust and driving impulse purchase decisions in retail and café environments.</li>
                            </ul>

                            <h3>Wholesale Scalability and Turnaround</h3>
                            <p>
                                Whether you are a boutique patisserie requiring 500 boxes for a weekend collection or a multi-location bakery chain ordering 20,000 units monthly, our flexible production model scales to meet your needs. Low minimum order quantities, competitive volume pricing, and our industry-leading 8–10 business day production turnaround ensure your packaging operation never falls behind your production schedule.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* INLINE BAKERY CAROUSEL */}
            <RelatedProductBakery />

            {/* WHY BRANDS CHOOSE */}
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
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">FDA-Approved Grease Resistance</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">Our pastry boxes feature FDA-approved fluoropolymer grease barriers that block fat migration from butter-rich pastries. Clay-coated food-safe interiors prevent oil stains from saturating through, keeping your packaging pristine from kitchen display to customer delivery.</p>
                                </div>
                            </div>
                            <div className="w-full h-px bg-slate-100" />
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1"><div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors duration-300"><svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg></div></div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Precision Ventilation for Crispness</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">Engineered micro-perforation arrays and vented window panels allow moisture vapor to escape, preventing condensation that softens flaky croissant layers and dissolves sugar glazes. Our ventilation system maintains optimal crispness throughout the entire delivery journey.</p>
                                </div>
                            </div>
                            <div className="w-full h-px bg-slate-100" />
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1"><div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors duration-300"><svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div></div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Luxury Aesthetic Appeal</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">Satin ribbon handles, embossed logos, spot UV finishing and custom window shapes transform every pastry box into a premium gifting experience. Packaging that matches artisan quality drives customer loyalty, repeat purchases, and powerful social media word-of-mouth for your patisserie brand.</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img src={pastryBoxesimg6} alt="Premium Custom Pastry Box Packaging" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-7">
                                    <p className="text-white font-bold text-lg leading-snug mb-1">Trusted by 500+ Brands</p>
                                    <p className="text-white/75 text-sm">Delivering premium packaging across North America</p>
                                </div>
                            </div>
                            <div className="absolute top-4 -right-2 lg:-right-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80 backdrop-blur-sm">
                                <p className="text-2xl font-bold text-primary leading-none">98%</p>
                                <p className="text-xs text-slate-400 mt-1 font-medium">Satisfaction Rate</p>
                            </div>
                            <div className="absolute bottom-4 -left-2 lg:-left-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80 backdrop-blur-sm">
                                <p className="text-2xl font-bold text-emerald-500 leading-none">8–10</p>
                                <p className="text-xs text-slate-400 mt-1 font-medium">Day Turnaround</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-10 lg:py-12 bg-white overflow-hidden relative">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="relative group">
                            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] border border-primary/20 shadow-2xl transform transition-transform duration-700 hover:scale-[1.02]">
                                <img src={pastryBoxesimg7} alt="Differentiate Your Pastry Brand" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                            </div>
                            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-60" />
                            <div className="absolute -z-10 -top-8 -right-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl opacity-60" />
                        </div>
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">Differentiate Your <span className="text-primary">Pastries</span> From Others</h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                CustomPackMakers delivers pastry boxes where engineering meets elegance. Our grease-proof barriers, precision ventilation, and luxury finishes are designed to protect the most delicate pastry creations while elevating your brand to a premium tier. Every box we produce is a statement of quality that mirrors the artistry inside and builds lasting customer loyalty for your patisserie.
                            </p>
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
                                    { id: "item-1", question: "How do you prevent butter grease from staining the box?", answer: "We apply an FDA-approved fluoropolymer grease-barrier treatment to the board fiber matrix, blocking fat migration. This keeps the exterior presentation clean and the structural integrity of the board intact even with high-butter-content pastries." },
                                    { id: "item-2", question: "Can you make vented boxes to keep croissants crispy?", answer: "Yes! We engineer micro-perforation arrays in the side walls and offer vented window panel options specifically designed to allow moisture vapor to escape while maintaining natural convection airflow that preserves flakiness." },
                                    { id: "item-3", question: "Do you offer pastry boxes with ribbon handles?", answer: "Absolutely. Satin ribbon handles can be integrated into the box structure, transforming a functional pastry carrier into a premium gifting experience that matches upscale patisserie branding." },
                                    { id: "item-4", question: "What size pastry boxes do you manufacture?", answer: "We produce pastry boxes in virtually any custom size, from individual single-pastry boxes to large assortment boxes for a dozen items. Our CAD team will engineer the precise dimensions for your specific pastry portfolio." },
                                    { id: "item-5", question: "Are the inks used on pastry boxes food safe?", answer: "All printing inks on food-contact surfaces use water-based, VOC-free, FDA-compliant formulations. Interior surfaces use only certified food-safe coatings that will never impart taste, odor, or chemicals to your pastries." }
                                ].map((faq) => (
                                    <AccordionItem key={faq.id} value={faq.id} className="border border-slate-200 rounded-lg bg-white overflow-hidden data-[state=open]:border-primary data-[state=open]:ring-1 data-[state=open]:ring-primary/20 data-[state=open]:bg-primary/5 transition-all duration-300">
                                        <AccordionTrigger className="px-5 py-3 hover:no-underline [&>svg]:hidden group">
                                            <span className="text-left font-semibold text-foreground text-base">{faq.question}</span>
                                            <div className="shrink-0 ml-4 p-1 rounded-full bg-slate-100 group-data-[state=open]:bg-primary group-data-[state=open]:text-white transition-colors duration-200">
                                                <Plus className="h-3 w-3 group-data-[state=open]:hidden" />
                                                <Minus className="h-3 w-3 hidden group-data-[state=open]:block" />
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent className="px-5 pb-5 pt-0 text-slate-600 leading-relaxed text-sm">{faq.answer}</AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                        <div className="relative w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden">
                            <img src={FAQimage} alt="Pastry Boxes FAQ" className="absolute inset-0 w-full h-full object-cover" />
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

export default PastryBoxes;


