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
import medicineBoxes from "@/assets/pharma-packaging/medicine-boxes.webp";
import FAQimage from "@/assets/FAQ-image.png";

const CustomMedicineBoxes = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    const productImages = [
        { src: medicineBoxes, alt: "Custom Medicine Boxes - Main View" },
        { src: medicineBoxes, alt: "Custom Medicine Boxes - Side Angle" },
        { src: medicineBoxes, alt: "Custom Medicine Boxes - Open Box View" },
        { src: medicineBoxes, alt: "Custom Medicine Boxes - Detail Shot" },
        { src: medicineBoxes, alt: "Custom Medicine Boxes - Lifestyle Shot" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Medicine Boxes | Pharmaceutical Packaging | CustomPackMakers</title>
                <meta name="description" content="Order wholesale custom medicine boxes with fast turnaround. Premium medical packaging featuring FDA compliance, child-resistant locks, and vibrant printing." />
                <meta name="keywords" content="custom medicine boxes, pharmaceutical packaging, medical boxes wholesale, child-resistant packaging, medical supply boxes" />
                <meta property="og:title" content="Custom Medicine Boxes | Pharmaceutical Packaging | CustomPackMakers" />
                <meta property="og:description" content="Reliable custom medicine boxes engineered for product protection and clear dosage communication. Get a free quote for premium pharmacy packaging." />
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
                                <BreadcrumbPage>Custom Medicine Boxes</BreadcrumbPage>
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
                                <span className="text-primary">Custom</span> Medicine Boxes
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Reliable custom medicine boxes engineered for maximum product protection and clear dosage communication. Our compliant pharmaceutical packaging solutions guarantee strict safety standards while brilliantly enhancing your medical brand's pharmacy presence.
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
                                    src={medicineBoxes}
                                    alt="Custom Medicine Boxes Hero"
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
                        Professional Medicine Packaging Built for Patient Safety and Brand Integrity
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            Our <strong className="text-foreground">custom medicine boxes</strong> are precision-engineered for pharmaceutical companies and pharmacies that refuse to compromise on patient safety and FDA compliance. Constructed from premium medical-grade SBS cardstock and fortified with specialized barrier laminations, each box delivers the sterile protection your critical medications demand while projecting the reliable identity that healthcare consumers actively trust. Whether you are packaging over-the-counter pain relievers or strictly regulated prescription treatments, our <strong className="text-foreground">pharmaceutical packaging</strong> ensures structural permanence and unmistakable branding.
                        </p>
                        <p>
                            From complex blister pack slider boxes to rigid child-resistant tincture cartons, our <strong className="text-foreground">custom medical packaging</strong> solutions are designed to accommodate a diverse array of medicine formats. Each box seamlessly integrates options for advanced moisture-proof seals, tamper-evident tear strips, and highly secure precision-cut structural forms, ensuring your medicinal product arrives in a pristine, unadulterated state. Enabled with high-resolution CMYK printing technologies for absolute clarity on crucial dosage instructions and barcode matrices, your <strong className="text-foreground">medicine packaging</strong> actively functions as a dependable asset for global patient care.
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
                        The Importance of FDA-Compliant Pharmaceutical Packaging
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
                                In the heavily scrutinized and highly regulated pharmaceutical industry, medicine packaging serves an incredibly vital role that extends far beyond physical storage.
                                For medical brands and pharmaceutical giants, custom medicine boxes are the primary sterile barrier against external contamination, a mandatory instrument for patient dosage compliance, and an essential component in adhering strictly to FDA regulations. Top-tier medical packaging visually communicates clinical efficacy, rigorous safety, and unwavering brand trustworthiness.
                            </p>
                            <p>
                                Our custom medicine boxes are fundamentally engineered with this massive clinical responsibility in perspective. Every singular structural characteristic, expanding from child-resistant mechanical locks to the microscopic clarity of our offset printed dosage instructions, is meticulously developed to generate a highly secure and informative pharmaceutical experience for all patients. Whether you are actively launching life-saving heart medications or over-the-counter allergy formulations, investing in sophisticated, high-grade pharmaceutical packaging definitively demonstrates your brand's unwavering commitment to superior patient safety and clinical quality care.
                            </p>

                            <h3>Unmatched Medical-Grade Material Quality &amp; Protective Durability</h3>
                            <p>
                                The absolute foundation of extraordinary pharmaceutical packaging inherently lies in utilizing contamination-free, extraordinarily tough materials. We exclusively offer a specialized selection:
                            </p>
                            <ul>
                                <li><strong>Solid Bleached Sulfate (SBS):</strong> Our premier choice for critical medicine packaging. SBS continuously offers unparalleled chemical purity and robust structural integrity, elegantly paired with a bright white printing surface that is perfect for displaying critical, high-contrast medical formulation information.</li>
                                <li><strong>Moisture-Resistant Metallized Board:</strong> Specifically designed for highly sensitive powder medications, we utilize specially coated foil-lined boards that entirely prevent ambient humidity from penetrating the box, permanently stopping capsule degradation.</li>
                                <li><strong>Eco-Friendly Medical Kraft:</strong> Frequently used for holistic and homeopathic remedies, providing a compelling sustainable narrative while retaining the necessary rigid structural defense to protect fragile internal glass blister packs.</li>
                                <li><strong>E-Flute Corrugated Safety:</strong> When securely shipping bulk medicine assortments directly to regional pharmacies and major hospitals, lightweight E-flute provides the maximum crush resistance required across the complicated medical supply chain.</li>
                            </ul>

                            <h3>Advanced Structural Customization for Utmost Patient Safety</h3>
                            <p>
                                Exceptional pharmaceutical packaging strictly requires advanced structural features that prioritize user safety and rigid regulatory compliance above mere aesthetics:
                            </p>
                            <ul>
                                <li><strong>Advanced Child-Resistant Locking Mechanisms:</strong> We implement intelligently engineered internal locking tabs and structural pressure puzzles that safely restrict access for young children while remaining remarkably accessible for senior patients suffering from arthritis.</li>
                                <li><strong>Clinical Tamper-Evident Seals:</strong> We offer customized perforations, destructible safety labels, and shrink-wrap closures that provide instant visual evidence if the enclosed medication has been compromised, ensuring complete and total patient trust.</li>
                                <li><strong>Custom Anti-Movement Inserts:</strong> Securely holding fragile liquid medicine bottles or aluminum blister packs exactly in their designated place to prevent rattling, glass breakage, or dangerous damage to protective seals during extensive transit operations.</li>
                                <li><strong>ADA-Compliant Braille Printing:</strong> Optionally offering raised tactile braille printing directly integrated onto the medicine box surface to safely assist visually impaired patients in correctly identifying their active prescriptions globally.</li>
                            </ul>

                            <h3>Precision Printing Methodologies for Clarity and Compliance</h3>
                            <p>
                                With critical medicines, a slightly misread warning label can prove intensely dangerous. Our advanced printing technology consistently ensures flawless graphical clarity:
                            </p>
                            <ul>
                                <li><strong>Ultra-High-Resolution Offset CMYK:</strong> Expertly achieving microscopically sharp text for dense dosage instructions, complex chemical ingredient lists, and critical FDA warning labels to ensure absolute, unquestionable legibility for every patient.</li>
                                <li><strong>Medical-Grade Low-Migration Inks:</strong> Strictly utilizing specialized soy-based inks that thoroughly eliminate all volatile organic compounds (VOCs) and permanently prevent any dangerous chemical migration into the secondary or primary packaging layers.</li>
                                <li><strong>Spot UV Protective Coating:</strong> Brilliantly highlighting critical pharmacy warning labels or your established pharmaceutical brand logo with an appealing, protective, and visually striking glossy finish.</li>
                            </ul>

                            <h3>Certified Wholesale Production &amp; Supply Chain Scaling</h3>
                            <p>
                                We operate strictly up to the highest medical industry standards. Whether your pharmaceutical startup is launching a specialized new orphan drug requiring a smaller initial production run, or you are seamlessly supplying major international pharmacy chains demanding millions of flawless units, our pristine production facilities can securely and rapidly scale to your precise volumetric needs. We proudly provide highly competitive wholesale pricing alongside remarkably rapid manufacturing turnarounds to keep your critical medical supply chain flowing completely uninterrupted. Partner with our engineering experts to create customized medicine boxes that fiercely protect your formulations and steadfastly safeguard the health of your patients.
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
                                        Every custom medicine box we produce utilizes premium medical-grade SBS cardstock and resilient protective coatings. Our intensive quality oversight guarantees each unit meets the rigorous durability standards necessary for pharmaceutical packaging, safeguarding your healthcare products during all transit stages securely.
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
                                        Prescription and OTC packaging demands precise specifications and regulatory compliance. We expertly engineer child-resistant locks and highly functional structural layouts that strictly adhere to FDA guidelines. Your brand's essential medical packaging requirements are fulfilled perfectly, providing total safety and confidence.
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
                                        Modern patients and medical institutions increasingly favor sustainability alongside uncompromised safety. Our fully recyclable, eco-friendly custom medicine boxes deliver outstanding structural performance while substantially lowering your brand's environmental impact, perfectly satisfying the rigorous ESG requirements of contemporary healthcare providers globally.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT: Square image with floating badges */}
                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img
                                    src={medicineBoxes}
                                    alt="Premium Custom Medicine Packaging"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-7">
                                    <p className="text-white font-bold text-lg leading-snug mb-1">
                                        Trusted by Medical Brands
                                    </p>
                                    <p className="text-white/75 text-sm">Delivering premium clinical packaging solutions</p>
                                </div>
                            </div>

                            <div className="absolute top-4 -right-2 lg:-right-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80 backdrop-blur-sm">
                                <p className="text-2xl font-bold text-primary leading-none">Safe</p>
                                <p className="text-xs text-slate-400 mt-1 font-medium">Child-Resistant Tech</p>
                            </div>

                            <div className="absolute bottom-4 -left-2 lg:-left-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80 backdrop-blur-sm">
                                <p className="text-2xl font-bold text-emerald-500 leading-none">100%</p>
                                <p className="text-xs text-slate-400 mt-1 font-medium">FDA Complaint Focus</p>
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
                                    src={medicineBoxes}
                                    alt="Differentiate Your Medical Products"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                            </div>
                            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-60" />
                            <div className="absolute -z-10 -top-8 -right-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl opacity-60" />
                        </div>

                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                                Differentiate Your <span className="text-primary">Medicines</span> From Others
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                At CustomPackMakers, we know that premium medical packaging acts as the primary physical touchpoint for patient trust and product efficacy. To guarantee your pharmaceutical brand firmly commands authority on crowded pharmacy shelves, we deploy sophisticated offset printing combined with flawlessly executed safety features. Our engineering experts actively help optimize your specific box dimensions, ensuring your critical medicine bottles fit completely securely without excessive structural weight. By carefully integrating striking, anti-counterfeit holographic foiling, highly readable clinical typography, and medical-grade materials, we consistently help you engineer remarkably safe packaging that reinforces clinical authority and naturally curates lifelong patient loyalty.
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
                                        question: "Are your custom medicine boxes fully FDA compliant?",
                                        answer: "Yes, our custom medicine boxes are meticulously engineered to satisfy all strict FDA guidelines. We implement child-resistant mechanisms and utilize medical-grade materials to guarantee your pharmaceutical products remain secure, providing absolute safety and total regulatory compliance."
                                    },
                                    {
                                        id: "item-2",
                                        question: "Can these boxes withstand heavy medical supply chain handling?",
                                        answer: "Absolutely. Our packaging is formed from highly durable, crush-resistant materials. We comprehensively test each batch for robust compression strength to ensure that your custom medicine boxes survive demanding medical supply chain environments without suffering any internal product damage."
                                    },
                                    {
                                        id: "item-3",
                                        question: "What printing solutions do you offer for dosage warnings?",
                                        answer: "We utilize ultra-high-resolution CMYK offset printing to guarantee that essential dosage instructions, barcodes, and medical warnings remain flawlessly legible. This ensures critical patient information is perfectly communicated on every single custom medicine box we manufacture wholesale."
                                    },
                                    {
                                        id: "item-4",
                                        question: "Do you provide tamper-evident options for over-the-counter medicines?",
                                        answer: "Yes, securing product integrity is paramount. We offer diverse tamper-evident features, including custom destructive labeling and complex perforated tear strips, empowering patients to instantly verify if a medication package has been previously opened or maliciously compromised."
                                    },
                                    {
                                        id: "item-5",
                                        question: "Are your manufacturing processes safe for medical packaging?",
                                        answer: "Our production facilities strictly follow advanced hygiene protocols necessary for secondary pharmaceutical packaging. We run pristine manufacturing environments and employ low-migration, soy-based inks that thoroughly eliminate VOCs, certifying your custom medicine boxes are completely safe for clinical use."
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
                                alt="Custom Medicine Boxes FAQ"
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

export default CustomMedicineBoxes;
