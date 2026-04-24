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

import heroImage from "@/assets/subscription-boxes/soap-subscription-box.webp";
import FAQimage from "@/assets/FAQ-image.webp";

const SoapSubscriptionBoxes = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    const productImages = [
        { src: heroImage, alt: "Soap Subscription Boxes - Main View" },
        { src: heroImage, alt: "Soap Subscription Boxes - Interior" },
        { src: heroImage, alt: "Soap Subscription Boxes - Open Box" },
        { src: heroImage, alt: "Soap Subscription Boxes - Detail" },
        { src: heroImage, alt: "Soap Subscription Boxes - Lifestyle" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Soap Subscription Boxes | Artisan Soap Packaging | CustomPackMakers</title>
                <meta name="description" content="Order custom soap subscription boxes wholesale. Premium artisan soap subscription packaging with eco-friendly materials, natural finishes & fast turnaround. Get a free quote." />
                <meta name="keywords" content="soap subscription boxes, artisan soap packaging, custom soap subscription packaging, monthly soap boxes, wholesale soap subscription packaging" />
                <meta property="og:title" content="Custom Soap Subscription Boxes | Artisan Soap Packaging | CustomPackMakers" />
                <meta property="og:description" content="Premium custom soap subscription packaging. Eco-friendly materials, natural kraft finishes & custom inserts. Low minimums, 8–10 day turnaround. Get a quote." />
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
                            <BreadcrumbItem><BreadcrumbPage>Soap Subscription Boxes</BreadcrumbPage></BreadcrumbItem>
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
                                <span className="text-primary">Custom</span> Soap Subscription Boxes
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Wholesale custom soap subscription packaging crafted for artisan soapmakers, natural beauty brands, and wellness subscription curators who want every monthly delivery to feel like a handcrafted gift.
                            </p>
                            <div className="pt-2">
                                <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300" onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}>
                                    Get a Quote
                                </Button>
                            </div>
                        </div>
                        <div className="lg:col-span-5 relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-muted group">
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200">
                                <img src={heroImage} alt="Soap Subscription Boxes Hero" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
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
                        Artisan Soap Subscription Packaging That Tells Your Natural Brand Story
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            Our <strong className="text-foreground">custom soap subscription boxes</strong> are designed for handmade soap brands, natural beauty subscription services, and wellness curators who need packaging that authentically communicates their artisan, organic, or small-batch ethos. Whether your subscription features cold-process bar soaps, shea butter bath bars, exfoliating sugar scrub bars, or botanical-infused soap collections, our packaging solutions protect and present each piece with the attention to detail your customers expect.
                        </p>
                        <p>
                            Our <strong className="text-foreground">artisan soap subscription packaging</strong> is available in FSC-certified kraft, natural texture board, and premium SBS cardstock — supporting a range of aesthetics from raw, earthy natural finishes to luxurious mint-and-gold branding. With custom-cut soap inserts, wax paper liners, tissue wrapping compartments, and printed belly band options, we build complete soap subscription packaging systems that reflect your brand's personality and protect your handcrafted bars beautifully through the entire shipping journey.
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
                        Building a Loyal Subscriber Base With Artisan Soap Packaging
                    </h2>
                    <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8
                            [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="[&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-8 [&>h3]:mb-3 [&>h3]:first:mt-0 [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-5 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-5 [&>ul]:space-y-2 [&>ul>li]:text-[15px] [&>ul>li]:text-slate-600">
                            <p>
                                The artisan soap subscription market sits at the intersection of the self-care movement, the clean beauty revolution, and the growing consumer appetite for small-batch, handmade products. Subscribers to soap boxes are not just buying soap — they are investing in a monthly ritual of discovery, self-care, and connection with makers who share their values around natural ingredients, sustainable practices, and conscious consumption. Your packaging must embody all of those values from the moment the box is delivered to the doorstep.
                            </p>
                            <p>
                                At CustomPackMakers, we understand the artisan soap categorical landscape profoundly. Our soap subscription packaging solutions are developed with the natural beauty customer in mind: eco-authentic materials, botanically inspired aesthetics, precision bar soap protection, and the kind of branded presentation that makes subscribers feel like they're receiving something truly special each month.
                            </p>

                            <h3>Soap-Specific Structural Protection</h3>
                            <p>
                                Bar soaps present unique packaging challenges. Cold-process soaps can crumble at corners if jostled in transit. Glycerin soaps sweat in humidity. Botanical-topped soaps can dislodge decorative elements. Our soap subscription box engineering addresses all of these challenges:
                            </p>
                            <ul>
                                <li><strong>Precision-Cut Bar Soap Cradles:</strong> Die-cut cardboard cradles hold individual bars at the perfect height and position, preventing corner damage and surface contact between bars.</li>
                                <li><strong>Wax Paper or Glassine Liners:</strong> Individual bar soap wrappers in wax paper or glassine within the subscription box prevent moisture transfer between soaps of different fragrance profiles.</li>
                                <li><strong>Humidity-Resistant Exterior Coatings:</strong> Aqueous and UV coatings on box exteriors prevent swelling and delamination in humid shipping conditions that can damage cardstock packaging.</li>
                                <li><strong>Corrugated Outer Shippers:</strong> For multi-box shipments or subscriptions serving humid geographic regions, our corrugated outer shippers add a structural buffer layer that protects the premium inner box.</li>
                            </ul>

                            <h3>Eco-Authentic Aesthetic Options</h3>
                            <p>
                                Artisan soap subscribers have a finely tuned radar for authenticity. Packaging that feels industrial or synthetic immediately undermines the natural brand narrative your soap subscription is built upon. Our eco-authentic packaging options for soap subscription brands include:
                            </p>
                            <ul>
                                <li><strong>Natural Kraft Exterior:</strong> Unbleached natural kraft board exteriors communicate an honest, earth-first brand ethos that resonates deeply with clean beauty consumers.</li>
                                <li><strong>Botanical Print Patterns:</strong> Full-color botanical illustrations — lavender sprig, eucalyptus branch, chamomile flower — printed on recycled or kraft materials create a visual language of natural ingredients and artisan care.</li>
                                <li><strong>Earthy Pantone Color Palettes:</strong> Sage greens, warm terracottas, soft lavenders, and natural cream tones reproduced in exact Pantone matching communicate the natural, non-toxic world your soap brand inhabits.</li>
                                <li><strong>Soy-Based Ink Printing:</strong> All our print processes are available with certified soy-based inks, a key eco-credibility signal for natural beauty subscription brands marketing to the clean-living consumer.</li>
                            </ul>

                            <h3>Subscription Personalization Elements</h3>
                            <p>
                                The best soap subscription boxes feel curated and personal, not mass-produced. Our packaging system supports multiple personalization and curation elements that improve subscriber satisfaction and reduce churn:
                            </p>
                            <ul>
                                <li>Custom-printed soap info cards describing each bar's ingredients, origin, and suggested use ritual</li>
                                <li>Personalized hand-written style note card inserts with subscriber names</li>
                                <li>Seasonal theme art panels that update the box's visual identity monthly without structural retooling</li>
                                <li>Ingredient transparency stamp panels with QR codes linking to sourcing stories</li>
                            </ul>

                            <h3>Wholesale Pricing for Soapmakers at Every Scale</h3>
                            <p>
                                Whether you're a solo artisan soapmaker launching your first subscription cohort or an established handmade beauty brand scaling a 5,000-subscriber monthly service, our soap subscription box pricing is structured to support your business at every stage. Minimum orders start at 100 units with zero structural tooling fees for standard soap box dimensions. Contact our packaging specialists today for a custom quote tailored to your specific soap bar dimensions, quantity, and finish preferences.
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
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">We combine eco-authentic materials, artisan-inspired aesthetics, and precision soap protection to make your monthly delivery feel genuinely handcrafted.</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">
                        <div className="space-y-5">
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1"><div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300"><svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div></div>
                                <div><h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Eco-Authentic Kraft Materials</h3><p className="text-sm text-slate-500 leading-relaxed">Our natural kraft and FSC-certified board options for <strong>soap subscription boxes</strong> align perfectly with the clean beauty values your artisan soap subscribers care about deeply — no compromise on eco-credentials, no sacrifice of visual quality.</p></div>
                            </div>
                            <div className="w-full h-px bg-slate-100" />
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1"><div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors duration-300"><svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg></div></div>
                                <div><h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Bar Soap Precision Inserts</h3><p className="text-sm text-slate-500 leading-relaxed">Our die-cut cardboard and wax paper insert systems protect delicate handmade bar soaps from corner damage, fragrance cross-contamination, and surface scuffing — maintaining your artisan soap subscription's quality promise through every last-mile delivery.</p></div>
                            </div>
                            <div className="w-full h-px bg-slate-100" />
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1"><div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors duration-300"><svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div></div>
                                <div><h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Botanical Print Expertise</h3><p className="text-sm text-slate-500 leading-relaxed">Our soy-based ink printing on kraft and art board produces stunning botanical illustration quality for <strong>artisan soap subscription packaging</strong> — lavender, eucalyptus, chamomile, and custom botanical motifs that make every box feel like a curated garden delivery.</p></div>
                            </div>
                        </div>
                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img src={heroImage} alt="Premium Soap Subscription Box" className="w-full h-full object-cover" />
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
                                <img src={heroImage} alt="Differentiate Your Soap Subscription" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                            </div>
                            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-60" />
                            <div className="absolute -z-10 -top-8 -right-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl opacity-60" />
                        </div>
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                                Differentiate Your <span className="text-primary">Soap Brand</span> Through Authentic Packaging
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                At CustomPackMakers, we understand that artisan soap subscription subscribers are among the most discerning consumers in the natural beauty market. They can spot inauthenticity immediately and respond to genuine craft equally quickly. Our packaging team specializes in creating soap subscription boxes that feel as handcrafted as your soaps — with natural kraft textures, botanical print artistry, earthy Pantone palettes, and eco-certified materials that communicate your brand's real commitment to natural wellness. Every box we build is a physical expression of your soapmaking philosophy, designed to deepen subscriber connection and reinforce the lifestyle identity your brand represents.
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
                                <p className="text-base text-muted-foreground">Everything you need to know about our soap subscription packaging.</p>
                            </div>
                            <Accordion type="single" collapsible defaultValue="item-1" className="w-full space-y-2">
                                {[
                                    { id: "item-1", question: "How do you protect handmade bar soaps during subscription box shipping?", answer: "We protect handmade bar soaps with precision die-cut cardboard cradles that hold each bar at the correct depth, preventing corner-to-corner contact and surface scuffing. Individual bars are wrapped in food-safe wax paper or glassine liners to prevent fragrance cross-contamination. Our humidity-resistant exterior coatings prevent box delamination in variable shipping environments." },
                                    { id: "item-2", question: "What eco-friendly material options do you offer for soap subscription boxes?", answer: "Our soap subscription boxes are available in 100% recycled natural kraft, FSC-certified SBS board, and unbleached chipboard. All materials are compatible with soy-based inks, water-based coatings, and plant-based adhesives. We provide full eco-material certification documentation upon request for brands with specific sustainability standards or retailer requirements." },
                                    { id: "item-3", question: "Can I use different artwork each month for seasonal themes?", answer: "Yes. We maintain your structural dieline specifications on file indefinitely. For each monthly subscription cycle, you simply supply updated seasonal print-ready artwork and we update the exterior design without any structural re-engineering fees. Seasonal artwork turnaround from file submission to production start is typically 2–3 business days." },
                                    { id: "item-4", question: "What box formats work best for soap subscription packaging?", answer: "For 2–4 bar soap assortments, we recommend rigid magnetic closure boxes with die-cut cardboard inserts. For 6+ bar assortments, a lidded rigid box with a custom thermoformed tray provides the best protection and presentation. Single-bar subscriptions work well in a simple two-piece rigid box or a sleeve-over-tray format with belly-band branding." },
                                    { id: "item-5", question: "What is your minimum order and lead time for soap subscription boxes?", answer: "Minimum order quantity starts at 100 units with no structural tooling fees. Standard production lead time is 8–10 business days after artwork approval. Rush 4–6 day production is available. All orders include one complimentary digital proof review before production begins, and free shipping applies to qualifying wholesale soap subscription box orders." }
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
                            <img src={FAQimage} alt="Soap Subscription Boxes FAQ" className="absolute inset-0 w-full h-full object-cover" />
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

export default SoapSubscriptionBoxes;
