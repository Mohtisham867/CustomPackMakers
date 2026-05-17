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
import { RelatedProductKraftBoxes } from "@/components/RelatedProductKraftBoxes";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";

// Images
import heroImg from "@/assets/material/kraft-boxes/kraft-sandwich-boxes-v2.webp";
import FAQimage from "@/assets/FAQ-image.webp";

const KraftSandwichBoxes = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    const productImages = [
        { src: heroImg, alt: "Kraft Sandwich Boxes - Main View" },
        { src: heroImg, alt: "Kraft Sandwich Boxes - Side Profile" },
        { src: heroImg, alt: "Kraft Sandwich Boxes - Open Content View" },
        { src: heroImg, alt: "Kraft Sandwich Boxes - Secure Closure" },
        { src: heroImg, alt: "Kraft Sandwich Boxes - Clear Window Detail" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Kraft Sandwich Boxes | Eco-Friendly Deli Packaging | CustomPackMakers</title>
                <meta name="description" content="Shop kraft sandwich boxes for your deli or bakery. Eco-friendly brown kraft paper with clear windows for fresh sandwich display. Heat-sealed and grease-resistant." />
                <meta name="keywords" content="kraft sandwich boxes, deli packaging, sandwich wedge boxes, eco-friendly food packaging, wholesale sandwich containers" />
                <meta property="og:title" content="Kraft Sandwich Boxes | Eco-Friendly Deli Packaging" />
            </Helmet>
            <Header />

            <div className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 mt-[120px] md:mt-[140px]">
                <div className="container mx-auto px-[30px] py-3">
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
                                    <Link to="/materials">Box by Materials</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link to="/box-by-material/kraft-boxes">Kraft Boxes</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Kraft Sandwich Boxes</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </div>

            <section className="py-8 bg-background">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-7 space-y-6">
                            <div className="w-20 h-1.5 bg-primary rounded-full"></div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight">
                                <span className="text-primary">Kraft</span> Sandwich Boxes
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Showcase freshness with our eco-friendly kraft sandwich wedges. Featuring clear viewing windows and grease-resistant coatings for a premium deli experience.
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
                                    src={heroImg}
                                    alt="Kraft Sandwich Boxes Hero"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-8 bg-slate-50">
                <div className="container mx-auto px-[5vw]">
                    <div className="flex items-center gap-3 mb-5">
                        <div className="w-10 h-1 bg-primary rounded-full" />
                        <span className="text-xs font-semibold tracking-widest text-primary uppercase">Product Overview</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 max-w-3xl">
                        Professional Deli Presentation Focused on Freshness and Sustainability
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            Our <strong className="text-foreground">kraft sandwich boxes</strong> are the industry standard for high-end delis, organic cafes, and specialized bakeries. These wedges are designed to hold standard and deep-fill sandwiches securely, preventing movement and maintaining the structural integrity of the food. The natural brown kraft look instantly communicates a "fresh and healthy" message to your customers, aligning your brand with premium, sustainable values.
                        </p>
                        <p>
                            We offer <strong className="text-foreground">wholesale sandwich wedge packaging</strong> equipped with large, fog-resistant transparent windows that give consumers a clear view of the fresh ingredients. Each box is lined with a high-performance grease-proof coating, ensuring that sauces and fillings don't compromise the outer packaging. With secure side-lock closures and easy-open tabs, these boxes provide a convenient and professional solution for grab-and-go food services.
                        </p>
                    </div>
                </div>
            </section>

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
                                        <div className="space-y-1.5">
                                            <Label htmlFor="size" className="text-xs font-semibold text-muted-foreground">Wedge Size</Label>
                                            <Input id="size" type="text" placeholder="Standard, Deep Fill" className="h-9 bg-white" />
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

            <TechnicalSpecsSection />

            <section className="py-8 bg-slate-50 border-t border-slate-100">
                <div className="container mx-auto px-[5vw]">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">
                        Maximizing Food Appeal with Custom Kraft Sandwich Packaging
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
                            [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-5 [&>ul>li]:text-[15px] [&>ul>li]:text-slate-600">

                            <p>
                                In the competitive world of grab-and-go dining, the presentation of your sandwiches is just as important as the quality of the ingredients themselves. Kraft sandwich boxes have become the gold standard for delis and bakeries seeking to combine a rustic, natural aesthetic with high-performance food protection. These wedge-shaped containers are engineered to showcase the product while maintaining its freshness until it reaches the consumer.
                            </p>

                            <h3>The Psychology of the Kraft Look</h3>
                            <p>
                                Consumers today equate the natural, unbleached brown of kraft paper with healthy, sustainable, and handmade food. By using kraft sandwich wedges, your brand instantly signals that it values quality and environmental responsibility. This "farm-to-table" visual language is incredibly effective in driving impulse purchases, particularly in metropolitan retail environments where customers are looking for premium, wholesome meal options.
                            </p>

                            <h3>Engineering for Freshness: Material and Coatings</h3>
                            <p>
                                A common challenge with sandwich packaging is moisture and grease. At CustomPackMakers, our kraft sandwich boxes are constructed from high-GSM food-grade kraft board that maintains its rigidity even when in contact with moist ingredients. 
                            </p>
                            <ul>
                                <li><strong>Grease-Proof Lining:</strong> The interior of each box is treated with a food-safe barrier that prevents oils from mayonnaise, meats, or dressings from seeping into the paper. This keeps the exterior of the box clean and professional-looking.</li>
                                <li><strong>Freshness Barrier:</strong> The structural design of the box minimizes air circulation around the bread, helping to prevent it from drying out while sitting on a refrigerated shelf.</li>
                                <li><strong>Sturdy Build:</strong> Our boxes are designed with secure locking tabs that won't pop open during transit, ensuring the sandwich reaches the customer exactly as it was prepared.</li>
                            </ul>

                            <h3>Visibility Matters: The Role of the Viewing Window</h3>
                            <p>
                                Transparency builds trust. Our sandwich wedges feature large, clear windows made from either PET or biodegradable PLA films. This allows customers to see the freshness of the bread and the quantity of the fillings before they buy. We use fog-resistant film to ensure that even in refrigerated displays, the product remains clearly visible without condensation clouding the view. This visual transparency is one of the most significant factors in increasing grab-and-go sales.
                            </p>

                            <h3>Customization & Branding Opportunities</h3>
                            <p>
                                While the natural kraft look is appealing on its own, adding your brand's unique logo and design takes the packaging to the next level. We offer precision printing services specifically for sandwich packaging:
                            </p>
                            <ul>
                                <li><strong>Minimalist Logo Placement:</strong> A simple black or dark green print on raw kraft creates a sophisticated, boutique feel.</li>
                                <li><strong>Full-Wrap Graphics:</strong> For larger chains, we can print detailed designs across the entire surface of the box to maximize brand recognition.</li>
                                <li><strong>Custom Die-Lines:</strong> If you have a unique sandwich shape—such as extra-long baguettes or thick-cut sourdough—we can create custom dimensions to fit your specific SKU perfectly.</li>
                            </ul>

                            <h3>Optimizing Your Operation: Flat-Pack Efficiency</h3>
                            <p>
                                Efficiency in the kitchen and storage areas is critical. Our kraft sandwich boxes are shipped flat, taking up minimal space in your storage room. They are designed with pre-scored fold lines for rapid assembly, allowing your staff to package dozens of sandwiches in minutes. The quick-lock design ensures a consistent look and feel across every unit, maintaining your brand's professional standard.
                            </p>

                            <h3>Why Order Wholesale from CustomPackMakers?</h3>
                            <p>
                                Buying sandwich packaging in bulk is the most cost-effective way to manage your food service business. We offer competitive wholesale pricing for deli operators of all sizes. By partnering with us, you ensure a consistent supply of premium, eco-friendly packaging that represents your brand flawlessly. Our rapid 8–10 day turnaround means you can react quickly to menu changes or seasonal demand peaks, keeping your shelves stocked and your food looking its absolute best.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <RelatedProductKraftBoxes />

            <section className="py-12 relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #fafafa 0%, #f4f6ff 60%, #f0fdf8 100%)' }}>
                <div className="absolute top-0 left-0 w-80 h-80 bg-primary/4 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-300/8 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl pointer-events-none" />

                <div className="container mx-auto px-[30px] relative z-10">
                    <div className="text-center mb-14">
                        <span className="inline-block text-xs font-semibold tracking-widest text-primary uppercase mb-3 bg-primary/10 px-4 py-1.5 rounded-full">Designed for delis</span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
                            Elevate Your <span className="text-primary">Deli Display</span>
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            Discover why retail food experts choose our kraft sandwich solutions to drive impulse sales.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">
                        <div className="space-y-5">
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Crystal Clear Windows</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Anti-fog film ensures your fresh ingredients are always visible and enticing, even in chilled cabinets.
                                    </p>
                                </div>
                            </div>
                            <div className="w-full h-px bg-slate-100" />
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors duration-300">
                                        <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Grease Protection</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        High-performance fat barriers prevent leaks and soggy spots, ensuring the packaging stays crisp and clean.
                                    </p>
                                </div>
                            </div>
                            <div className="w-full h-px bg-slate-100" />
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors duration-300">
                                        <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Custom Sizing</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        From single slim sandwiches to deep-fill triple stacks, we engineer the perfect fit for your menu items.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img
                                    src={heroImg}
                                    alt="Professional Deli Sandwich Packaging"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-7">
                                    <p className="text-white font-bold text-lg leading-snug mb-1">Boost Grab-and-Go Sales</p>
                                    <p className="text-white/75 text-sm">Eco-friendly presentation that builds customer trust</p>
                                </div>
                            </div>
                            <div className="absolute top-4 -right-2 lg:-right-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80 backdrop-blur-sm">
                                <p className="text-2xl font-bold text-primary leading-none">PLA</p>
                                <p className="text-xs text-slate-400 mt-1 font-medium">Window Options</p>
                            </div>
                            <div className="absolute bottom-4 -left-2 lg:-left-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80 backdrop-blur-sm">
                                <p className="text-2xl font-bold text-emerald-500 leading-none">Fast</p>
                                <p className="text-xs text-slate-400 mt-1 font-medium">Auto-Lock Assembly</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-6 bg-slate-50">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                                    Frequently Asked Questions
                                </h2>
                                <p className="text-base text-muted-foreground">
                                    Questions about our kraft sandwich packaging.
                                </p>
                            </div>
                            <Accordion type="single" collapsible defaultValue="item-1" className="w-full space-y-2">
                                {[
                                    {
                                        id: "item-1",
                                        question: "Are the sandwich boxes suitable for refrigerated displays?",
                                        answer: "Yes! Our kraft sandwich wedges are designed to withstand the cold and humid environments of refrigerated display cases. The grease-proof lining also helps prevent moisture from degrading the box."
                                    },
                                    {
                                        id: "item-2",
                                        question: "Will the window fog up in the fridge?",
                                        answer: "We use anti-fog treated PET or PLA films for our viewing windows, ensuring that they remain crystal clear even when moved from a cold fridge to a warmer retail floor."
                                    },
                                    {
                                        id: "item-3",
                                        question: "Can I order custom sizes for extra-large sandwiches?",
                                        answer: "Absolutely. We specialize in custom die-line engineering. If our standard or deep-fill sizes don't fit your bread, we can create a custom size tailored precisely to your product."
                                    },
                                    {
                                        id: "item-4",
                                        question: "Is the window material eco-friendly?",
                                        answer: "While standard windows are PET (recyclable), we offer PLA (corn-starch based) windows which are fully biodegradable and industrially compostable for brands with strict zero-waste targets."
                                    },
                                    {
                                        id: "item-5",
                                        question: "Do you offer custom branding on these boxes?",
                                        answer: "Yes, we offer full-color printing using food-safe inks. You can place your logo, nutritional information, or decorative patterns anywhere on the box."
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
                                alt="Kraft Sandwich Boxes FAQ"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default KraftSandwichBoxes;
