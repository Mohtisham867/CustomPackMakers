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
import heroImage from "@/assets/cardboard-boxes/black-cardboard-boxes.webp";

// FAQ image
import FAQimage from "@/assets/FAQ-image.webp";

const BlackCardboardBoxes = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    // Product images for gallery
    const productImages = [
        { src: heroImage, alt: "Black Cardboard Boxes - Main View" },
        { src: heroImage, alt: "Black Cardboard Boxes - Side Angle" },
        { src: heroImage, alt: "Black Cardboard Boxes - Open Box View" },
        { src: heroImage, alt: "Black Cardboard Boxes - Detail Shot" },
        { src: heroImage, alt: "Black Cardboard Boxes - Lifestyle Shot" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Black Cardboard Boxes | Luxury Dark Packaging | CustomPackMakers</title>
                <meta name="description" content="Order custom black cardboard boxes wholesale. Premium dark packaging with matte or gloss finishes, foil stamping, fast turnaround, and free shipping." />
                <meta name="keywords" content="black cardboard boxes, matte black packaging, dark custom boxes, luxury black boxes, wholesale black mailers" />
                <meta property="og:title" content="Custom Black Cardboard Boxes | Luxury Dark Packaging | CustomPackMakers" />
                <meta property="og:description" content="Premium custom black cardboard packaging. Matte finishes, gold foil stamping, rigid construction & full customization. Get a free quote." />
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
                                <BreadcrumbPage>Black Cardboard Boxes</BreadcrumbPage>
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
                                <span className="text-primary">Black</span> Cardboard Boxes
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Wholesale custom black cardboard packaging engineered for striking elegance, sophisticated brand presentation, and premium product protection.
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
                                    alt="Black Cardboard Boxes Hero"
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
                        Sophisticated Dark Packaging Built for Premium Brands
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            Our <strong className="text-foreground">black cardboard boxes</strong> are precision-engineered for B2B brands looking to make a bold, sophisticated statement. Black packaging inherently communicates luxury, mystery, and exclusivity. Constructed from premium solid black core cardstock, heavy chipboard, or deep black dyed corrugated materials, each box delivers exceptional structural strength while providing a dramatic canvas for your brand identity. Whether you're launching a high-end grooming line, luxury electronics, or premium apparel, our <strong className="text-foreground">custom dark packaging</strong> is designed to captivate.
                        </p>
                        <p>
                            From sleek matte black mailer boxes and elegant two-piece setup boxes to custom tuck-top designs, our <strong className="text-foreground">black packaging</strong> solutions accommodate every product type. Black serves as the perfect contrasting backdrop for metallic foil stamping (gold, silver, copper), Spot UV gloss accents, and crisp white ink printing. Each box can feature custom die-cut inserts and soft-touch laminations, ensuring your product presentation is flawless. Order wholesale with low minimums and our industry-leading 8–10 day turnaround.
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
                                                <Input id="depth" type="number" placeholder="3" className="h-9 bg-white" />
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
                        The Power of Black Packaging in Brand Positioning
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
                                Color psychology plays a massive role in consumer behavior, and no color commands attention and respect quite like black.
                                For premium brands across various industries, custom black cardboard boxes represent the ultimate statement of sophistication, luxury, and modern minimalism.
                                Black packaging subconsciously communicates that the product inside is high-end, exclusive, and engineered with serious intent. It creates an aura of anticipation and perceived high value before the unboxing process even begins.
                            </p>
                            <p>
                                Our custom black cardboard boxes are specifically manufactured with this psychological impact in mind. We don't just print black ink on white cardboard; we utilize specialized materials and finishing techniques to achieve deep, rich, and flawless dark aesthetics. Whether you are packaging premium cosmetics, high-tech electronics, luxury apparel, or artisanal spirits, investing in deeply pigmented black packaging instantly elevates your brand above competitors using standard substrates.
                            </p>

                            <h3>Specialized Dark Materials & Structural Excellence</h3>
                            <p>
                                Achieving a true, premium black look requires more than standard printing. If you simply print black ink on white paper, the edges will remain white when cut or folded, ruining the illusion of luxury. We solve this by using specialized, dyed-through substrates:
                            </p>
                            <ul>
                                <li><strong>Solid Black Core Cardstock:</strong> The holy grail of black packaging. This paperboard is dyed black all the way through during the pulping process. When die-cut, scored, and folded, the edges remain perfectly black, ensuring a seamless, high-end presentation without any unsightly white cracking at the seams.</li>
                                <li><strong>Black E-Flute Corrugated Board:</strong> For e-commerce mailer boxes that require shipping durability, we offer corrugated board featuring a black outer liner and, optionally, a black inner liner. This provides the crush resistance needed for shipping while maintaining a sleek, dark aesthetic upon arrival.</li>
                                <li><strong>Black Rigid Chipboard:</strong> For the absolute highest tier of luxury packaging (setup boxes), we utilize heavy, non-bending chipboard wrapped in premium black textured papers. This creates a weighty, substantial box that feels incredibly expensive and is often retained as a keepsake.</li>
                            </ul>
                            <p>
                                Each of these black materials provides excellent structural integrity, ensuring your products are protected from crushing, impacts, and environmental elements during transit and retail display.
                            </p>

                            <h3>The Ultimate Canvas for Contrasting Finishes</h3>
                            <p>
                                The true magic of black cardboard boxes lies in how they serve as a dramatic, contrasting backdrop for premium printing and finishing techniques. Black absorbs light, allowing reflective finishes to pop with incredible intensity:
                            </p>
                            <ul>
                                <li><strong>Metallic Hot Foil Stamping:</strong> Nothing looks more luxurious than a crisp gold, silver, rose gold, or copper foil logo stamped onto a matte black surface. The high contrast draws the eye immediately and screams premium quality. Holographic foils on black also create a stunning, futuristic effect.</li>
                                <li><strong>Spot UV Gloss Coating:</strong> By applying a high-gloss, clear UV coating to specific elements (like a subtle geometric pattern or your logo) over a matte black background, you create a sophisticated "black-on-black" look. The design becomes visible as the box catches the light, adding a tactile and visual depth that is highly sought after in luxury markets.</li>
                                <li><strong>White Ink & Neon Printing:</strong> Thanks to advanced UV printing technologies, we can lay down opaque white ink or vibrant neon colors directly onto black cardboard. This creates an incredibly striking, modern, and edgy aesthetic perfect for streetwear, tech, or disruptive beauty brands.</li>
                                <li><strong>Soft-Touch Lamination:</strong> Applying a soft-touch (velvet) lamination to black boxes deepens the black hue while providing a luxurious, skin-like feel. It also helps protect the dark surface from scuffs and fingerprints during handling.</li>
                                <li><strong>Blind Debossing:</strong> Pressing a design into heavy black cardstock without ink or foil creates a subtle, elegant indentation that relies purely on shadows and texture for brand recognition.</li>
                            </ul>

                            <h3>Customization for an Unforgettable Unboxing Experience</h3>
                            <p>
                                A premium black exterior sets high expectations; the interior must deliver on that promise. Our manufacturing capabilities allow for complete interior customization to complete the luxury experience:
                            </p>
                            <ul>
                                <li><strong>Custom Interior Inserts:</strong> We design precision die-cut black EVA foam, velvet-flocked thermoform trays, or structural black cardboard dividers to cradle your product perfectly. This ensures a flawless presentation upon opening and prevents movement during shipping.</li>
                                <li><strong>Contrasting Interiors:</strong> While a fully black interior is sleek, a black exterior with a brightly colored, fully printed interior provides a surprising "pop" of brand color that delights customers upon unboxing.</li>
                                <li><strong>Premium Closures:</strong> Enhance the experience with hidden magnetic closures on rigid boxes, elegant ribbon pulls, or secure friction-fit slipcases.</li>
                            </ul>

                            <h3>Wholesale Production & Expert Consultation</h3>
                            <p>
                                Manufacturing high-quality black packaging requires expertise. Dark surfaces can show scuffs or dust more easily than lighter colors, which is why choosing the right lamination and material is critical. Our team has years of experience producing flawless dark packaging at scale.
                            </p>
                            <p>
                                Whether you need a short run of 500 boxes for a limited-edition product drop or tens of thousands of units for a global retail launch, our flexible production lines scale to meet your demands. We offer highly competitive wholesale pricing without ever sacrificing the premium quality your brand depends on.
                            </p>
                            <p>
                                Partnering with CustomPackMakers means working with a dedicated packaging team. From structural engineering and material selection through final production and logistics, we provide the guidance needed to execute the perfect dark aesthetic. Let us help you design custom black cardboard boxes that command attention, elevate your perceived value, and leave a lasting impression on your customers.
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
                            Why Luxury Brands Choose <span className="text-primary">CustomPackMakers</span>
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            We combine deep material expertise, flawless finishing, and reliable execution to deliver dark packaging that makes an impact.
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
                                        Solid Core Materials
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        We don't cut corners by just printing black on white board. We utilize premium solid black-core cardstock and dyed-through materials, ensuring the edges of your <strong>black boxes</strong> remain seamlessly dark without unsightly white cracking at the folds.
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
                                        Flawless Contrast Finishes
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        A dark background demands perfect finishing. Our precise hot foil stamping, high-build Spot UV gloss, and opaque white ink printing create stunning contrast on matte black surfaces, executing your luxury aesthetic flawlessly at scale.
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
                                        Scuff-Resistant Protection
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Dark packaging is notorious for showing scuffs and fingerprints. We solve this by applying premium anti-scratch soft-touch laminations, ensuring your <strong>black packaging</strong> maintains its pristine, velvety appearance from our facility to your customer's hands.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img
                                    src={heroImage}
                                    alt="Premium Black Cardboard Box Packaging"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-7">
                                    <p className="text-white font-bold text-lg leading-snug mb-1">
                                        Trusted by Luxury Brands
                                    </p>
                                    <p className="text-white/75 text-sm">Delivering premium dark packaging across North America</p>
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
                                At CustomPackMakers, we understand that dark packaging is a bold statement that requires flawless execution. To ensure your brand commands authority, we utilize specialized black-core materials combined with high-contrast printing techniques. Our team of experts works closely with you to determine the perfect finish, whether it's an edgy matte or a sleek gloss. By integrating distinctive features like striking metallic foils, subtle blind embossing, and velvety textures, we help you create a world-class, sophisticated unboxing experience that leaves competitors in the shadows.
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
                                        question: "What Are The Benefits Of Using Black Cardboard Boxes?",
                                        answer: "Black packaging instantly elevates the perceived value of your product. It communicates luxury, sophistication, and modernity. It also serves as the perfect high-contrast backdrop for metallic foils and Spot UV, making your logo pop brilliantly."
                                    },
                                    {
                                        id: "item-2",
                                        question: "Will The Folded Edges Of The Box Show White?",
                                        answer: "Not if you select our solid black-core cardstock. Unlike standard printed black ink which cracks white at the folds, our premium black-core material is dyed completely through, ensuring perfectly dark, seamless edges."
                                    },
                                    {
                                        id: "item-3",
                                        question: "Does Black Packaging Show Scratches Easily?",
                                        answer: "Standard matte black printing can show scuffs. To prevent this, we highly recommend and offer anti-scratch, soft-touch laminations that not only protect the dark surface from fingerprints and transit wear but also add a luxurious, velvety feel."
                                    },
                                    {
                                        id: "item-4",
                                        question: "Can You Print White Or Colored Ink On Black Cardboard?",
                                        answer: "Yes! Using advanced UV printing technology, we can lay down highly opaque white ink, vibrant colors, or even neon hues directly onto black substrates without the colors looking muddy or washed out."
                                    },
                                    {
                                        id: "item-5",
                                        question: "What Is The Minimum Order Quantity (MOQ)?",
                                        answer: "We strive to support brands of all sizes. Our typical minimum order quantity starts at just 100 units for standard folding cartons, allowing you to scale up as your demand grows while taking advantage of wholesale volume discounts."
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
                                alt="Black Cardboard Boxes FAQ"
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

export default BlackCardboardBoxes;
