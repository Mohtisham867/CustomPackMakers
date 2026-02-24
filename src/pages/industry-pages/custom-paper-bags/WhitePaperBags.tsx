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
import { RelatedProductPaperBags } from "@/components/RelatedProductPaperBags";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";

import productImage from "@/assets/custom-paper-bags/white-paper-bags.webp";
import FAQimage from "@/assets/FAQ-image.png";

const WhitePaperBags = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    const productImages = [
        { src: productImage, alt: "White Paper Bags - Main View" },
        { src: productImage, alt: "White Paper Bags - Angle View" },
        { src: productImage, alt: "White Paper Bags - Detail View" },
        { src: productImage, alt: "White Paper Bags - Open View" },
        { src: productImage, alt: "White Paper Bags - Bottom View" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>White Paper Bags | Wholesale Custom Printed Bags</title>
                <meta name="description" content="Order white paper bags wholesale. Premium customized printing, durable materials, and eco-friendly options. Fast turnaround and free shipping available!" />
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
                                    <Link to="/industries/custom-paper-bags">Custom Paper Bags</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>White Paper Bags</BreadcrumbPage>
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
                                White Paper Bags
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Discover premium white paper bags manufactured precisely to amplify your brand presence effortlessly. Combining heavy-duty reinforced materials, breathtaking full-color custom printing, and stunning luxury finishes, ensuring maximum consumer impact and reliable structural durability universally.
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
                                    src={productImage}
                                    alt="White Paper Bags Hero"
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
                        <span className="text-xs font-semibold tracking-widest text-primary uppercase">Premium Carry Solutions</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 max-w-3xl">
                        Industry-Leading Custom Printed Packaging
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            Our <strong>white paper bags</strong> represent the absolute pinnacle of wholesale packaging excellence. Precision-engineered for brands that fiercely demand uncompromising quality, these resilient bags thoroughly combine impeccable structural strength with exceptionally vibrant visual reproduction. Whether dominating busy retail environments, executing immense corporate gifting campaigns, or managing extensive foodservice operations, our custom bags immediately instill consumer confidence. Transform conventional paper carriers into phenomenally effective marketing instruments easily featuring exquisite custom lamination, sophisticated foil stamping, alongside spectacular embossed detailing perfectly suited for premium brands.
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
                                    src={productImages[selectedImage]?.src || productImage}
                                    alt={productImages[selectedImage]?.alt || "White Paper Bags"}
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
                                        Custom Bag Quote
                                    </h3>
                                    <form className="space-y-4">
                                        <div className="grid grid-cols-3 gap-3">
                                            <div className="space-y-1.5">
                                                <Label htmlFor="length" className="text-xs font-semibold text-muted-foreground">W (in)</Label>
                                                <Input id="length" type="number" placeholder="8" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">Gusset (in)</Label>
                                                <Input id="width" type="number" placeholder="4" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">H (in)</Label>
                                                <Input id="depth" type="number" placeholder="10" className="h-9 bg-white" />
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
                    <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8
                            [&::-webkit-scrollbar]:w-2
                            [&::-webkit-scrollbar-track]:bg-gray-100
                            [&::-webkit-scrollbar-track]:rounded-full
                            [&::-webkit-scrollbar-thumb]:bg-primary
                            [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="
                            [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-slate-900 [&>h2]:mb-4
                            [&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-8 [&>h3]:mb-3 [&>h3]:first:mt-0
                            [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-5
                            [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-5 [&>ul]:space-y-2
                            [&>ul>li]:text-[15px] [&>ul>li]:text-slate-600">

                            <h2>Comprehensive Guide to Premium White Paper Bags Solutions</h2>
                            <p>
                                When it comes to presenting your brand with elegance and structural integrity, our <strong>White Paper Bags</strong> are completely unparalleled within the competitive marketplace. We understand that customized packaging acts as your most potent silent salesperson. By deploying advanced manufacturing processes, we construct bags that serve as both reliable transport vessels and magnificent billboards for your core brand identity. From upscale retail environments demanding high-density craft to heavy-duty food service spaces requiring grease-resistant endurance, our versatile bags accommodate any rigorous demand your industry imposes beautifully.
                            </p>
                            <p>
                                Precision-engineered to meet stringent dimensional tolerances, each unit is die-cut utilizing specialized equipment that guarantees perfectly uniform assemblies. Whether your focus is strictly on lightweight consumer convenience or you require highly fortified carriers designed specifically for multi-unit capacity, we offer totally optimized material specifications. We fuse classical packaging traditions with progressive fabrication methods, ultimately culminating in stunning White Paper Bags that perform flawlessly while elevating customer unboxing experiences entirely.
                            </p>

                            <h3>Unmatched Material Excellence and Core Integrity</h3>
                            <p>
                                The absolute foundation of phenomenal White Paper Bags directly relies upon the meticulous selection of supreme substrates. We source strictly premium-grade kraft papers ranging heavily from standardized 60 GSM up to ultra-thick 150 GSM variations, guaranteeing completely unparalleled tensile durability.
                            </p>
                            <ul>
                                <li><strong>Virgin Kraft Paper:</strong> Utilizing unbleached, long-fiber pulp that provides exceptional tearing resistance, granting maximum load stability during rigorous consumer transit scenarios.</li>
                                <li><strong>Coated Bleached Board:</strong> Offering an incredibly smooth, immaculate printing surface perfect for photographic-quality branding and vivid graphic reproduction across every single bag.</li>
                                <li><strong>Recycled Post-Consumer Kraft:</strong> Engineered for environmentally conscious brands demanding strong performance whilst aggressively minimizing ongoing ecological footprints and maintaining strict sustainability mandates.</li>
                                <li><strong>Grease-Resistant Formulations:</strong> Impregnated with advanced eco-friendly barriers specifically preventing unattractive oil saturation, vital for food service and commercial bakery applications.</li>
                            </ul>
                            <p>
                                Every single substrate batch undertakes rigorous stress testing, meticulously evaluating both Mullen burst strength and edge crush metrics, ensuring absolutely zero catastrophic failures occur when consumers utilize these bags in real-world scenarios. We continually optimize fiber orientations during the manufacturing process to drastically enhance vertical load-bearing strength.
                            </p>

                            <h3>Advanced Customization and Proprietary Finishes</h3>
                            <p>
                                Differentiating your specific White Paper Bags within a deeply saturated retail ecosystem immediately mandates visually striking aesthetic customizations. We proudly offer an incredibly diverse portfolio of premium finishing techniques explicitly designed to aggressively capture consumer attention and communicate premium value.
                            </p>
                            <ul>
                                <li><strong>Precision Hot Foil Stamping:</strong> Applying luxurious metallic films utilizing localized heat and immense pressure to create magnificent reflective contrast against matte base materials.</li>
                                <li><strong>Tactile Embossing & Debossing:</strong> Physically altering the paper substrate to produce stunning three-dimensional topographies, elevating the perceived brand value significantly through touch.</li>
                                <li><strong>High-Contrast Spot UV Coating:</strong> Strategically layering ultra-gloss polymers over precise design elements mapping directly against smooth velvet laminations to formulate breathtaking visual friction.</li>
                                <li><strong>Customized Handle Formations:</strong> Upgrading basic carriers utilizing twisted paper strings, luxurious satin ribbons, or ultra-strong die-cut reinforced patches ensuring ultimate consumer comfort.</li>
                                <li><strong>Dynamic Die-Cut Window Integrations:</strong> Strategically removing customized geometric shapes whilst sealing them utilizing crystal clear PET films, beautifully showcasing internal products visually.</li>
                            </ul>

                            <h3>State-of-the-Art Printing Capabilities</h3>
                            <p>
                                Deploying immense visual fidelity across your White Paper Bags requires accessing world-class printing infrastructures. Our facilities heavily leverage state-of-the-art multi-station offset lithography systems alongside high-speed industrial flexographic presses, accommodating both intricate photographic artwork alongside massive high-volume corporate rollouts effectively.
                            </p>
                            <p>
                                We strictly maintain absolute color consistency across every single production run utilizing advanced computerized Pantone matching systems. Our proprietary ink formulations heavily utilize soy-based and aqueous compositions, ensuring magnificent vibrant saturation whilst completely eliminating harmful volatile organic compound emissions occurring during the curing process. This approach guarantees stunning visuals paired securely with uncompromising environmental safety standards.
                            </p>

                            <h3>Commitment to Environmental Sustainability</h3>
                            <p>
                                Modern consumers aggressively mandate profound corporate responsibility. Our custom White Paper Bags are formulated primarily supporting this critical ideological shift. The vast majority of our paper variants utilize fibers sourced directly from responsibly managed, heavily monitored forests certified under the strict guidelines of the Forest Stewardship Council (FSC).
                            </p>
                            <p>
                                By intentionally eliminating archaic plastic laminations where functionally possible and subsequently substituting them alongside advanced biodegradable aqueous barrier coatings, we heavily assure that these bags degrade naturally within standard composting facilities. This proactive strategy allows forward-thinking brands utilizing our packaging to forcefully market their products alongside certified eco-friendly credentials efficiently.
                            </p>

                            <h3>Wholesale Fulfillment and Dedicated Service</h3>
                            <p>
                                Scaling operations requires partnering securely alongside a highly reliable manufacturing hub capable of consistently delivering precise quality upon strict deadlines. Our streamlined industrial workflows actively facilitate exceptionally fast, incredibly consistent production speeds whether you require initial prototype runs involving hundreds or massive logistical campaigns necessitating hundreds of thousands of identical units.
                            </p>
                            <p>
                                You receive comprehensive guidance scaling directly from initial blueprinting and sophisticated structural 3D renderings through the entire automated manufacturing process until final palletized delivery. We guarantee structural perfection, aesthetic brilliance, and complete client satisfaction regarding every single White Paper Bags batch deployed.
                            </p>

                        </div>
                    </div>
                </div>
            </section>

            {/* RELATED PRODUCTS CAROUSEL */}
            <RelatedProductPaperBags />

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
                            {/* Feature 1 */}
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
                                        Exceptional Material Endurance
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        We engineer every single bag utilizing exceedingly robust premium kraft materials and fortified structural adhesives. This exceptional construction guarantees maximum load bearing capacity, thoroughly eliminating tearing risks and thoroughly protecting your valuable goods during rigorous consumer transit perfectly.
                                    </p>
                                </div>
                            </div>

                            <div className="w-full h-px bg-slate-100" />

                            {/* Feature 2 */}
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
                                        Exquisite Visual Finishes
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Customize your carriers utilizing spectacular high-resolution printing alongside magnificent hot foil stamping and elegant spot UV coatings. These striking visual elements immediately capture consumer attention, instantly elevating your perceived product value and distinguishing your aesthetics dramatically.
                                    </p>
                                </div>
                            </div>

                            <div className="w-full h-px bg-slate-100" />

                            {/* Feature 3 */}
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
                                        Unmatched Sustainability Standards
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Our specialized manufacturing heavily utilizes completely biodegradable substrates paired directly alongside premium eco-friendly soy-based inks. This proactive packaging approach significantly minimizes overall ecological footprints while perfectly aligning your corporate identity securely alongside modern conscious consumer expectations effortlessly.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img
                                    src={productImage}
                                    alt="White Paper Bags Packaging"
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

            {/* DIFFERENTIATE YOUR BRAND SECTION */}
            <section className="py-10 lg:py-12 bg-white overflow-hidden relative">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="relative group">
                            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] border border-primary/20 shadow-2xl transform transition-transform duration-700 hover:scale-[1.02]">
                                <img
                                    src={productImage}
                                    alt="Differentiate Your Brand"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                            </div>
                            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-60" />
                            <div className="absolute -z-10 -top-8 -right-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl opacity-60" />
                        </div>

                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                                Transform Conventional Carries into <span className="text-primary">Stunning Billboards</span>
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                Never underestimate the phenomenal marketing potential inherently contained within premium custom packaging. Our elite team crafts stunning white paper bags expertly designed precisely to differentiate your specific products instantly across highly competitive retail landscapes. By deploying gorgeous ultra-high-resolution custom graphics seamlessly alongside luxurious tactile structural finishes, we effectively guarantee your branded bags aggressively demand consumer attention effortlessly. Step away definitively from completely forgettable generic paper carriers immediately and enthusiastically upgrade toward flawlessly manufactured masterpieces rigorously engineered to captivate audiences entirely.
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
                                    We're confident that you will love our products and service.
                                </p>
                            </div>

                            <Accordion type="single" collapsible defaultValue="item-1" className="w-full space-y-2">
                                {[
                                    {
                                        id: "item-1",
                                        question: "Can these bags securely hold extremely heavy localized loads?",
                                        answer: "Absolutely. We strictly enforce manufacturing utilizing exclusively ultra-high-density premium kraft materials paired directly alongside heavily fortified structural adhesives reliably guaranteeing uncompromising maximum carrying capacity flawlessly."
                                    },
                                    {
                                        id: "item-2",
                                        question: "Do you offer perfectly customized accurate dimensioning?",
                                        answer: "Certainly! We expertly manage massive fully customized fabrication specifically engineering bags meticulously ensuring they accommodate your exact physical retail products seamlessly without awkward aesthetic gaps entirely."
                                    },
                                    {
                                        id: "item-3",
                                        question: "Are these customized paper structures completely environmentally sustainable?",
                                        answer: "Yes indeed. We actively champion ecological manufacturing heavily utilizing beautifully fully recyclable substrates perfectly augmented alongside biodegradable soy-based inks significantly minimizing destructive prolonged environmental deterioration permanently."
                                    },
                                    {
                                        id: "item-4",
                                        question: "Can I aggressively print dynamic full-color photography across surfaces?",
                                        answer: "Definitely. We possess state-of-the-art technological infrastructures delivering profoundly vibrant, phenomenally sharp photographic precision allowing immense detailed graphical expressions cleanly capturing consumer focus instantly."
                                    },
                                    {
                                        id: "item-5",
                                        question: "What specific rapid turnaround time do you accurately predict?",
                                        answer: "Under normalized manufacturing operations we heavily anticipate successfully dispatching premium inventory deliveries between approximately 8 to 10 typical business days continuously following initial finalized design confirmations."
                                    },
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
                                alt="Frequently Asked Questions"
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

export default WhitePaperBags;
