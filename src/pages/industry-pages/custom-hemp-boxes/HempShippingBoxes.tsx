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

import hempShippingHero from "@/assets/hemp-boxes/hemp-shipping-boxes/img-hero.webp";
import hempShippingImg1 from "@/assets/hemp-boxes/hemp-shipping-boxes/img-1.webp";
import hempShippingImg2 from "@/assets/hemp-boxes/hemp-shipping-boxes/img-2.webp";
import hempShippingImg3 from "@/assets/hemp-boxes/hemp-shipping-boxes/img-3.webp";
import hempShippingImg4 from "@/assets/hemp-boxes/hemp-shipping-boxes/img-4.webp";
import hempShippingImg5 from "@/assets/hemp-boxes/hemp-shipping-boxes/img-5.webp";
import hempShippingImg6 from "@/assets/hemp-boxes/hemp-shipping-boxes/img-whychoose.webp";
import hempShippingImg7 from "@/assets/hemp-boxes/hemp-shipping-boxes/img-different.webp";
import FAQimage from "@/assets/FAQ-image.webp";

const faqs = [
    { id: "item-1", q: "Are hemp shipping boxes strong enough for heavy wholesale orders?", a: "Absolutely. Hemp fibers are significantly stronger than traditional tree-pulp fibers. When processed into corrugated board, hemp creates a shipping box with superior edge-crush test (ECT) ratings and burst strength, making them ideal for heavy, dense retail shipments." },
    { id: "item-2", q: "Can I print handling instructions directly on the hemp corrugated board?", a: "Yes. We utilize advanced flexographic and screen printing techniques that are specifically calibrated for corrugated hemp surfaces. This allows us to print crisp, highly legible handling instructions, barcodes, and large brand logos directly onto the shipping box." },
    { id: "item-3", q: "Are the flutes in your hemp shipping boxes made from recycled materials?", a: "Yes, our commitment to sustainability applies to every layer of the box. The inner corrugated fluting is constructed from dense, 100% post-consumer recycled paper, while the outer liners feature our high-strength hemp blends to maximize durability and eco-friendliness." },
    { id: "item-4", q: "What is the minimum order quantity for custom printed hemp shipping boxes?", a: "For custom printed corrugated hemp shipping boxes, our minimum order quantity (MOQ) is generally 100 units. This allows businesses to scale their sustainable shipping operations efficiently without needing to warehouse thousands of empty boxes." },
    { id: "item-5", q: "Do hemp shipping boxes handle moisture better than standard cardboard during transit?", a: "Hemp fiber is naturally more resistant to moisture degradation than standard porous cardboard. While not waterproof without specialized eco-friendly coatings, a raw hemp shipping box will retain its structural integrity much longer in humid transit environments than traditional kraft." },
];

const HempShippingBoxes = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    const productImages = [
        { src: hempShippingImg1, alt: "Custom Hemp Shipping Boxes Main" },
        { src: hempShippingImg2, alt: "Heavy Duty Hemp Corrugated" },
        { src: hempShippingImg3, alt: "Sustainable Wholesale Shipping" },
        { src: hempShippingImg4, alt: "Eco-Friendly Freight Packaging" },
        { src: hempShippingImg5, alt: "Premium Extra View" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Hemp Shipping Boxes | Wholesale Corrugated Packaging | CustomPackMakers</title>
                <meta name="description" content="Discover heavy-duty custom hemp shipping boxes engineered for sustainable wholesale distribution. Durable corrugated packaging that protects your products and the planet." />
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
                            <BreadcrumbItem><BreadcrumbPage>Hemp Shipping Boxes</BreadcrumbPage></BreadcrumbItem>
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
                                <span className="text-primary text-black">Custom Hemp</span> Shipping Boxes
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Our custom hemp shipping boxes provide heavy-duty protection for your wholesale distribution needs. Engineered from reinforced natural fibers, these robust packaging solutions ensure your sustainable products arrive safely while reducing overall environmental shipping impact.
                            </p>
                            <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300" onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}>
                                Get a Quote
                            </Button>
                        </div>
                        <div className="lg:col-span-5 relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-muted group">
                            <img src={hempShippingHero} alt="Custom Hemp Shipping Boxes" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 max-w-3xl">Industrial Strength Meets Environmental Responsibility</h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            The logistics and shipping sector is one of the largest contributors to global packaging waste. Transitioning your wholesale and e-commerce shipping operations to hemp-based corrugated board is a massive step toward mitigating that impact. Hemp fibers are inherently longer and possess higher tensile strength than standard wood pulp, allowing our custom hemp shipping boxes to endure rigorous transit environments—from high-stacking warehouse pallets to the unpredictable handling of final-mile delivery.
                        </p>
                        <p>
                            We engineer these robust shipping solutions to offer superior burst strength and edge-crush resistance, ensuring your internal products are shielded against impacts, vibrations, and compression. All of our corrugated hemp cartons are fully customizable, allowing you to print bold brand logos, handling instructions, and regulatory barcodes using durable, eco-friendly inks. With our hemp shipping boxes, your brand makes an environmental statement before the customer even opens the package.
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
                                                <Input id="length" type="number" placeholder="12" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label>
                                                <Input id="width" type="number" placeholder="12" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">D (in)</Label>
                                                <Input id="depth" type="number" placeholder="8" className="h-9 bg-white" />
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">Mastering Logistics with Custom Hemp Shipping Boxes</h2>
                    <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="[&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-6 [&>h3]:mb-3 [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-4 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-4 [&>ul>li]:text-[15px] [&>ul>li]:text-slate-600">
                            <p>
                                In the high-stakes world of global supply chains, e-commerce distribution, and wholesale logistics, the importance of robust, reliable packaging cannot be overstated. A compromised shipping box leads directly to damaged goods, frustrated customers, complicated return logistics, and ultimately, a tarnished brand reputation. However, the modern logistics industry faces an additional, equally pressing challenge: the environmental crisis. The massive volume of single-use, non-renewable corrugated cardboard utilized daily is staggering. Enter <strong>custom hemp shipping boxes</strong>—a revolutionary packaging solution engineered to deliver unyielding industrial strength while fundamentally rewriting the ecological footprint of product distribution. This comprehensive guide explores why hemp-based corrugated board is rapidly becoming the gold standard for brands operating in both B2B and Direct-to-Consumer (DTC) channels.
                            </p>
                            <h3>The Superior Architecture of Hemp Corrugated Board</h3>
                            <p>
                                Understanding why hemp shipping boxes outperform traditional kraft begins at the microscopic level. Hemp bast fibers (the outer bark of the stalk) are recognized as some of the strongest natural fibers in the world. They are significantly longer and possess a higher cellulose concentration than the wood pulp fibers traditionally harvested from pine or spruce trees. When these hemp fibers are processed and engineered into the outer liners of corrugated board, they create a product with dramatically higher tensile strength. This directly influences the Edge Crush Test (ECT) and Mullen Burst Test ratings of the box. A standard B-flute hemp shipping box can frequently withstand greater compression forces and puncture impacts than a thicker, heavier wood-pulp equivalent. This structural superiority means your products—whether they are fragile glass tincture bottles, heavy cosmetic jars, or bulk wholesale goods—remain optimally protected against the shocks, drops, and intense stacking pressures inherent in modern freight transit.
                            </p>
                            <h3>Strategic Weight Reduction in Freight</h3>
                            <p>
                                Because hemp fibers are inherently stronger, manufacturers can often achieve the necessary ECT ratings using a slightly thinner board profile. This results in a packaging solution that is phenomenally strong yet surprisingly lightweight. In the logistics sector, where shipping costs are meticulously calculated based on dimensional weight (DIM weight) and actual gross weight, shaving ounces off your packaging can result in massive cost savings over large distribution volumes. Using custom hemp shipping boxes allows you to optimize your freight economics without ever compromising the safety of the contents. You protect your profit margins just as effectively as you protect your products.
                            </p>
                            <h3>Environmental Leadership in the Supply Chain</h3>
                            <p>
                                Adopting hemp shipping boxes is a profound statement of corporate sustainability. As consumers become increasingly hyper-aware of packaging waste, a brand's logistical choices are heavily scrutinized. Hemp is an incredibly sustainable agronomic crop; it grows rapidly (reaching maturity in months rather than decades), requires minimal water, and needs virtually no pesticides compared to commercial forestry. By replacing tree-based cardboard with hemp-blended corrugated board, you are actively combating deforestation and reducing the carbon footprint of your supply chain. Furthermore, hemp shipping boxes are entirely biodegradable and highly recyclable. They fit seamlessly into existing recycling infrastructures, ensuring a closed-loop life cycle. For consumers receiving an e-commerce order, the sight of a sturdy, unbleached hemp shipping box instantly validates your brand's commitment to environmental stewardship, turning a simple delivery vessel into a powerful brand-building touchpoint.
                            </p>
                            <h3>Advanced Flexographic and Screen Printing Capabilities</h3>
                            <p>
                                A shipping box is a moving billboard. It travels through warehouses, distribution centers, delivery trucks, and neighborhood porches, exposing your brand to countless sets of eyes. Custom hemp shipping boxes offer excellent printability, allowing you to maximize this exposure. The naturally porous texture of hemp liners absorbs flexographic and screen printing inks exceptionally well. We utilize heavy-duty, weather-resistant soy and water-based inks to print bold logos, handling instructions (e.g., "Fragile," "This Side Up"), and complex scannable barcodes. The high contrast of dark inks against the natural, earthy tone of the hemp board creates a striking, professional aesthetic. For D2C brands, we can also print on the inside of the corrugated box, ensuring that the moment the customer opens the package, they are greeted by a branded, immersive unboxing experience.
                            </p>
                            <h3>Customized Dimensions for Optimal Packing Efficiency</h3>
                            <p>
                                One size does not fit all in logistics. Using oversized shipping boxes forces the use of excessive void fill (like plastic bubble wrap or packing peanuts), which increases both your material costs and your environmental impact. Furthermore, shipping "air" negatively impacts your DIM weight freight costs. We manufacture custom hemp shipping boxes tailored to the exact dimensions of your products or product inner-packs. Whether you need long, shallow mailers for subscription clothing kits, perfectly cubed boxes for stacked wholesale jars, or reinforced heavy-duty master cartons for palletized freight, we engineer the box to fit. This precise sizing minimizes internal movement during transit, drastically reducing the rate of product damage and eliminating the need for wasteful synthetic void fillers.
                            </p>
                            <h3>Weather Resistance and Transit Durability</h3>
                            <p>
                                The supply chain is not a climate-controlled environment. Shipping boxes are frequently exposed to high humidity, shifting temperatures, and occasional moisture. While untreated hemp board is not waterproof, hemp fibers naturally exhibit better resistance to degrading in humid conditions than standard recycled paper pulp. A custom hemp shipping box will maintain its structural rigidity longer when subjected to the dampness of transit hubs or delivery porches. For shipments requiring enhanced protection, we can apply eco-friendly, biodegradable aqueous coatings that provide a barrier against mild moisture, ensuring the box doesn't easily warp or collapse before reaching its destination.
                            </p>
                            <h3>Conclusion: Upgrading Your Logistics with Hemp</h3>
                            <p>
                                Transitioning to custom hemp shipping boxes is a strategic upgrade that benefits your operational efficiency, your profit margins, and your brand's environmental legacy. It is the rare packaging solution that refuses to compromise, offering industrial-grade physical protection while utilizing the world's most rapidly renewable and sustainable agronomic resources. By outfitting your distribution network with hemp-based corrugated cartons, you ensure that your products survive the rigors of modern freight, your shipping costs remain optimized, and your customers receive a powerful, tangible demonstration of your brand's commitment to the future of our planet. The logistical superiority of your brand starts with the box it ships in.
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
                                    title: "Industrial-Grade Burst Strength",
                                    body: "We utilize industrial-grade hemp corrugated board to create shipping boxes that withstand severe transit conditions. By integrating these natural super-fibers, your brand benefits from superior burst strength that actively prevents product damage during complex global supply chain movements."
                                },
                                {
                                    title: "Maximum Structural Integrity",
                                    body: "Our high-density hemp shipping boxes feature reinforced corners that deliver maximum structural integrity without adding unnecessary freight weight. This advanced packaging engineering ensures your bulk orders remain fully protected against crushing, minimizing costly returns and frustrating customer experiences."
                                },
                                {
                                    title: "High-Visibility Corrugated Branding",
                                    body: "Equipped with specialized flexographic printing technology, we ensure your wholesale branding remains highly visible on rugged corrugated surfaces. This durable ink application produces incredibly sharp, weather-resistant logos that make your shipping cartons instantly recognizable throughout the entire delivery process."
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
                                <img src={hempShippingImg6} alt="Sustainable Hemp Shipping Box Quality" className="w-full h-full object-cover" />
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
                                <img src={hempShippingImg7} alt="Differentiate Your Eco-Friendly Brand" className="w-full h-full object-cover" />
                            </div>
                        </div>
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                                Differentiate Your <span className="text-primary text-black">Organic Brand</span>
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                Differentiate your organic retail products with our heavy-duty custom hemp shipping boxes. In an era where consumers actively scrutinize the environmental impact of e-commerce packaging, your logistical choices play a critical role in establishing brand identity. Our eco-friendly corrugated hemp instantly communicates a commitment to sustainability with its natural texture and biodegradable properties, long before the customer even reaches the product inside. Through advanced flexographic printing and customized structural designs, we help you create unique freight packaging that aligns with your green ethos while ensuring your shipments dominate the delivery experience. Elevate your brand reputation and increase trust by switching to visually commanding and planet-conscious shipping solutions.
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
                            <img src={FAQimage} alt="FAQ for Hemp Shipping Boxes" className="absolute inset-0 w-full h-full object-cover" />
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

export default HempShippingBoxes;
