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
import { RelatedProductMailerBoxes } from "@/components/RelatedProductMailerBoxes";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";

import heroImg from "@/assets/mailer-boxes/poly-bubble-mailers.webp";
import FAQimage from "@/assets/FAQ-image.webp";

const PolyBubbleMailers = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    const productImages = [
        { src: heroImg, alt: "Poly Bubble Mailers - Main View" },
        { src: heroImg, alt: "Poly Bubble Mailers - Side Angle" },
        { src: heroImg, alt: "Poly Bubble Mailers - Open View" },
        { src: heroImg, alt: "Poly Bubble Mailers - Detail Shot" },
        { src: heroImg, alt: "Poly Bubble Mailers - Lifestyle Shot" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Poly Bubble Mailers | Waterproof & Padded | CustomPackMakers</title>
                <meta name="description" content="Ship securely with custom poly bubble mailers. Featuring waterproof polyethylene exterior, padded interior, and stunning full-color logo printing. Free quote!" />
            </Helmet>
            <Header />

            <div className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 mt-[70px] md:mt-[70px]">
                <div className="container mx-auto px-[30px] py-4">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild><Link to="/">Home</Link></BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild><Link to="/shapes-styles">All Shapes & Styles</Link></BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild><Link to="/shapes-styles/mailer-boxes">Mailer Boxes</Link></BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Poly Bubble Mailers</BreadcrumbPage>
                            </BreadcrumbItem>
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
                                <span className="text-primary">Poly Bubble</span> Mailers
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Unbeatable weather resistance combined with excellent shock absorption. Our poly bubble mailers provide the ultimate lightweight, waterproof shipping solution for delivering apparel, cosmetics, and accessories securely in any climate.
                            </p>
                            <div className="pt-2">
                                <Button
                                    size="lg"
                                    className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                                    onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}
                                >
                                    Get a Quote
                                </Button>
                            </div>
                        </div>

                        <div className="lg:col-span-5 relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-muted group">
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200">
                                <img src={heroImg} alt="Poly Bubble Mailers Hero" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
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
                        Impenetrable, Weatherproof Cushioning
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            When shipping environments become unpredictable, <strong className="text-foreground">custom poly bubble mailers</strong> excel where standard paper heavily fails. Featuring a rugged, co-extruded polyethylene exterior shell seamlessly bonded to an interior layer of shock-absorbing bubble wrap, they form an impenetrable fortress against moisture, dirt, and transit punctures. This waterproof nature makes them the absolute industry standard for shipping sensitive items—such as cosmetics, electronics, apparel, and books—through torrential rain or snowstorms. Remarkably lightweight, they slash postage costs significantly while providing a smooth, flawless surface engineered specifically for brilliantly vivid, edge-to-edge custom brand printing.
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
                                    <button
                                        key={index}
                                        onClick={() => setSelectedImage(index)}
                                        className={`relative w-full aspect-square overflow-hidden rounded-md border transition-all duration-200 ${selectedImage === index ? 'border-primary shadow-md ring-2 ring-primary/20' : 'border-slate-200 hover:border-slate-300 hover:shadow-sm'}`}
                                    >
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
                                            <div className="space-y-1.5"><Label htmlFor="length" className="text-xs font-semibold text-muted-foreground">L (in)</Label><Input id="length" type="number" placeholder="10" className="h-9 bg-white" /></div>
                                            <div className="space-y-1.5"><Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label><Input id="width" type="number" placeholder="8" className="h-9 bg-white" /></div>
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">
                        Engineered Defenses For The Modern E-Commerce Journey
                    </h2>

                    <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="[&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-8 [&>h3]:mb-3 [&>h3]:first:mt-0 [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-5 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-5 [&>ul]:space-y-2 [&>ul>li]:text-[15px] [&>ul>li]:text-slate-600">

                            <p>When expanding a retail or subscription brand, acknowledging the harsh realities of the postal sorting network is critical. Packages will face rain, snow, rough tumbling, and heavy stacking pressures. Standard paper envelopes frequently disintegrate when exposed to severe elements. The poly bubble mailer was specifically engineered to conquer these exact vulnerabilities simultaneously.</p>
                            <p>At CustomPackMakers, we manufacture our poly mailers utilizing multi-layered extrusion techniques. This ensures the incredibly tough outer plastic acts as an absolute weather barrier, while the internal air pockets shield against violent drops.</p>

                            <h3>Uncompromising Barrier Protection</h3>
                            <p>The primary material advantage of polyethylene (poly) is its inherent resistance to liquids and tearing. It behaves fundamentally differently than organic paper fibers.</p>
                            <ul>
                                <li><strong>100% Weatherproof Rating:</strong> The seamless plastic exterior ensures that if your package sits on a porch during a rainstorm, the inner garments, books, or electronics remain completely dry.</li>
                                <li><strong>Elastic Puncture Defense:</strong> Unlike rigid paper that tears when snagged on sorting belts, poly film exhibits high tensility, stretching slightly to absorb the snag without catastrophically ripping open.</li>
                                <li><strong>Opaque Privacy Security:</strong> Our multi-layered films feature a dark inner lining, meaning the envelope is completely non-transparent. Curious observers cannot see your valuable contents when held directly to sunlight.</li>
                            </ul>

                            <h3>Advanced Cellular Cushioning</h3>
                            <p>Simply blocking water isn't enough; the mailer must absorb blunt force. The internal lining is carefully laminated to the exterior shell to prevent separation.</p>
                            <ul>
                                <li><strong>Uniform Air Distribution:</strong> Premium barrier-sealed bubble layers mean air cannot easily leak out over time. The bubbles remain inflated and perfectly bouncy throughout the entire transit lifecycle.</li>
                                <li><strong>Anti-Crush Dynamics:</strong> For cosmetics or fragile casings, the bubble structure dramatically diffuses localized pressure, meaning a direct sharp impact is spread harmlessly across the entire interior wall.</li>
                                <li><strong>Frictionless Loading:</strong> The interior plastic surface of the bubbles is remarkably smooth, allowing delicate fabrics or rigid boxes to slide in cleanly without catching or tearing the lining.</li>
                            </ul>

                            <h3>Operational Fulfillment Enhancements</h3>
                            <p>Scaling your business demands speed. Packing lines must operate with high agility, and complicated packaging severely hampers daily shipping quotas.</p>
                            <ul>
                                <li><strong>Peel-and-Seal Precision:</strong> Outfitted with an ultra-strong hot-melt adhesive strip, operators simply remove the release liner and press the flap down, creating a permanent, tamper-evident bond instantly.</li>
                                <li><strong>Zero Tape Required:</strong> Because the adhesive is built-in and permanent, the need for large shipping tape dispensers is entirely eradicated from your warehouse station.</li>
                                <li><strong>Drastic Weight Reduction:</strong> Poly bubble mailers weigh merely fractions of an ounce. Compared to corrugated boxes, utilizing them cuts your per-unit commercial postage rates consistently.</li>
                            </ul>

                            <h3>Visual Brand Dominance</h3>
                            <p>A protective envelope should never neglect aesthetics. Customizing the exterior of a poly mailer turns a standard delivery into an exciting, recognizable event for the consumer.</p>
                            <ul>
                                <li><strong>High-Definition Print Receptivity:</strong> The smooth poly surface natively accepts brilliantly saturated inks. Full-bleed, edge-to-edge colorful imagery looks remarkably sharp and dynamic compared to coarse paper.</li>
                                <li><strong>Textural Finishes:</strong> Beyond standard gloss, we produce luxurious matte-finish poly mailers that provide an exceptionally premium, soft-touch feeling right as the customer pulls it from the mailbox.</li>
                                <li><strong>Custom Color Masking:</strong> Instead of defaulting to plain white or gray, the base plastic film itself can be extruded in your exact specific brand color for maximum identity recognition.</li>
                            </ul>

                            <p>Connecting with our material experts guarantees your final poly bubble mailer strikes the perfect balance between ultimate weather defense and spectacular aesthetic brilliance.</p>
                        </div>
                    </div>
                </div>
            </section>

            <RelatedProductMailerBoxes />

            <section className="py-12 relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #fafafa 0%, #f4f6ff 60%, #f0fdf8 100%)' }}>
                <div className="absolute top-0 left-0 w-80 h-80 bg-primary/4 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-300/8 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl pointer-events-none" />

                <div className="container mx-auto px-[30px] relative z-10">
                    <div className="text-center mb-14">
                        <span className="inline-block text-xs font-semibold tracking-widest text-primary uppercase mb-3 bg-primary/10 px-4 py-1.5 rounded-full">Our Promise</span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
                            Why Brands Choose <span className="text-primary">CustomPackMakers</span>
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            We combine craftsmanship, speed, and reliability to deliver packaging that makes your brand unforgettable.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">
                        <div className="space-y-5">
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Moisture-Resistant Shell</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">Constructed with a heavy-duty polyethylene outer layer, these mailers completely block rain, snow, and moisture from reaching your valuable internal products and documents.</p>
                                </div>
                            </div>

                            <div className="w-full h-px bg-slate-100" />

                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors duration-300">
                                        <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Puncture-Resistant Integrity</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">The advanced poly film stretches instead of violently tearing when snagged by processing belts, explicitly preventing catastrophic package blowouts during intensely rough transit handling.</p>
                                </div>
                            </div>

                            <div className="w-full h-px bg-slate-100" />

                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors duration-300">
                                        <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Postage Optimization</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">Weighing only a brief fraction of an ounce, they consistently provide phenomenal, robust cushioned protection without dramatically increasing your fundamental commercial shipping and freight costs.</p>
                                </div>
                            </div>
                        </div>

                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img src={heroImg} alt="Premium Poly Bubble Mailer Packaging" className="w-full h-full object-cover" />
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
                                <img src={heroImg} alt="Differentiate Your Poly Bubble Mailers" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                            </div>

                            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-60" />
                            <div className="absolute -z-10 -top-8 -right-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl opacity-60" />
                        </div>

                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                                Differentiate Your <span className="text-primary">Mailers</span> From Others
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                Never allow your beautiful merchandise to arrive wrapped in a generic, flimsy gray plastic bag. CustomPackMakers empowers you to blanket every square inch of your poly mailers with radiant color gradients, sharp typography, or bold matte patterns. Leveraging advanced digital and flexo technologies, we transform an otherwise utilitarian waterproof sleeve into a loudly branded billboard. It ensures that your customer feels deep excitement the exact moment they spot your mailer waiting on the porch.
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
                                <p className="text-base text-muted-foreground">We’re confident that you will love our products and service.</p>
                            </div>

                            <Accordion type="single" collapsible defaultValue="item-1" className="w-full space-y-2">
                                {[
                                    { id: "item-1", question: "Are Poly Mailers Genuinely Waterproof?", answer: "Yes, the co-extruded polyethylene material is intrinsically non-porous. It completely repels rain, snow, and spills, whereas paper-based packages would quickly absorb moisture and eventually disintegrate." },
                                    { id: "item-2", question: "Do The Bubbles Easily Pop During Transit?", answer: "No. We utilize heavy barrier-sealed bubble layers specifically engineered to dramatically resist pressure. They retain their air volume beautifully, providing dense cushioning throughout the entire fulfillment hierarchy." },
                                    { id: "item-3", question: "Can I Write Addresses Distinctly On Them?", answer: "Certainly. However, considering standard pens will frequently smudge off the plastic, we heavily advise utilizing self-adhesive thermal shipping labels or boldly permanent markers specifically designed for industrial plastics." },
                                    { id: "item-4", question: "What Sealing Techniques Work Best?", answer: "Our mailers inherently feature an aggressively strong hot-melt peel-and-seal adhesive strip right heavily integrated into the closing flap. Once pressed firmly shut, it establishes a permanent, totally tamper-evident lock." },
                                    { id: "item-5", question: "Is It Possible To Print A Matte Finish?", answer: "Yes! While gloss is highly traditional, a specialty matte lamination finish can be applied flawlessly. This generates a very smooth, luxurious, soft-touch aesthetic strongly preferred by boutique cosmetics and fashion." }
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

                        <div className="relative w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden ">
                            <img src={FAQimage} alt="Custom Poly Bubble Mailers FAQ" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
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

export default PolyBubbleMailers;
