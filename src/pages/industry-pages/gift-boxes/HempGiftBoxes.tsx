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
import { RelatedProductGift } from "@/components/RelatedProductGift";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";

// Product images
import hempGiftBoxeshero from "@/assets/industry/gift-boxes/Hemp-Gift-Boxes/img-hero.webp";
import hempGiftBoxesimg1 from "@/assets/industry/gift-boxes/Hemp-Gift-Boxes/img-1.webp";
import hempGiftBoxesimg2 from "@/assets/industry/gift-boxes/Hemp-Gift-Boxes/img-2.webp";
import hempGiftBoxesimg3 from "@/assets/industry/gift-boxes/Hemp-Gift-Boxes/img-3.webp";
import hempGiftBoxesimg4 from "@/assets/industry/gift-boxes/Hemp-Gift-Boxes/img-4.webp";
import hempGiftBoxesimg5 from "@/assets/industry/gift-boxes/Hemp-Gift-Boxes/img-5.webp";
import hempGiftBoxesimg6 from "@/assets/industry/gift-boxes/Hemp-Gift-Boxes/img-whychoose.webp";
import hempGiftBoxesimg7 from "@/assets/industry/gift-boxes/Hemp-Gift-Boxes/img-different.webp";
import FAQimage from "@/assets/FAQ-image.webp";

const HempGiftBoxes = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    const productImages = [
        { src: hempGiftBoxesimg1, alt: "Hemp Gift Boxes - Main View" },
        { src: hempGiftBoxesimg2, alt: "Hemp Gift Boxes - Lifestyle Shot" },
        { src: hempGiftBoxesimg3, alt: "Hemp Gift Boxes - Side Angle" },
        { src: hempGiftBoxesimg4, alt: "Hemp Gift Boxes - Detail Shot" },
        { src: hempGiftBoxesimg5, alt: "Hemp Gift Boxes - Open View" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Hemp Gift Boxes | Eco-Friendly Packaging | CustomPackMakers</title>
                <meta name="description" content="Order sustainable custom hemp gift boxes. Get eco-friendly, biodegradable wholesale packaging with a distinctive natural aesthetic and premium durability." />
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
                                    <Link to="/categories/gift-boxes">Gift Boxes</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Hemp Gift Boxes</BreadcrumbPage>
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
                                Custom <span className="text-primary">Hemp</span> Gift Boxes
                            </h1>
                            {/* STRICTLY 30-35 WORDS */}
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Celebrate sustainability with premium custom hemp gift boxes. We craft eco-friendly, highly durable packaging solutions perfectly designed to beautifully showcase your valuable products while proudly promoting an organic brand identity and environmental responsibility.
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
                                    src={hempGiftBoxeshero}
                                    alt="Custom Hemp Gift Boxes Hero"
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
                        Organic Appeal Meets Sturdy Protection
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            Elevate your corporate gifting strategy with our premium custom hemp packaging. Manufactured from completely renewable resources, hemp offers incredibly durable and eco-friendly packaging solutions that align perfectly with modern sustainability goals. These boxes provide the remarkable structural strength needed to safely ship luxury items while actively reducing your global environmental footprint.
                        </p>
                        <p>
                            Beyond robust protection, hemp paperboard features a distinctively natural, earthy texture that immediately communicates authenticity and high-quality organic appeal. This uniquely elegant tactile experience captivates environmentally conscious consumers and beautifully differentiates your brand. By utilizing completely sustainable and biodegradable materials, our hemp gift boxes guarantee that your products are presented beautifully, efficiently, and responsibly.
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

            {/* TECHNICAL SPECIFICATIONS SECTION */}
            <TechnicalSpecsSection />

            {/* SEO CONTENT SECTION */}
            <section className="py-8 bg-slate-50 border-t border-slate-100">
                <div className="container mx-auto px-[5vw]">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">
                        Revolutionizing Green Packaging with Sustainable Hemp
                    </h2>

                    <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8
                            [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="[&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-8 [&>h3]:mb-3 [&>h3]:first:mt-0 [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-5 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-5 [&>ul]:space-y-2 [&>ul>li]:text-[15px] [&>ul>li]:text-slate-600">

                            <p>The packaging industry is currently undergoing a massive transformation, with businesses rapidly shifting away from single-use plastics and non-renewable resources. At the forefront of this green revolution is hemp-based packaging. Custom Hemp Gift Boxes represent the ultimate fusion of absolute environmental responsibility and premium, highly durable structural engineering. By adopting sustainable hemp packaging, modern brands can proactively meet the ethical demands of environmentally conscious consumers while simultaneously securing unmatched product protection and distinct aesthetic value.</p>

                            <h3>The Rise of Sustainable Packaging</h3>
                            <p>Today’s consumers are more environmentally aware than ever before, actively scrutinizing the sustainability practices of the brands they support. Packaging is often the very first physical interaction a customer has with a product, making it a critical aspect of brand perception. Transitioning to green packaging is no longer just a niche trend; it is a fundamental business necessity for brands looking to build long-term trust, foster customer loyalty, and proudly demonstrate a genuine commitment to global environmental stewardship.</p>
                            <ul>
                                <li><strong>Meeting Consumer Demands:</strong> Market research consistently shows that a vast majority of modern consumers strongly prefer products packaged in sustainable, easily recyclable materials, and are even willing to pay a premium for brands that prioritize eco-friendly initiatives.</li>
                                <li><strong>Enhancing Brand Reputation:</strong> Demonstrating tangible commitments to sustainability powerfully elevates your corporate image. Delivering products in incredibly durable, earth-friendly hemp clearly communicates a high standard of core ethics and deeply resonates with key demographics.</li>
                                <li><strong>Future-Proofing Your Business:</strong> As global regulations regarding single-use plastics and packaging waste become increasingly strict, transitioning to renewable resources like hemp ensures your supply chain remains resilient, legally compliant, and ahead of the industry curve.</li>
                            </ul>

                            <h3>Benefits of Hemp Fiber</h3>
                            <p>Hemp is widely recognized as one of the strongest, most versatile, and rapidly renewable natural fibers on the planet. When engineered into premium packaging paperboard, it offers a myriad of structural and environmental advantages that vastly outperform traditional wood-pulp cardboard and environmentally harmful synthetics.</p>
                            <ul>
                                <li><strong>Exceptional Tensile Strength:</strong> Hemp fibers are naturally much longer and significantly stronger than standard wood fibers. This translates to incredibly durable packaging that possesses extreme tear resistance and structural rigidity, ensuring your delicate products are safely secured during complex transit operations.</li>
                                <li><strong>Rapidly Renewable Resource:</strong> Unlike trees, which can take decades to mature before harvesting, industrial hemp grows remarkably fast, yielding high quantities of usable fiber in a remarkably short period. This rapid cultivation cycle makes hemp an exceptionally sustainable agricultural resource.</li>
                                <li><strong>Reduced Chemical Processing:</strong> The manufacturing process required to convert raw hemp fiber into usable packaging paperboard generally requires fewer harsh toxic chemical treatments and significantly less water consumption compared to traditional wood pulp processing, further minimizing environmental impact.</li>
                            </ul>

                            <h3>Custom Printing on Kraft and Hemp</h3>
                            <p>Transitioning to eco-friendly packaging does not mean sacrificing visual appeal or brand identity. Our Custom Hemp Gift Boxes feature smooth surfaces specifically optimized for high-definition custom printing, ensuring your logos, typography, and vibrant brand messaging are brilliantly reproduced while maintaining the substrate's unique natural charm.</p>
                            <ul>
                                <li><strong>Eco-Friendly Inks:</strong> We exclusively utilize advanced soy-based and water-based inks that produce stunning, fade-resistant vibrant colors while remaining completely free of harmful volatile organic compounds (VOCs). These inks align perfectly with the sustainable nature of the hemp material.</li>
                                <li><strong>Complementary Aesthetics:</strong> The slightly textured, unbleached, natural earthy tone of hemp paperboard provides a gorgeous rustic backdrop that creatively enhances minimalist designs, making dark inks and vibrant natural colors pop beautifully against the organic surface.</li>
                                <li><strong>Versatile Finishing Options:</strong> Despite its natural texture, hemp packaging perfectly accommodates sophisticated finishing techniques. We can expertly apply foil stamping for a touch of luxury or precision embossing to create an unforgettable, premium 3D tactile experience.</li>
                            </ul>

                            <h3>Complete Biodegradability and Circular Economy</h3>
                            <p>The ultimate goal of genuine "green packaging" is to ensure an end-of-life cycle that actively benefits the earth rather than polluting it. Hemp packaging fundamentally supports the concept of a circular economy, where materials are responsibly utilized, easily recycled, and eventually seamlessly returned to nature.</p>
                            <ul>
                                <li><strong>100% Biodegradable and Compostable:</strong> Unlike synthetic packaging that persists in landfills for centuries, natural hemp paperboard is entirely biodegradable. When disposed of correctly, it gracefully breaks down into organic matter in a relatively short timeframe, enriching the soil naturally.</li>
                                <li><strong>Highly Recyclable:</strong> Hemp packaging can be easily integrated into standard municipal paper recycling streams alongside traditional corrugated cardboard. Due to the inherent strength of hemp fibers, the material can successfully be recycled multiple times without significant structural degradation.</li>
                                <li><strong>Zero Landfill Impact:</strong> By choosing Custom Hemp Gift Boxes, you are actively participating in the rapid reduction of global packaging waste, ensuring your business's environmental footprint is minimized and contributing positively to critical zero-landfill initiatives.</li>
                            </ul>

                        </div>
                    </div>
                </div>
            </section>

            {/* RELATED PRODUCTS CAROUSEL */}
            <RelatedProductGift />

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
                        {/* LEFT: Features */}
                        <div className="space-y-5">
                            {/* Feature 1 - STRICTLY 35-40 words */}
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Eco-Conscious Brand Identity</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Demonstrate your commitment to environmental sustainability perfectly by utilizing completely renewable hemp materials. This green approach significantly lowers your ecological footprint while powerfully resonating with today's environmentally conscious modern consumers beautifully.
                                    </p>
                                </div>
                            </div>
                            <div className="w-full h-px bg-slate-100" />
                            {/* Feature 2 - STRICTLY 35-40 words */}
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors duration-300">
                                        <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Superior Material Strength</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Rely on the exceptional natural tensile strength of hemp fibers effectively. Our incredibly durable packaging guarantees your completely secure products arrive safely during complex transit, effortlessly preventing costly damage efficiently.
                                    </p>
                                </div>
                            </div>
                            <div className="w-full h-px bg-slate-100" />
                            {/* Feature 3 - STRICTLY 35-40 words */}
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors duration-300">
                                        <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Complete Customization Options</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Flawlessly integrate vivid graphics directly onto organic packaging surfaces cleanly. Create beautifully distinct boxes featuring sophisticated finishes that smartly matching your unique corporate vision while maintaining charming earthy authenticity permanently.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT: Image */}
                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img src={hempGiftBoxesimg6} alt="Premium Hemp Box" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-7">
                                    <p className="text-white font-bold text-lg leading-snug mb-1">Trusted by 500+ Brands</p>
                                    <p className="text-white/75 text-sm">Delivering premium packaging across North America</p>
                                </div>
                            </div>
                            {/* Badges */}
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

            {/* DIFFERENTIATE SECTION */}
            <section className="py-10 lg:py-12 bg-white overflow-hidden relative">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="relative group">
                            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] border border-primary/20 shadow-2xl transform transition-transform duration-700 hover:scale-[1.02]">
                                <img src={hempGiftBoxesimg7} alt="Differentiate Your Packaging" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                            </div>
                            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-60" />
                            <div className="absolute -z-10 -top-8 -right-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl opacity-60" />
                        </div>
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                                Differentiate Your <span className="text-primary">Sustainable</span> Brand Now
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                In today's highly competitive modern market, adopting sustainable "Green Packaging" is an essential strategy to dramatically stand out. Eco-friendly hemp gift boxes instantly communicate your brand's ethical integrity, attracting an expanding demographic of environmentally conscious shoppers. By expertly blending a premium unboxing experience with absolute organic authenticity, you effortlessly differentiate your sustainable products from standard competitors on any demanding retail shelf.
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
                                    Everything you need to know about our gift packaging services.
                                </p>
                            </div>

                            <Accordion type="single" collapsible defaultValue="item-1" className="w-full space-y-2">
                                {[
                                    { id: "item-1", question: "Are your custom hemp gift boxes 100% biodegradable?", answer: "Yes, our custom hemp gift packaging is one hundred percent biodegradable and easily compostable. Because hemp is a naturally organic material, it efficiently returns to the earth rapidly without leaving any harmful synthetic residues behind." },
                                    { id: "item-2", question: "What kind of texture do natural hemp boxes have?", answer: "Premium hemp packaging features a distinctively organic, slightly textured, earthy feel. This beautifully tactile characteristic immediately communicates a high-quality rustic authenticity, providing an incredibly unique unboxing experience that perfectly complements your sustainable corporative brand identity." },
                                    { id: "item-3", question: "Can I print colorful graphics on raw hemp material?", answer: "Absolutely. We utilize advanced printing technologies alongside non-toxic, eco-friendly inks to brightly and flawlessly reproduce your complex, vibrant graphics directly onto the natural hemp surface, ensuring completely impressive, colorful brand visibility remains totally uncompromised." },
                                    { id: "item-4", question: "Do hemp gift boxes cost more than standard cardboard?", answer: "While hemp represents a premium sustainable solution, our highly optimized manufacturing processes reliably guarantee competitive wholesale pricing. The long-term substantial benefits of enhanced brand reputation and increased consumer loyalty actively offset the incredibly modest initial investments." },
                                    { id: "item-5", question: "How long is the production time for custom hemp packaging?", answer: "Our efficient production process seamlessly guarantees an industry-leading standard turnaround time of just 8 to 10 business days following your final artwork approval, safely ensuring your sustainable custom packaging quickly reaches your shipping facilities on schedule." }
                                ].map((faq) => (
                                    <AccordionItem key={faq.id} value={faq.id} className="border border-slate-200 rounded-lg bg-white overflow-hidden data-[state=open]:border-primary data-[state=open]:ring-1 data-[state=open]:ring-primary/20 data-[state=open]:bg-primary/5 transition-all duration-300">
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
                            <img src={FAQimage} alt="FAQ Hemp Packaging" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
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

export default HempGiftBoxes;
