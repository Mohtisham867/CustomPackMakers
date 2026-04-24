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
import glovesBoxes from "@/assets/pharma-packaging/gloves-boxes.webp";
import FAQimage from "@/assets/FAQ-image.webp";

const GlovesBoxes = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    const productImages = [
        { src: glovesBoxes, alt: "Custom Gloves Boxes - Main View" },
        { src: glovesBoxes, alt: "Custom Gloves Boxes - Side Angle" },
        { src: glovesBoxes, alt: "Custom Gloves Boxes - Open Box View" },
        { src: glovesBoxes, alt: "Custom Gloves Boxes - Detail Shot" },
        { src: glovesBoxes, alt: "Custom Gloves Boxes - Lifestyle Shot" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Gloves Boxes | Medical Dispenser Packaging | CustomPackMakers</title>
                <meta name="description" content="Order wholesale custom glove boxes for medical environments. Hospital-grade dispenser packaging featuring tear-resistant slots and high-visibility clinical branding." />
                <meta name="keywords" content="custom gloves boxes, medical glove dispensers, nitrile glove packaging, hospital packaging wholesale, sterile glove boxes" />
                <meta property="og:title" content="Custom Gloves Boxes | Medical Dispenser Packaging | CustomPackMakers" />
                <meta property="og:description" content="Professional custom glove boxes engineered for heavily trafficked medical environments. High-quality dispenser packaging for reliable operations." />
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
                                <BreadcrumbPage>Custom Gloves Boxes</BreadcrumbPage>
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
                                <span className="text-primary">Custom</span> Gloves Boxes
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Professional custom glove boxes engineered for heavily trafficked medical environments. Our hospital-grade dispenser packaging solutions feature tear-resistant dispensing slots and high-visibility branding for reliable healthcare supply chain operations.
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
                                    src={glovesBoxes}
                                    alt="Custom Gloves Boxes Hero"
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
                        Sterile Glove Dispenser Packaging Built for Critical Clinical Operations
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            Our <strong className="text-foreground">custom glove boxes</strong> are decisively engineered for global medical suppliers, vast hospital networks, and intensive dental practices requiring foolproof, ultra-reliable dispenser packaging. Manufactured from highly dense medical-grade SBS cardstock and coated with specialized sterile finishes, each dispenser box is specifically designed to perform flawlessly in high-stakes healthcare scenarios. Whether you are actively wholesaling specialized surgical latex, heavy-duty industrial nitrile, or standard vinyl examination gloves, our <strong className="text-foreground">clinical packaging</strong> seamlessly marries uncompromising sterile structural containment with rapid, frustration-free accessibility.
                        </p>
                        <p>
                            The absolute core of our <strong className="text-foreground">custom dispenser packaging</strong> lies in its precision structural engineering. We masterfully design reinforced, laser-cut perforated dispensing slots that powerfully resist accidental tearing during continuous, aggressive pulling in emergency departments. Furthermore, we construct auto-locking bases capable of easily supporting the dense weight of hundreds of thick medical gloves without structural collapse. Combined with high-definition CMYK printing explicitly designed for color-coded hospital sizing (S, M, L, XL), your <strong className="text-foreground">hospital-grade glove boxes</strong> become a remarkably intuitive, highly durable medical asset globally.
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
                        The Tactical Requirement for Durable Healthcare Dispenser Packaging
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
                                Inside bustling hospital wards, demanding dental clinics, and intense emergency rooms, medical professionals rapidly consume examination gloves at astonishing rates. Consequently, the packaging housing these critical supplies ceases being a mere shipping container and instantly transforms into vital, heavily used medical equipment. A flimsy glove box that rips during frantic dispensing dramatically slows down essential triage procedures and potentially compromises the sanitary field. Therefore, investing in highly durable, specialized custom glove boxes is strictly necessary for any ambitious medical supply brand intent on firmly securing massive hospital network contracts.
                            </p>
                            <p>
                                CustomPackMakers explicitly engineers dispenser packaging built to fiercely withstand this exact relentless clinical beating. We actively deploy scientifically engineered board materials coupled with heavily reinforced die-cut geometries around the central opening slot, remarkably preventing lateral tearing. Furthermore, we recognize that massive inventory control within chaotic clinical stockrooms requires instantaneous visual identification. Thus, we integrate highly distinct, color-coded printing methodologies to rapidly differentiate various glove materials, precise thicknesses, and strict sizing matrices. Our strategic packaging confidently positions your medical brand as a highly dependable cornerstone of modern global healthcare operations.
                            </p>

                            <h3>High-Tensile Board Materials for Medical Logistics</h3>
                            <p>
                                Packing hundreds of tightly compressed nitrile or heavy latex gloves naturally creates immense internal pressure. We strictly utilize incredibly tough structural materials designed to efficiently contain this explosive force safely:
                            </p>
                            <ul>
                                <li><strong>High-Density Solid Bleached Sulfate (SBS):</strong> Offering spectacular tensile strength paired with the pristine, bright white visual aesthetic universally mandatory for clinical environments. SBS securely holds massive internal compression safely while remaining beautifully sanitary on the clinic shelf.</li>
                                <li><strong>Heavy-Gauge E-Flute Corrugated:</strong> When supplying bulk industrial or highly specialized surgical gloves, demanding maximum vertical crush resistance, E-flute prevents pallets from catastrophically crushing during rigorous, multi-state commercial medical supply shipments.</li>
                                <li><strong>Tear-Resistant Surface Laminations:</strong> We deliberately coat the exterior with robust aqueous finishes that substantially toughen the board’s sheer strength and aggressively repel incidental clinical liquid splatters, preserving the box's critical structural integrity.</li>
                            </ul>

                            <h3>Specialized Dispenser Slot Engineering</h3>
                            <p>
                                The absolute failure point of cheap glove packaging is the central perforation. We completely re-engineered this critical interface for flawless medical utility:
                            </p>
                            <ul>
                                <li><strong>Reinforced Stress-Relief Die-Cuts:</strong> We program small, intelligently curved structural cuts precisely at the most vulnerable corners of the dispensing oval. This efficiently disperses violent pulling forces, immediately stopping micro-tears from rapidly ripping straight down the front panel sideways.</li>
                                <li><strong>Double-Scored Easy-Open Perforations:</strong> Ensuring hospital nurses can instantly and cleanly completely remove the central access tab with a single rapid motion, leaving an incredibly smooth edge that won't subsequently shred the gloves upon aggressive extraction.</li>
                                <li><strong>Crash-Lock Interlocking Bases:</strong> Highly essential technology. The intricate bottom folds intelligently lock into each other securely, empowering the heavy box to consistently hold 100-200 robust gloves without the bottom unexpectedly bursting out when nurses pick it up.</li>
                            </ul>

                            <h3>Inventory-Optimized Medical Printing Technology</h3>
                            <p>
                                In frantic healthcare stockrooms, instantly grabbing the correct latex-free glove is universally vital. We deeply optimize your packaging for rapid visual triage universally:
                            </p>
                            <ul>
                                <li><strong>Vivid Color-Coded Printing Systems:</strong> Accurately deploying ultra-high-resolution, fully saturated CMYK inks to brilliantly colorize specific panels (e.g., Blue for Large, Red for Small, Green for Latex-Free), thereby heavily slashing dangerous medical supply selection errors violently.</li>
                                <li><strong>High-Contrast FDA Labelling:</strong> Expertly ensuring highly complex medical manufacturer LOT numbers, necessary safety warnings, and sterile expiration dates remain completely crisp and perfectly legible across massive, high-speed wholesale wholesale manufacturing runs effectively.</li>
                            </ul>

                            <h3>Massive Wholesale Hospital Supply Chain Scaling</h3>
                            <p>
                                Supplying major centralized hospital networks fundamentally demands relentless, enormous production logistics. Whether your brand rapidly requires one hundred thousand standard vinyl glove boxes or a specialized small run for experimental surgical nitrile, we scale production fluently. CustomPackMakers guarantees exceptional cross-run consistency, delivering heavily fortified, flawlessly printed medical dispenser packaging incredibly quickly with absolutely superb wholesale volume pricing strictly attached to supercharge your supply margins natively.
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
                                        Every custom glove box we manufacture utilizes premium sterile-grade SBS cardstock and durable tear-resistant coatings. Our meticulous quality control ensures that each dispenser functions exceptionally smoothly in high-pressure hospital settings, protecting your internal latex or nitrile stock reliably.
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
                                        Fast-paced healthcare environments require immediate, unhindered access to sterile supplies. We expertly engineer precision-cut dispensing slots that strongly withstand repeated daily pulling without structural tearing. Your essential medical packaging requirements are fulfilled securely, providing absolutely flawless clinical functionality.
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
                                        Top-tier hospitals and contemporary dental clinics demand thoroughly sustainable solutions that equally satisfy rigorous sanitary requirements. Our recyclable, eco-friendly custom glove boxes deliver immense structural endurance while cutting harmful waste, perfectly matching the progressive ESG trajectories of medical communities.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT: Square image with floating badges */}
                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img
                                    src={glovesBoxes}
                                    alt="Premium Custom Clinical Packaging"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-7">
                                    <p className="text-white font-bold text-lg leading-snug mb-1">
                                        Trusted by Medical Brands
                                    </p>
                                    <p className="text-white/75 text-sm">Delivering robust clinical grade protection</p>
                                </div>
                            </div>

                            <div className="absolute top-4 -right-2 lg:-right-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80 backdrop-blur-sm">
                                <p className="text-2xl font-bold text-primary leading-none">Safe</p>
                                <p className="text-xs text-slate-400 mt-1 font-medium">Tear-Resistant Tech</p>
                            </div>

                            <div className="absolute bottom-4 -left-2 lg:-left-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80 backdrop-blur-sm">
                                <p className="text-2xl font-bold text-emerald-500 leading-none">100%</p>
                                <p className="text-xs text-slate-400 mt-1 font-medium">Hospital Environment Focus</p>
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
                                    src={glovesBoxes}
                                    alt="Differentiate Your Clinical Products"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                            </div>
                            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-60" />
                            <div className="absolute -z-10 -top-8 -right-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl opacity-60" />
                        </div>

                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                                Differentiate Your <span className="text-primary">Clinical Supplies</span> From Others
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                At CustomPackMakers, we intrinsically understand that premium hospital dispenser packaging heavily dictates rapid operational efficiency on chaotic medical floors. To powerfully guarantee your healthcare brand actively dominates major institutional supply contracts globally, we intensely engineer heavy-duty structural integrity seamlessly matched with incredibly clear visual organization protocols. Our expert engineering team vigorously helps completely reinforce box joints, significantly preventing disastrous bottom blow-outs of massive glove quantities. By strategically applying striking hospital-mandated color-coding networks, highly scuff-resistant protective varnishes, and meticulously engineered tear-relief ovals, we ultimately help you construct formidable, highly functional packaging that confidently elevates clinical loyalty instantly.
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
                                        question: "Are your custom glove boxes suitable for sterile clinical environments?",
                                        answer: "Yes, our glove boxes are manufactured using medical-grade SBS cardstock in highly controlled environments, ensuring they are perfectly safe for intensive clinical, surgical, and retail pharmacy settings where extreme baseline sanitation is fundamentally paramount."
                                    },
                                    {
                                        id: "item-2",
                                        question: "How durable is the dispensing slot against repeated tearing?",
                                        answer: "We meticulously engineer the glove dispensing mechanisms with reinforced structural die-cuts and heavy-duty tear-resistant laminations. This absolutely guarantees the slot remains perfectly intact and functions smoothly even under high-frequency pulling in intensely busy emergency healthcare environments."
                                    },
                                    {
                                        id: "item-3",
                                        question: "Can these boxes securely hold high quantities of heavy gloves?",
                                        answer: "Absolutely. Our custom glove boxes are meticulously constructed from high-tensile corrugated materials and dense cardstock. We precisely engineer auto-locking bases capable of perfectly supporting the dense weight of hundreds of medical-grade nitrile gloves without accidentally rupturing."
                                    },
                                    {
                                        id: "item-4",
                                        question: "Do you provide bulk wholesale packaging for major hospital networks?",
                                        answer: "Yes, we specialize deeply in high-volume, wholesale continuous production runs perfectly tailored for extensive medical networks. We guarantee uncompromising structural quality across hundreds of thousands of units, providing remarkably reliable dispenser packaging at highly competitive tiered scaling prices."
                                    },
                                    {
                                        id: "item-5",
                                        question: "How do you ensure medical size codes are immediately visible?",
                                        answer: "We utilize ultra-high-resolution CMYK printing paired with scratch-resistant finishes to brilliantly print distinct color-coded sizing indicators (Small, Medium, Large) directly on every face of the box, ensuring critical sizing data remains instantly visible in chaotic medical emergencies."
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
                                alt="Custom Gloves Boxes FAQ"
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

export default GlovesBoxes;
