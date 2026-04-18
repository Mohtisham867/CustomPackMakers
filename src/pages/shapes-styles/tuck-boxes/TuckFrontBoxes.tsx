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

import heroImg from "@/assets/tuck-boxes/tuck-front-boxes.webp";
import FAQimage from "@/assets/FAQ-image.png";

const TuckFrontBoxes = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    const productImages = [
        { src: heroImg, alt: "Tuck Front Boxes - Main View" },
        { src: heroImg, alt: "Tuck Front Boxes - Side Angle" },
        { src: heroImg, alt: "Tuck Front Boxes - Open View" },
        { src: heroImg, alt: "Tuck Front Boxes - Detail Shot" },
        { src: heroImg, alt: "Tuck Front Boxes - Lifestyle Shot" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Tuck Front Boxes | Wholesale Folding Cartons | CustomPackMakers</title>
                <meta name="description" content="Order wholesale custom tuck front boxes (lock front boxes). Ideal for retail display, featuring frontal flap closures and full CMYK custom printing. 750+ word SEO guide." />
                <meta name="keywords" content="tuck front boxes, lock front boxes, front lock tuck boxes, custom folding cartons, retail packaging" />
                <meta property="og:title" content="Custom Tuck Front Boxes | Retail-Ready Packaging" />
                <meta property="og:description" content="Tuck front boxes with secure frontal panel closures. Perfect for retail shelf display and easy consumer access. Get wholesale pricing today." />
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
                                <BreadcrumbPage>Tuck Front Boxes</BreadcrumbPage>
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
                                Custom <span className="text-primary">Tuck Front</span> Boxes
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Front-access tuck boxes designed for effortless product visibility and retail shelf appeal. A favourite for cosmetics, hardware, and retail goods.
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
                                <img src={heroImg} alt="Tuck Front Boxes Hero" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
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
                        Front-Opening Design Built for Retail Performance
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            The <strong className="text-foreground">Tuck Front Box</strong> (also known as a Lock Front Box) features a tuck closure flap on the front panel instead of the traditional top or bottom. This configuration offers a distinctive structural advantage: when the box is standing upright on a retail shelf, the front flap creates an attractive presentation surface that can double as a display panel when open, revealing the product inside to the consumer.
                        </p>
                        <p>
                            Brands across hardware, cosmetics, toys, and specialty foods turn to tuck front packaging because it enhances the unboxing experience while maintaining a compact, efficient footprint. With CustomPackMakers, every tuck front box is precision-scored for clean folding, printed with vibrant CMYK inks, and finished with your choice of protective laminates.
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
                                                <Label htmlFor="tf-length" className="text-xs font-semibold text-muted-foreground">L (in)</Label>
                                                <Input id="tf-length" type="number" placeholder="12" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="tf-width" className="text-xs font-semibold text-muted-foreground">W (in)</Label>
                                                <Input id="tf-width" type="number" placeholder="8" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="tf-depth" className="text-xs font-semibold text-muted-foreground">D (in)</Label>
                                                <Input id="tf-depth" type="number" placeholder="5" className="h-9 bg-white" />
                                            </div>
                                        </div>
                                        <div className="space-y-1.5">
                                            <Label htmlFor="tf-quantity" className="text-xs font-semibold text-muted-foreground">Quantity</Label>
                                            <Input id="tf-quantity" type="number" placeholder="500" className="h-9 bg-white" />
                                        </div>
                                        <div className="space-y-1.5">
                                            <Label htmlFor="tf-name" className="text-xs font-semibold text-muted-foreground">Name</Label>
                                            <Input id="tf-name" type="text" placeholder="Your Name" className="h-9 bg-white" />
                                        </div>
                                        <div className="space-y-1.5">
                                            <Label htmlFor="tf-email" className="text-xs font-semibold text-muted-foreground">Email</Label>
                                            <Input id="tf-email" type="email" placeholder="email@example.com" className="h-9 bg-white" />
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
                        Maximizing Retail Impact with Custom Tuck Front Boxes
                    </h2>
                    <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8
                            [&::-webkit-scrollbar]:w-2
                            [&::-webkit-scrollbar-track]:bg-gray-100
                            [&::-webkit-scrollbar-track]:rounded-full
                            [&::-webkit-scrollbar-thumb]:bg-primary
                            [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="[&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-8 [&>h3]:mb-3 [&>h3]:first:mt-0 [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-5 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-5 [&>ul]:space-y-2 [&>ul>li]:text-[15px] [&>ul>li]:text-slate-600">
                            <p>
                                In the fast-paced world of retail, the first encounter between a product and a consumer is often the most critical. The <strong>Custom Tuck Front Box</strong> is a structural masterpiece designed specifically for this moment of truth. Unlike traditional folding cartons that tuck at the top or bottom, a tuck front box features a closure mechanism on the frontal panel. This orientation serves a dual purpose: it provides a secure, tamper-resistant seal while simultaneously offering a wide, unblemished billboard surface for your brand's most important visual assets. At CustomPackMakers, we specialize in engineering these 'lock-front' boxes to ensure your product stands out on crowded shelves while remaining protected throughout the retail lifecycle. 
                            </p>
                            <p>
                                One of the primary reasons B2B marketing departments prefer tuck front configurations is the superior unboxing ritual they facilitate. When a consumer lifts the front flap, the box opens like a presentation tray, immediately focusing all attention on the product inside. This makes tuck front boxes the gold standard for subscription kits, luxury cosmetics, premium electronics, and artisanal food products. By choosing a tuck front structural design, you are telling your customers that the experience of the product begins the moment they touch the package. We utilize high-grade SBS and Kraft board to ensure that this interaction feels as premium as it looks.
                            </p>

                            <h3>Advanced Structural Engineering for Durability</h3>
                            <p>
                                While aesthetics are vital, a box's primary job is protection. Our tuck front boxes are engineered with reinforced score lines and precision-cut locking tabs that prevent accidental opening during the global shipping process. By hinging the closure on the front panel, the top and bottom panels remain solid and structurally integrated, which is key for vertical strength:
                            </p>
                            <ul>
                                <li><strong>Sealed Top & Base:</strong> Solid, un-tucked panels ensure maximum resistance to vertical compression during warehouse storage and palletized shipping.</li>
                                <li><strong>Friction-Lock Front Tabs:</strong> These tabs securely keep the box closed during heavy handling while remaining remarkably easy for consumers to open without tools or frustration.</li>
                                <li><strong>Display-Ready Design:</strong> The structural layout is specifically optimized for vertical orientation, ensuring the box doesn't tilt or sag when placed on retail shelves.</li>
                                <li><strong>Collapsible Shipping Efficiency:</strong> Like all high-quality folding cartons, these ship flat to minimize your shipping and carbon footprint, saving you significant warehousing space.</li>
                            </ul>

                            <h3>Selection of Premium Materials & Substrates</h3>
                            <p>
                                Your choice of material sets the fundamental tone for your brand. We offer a comprehensive suite of high-performance substrates to meet every branding goal and functional requirement:
                            </p>
                            <ul>
                                <li><strong>SBS (Solid Bleached Sulfate):</strong> The premier white-on-white paperboard for elite cosmetic and tech brands. It offers a surgical-grade smooth surface that translates into ultra-high-definition, color-accurate printing.</li>
                                <li><strong>Kraft Board:</strong> Communicate organic authenticity and eco-leadership with natural brown fibers that are 100% recyclable, biodegradable, and exceptionally strong.</li>
                                <li><strong>Specialty Textured Papers:</strong> For high-end luxury goods, we can laminate embossed or metallic papers onto the board for a unique tactile signature that consumers can feel before they even see the product.</li>
                                <li><strong>Recycled Post-Consumer Waste (PCW) Board:</strong> Align your packaging with your global ESG goals without sacrificing structural integrity or print fidelity compared to virgin fibers.</li>
                            </ul>

                            <h3>Precision Printing & Specialized Finishes</h3>
                            <p>
                                Transform your tuck front box into a high-end marketing tool with our industry-leading printing and finishing capabilities. From minimalist monochrome designs to complex, vibrant holographic gradients, we deliver consistent results across every single batch:
                            </p>
                            <ul>
                                <li><strong>Vivid CMYK & Pantone Matching:</strong> Guaranteed color consistency across millions of units, ensuring your brand equity is protected everywhere your product is sold.</li>
                                <li><strong>Velvet Soft-Touch Lamination:</strong> A premium matte finish that feels incredibly soft to the touch and eliminates distracting glare on harsh retail lighting.</li>
                                <li><strong>High-Gloss UV Coating:</strong> Create a striking contrast by applying gloss only to specific areas like your logo or product name for a multi-dimensional look.</li>
                                <li><strong>Embossing and Debossing:</strong> Add dimensional depth to your packaging with raised or sunken design elements that encourage tactile customer engagement.</li>
                            </ul>

                            <h3>Why Partner with CustomPackMakers?</h3>
                            <p>
                                Navigating the complexities of custom packaging can be daunting, but our team simplifies the process from initial digital dieline to final fulfillment. We understand that in the wholesale world, reliability and speed are the two most important factors for your supply chain. That's why we maintain a domestic manufacturing footprint that allows for 8-10 business day turnarounds, far faster than traditional overseas competitors. 
                            </p>
                            <p>
                                Whether you are a boutique start-up requiring a short run of 100 units to test a new product concept, or an established global enterprise needing wholesale quantities of 500,000+ units for nationwide distribution, we scale our production to meet your requirements. Our commitment to sustainable practices, uncompromising quality control, and competitive wholesale pricing has made us the trusted packaging partner for over 500 brands across North America. Let us help you elevate your retail presence with custom tuck front boxes that don't just hold your product—they sell it by creating an unforgettable first impression.
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
                                        Every <strong>tuck front box</strong> we produce is built from rigid chipboard, premium SBS cardstock, and specialty textured stocks, materials selected for structural integrity and tactile luxury. Our rigorous QC process ensures each unit meets the durability standards your wholesale operation and retail partners demand, shipment after shipment. Your brand's reputation is supported by the physical quality of the box itself.
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
                                        Today's buyers expect sustainability without sacrificing premium aesthetics. Our FSC-certified, recyclable <strong>wholesale apparel boxes</strong> deliver the same luxury look and structural performance, while reducing your brand's environmental footprint and meeting the ESG expectations of modern retail partners and conscious consumers.
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
                                Differentiate Your <span className="text-primary">Tuck Front</span> From Others
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
                                <p className="text-base text-muted-foreground">We're confident that you will love our products and service.</p>
                            </div>
                            <Accordion type="single" collapsible defaultValue="item-1" className="w-full space-y-2">
                                {[
                                    { id: "item-1", q: "What Is A Tuck Front Box?", a: "A tuck front box has its primary closure flap on the front panel rather than the top or bottom. The top and bottom panels are sealed and structurally solid, while the front flap tucks in and can feature a locking tab for security." },
                                    { id: "item-2", q: "Can I Add A Window To My Tuck Front Box?", a: "Yes! Window die-cuts fitted with PET plastic film are one of our most popular add-ons for tuck front boxes. The window can be positioned on the front panel, top, or any side panel, allowing the product inside to be visible to shoppers." },
                                    { id: "item-3", q: "What Is The Minimum Order Quantity?", a: "Our minimum order for tuck front boxes starts at 100 units for standard configurations. We encourage ordering higher quantities to achieve better per-unit pricing, which starts improving considerably at 500+ units." },
                                    { id: "item-4", q: "Are Your Boxes Food Safe?", a: "Yes. We offer food-safe printing inks and FDA-compliant coatings for tuck front boxes designed to hold food products. Please specify your application when requesting a quote." },
                                    { id: "item-5", q: "How Long Does Production Take?", a: "Standard production runs take 8–10 business days after design sign-off. Rush production (4–6 business days) is available for an additional fee. Shipping times vary by destination." },
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

export default TuckFrontBoxes;
