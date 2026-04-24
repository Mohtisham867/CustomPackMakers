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
import heroImg from "@/assets/kraft-boxes/kraft-labels-v2.webp";
import FAQimage from "@/assets/FAQ-image.webp";

const KraftLabels = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    const productImages = [
        { src: heroImg, alt: "Kraft Labels - Main View" },
        { src: heroImg, alt: "Kraft Labels - Roll View" },
        { src: heroImg, alt: "Kraft Labels - Detail Texture" },
        { src: heroImg, alt: "Kraft Labels - On Product" },
        { src: heroImg, alt: "Kraft Labels - Sustainable Look" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Kraft Labels | Eco-Friendly Brown Paper Stickers | CustomPackMakers</title>
                <meta name="description" content="Shop custom kraft labels for your eco-friendly products. High-quality brown paper stickers with natural textures. Perfect for organic foods, artisan soaps, and boutique packaging." />
                <meta name="keywords" content="custom kraft labels, brown paper stickers, eco-friendly product labels, branded kraft stickers, wholesale kraft labeling" />
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
                                <BreadcrumbPage>Kraft Labels</BreadcrumbPage>
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
                                <span className="text-primary">Custom</span> Kraft Labels
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Complete your eco-friendly aesthetic with our premium kraft labels. Natural brown paper stickers that provide a rustic, authentic touch to any container or product.
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
                                    alt="Custom Kraft Labels Hero"
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
                        Organic Labeling for Brands that Value Authenticity
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            Our <strong className="text-foreground">custom kraft labels</strong> are the definitive choice for brands looking to unite their packaging elements under a single, sustainable aesthetic. Made from high-quality unbleached brown kraft paper, these labels offer a warm, tactical experience that plastic-based alternatives simply cannot replicate. Whether you're labeling glass jars, artisan soap boxes, or organic food containers, our kraft stickers provide a high-contrast and professional finish that speaks to your brand's commitment to nature.
                        </p>
                        <p>
                            We specialize in <strong className="text-foreground">wholesale kraft sticker production</strong>, offering a range of adhesive strengths to ensure your labels stay perfectly in place across various surfaces. From rolls for automated application to sheets for small-batch hand-application, our labels are engineered for operational flexibility. With options for eco-friendly matte finishes and vibrant organic inks, we ensure your branding is as clean and ethical as your product itself.
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
                                        <div className="grid grid-cols-2 gap-3">
                                            <div className="space-y-1.5">
                                                <Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">Width (in)</Label>
                                                <Input id="width" type="number" placeholder="3" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="height" className="text-xs font-semibold text-muted-foreground">Height (in)</Label>
                                                <Input id="height" type="number" placeholder="2" className="h-9 bg-white" />
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

            <TechnicalSpecsSection />

            <section className="py-8 bg-slate-50 border-t border-slate-100">
                <div className="container mx-auto px-[5vw]">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">
                        Transforming Product Packaging with Custom Kraft Labels
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
                                In an era where consumers are increasingly wary of synthetic, plastic-wrapped products, the materials used for your labeling have a profound impact on brand perception. Custom kraft labels offer a tactile and visual point of differentiation. They represent a return to authenticity and transparent manufacturing. For brands in the organic, artisan, and holistic sectors, a kraft label is more than just a sticker—it's a seal of quality and trust.
                            </p>

                            <h3>The Psychological Impact of Natural Brown Labels</h3>
                            <p>
                                Color and texture communicate brand values before a single word is read. The unbleached brown of kraft paper is universally associated with "natural," "recycled," and "eco-friendly" processes. When a customer picks up a product with a kraft label, their brain instantly classifies it as a more wholesome, less processed option. This psychological shortcut is incredibly powerful for driving customer preference in crowded retail aisles or online marketplaces like Etsy.
                            </p>

                            <h3>Material Versatility: From Gloss to Raw Texture</h3>
                            <p>
                                While "natural kraft" is the signature look, we offer various material finishes to suit different brand aesthetics:
                            </p>
                            <ul>
                                <li><strong>Raw Kraft:</strong> The classic, uncoated texture that provides the most authentic, rustic feel. Ideal for organic foods and handmade crafts.</li>
                                <li><strong>Matte Varnished Kraft:</strong> Adds a soft protective layer that resists smudging and water while maintaining the non-reflective, elegant kraft look.</li>
                                <li><strong>Recycled White Kraft:</strong> Offers the same organic fiber pattern but in an off-white color, perfect for brands seeking a cleaner, brighter eco-aesthetic.</li>
                                <li><strong>Heavy-Weight Cardstock Labels:</strong> Ideal for hang-tags or high-end bottle labels where a thicker, more premium feel is required.</li>
                            </ul>

                            <h3>Adhesive Technology: Staying Power for Every Surface</h3>
                            <p>
                                A label is only as good as its ability to stay attached. We utilize advanced adhesive formulations tailored to specific packaging environments:
                            </p>
                            <ul>
                                <li><strong>Permanent Bond:</strong> Designed for flat paper, cardboard, and rigid plastic surfaces, ensuring the label never peels or curls at the edges.</li>
                                <li><strong>Glass & Metal Adhesive:</strong> Specially formulated to grip smooth, non-porous surfaces like apothecary jars and aluminum tins, even in fluctuating temperatures.</li>
                                <li><strong>Removable Adhesive:</strong> Ideal for gift items or luxury candles where the customer may want to remove the labeling without leaving a sticky residue.</li>
                                <li><strong>Freezer-Grade:</strong> Essential for artisanal frozen treats or chilled deli meats where condensation and low temperatures would compromise standard glues.</li>
                            </ul>

                            <h3>Custom Printing and Graphical Clarity</h3>
                            <p>
                                One of the challenges with brown paper is maintaining high graphical contrast. At CustomPackMakers, we use specialized high-opacity inks to ensure your branding is sharp and legible:
                            </p>
                            <ul>
                                <li><strong>Rich Black Printing:</strong> Provides the highest contrast and a classic, professional look that never goes out of style.</li>
                                <li><strong>Vibrant Organic Colors:</strong> We can print full-color graphics that stand out beautifully against the earthy brown background, perfect for fruit juices or botanical skincare.</li>
                                <li><strong>White Ink Printing:</strong> A stunning, modern finish where white text is printed directly onto the brown kraft, creating a striking and unique aesthetic.</li>
                                <li><strong>Precision Die-Cutting:</strong> From standard circles and rectangles to custom brand-shaped silhouettes, we can cut your labels into any form factor.</li>
                            </ul>

                            <h3>Sustainability: A Core Brand Pillar</h3>
                            <p>
                                Today's eco-conscious buyers are looking for brands that walk the walk. By using 100% recyclable kraft paper labels with soy-based or water-based inks, you provide tangible proof of your sustainability initiatives. This transparency builds long-term brand loyalty and simplifies the recycling process for your end-consumers, closing the loop on a truly green product experience.
                            </p>

                            <h3>Why Choose Wholesale Kraft Labels from CustomPackMakers?</h3>
                            <p>
                                Ordering labels wholesale is the most cost-effective way to maintain a professional brand identity. We offer competitive pricing with industry-leading quality control, ensuring that the a thousandth label looks exactly as good as the first. Our rapid production cycles and diverse format options (rolls or sheets) mean we can support your brand's growth from initial prototypes to large-scale retail distribution.
                            </p>

                            <h3>Why Partner with Us?</h3>
                            <p>
                                We approach labeling with a commitment to both performance and aesthetics. Our team understands that a label is often the last physical touchpoint between your product and the customer. We work closely with you to select the right material, adhesive, and printing process for your specific needs. Let us help you create labels that tell your brand's story with authenticity and style.
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
                        <span className="inline-block text-xs font-semibold tracking-widest text-primary uppercase mb-3 bg-primary/10 px-4 py-1.5 rounded-full">Branding with Soul</span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
                            The Seal of <span className="text-primary">Authenticity</span>
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            Discover how our kraft labeling solutions can transform your packaging from generic to artisanal in just one step.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">
                        <div className="space-y-5">
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Eco-Textured Appeal</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        The raw, organic fiber of our kraft paper provides a tactile point of difference that plastic labels cannot match.
                                    </p>
                                </div>
                            </div>
                            <div className="w-full h-px bg-slate-100" />
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors duration-300">
                                        <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">High-Contrast Printing</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        We use specialized high-opacity inks to ensure your colors and text pop with absolute clarity against the brown background.
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
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Versatile Adhesion</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        From glass and metal to cardboard and plastic, our eco-friendly adhesives guarantee a permanent and secure bond.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img
                                    src={heroImg}
                                    alt="Professional Custom Kraft Label Branding"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-7">
                                    <p className="text-white font-bold text-lg leading-snug mb-1">Authentic Brand Messaging</p>
                                    <p className="text-white/75 text-sm">Packaging details that build consumer trust</p>
                                </div>
                            </div>
                            <div className="absolute top-4 -right-2 lg:-right-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80 backdrop-blur-sm">
                                <p className="text-2xl font-bold text-primary leading-none">FREE</p>
                                <p className="text-xs text-slate-400 mt-1 font-medium">Design Proof</p>
                            </div>
                            <div className="absolute bottom-4 -left-2 lg:-left-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80 backdrop-blur-sm">
                                <p className="text-2xl font-bold text-emerald-500 leading-none">Fast</p>
                                <p className="text-xs text-slate-400 mt-1 font-medium">Roll Production</p>
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
                                    Common questions regarding our kraft labels.
                                </p>
                            </div>
                            <Accordion type="single" collapsible defaultValue="item-1" className="w-full space-y-2">
                                {[
                                    {
                                        id: "item-1",
                                        question: "Will my colored logo look good on brown paper?",
                                        answer: "Yes! High-contrast and dark colors look best. For lighter and brighter colors, we use high-opacity inks to ensure they pop against the brown background. We provide a digital proof for your approval to ensure the results meet your expectations."
                                    },
                                    {
                                        id: "item-2",
                                        question: "Do the labels come on rolls or sheets?",
                                        answer: "We offer both! Rolls are ideal for automated high-volume application, while sheets are perfect for small-batch artisan products and hand-application."
                                    },
                                    {
                                        id: "item-3",
                                        question: "Are these labels water-resistant?",
                                        answer: "Standard kraft paper is naturally somewhat absorbent. However, for products like soaps or oils, we can apply an eco-friendly matte varnish that provides essential water and grease resistance while maintaining the natural look."
                                    },
                                    {
                                        id: "item-4",
                                        question: "Can I order custom-shaped labels?",
                                        answer: "Absolutely. We use precision die-cutting technology to cut your kraft labels into any shape—circles, ovals, stars, or even complex silhouettes that follow your brand logo's outline."
                                    },
                                    {
                                        id: "item-5",
                                        question: "Are the labels biodegradable?",
                                        answer: "Our kraft labels are made from natural wood fibers and are fully biodegradable. When paired with our eco-friendly adhesives and inks, they are an excellent choice for compostable packaging."
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
                        <div className="relative w-full max-md mx-auto aspect-square rounded-2xl overflow-hidden ">
                            <img
                                src={FAQimage}
                                alt="Custom Kraft Labels FAQ"
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

export default KraftLabels;
