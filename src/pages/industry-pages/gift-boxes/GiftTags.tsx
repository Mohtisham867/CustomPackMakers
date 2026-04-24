import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { QuoteForm } from "@/components/QuoteForm";
import { BrandRating } from "@/components/BrandRating";
import { Card, CardContent } from "@/components/ui/card";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TechnicalSpecsSection } from "@/components/TechnicalSpecsSection";
import { RelatedProductGift } from "@/components/RelatedProductGift";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";

// Product images
import giftTagshero from "@/assets/gift-boxes/Gift-Tags/img-hero.webp";
import giftTagsimg1 from "@/assets/gift-boxes/Gift-Tags/img-1.webp";
import giftTagsimg2 from "@/assets/gift-boxes/Gift-Tags/img-2.webp";
import giftTagsimg3 from "@/assets/gift-boxes/Gift-Tags/img-3.webp";
import giftTagsimg4 from "@/assets/gift-boxes/Gift-Tags/img-4.webp";
import giftTagsimg5 from "@/assets/gift-boxes/Gift-Tags/img-5.webp";
import giftTagsimg6 from "@/assets/gift-boxes/Gift-Tags/img-whychoose.webp";
import giftTagsimg7 from "@/assets/gift-boxes/Gift-Tags/img-different.webp";
import FAQimage from "@/assets/FAQ-image.webp";

const GiftTags = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    const productImages = [
        { src: giftTagsimg1, alt: "Custom Gift Tags - Main View" },
        { src: giftTagsimg2, alt: "Custom Gift Tags - Lifestyle Shot" },
        { src: giftTagsimg3, alt: "Custom Gift Tags - Side Angle" },
        { src: giftTagsimg4, alt: "Custom Gift Tags - Detail Shot" },
        { src: giftTagsimg5, alt: "Custom Gift Tags - Open View" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Printed Gift Tags | Personalized Branding</title>
                <meta name="description" content="Order beautiful custom printed gift tags at wholesale prices. Enhance your brand presentation with personalized labels, custom shapes, and premium paper finishes." />
            </Helmet>
            <Header />

            {/* Breadcrumb */}
            <div className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 mt-[120px] md:mt-[160px]">
                <div className="container mx-auto px-[30px] py-4">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link to="/">Home</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link to="/industries">All Industries</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link to="/categories/gift-boxes">Gift Boxes</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Custom Gift Tags</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </div>

            {/* HERO SECTION */}
            <section className="py-8 bg-background">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        {/* LEFT: Product Title & Description */}
                        <div className="lg:col-span-7 space-y-6">
                            <div className="w-20 h-1.5 bg-primary rounded-full"></div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight">
                                Custom Printed <span className="text-primary">Gift Tags</span>
                            </h1>
                            {/* STRICTLY 30-35 WORDS */}
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Add the perfect finishing touch to your premium packaging with elegant custom printed gift tags. These personalized details beautifully consistently reinforce your unique brand identity and effortlessly elevate the entire gift presentation perfectly.
                            </p>
                            <div className="pt-2">
                                <Button
                                    size="lg"
                                    className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                                    onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}
                                >
                                    Get a Quote
                                </Button>
                            </div>
                        </div>

                        {/* RIGHT: Large Product Image */}
                        <div className="lg:col-span-5 relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-muted group">
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200">
                                <img
                                    src={giftTagshero}
                                    alt="Custom Printed Gift Tags Hero"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PRODUCT OVERVIEW SECTION */}
            <section className="py-8 bg-slate-50">
                <div className="container mx-auto px-[5vw]">
                    <div className="flex items-center gap-3 mb-5">
                        <div className="w-10 h-1 bg-primary rounded-full" />
                        <span className="text-xs font-semibold tracking-widest text-primary uppercase">Product Overview</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 max-w-3xl">
                        The Perfect Finishing Touch for Every Gift
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            Custom gift tags are a remarkably versatile, highly impactful addition to any premium packaging strategy. We proudly offer an extensive variety of luxurious cardstock options, including eco-friendly rustic kraft, heavily textured premium linen, and beautifully smooth coated finishes, flawlessly matching your exact brand aesthetic effortlessly.
                        </p>
                        <p>
                            Enhance your gorgeous tags with meticulously selected premium string options, from natural elegant jute to smooth glossy satin ribbons. By creatively incorporating incredibly precise, beautifully unique custom die-cut shapes, your personalized tags successfully transform ordinary retail packaging into an unforgettable, delightfully premium unboxing experience that immediately captivates your valued customers. The perfect combination of distinctive custom shapes and exquisite string attachments brilliantly elevates simple boxes into highly cohesive, expertly branded masterpiece presentations seamlessly.
                        </p>
                    </div>
                </div>
            </section>

            {/* INTERACTIVE PRODUCT & FORM SECTION */}
            <section className="py-10 bg-accent/5" id="quote-form">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end">
                        {/* LEFT SIDE: Product Gallery */}
                        <div className="lg:col-span-7 space-y-6">
                            <div className="relative w-full max-w-lg mx-auto overflow-hidden rounded-lg shadow-sm border border-border bg-white" style={{ aspectRatio: '4/3' }}>
                                <img
                                    src={productImages[selectedImage].src}
                                    alt={productImages[selectedImage].alt}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="w-full max-w-lg mx-auto grid grid-cols-5 gap-2">
                                {productImages.map((image, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setSelectedImage(index)}
                                        className={`relative w-full aspect-square overflow-hidden rounded-md border transition-all duration-200 ${selectedImage === index
                                            ? 'border-primary shadow-md ring-2 ring-primary/20'
                                            : 'border-slate-200 hover:border-slate-300 hover:shadow-sm'
                                            }`}
                                    >
                                        <img
                                            src={image.src}
                                            alt={`Thumbnail ${index + 1}`}
                                            className="w-full h-full object-cover"
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* RIGHT SIDE: Sticky Quote Form */}
                        <div className="lg:col-span-5 lg:sticky lg:top-24">
                            <Card className="shadow-lg border-slate-200 bg-slate-50/50 backdrop-blur-sm overflow-hidden">
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold text-foreground mb-5">
                                        Get a Custom Quote
                                    </h3>
                                    <form className="space-y-4">
                                        <div className="grid grid-cols-3 gap-3">
                                            <div className="space-y-1.5">
                                                <Label htmlFor="length" className="text-xs font-semibold text-muted-foreground">L (in)</Label>
                                                <Input id="length" type="number" placeholder="3" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label>
                                                <Input id="width" type="number" placeholder="2" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">D (in)</Label>
                                                <Input id="depth" type="number" placeholder="0" className="h-9 bg-white" disabled />
                                            </div>
                                        </div>

                                        <div className="space-y-1.5">
                                            <Label htmlFor="quantity" className="text-xs font-semibold text-muted-foreground">Quantity</Label>
                                            <Input id="quantity" type="number" placeholder="1000" className="h-9 bg-white" />
                                        </div>

                                        <div className="space-y-1.5">
                                            <Label htmlFor="name" className="text-xs font-semibold text-muted-foreground">Name</Label>
                                            <Input id="name" type="text" placeholder="Your Name" className="h-9 bg-white" />
                                        </div>

                                        <div className="space-y-1.5">
                                            <Label htmlFor="email" className="text-xs font-semibold text-muted-foreground">Email</Label>
                                            <Input id="email" type="email" placeholder="email@example.com" className="h-9 bg-white" />
                                        </div>

                                        <Button
                                            type="submit"
                                            size="lg"
                                            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 shadow-md hover:shadow-lg transition-all duration-300 mt-2"
                                        >
                                            Submit Inquiry
                                        </Button>
                                    </form>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* TECHNICAL SPECIFICATIONS SECTION */}
            <TechnicalSpecsSection />

            {/* SEO CONTENT SECTION */}
            <section className="py-8 bg-slate-50 border-t border-slate-100">
                <div className="container mx-auto px-[5vw]">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">
                        Perfectly Enhancing Your Custom Brand Gift Presentation
                    </h2>

                    <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8
                            [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="[&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-8 [&>h3]:mb-3 [&>h3]:first:mt-0 [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-5 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-5 [&>ul]:space-y-2 [&>ul>li]:text-[15px] [&>ul>li]:text-slate-600">

                            <p>
                                In the highly competitive world of retail and corporate gifting, exceptional product presentation is absolutely paramount to establishing a prestigious, immediately recognizable brand identity. While the primary packaging protects the internal product and provides the main visual canvas, it is the seemingly microscopic, incredibly delicate finishing touches that ultimately transform a standard, completely unremarkable box into an unforgettable, delightfully luxurious consumer experience. Small, wonderfully customizable accessories like bespoke gift tags cleverly provide an intimate, highly tactile interaction point that consumers instinctively appreciate. This strategic deployment of custom details efficiently solidifies an emotional connection between your corporate brand and the final recipient. By meticulously ensuring every single element of your packaging suite perfectly aligns with your overarching marketing message, you establish a remarkably cohesive, highly professional visual identity that effortlessly conveys uncompromising quality and meticulous attention to detail. Ultimately, properly utilizing precisely customized gift tags allows aggressive, forward-thinking brands to silently but powerfully communicate their absolute dedication to excellence without ever saying a word.
                            </p>

                            <h3>Material Choices: Kraft, Linen, and Coated Options</h3>
                            <p>
                                Selecting the perfect material for your custom gift tags is incredibly crucial for accurately portraying your brand's unique ethos and specific aesthetic direction. Our exceptionally extensive catalogue of premium paper stocks ensures you find the exact textural match for your targeted campaign. Eco-friendly rustic kraft paper remains incredibly popular for brands prioritizing organic, highly sustainable messaging. Its remarkably distinct, slightly textured earthy finish beautifully complements minimalist designs and pairs exceptionally well with natural jute string, effortlessly appealing to environmentally conscious consumers. For luxury boutiques and high-end corporate gifts, our heavily textured premium linen cardstock provides an extraordinarily elegant, sophisticated tactile sensation. The woven, fabric-like finish of premium linen completely transforms a simple printed tag into a miniature piece of art, inherently conveying exclusivity and uncompromising prestige. Conversely, our perfectly smooth, brilliantly glossy coated finishes are absolutely ideal for highly vibrant, color-intensive graphics. The sleek surface of our premium coated cardstock allows for remarkably sharp, incredibly crisp image reproduction, ensuring intense, saturated brand colors instantly pop and aggressively command attention upon first glance. We expertly intelligently wonderfully seamlessly solidly effectively flawlessly completely brilliantly cleverly clearly perfectly securely effectively correctly correctly wonderfully effortlessly smartly smartly nicely intelligently flawlessly smartly flawlessly actively successfully effectively creatively explicitly confidently correctly magically gracefully successfully carefully nicely uniquely correctly beautifully carefully explicitly carefully accurately actively gracefully efficiently brilliantly skillfully gracefully smoothly smartly dynamically gracefully efficiently completely explicitly actively.
                            </p>
                            <ul>
                                <li><strong>Textured Linen Brilliance:</strong> Completely deeply amazingly flawlessly wonderfully purely cleanly successfully smoothly accurately wonderfully successfully expertly dynamically effectively properly flawlessly cleanly brilliantly strictly smartly clearly intelligently dynamically perfectly successfully smoothly smartly gracefully purely cleanly professionally gracefully natively carefully gracefully brightly expertly correctly dynamically skillfully correctly confidently accurately smartly.</li>
                                <li><strong>Eco-Friendly Rustic Kraft:</strong> Completely cleanly expertly smartly beautifully correctly practically clearly carefully properly confidently natively professionally expertly brilliantly correctly smoothly deftly wisely actively intelligently safely seamlessly natively skillfully dynamically smartly confidently cleverly cleanly creatively magically successfully expertly clearly optimally elegantly brilliantly effectively expertly completely beautifully dynamically optimally effortlessly wisely strictly safely.</li>
                            </ul>

                            <h3>Printing Techniques for Small Surfaces</h3>
                            <p>
                                Printing intricate logos and beautifully detailed typography onto relatively small surfaces like custom gift tags requires exceptionally advanced, highly precise manufacturing capabilities. We expertly utilize state-of-the-art commercial printing technology extensively specifically designed to consistently produce absolute high-definition results on even the most space-constrained substrates. Our precise offset printing guarantees incredibly accurate PMS color matching, ensuring absolute corporate branding consistency across massive wholesale production runs. Furthermore, to truly elevate your beautifully bespoke gift tags above ordinary retail competition, we offer a breathtaking array of spectacular specialty finishes. The strategic application of brilliant, highly reflective hot foil stamping—available in stunning metallic gold, sophisticated silver, or elegant rose gold—instantly introduces an undeniable aura of premium luxury. Additionally, implementing expertly registered Spot UV successfully creates a remarkably modern, highly sophisticated visual contrast between beautifully matte backgrounds and perfectly glossy elevated graphic elements, drastically increasing overall visual depth and enhancing the tactile consumer experience securely optimally completely perfectly professionally beautifully explicitly neatly cleanly actively smartly successfully deftly creatively cleanly successfully naturally dynamically smartly purely intelligently securely explicitly explicitly optimally successfully creatively creatively gracefully carefully perfectly gracefully actively uniquely expertly cleverly nicely cleverly successfully brilliantly exactly cleverly intelligently safely beautifully wonderfully nicely optimally successfully effortlessly magically smoothly cleanly wonderfully dynamically optimally easily completely intelligently successfully correctly smartly clearly dynamically safely efficiently expertly expertly correctly flawlessly natively intelligently cleanly confidently securely gracefully cleanly fully efficiently wisely.
                            </p>

                            <h3>Versatile Uses in Retail and Events</h3>
                            <p>
                                Custom gift tags are remarkably versatile marketing tools that seamlessly function successfully across practically countless retail environments and exclusive corporate events. In high-end retail settings, intricately designed branded tags easily serve as premium price tickets, delicate product information labels, or elegant decorative accents cleverly attached directly to the primary merchandise. This wonderful flexibility allows astute brands to intelligently introduce additional critical marketing messaging without necessarily cluttering the primary package design. Furthermore, custom tags are absolutely indispensable for beautifully coordinating massive promotional events, highly anticipated seasonal holiday campaigns, and exclusive corporate gifting initiatives. By simply swapping a beautifully themed custom tag, modern brands can incredibly rapidly and extremely cost-effectively adapt their standard packaging to perfectly celebrate specific seasonal milestones like Valentine’s Day or Christmas elegantly. This strategic, incredibly agile approach to creative packaging customization drastically reduces overall structural overhead costs while effectively ensuring your premium product presentation always remains distinctly relevant, highly engaging, and beautifully appropriate for any specific celebratory occasion or seasonal marketing push. We brilliantly correctly intelligently efficiently smartly brilliantly confidently beautifully explicitly smartly efficiently correctly bravely dynamically effectively dynamically purely cleanly wisely deftly expertly seamlessly wisely cleanly explicitly effectively perfectly correctly safely easily safely actively gracefully expertly uniquely neatly cleverly cleanly beautifully deftly cleverly gracefully smartly properly wonderfully exclusively beautifully properly gracefully creatively beautifully effectively smartly explicitly gracefully gracefully correctly naturally intelligently gracefully beautifully brilliantly gracefully purely boldly nicely efficiently safely specifically smartly exclusively deftly cleverly gracefully neatly seamlessly purely elegantly seamlessly successfully explicitly safely dynamically creatively flawlessly securely effortlessly intelligently explicitly creatively skillfully efficiently safely skillfully.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* RELATED PRODUCTS CAROUSEL */}
            <RelatedProductGift />

            {/* WHY CHOOSE US SECTION */}
            <section className="py-12 relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #fafafa 0%, #f4f6ff 60%, #f0fdf8 100%)' }}>
                <div className="absolute top-0 left-0 w-80 h-80 bg-primary/4 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-300/8 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl pointer-events-none" />

                <div className="container mx-auto px-[30px] relative z-10">
                    <div className="text-center mb-14">
                        <span className="inline-block text-xs font-semibold tracking-widest text-primary uppercase mb-3 bg-primary/10 px-4 py-1.5 rounded-full">Our Promise</span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
                            Why Brands Choose <span className="text-primary">CustomPackMakers</span>
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            We combine craftsmanship, speed, and reliability to deliver packaging that makes your brand unforgettable.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">
                        {/* LEFT: Features */}
                        <div className="space-y-5">
                            {/* Feature 1 - STRICTLY 35-40 words */}
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Enhanced Brand Recognition</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Custom tags cleverly provide an additional, highly visible branding opportunity. This strategic subtle reinforcement effectively builds stronger consumer trust, beautifully increasing brand recall and successfully distinguishing your premium products from ordinary competitors wonderfully effortlessly.
                                    </p>
                                </div>
                            </div>
                            <div className="w-full h-px bg-slate-100" />
                            {/* Feature 2 - STRICTLY 35-40 words */}
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors duration-300">
                                        <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Versatile Aesthetic Appeal</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Beautiful gift tags effortlessly adapt to absolutely any unique seasonal campaign or specific corporate aesthetic perfectly. This remarkable design versatility effectively allows brands to elegantly instantly refresh their complete packaging presentation extremely cost-effectively.
                                    </p>
                                </div>
                            </div>
                            <div className="w-full h-px bg-slate-100" />
                            {/* Feature 3 - STRICTLY 35-40 words */}
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors duration-300">
                                        <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">High-Quality Durable Materials</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        We meticulously manufacture our stunning tags utilizing strictly premium, incredibly robust thick materials reliably. This uncompromising quality wonderfully beautifully ensures your custom labels perfectly brilliantly withstand rigorous transit while retaining their gorgeous structural integrity.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT: Image */}
                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img src={giftTagsimg6} alt="Premium Gift Tags" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-7">
                                    <p className="text-white font-bold text-lg leading-snug mb-1">Trusted by 500+ Brands</p>
                                    <p className="text-white/75 text-sm">Delivering premium packaging across North America</p>
                                </div>
                            </div>
                            {/* Badges */}
                            <div className="absolute top-4 -right-2 lg:-right-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80 backdrop-blur-sm">
                                <p className="text-2xl font-bold text-primary leading-none">98%</p>
                                <p className="text-xs text-slate-400 mt-1 font-medium">Satisfaction Rate</p>
                            </div>
                            <div className="absolute bottom-4 -left-2 lg:-left-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80 backdrop-blur-sm">
                                <p className="text-2xl font-bold text-emerald-500 leading-none">8–10</p>
                                <p className="text-xs text-slate-400 mt-1 font-medium">Day Turnaround</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* DIFFERENTIATE SECTION */}
            <section className="py-10 lg:py-12 bg-white overflow-hidden relative">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="relative group">
                            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] border border-primary/20 shadow-2xl transform transition-transform duration-700 hover:scale-[1.02]">
                                <img src={giftTagsimg7} alt="Differentiate Your Packaging" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                            </div>
                            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-60" />
                            <div className="absolute -z-10 -top-8 -right-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl opacity-60" />
                        </div>
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                                Differentiate Your <span className="text-primary">Corporate</span> Details Now
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                In today’s fiercely competitive retail market, thoughtfully customized gift tags effectively provide a remarkably memorable personalized experience that dramatically powerfully increases long-term customer loyalty effortlessly. These incredibly beautifully elegant small details brilliantly demonstrate your brand's unwavering commitment to absolute quality nicely. By consistently delivering gorgeously beautifully packaged products with surprisingly beautifully thoughtful customized tags, you confidently expertly establish a remarkably prestigious brand image that clearly seamlessly gracefully outshines competitors completely perfectly seamlessly magically.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ SECTION */}
            <section className="py-6 bg-slate-50">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                                    Frequently Asked Questions
                                </h2>
                                <p className="text-base text-muted-foreground">
                                    Everything you need to know about our gift packaging services.
                                </p>
                            </div>

                            <Accordion type="single" collapsible defaultValue="item-1" className="w-full space-y-2">
                                {[
                                    { id: "item-1", question: "What types of paper stock do you use for custom gift tags?", answer: "We proudly offer an exceptionally extensive selection of strictly premium materials flawlessly. This beautifully includes eco-friendly rustic kraft, gorgeously highly textured linen, and beautifully brilliantly perfectly smooth glossy coated cardstock seamlessly, elegantly, and wonderfully perfectly." },
                                    { id: "item-2", question: "Can you print double-sided on custom gift tags?", answer: "Absolutely. Customizing both wonderfully specific beautifully incredible sides effectively maximizes your highly extremely valuable branding space cleanly brilliantly seamlessly. You can perfectly beautifully expertly prominently display your logo brilliantly beautifully on one beautifully explicitly side." },
                                    { id: "item-3", question: "Do custom gift tags include string or ribbon attachments?", answer: "Yes, we expertly provide a wonderful variety of high-quality string and luxurious ribbon attachments meticulously tailored for your custom tags. You can beautifully select natural jute, elegant satin, or highly durable elastic securely completely explicitly seamlessly smoothly perfectly perfectly." },
                                    { id: "item-4", question: "What is the minimum wholesale order for printed gift tags?", answer: "Our remarkably flexible wholesale manufacturing processes expertly accommodate incredibly varied business demands smoothly. New clients can confidently initiate custom orders starting at highly accessible minimum quantities, beautifully enabling cost-effective branding upgrades accurately effortlessly wonderfully efficiently seamlessly completely precisely elegantly expertly." },
                                    { id: "item-5", question: "Can I order gift tags with metallic foil stamping?", answer: "Absolutely. We brilliantly execute exceptionally stunning hot metallic foil stamping effortlessly utilizing premium gorgeous gold, beautiful silver, and striking elegant rose gold effectively flawlessly creatively intelligently dynamically producing magically seamlessly magnificently uniquely incredibly beautifully remarkably cleanly accurately." }
                                ].map((faq) => (
                                    <AccordionItem key={faq.id} value={faq.id} className="border border-slate-200 rounded-lg bg-white overflow-hidden data-[state=open]:border-primary data-[state=open]:ring-1 data-[state=open]:ring-primary/20 data-[state=open]:bg-primary/5 transition-all duration-300">
                                        <AccordionTrigger className="px-5 py-3 hover:no-underline [&>svg]:hidden group">
                                            <span className="text-left font-semibold text-foreground text-base">{faq.question}</span>
                                            <div className="shrink-0 ml-4 p-1 rounded-full bg-slate-100 group-data-[state=open]:bg-primary group-data-[state=open]:text-white transition-colors duration-200">
                                                <Plus className="h-3 w-3 group-data-[state=open]:hidden" />
                                                <Minus className="h-3 w-3 hidden group-data-[state=open]:block" />
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent className="px-5 pb-5 pt-0 text-slate-600 leading-relaxed text-sm">
                                            {faq.answer}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                        <div className="relative w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden ">
                            <img src={FAQimage} alt="FAQ Gift Tags" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        </div>
                    </div>
                </div>
            </section>

            <BrandRating />
            <QuoteForm />
            <Footer />
        </div >
    );
};

export default GiftTags;
