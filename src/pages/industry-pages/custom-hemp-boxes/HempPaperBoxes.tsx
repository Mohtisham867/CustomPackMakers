import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { QuoteForm } from "@/components/QuoteForm";
import { BrandRating } from "@/components/BrandRating";
import { Card, CardContent } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TechnicalSpecsSection } from "@/components/TechnicalSpecsSection";
import { RelatedProductHemp } from "@/components/RelatedProductHemp";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";

import productHero from "@/assets/hemp-boxes/custom-cbd-isolate-boxes.webp";
import FAQimage from "@/assets/FAQ-image.png";

const faqs = [
    { id: "item-1", q: "Can you print high-resolution imagery on textured hemp paper?", a: "Yes, despite the natural texture of hemp paper, our advanced printing presses are calibrated to deliver high-resolution imagery and crisp typography. We utilize specialized soy-based inks that absorb perfectly into the fibers, providing vibrant color reproduction without losing the authentic, organic feel of the board." },
    { id: "item-2", q: "How durable is hemp paper compared to standard kraft cardboard?", a: "Hemp fibers are naturally longer and stronger than traditional wood-pulp fibers. This means that our hemp paper boxes offer superior tensile strength and tear resistance compared to standard kraft cardboard of a similar thickness. Your products receive excellent structural protection in a lightweight, eco-friendly package." },
    { id: "item-3", q: "Are the adhesives used in your hemp paper boxes eco-friendly?", a: "Absolutely. We are committed to end-to-end sustainability. We use water-based, non-toxic glues and adhesives in the assembly of our hemp paper boxes. This ensures that the entire package remains fully biodegradable and compostable, meeting the strict environmental standards expected by eco-conscious consumers." },
    { id: "item-4", q: "What is the minimum order quantity for custom hemp paper boxes?", a: "We cater to businesses of all sizes, from boutique artisanal brands to large-scale manufacturers. Our minimum order quantity (MOQ) typically starts at 100 units. This allows emerging brands to access premium, custom-branded hemp packaging without requiring massive initial inventory investments." },
    { id: "item-5", q: "Do you offer moisture-resistant coatings for hemp paper packaging?", a: "Yes, we offer specialized, eco-friendly aqueous coatings that provide a barrier against mild moisture and humidity. This helps protect the structural integrity of the box and the product inside during humid storage conditions while keeping the packaging entirely biodegradable and safe for the environment." },
];

const HempPaperBoxes = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    const productImages = [
        { src: productHero, alt: "Custom Hemp Paper Boxes Main" },
        { src: productHero, alt: "Eco-Friendly Hemp Box View" },
        { src: productHero, alt: "Sustainable Paper Packaging" },
        { src: productHero, alt: "Natural Hemp Paper Box" },
        { src: productHero, alt: "Premium Extra View" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Hemp Paper Boxes | Eco-Friendly Packaging | CustomPackMakers</title>
                <meta name="description" content="Discover premium custom hemp paper boxes crafted from sustainable materials. Natural, durable, and fully customizable packaging for your organic products." />
            </Helmet>
            <Header />

            <div className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 mt-[120px] md:mt-[160px]">
                <div className="container mx-auto px-[30px] py-4">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem><BreadcrumbLink asChild><Link to="/">Home</Link></BreadcrumbLink></BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem><BreadcrumbLink asChild><Link to="/industries">Industries</Link></BreadcrumbLink></BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem><BreadcrumbLink asChild><Link to="/industries/custom-hemp-boxes">Custom Hemp Boxes</Link></BreadcrumbLink></BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem><BreadcrumbPage>Hemp Paper Boxes</BreadcrumbPage></BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </div>

            {/* 1. HERO SECTION */}
            <section className="py-8 bg-background">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-7 space-y-6">
                            <div className="w-20 h-1.5 bg-primary rounded-full" />
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight">
                                <span className="text-primary text-black">Custom Hemp</span> Paper Boxes
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Our custom hemp paper boxes deliver the perfect blend of sustainable strength and modern brand appeal. Crafted from organic fibers, these biodegradable packaging solutions protect your natural products while highlighting your eco-friendly retail values.
                            </p>
                            <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300" onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}>
                                Get a Quote
                            </Button>
                        </div>
                        <div className="lg:col-span-5 relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-muted group">
                            <img src={productHero} alt="Custom Hemp Paper Boxes" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. PRODUCT OVERVIEW */}
            <section className="py-8 bg-slate-50">
                <div className="container mx-auto px-[5vw]">
                    <div className="flex items-center gap-3 mb-5">
                        <div className="w-10 h-1 bg-primary rounded-full" />
                        <span className="text-xs font-semibold tracking-widest text-primary uppercase">Product Overview</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 max-w-3xl">Pioneering Sustainable Retail Packaging</h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            Hemp paper represents a revolutionary shift in the packaging industry, moving away from heavily processed tree pulp toward rapidly renewable, highly durable botanicals. Our custom hemp paper boxes capture this natural advantage, offering an incredibly earthy, premium texture that instantly communicated purity and eco-consciousness to your customers. Whether you are packaging artisan soaps, organic cosmetics, gourmet foods, or botanical extracts, these boxes provide a tactile and visual experience that standard cardboard simply cannot replicate.
                        </p>
                        <p>
                            Beyond their visual appeal, hemp paper boxes are engineering marvels of sustainability. They are fully biodegradable, easily recyclable, and produced with a fraction of the environmental footprint associated with conventional paper manufacturing. We enhance this natural foundation with state-of-the-art, non-toxic soy-based printing and eco-friendly finishes, ensuring that your package doesn't just look sustainable—it actually is. By transitioning your brand to hemp paper packaging, you actively align with the values of modern consumers who prioritize environmental responsibility without compromising on unboxing luxury.
                        </p>
                    </div>
                </div>
            </section>

            {/* 3. PRODUCT GALLERY + INQUIRY FORM */}
            <section className="py-10 bg-accent/5" id="quote-form">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end">
                        <div className="lg:col-span-7 space-y-6">
                            <div className="relative w-full max-w-lg mx-auto overflow-hidden rounded-lg shadow-sm border border-border bg-white" style={{ aspectRatio: '4/3' }}>
                                <img src={productImages[selectedImage].src} alt={productImages[selectedImage].alt} className="w-full h-full object-cover" />
                            </div>
                            <div className="w-full max-w-lg mx-auto grid grid-cols-5 gap-2">
                                {productImages.map((img, i) => (
                                    <button key={i} onClick={() => setSelectedImage(i)} className={`relative w-[94px] h-[94px] overflow-hidden rounded-md border transition-all duration-200 ${selectedImage === i ? 'border-primary shadow-md ring-2 ring-primary/20' : 'border-slate-200 hover:border-slate-300 hover:shadow-sm'}`}>
                                        <img src={img.src} alt={`Thumbnail ${i + 1}`} className="w-full h-full object-cover" />
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="lg:col-span-5 lg:sticky lg:top-24">
                            <Card className="shadow-lg border-slate-200 bg-slate-50/50 backdrop-blur-sm overflow-hidden">
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold text-foreground mb-5">Request a Quote</h3>
                                    <form className="space-y-4">
                                        <div className="grid grid-cols-3 gap-3">
                                            <div className="space-y-1.5 align-left">
                                                <Label htmlFor="length" className="text-xs font-semibold text-muted-foreground">L (in)</Label>
                                                <Input id="length" type="number" placeholder="4" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label>
                                                <Input id="width" type="number" placeholder="2" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">D (in)</Label>
                                                <Input id="depth" type="number" placeholder="1" className="h-9 bg-white" />
                                            </div>
                                        </div>
                                        <div className="space-y-1.5">
                                            <Label htmlFor="qty" className="text-xs font-semibold text-muted-foreground">Quantity</Label>
                                            <Input id="qty" type="number" placeholder="500" className="h-9 bg-white" />
                                        </div>
                                        <div className="space-y-1.5">
                                            <Label htmlFor="name" className="text-xs font-semibold text-muted-foreground">Name</Label>
                                            <Input id="name" type="text" placeholder="Your Name" className="h-9 bg-white" />
                                        </div>
                                        <div className="space-y-1.5">
                                            <Label htmlFor="email" className="text-xs font-semibold text-muted-foreground">Email</Label>
                                            <Input id="email" type="email" placeholder="email@example.com" className="h-9 bg-white" />
                                        </div>
                                        <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 shadow-md hover:shadow-lg transition-all duration-300 mt-2">
                                            Get Pricing
                                        </Button>
                                    </form>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. TECHNICAL SPECIFICATIONS */}
            <TechnicalSpecsSection />

            {/* 5. SEO SCROLL BOX (900+ WORDS) */}
            <section className="py-8 bg-slate-50 border-t border-slate-100">
                <div className="container mx-auto px-[5vw]">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">Mastering Sustainable Retail with Hemp Paper Boxes</h2>
                    <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="[&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-6 [&>h3]:mb-3 [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-4 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-4 [&>ul>li]:text-[15px] [&>ul>li]:text-slate-600">
                            <p>
                                In the rapidly evolving landscape of modern retail, the necessity for genuinely sustainable packaging solutions has never been more urgent. Brands across cosmetics, food, wellness, and boutique crafts are recognizing that eco-friendly packaging is no longer an alternative choice—it is a categorical imperative demanded by a discerning, environmentally conscious consumer base. Custom pack makers have risen to this challenge by introducing <strong>hemp paper boxes</strong> as a premium, high-performance alternative to heavily processed, tree-based cardboards. These custom hemp paper packaging solutions not only drastically reduce ecological footprints but also introduce a deeply natural, tactile dimension to the unboxing experience, instantly communicating a brand's commitment to organic purity and planetary health. This comprehensive guide explores the structural superiority, environmental benefits, aesthetic versatility, and strategic brand value of integrating custom hemp paper boxes into your retail operation.
                            </p>
                            <h3>The Structural Superiority of Hemp Fibers</h3>
                            <p>
                                At the microscopic level, the architecture of hemp fiber is fundamentally different from that of traditional wood pulp. Hemp fibers are notably longer, much more robust, and contain higher levels of cellulose. This unique biological composition translates into a highly resilient paperstock that boasts exceptional tensile strength and superior tear resistance. When engineered into <strong>custom hemp paper boxes</strong>, this translates to packaging that can reliably protect delicate goods without requiring excessive thickness or unnecessary weight. Whether you are creating small tuck-end boxes for essential oils, robust sleeve boxes for artisanal soaps, or multi-compartment setups for organic cosmetics, hemp paper provides an unyielding structural integrity that prevents crushing during transit and maintains perfectly sharp score lines for foldability. Furthermore, hemp paper is naturally resistant to degrading over time, resisting the yellowing and brittleness that can affect cheaper recycled cardboards, meaning your retail boxes stay looking fresh on the shelf for extended periods.
                            </p>
                            <h3>Environmental Impact: The Case for Hemp Packaging</h3>
                            <p>
                                The environmental argument for transitioning to hemp paper packaging is overwhelming and scientifically sound. Hemp is an incredibly fast-growing agronomic crop, reaching maturity in roughly 90 to 120 days, whereas trees cultivated for paper pulp take decades to grow. This rapid renewability means hemp can produce vastly more paper per acre than traditional forestry operations, drastically reducing the land footprint required for packaging materials. Additionally, hemp crops require significantly less water than cotton or trees and act as a natural soil remediator by drawing out toxins and restoring nutrients. Crucially, the process of turning raw hemp stalks into paper requires significantly fewer harsh chemicals and bleaching agents than processing wood pulp. The resulting unbleached or semi-bleached hemp paper isn't just organic in aesthetics—it is fundamentally cleaner in its manufacturing process. Completely biodegradable and easily compostable at home, hemp paper boxes represent an authentic closed-loop packaging cycle that prevents your brand's packaging from languishing in landfills for generations, providing immense peace of mind to the eco-conscious end-user.
                            </p>
                            <h3>Unmatched Visual and Tactile Aesthetics</h3>
                            <p>
                                Packaging is deeply sensory. The moment a consumer picks up your product, the texture and feel of the box heavily influence their perception of the value inside. Hemp paper boxes offer an unmistakable tactile experience—a slightly rougher, organic grip that feels undeniably natural and 'earthy'. This texture is a powerful psychological cue, instantly telling the consumer that the product inside prioritizes purity, natural ingredients, and careful craftsmanship. We typically leave our hemp paper slightly textured and uncoated to celebrate its natural origins, featuring subtle flecks and raw fibers that add depth and character to the visual presentation. However, for a more refined look, we can also utilize calendered hemp board, which provides a smoother surface while retaining its eco-friendly credentials. This sensory engagement makes hemp paper packaging ideal for CBD wellness items, vegan cosmetics, holistic remedies, and organic food products where the exterior packaging must mirror the natural ethos of the product itself.
                            </p>
                            <h3>Advanced Custom Printing on Natural Textures</h3>
                            <p>
                                While hemp paper celebrates its raw roots, it does not sacrifice branding capability. Our facilities employ advanced printing technologies specifically calibrated to handle highly textured, unbleached substrates. We strictly use plant-derived, soy-based inks that dry rapidly via oxidation rather than evaporation, dramatically lowering volatile organic compounds (VOCs). These soy inks interact beautifully with the porous nature of hemp fibers, resulting in vibrant, rich color reproduction that looks deeply integrated into the material rather than merely sitting on top of it. We can successfully execute sharp typography, intricate line art, and even photographic elements onto hemp boxes. Furthermore, we can utilize techniques like white-ink underprinting to make specific brand colors pop against a natural brown or off-white hemp background, creating a stunning visual contrast that captures attention in crowded dispensary or specialty shop environments.
                            </p>
                            <h3>Specialized Finishing Techniques for Hemp Boxes</h3>
                            <p>
                                To elevate hemp packaging further without ruining its compostable nature, we offer several specialized, eco-friendly finishing techniques. Blind embossing and debossing are exceptionally popular for hemp boxes, utilizing pressure to create raised or recessed 3D logos without using ink or plastics. This creates an ultra-premium, minimalist aesthetic that feels highly luxurious. If metallic accents are desired, we can employ localized, zero-plastic hot foil stamping, adding a touch of gold or copper elegance that contrasts brilliantly against the raw hemp surface. We also provide precision die-cutting services, allowing us to incorporate custom window cutouts or unique geometric shapes that break the mold of standard rectangular packaging. All of these finishes are executed thoughtfully, ensuring that the final retail box remains fully biodegradable and true to the brand’s environmental promises.
                            </p>
                            <h3>Custom Die-Cut Variations and Structural Formats</h3>
                            <p>
                                The versatility of hemp board allows us to craft a vast array of structural designs. For small, lightweight items, our hemp straight-tuck or reverse-tuck boxes offer easy assembly and secure closure. For higher-end presentations, we construct robust two-piece rigid boxes made from thick hemp-blend chipboard, perfect for luxury skincare kits or CBD subscription boxes. We also specialize in creating hemp paper mailers that are strong enough to withstand e-commerce shipping while delivering an unforgettable unboxing experience directly at the customer's doorstep. Internally, we can design custom-fitted hemp or molded-pulp inserts to securely nest bottles, jars, or droppers securely without resorting to unrecyclable plastic blister packs or foam.
                            </p>
                            <h3>Why Brands Must Adopt Sustainable Packaging Now</h3>
                            <p>
                                In 2026, sustainable packaging is not just a marketing gimmick; it is becoming a regulatory necessity and a primary driver of consumer loyalty. Shoppers are highly educated on the pitfalls of single-use plastics and are actively migrating away from brands that ignore their ecological responsibilities. By choosing custom hemp paper boxes, you signal highly transparent and progressive corporate values. This packaging choice provides a distinct competitive advantage, enabling you to charge premium prices for products that are clearly aligned with global conservation efforts. At CustomPackMakers, we operate as strategic partners in this transition, offering wholesale pricing, bulk production capacity, and expert structural design to make your transition to hemp paper packaging as seamless, profitable, and visually spectacular as possible. We are dedicated to proving that sustainability and luxury top-tier retail presentation are not mutually exclusive, but rather fully synthesized in the power of the hemp plant.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. RELATED PRODUCTS CAROUSEL */}
            <RelatedProductHemp />

            {/* 7. WHY BRANDS CHOOSE */}
            <section className="py-12 relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #fafafa 0%, #f4f6ff 60%, #f0fdf8 100%)' }}>
                <div className="container mx-auto px-[30px] relative z-10">
                    <div className="text-center mb-14">
                        <span className="inline-block text-xs font-semibold tracking-widest text-primary uppercase mb-3 bg-primary/10 px-4 py-1.5 rounded-full">Our Promise</span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">Why Brands Choose <span className="text-primary text-black">CustomPackMakers</span></h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Providing unmatched sustainable quality and eco-friendly packaging for the modern retail landscape.</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">
                        <div className="space-y-5">
                            {[
                                {
                                    title: "100% Biodegradable Materials",
                                    body: "We utilize FSC-certified hemp paper to create packaging that is entirely compostable and biodegradable. By choosing these natural materials, your brand actively reduces environmental waste while maintaining the premium durability needed for high-quality retail presentation and secure product shipping."
                                },
                                {
                                    title: "Uncompromising Structural Strength",
                                    body: "Our lightweight hemp paper boxes feature reinforced edges that deliver unexpected structural strength without bulky excess. This advanced engineering ensures your delicate botanical goods are fully protected against transit damage, offering peace of mind directly to your conscious consumers."
                                },
                                {
                                    title: "Vibrant Eco-Friendly Printing",
                                    body: "Equipped with advanced soy-based printing technology, we ensure your graphics remain vibrant on natural textured hemp surfaces. This safe, non-toxic ink application produces incredibly sharp, true-to-color branding that makes your eco-friendly products instantly stand out on crowded dispensary shelves."
                                },
                            ].map((item, i) => (
                                <div key={i}>
                                    <div className="flex gap-6 items-start group">
                                        <div className="flex-shrink-0 mt-1">
                                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                                            <p className="text-sm text-slate-500 leading-relaxed">{item.body}</p>
                                        </div>
                                    </div>
                                    {i < 2 && <div className="w-full h-px bg-slate-100 mt-5" />}
                                </div>
                            ))}
                        </div>
                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img src={productHero} alt="Sustainable Hemp Packaging Quality" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-7">
                                    <p className="text-white font-bold text-lg leading-snug mb-1">Earth-First Packaging</p>
                                    <p className="text-white/75 text-sm">Setting the global standard for eco-friendly boxes.</p>
                                </div>
                            </div>
                            <div className="absolute top-4 -right-2 lg:-right-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80">
                                <p className="text-2xl font-bold text-primary leading-none">98%</p>
                                <p className="text-xs text-slate-400 mt-1 font-medium">Satisfaction</p>
                            </div>
                            <div className="absolute bottom-4 -left-2 lg:-left-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80">
                                <p className="text-2xl font-bold text-emerald-500 leading-none">8-10 Days</p>
                                <p className="text-xs text-slate-400 mt-1 font-medium">Turnaround</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. DIFFERENTIATE YOUR BRAND */}
            <section className="py-10 lg:py-12 bg-white overflow-hidden relative">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="relative group">
                            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] border border-primary/20 shadow-2xl transform transition-transform duration-700 hover:scale-[1.02]">
                                <img src={productHero} alt="Differentiate Your Eco-Friendly Brand" className="w-full h-full object-cover" />
                            </div>
                        </div>
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                                Differentiate Your <span className="text-primary text-black">Organic Brand</span>
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                Differentiate your organic retail products with our premium custom hemp paper boxes. In an era where consumers actively seek out environmentally responsible brands, packaging plays a critical role in establishing brand identity. Our eco-friendly hemp board instantly communicates a commitment to sustainability with its natural texture and biodegradable properties. Through advanced soy-based printing and customized structural designs, we help you create unique packaging that aligns with your green ethos while ensuring your products dominate retail shelf visibility. Elevate your natural brand and increase customer loyalty by switching to visually stunning and planet-conscious packaging solutions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 9. FAQ SECTION */}
            <section className="py-6 bg-slate-50">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <h2 className="text-2xl md:text-3xl font-bold text-foreground">Frequently Asked Questions</h2>
                                <p className="text-base text-muted-foreground">We're confident that you will love our sustainable products.</p>
                            </div>
                            <Accordion type="single" collapsible defaultValue="item-1" className="w-full space-y-2">
                                {faqs.map((faq) => (
                                    <AccordionItem key={faq.id} value={faq.id} className="border border-slate-200 rounded-lg bg-white overflow-hidden data-[state=open]:border-primary data-[state=open]:ring-1 data-[state=open]:ring-primary/20 data-[state=open]:bg-primary/5 transition-all duration-300">
                                        <AccordionTrigger className="px-5 py-3 hover:no-underline [&>svg]:hidden group">
                                            <span className="text-left font-semibold text-foreground text-base">
                                                {faq.q}
                                            </span>
                                            <div className="shrink-0 ml-4 p-1 rounded-full bg-slate-100 group-data-[state=open]:bg-primary group-data-[state=open]:text-white transition-colors duration-200">
                                                <Plus className="h-3 w-3 group-data-[state=open]:hidden" />
                                                <Minus className="h-3 w-3 hidden group-data-[state=open]:block" />
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent className="px-5 pb-5 pt-0 text-slate-600 leading-relaxed text-sm">
                                            {faq.a}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                        <div className="relative w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden">
                            <img src={FAQimage} alt="FAQ for Hemp Paper Boxes" className="absolute inset-0 w-full h-full object-cover" />
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

export default HempPaperBoxes;
