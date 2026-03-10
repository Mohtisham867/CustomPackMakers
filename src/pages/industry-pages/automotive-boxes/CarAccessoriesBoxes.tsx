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
import caraccessoriesboxeshero from "@/assets/automotive-products/car-accessories-boxes/img-hero.png";
import caraccessoriesboxesimg1 from "@/assets/automotive-products/car-accessories-boxes/img-1.png";
import caraccessoriesboxesimg2 from "@/assets/automotive-products/car-accessories-boxes/img-2.png";
import caraccessoriesboxesimg3 from "@/assets/automotive-products/car-accessories-boxes/img-3.png";
import caraccessoriesboxesimg4 from "@/assets/automotive-products/car-accessories-boxes/img-4.png";
import caraccessoriesboxesimg5 from "@/assets/automotive-products/car-accessories-boxes/img-5.png"
import caraccessoriesboxesimg6 from "@/assets/automotive-products/car-accessories-boxes/img-whychoose.png";
import caraccessoriesboxesimg7 from "@/assets/automotive-products/car-accessories-boxes/img-different.png";
// FAQ image
import FAQimage from "@/assets/FAQ-image.png";

const CarAccessoriesBoxes = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    // Placeholder gallery images (using the same image for now due to limited assets)
    const productImages = [
        { src: caraccessoriesboxesimg1, alt: "Custom Car Accessories Box - Front View" },
        { src: caraccessoriesboxesimg2, alt: "Car Accessories Packaging - Side" },
        { src: caraccessoriesboxesimg3, alt: "Automotive Accessories Box - Open" },
        { src: caraccessoriesboxesimg4, alt: "Custom Printed Car Accessory Box" },
        { src: caraccessoriesboxesimg5, alt: "Car Accessories Packaging - Lifestyle" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Car Accessories Boxes | Wholesale Automotive Packaging | CustomPackMakers</title>
                <meta name="description" content="Order custom car accessories boxes for floor mats, seat covers, and gadgets. Durable, branded automotive packaging with free shipping & design support." />
                <meta name="keywords" content="car accessories boxes, automotive packaging, custom auto parts boxes, car accessory packaging, wholesale automotive boxes" />
                <meta property="og:title" content="Custom Car Accessories Boxes | Wholesale Automotive Packaging | CustomPackMakers" />
                <meta property="og:description" content="Premium custom packaging for car accessories. Protect and showcase your automotive products with durable, high-quality boxes." />
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
                                <BreadcrumbPage>Car Accessories Boxes</BreadcrumbPage>
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
                                <span className="text-primary">Custom</span> Car Accessories Boxes
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Premium packaging solutions for car interior and exterior accessories. Designed for durability and retail impact, ensuring your products stand out on the shelf.
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
                                    src={caraccessoriesboxeshero}
                                    alt="Custom Car Accessories Boxes"
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
                        Packaging That Drives Sales for Automotive Accessories
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            The automotive accessories market is driven by visual appeal and perceived quality. Our <strong className="text-foreground">custom car accessories boxes</strong> are engineered to enhance your product's value proposition. Whether you are packaging seat covers, floor mats, organizers, or dashboard gadgets, our boxes provide the robust protection needed for heavy or irregularly shaped items while offering a canvas for high-impact branding.
                        </p>
                        <p>
                            We utilize high-strength corrugated cardboard and rigid stock to ensure your accessories withstand the rigors of shipping and retail handling. With options for window cutouts to display color and texture, and custom inserts to keep multi-part kits organized, our <strong className="text-foreground">automotive packaging solutions</strong> are tailored to meet the specific needs of gearheads and casual drivers alike.
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
                        Premium Protection for Automotive Accessories
                    </h2>
                    <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="[&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-slate-900 [&>h2]:mb-4 [&>h2]:mt-8 [&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-6 [&>h3]:mb-3 [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-4 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-4 [&>ul]:space-y-2 [&>ul>li]:text-[15px] [&>ul>li]:text-slate-600">
                            <h2>Enhancing the Drive with Premium Packaging</h2>
                            <p>
                                The automotive accessory market is vast, covering everything from aesthetic upgrades like seat covers and LED accents to functional add-ons like phone mounts and organizers. In this crowded space, <strong>custom car accessories boxes</strong> are essential for differentiating your brand. Packaging does more than just hold the product; it sells the lifestyle upgrade that comes with it. At CustomPackMakers, we design packaging that captures the excitement of customizing a vehicle.
                            </p>
                            <p>
                                Our boxes are engineered to protect odd-shaped and often heavy items while offering a premium canvas for your branding. We understand that whether a customer is buying a high-end leather steering wheel cover or a simple air freshener, the unboxing experience shapes their perception of quality.
                            </p>

                            <h3>Packaging for Every Accessory Type</h3>
                            <p>
                                No two accessories are alike, and neither should their boxes be.
                            </p>
                            <ul>
                                <li><strong>Interior Accessories:</strong> For floor mats, seat covers, and sunshades, we create large, sturdy boxes with die-cut handles for easy carrying. Clear windows allow customers to feel the material texture and verify the color match.</li>
                                <li><strong>Tech & Gadgets:</strong> For phone mounts, dash cams, and OBD scanners, we use rigid-style setups or high-quality folding cartons with custom foam inserts to protect delicate electronics and present them like high-end consumer tech.</li>
                                <li><strong>Exterior Enhancements:</strong> For mud flaps, license plate frames, and chrome trim, we offer robust, weather-resistant finishes that can handle the grit of an auto parts store environment.</li>
                            </ul>

                            <h3>Material Selection: Strength Meets Style</h3>
                            <p>
                                We balance durability with aesthetics to create the perfect package.
                            </p>
                            <ul>
                                <li><strong>E-Flute Corrugated:</strong> Thin yet strong, E-flute provides excellent crush resistance for smaller, denser items while offering a smooth surface for high-quality litho-printing.</li>
                                <li><strong>Folding Box Board (FBB):</strong> Ideal for lightweight accessories, FBB offers meaningful stiffness and a superior white surface for vibrant, photographic print quality.</li>
                                <li><strong>Rigid Boxes:</strong> For luxury accessories, rigid boxes offer the ultimate premium feel, creating a keepsake unboxing experience that justifies a higher price point.</li>
                            </ul>

                            <h3>Window Patching: Let the Product Speak</h3>
                            <p>
                                In the auto accessories aisle, "try before you buy" often means "see before you buy."
                            </p>
                            <p>
                                <strong>Clear PVC/PET Windows:</strong> We integrate large, clear windows into the box design. This is crucial for items where color, texture, or finish is the main selling point. A well-placed window allows the customer to inspect the stitching on a steering wheel cover or the metallic finish of a gear shift knob without compromising the package integrity.
                            </p>

                            <h3>Custom Inserts for Complex Kits</h3>
                            <p>
                                Many accessories come with installation hardware—screws, adhesive pads, tools, and manuals.
                            </p>
                            <p>
                                <strong>Secure Organization:</strong> We design custom die-cut cardboard or foam inserts that have a dedicated place for every component. This prevents small parts from rattling or getting lost and ensures that when the customer opens the box, they feel confident they have everything needed for a successful install.
                            </p>

                            <h3>Why CustomPackMakers Leads the Pack</h3>
                            <p>
                                We drive value for automotive brands through:
                            </p>
                            <ul>
                                <li><strong>Design Expertise:</strong> Our structural designers are experts at creating boxes for difficult-to-package shapes, ensuring a snug fit and reduced material waste.</li>
                                <li><strong>Retail Compliance:</strong> We understand the packaging requirements of major auto retailers, ensuring your boxes meet all guidelines for size, strength, and labeling.</li>
                                <li><strong>Scalable Production:</strong> From small batches for niche tuner parts to mass production for nationwide retail chains, we have the manufacturing capacity to grow with you.</li>
                            </ul>
                            <p>
                                Accelerate your sales with packaging that performs. Choose CustomPackMakers for <strong>custom car accessories packaging</strong> that combines showroom appeal with road-ready durability.
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
                                        Perfect Fit
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Automotive accessories range from irregularly shaped steering wheel covers to multi-component kits with cables and brackets. Using precision CAD dieline engineering, we design boxes and die-cut inserts with ±1.5mm tolerances, snugly holding each component in place without rattling or shifting during multi-leg shipping journeys.
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
                                        Shelf Appeal
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        The automotive accessories aisle is intensely competitive. We maximize retail impact through high-gloss CMYK litho printing with metallic spot-UV accents, clear PET window patches exposing product texture, and structural engineering that ensures front-panel billboarding on peg hooks—communicating brand, key benefit, and vehicle compatibility within three seconds.
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
                                        Sustainable Solutions
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        EV and hybrid drivers actively favor environmentally responsible automotive brands. We offer packaging from 70–80% post-consumer recycled FSC-certified corrugated fiber with biodegradable soy-based inks. Our structural designs eliminate plastic void-fill entirely, making the complete package—box, insert, and printed materials—fully curbside recyclable without disassembly.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img
                                    src={caraccessoriesboxesimg6}
                                    alt="Premium car accessories packaging"
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
                                    src={caraccessoriesboxesimg7}
                                    alt="Differentiate Your Car Accessories"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                            </div>
                            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-60" />
                            <div className="absolute -z-10 -top-8 -right-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl opacity-60" />
                        </div>
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                                Differentiate Your <span className="text-primary">Car Brand</span> From Others
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                In a crowded automotive market, your packaging is your first opportunity to make an impression. A well-designed custom box speaks volumes about the quality of the accessory inside. By offering premium, durable packaging with clear branding and high-quality finishes, you tell your customers that your product is professional, reliable, and worth the investment. Stand out from generic competitors and build trust from the moment your product is seen on the shelf or delivered to the door.
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
                                        question: "Can you make boxes for heavy car parts?",
                                        answer: "Yes, we use reinforced corrugated board (up to double-wall thickness) to ensure even the heaviest accessories like jacks or metal parts are secure."
                                    },
                                    {
                                        id: "item-2",
                                        question: "Do you offer oil-resistant coatings?",
                                        answer: "Absolutely. We can apply specialized coatings to protect the packaging from grease, oil, and moisture common in automotive environments."
                                    },
                                    {
                                        id: "item-3",
                                        question: "Can I get a window cutout for my product?",
                                        answer: "Yes, window patching is a popular option for accessories, allowing customers to see the product texture and color before buying."
                                    },
                                    {
                                        id: "item-4",
                                        question: "What is your minimum order quantity?",
                                        answer: "Our MOQs start as low as 100 units, making it easy for you to launch new product lines or test new markets."
                                    },
                                    {
                                        id: "item-5",
                                        question: "Do you provide custom inserts?",
                                        answer: "Yes, we design custom die-cut inserts to hold cables, screws, and multiple components securely in place within the box."
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
                                alt="Custom Car Accessories Boxes FAQ"
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

export default CarAccessoriesBoxes;
