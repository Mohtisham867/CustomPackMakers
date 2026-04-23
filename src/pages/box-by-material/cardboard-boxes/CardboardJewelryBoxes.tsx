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
import heroImage from "@/assets/cardboard-boxes/cardboard-jewelry-boxes.webp";

// FAQ image
import FAQimage from "@/assets/FAQ-image.png";

const CardboardJewelryBoxes = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    // Product images for gallery
    const productImages = [
        { src: heroImage, alt: "Cardboard Jewelry Boxes - Main View" },
        { src: heroImage, alt: "Cardboard Jewelry Boxes - Side Angle" },
        { src: heroImage, alt: "Cardboard Jewelry Boxes - Open Box View" },
        { src: heroImage, alt: "Cardboard Jewelry Boxes - Detail Shot" },
        { src: heroImage, alt: "Cardboard Jewelry Boxes - Lifestyle Shot" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Cardboard Jewelry Boxes | Luxury Ring & Necklace Packaging</title>
                <meta name="description" content="Order custom cardboard jewelry boxes wholesale. Premium rigid packaging with velvet inserts, foil stamping, fast turnaround, and free shipping." />
                <meta name="keywords" content="cardboard jewelry boxes, custom ring boxes, luxury necklace packaging, wholesale jewelry boxes, rigid jewelry packaging" />
                <meta property="og:title" content="Custom Cardboard Jewelry Boxes | Luxury Ring & Necklace Packaging" />
                <meta property="og:description" content="Premium custom cardboard jewelry packaging. Rigid construction, velvet inserts, gold foil stamping & exquisite finishing. Get a free quote." />
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
                                <BreadcrumbPage>Cardboard Jewelry Boxes</BreadcrumbPage>
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
                                <span className="text-primary">Cardboard</span> Jewelry Boxes
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Wholesale custom luxury cardboard jewelry packaging engineered for exquisite presentation, secure protection, and premium brand positioning.
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
                                    alt="Cardboard Jewelry Boxes Hero"
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
                        Exquisite Jewelry Packaging Built for High-End Brands
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            Our <strong className="text-foreground">cardboard jewelry boxes</strong> are meticulously engineered for B2B fine jewelers, boutique designers, and luxury accessory brands that demand flawless presentation. Constructed from heavyweight rigid chipboard wrapped in premium specialty papers, each box delivers a substantial, luxurious feel that reflects the value of the precious items inside. Whether you're packaging diamond engagement rings, delicate necklaces, or luxury watches, our <strong className="text-foreground">custom branded jewelry packaging</strong> is designed to perform at the highest level of elegance.
                        </p>
                        <p>
                            From classic two-piece lift-off lids and magnetic clamshells to sleek drawer boxes, our <strong className="text-foreground">luxury jewelry packaging</strong> solutions accommodate every piece in your collection. Each box is fitted with custom-engineered velvet, suede, or premium foam inserts featuring precise die-cuts and ring slots to cradle your pieces securely. With metallic hot foil stamping, deep blind embossing, and soft-touch laminations, your <strong className="text-foreground">custom ring boxes</strong> become a cherished keepsake. Order wholesale with our industry-leading dedicated design concierge service.
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
                                                <Input id="length" type="number" placeholder="3" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label>
                                                <Input id="width" type="number" placeholder="3" className="h-9 bg-white" />
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
                        The Vital Role of Packaging in the Fine Jewelry Industry
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
                                In the world of fine jewelry, the packaging is inherently intertwined with the product itself. The presentation of a diamond ring, a luxury timepiece, or a delicate necklace is an emotionally charged event.
                                For premium jewelry brands, custom cardboard jewelry boxes represent the stage upon which these precious items are revealed. The box must communicate prestige, security,
                                and timeless elegance before the lid is even lifted. A flimsy or poorly designed box immediately degrades the perceived value of the jewelry inside, while a heavy, beautifully finished box amplifies it.
                            </p>
                            <p>
                                Our custom cardboard jewelry boxes are designed with a profound understanding of this dynamic. Every element, from the resistance of the hinge to the soft texture of the interior velvet, is carefully engineered to create an unboxing ceremony that lives up to the emotion of the moment. Whether you are outfitting a global chain of luxury boutiques or packaging bespoke artisan pieces, investing
                                in world-class jewelry packaging is non-negotiable for establishing trust and commanding premium price points.
                            </p>

                            <h3>Unmatched Rigid Material Quality & Structural Integrity</h3>
                            <p>
                                True luxury jewelry packaging cannot be achieved with standard folding cartons. The foundation of our exceptional jewelry boxes begins with dense, heavyweight substrates that provide a solid, unbending structure:
                            </p>
                            <ul>
                                <li><strong>Ultra-Heavy Rigid Chipboard:</strong> Our standard for luxury jewelry packaging, dense rigid chipboard (ranging from 2mm to 3mm thick) delivers an unparalleled heavy, premium feel in the hand. This material creates a solid, vault-like presentation that communicates security and high value.</li>
                                <li><strong>Premium Wrapped Specialty Papers:</strong> The rigid core is meticulously wrapped in high-end specialty papers. We offer an extensive library of textures including smooth matte, soft-touch velvet, brushed metallic, pearlescent finishes, and faux leatherette to achieve your specific aesthetic.</li>
                                <li><strong>Flawless V-Groove Corners:</strong> For the sharpest, most modern look, we utilize V-groove cutting technology on the rigid board, ensuring the corners of the box are perfectly crisp 90-degree angles with zero rounding or bulkiness.</li>
                            </ul>
                            <p>
                                This rigid construction ensures the box never bends, crushes, or warps, providing a permanent home for the jewelry piece that customers will retain for years to come.
                            </p>

                            <h3>Custom Interior Engineering: The Perfect Display</h3>
                            <p>
                                In jewelry packaging, the interior insert is the most functionally critical component. It must hold the piece securely while displaying it at the perfect angle to catch the light. Our advanced manufacturing capabilities allow for entirely bespoke interior solutions:
                            </p>
                            <ul>
                                <li><strong>Velvet-Flocked Custom Inserts:</strong> We utilize premium high-density EVA foam flocked with luxurious velvet or suede. This provides a soft, non-abrasive surface that protects delicate metals and stones from scratches.</li>
                                <li><strong>Precision Die-Cut Slots:</strong> Every insert is engineered for the specific piece. We create precise H-cuts for rings, delicate slits with hidden tabs for necklaces, and molded cavities for watches or bracelets, ensuring the jewelry sits perfectly without shifting.</li>
                                <li><strong>Multi-Piece Configurations:</strong> We can design complex, multi-tiered inserts for bridal sets (engagement ring + wedding band) or complete jewelry suites (necklace, earrings, and ring) within a single beautifully proportioned box.</li>
                                <li><strong>Tarnish-Resistant Materials:</strong> Upon request, we can utilize specialized tarnish-resistant fabrics and papers to ensure silver and delicate alloys maintain their brilliance during long-term storage within the box.</li>
                            </ul>

                            <h3>Advanced Luxury Finishing Techniques</h3>
                            <p>
                                Transform your jewelry boxes into iconic brand symbols with our state-of-the-art finishing capabilities.
                                In luxury jewelry, branding is often subtle but flawless in execution:
                            </p>
                            <ul>
                                <li><strong>Hot Foil Stamping:</strong> The hallmark of fine jewelry packaging. Add true opulence with crisp metallic foil accents in gold, rose gold, platinum-silver, or copper. Foil stamping provides a brilliant, reflective logo that standard ink cannot achieve.</li>
                                <li><strong>Blind Embossing & Debossing:</strong> Create sophisticated, tactile branding with deep blind embossing or debossing into textured wrapping papers. This technique adds dimensional luxury that invites the customer to run their fingers over the logo.</li>
                                <li><strong>Soft-Touch Lamination:</strong> Apply a velvety soft-touch finish to the exterior that feels incredibly premium to the touch, contrasting beautifully with a high-gloss metallic foil logo.</li>
                                <li><strong>Interior Lid Printing:</strong> Don't ignore the inside of the lid. We can foil stamp your logo or a special message on the interior silk lining or paper, providing a second moment of brand reinforcement when the box is opened.</li>
                            </ul>

                            <h3>Wholesale Pricing & Dedicated Design Concierge</h3>
                            <p>
                                Creating luxury jewelry packaging requires exacting precision and a collaborative partnership. Whether you are outfitting a single boutique requiring a small batch of 500 bespoke boxes or a global brand scaling up to
                                tens of thousands of units, our artisan production lines scale flawlessly to meet your needs without compromising on quality.
                            </p>
                            <p>
                                Partnering with CustomPackMakers means gaining a dedicated packaging concierge team. From initial insert engineering and prototyping
                                through final mass production and rigorous quality assurance, we provide expert guidance.
                                Let us help you create custom cardboard jewelry boxes that elevate your pieces, amplify the emotion of the unboxing experience, and solidify your position as a premium luxury jeweler.
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
                            Why Luxury Jewelers Choose <span className="text-primary">CustomPackMakers</span>
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            We combine artisan craftsmanship, dense rigid materials, and flawless finishing to deliver packaging worthy of your finest pieces.
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
                                        Vault-Like Rigid Quality
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        We utilize ultra-dense rigid chipboard, not flimsy folding carton. Every <strong>custom jewelry box</strong> we produce delivers a substantial, heavy feel in the hand, communicating the prestige and high value of the precious items inside.
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
                                        Bespoke Velvet Interiors
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        We engineer the interior to hold your specific pieces flawlessly. From custom-flocked velvet ring slots to precisely tabbed necklace cards, we create an interior presentation that protects delicate metals and displays the jewelry at the perfect angle.
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
                                        Flawless Opulent Finishes
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Our artisan finishing capabilities include precision metallic hot foil stamping, deep blind embossing, and crisp V-groove corners. We deliver a luxury aesthetic that justifies premium price points and becomes a keepsake for the customer.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img
                                    src={heroImage}
                                    alt="Premium Custom Jewelry Box Packaging"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-7">
                                    <p className="text-white font-bold text-lg leading-snug mb-1">
                                        Trusted by Fine Jewelers
                                    </p>
                                    <p className="text-white/75 text-sm">Delivering luxury packaging across North America</p>
                                </div>
                            </div>

                            <div className="absolute top-4 -right-2 lg:-right-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80 backdrop-blur-sm">
                                <p className="text-2xl font-bold text-primary leading-none">99%</p>
                                <p className="text-xs text-slate-400 mt-1 font-medium">Satisfaction Rate</p>
                            </div>

                            <div className="absolute bottom-4 -left-2 lg:-left-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80 backdrop-blur-sm">
                                <p className="text-2xl font-bold text-emerald-500 leading-none">VIP</p>
                                <p className="text-xs text-slate-400 mt-1 font-medium">Concierge Service</p>
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
                                Differentiate Your <span className="text-primary">Jewelry</span> From Others
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                At CustomPackMakers, we know that in the fine jewelry market, packaging is the prologue to the product. To ensure your brand commands prestige, we utilize artisan manufacturing processes combined with premium finishing techniques. Our design concierge works closely with you to determine the perfect presentation, ensuring a flawless fit and unmatched aesthetic appeal. By integrating distinctive features like hidden magnetic closures, opulent foil stamping, and custom velvet interiors, we help you create a world-class unboxing ceremony that transforms a purchase into an unforgettable event.
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
                                        question: "What Are The Benefits Of Custom Jewelry Boxes?",
                                        answer: "Custom rigid jewelry boxes immediately elevate the perceived value of your pieces. They provide an unforgettable unboxing ceremony, protect delicate metals perfectly, and serve as a permanent keepsake that customers retain, offering long-term brand exposure."
                                    },
                                    {
                                        id: "item-2",
                                        question: "What Time Does It Take To Manufacture Luxury Boxes?",
                                        answer: "Because high-end rigid jewelry boxes require extensive manual artisan assembly and curing times for adhesives, standard turnaround is typically 12-15 business days after design approval. We do offer expedited options for tight deadlines."
                                    },
                                    {
                                        id: "item-3",
                                        question: "Can You Make Custom Inserts For Specific Rings Or Necklaces?",
                                        answer: "Absolutely. We specialize in bespoke interiors. We design custom-flocked EVA foam or velvet trays tailored exactly to the dimensions of your specific rings, earrings, watches, or necklaces to ensure they are held perfectly in place."
                                    },
                                    {
                                        id: "item-4",
                                        question: "Do You Offer Metallic Foil Stamping For Logos?",
                                        answer: "Yes, hot foil stamping is the most popular finish for luxury jewelry packaging. We offer a wide range of foils including classic gold, silver, rose gold, platinum, and subtle clear holographic options to make your logo shine."
                                    },
                                    {
                                        id: "item-5",
                                        question: "Are The Jewelry Boxes Shipped Flat?",
                                        answer: "No, standard rigid luxury jewelry boxes are shipped fully assembled as they cannot be folded flat without compromising their dense structural integrity. They arrive ready for you to immediately insert your products."
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
                                alt="Cardboard Jewelry Boxes FAQ"
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

export default CardboardJewelryBoxes;
