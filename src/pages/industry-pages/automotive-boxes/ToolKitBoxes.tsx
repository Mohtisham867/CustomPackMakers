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
import productHero from "@/assets/automotive-products/tool-kit-boxes.webp";

// FAQ image
import FAQimage from "@/assets/FAQ-image.png";

const ToolKitBoxes = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    // Placeholder gallery images
    const productImages = [
        { src: productHero, alt: "Custom Tool Kit Box" },
        { src: productHero, alt: "Mechanic Tool Set Packaging" },
        { src: productHero, alt: "Heavy Duty Tool Box - Open" },
        { src: productHero, alt: "Portable Tool Case Box" },
        { src: productHero, alt: "Branded Tool Packaging" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Tool Kit Boxes | Automotive Tool Packaging | CustomPackMakers</title>
                <meta name="description" content="Durable custom tool kit boxes designed for organization and protection. Heavy-duty packaging for mechanic sets, emergency kits, and DIY tools." />
                <meta name="keywords" content="tool kit boxes, automotive tool packaging, mechanic tool set boxes, custom tool cases, heavy duty boxes" />
                <meta property="og:title" content="Custom Tool Kit Boxes | Automotive Tool Packaging | CustomPackMakers" />
                <meta property="og:description" content="Professional packaging for automotive tools. Rugged, organized, and branded to showcase the value of your tool sets." />
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
                                <BreadcrumbPage>Tool Kit Boxes</BreadcrumbPage>
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
                                <span className="text-primary">Custom</span> Tool Kit Boxes
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Rugged organization for professional tools. Our custom boxes feature fitted inserts and durable construction to keep every wrench, socket, and screwdriver in its place.
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
                                    src={productHero}
                                    alt="Custom Tool Kit Boxes"
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
                        Organization Meets Durability
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            A jumbled box of tools is a mechanic's nightmare. Our <strong className="text-foreground">custom tool kit boxes</strong> are designed to offer superior organization and protection. We utilize high-density foam or molded pulp inserts to create a designated spot for every tool, ensuring they stay organized during shipping and after purchase.
                        </p>
                        <p>
                            These boxes are built to withstand the heavy weight of steel tools without tearing or bowing. With options for carry handles, latch closures, and reinforced corners, our <strong className="text-foreground">automotive tool packaging</strong> transforms a simple set of tools into a premium, portable workstation that professionals and DIYers alike will appreciate.
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
                                                <Input id="length" type="number" placeholder="12" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label>
                                                <Input id="width" type="number" placeholder="8" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">D (in)</Label>
                                                <Input id="depth" type="number" placeholder="4" className="h-9 bg-white" />
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
                        Packaging Built for the Job Site
                    </h2>
                    <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="[&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-slate-900 [&>h2]:mb-4 [&>h2]:mt-8 [&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-6 [&>h3]:mb-3 [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-4 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-4 [&>ul]:space-y-2 [&>ul>li]:text-[15px] [&>ul>li]:text-slate-600">
                            <h2>Engineered Organization for Automotive Tool Sets</h2>
                            <p>
                                A tool kit is only as good as its organization. Whether it's a 100-piece mechanic's set or a compact roadside emergency kit, the packaging serves as the permanent home for the tools. <strong>Custom tool kit boxes</strong> must be rugged enough to withstand the weight of steel, durable enough to survive a garage environment, and organized enough so that every socket and wrench has a designated place. At CustomPackMakers, we design packaging solutions that turn a collection of tools into a professional, cohesive product.
                            </p>
                            <p>
                                For tool brands, the unboxing experience is the first test of quality. A flimsy box that tears under the weight of a ratchet set implies cheap manufacturing. Our heavy-duty corrugated boxes, paired with precision-cut foam or molded pulp inserts, convey a message of durability and reliability from the moment the customer picks it up.
                            </p>

                            <h3>The Science of Tool Organization: Custom Inserts</h3>
                            <p>
                                The key to a premium tool kit is ensuring nothing rattles.
                            </p>
                            <ul>
                                <li><strong>Die-Cut EVA Foam:</strong> The gold standard for high-end tool sets. We layer varying densities of foam (often with a contrasting color base) to create precise cavities for each tool. This not only protects the tools but allows for instant inventory checks—if a spot is empty, a tool is missing.</li>
                                <li><strong>Molded Pulp Trays:</strong> Ideally suited for heavy items, molded pulp is rigid, eco-friendly, and cost-effective for high-volume runs. It offers excellent shock absorption and can be formed into complex geometries to hold irregular tools like jacks or tire irons.</li>
                                <li><strong>Corrugated Partitions:</strong> For larger, loose items like jumper cables or tow straps, we design integrated corrugated dividers that create separate compartments within the main box.</li>
                            </ul>

                            <h3>Heavy-Duty Construction for Heavy Leads</h3>
                            <p>
                                Tools are dense. A small box can easily weigh 20-30 lbs. Standard packaging will fail.
                            </p>
                            <ul>
                                <li><strong>Double-Wall Strength:</strong> We utilize BC-flute or EB-flute double-wall corrugated board for maximum bursting strength. This ensures the box walls don't bow outward or collapse when stacked.</li>
                                <li><strong>Reinforced Handles:</strong> A heavy box needs a handle. We integrate heavy-duty plastic carry handles reinforced with internal washer plates, or design ergonomic die-cut handholds reinforced with double-folded cardboard.</li>
                                <li><strong>Latch & Lock Systems:</strong> Our structural designers create secure tuck-tab or Velcro closure systems that keep the lid shut during transport but allow for easy, repeated opening and closing by the user.</li>
                            </ul>

                            <h3>Branding That Survives the Garage</h3>
                            <p>
                                Tool boxes live in harsh environments—greasy garages, hot trunks, and dirty workshops.
                            </p>
                            <p>
                                <strong>Oil-Resistant Finishes:</strong> We apply improved UV coatings or polypropylene laminates (gloss or matte) that repel oil, grease, and water. This allows users to wipe the box clean, keeping your brand looking professional for years.
                            </p>
                            <p>
                                <strong>Instructional Graphics:</strong> The inside lid of a tool box is prime real estate. We print detailed content lists, torque specification charts, or usage diagrams directly on the inner surface, adding permanent value to the packaging.
                            </p>

                            <h3>Retail Ready and Stackable</h3>
                            <p>
                                We optimize your packaging for the retail shelf.
                            </p>
                            <ul>
                                <li><strong>Stacking Tabs:</strong> For plastic blow-mold cases that go inside a cardboard sleeve, we design the outer box to interlock, preventing sliding on store shelves.</li>
                                <li><strong>Window Cutouts:</strong> Let the customer see and feel the quality of the tool handle through a secure window patch, bridging the gap between digital browsing and physical buying.</li>
                                <li><strong>Master Case Efficiency:</strong> We design the individual unit dimensions to maximize pallet density, reducing your freight costs for these heavy items.</li>
                            </ul>

                            <h3>Why CustomPackMakers is the Pro's Choice</h3>
                            <p>
                                We build packaging as tough as the tools inside.
                            </p>
                            <ul>
                                <li><strong>Weight Testing:</strong> We simulate real-world drop tests and vibration tests to ensure our packaging designs can handle the specific weight distribution of your tool set.</li>
                                <li><strong>Turnkey Solutions:</strong> From the outer shipping carton to the inner foam tray and the printed sleeve, we provide the complete packaging ecosystem.</li>
                                <li><strong>Speed to Shelf:</strong> Our rapid prototyping and flexible manufacturing capabilities help you hit seasonal retail windows for Father's Day or holiday promotions.</li>
                            </ul>
                            <p>
                                Build a brand that professionals trust. Partner with CustomPackMakers for <strong>custom tool kit packaging</strong> that delivers organization, protection, and uncompromising durability.
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
                                        Precision Tool Organization
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        We create die-cut foam inserts in open-cell or closed-cell polyethylene, or precision-engineered molded pulp trays, securing every wrench, socket, and hex key in its own dedicated recess. Each slot is dimensioned within 0.5mm tolerance to eliminate rattle and prevent cross-contact scratching on premium chrome-vanadium tool finishes.
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
                                        Heavy-Duty Weight Support
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        A 100-piece socket and wrench set can exceed 20 lbs. We build boxes from high-test double-wall corrugated board with burst strength above 200 ECT, reinforced auto-lock bottoms, and corner gussets distributing load evenly—ensuring zero bottom blowouts on forklifts, courier drops, or retail bottom-shelf pulls.
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
                                        Portable & Convenient
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Portability is key for roadside emergency and gift-packaged kits. We engineer reinforced die-cut cardboard handles rated for up to 25 lbs, or optional through-the-wall plastic inserts. Folding tear-strip designs convert the box into a tool tray, adding functional value extending the packaging's life beyond purchase.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img
                                    src={productHero}
                                    alt="Professional tool kit packaging"
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
                                    src={productHero}
                                    alt="Differentiate Your Tool Brand"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                            </div>
                            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-60" />
                            <div className="absolute -z-10 -top-8 -right-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl opacity-60" />
                        </div>
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                                Differentiate Your <span className="text-primary">Tool Brand</span> From Others
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                In a hardware aisle filled with identical-looking tools, your packaging is your competitive advantage. A well-designed tool kit box does more than hold metal; it promises durability and organization. Our custom boxes, with their robust construction and premium finish, signal to the customer that they are buying a professional-grade product that will last a lifetime.
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
                                        question: "Can you provide custom foam inserts?",
                                        answer: "Yes, we specialize in die-cut foam inserts (EVA, PE) that can be cut to the exact shape of your tools for a custom fit."
                                    },
                                    {
                                        id: "item-2",
                                        question: "Are your boxes strong enough for heavy tool sets?",
                                        answer: "Absolutely. We use reinforced double-wall cardboard and heavy-duty folding designs to handle significant weight."
                                    },
                                    {
                                        id: "item-3",
                                        question: "Do you offer handles for carrying?",
                                        answer: "Yes, we can integrate plastic carry handles or reinforced die-cut handles into the box design for portability."
                                    },
                                    {
                                        id: "item-4",
                                        question: "Can the boxes be laminated for oil resistance?",
                                        answer: "Yes, we offer gloss or matte lamination that not only looks great but also resists grease and oil common in garages."
                                    },
                                    {
                                        id: "item-5",
                                        question: "What's the best way to display the set contents?",
                                        answer: "We recommend a large, clear back panel or inside lid graphic that lists and pictures every tool in the kit."
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
                                alt="Custom Tool Kit Boxes FAQ"
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

export default ToolKitBoxes;
