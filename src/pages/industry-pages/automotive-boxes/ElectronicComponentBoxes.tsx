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
import { RelatedProductAutomotive } from "@/components/RelatedProductAutomotive";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";

// Product Image
import electroniccomponentboxeshero from "@/assets/automotive-products/electronic-component-boxes/img-hero.webp";
import electroniccomponentboxesimg1 from "@/assets/automotive-products/electronic-component-boxes/img-1.webp";
import electroniccomponentboxesimg2 from "@/assets/automotive-products/electronic-component-boxes/img-2.webp";
import electroniccomponentboxesimg3 from "@/assets/automotive-products/electronic-component-boxes/img-3.webp";
import electroniccomponentboxesimg4 from "@/assets/automotive-products/electronic-component-boxes/img-4.webp";
import electroniccomponentboxesimg5 from "@/assets/automotive-products/electronic-component-boxes/img-5.webp";
import electroniccomponentboxesimg6 from "@/assets/automotive-products/electronic-component-boxes/img-whychoose.webp";
import electroniccomponentboxesimg7 from "@/assets/automotive-products/electronic-component-boxes/img-different.webp";

// FAQ image
import FAQimage from "@/assets/FAQ-image.webp";

const ElectronicComponentBoxes = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    // Placeholder gallery images
    const productImages = [
        { src: electroniccomponentboxesimg1, alt: "Custom Electronic Component Box" },
        { src: electroniccomponentboxesimg2, alt: "Automotive Sensor Packaging" },
        { src: electroniccomponentboxesimg3, alt: "ECU Protective Box - Open" },
        { src: electroniccomponentboxesimg4, alt: "Anti-Static Electronics Box" },
        { src: electroniccomponentboxesimg5, alt: "Car Audio Component Packaging" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Electronic Component Boxes | Automotive Electronics Packaging | CustomPackMakers</title>
                <meta name="description" content="Protective packaging for automotive electronics. Custom boxes with anti-static options for sensors, ECUs, and car audio components." />
                <meta name="keywords" content="electronic component boxes, automotive electronics packaging, ecu boxes, car sensor packaging, anti-static boxes" />
                <meta property="og:title" content="Custom Electronic Component Boxes | Automotive Electronics Packaging | CustomPackMakers" />
                <meta property="og:description" content="Safeguard sensitive automotive electronics with our custom packaging. Designed for protection against static, shock, and moisture." />
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
                                    <Link to="/industries/automotive-boxes">Automotive Boxes</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Electronic Component Boxes</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </div>

            {/* HERO SECTION */}
            <section className="py-8 bg-background">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        {/* LEFT: Product Title & Description */}
                        <div className="lg:col-span-7 space-y-6">
                            <div className="w-20 h-1.5 bg-primary rounded-full"></div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight">
                                <span className="text-primary">Custom</span> Electronic Component Boxes
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Precision packaging for sensitive automotive electronics. Engineered with anti-static materials and shock absorption to ensure critical components arrive in perfect working order.
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

                        {/* RIGHT: Large Product Image - Compact */}
                        <div className="lg:col-span-5 relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-muted group">
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200">
                                <img
                                    src={electroniccomponentboxeshero}
                                    alt="Custom Electronic Component Boxes"
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
                    {/* Section label + accent bar */}
                    <div className="flex items-center gap-3 mb-5">
                        <div className="w-10 h-1 bg-primary rounded-full" />
                        <span className="text-xs font-semibold tracking-widest text-primary uppercase">Product Overview</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 max-w-3xl">
                        Advanced Protection for Modern Vehicle Electronics
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            Modern vehicles are computers on wheels, and the electronic components powering them—from ECUs and sensors to infotainment systems—require specialized care. Our <strong className="text-foreground">custom electronic component boxes</strong> are designed to shield these sensitive parts from the hazards of the supply chain, including static discharge, moisture, and impact shock.
                        </p>
                        <p>
                            We offer ESD (Electrostatic Discharge) safe materials and custom foam inserts to hold delicate circuit boards and connectors securely. Whether you are shipping bulk sensors to an assembly plant or retail-ready car audio components to stores, our <strong className="text-foreground">automotive electronics packaging</strong> delivers the professional presentation and uncompromising protection your high-tech products demand.
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

                        {/* RIGHT SIDE: Sticky Quote Form */}
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
                                                <Input id="length" type="number" placeholder="6" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label>
                                                <Input id="width" type="number" placeholder="4" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">D (in)</Label>
                                                <Input id="depth" type="number" placeholder="2" className="h-9 bg-white" />
                                            </div>
                                        </div>
                                        <div className="space-y-1.5">
                                            <Label htmlFor="quantity" className="text-xs font-semibold text-muted-foreground">Quantity</Label>
                                            <Input id="quantity" type="number" placeholder="1000" className="h-9 bg-white" />
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
                        Securing the Future of Automotive Tech
                    </h2>
                    <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="[&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-slate-900 [&>h2]:mb-4 [&>h2]:mt-8 [&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-6 [&>h3]:mb-3 [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-4 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-4 [&>ul]:space-y-2 [&>ul>li]:text-[15px] [&>ul>li]:text-slate-600">
                            <h2>Safeguarding the Brain of the Vehicle</h2>
                            <p>
                                As modern vehicles evolve into complex networks of sensors and computers, the packaging for these operational brains must evolve too. <strong>Custom electronic component boxes</strong> are the first line of defense against the invisible killer of automotive tech: Electrostatic Discharge (ESD). A single zap can render an ECU or sensor useless. At CustomPackMakers, we specialize in high-tech packaging solutions that neutralize static, absorb shock, and protect against environmental contaminants.
                            </p>
                            <p>
                                We understand that you aren't just shipping a part; you're shipping the reliability of the vehicle's safety systems, engine management, and infotainment. Our packaging is designed to meet strict OEM and aftermarket standards, ensuring that from the factory floor to the mechanic's bench, your components remain calibrated and functional.
                            </p>

                            <h3>Comprehensive Protection Strategies</h3>
                            <p>
                                We employ a multi-layered approach to protection.
                            </p>
                            <ul>
                                <li><strong>ESD-Safe Materials:</strong> We offer a range of anti-static solutions, including conductive corrugated board (black), dissipative coatings (pink), and shielded laminates. These materials create a Faraday cage effect, grounding any static charge before it reaches the component.</li>
                                <li><strong>Micro-Precision Inserts:</strong> A loose component is a broken component. We design custom die-cut inserts (foam or cardboard) that mirror the geometry of your part. This immobilizes the device, preventing connector pins from bending and housings from cracking.</li>
                                <li><strong>Dust & Moisture Control:</strong> Dust can interfere with optical sensors, and moisture breeds corrosion. Our boxes can be designed with tight-sealing closures and integrated desiccant compartments to maintain a clean, dry internal environment.</li>
                            </ul>

                            <h3>Optimized for the Assembly Line and Retail</h3>
                            <p>
                                Our packaging serves two masters: the manufacturing plant and the retail store.
                            </p>
                            <h4>For OEM Supply Chains</h4>
                            <p>
                                We design packaging for efficiency. This includes "pick-and-place" friendly layouts for robotic assembly, stackable trays for high-density shipping, and clear labeling areas for barcode scanning. Our reusable (returnable) packaging options can also help closed-loop supply chains reduce waste.
                            </p>
                            <h4>For Aftermarket Retail</h4>
                            <p>
                                In the store, the box must sell the tech. We use premium folding cartons with soft-touch finishes and spot UV highlighting to convey a high-tech feel. Detailed technical specs and vehicle compatibility charts are printed with razor-sharp clarity, helping customers feel confident they are buying the right part.
                            </p>

                            <h3>Tamper-Evident Security</h3>
                            <p>
                                Electronics are high-value targets.
                            </p>
                            <p>
                                <strong>Security Seals:</strong> We can integrate tamper-evident features into the box design, such as destructive crash-lock bottoms or seal labels that leave a "VOID" residue if removed. This ensures the customer receives a genuine, unopened product.
                            </p>

                            <h3>Sustainability in High-Tech</h3>
                            <p>
                                Green packaging for high-tech products is no longer a contradiction.
                            </p>
                            <ul>
                                <li><strong>Recyclable Conductive Board:</strong> Our carbon-infused conductive cardboard is fully repulpable, allowing for easy recycling unlike some older metallized films.</li>
                                <li><strong>Molded Pulp Inserts:</strong> For high-volume runs, we can replace foam with custom-molded paper pulp. It offers excellent cushioning and static dissipation while being 100% biodegradable.</li>
                            </ul>

                            <h3>Why CustomPackMakers is the Engineer's Choice</h3>
                            <p>
                                We speak the language of engineering.
                            </p>
                            <ul>
                                <li><strong>CAD Prototyping:</strong> We provide digital and physical prototypes to verify fitment with your 3D CAD models before cutting a single production sheet.</li>
                                <li><strong>Testing Support:</strong> We can supply samples for surface resistivity testing and drop testing to validate compliance with industry standards like ANSI/ESD S20.20.</li>
                                <li><strong>Scalable Production:</strong> Whether you need 500 boxes for a niche sensor or 50,000 for a global recall replacement kit, our production lines are ready.</li>
                            </ul>
                            <p>
                                Connect with confidence. Choose <strong>custom electronic component packaging</strong> from CustomPackMakers that delivers circuit-level protection and showroom-level presentation.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* RELATED PRODUCTS CAROUSEL */}
            <RelatedProductAutomotive />

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
                            We combine craftsmanship, speed, and reliability to deliver packaging that makes your brand unforgettable.
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
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">
                                        ESD Safe Protection
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        A single ESD event as low as 10 volts can permanently damage automotive microchips, MOSFET gate oxide layers, and ECU or ABS module CMOS circuits. We deploy carbon-black conductive corrugated board at 10³–10⁵ ohms/sq, dissipative pink foam, and Faraday cage shielding laminates for complete charge neutralization.
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
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">
                                        Technical Communication
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Informed installers return fewer parts. We use 1200 DPI digital printing to reproduce wiring schematics, pin-out diagrams, connector torque specs, and ECU compatibility matrices directly on the box. A strategically placed QR code links to video guides and software flashing instructions, reducing customer support calls significantly.
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
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">
                                        Precision Fit Inserts
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        A connector pin bent 0.5mm or a circuit board flexed beyond substrate tolerance causes intermittent faults nearly impossible to diagnose post-installation. Our CAD-engineered die-cut inserts mirror exact component geometry, immobilizing sensors and ECUs in suspension cradles. Anti-static foam coatings prevent triboelectric charge generation during insertion and extraction.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img
                                    src={electroniccomponentboxesimg6}
                                    alt="Professional electronics packaging"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-7">
                                    <p className="text-white font-bold text-lg leading-snug mb-1">
                                        Trusted by 500+ Brands
                                    </p>
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

            {/* DIFFERENTIATE YOUR PRODUCTS SECTION */}
            <section className="py-10 lg:py-12 bg-white overflow-hidden relative">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="relative group">
                            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] border border-primary/20 shadow-2xl transform transition-transform duration-700 hover:scale-[1.02]">
                                <img
                                    src={electroniccomponentboxesimg7}
                                    alt="Differentiate Your Electronics"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                            </div>
                            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-60" />
                            <div className="absolute -z-10 -top-8 -right-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl opacity-60" />
                        </div>
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                                Differentiate Your <span className="text-primary">Tech Brand</span> From Others
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                In the world of automotive electronics, perceived quality is tied directly to packaging. A box that feels cheap or flimsy can make the high-tech component inside seem inferior. Our custom electronic component boxes are designed to mirror the sophistication of the technology they protect. With sleek finishes, precise construction, and anti-static features, you not only protect the product but also reinforce your brand's reputation for engineering excellence and quality.
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
                                        question: "Do you offer anti-static packaging?",
                                        answer: "Yes, we can use ESD-safe materials and conductive foams specifically designed for sensitive electronic components."
                                    },
                                    {
                                        id: "item-2",
                                        question: "Can you make custom inserts for irregular shapes?",
                                        answer: "Absolutely. We design custom die-cut inserts to securely hold any component shape, preventing movement during transit."
                                    },
                                    {
                                        id: "item-3",
                                        question: "What is the minimum order quantity (MOQ)?",
                                        answer: "Our flexible manufacturing allows for MOQs as low as 100 units, perfect for small batches or pilot runs."
                                    },
                                    {
                                        id: "item-4",
                                        question: "Can you print technical specs on the box?",
                                        answer: "Yes, our high-resolution printing is perfect for detailed technical specifications, wiring diagrams, and compatibility lists."
                                    },
                                    {
                                        id: "item-5",
                                        question: "Are your boxes stackable?",
                                        answer: "Yes, our boxes are engineered for high crush strength, ensuring they can be safely stacked in warehouses without damaging the contents."
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
                                alt="Custom Electronic Component Boxes FAQ"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <BrandRating />
            <QuoteForm />
            <Footer />
        </div >
    );
};

export default ElectronicComponentBoxes;
