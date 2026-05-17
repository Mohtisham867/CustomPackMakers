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

import productImg from "@/assets/shape-style/window-packaging/soap-boxes-with-window.webp";
import customHeroImage from "@/assets/shape-style/window-packaging/window-packaging-hero.webp";
import FAQimage from "@/assets/FAQ-image.webp";

const SoapBoxesWithWindow = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    const productImages = [
        { src: productImg, alt: "Soap Boxes With Window - Main View" },
        { src: productImg, alt: "Soap Boxes With Window - High Angle" },
        { src: productImg, alt: "Soap Boxes With Window - Packaging Detail" },
        { src: productImg, alt: "Soap Boxes With Window - Presentation" },
        { src: customHeroImage, alt: "Soap Boxes With Window - Lifestyle" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Soap Boxes With Window | Window Packaging | CustomPackMakers</title>
                <meta name="description" content="Order wholesale custom soap boxes with clear windows. Protect your artisan soaps while showcasing organic textures and colors. Moisture resistant & eco-friendly." />
                <meta name="keywords" content="soap boxes with window, custom soap packaging, artisan soap window boxes, organic soap packaging, wholesale soap boxes" />
                <meta property="og:title" content="Custom Soap Boxes With Window | Artisan Packaging" />
                <meta property="og:description" content="Highlight organic textures and beautiful hues with structurally durable, moisture-resistant window packaging tailored specifically for boutique craft soaps." />
            </Helmet>
            <Header />

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
                                <BreadcrumbPage>Soap Boxes With Window</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </div>

            <section className="py-8 bg-background">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-7 space-y-6">
                            <div className="w-20 h-1.5 bg-primary rounded-full"></div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight">
                                <span className="text-primary">Soap Boxes</span> With Window
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Let your beautiful organic textures and vivid artisanal hues speak for themselves. Structurally robust packaging built with precision viewing cutouts preserving moisture barriers and cleanliness.
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
                                    alt="Soap Boxes Window Hero"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-8 bg-slate-50">
                <div className="container mx-auto px-[5vw]">
                    <div className="flex items-center gap-3 mb-5">
                        <div className="w-10 h-1 bg-primary rounded-full" />
                        <span className="text-xs font-semibold tracking-widest text-primary uppercase">Product Overview</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 max-w-3xl">
                        Aromatics Meet Transparency in Artisan Packaging
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            The organic or craft soap industry thrives intensely upon sensory aesthetics. Ingredients like lavender buds, honey swirls, or pink Himalayan salt crusts embedded within the bar represent the primary buying logic. Covering these intricate, time-intensive textures behind standard solid cardboard walls damages retail velocity severely. Our <strong className="text-foreground">custom soap boxes with window</strong> break this barrier, allowing prospective buyers absolute, pristine visibility onto the exact texture mapping of the soap.
                        </p>
                        <p>
                            We engineer these boxes combining dense eco-friendly kraft or rigid SBS boards mapping perfectly against transparent film coverings or open-air cutouts. Beyond visual sales pitches, deploying protective boxes shields delicate corners from structural crushing and wards away excess humidity and oxidation, drastically elongating your product's shelf-life while preserving its organic perfume.
                        </p>
                    </div>
                </div>
            </section>

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
                                                <Input id="length" type="number" placeholder="3.5" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label>
                                                <Input id="width" type="number" placeholder="2.5" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">D (in)</Label>
                                                <Input id="depth" type="number" placeholder="1.5" className="h-9 bg-white" />
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

            <section className="py-8 bg-slate-50 border-t border-slate-100">
                <div className="container mx-auto px-[5vw]">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">
                        Perfect Transparency: Selling Quality Through the Packaging Window
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
                                The modern artisanal soap market behaves drastically differently than legacy detergent networks. Buyers select boutique botanical, cold-process, and goat-milk soaps seeking therapeutic and luxurious experiences rather than baseline utility. Their purchasing decision revolves directly around visual validation. Can they observe the actual swirl of the colors? Can they verify the embedded oatmeal flakes? Utilizing <strong>custom soap boxes with window</strong> layouts immediately eradicates buyer skepticism, replacing vague marketing promises with tangible visible proof. The transparency establishes massive brand luxury across narrow retail spaces.
                            </p>
                            <p>
                                However, soap represents a complex formulation requiring highly specialized environmental guarding. Exposing the soap must never compromise protective isolation. Standard cardboard reacts poorly to humidity, risking the structural melt of corners, while the soap's lipid oils risk seeping into the board causing horrific blotching. At CustomPackMakers, we combat these hurdles employing precision die-cuts, fortified with internal wax linings, and high-barrier PET transparent tracking patches—delivering the window's visual leverage while guaranteeing protective longevity.
                            </p>

                            <h3>Why Opt for Window Variations Over Solid Cartons?</h3>
                            <p>
                                Artisan bar-goods demand multi-sensory marketing interactions. Solid tuck boxes block visual discovery entirely. 
                            </p>
                            <ul>
                                <li><strong>Pre-Evaluation Factor:</strong> Customers assess texture, embedded ingredients, and coloration manually. Denying them visual access creates unnecessary cognitive boundaries against high-ticket pricing.</li>
                                <li><strong>Aromatic Penetration:</strong> Die-cuts can be formulated as 'open air' cuts without sealing the plastic film, simultaneously exposing the visual matrix and venting the natural essential oils to hook passing foot traffic via scent.</li>
                                <li><strong>Diminished Handling Damage:</strong> If blocked entirely inside a carton, browsers tend to aggressively rip retail packaging open to inspect the product, resulting in destroyed units unsellable to others. Window boxes solve inspection needs instantly.</li>
                            </ul>

                            <h3>Balancing Visibility With Unyielding Box Rigidity</h3>
                            <p>
                                Extensive architectural precision is required when removing 40% of the front paneling of a box specifically built to house dense 5oz to 8oz soap blocks. If the substrate is cheap, the remaining borders cave under stacking pressures during distribution routines. 
                            </p>
                            <p>
                                CustomPackMakers anchors these cuts against high-end 18pt up to 24pt SBS paperboard density margins, guaranteeing the hollowed sections lack no load-bearing tension. The transparent plastic patch pasted internally acts as a high-tensile bridge between the cut walls, eliminating bending or warped buckling altogether. The results are elegantly crisp folded corners scaling cleanly up wholesale distribution pallets regardless of sheer volume.
                            </p>

                            <h3>Tackling The Chemical Nature of Cosmetics</h3>
                            <p>
                                Essential oils, heavy lye variations, and high glycerin outputs all aggressively test packaging endurance. Uncoated paper absorbs the soap's ambient moisture resulting in discoloration mapping alongside weakened rigidity. 
                            </p>
                            <p>
                                We combat these physical anomalies by offering specialized lamination methodologies. Selecting aquatic resistant food-grade aqueous coatings or thin PET thermal linings directly onto the internal walls intercepts all moisture diffusion routes. Your branding retains an exquisite matte or gloss finish outwardly immune to interior seepage, maintaining a strictly pristine image up until the final unboxing.
                            </p>

                            <h3>Premium Framing Textures That Scale Value</h3>
                            <p>
                                Using the window exclusively as a frame elevates the perception. Embellish the border geometries surrounding your viewing pane with tactile additions enforcing the luxury profile. Integrating embossed brand topography immediately alongside the viewing patch heightens tactile engagement. Striking metallic foil stamping mirroring geometric or floral vectors offsets the raw aesthetic of the organic soap brilliantly. Unify this with dark velvet soft-touch laminations to construct incredibly satisfying tactile feedback commanding premium transaction rates.
                            </p>

                            <h3>Scaling Wholesale Orders Environmentally</h3>
                            <p>
                                Soap brands typically champion organic footprints natively in their marketing profiles. Hypocritical material sourcing on the packaging ruins brand standing immediately. Consequentially, we deploy window viewing patches fabricated utilizing PLA (Polylactic Acid) biodegradable plastics partnered closely with unbleached organic Kraft paper. Every element is printed applying solely soy-based inks forming an end-of-life completely compostable cycle. 
                            </p>
                            <p>
                                Whether dispatching hundreds of units for a small local boutique or executing 10,000 unit heavy-scale deployments across commercial pipelines within our firm 8-10 day turnaround span, CustomPackMakers establishes your structural bedrock. Solidify your shelf dominance safely. Inquire today for your optimized, luxury window packaging iteration.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <RelatedProductWindowPackaging />

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
                            Implementing structural integrity against intense cosmetics logistics.
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
                                        Flawless Oil & Moisture Barriers
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Uncoated cardboards stain easily with high lipid artisan soaps. Our specific moisture-guard laminates isolate the board from internal seepage, retaining pristine graphics and exterior rigid shapes effortlessly.
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
                                        High-Volume Structural Density
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Integrating massive front-panel viewing elements risks board crushing under wholesale stacking pressures. Our engineering calibrates the use of heavy-weight 24pt board structures distributing weights away from compromised walls entirely.
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
                                        Green Verified Sourcing
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Partner your bio-centric organic soaps with identically aligned green manufacturing. Harness fully compostable kraft paperboards, soy-inks, and PLA bio-based window panes completing a guilt-free holistic sales package.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img
                                    src={productImg}
                                    alt="Premium Soap Boxes With Windows"
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

            <section className="py-10 lg:py-12 bg-white overflow-hidden relative">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="relative group">
                            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] border border-primary/20 shadow-2xl transform transition-transform duration-700 hover:scale-[1.02]">
                                <img
                                    src={productImg}
                                    alt="Differentiate Soap Boxes"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                            </div>
                            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-60" />
                            <div className="absolute -z-10 -top-8 -right-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl opacity-60" />
                        </div>

                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                                Transmit the <span className="text-primary">Olfactory & Visual</span> Experience
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                Differentiating your soap product lines in dense marketplace settings resides in abandoning standard opaque logic. When your product embodies unique botanical textures, stunning gradient swirls, or sharp angular hand-cuts, keeping it caged inside heavy boards directly limits impulse buying. CustomPackMakers empowers boutique soap craftsmen to design expansive custom-shaped window cutouts—optionally uncovered to naturally drift essential oil scents outward, or heavily sealed in clear anti-scratch polymer films blocking retailer shelving dust entirely. Heighten prestige combining foil framing around the cutouts and robust organic kraft paper stocks achieving unadulterated luxury.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-6 bg-slate-50">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                                    Frequently Asked Questions
                                </h2>
                                <p className="text-base text-muted-foreground">
                                    Clarity into the structural parameters required for custom bar protection.
                                </p>
                            </div>

                            <Accordion type="single" collapsible defaultValue="item-1" className="w-full space-y-2">
                                {[
                                    {
                                        id: "item-1",
                                        question: "Can I leave the window cutout open without plastic film?",
                                        answer: "Absolutely. Many soap vendors prefer open die-cuts (vented windows) because it allows the organic fragrances to disperse directly into the retail environment, enticing bypassing customers effortlessly."
                                    },
                                    {
                                        id: "item-2",
                                        question: "How do you prevent soap oils from ruining the box exterior?",
                                        answer: "We offer specialized internal lipid-resistant laminations or aqueous coatings which definitively block glycerin and essential oils from migrating through the cardstock structures, preventing gross blotchy staining."
                                    },
                                    {
                                        id: "item-3",
                                        question: "Are your window boxes eco-friendly options available?",
                                        answer: "Yes, you can utilize heavy organic unbleached kraft papers paired with bio-degradable PLA transparent window films, constructing a 100% compostable offering catering to green demographics perfectly."
                                    },
                                    {
                                        id: "item-4",
                                        question: "Can I order multiple designs in the same wholesale batch? ",
                                        answer: "Yes, utilizing our advanced digital printing arrays, we easily accommodate split-run orders—matching separate scents, colors, and varied logos dynamically while maintaining rapid bulk volume efficiencies."
                                    },
                                    {
                                        id: "item-5",
                                        question: "How long until I receive my packaging?",
                                        answer: "Our standardized operations fulfill custom production mandates within 8 to 10 working days following direct design proof approvals. Reach out early for specialized time-sensitive logistics."
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
                                alt="Soap Windows Packages FAQ"
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

export default SoapBoxesWithWindow;
