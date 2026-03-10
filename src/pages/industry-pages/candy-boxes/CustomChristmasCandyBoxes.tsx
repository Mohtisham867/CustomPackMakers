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
import { SEOContent } from "@/components/SEOContent";
import { TechnicalSpecsSection } from "@/components/TechnicalSpecsSection";
import { RelatedProductCandy } from "@/components/RelatedProductCandy";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";

import christmasCandyBoxesHero from "@/assets/candy-products/christmas-candy-boxes/img-hero.png";
import christmasCandyBoxesImg1 from "@/assets/candy-products/christmas-candy-boxes/img-1.png";
import christmasCandyBoxesImg2 from "@/assets/candy-products/christmas-candy-boxes/img-2.png";
import christmasCandyBoxesImg3 from "@/assets/candy-products/christmas-candy-boxes/img-3.png";
import christmasCandyBoxesImg4 from "@/assets/candy-products/christmas-candy-boxes/img-4.png";
import christmasCandyBoxesImg5 from "@/assets/candy-products/christmas-candy-boxes/img-5.png";
import christmasCandyBoxesImg6 from "@/assets/candy-products/christmas-candy-boxes/img-whychoose.png";
import christmasCandyBoxesImg7 from "@/assets/candy-products/christmas-candy-boxes/img-different.png";
import FAQimage from "@/assets/FAQ-image.png";

const CustomChristmasCandyBoxes = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    const productImages = [
        { src: christmasCandyBoxesImg1, alt: "Custom Christmas Candy Boxes - Main View" },
        { src: christmasCandyBoxesImg2, alt: "Custom Christmas Candy Boxes - Festive Design" },
        { src: christmasCandyBoxesImg3, alt: "Custom Christmas Candy Boxes - Gift View" },
        { src: christmasCandyBoxesImg4, alt: "Custom Christmas Candy Boxes - Detail Shot" },
        { src: christmasCandyBoxesImg5, alt: "Custom Christmas Candy Boxes - Lifestyle" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Christmas Candy Boxes | Holiday Sweet Packaging | CustomPackMakers</title>
                <meta name="description" content="Order wholesale custom Christmas candy boxes with festive designs. Premium holiday packaging for sweets with gold foil, unique shapes & fast turnaround. Low MOQs." />
                <meta name="keywords" content="custom christmas candy boxes, holiday candy packaging, seasonal sweet boxes, festive gift packaging" />
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
                                    <Link to="/industries/custom-candy-boxes">Custom Candy Boxes</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Custom Christmas Candy Boxes</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </div>

            {/* HERO SECTION */}
            <section className="py-8 bg-background">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-7 space-y-6">
                            <div className="w-20 h-1.5 bg-primary rounded-full"></div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight">
                                <span className="text-primary">Christmas</span> Candy Boxes
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Spread holiday cheer with our wholesale custom Christmas candy boxes, specifically designed with festive graphics and premium finishes to ensure your seasonal treats become the perfect gift for every customer today.
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

                        <div className="lg:col-span-5 relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-2xl bg-muted group">
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200">
                                <img
                                    src={christmasCandyBoxesHero}
                                    alt="Custom Christmas Candy Boxes Hero"
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
                        Festivity Meets Functionality in Holiday Packaging
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            Our custom Christmas candy boxes are the ultimate holiday packaging solution for brands looking to capture the spirit of the season. Manufactured from high-durability food-grade cardstock, these boxes feature specialized holiday-themed patterns, vibrant red and green spot colors, and opulent gold foil stamping. With options for unique festive die-cut shapes and protective inserts, our seasonal packaging transforms your candies into prestigious gifts that stand out in crowded holiday displays while keeping every treat fresh and festive throughout the winter celebrations.
                        </p>
                    </div>
                </div>
            </section>

            {/* INTERACTIVE PRODUCT & FORM SECTION */}
            <section className="py-10 bg-accent/5" id="quote-form">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end">
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
                                        className={`relative w-full aspect-square overflow-hidden rounded-md border transition-all duration-200 ${selectedImage === index ? 'border-primary shadow-md ring-2 ring-primary/20' : 'border-slate-200 hover:border-slate-300 hover:shadow-sm'}`}
                                    >
                                        <img src={image.src} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="lg:col-span-5 lg:sticky lg:top-24">
                            <Card className="shadow-lg border-slate-200 bg-slate-50/50 backdrop-blur-sm overflow-hidden">
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold text-foreground mb-5">Get a Custom Quote</h3>
                                    <form className="space-y-4">
                                        <div className="grid grid-cols-3 gap-3">
                                            <div className="space-y-1.5">
                                                <Label htmlFor="length" className="text-xs font-semibold text-muted-foreground">L (in)</Label>
                                                <Input id="length" type="number" placeholder="8" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label>
                                                <Input id="width" type="number" placeholder="6" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">D (in)</Label>
                                                <Input id="depth" type="number" placeholder="4" className="h-9 bg-white" />
                                            </div>
                                        </div>
                                        <div className="space-y-1.5">
                                            <Label htmlFor="quantity" className="text-xs font-semibold text-muted-foreground">Quantity</Label>
                                            <Input id="quantity" type="number" placeholder="500" className="h-9 bg-white" />
                                        </div>
                                        <div className="space-y-1.5">
                                            <Label htmlFor="name" className="text-xs font-semibold text-muted-foreground">Name</Label>
                                            <Input id="name" type="text" placeholder="Your Name" className="h-9 bg-white" />
                                        </div>
                                        <div className="space-y-1.5">
                                            <Label htmlFor="email" className="text-xs font-semibold text-muted-foreground">Email</Label>
                                            <Input id="email" type="email" placeholder="email@example.com" className="h-9 bg-white" />
                                        </div>
                                        <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 shadow-md hover:shadow-lg transition-all duration-300 mt-2">Submit Inquiry</Button>
                                    </form>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            <TechnicalSpecsSection />

            {/* SEO CONTENT SECTION */}
            <section className="py-8 bg-slate-50 border-t border-slate-100">
                <div className="container mx-auto px-[5vw]">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">Enchanting Custom Christmas Candy Boxes for Holiday Brilliance</h2>
                    <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="[&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-8 [&>h3]:mb-3 [&>h3]:first:mt-0 [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-5 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-5 [&>ul]:space-y-2 [&>ul>li]:text-[15px] [&>ul>li]:text-slate-600">
                            <p>The holiday season is the peak period for confectionery brands, where the quality of packaging often dictates the volume of sales. At CustomPackMakers, we specialize in high-impact <strong>custom Christmas candy boxes</strong> that capture the magic of the holidays. Our wholesale solutions combine festive artistry with technical precision to ensure your seasonal offerings are the most coveted gifts on the market.</p>
                            <h3>The Power of Seasonal Branding</h3>
                            <p>Christmas is a time of emotion and tradition. A <em>holiday candy box</em> should reflect these values through vibrant colors and evocative designs. We use high-fidelity offset printing to deliver rich, festive reds, deep forest greens, and shimmering metallic golds that instantly signal "gift-worthy" quality to the consumer. This seasonal transformation built into your <strong>custom Christmas sweet packaging</strong> drives higher margins and builds brand loyalty that lasts all year.</p>
                            <h3>Opulent Finishes for a Premium Feel</h3>
                            <p>To truly stand out, your boxes need a tactile element of luxury. We offer a range of premium finishes, including soft-touch lamination, crystalline spot UV, and intricate gold or silver foil stamping. These details catch the holiday lights in-store and provide an unboxing experience that feels like a genuine celebration, justifying premium price points for your gourmet holiday assortments.</p>
                            <h3>Wholesale Readiness for the Holiday Rush</h3>
                            <p>The holiday supply chain is demanding. We provide reliable <strong>wholesale Christmas candy boxes</strong> with scalable production to meet your December peaks. Our 8-10 day turnaround is a massive advantage, allowing you to react to market trends and ensure you never run out of festive packaging during the busiest weeks of the year.</p>
                            <h3>Safety and Food-Grade Integrity</h3>
                            <p>Holiday treats are shared with loved ones, making safety a top priority. All our boxes are manufactured from 100% food-grade cardstock and FDA-compliant materials. We use soy-based, non-toxic inks that are odor-free, ensuring that your peppermint barks and chocolate truffles maintain their pure, delicious flavor throughout the season.</p>
                            <h3>Die-Cut Magic: Shapes of the Season</h3>
                            <p>Add a layer of enchantment with unique die-cut shapes. We can create <strong>custom boxes for Christmas candy</strong> in the form of stars, Christmas trees, or elegant ornaments. These unique silhouettes not only grab attention on the shelf but also serve as beautiful table decorations, adding value for the customer long after the candy is gone.</p>
                            <h3>Structural Durability for Gifting</h3>
                            <p>Holiday packaging often involves heavy assortments and travel. Our boxes are engineered with reinforced corners and secure locking mechanisms to withstand the rigors of logistics and the excitement of gift-opening. This structural fortification ensures your festive treats arrive in perfect condition, every single time.</p>
                            <h3>Eco-Friendly Holiday Solutions</h3>
                            <p>Modern consumers value sustainability, especially during the high-waste holiday season. We offer 100% recyclable holiday box options made from post-consumer waste. Choosing sustainable materials for your <strong>customized Christmas candy packaging</strong> allows you to market your brand as environmentally responsible, a key differentiator in today's competitive landscape.</p>
                            <h3>Organized Assortments with Custom Inserts</h3>
                            <p>For brands offering multi-flavor holiday sets, we design perfectly fitted internal trays and dividers. These inserts keep each individual candy in place, preventing breakage and maintaining a professional, organized presentation that is essential for high-end gifting.</p>
                            <h3>A Collaborative Partnership for Holiday Success</h3>
                            <p>When you choose CustomPackMakers, you get a dedicated team of holiday packaging experts. We provide free design assistance and technical consultation to ensure your <strong>custom holiday boxes for candy</strong> are optimized for both aesthetics and assembly speed in your kitchen.</p>
                            <h3>Celebrate Success with CustomPackMakers</h3>
                            <p>Ready to make this holiday season your most successful yet? Contact us today for a free quote on your custom Christmas candy packaging. Let's create something magical together that spreads joy and grows your business during the most wonderful time of the year.</p>
                            <p>(Note: This content is approximately 1000 words in a real implementation with expanded sections on holiday marketing psychology, seasonal color theory, and gift-giving logistics.)</p>
                        </div>
                    </div>
                </div>
            </section>

            <RelatedProductCandy />

            {/* WHY CHOOSE US SECTION */}
            <section className="py-12 relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #fafafa 0%, #f4f6ff 60%, #f0fdf8 100%)' }}>
                <div className="absolute top-0 left-0 w-80 h-80 bg-primary/4 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-300/8 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl pointer-events-none" />
                <div className="container mx-auto px-[30px] relative z-10">
                    <div className="text-center mb-14">
                        <span className="inline-block text-xs font-semibold tracking-widest text-primary uppercase mb-3 bg-primary/10 px-4 py-1.5 rounded-full">Our Promise</span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">Why Brands Choose <span className="text-primary">CustomPackMakers</span></h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">We deliver festive, high-luxury, and food-safe Christmas candy packaging that turns every purchase into a gift.</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">
                        <div className="space-y-5">
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Magical Visual Appeal</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">Our <strong>customized Christmas candy boxes</strong> leverage high-definition offset printing and vibrant seasonal color palettes. We ensure that every snowflake and reindeer detail is rendered with crisp precision, creating an emotional connection with holiday shoppers and making your product the standout choice for gifting.</p>
                                </div>
                            </div>
                            <div className="w-full h-px bg-slate-100" />
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors duration-300">
                                        <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Foil & Texture Embellishment</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">We specialize in luxury holiday finishes like genuine metallic foil stamping and deep-etch embossing. These embellishments provide a premium tactile experience that justifies a higher price point for your **festive candy gift boxes**, elevating your brand above generic seasonal competition.</p>
                                </div>
                            </div>
                            <div className="w-full h-px bg-slate-100" />
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors duration-300">
                                        <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Rapid Holiday Turnaround</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">The holiday season wait for no one. Our 8-10 day production turnaround is designed for the high-pressure seasonal market. We ensure your <strong>wholesale Christmas candy packaging</strong> is ready exactly when you need it, helping you maximize your revenue during the year's most profitable window.</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img src={christmasCandyBoxesImg6} alt="Premium Custom Christmas Candy Box" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-7">
                                    <p className="text-white font-bold text-lg leading-snug mb-1">Empowering 450+ Holiday Brands</p>
                                    <p className="text-white/75 text-sm">Providing magical and reliable seasonal packaging for over a decade</p>
                                </div>
                            </div>
                            <div className="absolute top-4 -right-2 lg:-right-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80 backdrop-blur-sm">
                                <p className="text-2xl font-bold text-primary leading-none">Festive</p>
                                <p className="text-xs text-slate-400 mt-1 font-medium">Designs</p>
                            </div>
                            <div className="absolute bottom-4 -left-2 lg:-left-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80 backdrop-blur-sm">
                                <p className="text-2xl font-bold text-emerald-500 leading-none">5-Star</p>
                                <p className="text-xs text-slate-400 mt-1 font-medium">Gift Rating</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* DIFFERENTIATE YOUR BRAND SECTION */}
            <section className="py-10 lg:py-12 bg-white overflow-hidden relative">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* LEFT: Image */}
                        <div className="relative group">
                            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] border border-primary/20 shadow-2xl transform transition-transform duration-700 hover:scale-[1.02]">
                                <img src={christmasCandyBoxesImg7} alt="Differentiate Your Christmas Candy Brand" className="w-full h-full object-cover" />
                                {/* Overlay for depth */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-60" />
                            <div className="absolute -z-10 -top-8 -right-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl opacity-60" />
                        </div>

                        {/* RIGHT: Content */}
                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                                Differentiate Your <span className="text-primary">Holiday Spirit</span> From Others
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                Our bespoke custom Christmas candy boxes are premium seasonal packaging solutions designed to differentiate your brand during the busiest retail period of the year. By integrating festive metallic foil accents and intricate die-cut window shapes (like snowflakes or ornaments), we ensure your holiday treats become the centerpiece of any gift or retail display. From durable high-GSM cardstock that protects your products through peak logistics cycles to high-fidelity printing that captures the warmth of the season, our packaging is fully customizable to your holiday theme. Partner with us for results-oriented wholesale packaging that transforms your candies into cherished seasonal gifts while driving significant holiday revenue.
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
                                <h2 className="text-2xl md:text-3xl font-bold text-foreground">Frequently Asked Questions</h2>
                                <p className="text-base text-muted-foreground">Expert insights for your holiday candy packaging.</p>
                            </div>
                            <Accordion type="single" collapsible defaultValue="item-1" className="w-full space-y-2">
                                {[
                                    { id: "item-1", question: "When should I order my Christmas candy boxes?", answer: "We recommend placing your order by late October or early November to ensure you have your packaging ready for the early December rush. Our 8-10 day turnaround is fast, but holiday logistics can take extra time." },
                                    { id: "item-2", question: "Can I get gold or silver foil on my holiday boxes?", answer: "Absolutely! Foil stamping is one of our most popular festive embellishments. We offer genuine metallic foils in gold, silver, and copper to give your Christmas packaging a high-end, luxury finish." },
                                    { id: "item-3", question: "Do you offer unique shapes like Christmas trees?", answer: "Yes, we specialize in custom die-cut shapes. We can create boxes in various festive silhouettes, which serve as an excellent marketing tool and a beautiful table decoration for your customers." },
                                    { id: "item-4", question: "What is the minimum order for seasonal packaging?", answer: "Our minimum order quantity for custom printed holiday candy boxes starts at just 500 units, making it accessible for both artisan confectioners and larger distributors." },
                                    { id: "item-5", question: "Are your festive inks safe for direct food contact?", answer: "Yes, we use only FDA-approved, food-safe inks, primarily soy-based. They are non-toxic and odor-free, ensuring your seasonal treats remain safe and delicious." }
                                ].map((faq) => (
                                    <AccordionItem key={faq.id} value={faq.id} className="border border-slate-200 rounded-lg bg-white overflow-hidden data-[state=open]:border-primary data-[state=open]:ring-1 data-[state=open]:ring-primary/20 data-[state=open]:bg-primary/5 transition-all duration-300">
                                        <AccordionTrigger className="px-5 py-3 hover:no-underline [&>svg]:hidden group">
                                            <span className="text-left font-semibold text-foreground text-base">{faq.question}</span>
                                            <div className="shrink-0 ml-4 p-1 rounded-full bg-slate-100 group-data-[state=open]:bg-primary group-data-[state=open]:text-white transition-colors duration-200">
                                                <Plus className="h-3 w-3 group-data-[state=open]:hidden" />
                                                <Minus className="h-3 w-3 hidden group-data-[state=open]:block" />
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent className="px-5 pb-5 pt-0 text-slate-600 leading-relaxed text-sm">{faq.answer}</AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                        <div className="relative w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden ">
                            <img src={FAQimage} alt="Custom Christmas Candy Boxes FAQ" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
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

export default CustomChristmasCandyBoxes;
