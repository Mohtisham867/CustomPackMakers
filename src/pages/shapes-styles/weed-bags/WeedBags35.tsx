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
import { RelatedProductWeedBags } from "@/components/RelatedProductWeedBags";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";

// Images specific to weed bags
import weedBags35 from "@/assets/industry/weed-bags/weed-bags-3-5.webp";
import weedBagsHero from "@/assets/industry/weed-bags/weed-bags-hero.webp";
import exoticWeedBag from "@/assets/industry/weed-bags/exotic-weed-bag.webp";
import smellProofWeedBags from "@/assets/industry/weed-bags/smell-proof-weed-bags.webp";
import zipWeedBags from "@/assets/industry/weed-bags/zip-weed-bags.webp";

// FAQ image
import FAQimage from "@/assets/FAQ-image.webp";

const WeedBags35 = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    // Product images for gallery
    const productImages = [
        { src: weedBags35, alt: "Weed Bags 3.5 - Main Image" },
        { src: weedBagsHero, alt: "Weed Bags 3.5 - Style Variety" },
        { src: exoticWeedBag, alt: "Weed Bags 3.5 - Design Option 1" },
        { src: smellProofWeedBags, alt: "Weed Bags 3.5 - Design Option 2" },
        { src: zipWeedBags, alt: "Weed Bags 3.5 - Design Option 3" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom 3.5g Weed Bags | Eighth Ounce Mylar Packaging | CustomPackMakers</title>
                <meta name="description" content="Order custom 3.5g weed bags wholesale. Premium eighth-ounce mylar packaging with child-resistant zippers. Fast turnaround & high-quality printing for cannabis brands." />
                <meta name="keywords" content="3.5g weed bags, eighth ounce bags, custom cannabis packaging, smell proof 3.5 bags, wholesale mylar bags" />
                <meta property="og:title" content="Custom 3.5g Weed Bags | Eighth Ounce Mylar Packaging | CustomPackMakers" />
                <meta property="og:description" content="Professional 3.5g第八ounce bags for your dispensary. Full customization, advanced barrier protection, and child-resistant options." />
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
                                    <Link to="/shapes-styles">Shapes & Styles</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link to="/shapes-styles/weed-bags">Weed Bags</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Weed Bags 3.5</BreadcrumbPage>
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
                                Custom <span className="text-primary">3.5g</span> Weed Bags
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Professional eighth-ounce packaging engineered for freshness, durability, and high-impact retail presence. Perfect for your premium strains.
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

                        {/* RIGHT: Large Product Image */}
                        <div className="lg:col-span-5 relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-muted group">
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200">
                                <img
                                    src={weedBags35}
                                    alt="3.5g Weed Bags Hero"
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
                        Industry-Standard 3.5g Packaging for Cannabis Connoisseurs
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            The <strong className="text-foreground">3.5g weed bag</strong>, commonly known as the "eighth," is the most popular unit of sale in the legal cannabis industry. At CustomPackMakers, we specialize in providing high-performance <strong className="text-foreground">custom 3.5g bags</strong> that do more than just hold flower—they protect your brand's reputation. Crafted from food-grade Mylar with advanced multi-layer barrier films, our bags ensure that every gram of your premium eighth remains as aromatic and potent as the day it was cured.
                        </p>
                        <p>
                            Designed specifically for retail dispensaries and wholesale operations, our <strong className="text-foreground">custom eighth ounce bags</strong> feature precision-engineered child-resistant zippers, easy-open tear notches, and stand-up gussets for maximum shelf visibility. Whether you need holographic finishes, spot UV accents, or soft-touch matte lamination, we offer the customization options necessary to build a world-class unboxing experience for your customers.
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
                                                <Input id="length" type="number" placeholder="3.5" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label>
                                                <Input id="width" type="number" placeholder="5" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">Gusset</Label>
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
                        The Master Guide to Custom 3.5g Eighth Ounce Weed Bags
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
                                In the rapidly expanding world of legal cannabis retail, the presentation and preservation of your product are the two pillars of brand success. Among all the available formats, the 3.5g bag, commonly referred to as an "eighth," stands as the undisputed industry standard. It is the perfect volume for casual consumers and connoisseurs alike, providing enough product to sample a strain's character without the significant commitment of larger quantities. However, because this is the's most competitive segment of the market, simply placing your flower in a generic bag is no longer enough to win customer loyalty. You need Custom 3.5g Weed Bags that reflect the elite status of your cultivation.
                            </p>
                            <p>
                                At CustomPackMakers, we understand that an eighth-ounce bag is more than just a container; it's a critical touchpoint in the unboxing experience. Every time a customer holds your bag, they should feel the quality of the material and see the vibrancy of your brand's unique story. Our custom eighth ounce bags are engineered to provide a 100% smell-proof environment, total UV protection, and a professional retail aesthetic that commands attention behind the dispensary glass. When you choose our premium 3.5g mylar bags, you are investing in a packaging solution that scales with your growth and protects your bottom line.
                            </p>

                            <h3>Advanced Barrier Protection & Terpene Preservation</h3>
                            <p>
                                Exotic and top-shelf cannabis strains are defined by their terpene profiles—the aromatic window into the strain's genetics. If your packaging allows those terpenes to escape, your product loses its value almost immediately. Our 3.5g weed bags are constructed from advanced multi-layer laminations specifically designed to prevent terpene dissipation:
                            </p>
                            <ul>
                                <li><strong>BPA-Free Food Grade LPE:</strong> The inner layer is chemically inert and food-safe, ensuring no plastic flavors leach into your bud.</li>
                                <li><strong>Aluminum Foil / VMPET Barrier:</strong> The indispensable middle layer that acts as a fortress against oxygen, moisture, and light. Light is the primary enemy of THC, and our opaque barrier ensures your potency stays at peak levels.</li>
                                <li><strong>PET Outer Face:</strong> Provides a durable, scuff-resistant surface for high-resolution printing, ensuring your artwork remains pristine throughout the supply chain.</li>
                            </ul>
                            <p>
                                With thicknesses ranging from 4 mil to 5.5 mil, these bags provide the "crunch" and rigidity that customers associate with professional-grade cannabis goods, while providing enough flexibility to fit easily into pockets or small storage compartments.
                            </p>

                            <h3>Compliance & Safety: Child-Resistant Zippers</h3>
                            <p>
                                As a cannabis business, regulatory compliance is your foundation. Most legal jurisdictions now mandate that flower be sold in child-resistant (CR) packaging. We provide certified CR zippers that have undergone rigorous testing to meet state-by-state safety standards. Our "pinch-to-open" and "slide-lock" mechanisms are specifically designed to frustrate small hands while remaining accessible to intended adult consumers.
                            </p>
                            <p>
                                Beyond the zipper, our 3.5g bags feature industry-standard tear notches for initial opening and are compatible with high-speed heat-sealing equipment. This double-layer of security (the heat seal plus the CR zipper) provides your customers with the peace of mind that their product is fresh, untampered with, and safely stored away from children.
                            </p>

                            <h3>High-Impact Customization and Finishes</h3>
                            <p>
                                Differentiation is the key to retail dominance. We offer a full spectrum of printing and finishing options specifically curated for the 3.5g format. Because these bags are smaller, the detail must be sharp. We utilize high-definition rotogravure printing to ensure your logo, mascots, and strain names are rendered with photographic fidelity.
                            </p>
                            <ul>
                                <li><strong>Soft-Touch Matte Lamination:</strong> Gives the bag a velvety, premium feel that instantly separates it from cheap, "plasticky" competitors.</li>
                                <li><strong>Holographic Accents:</strong> Perfect for exotic or "designer" strains, holographic layers catch the light and create a sense of movement and luxury.</li>
                                <li><strong>Spot UV and Embossing:</strong> Add tactile depth by highlighting specific parts of your design with a raised gloss finish against a matte background.</li>
                                <li><strong>Transparent Windows:</strong> While many prefer opaque bags for discretion, a strategically placed clear window allows customers to inspect the trichome coverage and bag appeal of your flower.</li>
                            </ul>

                            <h3>Why Scale Your Eighth Packaging with Us?</h3>
                            <p>
                                Whether you're a startup launching your first harvest or an established enterprise distributing thousands of units across multiple states, we offer the scalability you need. Our competitive wholesale pricing for custom 3.5g bags ensures you maintain healthy margins while delivering a world-class package. We offer low minimum order quantities (MOQs) for specialized drops and massive volume discounts for your "workhorse" house strains.
                            </p>
                            <p>
                                Our design team is available to assist with die-lines and layout optimization, ensuring that every state-mandated warning label and barcode fits perfectly within your artwork's aesthetic. Trust CustomPackMakers to provide the 3.5g eighth ounce weed bags that will make your cannabis brand a household name.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            {/* RELATED PRODUCTS CAROUSEL */}
            <RelatedProductWeedBags />

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
                                        Uncompromising Barrier Quality
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Every <strong>3.5g bag</strong> we produce utilizes high-density Mylar and thick multi-layer barrier laminations to seal out oxygen and light. This ensures your ninth ounce remains fresh and aromatic, maintaining the quality of your flower from dispensary shelf to consumer home.
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
                                        Precision Engineering
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        We specialize in the 3.5g eighth ounce format. Our bags are engineered with accurate dimensions, perfect stand-up gussets, and reliable child-resistant zippers that meet strict state compliance while providing a premium user experience.
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
                                        Scalable Wholesale Solutions
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Whether you're a craft boutique or a large-scale MSO, we offer scalable production with low minimums and substantial wholesale discounts. Our 8-10 day turnaround time keeps your product moving and your inventory fresh.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT: Square image with floating badges */}
                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img
                                    src={weedBags35}
                                    alt="Custom 3.5g Weed Bag Packaging"
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


            {/* DIFFERENTIATE YOUR BAGS SECTION */}
            <section className="py-10 lg:py-12 bg-white overflow-hidden relative">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* LEFT: Image */}
                        <div className="relative group">
                            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] border border-primary/20 shadow-2xl transform transition-transform duration-700 hover:scale-[1.02]">
                                <img
                                    src={weedBagsHero}
                                    alt="Differentiate Your Eighth Ounce Bags"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-60" />
                            <div className="absolute -z-10 -top-8 -right-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl opacity-60" />
                        </div>

                        {/* RIGHT: Content */}
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                                Differentiate Your <span className="text-primary">Bags</span> From Others
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                At CustomPackMakers, we know that your 3.5g bag is your brand's most important marketing tool. To ensure your eighth stands out from generic dispensary house-brands, we utilize state-of-the-art manufacturing processes combined with premium finishing techniques. By integrating distinctive features like holographic accents, soft-touch matte textures, and clear product windows, we help you create a world-class unboxing experience that builds lasting brand terminal and drives repeat purchases in the competitive eighth-ounce market.
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
                                    We’re confident that you will love our products and service.
                                </p>
                            </div>

                            <Accordion type="single" collapsible defaultValue="item-1" className="w-full space-y-2">
                                {[
                                    {
                                        id: "item-1",
                                        question: "Are your 3.5g bags 100% smell-proof?",
                                        answer: "Yes. Our bags are constructed using high-barrier VMPET and PET layers with double-sealed zippers to ensure that volatile organic compounds (aromas) are completely contained, ensuring discretion and freshness."
                                    },
                                    {
                                        id: "item-2",
                                        question: "Do you offer child-resistant zipper options?",
                                        answer: "Absolutely. We offer certified child-resistant (CR) zippers that comply with strict state cannabis packaging regulations, ensuring your product is safely inaccessible to children while remaining easy for adults to use."
                                    },
                                    {
                                        id: "item-3",
                                        question: "Can I customize the dimensions of my eighth ounce bags?",
                                        answer: "While we have industry-standard 3.5g sizes (typically 3.5\" x 5\" x 2\"), we can fully customize the dimensions to accommodate fluffy or dense flower, or to create a unique silhouette for your brand."
                                    },
                                    {
                                        id: "item-4",
                                        question: "What is the turnaround time for custom orders?",
                                        answer: "Our standard production time is 8-10 business days after artwork approval. We also offer rush options for critical product launches or replenishment needs."
                                    },
                                    {
                                        id: "item-5",
                                        question: "Do you provide design assistance for state compliance?",
                                        answer: "Yes. Our team is familiar with state-specific warning label requirements and barcode placements. We can help you optimize your layout to ensure your beautiful design remains fully compliant."
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

                        {/* RIGHT COLUMN: Image */}
                        <div className="relative w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden ">
                            <img
                                src={FAQimage}
                                alt="Custom 3.5g Weed Bags FAQ"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Brand Rating */}
            <BrandRating />

            {/* Main Quote Form */}
            <QuoteForm />

            <Footer />
        </div >
    );
};

export default WeedBags35;
