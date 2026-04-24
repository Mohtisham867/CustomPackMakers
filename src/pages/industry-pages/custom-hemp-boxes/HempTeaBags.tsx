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

import teaboxeshero from "@/assets/hemp-boxes/hemp-tea-bags/img-hero.webp";
import teaboxesimg1 from "@/assets/hemp-boxes/hemp-tea-bags/img-1.webp";
import teaboxesimg2 from "@/assets/hemp-boxes/hemp-tea-bags/img-2.webp";
import teaboxesimg3 from "@/assets/hemp-boxes/hemp-tea-bags/img-3.webp";
import teaboxesimg4 from "@/assets/hemp-boxes/hemp-tea-bags/img-4.webp";
import teaboxesimg5 from "@/assets/hemp-boxes/hemp-tea-bags/img-5.webp";
import teaboxesimg6 from "@/assets/hemp-boxes/hemp-tea-bags/img-whychoose.webp";
import teaboxesimg7 from "@/assets/hemp-boxes/hemp-tea-bags/img-different.webp";
import FAQimage from "@/assets/FAQ-image.webp";

const faqs = [
    { id: "item-1", q: "Will hemp packaging alter the flavor or aroma of my loose-leaf tea?", a: "No. Our premium hemp cardstock is completely odorless and tasteless. Furthermore, we seal the interior of the boxes with food-safe, plant-based barriers that ensure the delicate volatile oils and aromas of your tea remain perfectly preserved without any external contamination." },
    { id: "item-2", q: "Can you manufacture boxes with individual compartments for tea bags?", a: "Yes, we frequently design custom die-cut hemp inserts that create precise individual slots or compartments within the main box. This keeps each individual tea bag or sachet elegantly organized and prevents them from settling to the bottom during shipping." },
    { id: "item-3", q: "Are hemp tea boxes suitable for direct food contact?", a: "While the raw hemp board is highly natural, for direct contact with loose-leaf tea, we apply a specialized, FDA-compliant, fully biodegradable aqueous coating to the interior facing of the box. This provides an impenetrable food-safe barrier while maintaining the packaging's overall compostability." },
    { id: "item-4", q: "What printing options are available for the exterior of the tea boxes?", a: "We offer high-definition flexographic printing utilizing eco-friendly, soy-based inks. Whether your brand aesthetic demands minimalist, single-color typography highlighting the natural hemp texture, or vibrant, full-color botanical illustrations, we can execute your design flawlessly." },
    { id: "item-5", q: "Is there a minimum order quantity (MOQ) for custom hemp tea boxes?", a: "For fully customized, printed folding hemp tea cartons, our standard minimum order quantity begins at 500 units. This volume allows us to efficiently manage the customized die-cutting and exact print registration required to deliver premium, retail-ready packaging." },
];

const HempTeaBags = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    const productImages = [
        { src: teaboxesimg1, alt: "Custom Hemp Tea Bag Boxes Main" },
        { src: teaboxesimg2, alt: "Sustainable Botanical Tea Packaging" },
        { src: teaboxesimg3, alt: "Eco-Friendly Loose Leaf Boxes" },
        { src: teaboxesimg4, alt: "Premium Printed Tea Cartons" },
        { src: teaboxesimg5, alt: "Premium Extra View" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Hemp Tea Bag Boxes | Sustainable Tea Packaging | CustomPackMakers</title>
                <meta name="description" content="Package your premium herbal blends in custom hemp tea bag boxes. Odorless, protective, and completely eco-friendly packaging designed to elevate botanical brands." />
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
                            <BreadcrumbItem><BreadcrumbPage>Hemp Tea Bags</BreadcrumbPage></BreadcrumbItem>
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
                                <span className="text-primary text-black">Custom Hemp</span> Tea Bag Boxes
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Our custom hemp tea bag boxes provide the perfect organic vessel for your premium herbal blends. Combining food-safe barrier technology with stunningly sustainable exterior materials, these boxes preserve the delicate aromas of your tea while profoundly elevating your brand's environmental commitment.
                            </p>
                            <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300" onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}>
                                Get a Quote
                            </Button>
                        </div>
                        <div className="lg:col-span-5 relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-muted group">
                            <img src={teaboxeshero} alt="Custom Hemp Tea Bag Boxes" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 max-w-3xl">Purity Inside and Out: The Evolution of Tea Packaging</h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            The modern tea consumer is fundamentally driven by wellness, natural ingredients, and a deep respect for the environment. When a customer purchases a carefully curated, organic herbal blend, the contradiction of housing that pure product in heavily bleached, plastic-coated packaging is incredibly jarring. Our custom hemp tea boxes bridge this critical gap, ensuring that your exterior presentation perfectly mirrors the organic purity of the product inside. Manufactured from fast-growing, highly renewable industrial hemp fibers, our cardstock requires zero toxic chemical bleaching. This results in a structurally robust folding carton that feels genuinely natural to the touch, instantly communicating an authentic, earth-first philosophy to discerning buyers.
                        </p>
                        <p>
                            Beyond aesthetics, packaging tea requires strict functional performance. The intense, delicate aromas and volatile essential oils within high-quality tea leaves must be protected from oxidation and moisture degradation. While our exterior hemp board provides superior structural rigidity against crushing, we line the interior of our tea boxes with advanced, food-safe, and fully biodegradable barriers. This dual-layer approach guarantees two things: your tea remains exceptionally fresh for prolonged periods, and the entire package—from the exterior ink to the interior lining—remains 100% compostable. Paired with our high-definition, soy-based printing capabilities, your botanical branding is elevated from simple packaging to a powerful statement of environmental luxury.
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
                                                <Input id="length" type="number" placeholder="5" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label>
                                                <Input id="width" type="number" placeholder="3" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">D (in)</Label>
                                                <Input id="depth" type="number" placeholder="6.5" className="h-9 bg-white" />
                                            </div>
                                        </div>
                                        <div className="space-y-1.5">
                                            <Label htmlFor="qty" className="text-xs font-semibold text-muted-foreground">Quantity</Label>
                                            <Input id="qty" type="number" placeholder="1500" className="h-9 bg-white" />
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">Elevating Botanical Brands: The Custom Hemp Tea Box Advantage</h2>
                    <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="[&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-6 [&>h3]:mb-3 [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-4 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-4 [&>ul>li]:text-[15px] [&>ul>li]:text-slate-600">
                            <p>
                                The premium tea market is no longer just about the leaf; it is an immersive, holistic experience heavily governed by consumer ethics. As buyers become increasingly educated about the devastating environmental impact of single-use plastics and aggressively bleached cardboards, they actively seek brands that reflect their own commitment to sustainability. Packaging an artisanal, shade-grown, organic herbal blend in materials that pollute the earth is a fundamental disconnect that modern consumers immediately recognize. <strong>Custom hemp tea bag boxes</strong> provide the ultimate solution to this problem. By utilizing the incredible strength and rapid renewability of the industrial hemp plant, we engineer elegant folding cartons that protect the fragile aromatics of your tea while profoundly upgrading your brand's environmental pedigree. This deep-dive explores the technical imperatives of tea packaging and how hemp provides an unrivaled, sustainable advantage.
                            </p>
                            <h3>The Science of Preservation: Protecting Tea Aromatics</h3>
                            <p>
                                Tea leaves, particularly premium loose-leaf green teas, delicate white teas, and complex herbal tisanes, are highly sensitive to their environment. They readily absorb ambient moisture, odors, and are degraded rapidly by ultraviolet light and oxygen. Therefore, a tea box must act as a fortified vault. While the raw, unbleached hemp board provides an exceptionally strong outer shell that resists physical crushing during shipping, it is naturally porous. To solve the preservation challenge without resorting to toxic plastic laminations, CustomPackMakers utilizes advanced, food-safe, plant-derived interior coatings. We can apply a fully compostable aqueous barrier to the inside of the hemp board, or utilize interior cellulose films. This multi-layer, sustainable architecture ensures that volatile essential oils remain trapped inside the box, guaranteeing that your customer experiences the exact vibrant aroma you intended upon unboxing, months after packaging.
                            </p>
                            <h3>Tactile Marketing: The Power of Hemp Texture</h3>
                            <p>
                                In a high-end retail environment, such as a boutique grocery store or a luxury wellness clinic, visual aesthetics are only half the battle. When a consumer picks up a box of tea, the tactile response immediately informs their perception of value and authenticity. The legacy tea industry relies on ultra-smooth, high-gloss UV coatings that feel distinctly synthetic and cold. Custom hemp tea boxes disrupt this paradigm completely. The hemp board possesses a subtle, organic grit—a micro-texture of intertwined bast fibers that feels tangibly natural and warm to the touch. This tactile feedback acts as an immediate psychological cue, non-verbally confirming to the buyer that the product inside is genuinely earthy, raw, and unadulterated. It is a powerful, silent marketing tool that significantly elevates the perceived luxury of your botanical brand.
                            </p>
                            <h3>Executing Complex Botanical Typography and Art</h3>
                            <p>
                                Tea branding often relies on intricate, highly detailed illustrations—delicate line drawings of chamomile flowers, vibrant watercolor washes representing fruit infusions, or elegant, sweeping typography. There is a common misconception that printing on heavily textured, eco-friendly materials results in muddy or blurred artwork. We have dedicated immense resources to overcoming this. Utilizing state-of-the-art flexographic presses specifically calibrated for porous substrates, and employing high-opacity, eco-friendly soy inks, we execute your designs flawlessly. Whether you require minimalist, single-color elegance that allows the raw hemp color to dominate, or fully opaque, vibrant CMYK printing spanning the entire box, we ensure that every petal, leaf, and line of text is rendered with absolute, crisp perfection, maintaining your brand's premium visual standard.
                            </p>
                            <h3>Structural Engineering for Organised Presentation</h3>
                            <p>
                                The unboxing experience of premium tea should be a ritual, not a chaotic mess of shifting bags. Dumping twenty loose tea sachets into a large, hollow box significantly degrades the premium feel. CustomPackMakers specializes in precision structural design to enhance this presentation. We frequently engineer custom die-cut hemp inserts that lock into the main box, creating individual stalls or compartments for each tea bag. This not only prevents the bags from settling and crushing under their own weight during transit but also forces the consumer to engage methodically with the product upon opening. This organized, tailored approach to interior architecture screams luxury and meticulous attention to detail, traits highly valued by the premium tea demographic.
                            </p>
                            <h3>The Eradication of Single-Use Plastics</h3>
                            <p>
                                Perhaps the most urgent mandate in modern packaging is the total elimination of single-use plastics. The traditional tea box is often wrapped in a clear poly-film tightly shrunk onto the exterior to provide a tamper-evident seal and moisture barrier. This film almost inevitably ends up in a landfill or ocean. By transitioning to our custom hemp tea boxes, your brand can eliminate this waste. If structural visibility is required, we utilize window cutouts backed by transparent, fully compostable cellulose film derived from wood pulp, not petroleum. For tamper evidence, we can engineer intricate interlocking tab mechanisms or utilize biodegradable paper sticker seals. We ensure that every single element of your packaging architecture aligns with a zero-plastic, zero-waste philosophy.
                            </p>
                            <h3>Building Long-Term Brand Equity</h3>
                            <p>
                                Choosing to package your tea in custom hemp boxes is not merely a logistical acquisition; it is a profound strategic investment in your brand's future. As global regulations tighten around plastic use and consumer sentiment increasingly punishes environmentally destructive companies, sustainable packaging is transitioning from a niche marketing tactic to a fundamental requirement for market survival. By adopting hemp technology now, you position your tea brand as an uncompromising leader in ecological responsibility. Your packaging becomes a core pillar of your brand identity, generating immense goodwill, fiercely loyal customers, and a definitively superior product presentation.
                            </p>
                            <h3>Conclusion: The Superior Botanical Vessel</h3>
                            <p>
                                The transition to custom hemp tea bag boxes represents the ultimate harmonization of product and presentation. By leveraging the immense strength, beautiful organic texture, and unassailable environmental credentials of industrial hemp, you provide your premium teas with the perfect vessel. Utilizing advanced food-safe barriers, high-fidelity soy printing, and meticulously engineered structural inserts, CustomPackMakers ensures your product is protected, brilliantly displayed, and entirely sustainable. In a market demanding purity, hemp packaging is the definitive answer, allowing your brand to thrive while actively protecting the earth.
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
                                    title: "Advanced Aromatic Preservation",
                                    body: "We understand that premium tea relies entirely on volatile essential oils. By integrating fully biodegradable, plant-based interior barrier coatings into our robust hemp board, we create an impenetrable vault that vehemently protects delicate aromas from moisture degradation and heavy oxidation."
                                },
                                {
                                    title: "Tactile Organic Authority",
                                    body: "Our custom hemp tea boxes weaponize physical texture to communicate purity. The subtle, unbleached grit of the raw hemp fibers provides an immediate psychological cue to the consumer, instantly distinguishing your truly natural botanical products from glossy, synthetic mass-market competitors."
                                },
                                {
                                    title: "Flawless Botanical Typography",
                                    body: "Equipped with highly calibrated flexographic technology, we guarantee your intricate botanical illustrations and minimalist branding remain razor-sharp on textured hemp. We utilize vibrant, eco-friendly soy inks to execute complex designs flawlessly, ensuring absolute luxury presentation without compromising sustainability."
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
                                <img src={teaboxesimg6} alt="Sustainable Hemp Tea Box Quality" className="w-full h-full object-cover" />
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
                                <img src={teaboxesimg7} alt="Differentiate Your Eco-Friendly Brand" className="w-full h-full object-cover" />
                            </div>
                        </div>
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                                Differentiate Your <span className="text-primary text-black">Tea Blends</span>
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                Differentiate your premium tea and herbal infusions with our impeccably crafted custom hemp boxes. In a saturated boutique wellness market, presenting organic, shade-grown leaves in heavily bleached, plastic-coated packaging fundamentally contradicts consumer expectations and destroys brand trust. Our eco-friendly hemp board actively solves this by providing a profoundly natural, tactile exterior that instantly verifies the purity of the botanicals inside. Through the integration of invisible, plant-based freshness barriers and vividly sharp, eco-friendly soy printing, we elevate your packaging from a simple container to an authentic statement of environmental luxury. Command premium retail placement and fierce consumer loyalty by upgrading to uncompromisingly sustainable presentation architecture.
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
                            <img src={FAQimage} alt="FAQ for Hemp Tea Boxes" className="absolute inset-0 w-full h-full object-cover" />
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

export default HempTeaBags;
