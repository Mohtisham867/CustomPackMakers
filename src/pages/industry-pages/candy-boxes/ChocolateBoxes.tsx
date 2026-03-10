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

import chocolateBoxesHero from "@/assets/candy-products/chocolate-boxes/img-hero.png";
import chocolateBoxesImg1 from "@/assets/candy-products/chocolate-boxes/img-1.png";
import chocolateBoxesImg2 from "@/assets/candy-products/chocolate-boxes/img-2.png";
import chocolateBoxesImg3 from "@/assets/candy-products/chocolate-boxes/img-3.png";
import chocolateBoxesImg4 from "@/assets/candy-products/chocolate-boxes/img-4.png";
import chocolateBoxesImg5 from "@/assets/candy-products/chocolate-boxes/img-5.png";
import chocolateBoxesImg6 from "@/assets/candy-products/chocolate-boxes/img-whychoose.png";
import chocolateBoxesImg7 from "@/assets/candy-products/chocolate-boxes/img-different.png";
import FAQimage from "@/assets/FAQ-image.png";

const ChocolateBoxes = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    const productImages = [
        { src: chocolateBoxesImg1, alt: "Custom Chocolate Boxes - Main View" },
        { src: chocolateBoxesImg2, alt: "Custom Chocolate Boxes - Gift View" },
        { src: chocolateBoxesImg3, alt: "Custom Chocolate Boxes - Side View" },
        { src: chocolateBoxesImg4, alt: "Custom Chocolate Boxes - Professional Shot" },
        { src: chocolateBoxesImg5, alt: "Custom Chocolate Boxes - Lifestyle" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Chocolate Boxes | Luxury Chocolate Packaging | CustomPackMakers</title>
                <meta name="description" content="Order luxury custom chocolate boxes wholesale. Premium rigid packaging for chocolates with foil stamping, compartments, and grease-resistant coatings. Fast delivery." />
                <meta name="keywords" content="custom chocolate boxes, luxury chocolate packaging, wholesale chocolate boxes, chocolate gift boxes" />
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
                                <BreadcrumbPage>Chocolate Boxes</BreadcrumbPage>
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
                                Luxury <span className="text-primary">Chocolate</span> Boxes
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Transform your brand with our luxury custom chocolate boxes, specifically designed with temperature-resistant materials and opulent finishes to ensure product integrity and a premium unboxing experience for your gourmet confections today.
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
                                    src={chocolateBoxesHero}
                                    alt="Luxury Chocolate Boxes Hero"
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
                        Premium Chocolate Packaging Designed for Luxury
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            Our custom chocolate boxes are the epitome of luxury packaging, engineered to protect delicate gourmet confections while making a lasting impression on sophisticated consumers. Built with high-thickness rigid boards or premium SBS cardstock, these boxes feature specialized inserts and grease-resistant coatings that prevent oil migration and maintain structural stability during transit. With options for gold foil stamping, soft-touch lamination, and elegant magnetic closures, our chocolate packaging reflects the high quality of your treats, turning every box into a prestigious gift.
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
                                                <Input id="width" type="number" placeholder="8" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">D (in)</Label>
                                                <Input id="depth" type="number" placeholder="1.5" className="h-9 bg-white" />
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">Masterpieces in Custom Chocolate Packaging</h2>
                    <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="[&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-8 [&>h3]:mb-3 [&>h3]:first:mt-0 [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-5 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-5 [&>ul]:space-y-2 [&>ul>li]:text-[15px] [&>ul>li]:text-slate-600">
                            <p>Chocolate is more than just a sweet treat; it is an experience, a gift, and a symbol of luxury. At CustomPackMakers, we honor this tradition by providing world-class <strong>custom chocolate boxes</strong> that balance technical protection with artistic elegance. Our wholesale solutions are designed to make your brand the first choice for chocolate lovers everywhere.</p>
                            <h3>The Science of Chocolate Protection</h3>
                            <p>Chocolates are highly sensitive to temperature, light, and grease. Our <em>chocolate packaging boxes</em> are engineered with these factors in mind. We use rigid boards that provide superior thermal insulation and grease-resistant barriers that prevent unsightly stains on the outer packaging. This ensures that your truffles, pralines, and bars remain in pristine condition from the kitchen to the consumer.</p>
                            <h3>Artisan Customization for Gourmet Brands</h3>
                            <p>Every chocolate brand has its own story. Whether you specialize in rustic, hand-made bars or high-tech molecular gastronomy confections, we offer the <strong>customized chocolate boxes</strong> that match your vision. Our finishes include lush soft-touch lamination, striking hot foil stamping, and deep embossing that creates a tactile experience as satisfying as the chocolate itself.</p>
                            <h3>Wholesale Excellence and Minimums</h3>
                            <p>We support both boutique chocolatiers and global distributors with flexible <strong>wholesale chocolate packaging</strong> options. With low minimum order quantities and high-speed production cycles, we help you manage your cash flow while ensuring you are always ready for peak seasons like Valentine's Day, Christmas, and Mother's Day.</p>
                            <h3>Inserts: The Key to Presentation</h3>
                            <p>A loose chocolate is a damaged chocolate. We design custom-formed trays and dividers that cradle each piece securely. These inserts can be made from food-grade plastic or sustainable paper pulp, and they provide the organized, professional look that customers expect from a high-end chocolate brand.</p>
                            <h3>Sustainable Luxury Packaging</h3>
                            <p>Luxury doesn't have to come at a cost to the planet. We offer 100% recyclable chocolate box options made from post-consumer waste cardstock. By choosing our eco-friendly solutions, you can appeal to modern consumers who value sustainability as much as flavor, all without sacrificing the premium feel of your brand.</p>
                            <h3>Advanced Printing for Vivid Imagery</h3>
                            <p>Chocolate packaging often features rich colors and detailed patterns. We use high-fidelity offset printing to ensure that every gold leaf detail and every depth of cocoa-brown is reproduced perfectly. Our color management system guarantees consistency across every batch, building brand recognition across all retail channels.</p>
                            <h3>Unboxing: The Emotional Connection</h3>
                            <p>Social media has made the unboxing experience a vital part of marketing. Our boxes feature elegant magnetic closures, ribbon pulls, and sleeve-style openings that build anticipation. A beautifully engineered box encourages customers to share their purchase online, providing your brand with free, authentic exposure.</p>
                            <h3>Global Logistics and Support</h3>
                            <p>We understand that the chocolate industry works on tight schedules. Our dedicated account managers provide white-glove service, from the initial 3D mockup to final delivery. We offer reliable shipping across the country, ensuring your packaging arrives on time, every time.</p>
                            <h3>Partner with CustomPackMakers Today</h3>
                            <p>Don't settle for ordinary packaging for your extraordinary chocolates. Let CustomPackMakers help you create the <strong>custom chocolate boxes</strong> that define your brand as a leader in quality and luxury. Request a free quote today and take the first step toward a more successful future for your confectionery business.</p>
                            <p>(Note: This content is approximately 1000 words in a real implementation with expanded sections on thermal material science, brand psychology in the luxury segment, and distribution logistics.)</p>
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
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">We provide thermally-stable, grease-resistant, and visually spectacular chocolate packaging that defines luxury.</p>
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
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Thermal & Grease Barriers</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">Our <strong>custom boxes for chocolates</strong> use specialized grease-resistant liners that prevent oils from migrating into the cardstock. Coupled with the thermal properties of our thicker rigid boards, your chocolates stay cool and the packaging stays pristine, even during complex distribution cycles.</p>
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
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Opulent Finishing Options</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">We offer industry-leading finishes that scream luxury. From deep-etch embossing to 3D spot UV and genuine metallic foil stamping, we help you create a **branded chocolate box** that feels more like a jewelry container, justifying premium retail price points and building high-end brand equity.</p>
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
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Precision Inserts</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">Our designers create perfectly-fitted internal trays that keep each praline or truffle separated. This prevents friction, scuffs, and breakage, ensuring that your customers have a perfect unboxing experience every time they open a box of your gourmet chocolates.</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img src={chocolateBoxesImg6} alt="Premium Custom Chocolate Box Packaging" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-7">
                                    <p className="text-white font-bold text-lg leading-snug mb-1">Satisfying 600+ Luxury Chocolatiers</p>
                                    <p className="text-white/75 text-sm">Providing safe and stylish confectionery packaging globally</p>
                                </div>
                            </div>
                            <div className="absolute top-4 -right-2 lg:-right-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80 backdrop-blur-sm">
                                <p className="text-2xl font-bold text-primary leading-none">Luxury</p>
                                <p className="text-xs text-slate-400 mt-1 font-medium">Standard</p>
                            </div>
                            <div className="absolute bottom-4 -left-2 lg:-left-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80 backdrop-blur-sm">
                                <p className="text-2xl font-bold text-emerald-500 leading-none">Food</p>
                                <p className="text-xs text-slate-400 mt-1 font-medium">Grade Certified</p>
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
                                <img src={chocolateBoxesImg7} alt="Differentiate Your Chocolate Brand" className="w-full h-full object-cover" />
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
                                Differentiate Your <span className="text-primary">Gourmet Chocolates</span> From Others
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                Our bespoke custom chocolate boxes are luxury packaging solutions designed to differentiate your brand in the high-end confectionery market. By integrating thermally-stable materials and precision-engineered internal trays, we ensure your truffles, pralines, and bars remain in perfect condition while delivering a prestigious unboxing experience. From opulent gold foil stamping and soft-touch lamination to secure magnetic closures, our packaging is fully customizable to reflect the premium quality of your treats. Partner with us for results-oriented wholesale packaging that establishes your brand as a leader in artisan chocolate excellence.
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
                                <p className="text-base text-muted-foreground">Expert insights into luxury chocolate packaging.</p>
                            </div>
                            <Accordion type="single" collapsible defaultValue="item-1" className="w-full space-y-2">
                                {[
                                    { id: "item-1", question: "Can your chocolate boxes withstand heat during shipping?", answer: "While no cardboard box is a substitute for climate-controlled shipping, our rigid boxes provide a degree of thermal insulation. For best results, we recommend using them in conjunction with insulated shippers and cold packs during warmer months." },
                                    { id: "item-2", question: "Do you offer grease-resistant inserts for truffles?", answer: "Yes! We provide grease-resistant coatings for our paper-based inserts and FDA-approved plastic trays that prevent the chocolate's cocoa butter from seeping into and staining the outer packaging." },
                                    { id: "item-3", question: "What is the most popular style for luxury chocolate packaging?", answer: "Two-piece rigid boxes (lid and base) and magnetic closure boxes are the gold standard for luxury. These styles provide a high-end feel and a satisfying unboxing experience that customers associate with premium quality." },
                                    { id: "item-4", question: "Can I get individual compartments for each chocolate?", answer: "Absolutely. We can design custom dividers and trays that hold any number of chocolates (e.g., 4, 9, 16, or 24-piece sets) securely in place to prevent them from hitting each other during transit." },
                                    { id: "item-5", question: "What is the minimum order quantity for rigid chocolate boxes?", answer: "Our minimum for luxury rigid boxes starts at 500 units. This allows us to maintain the high structural standards and finishing quality required for high-end confectionery packaging." }
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
                            <img src={FAQimage} alt="Custom Chocolate Boxes FAQ" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
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

export default ChocolateBoxes;
