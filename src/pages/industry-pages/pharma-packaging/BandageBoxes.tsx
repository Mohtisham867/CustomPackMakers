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
import { SEOContent } from "@/components/SEOContent";
import { TechnicalSpecsSection } from "@/components/TechnicalSpecsSection";
import { RelatedProductPharma } from "@/components/RelatedProductPharma";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";

// Images
import bandageBoxeshero from "@/assets/pharma-packaging/bandage-boxes/img-hero.webp";
import bandageBoxesimg1 from "@/assets/pharma-packaging/bandage-boxes/img-1.webp";
import bandageBoxesimg2 from "@/assets/pharma-packaging/bandage-boxes/img-2.webp";
import bandageBoxesimg3 from "@/assets/pharma-packaging/bandage-boxes/img-3.webp";
import bandageBoxesimg4 from "@/assets/pharma-packaging/bandage-boxes/img-4.webp";
import bandageBoxesimg5 from "@/assets/pharma-packaging/bandage-boxes/img-5.webp";
import bandageBoxesimg6 from "@/assets/pharma-packaging/bandage-boxes/img-whychoose.webp";
import bandageBoxesimg7 from "@/assets/pharma-packaging/bandage-boxes/img-different.webp";
import FAQimage from "@/assets/FAQ-image.webp";

const BandageBoxes = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    const productImages = [
        { src: bandageBoxesimg1, alt: "Custom Bandage Boxes - Main View" },
        { src: bandageBoxesimg2, alt: "Custom Bandage Boxes - Side Angle" },
        { src: bandageBoxesimg3, alt: "Custom Bandage Boxes - Open Box View" },
        { src: bandageBoxesimg4, alt: "Custom Bandage Boxes - Detail Shot" },
        { src: bandageBoxesimg5, alt: "Custom Bandage Boxes - Lifestyle Shot" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Bandage Boxes | First Aid Packaging | CustomPackMakers</title>
                <meta name="description" content="Order wholesale custom bandage boxes for clinical and retail first aid. Sterile packaging featuring rapid tear-away dispensing and robust medical-grade cardstock." />
                <meta name="keywords" content="custom bandage boxes, first aid packaging, sterile medical boxes, adhesive bandage packaging, wholesale pharmacy boxes" />
                <meta property="og:title" content="Custom Bandage Boxes | First Aid Packaging | CustomPackMakers" />
                <meta property="og:description" content="Sterile custom bandage boxes engineered for immediate clinical access and contamination prevention. Reliable first-aid packaging built for total sterility." />
            </Helmet>
            <Header />

            {/* Breadcrumb */}
            <div className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 mt-[120px] md:mt-[160px]">
                <div className="container mx-auto px-[30px] py-4">
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
                                    <Link to="/industries">All Industries</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link to="/industries/pharma-packaging">Pharma Packaging</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Custom Bandage Boxes</BreadcrumbPage>
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
                                <span className="text-primary">Custom</span> Bandage Boxes
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Sterile custom bandage boxes engineered for immediate clinical access and contamination prevention. Our medical-grade packaging solutions feature precision tear-away dispensing and strict structural compliance for global first-aid supply chains.
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
                                    src={bandageBoxeshero}
                                    alt="Custom Bandage Boxes Hero"
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
                        Reliable First-Aid Packaging Built for Total Sterility and Rapid Access
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            Our <strong className="text-foreground">custom bandage boxes</strong> are meticulously developed for consumer healthcare brands, pharmaceutical distributors, and expansive hospital networks that demand flawless first-aid packaging. Constructed from exceptionally dense, medical-grade SBS cardstock and fortified with antimicrobial structural finishes, each box acts as an impenetrable secondary defense against dust, moisture, and microbial contamination. Whether you are actively merchandising standard adhesive strips in busy retail pharmacies or supplying highly specialized surgical dressings to clinical environments, our <strong className="text-foreground">sterile medical packaging</strong> vividly projects unyielding hygiene and professional clinical reliability.
                        </p>
                        <p>
                            From compact, pocket-sized consumer tuck boxes to large-volume, high-capacity hospital dispensers, our <strong className="text-foreground">custom first-aid packaging</strong> is specifically engineered for emergency efficiency. We expertly design perfectly calibrated micro-perforated tear-away panels that rapidly open under moderate pressure, instantly providing frustration-free access to critical wound care supplies during medical scenarios. Completely enhanced with ultra-high-resolution offset printing specifically to guarantee immediate FDA compliance legibility, distinctive brand coloring, and clear sizing matrices, your <strong className="text-foreground">bandage packaging</strong> becomes a deeply trusted asset perfectly optimized for rapid healing protocols.
                        </p>
                    </div>
                </div>
            </section>

            {/* INTERACTIVE PRODUCT & FORM SECTION */}
            <section className="py-10 bg-accent/5" id="quote-form">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end">
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
                        The Vital Engineering Behind Professional Bandage Packaging
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
                                Inside medical facilities, athletic training rooms, and domestic bathroom cabinets, first-aid products fundamentally represent safety in moments of acute distress. The packaging enclosing these critical supplies cannot afford to be difficult to open, easily compromised by humidity, or prone to catastrophic crushing on busy retail shelves. Custom bandage boxes functionally operate as an essential barrier that fiercely protects the delicate internal sterile wrappers from destructive external contamination, acting as the very first line of defense in proper, hygienic wound care management.
                            </p>
                            <p>
                                CustomPackMakers explicitly engineers custom first-aid packaging strategically built to solve these exact clinical challenges seamlessly. We deploy remarkably durable board structures entirely combined with highly specialized, perfectly calibrated tear-away dispensing slots, heavily ensuring nurses, parents, and athletes achieve instantaneous access to bandages during chaotic emergencies. By strictly utilizing pristine medical-grade materials, brilliantly implementing clear size-indicator matrices, and executing flawless FDA compliance printing, your brand aggressively asserts an image of unquestionable hygienic authority, driving profound consumer trust instantly.
                            </p>

                            <h3>High-Defensive Structural Materials for Immediate Contamination Prevention</h3>
                            <p>
                                Medical packaging requires an absolute defense against invasive external environments. We specifically select the industry's most sanitary structural elements:
                            </p>
                            <ul>
                                <li><strong>Sterile-Grade Solid Bleached Sulfate (SBS):</strong> Providing an exceptionally clean, bright white printing surface universally associated with strict medical hygiene. Superior SBS powerfully resists tearing and structurally contains the internal primary wrappers efficiently and cleanly without shedding dangerous paper dust.</li>
                                <li><strong>Protective Antimicrobial Laminations:</strong> Strategically applying highly advanced aqueous coatings that drastically reduce the capability of harmful surface bacteria to successfully breed on the exterior of the box, ensuring retail pharmacy shelves remain profoundly sanitary.</li>
                                <li><strong>Heavy-Gauge E-Flute Dispensers:</strong> Specifically deployed for massive hospital supply rooms and high-traffic industrial first-aid stations, guaranteeing the bulky dispenser box strongly withstands severe environmental abuse and heavy vertical crush forces during intensive daily operations.</li>
                            </ul>

                            <h3>Specialized Emergency Dispensing Protocols</h3>
                            <p>
                                Frustration during an actively bleeding emergency is clinically unacceptable. We totally optimized the physical extraction interface:
                            </p>
                            <ul>
                                <li><strong>Calibrated Micro-Perforated Slots:</strong> We masterfully utilize precision die-cut technology to create highly functional tear-away openings that reliably break instantly under minimal human pressure exactly where engineered, cleanly leaving a perfectly smooth dispensing edge.</li>
                                <li><strong>Lock-Tight Base Structures:</strong> Packing incredibly dense quantities of adhesive strips creates significant internal pressure. We skillfully engineer secure auto-locking bottom flaps that perfectly prevent the box from spectacularly bursting open upon being quickly grabbed from high shelves.</li>
                                <li><strong>Compact Pharmacy Retail Footprints:</strong> Expertly engineering specialized structural layouts designed strictly to aggressively maximize highly limited pharmacy shelf space while brilliantly keeping vibrant brand graphics profoundly visible to immediate, distressed foot traffic.</li>
                            </ul>

                            <h3>Flawless Clinical Typography &amp; FDA Visual Compliance</h3>
                            <p>
                                First-aid consumers critically demand instantaneous, absolutely clear information regarding wound care immediately:
                            </p>
                            <ul>
                                <li><strong>Distinct Sizing &amp; Material Matrices:</strong> We heavily utilize brilliant, fully saturated offset inks specifically to violently color-code different bandage variants (e.g., Waterproof, Fabric, Sensitive Skin, Knuckle), absolutely preventing critical purchasing or clinical application errors instantly.</li>
                                <li><strong>Micro-Text Legibility:</strong> Functionally ensuring complex FDA regulatory warnings, hypoallergenic manufacturing guarantees, and strict LOT expiration codes fundamentally remain entirely crisp, intensely displaying your medical brand's absolute commitment to complete corporate transparency.</li>
                            </ul>

                            <h3>Wholesale Medical Supply Pipeline Efficiency</h3>
                            <p>
                                Rapidly growing your first-aid brand effectively demands massive logistical power. CustomPackMakers completely specializes in highly automated, strictly continuous wholesale production runs specifically optimized for grand-scale medical supply chains globally. We actively provide significantly aggressive tiered pricing matrices, brilliantly offering phenomenal volume discounts combined with profoundly rapid manufacturing turnarounds. Partner exclusively with our advanced structural packaging engineers efficiently to quickly produce extraordinary custom bandage boxes designed explicitly specifically to passionately safeguard consumer health powerfully.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* RELATED PRODUCTS CAROUSEL */}
            <RelatedProductPharma />

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
                            We deliver medical packaging that ensures safety, protects integrity, and elevates your pharmaceutical brand.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">
                        <div className="space-y-5">
                            {/* Feature 1 */}
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">
                                        Uncompromising Quality
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Every custom bandage box we produce utilizes exclusively medical-grade SBS cardstock and specialized antimicrobial coatings. Our meticulous quality operations guarantee each unit rigidly meets fundamental contamination standards required for first-aid packaging, keeping your sterile bandages perfectly uncompromised.
                                    </p>
                                </div>
                            </div>

                            <div className="w-full h-px bg-slate-100" />

                            {/* Feature 2 */}
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors duration-300">
                                        <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">
                                        Tailored Compliance
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Emergency medical situations demand instantaneous, unobstructed access to wound care supplies. We expertly design perfectly perforated tear-away panels that rapidly dispense bandages without causing structural frustration. Your essential first-aid packaging requirements are consistently executed to ensure flawless clinical responsiveness.
                                    </p>
                                </div>
                            </div>

                            <div className="w-full h-px bg-slate-100" />

                            {/* Feature 3 */}
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors duration-300">
                                        <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">
                                        Eco-Friendly Safety
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Progressive pharmacies and clinical distributors actively seek eco-conscious medical packaging without sacrificing mandatory hygiene. Our fully recyclable custom bandage boxes deliver exceptional structural sterility while fundamentally lowering plastic waste, flawlessly meeting the evolving sustainable values of modern healthcare providers.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT: Square image with floating badges */}
                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img
                                    src={bandageBoxesimg6}
                                    alt="Premium Custom First-Aid Packaging"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-7">
                                    <p className="text-white font-bold text-lg leading-snug mb-1">
                                        Trusted by Medical Brands
                                    </p>
                                    <p className="text-white/75 text-sm">Delivering robust first-aid grade protection</p>
                                </div>
                            </div>

                            <div className="absolute top-4 -right-2 lg:-right-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80 backdrop-blur-sm">
                                <p className="text-2xl font-bold text-primary leading-none">Fast</p>
                                <p className="text-xs text-slate-400 mt-1 font-medium">Dispensing Tech</p>
                            </div>

                            <div className="absolute bottom-4 -left-2 lg:-left-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80 backdrop-blur-sm">
                                <p className="text-2xl font-bold text-emerald-500 leading-none">100%</p>
                                <p className="text-xs text-slate-400 mt-1 font-medium">Contamination Focus</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* DIFFERENTIATE YOUR BRAND SECTION */}
            <section className="py-10 lg:py-12 bg-white overflow-hidden relative">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="relative group">
                            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] border border-primary/20 shadow-2xl transform transition-transform duration-700 hover:scale-[1.02]">
                                <img
                                    src={bandageBoxesimg7}
                                    alt="Differentiate Your First-Aid Products"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                            </div>
                            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-60" />
                            <div className="absolute -z-10 -top-8 -right-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl opacity-60" />
                        </div>

                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                                Differentiate Your <span className="text-primary">First-Aid Range</span> From Others
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                At CustomPackMakers, we definitively understand that highly intuitive, flawlessly engineered dispenser packaging decisively secures vital pharmacy shelf space and institutional loyalty globally. To ensure your specialized wound-care brand undeniably dominates massive global medical distributors effectively, we meticulously deploy remarkably bold color-coding logistics permanently bonded with extremely advanced tear-away perforation physics. Our rigorous packaging engineers meticulously help correctly optimize custom box capacities, instantly ensuring completely smooth, rapid access during stressful medical situations consistently. By flawlessly integrating brilliant UV protective coatings, entirely legible regulatory typography, and highly rigid corner reinforcements, we genuinely help you construct formidable, strictly compliant packaging that fundamentally guarantees clinical perfection reliably.
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
                                    We’re confident that you will love our products and service.
                                </p>
                            </div>

                            <Accordion type="single" collapsible defaultValue="item-1" className="w-full space-y-2">
                                {[
                                    {
                                        id: "item-1",
                                        question: "Do your bandage boxes maintain strict product sterility during shipping?",
                                        answer: "Yes, our custom bandage boxes form a definitive secondary barrier against environmental contamination. We utilize highly dense medical-grade cardstock and precision-glued seams that drastically prevent dust and microbial ingress, ensuring the primary sterile wrappers inside remain completely uncompromised."
                                    },
                                    {
                                        id: "item-2",
                                        question: "Are the dispenser perforations easy to tear in emergencies?",
                                        answer: "Absolutely. We meticulously engineer and extensively test our tear-away dispensing slots. Using advanced die-cutting technology, we create perfect micro-perforations that break cleanly and instantly under moderate pressure, providing rapid, frustration-free access to bandages during critical first-aid scenarios."
                                    },
                                    {
                                        id: "item-3",
                                        question: "Can these boxes withstand heavy retail pharmacy handling?",
                                        answer: "Yes, we specifically construct our retail bandage packaging using robust, tear-resistant materials and structural laminations. This guarantees the box dramatically resists crushing and corner-wear during frequent shelf restocks, maintaining a pristine, trustworthy medical appearance for pharmacy consumers."
                                    },
                                    {
                                        id: "item-4",
                                        question: "Do you provide bulk packaging solutions for hospital networks?",
                                        answer: "We operate high-volume wholesale manufacturing explicitly scaled for massive hospital supply logistics. We seamlessly engineer heavy-duty corrugated master cartons and precisely printed internal dispenser units, providing incredibly reliable, cost-effective first-aid packaging across your entire international medical supply chain."
                                    },
                                    {
                                        id: "item-5",
                                        question: "Are your printing processes safe for first-aid supplies?",
                                        answer: "Patient safety is fundamentally unquestionable. We exclusively employ eco-friendly, low-migration soy and vegetable inks that entirely organically eliminate volatile organic compounds (VOCs). This pristine printing process completely ensures there is absolutely zero toxic chemical transfer to the bandages inside."
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

                        <div className="relative w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden ">
                            <img
                                src={FAQimage}
                                alt="Custom Bandage Boxes FAQ"
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
        </div >
    );
};

export default BandageBoxes;
