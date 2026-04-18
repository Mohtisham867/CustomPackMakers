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

import heroImage from "@/assets/subscription-boxes/candle-subscription-box.webp";
import FAQimage from "@/assets/FAQ-image.png";

const CandleSubscriptionBoxes = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    const productImages = [
        { src: heroImage, alt: "Candle Subscription Boxes - Main View" },
        { src: heroImage, alt: "Candle Subscription Boxes - Interior View" },
        { src: heroImage, alt: "Candle Subscription Boxes - Open Box" },
        { src: heroImage, alt: "Candle Subscription Boxes - Detail Shot" },
        { src: heroImage, alt: "Candle Subscription Boxes - Lifestyle" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Candle Subscription Boxes | Branded Monthly Candle Packaging | CustomPackMakers</title>
                <meta name="description" content="Order custom candle subscription boxes wholesale. Premium branded monthly candle packaging with full customization, fast turnaround & free shipping. Get a free quote." />
                <meta name="keywords" content="candle subscription boxes, custom candle subscription packaging, monthly candle boxes, wholesale candle subscription packaging, branded candle boxes" />
                <meta property="og:title" content="Custom Candle Subscription Boxes | Branded Monthly Candle Packaging | CustomPackMakers" />
                <meta property="og:description" content="Premium custom candle subscription packaging. Full-color printing, eco-friendly materials & magnetic closures. Low minimums, fast turnaround. Get a free quote today." />
            </Helmet>
            <Header />

            {/* Breadcrumb */}
            <div className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 mt-[120px] md:mt-[140px]">
                <div className="container mx-auto px-[30px] py-3">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link to="/">Home</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link to="/shapes-styles">Shapes & Styles</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link to="/shapes-styles/subscription-boxes">Subscription Boxes</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Candle Subscription Boxes</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </div>

            {/* HERO SECTION */}
            <section className="py-8 bg-background">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-7 space-y-6">
                            <div className="w-20 h-1.5 bg-primary rounded-full"></div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight">
                                <span className="text-primary">Custom</span> Candle Subscription Boxes
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Wholesale custom candle subscription packaging engineered to delight subscribers every month — with premium unboxing experiences that build lasting brand loyalty.
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
                                <img
                                    src={heroImage}
                                    alt="Candle Subscription Boxes Hero"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PRODUCT OVERVIEW SECTION */}
            <section className="py-8 bg-slate-50">
                <div className="container mx-auto px-[5vw]">
                    <div className="flex items-center gap-3 mb-5">
                        <div className="w-10 h-1 bg-primary rounded-full" />
                        <span className="text-xs font-semibold tracking-widest text-primary uppercase">Product Overview</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 max-w-3xl">
                        Candle Subscription Packaging Built to Delight, Protect & Convert
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            Our <strong className="text-foreground">custom candle subscription boxes</strong> are crafted specifically for candlemakers, wellness brands, and subscription curators who demand packaging that does more than simply contain a product. Constructed from premium rigid chipboard, SBS cardstock, and eco-friendly kraft materials, each box is engineered to protect delicate glass vessels, taper candles, pillar candles, and wax melts throughout the entire shipping cycle — from warehouse pick-and-pack to the subscriber's front door.
                        </p>
                        <p>
                            Every detail of our <strong className="text-foreground">monthly candle subscription packaging</strong> is designed to create a memorable unboxing moment. With full-color CMYK printing, foil stamping, embossing, and soft-touch lamination, your branded box becomes a keepsake that subscribers share on social media, driving organic reach and new sign-ups. Order wholesale with low minimums starting at 100 units and benefit from our industry-leading 8–10 day turnaround and free shipping on qualifying orders.
                        </p>
                    </div>
                </div>
            </section>

            {/* INTERACTIVE PRODUCT & FORM SECTION */}
            <section className="py-10 bg-accent/5" id="quote-form">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end">

                        {/* LEFT SIDE: Product Gallery */}
                        <div className="lg:col-span-7 space-y-6">
                            <div className="relative w-full max-w-lg mx-auto overflow-hidden rounded-lg shadow-sm border border-border bg-white" style={{ aspectRatio: '4/3' }}>
                                <img
                                    src={productImages[selectedImage].src}
                                    alt={productImages[selectedImage].alt}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="w-full max-w-lg mx-auto grid grid-cols-5 gap-2">
                                {productImages.map((image, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setSelectedImage(index)}
                                        className={`relative w-full aspect-square overflow-hidden rounded-md border transition-all duration-200 ${selectedImage === index
                                            ? 'border-primary shadow-md ring-2 ring-primary/20'
                                            : 'border-slate-200 hover:border-slate-300 hover:shadow-sm'
                                            }`}
                                    >
                                        <img
                                            src={image.src}
                                            alt={`Thumbnail ${index + 1}`}
                                            className="w-full h-full object-cover"
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* RIGHT SIDE: Quote Form */}
                        <div className="lg:col-span-5 lg:sticky lg:top-24">
                            <Card className="shadow-lg border-slate-200 bg-slate-50/50 backdrop-blur-sm overflow-hidden">
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold text-foreground mb-5">
                                        Get a Custom Quote
                                    </h3>
                                    <form className="space-y-4">
                                        <div className="grid grid-cols-3 gap-3">
                                            <div className="space-y-1.5">
                                                <Label htmlFor="length" className="text-xs font-semibold text-muted-foreground">L (in)</Label>
                                                <Input id="length" type="number" placeholder="12" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label>
                                                <Input id="width" type="number" placeholder="8" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">D (in)</Label>
                                                <Input id="depth" type="number" placeholder="5" className="h-9 bg-white" />
                                            </div>
                                        </div>

                                        <div className="space-y-1.5">
                                            <Label htmlFor="quantity" className="text-xs font-semibold text-muted-foreground">Quantity</Label>
                                            <Input id="quantity" type="number" placeholder="500" className="h-9 bg-white" />
                                        </div>

                                        <div className="space-y-1.5">
                                            <Label htmlFor="name" className="text-xs font-semibold text-muted-foreground">Name</Label>
                                            <Input id="name" type="text" placeholder="Your Name" className="h-9 bg-white" />
                                        </div>

                                        <div className="space-y-1.5">
                                            <Label htmlFor="email" className="text-xs font-semibold text-muted-foreground">Email</Label>
                                            <Input id="email" type="email" placeholder="email@example.com" className="h-9 bg-white" />
                                        </div>

                                        <Button
                                            type="submit"
                                            size="lg"
                                            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 shadow-md hover:shadow-lg transition-all duration-300 mt-2"
                                        >
                                            Submit Inquiry
                                        </Button>
                                    </form>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* TECHNICAL SPECIFICATIONS SECTION */}
            <TechnicalSpecsSection />

            {/* SEO CONTENT SECTION */}
            <section className="py-8 bg-slate-50 border-t border-slate-100">
                <div className="container mx-auto px-[5vw]">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">
                        Why Custom Candle Subscription Boxes Are a Growth Strategy
                    </h2>

                    <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8
                            [&::-webkit-scrollbar]:w-2
                            [&::-webkit-scrollbar-track]:bg-gray-100
                            [&::-webkit-scrollbar-track]:rounded-full
                            [&::-webkit-scrollbar-thumb]:bg-primary
                            [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="
                            [&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-8 [&>h3]:mb-3 [&>h3]:first:mt-0
                            [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-5
                            [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-5 [&>ul]:space-y-2
                            [&>ul>li]:text-[15px] [&>ul>li]:text-slate-600">

                            <p>
                                The subscription box industry is one of the fastest-growing sectors in ecommerce, with candle subscription services leading the charge in the wellness and home fragrance categories. For brands competing in this space, the packaging is not a secondary consideration — it is the product. Research consistently shows that subscribers make their very first impression of a subscription box within the first three seconds of receiving it. If that packaging feels flimsy, generic, or misaligned with your brand aesthetic, churn rates spike and user-generated content (UGC) opportunities are permanently lost.
                            </p>
                            <p>
                                At CustomPackMakers, we specialize in building custom candle subscription packaging solutions that transform your monthly delivery into an event. Our structural engineers and design consultants collaborate with your team from concept through production, ensuring every box tells your brand's story, safeguards your products, and creates the kind of unboxing experience your subscribers can't wait to film and share.
                            </p>

                            <h3>Structural Integrity for Fragile Candle Products</h3>
                            <p>
                                Candles present unique packaging challenges. Glass vessels, ceramic containers, and delicate wax surfaces are all susceptible to breakage, scratching, and surface damage during transit. Our candle subscription boxes are engineered with these vulnerabilities in mind, incorporating multiple layers of protective design:
                            </p>
                            <ul>
                                <li><strong>Rigid Chipboard Construction:</strong> Our standard candle subscription boxes start with premium 2mm or 3mm rigid chipboard that resists compression and crushing even when stacked on pallets during shipping.</li>
                                <li><strong>Custom-Die-Cut Inserts:</strong> Precision-cut foam, cardboard, or molded pulp inserts cradle each candle securely, eliminating movement that causes breakage, wax cracking, or label scuffing.</li>
                                <li><strong>Double-Wall Corrugated Options:</strong> For heavier candle sets or fragile hand-poured glass jars, our double-wall corrugated outer boxes add an essential second layer of crush resistance for long-distance and international shipping.</li>
                                <li><strong>Moisture-Resistant Coatings:</strong> Our aqueous and UV coatings protect against ambient moisture that can warp cardboard and compromise structural integrity during cross-country transit.</li>
                            </ul>

                            <h3>Customization That Makes Every Box Unmistakable</h3>
                            <p>
                                No two candle brands are identical, and your packaging should reflect that. Our full-suite customization capabilities give your design team complete creative control to produce candle subscription boxes that are distinctly yours:
                            </p>
                            <ul>
                                <li><strong>Full-Color CMYK & Pantone Printing:</strong> Achieve exact brand color accuracy with our offset and digital presses. From soft earthy neutrals and luxurious golds to vibrant botanical prints, we reproduce your vision with photographic precision.</li>
                                <li><strong>Hot Foil Stamping:</strong> Gold, silver, rose gold, and holographic foil accents elevate your logo and brand name from simple print to a tactile luxury finish that screams premium quality.</li>
                                <li><strong>Soft-Touch Lamination:</strong> Our velvet-finish soft-touch matte lamination turns every surface contact into a sensory experience, reinforcing the premium nature of your candle brand.</li>
                                <li><strong>Magnetic Closure Flaps:</strong> Add a satisfying, ritualistic close and open experience with concealed magnet closures that make subscribers feel like they're opening a gift every single month.</li>
                                <li><strong>Custom Interior Printing:</strong> The lid's interior is prime real estate. Print your brand narrative, care instructions, or a seasonal message to create a complete, immersive brand world inside the box.</li>
                            </ul>

                            <h3>Sustainability as a Subscriber Value Proposition</h3>
                            <p>
                                Candle consumers are among the most environmentally conscious shoppers in the consumer goods market. Offering eco-certified subscription packaging is not just a marketing checkbox — it is a meaningful differentiator that directly impacts subscriber acquisition and retention. Our sustainable candle subscription packaging options include:
                            </p>
                            <ul>
                                <li>FSC-certified paper and board sourced from responsibly managed forests</li>
                                <li>Vegetable-based and water-based inks with zero harmful VOCs</li>
                                <li>Biodegradable and home-compostable packaging films as tissue wrap alternatives</li>
                                <li>100% recyclable structural components with no mixed-material laminates that impede recycling</li>
                                <li>Soy-based adhesives that preserve recyclability across the entire package</li>
                            </ul>

                            <h3>Scalable Production for Growing Subscription Services</h3>
                            <p>
                                Whether you're launching a candle subscription business with a test batch of 200 boxes or scaling to 50,000 units per month, our production infrastructure flexes with your business. We offer competitive per-unit pricing at every tier, with volume discounts that meaningfully reduce cost-per-box as you scale. Our dedicated account managers proactively monitor your subscription fulfillment calendar and coordinate production runs to ensure you never miss a shipping window or disappoint a subscriber.
                            </p>
                            <p>
                                Partner with CustomPackMakers and gain a packaging ally that is as committed to your subscription brand's growth as you are. Our candle subscription boxes protect your products, amplify your brand, and create loyal subscribers who stay, share, and refer.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* RELATED PRODUCTS CAROUSEL */}
            <RelatedProductEcommerce />

            {/* WHY CHOOSE US SECTION */}
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
                            We combine craftsmanship, speed, and reliability to deliver packaging that makes your candle brand unforgettable every month.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">
                        <div className="space-y-5">
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Unboxing-First Engineering</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Every <strong>candle subscription box</strong> we produce is designed with the subscriber's unboxing moment as the primary design objective. From magnetic closure tension to interior tissue arrangement, we engineer delight into every structural decision.
                                    </p>
                                </div>
                            </div>

                            <div className="w-full h-px bg-slate-100" />

                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors duration-300">
                                        <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Subscription-Scale Reliability</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Monthly subscription deadlines are non-negotiable. Our production scheduling system guarantees your <strong>monthly candle subscription boxes</strong> arrive at your fulfillment center before every dispatch date, at any order volume.
                                    </p>
                                </div>
                            </div>

                            <div className="w-full h-px bg-slate-100" />

                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors duration-300">
                                        <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Eco-Certified Materials</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Our FSC-certified, fully recyclable <strong>candle subscription packaging</strong> aligns your brand with the sustainability values your candle customers care deeply about, without sacrificing a single gram of premium aesthetic.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img
                                    src={heroImage}
                                    alt="Premium Candle Subscription Box Packaging"
                                    className="w-full h-full object-cover"
                                />
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

            {/* DIFFERENTIATE SECTION */}
            <section className="py-10 lg:py-12 bg-white overflow-hidden relative">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="relative group">
                            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] border border-primary/20 shadow-2xl transform transition-transform duration-700 hover:scale-[1.02]">
                                <img
                                    src={heroImage}
                                    alt="Differentiate Your Candle Subscription"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                            </div>
                            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-60" />
                            <div className="absolute -z-10 -top-8 -right-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl opacity-60" />
                        </div>

                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                                Differentiate Your <span className="text-primary">Candle Brand</span> From The Competition
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                At CustomPackMakers, we understand that in the crowded candle subscription market, your box is your brand's first handshake with a new subscriber. We use state-of-the-art manufacturing processes combined with premium offset and digital printing to produce boxes that feel as curated as the candles inside. From custom aromatherapy-inspired color palettes and tactile soft-touch finishes to surprising interior print reveals, we help you create a subscription experience that converts first-time buyers into lifetime subscribers and enthusiastic brand advocates.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ SECTION */}
            <section className="py-6 bg-slate-50">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                                    Frequently Asked Questions
                                </h2>
                                <p className="text-base text-muted-foreground">
                                    We're confident that you will love our candle subscription packaging.
                                </p>
                            </div>

                            <Accordion type="single" collapsible defaultValue="item-1" className="w-full space-y-2">
                                {[
                                    {
                                        id: "item-1",
                                        question: "What materials are best for protecting glass candle jars in subscription boxes?",
                                        answer: "For glass candle jars, we recommend rigid chipboard boxes with custom-die-cut foam or cardboard inserts. The insert cradles each jar precisely to eliminate shifting during transit. For multi-candle sets, we add corrugated layer pads between rows for additional crush resistance. These solutions maintain a luxurious unboxing experience while providing exceptional product protection."
                                    },
                                    {
                                        id: "item-2",
                                        question: "What is the minimum order quantity for custom candle subscription boxes?",
                                        answer: "Our minimum order quantity for custom candle subscription boxes starts at just 100 units, making us accessible to small-batch artisan candlemakers and growing subscription brands alike. Volume pricing kicks in at 500, 1,000, and 5,000 units with meaningful per-unit cost reductions at each tier."
                                    },
                                    {
                                        id: "item-3",
                                        question: "Can I change the box design monthly for seasonal themes?",
                                        answer: "Absolutely. Many of our candle subscription clients use a consistent structural box format with seasonal exterior artwork each month. We hold your structural dieline on file and simply update the print artwork each production run. This approach reduces setup costs while keeping your subscription fresh and visually exciting for subscribers."
                                    },
                                    {
                                        id: "item-4",
                                        question: "Do you offer eco-friendly options for candle subscription packaging?",
                                        answer: "Yes. All our candle subscription boxes are available in FSC-certified materials using vegetable-based inks and water-based coatings. We also offer kraft natural finish options, biodegradable tissue paper inserts, and packaging free from mixed-material laminates that impede recycling. Our sustainability report is available upon request."
                                    },
                                    {
                                        id: "item-5",
                                        question: "How do I get started with a custom candle subscription box order?",
                                        answer: "Simply fill out our quote form above with your approximate dimensions and quantity. Our packaging consultants will reach out within one business day with material recommendations, print options, and a detailed quote. We provide free structural dieline files and one round of digital proof at no charge before production begins."
                                    }
                                ].map((faq) => (
                                    <AccordionItem
                                        key={faq.id}
                                        value={faq.id}
                                        className="border border-slate-200 rounded-lg bg-white overflow-hidden data-[state=open]:border-primary data-[state=open]:ring-1 data-[state=open]:ring-primary/20 data-[state=open]:bg-primary/5 transition-all duration-300"
                                    >
                                        <AccordionTrigger className="px-5 py-3 hover:no-underline [&>svg]:hidden group">
                                            <span className="text-left font-semibold text-foreground text-base">{faq.question}</span>
                                            <div className="shrink-0 ml-4 p-1 rounded-full bg-slate-100 group-data-[state=open]:bg-primary group-data-[state=open]:text-white transition-colors duration-200">
                                                <Plus className="h-3 w-3 group-data-[state=open]:hidden" />
                                                <Minus className="h-3 w-3 hidden group-data-[state=open]:block" />
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent className="px-5 pb-5 pt-0 text-slate-600 leading-relaxed text-sm">
                                            {faq.answer}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>

                        <div className="relative w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden">
                            <img
                                src={FAQimage}
                                alt="Candle Subscription Boxes FAQ"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Brand Rating */}
            <BrandRating />

            {/* Main Quote Form */}
            <QuoteForm />

            <Footer />
        </div>
    );
};

export default CandleSubscriptionBoxes;
