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
import brakepadshero from "@/assets/automotive-products/brake-pads-packaging/img-hero.webp";
import brakepadimg1 from "@/assets/automotive-products/brake-pads-packaging/img-1.webp";
import brakepadimg2 from "@/assets/automotive-products/brake-pads-packaging/img-2.webp";
import brakepadimg3 from "@/assets/automotive-products/brake-pads-packaging/img-3.webp";
import brakepadimg4 from "@/assets/automotive-products/brake-pads-packaging/img-4.webp";
import brakepadimg5 from "@/assets/automotive-products/brake-pads-packaging/img-5.webp";
import brakepadimg6 from "@/assets/automotive-products/brake-pads-packaging/img-whychoose.webp";
import brakepadimg7 from "@/assets/automotive-products/brake-pads-packaging/img-different.webp";

// FAQ image
import FAQimage from "@/assets/FAQ-image.webp";

const BrakePadsPackaging = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    // Placeholder gallery images
    const productImages = [
        { src: brakepadimg1, alt: "Custom Brake Pads Box" },
        { src: brakepadimg2, alt: "Brake Pads Packaging - Side" },
        { src: brakepadimg3, alt: "Automotive Brake Box - Open" },
        { src: brakepadimg4, alt: "Heavy Duty Brake Packaging" },
        { src: brakepadimg5, alt: "Branded Brake Parts Box" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Brake Pads Packaging Boxes | Wholesale Auto Parts Boxes | CustomPackMakers</title>
                <meta name="description" content="Durable custom brake pads packaging designed for heavy loads. Wholesale boxes with high-quality printing and reinforced structure for maximum protection." />
                <meta name="keywords" content="brake pads packaging, brake pad boxes, auto parts packaging, custom brake boxes, heavy duty automotive boxes" />
                <meta property="og:title" content="Custom Brake Pads Packaging Boxes | Wholesale Auto Parts Boxes | CustomPackMakers" />
                <meta property="og:description" content="Premium packaging for brake pads. Rugged, reinforced boxes that protect heavy components and display your brand professionally." />
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
                                <BreadcrumbPage>Brake Pads Packaging</BreadcrumbPage>
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
                                <span className="text-primary">Custom</span> Brake Pads Packaging
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Rugged packaging solutions designed for the heavy weight and density of brake components. Ensure your critical safety parts arrive intact with our reinforced, retail-ready boxes.
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
                                    src={brakepadshero}
                                    alt="Custom Brake Pads Packaging"
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
                        Heavy-Duty Boxes for Heavy-Duty Safety Parts
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            Brake pads are dense, heavy, and create dust—three challenges that destroy standard packaging. Our <strong className="text-foreground">custom brake pads packaging boxes</strong> are built differently. We use high-density cardboard and reinforced folding structures to prevent bottom-out failures and corner crushing, ensuring your product remains secure from the factory floor to the mechanic's bench.
                        </p>
                        <p>
                            Safety information is paramount for brake components. Our boxes provide clear, high-contrast surfaces for printing part numbers, certification marks, and installation warnings. Whether you are an OEM supplier or an aftermarket brand, our <strong className="text-foreground">automotive packaging</strong> transmits quality and reliability before the box is even opened.
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
                                                <Input id="length" type="number" placeholder="8" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label>
                                                <Input id="width" type="number" placeholder="4" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">D (in)</Label>
                                                <Input id="depth" type="number" placeholder="3" className="h-9 bg-white" />
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
                        Packaging That Bears the Weight of Safety
                    </h2>
                    <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="[&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-slate-900 [&>h2]:mb-4 [&>h2]:mt-8 [&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-6 [&>h3]:mb-3 [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-4 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-4 [&>ul]:space-y-2 [&>ul>li]:text-[15px] [&>ul>li]:text-slate-600">
                            <h2>The Foundation of Brake Safety: Reliable Packaging</h2>
                            <p>
                                When it comes to automotive safety, brake pads are non-negotiable. They are dense, heavy, and engineered for extreme friction. The packaging that holds them must be equally robust. <strong>Custom brake pads packaging</strong> serves a dual purpose: it must physically contain the heavy steel and friction material without tearing, and it must project the image of a premium, safety-critical product. At CustomPackMakers, we design boxes that handle the weight of stopping power while accelerating your brand's presence on the shelf.
                            </p>
                            <p>
                                A typical set of brake pads can weigh anywhere from 2 to 10 pounds. Standard folding cartons often fail under this concentrated load, leading to "bottom-out" disasters where the product falls through the box. Our solutions are engineered with reinforced structures and high-tensile materials to prevent this, ensuring that your product arrives at the install bay exactly as it left the factory.
                            </p>

                            <h3>Handling the Heavyweights: Material Selection</h3>
                            <p>
                                The choice of material is critical for heavy friction components.
                            </p>
                            <ul>
                                <li><strong>E-Flute & B-Flute Corrugated:</strong> For most brake pad sets, we recommend E-flute or B-flute corrugated board. The fluting adds vertical compression strength and cushioning, preventing the heavy pads from cutting through the box walls during transit.</li>
                                <li><strong>Heavy-Caliper SBS/CUK:</strong> For lighter passenger car pads, we use 24pt or thicker Solid Bleached Sulfate (SBS) or Coated Unbleached Kraft (CUK) board. CUK offers exceptional tear resistance, making it ideal for holding heavy, sharp-edged metal plates.</li>
                            </ul>

                            <h3>Dust Containment for Clean Shelves</h3>
                            <p>
                                Brake pads, especially semi-metallic and ceramic formulations, can generate dust or shed minor particles.
                            </p>
                            <p>
                                <strong>Sealed Ends:</strong> We design our boxes with full dust flaps and tight-locking tucks (or glue seals) to contain any friction material residue. This ensures that the retail shelf remains clean and the detailed graphics on your box aren't obscured by grey smudge marks.
                            </p>
                            <p>
                                <strong>Shrink-Wrap Compatibility:</strong> Many manufacturers choose to shrink-wrap the pads inside the box or shrink-wrap the box itself. Our packaging is designed to withstand the heat tunnels of shrink-wrapping lines without warping or discoloring.
                            </p>

                            <h3>Branding Safety: Trust Signals on the Box</h3>
                            <p>
                                Trust is the currency of the aftermarket. Mechanics and consumers need to know they can rely on your parts.
                            </p>
                            <ul>
                                <li><strong>Certification Display:</strong> We prioritize space for critical safety marks such as ECE R90, ISO/TS 16949, and friction codes (e.g., "FF", "GG"). These symbols are trust signals that savvy buyers look for immediately.</li>
                                <li><strong>Part Number Clarity:</strong> In a busy warehouse, picking errors cost money. We design high-contrast end panels with large fonts for part numbers and barcodes, ensuring rapid and accurate identification.</li>
                                <li><strong>QR Code Integration:</strong> Link directly to installation videos, bedding-in procedures, or vehicle compatibility checkers by printing a QR code right on the flap. This adds value and reduces return rates due to improper installation.</li>
                            </ul>

                            <h3>Kit Packaging for Calipers and Rotors</h3>
                            <p>
                                Often, pads are sold as part of a larger "brake job" kit.
                            </p>
                            <ul>
                                <li><strong>Component Kits:</strong> We can design boxes with internal compartments or separate header cards to hold hardware kits (clips, shims, grease packets) alongside the pads. This keeps the small parts from getting lost or crushed by the heavy pads.</li>
                                <li><strong>Master Cartons:</strong> For bulk shipments, we design master cartons that are pallet-optimized. By calculating the exact dimensions of your unit boxes, we maximize pallet density and ensure stable stacking for heavy loads.</li>
                            </ul>

                            <h3>Sustainability in Heavy-Duty Packaging</h3>
                            <p>
                                Heavy-duty doesn't mean environmentally unfriendly.
                            </p>
                            <ul>
                                <li><strong>Recycled Corrugated:</strong> Our high-strength corrugated board is available with high recycled content. It provides the necessary ruggedness while allowing your brand to claim sustainability.</li>
                                <li><strong>Minimalist Design:</strong> By using the structural strength of a well-designed auto-bottom box, we can often eliminate the need for plastic strapping or excessive tape, making the package easier for the end-user to recycle.</li>
                            </ul>

                            <h3>Why CustomPackMakers is the Choice for Brake Brands</h3>
                            <p>
                                We understand the mechanics of friction and the logistics of weight.
                            </p>
                            <ul>
                                <li><strong>Drop-Test Confidence:</strong> We can provide samples for you to perform drop tests, ensuring that our boxes—and your pads—survive the inevitable impacts of the shipping network.</li>
                                <li><strong>Inventory Management:</strong> Our Just-In-Time (JIT) production capabilities help you manage inventory levels, freeing up warehouse space for product rather than packaging.</li>
                                <li><strong>Cost-Effective Strength:</strong> We engineer our boxes to use the minimum amount of material necessary to achieve the maximum strength, saving you money on per-unit costs and shipping weight.</li>
                            </ul>
                            <p>
                                Stop the competition in their tracks. Choose <strong>custom brake pads packaging</strong> from CustomPackMakers that delivers the perfect blend of extreme durability and premium branding.
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
                                        Heavy-Duty Weight Rating
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        We use 200lb high-caliper board stock with reinforced crash-lock bottoms, supporting at least 3x the static load of standard packaging. Brake pad sets with cast-iron backing plates weigh 8–12 lbs per axle, and our board specification prevents base failures during palletization and multi-drop courier handling.
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
                                        Dust-Proof Sealing
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Brake dust is a corrosive particulate of carbon compounds, metal fibers, and organic binders. Our tight-sealing tuck-top or auto-lock closures, combined with optional polyethylene inner liners, create a two-layer barrier against airborne particulate, maintaining friction material integrity throughout long-shelf-life distribution and mixed-part warehouse environments.
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
                                        Installation Ready
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Our boxes feature easy-open thumb-notch perforations and tool-free access panels, minimizing workshop handling time. Internal wax-paper wrapping protects friction material from oils and moisture. Bold torque specs, SKU identifiers, and QR codes linking to installation video guides are printed in high-contrast type directly on the box.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img
                                    src={brakepadimg6}
                                    alt="Professional brake pads packaging"
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
                                    src={brakepadimg7}
                                    alt="Differentiate Your Brake Brand"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                            </div>
                            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-60" />
                            <div className="absolute -z-10 -top-8 -right-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl opacity-60" />
                        </div>
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                                Differentiate Your <span className="text-primary">Safety Brand</span> From Others
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                When customers buy brake pads, they are buying safety. Your packaging needs to communicate that effectively. A damaged or weak box suggests a lack of care. Our heavy-duty brake pads boxes, with their reinforced structure and professional printing, reassure the customer that they are buying a premium, reliable product. Stand out from generic white-box competitors and build brand loyalty with packaging that speaks of quality and safety.
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
                                        question: "Can your boxes support the weight of brake pads?",
                                        answer: "Yes, we use high-density cardboard and reinforced crash-lock bottoms specifically designed to hold heavy items without failure."
                                    },
                                    {
                                        id: "item-2",
                                        question: "Do you offer shrink wrapping or sealing options?",
                                        answer: "We can provide boxes compatible with shrink-wrapping lines, or design tamper-evident seals for added security."
                                    },
                                    {
                                        id: "item-3",
                                        question: "How do you handle brake dust?",
                                        answer: "Our box materials are chosen to contain dust, keeping the exterior clean while preventing moisture ingress."
                                    },
                                    {
                                        id: "item-4",
                                        question: "Can I print installation instructions on the box?",
                                        answer: "Yes, the back or inside of the box is a perfect place for printing safety warnings, diagrams, and installation steps."
                                    },
                                    {
                                        id: "item-5",
                                        question: "What is your turnaround time?",
                                        answer: "We aim for 8-10 business days for production after design approval, helping you keep your supply chain moving."
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
                                alt="Custom Brake Pads Packaging FAQ"
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

export default BrakePadsPackaging;
