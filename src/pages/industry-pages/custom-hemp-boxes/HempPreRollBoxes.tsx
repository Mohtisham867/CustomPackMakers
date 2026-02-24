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

import productHero from "@/assets/hemp-boxes/Hemp Pre Roll Boxes.webp";
import FAQimage from "@/assets/FAQ-image.png";

const faqs = [
    { id: "item-1", q: "Do your hemp pre-roll boxes come with certified child-resistant locks?", a: "Yes, we specialize in manufacturing hemp pre-roll packaging with compliant, certified child-resistant (CR) mechanisms. From pinch-and-pull slider trays to secure locking button flaps, our designs meet strict regulatory standards while maintaining a sleek, organic look." },
    { id: "item-2", q: "Can you add custom inserts to separate individual hemp pre-rolls?", a: "Absolutely. We offer customizable inner inserts made from die-cut hemp paper or sustainable molded pulp to securely cradle each individual pre-roll. This prevents movement during transit, preventing the delicate joints from crushing or flaking before reaching the consumer." },
    { id: "item-3", q: "Are the inner linings of the boxes designed to preserve terpene freshness?", a: "Yes, to protect the sensitive terpene profiles of your pre-rolls, we can incorporate biodegradable barrier linings or high-density hemp board that restricts oxygen and moisture exchange. This helps maintain the aroma, flavor, and potency of your product for a longer shelf life." },
    { id: "item-4", q: "What is the minimum order quantity for printed hemp pre-roll packaging?", a: "To help emerging cannabis and botanical brands scale, our minimum order quantity (MOQ) for custom printed hemp pre-roll boxes starts at just 100 units. This flexibility allows for seasonal runs, limited editions, or test marketing without massive inventory commitments." },
    { id: "item-5", q: "Can we use foil stamping on the textured surface of hemp boxes?", a: "Yes, metallic foil stamping looks incredibly striking against the natural, earthy texture of unbleached hemp board. This contrast between the raw, organic material and the highly reflective, luxurious metallic foil is one of the most popular design choices for premium pre-roll brands." },
];

const HempPreRollBoxes = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    const productImages = [
        { src: productHero, alt: "Custom Hemp Pre Roll Boxes Main" },
        { src: productHero, alt: "Child-Resistant Pre-Roll Packaging" },
        { src: productHero, alt: "Sustainable Joint Boxes" },
        { src: productHero, alt: "Premium Botanical Pre-Roll Cases" },
        { src: productHero, alt: "Premium Extra View" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Hemp Pre Roll Boxes | Child-Resistant Packaging | CustomPackMakers</title>
                <meta name="description" content="Discover secure, compliant custom hemp pre-roll boxes. Premium, child-resistant, and eco-friendly packaging designed to protect your botanical blends." />
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
                            <BreadcrumbItem><BreadcrumbPage>Hemp Pre Roll Boxes</BreadcrumbPage></BreadcrumbItem>
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
                                <span className="text-primary text-black">Custom Hemp</span> Pre Roll Boxes
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Our custom hemp pre-roll boxes deliver secure, child-resistant protection with uncompromised aesthetic appeal. Crafted from premium organic fibers, these pocket-sized packaging solutions preserve your botanical blends while keeping your brand compliant and highly attractive.
                            </p>
                            <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300" onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}>
                                Get a Quote
                            </Button>
                        </div>
                        <div className="lg:col-span-5 relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-muted group">
                            <img src={productHero} alt="Custom Hemp Pre Roll Boxes" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 max-w-3xl">Premium Botanical Protection and Compliance</h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            In the rapidly expanding botanical and dispensary markets, pre-rolls represent one of the most popular and accessible product categories. However, these slim, delicate items require packaging that goes beyond simple containment. They demand rigid physical protection against crushing when carried in pockets or purses, strict regulatory compliance via child-resistant mechanisms, and barrier defense against environmental degradation. Our custom hemp pre-roll boxes are meticulously engineered to satisfy all these stringent requirements while presenting a profoundly natural, eco-friendly brand image.
                        </p>
                        <p>
                            Utilizing high-density hemp board, we create hard-shell slider boxes, flip-top cartons, and specialized tin inserts that guard the fragile structure of the pre-roll. To protect the vital terpene profiles and moisture content, our boxes can be equipped with protective inner barriers that lock in freshness. We specialize in printing high-resolution, compliant legal text alongside vibrant, eye-catching branding directly onto the textured hemp surface using safe, soy-based inks. Your pre-rolls deserve packaging that reflects their organic purity, and our hemp boxes provide the ultimate canvas for your botanical brand.
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
                                                <Input id="length" type="number" placeholder="4.5" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label>
                                                <Input id="width" type="number" placeholder="2.5" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">D (in)</Label>
                                                <Input id="depth" type="number" placeholder="0.5" className="h-9 bg-white" />
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">A Comprehensive Guide to Hemp Pre-Roll Packaging Excellence</h2>
                    <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="[&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-6 [&>h3]:mb-3 [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-4 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-4 [&>ul>li]:text-[15px] [&>ul>li]:text-slate-600">
                            <p>
                                The botanical pre-roll market is one of the fastest-growing and most highly competitive segments in the modern retail and dispensary landscape. Characterized by a discerning consumer base that values purity, potency, and organic origins, the products inside demand an exterior that reflects these exact qualities. Consequently, traditional plastic vials and heavily bleached, unrecyclable cardboards are rapidly falling out of favor. Progressive brands are pivoting toward <strong>custom hemp pre-roll boxes</strong> as the definitive packaging solution. This transition is not merely an aesthetic choice; it is a strategic business decision that encompasses structural preservation, stringent regulatory compliance, and a profound commitment to environmental sustainability. This detailed guide explores how specialized hemp packaging elevates pre-roll products from simple commodities into premium, lifestyle-aligned luxury items.
                            </p>
                            <h3>Structural Integrity: Defending the Delicate Pre-Roll</h3>
                            <p>
                                A pre-roll, by its very nature, is a physically fragile product. Constructed from finely ground botanical matter wrapped in delicate papers or cones, it is highly susceptible to crushing, snapping, and flaking. The primary function of any pre-roll box is physical defense, specifically because these products are frequently carried in consumers' pockets, purses, and backpacks. Hemp fibers, renowned for being significantly longer and inherently stronger than traditional wood-pulp fibers, provide a fundamental structural advantage. When compressed into high-density chipboard or thick folding carton stock, hemp creates an exceptionally rigid barrier. Our custom hemp pre-roll cases—particularly our popular slider-drawer and hard-shell flip-top designs—offer a fortress of natural protection. This ensures that the product the consumer removes from the box at the end of the day is as perfectly intact, uniform, and aesthetically pleasing as the moment it left your manufacturing facility.
                            </p>
                            <h3>Child-Resistant Compliance Meets Elegant Design</h3>
                            <p>
                                Operating within the botanical and dispensary space requires flawless navigation of strict legal packaging regulations. In nearly all regulated markets, pre-roll packaging containing active botanical compounds must be certified child-resistant (CR). Historically, achieving CR compliance meant relying on cumbersome, aesthetically unpleasing plastic squeeze-tops or complex mechanisms that frustrated legitimate adult consumers. CustomPackMakers has revolutionized this requirement by engineering seamless CR mechanisms directly into our custom hemp pre-roll boxes. We leverage the natural rigidity of hemp board to create hidden locking tabs, pinch-and-release sliders, and secure push-button mechanisms. These designs undergo rigorous third-party testing to ensure they pass strict child safety standards, all while maintaining a sleek, organic, and highly premium exterior that adults can open smoothly. This synthesis of strict legal compliance and sophisticated design is critical for elevated brand positioning.
                            </p>
                            <h3>Preserving the Terpene Profile: Freshness and Potency</h3>
                            <p>
                                The value of a premium pre-roll lies not just in its active compounds, but profoundly in its terpene profile—the volatile aromatic oils that dictate flavor, scent, and experiential effects. Terpenes are highly sensitive to environmental factors, particularly oxygen exposure, light degradation, and humidity fluctuations. A poorly sealed box accelerates the evaporation of these essential oils, resulting in a harsh, flavorless, and sub-par consumer experience. Our hemp pre-roll boxes address this critical issue through advanced interior engineering. We can utilize highly dense, calendered hemp board that minimizes air permeability, or integrate specialized, biodegradable interior barriers and foils. These protective layers create a micro-environment within the box that stabilizes humidity and blocks UV light, effectively locking the terpenes into the pre-roll and vastly extending the shelf life and potency of your botanical products.
                            </p>
                            <h3>Sustainability as a Core Brand Identity</h3>
                            <p>
                                The demographic most likely to purchase premium pre-rolls heavily intersects with the demographic demanding environmentally responsible commercial practices. Aligning your product with the pollution generated by single-use plastic 'doob tubes' is increasingly toxic to brand growth. Hemp paper board offers the ultimate sustainable alternative. Hemp is a hyper-renewable resource that grows to maturity in mere months, requires drastically less water than alternative crops, and demands very few pesticides. The resulting packaging board is completely biodegradable and home-compostable. When a consumer discards your empty hemp pre-roll box, it naturally returns to the earth rather than contributing to centuries-long landfill accumulation. Utilizing hemp packaging is an overt, tactile demonstration that your brand respects the organic origins of its products and actively stewards the health of the planet—a powerful driver of brand loyalty in the modern market.
                            </p>
                            <h3>Custom Die-Cut Inserts: The Art of Presentation</h3>
                            <p>
                                Presentation is paramount, particularly for multi-pack pre-rolls sold at premium price points. A box where the joints rattle loosely against each other feels cheap and risks product damage. We solve this by designing custom-engineered internal inserts tailored precisely to your pre-roll dimensions. Using die-cut hemp paper or sustainable molded pulp, we create individual cradles or 'nests' that hold each cone securely in place. This not only immobilizes the product to prevent damage during transit but also creates a stunning, organized reveal when the consumer opens the box. The visual impact of perfectly aligned, securely nestled pre-rolls heightens the perceived value of your product, justifying a higher retail margin and enhancing the overall ritual of consumption.
                            </p>
                            <h3>Optimal Printability for Botanical Branding</h3>
                            <p>
                                The raw, slightly textured surface of an unbleached hemp box provides a gorgeous, earthy canvas for your branding. However, this natural texture requires specialized printing expertise. We utilize advanced offset and digital presses equipped with high-pigment, soy-based inks to ensure flawless graphic reproduction. These eco-friendly inks absorb beautifully into the hemp fibers, delivering sharp typography and vibrant, saturated colors that stand out boldly against the natural background. Whether your brand aesthetic is minimalist and clinical, rich in intricate botanical illustrations, or demands the luxurious contrast of metallic foil stamping on a raw surface, we achieve it perfectly. Furthermore, we ensure that all mandatory state warning labels, barcode information, and batch coding spaces are integrated seamlessly into the artwork, maintaining total legal compliance without cluttering your core brand message.
                            </p>
                            <h3>Conclusion: Elevating the Pre-Roll Experience</h3>
                            <p>
                                A pre-roll is no longer just a convenient commodity; it is a curated botanical experience. The packaging you choose must reflect the care, quality, and ethos invested in the cultivation of the product inside. Custom hemp pre-roll boxes by CustomPackMakers represent the pinnacle of packaging evolution within this industry. By providing unyielding physical protection, flawless child-resistant compliance, terpene preservation, and an unapologetic commitment to global sustainability, these boxes elevate your product above the crowded dispensary shelves. Investing in highly customized, deeply natural hemp packaging is investing in the perceived value, regulatory security, and long-term brand equity of your botanical enterprise.
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
                                    title: "Crush-Proof Organic Structures",
                                    body: "We utilize rigid hemp-blended chipboard to create pre-roll packaging that is entirely crush-proof and biodegradable. By choosing these sturdy materials, your brand actively prevents joint damage while maintaining the premium tactile feel needed for high-end retail dispensary presentation."
                                },
                                {
                                    title: "Seamless CR Regulatory Compliance",
                                    body: "Our custom hemp pre-roll boxes feature child-resistant locking mechanisms that deliver essential regulatory compliance without frustrating adult consumers. This advanced structural engineering ensures your botanical goods are legally protected while offering a smooth, premium unboxing experience for patients."
                                },
                                {
                                    title: "Legible Compliance Printing",
                                    body: "Equipped with advanced soy-based printing technology, we ensure your compliance labeling remains perfectly legible on textured hemp surfaces. This precise, non-toxic ink application produces incredibly sharp, legally sound typography that makes your pre-roll products instantly compliant and shelf-ready."
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
                                <img src={productHero} alt="Sustainable Hemp Pre Roll Box Quality" className="w-full h-full object-cover" />
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
                                Differentiate Your <span className="text-primary text-black">Botanical Brand</span>
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                Differentiate your highly competitive pre-roll products with our premium custom hemp boxes. In an era where consumers actively seek out environmentally responsible alternatives to plastic 'doob tubes', your packaging choices play a critical role in establishing brand superiority. Our eco-friendly hemp board instantly communicates an uncompromising commitment to natural purity with its organic texture and biodegradable properties. Through advanced soy-based printing, discreet child-resistant mechanisms, and customized supportive inserts, we help you create unique packaging that aligns with your wellness ethos while ensuring your pre-rolls demand attention on dispensary shelves. Elevate your perceived value and increase consumer trust by switching to visually stunning and planet-conscious presentation solutions.
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
                            <img src={FAQimage} alt="FAQ for Hemp Pre Roll Boxes" className="absolute inset-0 w-full h-full object-cover" />
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

export default HempPreRollBoxes;
