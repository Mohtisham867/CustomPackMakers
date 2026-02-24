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

import productHero from "@/assets/hemp-boxes/e-liquid-boxes.webp";
import FAQimage from "@/assets/FAQ-image.png";

const faqs = [
    { id: "item-1", q: "Are hemp e-liquid boxes strong enough to protect glass vape juice bottles?", a: "Yes, absolutely. We utilize high-density hemp folding carton board specifically engineered to absorb shock. Whether you are packaging small 10ml plastic drippers or heavy 60ml and 120ml glass dropper bottles, our hemp boxes provide a tough outer shell that minimizes impact damage during transit." },
    { id: "item-2", q: "Can we include inserts to keep small bottles from rattling inside?", a: "Yes, for premium presentation and added security, we can design custom die-cut hemp paper or molded pulp inserts. These eco-friendly inserts perfectly contour to the neck and base of your specific e-liquid bottles, immobilizing them completely and providing a polished unboxing experience without using plastic." },
    { id: "item-3", q: "Will the natural color of hemp cardboard clash with my colorful vape branding?", a: "Not at all. While the unbleached, earthy texture is popular for organic lines, we routinely apply high-opacity white base layers to the hemp board before printing. This allows us to execute vibrant, neon, or highly detailed, colorful vape branding flawlessly, while maintaining the sustainable integrity of the core material." },
    { id: "item-4", q: "Are custom window cutouts available so customers can see the vape juice inside?", a: "Yes, window cutouts are a very popular request for e-liquid boxes. We can precision die-cut any custom shape into the box design. To maintain our 100% eco-friendly commitment, we seal these windows using a clear, biodegradable cellulose film rather than traditional petroleum-based plastics." },
    { id: "item-5", q: "What is the typical turnaround time for an order of custom hemp e-liquid boxes?", a: "For a standard production run of custom printed folding hemp e-liquid cartons, our turnaround time is typically 8 to 10 business days after you have explicitly approved the final digital art proofs. This allows us to ensure flawless printing and precise die-cutting for your packaging." },
];

const ELiquidBoxes = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    const productImages = [
        { src: productHero, alt: "Custom Hemp E-Liquid Boxes Main" },
        { src: productHero, alt: "Vape Juice Bottle Packaging" },
        { src: productHero, alt: "Sustainable E-Juice Cartons" },
        { src: productHero, alt: "Eco-Friendly Premium CBD Vape Boxes" },
        { src: productHero, alt: "Premium Extra View" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Hemp E-Liquid Boxes | Vape Juice Packaging | CustomPackMakers</title>
                <meta name="description" content="Elevate your vape brand with custom hemp e-liquid boxes. Sustainable, highly protective, and vibrantly printed packaging for premium e-juice bottles." />
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
                            <BreadcrumbItem><BreadcrumbPage>E-Liquid Boxes</BreadcrumbPage></BreadcrumbItem>
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
                                <span className="text-primary text-black">Hemp E-Liquid</span> Boxes
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Our custom hemp e-liquid boxes deliver uncompromising protection for fragile glass and plastic vape bottles. Engineered from sustainable materials, these highly customizable cartons allow your brand to execute vibrant, compliant artwork while establishing a powerful eco-conscious presence.
                            </p>
                            <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300" onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}>
                                Get a Quote
                            </Button>
                        </div>
                        <div className="lg:col-span-5 relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-muted group">
                            <img src={productHero} alt="Custom Hemp E-Liquid Boxes" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 max-w-3xl">Structural Defense and Dazzling Sustainability</h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            The vape and e-liquid industry is infamous for its heavy reliance on non-recyclable plastics and environmentally destructive packaging practices. As this market matures, the brands that dominate will be those that fiercely embrace sustainability without sacrificing their signature dynamic aesthetics. Our custom hemp e-liquid boxes provide this exact intersection. While standard bleached cardstock crumbles under pressure, we manufacture these boxes utilizing high-density hemp board. Hemp fibers naturally possess incredible tensile strength, creating a tear-resistant, shock-absorbing folding carton that expertly defends your fragile glass dripper bottles and heavy plastic unicorn bottles from shattering or leaking during rigorous shipping operations.
                        </p>
                        <p>
                            Furthermore, we understand that vapor products require exceptionally vibrant branding to compete visually in crowded retail environments. You do not have to sacrifice graphic impact for environmental responsibility. Employing state-of-the-art flexographic presses and sustainable soy-based inks, we can apply an opaque base layer to the hemp board, followed by ultra-high-definition, full-color printing. Whether you require intense neon colors, metallic foil accents, or complex regulatory compliance typography restricted to microscopic real estate, we execute flawless designs directly onto the sustainable hemp substrate. Elevate your e-liquid presentation with packaging that protects your product immediately and respects the planet infinitely.
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
                                                <Input id="depth" type="number" placeholder="4" className="h-9 bg-white" />
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">Mastering Vape Logistics with Custom Hemp E-Liquid Boxes</h2>
                    <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="[&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-6 [&>h3]:mb-3 [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-4 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-4 [&>ul>li]:text-[15px] [&>ul>li]:text-slate-600">
                            <p>
                                The global e-liquid and vapor industry has experienced exponential growth, characterized by incredibly intense branding competition and shifting regulatory landscapes. Historically, this sector has leaned heavily on packaging solutions that are disastrous for the environment—clamshell plastics, metallized mylar bags, and heavily bleached, laminated cardboards. As the industry matures, the smartest brands are recognizing that true market leadership requires not only captivating graphic design but also profound environmental responsibility. <strong>Custom hemp e-liquid boxes</strong> represent the definitive convergence of these two mandates. By utilizing the astonishingly durable and highly renewable fibers of the industrial hemp plant, we provide vapor brands with packaging that delivers uncompromising physical protection for fragile bottles while loudly declaring an ethos of organic sustainability. This comprehensive guide dissects the structural mechanics, printing capabilities, and strategic relevance of adopting hemp packaging for your vape juice lines.
                            </p>
                            <h3>The Physics of Defense: Protecting E-Liquid Bottles</h3>
                            <p>
                                At its core, an e-liquid box must perform a critical logistical function: it must secure a fragile liquid-filled container during complex transit and chaotic retail stocking. E-liquids are commonly housed in either thick plastic "unicorn" bottles (typically 60ml, 100ml, or 120ml) or premium glass dropper bottles (often 30ml or 60ml). If a glass dropper shatters, or a plastic nozzle bursts under pressure, the product is destroyed, and surrounding inventory is ruined. When designing custom hemp e-liquid boxes, we leverage the distinct microscopic structure of hemp bast fibers. These fibers are exceptionally long and possess high tensile strength, creating a folding carton board that resists tearing and crushing far better than standard tree-derived paperboard. This translates to an incredibly resilient exoskeleton that absorbs shock and impact energy, rather than transferring it to the fragile bottle inside, drastically reducing costly product loss.
                            </p>
                            <h3>Immobilization Strategy: Custom Inserts</h3>
                            <p>
                                To maximize the protective capabilities of the hemp box, the bottle inside must be effectively immobilized. A heavy 100ml bottle rattling loosely inside a slightly oversized carton builds kinetic momentum, increasing the risk of damage if dropped. For premium liquid lines, we highly recommend integrating specialized interior inserts. To maintain the completely sustainable profile of the packaging, we vehemently avoid traditional EVA foam. Instead, our structural engineers design intricate die-cut inserts from hemp paper or sustainable molded pulp. These eco-friendly structures contour precisely to the neck and base of the specific bottle shape, suspending it securely within the center of the box. This creates a functional "crumple zone" of air space between the bottle and the exterior walls, delivering maximum drop protection while presenting the product beautifully during the unboxing process.
                            </p>
                            <h3>Executing Vibrant Branding on Natural Substrates</h3>
                            <p>
                                A common misconception in the packaging industry is that choosing "eco-friendly" or "kraft" materials means sacrificing vibrant, high-impact graphic design. In the vape industry, where neon colors, complex graffiti art, and hyper-detailed illustrations dominate the shelves, subdued earthy packaging can easily get lost. We solve this technical challenge completely. While the raw, unbleached texture of hemp is beautiful for certain organic CBD lines, we routinely treat the hemp board to accept intense color. By applying highly opaque, eco-friendly white primer layers precisely where your artwork will be placed, we create a flawless canvas. We then deploy state-of-the-art flexographic printing utilizing sustainable soy and water-based inks. This allows us to execute your most aggressive, colorful brand designs directly onto the hemp box with absolute chromatic accuracy, ensuring your product screams off the shelf while remaining fully biodegradable.
                            </p>
                            <h3>Micro-Typography and Strict Compliance</h3>
                            <p>
                                E-liquid packaging is subject to some of the strictest labeling regulations of any consumer good. Depending on local laws, your box must display massive Surgeon General warnings, complex ingredient profiles identifying specific chemical compounds, exact nicotine or cannabinoid concentrations, Poison Control information, and scannable tracking barcodes. Because standard e-liquid boxes (like a 30ml carton) are physically small, brands are forced to cram huge amounts of text into microscopic areas. Printing 4-point font on heavily textured, fibrous paper requires immense technical precision to combat ink bleed. Our specialized presses are calibrated specifically for natural substrates, ensuring that even the absolute smallest text renders with surgical sharpness. This guarantees that your brand remains fiercely compliant with all legal mandates without degrading the aesthetic cleanliness of your core design.
                            </p>
                            <h3>Interactive Structural Features: Window Cutouts</h3>
                            <p>
                                Consumers in the vapor space are highly visually driven; they want to see the color, viscosity, and fill level of the e-liquid before purchasing. This is why custom window cutouts are frequently integrated into our hemp box designs. We can utilize advanced die-cutting technology to stamp elaborate window shapes—ranging from simple rectangles to intricate forms tracing your logo—directly into the front panel of the box. However, a massive, unsealed hole compromises the box's structural integrity. To solve this while honoring our commitment to sustainability, we back these windows with a hyper-clear, incredibly strong cellulose film. Unlike the petroleum-based plastics used by legacy manufacturers, this plant-derived film provides perfect product visibility while remaining entirely biodegradable and safely compostable alongside the hemp board.
                            </p>
                            <h3>Elevating the Presentation with Eco-Finishes</h3>
                            <p>
                                The final step in mastering e-liquid packaging is the application of specialized finishes that convert a standard box into a premium tactile experience. The substantial density of our hemp board allows for aggressive structural manipulation. We frequently execute deep blind debossing or sharp embossing, giving custom logos and flavor names a satisfying 3D feel that invites the consumer to physically run their fingers over the box. When brilliant visual contrast is required, we utilize plastic-free hot foil stamping in gold, silver, or holographic finishes. Catching the harsh retail lighting, these metallic accents contrast spectacularly against the organic backdrop of the hemp, delivering a high-end luxury aesthetic that demands premium retail pricing.
                            </p>
                            <h3>Conclusion: The Modern Standard</h3>
                            <p>
                                The era of throwing cheap, toxic packaging at the e-liquid market is over. Modern consumers demand excellence in presentation and deep accountability in environmental impact. Custom hemp e-liquid boxes satisfy both demands flawlessly. By engineering superior crush-protection from highly renewable hemp fibers, facilitating vibrantly aggressive and strictly compliant printing capabilities, and utilizing intelligent eco-friendly window films, CustomPackMakers empowers your brand to dominate the retail environment. Transitioning to custom hemp cardboard packaging is the ultimate strategy for securing the integrity of your fragile products while leading the industry toward a cleaner, brilliantly branded future.
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
                                    title: "Uncompromising Bottle Protection",
                                    body: "We engineer folding cartons utilizing high-density hemp board that actively absorbs shock. By choosing these resilient, tear-resistant materials, your brand fiercely defends fragile glass dropper bottles and heavy plastic drippers from crushing or catastrophic leaks during complex shipping routes."
                                },
                                {
                                    title: "Vibrant Eco-Friendly Printing",
                                    body: "Our custom hemp e-liquid boxes prove sustainability doesn't mean sacrificing visual impact. Through advanced flexographic layers and sustainable soy inks, we execute your most vibrant, aggressive brand artwork flawlessly against the hemp surface, ensuring absolute retail shelf dominance."
                                },
                                {
                                    title: "Micro-Precision Compliance Typography",
                                    body: "Equipped with specialized printing technology, we ensure your essential health warnings remain perfectly legible on small packaging surfaces. This precise ink application produces incredibly sharp typography that makes your vape juice boxes instantly compliant and professionally branded."
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
                                <img src={productHero} alt="Sustainable Hemp E-Liquid Box Quality" className="w-full h-full object-cover" />
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
                                Differentiate Your <span className="text-primary text-black">Vape Juice</span>
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                Differentiate your premium e-liquid brand with our highly customized hemp boxes. In an exceptionally saturated vapor market, utilizing the same cheap, generic packaging as budget competitors severely damages your perceived value. Our eco-friendly hemp board instantly establishes authority by blending formidable structural crush resistance with an authentic commitment to modern sustainability. Through brilliantly vibrant, soy-based graphic printing and micro-precise compliance typography, we help you create unique vaporizer packaging that captures consumer attention while surviving brutal transit scenarios. Evolve past unsustainable plastics and dramatically elevate your customer trust by switching to flawlessly tailored, planet-conscious presentation solutions.
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
                            <img src={FAQimage} alt="FAQ for Hemp E-Liquid Boxes" className="absolute inset-0 w-full h-full object-cover" />
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

export default ELiquidBoxes;
