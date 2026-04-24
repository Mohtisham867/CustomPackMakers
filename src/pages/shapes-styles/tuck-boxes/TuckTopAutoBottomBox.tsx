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
import { TechnicalSpecsSection } from "@/components/TechnicalSpecsSection";
import { RelatedProductTuckBoxes } from "@/components/RelatedProductTuckBoxes";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";

import heroImg from "@/assets/tuck-boxes/tuck-top-auto-bottom-box.webp";
import FAQimage from "@/assets/FAQ-image.webp";

const TuckTopAutoBottomBox = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    const productImages = [
        { src: heroImg, alt: "Tuck Top Auto Bottom Box - Main View" },
        { src: heroImg, alt: "Tuck Top Auto Bottom Box - Side Angle" },
        { src: heroImg, alt: "Tuck Top Auto Bottom Box - Open View" },
        { src: heroImg, alt: "Tuck Top Auto Bottom Box - Detail Shot" },
        { src: heroImg, alt: "Tuck Top Auto Bottom Box - Lifestyle Shot" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Tuck Top Auto Bottom Boxes | Speed & Strength | CustomPackMakers</title>
                <meta name="description" content="Order custom tuck top auto bottom boxes. The fastest assembling, most secure retail packaging for high-volume operations. 750+ word expert guide." />
                <meta name="keywords" content="tuck top auto bottom box, auto lock bottom box, crash lock bottom, high volume retail packaging, custom auto bottom boxes wholesale" />
                <meta property="og:title" content="Tuck Top Auto Bottom Boxes | Ultimate Efficiency" />
                <meta property="og:description" content="The premier choice for high-speed fulfillment. Features a pre-glued base that pops into place instantly and a secure tuck top lid." />
            </Helmet>
            <Header />

            {/* Breadcrumb */}
            <div className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 mt-[120px] md:mt-[140px]">
                <div className="container mx-auto px-[30px] py-3">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild><Link to="/">Home</Link></BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild><Link to="/shapes-styles">Shapes & Styles</Link></BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild><Link to="/shapes-styles/tuck-boxes">Tuck Boxes</Link></BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Tuck Top Auto Bottom Box</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </div>

            {/* HERO SECTION */}
            <section className="py-8 bg-background">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-7 space-y-6">
                            <div className="w-20 h-1.5 bg-primary rounded-full"></div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight">
                                <span className="text-primary">Tuck Top</span> Auto Bottom
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Built for speed. Engineered with a pre-glued "crash-lock" base that assembles in a single motion for maximum fulfillment efficiency.
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
                        <div className="lg:col-span-5 relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-muted group">
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200">
                                <img src={heroImg} alt="Tuck Top Auto Bottom Box Hero" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
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
                        Unmatched Assembly Speed for Scalable Operations
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            The <strong className="text-foreground">Tuck Top Auto Bottom Box</strong> (also known as a crash-lock or auto-lock bottom) is the gold standard for high-volume retail fulfillment. Unlike standard or snap-bottom boxes that require manual interlocking, the auto bottom is pre-glued during manufacturing. When the box is squared up, the bottom automatically locks into place, allowing your team to pack products in a fraction of the time.
                        </p>
                        <p>
                            This configuration is a favorite for cosmetics, nutritional supplements, and retail electronics where labor efficiency is a key metric. By pairing this high-speed base with a clean, easy-access tuck top lid, we offer a packaging solution that is as efficient as it is elegant. At CustomPackMakers, we use advanced gluing machinery to ensure every auto-lock base is structurally sound and ready for high-capacity retail environments.
                        </p>
                    </div>
                </div>
            </section>

            {/* INTERACTIVE PRODUCT & FORM SECTION */}
            <section className="py-10 bg-accent/5" id="quote-form">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end">
                        <div className="lg:col-span-7 space-y-6">
                            <div className="relative w-full max-w-lg mx-auto overflow-hidden rounded-lg shadow-sm border border-border bg-white" style={{ aspectRatio: '4/3' }}>
                                <img src={productImages[selectedImage].src} alt={productImages[selectedImage].alt} className="w-full h-full object-cover object-center" />
                            </div>
                            <div className="w-full max-w-lg mx-auto grid grid-cols-5 gap-2">
                                {productImages.map((image, index) => (
                                    <button key={index} onClick={() => setSelectedImage(index)}
                                        className={`relative w-full aspect-square overflow-hidden rounded-md border transition-all duration-200 ${selectedImage === index ? 'border-primary shadow-md ring-2 ring-primary/20' : 'border-slate-200 hover:border-slate-300 hover:shadow-sm'}`}>
                                        <img src={image.src} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="lg:col-span-5 lg:sticky lg:top-24">
                            <Card className="shadow-lg border-slate-200 bg-slate-50/50 backdrop-blur-sm overflow-hidden">
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold text-foreground mb-5">Get a Custom Quote</h3>
                                    <form className="space-y-4">
                                        <div className="grid grid-cols-3 gap-3">
                                            <div className="space-y-1.5">
                                                <Label htmlFor="ttab-l" className="text-xs font-semibold text-muted-foreground">L (in)</Label>
                                                <Input id="ttab-l" type="number" placeholder="10" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="ttab-w" className="text-xs font-semibold text-muted-foreground">W (in)</Label>
                                                <Input id="ttab-w" type="number" placeholder="6" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="ttab-d" className="text-xs font-semibold text-muted-foreground">D (in)</Label>
                                                <Input id="ttab-d" type="number" placeholder="4" className="h-9 bg-white" />
                                            </div>
                                        </div>
                                        <div className="space-y-1.5">
                                            <Label htmlFor="ttab-quantity" className="text-xs font-semibold text-muted-foreground">Quantity</Label>
                                            <Input id="ttab-quantity" type="number" placeholder="1000" className="h-9 bg-white" />
                                        </div>
                                        <div className="space-y-1.5">
                                            <Label htmlFor="ttab-name" className="text-xs font-semibold text-muted-foreground">Name</Label>
                                            <Input id="ttab-name" type="text" placeholder="Your Name" className="h-9 bg-white" />
                                        </div>
                                        <div className="space-y-1.5">
                                            <Label htmlFor="ttab-email" className="text-xs font-semibold text-muted-foreground">Email</Label>
                                            <Input id="ttab-email" type="email" placeholder="email@example.com" className="h-9 bg-white" />
                                        </div>
                                        <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 shadow-md hover:shadow-lg transition-all duration-300 mt-2">
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
                        Optimizing Global Supply Chains with Custom Tuck Top Auto Bottom Packaging
                    </h2>
                    <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8
                            [&::-webkit-scrollbar]:w-2
                            [&::-webkit-scrollbar-track]:bg-gray-100
                            [&::-webkit-scrollbar-track]:rounded-full
                            [&::-webkit-scrollbar-thumb]:bg-primary
                            [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="[&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-8 [&>h3]:mb-3 [&>h3]:first:mt-0 [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-5 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-5 [&>ul]:space-y-2 [&>ul>li]:text-[15px] [&>ul>li]:text-slate-600">
                            <p>
                                Speed is the defining currency of the modern supply chain. The <strong>Custom Tuck Top Auto Bottom Box</strong> (also known as the "Auto-Lock" or "Crash-Lock" bottom) is the single most efficient structural configuration in the folding carton industry. While other box styles require manual interlocking or folding of the base, the auto-bottom is pre-glued during the manufacturing process. When the flattened box is "popped" open by your fulfillment team, the bottom panels instantly lock into position. This eliminates the need for manual interference with the base, allowing for ultra-high-speed packing. At CustomPackMakers, we refine this architecture with surgically precise gluing and high-density substrates, delivering a world-class unboxing experience that builds immediate consumer trust.
                            </p>
                            <p>
                                The psychological impact of an auto-bottom box is one of absolute quality. Because the base is pre-sealed and pre-aligned, the box maintains a level of geometric perfection that manual-fold boxes often lack. This makes it the premier choice for luxury cosmetics, boutique wellness products, and high-end tech accessories where the consumer's first impression must be one of precision and reliability. While the pre-gluing process makes this style slightly more specialized than standard tuck boxes, the massive savings in labor costs for high-volume operations make it the most cost-effective solution for scalable brands.
                            </p>

                            <h3>Strategic Advantages of the Auto-Lock Bottom Configuration</h3>
                            <p>
                                Why do B2B procurement managers and logistics directors default to the auto-bottom design for their primary retail SKUs?
                            </p>
                            <ul>
                                <li><strong>Dramatic Labor Cost Reduction:</strong> The "one-motion" assembly of an auto-bottom box can be performed up to 4x faster than manual interlocking bottoms, saving thousands of labor-hours in at-scale operations.</li>
                                <li><strong>Industrial-Grade Base Security:</strong> Since the base is factory-glued with high-strength adhesives, it offers superior load-bearing capacity and is virtually impossible to open from the bottom during retail handling.</li>
                                <li><strong>Consistent Structural Integrity:</strong> Pre-sealed bases ensure that every single box in a 100,000-unit run is perfectly square, improving shelf presentation and stackability.</li>
                                <li><strong>High-Speed Automated Compatibility:</strong> This is the most compatible style for high-speed automated packing machines used in pharmaceutical and food manufacturing.</li>
                            </ul>

                            <h3>Selection of Premium Materials and High-HD Finishes</h3>
                            <p>
                                Every auto-bottom box we produce starts with globally-sourced, FSC-certified paperboards that are engineered for structural clarity and print brilliance:
                            </p>
                            <ul>
                                <li><strong>Solid Bleached Sulfate (SBS):</strong> The industry's premier choice for medical-grade and luxury retail. It provide a flawlessly smooth surface for ultra-HD CMYK printing.</li>
                                <li><strong>Sustainable Natural Kraft:</strong> Perfect for brands that want to pair high-speed structural design with a message of organic, 100% recyclable authenticity.</li>
                                <li><strong>Anti-Scuff Matte Lamination:</strong> Protect your high-end brand graphics from retail fingerprints and abrasions with high-durability coatings that feel luxurious to the touch.</li>
                                <li><strong>Metallic Foil Stamping & Spot UV:</strong> guide the consumer's eye toward your logo or unique selling points with high-contrast gloss or reflective metallic accents.</li>
                            </ul>

                            <h3>The CustomPackMakers Manufacturing Mandate</h3>
                            <p>
                                Every wholesale project at CustomPackMakers is managed by a dedicated team of folding carton specialists. We provide precision digital dielines to your design team to ensure every hero graphic is perfectly aligned with the glue lines and tuck closures. Once artwork is approved, our state-of-the-art North American facility delivers finished orders in 8-10 business days, bypassing the long lead times and logistics risks of overseas suppliers. 
                            </p>
                            <p>
                                Whether you are a boutique startup requiring an initial launch of 1,000 units or a global corporation needing wholesale production of 1,000,000+ pieces, we provide the same "zero-defect" quality control. Our commitment to accuracy, speed, and structural integrity has made us the trusted packaging partner for over 500 leading brands. Let us help you design an auto-bottom solution that doesn't just hold your product—it celebrates it, ensuring a premium first impression that drives repeat purchases.
                            </p>
                            <p>
                                In conclusion, the Tuck Top Auto Bottom configuration is the ultimate choice for brands that refuse to choose between efficiency and engineering. It is a benchmark in modern retail excellence. Contact our structural team today for a custom quote or physical prototype to experience the auto-lock difference.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* RELATED PRODUCTS CAROUSEL */}
            <RelatedProductTuckBoxes />

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
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Uncompromising Quality</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Every <strong>auto bottom box</strong> we produce is built from rigid chipboard, premium SBS cardstock, and specialty textured stocks, materials selected for structural integrity and tactile luxury. Our rigorous QC process ensures each unit meets the durability standards your wholesale operation and retail partners demand, shipment after shipment. Your brand's reputation is supported by the physical quality of the box itself.
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
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Tailored Perfection</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        No two footwear lines are identical, and neither are our solutions. We engineer <strong>custom branded footwear packaging</strong> to your exact SKU dimensions, with precision-cut tissue inserts, heel cradles, and bespoke structural forms that eliminate movement and protect finish. Your brand's packaging spec, executed flawlessly at scale.
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
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Eco-Friendly Elegance</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Today's footwear buyers expect sustainability without sacrificing premium aesthetics. Our FSC-certified, recyclable <strong>wholesale apparel boxes</strong> deliver the same luxury look and structural performance, while reducing your brand's environmental footprint and meeting the ESG expectations of modern retail partners and conscious consumers.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img src={heroImg} alt="Premium Custom Tuck Box Packaging" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-7">
                                    <p className="text-white font-bold text-lg leading-snug mb-1">Trusted by 500+ Brands</p>
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

            {/* DIFFERENTIATE YOUR BOXES SECTION */}
            <section className="py-10 lg:py-12 bg-white overflow-hidden relative">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="relative group">
                            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] border border-primary/20 shadow-2xl transform transition-transform duration-700 hover:scale-[1.02]">
                                <img src={heroImg} alt="Differentiate Your Tuck Boxes" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                            </div>
                            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-60" />
                            <div className="absolute -z-10 -top-8 -right-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl opacity-60" />
                        </div>
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                                Differentiate Your <span className="text-primary">Auto Bottom</span> Boxes From Others
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                At CustomPackMakers, we understand that your packaging is the first physical touchpoint for your customers. To ensure your brand stands out, we utilize state-of-the-art manufacturing processes combined with premium offset and digital printing techniques. Our team of experts works closely with you to determine the perfect box dimensions, ensuring a snug fit and maximum protection. By integrating distinctive features like custom textures, high-end finishes, and sustainable materials, we help you create a world-class unboxing experience that builds lasting brand loyalty and drives repeat purchases.
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
                                <h2 className="text-2xl md:text-3xl font-bold text-foreground">Frequently Asked Questions</h2>
                                <p className="text-base text-muted-foreground">Expert answers for your auto-bottom packaging inquiries.</p>
                            </div>
                            <Accordion type="single" collapsible defaultValue="item-1" className="w-full space-y-2">
                                {[
                                    { id: "item-1", q: "What is an auto bottom box?", a: "An auto bottom box (or crash-lock box) is a pre-glued folding carton that automatically squares up and locks its base into place when opened. It is the fastest style to assemble manually." },
                                    { id: "item-2", q: "Why choose auto bottom over snap bottom?", a: "Auto bottom boxes are significantly faster to assemble, which reduces labor costs in high-volume operations. Snap bottoms are slower to assemble but can be slightly cheaper for low-volume runs." },
                                    { id: "item-3", q: "Can these boxes hold heavy weight?", a: "Yes. Because the base is factory-glued with industrial adhesives, auto-bottom boxes are extremely strong and are the preferred choice for beverage and pharmaceutical packaging." },
                                    { id: "item-4", q: "Do these ship flat?", a: "Absolutely. Even with the pre-glued base, these boxes ship 100% flat to minimize your shipping costs and storage footprint." },
                                    { id: "item-5", q: "What is the turnaround time for bulk orders?", a: "Our standard turnaround is 8-10 business days after design approval. We offer specialized rush options for national retail launches." },
                                ].map((faq) => (
                                    <AccordionItem key={faq.id} value={faq.id} className="border border-slate-200 rounded-lg bg-white overflow-hidden data-[state=open]:border-primary data-[state=open]:ring-1 data-[state=open]:ring-primary/20 data-[state=open]:bg-primary/5 transition-all duration-300">
                                        <AccordionTrigger className="px-5 py-3 hover:no-underline [&>svg]:hidden group">
                                            <span className="text-left font-semibold text-foreground text-base">{faq.q}</span>
                                            <div className="shrink-0 ml-4 p-1 rounded-full bg-slate-100 group-data-[state=open]:bg-primary group-data-[state=open]:text-white transition-colors duration-200">
                                                <Plus className="h-3 w-3 group-data-[state=open]:hidden" />
                                                <Minus className="h-3 w-3 hidden group-data-[state=open]:block" />
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent className="px-5 pb-5 pt-0 text-slate-600 leading-relaxed text-sm">{faq.a}</AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                        <div className="relative w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden">
                            <img src={FAQimage} alt="Custom Boxes FAQ" className="absolute inset-0 w-full h-full object-cover" />
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

export default TuckTopAutoBottomBox;
