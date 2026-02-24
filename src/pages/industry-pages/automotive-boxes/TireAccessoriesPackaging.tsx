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
import productHero from "@/assets/automotive-products/tire-accessories-packaging.webp";

// FAQ image
import FAQimage from "@/assets/FAQ-image.png";

const TireAccessoriesPackaging = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    // Placeholder gallery images
    const productImages = [
        { src: productHero, alt: "Custom Tire Accessories Box" },
        { src: productHero, alt: "Wheel Nut Packaging" },
        { src: productHero, alt: "Tire Repair Kit Box - Open" },
        { src: productHero, alt: "Hubcap Packaging Box" },
        { src: productHero, alt: "Branded Tire Accessories" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Tire Accessories Packaging | Wheel Parts Boxes | CustomPackMakers</title>
                <meta name="description" content="Durable packaging for tire accessories. Custom boxes for wheel nuts, pressure gauges, and repair kits. Designed for retail and shipping." />
                <meta name="keywords" content="tire accessories packaging, wheel nut boxes, tire repair kit packaging, automotive parts boxes, custom wheel accessory boxes" />
                <meta property="og:title" content="Custom Tire Accessories Packaging | Wheel Parts Boxes | CustomPackMakers" />
                <meta property="og:description" content="Premium boxes for tire and wheel accessories. Secure, attractive packaging that stands out on the shelf." />
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
                                <BreadcrumbPage>Tire Accessories Packaging</BreadcrumbPage>
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
                                <span className="text-primary">Custom</span> Tire Accessories Packaging
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Specialized packaging for the wheels that keep us moving. From heavy lug nuts to delicate pressure gauges, we provide strong, branded boxes that sell.
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
                                    alt="Custom Tire Accessories Packaging"
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
                        Packaging That Grips the Customer
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            Tire and wheel accessories range from tiny valve caps to heavy emergency inflators. Each requires a unique packaging approach. Our <strong className="text-foreground">custom tire accessories packaging</strong> allows for versatility, offering everything from blister cards for small items to reinforced boxes for heavy chains or jacks.
                        </p>
                        <p>
                            We understand the retail environment for these products. Whether hanging on a peg in an auto parts store or stacked on a pallet in a warehouse club, our boxes are designed for visibility and durability. High-contrast printing ensures your brand and product details stand out in crowded aisles.
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
                                                <Input id="length" type="number" placeholder="5" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label>
                                                <Input id="width" type="number" placeholder="5" className="h-9 bg-white" />
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
                        Versatile Solutions for Wheel Products
                    </h2>
                    <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="[&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-slate-900 [&>h2]:mb-4 [&>h2]:mt-8 [&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-6 [&>h3]:mb-3 [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-4 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-4 [&>ul]:space-y-2 [&>ul>li]:text-[15px] [&>ul>li]:text-slate-600">
                            <h2>The Ultimate Packaging for Wheel & Tire Essentials</h2>
                            <p>
                                Wheels are the most popular aftermarket upgrade, and the accessories that support them—lug nuts, wheel locks, spacers, and valve caps—are a massive market segment. However, these parts present unique packaging challenges. They are often small, heavy, and display-critical. <strong>Custom tire accessories packaging</strong> must be tough enough to hold steel hardware without tearing, yet refined enough to sit in a high-end rim shop.
                            </p>
                            <p>
                                At CustomPackMakers, we engineer packaging solutions that bridge the gap between industrial strength and retail elegance. Whether you need a bulk shipper for tire chains or a premium rigid box for a set of titanium lug nuts, we deliver packaging that protects the product and elevates the brand.
                            </p>

                            <h3>Heavy-Duty Engineering for Steel Hardware</h3>
                            <p>
                                A box of lug nuts can weigh several pounds but occupies very little volume. This density creates high stress on the packaging walls.
                            </p>
                            <ul>
                                <li><strong>Reinforced Fluting:</strong> We use high-grade E-flute or B-flute corrugated board. This material resists the "bulging" that often occurs with heavy, loose parts, ensuring the box maintains its crisp, square shape on the shelf.</li>
                                <li><strong>Crash-Lock Bottoms:</strong> Standard tuck bottoms can fail under the weight of steel parts. We utilize pre-glued auto-lock bottoms that distribute weight evenly and prevent the bottom from dropping out during handling.</li>
                                <li><strong>Puncture Resistance:</strong> Lug studs and tire chains have sharp edges. Our liners are tested for puncture resistance to ensure the hardware stays inside the box, not on the warehouse floor.</li>
                            </ul>

                            <h3>Retail Optimization: Hanging vs. Stacking</h3>
                            <p>
                                How your product is displayed determines how we design the box.
                            </p>
                            <h4>Pegboard Ready</h4>
                            <p>
                                For lighter items like valve stems, tpms sensors, and pressure gauges, we design boxes with extended headers and reinforced euro-slots. This allows for neat, eye-level display on retail pegboards.
                            </p>
                            <h4>Shelf Stackable</h4>
                            <p>
                                For heavier items like wheel spacers or tire repair kits, we prioritize vertical stacking strength. Our boxes are designed to interlock slightly or have flat surfaces that allow for stable stacking without tipping.
                            </p>

                            <h3>Showcasing the Finish</h3>
                            <p>
                                Wheel accessories are often chosen for their aesthetic appeal—chrome, black chrome, anodized red, or neo-chrome finishes.
                            </p>
                            <p>
                                <strong>Window Patching:</strong> Don't hide the shine. We integrate durable PET windows that allow the customer to see the actual finish of the lug nuts or valve caps. This reduces return rates caused by color mismatches.
                            </p>
                            <p>
                                <strong>Spot UV & Foil:</strong> For premium "tuner" brands, we use foil stamping (silver, gold, holographic) and Spot UV coating to mimic the metallic finish of the parts inside, creating a cohesive high-performance look.
                            </p>

                            <h3>Technical Clarity for the Installer</h3>
                            <p>
                                Mismatched thread pitches are a mechanic's nightmare. Your packaging must be the first line of defense against installation errors.
                            </p>
                            <ul>
                                <li><strong>Data Panels:</strong> We design layouts with dedicated, high-contrast areas for critical specs: Thread Pitch (e.g., M12x1.5), Seat Type (Conical vs. Ball), and Hex Size. This ensures the installer grabs the right box every time.</li>
                                <li><strong>QR Code Support:</strong> Link directly to vehicle compatibility checkers or torque specification guides via a prominent QR code on the flap.</li>
                            </ul>

                            <h3>Seasonal Storage Solutions</h3>
                            <p>
                                For products like tire chains or snow socks, the packaging is also the storage case.
                            </p>
                            <p>
                                <strong>Resealable Designs:</strong> We create boxes with tuck-top tabs or carry handles that allow the user to easily repack the chains after the winter season. A box that serves as a permanent storage solution adds immense value to the product.
                            </p>

                            <h3>Why CustomPackMakers is the Industry Leader</h3>
                            <p>
                                We know the difference between a conical seat and a ball seat. We understand the automotive aftermarket.
                            </p>
                            <ul>
                                <li><strong>Scalable Production:</strong> Whether you need 500 boxes for a limited run of titanium lugs or 50,000 for a nationwide chain retailer, we have the capacity to deliver.</li>
                                <li><strong>Speed to Market:</strong> New wheel trends emerge fast. Our agile production process ensures your packaging is ready when your product lands.</li>
                                <li><strong>Total Customization:</strong> Size, material, print finish, and internal inserts—every aspect of the box is tailored to your specific hardware.</li>
                            </ul>
                            <p>
                                Drive sales with packaging that performs. Choose <strong>custom tire accessories packaging</strong> that matches the quality of your engineering.
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
                                        Heavy-Hardware Engineering
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        A set of steel lug nuts easily exceeds 5–8 lbs. We use reinforced E-flute or B-flute corrugated board with crash-lock auto-lock bottoms, creating a structural base rated for dense metal hardware. This prevents wall bowing and base separation whether shipped by parcel, pallet, or retail floor stack.
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
                                        Technical Clarity
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Valve extenders, TPMS sensors, and bead sealers have highly specific fitment requirements. We use high-definition offset printing to render precise charts covering thread pitch, hex size, and seat type. Anti-counterfeiting holographic labels and tamper-evident seals safeguard brand integrity and confirm component authenticity for installers.
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
                                        Finish Visibility
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Showcase the shine. We integrate clear PET windows or die-cut openings that allow customers to inspect the chrome, black, or anodized finish of your wheel hardware without opening the box.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img
                                    src={productHero}
                                    alt="Professional tire accessories packaging"
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
                                    alt="Differentiate Your Wheel Brand"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                            </div>
                            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-60" />
                            <div className="absolute -z-10 -top-8 -right-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl opacity-60" />
                        </div>
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                                Differentiate Your <span className="text-primary">Wheel Brand</span> From Others
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                In the automotive aftermarket, details matter. Enthusiasts and mechanics look for quality in every component. Packaging that feels solid, features crisp printing, and clearly communicates specifications creates a perception of higher value. Our custom tire accessories boxes help you stand out from the sea of generic plastic bags and plain boxes, establishing your brand as a leader in quality and presentation.
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
                                        question: "Can you make boxes for heavy lug nut sets?",
                                        answer: "Yes, we use reinforced high-strength board to ensuring the box holds together even with heavy contents."
                                    },
                                    {
                                        id: "item-2",
                                        question: "Do you offer window patching for these boxes?",
                                        answer: "Yes, clear windows are a popular option to show off finishes like chrome or colored anodization."
                                    },
                                    {
                                        id: "item-3",
                                        question: "Can I get a hanging tab for my packaging?",
                                        answer: "Absolutely. We can integrate euro-slots or standard tabs into the box header for retail pegboard displays."
                                    },
                                    {
                                        id: "item-4",
                                        question: "What is the minimum order quantity?",
                                        answer: "We offer flexible MOQs starting at 100 units, allowing you to test new product lines without overcommitting."
                                    },
                                    {
                                        id: "item-5",
                                        question: "Can you print installation specs?",
                                        answer: "Yes, the box surface is perfect for printing torque specs, thread sizes, and safety warnings."
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
                                alt="Custom Tire Accessories Packaging FAQ"
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

export default TireAccessoriesPackaging;
