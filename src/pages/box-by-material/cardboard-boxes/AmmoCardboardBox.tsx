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
import { RelatedProductCardboardBoxes } from "@/components/RelatedProductCardboardBoxes";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";

// Specific product images
import heroImage from "@/assets/cardboard-boxes/ammo-cardboard-boxes.webp";

// FAQ image
import FAQimage from "@/assets/FAQ-image.webp";

const AmmoCardboardBox = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    // Product images for gallery
    const productImages = [
        { src: heroImage, alt: "Ammo Cardboard Box - Main View" },
        { src: heroImage, alt: "Ammo Cardboard Box - Side Angle" },
        { src: heroImage, alt: "Ammo Cardboard Box - Open Box View" },
        { src: heroImage, alt: "Ammo Cardboard Box - Detail Shot" },
        { src: heroImage, alt: "Ammo Cardboard Box - Lifestyle Shot" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Ammo Cardboard Boxes | Heavy Duty Ammunition Packaging</title>
                <meta name="description" content="Order custom ammo cardboard boxes wholesale. Premium heavy-duty packaging for ammunition, sporting goods, and tactical gear. Free shipping." />
                <meta name="keywords" content="ammo cardboard boxes, ammunition packaging, custom ammo boxes, heavy duty cardboard boxes, wholesale ammo packaging" />
                <meta property="og:title" content="Custom Ammo Cardboard Boxes | Heavy Duty Ammunition Packaging" />
                <meta property="og:description" content="Premium custom cardboard ammo boxes. High burst strength, durable construction, custom inserts & full-color printing. Get a free quote." />
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
                                    <Link to="/box-by-material">Box By Material</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link to="/box-by-material/cardboard-boxes">Cardboard Boxes</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Ammo Cardboard Box</BreadcrumbPage>
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
                                <span className="text-primary">Ammo</span> Cardboard Box
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Wholesale custom heavy-duty cardboard ammunition packaging engineered for uncompromising strength, weight-bearing performance, and tactical brand presentation.
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
                                    src={heroImage}
                                    alt="Ammo Cardboard Box Hero"
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
                        Heavy-Duty Tactical Packaging Built to Handle the Weight
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            Our <strong className="text-foreground">ammo cardboard boxes</strong> are precision-engineered for B2B sporting goods manufacturers, tactical gear brands, and munitions suppliers who require packaging that won't fail under pressure. Ammunition is incredibly dense and heavy; standard folding cartons will blow out at the bottom or tear at the seams. We construct our ammo boxes using specialized high-burst-strength corrugated board and extra-thick SBS cardstock specifically rated for heavy-weight applications. Whether you're packaging 9mm rounds, shotgun shells, or tactical accessories, our <strong className="text-foreground">custom heavy-duty packaging</strong> is designed to perform safely.
                        </p>
                        <p>
                            From classic tuck-end designs with reinforced bottoms to rigid two-piece setup boxes, our <strong className="text-foreground">ammunition packaging</strong> solutions accommodate every caliber and configuration. We offer custom die-cut cardboard or foam inserts to organize rounds securely, preventing rattle and friction damage. Despite their rugged construction, these boxes offer a premium canvas for your brand, allowing for high-definition CMYK printing, matte tactical finishes, and striking metallic foils. Order wholesale with our industry-leading dedicated structural engineering support.
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
                            {/* Large Main Image - 4:3 aspect ratio, object-cover */}
                            <div className="relative w-full max-w-lg mx-auto overflow-hidden rounded-lg shadow-sm border border-border bg-white" style={{ aspectRatio: '4/3' }}>
                                <img
                                    src={productImages[selectedImage].src}
                                    alt={productImages[selectedImage].alt}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Thumbnail Row — 5 images, aligned to main image width */}
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

                        {/* RIGHT SIDE: Sticky Quote Form - Compact & Styled */}
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
                                                <Input id="length" type="number" placeholder="4" className="h-9 bg-white" />
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
                        The Technical Demands of Ammunition Packaging
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
                                Packaging ammunition presents a unique set of engineering challenges that standard retail packaging simply cannot address. Ammunition is exceptionally dense, creating significant weight within a very small footprint.
                                A standard 50-round box of 9mm or .45 ACP exerts massive outward and downward pressure on the walls and seams of the cardboard. If the structural integrity of the box fails during transit or on the retail shelf, the result is spilled rounds, damaged goods, and a compromised brand reputation.
                            </p>
                            <p>
                                At CustomPackMakers, we understand that tactical packaging must prioritize absolute reliability. Our custom ammo cardboard boxes are engineered from the ground up to handle extreme weight loads without tearing, bulging, or suffering from "bottom blow-out." By investing in properly specified, high-burst-strength materials, you ensure that your product reaches the customer safely while presenting a rugged, professional brand image that tactical consumers trust.
                            </p>

                            <h3>High-Burst-Strength Materials & Engineering</h3>
                            <p>
                                The foundation of our ammunition packaging is the utilization of specialized, heavyweight substrates that exceed standard industry ratings:
                            </p>
                            <ul>
                                <li><strong>24pt - 32pt SBS or Kraft Board:</strong> For standard 20-round or 50-round pistol and rifle boxes, we utilize ultra-thick Solid Bleached Sulfate (SBS) or high-density Kraft board. This thickness prevents the dense weight of the brass and lead from bowing the sides of the box.</li>
                                <li><strong>B-Flute & E-Flute Corrugated:</strong> For bulk ammo cans, shotgun shell sleeves, or heavy master shippers, we employ structural corrugated board. The fluting provides necessary rigidity and shock absorption, protecting the primers and casings from impact damage.</li>
                                <li><strong>Reinforced Auto-Bottoms & 1-2-3 Locks:</strong> The bottom of an ammo box is its most critical failure point. We utilize structural designs like auto-locking bottoms or reinforced 1-2-3 snap locks that distribute weight across multiple layers of interlocking cardboard, making a bottom blowout virtually impossible under normal use.</li>
                            </ul>
                            <p>
                                Every box design undergoes rigorous drop testing to ensure the seams hold and the structure maintains its integrity even when subjected to rough handling.
                            </p>

                            <h3>Interior Organization and Protection</h3>
                            <p>
                                Securing the rounds inside the box is just as important as the exterior shell. Rounds left to rattle loosely can suffer from bullet setback, primer damage, or casing dents:
                            </p>
                            <ul>
                                <li><strong>Custom Cardboard Grid Inserts:</strong> We can engineer precise, interlocking cardboard grids to hold 20, 50, or 100 rounds individually. This prevents rattling, protects the projectiles, and presents the ammunition in an organized, professional manner.</li>
                                <li><strong>Die-Cut Styrofoam or Plastic Trays:</strong> While we specialize in cardboard, our outer boxes are designed to perfectly sleeve over industry-standard styrofoam or plastic ammo trays if you already utilize them in your production line.</li>
                                <li><strong>Tuck-Tab Security:</strong> We design the top closure flaps with tight friction-fit tuck tabs to ensure the box remains securely closed in a range bag or ammo can without requiring excessive tape.</li>
                            </ul>

                            <h3>Tactical Aesthetics & Compliance Printing</h3>
                            <p>
                                While strength is paramount, the ammunition market is also highly competitive visually. Furthermore, ammo packaging requires strict adherence to regulatory printing:
                            </p>
                            <ul>
                                <li><strong>High-Resolution CMYK Printing:</strong> Our advanced presses allow for crisp, high-definition printing of camouflage patterns, tactical branding, and striking metallic colors that stand out on the shelf.</li>
                                <li><strong>Regulatory & Warning Labels:</strong> Ammunition boxes must display specific warnings, caliber sizes, lot numbers, and barcodes clearly. Our precision printing ensures all small regulatory text remains razor-sharp and easily readable.</li>
                                <li><strong>Tactical Matte Finishes:</strong> A high-gloss box often feels cheap in the tactical market. We highly recommend and apply soft-touch or standard matte laminations. This creates a rugged, non-reflective aesthetic while protecting the print from scuffs, gun oil, and moisture.</li>
                            </ul>

                            <h3>Wholesale Production & Scalability</h3>
                            <p>
                                We understand that ammunition manufacturing operates at high volume. Your packaging supply must be reliable, consistent, and capable of keeping pace with your production lines.
                            </p>
                            <p>
                                Whether you are a boutique manufacturer producing specialty hunting rounds or a large-scale contractor needing millions of 5.56 NATO boxes, our high-speed die-cutting and folding-gluing lines are built for scale. We ship our ammo boxes flat to optimize your warehouse space, and our precision scoring ensures they fold into shape instantly on your automated or manual packing lines without frustrating jams or misalignments.
                            </p>
                            <p>
                                Partnering with CustomPackMakers means working with structural engineers who understand the specific demands of heavy-weight tactical packaging. Let us help you design custom ammo cardboard boxes that protect your product, comply with regulations, and elevate your brand's authority in the sporting goods market.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* RELATED PRODUCTS CAROUSEL */}
            <RelatedProductCardboardBoxes />

            {/* WHY CHOOSE US SECTION */}
            <section className="py-12 relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #fafafa 0%, #f4f6ff 60%, #f0fdf8 100%)' }}>
                <div className="absolute top-0 left-0 w-80 h-80 bg-primary/4 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-300/8 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl pointer-events-none" />

                <div className="container mx-auto px-[30px] relative z-10">
                    <div className="text-center mb-14">
                        <span className="inline-block text-xs font-semibold tracking-widest text-primary uppercase mb-3 bg-primary/10 px-4 py-1.5 rounded-full">Our Promise</span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
                            Why Tactical Brands Choose <span className="text-primary">CustomPackMakers</span>
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            We combine extreme structural engineering, high-burst materials, and rugged finishing to deliver packaging that handles the weight.
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
                                        No-Blowout Engineering
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        We design our <strong>ammo boxes</strong> with reinforced, interlocking auto-bottoms or heavy-duty snap locks. Combined with 24pt+ thick board, we ensure the bottom of the box will never give way under the dense weight of ammunition.
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
                                        Precision Regulatory Printing
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Ammunition requires strict regulatory text, barcodes, and caliber warnings. Our high-fidelity printing presses ensure that even the smallest point text is razor-sharp, highly legible, and fully compliant with industry standards.
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
                                        Rugged Finishes
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        We apply premium matte or soft-touch laminations to our <strong>tactical packaging</strong>. This not only creates the highly desired non-reflective tactical aesthetic but also protects the box from gun oil, moisture, and scuffs in the range bag.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img
                                    src={heroImage}
                                    alt="Premium Custom Ammo Box Packaging"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-7">
                                    <p className="text-white font-bold text-lg leading-snug mb-1">
                                        Trusted by Manufacturers
                                    </p>
                                    <p className="text-white/75 text-sm">Delivering tactical packaging across North America</p>
                                </div>
                            </div>

                            <div className="absolute top-4 -right-2 lg:-right-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80 backdrop-blur-sm">
                                <p className="text-2xl font-bold text-primary leading-none">0%</p>
                                <p className="text-xs text-slate-400 mt-1 font-medium">Bottom Blowouts</p>
                            </div>

                            <div className="absolute bottom-4 -left-2 lg:-left-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80 backdrop-blur-sm">
                                <p className="text-2xl font-bold text-emerald-500 leading-none">High</p>
                                <p className="text-xs text-slate-400 mt-1 font-medium">Burst Strength</p>
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
                                    alt="Differentiate Your Packaging"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                            </div>
                            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-60" />
                            <div className="absolute -z-10 -top-8 -right-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl opacity-60" />
                        </div>

                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                                Differentiate Your <span className="text-primary">Brand</span> From Others
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                At CustomPackMakers, we know that in the tactical market, packaging failure is unacceptable. To ensure your brand commands respect, we utilize heavy-weight substrates combined with rugged structural engineering. Our design team works closely with you to ensure the box perfectly houses your specific caliber or accessory. By integrating distinctive features like high-contrast metallic foils, deep matte laminations, and custom organizational inserts, we help you create a world-class, professional presentation that stands out on the shelf while offering uncompromising protection.
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
                                        question: "How Do You Prevent The Bottom From Tearing Under The Weight Of Ammo?",
                                        answer: "We utilize two critical methods: First, we use 24pt or thicker high-burst-strength cardstock. Second, we engineer the box with a reinforced interlocking auto-bottom or 1-2-3 snap lock, ensuring multiple layers of cardboard distribute the heavy payload."
                                    },
                                    {
                                        id: "item-2",
                                        question: "Do You Make Custom Grid Inserts For The Rounds?",
                                        answer: "Yes. While many clients use our boxes to sleeve over their existing styrofoam or plastic trays, we can also engineer and manufacture custom die-cut cardboard partition grids to hold your 20, 50, or 100 rounds securely."
                                    },
                                    {
                                        id: "item-3",
                                        question: "What Finish Is Best For Tactical Ammo Boxes?",
                                        answer: "We highly recommend a matte lamination. It provides a rugged, non-reflective tactical aesthetic that consumers in this market prefer, while simultaneously protecting the box from moisture, scuffs, and gun oil."
                                    },
                                    {
                                        id: "item-4",
                                        question: "Can You Print Barcodes And Regulatory Warnings Clearly?",
                                        answer: "Absolutely. Our advanced offset and digital presses ensure that high-contrast elements like UPC barcodes, lot numbers, and small-point regulatory warnings are printed with razor-sharp clarity for easy scanning and compliance."
                                    },
                                    {
                                        id: "item-5",
                                        question: "Do You Offer Bulk Master Shippers For Ammo?",
                                        answer: "Yes, in addition to the primary retail folding cartons, we manufacture heavy-duty B-flute and C-flute corrugated master shipping boxes designed specifically to transport bulk ammunition safely on pallets."
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
                                alt="Ammo Cardboard Boxes FAQ"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
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

export default AmmoCardboardBox;
