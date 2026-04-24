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

import hempGiftHero from "@/assets/hemp-boxes/hemp-gift-boxes/img-hero.webp";
import hempGiftImg1 from "@/assets/hemp-boxes/hemp-gift-boxes/img-1.webp";
import hempGiftImg2 from "@/assets/hemp-boxes/hemp-gift-boxes/img-2.webp";
import hempGiftImg3 from "@/assets/hemp-boxes/hemp-gift-boxes/img-3.webp";
import hempGiftImg4 from "@/assets/hemp-boxes/hemp-gift-boxes/img-4.webp";
import hempGiftImg5 from "@/assets/hemp-boxes/hemp-gift-boxes/img-5.webp";
import hempGiftImg6 from "@/assets/hemp-boxes/hemp-gift-boxes/img-whychoose.webp";
import hempGiftImg7 from "@/assets/hemp-boxes/hemp-gift-boxes/img-different.webp";
import FAQimage from "@/assets/FAQ-image.webp";

const faqs = [
    { id: "item-1", q: "Do you offer rigid two-piece styles for custom hemp gift boxes?", a: "Yes, we specialize in high-end rigid formats. We construct these luxury two-piece boxes by wrapping our thick, durable chipboard core entirely in premium, textured hemp paper. The result is a highly structured, unyielding box that feels incredibly substantial in the hand." },
    { id: "item-2", q: "Can we add magnetic closures to our eco-friendly gift packaging?", a: "Absolutely. We routinely embed hidden neodymium magnets into the flaps of our hemp rigid boxes. This structural choice provides a satisfying, audible 'snap' upon closing, dramatically elevating the premium feel of the unboxing experience while keeping the exterior aesthetic completely seamless." },
    { id: "item-3", q: "Are custom die-cut foam inserts available for holding multiple gifted items?", a: "While we can use traditional EVA foam upon request, we highly recommend our sustainable alternatives for hemp gift boxes. We excel at creating complex, multi-cavity inserts out of die-cut hemp paper or molded pulp, perfectly cradling multiple items without compromising the box's biodegradable status." },
    { id: "item-4", q: "What is the minimum order quantity for luxury hemp gift boxes?", a: "Because luxury rigid gift boxes require extensive manual assembly and high-end materials, the minimum order quantity (MOQ) is typically 250 units. We maintain this threshold to keep individual unit costs manageable while ensuring the impeccable craftsmanship required for a premium gifting presentation." },
    { id: "item-5", q: "Can you print on the inside lid of the hemp gift box?", a: "Yes, interior printing is one of our most popular requests for luxury gift packaging. We use eco-friendly soy inks to print personalized messages, branding, or intricate artwork on the inside lid, surprising and delighting the recipient immediately upon opening the box." },
];

const HempGiftBoxes = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    const productImages = [
        { src: hempGiftImg1, alt: "Custom Hemp Gift Boxes Main" },
        { src: hempGiftImg2, alt: "Luxury Sustainable Rigid Box" },
        { src: hempGiftImg3, alt: "Eco-Friendly Presentation Packaging" },
        { src: hempGiftImg4, alt: "Premium Hemp Botanical Gifting" },
        { src: hempGiftImg5, alt: "Premium Extra View" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Hemp Gift Boxes | Premium Eco-Friendly Gifting | CustomPackMakers</title>
                <meta name="description" content="Elevate your product presentation with premium custom hemp gift boxes. Luxurious, sustainable, and highly customizable packaging for your high-end retail items." />
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
                            <BreadcrumbItem><BreadcrumbPage>Hemp Gift Boxes</BreadcrumbPage></BreadcrumbItem>
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
                                <span className="text-primary text-black">Custom Hemp</span> Gift Boxes
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Our custom hemp gift boxes deliver an unforgettable, luxurious unboxing experience crafted entirely from sustainable materials. These premium presentation packages elevate your botanical products, creating the perfect eco-friendly solution for holidays and retail events.
                            </p>
                            <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300" onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}>
                                Get a Quote
                            </Button>
                        </div>
                        <div className="lg:col-span-5 relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-muted group">
                            <img src={hempGiftHero} alt="Custom Hemp Gift Boxes" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 max-w-3xl">Redefining Luxury with Earth-Conscious Materials</h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            Historically, the concept of luxury packaging was inextricably linked with excess—heavy plastics, unrecyclable metallic foils, and environmentally destructive coated papers. Our custom hemp gift boxes completely rewrite this narrative. We have engineered a packaging solution that proves top-tier luxury presentation does not require an ecological compromise. Designed specifically for promotional kits, influencer seeding packages, holiday bundles, and premium subscription boxes, these rigid vessels transform a simple product delivery into a highly anticipated, tactile event.
                        </p>
                        <p>
                            Constructed utilizing ultra-thick, structurally unyielding hemp chipboard cores wrapped in beautifully textured, raw hemp paper, these boxes command attention the moment they are held. The natural, earthy texture provides a sensory contrast against high-end finishing options like zero-plastic foil stamping or crisp, minimalist embossing. Furthermore, we specialize in advanced structural designs, incorporating seamless magnetic closures, elegant ribbon pulls, and precision-cut eco-friendly inserts specifically contoured to your product lineup. By encasing your premium products in luxurious hemp, you deliver an unforgettable unboxing ritual while overtly championing uncompromising environmental responsibility.
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
                                                <Input id="length" type="number" placeholder="10" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label>
                                                <Input id="width" type="number" placeholder="8" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">D (in)</Label>
                                                <Input id="depth" type="number" placeholder="4" className="h-9 bg-white" />
                                            </div>
                                        </div>
                                        <div className="space-y-1.5">
                                            <Label htmlFor="qty" className="text-xs font-semibold text-muted-foreground">Quantity</Label>
                                            <Input id="qty" type="number" placeholder="250" className="h-9 bg-white" />
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">Mastering Presentation with Custom Hemp Rigid Gift Boxes</h2>
                    <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="[&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-6 [&>h3]:mb-3 [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-4 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-4 [&>ul>li]:text-[15px] [&>ul>li]:text-slate-600">
                            <p>
                                In the highly competitive world of retail, the unboxing experience has evolved from a simple logistical necessity into a critical brand-building event. When a consumer purchases a premium botanical kit, an artisanal cosmetic bundle, or receives an influencer seeding package, the packaging itself sets the entire psychological stage for product evaluation. Traditional luxury packaging has long relied on materials that are catastrophically damaging to the environment—thick plastics, laminated papers, and non-recyclable foams. Today, however, true luxury is defined by responsibility. <strong>Custom hemp gift boxes</strong> exist at the exact intersection of uncompromising, heavy-duty elegance and radical sustainability. By utilizing dense, rigid hemp structures, progressive brands can deliver awe-inspiring presentation while maintaining a completely biodegradable mandate. This comprehensive guide explores why hemp rigid packaging is rapidly dominating the premium gifting landscape.
                            </p>
                            <h3>The Architecture of the Rigid Hemp Box</h3>
                            <p>
                                The foundation of a premium gift box is its unyielding structure; it must not flex, bend, or feel flimsy in the hands of the consumer. We achieve this monumental strength by utilizing a construction method specific to 'rigid boxes' (also known as set-up boxes). The core of the box is constructed from ultra-thick, multi-ply chipboard—often ranging from 60pt to 120pt thickness. What makes our offering unique is that both this core chipboard and the exterior 'wrap' paper are derived from fast-growing, sustainable hemp fibers. Hemp fibers are microscopically longer and tougher than wood pulp, resulting in a core board that is dramatically stronger and more resistant to warping. This robust core ensures the box feels heavy and substantial—a psychological trigger strongly associated with high monetary value. We then expertly wrap this core with textured, unbleached hemp paper, creating crisp, perfectly folded 90-degree edges that scream meticulous craftsmanship.
                            </p>
                            <h3>Advanced Structural Styles for Luxury Presentation</h3>
                            <p>
                                A custom hemp gift box is not limited to a standard rectangular format with a separate lid. The rigid nature of the hemp chipboard allows for incredibly sophisticated structural engineering designed to create 'reveal' moments during the unboxing process. One of our most popular designs is the magnetic closure box. We embed powerful neodymium magnets beneath the layers of hemp wrapping paper on the front flap. This creates a seamless exterior that snaps shut with an immensely satisfying, audible 'click'—a highly sought-after tactile interaction in luxury packaging. We also manufacture precision two-piece lift-off lids, which create a slow, tantalizing vacuum effect as the lid is slowly pulled upward. For subscription boxes or multi-tier product kits, we can design complex drawer-style boxes with elegant ribbon pulls, effectively turning the packaging into a reusable, miniature chest of drawers that the consumer will keep long after the product is gone.
                            </p>
                            <h3>Custom Die-Cut Inserts: The Art of Organization</h3>
                            <p>
                                A gift box containing multiple items—such as a CBD wellness kit featuring a tincture, a topical cream, and gummies—must present those items perfectly organized. If products arrive jumbled or damaged, the premium illusion is instantly broken. We specialize in designing custom internal architecture, known as cavity inserts. Moving entirely away from unsustainable EVA foam, we construct these inserts using die-cut folded hemp paper or sustainable molded pulp. Our structural designers meticulously measure your products and engineer recesses that grip each item securely. This not only immobilizes the contents during the brutal realities of shipping but also frames the products beautifully upon the initial reveal. The result is a highly manicured, museum-like display that drastically heightens the perceived value of your bundled products.
                            </p>
                            <h3>Elevating the Raw Aesthetic: Printing and Finishing</h3>
                            <p>
                                The natural, earthy texture of unbleached hemp paper provides a stunning visual baseline—a muted, organic canvas that communicates purity. However, to truly elevate the box into the realm of luxury gifting, we carefully apply specialized printing and finishing techniques that contrast with this raw texture. Utilizing eco-friendly, soy-based inks, we can print sharp, minimalist typography or complex botanical illustrations that absorb beautifully into the fibers. For a truly striking effect, we highly recommend metallic hot foil stamping. Applying gold, silver, or copper foil directly onto the rough hemp surface creates an incredible dichotomy between luxury reflection and natural grit—a signature look for premium wellness brands. Furthermore, we execute crisp blind embossing or debossing, where we press your logo directly into the thick board without ink, creating a subtle, incredibly sophisticated 3D branding element that invites the consumer to run their fingers over the design.
                            </p>
                            <h3>The Strategic Marketing Power of Eco-Luxury</h3>
                            <p>
                                Utilizing custom hemp gift boxes provides immense strategic leverage in your marketing efforts. In the age of social media, the 'unboxing video' is a potent form of organic, user-generated advertising. When an influencer or a delighted customer receives a heavy, beautifully crafted box that also happens to be radically sustainable, they are significantly more likely to share that experience online. You are not just selling them a product; you are providing them with an aesthetic experience they wish to associate with their own personal brand. Furthermore, as consumer awareness regarding packaging waste reaches all-time highs, offering a high-end gifting solution that is 100% biodegradable and compostable differentiates you starkly from competitors who still rely on polluting plastics.
                            </p>
                            <h3>Conclusion: The Future of Responsible Gifting</h3>
                            <p>
                                Custom hemp gift boxes prove definitively that luxury presentation and environmental responsibility are not mutually exclusive. By leveraging the immense structural strength of hemp chipboard, engineering sophisticated magnetic and drawer styles, and finishing the package with beautiful, eco-friendly accents, CustomPackMakers creates vessels that command premium retail pricing. Investing in rigid hemp packaging demonstrates that your brand honors the quality of the products inside, intensely values the consumer's tactile experience, and refuses to compromise the future health of the planet. For holiday collections, VIP seeding, and premium retail displays, the hemp rigid box is the ultimate statement of modern luxury.
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
                                    title: "Unrivaled Rigid Presentation",
                                    body: "We utilize ultra-thick rigid hemp chipboard to create premium gift packaging that feels undeniably luxurious and substantial. By choosing these high-end sustainable materials, your brand actively elevates the perceived value of your botanical products before the box is even opened."
                                },
                                {
                                    title: "Sophisticated Magnetic Closures",
                                    body: "Our custom hemp gift boxes feature elegant magnetic closures that deliver a satisfying, high-end unboxing experience without visible outer hardware. This seamless structural engineering ensures your promotional items are beautifully presented, offering a memorable tactile interaction for your customers."
                                },
                                {
                                    title: "Brilliant Metallic Finishing",
                                    body: "Equipped with specialized foil stamping technology, we ensure your intricate logos shine brilliantly against the natural hemp texture. This sophisticated, zero-plastic application produces incredibly striking metallic details that make your limited-edition gift sets instantly stand out on retail displays."
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
                                <img src={hempGiftImg6} alt="Sustainable Hemp Gift Box Quality" className="w-full h-full object-cover" />
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
                                <img src={hempGiftImg7} alt="Differentiate Your Eco-Friendly Brand" className="w-full h-full object-cover" />
                            </div>
                        </div>
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                                Differentiate Your <span className="text-primary text-black">Luxury Kits</span>
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                Differentiate your premium product bundles with our luxurious custom hemp gift boxes. In an era where discerning consumers heavily judge a brand by its presentation, your promotional packaging must communicate undeniable quality and environmental responsibility. Our eco-friendly rigid hemp board instantly establishes a high-end aesthetic with its substantial weight and elegant, natural texture. Through advanced finishing techniques like seamless magnetic closures and metallic foil stamping, we help you create a mesmerizing unboxing ritual that aligns perfectly with your green ethos while ensuring your brand becomes highly shareable on social media. Elevate your perceived value and absolutely delight your customers by switching to flawlessly engineered, planet-conscious gifting solutions.
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
                            <img src={FAQimage} alt="FAQ for Hemp Gift Boxes" className="absolute inset-0 w-full h-full object-cover" />
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

export default HempGiftBoxes;
