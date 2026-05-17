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

import hempOilHero from "@/assets/industry/custom-hemp-boxes/Hemp-Oil-Boxes/img-hero.webp";
import hempOilImg1 from "@/assets/industry/custom-hemp-boxes/Hemp-Oil-Boxes/img-1.webp";
import hempOilImg2 from "@/assets/industry/custom-hemp-boxes/Hemp-Oil-Boxes/img-2.webp";
import hempOilImg3 from "@/assets/industry/custom-hemp-boxes/Hemp-Oil-Boxes/img-3.webp";
import hempOilImg4 from "@/assets/industry/custom-hemp-boxes/Hemp-Oil-Boxes/img-4.webp";
import hempOilImg5 from "@/assets/industry/custom-hemp-boxes/Hemp-Oil-Boxes/img-5.webp";
import hempOilImg6 from "@/assets/industry/custom-hemp-boxes/Hemp-Oil-Boxes/img-whychoose.webp";
import hempOilImg7 from "@/assets/industry/custom-hemp-boxes/Hemp-Oil-Boxes/img-different.webp";
import FAQimage from "@/assets/FAQ-image.webp";

const faqs = [
    { id: "item-1", q: "Do your hemp oil boxes include inserts to hold dropper bottles securely?", a: "Yes, we highly recommend custom inserts for oil tincture packaging. We create precisely die-cut inserts from hemp paper or sustainable molded pulp that contour perfectly to your specific 15ml, 30ml, or 60ml glass bottles, immobilizing them safely during transit." },
    { id: "item-2", q: "Can you create custom packaging for 1oz and 2oz hemp oil bottles?", a: "Absolutely. We manufacture fully custom-sized boxes. Whether you are selling standard 1oz (30ml) tincture bottles, larger 2oz (60ml) bottles, or tiny sample vials, we precision-engineer the structural dimensions of the box to ensure a flawless, snug fit." },
    { id: "item-3", q: "Are the boxes designed to protect the oil from harmful UV light exposure?", a: "Yes. Premium CBD and hemp oils degrade rapidly when exposed to UV light. Our high-density folding hemp cartons create a completely opaque barrier blocking 100% of external light. This ensures your light-sensitive botanical extracts maintain their optimal potency on the retail shelf." },
    { id: "item-4", q: "What is the minimum order quantity for custom printed hemp oil boxes?", a: "For custom printed, die-cut hemp oil boxes, our minimum order quantity (MOQ) is typically 100 units. This low threshold is specifically designed to support artisan extractors, boutique wellness brands, and dispensaries looking to elevate their packaging without massive overhead." },
    { id: "item-5", q: "Can we use spot UV coating on the natural hemp paper surface?", a: "Yes, Spot UV coating yields incredibly striking results on hemp packaging. The high-gloss, raised clear coating contrasts beautifully against the matte, porous texture of the raw hemp board, adding a subtle touch of modern luxury to your eco-friendly oil box." },
];

const HempOilBoxes = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    const productImages = [
        { src: hempOilImg1, alt: "Custom Hemp Oil Boxes Main" },
        { src: hempOilImg2, alt: "Tincture Bottle Packaging" },
        { src: hempOilImg3, alt: "Sustainable Extract Boxes" },
        { src: hempOilImg4, alt: "Premium CBD Oil Cartons" },
        { src: hempOilImg5, alt: "Premium Extra View" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Hemp Oil Boxes | Botanical Tincture Packaging | CustomPackMakers</title>
                <meta name="description" content="Discover premium custom hemp oil boxes for your tinctures and extracts. Sustainable, protective packaging designed to perfectly fit and elevate your glass dropper bottles." />
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
                            <BreadcrumbItem><BreadcrumbPage>Hemp Oil Boxes</BreadcrumbPage></BreadcrumbItem>
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
                                <span className="text-primary text-black">Custom Hemp</span> Oil Boxes
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Our custom hemp oil boxes provide secure, elegant packaging designed specifically for premium botanical extracts. Crafted from sustainable materials, these robust dropper bottle boxes protect sensitive oils from light degradation while elevating your retail presentation.
                            </p>
                            <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300" onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}>
                                Get a Quote
                            </Button>
                        </div>
                        <div className="lg:col-span-5 relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-muted group">
                            <img src={hempOilHero} alt="Custom Hemp Oil Boxes" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 max-w-3xl">Precision Packaging for Delicate Extracts</h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            Hemp-derived oils, CBD tinctures, and premium botanical extracts represent significant investments in extraction and refinement. These high-value liquids are typically housed in fragile glass amber or clear dropper bottles, making them highly susceptible to impact damage during shipping and retail handling. Our custom hemp oil boxes are engineered specifically to mitigate these risks. We construct specialized folding cartons utilizing high-density, tear-resistant hemp board that provides a sturdy outer shell to absorb shock and prevent costly bottle breakage.
                        </p>
                        <p>
                            Furthermore, botanical oils are notoriously degrading when exposed to harsh retail lighting or sunlight. Our opaque hemp oil boxes create an absolute light barrier, preserving the delicate terpenes and cannabinoids within your product. We understand that trust is the currency of the wellness industry; by packaging your natural remedies in authentically sustainable, unbleached hemp paper, you immediately establish a visual dialogue of purity and eco-consciousness with your target demographic. From intricate custom inserts to crisp, legible compliance printing on small canvases, our packaging ensures your extracts arrive safely and sell swiftly.
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
                                                <Input id="length" type="number" placeholder="1.5" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label>
                                                <Input id="width" type="number" placeholder="1.5" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">D (in)</Label>
                                                <Input id="depth" type="number" placeholder="4.5" className="h-9 bg-white" />
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">Mastering Tincture Packaging with Custom Hemp Oil Boxes</h2>
                    <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="[&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-6 [&>h3]:mb-3 [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-4 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-4 [&>ul>li]:text-[15px] [&>ul>li]:text-slate-600">
                            <p>
                                The botanical extract and CBD oil market is characterized by ultra-premium products demanding meticulous presentation and robust protection. A high-quality tincture is a concentrated investment of cultivation, extraction, and refinement. Packaging this valuable liquid in flimsy, environmentally destructive plastic or cheap bleached cardboard drastically undermines the perceived value of the product and contradicts the organic ethos of the wellness industry. <strong>Custom hemp oil boxes</strong> have emerged as the definitive packaging solution for conscientious brands. By merging exceptional structural integrity required to defend fragile glass dropper bottles with an unambiguously sustainable, earth-first aesthetic, hemp packaging perfectly aligns the exterior presentation with the organic purity inside the bottle. This extensive guide examines the structural, aesthetic, and strategic advantages of utilizing hemp board for your botanical oil packaging.
                            </p>
                            <h3>Defending the Glass: Structural Immobilization</h3>
                            <p>
                                Hemp oil is almost universally distributed in glass tincture bottles—typically amber, cobalt, or frosted glass—ranging in size from 10ml up to 60ml. While glass is inert and perfect for preserving oil, it is highly susceptible to shattering upon impact. A drop during residential delivery or a careless toss in a retail stockroom can instantly destroy your product. Custom hemp oil boxes are engineered to serve as a shock-absorbing exoskeleton for these bottles. Hemp fibers possess a significantly higher tensile strength than standard wood pulp, resulting in a folding carton board that resists tearing and crushing remarkably well. However, the true defense mechanism lies in structural immobilization. We design these boxes with exact tolerances, ensuring the glass bottle cannot build momentum by shifting within the box. By keeping the bottle perfectly snug against the high-density hemp walls, the transfer of kinetic energy from drops or bumps is drastically minimized, virtually eliminating breakage rates.
                            </p>
                            <h3>Custom Eco-Friendly Inserts for Tinctures</h3>
                            <p>
                                For premium oil packaging, merely sizing the box correctly is often not enough. To create a truly luxurious and secure packaging experience, custom inserts are required. Historically, brands relied on unrecyclable EVA foam to cradle glass bottles. We replace this outdated, polluting practice with custom-engineered, die-cut hemp paper or sustainable molded pulp inserts. These eco-friendly inserts are explicitly designed to grip the neck and base of the dropper bottle, holding it suspended away from the outer walls of the box. This creates a "crumple zone" of air around the product, providing extreme shock protection. Furthermore, these inserts present the bottle beautifully when a customer opens the box, elevating the unboxing experience to match the premium price point of the oil itself—all while remaining 100% biodegradable and compostable.
                            </p>
                            <h3>The Critical Importance of UV Protection</h3>
                            <p>
                                The active compounds within botanical extracts—particularly cannabinoids and delicate terpenes—are highly sensitive to light degradation. Prolonged exposure to ultraviolet (UV) rays from sunlight or harsh fluorescent retail lighting accelerates the breakdown of these molecules, reducing the potency, altering the flavor, and shortening the shelf life of the oil. While amber glass bottles offer some defense, secondary packaging provides the ultimate barrier. Our custom hemp oil boxes are constructed from opaque, high-density board that completely entirely blocks external light from reaching the bottle. Once tucked into its hemp carton, your oil is secured in a cool, dark micro-environment, guaranteeing that the product your customer eventually consumes is as potent and fresh as the day it was bottled.
                            </p>
                            <h3>Mastering Typography on Small Packaging Canvases</h3>
                            <p>
                                By definition, tincture bottles are small, which means the boxes housing them offer limited physical real estate for branding and legally mandated information. The wellness and CBD industries operate under strict regulatory frameworks that demand comprehensive ingredient lists, dosage instructions, and legal disclaimers. Printing large volumes of small text on highly textured, unbleached hemp paper presents a significant technical challenge; traditional inks tend to bleed or blur into the porous fibers. We employ state-of-the-art printing presses calibrated specifically for natural substrates. Utilizing high-fidelity, soy-based inks, we can achieve incredibly sharp, microscopic typography that remains crisp and perfectly legible. This ensures that your custom hemp oil boxes remain fully compliant with complex state regulations without forcing you to sacrifice beautiful, clean aesthetic design.
                            </p>
                            <h3>Communicating Purity Through Tactile Design</h3>
                            <p>
                                In the wellness sector, your packaging is essentially an ambassador for your product's purity. A customer looking for a holistic, organic remedy is instinctively repelled by high-gloss, heavily processed, synthetic packaging. The tactile experience of a custom hemp oil box is profoundly different. The slightly textured, matte finish of the unbleached hemp board feels earthy, authentic, and "real" in the hands of the consumer. This sensory feedback is a powerful psychological tool; it instantly communicates that the brand prioritizes natural ingredients and sustainable practices. We often enhance this aesthetic by utilizing minimalist, single-color printing or blind embossing, allowing the natural beauty of the raw hemp material to serve as the primary visual draw on the retail shelf.
                            </p>
                            <h3>Finishing Touches: Elevating Eco-Packaging</h3>
                            <p>
                                Choosing a sustainable hemp base does not mean sacrificing high-end, luxury presentation. We offer several eco-friendly finishing techniques that dramatically elevate the perceived value of your tincture boxes. Hot foil stamping in gold, silver, or copper contrasts spectacularly against the organic brown or off-white tones of the hemp board, creating a stunning visual dichotomy between raw nature and refined luxury. We also frequently employ Spot UV coating—applying precise layers of raised, glossy varnish over specific logos or patterns—which adds an interactive, tactile element to the box while catching the light beautifully in a retail setting. Crucially, these finishes are applied selectively to ensure the overall package retains its biodegradability rating.
                            </p>
                            <h3>Conclusion: The Essential Choice for Botanical Brands</h3>
                            <p>
                                For brands operating in the premium oil and extract sectors, packaging must strike a delicate balance between uncompromising physical protection, strict regulatory compliance, and captivating aesthetic appeal. Custom hemp oil boxes masterfully achieve this trinity while adding the immense, modern value of true environmental sustainability. By abandoning outdated plastics and bleached cardboard in favor of robust, organically textured hemp board, you actively protect your fragile glass assets, extend your product's shelf life, and definitively prove your brand's commitment to holistic health and planetary well-being. CustomPackMakers is dedicated to providing the structural engineering and advanced printing capabilities required to turn your sustainable vision into a dominant retail reality.
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
                                    title: "Uncompromising Glass Protection",
                                    body: "We utilize thick, protective hemp board to create oil packaging that securely hugs fragile glass dropper bottles. By choosing these durable, shock-absorbent materials, your brand actively prevents costly breakages and leaks during complex shipping and rigorous retail handling."
                                },
                                {
                                    title: "Secure Eco-Friendly Immobilization",
                                    body: "Our custom hemp oil boxes feature specialized inserts that deliver superior bottle immobilization without requiring harmful plastic foams. This advanced structural design ensures your botanical extracts remain perfectly upright and secure, offering peace of mind to your consumers."
                                },
                                {
                                    title: "Micro-Precision Compliance Typography",
                                    body: "Equipped with advanced soy-based printing technology, we ensure your essential dosage information remains perfectly legible on small packaging surfaces. This precise, non-toxic ink application produces incredibly sharp typography that makes your extract boxes instantly compliant and professionally branded."
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
                                <img src={hempOilImg6} alt="Sustainable Hemp Oil Box Quality" className="w-full h-full object-cover" />
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
                                <img src={hempOilImg7} alt="Differentiate Your Eco-Friendly Brand" className="w-full h-full object-cover" />
                            </div>
                        </div>
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                                Differentiate Your <span className="text-primary text-black">Extract Brand</span>
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                Differentiate your premium botanical oils with our specialized custom hemp boxes. In an era where trust and purity are paramount to consumers, the physical vessel holding your glass dropper bottles plays a critical role in establishing brand authority. Our eco-friendly hemp board instantly communicates a commitment to natural wellness with its organic texture and uncompromising structural defense against light degradation. Through advanced soy-based printing for strict compliance and custom interior inserts for shock absorption, we help you create unique tincture packaging that aligns perfectly with your holistic ethos while ensuring your products visually dominate wellness retail spaces. Elevate your perceived purity and increase customer trust by switching to flawlessly tailored, planet-conscious presentation solutions.
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
                            <img src={FAQimage} alt="FAQ for Hemp Oil Boxes" className="absolute inset-0 w-full h-full object-cover" />
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

export default HempOilBoxes;
