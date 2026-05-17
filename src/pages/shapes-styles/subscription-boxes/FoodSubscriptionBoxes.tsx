import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { QuoteForm } from "@/components/QuoteForm";
import { BrandRating } from "@/components/BrandRating";
import { Card, CardContent } from "@/components/ui/card";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TechnicalSpecsSection } from "@/components/TechnicalSpecsSection";
import { RelatedProductEcommerce } from "@/components/RelatedProductEcommerce";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";

import heroImage from "@/assets/shape-style/subscription-boxes/food-subscription-boxes.webp";
import FAQimage from "@/assets/FAQ-image.webp";

const FoodSubscriptionBoxes = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    const productImages = [
        { src: heroImage, alt: "Food Subscription Boxes - Main View" },
        { src: heroImage, alt: "Food Subscription Boxes - Interior" },
        { src: heroImage, alt: "Food Subscription Boxes - Open Box" },
        { src: heroImage, alt: "Food Subscription Boxes - Detail" },
        { src: heroImage, alt: "Food Subscription Boxes - Lifestyle" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Food Subscription Boxes | Gourmet Food Box Packaging | CustomPackMakers</title>
                <meta name="description" content="Order custom food subscription boxes wholesale. Premium gourmet food box packaging with food-safe materials, insulated options & fast turnaround. Get a free quote." />
                <meta name="keywords" content="food subscription boxes, gourmet food box packaging, custom food subscription packaging, monthly food boxes, wholesale food subscription packaging" />
                <meta property="og:title" content="Custom Food Subscription Boxes | Gourmet Food Box Packaging | CustomPackMakers" />
                <meta property="og:description" content="Premium custom food subscription packaging. Food-safe materials, insulated liner options & full-color printing. Low minimums, 8–10 day turnaround. Get a free quote." />
            </Helmet>
            <Header />

            <div className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 mt-[120px] md:mt-[140px]">
                <div className="container mx-auto px-[30px] py-3">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem><BreadcrumbLink asChild><Link to="/">Home</Link></BreadcrumbLink></BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem><BreadcrumbLink asChild><Link to="/shapes-styles">Shapes & Styles</Link></BreadcrumbLink></BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem><BreadcrumbLink asChild><Link to="/shapes-styles/subscription-boxes">Subscription Boxes</Link></BreadcrumbLink></BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem><BreadcrumbPage>Food Subscription Boxes</BreadcrumbPage></BreadcrumbItem>
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
                                <span className="text-primary">Custom</span> Food Subscription Boxes
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Wholesale custom food subscription packaging engineered with food-safe materials, precise temperature management options, and premium presentation to make every monthly gourmet delivery a culinary event.
                            </p>
                            <div className="pt-2">
                                <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300" onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}>
                                    Get a Quote
                                </Button>
                            </div>
                        </div>
                        <div className="lg:col-span-5 relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-muted group">
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200">
                                <img src={heroImage} alt="Food Subscription Boxes Hero" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
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
                        Food Subscription Packaging Engineered for Safety, Freshness & Premium Presentation
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            Our <strong className="text-foreground">custom food subscription boxes</strong> are purpose-built for gourmet food curators, meal kit services, snack subscription brands, specialty ingredient companies, and artisan food producers that need packaging serving dual mandates: protecting food product integrity from manufacturer to consumer table, and delivering a premium presentation experience that makes subscribers feel like VIP members of an exclusive culinary community.
                        </p>
                        <p>
                            Manufactured from FDA-compliant, food-safe materials including coated SBS board, natural kraft, and specialty corrugated, our <strong className="text-foreground">gourmet food subscription packaging</strong> is available with insulated liner options for temperature-sensitive products, moisture-barrier interior coatings for humidity-sensitive items, and precision internal organization for multi-product assortment layouts. With appetizing full-color food photography printing, craft-inspired matte finishes, and premium emblem foil stamping, your food subscription box becomes a culinary destination that subscribers celebrate receiving every month. Low minimums start at 100 units with 8–10 day turnaround.
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
                                            <div className="space-y-1.5"><Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">D (in)</Label><Input id="depth" type="number" placeholder="5" className="h-9 bg-white" /></div>
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
                        The Science and Art of Premium Food Subscription Packaging
                    </h2>
                    <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8
                            [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="[&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-8 [&>h3]:mb-3 [&>h3]:first:mt-0 [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-5 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-5 [&>ul]:space-y-2 [&>ul>li]:text-[15px] [&>ul>li]:text-slate-600">
                            <p>
                                Food subscription boxes sit at the intersection of culinary discovery, convenience culture, and the experiential economy — a powerful combination that has driven the food subscription category to become one of the largest segments in global subscription commerce. Brands across specialty snacks, gourmet ingredients, meal kits, wine and spirits, international cuisine samplers, and artisan food curation have built loyal subscriber communities by consistently delivering quality products in packaging that communicates value, freshness, and food expertise.
                            </p>
                            <p>
                                At CustomPackMakers, we understand that food subscription packaging must satisfy two distinct but equally important requirements: protecting food product integrity from the production facility to the subscriber's kitchen table, and presenting those products in a way that makes subscribers feel genuinely excited about every item in the box. Our food subscription packaging solutions are engineered to achieve both with precision.
                            </p>

                            <h3>Food-Safety Engineering for Every Subscription Category</h3>
                            <p>
                                Food products require packaging that goes beyond structural protection — it must actively contribute to product safety, freshness preservation, and regulatory compliance across a complex supply chain:
                            </p>
                            <ul>
                                <li><strong>FDA-Compliant Interior Coatings:</strong> All interior surfaces that contact food products are coated with FDA-approved, food-safe coatings that prevent ink or adhesive transfer and provide a moisture-resistant barrier without affecting food flavor or safety.</li>
                                <li><strong>Insulated Liner Systems:</strong> For temperature-sensitive food subscriptions, our corrugated boxes integrate insulated liner panels that maintain safe temperature ranges for perishable foods during standard last-mile delivery windows.</li>
                                <li><strong>Grease-Resistant Interior Panels:</strong> For boxes containing oily or high-fat food products (charcuterie, nuts, flavored oils), our grease-resistant interior coatings prevent box degradation that compromises structural integrity and presentation.</li>
                                <li><strong>Oxygen-Barrier Film Laminates:</strong> For specialty food subscriptions requiring enhanced shelf-life protection, our oxygen-barrier interior laminates significantly reduce oxygen transmission that causes oxidative spoilage in fresh or minimally processed foods.</li>
                                <li><strong>Compartmentalized Organization:</strong> Custom-height cardboard dividers and individual product compartments prevent allergen cross-contamination within multi-product food subscription boxes — a food safety requirement for mixed-category food curation services.</li>
                            </ul>

                            <h3>Appetite-Stimulating Packaging Aesthetics</h3>
                            <p>
                                Food subscription packaging must make subscribers hungry before they've tasted a single item. The visual language of premium food packaging is specific and well-researched:
                            </p>
                            <ul>
                                <li><strong>Food Photography Exterior Printing:</strong> High-resolution, appetite-stimulating product photography printed on the exterior creates an immediate visual connection to the food experience inside, building anticipation before the box is opened.</li>
                                <li><strong>Craft Matte & Kraft Finishes:</strong> Warm matte and natural kraft aesthetics communicate artisan quality, small-batch provenance, and authentic food craftsmanship — powerful signals for gourmet and specialty food subscription audiences.</li>
                                <li><strong>Origin & Terroir Storytelling Graphics:</strong> Map illustrations, farm imagery, and origin story graphics communicate food provenance and quality sourcing in a visual language that educated food subscribers respond to powerfully.</li>
                                <li><strong>Chef and Maker Portraits:</strong> Featuring the artisan producer, chef, or farmer on the box exterior builds personal connection and trust in the food sourcing narrative — a key driver of food subscription loyalty.</li>
                            </ul>

                            <h3>Food Subscription Category Coverage</h3>
                            <p>
                                Our food subscription packaging solutions serve a comprehensive range of gourmet food subscription verticals:
                            </p>
                            <ul>
                                <li>Specialty snack and artisan chip subscription services</li>
                                <li>Global cuisine and international ingredient exploration subscriptions</li>
                                <li>Farm-to-table seasonal produce and specialty ingredient boxes</li>
                                <li>Wine, craft beer, and spirits subscription curation services</li>
                                <li>Coffee and tea single-origin specialty subscription boxes</li>
                                <li>Vegan, gluten-free, and specialty dietary subscription services</li>
                                <li>Meal kit ingredient and recipe subscription boxes</li>
                            </ul>

                            <h3>Brand Loyalty Through Culinary Community</h3>
                            <p>
                                The most successful food subscription brands understand that they are not just selling food — they are building a community of shared culinary passion. Your packaging is the physical embodiment of that community membership: a monthly touchpoint that communicates expertise, discovery, and trusted curation. Custom packaging elements like chef tasting notes, producer stories, recipe inspiration cards, and regional food culture guides transform a food delivery into an educational culinary journey. Partner with CustomPackMakers to create food subscription packaging that builds the kind of loyal culinary community that sustains and grows your subscription brand for years.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <RelatedProductEcommerce />

            <section className="py-12 relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #fafafa 0%, #f4f6ff 60%, #f0fdf8 100%)' }}>
                <div className="absolute top-0 left-0 w-80 h-80 bg-primary/4 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-300/8 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl pointer-events-none" />
                <div className="container mx-auto px-[30px] relative z-10">
                    <div className="text-center mb-14">
                        <span className="inline-block text-xs font-semibold tracking-widest text-primary uppercase mb-3 bg-primary/10 px-4 py-1.5 rounded-full">Our Promise</span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">Why Brands Choose <span className="text-primary">CustomPackMakers</span></h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">We combine food-safety engineering, appetite-stimulating design, and gourmet subscription expertise to create food boxes that subscribers genuinely savor receiving.</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">
                        <div className="space-y-5">
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1"><div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300"><svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div></div>
                                <div><h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">FDA-Compliant Food-Safe Materials</h3><p className="text-sm text-slate-500 leading-relaxed">Every <strong>food subscription box</strong> we produce uses FDA-approved interior coatings, food-safe adhesives, and non-toxic inks that protect product integrity and satisfy food safety regulations — giving your subscribers confidence in every bite and your brand freedom from regulatory concern.</p></div>
                            </div>
                            <div className="w-full h-px bg-slate-100" />
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1"><div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors duration-300"><svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg></div></div>
                                <div><h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Appetite-Stimulating Print Quality</h3><p className="text-sm text-slate-500 leading-relaxed">Our high-resolution food photography and craft-inspired matte design capabilities create <strong>gourmet food subscription packaging</strong> that makes subscribers hungry from the outside — building culinary anticipation before the first product is touched and turning every delivery into a celebrated food event.</p></div>
                            </div>
                            <div className="w-full h-px bg-slate-100" />
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1"><div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors duration-300"><svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div></div>
                                <div><h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Temperature Management Options</h3><p className="text-sm text-slate-500 leading-relaxed">Our insulated liner options for <strong>food subscription boxes</strong> maintain safe temperatures for perishable food items during last-mile delivery — expanding the range of food products you can curate for subscribers without compromising freshness or food safety compliance.</p></div>
                            </div>
                        </div>
                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img src={heroImage} alt="Premium Food Subscription Box" className="w-full h-full object-cover" />
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
                                <img src={heroImage} alt="Differentiate Your Food Subscription" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                            </div>
                            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-60" />
                            <div className="absolute -z-10 -top-8 -right-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl opacity-60" />
                        </div>
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                                Differentiate Your <span className="text-primary">Food Brand</span> Through Packaging That Tells a Culinary Story
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                At CustomPackMakers, we understand that gourmet food subscription subscribers are not just buying ingredients — they are investing in culinary education, discovery, and a connection with the food producers and makers behind each item. Our food subscription packaging is engineered to facilitate that connection through provenance storytelling graphics, chef tasting note inserts, regional food culture guides, and appetite-stimulating exterior design. We help food subscription brands build the culinary community their subscribers come back to every month and enthusiastically recommend to every food-loving friend they know.
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
                                <p className="text-base text-muted-foreground">Everything you need to know about our food subscription packaging.</p>
                            </div>
                            <Accordion type="single" collapsible defaultValue="item-1" className="w-full space-y-2">
                                {[
                                    { id: "item-1", question: "Are your food subscription box materials FDA-compliant?", answer: "Yes. All interior coatings, adhesives, and inks used in food subscription boxes that contact food products directly are FDA-approved and certified food-safe. We provide full material specification documentation upon request. For specialty dietary brands with specific certification requirements (organic, kosher, halal), we can source compliant materials to match your standards." },
                                    { id: "item-2", question: "Do you offer insulated box options for temperature-sensitive food subscriptions?", answer: "Yes. We offer corrugated boxes with integrated insulated liner kits for temperature-sensitive food subscription products. Our insulated liners use food-grade reflective foil or foam wall insulation and are compatible with dry ice or gel ice pack systems to maintain safe temperatures during standard last-mile delivery windows for perishable food products." },
                                    { id: "item-3", question: "How do you prevent allergen cross-contamination in mixed food subscription boxes?", answer: "We engineer individual product compartments using custom-height corrugated dividers that physically separate products containing different allergens within the same subscription box. Each compartment can also be fitted with individual food-safe liner panels. We recommend clearly printed allergen warning panels on the exterior and interior panels for all mixed-allergen food subscription boxes." },
                                    { id: "item-4", question: "Can you accommodate heavy food products like wine bottles or condiment jars?", answer: "Yes. For heavy food subscription products such as wine bottles, jars, or canned goods, we use reinforced double-wall corrugated construction with custom-molded pulp or corrugated suspension inserts that immobilize glass and ceramic items completely during transit. Our structural engineers calculate the appropriate board specification for your specific product weight profile." },
                                    { id: "item-5", question: "What is the minimum order and production lead time for food subscription boxes?", answer: "Minimum order starts at 100 units with standard 8–10 business day production from artwork approval. Rush 4–6 day options are available for time-sensitive food subscription launch windows. All orders include one complimentary digital proof review. Free shipping on qualifying wholesale food subscription box orders." }
                                ].map((faq) => (
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
                        <div className="relative w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden">
                            <img src={FAQimage} alt="Food Subscription Boxes FAQ" className="absolute inset-0 w-full h-full object-cover" />
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

export default FoodSubscriptionBoxes;
