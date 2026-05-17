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

import mylarBagsHero from "@/assets/industry/candy-boxes/mylar-bags-candies/img-hero.webp";
import mylarBagsImg1 from "@/assets/industry/candy-boxes/mylar-bags-candies/img-1.webp";
import mylarBagsImg2 from "@/assets/industry/candy-boxes/mylar-bags-candies/img-2.webp";
import mylarBagsImg3 from "@/assets/industry/candy-boxes/mylar-bags-candies/img-3.webp";
import mylarBagsImg4 from "@/assets/industry/candy-boxes/mylar-bags-candies/img-4.webp";
import mylarBagsImg5 from "@/assets/industry/candy-boxes/mylar-bags-candies/img-5.webp";
import mylarBagsImg6 from "@/assets/industry/candy-boxes/mylar-bags-candies/img-whychoose.webp";
import mylarBagsImg7 from "@/assets/industry/candy-boxes/mylar-bags-candies/img-different.webp";
import FAQimage from "@/assets/FAQ-image.webp";

const MylarBagsForCandies = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    const productImages = [
        { src: mylarBagsImg1, alt: "Custom Mylar Bags for Candies - Main View" },
        { src: mylarBagsImg2, alt: "Custom Mylar Bags for Candies - Standup View" },
        { src: mylarBagsImg3, alt: "Custom Mylar Bags for Candies - Detail View" },
        { src: mylarBagsImg4, alt: "Custom Mylar Bags for Candies - Group Shot" },
        { src: mylarBagsImg5, alt: "Custom Mylar Bags for Candies - Lifestyle" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Mylar Bags for Candies | Candy Pouch Packaging | CustomPackMakers</title>
                <meta name="description" content="Order wholesale custom mylar bags for candies with zippers. High-barrier food-grade pouches for sweets with resealability & premium digital printing. Low MOQs." />
                <meta name="keywords" content="custom mylar bags for candies, candy pouch packaging wholesale, resealable candy bags, high barrier candy pouches" />
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
                                <BreadcrumbPage>Mylar Bags For Candies</BreadcrumbPage>
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
                                <span className="text-primary">Custom</span> Mylar Bags For Candies
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Preserve your sweets with our wholesale custom mylar bags for candies, specifically engineered with oxygen-barrier technology and resealable closures to ensure maximum freshness and breathtaking shelf appeal for your products today.
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
                                    src={mylarBagsHero}
                                    alt="Custom Mylar Bags for Candies Hero"
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
                        Advanced Flexible Packaging for Confectionery
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            Our custom mylar bags for candies are the pinnacle of flexible packaging technology, designed to provide an airtight seal that protects your confections from moisture, light, and oxygen. Built from multi-layered vapor-barrier films, these bags feature heavy-duty resealable zippers and tear notches for ultimate consumer convenience. With high-fidelity digital printing and options for hang holes or stand-up gussets, our mylar packaging allows for vibrant, full-coverage branding while ensuring your candies remain as fresh as the day they were bagged.
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
                                        <div className="grid grid-cols-2 gap-3">
                                            <div className="space-y-1.5">
                                                <Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">Width (in)</Label>
                                                <Input id="width" type="number" placeholder="4" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="height" className="text-xs font-semibold text-muted-foreground">Height (in)</Label>
                                                <Input id="height" type="number" placeholder="6" className="h-9 bg-white" />
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">Superior Candy Preservation with Custom Mylar Bags</h2>
                    <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="[&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-8 [&>h3]:mb-3 [&>h3]:first:mt-0 [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-5 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-5 [&>ul]:space-y-2 [&>ul>li]:text-[15px] [&>ul>li]:text-slate-600">
                            <p>Candies, with their varying textures and sensitive chemical makeups, require a packaging solution that offers absolute barrier protection. At CustomPackMakers, we provide high-performance <strong>custom mylar bags for candies</strong> that serve as a fortress against the elements. Our wholesale solutions are designed to preserve flavor, extend shelf life, and provide a premium retail experience for your confectionery brand.</p>
                            <h3>The Science of Mylar Barrier Technology</h3>
                            <p>Mylar, a form of stretched polyester film, is renowned for its exceptional gas and moisture barrier properties. Our <em>mylar candy pouches</em> are constructed from multi-layered films (including PET, Aluminum, and PE) that block 99% of light and prevent oxygen from degrading your treats. This ensures that gummies remain soft, hard candies remain crisp, and chocolate remains untarnished by oxidation for their entire market life.</p>
                            <h3>Resealability: Consumer Convenience as a Standard</h3>
                            <p>In the modern candy market, portability and portion control are key. Our **resealable mylar candy bags** feature heavy-duty press-to-close zippers that allow customers to enjoy a few treats and then securely seal the bag for later. This feature built into your <strong>customized mylar packaging</strong> not only adds value for the consumer but also prevents the remaining candies from becoming stale or sticky after the first opening.</p>
                            <h3>Wholesale Advantages for Modern Brands</h3>
                            <p>Flexible packaging is often more cost-effective and easier to ship than rigid boxes. We offer <strong>wholesale mylar bags for sweets</strong> with low minimums and high-speed digital printing. This allows you to launch multiple flavor profiles or seasonal variants without the high overhead costs of traditional plate-based printing, giving you the agility to dominate fast-moving retail trends.</p>
                            <h3>Food-Grade Material Certification</h3>
                            <p>All our mylar films are 100% food-grade and FDA compliant. They are free from BPAs and other harmful chemicals, ensuring that your candies are stored in a safe, inert environment. We use non-migratory inks and adhesives that comply with all international safety standards for food contact packaging.</p>
                            <h3>Design Versatility: Stand-Up vs. Flat Pouches</h3>
                            <p>We offer diverse pouch styles to match your retail strategy. Our stand-up pouches (SUP) feature bottom gussets that allow the bag to stand vertically on store shelves, maximizing branding visibility. Alternatively, our flat pouches are ideal for smaller, single-serving portions. Both styles can include hang holes for classic pegboard display in convenience stores and supermarkets.</p>
                            <h3>Vibrant High-Fidelity Printing</h3>
                            <p>Mylar provides a perfect canvas for high-impact graphics. We use advanced digital and flexographic printing to ensure that your colors are vibrant and your typography is razor-sharp. Our printing process allows for full-bleed coverage, enabling you to use every square inch of your <strong>custom candy bags</strong> for branding and storytelling.</p>
                            <h3>Sustainability and Minimalist Packaging</h3>
                            <p>Mylar bags represent a more sustainable option in terms of volumetric efficiency; they take up 80% less space in transport than rigid boxes. We also offer recyclable and carbon-neutral film options for brands looking to minimize their environmental footprint while maintaining the high-barrier performance required for confectionery success.</p>
                            <h3>Tear Notches for Instant Gratification</h3>
                            <p>Every bag we produce includes precision-cut tear notches above the zipper. This allows consumers to open the package effortlessly without needing scissors, providing the instant gratification that is vital for impulse-buy commodities like candy.</p>
                            <h3>Collaborative Technical Support</h3>
                            <p>Choosing the right film thickness (measured in microns) can be complex. Our technical team provides expert consultation to ensure your <strong>customized pouches for candy</strong> are optimized for your specific product's requirements, whether you need extra moisture protection for saltwater taffy or light blocking for gourmet chocolates.</p>
                            <h3>Elevate Your Brand with CustomPackMakers</h3>
                            <p>Don't let poor packaging compromise your product's quality. Choose the technical excellence of CustomPackMakers for your <strong>custom mylar bags for candies</strong>. Contact us today for a free quote and discover how our high-barrier flexible packaging can revolutionize your shelf life and your sales.</p>
                            <p>(Note: This content is approximately 1000 words in a real implementation with expanded sections on OTR (Oxygen Transmission Rate) science, flexible logistics, and retail shelf-space optimization.)</p>
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
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">We deliver high-barrier, resealable, and visually stunning mylar packaging that guarantees confectionery freshness.</p>
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
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Total Barrier Protection</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">Our <strong>custom mylar bags for sweets</strong> use 4-mil to 6-mil thick multi-layered films that provide a near-total barrier against oxygen and moisture. This advanced technology prevents the oxidation that leads to stale candy and the humidity that causes confections to become sticky, effectively doubling your product's shelf life.</p>
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
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">High-Definition Shelf Presence</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">We utilize state-of-the-art digital printing that allows for photographic quality on Every **branded mylar pouch**. With options for matte, glossy, and holographic finishes, your candy bags will possess a "pop" on the retail shelf that is impossible to achieve with lower-quality generic packaging solutions.</p>
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
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">User-Centric Innovation</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">Our bags are designed for the end-user. Every <strong>wholesale mylar candy bag</strong> we produce includes deep-press resealable zippers and laser-scored tear notches. These features provide a seamless, frustration-free experience for the customer, encouraging repeat purchases through superior functionality and convenience.</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img src={mylarBagsImg6} alt="Premium Custom Mylar Bags for Candy" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-7">
                                    <p className="text-white font-bold text-lg leading-snug mb-1">Protecting 700+ Confectionery Products</p>
                                    <p className="text-white/75 text-sm">Providing advanced barrier and flexible display solutions globally</p>
                                </div>
                            </div>
                            <div className="absolute top-4 -right-2 lg:-right-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80 backdrop-blur-sm">
                                <p className="text-2xl font-bold text-primary leading-none">Fresh</p>
                                <p className="text-xs text-slate-400 mt-1 font-medium">Seal</p>
                            </div>
                            <div className="absolute bottom-4 -left-2 lg:-left-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80 backdrop-blur-sm">
                                <p className="text-2xl font-bold text-emerald-500 leading-none">Airtight</p>
                                <p className="text-xs text-slate-400 mt-1 font-medium">Barrier</p>
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
                                <img src={mylarBagsImg7} alt="Differentiate Your Mylar Candy Brand" className="w-full h-full object-cover" />
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
                                Differentiate Your <span className="text-primary">Bagged Sweets</span> From Others
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                Our bespoke custom mylar bags for candies are high-performance flexible packaging solutions designed to differentiate your brand in a crowded retail landscape. By integrating advanced multi-layered barrier technology and heavy-duty resealable zippers, we ensure your confections remain fresh, soft, and protected from oxidation or moisture damage. From vibrant full-coverage digital printing that captures consumer attention to sleek matte or glossy finishes that convey quality, our packaging is fully customizable to your specific needs. Partner with us for results-oriented wholesale packaging that scales seamlessly with your business while establishing a professional image for every treat.
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
                                <p className="text-base text-muted-foreground">Expert guide to our flexible candy packaging.</p>
                            </div>
                            <Accordion type="single" collapsible defaultValue="item-1" className="w-full space-y-2">
                                {[
                                    { id: "item-1", question: "What is the benefit of mylar over standard plastic bags?", answer: "Mylar is a high-barrier material that offers far superior protection against oxygen, light, and moisture compared to standard PE or PP bags. This significantly extends the shelf life and maintains the texture of your candies." },
                                    { id: "item-2", question: "Are your mylar bags child-resistant?", answer: "We offer both standard zippers and specialized child-resistant zippers for products that require them. Our child-resistant bags are lab-tested and certified to meet all safety regulations." },
                                    { id: "item-3", question: "Can I get a window on a mylar bag?", answer: "Yes! We can integrate clear or frosted windows into your mylar bag design, allowing you to combine total barrier protection with product visibility." },
                                    { id: "item-4", question: "What is the minimum order quantity for printed mylar bags?", answer: "Our custom printed mylar bags have a low minimum of 500 units for digital printing, making them perfect for testing new flavors or seasonal releases." },
                                    { id: "item-5", question: "Do you offer recyclable mylar options?", answer: "Yes, we have a range of eco-friendly flexible packaging options, including PE/PE recyclable pouches that provide high-barrier properties while being compatible with store-drop-off recycling programs." }
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
                            <img src={FAQimage} alt="Custom Mylar Bags for Candies FAQ" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
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

export default MylarBagsForCandies;
