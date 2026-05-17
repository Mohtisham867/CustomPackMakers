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
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SEOContent } from "@/components/SEOContent";
import { TechnicalSpecsSection } from "@/components/TechnicalSpecsSection";
import { RelatedProductKraftBoxes } from "@/components/RelatedProductKraftBoxes";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";

// Product images for Kraft Corrugated Boxes
import kraftCorrugatedHero from "@/assets/material/kraft-boxes/kraft-corrugated-boxes.webp";
import FAQimage from "@/assets/FAQ-image.webp";

const KraftCorrugatedBoxes = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    // Dynamic images array (using the main image for all thumbnails as per common practice in this repo when specific variants aren't provided)
    const productImages = [
        { src: kraftCorrugatedHero, alt: "Kraft Corrugated Boxes - Industrial Strength View" },
        { src: kraftCorrugatedHero, alt: "Kraft Corrugated Boxes - Durable Flat View" },
        { src: kraftCorrugatedHero, alt: "Kraft Corrugated Boxes - Stackable View" },
        { src: kraftCorrugatedHero, alt: "Kraft Corrugated Boxes - Sustainable Material" },
        { src: kraftCorrugatedHero, alt: "Kraft Corrugated Boxes - Shipping Ready" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Kraft Corrugated Boxes | Heavy Duty Shipping | CustomPackMakers</title>
                <meta name="description" content="Order custom kraft corrugated boxes for industrial-grade protection. Sustainable, heavy-duty fluted packaging with custom printing. Free shipping & wholesale rates." />
                <meta name="keywords" content="kraft corrugated boxes, brown corrugated packaging, heavy duty shipping boxes, eco friendly shipping boxes, custom printed mailing boxes, industrial kraft packaging" />
                <meta property="og:title" content="Custom Kraft Corrugated Boxes | Heavy Duty Shipping | CustomPackMakers" />
                <meta property="og:description" content="Premium kraft corrugated packaging for heavy-duty shipping. Extra crush resistance, 100% recyclable, and custom branding options. Get a free quote." />
            </Helmet>
            <Header />

            {/* Breadcrumb Section */}
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
                                    <Link to="/box-by-materials">Box by Materials</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link to="/box-by-material/kraft-boxes">Kraft Boxes</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Kraft Corrugated Boxes</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </div>

            {/* HERO SECTION */}
            <section className="py-8 bg-background">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        {/* LEFT CONTENT */}
                        <div className="lg:col-span-7 space-y-6">
                            <div className="w-20 h-1.5 bg-primary rounded-full"></div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight">
                                <span className="text-primary">Kraft</span> Corrugated Boxes
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Engineered for resilience and built for sustainability. Our custom kraft corrugated boxes combine organic appeal with industrial-strength protection.
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

                        {/* RIGHT HERO IMAGE */}
                        <div className="lg:col-span-5 relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-muted group">
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200">
                                <img
                                    src={kraftCorrugatedHero}
                                    alt="Kraft Corrugated Boxes Hero"
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
                        Heavy-Duty Protection Meets Eco-Logic Branding
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            Our <strong className="text-foreground">custom kraft corrugated boxes</strong> are precision-engineered for brands that refuse to choose between durability and environmental responsibility. Utilizing premium brown kraft liners and reinforced multi-layered fluting, these boxes act as a high-performance shock-absorbent shield for your products. Whether you are shipping electronics, subscription kits, or industrial components, our <strong className="text-foreground">heavy-duty corrugated packaging</strong> ensures your goods arrive in showroom condition.
                        </p>
                        <p>
                            In a logistics world where shipping damage can cripple a brand's reputation, our <strong className="text-foreground">brown corrugated boxes</strong> provide the ultimate peace of mind. By combining the natural aesthetic of unbleached kraft paper with state-of-the-art flute engineering, we deliver packaging that is 100% recyclable, biodegradable, and incredibly strong. Order wholesale with custom dimensions, custom printing, and our industry-leading 8–10 day turnaround to scale your operations efficiently.
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
                                                <Input id="depth" type="number" placeholder="6" className="h-9 bg-white" />
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

            <TechnicalSpecsSection />

            {/* SEO CONTENT SECTION */}
            <section className="py-8 bg-slate-50 border-t border-slate-100">
                <div className="container mx-auto px-[5vw]">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">
                        The Power and Resilience of Custom Kraft Corrugated Boxes
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
                            [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-5 [&>ul>li]:text-[15px] [&>ul>li]:text-slate-600">
                            
                            <p>
                                In the modern shipping landscape, durability is the non-negotiable standard. However, as consumers become increasingly eco-conscious, traditional heavy-duty packaging is often criticized for its environmental footprint. <strong>Custom Kraft Corrugated Boxes</strong> provide the perfect bridge between these two demands. By utilizing high-density kraft paper liners bonded to a structural fluted medium, these boxes offer a high-strength, shock-absorbent shell that remains 100% recyclable and biodegradable.
                            </p>
                            <p>
                                At CustomPackMakers, we understand that your packaging is the first physical touchpoint of your supply chain. Our kraft corrugated solutions are designed for versatility. Whether you are shipping large household items, heavy industrial tools, or fragile glassware, the layered construction of corrugated material dissipates pressure and prevents external forces from reaching the contents inside. This "anti-crush" capability is essential for businesses looking to minimize damage returns and maintain a high standard of customer satisfaction.
                            </p>

                            <h3>The Science of Corrugated Strength: Fluting and Liners</h3>
                            <p>
                                Not all corrugated boxes are created equal. The strength of a box is determined by the combination of its liners (the flat outer surfaces) and its fluting (the wavy material inside). 
                            </p>
                            <ul>
                                <li><strong>E-Flute Corrugated:</strong> Measuring approximately 1/16th of an inch, E-flute is excellent for retail packaging where a slim profile and high-quality printing are required without sacrificing basic structural integrity.</li>
                                <li><strong>B-Flute Corrugated:</strong> At 1/8th of an inch, B-flute provides significant puncture resistance and stacking strength, ideal for medium-weight shipping and canned goods.</li>
                                <li><strong>C-Flute (Standard):</strong> The industry standard for shipping boxes, offering a balance of cushioning and crush resistance.</li>
                                <li><strong>Double Wall Construction:</strong> For your heaviest items, we layer two fluted mediums together to create a vault-like container that can handle intense pressure.</li>
                            </ul>
                            <p>
                                Each of our kraft boxes undergoes rigorous Edge Crush Testing (ECT) and Mullen burst testing to ensure it meets international shipping standards, providing you with a reliable logistics asset that protects your bottom line.
                            </p>

                            <h3>Why Brands are Switching to Natural Kraft Material</h3>
                            <p>
                                The transition to natural, unbleached kraft paper is driven by more than just sustainability. While the 100% recyclable nature of the material is a massive draw for ESG-focused brands, the tactile luxury of the fiber also plays a role. Kraft paper has a unique organic texture that suggests an "authentic, artisan" quality that bright white bleached paper simply cannot replicate.
                            </p>
                            <p>
                                Furthermore, kraft material is incredibly forgiving in a shipping environment. Unlike white or glossy boxes that can easily show scuffs, scratches, and dirt during transit, the natural brown hue of kraft remains looking professional even after a long cross-country journey. It hides minor abrasions, ensuring that the brand image remains intact from the warehouse to the customer's front door.
                            </p>

                            <h3>Custom Engineering: Beyond the Standard Cube</h3>
                            <p>
                                A box that is too large doesn't just waste material—it increases dimensional weight shipping costs and allows products to bounce around inside, increasing the risk of damage. We specialize in custom-sized engineering, creating corrugated containers that fit your dimensions perfectly. This reduces the need for excessive void-fill materials like plastic bubble wrap or air pillows, further enhancing your sustainable brand profile.
                            </p>
                            <p>
                                We also offer custom internal fitments. From corrugated dividers for bottle sets to structural forms for electronics, we design the interior as meticulously as the exterior. This integrated approach to packaging design ensures that even during turbulent handling, your products remains static and secure.
                            </p>

                            <h3>High-Impact Printing and Finishing Tech</h3>
                            <p>
                                Just because you're using a rustic material doesn't mean your branding has to be simple. We utilize state-of-the-art flexographic and digital printing techniques that bond perfectly with the fibrous surface of kraft paper. 
                            </p>
                            <ul>
                                <li><strong>High-Contrast Printing:</strong> We specialize in high-opacity white and black inks that look stunning against the brown kraft backdrop.</li>
                                <li><strong>Pantone Color Matching:</strong> Ensure your brand's specific palette is replicated perfectly across all your shipping materials.</li>
                                <li><strong>Spot UV and Coatings:</strong> Add a subtle gloss or matte coating to specific areas of the box to create a premium contrast against the raw paper texture.</li>
                            </ul>

                            <h3>Optimizing Your Fulfillment Workflow</h3>
                            <p>
                                At CustomPackMakers, we focus on the entire lifecycle of the box. Our kraft corrugated boxes are designed for easy assembly, featuring high-strength adhesive tabs and precision-score lines that allow your team to build and pack in seconds. They ship flat to minimize your storage costs and are light enough to keep your postage rates low while remaining strong enough to stack on high-capacity pallets.
                            </p>
                            <p>
                                Partnering with us means gaining a dedicated packaging team. We work with you to choose the right flute, the perfect material weight, and the most efficient dimensions for your specific product range. Let us help you deliver a package that is consistent, professional, and responsibly built for the modern world.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <RelatedProductKraftBoxes />

            {/* WHY CHOOSE US SECTION */}
            <section className="py-12 relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #fafafa 0%, #f4f6ff 60%, #f0fdf8 100%)' }}>
                <div className="absolute top-0 left-0 w-80 h-80 bg-primary/4 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-300/8 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl pointer-events-none" />

                <div className="container mx-auto px-[30px] relative z-10">
                    <div className="text-center mb-14">
                        <span className="inline-block text-xs font-semibold tracking-widest text-primary uppercase mb-3 bg-primary/10 px-4 py-1.5 rounded-full">Eco-Strength</span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
                            Why Brands Choose Our <span className="text-primary">Corrugated Solutions</span>
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            We combine industrial-grade durability with sustainable design to protect your product and your reputation.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">
                        {/* LEFT: typography */}
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
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Reinforced Protection</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Every <strong>kraft corrugated box</strong> is engineered with reinforced fluting to provide superior crush resistance and puncture protection during transit.
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
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Optimized Logistics</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Custom-sized to your exact product dimensions, reducing DIM weight shipping costs and the need for excessive plastic void-fill materials.
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
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Eco-Standard Branding</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Utilize the raw, organic aesthetic of unbleached kraft to communicate your brand's commitment to the planet while maintaining a premium retail look.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT: Image with floating badges */}
                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img
                                    src={kraftCorrugatedHero}
                                    alt="Premium Kraft Corrugated Engineering"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-7">
                                    <p className="text-white font-bold text-lg leading-snug mb-1">
                                        Heavy-Duty Standards
                                    </p>
                                    <p className="text-white/75 text-sm">Engineered for cross-continent shipping safety</p>
                                </div>
                            </div>

                            {/* Floating badges */}
                            <div className="absolute top-4 -right-2 lg:-right-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80 backdrop-blur-sm">
                                <p className="text-2xl font-bold text-primary leading-none">ECT 32</p>
                                <p className="text-xs text-slate-400 mt-1 font-medium">Standard Strength</p>
                            </div>
                            <div className="absolute bottom-4 -left-2 lg:-left-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80 backdrop-blur-sm">
                                <p className="text-2xl font-bold text-emerald-500 leading-none">100%</p>
                                <p className="text-xs text-slate-400 mt-1 font-medium">Sustainable Fiber</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* DIFFERENTIATE SECTION */}
            <section className="py-10 lg:py-12 bg-white overflow-hidden relative">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* LEFT: Image */}
                        <div className="relative group">
                            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] border border-primary/20 shadow-2xl transform transition-transform duration-700 hover:scale-[1.02]">
                                <img
                                    src={kraftCorrugatedHero}
                                    alt="Differentiate Your Shipments"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                            </div>
                        </div>

                        {/* RIGHT: Content */}
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                                Differentiate Your <span className="text-primary">Shipments</span> From the Competition
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                At CustomPackMakers, we know that your corrugated packaging is more than just a box—it's a promise of quality and care. We utilize advanced manufacturing processes to ensure that your kraft corrugated boxes are perfectly sized and structurally sound. By integrating distinctive branding with high-contrast printing and sustainable textures, we help you create a world-class delivery experience that builds lasting trust, reduces damage returns, and encourages repeat purchases across your entire product line.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ SECTION */}
            <section className="py-6 bg-slate-50">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                        {/* LEFT COLUMN: FAQs */}
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                                    Frequently Asked Questions
                                </h2>
                                <p className="text-base text-muted-foreground">
                                    Technical insights into our heavy-duty corrugated solutions.
                                </p>
                            </div>

                            <Accordion type="single" collapsible defaultValue="item-1" className="w-full space-y-2">
                                {[
                                    {
                                        id: "item-1",
                                        question: "How do I choose the right flute for my corrugated box?",
                                        answer: "The right flute depends on your product weight and retail goals. E-flute is best for small, light items that require high-detail printing. B-flute is great for medium-weight retail items, and C-flute is the industry standard for shipping. We can help you test various options during the quote process."
                                    },
                                    {
                                        id: "item-2",
                                        question: "Can these boxes be stacked safely on pallets?",
                                        answer: "Yes. Our kraft corrugated boxes are specifically engineered for high stacking strength. We use Edge Crush Test (ECT) rated materials to ensure that the bottom box on a pallet can withstand the weight of the boxes stacked above it without buckling or collapsing."
                                    },
                                    {
                                        id: "item-3",
                                        question: "What is the turnaround time for bulk wholesale orders?",
                                        answer: "Our standard turnaround time is 8-10 business days after design approval. We maintain efficient production lines to ensure that even large-scale wholesale orders are delivered on time to keep your supply chain moving smoothly."
                                    },
                                    {
                                        id: "item-4",
                                        question: "Can I print on the inside of my corrugated boxes?",
                                        answer: "Absolutely! Internal printing is a fantastic way to create a premium unboxing experience. We can print logos, social media handles, or assembly instructions on the inside of the box for a cohesive brand narrative."
                                    },
                                    {
                                        id: "item-5",
                                        question: "Are your boxes recyclable?",
                                        answer: "Yes, our kraft corrugated boxes are 100% recyclable and biodegradable. We use water-based or soy-based inks and eco-friendly adhesives, meaning your packaging can be placed directly into the recycling bin with other paper and cardboard products."
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

                        {/* RIGHT COLUMN: FAQ Image */}
                        <div className="relative w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden ">
                            <img
                                src={FAQimage}
                                alt="Kraft Corrugated Boxes Support"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Brand Rating & Quote Form */}
            <BrandRating />
            <div className="py-10">
                <QuoteForm />
            </div>

            <Footer />
        </div>
    );
};

export default KraftCorrugatedBoxes;
