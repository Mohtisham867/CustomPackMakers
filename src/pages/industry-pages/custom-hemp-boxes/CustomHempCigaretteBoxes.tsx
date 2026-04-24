import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { QuoteForm } from "@/components/QuoteForm";
import { BrandRating } from "@/components/BrandRating";
import { Card, CardContent } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TechnicalSpecsSection } from "@/components/TechnicalSpecsSection";
import { RelatedProductHemp } from "@/components/RelatedProductHemp";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";

import hempCigaretteHero from "@/assets/hemp-boxes/hemp-cigarette-boxes/img-hero.webp";
import hempCigaretteImg1 from "@/assets/hemp-boxes/hemp-cigarette-boxes/img-1.webp";
import hempCigaretteImg2 from "@/assets/hemp-boxes/hemp-cigarette-boxes/img-2.webp";
import hempCigaretteImg3 from "@/assets/hemp-boxes/hemp-cigarette-boxes/img-3.webp";
import hempCigaretteImg4 from "@/assets/hemp-boxes/hemp-cigarette-boxes/img-4.webp";
import hempCigaretteImg5 from "@/assets/hemp-boxes/hemp-cigarette-boxes/img-5.webp";
import hempCigaretteImg6 from "@/assets/hemp-boxes/hemp-cigarette-boxes/img-whychoose.webp";
import hempCigaretteImg7 from "@/assets/hemp-boxes/hemp-cigarette-boxes/img-different.webp";
import FAQimage from "@/assets/FAQ-image.webp";

const faqs = [
    { id: "item-1", q: "Do your hemp cigarette boxes come completely fully assembled?", a: "To minimize your shipping costs and reduce necessary warehouse space, our custom hemp cigarette boxes are typically shipped flat (unassembled). However, they are engineered with intuitive auto-bottom or standard tuck-end designs, allowing for incredibly fast, manual assembly on your production line." },
    { id: "item-2", q: "Can you manufacture the classic flip-top style for hemp cigarettes?", a: "Yes, the flip-top (also known as a crush-proof or hinge-lid box) is the industry standard for cigarette packaging. We manufacture this exact structural style utilizing heavy-duty hemp cardstock, ensuring the box functions flawlessly while maintaining an entirely eco-friendly profile." },
    { id: "item-3", q: "Are custom foil interiors available to maintain product freshness?", a: "While traditional aluminum foil inner liners contradict our 100% biodegradable mission, we offer highly sustainable alternatives. We can provide interior wraps made from glassine paper or specialized biodegradable, moisture-resistant barriers that keep your hemp cigarettes fresh without utilizing planet-damaging metals or plastics." },
    { id: "item-4", q: "Can we print necessary health warnings and barcodes on the boxes?", a: "Absolutely. Printing critical compliance information on small packaging requires extreme precision. Our advanced soy-ink printing technology ensures that even the smallest legally mandated health warnings, ingredient lists, and scannable barcodes are rendered with perfect clarity directly onto the hemp paper." },
    { id: "item-5", q: "What is the minimum order quantity for custom printed hemp cigarette boxes?", a: "For custom printed and sized hemp cigarette flip-top boxes, our minimum order quantity is generally 500 units. This volume allows us to efficiently set up the specialized die-cutting and folding machinery required for this specific packaging style while keeping your per-unit cost highly competitive." },
];

const CustomHempCigaretteBoxes = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    const productImages = [
        { src: hempCigaretteImg1, alt: "Custom Hemp Cigarette Boxes Main" },
        { src: hempCigaretteImg2, alt: "Sustainable Flip Top Cigarette Pack" },
        { src: hempCigaretteImg3, alt: "Eco-Friendly Pre-Roll Packaging" },
        { src: hempCigaretteImg4, alt: "Premium Botanical Smoke Boxes" },
        { src: hempCigaretteImg5, alt: "Premium Extra View" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Hemp Cigarette Boxes | Sustainable Flip-Top Packs | CustomPackMakers</title>
                <meta name="description" content="Discover premium custom hemp cigarette boxes. Eco-friendly flip-top packaging providing structural protection and exceptional branding for your sustainable smoke products." />
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
                            <BreadcrumbItem><BreadcrumbPage>Custom Hemp Cigarette Boxes</BreadcrumbPage></BreadcrumbItem>
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
                                <span className="text-primary text-black">Custom Hemp</span> Cigarette Boxes
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Our custom hemp cigarette boxes deliver classic, functional packaging forged from modern sustainable materials. These rigid flip-top cartons protect your premium smokables from damage while instantly communicating an authentic, earth-conscious ethos to your discerning customers.
                            </p>
                            <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300" onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}>
                                Get a Quote
                            </Button>
                        </div>
                        <div className="lg:col-span-5 relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-muted group">
                            <img src={hempCigaretteHero} alt="Custom Hemp Cigarette Boxes" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 max-w-3xl">Classic Structure Meets Modern Sustainability</h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            The explosive growth of the CBD smokables and organic herbal cigarette market has created a unique dilemma: how do you package a fundamentally natural, plant-based product without relying on the ecologically devastating plastics and bleached, chemical-laden paperboards that define the legacy tobacco industry? Our custom hemp cigarette boxes provide the definitive solution. We manufacture the universally recognized "crush-proof" rigid flip-top pack entirely out of high-density hemp cardstock. This ensures your product fits perfectly into existing retail displays and consumer pockets, providing familiar, effortless functionality without compromising your brand's commitment to the environment.
                        </p>
                        <p>
                            Hemp fiber is naturally thicker and more resilient than standard wood pulp, meaning our flip-top boxes provide superior structural integrity, relentlessly protecting the fragile papers and filters within from crushing. Beyond sheer physical protection, the unbleached, gently textured aesthetic of the hemp board visually dominates retail shelves overcrowded with high-gloss synthetic packaging. By utilizing crisp, high-definition flexographic printing with soy-based inks, we ensure complex regulatory warnings and your intricate branding are rendered flawlessly. The result is a premium, structurally sound package that perfectly aligns the exterior presentation with the organic purity of the smokables inside.
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
                                                <Input id="length" type="number" placeholder="2.2" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label>
                                                <Input id="width" type="number" placeholder="0.9" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">D (in)</Label>
                                                <Input id="depth" type="number" placeholder="3.5" className="h-9 bg-white" />
                                            </div>
                                        </div>
                                        <div className="space-y-1.5">
                                            <Label htmlFor="qty" className="text-xs font-semibold text-muted-foreground">Quantity</Label>
                                            <Input id="qty" type="number" placeholder="1000" className="h-9 bg-white" />
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">Mastering Sustainable Smokable Packaging with Hemp Cigarette Boxes</h2>
                    <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="[&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-6 [&>h3]:mb-3 [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-4 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-4 [&>ul>li]:text-[15px] [&>ul>li]:text-slate-600">
                            <p>
                                The rapid emergence of the CBD smokables and organic herbal cigarette industry has introduced a new demographic of conscientious consumers. Unlike legacy tobacco buyers, this modern market segment is deeply invested in holism, transparency, and environmental accountability. Packaging a natural, unadulterated botanical product in glossy, chemical-laden paperboards heavily wrapped in unrecyclable plastic film fundamentally betrays the core values of this consumer base. To capture and retain this audience, brands must align their exterior presentation with their internal product philosophy. <strong>Custom hemp cigarette boxes</strong> represent the ultimate packaging solution. By utilizing the immensely strong, fast-growing fibers of the industrial hemp plant to engineer classic crush-proof structures, we provide brands with an aesthetic that demands attention and an environmental pedigree that commands respect. This extensive guide explores the specific architectural, marketing, and ecological advantages of utilizing hemp for your cigarette packaging.
                            </p>
                            <h3>The Architecture of the 'Crush-Proof' Flip Top</h3>
                            <p>
                                The traditional hard-pack cigarette box, featuring a hinged flip-top lid, is arguably one of the most successful and ubiquitous packaging designs in modern history. Its success stems from a massive structural requirement: protecting fragile, thin paper tubes filled with dry botanicals from being snapped or crushed while carried in a pocket or purse. When transitioning to sustainable packaging, an herbal brand cannot afford to abandon this critical functional architecture. We meticulously manufacture this classic flip-top style utilizing our premium hemp cardstock. However, the physical mechanics of the box are actually improved. Hemp fibers possess significantly higher tensile strength and structural rigidity than standard wood pulp fibers. When folded into the complex inner collars and outer walls of a flip-top box, this hemp board creates a dramatically tougher, more resilient 'crush-proof' fortress for your pre-rolls, ensuring the last smokable is as perfectly intact as the first.
                            </p>
                            <h3>Visual Disruption in the Retail Environment</h3>
                            <p>
                                Convenience stores, dispensaries, and wellness boutiques possess notoriously cluttered shelves. Standing out requires significant visual disruption. The legacy tobacco industry relies almost exclusively on ultra-glossy finishes, aggressive primary colors, and metallic foils. A brand entering the herbal or CBD space utilizing these same frantic visual cues runs the immense risk of being subconsciously categorized by the consumer as just another cheap, mass-produced product. Custom hemp cigarette boxes provide immediate, profound visual differentiation. The unbleached, raw finish of the hemp board possesses a tactile, organic grit and a muted earthy color palette that simply cannot be replicated by synthetics. Sitting on a shelf, a raw hemp box is a quiet visual anchor amid a sea of plastic. It subtly but unmistakably screams "natural," instantly drawing the eye of the demographic searching for authentic plant-based alternatives.
                            </p>
                            <h3>Advanced Typography for Strict Compliance</h3>
                            <p>
                                Packaging an inhalable product subjects a brand to intense regulatory scrutiny. Depending on the jurisdiction, a cigarette box must display exact cannabinoid profiles, batch numbers, surgeon general warnings, and intricate barcodes—all confined to an incredibly restricted physical surface area. The technical challenge of printing large volumes of microscopic text onto heavily textured, porous hemp paper without the ink bleeding or blurring is immense. CustomPackMakers overcomes this through highly calibrated flexographic printing technology designed explicitly for sustainable substrates. Utilizing high-fidelity, eco-friendly soy inks, we ensure that the sharpest, most intricate typography is pressed cleanly onto the front, back, and side panels of the box. This guarantees complete legal compliance while preserving the clean, uncluttered aesthetic vital to luxury botanical brands.
                            </p>
                            <h3>Sustainable Alternatives to Aluminum Foil</h3>
                            <p>
                                A critical component of traditional cigarette packaging is the interior foil bundle wrap, designed to lock in moisture and protect the product from ambient smells. From a sustainable perspective, this aluminum-coated paper is a disaster, rendering the entire box unrecyclable. We collaborate with brands to eliminate this ecological flaw while maintaining product freshness. We offer interior wrapping solutions utilizing glassine paper—a smooth, translucent paper resistant to grease and moisture—or advanced, fully biodegradable cellulose barriers. By removing metal foils and integrating these plant-based barriers inside the hemp carton, we ensure that your product remains pristine while guaranteeing the entire package can be cleanly recycled or composted without leaving behind toxic residue.
                            </p>
                            <h3>Finishing Touches: Embossing on Hemp</h3>
                            <p>
                                While the raw texture of hemp is an asset, premium brands often require subtle enhancements to justify luxury pricing. The immense density and thickness of our hemp cardstock make it an exceptional candidate for blind embossing or debossing. We use heavy brass dies to physically press your logo, intricate botanical artwork, or custom typography deeply into the hemp board, without applying any ink. This creates a stunning, three-dimensional tactile effect that the consumer immediately feels upon picking up the box. It is an incredibly sophisticated branding technique that elevates the perceived value of the product astronomically while maintaining a zero-plastic, zero-chemical footprint.
                            </p>
                            <h3>The Psychological Impact of the Material Choice</h3>
                            <p>
                                Ultimately, consumer purchasing decisions in the wellness and herbal sectors are driven by psychology. The buyer is not merely purchasing dried herbs; they are investing in a lifestyle, a feeling of holistic health, and a commitment to better planet stewardship. Every time they pull your custom hemp cigarette box from their pocket and audibly snap the lid open, the tactile feedback of the textured hemp reinforces their decision. It constantly reassures them that they have made the natural, responsible choice. Your packaging ceases to be trash destined for a landfill and transforms into a physical manifestation of your brand's integrity.
                            </p>
                            <h3>Conclusion: The Definitive Alternative</h3>
                            <p>
                                Custom hemp cigarette boxes represent the absolute pinnacle of sustainable smokable packaging. By refusing to compromise on the classic, beloved flip-top structure while entirely replacing toxic legacy materials with incredibly strong, rapidly renewable hemp fibers, you provide an unmatched consumer experience. Through precision compliance printing, plastic-free interior barriers, and sophisticated embossing techniques, CustomPackMakers empowers your botanical brand to visually dominate the retail environment while honoring the earth from which your product grew. Choosing hemp is not just a packaging decision; it is a definitive declaration that your brand leads the industry in radical, uncomplicated sustainability.
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
                                    title: "Unrivaled Crush Defense",
                                    body: "We engineer a classic flip-top structure using high-density hemp cardstock to provide an unyielding fortress for your products. This immensely rigid architecture ensures delicate herbal rolls arrive perfectly intact, relentlessly defending against severe crushing during shipping or daily consumer carry."
                                },
                                {
                                    title: "Immediate Visual Differentiation",
                                    body: "Our custom hemp cigarette boxes weaponize organic texture to instantly separate your brand from glossy competitor packaging on crowded retail shelves. The unbleached, earthy aesthetic loudly communicates natural purity, rapidly attracting the highly lucrative demographic of eco-conscious botanical consumers."
                                },
                                {
                                    title: "Precision Regulatory Typography",
                                    body: "Equipped with advanced flexographic technology, we guarantee critical health warnings remain perfectly legible on highly textured hemp surfaces. We apply precise, soy-based inks to execute complex compliance printing flawlessly, ensuring your smokables meet strict legal standards without sacrificing premium design."
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
                                <img src={hempCigaretteImg6} alt="Sustainable Hemp Cigarette Box Quality" className="w-full h-full object-cover" />
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
                                <img src={hempCigaretteImg7} alt="Differentiate Your Eco-Friendly Brand" className="w-full h-full object-cover" />
                            </div>
                        </div>
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                                Differentiate Your <span className="text-primary text-black">Botanicals</span>
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                Differentiate your premium herbal smoking products with our uniquely engineered custom hemp cigarette boxes. In a fast-growing market, consumers visually judge the quality and ethics of your brand long before igniting the product; presenting organic botanicals in glossy, wasteful synthetics is a critical marketing failure. Our heavy-duty rigid hemp board solves this by communicating absolute purity through its unbleached, earthy texture while providing flawless crush protection. Utilizing advanced flexographic printing for strict regulatory compliance without sacrificing minimalist aesthetics, we guarantee your packaging becomes a tactile, earth-first statement piece. Completely elevate retail trust and command a superior visual presence by upgrading to flawlessly designed, zero-plastic presentation structures.
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
                            <img src={FAQimage} alt="FAQ for Hemp Cigarette Boxes" className="absolute inset-0 w-full h-full object-cover" />
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

export default CustomHempCigaretteBoxes;
