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
import { RelatedProductWindowPackaging } from "@/components/RelatedProductWindowPackaging";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";

// Product images
import productImg from "@/assets/window-packaging/candle-boxes-with-window.webp";
import customHeroImage from "@/assets/window-packaging/window-packaging-hero.webp";
import FAQimage from "@/assets/FAQ-image.png";

const CandleBoxesWithWindow = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    const productImages = [
        { src: productImg, alt: "Candle Boxes With Window - Main View" },
        { src: productImg, alt: "Candle Boxes With Window - High Angle" },
        { src: productImg, alt: "Candle Boxes With Window - Packaging Detail" },
        { src: productImg, alt: "Candle Boxes With Window - Presentation" },
        { src: customHeroImage, alt: "Candle Boxes With Window - Lifestyle" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Candle Boxes With Window | Window Packaging | CustomPackMakers</title>
                <meta name="description" content="Order wholesale custom candle boxes with clear windows. Premium rigid packaging to showcase and protect your luxury candles. Free shipping & design support." />
                <meta name="keywords" content="candle boxes with window, custom window packaging, luxury candle boxes, clear window boxes, wholesale candle packaging" />
                <meta property="og:title" content="Custom Candle Boxes With Window | Premium Window Packaging" />
                <meta property="og:description" content="Showcase your candles with beautifully integrated clear windows. Sturdy structural designs, custom printing, and wholesale discounts." />
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
                                    <Link to="/industries">All Industries</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link to="/categories/window-packaging">Window Packaging</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Candle Boxes With Window</BreadcrumbPage>
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
                                <span className="text-primary">Candle Boxes</span> With Window
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Showcase the elegance of your artisanal candles with die-cut window packaging that offers visibility, structural protection, and unmatched shelf appeal.
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
                                <img
                                    src={customHeroImage}
                                    alt="Candle Boxes Hero"
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
                        A Transparent View of Craftsmanship: Perfumed and Lit
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            Consumers shop with their eyes, especially in the home decor and fragrance industries. Our <strong className="text-foreground">candle boxes with window</strong> let your beautiful jar, wax color, and brand identity shine through without compromising the packaging’s structural integrity. Engineered using high-density folding cartons with crystal-clear PVC or PET window films securely adhered to the cutouts.
                        </p>
                        <p>
                            Whether you are dealing in luxury glass-jar soy candles, seasonal pillars, or small votives, these boxes keep the candle securely contained while acting as a silent salesperson. Paired with custom inserts, your product will remain safely centered, offering stunning front-facing presentation the moment the customer locks eyes with it.
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
                                                <Input id="length" type="number" placeholder="4" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label>
                                                <Input id="width" type="number" placeholder="4" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">D (in)</Label>
                                                <Input id="depth" type="number" placeholder="5" className="h-9 bg-white" />
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
                        Revolutionize Your Displays with Custom Candle Boxes With Window
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
                                When the essence of a product is linked strictly to aesthetic harmony and olfactory sensation, the packaging matters immensely. <strong>Custom candle boxes with window</strong> act as the ultimate marriage of visual engagement and uncompromising preservation for high-end boutique candles and artisanal waxes. Candles are bought to induce relaxation, ignite romance, or spark joy. Giving the customer a sneak peek at the glass jar, tin color, or etched typography drives emotional purchases unlike standard enclosed boxes. Our structurally verified die-cut packaging empowers your brand to maximize transparent real estate while locking your heavy or fragile glass items tightly within thick, padded walls.
                            </p>
                            <p>
                                The modern retail world heavily biases visually transparent products. When a buyer can actually see the candle—assessing its volume, hue, and wick quality—their hesitation to commit to the fragrance dissipates. We construct these boxes using premium E-flute corrugated cardboard, high-density folded cardstock, and rigid structures that allow us to carve massive windows without sacrificing the structural pillars required to hold heavy products. We utilize transparent films constructed from PET or bio-plastics which are securely pasted on the inner ridges to ensure there are no snag points or dust leaks.
                            </p>

                            <h3>Why Invest in Die-Cut Window Candle Packaging?</h3>
                            <p>
                                Building an experience starts with the packaging. Candle customers are heavily invested in decor aspects. The aesthetic value of the candle jar itself is often why it’s purchased.
                            </p>
                            <ul>
                                <li><strong>Pre-Purchase Connection:</strong> Viewers can admire the colored waxes, glitter infusions, etched glass jars, and natural textures before making a commitment.</li>
                                <li><strong>Reduced Handling Footprints:</strong> Customers no longer need to rip open the box lid on retail shelves to see the product. The window offers instant verification without compromising packaging integrity.</li>
                                <li><strong>Versatile Die-Cut Shapes:</strong> We do not limit you to simple squares. Choose from circular windows, starburst shapes, teardrops, or specific logo contours that amplify thematic seasonal sales.</li>
                                <li><strong>Dust and Fingerprint Defense:</strong> A thick PVC patch seamlessly bonded across the window stops environmental adulterants from dulling your candle jar surface, keeping it immaculate for unboxing.</li>
                            </ul>

                            <h3>Robust Materials Crafted for Weight Management</h3>
                            <p>
                                Glass candles are deceptively heavy. Standard retail packaging fails under torque or impact when carrying densely packed soy or beeswax within a heavy glass tumbler. Our candle boxes are engineered precisely to distribute this weight effectively using dual-layered bases securely housing your product. 
                            </p>
                            <p>
                                Customers can choose between our 18pt to 24pt thick SBS paperboards for vibrant, photograph-quality colors or rely on thick kraft boards for that organic, rustic charm. For heavy three-wick candles, our E-flute corrugated constructs merge shock absorption with rigid form holding, making it near impossible for the candle to shift dangerously during freight. The clear sheets bridging our windows are tested for rigidity so they won’t cave in or scratch easily during transit.
                            </p>

                            <h3>Interior Inserts & Stabilization Techniques</h3>
                            <p>
                                A window only looks good if the product sitting behind it is perfectly aligned. For customized candle packaging, CustomPackMakers integrates die-cut cardboard inserts, molded pulp trays, and foam blocks tailored specifically to your product's dimensions. This guarantees that your logo label remains rigidly square to the viewing pane throughout the journey. It dramatically elevates the unboxing experience when the customer witnesses a precisely centered presentation.
                            </p>

                            <h3>Enhancing Visual Brilliance with Finishing</h3>
                            <p>
                                What surrounds the window is as important as the view through it. To heighten luxury, we apply specific varnishes and foils to the board enclosing the window. Our foil stamping elegantly frames window cuts in gold, rose-gold, or copper. We utilize UV spot treatments across brand typography, causing elements to visually pop against matte backgrounds, demanding shelf attention from across the aisle. Inside, we use CMYK vibrant prints or rich metallic inner coats that bounce light around the candle, producing a mesmerizing backlit glow specifically visible through the clear patch.
                            </p>

                            <h3>Eco-Conscious Box Engineering</h3>
                            <p>
                                As an organization devoted to future sustainability, we provide eco-friendly window packaging solutions. The window patches can be manufactured using acetate or corn-based bioplastics which decompose naturally. We match these with our soy-based inks, unbleached kraft papers, and eco-safe adhesives so your conscious consumer base can enjoy your transparent presentation guilt-free. Eco-centric branding pairs perfectly with organic beeswax or essential oil infusions visible right through the box.
                            </p>

                            <h3>Scalable Wholesale Solutions</h3>
                            <p>
                                Startups running seasonal artisan scents or established industry leaders deploying nation-wide wholesale shipments both derive massive benefits from our production scaling. With aggressively priced wholesale tiers, rapid turnover schedules measuring 8-10 days, and zero compromise on the rigidity of our custom candle boxes with windows, CustomPackMakers forms your reliable supply chain anchor. Stand visibly above your market competitors. Request a detailed quote today to bring your custom window configurations into tangible reality.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <RelatedProductWindowPackaging />

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
                            Combining precision die-cutting with robust materials for flawless window presentations.
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
                                        Precision Clarity Windowing
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Our die-cutting machines ensure no jagged edges around your window cutouts. We utilize anti-static, scratch-resistant PET and PVC patches securely bonded, preventing dusting and tearing.
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
                                        Heavy Product Support
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Candles carry dense weight in a small footprint. We construct inner-locking structural supports and customized custom inserts ensuring the heavy jars do not compromise the clear window pane during shipment.
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
                                        Boutique Level Finishes
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        A transparent window deserves an elegant frame. Access premium foiling, embossing, metallic inks, and velvet-touch lamination securing an unmatched gifting and retail presence for your brand.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img
                                    src={productImg}
                                    alt="Premium Candle Boxes With Window"
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
                                <p className="text-xs text-slate-400 mt-1 font-medium">Turnaround Days</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* DIFFERENTIATE YOUR PRODUCT SECTION */}
            <section className="py-10 lg:py-12 bg-white overflow-hidden relative">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="relative group">
                            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] border border-primary/20 shadow-2xl transform transition-transform duration-700 hover:scale-[1.02]">
                                <img
                                    src={productImg}
                                    alt="Differentiate Your Window Packaging"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                            </div>
                            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-60" />
                            <div className="absolute -z-10 -top-8 -right-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl opacity-60" />
                        </div>

                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                                Maximize Impact with <span className="text-primary">Transparent Real Estate</span>
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                Traditional closed packaging relies entirely on external graphics to convince customers of the contained quality. By shifting to die-cut window structures, your candle is empowered to perform as its own billboard. CustomPackMakers gives you the flexibility to craft viewing windows shaped perfectly like your logo, a seasonal motif, or a wrap-around corner pane offering multi-angle visualization. Paired with custom inserts that rigidly present your label facing the window, we orchestrate the most luxurious, trusted, and shelf-dominating unboxing experience available on the retail market.
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
                                    Clarity into the structural and visual excellence of our window boxes.
                                </p>
                            </div>

                            <Accordion type="single" collapsible defaultValue="item-1" className="w-full space-y-2">
                                {[
                                    {
                                        id: "item-1",
                                        question: "Will the window film crack or tear during shipping?",
                                        answer: "No. We utilize resilient, high-grade PET or PVC plastic sheets glued thoroughly to the inner panels bridging the cutout. They offer massive tear-resistance while retaining flawless visual clarity, ensuring safe travels."
                                    },
                                    {
                                        id: "item-2",
                                        question: "Can I have my window cut into a custom shape?",
                                        answer: "Absolutely! We do not limit you to squares or circles. Utilizing precision die-cutting machinery, we can carve out complex silhouettes, intricate branding crests, or asymmetrical wrap-around panes matching your aesthetic needs."
                                    },
                                    {
                                        id: "item-3",
                                        question: "Are these candle boxes sturdy enough for 20oz glass jars?",
                                        answer: "Yes, we construct heavy-duty inserts from corrugated or thick molded stock that firmly cradle even the heaviest glass candles, transferring weight through the solid walls of the box rather than the transparent window film."
                                    },
                                    {
                                        id: "item-4",
                                        question: "Do you offer eco-friendly transparent films?",
                                        answer: "Definitely. Recognizing modern consumer trends, we offer biodegradable cellulose-based clear window patches, combined with recyclable kraft boards and vegetable-based inks to provide a 100% compostable packaging solution."
                                    },
                                    {
                                        id: "item-5",
                                        question: "What is your standard production turnaround time?",
                                        answer: "Standard production spans 8-10 business days following final digital proof approval. We do provide accelerated rush routes upon request for time-critical boutique launches."
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
                                alt="Window Packages FAQ"
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

export default CandleBoxesWithWindow;
