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
import heroImage from "@/assets/cardboard-boxes/cardboard-divider-boxes.webp";

// FAQ image
import FAQimage from "@/assets/FAQ-image.webp";

const CardboardDividerBoxes = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    // Product images for gallery
    const productImages = [
        { src: heroImage, alt: "Cardboard Divider Boxes - Main View" },
        { src: heroImage, alt: "Cardboard Divider Boxes - Side Angle" },
        { src: heroImage, alt: "Cardboard Divider Boxes - Open Box View" },
        { src: heroImage, alt: "Cardboard Divider Boxes - Detail Shot" },
        { src: heroImage, alt: "Cardboard Divider Boxes - Lifestyle Shot" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Cardboard Divider Boxes | Protective Compartment Packaging</title>
                <meta name="description" content="Order custom cardboard divider boxes wholesale. Premium multi-compartment packaging perfect for cosmetics, beverages, and fragile items. Free shipping." />
                <meta name="keywords" content="cardboard divider boxes, boxes with dividers, custom compartment boxes, partition boxes, wholesale divider packaging" />
                <meta property="og:title" content="Custom Cardboard Divider Boxes | Protective Compartment Packaging" />
                <meta property="og:description" content="Premium custom cardboard divider boxes. Secure partitions, rigid construction, full-color printing & protective designs. Get a free quote." />
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
                                <BreadcrumbPage>Cardboard Divider Boxes</BreadcrumbPage>
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
                                <span className="text-primary">Cardboard</span> Divider Boxes
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Wholesale custom cardboard divider packaging engineered for multi-product protection, organized presentation, and secure transit built to scale with your business.
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
                                    alt="Cardboard Divider Boxes Hero"
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
                        Organized, Protective Packaging Built for Multi-Product Displays
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            Our <strong className="text-foreground">cardboard divider boxes</strong> are precision-engineered for B2B brands that need to package, protect, and present multiple items within a single master carton. Constructed from rigid chipboard, premium SBS cardstock, and sturdy corrugated materials, each box features customized internal partitions that prevent glass clinking, product movement, and friction damage during transit. Whether you're launching a cosmetic gift set, shipping craft beverages, or organizing retail assortments, our <strong className="text-foreground">custom partitioned packaging</strong> is designed to perform flawlessly.
                        </p>
                        <p>
                            From intricate grid dividers for small vials to heavy-duty corrugated partitions for wine bottles, our <strong className="text-foreground">divider box packaging</strong> solutions accommodate every configuration. The internal dividers can be printed to match the exterior design, creating a cohesive unboxing experience. With full-color CMYK printing, precision die-cutting, and structural testing, your <strong className="text-foreground">multi-compartment boxes</strong> become a secure and beautiful brand asset. Order wholesale with low minimums and our industry-leading 8–10 day turnaround.
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
                                                <Input id="length" type="number" placeholder="12" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label>
                                                <Input id="width" type="number" placeholder="10" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">D (in)</Label>
                                                <Input id="depth" type="number" placeholder="4" className="h-9 bg-white" />
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
                        The Strategic Importance of Cardboard Divider Packaging
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
                                When packaging multiple items in a single container—whether it’s a subscription box, a cosmetic gift set, fragile glass bottles, or an assortment of retail goods—product presentation and protection are equally critical.
                                Custom cardboard divider boxes (often referred to as partitioned boxes) are the ultimate solution for organizing and securing complex multi-product shipments. A well-engineered divider system eliminates friction, prevents breakage, and transforms a chaotic jumble of items into a highly curated, premium presentation.
                            </p>
                            <p>
                                At CustomPackMakers, we don't treat dividers as an afterthought; we consider them a core structural component of the packaging experience. Our custom cardboard divider boxes are designed to perfectly cradle each individual item. By investing in precisely engineered partitioned packaging, you significantly reduce return rates due to transit damage, streamline your fulfillment process, and deliver a "wow" unboxing experience that drives customer loyalty.
                            </p>

                            <h3>Advanced Partition Engineering & Material Selection</h3>
                            <p>
                                The effectiveness of a divider box relies entirely on the structural engineering of its internal partitions. We offer a variety of divider styles and materials to suit different product weights and fragilities:
                            </p>
                            <ul>
                                <li><strong>Corrugated Dividers:</strong> For heavy or highly fragile items like wine bottles, glass jars, or heavy cosmetics, we utilize B-flute or E-flute corrugated cardboard. These interlocking grids provide maximum shock absorption and crush resistance, ensuring glass never touches glass.</li>
                                <li><strong>SBS Paperboard Partitions:</strong> For lighter items like chocolates, small cosmetics, vape cartridges, or stationery, we use premium SBS cardstock. This material allows for intricate, precise die-cuts and can be fully printed to match the exterior box design.</li>
                                <li><strong>Rigid Chipboard Grids:</strong> For luxury gift sets and high-end retail displays, rigid chipboard dividers offer a dense, unbending structure that communicates premium quality and permanence.</li>
                                <li><strong>Custom Punch-Out Inserts:</strong> Instead of interlocking grids, we can engineer flat cardboard inserts with custom die-cut holes (punch-outs) designed to hold the exact silhouette of your products securely in place.</li>
                            </ul>
                            <p>
                                Every divider system is custom-engineered. Our structural design team analyzes your product dimensions to create a partition layout that maximizes space efficiency while maintaining optimal protective buffer zones.
                            </p>

                            <h3>Enhancing Presentation with Customization</h3>
                            <p>
                                Dividers do more than protect; they frame your products. Our advanced manufacturing capabilities allow you to customize both the exterior box and the internal divider system:
                            </p>
                            <ul>
                                <li><strong>Full-Color Printed Dividers:</strong> Don't leave your dividers blank. We can print full-color CMYK graphics, patterns, or brand messaging directly onto the divider walls, ensuring the interior of the box is just as visually engaging as the exterior.</li>
                                <li><strong>Color-Matched Partitions:</strong> We can manufacture the dividers using the same dyed-through materials (like solid black or kraft) as the outer box, creating a seamless, monochromatic luxury aesthetic.</li>
                                <li><strong>Custom Compartment Sizing:</strong> You aren't limited to uniform grid squares. We can engineer asymmetric compartments to hold a large bottle next to three small jars perfectly within the same box.</li>
                                <li><strong>Foil Stamping on Inserts:</strong> For ultimate luxury, we can apply metallic foil stamping or Spot UV gloss to the visible top edges of the cardboard inserts, adding a subtle flash of premium branding.</li>
                            </ul>

                            <h3>The Financial Benefits of Partitioned Packaging</h3>
                            <p>
                                While custom divider boxes require an initial investment in structural design, they yield significant operational and financial benefits for B2B brands:
                            </p>
                            <ul>
                                <li><strong>Drastic Reduction in Damage:</strong> By physically separating items and preventing friction, you nearly eliminate transit breakage, drastically reducing costly returns and replacement shipments.</li>
                                <li><strong>Fulfillment Efficiency:</strong> Custom dividers streamline the packing process. Packers no longer need to wrap individual items in excessive bubble wrap or void fill. They simply drop the items into their designated slots, saving massive amounts of labor time.</li>
                                <li><strong>Elimination of Plastic Waste:</strong> Cardboard dividers replace the need for un-recyclable plastic bubble wrap or styrofoam peanuts, improving your brand's sustainability profile and appealing to eco-conscious consumers.</li>
                            </ul>

                            <h3>Wholesale Production & Structural Expertise</h3>
                            <p>
                                Designing a flawless divider box requires precise mathematical engineering. A millimeter off, and the products will either rattle loosely or not fit at all. Our structural engineers utilize advanced CAD software and physical prototyping to ensure a perfect fit before mass production begins.
                            </p>
                            <p>
                                Whether you are launching a seasonal holiday gift set requiring 5,000 units or setting up an ongoing subscription box requiring tens of thousands of units monthly, our production lines scale effortlessly. We deliver your divider boxes either pre-assembled or flat-packed for easy warehouse assembly, depending on your storage needs.
                            </p>
                            <p>
                                Partnering with CustomPackMakers means gaining a dedicated packaging team. From structural prototyping and drop-testing to final printing and logistics, we provide the expertise needed to execute complex partitioned packaging. Let us help you design custom cardboard divider boxes that organize, protect, and beautifully present your multi-product offerings.
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
                            Why Brands Choose <span className="text-primary">CustomPackMakers</span>
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            We combine precise structural engineering, premium materials, and flawless execution to deliver partitioned packaging that protects and presents.
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
                                        Precision Structural Engineering
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Divider boxes require exact math. We engineer your <strong>custom partitions</strong> using advanced CAD software to ensure a perfect, snug fit for every item, eliminating transit rattle and potential breakage without making the items difficult to extract.
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
                                        Fully Printed Interiors
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        We don't leave the inside blank. We can print full-color graphics, brand patterns, or instructional text directly onto the <strong>cardboard dividers</strong>, ensuring the unboxing experience is visually stunning from the moment the lid is lifted.
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
                                        Sustainable Protection
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Replace unsightly plastic bubble wrap and styrofoam with 100% recyclable, FSC-certified <strong>corrugated partitions</strong>. You achieve superior drop protection while dramatically improving your brand's environmental footprint and unboxing aesthetics.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img
                                    src={heroImage}
                                    alt="Premium Custom Divider Box Packaging"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-7">
                                    <p className="text-white font-bold text-lg leading-snug mb-1">
                                        Trusted by E-commerce Brands
                                    </p>
                                    <p className="text-white/75 text-sm">Delivering protective packaging across North America</p>
                                </div>
                            </div>

                            <div className="absolute top-4 -right-2 lg:-right-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80 backdrop-blur-sm">
                                <p className="text-2xl font-bold text-primary leading-none">0%</p>
                                <p className="text-xs text-slate-400 mt-1 font-medium">Transit Damage Goal</p>
                            </div>

                            <div className="absolute bottom-4 -left-2 lg:-left-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80 backdrop-blur-sm">
                                <p className="text-2xl font-bold text-emerald-500 leading-none">CAD</p>
                                <p className="text-xs text-slate-400 mt-1 font-medium">Precision Design</p>
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
                                Differentiate Your <span className="text-primary">Presentation</span> From Others
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                At CustomPackMakers, we know that shipping multiple items together is a logistical challenge and a branding opportunity. To ensure your product assortment stands out, we utilize advanced CAD structural engineering combined with premium printing. Our team works closely with you to design the perfect partition matrix, ensuring a snug fit and maximum shock absorption. By integrating distinctive features like color-matched dividers, foil-stamped insert edges, and asymmetrical compartment designs, we help you create a world-class unboxing presentation that feels highly curated and deeply considered.
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
                                        question: "What Are The Benefits Of Using Cardboard Divider Boxes?",
                                        answer: "Divider boxes dramatically reduce transit damage by preventing items from colliding. They also drastically speed up your fulfillment packing time by eliminating the need to wrap items individually in bubble wrap, while simultaneously creating a highly organized, premium presentation for the end user."
                                    },
                                    {
                                        id: "item-2",
                                        question: "Can I Get Different Sized Compartments In One Box?",
                                        answer: "Yes! We specialize in custom structural engineering. We can design asymmetrical partition grids or die-cut punch inserts to perfectly accommodate a large bottle, a small jar, and a medium tube all within the same master box."
                                    },
                                    {
                                        id: "item-3",
                                        question: "Are The Dividers Shipped Assembled?",
                                        answer: "Depending on your preference and warehouse storage capacity, we can ship the dividers pre-assembled and inserted into the boxes, or we can ship them flat-packed with easy instructions for quick assembly during your fulfillment process."
                                    },
                                    {
                                        id: "item-4",
                                        question: "Can You Print On The Divider Partitions?",
                                        answer: "Absolutely. We can print full-color branding, patterns, or instructional text directly onto the divider walls using premium SBS cardstock, ensuring the inside of your box looks just as custom as the outside."
                                    },
                                    {
                                        id: "item-5",
                                        question: "What Materials Are Best For Fragile Glass Items?",
                                        answer: "For fragile glass items like wine, cosmetics, or candles, we highly recommend B-flute or E-flute corrugated cardboard dividers. The fluted structure acts as a shock absorber, providing significantly more crush resistance than standard paperboard."
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
                                alt="Cardboard Divider Boxes FAQ"
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

export default CardboardDividerBoxes;
