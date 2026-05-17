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
import heroImage from "@/assets/material/cardboard-boxes/Cardboard Cigar Boxes.webp";

// FAQ image
import FAQimage from "@/assets/FAQ-image.webp";

const CardboardCigarBoxes = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    // Product images for gallery
    const productImages = [
        { src: heroImage, alt: "Cardboard Cigar Boxes - Main View" },
        { src: heroImage, alt: "Cardboard Cigar Boxes - Side Angle" },
        { src: heroImage, alt: "Cardboard Cigar Boxes - Open Box View" },
        { src: heroImage, alt: "Cardboard Cigar Boxes - Detail Shot" },
        { src: heroImage, alt: "Cardboard Cigar Boxes - Lifestyle Shot" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Cardboard Cigar Boxes | Premium Tobacco Packaging</title>
                <meta name="description" content="Order custom cardboard cigar boxes wholesale. Premium rigid and folding cartons for cigars with custom printing, foil stamping, and luxurious finishes." />
                <meta name="keywords" content="cardboard cigar boxes, custom cigar packaging, rigid cigar boxes, wholesale cigar boxes, premium tobacco packaging" />
                <meta property="og:title" content="Custom Cardboard Cigar Boxes | Premium Tobacco Packaging" />
                <meta property="og:description" content="Premium custom cardboard cigar boxes. Rigid construction, metallic foil stamping, custom inserts & wholesale pricing. Get a free quote." />
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
                                <BreadcrumbPage>Cardboard Cigar Boxes</BreadcrumbPage>
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
                                <span className="text-primary">Cardboard</span> Cigar Boxes
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Wholesale custom cardboard cigar packaging engineered for uncompromising structural integrity, moisture protection, and luxurious brand presentation.
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
                                    alt="Cardboard Cigar Boxes Hero"
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
                        Luxurious Packaging for Premium Tobacco Products
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            Our <strong className="text-foreground">custom cardboard cigar boxes</strong> are precision-engineered for boutique tobacconists and premium cigar manufacturers who require packaging that reflects the luxury of the product inside. While traditional wood humidors have their place, modern high-end rigid cardboard boxes offer vastly superior printing capabilities, lower shipping weights, and highly precise structural tolerances. Constructed from heavy-duty 2mm or 3mm rigid chipboard wrapped in premium specialty papers, these boxes provide the robust protection required to prevent crushing while delivering a sophisticated tactile experience.
                        </p>
                        <p>
                            From classic two-piece lift-off designs and magnetic closure boxes for multi-stick assortments to sleek, individual tuck-end sleeves for retail display, our <strong className="text-foreground">cigar packaging</strong> solutions are fully customizable. We offer extensive finishing options essential to the tobacco industry, including ornate metallic foil stamping, deep blind embossing, and soft-touch laminations. With custom die-cut inserts to cradle each cigar perfectly, your <strong className="text-foreground">tobacco packaging</strong> becomes a hallmark of quality. Order wholesale with our expert design concierge service.
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
                                                <Input id="length" type="number" placeholder="8" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label>
                                                <Input id="width" type="number" placeholder="6" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">D (in)</Label>
                                                <Input id="depth" type="number" placeholder="2" className="h-9 bg-white" />
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
                        The Craftsmanship of Premium Cigar Packaging
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
                                In the world of premium tobacco, the packaging is the prologue to the smoking experience. A cigar is an artisanal, fragile, and deeply cultural product. Consumers expect the box housing it to exhibit the same level of craftsmanship as the rolling process itself. If the packaging feels flimsy, the perceived value of the cigar immediately plummets.
                                Custom cardboard cigar boxes—specifically rigid setup boxes—provide the perfect intersection of structural defense, atmospheric control, and high-end aesthetic customization that traditional wooden boxes struggle to match at scale.
                            </p>
                            <p>
                                At CustomPackMakers, we engineer packaging for some of the most respected boutique cigar brands. We understand the specific demands of tobacco packaging: the box must not crush under pressure, it must prevent the wrapper leaves from suffering friction damage, and it must command attention in the dimly lit environment of a retail humidor. By utilizing heavyweight substrates and master-level finishing techniques, we ensure your brand commands the prestige it deserves.
                            </p>

                            <h3>Structural Rigidity and Protection</h3>
                            <p>
                                Cigars are remarkably fragile; a crushed wrapper ruins the smoking experience. Therefore, the structural integrity of the box is non-negotiable.
                            </p>
                            <ul>
                                <li><strong>Heavyweight Rigid Chipboard:</strong> For multi-cigar boxes (5-count, 10-count, or 20-count), we exclusively use 2mm to 3mm thick rigid chipboard. This material provides immense crush resistance, mimicking the structural feel of a wooden box while allowing for infinitely more versatile exterior printing.</li>
                                <li><strong>Magnetic Closures:</strong> To ensure the box remains tightly sealed, we integrate hidden neodymium magnets into the front flap. This provides a satisfying, premium "snap" when the customer closes the box, sealing the cigars securely inside.</li>
                                <li><strong>Single-Stick Folding Cartons:</strong> For individual cigars sold at checkout or in subscription boxes, we utilize premium 24pt SBS paperboard. These tuck-end boxes are engineered with exact tolerances to slide over the cigar snugly, preventing it from rattling during transit.</li>
                            </ul>

                            <h3>Interior Organization and Friction Prevention</h3>
                            <p>
                                Inside the box, the cigars must remain perfectly organized and immobilized. If they roll against each other, the delicate outer wrapper can tear or flake.
                            </p>
                            <ul>
                                <li><strong>Custom Die-Cut Inserts:</strong> We engineer precision die-cut cardboard or EVA foam inserts. Each cigar rests in its own individual cavity, completely isolating it from its neighbors and preventing any friction damage during shipping.</li>
                                <li><strong>Platform Trays with Finger Wells:</strong> For premium presentations, we design raised platform trays with ergonomic finger wells, allowing the customer to easily lift the cigar out without squeezing or damaging the wrapper.</li>
                                <li><strong>V-Cut and Scored Partitions:</strong> We can create elegant, scored cardboard partitions that slide into the box, separating the cigars cleanly while maintaining a traditional aesthetic.</li>
                            </ul>

                            <h3>The Aesthetics of the Humidor: Printing and Finishing</h3>
                            <p>
                                Cigar packaging relies heavily on ornate, traditional design cues blended with modern luxury finishing. The retail humidor is highly competitive; your box must catch the eye immediately.
                            </p>
                            <ul>
                                <li><strong>Metallic Foil Stamping:</strong> This is the hallmark of the cigar industry. We apply brilliant gold, silver, or copper foils to your logo, crest, and border filigree, giving the box an opulent, undeniable luxury presence.</li>
                                <li><strong>Deep Blind Embossing:</strong> We can press your brand's crest or logo deeply into the rigid board. This tactile element invites the customer to run their fingers over the box, creating a physical connection to the brand.</li>
                                <li><strong>Specialty Wrapping Papers:</strong> We don't just print on the board; we wrap the rigid chipboard in premium specialty papers. We offer leather-textured papers, soft-touch laminates, and wood-grain finishes that provide a sensory experience before the box is even opened.</li>
                            </ul>

                            <h3>Wholesale Production for the Tobacco Industry</h3>
                            <p>
                                We understand the regulatory and production demands of the tobacco industry. Our printing presses are calibrated to reproduce intricate crests, micro-text warnings, and barcode data with absolute clarity and compliance.
                            </p>
                            <p>
                                Whether you are launching a limited-run anniversary vitola or outfitting your core line for national distribution, our manufacturing processes scale flawlessly. Our rigid boxes are shipped fully assembled and ready for immediate fulfillment, while our single-stick cartons ship flat to maximize warehouse efficiency. Partner with CustomPackMakers to create cardboard cigar boxes that honor the craftsmanship of your tobacco and elevate your brand's legacy.
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
                            Why Tobacco Brands Choose <span className="text-primary">CustomPackMakers</span>
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            We combine heavyweight rigid construction, opulent finishing techniques, and precision internal engineering to deliver packaging worthy of premium cigars.
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
                                        Heavyweight Rigid Construction
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Cigars cannot be crushed. We utilize premium 2mm to 3mm rigid chipboard for our multi-stick <strong>cigar boxes</strong>, providing wood-like structural integrity that protects your delicate tobacco wrappers from any impact during transit.
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
                                        Opulent Foil Finishing
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        The cigar industry demands luxury. We specialize in highly detailed metallic foil stamping and deep embossing, allowing your brand's crest and filigree to shine brilliantly on the humidor shelf.
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
                                        Frictionless Inserts
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        We engineer custom CAD die-cut inserts and partition grids to perfectly cradle each individual cigar. This ensures the sticks cannot roll or collide, preventing any damage to the delicate wrapper leaves.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img
                                    src={heroImage}
                                    alt="Premium Custom Cigar Box Packaging"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-7">
                                    <p className="text-white font-bold text-lg leading-snug mb-1">
                                        Trusted by Tobacconists
                                    </p>
                                    <p className="text-white/75 text-sm">Delivering premium tobacco packaging across North America</p>
                                </div>
                            </div>

                            <div className="absolute top-4 -right-2 lg:-right-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80 backdrop-blur-sm">
                                <p className="text-2xl font-bold text-primary leading-none">0%</p>
                                <p className="text-xs text-slate-400 mt-1 font-medium">Wrapper Damage Goal</p>
                            </div>

                            <div className="absolute bottom-4 -left-2 lg:-left-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80 backdrop-blur-sm">
                                <p className="text-2xl font-bold text-emerald-500 leading-none">High</p>
                                <p className="text-xs text-slate-400 mt-1 font-medium">Crush Resistance</p>
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
                                Differentiate Your <span className="text-primary">Cigar Brand</span> From Others
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                At CustomPackMakers, we know that in the premium tobacco market, the box must feel as luxurious as the smoke itself. To ensure your brand commands prestige, we utilize heavy-duty rigid chipboard wrapped in specialized textured papers that mimic leather or rare woods. Our design team works closely with you to integrate high-end features like concealed magnetic closures, bespoke interior die-cut organization, and ornate foil-stamped crests. By elevating the tactile and visual experience of the packaging, we help you create a world-class presentation that stands out in the humidor and justifies your premium price point.
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
                                        question: "Are Cardboard Cigar Boxes Better Than Wooden Boxes?",
                                        answer: "Rigid cardboard boxes offer significant advantages: they are vastly more customizable with offset printing and foil stamping, they are lighter (saving freight costs), and they offer more precise, friction-free internal inserts compared to raw wood."
                                    },
                                    {
                                        id: "item-2",
                                        question: "How Do You Stop The Cigars From Rolling Inside The Box?",
                                        answer: "We engineer precision die-cut cardboard or EVA foam inserts. Each cigar rests in its own snug cavity, completely immobilizing it and preventing any wrapper damage from friction during global transit."
                                    },
                                    {
                                        id: "item-3",
                                        question: "Can You Add Magnetic Closures?",
                                        answer: "Yes, magnetic closures are highly popular for luxury cigar boxes. We embed strong neodymium magnets into the rigid board before wrapping it in paper, creating a seamless, invisible closure that snaps shut securely."
                                    },
                                    {
                                        id: "item-4",
                                        question: "Do You Make Single-Cigar Sleeves?",
                                        answer: "Absolutely. For single-stick retail sales or subscription boxes, we manufacture premium SBS paperboard folding cartons engineered to the exact diameter and length of your vitola."
                                    },
                                    {
                                        id: "item-5",
                                        question: "What Finishing Options Do You Offer?",
                                        answer: "We offer the essential luxury finishes for the tobacco industry, including metallic gold and silver foil stamping, deep blind embossing for crests, soft-touch matte laminations, and spot UV gloss accents."
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
                                alt="Cardboard Cigar Boxes FAQ"
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

export default CardboardCigarBoxes;
