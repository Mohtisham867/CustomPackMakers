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
import chocolateGiftBoxeshero from "@/assets/gift-boxes/Chocolate-Gift-Boxes/img-hero.png";
import chocolateGiftBoxesimg1 from "@/assets/gift-boxes/Chocolate-Gift-Boxes/img-1.png";
import chocolateGiftBoxesimg2 from "@/assets/gift-boxes/Chocolate-Gift-Boxes/img-2.png";
import chocolateGiftBoxesimg3 from "@/assets/gift-boxes/Chocolate-Gift-Boxes/img-3.png";
import chocolateGiftBoxesimg4 from "@/assets/gift-boxes/Chocolate-Gift-Boxes/img-4.png";
import chocolateGiftBoxesimg5 from "@/assets/gift-boxes/Chocolate-Gift-Boxes/img-5.png";
import chocolateGiftBoxesimg6 from "@/assets/gift-boxes/Chocolate-Gift-Boxes/img-whychoose.png";
import chocolateGiftBoxesimg7 from "@/assets/gift-boxes/Chocolate-Gift-Boxes/img-different.png";
import FAQimage from "@/assets/FAQ-image.png";

const ChocolateGiftBoxes = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    const productImages = [
        { src: chocolateGiftBoxesimg1, alt: "Chocolate Gift Boxes - Main View" },
        { src: chocolateGiftBoxesimg2, alt: "Chocolate Gift Boxes - Lifestyle Shot" },
        { src: chocolateGiftBoxesimg3, alt: "Chocolate Gift Boxes - Side Angle" },
        { src: chocolateGiftBoxesimg4, alt: "Chocolate Gift Boxes - Detail Shot" },
        { src: chocolateGiftBoxesimg5, alt: "Chocolate Gift Boxes - Open View" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Chocolate Gift Boxes | Premium Confectionery Packaging</title>
                <meta name="description" content="Order elegant custom chocolate gift boxes. Wholesale food-safe confectionery packaging with premium protective inserts and luxurious finishes." />
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
                                <BreadcrumbPage>Chocolate Gift Boxes</BreadcrumbPage>
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
                                Custom <span className="text-primary">Chocolate</span> Gift Boxes
                            </h1>
                            {/* STRICTLY 30-35 WORDS */}
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Indulge your customers with exquisite custom chocolate gift boxes. We create incredibly elegant, food-safe packaging solutions specifically designed to offer a luxury presentation while perfectly preserving the absolute freshness of your premium, delicate chocolates.
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
                                    src={chocolateGiftBoxeshero}
                                    alt="Custom Chocolate Gift Boxes Hero"
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
                        Luxurious Protection for Artisan Chocolates
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            Presenting premium gourmet confectionery demands exceptional customized packaging that perfectly balances breathtaking aesthetic beauty with uncompromising physical protection. Our custom chocolate gift boxes are meticulously engineered utilizing only the highest quality, completely food-grade materials to ensure your delicate sweets remain perfectly safe and incredibly fresh from production to the final consumer. The exceptional structural integrity of our rigid packaging flawlessly prevents any crushing or shifting during transit, reliably securing even your most fragile artisan truffles.
                        </p>
                        <p>
                            Beyond rigorous physical protection, we specialize in delivering a truly sophisticated unboxing experience that directly reflects the extraordinary quality of the luxurious chocolates inside. By combining elegant bespoke designs, precise custom-fitted inserts, and spectacular tactile finishes, our bespoke packaging instantly transforms a simple purchase into a memorable, prestigious gifting moment that beautifully captivates your discerning clientele and builds lasting brand loyalty.
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
                        Unleashing Confectionery Elegance With Stunning Packaging
                    </h2>

                    <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8
                            [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="[&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-8 [&>h3]:mb-3 [&>h3]:first:mt-0 [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-5 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-5 [&>ul]:space-y-2 [&>ul>li]:text-[15px] [&>ul>li]:text-slate-600">

                            <p>
                                The gourmet confectionery industry is defined by indulgence, celebration, and premium aesthetics. In this highly competitive market, the actual product is only half of the consumer experience; the other half is overwhelmingly influenced by the packaging. Custom chocolate gift boxes serve as the crucial first impression, an unspoken promise of the exquisite taste and luxurious quality that lies within. To truly succeed and capture the attention of discerning buyers, leading brands must invest in packaging that perfectly harmonizes robust physical protection with an incredibly elegant, emotionally resonant visual presentation.
                            </p>

                            <h3>Importance of Food-Safe Packaging</h3>
                            <p>
                                When dealing with delicate, edible products like premium artisan chocolates, the absolute primary concern must always be uncompromising consumer safety and rigorous product preservation. Chocolate is notoriously sensitive to environmental factors, easily absorbing unwanted ambient odors, drawing in excess moisture, and risking rapid degradation if not properly shielded. Therefore, utilizing meticulously certified food-grade packaging materials is an absolutely non-negotiable requirement for any serious gourmet brand striving for excellence.
                            </p>
                            <ul>
                                <li><strong>FDA-Approved Materials:</strong> We rigorously ensure that every single inner surface of our custom chocolate gift boxes that may come into direct or indirect contact with your delicate sweets is manufactured using strictly FDA-approved, fully hygienic materials. This prevents toxic chemical leaching and guarantees total safety.</li>
                                <li><strong>Preserving Pristine Freshness:</strong> High-quality protective packaging acts as a formidable barrier against detrimental outside humidity, intense temperature fluctuations, and airborne contaminants. This significantly extends the shelf life of your valuable chocolates, ensuring they taste incredibly fresh and absolutely perfect when finally consumed.</li>
                                <li><strong>Brand Trust and Reliability:</strong> Demonstrating an unwavering, transparent commitment to utilizing premium food-safe packaging drastically elevates consumer trust. Discerning buyers feel completely confident purchasing your luxurious chocolate products, knowing you prioritize their intrinsic health, safety, and ultimate gastronomic satisfaction above everything else.</li>
                            </ul>

                            <h3>Custom Inserts and Dividers for Chocolates</h3>
                            <p>
                                Artisan chocolates and gourmet truffles are delicate miniature works of art that require specialized internal structural support. Shipping these fragile confections without carefully engineered protection often results in disastrous crushing, unsightly melting, and ruined arrangements. Our precisely manufactured custom inserts and dedicated dividers provide the essential architectural stability required to safely transport your expensive products without compromising their original visual beauty.
                            </p>
                            <ul>
                                <li><strong>Precise Structural Snugness:</strong> We masterfully design custom vac-formed or meticulously folded paperboard cavities that perfectly cradle each individual chocolate piece. This exact, incredibly snug fit completely eliminates dangerous internal shifting and violent collisions during complex shipping and rigorous retail handling processes entirely.</li>
                                <li><strong>Elevated Visual Organization:</strong> Premium dividers transform a chaotic jumble of sweets into a stunning, beautifully symmetrical presentation. When the consumer finally opens the gorgeous packaging, they are immediately greeted by a breathtakingly organized, highly professional display that vividly highlights your incredible culinary craftsmanship.</li>
                                <li><strong>Versatile Material Options:</strong> From remarkably eco-friendly kraft paper partitions to extravagantly luxurious, velvet-lined plastic trays, we offer an extensive myriad of highly attractive divider solutions carefully tailored to match your specific corporate brand aesthetic and exacting budgetary requirements brilliantly gracefully efficiently completely correctly optimally seamlessly carefully expertly.</li>
                            </ul>

                            <h3>Luxury Finishing: Velvet Touch and Gold Foiling</h3>
                            <p>
                                To effectively command premium luxury pricing and successfully position your sophisticated artisan chocolates as an elite indulgence, your external packaging must physically feel and visually look remarkably expensive. Implementing complex, high-end specialty finishes fundamentally alters the tactile and aesthetic landscape of your custom gift boxes, deeply engaging the consumer's senses and effortlessly cementing your brand's exclusive, highly prestigious market status.
                            </p>
                            <ul>
                                <li><strong>Mesmerizing Hot Gold Foiling:</strong> The strategic application of brilliant, highly reflective metallic gold, stunning silver, or elegant rose gold foil immediately communicates absolute high-end luxury. This gorgeous finishing technique makes your corporate logos and intricate border designs spectacularly pop against darker, matte background colors effortlessly.</li>
                                <li><strong>Sensory Velvet Touch Extravagance:</strong> Our highly sought-after soft-touch laminations and extravagant velvet flocking finishes introduce an incredibly sensual, physically captivating tactile element. Consumers intuitively associate this uniquely smooth, remarkably plush texture with uncompromising quality, making your beautiful chocolate gift boxes an absolute pleasure to physically hold.</li>
                                <li><strong>Sophisticated Spot UV Highlights:</strong> By applying a striking, highly glossy clear coating to very specific, strategically chosen areas of your intricate packaging design, we expertly create a mesmerizing, distinctly modern contrast between dull matte surfaces and beautifully shining graphic elements, drastically increasing overall visual depth.</li>
                            </ul>

                            <h3>Seasonal Branding Opportunities</h3>
                            <p>
                                The gourmet chocolate market is intimately tied to major holidays and special life celebrations. Valentine's Day, Easter, Christmas, and Mother's Day represent massive, incredibly lucrative sales periods inherently driven by premium gifting. Leveraging intelligently designed, distinctly seasonal Custom Chocolate Gift Boxes allows your proactive brand to actively capitalize on these joyful emotional buying trends, significantly accelerating your overall retail success.
                            </p>
                            <ul>
                                <li><strong>Targeted Emotional Connection:</strong> Releasing exclusively limited-edition customized packaging featuring stunning festive colors, joyful seasonal motifs, and uniquely appropriate festive typography instantly deeply resonates with eager consumers actively searching for the absolute perfect, beautifully thematic gift for their cherished loved ones completely successfully magically perfectly.</li>
                                <li><strong>Encouraging Impulse Purchases:</strong> Strikingly gorgeous seasonal variations powerfully stand out on extremely crowded, highly competitive holiday retail shelves. This visually beautiful disruption easily encourages spontaneous impulse purchasing decisions, as hurried shoppers are naturally drawn to convenient, pre-packaged, beautifully themed gift options that require absolutely no further wrapping or preparation. By continually rotating your visual presentation, you generate ongoing excitement and robust recurring revenue throughout the entire calendar year.</li>
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
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Premium Aesthetic Appeal</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Our exquisitely designed luxury packaging instantly elevates the perceived value of your gourmet treats. We blend sophisticated typography with exquisite finishes to create an unforgettable, premium presentation that consistently delights your discerning customers.
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
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Protective & Food-Grade Quality</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        We meticulously utilize strictly FDA-approved food-grade materials to guarantee absolute consumer safety. Our structurally robust packaging effortlessly shields delicate chocolates from damaging moisture, unwanted contamination, and complex transit hazards, preserving ultimate absolute freshness.
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
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Bespoke Customization & Inserts</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Showcase your artisan chocolates flawlessly using our meticulously engineered custom dividers. We enthusiastically manufacture precision inserts that elegantly display individual truffles while safely preventing unwanted movement, guaranteeing a stunningly perfect arranged presentation entirely.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT: Image */}
                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img src={chocolateGiftBoxesimg6} alt="Premium Chocolate Box" className="w-full h-full object-cover" />
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
                                <img src={chocolateGiftBoxesimg7} alt="Differentiate Your Packaging" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                            </div>
                            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-60" />
                            <div className="absolute -z-10 -top-8 -right-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl opacity-60" />
                        </div>
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                                Differentiate Your <span className="text-primary">Confectionery</span> Brand Now
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                In the highly competitive gourmet confectionery market, breathtaking high-end packaging is essential to successfully capturing demanding attention. Exquisite custom chocolate gift boxes instantly communicate a powerful perception of absolute quality and undeniable luxury. By perfectly blending stunning aesthetic design with premium tactile finishes, you effectively elevate your artisan brand’s prestige, easily outshining commercial competitors and establishing your exceptional products as the ultimate elegant choice for discerning luxury buyers.
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
                                    { id: "item-1", question: "Are your chocolate gift boxes made from food-safe materials?", answer: "Yes, all our chocolate gift boxes are rigorously manufactured utilizing strictly FDA-approved, one hundred percent food-grade materials. This completely absolute uncompromising standard beautifully ensures your delicate gourmet confectionery always remains perfectly uncontaminated, fresh, and remarkably safe." },
                                    { id: "item-2", question: "Do you offer custom inserts for individual chocolate truffles?", answer: "Absolutely. We perfectly engineer precise, highly custom dividers specifically designed to effortlessly secure your individual truffles. These elegant structural inserts prevent any damaging shifting during complex transit, securely preserving your beautiful arrangement." },
                                    { id: "item-3", question: "Can I order chocolate packaging with a clear viewing window?", answer: "Yes, we can skillfully integrate crystal-clear, food-safe PVC or PET viewing windows directly into your custom packaging. This beautifully stunning transparent feature wonderfully allows eager consumers to directly admire your brilliantly crafted exquisite artisan chocolates securely." },
                                    { id: "item-4", question: "What is the minimum wholesale order for custom chocolate boxes?", answer: "Our highly flexible, extremely cost-effective manufacturing processes expertly accommodate various strategic business sizes effortlessly. You can beautifully successfully initiate a custom wholesale order starting with surprisingly low minimum quantities, perfectly matching your brand’s specific exact demands." },
                                    { id: "item-5", question: "How quickly can you produce a bulk order of chocolate boxes?", answer: "Our advanced facility efficiently handles massive bulk manufacturing completely flawlessly. You can confidently expect a standard production turnaround beautifully completed between just eight to ten business days following your final comprehensive digital proof design approval smoothly." }
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
                            <img src={FAQimage} alt="FAQ Chocolate Packages" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
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

export default ChocolateGiftBoxes;
