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

import cbdoilboxeshero from "@/assets/hemp-boxes/cbd-hemp-oil-boxes/img-hero.png";
import cbdoilboxesimg1 from "@/assets/hemp-boxes/cbd-hemp-oil-boxes/img-1.png";
import cbdoilboxesimg2 from "@/assets/hemp-boxes/cbd-hemp-oil-boxes/img-2.png";
import cbdoilboxesimg3 from "@/assets/hemp-boxes/cbd-hemp-oil-boxes/img-3.png";
import cbdoilboxesimg4 from "@/assets/hemp-boxes/cbd-hemp-oil-boxes/img-4.png";
import cbdoilboxesimg5 from "@/assets/hemp-boxes/cbd-hemp-oil-boxes/img-5.png";
import cbdoilboxesimg6 from "@/assets/hemp-boxes/cbd-hemp-oil-boxes/img-whychoose.png";
import cbdoilboxesimg7 from "@/assets/hemp-boxes/cbd-hemp-oil-boxes/img-different.png";
import FAQimage from "@/assets/FAQ-image.png";

const faqs = [
    { id: "item-1", q: "Are hemp boxes strong enough to protect heavy CBD tincture bottles?", a: "Absolutely. Hemp bast fibers are significantly longer and tougher than standard wood pulp, meaning our hemp cardstock naturally possesses higher tensile strength. This structural rigidity provides exceptional shock absorption, fiercely protecting fragile glass dropper bottles from shattering during the rigorous shipping process." },
    { id: "item-2", q: "Can you create custom inserts to securely hold the CBD oil dropper?", a: "Yes. To prevent heavy 30ml or 60ml bottles from rattling and building kinetic energy within the box, we engineer precision die-cut hemp paper or sustainable molded pulp inserts. These inserts perfectly contour to your specific bottle shape, immobilizing the product while enhancing the premium unboxing experience." },
    { id: "item-3", q: "Will the raw texture of hemp board interfere with my detailed CBD branding?", a: "No. While the earthy, unbleached aesthetic is incredibly popular in the wellness sector, we utilize advanced flexographic printing and highly opaque, eco-friendly primers to ensure your artwork pops. We easily render intricate botanical illustrations, fine typography, and vibrant brand colors with flawless precision on the hemp surface." },
    { id: "item-4", q: "Are child-resistant mechanisms available for custom hemp oil packaging?", a: "Yes, for CBD products requiring compliance with strict regulations, we can integrate highly effective, plastic-free child-resistant locking mechanisms directly into the structural fold of the hemp box. This ensures legal compliance and safety without compromising the packaging's 100% biodegradable status." },
    { id: "item-5", q: "What is the minimum order quantity (MOQ) for custom printed CBD hemp oil boxes?", a: "Our standard minimum order volume for fully customized, printed hemp folding cartons is 500 units. This allows us to efficiently manage the intricate die-cutting and exact print calibration required to deliver premium, retail-ready CBD packaging at a competitive per-unit cost." },
];

const CBDHempOilBoxes = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    const productImages = [
        { src: cbdoilboxesimg1, alt: "Custom CBD Hemp Oil Boxes Main" },
        { src: cbdoilboxesimg2, alt: "Sustainable Tincture Bottle Packaging" },
        { src: cbdoilboxesimg3, alt: "Eco-Friendly Premium CBD Cartons" },
        { src: cbdoilboxesimg4, alt: "Botanical Oil Dropper Boxes" },
        { src: cbdoilboxesimg5, alt: "Premium Extra View" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom CBD Hemp Oil Boxes | Sustainable Tincture Packaging | CustomPackMakers</title>
                <meta name="description" content="Elevate your wellness brand with custom CBD hemp oil boxes. Ultra-protective, vibrantly printed, and fully eco-friendly packaging for premium tincture bottles." />
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
                            <BreadcrumbItem><BreadcrumbPage>CBD Hemp Oil Boxes</BreadcrumbPage></BreadcrumbItem>
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
                                <span className="text-primary text-black">CBD Hemp Oil</span> Boxes
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Our custom CBD hemp oil boxes provide the ultimate structural defense for fragile tincture bottles. Combining incredibly tough hemp fibers with pristine, high-definition printing, these premium cartons fiercely protect your product while communicating deep environmental authenticity to your wellness clientele.
                            </p>
                            <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300" onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}>
                                Get a Quote
                            </Button>
                        </div>
                        <div className="lg:col-span-5 relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-muted group">
                            <img src={cbdoilboxeshero} alt="Custom CBD Hemp Oil Boxes" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 max-w-3xl">Unassailable Protection for Premium Wellness Extracts</h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            The highly lucrative CBD wellness sector is built entirely on the premise of natural health and holistic integrity. However, many brands fatally contradict this message by packaging their pure botanical extracts in environmentally destructive, unrecyclable plastic clamshells or heavily bleached, toxic paperboards. Our custom CBD hemp oil boxes eliminate this hypocrisy. Manufactured from dense, incredibly resilient industrial hemp fibers, our packaging provides an inherently sustainable solution that mirrors the purity of the extraction process. The subtly textured, earthy aesthetic of the unbleached hemp board acts as immediate, non-verbal proof to the consumer that your brand's commitment to nature extends far beyond the liquid inside the bottle.
                        </p>
                        <p>
                            Beyond acting as a powerful symbol of ecological responsibility, a CBD tincture box must perform a rigorous logistical function: preventing devastating product loss. Heavy glass dropper bottles are exceptionally fragile and susceptible to shattering during automated shipping processes. Hemp fibers naturally possess higher tensile strength than the wood pulp used in standard carton boxes. This structural superiority creates a tough, shock-absorbing exoskeleton that flawlessly defends your costly inventory. Paired with our specialized eco-friendly soy inks and precision flexographic printing, your packaging not only survives brutal transit networks but arrives on the retail shelf looking vibrant, luxurious, and completely compliant with complex labeling regulations.
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
                                                <Input id="length" type="number" placeholder="1.8" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label>
                                                <Input id="width" type="number" placeholder="1.8" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">D (in)</Label>
                                                <Input id="depth" type="number" placeholder="4.5" className="h-9 bg-white" />
                                            </div>
                                        </div>
                                        <div className="space-y-1.5">
                                            <Label htmlFor="qty" className="text-xs font-semibold text-muted-foreground">Quantity</Label>
                                            <Input id="qty" type="number" placeholder="2000" className="h-9 bg-white" />
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">Mastering Wellness Logistics with Custom CBD Hemp Oil Boxes</h2>
                    <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="[&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-6 [&>h3]:mb-3 [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-4 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-4 [&>ul>li]:text-[15px] [&>ul>li]:text-slate-600">
                            <p>
                                The CBD industry has rapidly evolved from a niche alternative market into a multi-billion-dollar global wellness powerhouse. In this hyper-competitive landscape, consumers are bombarded with choices, and their purchasing decisions are increasingly dictated by a brand's transparency and environmental accountability. Presenting a high-end, organic CBD tincture in packaging that utilizes toxic bleached cardboards or single-use petroleum plastics immediately destroys credibility with the modern health-conscious demographic. <strong>Custom CBD hemp oil boxes</strong> represent the most intelligent and authentic packaging strategy available. By harnessing the incredible structural resilience and unparalleled ecological footprint of the industrial hemp plant, we engineer defensive folding cartons that perfectly align your external presentation with the internal purity of your product. This comprehensive guide details the structural mechanics, compliance requirements, and brand-building advantages of transitioning to hemp packaging for your premium CBD line.
                            </p>
                            <h3>The Physics of Defense: Neutralizing Kinetic Impact</h3>
                            <p>
                                A CBD oil box has one primary, unforgiving job: to ensure a fragile glass dropper bottle survives the chaotic journey from the manufacturing facility to the consumer's hands. The logistics network is brutal. Packages are dropped, compressed under heavy pallets, and violently sorted by automated machinery. When a 30ml glass tincture breaks, the financial loss extends beyond the single unit; the leaking oil often destroys the surrounding inventory. To combat this, we engineer our folding cartons utilizing high-density hemp board. On a microscopic level, hemp bast fibers are significantly longer and tougher than the short cellulose fibers derived from trees used in standard paper production. This superior tensile strength creates an immensely rigid exoskeleton. Upon impact, the hemp board absorbs and disperses the shockwave throughout its dense fiber network, drastically reducing the transfer of kinetic energy to the vulnerable glass within.
                            </p>
                            <h3>Strategic Immobilization: Die-Cut Eco-Inserts</h3>
                            <p>
                                While a strong exterior shell is vital, true shock protection requires internal stabilization. A heavy glass bottle rattling loosely inside an oversized box builds dangerous momentum. To maximize defense, a premium unboxing experience, CustomPackMakers designs precision die-cut hemp paper or sustainable molded pulp inserts. We completely reject the use of non-recyclable EVA foams. Our engineers customize these eco-friendly inserts to contour exactly to the specific neck and base dimensions of your dropper bottle. This creates a secure, suspended 'crumple zone' of air between the bottle and the exterior walls of the box. This immobilization strategy ensures your CBD oil arrives in pristine condition while presenting the product beautifully the moment the consumer opens the package.
                            </p>
                            <h3>Strict Compliance and Micro-Typography</h3>
                            <p>
                                Packaging CBD products involves navigating a labyrinth of incredibly strict and constantly shifting regional regulations. Depending on the jurisdiction, a simple 30ml tincture box is legally required to display vast amounts of information: full cannabinoid profiles, precise THC percentages, legally mandated health warnings, complex ingredient lists, manufacturer tracking codes, and scannable compliance barcodes. Forcing this immense volume of typography onto the very limited real estate of a small box—without the text becoming an illegible, blurred mess—requires extreme technical precision. Our specialized flexographic presses are meticulously calibrated for printing on porous, natural substrates like hemp. By utilizing high-quality, eco-friendly soy inks, we render the smallest, most intricate 4-point compliance text with surgical sharpness, ensuring your brand avoids costly regulatory penalties without sacrificing a clean, minimalist aesthetic.
                            </p>
                            <h3>Vibrant Branding on Organic Substrates</h3>
                            <p>
                                There is a prevalent misconception that utilizing sustainable 'kraft' or hemp materials restricts your brand to a dull, monochromatic aesthetic. In the highly lucrative wellness space, your packaging must visually signal luxury. We have completely solved the technical challenge of vibrant printing on textured board. We routinely apply a highly opaque, eco-friendly white primer base beneath your specific artwork areas. This sophisticated technique allows us to execute your most intricate botanical illustrations, vivid brand colors, or intense, high-contrast typography flawlessly, without the colors sinking into the natural hemp background or losing their vibrancy. You secure the tactile, earthy authority of the raw board while maintaining the brilliant graphic impact required to command premium retail pricing.
                            </p>
                            <h3>Child-Resistant Structural Integrations</h3>
                            <p>
                                In many markets, CBD products, particularly those with specific psychoactive profiles, legally require child-resistant (CR) packaging. Traditionally, fulfilling this mandate meant shoving the bottle into a thick, unrecyclable plastic tube or using bulky plastic locking mechanisms that ruin the aesthetic of the paper box. CustomPackMakers utilizes advanced structural folding techniques to engineer highly effective, plastic-free CR locking mechanisms directly into the hemp board itself. These complex tab-and-slot designs ensure that the box cannot be easily opened by young children, keeping your brand fully compliant with safety regulations while maintaining a 100% biodegradable, single-material packaging profile.
                            </p>
                            <h3>The Psychological Impact of Tactical Packaging</h3>
                            <p>
                                Selecting packaging materials is fundamentally a psychological tactic. The modern wellness consumer is highly skeptical of "greenwashing." When they pick up your custom CBD hemp oil box, the subtle, organic grit of the unbleached fibers provides immediate tactile feedback. It feels real, raw, and unadulterated. This physical sensation acts as a silent endorsement, instantly validating your brand's claims of purity and environmental stewardship long before the consumer even reads the label. Your packaging transitions from being a simple, disposable container into a powerful, permanent manifestation of your company's core values.
                            </p>
                            <h3>Conclusion: The Definitive Evolution</h3>
                            <p>
                                Custom CBD hemp oil boxes are the definitive evolution of wellness packaging. By abandoning the toxic dependencies of the past and embracing the incredible tensile strength and staggering renewability of industrial hemp, you align your brand with the expectations of the modern consumer. Through advanced impact protection, razor-sharp compliance typography, fully biodegradable interior inserts, and innovative child-resistant structures, CustomPackMakers empowers your brand to fiercely protect your valuable products while dominating the retail wellness environment. Choosing hemp is the ultimate strategy to verify your product's purity and solidify long-term consumer trust.
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
                                    title: "Flawless Bottle Defense",
                                    body: "We engineer highly defensive folding cartons by strictly utilizing advanced, impact-resistant hemp cardstock. This superior architecture creates an immovable exoskeleton that flawlessly protects extremely heavy and fragile glass CBD tincture bottles from shattering during chaotic, rigorous supply chain operations."
                                },
                                {
                                    title: "Tactile Organic Authenticity",
                                    body: "Our custom CBD hemp oil boxes exploit physical texture to instantly legitimize your natural wellness claims. The subtle, unbleached grit of the raw hemp fibers provides an undeniable tactile cue, instantly separating your premium botanicals from the glossy, synthetic aesthetic employed by budget competitors."
                                },
                                {
                                    title: "Micro-Calibrated Compliance Output",
                                    body: "Leveraging specialized flexographic presses, we guarantee your intricate regulatory warnings and complex cannabinoid typography remain strictly legible on highly textured hemp. We utilize pristine soy inks to execute mandatory compliance printing flawlessly, protecting your brand from harsh regulatory missteps."
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
                                <img src={cbdoilboxesimg6} alt="Sustainable CBD Hemp Oil Box Quality" className="w-full h-full object-cover" />
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
                                <img src={cbdoilboxesimg7} alt="Differentiate Your Eco-Friendly Brand" className="w-full h-full object-cover" />
                            </div>
                        </div>
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                                Differentiate Your <span className="text-primary text-black">Extracts</span>
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                Differentiate your premium CBD extracts and tinctures with our meticulously engineered custom hemp boxes. In an incredibly competitive wellness market, presenting pure, holistic botanicals in polluting, glossy synthetic packaging is a massive strategic failure that severely damages brand credibility. Our eco-friendly hemp board instantly establishes supreme authority by providing unassailable structural protection coupled with an undeniable natural aesthetic. Through flawless compliance printing that meets strict regulatory standards and the total elimination of single-use plastics, we elevate your packaging into a powerful statement of integrity. Command superior retail presence and secure unwavering loyalty from health-conscious consumers by upgrading to zero-waste, earth-first presentation solutions.
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
                            <img src={FAQimage} alt="FAQ for CBD Hemp Oil Boxes" className="absolute inset-0 w-full h-full object-cover" />
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

export default CBDHempOilBoxes;
