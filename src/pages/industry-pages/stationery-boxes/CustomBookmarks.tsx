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
import { RelatedProductStationery } from "@/components/RelatedProductStationery";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";

// Product Image
import bookmarksHero from "@/assets/stationery-boxes/custom-bookmarks/img-hero.png";
import bookmarks1 from "@/assets/stationery-boxes/custom-bookmarks/img-1.png";
import bookmarks2 from "@/assets/stationery-boxes/custom-bookmarks/img-2.png";
import bookmarks3 from "@/assets/stationery-boxes/custom-bookmarks/img-3.png";
import bookmarks4 from "@/assets/stationery-boxes/custom-bookmarks/img-4.png";
import bookmarks5 from "@/assets/stationery-boxes/custom-bookmarks/img-5.png";
import bookmarks6 from "@/assets/stationery-boxes/custom-bookmarks/img-whychoose.png";
import bookmarks7 from "@/assets/stationery-boxes/custom-bookmarks/img-different.png";

// FAQ Image
import FAQimage from "@/assets/FAQ-image.png";

const CustomBookmarks = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    const productImages = [
        { src: bookmarks1, alt: "Custom Bookmarks - Main View" },
        { src: bookmarks2, alt: "Custom Bookmarks - Angle View" },
        { src: bookmarks3, alt: "Custom Bookmarks - Reading Context" },
        { src: bookmarks4, alt: "Custom Bookmarks - Quality Finish" },
        { src: bookmarks5, alt: "Custom Bookmarks - Retail Setting" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Bookmarks | Printed Cardstock | CustomPackMakers</title>
                <meta name="description" content="Order custom bookmarks wholesale. Premium printed cardstock bookmarks perfectly tailored for authors, bookstores, and corporate marketing campaigns." />
                <meta name="keywords" content="custom bookmarks, printed bookmarks, wholesale cardstock bookmarks, promotional bookmarks, literary promotional items" />
                <meta property="og:title" content="Custom Bookmarks | Printed Cardstock | CustomPackMakers" />
                <meta property="og:description" content="Premium custom bookmarks tailored for authors and brands. Thick durable cardstock, striking finishes, beautiful custom printing. Get a free quote." />
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
                                    <Link to="/categories/stationery-boxes">Stationery Boxes</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Custom Bookmarks</BreadcrumbPage>
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
                                <span className="text-primary">Custom</span> Bookmarks
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Elevate your literary brand using our stunningly printed custom bookmarks. Designed with exceptionally thick premium paperboard and breathtaking specialty finishes, these miniature marketing tools powerfully capture reader attention while beautifully reinforcing essential corporate messaging.
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
                                    src={bookmarksHero}
                                    alt="Custom Bookmarks Hero"
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
                        High-Impact Branded Accessories for Literary Marketing
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            Our <strong className="text-foreground">custom bookmarks</strong> are meticulously engineered for independent authors, expansive retail bookstores, and massive corporate marketing campaigns demanding incredibly cost-effective yet exceptionally noticeable brand real estate. Crafted from remarkably dense premium paperboard stocks ranging from smooth silky matte to heavily textured uncoated linens, these highly durable promotional tools effortlessly endure repetitive daily handling without ever suddenly tearing or embarrassingly fraying along their delicate edges. Whether designing beautifully minimalist typography-focused promotional markers or incredibly vibrant full-color artistic illustrations, our <strong className="text-foreground">printed cardstock packaging</strong> delivers outstanding visual longevity alongside incredibly tactile reading gratification.
                        </p>
                        <p>
                            From standard rectangular corporate giveaways seamlessly inserted directly into wholesale shipments to completely bespoke uniquely die-cut silhouettes perfectly representing specific literary characters or massive brand icons, our <strong className="text-foreground">wholesale literary accessories</strong> perfectly address every specific modern marketing requirement. Each substantial order successfully incorporates exceptionally precise edge trimming guaranteeing completely flawless professional presentations, incredibly vibrant double-sided high-resolution printing maximizing valuable communication space, and remarkably diverse premium coatings. Elevate your promotional strategy seamlessly utilizing luxuriously thick soft-touch laminations, highly reflective precise metallic foil elements, and stunning raised UV accents, guaranteeing your <strong className="text-foreground">bespoke printed bookmarks</strong> dramatically outperform easily forgotten generic flyers instantly.
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
                                                <Input id="length" type="number" placeholder="6" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label>
                                                <Input id="width" type="number" placeholder="2" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">Thickness (pt)</Label>
                                                <Input id="depth" type="number" placeholder="18" className="h-9 bg-white" />
                                            </div>
                                        </div>

                                        <div className="space-y-1.5">
                                            <Label htmlFor="quantity" className="text-xs font-semibold text-muted-foreground">Quantity</Label>
                                            <Input id="quantity" type="number" placeholder="2500" className="h-9 bg-white" />
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
                        The Strategic Importance of Premium Bookmarks in Marketing
                    </h2>

                    <div className="h-[480px] overflow-y-auto border border-gray-200 bg-white rounded-lg shadow-sm p-8
                            [&::-webkit-scrollbar]:w-2
                            [&::-webkit-scrollbar-track]:bg-gray-100
                            [&::-webkit-scrollbar-track]:rounded-full
                            [&::-webkit-scrollbar-thumb]:bg-primary
                            [&::-webkit-scrollbar-thumb]:rounded-full">
                        <div className="
                            [&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-8 [&>h3]:mb-3 [&>h3]:first:mt-0
                            [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-slate-600 [&>p]:mb-5
                            [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-5 [&>ul]:space-y-2
                            [&>ul>li]:text-[15px] [&>ul>li]:text-slate-600">

                            <p>
                                In the highly tangible, completely intimate world of physical reading materials, promotional accessories absolutely must deliver unquestionable durability alongside stunning visual appeal simultaneously. Unlike easily discarded digital advertisements, a beautifully crafted physical bookmark fundamentally functions significantly further than merely saving a single page—it acts as an incredibly persistent, beautifully tactile daily reminder of your specific corporate messaging placed directly inside your target audience's most cherished literary escapes. To successfully capture repetitive essential consumer engagement effortlessly without ever feeling intrusive, the physical asset must feel inherently valuable. Custom printed bookmarks proudly serve as these incredibly powerful mini-billboards, definitively establishing persistent perceived value entirely regarding your vital business promotions.
                            </p>
                            <p>
                                Our custom promotional markers are intentionally optimized brilliantly capturing this exact repetitive marketing impact. Every single precisely cut edge, right from the incredibly substantial, rigid heavy cardstock effectively resisting constant physical bending to the spectacularly vivid double-sided print gracefully displaying complex serialized artwork perfectly, is expertly manufactured specifically to maximize immense visual engagement continuously. Making an intelligent calculated investment
                                in high-grade premium physical reading accessories invariably ensures you flawlessly execute incredibly memorable promotional campaigns that smoothly transform standard paper markers into fiercely collected, massively respected miniature artistic canvases instantly.
                            </p>

                            <h3>Unmatched Promotional Material Strength</h3>
                            <p>
                                A profoundly effective tangible marketing tool is fundamentally defined by its remarkably resilient, highly dependable substantial foundation. We systematically provide an expertly curated selection of premium thick cardstocks intentionally treated with gorgeous protective coatings, guaranteeing remarkable structural longevity and exceptional continuous display usage:
                            </p>
                            <ul>
                                <li><strong>Heavyweight Premium Coated Cover Stocks:</strong> Our flawlessly dense, brilliantly thick 16pt or absolutely luxurious 32pt cardstocks completely guarantee perfectly rigid physical presence preventing annoying floppy bending while ensuring your promotional tool feels unmistakably premium and expensive.</li>
                                <li><strong>Organic Uncoated & Recycled Linens:</strong> Delivering an exceptionally authentic, completely natural tactile enclosure matching classic vintage book papers beautifully, these incredibly textured paperboards promise an undeniably sophisticated classic reading experience instantly.</li>
                                <li><strong>Protective Soft-Touch & Gloss Finishes:</strong> For intensely gripped objects, our visually stunning, highly tactile exterior laminations provide a gorgeous finish whilst actively repelling unsightly skin oils without compromising extremely high-end perceived elegance.</li>
                            </ul>

                            <h3>Custom Die-Cut & Tactile Detailing</h3>
                            <p>
                                True promotional differentiation heavily relies on executing flawless, highly specific surprising physical details perfectly. We proudly offer incredibly precise custom dimensional effects that elegantly transform generic rectangles into highly coveted interactive collectibles:
                            </p>
                            <ul>
                                <li><strong>Completely Custom Die-Cut Silhouettes:</strong> strategically execute wonderfully brilliant, incredibly intricate digital contour cuts exactly matching your specific corporate logo or iconic literary characters entirely, simultaneously enabling immediate undeniable brand recognition without relying strictly on typography.</li>
                                <li><strong>Tactile Raised Spot UV Gloss:</strong> Strategically apply remarkably precise, perfectly raised clear glossy polymers completely over highly specific printed elements—providing an undeniably brilliant, incredibly satisfying textural contrast demanding continuous physical interaction instinctively.</li>
                                <li><strong>Brilliant Hot Foil Stamping Accents:</strong> Brilliantly execute insanely sharp, flawlessly applied metallic gold or reflective silver foils powerfully ensuring specific key promotional phrasing beautifully catches immediate ambient light demanding instant visual attention thoroughly.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* RELATED PRODUCTS CAROUSEL */}
            <RelatedProductStationery />

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
                        <div className="space-y-5">
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">
                                        Uncompromising Quality
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Our custom printed bookmarks are exclusively manufactured utilizing remarkably thick, high-density premium cardstock materials. We guarantee your branded reading accessories remain completely crisp, incredibly resilient, and flawlessly professional throughout their entire extended lifespan.
                                    </p>
                                </div>
                            </div>

                            <div className="w-full h-px bg-slate-100" />

                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors duration-300">
                                        <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">
                                        Tailored Functionality
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Break creative boundaries with entirely bespoke bookmark silhouettes precisely cut utilizing our advanced digital die-cutting technology. These uniquely shaped literary accessories generate massive visual intrigue while maintaining perfect functional utility perfectly marking reader pages.
                                    </p>
                                </div>
                            </div>

                            <div className="w-full h-px bg-slate-100" />

                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors duration-300">
                                        <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">
                                        Sleek Elegant Finishes
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Enhance reader engagement dramatically utilizing breathtaking tactical finishes including vivid reflective foil stamping, precise raised spot UV, and silky soft-touch laminations. We deliver unforgettable physical branding tools perfectly complementing your published literary masterpieces.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img
                                    src={bookmarks6}
                                    alt="Premium Custom Bookmarks Packaging"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-7">
                                    <p className="text-white font-bold text-lg leading-snug mb-1">
                                        Trusted by 500+ Authors
                                    </p>
                                    <p className="text-white/75 text-sm">Delivering premium printed bookmarks across North America</p>
                                </div>
                            </div>

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


            {/* DIFFERENTIATE YOUR BRAND SECTION */}
            <section className="py-10 lg:py-12 bg-white overflow-hidden relative">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="relative group">
                            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] border border-primary/20 shadow-2xl transform transition-transform duration-700 hover:scale-[1.02]">
                                <img
                                    src={bookmarks7}
                                    alt="Differentiate Your Literary Marketing"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                            </div>

                            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-60" />
                            <div className="absolute -z-10 -top-8 -right-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl opacity-60" />
                        </div>

                        <div className="space-y-6 lg:pl-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                                Differentiate Your <span className="text-primary">Publishing Brand</span> From Others
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                                At CustomPackMakers, we intimately understand that your printed bookmarks act forcefully as your brand's most critical repetitive tactile advertisement within highly competitive, deeply engaged literary spaces. To definitively ensure your promotional messages completely dominate overwhelming reader attention gracefully, we strictly deploy breathtakingly precise advanced printing presses flawlessly paired perfectly with exceptionally hefty premium cardstock engineering. Our exceedingly talented printing experts systematically innovate incredibly brilliant double-sided design applications efficiently eliminating wasted blank space entirely, exceptionally clean micro-perforated edges definitively preventing sudden embarrassing.
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
                                    We’re confident that you will love our products and service.
                                </p>
                            </div>

                            <Accordion type="single" collapsible defaultValue="item-1" className="w-full space-y-2">
                                {[
                                    {
                                        id: "item-1",
                                        question: "What specific board thickness do you recommend for durable bookmarks?",
                                        answer: "We primarily utilize exceptionally robust premium 16pt cardstock as our incredibly sturdy foundation, although we frequently recommend upgrading to our magnificently thick 32pt stocks for completely unbending, purely luxurious promotional reading accessories perfectly."
                                    },
                                    {
                                        id: "item-2",
                                        question: "Can I order bookmarks with custom die-cut shapes instead of just rectangles?",
                                        answer: "Yes, we comprehensively manufacture entirely bespoke silhouettes precisely cut using advanced digital technologies exactly matching your unique creative vision flawlessly. These highly tailored custom borders completely break mundane rectangular constraints beautifully effortlessly."
                                    },
                                    {
                                        id: "item-3",
                                        question: "Are there discounts available for massive bulk wholesale print runs?",
                                        answer: "Absolutely. We provide incredibly aggressive wholesale printing pricing specifically scaled for immense continuous marketing distributions, thoroughly ensuring you obtain magnificently vibrant promotional accessories while effectively slashing your vital ongoing corporate advertising expenditure considerably."
                                    },
                                    {
                                        id: "item-4",
                                        question: "Do you offer premium tactile finishes like raised spot UV?",
                                        answer: "Yes, we perfectly execute highly precise raised spot UV gloss directly over critical design elements entirely. This brilliantly creates an incredibly tactile 3D effect contrasting against matte backgrounds, making your branding impossible to ignore completely."
                                    },
                                    {
                                        id: "item-5",
                                        question: "Can you punch holes for attaching classic decorative tassels?",
                                        answer: "Yes, we exclusively leverage precise mechanical hole-punching prominently applied precisely where requested powerfully guaranteeing perfectly clean circular cuts ideally sized for you to quickly attach colorful decorative string tassels effortlessly completing the premium presentation."
                                    }
                                ].map((faq) => (
                                    <AccordionItem
                                        key={faq.id}
                                        value={faq.id}
                                        className="border border-slate-200 rounded-lg bg-white overflow-hidden data-[state=open]:border-primary data-[state=open]:ring-1 data-[state=open]:ring-primary/20 data-[state=open]:bg-primary/5 transition-all duration-300"
                                    >
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
                            <img
                                src={FAQimage}
                                alt="Custom Bookmarks FAQ"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
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

export default CustomBookmarks;
