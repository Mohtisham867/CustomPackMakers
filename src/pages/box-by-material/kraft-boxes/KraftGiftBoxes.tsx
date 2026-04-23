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
import heroImg from "@/assets/kraft-boxes/kraft-gift-boxes-v2.webp";
import FAQimage from "@/assets/FAQ-image.png";

const KraftGiftBoxes = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    const productImages = [
        { src: heroImg, alt: "Kraft Gift Boxes - Main View" },
        { src: heroImg, alt: "Kraft Gift Boxes - Two-Piece Set" },
        { src: heroImg, alt: "Kraft Gift Boxes - Natural Texture" },
        { src: heroImg, alt: "Kraft Gift Boxes - Inside View" },
        { src: heroImg, alt: "Kraft Gift Boxes - Holiday Pack" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Kraft Gift Boxes | Eco-Friendly Gift Packaging | CustomPackMakers</title>
                <meta name="description" content="Shop custom kraft gift boxes for all occasions. Luxury eco-friendly brown paper gift boxes with premium finishes. Sustainable, durable, and fully brandable. Wholesale available." />
                <meta name="keywords" content="kraft gift boxes, custom gift packaging, eco-friendly luxury boxes, brown paper gift boxes, wholesale gift packaging" />
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
                                <BreadcrumbPage>Kraft Gift Boxes</BreadcrumbPage>
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
                                <span className="text-primary">Kraft</span> Gift Boxes
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Redefining the art of giving with sustainable luxury. Our custom kraft gift boxes combine rustic charm with premium structural integrity for an unforgettable presentation.
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
                                    alt="Kraft Gift Boxes Hero"
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
                        Thoughtful Packaging for Memorable Gifting Moments
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            Our <strong className="text-foreground">custom kraft gift boxes</strong> are designed for brands that believe the packaging is just as important as the gift inside. In a market saturated with artificial materials, the natural, unbleached texture of kraft paperboard provides a refreshing and sophisticated point of difference. Whether you're a luxury boutique, a corporate gifting agency, or an artisanal maker, these boxes offer a high-end aesthetic that aligns with modern, sustainable values.
                        </p>
                        <p>
                            We offer <strong className="text-foreground">wholesale luxury gift packaging</strong> that combines heavy-weight structural chipboard with premium kraft wraps. From classic two-piece lid-and-base sets to elegant magnetic closure designs, we provide absolute flexibility in form and function. With options for metallic foil stamping, decorative debossing, and custom-cut inserts, our kraft gift boxes turn every transaction into a ceremonial unboxing experience that customers will cherish and reuse.
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
                                        <div className="grid grid-cols-3 gap-3">
                                            <div className="space-y-1.5">
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
                        Elevating Brand Value with Premium Custom Kraft Gift Packaging
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
                                In the diverse landscape of modern commerce, gift-giving remains a powerful way for brands to build deep emotional connections with their audience. Custom kraft gift boxes have emerged as the definitive choice for businesses that want to convey a sense of "premium, natural care." By moving away from plastic-heavy containers and towards raw plant fibers, brands can communicate their environmental values while delivering a world-class unboxing experience.
                            </p>

                            <h3>The Psychological Power of the Gift Box</h3>
                            <p>
                                A well-designed gift box sets the stage for the value of the product inside. When a customer receives a high-quality, rigid kraft box, their perception of the product's worth instantly increases. The weight of the chipboard, the tactile "snap" of the lid, and the earthy, authentic scent of the paper all contribute to a sensory experience that generic packaging simply cannot provide. This "preceptual framing" is what turns a simple purchase into a loyal brand relationship.
                            </p>

                            <h3>Specialized Construction: Rigid and Reliable</h3>
                            <p>
                                At CustomPackMakers, our luxury kraft gift boxes are engineered for both beauty and protection. Most of our gift line utilizes a "rigid box" construction, where a thick, high-density chipboard core is wrapped in premium 120-150 GSM kraft stock. 
                            </p>
                            <ul>
                                <li><strong>Two-Piece Design:</strong> The classic lid and base design offers a traditional and satisfying unboxing ritual, perfect for curated gift sets.</li>
                                <li><strong>Magnetic Closure:</strong> For a more modern, tech-forward feel, our magnetic kraft boxes provide a sleek look with a high-end "click" upon closing.</li>
                                <li><strong>Collapsible Rigid Boxes:</strong> We offer a specialty hybrid design that ships flat to save you warehouse space but assembles into a fully rigid premium gift box in seconds.</li>
                            </ul>

                            <h3>Custom Printing & Finishing Techniques</h3>
                            <p>
                                Kraft paper is a remarkably versatile canvas for high-end customization. We use specialized printing processes to ensure your brand stands out:
                            </p>
                            <ul>
                                <li><strong>Metallic Foil Stamping:</strong> Nothing says luxury like gold or copper foil against a matte brown kraft background. It adds an immediate festive and premium flair to holiday gift sets.</li>
                                <li><strong>Heavy Embossing:</strong> Adding tactile depth to your brand logo or patterns makes the box feel even more artisan and "bespoke."</li>
                                <li><strong>Organic Ink Printing:</strong> We use food-safe, soy-based inks that produce rich and vibrant colors without the environmental impact of traditional petroleum-based inks.</li>
                            </ul>

                            <h3>Internal Engineering: The Power of the Insert</h3>
                            <p>
                                What's inside matters just as much as the exterior. We offer custom-designed internal inserts that hold your products perfectly in place, creating a curated and professional layout. From precision-cut EVA foam for delicate cosmetics to eco-friendly shredded kraft for a more rustic, "farm-to-table" feel, our inserts ensure that the products don't shift during shipping and look exactly as intended when the box is opened.
                            </p>

                            <h3>Sustainability: A Core Identity Asset</h3>
                            <p>
                                Choosing kraft isn't just a design choice; it's a statement of brand ethics. Our gift boxes are 100% recyclable and often sourced from upcycled or FSC-certified wood fibers. This transparency builds significant trust with modern consumers, particularly those in the wellness, organic, and artisanal sectors who are actively looking for "plastic-free" brand experiences.
                            </p>

                            <h3>Wholesale Excellence for Growing Brands</h3>
                            <p>
                                We specialize in providing custom kraft gift boxes at wholesale scales with accessible minimum order quantities. This allows boutique brands and event planners to access the same high-end manufacturing usually reserved for global retail giants. Our streamlined production process and 8–10 day turnaround ensure that you can stay ahead of seasonal gifting trends, from Christmas and Mother's Day to corporate end-of-year events.
                            </p>

                            <h3>Why Partner with CustomPackMakers?</h3>
                            <p>
                                We approach gift packaging with an obsession for detail and a passion for storytelling. Our team works with you to choose the right box style, the perfect material weight, and the most impactful printing finishes for your brand. We don't just supply boxes; we help you create unforgettable moments for your customers. Let us turn your products into gifts that keep on giving.
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
                        <span className="inline-block text-xs font-semibold tracking-widest text-primary uppercase mb-3 bg-primary/10 px-4 py-1.5 rounded-full">Art of Gifting</span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
                            Elevate the <span className="text-primary">Unboxing Moment</span>
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            Discover why the world's most thoughtful brands choose our kraft solutions for their premium gift sets.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">
                        <div className="space-y-5">
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-.856.12-1.683.342-2.466" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Luxury Material Feel</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        We use heavy-duty rigid chipboard wrapped in premium weight kraft for a sturdy and tactilely satisfying unboxing.
                                    </p>
                                </div>
                            </div>
                            <div className="w-full h-px bg-slate-100" />
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors duration-300">
                                        <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Magnetic Closure</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Optional high-quality hidden magnets provide a sleek, modern finish and a premium technical "click" experience.
                                    </p>
                                </div>
                            </div>
                            <div className="w-full h-px bg-slate-100" />
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors duration-300">
                                        <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Eco-Brand Identity</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Communicate your commitment to sustainability with packaging that is 100% recyclable and plastic-free.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img
                                    src={heroImg}
                                    alt="Luxury Custom Kraft Gift Presentation"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-7">
                                    <p className="text-white font-bold text-lg leading-snug mb-1">Empower Your Gifting Strategy</p>
                                    <p className="text-white/75 text-sm">Packaging that increases perceived value across any product range</p>
                                </div>
                            </div>
                            <div className="absolute top-4 -right-2 lg:-right-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80 backdrop-blur-sm">
                                <p className="text-2xl font-bold text-primary leading-none">FREE</p>
                                <p className="text-xs text-slate-400 mt-1 font-medium">Auto-lock Design</p>
                            </div>
                            <div className="absolute bottom-4 -left-2 lg:-left-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80 backdrop-blur-sm">
                                <p className="text-2xl font-bold text-emerald-500 leading-none">8–10</p>
                                <p className="text-xs text-slate-400 mt-1 font-medium">Day Turnaround</p>
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
                                    Common inquiries about our gift packaging solutions.
                                </p>
                            </div>
                            <Accordion type="single" collapsible defaultValue="item-1" className="w-full space-y-2">
                                {[
                                    {
                                        id: "item-1",
                                        question: "What is the difference between a standard box and a rigid gift box?",
                                        answer: "A standard box is usually made from a single sheet of cardstock and can be folded flat. A rigid gift box (also known as a setup box) is made from thick chipboard that does not fold. It offers a much heavier, premium feel and superior protection for high-value items."
                                    },
                                    {
                                        id: "item-2",
                                        question: "Can I choose different colors for the inside of the box?",
                                        answer: "Yes! While the outside is premium kraft, we can line the interior with a different colored paper—such as white, black, or even a custom printed pattern—to add extra visual interest when the lid is removed."
                                    },
                                    {
                                        id: "item-3",
                                        question: "Are these boxes suitable for heavy items like wine or glass?",
                                        answer: "Absolutely. We engineer our rigid gift boxes specifically for weight. By increasing the density of the internal chipboard core, we can create boxes that safely hold several kilograms, perfect for spirits, ceramics, or heavy skincare jars."
                                    },
                                    {
                                        id: "item-4",
                                        question: "Do you offer custom ribbon attachments?",
                                        answer: "Yes, we can provide pre-cut holes or custom slots for you to thread ribbons through, or even supply custom-printed ribbons as part of your wholesale order for a complete gift-ready solution."
                                    },
                                    {
                                        id: "item-5",
                                        question: "What is the minimum order quantity for custom gift boxes?",
                                        answer: "Our minimum order for fully customized rigid gift boxes typically starts at 500 units, allowing us to maintain competitive wholesale pricing while ensuring hand-crafted quality control."
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
                                alt="Custom Kraft Gift Boxes FAQ"
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

export default KraftGiftBoxes;
