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
import exoticWeedBag from "@/assets/weed-bags/exotic-weed-bag.webp";
import weedBagsHero from "@/assets/weed-bags/weed-bags-hero.webp";
import smellProofWeedBags from "@/assets/weed-bags/smell-proof-weed-bags.webp";
import weedBags35 from "@/assets/weed-bags/weed-bags-3-5.webp";
import zipWeedBags from "@/assets/weed-bags/zip-weed-bags.webp";

// FAQ image
import FAQimage from "@/assets/FAQ-image.png";

const ExoticWeedBag = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    // Product images for gallery
    const productImages = [
        { src: exoticWeedBag, alt: "Exotic Weed Bag - Main Image" },
        { src: weedBagsHero, alt: "Exotic Weed Bag - Hero Display" },
        { src: smellProofWeedBags, alt: "Exotic Weed Bag - Smell Proof Barrier" },
        { src: weedBags35, alt: "Exotic Weed Bag - 3.5g Size Example" },
        { src: zipWeedBags, alt: "Exotic Weed Bag - Zipper Detail" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Exotic Weed Bags | High-End Cannabis Packaging</title>
                <meta name="description" content="Order wholesale premium exotic weed bags with custom holographic, soft-touch, and metallic printing. Advanced barrier protection for top-shelf cannabis." />
                <meta name="keywords" content="exotic weed bags, premium mylar bags, custom cannabis packaging, high-end weed bags, smell proof exotic bags" />
                <meta property="og:title" content="Custom Exotic Weed Bags | High-End Cannabis Packaging" />
                <meta property="og:description" content="Elevate your top-shelf flower with custom exotic weed bags. Holographic accents, custom shapes, and maximum freshness retention." />
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
                                <BreadcrumbPage>Exotic Weed Bags</BreadcrumbPage>
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
                                Custom <span className="text-primary">Exotic Weed Bags</span>
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Showcase your top-shelf strains with stunning custom printed exotic weed bags. Premium barrier protection meets jaw-dropping visual appeal to dominate dispensary shelves.
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
                                    src={exoticWeedBag}
                                    alt="Exotic Weed Bags Hero"
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
                        Unleash the Power of High-End Exotic Strain Packaging
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            When you cultivate or source exotic, top-tier cannabis strains, standard packaging simply won't suffice. Our <strong className="text-foreground">custom exotic weed bags</strong> are explicitly designed to reflect the unmatched quality of the flower inside. Crafted with advanced multi-layer films, these premium Mylar bags trap terpenes, block UV rays, and maintain precise humidity levels so your exotics stay frosty, aromatic, and potent from the curing room to the consumer's hands.
                        </p>
                        <p>
                            Aesthetics are just as vital as preservation. We provide dispensaries and cannabis lifestyle brands with the tools to create highly disruptive, luxurious <strong className="text-foreground">custom branded cannabis bags</strong>. Employ holographic layering, metallic foiling, soft-touch matte lamination, and striking spot gloss effects to make your product impossible to ignore. Complete with child-resistant (CR) zippers and precise tear notches, our exotic strain bags offer absolute legal compliance paired with an aggressive, elite retail presence.
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
                                                <Input id="width" type="number" placeholder="5" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">Gusset</Label>
                                                <Input id="depth" type="number" placeholder="2" className="h-9 bg-white" />
                                            </div>
                                        </div>

                                        <div className="space-y-1.5">
                                            <Label htmlFor="quantity" className="text-xs font-semibold text-muted-foreground">Quantity</Label>
                                            <Input id="quantity" type="number" placeholder="5000" className="h-9 bg-white" />
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
                        The Comprehensive Guide to Premium Exotic Weed Bags
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
                                The cannabis industry has evolved rapidly, moving away from amateur packaging to highly sophisticated, branded retail experiences. When your brand produces top-tier, limited-batch, or highly sought-after exotic strains, the packaging you choose must instantly broadcast that exclusivity. Custom Exotic Weed Bags are the ultimate solution for high-end cannabis brands looking to assert dominance in a competitive retail environment. These bags go above and beyond basic functional requirements, utilizing advanced material science and aggressive visual design frameworks to command premium price points and build fiercely loyal customer bases.
                            </p>
                            <p>
                                Exotic marijuana packaging is fundamentally different from standard Mylar bags. They are purposely engineered to catch the eye of the connoisseur, the buyer who appreciates the nuanced terpene profiles of an exotic harvest and naturally expects the presentation to mirror that quality. By investing in premium, customized exotic weed packaging, you create an unboxing ritual that heightens anticipation. Whether you are packaging premium 3.5g eights, pre-roll multi-packs, or quarter-ounce luxury reserves, every detail on the bag tells a story about the flower inside.
                            </p>

                            <h3>Unmatched Terpene Protection &amp; Barrier Science</h3>
                            <p>
                                For exotic strains, preserving the integrity of the trichomes and the delicate balance of terpenes is paramount. Standard plastic bags allow oxygen ingress and moisture depletion, which rapidly degrades THC content and destroys flavor. Our exotic weed bags are constructed using sophisticated multi-layered laminate films designed specifically for optimal botanical preservation:
                            </p>
                            <ul>
                                <li><strong>VMPET / Foil Cores:</strong> The absolute gold standard for light and oxygen barriers. This metallized middle layer stops UV degradation in its tracks, ensuring the buds retain their vibrant colors and don't prematurely convert THC to CBN.</li>
                                <li><strong>LLDPE Inner Liners:</strong> A food-grade linear low-density polyethylene layer that is completely chemically inert. It will not leach into the product or alter the taste, and provides robust puncture resistance against sharp stems.</li>
                                <li><strong>PET Outer Shells:</strong> Providing structural rigidity, these high-tensile outer layers also serve as the perfect smooth substrate for high-resolution, complex printing methodologies.</li>
                            </ul>
                            <p>
                                By combining these layers, our barrier bags maintain the precise microclimate your flower requires to finish its curing process and stay fresh for months on retail dispensary shelves. 
                            </p>

                            <h3>High-Impact Aesthetics and Advanced Print Finishes</h3>
                            <p>
                                The "exotic" aesthetic is defined by bold, unapologetic design that looks expensive. Standard flexographic printing cannot achieve this. We employ ultra-high-definition rotogravure and professional digital printing presses to render complex artwork, character designs, and rich, saturated colors with photographic fidelity. To truly make an exotic bag, the finishing textures are crucial:
                            </p>
                            <ul>
                                <li><strong>Soft Touch Lamination:</strong> Also known as a "velvet" finish, this coating gives the bag a distinctly luxurious, tactile feel that consumers immediately associate with premium, high-cost goods.</li>
                                <li><strong>Holographic &amp; Metallic Foiling:</strong> Dazzling light-catching elements that make your brand logo or strain name pop off the bag. Holographic films provide a futuristic, trippy visual aesthetic heavily favored in the current exotic cannabis market.</li>
                                <li><strong>Spot Gloss (Spot UV):</strong> Utilizing a precise high-gloss lacquer over specific parts of a matte bag (like a logo or character) to create aggressive visual depth and structural contrast.</li>
                                <li><strong>Custom Die-Cut Shapes:</strong> Step entirely outside the standard square pouch by manufacturing bags cut to the precise outline of your mascot, logo, or a unique geometric shape.</li>
                            </ul>

                            <h3>Child Resistant &amp; Compliance Standards</h3>
                            <p>
                                Despite the flashy exteriors, luxury weed bags must strictly adhere to state and federal packaging compliance laws. Failing to provide certified child-resistant (CR) packaging can result in pulled products and massive fines. We alleviate this risk entirely.
                            </p>
                            <p>
                                Our exotic bags are equipped with certified, lab-tested child-resistant zipper closures that require two-handed, push-and-slide or pinch-and-pull mechanics to open. These zippers are robust enough to withstand repeated use by adult consumers while effectively preventing access by young children. Furthermore, we provide ample real estate on the gussets and back panels for required state warnings, THC universal symbols, barcode integrations, and METRC tracking sticker placements, ensuring your beautiful packaging never runs afoul of the latest regulatory requirements across North America.
                            </p>

                            <h3>Why Brand Investment in Packaging Pays Off</h3>
                            <p>
                                Spending the extra capital on premium exotic weed bags is not an expense; it is a high-ROI marketing investment. In modern dispensaries, "budtenders" act as gatekeepers, and they are naturally drawn to recommending products with superior shelf appeal. An exotic bag sells itself from behind the glass. Furthermore, in the age of social media, consumers are highly likely to post and share images of highly aesthetic packaging on platforms like Instagram and TikTok, providing your brand with invaluable free organic marketing.
                            </p>
                            <p>
                                By aligning with a reputable packaging manufacturer that understands the nuances of the exotic cannabis space, you secure a reliable supply chain, consistent color-matching across massive wholesale runs, and the structural integrity your premium flower deserves. Let our customized exotic barrier bags be the final, crucial step in your cultivation journey.
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
                            We combine craftsmanship, speed, and reliability to deliver packaging that makes your aesthetic unforgettable.
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
                                        Uncompromising Quality
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Every <strong>custom cannabis bag</strong> we produce utilizes thick, multi-layer films engineered to completely seal out oxygen and light. Our rigorous factory QC protocols guarantee your bags won't fail at the zipper or split at the seams, keeping your expensive harvest in pristine condition.
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
                                        Tailored Customization
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Stand out from generic foil pouches. We offer bespoke sizing, custom die-cut shapes, and premium finishes like soft-touch matte and highly reflective holographic foil. Your design will be executed flawlessly to differentiate your product on the most competitive dispensary shelves.
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
                                        Compliance Guaranteed
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Never worry about regulatory fines. Our packaging integrates state-required child-resistant (CR) locking mechanisms and uses food-grade materials that ensure totally safe, legally compliant shipping, storage, and <strong>retail cannabis packaging</strong> nationwide.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img
                                    src={weedBagsHero}
                                    alt="Premium Weed Packaging"
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
                                <p className="text-2xl font-bold text-emerald-500 leading-none">10–12</p>
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
                        <div className="relative group">
                            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] border border-primary/20 shadow-2xl transform transition-transform duration-700 hover:scale-[1.02]">
                                <img
                                    src={exoticWeedBag}
                                    alt="Differentiate Your Custom Weed Bags"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                            </div>

                            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-60" />
                            <div className="absolute -z-10 -top-8 -right-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl opacity-60" />
                        </div>

                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                                Differentiate Your <span className="text-primary">Bags</span> From Others
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                At CustomPackMakers, we understand that your packaging is the first physical touchpoint for your cannabis consumers. To ensure your strain stands out, we utilize state-of-the-art rotogravure and digital printing paired with highly sophisticated laminations. By integrating distinctive features like holographic hot-stamping, precision die-cut shapes, and soft-touch textures, we help you push past generic foil pouches to establish a truly iconic, luxury brand identity on dispensary shelves.
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
                                        question: "Are these bags truly smell proof?",
                                        answer: "Yes, our custom weed bags are manufactured with multi-layer barrier laminates (including VMPET) and high-quality sealed zippers to ensure they are 100% smell proof, keeping odors trapped and maintaining discretion."
                                    },
                                    {
                                        id: "item-2",
                                        question: "What Time Does It Take To Manufacture My Order?",
                                        answer: "Our standard turnaround time is 10-12 business days after design approval. We also offer expedited options for sudden product drops or urgent dispensary restocks."
                                    },
                                    {
                                        id: "item-3",
                                        question: "Can I get child-resistant (CR) zippers?",
                                        answer: "Absolutely. We offer several certified child-resistant closure mechanisms that comply strictly with state and federal cannabis packaging laws, ensuring legality without sacrificing ease of use for adults."
                                    },
                                    {
                                        id: "item-4",
                                        question: "Do you offer holographic and spot gloss finishes?",
                                        answer: "Yes! High-end finishing is our specialty. We provide full holographic films, soft-touch matte lamination, metallic foil stamping, and spot UV gloss to give your bags a premium, exotic look."
                                    },
                                    {
                                        id: "item-5",
                                        question: "What is your minimum order quantity?",
                                        answer: "We accommodate both craft growers and large MSOS. Contact our sales team for exact MOQs, but we generally offer highly competitive minimums combined with volume discounts for large-scale operations."
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
                                alt="Custom Weed Bags FAQ"
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

export default ExoticWeedBag;
