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
import heroImg from "@/assets/kraft-boxes/kraft-jewelry-boxes-v2.webp";
import FAQimage from "@/assets/FAQ-image.png";

const KraftJewelryBoxes = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    const productImages = [
        { src: heroImg, alt: "Kraft Jewelry Boxes - Main View" },
        { src: heroImg, alt: "Kraft Jewelry Boxes - Inside View" },
        { src: heroImg, alt: "Kraft Jewelry Boxes - Luxe Look" },
        { src: heroImg, alt: "Kraft Jewelry Boxes - Detail Texture" },
        { src: heroImg, alt: "Kraft Jewelry Boxes - Multi Size" },
    ];

    return (
        <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
            <Helmet>
                <title>Custom Kraft Jewelry Boxes | Eco-Friendly Jewelry Packaging</title>
                <meta name="description" content="Shop custom kraft jewelry boxes for your brand. Sustainable, luxury-focused jewelry packaging with soft inserts and natural brown kraft paper finishes. Wholesale available." />
                <meta name="keywords" content="kraft jewelry boxes, custom jewelry packaging, eco-friendly gift boxes, brown paper jewelry boxes, wholesale kraft boxes" />
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
                                <BreadcrumbPage>Kraft Jewelry Boxes</BreadcrumbPage>
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
                                <span className="text-primary">Kraft</span> Jewelry Boxes
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-loose max-w-2xl">
                                Combine organic charm with luxury presentation. Our custom kraft jewelry boxes feature premium cards and soft protective inserts to showcase your precious items ethically.
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
                                    alt="Kraft Jewelry Boxes Hero"
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
                        Natural Elegance for Every Precious Piece
                    </h2>
                    <div className="text-muted-foreground leading-relaxed text-[15px] space-y-4 max-w-5xl">
                        <p>
                            Our <strong className="text-foreground">custom kraft jewelry boxes</strong> are designed for brands that want to unite luxury with environmental responsibility. In the jewelry world, first impressions are everything; the raw, unbleached texture of kraft paper provides a high-contrast and sophisticated backdrop for gold, silver, and gemstone products. These boxes aren't just containers—they are a reflection of your brand's commitment to quality craftsmanship and sustainable ethics.
                        </p>
                        <p>
                            We offer <strong className="text-foreground">wholesale jewelry packaging</strong> that includes high-quality foam or cotton-filled inserts to keep your products secure and scratch-free. From small ring boxes to large necklace displays, our kraft jewelry line is fully customizable with premium printing, foil stamping, and specialty textures. Elevate your unboxing experience with packaging that feels as authentic and valuable as the jewelry it protects.
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
                                                <Input id="length" type="number" placeholder="3" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="width" className="text-xs font-semibold text-muted-foreground">W (in)</Label>
                                                <Input id="width" type="number" placeholder="3" className="h-9 bg-white" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="depth" className="text-xs font-semibold text-muted-foreground">D (in)</Label>
                                                <Input id="depth" type="number" placeholder="1" className="h-9 bg-white" />
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
                        Redefining Luxury with Sustainable Kraft Jewelry Packaging
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
                                Traditionally, jewelry luxury was defined by excess—over-the-top plastics, velvets, and complex composite materials. Today, a new definition of luxury has emerged: one that prioritizes conscious sourcing, artisanal quality, and environmental respect. Custom kraft jewelry boxes sit at the intersection of this movement, offering a high-end aesthetic that aligns with the values of the modern, ethically minded consumer.
                            </p>

                            <h3>The Inherent Class of Natural Kraft</h3>
                            <p>
                                There is a timeless sophistication in the raw, unbleached brown of kraft paperboard. It provides a neutral, earthy backdrop that allows the sparkle and color of metals and gemstones to truly pop. Unlike glossy, artificial finishes, the matte texture of kraft paper feels warm and tactile to the touch. This sensory experience is a critical part of the jewelry unboxing process, conveying a sense of "hand-crafted care" and authenticity right from the moment the box is held.
                            </p>

                            <h3>Specialized Construction: Protection of Precious Items</h3>
                            <p>
                                Jewelry is inherently delicate and susceptible to scratches, tarnishing, and mechanical damage. Our kraft jewelry boxes are engineered with superior protection in mind. We use high-density rigid cardboard as the structural core, wrapped in premium kraft stock to ensure the box doesn't crush or bend.
                            </p>
                            <ul>
                                <li><strong>Protective Inserts:</strong> We offer a variety of eco-friendly inserts, including multi-density foam and natural cotton stuffing, designed to hold jewelry pieces firmly in place and prevent any decorative elements from impacting the interior walls.</li>
                                <li><strong>Tarnish-Resistant Linings:</strong> For high-end silver jewelry, we can provide specialty tarnish-resistant linings that help preserve the finish of the piece while it's in the box.</li>
                                <li><strong>Secure Two-Piece Design:</strong> The classic "lid and base" construction offers a satisfyingly snug fit that remains secure through the shipping journey.</li>
                            </ul>

                            <h3>Branding and Finishing: Creating a Luxe Identity</h3>
                            <p>
                                One of the misconceptions about kraft paper is that it's "too casual" for high-end jewelry. In reality, modern printing techniques transform kraft into a luxury canvas:
                            </p>
                            <ul>
                                <li><strong>Metallic Foil Stamping:</strong> Adding a gold, silver, or rose gold foil stamp to your logo creates a stunning contrast against the matte brown background, signaling immediate premium value.</li>
                                <li><strong>Embossing & Debossing:</strong> Adding depth to your brand's patterns or typography creates a tactile experience that customers associate with luxury brands.</li>
                                <li><strong>Spot UV Graphics:</strong> Applying localized gloss to specific design elements creates a striking play between matte and shine.</li>
                                <li><strong>Soft-Touch Coating:</strong> For the ultimate premium feel, we can apply an eco-friendly soft-touch coating that makes the kraft paper feel as smooth as silk.</li>
                            </ul>

                            <h3>Sustainability: A Non-Negotiable Brand Asset</h3>
                            <p>
                                For the modern jewelry buyer, sustainability isn't just a "nice-to-have"—it's a critical factor in their purchasing decision. Using 100% recyclable and biodegradable kraft packaging is a powerful way to build brand trust. It demonstrates that your commitment to beauty isn't at the expense of the environment. Our kraft boxes are often sourced from FSC-certified forests, ensuring that every piece of your packaging journey is ethically responsible.
                            </p>

                            <h3>Wholesale Scalability for Boutique Jewelers</h3>
                            <p>
                                Whether you're an independent artisan jeweler on Etsy or a boutique retail brand with multiple locations, consistent packaging is key to your professional identity. We specialize in providing custom kraft jewelry boxes at wholesale prices with accessible minimums. This allows you to maintain a world-class brand appearance across your entire SKU range without over-committing your budget. Our rapid production and delivery cycles mean you have the packaging support you need, exactly when you need it.
                            </p>

                            <h3>Why Choose CustomPackMakers for Your Jewelry Brand?</h3>
                            <p>
                                We approach jewelry packaging with the same precision and care that you put into your designs. Our team understands the nuances of jewelry branding—the importance of the "unveiling" moment and the need for flawless structural integrity. We work closely with you to ensure that every dimension, every print detail, and every insert material is perfectly aligned with your brand's vision. When you choose us, you're choosing a partner dedicated to making your brand unforgettable.
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
                        <span className="inline-block text-xs font-semibold tracking-widest text-primary uppercase mb-3 bg-primary/10 px-4 py-1.5 rounded-full">Sparkle with Soul</span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
                            Elevate Your <span className="text-primary">Jewelry Brand</span>
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            Discover the perfect balance of raw natural beauty and high-end luxury for your precious pieces.
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
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Eco-Luxury Materials</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        We use premium rigid chipboard wrapped in FSC-certified kraft stock for a heavy-weight feel that signaling high value.
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
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Superior Protection</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Every box comes with specialized soft-foam or cotton-filled inserts to ensure your pieces remain scratch-free and perfectly centered.
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
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Brand Customization</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        From metallic foil stamping to complex debossing, we turn a simple kraft box into an extension of your artistic vision.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="relative flex items-center justify-center py-8">
                            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                                <img
                                    src={heroImg}
                                    alt="Luxe Custom Kraft Jewelry Packaging"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-7">
                                    <p className="text-white font-bold text-lg leading-snug mb-1">Empower Your Artistry</p>
                                    <p className="text-white/75 text-sm">Ethical packaging that never compromises on glamour</p>
                                </div>
                            </div>
                            <div className="absolute top-4 -right-2 lg:-right-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80 backdrop-blur-sm">
                                <p className="text-2xl font-bold text-primary leading-none">FREE</p>
                                <p className="text-xs text-slate-400 mt-1 font-medium">Design Support</p>
                            </div>
                            <div className="absolute bottom-4 -left-2 lg:-left-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100/80 backdrop-blur-sm">
                                <p className="text-2xl font-bold text-emerald-500 leading-none">Global</p>
                                <p className="text-xs text-slate-400 mt-1 font-medium">Shipping Ready</p>
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
                                    Popular questions about our jewelry boxes.
                                </p>
                            </div>
                            <Accordion type="single" collapsible defaultValue="item-1" className="w-full space-y-2">
                                {[
                                    {
                                        id: "item-1",
                                        question: "What kind of inserts can i choose for my jewelry boxes?",
                                        answer: "We offer a wide range of eco-friendly inserts including high-density foam, cotton fill, and custom rigid card inserts. All our inserts are designed to be soft and protective, ensuring no damage to your delicate pieces."
                                    },
                                    {
                                        id: "item-2",
                                        question: "Can I print on the interior of the lid?",
                                        answer: "Yes, we can print on the interior of the lid. This is a popular way to include a personalized brand message, social media handles, or jewelry care instructions."
                                    },
                                    {
                                        id: "item-3",
                                        question: "Do you offer anti-tarnish options?",
                                        answer: "For premium orders, we can source anti-tarnish cotton and paper linings that help protect silver and other sensitive metals from oxidation while in storage."
                                    },
                                    {
                                        id: "item-4",
                                        question: "What is the smallest box size available?",
                                        answer: "We can manufacture boxes as small as 2x2x1 inches, which are perfect for single rings, small earrings, or delicate charms."
                                    },
                                    {
                                        id: "item-5",
                                        question: "Can I see a 3D digital proof before production?",
                                        answer: "Absolutely. Once your order is placed, our design team will provide you with a high-resolution digital proof to ensure the placement and sizing of your logo are exactly as you envisioned."
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
                                alt="Kraft Jewelry Boxes FAQ"
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

export default KraftJewelryBoxes;
