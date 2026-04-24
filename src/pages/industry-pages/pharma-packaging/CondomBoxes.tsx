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
import condomBoxeshero from "@/assets/pharma-packaging/condom-boxes/img-hero.webp";
import condomBoxesimg1 from "@/assets/pharma-packaging/condom-boxes/img-1.webp";
import condomBoxesimg2 from "@/assets/pharma-packaging/condom-boxes/img-2.webp";
import condomBoxesimg3 from "@/assets/pharma-packaging/condom-boxes/img-3.webp";
import condomBoxesimg4 from "@/assets/pharma-packaging/condom-boxes/img-4.webp";
import condomBoxesimg5 from "@/assets/pharma-packaging/condom-boxes/img-5.webp";
import condomBoxesimg6 from "@/assets/pharma-packaging/condom-boxes/img-whychoose.webp";
import condomBoxesimg7 from "@/assets/pharma-packaging/condom-boxes/img-different.webp";
import FAQimage from "@/assets/FAQ-image.webp";

const CondomBoxes = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    const productImages = [
        { src: condomBoxesimg1, alt: "Custom Condom Boxes - Main View" },
        { src: condomBoxesimg2, alt: "Custom Condom Boxes - Side Angle" },
        { src: condomBoxesimg3, alt: "Custom Condom Boxes - Open Box View" },
        { src: condomBoxesimg4, alt: "Custom Condom Boxes - Detail Shot" },
        { src: condomBoxesimg5, alt: "Custom Condom Boxes - Lifestyle Shot" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Condom Boxes | Personal Care Packaging | CustomPackMakers</title>
                <meta name="description" content="Order robust custom condom boxes wholesale. Premium FDA compliant prophylactic packaging featuring moisture-resistant barriers and discreet shipping." />
                <meta name="keywords" content="custom condom boxes, prophylactic packaging, FDA compliant packaging, personal care boxes, wholesale prophylactic boxes" />
                <meta property="og:title" content="Custom Condom Boxes | Personal Care Packaging | CustomPackMakers" />
                <meta property="og:description" content="Discreet and secure custom condom boxes engineered for ultimate product protection and consumer trust. Get a wholesale quote today." />
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
                                <BreadcrumbPage>Custom Condom Boxes</BreadcrumbPage>
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
                                <span className="text-primary">Custom</span> Condom Boxes
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Discreet and secure custom condom boxes engineered for ultimate product protection and consumer trust. Our advanced packaging solutions feature durable moisture barriers and precise structural compliance for global personal care markets.
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
                                    src={condomBoxeshero}
                                    alt="Custom Condom Boxes Hero"
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
                        Professional Contraceptive Packaging Built for Safety and Discretion
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            Our <strong className="text-foreground">custom condom boxes</strong> are meticulously developed for personal wellness brands and clinical distributors who require absolute perfection in prophylactic packaging. Constructed from robust, medical-grade SBS cardstock and fortified with specialized inner moisture-blocking laminations, each box decisively protects sensitive latex and polyisoprene materials from degrading environmental exposure. Whether you are merchandising in high-traffic retail pharmacies or delivering via discreet e-commerce channels, our <strong className="text-foreground">personal care packaging</strong> powerfully establishes immediate consumer trust and undeniable clinical reliability.
                        </p>
                        <p>
                            From standard pocket-sized three-pack tuck boxes to large-volume clinical dispenser configurations, our <strong className="text-foreground">custom prophylactic packaging</strong> solutions are precision-engineered to absolutely eliminate internal friction, preventing dangerous foil punctures during turbulent shipping. Every box structure provides ample, flawless printing real estate for highly detailed offset graphics, critically ensuring that FDA-mandated usage instructions, manufacturing lots, and expiration dates remain fundamentally legible. Fortified with sophisticated tamper-evident safety closures, your <strong className="text-foreground">condom packaging</strong> serves as the ultimate guarantee of uncontaminated quality.
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
                        The Critical Importance of Reliable Contraceptive Packaging
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
                                In the highly specialized sector of personal wellness and intimate healthcare, product safety simply cannot be compromised. Condoms are sophisticated FDA-regulated medical devices constructed from remarkably sensitive latex and polyisoprene materials. For these materials, exposure to harsh environmental variables—such as intensive UV light, fluctuating ambient humidity, or abrasive internal friction—results in catastrophic product failure. Consequently, custom condom boxes serve an indispensable purpose: acting as an unwavering, protective fortress that fiercely guards product efficacy from the strict manufacturing floor all the way to the end consumer.
                            </p>
                            <p>
                                At CustomPackMakers, we structurally engineer custom contraceptive packaging completely aligned with these immense clinical responsibilities. We deploy extraordinarily tough, multi-layered board structures specially designed to radically diminish external compression. Concurrently, we actively utilize sophisticated friction-free interior finishes that completely prevent internal abrasion against delicate primary foil wrappers. By expertly investing in highly durable, scientifically formulated prophylactic packaging, your personal care brand actively demonstrates its absolute commitment to medical-grade reliability, generating profound consumer confidence and loyalty.
                            </p>

                            <h3>Advanced Medical-Grade Material Integrity</h3>
                            <p>
                                Protecting sensitive elastomers requires packaging capable of flawlessly blocking invasive environmental factors. We utilize the personal care industry’s most sophisticated materials:
                            </p>
                            <ul>
                                <li><strong>Premium Solid Bleached Sulfate (SBS):</strong> Offering the absolutely purest and brightest printing surface available, SBS provides a flawlessly smooth interior face that sharply reduces chaotic friction against delicate aluminum foil wrappers during transit.</li>
                                <li><strong>Aqueous &amp; Soft-Touch Barrier Laminations:</strong> We precisely apply incredibly tough, moisture-resistant exterior coatings that vigorously prevent environmental humidity and incidental liquid spills from warping the box, effectively safeguarding the internal condoms from disastrous mold or chemical degradation.</li>
                                <li><strong>High-Density E-Flute Corrugated:</strong> Specifically utilized for tremendous volume clinical supply deliveries and hefty dispenser boxes, E-flute guarantees optimal vertical crush resistance, fully protecting bulk stock boxes during complex hospital logistics.</li>
                            </ul>

                            <h3>Specialized Custom Engineering for Utmost Discretion &amp; Security</h3>
                            <p>
                                Personal care packaging demands an extremely sensitive balance between striking retail visibility and essential consumer privacy:
                            </p>
                            <ul>
                                <li><strong>Complex Tamper-Evident Glued Closures:</strong> We masterfully utilize exceedingly strong, specialized medical adhesives alongside intricate perforated tear-strips. This forces the box to visibly display structural damage if compromised, establishing indisputable patient trust before usage.</li>
                                <li><strong>Discreet E-Commerce Shipper Configurations:</strong> For aggressive direct-to-consumer digital brands, we engineer highly discreet exterior mailers flawlessly housing vibrantly branded internal retail boxes, protecting consumer privacy during the extensive delivery process.</li>
                                <li><strong>Precision Auto-Lock Base Engineering:</strong> Critical for large 12-pack and 36-pack prophylactic configurations, an interlocking structural base securely supports dense internal product weight, permanently ensuring the box will never accidentally rupture upon lifting.</li>
                            </ul>

                            <h3>Precision Printing for Compliance and Aesthetics</h3>
                            <p>
                                In regulated personal health markets, FDA transparency must harmoniously merge with captivating shelf presence:
                            </p>
                            <ul>
                                <li><strong>High-Resolution FDA Typography:</strong> Operating sophisticated offset CMYK presses to incredibly ensure dense medical disclaimers, essential preventative usage guides, and crucial latex allergy warnings remain completely crisp and highly legible at incredibly small font sizes.</li>
                                <li><strong>Sophisticated Tactile Finishes:</strong> Effectively differentiating your premium brand by brilliantly applying spot UV gloss, intricately raised embossing, or dazzling metallic foil stamping directly over brand logos, strongly elevating the clinical perceived value on crowded pharmacy displays.</li>
                                <li><strong>Medical-Grade Low-Migration Inks:</strong> Actively utilizing exclusively environmentally friendly, soy-based inks that thoroughly eliminate all volatile organic compounds (VOCs), guaranteeing absolutely zero chemical taint or foul odors reach the medical product inside.</li>
                            </ul>

                            <h3>Certified Wholesale Scaling &amp; Rapid Production Logistics</h3>
                            <p>
                                Thriving successfully in the global personal care industry strictly requires immense logistical agility and absolute production consistency. We swiftly manufacture massive volumes of structurally identical, flawlessly printed custom condom boxes with complete accuracy. Extending entirely free design consultations, highly competitive bulk wholesale pricing, and ultra-fast manufacturing turnarounds, CustomPackMakers steadfastly ensures your critical prophylactic products securely dominate retail markets effortlessly.
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
                                        Every custom condom box we produce utilizes premium medical-grade SBS cardstock alongside specialized barrier laminations. Our strict quality control processes guarantee each unit meets the stringent durability standards required for contraceptive packaging, protecting your sensitive latex products from environmental degradation.
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
                                        Personal health packaging demands absolute precision and strict regulatory adherence. We perfectly engineer precision-cut structural layouts that strictly comply with international FDA guidelines. Your brand's critical personal care packaging requirements are instantly executed flawlessly, ensuring perfect product safety entirely.
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
                                        Modern personal care consumers increasingly expect organic sustainability alongside guaranteed product safety. Our fully recyclable, eco-friendly custom condom boxes deliver outstanding protective performance while significantly reducing your brand's footprint, perfectly meeting the conscious values of contemporary wellness shoppers globally.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT: Square image with floating badges */}
                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img
                                    src={condomBoxesimg6}
                                    alt="Premium Custom Personal Care Packaging"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-7">
                                    <p className="text-white font-bold text-lg leading-snug mb-1">
                                        Trusted by Wellness Brands
                                    </p>
                                    <p className="text-white/75 text-sm">Delivering robust clinical grade protection</p>
                                </div>
                            </div>

                            <div className="absolute top-4 -right-2 lg:-right-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80 backdrop-blur-sm">
                                <p className="text-2xl font-bold text-primary leading-none">FDA</p>
                                <p className="text-xs text-slate-400 mt-1 font-medium">Compliance Standards</p>
                            </div>

                            <div className="absolute bottom-4 -left-2 lg:-left-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80 backdrop-blur-sm">
                                <p className="text-2xl font-bold text-emerald-500 leading-none">100%</p>
                                <p className="text-xs text-slate-400 mt-1 font-medium">Tamper Evident Focus</p>
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
                                    src={condomBoxesimg7}
                                    alt="Differentiate Your Personal Care Products"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                            </div>
                            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-60" />
                            <div className="absolute -z-10 -top-8 -right-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl opacity-60" />
                        </div>

                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                                Differentiate Your <span className="text-primary">Personal Care Range</span> From Others
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                At CustomPackMakers, we truly understand that superior contraceptive packaging inherently acts as the absolute baseline for modern consumer trust and product integrity. To aggressively ensure your esteemed personal care brand fiercely commands maximum authority within saturated pharmacy environments, we actively deploy striking offset printing fully integrated with tamper-evident structural precision. Our dedicated manufacturing experts actively help meticulously optimize tight box profiles, perfectly preventing dangerous internal friction against vulnerable foil wrappers. By profoundly integrating captivating tactile finishes, highly prominent clinical FDA typography, and robust friction-reducing interior linings, we fundamentally help you engineer remarkably safe packaging that flawlessly reinforces medical reliability.
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
                                        question: "Do your condom boxes protect against foil puncture or friction?",
                                        answer: "Yes, we utilize high-density rigid chipboard and strategically engineered smooth interior walls to entirely eliminate internal friction. This guarantees that delicate prophylactic foil wrappers won't suffer from abrasive punctures during rigorous shipping and daily retail handling."
                                    },
                                    {
                                        id: "item-2",
                                        question: "Are the boxes compliant with FDA packaging standards for contraceptives?",
                                        answer: "Absolutely. We print using high-resolution offset technology to guarantee your FDA-required usage instructions, manufacturing lot numbers, and strict expiration dates are perfectly legible, ensuring your brand meets all necessary international regulatory compliance standards securely."
                                    },
                                    {
                                        id: "item-3",
                                        question: "Can you incorporate tamper-evident seals for unquestionable product safety?",
                                        answer: "Yes, securing product integrity is paramount for intimate health items. We offer diverse tamper-evident features, including custom destructive labeling and perforated tear strips, empowering consumers to immediately verify if a package has been previously compromised."
                                    },
                                    {
                                        id: "item-4",
                                        question: "Do you provide moisture-resistant coatings for environmental protection?",
                                        answer: "Yes, condoms degrade rapidly under high humidity. We utilize specialized medical-grade barrier materials and moisture-resistant soft-touch laminations to prevent environmental humidity from penetrating the packaging, ensuring your personal care products remain completely safe over time."
                                    },
                                    {
                                        id: "item-5",
                                        question: "What printing options do you offer for maximum brand discretion?",
                                        answer: "We offer extensive customization ranging from high-profile vibrant branding to minimalist, elegant, and discreet apothecary aesthetics. We utilize premium low-migration inks and custom foil stamping to establish deep consumer trust uniquely tailored to your specific market positioning."
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
                                alt="Custom Condom Boxes FAQ"
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

export default CondomBoxes;
