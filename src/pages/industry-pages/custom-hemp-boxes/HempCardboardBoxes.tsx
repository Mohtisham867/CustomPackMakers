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

import hempCardboardHero from "@/assets/industry/custom-hemp-boxes/hemp-cardboard-boxes/img-hero.webp";
import hempCardboardImg1 from "@/assets/industry/custom-hemp-boxes/hemp-cardboard-boxes/img-1.webp";
import hempCardboardImg2 from "@/assets/industry/custom-hemp-boxes/hemp-cardboard-boxes/img-2.webp";
import hempCardboardImg3 from "@/assets/industry/custom-hemp-boxes/hemp-cardboard-boxes/img-3.webp";
import hempCardboardImg4 from "@/assets/industry/custom-hemp-boxes/hemp-cardboard-boxes/img-4.webp";
import hempCardboardImg5 from "@/assets/industry/custom-hemp-boxes/hemp-cardboard-boxes/img-5.webp";
import hempCardboardImg6 from "@/assets/industry/custom-hemp-boxes/hemp-cardboard-boxes/img-whychoose.webp";
import hempCardboardImg7 from "@/assets/industry/custom-hemp-boxes/hemp-cardboard-boxes/img-different.webp";
import FAQimage from "@/assets/FAQ-image.webp";

const faqs = [
    { id: "item-1", q: "How does hemp cardboard differ from traditional corrugated cardboard?", a: "While visually similar to high-quality kraft corrugated, hemp cardboard utilizes hemp hurd and fibers in its fluting and liner boards. Hemp fibers are longer and stronger than wood pulp, meaning our hemp cardboard provides superior crush resistance and tensile strength even at somewhat lighter board weights, all while being significantly more sustainable." },
    { id: "item-2", q: "Are hemp cardboard boxes suitable for heavy product shipping?", a: "Yes, absolutely. Because of the incredible natural tensile strength of hemp bast fibers, our double-wall and single-wall corrugated hemp cardboard boxes excel at shipping heavy items. They offer exceptional burst strength and edge-crush test (ECT) ratings, ensuring your heavy goods arrive intact." },
    { id: "item-3", q: "Can we print high-quality graphics on corrugated hemp cardboard?", a: "Yes. While raw corrugated board has a slightly textured surface, we use advanced flexographic and litho-lamination processes specifically calibrated for sustainable substrates. This allows us to print crisp, vibrant logos, barcodes, and complex brand messaging directly onto your hemp cardboard boxes using eco-friendly inks." },
    { id: "item-4", q: "What is the minimum order quantity for custom printed hemp cardboard boxes?", a: "For fully custom printed and sized corrugated hemp cardboard boxes (mailer styles or RSCs), our minimum order quantity is typically 100 units. We maintain this accessible threshold to allow emerging e-commerce brands to adopt sustainable packaging without requiring massive warehouse storage." },
    { id: "item-5", q: "Is the adhesive used in your hemp corrugated board eco-friendly?", a: "Yes, maintaining the 100% biodegradable integrity of the box is our priority. The fluting in our hemp cardboard is bonded to the liner boards using environmentally safe, plant-based starches rather than synthetic glues, ensuring the entire box can be safely composted or cleanly recycled." },
];

const HempCardboardBoxes = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    const productImages = [
        { src: hempCardboardImg1, alt: "Custom Hemp Cardboard Boxes Main" },
        { src: hempCardboardImg2, alt: "Sustainable Corrugated Packaging" },
        { src: hempCardboardImg3, alt: "Eco-Friendly Hemp Shipping Box" },
        { src: hempCardboardImg4, alt: "Heavy Duty Botanical Packaging" },
        { src: hempCardboardImg5, alt: "Premium Extra View" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Hemp Cardboard Boxes | Eco-Friendly Corrugated | CustomPackMakers</title>
                <meta name="description" content="Upgrade your shipping with custom hemp cardboard boxes. Ultra-strong, highly sustainable corrugated packaging designed for secure transit and eco-conscious branding." />
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
                            <BreadcrumbItem><BreadcrumbPage>Hemp Cardboard Boxes</BreadcrumbPage></BreadcrumbItem>
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
                                <span className="text-primary text-black">Custom Hemp</span> Cardboard Boxes
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Our custom hemp cardboard boxes provide unparalleled strength and sustainability for your shipping needs. Engineered from robust hemp fibers, these eco-friendly corrugated solutions offer maximum transit protection while loudly broadcasting your brand's commitment to the environment.
                            </p>
                            <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300" onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}>
                                Get a Quote
                            </Button>
                        </div>
                        <div className="lg:col-span-5 relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-muted group">
                            <img src={hempCardboardHero} alt="Custom Hemp Cardboard Boxes" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 max-w-3xl">The Next Evolution of Corrugated Strength</h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            The logistics and e-commerce industries consume astonishing amounts of corrugated cardboard annually, leading to massive deforestation and immense pressure on global recycling infrastructure. Our custom hemp cardboard boxes represent a vital paradigm shift. Hemp is an incredibly fast-growing, highly renewable resource that yields significantly more fiber per acre than trees, without requiring devastating clear-cutting. By integrating hemp hurds and bast fibers into the fluting and liner boards, we create a corrugated material that is not only radically sustainable but also structurally superior. Hemp fibers are significantly longer and tougher than standard wood pulp, resulting in boxes exhibiting vastly improved edge crush resistance and burst strength.
                        </p>
                        <p>
                            Whether you require sturdy mailer boxes for premium subscription kits or heavy-duty Regular Slotted Cartons (RSCs) for bulk wholesale distribution, our hemp cardboard delivers uncompromising protection. The organic, slightly textured aesthetic of the unbleached material provides a striking visual cue to your customers, instantly communicating your brand's environmental dedication before they even open the package. Paired with our high-definition, soy-based printing capabilities, your shipping logistics are transformed from a purely functional cost center into a powerful, eco-forward branding opportunity that strongly resonates with modern, conscious consumers.
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
                                                <Input id="width" type="number" placeholder="10" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">D (in)</Label>
                                                <Input id="depth" type="number" placeholder="6" className="h-9 bg-white" />
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">The Sustainable Logistics Revolution: Custom Hemp Cardboard Boxes</h2>
                    <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="[&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-6 [&>h3]:mb-3 [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-4 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-4 [&>ul>li]:text-[15px] [&>ul>li]:text-slate-600">
                            <p>
                                The global supply chain operates almost exclusively on corrugated cardboard. From the smallest e-commerce shipments to massive palletized wholesale deliveries, the strength, lightweight nature, and relative cost-effectiveness of corrugated board make it indispensable. However, the environmental toll of traditional paper production—relying heavily on slow-growing forests—is immense. As consumers and corporations alike aggressively seek greener supply chain solutions, a revolutionary material has emerged to challenge the status quo: <strong>custom hemp cardboard boxes</strong>. By utilizing the incredibly fast-growing, robust fibers of the industrial hemp plant, we are able to manufacture corrugated packaging that not only dramatically reduces deforestation but actually outperforms traditional tree-based cardboard in nearly every structural metric. This extensive guide details the engineering, environmental, and branding advantages of adopting hemp-based corrugated solutions for your logistics operations.
                            </p>
                            <h3>The Structural Integrity of Hemp Fibers</h3>
                            <p>
                                The primary function of any shipping box is protection. To understand why hemp cardboard is superior, one must look at the microscopic structure of the material itself. The industrial hemp plant produces bast fibers—long, incredibly tough strands that run the length of the stalk. These fibers are structurally significantly longer and possess a much higher tensile strength than the short cellulose fibers derived from pine or spruce trees typically used in paper mills. When these long hemp fibers are pulped and formed into the liner boards (the flat outer layers) and the fluting (the wavy middle layer) of corrugated cardboard, the resulting material exhibits phenomenal resistance to tearing, puncturing, and crushing. In practical terms, a hemp corrugated box will routinely achieve higher Edge Crush Test (ECT) and burst strength ratings than a standard wood-pulp box of the exact same thickness.
                            </p>
                            <h3>Uncompromising Transit Defense</h3>
                            <p>
                                The harsh reality of the modern logistics network is brutal on packaging. Packages are subjected to automated sorting machinery, heavy compression loads while stacked in transit vehicles, and sudden impacts from drops. Our custom hemp cardboard boxes are engineered to absorb and distribute this kinetic energy flawlessly. The superior stiffness of the hemp fluting acts as a vastly improved shock absorber, preventing the inward collapse of the box walls when under pressure. This means that whether you are shipping fragile glass jars of botanical extracts, heavy machinery parts, or bulk volumes of consumer goods, hemp cardboard provides an unyielding exoskeleton. By upgrading your shipping materials to hemp, you actively reduce the incidence of catastrophic product damage during transit, thereby lowering replacement costs and preserving hard-won customer satisfaction.
                            </p>
                            <h3>Environmental Superiority: Beyond Marketing</h3>
                            <p>
                                The environmental arguments for transitioning to hemp cardboard are overwhelming and quantifiable. Industrial hemp is a phenomenal rotational crop that matures in roughly four months, compared to the twenty to forty years required for timber to reach harvestable size. Furthermore, hemp yields up to four times more usable fiber per acre than trees. Cultivating hemp requires significantly less water, naturally resists pests without requiring heavy pesticide use, and actively remediates the soil it grows in through a process called phytoremediation. By choosing custom hemp cardboard boxes for your shipping needs, you are actively participating in carbon sequestration, reducing the strain on global forests, and supporting regenerative agricultural practices. It is a profound, systemic shift toward true sustainability, far beyond superficial 'greenwashing.'
                            </p>
                            <h3>Branding the Exterior: Printing on Hemp Corrugated</h3>
                            <p>
                                A shipping box is often the very first physical interaction a customer has with your brand. Leaving that massive canvas blank—or worse, utilizing cheap, poorly printed materials—is a missed marketing opportunity. While raw hemp corrugated board possesses a beautiful, subtly textured, earthy appearance, it is also highly receptive to custom printing. We utilize advanced flexographic and litho-lamination printing techniques, calibrated specifically for natural, porous substrates. By employing vibrant, eco-friendly soy or water-based inks, we can transform a standard hemp shipping box into a highly branded marketing piece. Whether you require massive, bold logos covering the entire exterior, intricate patterns, or pinpoint-accurate barcodes and handling instructions, our printing technology ensures your brand message is delivered perfectly, without compromising the box's environmental integrity.
                            </p>
                            <h3>Customized Architectures for Mailers and Shippers</h3>
                            <p>
                                Not all shipments require the exact same type of box. We offer fully customized structural designs utilizing our corrugated hemp board. For e-commerce brands, subscription services, and premium apparel lines, we engineer Roll End Tuck Top (RETT) mailer boxes. These feature intricate folding patterns, double-wall reinforced sides, and a satisfying tab-locking front, negating the need for excess plastic packing tape while delivering a fantastic unboxing experience. For bulk B2B shipments, we manufacture heavy-duty Regular Slotted Cartons (RSC) customized to the exact millimeter to accommodate your specific product footprint. This precision sizing minimizes the need for internal void fill (like plastic bubble wrap or peanuts), further reducing your environmental footprint and cutting down on dimensional weight shipping charges.
                            </p>
                            <h3>The Unseen Advantage: Plant-Based Adhesives</h3>
                            <p>
                                A truly sustainable box cannot rely on toxic chemicals hiding within its structure. The wavy fluting of a corrugated box is bonded to the flat liner boards using incredibly strong adhesives. In cheap, mass-produced cardboard, these adhesives are often synthetic and petroleum-based, which can introduce microplastics into the environment when the box breaks down. We ensure that our custom hemp cardboard boxes utilize only plant-based, starch-derived adhesives. This critical detail guarantees that once your hemp box has served its purpose—even after it has been recycled multiple times and the fibers eventually become too short to reuse—the entire structure safely biodegrades into non-toxic organic matter, returning cleanly to the earth.
                            </p>
                            <h3>Conclusion: Future-Proofing Your Supply Chain</h3>
                            <p>
                                Transitioning your logistics operations to custom hemp cardboard boxes is no longer just a niche environmental choice; it is a forward-thinking structural and strategic upgrade. By harnessing the phenomenal tensile strength of hemp bast fibers, you secure superior protection for your products traversing the modern supply chain. Simultaneously, you dramatically lower your brand's carbon footprint, distance your company from the destructive practices of deforestation, and deliver a powerful, highly visible message of ecological responsibility straight to your customer's doorstep. CustomPackMakers is proud to engineer and manufacture these heavy-duty, sustainable corrugated solutions, providing your brand with the strength you demand and the sustainability the planet requires.
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
                                    title: "Superior Corrugated Strength",
                                    body: "We incorporate incredibly resilient long hemp bast fibers into our corrugated fluting and liner boards, resulting in shipping boxes with dramatically improved edge crush resistance. This ultra-strong structural upgrade actively prevents box collapse under heavy weight and brutal transit conditions."
                                },
                                {
                                    title: "Radical Supply Chain Sustainability",
                                    body: "Our custom hemp cardboard provides an immediate, highly impactful reduction in your company's reliance on slow-growing, easily depleted forest resources. Implementing these fast-growing agricultural fibers into your shipping strategy instantly modernizes your operations and significantly lowers your carbon footprint."
                                },
                                {
                                    title: "High-Fidelity Eco-Printing",
                                    body: "Utilizing advanced commercial flexographic technology, we ensure your critical logistics barcodes and bold brand logos look sharp against the natural hemp surface. We employ non-toxic, soy-based inks to deliver vibrant exterior branding while maintaining the complete compostability of your shipping materials."
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
                                <img src={hempCardboardImg6} alt="Sustainable Hemp Cardboard Quality" className="w-full h-full object-cover" />
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
                                <img src={hempCardboardImg7} alt="Differentiate Your Eco-Friendly Brand" className="w-full h-full object-cover" />
                            </div>
                        </div>
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                                Differentiate Your <span className="text-primary text-black">Logistics</span>
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                Differentiate your e-commerce and wholesale operations with our ultra-strong custom hemp cardboard boxes. In an era where consumers heavily scrutinize the environmental footprint of delivered goods, arriving on their doorstep in standard, polluting packaging is a severe liability. Our eco-friendly hemp corrugated board instantly communicates an authentic commitment to sustainability with its organic texture and highly renewable origins. Through advanced flexographic printing for bold exterior branding and precisely dimensioned structural designs, we help you transform a simple utilitarian shipping box into a powerful, eco-conscious billboard that survives brutal transit systems and arrives looking spectacular. Elevate your delivery experience and fiercely protect your products by upgrading to heavy-duty, earth-first logistics solutions.
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
                            <img src={FAQimage} alt="FAQ for Hemp Cardboard Boxes" className="absolute inset-0 w-full h-full object-cover" />
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

export default HempCardboardBoxes;
